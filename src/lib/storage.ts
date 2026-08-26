import type { ExamAttempt, ExamSession, PersistedState, ProgressByQuestion } from '../types/exam'

const storageKey = 'network-field-guide:v2'
const legacyStorageKey = 'network-field-guide:v1'

export const emptyState = (): PersistedState => ({ version: 2, progress: {}, attempts: [] })

const isPersistedState = (value: unknown): value is PersistedState => {
  if (!value || typeof value !== 'object') return false
  const candidate = value as Partial<PersistedState>
  return candidate.version === 2 && Boolean(candidate.progress) && Array.isArray(candidate.attempts)
}

const migrateLegacyState = (value: unknown): PersistedState | null => {
  if (!value || typeof value !== 'object') return null
  const candidate = value as { version?: unknown; progress?: unknown; attempts?: unknown }
  if (candidate.version !== 1 || !candidate.progress || !Array.isArray(candidate.attempts)) return null
  return { version: 2, progress: candidate.progress as ProgressByQuestion, attempts: candidate.attempts as ExamAttempt[] }
}

export const readState = (storage: Pick<Storage, 'getItem'> = window.localStorage): PersistedState => {
  try {
    const raw = storage.getItem(storageKey)
    if (raw) {
      const parsed: unknown = JSON.parse(raw)
      return isPersistedState(parsed) ? parsed : emptyState()
    }
    const legacyRaw = storage.getItem(legacyStorageKey)
    return legacyRaw ? migrateLegacyState(JSON.parse(legacyRaw)) ?? emptyState() : emptyState()
  } catch {
    return emptyState()
  }
}

export const writeState = (state: PersistedState, storage: Pick<Storage, 'setItem'> = window.localStorage) => {
  storage.setItem(storageKey, JSON.stringify(state))
}

export const clearState = (storage: Pick<Storage, 'removeItem'> = window.localStorage) => {
  storage.removeItem(storageKey)
  storage.removeItem(legacyStorageKey)
}

export const isExamExpired = (session: ExamSession, now = Date.now()) => session.expiresAt <= now

export const reconcileStateForQuestionIds = (state: PersistedState, validQuestionIds: Set<string>): PersistedState => {
  const progress = Object.fromEntries(Object.entries(state.progress).filter(([id]) => validQuestionIds.has(id)))
  const attempts = state.attempts.filter((attempt) => attempt.questionIds.length && attempt.questionIds.every((id) => validQuestionIds.has(id)))
  const activePractice = state.activePractice && state.activePractice.questionIds.every((id) => validQuestionIds.has(id)) ? state.activePractice : undefined
  const activeExam = state.activeExam && state.activeExam.questionIds.every((id) => validQuestionIds.has(id)) ? state.activeExam : undefined
  return { version: 2, progress, attempts, activePractice, activeExam }
}
