import { useState } from 'react'
import { cramSheet, studyNotes } from '../data/studyNotes'
import { objectiveById } from '../data/objectives'
import { domains, type Domain } from '../types/exam'

const tabLabels: Record<Domain, string> = {
  'Networking Fundamentals': 'Fundamentals',
  'Network Infrastructures': 'Infrastructure',
  'Network Hardware': 'Hardware',
  'Protocols and Services': 'Protocols & Services',
  Troubleshooting: 'Troubleshooting',
}

const labelForSection = (section: string) => section.replace(/([A-Z])/g, ' $1').replace(/^./, (letter) => letter.toUpperCase())

export function StudyNotesPage() {
  const [selected, setSelected] = useState<Domain | 'cram'>(domains[0])
  const selectedNotes = selected === 'cram' ? [] : studyNotes.filter((note) => objectiveById[note.objectiveId]?.domain === selected)

  return <div className="page notes-page"><header className="notes-header"><div><p className="eyebrow">STUDY NOTES</p><h1>Review by objective</h1><p>Use the domain selector to focus your review, then expand only the objective you need.</p></div></header><div className="note-tabs" role="tablist" aria-label="Study note sections">{domains.map((domain) => <button key={domain} role="tab" aria-selected={selected === domain} className={selected === domain ? 'active' : ''} onClick={() => setSelected(domain)}>{tabLabels[domain]}</button>)}<button role="tab" aria-selected={selected === 'cram'} className={selected === 'cram' ? 'active' : ''} onClick={() => setSelected('cram')}>Final Cram Sheet</button></div>{selected === 'cram' ? <section className="cram-sheet"><div><p className="eyebrow">FINAL CRAM SHEET</p><h2>High-yield facts for the last pass</h2></div><div className="cram-grid">{Object.entries(cramSheet).map(([section, entries]) => <article key={section}><h3>{labelForSection(section)}</h3><ul>{entries.map((entry) => <li key={typeof entry === 'string' ? entry : entry.protocol}>{typeof entry === 'string' ? entry : `${entry.protocol} — ${entry.port}`}</li>)}</ul></article>)}</div></section> : <section className="notes-domain"><header><p>{selected}</p><span>{selectedNotes.length} objectives</span></header>{selectedNotes.map((note) => <details className="note-detail" key={note.objectiveId}><summary><span>{note.objectiveId}</span><strong>{note.title}</strong><i>+</i></summary><div className="note-detail-body"><div><h3>What to know</h3><ul>{note.whatToKnow.map((item) => <li key={item}>{item}</li>)}</ul></div><div><h3>Memorize</h3><ul>{note.memorize.map((item) => <li key={item}>{item}</li>)}</ul></div><div><h3>How it works</h3><ul>{note.howItWorks.map((item) => <li key={item}>{item}</li>)}</ul></div><div><h3>Exam traps</h3><ul>{note.examTraps.map((item) => <li key={item}>{item}</li>)}</ul></div><div className="quick-check"><h3>Quick check</h3>{note.quickCheck.map((item) => <p key={item.question}><b>{item.question}</b>{item.answer}</p>)}</div></div></details>)}</section>}</div>
}
