import { DomainAccuracy } from '../components/DomainAccuracy'
import { ResultReview } from '../components/ResultReview'
import type { ExamAttempt, Question } from '../types/exam'

interface ResultsPageProps {
  attempt?: ExamAttempt
  questionsById: Record<string, Question>
  onPractice: () => void
}

export function ResultsPage({ attempt, questionsById, onPractice }: ResultsPageProps) {
  if (!attempt) return <div className="page empty-results"><p className="eyebrow">RESULTS</p><h1>No exam record yet.</h1><button className="button primary" onClick={onPractice}>Start practice</button></div>
  const questions = attempt.questionIds.map((id) => questionsById[id])
  const percentage = Math.round((attempt.score / attempt.total) * 100)
  const incorrect = attempt.total - attempt.score
  const accuracyEntries = Object.entries(attempt.domainAccuracy).map(([domain, accuracy]) => ({ domain: domain as keyof typeof attempt.domainAccuracy, accuracy, attempted: 9, correct: accuracy === null ? 0 : Math.round((accuracy / 100) * 9) }))
  const weakest = accuracyEntries.filter((entry) => entry.accuracy !== null).sort((left, right) => (left.accuracy ?? 100) - (right.accuracy ?? 100))[0]
  return <div className="page results-page"><section className="results-summary"><div><p className="eyebrow">EXAM RESULTS</p><h1>{percentage}%</h1><p>Completed {new Date(attempt.completedAt).toLocaleString()}</p></div><div className="result-stats"><div><span>CORRECT</span><strong>{attempt.score}</strong></div><div><span>INCORRECT</span><strong>{incorrect}</strong></div><div><span>WEAKEST DOMAIN</span><strong>{weakest?.domain ?? '—'}</strong></div></div><a className="button primary" href="#review-mistakes">Review mistakes</a></section><section className="panel"><div className="panel-heading"><div><p className="eyebrow">DOMAIN PERFORMANCE</p><h2>Where to focus next</h2></div><button className="button ghost" onClick={onPractice}>Practice weak area</button></div><DomainAccuracy entries={accuracyEntries} /></section><section className="results-review" id="review-mistakes"><p className="eyebrow">REVIEW MISTAKES</p><h2>Understand each missed question</h2><ResultReview questions={questions} answers={attempt.answers} /></section></div>
}
