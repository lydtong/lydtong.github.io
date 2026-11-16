import { Link } from 'react-router-dom'
import FadeIn from '../components/FadeIn'
import { projects, bookingFormUrl } from '../data/site'

export default function Work() {
  return (
    <div className="page-col wide intro">
      <p className="work-link back-link"><Link to="/">← Back</Link></p>
      <h1>Work</h1>
      <div className="work-grid">
        {projects.map((p, i) => (
          <FadeIn key={p.to} delay={i * 0.06}>
            <Link to={p.to} className={`work-card${p.logo ? ' logo' : ''}`}>
              <div className="work-card-image"><img src={p.image} alt={p.alt} loading="lazy" /></div>
              <div className="work-card-body">
                <div className="work-card-meta">
                  <span className="mono-label">{p.type}</span>
                  <span className="mono-label">0{i + 1}</span>
                </div>
                <h3>{p.title} <span aria-hidden="true">↗</span></h3>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
      <p className="book-line">
        Book a shoot — <a href={bookingFormUrl} target="_blank" rel="noopener noreferrer">open the booking form</a>
      </p>
    </div>
  )
}
