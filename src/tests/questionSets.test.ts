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
      const objective = objectiveById[question.objectiveId]
      expect(objective).toBeDefined()
      expect(question.domainId).toBe(objective.domainId)
      expect(new Set(question.options.map((option) => option.id)).size).toBe(question.options.length)
      expect(question.correctOptionIds.length).toBeGreaterThan(0)
      question.correctOptionIds.forEach((id) => expect(question.options.some((option) => option.id === id)).toBe(true))
      expect(question.explanation.trim()).not.toBe('')
    })
    expect(new Set(questions.map((question) => question.objectiveId))).toEqual(new Set(objectives.map((objective) => objective.id)))
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
    expect(new Set(selected.map((question) => question.objectiveId))).toEqual(new Set(objectives.map((objective) => objective.id)))
  })

  it('never duplicates questions and caps a domain practice session at its available unique questions', () => {
    const domain = 'Network Hardware'
    const ids = buildQuickPractice(questions, 30, domain, () => 0.4)
    expect(ids).toHaveLength(29)
    expect(new Set(ids).size).toBe(29)
    expect(ids.every((id) => questions.find((question) => question.id === id)?.domain === domain)).toBe(true)
  })

  it('prioritizes currently incorrect questions in the lowest-accuracy domain', () => {
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

  it('balances tied weak domains while keeping the required priority order', () => {
    const fundamentals = questions.filter((question) => question.domain === 'Networking Fundamentals')
    const hardware = questions.filter((question) => question.domain === 'Network Hardware')
    const progress: ProgressByQuestion = {
      [fundamentals[0].id]: { questionId: fundamentals[0].id, attempts: 1, lastCorrect: false, everIncorrect: true },
      [hardware[0].id]: { questionId: hardware[0].id, attempts: 1, lastCorrect: false, everIncorrect: true },
    }
    const ids = buildWeakAreaPractice(questions, progress, 10, () => 0.25)
    const selected = ids.map((id) => questions.find((question) => question.id === id)!)
    expect(ids.slice(0, 2)).toEqual(expect.arrayContaining([fundamentals[0].id, hardware[0].id]))
    expect(selected.filter((question) => question.domain === 'Networking Fundamentals')).toHaveLength(5)
    expect(selected.filter((question) => question.domain === 'Network Hardware')).toHaveLength(5)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('uses a balanced no-history fallback and leaves mastered former mistakes behind unanswered questions', () => {
    const fallback = buildWeakAreaPractice(questions, {}, 10, () => 0.25)
    expect(fallback).toHaveLength(10)
    expect(new Set(fallback).size).toBe(10)
    expect(new Set(fallback.map((id) => questions.find((question) => question.id === id)!.domain)).size).toBe(5)

    const fundamentals = questions.filter((question) => question.domain === 'Networking Fundamentals')
    const progress: ProgressByQuestion = {
      [fundamentals[0].id]: { questionId: fundamentals[0].id, attempts: 1, lastCorrect: false, everIncorrect: true },
      [fundamentals[1].id]: { questionId: fundamentals[1].id, attempts: 1, lastCorrect: true, everIncorrect: true },
    }
    const ids = buildWeakAreaPractice(fundamentals.slice(0, 3), progress, 3, () => 0.25)
    expect(ids[0]).toBe(fundamentals[0].id)
    expect(ids[1]).toBe(fundamentals[2].id)
    expect(ids[2]).toBe(fundamentals[1].id)
  })
})
