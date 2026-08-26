import type { ExamSession, PersistedState } from '../types/exam'

const storageKey = 'network-field-guide:v1'

export const emptyState = (): PersistedState => ({ version: 1, progress: {}, attempts: [] })

const isPersistedState = (value: unknown): value is PersistedState => {
  if (!value || typeof value !== 'object') return false
  const candidate = value as Partial<PersistedState>
  return candidate.version === 1 && Boolean(candidate.progress) && Array.isArray(candidate.attempts)
}

export const readState = (storage: Pick<Storage, 'getItem'> = window.localStorage): PersistedState => {
  try {
    const raw = storage.getItem(storageKey)
    if (!raw) return emptyState()
    const parsed: unknown = JSON.parse(raw)
    return isPersistedState(parsed) ? parsed : emptyState()
  } catch {
    return emptyState()
  }
}

export const writeState = (state: PersistedState, storage: Pick<Storage, 'setItem'> = window.localStorage) => {
  storage.setItem(storageKey, JSON.stringify(state))
}

export const clearState = (storage: Pick<Storage, 'removeItem'> = window.localStorage) => storage.removeItem(storageKey)

export const isExamExpired = (session: ExamSession, now = Date.now()) => session.expiresAt <= now
