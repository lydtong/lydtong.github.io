import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const navItems = [
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Book', to: '/book' },
]

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative flex flex-col h-screen px-8 md:px-16 py-10 bg-cream">
        {/* Film grain */}
        <div
          className="absolute inset-0 pointer-events-none z-10 opacity-[0.055]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='250'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='250' height='250' filter='url(%23g)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Top: photo + nav */}
        <div className="flex justify-end shrink-0 relative z-20">
          <div>
            <div className="w-[clamp(100px,15vw,230px)] aspect-square overflow-hidden shrink-0 shadow-[0_8px_40px_rgba(0,46,9,0.16)] animate-[fadeIn_1s_ease_0.2s_both]">
              <img
                src="/B&W/IMG_1271.JPG"
                alt="Lydia Tong"
                className="w-full h-full object-cover object-[center_15%]"
              />
            </div>

            <nav className="flex flex-col items-end mt-3 gap-0.5">
              {navItems.map((item, i) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="font-serif text-[clamp(1.2rem,1.8vw,2rem)] text-dark-green no-underline leading-tight tracking-tight transition-opacity hover:opacity-45 block text-right animate-[fadeUp_0.5s_ease_both]"
                  style={{ animationDelay: `${1.3 + i * 0.18}s` }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Name — fills remaining space, pushed to bottom */}
        <div className="flex-1 flex flex-col justify-end relative z-20 min-h-0">
          <h1>
            <div className="overflow-hidden text-[clamp(4rem,13vw,17rem)] leading-[0.9] pb-[0.15em] -mb-[0.15em]">
              <span className="block text-dark-green tracking-[-0.04em] leading-[0.9] animate-[swoop_1.1s_cubic-bezier(0.76,0,0.24,1)_0.05s_both]">
                Lydia
              </span>
            </div>
            <div className="overflow-hidden text-[clamp(4rem,13vw,17rem)] leading-[0.9] pb-[0.25em] -mb-[0.05em]">
              <span className="block text-dark-green tracking-[-0.04em] leading-[0.9] pl-[0.14em] animate-[swoop_1.1s_cubic-bezier(0.76,0,0.24,1)_0.18s_both]">
                Tong
              </span>
            </div>
          </h1>
        </div>

        {/* Subheader */}
        <div className="shrink-0 pt-4 flex justify-end relative z-20">
          <p className="font-serif text-[clamp(0.7rem,0.85vw,0.95rem)] font-bold text-muted tracking-wide text-right animate-[fadeIn_0.9s_ease_0.6s_both]">
            Film &amp; Economics, University of Pennsylvania
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
