import { useEffect, useState } from 'react'

interface ExamHeaderProps {
  expiresAt: number
  current: number
  total: number
  onExpire: () => void
}

const formatTime = (milliseconds: number) => {
  const seconds = Math.max(0, Math.ceil(milliseconds / 1000))
  return `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`
}

export function ExamHeader({ expiresAt, current, total, onExpire }: ExamHeaderProps) {
  const [now, setNow] = useState(Date.now())
  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(timer)
  }, [])
  const remaining = expiresAt - now
  useEffect(() => { if (remaining <= 0) onExpire() }, [remaining, onExpire])
  return <div className="exam-header"><span>MOCK EXAM · QUESTION {current} / {total}</span><strong className={remaining < 300000 ? 'urgent' : ''}>◷ {formatTime(remaining)}</strong></div>
}
