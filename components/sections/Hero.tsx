import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen grid grid-cols-1 md:grid-cols-2" style={{ backgroundColor: '#f5f4f1' }}>
      {/* Hero sentinel for Navbar IntersectionObserver */}
      <div id="hero-sentinel" className="absolute top-1 left-0 w-px h-px pointer-events-none" aria-hidden />

      {/* Left column */}
      <div className="flex flex-col justify-center px-16 py-24 relative z-10" style={{ backgroundColor: '#f5f4f1' }}>
        <h1
          className="font-cormorant text-[#111111] mb-8"
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
          className="font-outfit text-[#666666] mb-10"
          style={{
            fontWeight: 300,
            fontSize: '18px',
            lineHeight: 1.7,
          }}
        >
          Od brzih saveta do kompletnog dizajna enterijera — prilagođeno tebi, tvom prostoru i tvojim mogućnostima.
        </p>

        {/* CTAs */}
        <div className="flex items-center gap-8 mb-0 flex-wrap">
          <Link
            href="/projekti"
            className="font-outfit text-[13px] tracking-[0.08em] text-white bg-[#111111] px-8 py-4 transition-all duration-300 hover:bg-white hover:text-[#111111]"
            style={{ fontWeight: 300, border: '0.5px solid #111111' }}
          >
            Pogledaj projekte
          </Link>
          <Link
            href="/kontakt"
            className="font-outfit text-[13px] text-[#111111] transition-opacity duration-300 hover:opacity-50"
            style={{
              fontWeight: 300,
              textDecoration: 'underline',
              textUnderlineOffset: '4px',
            }}
          >
            Pošalji upit
          </Link>
        </div>

      </div>

      {/* Right column: full-height image to browser edge */}
      <div className="relative min-h-[50vh] md:min-h-screen">
        <Image
          src="/hero-image.jpg"
          alt="Dizajner enterijera"
          fill
          priority
          className="object-cover object-center"
          sizes="50vw"
        />
      </div>
    </section>
  )
}
