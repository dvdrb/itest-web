import { ExamHeader } from '../components/ExamHeader'
import { ExamNavigator } from '../components/ExamNavigator'
import { QuestionCard } from '../components/QuestionCard'
import type { ExamSession, Question } from '../types/exam'

interface ExamPageProps {
  session?: ExamSession
  questionsById: Record<string, Question>
  onStart: () => void
  onSelect: (questionId: string, optionId: string) => void
  onJump: (index: number) => void
  onReview: (questionId: string) => void
  onManualSubmit: () => void
  onExpire: () => void
}

export function ExamPage({ session, questionsById, onStart, onSelect, onJump, onReview, onManualSubmit, onExpire }: ExamPageProps) {
  if (!session) return <div className="page exam-intro"><p className="eyebrow">FULL EXAM</p><h1>Ready to begin?</h1><p>45 questions · 50 minutes · Results are shown after you submit. The nine-questions-per-domain distribution is this simulator’s design, not official Certiport weighting.</p><div className="exam-rules"><span>45 questions</span><span>50-minute timer</span><span>Question navigator</span><span>Review flags</span></div><button className="button primary" onClick={onStart}>Start full exam</button></div>

  const safeIndex = Math.min(session.currentIndex, session.questionIds.length - 1)
  const question = questionsById[session.questionIds[safeIndex]]
  const answeredIds = Object.entries(session.answers).filter(([, answer]) => answer.length).map(([id]) => id)
  const jump = (index: number) => onJump(index)
  const requestSubmit = () => {
    const unanswered = session.questionIds.filter((id) => !(session.answers[id]?.length)).length
    const reviewCount = session.reviewQuestionIds.length
    const summary = [unanswered ? `${unanswered} question${unanswered === 1 ? '' : 's'} unanswered` : '', reviewCount ? `${reviewCount} question${reviewCount === 1 ? '' : 's'} marked for review` : ''].filter(Boolean).join(' and ')
    if (window.confirm(summary ? `${summary}. Submit exam?` : 'All questions are answered. Submit exam?')) onManualSubmit()
  }
  return <div className="page exam-page"><ExamHeader expiresAt={session.expiresAt} current={safeIndex + 1} total={session.questionIds.length} onExpire={onExpire} /><div className="exam-layout"><div><QuestionCard question={question} mode="exam" selectedOptionIds={session.answers[question.id] ?? []} onChange={(optionId) => onSelect(question.id, optionId)} /><div className="exam-actions"><button className={session.reviewQuestionIds.includes(question.id) ? 'review-toggle active' : 'review-toggle'} onClick={() => onReview(question.id)}>{session.reviewQuestionIds.includes(question.id) ? 'Marked for review' : 'Mark for review'}</button><div><button className="button ghost" disabled={safeIndex === 0} onClick={() => jump(safeIndex - 1)}>Previous</button><button className="button primary" onClick={() => safeIndex === session.questionIds.length - 1 ? requestSubmit() : jump(safeIndex + 1)}>{safeIndex === session.questionIds.length - 1 ? 'Submit exam' : 'Next question'}</button></div></div></div><ExamNavigator questionIds={session.questionIds} currentIndex={safeIndex} answeredIds={answeredIds} reviewIds={session.reviewQuestionIds} onJump={jump} /></div><button className="submit-all" onClick={requestSubmit}>Submit exam</button></div>
}
