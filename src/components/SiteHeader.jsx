import { Link, useLocation } from 'react-router-dom'

export const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'adventures', label: 'Adventures' },
  { id: 'book', label: 'Book' },
]

export default function SiteHeader() {
  const onHome = useLocation().pathname === '/'
  return (
    <header className="site-header">
      <div className="brand">
        <Link to="/" className="wordmark">Lydia Tong</Link>
        <span className="coords">39.9526° N, 75.1652° W</span>
      </div>
      <nav aria-label="Sections">
        {sections.map((s) => onHome
          ? <a key={s.id} href={`#${s.id}`}>{s.label}</a>
          : <Link key={s.id} to={{ pathname: '/', hash: `#${s.id}` }}>{s.label}</Link>
        )}
      </nav>
    </header>
  )
}
