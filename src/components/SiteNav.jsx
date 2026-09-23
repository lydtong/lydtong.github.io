import { Link, NavLink } from 'react-router-dom'

export default function SiteNav() {
  return (
    <header className="site-nav">
      <Link to="/" className="site-signature" aria-label="Lydia Tong home">lydia tong</Link>
      <nav aria-label="Main navigation">
        {['Work', 'About', 'Book'].map(label => (
          <NavLink key={label} to={`/${label.toLowerCase()}`} className={({ isActive }) => isActive ? 'is-active' : ''}>{label}</NavLink>
        ))}
      </nav>
    </header>
  )
}
