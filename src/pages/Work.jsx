import SlugLine from '../components/SlugLine'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import FadeIn from '../components/FadeIn'

const projects = [
  { title: 'The Philadelphia Inquirer', type: 'Sports video · 2025–Present', to: '/work/inquirer', image: '/inquirer-icon.png', alt: 'The Philadelphia Inquirer I logo', className: 'project-inquirer' },
  { title: 'The Daily Pennsylvanian', type: 'Photojournalism · Penn', to: '/work/daily-pennsylvanian', image: '/DP/dp6.jpg', alt: 'A basketball player rises toward the hoop during a Penn game', className: 'project-penn' },
  { title: 'Projects + Freelance', type: 'Film · Photography · Creative direction', to: '/work/freelance', image: '/Freelance/233-LYD07346.jpg', alt: 'Portrait surrounded by records in a music shop', className: 'project-freelance' },
]

export default function Work() {
  return (
    <PageTransition>
      <div className="editorial-page">
        <SlugLine text="Int. Selected Works — Ongoing" />
        <div className="work-heading">
          <h1 className="editorial-title">Work</h1>
        </div>
        <div className="project-grid">
          {projects.map((project, i) => (
            <FadeIn key={project.to} delay={i * 0.06} className={project.className}>
              <Link to={project.to} className="project-card">
                <div className="project-image"><img src={project.image} alt={project.alt} loading={i ? 'lazy' : 'eager'} /><span className="project-open" aria-hidden="true">↗</span></div>
                <div className="project-meta"><p className="eyebrow">{project.type}</p><span className="eyebrow">0{i + 1}</span></div>
                <h2>{project.title}</h2>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </PageTransition>
  )
}
