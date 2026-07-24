import { useState, useRef, useEffect } from 'react'
import Lightbox from './Lightbox'

export default function PhotoGrid({ images, columns = 3 }) {
  const [lbIndex, setLbIndex] = useState(null)
  const [visibleSet, setVisibleSet] = useState(new Set())
  const gridRef = useRef(null)
  const srcs = images.map((img) => (typeof img === 'string' ? img : img.src))

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const imgs = grid.querySelectorAll('img')
          imgs.forEach((img, i) => {
            setTimeout(() => {
              setVisibleSet((prev) => new Set(prev).add(i))
            }, Math.min(i * 50, 500))
          })
          observer.unobserve(grid)
        }
      },
      { threshold: 0.05 }
    )
    observer.observe(grid)
    return () => observer.disconnect()
  }, [images.length])

  const colClass = columns === 2 ? 'columns-2' : 'columns-3'

  return (
    <>
      <div ref={gridRef} className={`${colClass} gap-3 mt-8`}>
        {images.map((img, i) => {
          const src = typeof img === 'string' ? img : img.src
          const alt = typeof img === 'string' ? 'Photo' : img.alt || 'Photo'
          return (
            <img
              key={src}
              src={src}
              alt={alt}
              loading="lazy"
              className={`w-full block mb-3 break-inside-avoid cursor-pointer shadow-[0_2px_10px_rgba(0,46,9,0.1)] transition-all duration-500 hover:opacity-80 hover:scale-[1.01] ${
                visibleSet.has(i) ? 'opacity-100' : 'opacity-0'
              }`}
              onClick={() => setLbIndex(i)}
            />
          )
        })}
      </div>

      <Lightbox
        images={srcs}
        index={lbIndex}
        onClose={() => setLbIndex(null)}
        onNav={(dir) =>
          setLbIndex((prev) => (prev + dir + srcs.length) % srcs.length)
        }
      />
    </>
  )
}
