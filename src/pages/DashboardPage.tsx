import { DomainAccuracy } from '../components/DomainAccuracy'
import type { DomainProgress } from '../lib/progress'
import type { ExamAttempt } from '../types/exam'

interface DashboardPageProps {
  domainProgress: DomainProgress[]
  attempts: ExamAttempt[]
  totalAnswered: number
  onNavigate: (page: 'practice' | 'exam' | 'notes' | 'results') => void
  onPracticeWeak: () => void
  onReset: () => void
}

export function DashboardPage({ domainProgress, attempts, totalAnswered, onNavigate, onPracticeWeak, onReset }: DashboardPageProps) {
  const totalCorrect = domainProgress.reduce((total, entry) => total + entry.correct, 0)
  const accuracy = totalAnswered ? Math.round((totalCorrect / totalAnswered) * 100) : null
  const latestAttempt = attempts[0]
  const weakest = domainProgress.filter((entry) => entry.accuracy !== null).sort((left, right) => (left.accuracy ?? 100) - (right.accuracy ?? 100))[0]
  const isFirstRun = totalAnswered === 0 && attempts.length === 0

  if (isFirstRun) {
    return <div className="page dashboard-page first-run-dashboard">
      <header className="first-run-header"><p className="eyebrow">DASHBOARD</p><h1>ITS Networking Prep</h1><p>Prepare with mock exams, targeted practice, and complete objective-aligned study notes.</p></header>
      <section className="first-run-options" aria-label="Choose how to begin">
        <article className="panel first-run-option recommended-option"><p className="eyebrow">RECOMMENDED FIRST STEP</p><h2>Mock Exam</h2><p>45 questions · 50 minutes · Results and weak areas shown after submission.</p><button className="button primary" onClick={() => onNavigate('exam')}>Start Mock Exam</button></article>
        <article className="panel first-run-option"><p className="eyebrow">PRACTICE QUESTIONS</p><h2>Practice Questions</h2><p>Short practice sessions with immediate answers and explanations.</p><button className="button ghost" onClick={() => onNavigate('practice')}>Start Practice</button></article>
        <article className="panel first-run-option"><p className="eyebrow">STUDY NOTES</p><h2>Study Notes</h2><p>Review all five domains and 21 exam objectives, including the final cram sheet.</p><button className="button ghost" onClick={() => onNavigate('notes')}>Study Notes</button></article>
      </section>
      <p className="first-run-helper">Not sure where to start? Take the mock exam first. Your results will identify what to study next.</p>
    </div>
  }

  return <div className="page dashboard-page">
    <header className="dashboard-header"><div><p className="eyebrow">DASHBOARD</p><h1>ITS Networking Prep</h1><p>Review your progress and choose your next session.</p></div><div className="dashboard-actions"><button className="button primary" onClick={() => onNavigate('exam')}>Start Mock Exam</button><button className="button ghost" onClick={() => onNavigate('practice')}>Practice Questions</button></div></header>
    <section className="stats-band" aria-label="Progress summary"><div><span>LATEST EXAM SCORE</span><strong>{latestAttempt ? `${Math.round((latestAttempt.score / latestAttempt.total) * 100)}%` : '—'}</strong><small>{latestAttempt ? `${latestAttempt.score} of ${latestAttempt.total} correct` : 'No mock exam completed yet'}</small></div><div><span>OVERALL ACCURACY</span><strong>{accuracy === null ? '—' : `${accuracy}%`}</strong><small>Based on your latest answer per question</small></div><div><span>QUESTIONS ANSWERED</span><strong>{totalAnswered}</strong><small>Across practice and mock exams</small></div></section>
    <section className="dashboard-grid"><article className="panel domain-panel"><div className="panel-heading"><div><p className="eyebrow">DOMAIN PERFORMANCE</p><h2>Accuracy by domain</h2></div><button className="text-button" onClick={() => onNavigate('notes')}>Open study notes</button></div><DomainAccuracy entries={domainProgress} /></article><aside className="panel weak-area"><p className="eyebrow">FOCUS NEXT</p><h2>{weakest ? weakest.domain : 'Build a baseline'}</h2><p>{weakest ? `${weakest.accuracy}% current accuracy — focus this domain next.` : 'Answer a few practice questions to identify your weakest domain.'}</p><button className="button primary" onClick={onPracticeWeak}>Practice weak area</button><button className="text-button" onClick={() => onNavigate('notes')}>Study notes</button></aside></section>
    <button className="reset-button" onClick={onReset}>Reset local progress</button>
  </div>
}
