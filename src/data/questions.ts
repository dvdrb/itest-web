import { objectives } from './objectives'
import { fixtureQuestions as sourceFixtureQuestions } from './content/certiport-its-networking-content/questions.fixture'
import { productionQuestions as sourceProductionQuestions } from './content/certiport-its-networking-content/questions.production'
import type { PrepQuestion } from './content/certiport-its-networking-content/contentTypes'
import type { Domain, Question } from '../types/exam'

const domainById = Object.fromEntries(objectives.map((objective) => [objective.domainId, objective.domain])) as Record<string, Domain>

const addDomainLabel = (question: PrepQuestion): Question => ({
  ...question,
  domain: domainById[question.domainId],
})

export const productionQuestions: Question[] = (sourceProductionQuestions as unknown as PrepQuestion[]).map(addDomainLabel)
export const fixtureQuestions: Question[] = (sourceFixtureQuestions as unknown as PrepQuestion[]).map(addDomainLabel)
export const questions = productionQuestions
