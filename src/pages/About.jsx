import SlugLine from '../components/SlugLine'
import { useState } from 'react'
import PageTransition from '../components/PageTransition'
import FadeIn from '../components/FadeIn'
import Lightbox from '../components/Lightbox'

const stripImages = [
  '/B&W/IMG_2600.JPG',
  '/B&W/IMG_7552.JPG',
  '/B&W/IMG_1274.JPG',
]

export default function About() {
  const [lbIndex, setLbIndex] = useState(null)

  return (
    <PageTransition>
      <div className="max-w-[1200px] mx-auto px-8 md:px-12 py-16 md:py-20 w-full">
        <SlugLine text="Int. About — Present Day" />
        <FadeIn>
          <h2 className="text-[clamp(3.5rem,7vw,7rem)] text-dark-green tracking-tight leading-[0.92] mb-10">
            About
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] gap-10 md:gap-20 lg:gap-28 items-start">
          <FadeIn className="min-w-0">
            <div className="space-y-6 font-serif text-body text-[1.05rem] leading-relaxed">
              <p className="text-body text-[1.05rem] leading-relaxed">
                I'm a film and economics student at the University of Pennsylvania,
                originally from Bellaire, TX.
              </p>
              <p className="text-body text-[1.05rem] leading-relaxed">
                I enjoy backpacking (most recently, the South Rim of the Grand
                Canyon), intuitive cooking, DJing, and reading film scripts.
              </p>
              <div className="text-body text-[1.05rem] leading-relaxed">
                <p>Currently, I'm:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Writing a culinary feature film</li>
                  <li>Planning a PNW car camping adventure</li>
                </ul>
              </div>
              <section className="about-credentials" aria-labelledby="experience-heading">
                <h3 id="experience-heading">Experience</h3>
                <div className="about-credential-row">
                  <p><a href="https://www.afterquery.com/" target="_blank" rel="noopener noreferrer">AfterQuery</a> / Strategic Projects &amp; Operations</p>
                </div>
                <div className="about-credential-row">
                  <p><a href="https://www.inquirer.com/" target="_blank" rel="noopener noreferrer">The Philadelphia Inquirer</a> / Sports Video Production</p>
                </div>
                <div className="about-credential-row">
                  <p><a href="https://www.thedp.com/" target="_blank" rel="noopener noreferrer">The Daily Pennsylvanian</a> / Sports Media Editor</p>
                </div>
              </section>
              <section className="about-credentials" aria-labelledby="education-heading">
                <h3 id="education-heading">Education</h3>
                <div className="about-credential-row">
                  <p>University of Pennsylvania / Cinema &amp; Media Studies, Economics</p>
                  <span>2028</span>
                </div>
              </section>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} className="w-full md:justify-self-end">
            <div className="flex flex-col gap-8 items-end">
              <img
                src="/B&W/IMG_1273.JPG"
                alt="Photo 1"
                className="w-full aspect-[4/3] object-cover shadow-[0_2px_16px_rgba(0,46,9,0.15)]"
              />
              <img
                src="/B&W/IMG_1272.JPG"
                alt="Photo 2"
                className="w-4/5 shadow-[0_2px_16px_rgba(0,46,9,0.15)] -rotate-2"
              />
            </div>
          </FadeIn>
        </div>

        {/* Photo strip */}
        <FadeIn delay={0.2}>
          <div className="grid grid-cols-3 gap-3 md:gap-4 mt-16 pt-14 border-t border-border">
            {stripImages.map((src, i) => (
              <img
                key={src}
                src={src}
                alt="Photo"
                className="w-full aspect-[3/4] max-md:aspect-square object-cover cursor-pointer shadow-[0_2px_10px_rgba(0,46,9,0.1)] transition-all duration-200 hover:opacity-80 hover:scale-[1.02]"
                onClick={() => setLbIndex(i)}
              />
            ))}
          </div>
        </FadeIn>
      </div>

      <Lightbox
        images={stripImages}
        index={lbIndex}
        onClose={() => setLbIndex(null)}
        onNav={(dir) =>
          setLbIndex((prev) => (prev + dir + stripImages.length) % stripImages.length)
        }
      />
    </PageTransition>
  )
}
