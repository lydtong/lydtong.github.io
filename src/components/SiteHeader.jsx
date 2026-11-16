import { Link, useLocation } from 'react-router-dom'

export default function SiteHeader() {
  const onHome = useLocation().pathname === '/'
  return (
    <header className="site-header">
      {!onHome && <Link to="/" className="wordmark">Lydia Tong</Link>}
    </header>
  )
}
