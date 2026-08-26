import { cramSheet, studyNotes } from '../data/studyNotes'
import { domains } from '../types/exam'
import { objectiveById } from '../data/objectives'

const labelForSection = (section: string) => section.replace(/([A-Z])/g, ' $1').replace(/^./, (letter) => letter.toUpperCase())

export function StudyNotesPage() {
  return <div className="page notes-page">
    <p className="eyebrow">STUDY NOTES</p>
    <h1>Keep the essentials<br /><em>within reach.</em></h1>
    <p className="notes-lead">Objective-aligned notes for all 21 simulator objectives. Open a note to review what matters most, common traps, and a quick check.</p>
    <div className="notes-domains">
      {domains.map((domain) => {
        const domainNotes = studyNotes.filter((note) => objectiveById[note.objectiveId]?.domain === domain)
        return <section className="notes-domain" key={domain}><header><p>{domain}</p><span>{domainNotes.length} objectives</span></header>{domainNotes.map((note) => <details className="note-detail" key={note.objectiveId}><summary><span>{note.objectiveId}</span><strong>{note.title}</strong><i>+</i></summary><div className="note-detail-body"><div><h3>What to know</h3><ul>{note.whatToKnow.map((item) => <li key={item}>{item}</li>)}</ul></div><div><h3>Memorize</h3><ul>{note.memorize.map((item) => <li key={item}>{item}</li>)}</ul></div><div><h3>How it works</h3><ul>{note.howItWorks.map((item) => <li key={item}>{item}</li>)}</ul></div><div><h3>Exam traps</h3><ul>{note.examTraps.map((item) => <li key={item}>{item}</li>)}</ul></div><div className="quick-check"><h3>Quick check</h3>{note.quickCheck.map((item) => <p key={item.question}><b>{item.question}</b>{item.answer}</p>)}</div></div></details>)}</section>
      })}
    </div>
    <section className="cram-sheet"><div><p className="eyebrow">FINAL CRAM SHEET</p><h2>High-yield facts for the last pass.</h2></div><div className="cram-grid">{Object.entries(cramSheet).map(([section, entries]) => <article key={section}><h3>{labelForSection(section)}</h3><ul>{entries.map((entry) => <li key={typeof entry === 'string' ? entry : entry.protocol}>{typeof entry === 'string' ? entry : `${entry.protocol} — ${entry.port}`}</li>)}</ul></article>)}</div></section>
  </div>
}
