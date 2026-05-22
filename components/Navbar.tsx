'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const navLinks = [
  { href: '/projekti', label: 'Projekti' },
  { href: '/usluge', label: 'Usluge' },
  { href: '/blog', label: 'Blog' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const sentinelRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const sentinel = document.getElementById('hero-sentinel')
    if (!sentinel) {
      setScrolled(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting)
      },
      { threshold: 0 }
    )

    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? '#ffffff' : 'transparent',
          boxShadow: scrolled ? '0 1px 0 rgba(0,0,0,0.06)' : 'none',
        }}
      >
        <div className="max-w-[1440px] mx-auto px-16 flex items-center justify-between h-16">
          <Link
            href="/"
            className="font-outfit text-[15px] tracking-[0.04em] text-[#111111] transition-opacity duration-300 hover:opacity-50"
            style={{ fontWeight: 300 }}
          >
            Sama Svoj Majstor
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-outfit text-[13px] tracking-[0.04em] text-[#111111] transition-opacity duration-300 hover:opacity-50"
                style={{ fontWeight: 300 }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="font-outfit text-[13px] tracking-[0.04em] text-[#111111] px-5 py-2.5 transition-all duration-300 hover:bg-[#111111] hover:text-white"
              style={{
                fontWeight: 300,
                border: '0.5px solid #111111',
              }}
            >
              Pošalji upit
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden font-outfit text-[13px] tracking-[0.08em] text-[#111111] transition-opacity duration-300 hover:opacity-50"
            style={{ fontWeight: 300 }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Zatvori meni' : 'Otvori meni'}
          >
            {menuOpen ? '×' : 'Menu'}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col pt-16">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-outfit text-[15px] tracking-[0.04em] text-[#111111] px-6 py-5 transition-opacity duration-300 hover:opacity-50"
                style={{
                  fontWeight: 300,
                  borderBottom: '0.5px solid rgba(0,0,0,0.1)',
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              onClick={() => setMenuOpen(false)}
              className="font-outfit text-[15px] tracking-[0.04em] text-[#111111] px-6 py-5 transition-opacity duration-300 hover:opacity-50"
              style={{
                fontWeight: 300,
                borderBottom: '0.5px solid rgba(0,0,0,0.1)',
              }}
            >
              Pošalji upit
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
