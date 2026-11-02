import { Link } from 'react-router-dom'

export default function BackNav() {
  return (
    <Link to={{ pathname: '/', hash: '#work' }} className="btn btn-outline btn-back">
      <span className="arrow">←</span> Back to Work
    </Link>
  )
}
