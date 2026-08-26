export const domains = [
  'Networking Fundamentals',
  'Network Infrastructures',
  'Network Hardware',
  'Protocols and Services',
  'Troubleshooting',
] as const

export type Domain = (typeof domains)[number]
export type DomainId = '1' | '2' | '3' | '4' | '5'
export type Difficulty = 'easy' | 'medium' | 'hard'
export type QuestionType = 'single-choice' | 'multiple-choice' | 'scenario' | 'subnetting' | 'command-output'

export interface QuestionOption {
  id: string
  text: string
}

export interface Question {
  id: string
  objectiveId: string
  domainId: DomainId
  domain: Domain
  type: QuestionType
  difficulty: Difficulty
  prompt: string
  context?: string
  options: QuestionOption[]
  correctOptionIds: string[]
  explanation: string
  distractorExplanations: Record<string, string>
  tags: string[]
  sourceRefs: string[]
}

export interface Objective {
  id: string
  domainId: DomainId
  domain: Domain
  title: string
  topics: string[]
}

export interface QuestionProgress {
  questionId: string
  attempts: number
  lastCorrect: boolean
  everIncorrect: boolean
}

export type ProgressByQuestion = Record<string, QuestionProgress>

export interface AnswerMap {
  [questionId: string]: string[]
}

export interface PracticeSession {
  kind: 'practice'
  id: string
  label: string
  questionIds: string[]
  currentIndex: number
  answers: AnswerMap
  evaluatedQuestionIds: string[]
}

export interface ExamSession {
  kind: 'exam'
  id: string
  questionIds: string[]
  currentIndex: number
  answers: AnswerMap
  reviewQuestionIds: string[]
  expiresAt: number
}

export interface ExamAttempt {
  id: string
  completedAt: number
  questionIds: string[]
  answers: AnswerMap
  score: number
  total: number
  domainAccuracy: Record<Domain, number | null>
}

export interface PersistedState {
  version: 2
  progress: ProgressByQuestion
  attempts: ExamAttempt[]
  activePractice?: PracticeSession
  activeExam?: ExamSession
}
