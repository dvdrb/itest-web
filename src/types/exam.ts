export const domains = [
  'Networking Fundamentals',
  'Network Infrastructures',
  'Network Hardware',
  'Protocols & Services',
  'Troubleshooting',
] as const

export type Domain = (typeof domains)[number]
export type QuestionType = 'single' | 'multiple' | 'scenario' | 'subnetting' | 'command-output'

export interface QuestionOption {
  id: string
  text: string
}

export interface Question {
  id: string
  objectiveId: string
  domain: Domain
  type: QuestionType
  prompt: string
  context?: string
  options: QuestionOption[]
  correctOptionIds: string[]
  explanation: string
}

export interface Objective {
  id: string
  domain: Domain
  title: string
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
  version: 1
  progress: ProgressByQuestion
  attempts: ExamAttempt[]
  activePractice?: PracticeSession
  activeExam?: ExamSession
}
