import { useState } from 'react'
import PageTransition from '../components/PageTransition'
import BackNav from '../components/BackNav'
import SlugLine from '../components/SlugLine'
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
        <BackNav />
        <SlugLine text="Int. About — Present Day" />
        <FadeIn>
          <h2 className="text-[clamp(3.5rem,7vw,7rem)] text-dark-green tracking-tight leading-[0.92] mb-10">
            About
          </h2>
        </FadeIn>

        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
          <FadeIn className="flex-[1.2]">
            <div className="space-y-6">
              <p className="text-body text-[1.05rem] leading-relaxed">
                I'm a film and economics student at the University of Pennsylvania,
                originally from Bellaire, TX.
              </p>
              <p className="text-body text-[1.05rem] leading-relaxed">
                Formerly, I worked at{' '}
                <a
                  href="https://www.inquirer.com/"
                  target="_blank"
                  rel="noopener"
                  className="text-dark-green underline underline-offset-[3px] transition-opacity hover:opacity-65"
                >
                  The Philadelphia Inquirer
                </a>{' '}
                as a Sports Video Production Intern, where I had a ball covering
                Philly's professional sports teams.
              </p>
              <p className="text-body text-[1.05rem] leading-relaxed">
                I enjoy backpacking (most recently, the South Rim of the Grand
                Canyon), intuitive cooking, DJing, and reading film scripts.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} className="flex-1">
            <div className="flex flex-col gap-8 items-center">
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
