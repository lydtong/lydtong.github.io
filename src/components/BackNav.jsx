import { Link } from 'react-router-dom'

export default function BackNav({ showWork = false }) {
  return (
    <div className="mb-8">
      <Link
        to="/"
        className="font-mono text-[0.72rem] tracking-[0.18em] uppercase text-muted no-underline transition-colors hover:text-dark-green block mb-1"
      >
        ← Home
      </Link>
      {showWork && (
        <Link
          to="/work"
          className="font-serif text-[0.9rem] text-muted no-underline transition-colors hover:text-dark-green block"
        >
          ← Back to Work
        </Link>
      )}
    </div>
  )
}
