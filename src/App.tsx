import { useCallback, useEffect, useMemo, useState } from 'react'
import { AppShell, type Page } from './components/AppShell'
import { questions } from './data/questions'
import { buildFullExam, buildQuickPractice, buildWeakAreaPractice } from './lib/questionSets'
import { deriveDomainProgress, updateProgress } from './lib/progress'
import { calculateDomainAccuracy, isMultipleAnswerQuestion, scoreQuestions } from './lib/scoring'
import { clearState, isExamExpired, readState, reconcileStateForQuestionIds, writeState } from './lib/storage'
import { DashboardPage } from './pages/DashboardPage'
import { ExamPage } from './pages/ExamPage'
import { PracticePage } from './pages/PracticePage'
import { ResultsPage } from './pages/ResultsPage'
import { StudyNotesPage } from './pages/StudyNotesPage'
import type { Domain, ExamAttempt, ExamSession, PersistedState, PracticeSession } from './types/exam'

const pageFromHash = (): Page => {
  const value = window.location.hash.replace('#', '')
  return ['dashboard', 'practice', 'exam', 'notes', 'results'].includes(value) ? value as Page : 'dashboard'
}

const createId = () => globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(16).slice(2)}`

function App() {
  const questionsById = useMemo(() => Object.fromEntries(questions.map((question) => [question.id, question])), [])
  const questionIds = useMemo(() => new Set(questions.map((question) => question.id)), [])
  const [page, setPage] = useState<Page>(pageFromHash)
  const [state, setState] = useState<PersistedState>(() => reconcileStateForQuestionIds(readState(), questionIds))
  const domainProgress = useMemo(() => deriveDomainProgress(questions, state.progress), [state.progress])

  useEffect(() => {
    const onHashChange = () => setPage(pageFromHash())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])
  useEffect(() => { writeState(state) }, [state])

  const navigate = useCallback((nextPage: Page, bypassActiveExamWarning = false) => {
    if (!bypassActiveExamWarning && state.activeExam && nextPage !== 'exam' && !window.confirm('A mock exam is still active. Its timer will continue while you navigate away. Continue?')) return
    window.location.hash = nextPage
    setPage(nextPage)
  }, [state.activeExam])

  const completeExam = useCallback((session: ExamSession) => {
    const sessionQuestions = session.questionIds.map((id) => questionsById[id]).filter(Boolean)
    const scored = scoreQuestions(sessionQuestions, session.answers)
    const attempt: ExamAttempt = {
      id: createId(),
      completedAt: Date.now(),
      questionIds: session.questionIds,
      answers: session.answers,
      score: scored.score,
      total: scored.total,
      domainAccuracy: calculateDomainAccuracy(sessionQuestions, session.answers),
    }
    setState((current) => {
      if (current.activeExam?.id !== session.id) return current
      return { ...current, progress: updateProgress(current.progress, sessionQuestions, session.answers), attempts: [attempt, ...current.attempts], activeExam: undefined }
    })
    navigate('results', true)
  }, [navigate, questionsById])

  useEffect(() => {
    if (!state.activeExam) return undefined
    if (isExamExpired(state.activeExam)) {
      completeExam(state.activeExam)
      return undefined
    }
    const timeout = window.setTimeout(() => completeExam(state.activeExam!), Math.max(0, state.activeExam.expiresAt - Date.now()))
    return () => window.clearTimeout(timeout)
  }, [state.activeExam, completeExam])

  const startPractice = (questionIds: string[], label: string) => {
    const session: PracticeSession = { kind: 'practice', id: createId(), label, questionIds, currentIndex: 0, answers: {}, evaluatedQuestionIds: [] }
    setState((current) => ({ ...current, activePractice: session }))
    navigate('practice')
  }

  const handlePracticeSelect = (optionId: string) => {
    setState((current) => {
      const session = current.activePractice
      if (!session) return current
      const question = questionsById[session.questionIds[session.currentIndex]]
      const currentAnswer = session.answers[question.id] ?? []
      const selected = isMultipleAnswerQuestion(question)
        ? (currentAnswer.includes(optionId) ? currentAnswer.filter((id) => id !== optionId) : [...currentAnswer, optionId])
        : [optionId]
      return { ...current, activePractice: { ...session, answers: { ...session.answers, [question.id]: selected } } }
    })
  }

  const submitPractice = () => {
    setState((current) => {
      const session = current.activePractice
      if (!session) return current
      const question = questionsById[session.questionIds[session.currentIndex]]
      if (session.evaluatedQuestionIds.includes(question.id)) return current
      return { ...current, progress: updateProgress(current.progress, [question], session.answers), activePractice: { ...session, evaluatedQuestionIds: [...session.evaluatedQuestionIds, question.id] } }
    })
  }

  const nextPractice = () => {
    setState((current) => {
      const session = current.activePractice
      if (!session) return current
      if (session.currentIndex === session.questionIds.length - 1) return { ...current, activePractice: undefined }
      return { ...current, activePractice: { ...session, currentIndex: session.currentIndex + 1 } }
    })
  }

  const startExam = () => {
    const session: ExamSession = { kind: 'exam', id: createId(), questionIds: buildFullExam(questions), currentIndex: 0, answers: {}, reviewQuestionIds: [], expiresAt: Date.now() + 50 * 60 * 1000 }
    setState((current) => ({ ...current, activeExam: session }))
  }

  const selectExamAnswer = (questionId: string, optionId: string) => {
    setState((current) => {
      const session = current.activeExam
      if (!session) return current
      const question = questionsById[questionId]
      const answer = session.answers[questionId] ?? []
      const selected = isMultipleAnswerQuestion(question) ? (answer.includes(optionId) ? answer.filter((id) => id !== optionId) : [...answer, optionId]) : [optionId]
      return { ...current, activeExam: { ...session, answers: { ...session.answers, [questionId]: selected } } }
    })
  }

  const jumpExam = (currentIndex: number) => setState((current) => current.activeExam ? { ...current, activeExam: { ...current.activeExam, currentIndex } } : current)
  const toggleExamReview = (questionId: string) => setState((current) => {
    const session = current.activeExam
    if (!session) return current
    const marked = session.reviewQuestionIds.includes(questionId)
    return { ...current, activeExam: { ...session, reviewQuestionIds: marked ? session.reviewQuestionIds.filter((id) => id !== questionId) : [...session.reviewQuestionIds, questionId] } }
  })

  const resetProgress = () => {
    if (!window.confirm('Reset all saved answers, sessions, and exam results from this browser?')) return
    clearState()
    setState(reconcileStateForQuestionIds(readState(), questionIds))
    navigate('dashboard')
  }

  const renderPage = () => {
    switch (page) {
      case 'practice': return <PracticePage session={state.activePractice} questionsById={questionsById} onStartQuick={(size) => startPractice(buildQuickPractice(questions, size), `${size}-question mixed set`)} onStartDomain={(domain: Domain) => startPractice(buildQuickPractice(questions, 10, domain), `${domain} drill`)} onStartWeak={() => startPractice(buildWeakAreaPractice(questions, state.progress), 'weak-area drill')} onSelect={handlePracticeSelect} onSubmit={submitPractice} onNext={nextPractice} onDiscard={() => { setState((current) => ({ ...current, activePractice: undefined })); navigate('dashboard') }} />
      case 'exam': return <ExamPage session={state.activeExam} questionsById={questionsById} onStart={startExam} onSelect={selectExamAnswer} onJump={jumpExam} onReview={toggleExamReview} onManualSubmit={() => state.activeExam && completeExam(state.activeExam)} onExpire={() => state.activeExam && completeExam(state.activeExam)} />
      case 'notes': return <StudyNotesPage />
      case 'results': return <ResultsPage attempt={state.attempts[0]} questionsById={questionsById} onPracticeWeak={() => startPractice(buildWeakAreaPractice(questions, state.progress), 'weak-area drill')} />
      default: return <DashboardPage domainProgress={domainProgress} attempts={state.attempts} totalAnswered={domainProgress.reduce((total, entry) => total + entry.attempted, 0)} onNavigate={navigate} onPracticeWeak={() => startPractice(buildWeakAreaPractice(questions, state.progress), 'weak-area drill')} onReset={resetProgress} />
    }
  }

  return <AppShell page={page} onNavigate={navigate}>{renderPage()}</AppShell>
}

export default App
