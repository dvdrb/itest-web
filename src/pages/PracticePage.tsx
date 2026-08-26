import { QuestionCard } from '../components/QuestionCard'
import { domains, type Domain, type PracticeSession, type Question } from '../types/exam'

interface PracticePageProps {
  session?: PracticeSession
  questionsById: Record<string, Question>
  onStartQuick: (size: number) => void
  onStartDomain: (domain: Domain) => void
  onStartWeak: () => void
  onSelect: (optionId: string) => void
  onSubmit: () => void
  onNext: () => void
  onDiscard: () => void
}

export function PracticePage({ session, questionsById, onStartQuick, onStartDomain, onStartWeak, onSelect, onSubmit, onNext, onDiscard }: PracticePageProps) {
  if (!session) return <div className="page practice-setup"><p className="eyebrow">PRACTICE</p><h1>Learn one<br /><em>question at a time.</em></h1><p>Choose a short set, target a topic, or focus on the domain where your latest answers need the most work.</p><section className="practice-options"><article><span>MIXED PRACTICE</span><h2>Choose a set length</h2><p>Answers are explained immediately before you move forward.</p><div className="button-row">{[10, 20, 30].map((size) => <button className="button primary" key={size} onClick={() => onStartQuick(size)}>{size} questions</button>)}</div></article><article><span>PERSONALIZED</span><h2>Practice your weak area</h2><p>Prioritizes missed and unseen questions from your lowest current domain.</p><button className="button accent" onClick={onStartWeak}>Start weak-area practice →</button></article></section><section className="domain-drills"><span>PRACTICE BY DOMAIN</span><div>{domains.map((domain) => <button key={domain} onClick={() => onStartDomain(domain)}>{domain}<small>9-question fixture</small></button>)}</div></section></div>

  const question = questionsById[session.questionIds[session.currentIndex]]
  const evaluated = session.evaluatedQuestionIds.includes(question.id)
  const isLast = session.currentIndex === session.questionIds.length - 1
  return <div className="page session-page"><div className="session-kicker"><span>PRACTICE · {session.label.toUpperCase()}</span><span>{session.currentIndex + 1} / {session.questionIds.length}</span></div><QuestionCard question={question} selectedOptionIds={session.answers[question.id] ?? []} disabled={evaluated} showResult={evaluated} onChange={onSelect} /><div className="session-actions">{!evaluated ? <button className="button primary" disabled={!(session.answers[question.id]?.length)} onClick={onSubmit}>Check answer →</button> : <button className="button primary" onClick={onNext}>{isLast ? 'Finish practice' : 'Next question →'}</button>}<button className="text-button" onClick={onDiscard}>End practice</button></div></div>
}
