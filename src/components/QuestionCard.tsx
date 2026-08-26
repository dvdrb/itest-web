import type { Question } from '../types/exam'
import { isMultipleAnswerQuestion } from '../lib/scoring'

interface QuestionCardProps {
  question: Question
  selectedOptionIds: string[]
  mode?: 'practice' | 'exam' | 'review'
  disabled?: boolean
  showResult?: boolean
  onChange: (optionId: string) => void
}

const typeLabels: Record<Question['type'], string> = {
  'single-choice': 'Single choice',
  'multiple-choice': 'Select all that apply',
  scenario: 'Scenario',
  subnetting: 'Subnetting',
  'command-output': 'Command / output',
}

export function QuestionCard({ question, selectedOptionIds, mode = 'practice', disabled = false, showResult = false, onChange }: QuestionCardProps) {
  const isMultiple = isMultipleAnswerQuestion(question)
  const showMetadata = mode === 'review' || (mode === 'practice' && showResult)
  const selectedDistractors = question.options.filter((option) => selectedOptionIds.includes(option.id) && !question.correctOptionIds.includes(option.id) && question.distractorExplanations[option.id])
  return (
    <article className="question-card">
      {showMetadata && <div className="question-meta"><span>{question.domain}</span><span>Objective {question.objectiveId}</span><span>{typeLabels[question.type]}</span></div>}
      <h2>{question.prompt}</h2>
      {question.context && <pre className="question-context">{question.context}</pre>}
      <div className="options" role={isMultiple ? 'group' : 'radiogroup'} aria-label="Answer choices">
        {question.options.map((option, index) => {
          const selected = selectedOptionIds.includes(option.id)
          const correct = question.correctOptionIds.includes(option.id)
          const stateClass = showResult ? (correct ? ' correct' : selected ? ' incorrect' : '') : ''
          return (
            <label className={`option${selected ? ' selected' : ''}${stateClass}`} key={option.id}>
              <input type={isMultiple ? 'checkbox' : 'radio'} name={question.id} checked={selected} disabled={disabled} onChange={() => onChange(option.id)} />
              <span className="option-key">{String.fromCharCode(65 + index)}</span>
              <span>{option.text}</span>
            </label>
          )
        })}
      </div>
      {showResult && <div className="explanation"><span>EXPLANATION</span><p>{question.explanation}</p>{selectedDistractors.length > 0 && <div className="distractor-notes"><strong>Why your selected answer was not correct</strong>{selectedDistractors.map((option) => <p key={option.id}><b>{option.text}</b>{question.distractorExplanations[option.id]}</p>)}</div>}</div>}
    </article>
  )
}
