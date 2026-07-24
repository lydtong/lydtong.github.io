import { useEffect, useState } from 'react'

export default function PageTransition({ children, className = '' }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    requestAnimationFrame(() => setVisible(true))
  }, [])

  return (
    <div
      className={`transition-all duration-500 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'} ${className}`}
    >
      {children}
    </div>
  )
}
