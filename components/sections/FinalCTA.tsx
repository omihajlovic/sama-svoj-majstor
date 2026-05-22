import Link from 'next/link'

export default function FinalCTA() {
  return (
    <section
      className="relative flex items-center final-cta-section"
      style={{
        minHeight: '500px',
        backgroundImage: 'url(https://images.unsplash.com/photo-1615873968403-89e068629265?w=1600&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
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

      {/* Overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.35)' }} />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-16 py-24">
        <h2
          className="font-cormorant text-white mb-6"
          style={{
            fontWeight: 300,
            fontSize: 'clamp(32px, 4vw, 52px)',
            lineHeight: 1.1,
            maxWidth: '600px',
          }}
        >
          Imaš prostor koji želiš da urediš?
        </h2>
        <p
          className="font-outfit mb-10"
          style={{
            fontWeight: 300,
            fontSize: '14px',
            color: 'rgba(255,255,255,0.7)',
            maxWidth: '400px',
            lineHeight: 1.7,
          }}
        >
          Pošalji mi osnovne informacije o prostoru i javiću ti se u roku od 48 sati sa sledećim koracima.
        </p>
        <Link href="/kontakt" className="final-cta-btn">
          Pošalji upit ↗
        </Link>
        <p
          className="font-outfit text-[12px] block"
          style={{ fontWeight: 300, color: 'rgba(255,255,255,0.5)' }}
        >
          Nakon prijave, javiću ti se sa sledećim koracima i detaljima o plaćanju
        </p>
      </div>
    </section>
  )
}
