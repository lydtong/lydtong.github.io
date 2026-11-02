import { useState } from 'react'

// 28px rounded square: the company's image when it exists, otherwise initials
export default function LogoMark({ name, src, fallback }) {
  const [failed, setFailed] = useState(false)
  return (
    <span className="logo-mark" aria-hidden="true">
      {src && !failed ? <img src={src} alt="" onError={() => setFailed(true)} /> : fallback}
    </span>
  )
}
