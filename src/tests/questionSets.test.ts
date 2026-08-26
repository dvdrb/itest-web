import { describe, expect, it } from 'vitest'
import { objectiveById } from '../data/objectives'
import { questions } from '../data/questions'
import { buildFullExam, buildQuickPractice, buildWeakAreaPractice } from '../lib/questionSets'
import type { ProgressByQuestion } from '../types/exam'

describe('question sets', () => {
  it('uses valid objective IDs and represents every domain and question type', () => {
    expect(questions).toHaveLength(45)
    questions.forEach((question) => expect(objectiveById[question.objectiveId]?.domain).toBe(question.domain))
    expect(new Set(questions.map((question) => question.domain)).size).toBe(5)
    expect(new Set(questions.map((question) => question.type))).toEqual(new Set(['single', 'multiple', 'scenario', 'subnetting', 'command-output']))
  })

  it('builds a unique 45-question simulator exam with nine questions per domain', () => {
    const ids = buildFullExam(questions, () => 0.25)
    expect(new Set(ids).size).toBe(45)
    const chosen = ids.map((id) => questions.find((question) => question.id === id)!)
    expect(Object.values(chosen.reduce<Record<string, number>>((total, question) => ({ ...total, [question.domain]: (total[question.domain] ?? 0) + 1 }), {}))).toEqual([9, 9, 9, 9, 9])
  })

  it('builds balanced mixed practice sets', () => {
    const ids = buildQuickPractice(questions, 20, undefined, () => 0.4)
    expect(ids).toHaveLength(20)
    const selected = ids.map((id) => questions.find((question) => question.id === id)!)
    const counts = selected.reduce<Record<string, number>>((total, question) => ({ ...total, [question.domain]: (total[question.domain] ?? 0) + 1 }), {})
    expect(Object.values(counts)).toEqual([4, 4, 4, 4, 4])
  })

  it('prioritizes incorrectly answered weak-domain questions', () => {
    const progress: ProgressByQuestion = {
      'nf-01': { questionId: 'nf-01', attempts: 1, lastCorrect: false, everIncorrect: true },
      'nf-02': { questionId: 'nf-02', attempts: 1, lastCorrect: true, everIncorrect: false },
      'ni-01': { questionId: 'ni-01', attempts: 1, lastCorrect: true, everIncorrect: false },
    }
    const ids = buildWeakAreaPractice(questions, progress, 4, () => 0.7)
    expect(ids[0]).toBe('nf-01')
    expect(ids.every((id) => id.startsWith('nf-'))).toBe(true)
  })
})
