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
})
