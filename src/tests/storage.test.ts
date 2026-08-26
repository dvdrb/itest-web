import { describe, expect, it } from 'vitest'
import { emptyState, isExamExpired, readState, reconcileStateForQuestionIds, writeState } from '../lib/storage'

const createMemoryStorage = () => {
  const values = new Map<string, string>()
  return { getItem: (key: string) => values.get(key) ?? null, setItem: (key: string, value: string) => values.set(key, value), removeItem: (key: string) => values.delete(key) }
}

describe('storage', () => {
  it('round-trips v2 state and keeps absolute exam expiry behavior', () => {
    const storage = createMemoryStorage()
    const state = emptyState()
    state.activeExam = { kind: 'exam', id: 'active', questionIds: ['ITS-NET-1.1-001'], currentIndex: 0, answers: {}, reviewQuestionIds: [], expiresAt: 2000 }
    writeState(state, storage)
    expect(readState(storage)).toEqual(state)
    expect(isExamExpired(state.activeExam, 1999)).toBe(false)
    expect(isExamExpired(state.activeExam, 2000)).toBe(true)
  })

  it('migrates compatible v1 progress while discarding active development sessions and unknown IDs', () => {
    const storage = createMemoryStorage()
    storage.setItem('network-field-guide:v1', JSON.stringify({ version: 1, progress: { 'ITS-NET-1.1-001': { questionId: 'ITS-NET-1.1-001', attempts: 1, lastCorrect: true, everIncorrect: false }, 'old-fixture-id': { questionId: 'old-fixture-id', attempts: 1, lastCorrect: false, everIncorrect: true } }, attempts: [], activeExam: { id: 'old' } }))
    const migrated = reconcileStateForQuestionIds(readState(storage), new Set(['ITS-NET-1.1-001']))
    expect(migrated.version).toBe(2)
    expect(migrated.progress).toHaveProperty('ITS-NET-1.1-001')
    expect(migrated.progress).not.toHaveProperty('old-fixture-id')
    expect(migrated.activeExam).toBeUndefined()
  })

  it('discards malformed v2 records and invalid session fragments without crashing', () => {
    const storage = createMemoryStorage()
    storage.setItem('network-field-guide:v2', JSON.stringify({
      version: 2,
      progress: {
        valid: { questionId: 'valid', attempts: 2, lastCorrect: true, everIncorrect: true },
        invalid: { questionId: 'invalid', attempts: 'two', lastCorrect: true, everIncorrect: false },
      },
      attempts: [{ id: 'bad-attempt', completedAt: 1, questionIds: 'not-an-array', score: 0, total: 1, domainAccuracy: {} }],
      activePractice: { kind: 'practice', id: 'bad-practice', label: 'Broken', questionIds: ['valid'], currentIndex: 1, answers: { valid: 'not-an-array' }, evaluatedQuestionIds: [] },
      activeExam: { kind: 'exam', id: 'bad-exam', questionIds: ['valid', 'valid'], currentIndex: 0, answers: { valid: ['A'] }, reviewQuestionIds: [], expiresAt: 1000 },
    }))
    const recovered = reconcileStateForQuestionIds(readState(storage), new Set(['valid']))
    expect(recovered.progress).toEqual({ valid: { questionId: 'valid', attempts: 2, lastCorrect: true, everIncorrect: true } })
    expect(recovered.attempts).toEqual([])
    expect(recovered.activePractice).toBeUndefined()
    expect(recovered.activeExam).toBeUndefined()
  })
})
