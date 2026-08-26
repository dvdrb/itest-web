import { DomainAccuracy } from '../components/DomainAccuracy'
import { ResultReview } from '../components/ResultReview'
import type { ExamAttempt, Question } from '../types/exam'

interface ResultsPageProps {
  attempt?: ExamAttempt
  questionsById: Record<string, Question>
  onPractice: () => void
}

export function ResultsPage({ attempt, questionsById, onPractice }: ResultsPageProps) {
  if (!attempt) return <div className="page empty-results"><p className="eyebrow">RESULTS</p><h1>No exam record yet.</h1><button className="button primary" onClick={onPractice}>Start practice →</button></div>
  const questions = attempt.questionIds.map((id) => questionsById[id])
  const percentage = Math.round((attempt.score / attempt.total) * 100)
  const accuracyEntries = Object.entries(attempt.domainAccuracy).map(([domain, accuracy]) => ({ domain: domain as keyof typeof attempt.domainAccuracy, accuracy, attempted: 9, correct: accuracy === null ? 0 : Math.round((accuracy / 100) * 9) }))
  return <div className="page results-page"><section className="results-hero"><p className="eyebrow">EXAM DEBRIEF</p><div><div><h1>{percentage}%</h1><p>{attempt.score} correct of {attempt.total} questions</p></div><p>Completed {new Date(attempt.completedAt).toLocaleString()}</p></div></section><section className="panel"><div className="panel-heading"><div><p className="eyebrow">SECTION ANALYSIS</p><h2>Simulator-domain performance</h2></div><button className="button ghost" onClick={onPractice}>Practice weak areas</button></div><DomainAccuracy entries={accuracyEntries} /></section><section className="results-review"><p className="eyebrow">REVIEW INCORRECT</p><h2>Learn from the misses</h2><ResultReview questions={questions} answers={attempt.answers} /></section></div>
}
