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

        {/* Outdoor + Photos section */}
        <FadeIn delay={0.2}>
          <div className="mt-16 pt-14 border-t border-border grid grid-cols-1 md:grid-cols-[1fr_minmax(0,0.7fr)] gap-12 md:gap-16 items-start">
            {/* Parks + Hikes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {/* National Parks */}
              <div>
                <h4 className="font-mono text-[0.7rem] tracking-[0.2em] uppercase text-muted mb-3 pb-3 border-b border-border">
                  National Parks
                </h4>
                <ul className="space-y-4">
                  {[
                    { name: 'Grand Canyon', location: 'Arizona' },
                    { name: 'Zion', location: 'Utah' },
                    { name: 'Bryce Canyon', location: 'Utah' },
                    { name: 'Death Valley', location: 'California' },
                    { name: 'Yosemite', location: 'California' },
                    { name: 'Yellowstone', location: 'Wyoming' },
                    { name: 'White Sands', location: 'New Mexico' },
                    { name: 'Carlsbad Caverns', location: 'New Mexico' },
                    { name: 'Guadalupe Mountains', location: 'Texas' },
                    { name: 'Big Bend', location: 'Texas' },
                    { name: 'Hot Springs', location: 'Arkansas' },
                    { name: 'Arches', location: 'Utah' },
                    { name: 'Badlands', location: 'South Dakota' },
                    { name: 'Everglades', location: 'Florida' },
                  ].map((park) => (
                    <li key={park.name}>
                      <span className="font-serif text-dark-green text-[1.1rem] leading-tight block">
                        {park.name}
                      </span>
                      <span className="font-mono text-[0.68rem] tracking-wide text-muted">
                        {park.location}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Favorite Hikes */}
              <div>
                <h4 className="font-mono text-[0.7rem] tracking-[0.2em] uppercase text-muted mb-3 pb-3 border-b border-border">
                  Favorite Hikes
                </h4>
                <ul className="space-y-4">
                  {[
                    { name: 'South Kaibab to Bright Angel', loc: 'Rim-to-Rim — Grand Canyon NP, AZ' },
                    { name: 'The Narrows', loc: 'Zion NP, UT' },
                    { name: 'Fairyland Loop', loc: 'Bryce Canyon NP, UT' },
                    { name: "Devil's Garden Primitive Loop", loc: 'Arches NP, UT' },
                    { name: 'Natural Entrance Route', loc: 'Carlsbad Caverns NP, NM' },
                    { name: 'Alkali Flat Trail', loc: 'White Sands NP, NM' },
                  ].map((hike, i) => (
                    <li key={hike.name} className="flex gap-3">
                      <span className="font-serif text-dark-green/25 text-[1rem] leading-tight shrink-0 w-6">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <span className="font-serif text-dark-green text-[1.1rem] leading-tight block">
                          {hike.name}
                        </span>
                        <span className="font-mono text-[0.68rem] tracking-wide text-muted">
                          {hike.loc}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Staggered photos */}
            <div className="flex flex-col gap-5 md:pt-8">
              <img
                src={stripImages[0]}
                alt="Photo"
                className="w-[85%] aspect-[3/4] object-cover cursor-pointer shadow-[0_2px_10px_rgba(0,46,9,0.1)] transition-all duration-200 hover:opacity-80 hover:scale-[1.01]"
                onClick={() => setLbIndex(0)}
              />
              <img
                src={stripImages[1]}
                alt="Photo"
                className="w-[90%] self-end aspect-[4/3] object-cover cursor-pointer shadow-[0_2px_10px_rgba(0,46,9,0.1)] transition-all duration-200 hover:opacity-80 hover:scale-[1.01] -rotate-1"
                onClick={() => setLbIndex(1)}
              />
              <img
                src={stripImages[2]}
                alt="Photo"
                className="w-[80%] aspect-[3/4] object-cover cursor-pointer shadow-[0_2px_10px_rgba(0,46,9,0.1)] transition-all duration-200 hover:opacity-80 hover:scale-[1.01] rotate-1"
                onClick={() => setLbIndex(2)}
              />
            </div>
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
