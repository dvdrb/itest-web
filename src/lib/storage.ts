import { domains, type AnswerMap, type Domain, type ExamAttempt, type ExamSession, type PersistedState, type PracticeSession, type ProgressByQuestion, type QuestionProgress } from '../types/exam'

const storageKey = 'network-field-guide:v2'
const legacyStorageKey = 'network-field-guide:v1'

export const emptyState = (): PersistedState => ({ version: 2, progress: {}, attempts: [] })

const isRecord = (value: unknown): value is Record<string, unknown> => Boolean(value) && typeof value === 'object' && !Array.isArray(value)
const isStringArray = (value: unknown): value is string[] => Array.isArray(value) && value.every((item) => typeof item === 'string')
const isFiniteNumber = (value: unknown): value is number => typeof value === 'number' && Number.isFinite(value)

const parseAnswers = (value: unknown): AnswerMap => {
  if (!isRecord(value)) return {}
  return Object.fromEntries(Object.entries(value).filter(([id, answers]) => typeof id === 'string' && isStringArray(answers))) as AnswerMap
}

const parseDomainAccuracy = (value: unknown): Record<Domain, number | null> | undefined => {
  if (!isRecord(value) || !domains.every((domain) => value[domain] === null || isFiniteNumber(value[domain]))) return undefined
  return Object.fromEntries(domains.map((domain) => [domain, value[domain]])) as Record<Domain, number | null>
}

const parseProgress = (value: unknown): ProgressByQuestion => {
  if (!isRecord(value)) return {}
  const entries = Object.entries(value).flatMap(([id, item]) => {
    if (!isRecord(item) || item.questionId !== id || !isFiniteNumber(item.attempts) || !Number.isInteger(item.attempts) || item.attempts < 0 || typeof item.lastCorrect !== 'boolean' || typeof item.everIncorrect !== 'boolean') return []
    const attempts = item.attempts as number
    const lastCorrect = item.lastCorrect as boolean
    const everIncorrect = item.everIncorrect as boolean
    return [[id, { questionId: id, attempts, lastCorrect, everIncorrect } satisfies QuestionProgress]]
  })
  return Object.fromEntries(entries)
}

const parsePracticeSession = (value: unknown): PracticeSession | undefined => {
  if (!isRecord(value) || value.kind !== 'practice' || typeof value.id !== 'string' || typeof value.label !== 'string' || !isStringArray(value.questionIds) || !Number.isInteger(value.currentIndex) || !isStringArray(value.evaluatedQuestionIds)) return undefined
  return { kind: 'practice', id: value.id, label: value.label, questionIds: value.questionIds, currentIndex: value.currentIndex as number, answers: parseAnswers(value.answers), evaluatedQuestionIds: value.evaluatedQuestionIds }
}

const parseExamSession = (value: unknown): ExamSession | undefined => {
  if (!isRecord(value) || value.kind !== 'exam' || typeof value.id !== 'string' || !isStringArray(value.questionIds) || !Number.isInteger(value.currentIndex) || !isStringArray(value.reviewQuestionIds) || !isFiniteNumber(value.expiresAt)) return undefined
  return { kind: 'exam', id: value.id, questionIds: value.questionIds, currentIndex: value.currentIndex as number, answers: parseAnswers(value.answers), reviewQuestionIds: value.reviewQuestionIds, expiresAt: value.expiresAt as number }
}

const parseAttempt = (value: unknown): ExamAttempt | undefined => {
  if (!isRecord(value) || typeof value.id !== 'string' || !isFiniteNumber(value.completedAt) || !isStringArray(value.questionIds) || !isFiniteNumber(value.score) || !isFiniteNumber(value.total) || !isRecord(value.domainAccuracy)) return undefined
  const domainAccuracy = parseDomainAccuracy(value.domainAccuracy)
  return domainAccuracy ? { id: value.id, completedAt: value.completedAt as number, questionIds: value.questionIds, answers: parseAnswers(value.answers), score: value.score as number, total: value.total as number, domainAccuracy } : undefined
}

