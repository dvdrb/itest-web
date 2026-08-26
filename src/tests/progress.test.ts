import { describe, expect, it } from 'vitest'
import { objectiveById, objectives } from '../data/objectives'
import { studyNotes } from '../data/studyNotes'
import { questions } from '../data/questions'
import { deriveDomainProgress, updateProgress } from '../lib/progress'

describe('progress and study content', () => {
  it('derives accuracy from the latest answer rather than historical aggregate attempts', () => {
    const question = questions[0]
    const incorrect = question.options.find((option) => !question.correctOptionIds.includes(option.id))!.id
    const first = updateProgress({}, [question], { [question.id]: [incorrect] })
    const second = updateProgress(first, [question], { [question.id]: question.correctOptionIds })
    expect(second[question.id]).toEqual({ questionId: question.id, attempts: 2, lastCorrect: true, everIncorrect: true })
    const domain = deriveDomainProgress(questions, second).find((entry) => entry.domain === question.domain)!
    expect(domain).toMatchObject({ attempted: 1, correct: 1, accuracy: 100 })
  })

  it('includes one study note for each of the 21 canonical objectives', () => {
    expect(objectives).toHaveLength(21)
    expect(studyNotes).toHaveLength(21)
    expect(new Set(studyNotes.map((note) => note.objectiveId))).toEqual(new Set(objectives.map((objective) => objective.id)))
    studyNotes.forEach((note) => expect(objectiveById[note.objectiveId]).toBeDefined())
  })
})
