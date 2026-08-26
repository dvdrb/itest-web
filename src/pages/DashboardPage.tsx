import { DomainAccuracy } from '../components/DomainAccuracy'
import type { DomainProgress } from '../lib/progress'
import type { ExamAttempt } from '../types/exam'

interface DashboardPageProps {
  domainProgress: DomainProgress[]
  attempts: ExamAttempt[]
  totalAnswered: number
  onNavigate: (page: 'practice' | 'exam' | 'notes' | 'results') => void
  onReset: () => void
}

export function DashboardPage({ domainProgress, attempts, totalAnswered, onNavigate, onReset }: DashboardPageProps) {
  const totalCorrect = domainProgress.reduce((total, entry) => total + entry.correct, 0)
  const accuracy = totalAnswered ? Math.round((totalCorrect / totalAnswered) * 100) : null
  const latestAttempt = attempts[0]
  return (
    <div className="page dashboard-page">
      <section className="hero">
        <p className="eyebrow">NETWORKING EXAM PREP</p>
        <h1>Study with<br /><em>more clarity.</em></h1>
        <p className="hero-copy">Build confidence with short practice sessions, focused weak-area drills, and one timed mock exam.</p>
        <div className="hero-actions"><button className="button primary" onClick={() => onNavigate('practice')}>Start practice <span>→</span></button><button className="button ghost" onClick={() => onNavigate('exam')}>Take full exam</button></div>
      </section>
      <section className="stats-band" aria-label="Progress summary">
        <div><span>QUESTIONS ANSWERED</span><strong>{totalAnswered}</strong><small>across all practice sessions</small></div>
        <div><span>CURRENT ACCURACY</span><strong>{accuracy === null ? '—' : `${accuracy}%`}</strong><small>based on your latest answers</small></div>
        <div><span>FULL EXAMS</span><strong>{attempts.length}</strong><small>{latestAttempt ? `last score ${latestAttempt.score}/${latestAttempt.total}` : 'not taken yet'}</small></div>
      </section>
      <section className="dashboard-grid">
        <article className="panel domain-panel"><div className="panel-heading"><div><p className="eyebrow">YOUR PROGRESS</p><h2>Accuracy by domain</h2></div><button className="text-button" onClick={() => onNavigate('practice')}>Practice weak areas →</button></div><DomainAccuracy entries={domainProgress} /></article>
        <aside className="panel missions"><p className="eyebrow">CHOOSE A SESSION</p><h2>What would help today?</h2><button onClick={() => onNavigate('practice')}><span>01</span><b>Quick practice</b><small>Get answers explained</small></button><button onClick={() => onNavigate('exam')}><span>02</span><b>Full exam</b><small>45 questions · 50 minutes</small></button><button onClick={() => onNavigate('notes')}><span>03</span><b>Study notes</b><small>Review core concepts</small></button></aside>
      </section>
      <button className="reset-button" onClick={onReset}>Reset local progress</button>
    </div>
  )
}
