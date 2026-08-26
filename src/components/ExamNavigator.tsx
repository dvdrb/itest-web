interface ExamNavigatorProps {
  questionIds: string[]
  currentIndex: number
  answeredIds: string[]
  reviewIds: string[]
  onJump: (index: number) => void
}

export function ExamNavigator({ questionIds, currentIndex, answeredIds, reviewIds, onJump }: ExamNavigatorProps) {
  return (
    <aside className="exam-navigator" aria-label="Exam question navigation">
      <div className="navigator-title"><span>QUESTION MAP</span><small><i className="answered-key" /> answered <i className="review-key" /> review</small></div>
      <div className="question-grid">
        {questionIds.map((id, index) => <button key={id} className={`${index === currentIndex ? 'active ' : ''}${answeredIds.includes(id) ? 'answered ' : ''}${reviewIds.includes(id) ? 'review' : ''}`} onClick={() => onJump(index)}>{index + 1}</button>)}
      </div>
    </aside>
  )
}
