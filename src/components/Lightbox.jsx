import { useEffect, useCallback, useState } from 'react'

export default function Lightbox({ images, index, onClose, onNav }) {
  const isOpen = index !== null && images.length > 0
  const multi = images.length > 1
  const [animateIn, setAnimateIn] = useState(false)

  const handleKey = useCallback((e) => {
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowLeft' && multi) onNav(-1)
    if (e.key === 'ArrowRight' && multi) onNav(1)
  }, [onClose, onNav, multi])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKey)
      requestAnimationFrame(() => setAnimateIn(true))
    } else {
      setAnimateIn(false)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [isOpen, handleKey])

  if (!isOpen) return null

  return (
    <div
      className={`fixed inset-0 bg-black/92 z-[1000] flex items-center justify-center p-8 transition-opacity duration-250 ${animateIn ? 'opacity-100' : 'opacity-0'}`}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="fixed top-5 right-6 bg-transparent border-none text-white/55 text-3xl cursor-pointer z-[1001] font-sans leading-none transition-colors hover:text-white"
        aria-label="Close"
      >
        ×
      </button>

      {multi && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); onNav(-1) }}
            className="fixed left-3 top-1/2 -translate-y-1/2 bg-transparent border-none text-white/40 text-4xl cursor-pointer p-4 font-sans z-[1001] leading-none transition-colors hover:text-white/80 select-none"
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onNav(1) }}
            className="fixed right-3 top-1/2 -translate-y-1/2 bg-transparent border-none text-white/40 text-4xl cursor-pointer p-4 font-sans z-[1001] leading-none transition-colors hover:text-white/80 select-none"
            aria-label="Next"
          >
            ›
          </button>
        </>
      )}

      <img
        key={images[index]}
        src={images[index]}
        alt="Expanded photo"
        className={`max-w-[82vw] max-h-[88vh] object-contain shadow-[0_8px_40px_rgba(0,0,0,0.7)] transition-all duration-250 ${animateIn ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  )
}
