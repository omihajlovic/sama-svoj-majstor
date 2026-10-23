import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#111111' }}>
      {/* Top section */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-16 pt-16 md:pt-20 pb-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left: Logo + tagline */}
        <div>
          <Link
            href="/"
            className="font-outfit text-[20px] tracking-[0.02em] text-white block mb-4 transition-opacity duration-300 hover:opacity-50"
            style={{ fontWeight: 300 }}
          >
            Sama Svoj Majstor
          </Link>
          <p
            className="font-outfit text-[15px] max-w-[340px]"
            style={{ fontWeight: 300, lineHeight: 1.7, color: 'rgba(255,255,255,0.65)' }}
          >
            Pomažem ti da urediš prostor u kome ćeš zaista uživati, od brzih saveta do kompletnog dizajna enterijera.
          </p>
          {/* Email input placeholder, commented out for later */}
          {/* <div className="mt-6">
            <input type="email" placeholder="Tvoj email" className="..." />
          </div> */}
        </div>

        {/* Middle: Navigation */}
        <div>
          <p
            className="font-outfit text-[13px] md:text-[12px] uppercase tracking-[0.12em] mb-4 md:mb-6"
            style={{ fontWeight: 300, color: 'rgba(255,255,255,0.55)' }}
          >
            Navigacija
          </p>
          <div className="flex flex-col gap-1 md:gap-4">
            {[
              { href: '/', label: 'Početna' },
              { href: '/projekti', label: 'Projekti' },
              { href: '/usluge', label: 'Usluge' },
              { href: '/blog', label: 'Blog' },
              { href: '/kontakt', label: 'Kontakt' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 md:py-0 font-outfit text-[16px] text-white transition-opacity duration-300 hover:opacity-50"
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
            className="font-outfit text-[13px] md:text-[12px] uppercase tracking-[0.12em] mb-4 md:mb-6"
            style={{ fontWeight: 300, color: 'rgba(255,255,255,0.55)' }}
          >
            Javi se
          </p>
          <div className="flex flex-col gap-1 md:gap-4">
            <a
              href="mailto:hello@samasvojmajstor.rs"
              className="py-2 md:py-0 font-outfit text-[16px] text-white transition-opacity duration-300 hover:opacity-50"
              style={{ fontWeight: 300 }}
            >
              hello@samasvojmajstor.rs
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 md:py-0 font-outfit text-[16px] text-white transition-opacity duration-300 hover:opacity-50"
              style={{ fontWeight: 300 }}
            >
              Instagram →
            </a>
          </div>
        </div>
      </div>

      {/* Large brand name */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-16 pb-4">
        <div
          style={{ borderTop: '0.5px solid rgba(255,255,255,0.1)' }}
          className="pt-8"
        >
          <p
            className="font-cormorant text-white leading-none"
            style={{
              fontWeight: 300,
              fontSize: 'clamp(44px, 8.4vw, 64px)',
              letterSpacing: '-0.02em',
            }}
          >
            Sama Svoj Majstor
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-16 pb-8 flex justify-between items-center">
        <p
          className="font-outfit text-[14px] md:text-[13px]"
          style={{ fontWeight: 300, color: 'rgba(255,255,255,0.55)' }}
        >
          © {new Date().getFullYear()} Sama Svoj Majstor
        </p>
        <p
          className="font-outfit text-[14px] md:text-[13px]"
          style={{ fontWeight: 300, color: 'rgba(255,255,255,0.55)' }}
        >
          Sva prava zadržana
        </p>
      </div>
    </footer>
  )
}
