import { Link } from 'react-router-dom'

export default function BackNav({ showWork = false, current }) {
  return (
    <nav className="mb-8 font-mono text-[0.72rem] tracking-[0.14em] uppercase text-muted flex items-center gap-[0.4em] flex-wrap">
      <Link
        to="/"
        className="no-underline text-muted transition-colors hover:text-dark-green"
      >
        Home
      </Link>
      {showWork && (
        <>
          <span className="text-muted/40 select-none">/</span>
          <Link
            to="/work"
            className="no-underline text-muted transition-colors hover:text-dark-green"
          >
            Work
          </Link>
        </>
      )}
      {current && (
        <>
          <span className="text-muted/40 select-none">/</span>
          <span className="text-dark-green/50">{current}</span>
        </>
      )}
    </nav>
  )
}
