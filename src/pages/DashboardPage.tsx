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

  return <div className="page dashboard-page">
    <header className="dashboard-header"><div><p className="eyebrow">DASHBOARD</p><h1>ITS Networking Prep</h1><p>Review your progress and choose your next session.</p></div><div className="dashboard-actions"><button className="button primary" onClick={() => onNavigate('exam')}>Start full exam</button><button className="button ghost" onClick={() => onNavigate('practice')}>Quick practice</button></div></header>
    <section className="stats-band" aria-label="Progress summary"><div><span>LATEST EXAM SCORE</span><strong>{latestAttempt ? `${Math.round((latestAttempt.score / latestAttempt.total) * 100)}%` : '—'}</strong><small>{latestAttempt ? `${latestAttempt.score} of ${latestAttempt.total} correct` : 'No full exam completed yet'}</small></div><div><span>OVERALL ACCURACY</span><strong>{accuracy === null ? '—' : `${accuracy}%`}</strong><small>Based on your latest answer per question</small></div><div><span>QUESTIONS ANSWERED</span><strong>{totalAnswered}</strong><small>Across practice and full exams</small></div></section>
    <section className="dashboard-grid"><article className="panel domain-panel"><div className="panel-heading"><div><p className="eyebrow">DOMAIN PERFORMANCE</p><h2>Accuracy by domain</h2></div><button className="text-button" onClick={() => onNavigate('notes')}>Open study notes</button></div><DomainAccuracy entries={domainProgress} /></article><aside className="panel weak-area"><p className="eyebrow">FOCUS NEXT</p><h2>{weakest ? weakest.domain : 'Build a baseline'}</h2><p>{weakest ? `${weakest.accuracy}% current accuracy — focus this domain next.` : 'Answer a few practice questions to identify your weakest domain.'}</p><button className="button primary" onClick={onPracticeWeak}>Practice weak area</button><button className="text-button" onClick={() => onNavigate('notes')}>Study notes</button></aside></section>
    <button className="reset-button" onClick={onReset}>Reset local progress</button>
  </div>
}
