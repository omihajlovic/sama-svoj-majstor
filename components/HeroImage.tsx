'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function HeroImage() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const fadeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mobile = window.matchMedia('(max-width: 767px)')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    let raf = 0

    const update = () => {
      raf = 0
      const wrap = wrapRef.current
      const inner = innerRef.current
      const fade = fadeRef.current
      if (!wrap || !inner || !fade) return

      if (!mobile.matches || reduced.matches) {
        inner.style.transform = ''
        fade.style.opacity = '0'
        return
      }

      const h = wrap.offsetHeight
      const y = Math.min(Math.max(window.scrollY, 0), h)
      const progress = y / h
      inner.style.transform = `translate3d(0, ${y * 0.5}px, 0) scale(${1 + progress * 0.06})`
      fade.style.opacity = String(Math.min(progress * 1.3, 1))
    }

    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    mobile.addEventListener('change', schedule)
    reduced.addEventListener('change', schedule)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      mobile.removeEventListener('change', schedule)
      reduced.removeEventListener('change', schedule)
    }
  }, [])

  return (
    <div
      ref={wrapRef}
      className="order-1 md:order-2 relative overflow-hidden bg-white h-[58vh] min-h-[380px] md:h-auto md:min-h-screen"
    >
      <div ref={innerRef} className="absolute inset-0" style={{ willChange: 'transform' }}>
        <Image
          src="/hero-image-02.jpg"
          alt="Dizajner enterijera"
          fill
          priority
          className="object-cover object-[30%_center] md:object-center"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div
        ref={fadeRef}
        className="absolute inset-0 bg-white pointer-events-none md:hidden"
        style={{ opacity: 0 }}
        aria-hidden
      />
    </div>
  )
}