const parseV2State = (value: unknown): PersistedState | undefined => {
  if (!isRecord(value) || value.version !== 2 || !isRecord(value.progress) || !Array.isArray(value.attempts)) return undefined
  return { version: 2, progress: parseProgress(value.progress), attempts: value.attempts.flatMap((attempt) => { const parsed = parseAttempt(attempt); return parsed ? [parsed] : [] }), activePractice: parsePracticeSession(value.activePractice), activeExam: parseExamSession(value.activeExam) }
}

const migrateLegacyState = (value: unknown): PersistedState | undefined => {
  if (!isRecord(value) || value.version !== 1) return undefined
  return { version: 2, progress: parseProgress(value.progress), attempts: Array.isArray(value.attempts) ? value.attempts.flatMap((attempt) => { const parsed = parseAttempt(attempt); return parsed ? [parsed] : [] }) : [] }
}

export const readState = (storage: Pick<Storage, 'getItem'> = window.localStorage): PersistedState => {
  try {
    const raw = storage.getItem(storageKey)
    if (raw) return parseV2State(JSON.parse(raw)) ?? emptyState()
    const legacyRaw = storage.getItem(legacyStorageKey)
    return legacyRaw ? migrateLegacyState(JSON.parse(legacyRaw)) ?? emptyState() : emptyState()
  } catch {
    return emptyState()
  }
}

export const writeState = (state: PersistedState, storage: Pick<Storage, 'setItem'> = window.localStorage) => storage.setItem(storageKey, JSON.stringify(state))

export const clearState = (storage: Pick<Storage, 'removeItem'> = window.localStorage) => {
  storage.removeItem(storageKey)
  storage.removeItem(legacyStorageKey)
}

export const isExamExpired = (session: ExamSession, now = Date.now()) => session.expiresAt <= now

export const reconcileStateForQuestionIds = (state: PersistedState, validQuestionIds: Set<string>): PersistedState => {
  const progress = Object.fromEntries(Object.entries(state.progress ?? {}).filter(([id, item]) => validQuestionIds.has(id) && item?.questionId === id))
  const attempts = Array.isArray(state.attempts) ? state.attempts.filter((attempt) => Array.isArray(attempt.questionIds) && attempt.questionIds.length && new Set(attempt.questionIds).size === attempt.questionIds.length && attempt.questionIds.every((id) => validQuestionIds.has(id))) : []
  const isValidSession = (session: PracticeSession | ExamSession | undefined): session is PracticeSession | ExamSession => Boolean(session && Array.isArray(session.questionIds) && session.questionIds.length && new Set(session.questionIds).size === session.questionIds.length && session.questionIds.every((id) => validQuestionIds.has(id)) && Number.isInteger(session.currentIndex) && session.currentIndex >= 0 && session.currentIndex < session.questionIds.length)
  const reconcileAnswers = (answers: AnswerMap, questionIds: string[]) => Object.fromEntries(Object.entries(answers ?? {}).filter(([id, optionIds]) => questionIds.includes(id) && isStringArray(optionIds)))
  const activePractice = isValidSession(state.activePractice)
    ? { ...state.activePractice, answers: reconcileAnswers(state.activePractice.answers, state.activePractice.questionIds), evaluatedQuestionIds: state.activePractice.evaluatedQuestionIds.filter((id) => state.activePractice!.questionIds.includes(id)) }
    : undefined
  const activeExam = isValidSession(state.activeExam)
    ? { ...state.activeExam, answers: reconcileAnswers(state.activeExam.answers, state.activeExam.questionIds), reviewQuestionIds: state.activeExam.reviewQuestionIds.filter((id) => state.activeExam!.questionIds.includes(id)) }
    : undefined
  return { version: 2, progress, attempts, activePractice, activeExam }
}
