import { domains, type Domain, type ProgressByQuestion, type Question } from '../types/exam'
import { lowestAccuracyDomains } from './progress'

type Random = () => number

export const shuffle = <T>(items: T[], random: Random = Math.random) => {
  const shuffled = [...items]
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const nextIndex = Math.floor(random() * (index + 1))
    ;[shuffled[index], shuffled[nextIndex]] = [shuffled[nextIndex], shuffled[index]]
  }
  return shuffled
}

export const buildFullExam = (questions: Question[], random: Random = Math.random) => {
  const selected = domains.flatMap((domain) => {
    const domainQuestions = questions.filter((question) => question.domain === domain)
    if (domainQuestions.length < 9) throw new Error(`The active question bank needs at least nine questions for ${domain}.`)
    return shuffle(domainQuestions, random).slice(0, 9)
  })
  return shuffle(selected, random).map((question) => question.id)
}

const balancedSelection = (questions: Question[], size: number, random: Random) => {
  const selected: Question[] = []
  const pools = Object.fromEntries(domains.map((domain) => [domain, shuffle(questions.filter((question) => question.domain === domain), random)])) as Record<Domain, Question[]>
  while (selected.length < size && domains.some((domain) => pools[domain].length)) {
    for (const domain of domains) {
      const question = pools[domain].shift()
      if (question && selected.length < size) selected.push(question)
    }
  }
  return selected
}

export const buildQuickPractice = (questions: Question[], size: number, domain?: Domain, random: Random = Math.random) => {
  const eligible = domain ? questions.filter((question) => question.domain === domain) : questions
  const selected = domain ? shuffle(eligible, random).slice(0, Math.min(size, eligible.length)) : balancedSelection(eligible, Math.min(size, eligible.length), random)
  return selected.map((question) => question.id)
}

export const buildWeakAreaPractice = (questions: Question[], progress: ProgressByQuestion, preferredSize = 10, random: Random = Math.random) => {
  const weakDomains = lowestAccuracyDomains(questions, progress)
  if (!weakDomains.length) return balancedSelection(questions, Math.min(preferredSize, questions.length), random).map((question) => question.id)

  const priority = (question: Question) => {
    const current = progress[question.id]
    if (current?.everIncorrect) return 0
    if (!current) return 1
    return 2
  }

  const candidates = shuffle(questions.filter((question) => weakDomains.includes(question.domain)), random)
    .sort((left, right) => priority(left) - priority(right))

  return candidates.slice(0, Math.min(preferredSize, candidates.length)).map((question) => question.id)
}
