import type { AnswerMap, Domain, Question } from '../types/exam'

export const normalizeAnswer = (answer: string[]) => [...answer].sort()

export const isCorrectAnswer = (question: Question, selectedOptionIds: string[] = []) => {
  const expected = normalizeAnswer(question.correctOptionIds)
  const actual = normalizeAnswer(selectedOptionIds)
  return expected.length === actual.length && expected.every((optionId, index) => optionId === actual[index])
}

export const scoreQuestions = (questions: Question[], answers: AnswerMap) => {
  const correctQuestionIds = questions
    .filter((question) => isCorrectAnswer(question, answers[question.id]))
    .map((question) => question.id)

  return { score: correctQuestionIds.length, total: questions.length, correctQuestionIds }
}

export const calculateDomainAccuracy = (questions: Question[], answers: AnswerMap): Record<Domain, number | null> => {
  const byDomain = {} as Record<Domain, number | null>
  const domains = [...new Set(questions.map((question) => question.domain))]

  domains.forEach((domain) => {
    const domainQuestions = questions.filter((question) => question.domain === domain)
    byDomain[domain] = domainQuestions.length
      ? Math.round((domainQuestions.filter((question) => isCorrectAnswer(question, answers[question.id])).length / domainQuestions.length) * 100)
      : null
  })

  return byDomain
}
