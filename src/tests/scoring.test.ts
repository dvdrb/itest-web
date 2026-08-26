import { describe, expect, it } from 'vitest'
import { questions } from '../data/questions'
import { isCorrectAnswer, scoreQuestions } from '../lib/scoring'

describe('scoring', () => {
  it('scores single and multiple-choice answers exactly', () => {
    const single = questions.find((question) => question.id === 'nf-01')!
    const multiple = questions.find((question) => question.id === 'nf-02')!
    expect(isCorrectAnswer(single, ['c'])).toBe(true)
    expect(isCorrectAnswer(single, ['a'])).toBe(false)
    expect(isCorrectAnswer(multiple, ['b', 'c'])).toBe(true)
    expect(isCorrectAnswer(multiple, ['b'])).toBe(false)
  })

  it('returns a scored question list', () => {
    const selected = questions.slice(0, 2)
    const result = scoreQuestions(selected, { 'nf-01': ['c'], 'nf-02': ['b'] })
    expect(result).toMatchObject({ score: 1, total: 2, correctQuestionIds: ['nf-01'] })
  })
})
