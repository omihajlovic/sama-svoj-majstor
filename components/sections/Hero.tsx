import HeroImage from '@/components/HeroImage'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative md:min-h-screen grid grid-cols-1 md:grid-cols-2" style={{ backgroundColor: '#f5f4f1' }}>
      {/* Hero sentinel for Navbar IntersectionObserver */}
      <div id="hero-sentinel" className="absolute top-1 left-0 w-px h-px pointer-events-none" aria-hidden />

      {/* Left column */}
      <div className="order-2 md:order-1 flex flex-col justify-center px-5 md:px-16 pt-8 pb-12 md:py-24 relative z-10" style={{ backgroundColor: '#f5f4f1' }}>
        <h1
          className="font-cormorant text-[#111111] mb-5 md:mb-8"
          style={{
            fontWeight: 300,
            fontSize: 'clamp(42px, 5vw, 64px)',
            lineHeight: 1.08,
          }}
        >
          Pomažem ti da urediš{' '}
          <em style={{ fontStyle: 'italic' }}>prostor</em>{' '}
          u kome ćeš zaista uživati
        </h1>

        <p
          className="font-outfit text-[#666666] text-[16px] md:text-[18px] mb-8 md:mb-10"
          style={{
            fontWeight: 300,
            lineHeight: 1.7,
          }}
        >
          Od brzih saveta do kompletnog dizajna enterijera — prilagođeno tebi, tvom prostoru i tvojim mogućnostima.
        </p>

        {/* CTAs */}
        <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-8">
          <Link
            href="/projekti"
            className="text-center font-outfit text-[13px] tracking-[0.08em] text-white bg-[#111111] px-8 py-4 transition-all duration-300 hover:bg-white hover:text-[#111111]"
            style={{ fontWeight: 300, border: '0.5px solid #111111' }}
          >
            Pogledaj projekte
          </Link>
          <Link
            href="/kontakt"
            className="text-center font-outfit text-[13px] tracking-[0.08em] text-[#111111] px-8 py-4 transition-all duration-300 hover:bg-[#111111] hover:text-white"
            style={{ fontWeight: 300, border: '0.5px solid #111111' }}
          >
            Pošalji upit
          </Link>
        </div>

      </div>

      {/* Image: first on mobile (with scroll parallax), right column on desktop */}
      <HeroImage />
    </section>
  )
}
