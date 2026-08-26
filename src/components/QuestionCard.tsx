import type { Question } from '../types/exam'

interface QuestionCardProps {
  question: Question
  selectedOptionIds: string[]
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

export function QuestionCard({ question, selectedOptionIds, disabled = false, showResult = false, onChange }: QuestionCardProps) {
  const isMultiple = question.type === 'multiple-choice'
  return (
    <article className="question-card">
      <div className="question-meta"><span>{question.domain}</span><span>{question.objectiveId}</span><span>{typeLabels[question.type]}</span></div>
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
      {showResult && <div className="explanation"><span>FIELD NOTE</span><p>{question.explanation}</p></div>}
    </article>
  )
}
