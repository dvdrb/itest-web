import { describe, expect, it } from 'vitest'
import { questions } from '../data/questions'
import { deriveDomainProgress, updateProgress } from '../lib/progress'

describe('progress', () => {
  it('derives accuracy from the latest answer rather than every historical answer', () => {
    const question = questions.find((item) => item.id === 'nf-01')!
    const first = updateProgress({}, [question], { 'nf-01': ['a'] })
    const second = updateProgress(first, [question], { 'nf-01': ['c'] })
    expect(second['nf-01']).toEqual({ questionId: 'nf-01', attempts: 2, lastCorrect: true, everIncorrect: true })
    const fundamentals = deriveDomainProgress(questions, second).find((item) => item.domain === 'Networking Fundamentals')!
    expect(fundamentals).toMatchObject({ attempted: 1, correct: 1, accuracy: 100 })
  })
})
