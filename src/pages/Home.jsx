import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import FadeIn from '../components/FadeIn'
import Lightbox from '../components/Lightbox'
import SectionHeader from '../components/SectionHeader'
import { experience, projects, parks, hikes, bookingFormUrl, formatMonth, duration } from '../data/site'

const aboutPhotos = [
  { src: '/B&W/IMG_1273.JPG', cls: 'wide' },
  { src: '/B&W/IMG_1272.JPG', cls: 'tall' },
  { src: '/B&W/IMG_2600.JPG', cls: 'tall' },
  { src: '/B&W/IMG_7552.JPG', cls: '' },
  { src: '/B&W/IMG_1274.JPG', cls: '' },
]

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
            <p>Film and Economics at the <strong>University of Pennsylvania</strong>, originally from Bellaire, TX.</p>
            <p>Currently writing a culinary murder mystery feature film, planning a car camping adventure down the PNW.</p>
          </div>
        </div>
        <div className="hero-photo">
          <img src="/B&W/IMG_1271.JPG" alt="Lydia Tong" />
        </div>
      </section>

      <section id="about" className="section">
        <SectionHeader number="01" label="About" />
        <div className="about-grid">
          <FadeIn>
            <div className="edu-card">
              <h3>University of Pennsylvania</h3>
              <span className="mono-label">Cinema &amp; Media Studies, Economics</span>
              <span className="mono-label">Minor in Data Science &amp; Analytics</span>
              <span className="mono-label">Class of 2028</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="about-photos">
              {aboutPhotos.map((p, i) => (
                <figure key={p.src} className={p.cls} onClick={() => setLb(i)}>
                  <img src={p.src} alt="" loading="lazy" />
                </figure>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="experience" className="section">
        <SectionHeader number="02" label="Experience" />
        <div className="timeline">
          {experience.map((job, i) => (
            <FadeIn key={job.company} delay={i * 0.06}>
              <article className={`job${job.end ? '' : ' current'}`}>
                <a className="job-company" href={job.url} target="_blank" rel="noopener">{job.company}</a>
                <h3>{job.role}</h3>
                <div className="job-dates">
                  {formatMonth(job.start)} — {job.end ? formatMonth(job.end) : 'PRESENT'} · {duration(job.start, job.end)}
                </div>
                <div className="job-loc">{job.location}</div>
                <div className="tags">
                  {job.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section id="work" className="section">
        <SectionHeader number="03" label="Work" />
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
        <SectionHeader number="04" label="Adventures" />
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
        <SectionHeader number="05" label="Book" />
        <FadeIn>
          <p className="lede" style={{ fontSize: 22, color: 'var(--color-muted)', margin: '0 0 28px' }}>As serious as you want it to be.</p>
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
        images={aboutPhotos.map((p) => p.src)}
        index={lb}
        onClose={() => setLb(null)}
        onNav={(dir) => setLb((prev) => (prev + dir + aboutPhotos.length) % aboutPhotos.length)}
      />
    </div>
  )
}
