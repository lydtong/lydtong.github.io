import { useState } from 'react'
import Footer from '../components/Footer'
import SiteNav from '../components/SiteNav'

export default function Home() {
  const [jumps, setJumps] = useState([0, 0, 0])
  const jump = i => setJumps(previous => previous.map((value, index) => index === i ? value + 1 : value))
  return (
    <div>
      <SiteNav />
      <main className="name-home">
        <div className="name-stage">
          <h1 className="wordmark" aria-label="Lydia Tong">
            {['lyd', 'ia', 'tong'].map((part, i) => (
              <button key={part} type="button" className={`name-piece name-piece-${i}`} aria-label={`Animate ${part}`} onPointerEnter={() => jump(i)} onClick={() => jump(i)}>
                <span key={jumps[i]} className="name-letters" style={{ '--jump-delay': jumps[i] ? '0ms' : `${i * 150 + 150}ms` }}>{part}</span>
              </button>
            ))}
          </h1>
        </div>
      </main>
      <Footer />
    </div>
  )
}
