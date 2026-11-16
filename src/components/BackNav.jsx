import { Link } from 'react-router-dom'

export default function BackNav() {
  return (
    <Link to="/work" className="btn btn-back">
      <span className="arrow">←</span> Back to Work
    </Link>
  )
}
