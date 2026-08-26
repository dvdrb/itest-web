import { describe, expect, it } from 'vitest'
import { questions } from '../data/questions'
import { isCorrectAnswer, isMultipleAnswerQuestion, scoreQuestions } from '../lib/scoring'

describe('scoring', () => {
  it('scores single-choice answers exactly', () => {
    const question = questions.find((item) => item.type === 'single-choice')!
    expect(isCorrectAnswer(question, question.correctOptionIds)).toBe(true)
    expect(isCorrectAnswer(question, [question.options.find((option) => !question.correctOptionIds.includes(option.id))!.id])).toBe(false)
  })

  it('scores multiple-choice answers exactly', () => {
    const question = questions.find((item) => item.type === 'multiple-choice')!
    expect(isCorrectAnswer(question, [...question.correctOptionIds].reverse())).toBe(true)
    expect(isCorrectAnswer(question, [question.correctOptionIds[0]])).toBe(false)
  })

  it('uses correct-option cardinality, not content type, for selection mechanics', () => {
    questions.forEach((question) => expect(isMultipleAnswerQuestion(question)).toBe(question.correctOptionIds.length > 1))
    const singleAnswerScenario = { ...questions.find((item) => item.correctOptionIds.length === 1)!, type: 'scenario' as const }
    const multipleAnswerCommand = { ...questions.find((item) => item.correctOptionIds.length > 1)!, type: 'command-output' as const }
    expect(isMultipleAnswerQuestion(singleAnswerScenario)).toBe(false)
    expect(isMultipleAnswerQuestion(multipleAnswerCommand)).toBe(true)
  })

  it('returns a complete score summary', () => {
    const selected = questions.slice(0, 2)
    const result = scoreQuestions(selected, { [selected[0].id]: selected[0].correctOptionIds, [selected[1].id]: [] })
    expect(result).toMatchObject({ score: 1, total: 2, correctQuestionIds: [selected[0].id] })
  })
})
