import { describe, expect, it } from 'vitest'
import { emptyState, isExamExpired, readState, writeState } from '../lib/storage'

const createMemoryStorage = () => {
  const values = new Map<string, string>()
  return { getItem: (key: string) => values.get(key) ?? null, setItem: (key: string, value: string) => values.set(key, value), removeItem: (key: string) => values.delete(key) }
}

describe('storage', () => {
  it('round-trips state and safely ignores malformed data', () => {
    const storage = createMemoryStorage()
    const state = emptyState()
    state.activeExam = { kind: 'exam', id: 'active', questionIds: ['nf-01'], currentIndex: 0, answers: {}, reviewQuestionIds: [], expiresAt: Date.now() + 1000 }
    writeState(state, storage)
    expect(readState(storage)).toEqual(state)
    expect(isExamExpired(state.activeExam!, state.activeExam!.expiresAt - 1)).toBe(false)
    expect(isExamExpired(state.activeExam!, state.activeExam!.expiresAt)).toBe(true)
    storage.setItem('network-field-guide:v1', '{broken')
    expect(readState(storage)).toEqual(emptyState())
  })
})
