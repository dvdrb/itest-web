import type { ReactNode } from 'react'

export type Page = 'dashboard' | 'practice' | 'exam' | 'notes' | 'results'

interface AppShellProps {
  page: Page
  onNavigate: (page: Page) => void
  children: ReactNode
}

const links: Array<{ page: Exclude<Page, 'results'>; label: string }> = [
  { page: 'dashboard', label: 'Dashboard' },
  { page: 'practice', label: 'Practice' },
  { page: 'exam', label: 'Full exam' },
  { page: 'notes', label: 'Study notes' },
]

export function AppShell({ page, onNavigate, children }: AppShellProps) {
  return (
    <div className="app-frame">
      <header className="topbar">
        <button className="brand" onClick={() => onNavigate('dashboard')} aria-label="Open dashboard">
          <span className="brand-mark">IT</span>
          <strong>ITS NETWORKING PREP</strong>
        </button>
        <nav aria-label="Primary navigation">
          {links.map((link) => (
            <button key={link.page} className={page === link.page ? 'nav-link active' : 'nav-link'} onClick={() => onNavigate(link.page)}>
              {link.label}
            </button>
          ))}
        </nav>
      </header>
      <main>{children}</main>
      <footer>Original practice material · Progress is saved in this browser.</footer>
    </div>
  )
}
