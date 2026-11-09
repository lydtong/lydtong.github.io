import { useEffect, useRef } from 'react'

// Soft glow + dot under the pointer, with dust particles shed on movement
export default function CursorTrail() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas || !window.matchMedia('(hover: hover)').matches) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const mouse = { x: -100, y: -100 }
    const prev = { x: -100, y: -100 }
    const particles = []
    let lastSpawn = 0
    let frame

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const overPhoto = (x, y) => {
      const photo = document.querySelector('.hero-photo')
      if (!photo) return false
      const r = photo.getBoundingClientRect()
      return x >= r.left && x <= r.right && y >= r.top && y <= r.bottom
    }

    const onMove = (e) => {
      prev.x = mouse.x
      prev.y = mouse.y
      mouse.x = e.clientX
      mouse.y = e.clientY
      if (overPhoto(mouse.x, mouse.y)) return
      const now = Date.now()
      const dx = mouse.x - prev.x
      const dy = mouse.y - prev.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (now - lastSpawn > 30 && dist > 2) {
        const count = Math.min(Math.floor(dist / 8), 3)
        for (let i = 0; i < count; i++) {
          const angle = Math.random() * Math.PI * 2
          const speed = 0.3 + 0.8 * Math.random()
          particles.push({
            x: mouse.x + (Math.random() - 0.5) * 10,
            y: mouse.y + (Math.random() - 0.5) * 10,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            opacity: 0.5 + 0.3 * Math.random(),
            size: 1.5 + 2 * Math.random(),
            life: 1,
          })
        }
        lastSpawn = now
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        p.vx *= 0.98
        p.vy *= 0.98
        p.life -= 0.012
        p.opacity = 0.6 * p.life
        if (p.life <= 0) { particles.splice(i, 1); continue }
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(239, 244, 195, ${p.opacity})`
        ctx.fill()
      }
      if (mouse.x > 0 && mouse.y > 0 && !overPhoto(mouse.x, mouse.y)) {
        const glow = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 60)
        glow.addColorStop(0, 'rgba(239, 244, 195, 0.08)')
        glow.addColorStop(1, 'rgba(239, 244, 195, 0)')
        ctx.beginPath()
        ctx.arc(mouse.x, mouse.y, 60, 0, Math.PI * 2)
        ctx.fillStyle = glow
        ctx.fill()
        ctx.beginPath()
        ctx.arc(mouse.x, mouse.y, 3, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(239, 244, 195, 0.25)'
        ctx.fill()
      }
      frame = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMove)
    frame = requestAnimationFrame(draw)
    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(frame)
    }
  }, [])

  return <canvas ref={ref} className="cursor-trail" aria-hidden="true" />
}
