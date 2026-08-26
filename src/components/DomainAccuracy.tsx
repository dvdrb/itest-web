import type { DomainProgress } from '../lib/progress'

export function DomainAccuracy({ entries }: { entries: DomainProgress[] }) {
  return (
    <div className="domain-list">
      {entries.map((entry) => (
        <div className="domain-row" key={entry.domain}>
          <div className="domain-row-head"><span>{entry.domain}</span><strong>{entry.accuracy === null ? '—' : `${entry.accuracy}%`}</strong></div>
          <div className="meter"><span style={{ width: `${entry.accuracy ?? 0}%` }} /></div>
          <small>{entry.attempted ? `${entry.correct}/${entry.attempted} latest answers correct` : 'Not attempted'}</small>
        </div>
      ))}
    </div>
  )
}
