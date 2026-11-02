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
      <div className="container-rr site-header-inner">
        <div>
          <Link to="/" className="wordmark">Lydia Tong</Link>
          <div className="coords">39.9526° N, 75.1652° W</div>
        </div>
        <nav aria-label="Sections">
          {sections.map((s, i) => {
            const text = `0${i + 1}. ${s.label}`
            return onHome
              ? <a key={s.id} href={`#${s.id}`}>{text}</a>
              : <Link key={s.id} to={{ pathname: '/', hash: `#${s.id}` }}>{text}</Link>
          })}
        </nav>
      </div>
    </header>
  )
}
