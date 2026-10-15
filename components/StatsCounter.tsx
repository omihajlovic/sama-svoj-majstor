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
    <div className="max-w-[1440px] mx-auto">
      <div
        className="grid grid-cols-1 md:grid-cols-3"
        style={{ borderTop: '0.5px solid rgba(0,0,0,0.1)' }}
      >
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`
              py-10 px-5 md:py-10
              ${i === 0 ? 'md:pl-16 md:pr-10' : i === stats.length - 1 ? 'md:pl-10 md:pr-16' : 'md:px-10'}
              ${i < stats.length - 1 ? 'border-b md:border-b-0 md:border-r' : ''}
            `}
            style={{
              borderColor: 'rgba(0,0,0,0.1)',
            }}
          >
            <div
              className="font-cormorant text-[#111111]"
              style={{ fontSize: 'clamp(40px, 5vw, 56px)', fontWeight: 300, lineHeight: 1 }}
            >
              <Counter target={stat.number} />{stat.suffix}
            </div>

            <div
              className="font-outfit text-[#111111]"
              style={{ fontSize: '15px', fontWeight: 400, marginTop: '1rem', marginBottom: '0.5rem' }}
            >
              {stat.label}
            </div>

            <div
              className="font-outfit text-[#666666]"
              style={{ fontSize: '15px', fontWeight: 300, lineHeight: 1.7 }}
            >
              {stat.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
