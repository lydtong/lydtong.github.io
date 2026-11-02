import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import FadeIn from '../components/FadeIn'
import Lightbox from '../components/Lightbox'
import SectionHeader from '../components/SectionHeader'
import { PennLogo, AfterQueryLogo, DPLogo, InquirerLogo } from '../components/logos'
import { experience, projects, parks, hikes, bookingFormUrl, formatMonth, duration } from '../data/site'

const logos = {
  AfterQuery: AfterQueryLogo,
  'The Philadelphia Inquirer': InquirerLogo,
  'The Daily Pennsylvanian': DPLogo,
}

const aboutPhotos = ['/B&W/IMG_1272.JPG', '/B&W/IMG_1274.JPG', '/B&W/IMG_7552.JPG']

function useScrollToHash() {
  const { hash } = useLocation()
  useEffect(() => {
    if (!hash) { window.scrollTo(0, 0); return }
    const el = document.getElementById(hash.slice(1))
    if (el) requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }))
  }, [hash])
}

export default function Home() {
  useScrollToHash()
  const [lb, setLb] = useState(null)

  return (
    <div className="container-rr">
      <section className="hero">
        <div>
          <h1>Lydia Tong</h1>
          <div className="hero-bio">
            <p>Film and Economics from Bellaire, TX.</p>
            <p>I enjoy backpacking (most recently, the South Rim of the Grand Canyon), intuitive cooking, DJing, and reading film scripts.</p>
            <p>Currently, I'm:</p>
            <ul>
              <li>Writing a culinary murder mystery feature film</li>
              <li>Planning a PNW car camping adventure</li>
            </ul>
          </div>
        </div>
        <div className="hero-photo">
          <img src="/B&W/IMG_1271.JPG" alt="Lydia Tong" />
        </div>
      </section>

      <section id="about" className="section">
        <SectionHeader label="About" />
        <FadeIn>
          <div className="edu-card">
            <span className="logo-mark"><PennLogo /></span>
            <div>
              <p className="edu-school">University of Pennsylvania</p>
              <p className="edu-detail">Cinema &amp; Media Studies, Economics</p>
              <p className="edu-detail">Minor in Data Science &amp; Analytics</p>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="about-photos">
            {aboutPhotos.map((src, i) => (
              <figure key={src} onClick={() => setLb(i)}>
                <img src={src} alt="" loading="lazy" />
              </figure>
            ))}
          </div>
        </FadeIn>
      </section>

      <section id="experience" className="section">
        <SectionHeader label="Experience" />
        <div className="timeline">
          {experience.map((job, i) => {
            const Logo = logos[job.company]
            return (
              <FadeIn key={job.company} delay={i * 0.06}>
                <article className={`job${job.end ? '' : ' current'}`}>
                  <div className="job-head">
                    <span className="logo-mark"><Logo /></span>
                    <a className="job-company" href={job.url} target="_blank" rel="noopener">{job.company}</a>
                  </div>
                  <h3>{job.role}</h3>
                  <div className="job-dates">
                    {formatMonth(job.start)} — {job.end ? formatMonth(job.end) : 'PRESENT'} · {duration(job.start, job.end)}
                  </div>
                  <div className="job-loc">{job.location}</div>
                  <ul className="tags">
                    {job.tags.map((t) => <li key={t} className="tag">{t}</li>)}
                  </ul>
                </article>
              </FadeIn>
            )
          })}
        </div>
      </section>

      <section id="work" className="section">
        <SectionHeader label="Work" />
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
      </section>

      <section id="adventures" className="section">
        <SectionHeader label="Adventures" />
        <FadeIn>
          <div className="stats">
            <div className="stat"><strong>{parks.length}</strong><span className="mono-label">National Parks</span></div>
            <div className="stat"><strong>{hikes.length}</strong><span className="mono-label">Favorite Hikes</span></div>
          </div>
        </FadeIn>
        <div className="lists">
          <FadeIn>
            <div className="list-head">National Parks</div>
            {parks.map((p) => (
              <div key={p.name} className="list-item">
                <div>
                  <div className="name">{p.name}</div>
                  <div className="sub">{p.location}</div>
                </div>
              </div>
            ))}
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="list-head">Favorite Hikes</div>
            {hikes.map((h, i) => (
              <div key={h.name} className="list-item">
                <span className="num">0{i + 1}</span>
                <div>
                  <div className="name">{h.name}</div>
                  <div className="sub">{h.location}</div>
                </div>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      <section id="book" className="section">
        <SectionHeader label="Book" />
        <FadeIn>
          <p className="book-lede">As serious as you want it to be.</p>
          <div className="book-frame">
            <iframe src={`${bookingFormUrl}?embedded=true`} title="Booking form" />
          </div>
          <p style={{ marginTop: 20 }}>
            <a className="btn btn-outline" href={bookingFormUrl} target="_blank" rel="noopener noreferrer">
              Open the form in a new tab <span className="arrow">→</span>
            </a>
          </p>
        </FadeIn>
      </section>

      <Lightbox
        images={aboutPhotos}
        index={lb}
        onClose={() => setLb(null)}
        onNav={(dir) => setLb((prev) => (prev + dir + aboutPhotos.length) % aboutPhotos.length)}
      />
    </div>
  )
}
