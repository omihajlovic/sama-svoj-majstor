import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#111111' }}>
      {/* Top section */}
      <div className="max-w-[1440px] mx-auto px-16 pt-20 pb-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left: Logo + tagline */}
        <div>
          <Link
            href="/"
            className="font-outfit text-[15px] tracking-[0.04em] text-white block mb-3 transition-opacity duration-300 hover:opacity-50"
            style={{ fontWeight: 300 }}
          >
            Sama Svoj Majstor
          </Link>
          <p
            className="font-outfit text-[13px] leading-relaxed"
            style={{ fontWeight: 300, color: 'rgba(255,255,255,0.5)' }}
          >
            Pomažem ti da urediš prostor u kome ćeš zaista uživati — od brzih saveta do kompletnog dizajna enterijera.
          </p>
          {/* Email input placeholder — commented out for later */}
          {/* <div className="mt-6">
            <input type="email" placeholder="Tvoj email" className="..." />
          </div> */}
        </div>

        {/* Middle: Navigation */}
        <div>
          <p
            className="font-outfit text-[11px] uppercase tracking-[0.12em] mb-5"
            style={{ fontWeight: 300, color: 'rgba(255,255,255,0.4)' }}
          >
            Navigacija
          </p>
          <div className="flex flex-col gap-3">
            {[
              { href: '/', label: 'Home' },
              { href: '/projekti', label: 'Projekti' },
              { href: '/usluge', label: 'Usluge' },
              { href: '/blog', label: 'Blog' },
              { href: '/kontakt', label: 'Kontakt' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-outfit text-[13px] text-white transition-opacity duration-300 hover:opacity-50"
                style={{ fontWeight: 300 }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right: Contact */}
        <div>
          <p
            className="font-outfit text-[11px] uppercase tracking-[0.12em] mb-5"
            style={{ fontWeight: 300, color: 'rgba(255,255,255,0.4)' }}
          >
            Kontakt
          </p>
          <div className="flex flex-col gap-3">
            <a
              href="mailto:hello@samasvojmajstor.rs"
              className="font-outfit text-[13px] text-white transition-opacity duration-300 hover:opacity-50"
              style={{ fontWeight: 300 }}
            >
              hello@samasvojmajstor.rs
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-outfit text-[13px] text-white transition-opacity duration-300 hover:opacity-50"
              style={{ fontWeight: 300 }}
            >
              Instagram →
            </a>
          </div>
        </div>
      </div>

      {/* Large brand name */}
      <div className="max-w-[1440px] mx-auto px-16 pb-4">
        <div
          style={{ borderTop: '0.5px solid rgba(255,255,255,0.1)' }}
          className="pt-8"
        >
          <p
            className="font-cormorant text-white leading-none"
            style={{
              fontWeight: 300,
              fontSize: 'clamp(48px, 10vw, 140px)',
              letterSpacing: '-0.02em',
            }}
          >
            Sama Svoj Majstor
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1440px] mx-auto px-16 pb-8 flex justify-between items-center">
        <p
          className="font-outfit text-[12px]"
          style={{ fontWeight: 300, color: 'rgba(255,255,255,0.4)' }}
        >
          © {new Date().getFullYear()} Sama Svoj Majstor
        </p>
        <p
          className="font-outfit text-[12px]"
          style={{ fontWeight: 300, color: 'rgba(255,255,255,0.4)' }}
        >
          Sva prava zadržana
        </p>
      </div>
    </footer>
  )
}
