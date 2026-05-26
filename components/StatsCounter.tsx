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
    // max-w + auto margins mirror the container used in About.tsx so the
    // border-top and column borders align with the section content above.
    <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          borderTop: '0.5px solid rgba(0,0,0,0.1)',
        }}
      >
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            style={{
              paddingTop: '2.5rem',
              paddingBottom: '2.5rem',
              // 4rem matches the px-16 container used elsewhere in About
              paddingLeft: '4rem',
              paddingRight: i === stats.length - 1 ? '4rem' : '0',
              borderRight: i < stats.length - 1 ? '0.5px solid rgba(0,0,0,0.1)' : 'none',
            }}
          >
            {/* Animated number + static suffix */}
            <div
              style={{
                fontSize: '56px',
                fontFamily: 'var(--font-cormorant)',
                fontWeight: 300,
                lineHeight: 1,
                color: '#111111',
              }}
            >
              <Counter target={stat.number} />{stat.suffix}
            </div>

            {/* Label */}
            <div
              style={{
                fontSize: '13px',
                fontWeight: 400,
                color: '#111111',
                marginTop: '1rem',
                marginBottom: '0.5rem',
              }}
            >
              {stat.label}
            </div>

            {/* Description */}
            <div
              style={{
                fontSize: '15px',
                fontWeight: 300,
                color: '#888888',
                lineHeight: 1.7,
              }}
            >
              {stat.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
