import type { AnswerMap, Question } from '../types/exam'
import { isCorrectAnswer } from '../lib/scoring'

export function ResultReview({ questions, answers }: { questions: Question[]; answers: AnswerMap }) {
  const missed = questions.filter((question) => !isCorrectAnswer(question, answers[question.id]))
  if (!missed.length) return <div className="empty-state">Clean sweep. Every response was correct.</div>
  return <div className="review-list">{missed.map((question) => {
    const selected = answers[question.id] ?? []
    const chosen = question.options.filter((option) => selected.includes(option.id)).map((option) => option.text).join(', ') || 'No answer'
    const correct = question.options.filter((option) => question.correctOptionIds.includes(option.id)).map((option) => option.text).join(', ')
    const selectedDistractors = question.options.filter((option) => selected.includes(option.id) && !question.correctOptionIds.includes(option.id) && question.distractorExplanations[option.id])
    return <article className="review-item" key={question.id}><span>Objective {question.objectiveId} · {question.domain}</span><h3>{question.prompt}</h3>{question.context && <pre className="review-context">{question.context}</pre>}<div className="answer-comparison"><p><b>Your answer</b>{chosen}</p><p><b>Correct answer</b>{correct}</p></div><p className="review-explanation">{question.explanation}</p>{selectedDistractors.length > 0 && <div className="review-distractors"><b>Why this answer was not correct</b>{selectedDistractors.map((option) => <p key={option.id}>{question.distractorExplanations[option.id]}</p>)}</div>}</article>
  })}</div>
}
