'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { number: 48, suffix: '+', label: 'Zadovoljnih klijenata', description: 'Svaki klijent je nova priča i novo rešenje prilagođeno upravo njemu.' },
  { number: 60, suffix: '+', label: 'Završenih projekata', description: 'Od malih stanova do kompleksnih komercijalnih prostora.' },
  { number: 7, suffix: '+', label: 'Godina iskustva', description: 'Znanje stečeno kroz praksu, greške i stalne edukacije.' },
]

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const animated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animated.current) {
        animated.current = true
        const duration = 2000
        const start = performance.now()

        const tick = (now: number) => {
          const elapsed = now - start
          const progress = Math.min(elapsed / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setCount(Math.floor(eased * target))
          if (progress < 1) requestAnimationFrame(tick)
          else setCount(target)
        }

        requestAnimationFrame(tick)
        observer.disconnect()
      }
    }, { threshold: 0 })

    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count}</span>
}

export default function StatsCounter() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderTop: '0.5px solid rgba(0,0,0,0.1)' }}>
      {stats.map((stat) => (
        <div key={stat.label} style={{ padding: '2.5rem 0', borderRight: '0.5px solid rgba(0,0,0,0.1)' }}>
          <div style={{ fontSize: '56px', fontFamily: 'var(--font-lora)', fontWeight: 300, lineHeight: 1 }}>
            <Counter target={stat.number} />{stat.suffix}
          </div>
          <div style={{ fontSize: '13px', fontWeight: 400, marginTop: '1rem', marginBottom: '0.5rem' }}>{stat.label}</div>
          <div style={{ fontSize: '15px', fontWeight: 300, color: '#888', lineHeight: 1.7 }}>{stat.description}</div>
        </div>
      ))}
    </div>
  )
}
