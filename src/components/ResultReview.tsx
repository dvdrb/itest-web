import type { AnswerMap, Question } from '../types/exam'
import { isCorrectAnswer } from '../lib/scoring'

export function ResultReview({ questions, answers }: { questions: Question[]; answers: AnswerMap }) {
  const missed = questions.filter((question) => !isCorrectAnswer(question, answers[question.id]))
  if (!missed.length) return <div className="empty-state">Clean sweep. Every response was correct.</div>
  return <div className="review-list">{missed.map((question) => {
    const selected = answers[question.id] ?? []
    const chosen = question.options.filter((option) => selected.includes(option.id)).map((option) => option.text).join(', ') || 'No answer'
    const correct = question.options.filter((option) => question.correctOptionIds.includes(option.id)).map((option) => option.text).join(', ')
    return <article className="review-item" key={question.id}><span>{question.domain} · {question.objectiveId}</span><h3>{question.prompt}</h3><p><b>Your answer:</b> {chosen}</p><p><b>Correct answer:</b> {correct}</p><p className="review-explanation">{question.explanation}</p></article>
  })}</div>
}
