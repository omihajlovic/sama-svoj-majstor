'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current || !sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      // Background moves at 30% of scroll speed → content scrolls faster → parallax
      const offset = -rect.top * 0.3
      bgRef.current.style.transform = `translateY(${offset}px)`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // set initial position
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative flex items-center overflow-hidden final-cta-section"
      style={{ minHeight: '500px' }}
    >
      <style>{`
        .final-cta-btn {
          display: inline-block;
          font-family: var(--font-outfit);
          font-weight: 300;
          font-size: 13px;
          letter-spacing: 0.08em;
          color: white;
          padding: 1rem 2rem;
          border: 0.5px solid rgba(255,255,255,0.7);
          transition: all 0.3s ease;
          background: transparent;
          margin-bottom: 1.5rem;
        }
        .final-cta-btn:hover {
          background: white;
          color: #111111;
        }
      `}</style>

      {/* Parallax background — extends 30% beyond section on each side
          so the translateY shift never reveals an edge */}
      <div
        ref={bgRef}
        className="absolute left-0 right-0"
        style={{
          top: '-30%',
          bottom: '-30%',
          backgroundImage: 'url(https://images.unsplash.com/photo-1615873968403-89e068629265?w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          willChange: 'transform',
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.35)' }} />

      {/* Content — centered */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-16 py-24 text-center">
        <h2
          className="font-cormorant text-white mb-6"
          style={{ fontWeight: 300, fontSize: '48px', lineHeight: 1.1, textShadow: '0 2px 8px rgba(0,0,0,0.6), 0 1px 2px rgba(0,0,0,0.8)' }}
        >
          Imaš prostor koji želiš da urediš?
        </h2>

        <p
          className="font-outfit text-white mb-10 mx-auto"
          style={{
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: 1.7,
            maxWidth: '480px',
            textShadow: '0 1px 6px rgba(0,0,0,0.6), 0 1px 2px rgba(0,0,0,0.7)',
          }}
        >
          Pošalji mi osnovne informacije o prostoru i javiću ti se u roku od 48 sati sa sledećim koracima.
        </p>

        <div>
          <Link href="/kontakt" className="final-cta-btn">
            Pošalji upit →
          </Link>
        </div>

        <p
          className="font-outfit mx-auto"
          style={{
            fontWeight: 400,
            fontSize: '14px',
            color: 'white',
            textShadow: '0 1px 6px rgba(0,0,0,0.6), 0 1px 2px rgba(0,0,0,0.7)',
          }}
        >
          Nakon prijave, javiću ti se sa sledećim koracima i detaljima o plaćanju
        </p>
      </div>
    </section>
  )
}
