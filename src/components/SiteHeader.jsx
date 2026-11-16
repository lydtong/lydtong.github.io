import { Link, NavLink, useLocation } from 'react-router-dom'

export default function SiteHeader() {
  const onHome = useLocation().pathname === '/'
  return (
    <header className="site-header">
      <div className="brand">
        {!onHome && <Link to="/" className="wordmark">Lydia Tong</Link>}
      </div>
      <nav aria-label="Sections">
        <NavLink to="/work" className={({ isActive }) => (isActive ? 'is-active' : undefined)}>Work</NavLink>
      </nav>
    </header>
  )
}
