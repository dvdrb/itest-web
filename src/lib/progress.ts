import { domains, type Domain, type ProgressByQuestion, type Question } from '../types/exam'

export const updateProgress = (progress: ProgressByQuestion, questions: Question[], answers: Record<string, string[]>): ProgressByQuestion => {
  const next = { ...progress }

  questions.forEach((question) => {
    const selected = answers[question.id] ?? []
    const correct = selected.length === question.correctOptionIds.length && selected.every((id) => question.correctOptionIds.includes(id))
    const previous = next[question.id]
    next[question.id] = {
      questionId: question.id,
      attempts: (previous?.attempts ?? 0) + 1,
      lastCorrect: correct,
      everIncorrect: previous?.everIncorrect || !correct,
    }
  })

  return next
}

export interface DomainProgress {
  domain: Domain
  attempted: number
  correct: number
  accuracy: number | null
}

export const deriveDomainProgress = (questions: Question[], progress: ProgressByQuestion): DomainProgress[] =>
  domains.map((domain) => {
    const domainQuestions = questions.filter((question) => question.domain === domain)
    const attemptedQuestions = domainQuestions.filter((question) => progress[question.id])
    const correct = attemptedQuestions.filter((question) => progress[question.id].lastCorrect).length
    return {
      domain,
      attempted: attemptedQuestions.length,
      correct,
      accuracy: attemptedQuestions.length ? Math.round((correct / attemptedQuestions.length) * 100) : null,
    }
  })

export const lowestAccuracyDomains = (questions: Question[], progress: ProgressByQuestion): Domain[] => {
  const attemptedDomains = deriveDomainProgress(questions, progress).filter((entry) => entry.accuracy !== null)
  if (!attemptedDomains.length) return []
  const lowest = Math.min(...attemptedDomains.map((entry) => entry.accuracy ?? 100))
  return attemptedDomains.filter((entry) => entry.accuracy === lowest).map((entry) => entry.domain)
}
