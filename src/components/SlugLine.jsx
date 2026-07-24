import { useState, useEffect, useRef } from 'react'

export default function SlugLine({ text }) {
  const ref = useRef(null)
  const [displayed, setDisplayed] = useState('')
  const [started, setStarted] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    let i = 0
    const id = setInterval(() => {
      i++
      setDisplayed(text.slice(0, i))
      if (i >= text.length) {
        clearInterval(id)
        setDone(true)
      }
    }, 28)
    return () => clearInterval(id)
  }, [started, text])

  return (
    <span
      ref={ref}
      className={`font-mono text-[0.7rem] tracking-[0.2em] uppercase text-muted block mb-4 transition-opacity duration-100 ${started ? 'opacity-100' : 'opacity-0'}`}
    >
      {displayed}
      {started && !done && <span className="animate-pulse">|</span>}
    </span>
  )
}
