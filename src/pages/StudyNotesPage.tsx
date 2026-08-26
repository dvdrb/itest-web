import { studyNotes } from '../data/studyNotes'

export function StudyNotesPage() {
  return <div className="page notes-page"><p className="eyebrow">FIELD REFERENCE</p><h1>Keep the essential<br /><em>things close.</em></h1><p className="notes-lead">Short reminders for the networking concepts represented by the simulator fixture.</p><div className="notes-grid">{studyNotes.map((note, index) => <article key={note.domain}><span>0{index + 1}</span><p>{note.domain}</p><h2>{note.title}</h2><ul>{note.points.map((point) => <li key={point}>{point}</li>)}</ul></article>)}</div></div>
}
