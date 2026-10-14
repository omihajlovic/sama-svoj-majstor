'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { projekti } from '@/data/projekti'

type Project = typeof projekti[0]

export default function ProjectsPreview() {
  const total = projekti.length

  // ── Slide state ───────────────────────────────────────────────────────────
  const [stableIndex, setStableIndex] = useState(0)
  const [incomingIndex, setIncomingIndex] = useState<number | null>(null)
  // 'before' = incoming rendered but not yet transitioned; 'active' = animating in
  const [incomingPhase, setIncomingPhase] = useState<'before' | 'active' | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const touchStartX = useRef<number | null>(null)

  const getSlides = (idx: number): Project[] =>
    [0, 1, 2].map((o) => projekti[(idx + o) % total])

  const navigate = useCallback(
    (dir: 'next' | 'prev') => {
      if (isAnimating) return
      const newIdx =
        dir === 'next'
          ? (stableIndex + 1) % total
          : (stableIndex - 1 + total) % total

      setDirection(dir)
      setIncomingIndex(newIdx)
      setIncomingPhase('before') // mount incoming at initial (invisible) position
      setIsAnimating(true)       // start outgoing transition immediately

      if (timerRef.current) clearTimeout(timerRef.current)
      timerRef.current = setTimeout(() => {
        setStableIndex(newIdx)
        setIncomingIndex(null)
        setIncomingPhase(null)
        setIsAnimating(false)
      }, 680) // slightly longer than the 0.6s CSS transition
    },
    [isAnimating, stableIndex, total]
  )

  // After the incoming strip mounts at its initial position, trigger the
  // transition on the next two animation frames (double-rAF is reliable cross-browser).
  useEffect(() => {
    if (incomingPhase !== 'before') return
    let outer: number
    let inner: number
    outer = requestAnimationFrame(() => {
      inner = requestAnimationFrame(() => setIncomingPhase('active'))
    })
    return () => {
      cancelAnimationFrame(outer)
      cancelAnimationFrame(inner)
    }
  }, [incomingPhase])

  // ── Derived transform values ───────────────────────────────────────────────
  const SLIDE_PX = 28 // how many px the strips translate during crossfade

  // Outgoing strip: when animating, slide out in the nav direction
  const outTranslate = isAnimating
    ? `translateX(${direction === 'next' ? -SLIDE_PX : SLIDE_PX}px)`
    : 'translateX(0px)'

  // Incoming strip: starts offset in opposite direction, animates to 0
  const inTranslate =
    incomingPhase === 'active'
      ? 'translateX(0px)'
      : `translateX(${direction === 'next' ? SLIDE_PX : -SLIDE_PX}px)`
  const inOpacity = incomingPhase === 'active' ? 1 : 0

  // ── Slide renderer ─────────────────────────────────────────────────────────
  const renderSlide = (project: Project, idx: number, keyPrefix: string) => {
    const isActive = idx === 0

    const imageBlock = (
      <>
        <Image
          src={project.afterImage}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {isActive && (
          <>
            {/* Permanent bottom gradient + text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
            <div className="absolute bottom-5 left-5 right-5 md:bottom-8 md:left-8 md:right-auto pointer-events-none">
              <p
                className="font-outfit text-[11px] uppercase tracking-[0.12em] text-white/70 mb-2"
                style={{ fontWeight: 300 }}
              >
                {project.category}
              </p>
              <h3
                className="font-cormorant text-white text-[28px]"
                style={{ fontWeight: 300, lineHeight: 1.1 }}
              >
                {project.title}
              </h3>
              <p
                className="font-outfit text-[13px] text-white/70 mt-1"
                style={{ fontWeight: 300 }}
              >
                {project.description.slice(0, 60)}...
              </p>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 pointer-events-none" />

            {/* ↗ icon — appears on hover */}
            <div
              className="absolute bottom-8 right-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{ width: '32px', height: '32px', border: '1px solid white' }}
            >
              <span className="text-white text-[13px] leading-none">↗</span>
            </div>
          </>
        )}
      </>
    )

    return isActive ? (
      <Link
        key={`${keyPrefix}-${project.id}`}
        href={`/projekti/${project.slug}`}
        className="pp-active relative flex-shrink-0 group"
        style={{ height: '100%', cursor: 'pointer' }}
      >
        {imageBlock}
      </Link>
    ) : (
      <div
        key={`${keyPrefix}-${project.id}-${idx}`}
        className="pp-side relative flex-shrink-0"
        style={{
          height: '100%',
          opacity: 0.5,
          cursor: 'default',
          pointerEvents: 'none',
        }}
      >
        {imageBlock}
      </div>
    )
  }

  const STRIP_STYLE: React.CSSProperties = {
    gap: '14px',
    position: 'absolute',
    inset: 0,
    display: 'flex',
  }

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <section style={{ backgroundColor: '#f5f4f1', overflow: 'hidden' }}>
      <style>{`
        .pp-strip { padding-left: 1.25rem; }
        .pp-active { width: 82vw; }
        .pp-side { width: 40vw; }
        .pp-track { height: 440px; }
        @media (min-width: 768px) {
          .pp-strip { padding-left: calc(max(0px, (100vw - 1440px) / 2) + 4rem); }
          .pp-active { width: 50vw; }
          .pp-side { width: 25vw; }
          .pp-track { height: 500px; }
        }
      `}</style>
      {/* Header — items-end aligns description + buttons to heading baseline */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-16 pt-16 md:pt-24 pb-8 md:pb-12">
        <div className="flex items-end justify-between gap-8 flex-wrap">
          <div className="flex-1 min-w-0">
            <p
              className="font-outfit text-[14px] text-[#999999] mb-2"
              style={{ fontWeight: 300 }}
            >
              / Neki od mojih projekata
            </p>
            <h2
              className="font-cormorant text-[#111111]"
              style={{ fontWeight: 300, fontSize: 'clamp(34px, 6.25vw, 48px)', lineHeight: 1.1 }}
            >
              Svaki prostor ima svoju priču
            </h2>
          </div>

          {/* Description + buttons, bottom-aligned with headline */}
          <div className="flex items-end gap-8">
            <p
              className="font-outfit text-[15px] text-[#666666] max-w-[240px]"
              style={{ fontWeight: 300, lineHeight: 1.7 }}
            >
              Pogledaj neke od transformacija na kojima sam radila.
            </p>
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={() => navigate('prev')}
                disabled={isAnimating}
                className="flex items-center justify-center text-[#111111] transition-opacity duration-300 hover:opacity-50"
                style={{
                  width: '44px',
                  height: '44px',
                  border: '0.5px solid rgba(0,0,0,0.2)',
                  fontWeight: 300,
                  fontSize: '18px',
                }}
                aria-label="Prethodni"
              >
                ←
              </button>
              <button
                onClick={() => navigate('next')}
                disabled={isAnimating}
                className="flex items-center justify-center text-[#111111] transition-opacity duration-300 hover:opacity-50"
                style={{
                  width: '44px',
                  height: '44px',
                  border: '0.5px solid rgba(0,0,0,0.2)',
                  fontWeight: 300,
                  fontSize: '18px',
                }}
                aria-label="Sledeći"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel — two overlapping strips, crossfade + translate */}
      <div
        className="pp-track"
        style={{ position: 'relative', touchAction: 'pan-y' }}
        onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX }}
        onTouchEnd={(e) => {
          if (touchStartX.current === null) return
          const dx = e.changedTouches[0].clientX - touchStartX.current
          touchStartX.current = null
          if (Math.abs(dx) > 40) navigate(dx < 0 ? 'next' : 'prev')
        }}
      >

        {/* Outgoing strip (always rendered) */}
        <div
          className="pp-strip"
          style={{
            ...STRIP_STYLE,
            opacity: isAnimating ? 0 : 1,
            transform: outTranslate,
            transition: isAnimating
              ? 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out'
              : 'none',
            pointerEvents: isAnimating ? 'none' : 'auto',
          }}
        >
          {getSlides(stableIndex).map((p, i) => renderSlide(p, i, 'stable'))}
        </div>

        {/* Incoming strip (rendered only during transition) */}
        {incomingIndex !== null && (
          <div
            className="pp-strip"
            style={{
              ...STRIP_STYLE,
              opacity: inOpacity,
              transform: inTranslate,
              transition: incomingPhase === 'active'
                ? 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out'
                : 'none',
              pointerEvents: 'none',
            }}
          >
            {getSlides(incomingIndex).map((p, i) => renderSlide(p, i, 'incoming'))}
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="text-center pt-10 md:pt-12 pb-16 md:pb-24">
        <Link
          href="/projekti"
          className="font-outfit text-[13px] text-[#111111] transition-opacity duration-300 hover:opacity-50"
          style={{
            fontWeight: 300,
            textDecoration: 'underline',
            textUnderlineOffset: '4px',
          }}
        >
          Pogledaj sve projekte
        </Link>
      </div>
    </section>
  )
}
