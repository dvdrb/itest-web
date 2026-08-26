import { describe, expect, it } from 'vitest'
import { objectiveById, objectives } from '../data/objectives'
import { fixtureQuestions, questions } from '../data/questions'
import { buildFullExam, buildQuickPractice, buildWeakAreaPractice } from '../lib/questionSets'
import type { ProgressByQuestion } from '../types/exam'

describe('production question bank', () => {
  it('contains exactly 145 unique questions balanced at 29 per simulator domain', () => {
    expect(questions).toHaveLength(145)
    expect(new Set(questions.map((question) => question.id)).size).toBe(145)
    expect(Object.values(questions.reduce<Record<string, number>>((counts, question) => ({ ...counts, [question.domain]: (counts[question.domain] ?? 0) + 1 }), {}))).toEqual([29, 29, 29, 29, 29])
  })

  it('preserves valid objective and option references for every question', () => {
    questions.forEach((question) => {
      expect(objectiveById[question.objectiveId]).toBeDefined()
      expect(new Set(question.options.map((option) => option.id)).size).toBe(question.options.length)
      expect(question.correctOptionIds.length).toBeGreaterThan(0)
      question.correctOptionIds.forEach((id) => expect(question.options.some((option) => option.id === id)).toBe(true))
      expect(question.explanation.trim()).not.toBe('')
    })
  })

  it('represents all required question types', () => {
    expect(new Set(questions.map((question) => question.type))).toEqual(new Set(['single-choice', 'multiple-choice', 'scenario', 'subnetting', 'command-output']))
  })

  it('keeps the supplied 45-question development fixture balanced and complete', () => {
    expect(fixtureQuestions).toHaveLength(45)
    expect(Object.values(fixtureQuestions.reduce<Record<string, number>>((counts, question) => ({ ...counts, [question.domain]: (counts[question.domain] ?? 0) + 1 }), {}))).toEqual([9, 9, 9, 9, 9])
    expect(new Set(fixtureQuestions.map((question) => question.objectiveId))).toEqual(new Set(objectives.map((objective) => objective.id)))
  })
})

describe('question-set selection', () => {
  it('builds 45 unique full-exam questions with nine from every simulator domain', () => {
    const ids = buildFullExam(questions, () => 0.25)
    expect(ids).toHaveLength(45)
    expect(new Set(ids).size).toBe(45)
    const selected = ids.map((id) => questions.find((question) => question.id === id)!)
    expect(Object.values(selected.reduce<Record<string, number>>((counts, question) => ({ ...counts, [question.domain]: (counts[question.domain] ?? 0) + 1 }), {}))).toEqual([9, 9, 9, 9, 9])
  })

  it('never duplicates questions and caps a domain practice session at its available unique questions', () => {
    const domain = 'Network Hardware'
    const ids = buildQuickPractice(questions, 30, domain, () => 0.4)
    expect(ids).toHaveLength(29)
    expect(new Set(ids).size).toBe(29)
    expect(ids.every((id) => questions.find((question) => question.id === id)?.domain === domain)).toBe(true)
  })

  it('prioritizes incorrectly answered questions in the lowest-accuracy domain', () => {
    const progress: ProgressByQuestion = {
      'ITS-NET-1.1-001': { questionId: 'ITS-NET-1.1-001', attempts: 1, lastCorrect: false, everIncorrect: true },
      'ITS-NET-1.1-002': { questionId: 'ITS-NET-1.1-002', attempts: 1, lastCorrect: true, everIncorrect: false },
      'ITS-NET-2.1-001': { questionId: 'ITS-NET-2.1-001', attempts: 1, lastCorrect: true, everIncorrect: false },
    }
    const ids = buildWeakAreaPractice(questions, progress, 10, () => 0.7)
    expect(ids[0]).toBe('ITS-NET-1.1-001')
    expect(new Set(ids).size).toBe(ids.length)
    expect(ids.every((id) => questions.find((question) => question.id === id)?.domain === 'Networking Fundamentals')).toBe(true)
  })
})
