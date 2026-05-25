'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  {
    target: 48,
    label: 'Zadovoljnih klijenata',
    desc: 'Svaki klijent je nova priča i novo rešenje prilagođeno upravo njemu.',
  },
  {
    target: 60,
    label: 'Završenih projekata',
    desc: 'Od malih stanova do kompleksnih komercijalnih prostora.',
  },
  {
    target: 7,
    label: 'Godina iskustva',
    desc: 'Znanje stečeno kroz praksu, greške i stalne edukacije.',
  },
]

// Individual counter — rAF loop with ease-out cubic
function Counter({ target, started }: { target: number; started: boolean }) {
  const [value, setValue] = useState(0)
  const rafRef = useRef<number | null>(null)
  const startRef = useRef<number | null>(null)

  useEffect(() => {
    if (!started) return

    const DURATION = 2000 // ms
    // ease-out cubic: starts fast, decelerates smoothly
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)

    const tick = (timestamp: number) => {
      if (startRef.current === null) startRef.current = timestamp
      const progress = Math.min((timestamp - startRef.current) / DURATION, 1)
      setValue(Math.round(easeOut(progress) * target))
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick)
      }
    }

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [started, target])

  return <>{value}</>
}

// Outer component — observes viewport entry once, then fires all counters
export default function StatsCounter() {
  const [started, setStarted] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = wrapperRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect() // fire once, never again
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={wrapperRef}
      className="grid grid-cols-3"
      style={{ borderTop: '0.5px solid rgba(0,0,0,0.1)' }}
    >
      {stats.map((stat, i) => (
        <div
          key={i}
          className="py-10 px-8"
          style={{ borderLeft: i > 0 ? '0.5px solid rgba(0,0,0,0.1)' : 'none' }}
        >
          {/* "+" is static text — visible immediately, never animated */}
          <p
            className="font-cormorant text-[#111111] mb-2"
            style={{ fontWeight: 300, fontSize: '56px', lineHeight: 1 }}
          >
            <Counter target={stat.target} started={started} />+
          </p>
          <p
            className="font-outfit text-[13px] text-[#111111] mb-2"
            style={{ fontWeight: 400 }}
          >
            {stat.label}
          </p>
          <p
            className="font-outfit text-[#888888]"
            style={{ fontWeight: 300, fontSize: '15px' }}
          >
            {stat.desc}
          </p>
        </div>
      ))}
    </div>
  )
}
