import Link from 'next/link'

const painPoints = [
  'Ne znam odakle da počnem sa uređenjem prostora',
  'Kupio/la sam nameštaj koji ne odgovara prostoru',
  'Prostor mi izgleda haotično i bez stila',
  'Nemam budžet za arhitektu, ali ipak hoću lepo',
  'Znam šta volim, ali ne znam kako da to spojim u celinu',
]

const services = [
  {
    name: 'Brzi Saveti',
    tagline: 'Za konkretne odgovore',
    description: 'Jednokratna konsultacija za jednu prostoriju: boje, nameštaj, raspored i materijali. Bez meseci čekanja.',
    price: '45€',
    priceNote: 'po prostoriji',
    duration: '5 do 7 dana',
    includes: [
      'Analiza fotografija i dimenzija prostora',
      'Preporuke za boje, materijale i nameštaj',
      'PDF sa konkretnim proizvodima i linkovima',
    ],
    dark: false,
  },
  {
    name: 'Kompletan Dizajn',
    tagline: 'Od ideje do realizacije',
    description: 'Ceo proces vođen od prvog razgovora do finalnog rezultata. Idealno za nove stanove i rekonstrukcije.',
    price: 'Po dogovoru',
    priceNote: 'prema kvadraturi',
    duration: '4 do 8 nedelja',
    includes: [
      'Idejno rešenje, moodboard i 3D vizualizacija',
      'Kompletna specifikacija materijala',
      'Koordinacija izvođača i praćenje realizacije',
    ],
    dark: true,
  },
]

export default function PainPointsServices() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-[1440px] mx-auto px-5 md:px-16">

        {/* Problem */}
        <div className="grid grid-cols-1 md:grid-cols-[5fr_7fr] gap-8 md:gap-20">
          <div>
            <div className="md:sticky md:top-24">
              <p className="font-outfit text-[14px] text-[#6e6e6e] mb-2" style={{ fontWeight: 300 }}>
                / Da li ti je poznato?
              </p>
              <h2
                className="font-cormorant text-[#111111]"
                style={{ fontWeight: 300, fontSize: 'clamp(34px, 6.25vw, 48px)', lineHeight: 1.1 }}
              >
                Ako se pronalaziš u
                <br />
                <em style={{ fontStyle: 'italic' }}>ovome...</em>
              </h2>
            </div>
          </div>

          <ol style={{ borderTop: '0.5px solid rgba(0,0,0,0.1)' }}>
            {painPoints.map((point, i) => (
              <li
                key={i}
                className="flex items-baseline gap-5 md:gap-8 py-5 md:py-6"
                style={{ borderBottom: '0.5px solid rgba(0,0,0,0.1)' }}
              >
                <span className="font-outfit text-[13px] md:text-[12px] tracking-[0.1em] text-[#6e6e6e] flex-shrink-0" style={{ fontWeight: 300 }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p
                  className="font-cormorant text-[#111111]"
                  style={{ fontWeight: 300, fontStyle: 'italic', fontSize: 'clamp(20px, 2.9vw, 26px)', lineHeight: 1.35 }}
                >
                  „{point}“
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* Bridge */}
        <div className="mt-20 md:mt-32 mb-10 md:mb-14 max-w-[720px]">
          <p className="font-outfit text-[14px] text-[#6e6e6e] mb-2" style={{ fontWeight: 300 }}>
            / Kako mogu da ti pomognem
          </p>
          <h2
            className="font-cormorant text-[#111111] mb-4"
            style={{ fontWeight: 300, fontSize: 'clamp(34px, 6.25vw, 48px)', lineHeight: 1.1 }}
          >
            Dva načina, <em style={{ fontStyle: 'italic' }}>jedan cilj</em>
          </h2>
          <p className="font-outfit text-[16px] text-[#666666]" style={{ fontWeight: 300, lineHeight: 1.7 }}>
            Ako se prepoznaješ bar u jednoj od ovih situacija, izaberi koliko podrške ti treba, a ja ću se pobrinuti za ostalo.
          </p>
        </div>

        {/* Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
          {services.map((s) => {
            const muted = s.dark ? 'rgba(255,255,255,0.7)' : '#666666'
            const label = s.dark ? 'rgba(255,255,255,0.55)' : '#6e6e6e'
            const line = s.dark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.1)'
            const text = s.dark ? '#ffffff' : '#111111'
            return (
              <div
                key={s.name}
                className="flex flex-col p-7 md:p-12"
                style={{ backgroundColor: s.dark ? '#111111' : '#f5f4f1', color: text }}
              >
                <p className="font-outfit text-[13px] md:text-[12px] uppercase tracking-[0.12em] mb-4" style={{ fontWeight: 300, color: label }}>
                  {s.tagline}
                </p>
                <h3
                  className="font-cormorant mb-4"
                  style={{ fontWeight: 300, fontSize: 'clamp(30px, 4.7vw, 40px)', lineHeight: 1.1 }}
                >
                  {s.name}
                </h3>
                <p className="font-outfit text-[15px] mb-8" style={{ fontWeight: 300, lineHeight: 1.7, color: muted }}>
                  {s.description}
                </p>

                <div className="grid grid-cols-2 py-5 mb-8" style={{ borderTop: `0.5px solid ${line}`, borderBottom: `0.5px solid ${line}` }}>
                  <div>
                    <p className="font-outfit text-[13px] md:text-[12px] uppercase tracking-[0.12em] mb-1" style={{ fontWeight: 300, color: label }}>Cena</p>
                    <p className="font-cormorant whitespace-nowrap" style={{ fontWeight: 300, fontSize: 'clamp(21px, 3.1vw, 24px)', lineHeight: 1.2 }}>{s.price}</p>
                    <p className="font-outfit text-[14px] md:text-[13px]" style={{ fontWeight: 300, color: muted }}>{s.priceNote}</p>
                  </div>
                  <div className="pl-4 md:pl-5" style={{ borderLeft: `0.5px solid ${line}` }}>
                    <p className="font-outfit text-[13px] md:text-[12px] uppercase tracking-[0.12em] mb-1" style={{ fontWeight: 300, color: label }}>Trajanje</p>
                    <p className="font-cormorant whitespace-nowrap" style={{ fontWeight: 300, fontSize: 'clamp(21px, 3.1vw, 24px)', lineHeight: 1.2 }}>{s.duration}</p>
                  </div>
                </div>

                <ul className="space-y-3 mb-10">
                  {s.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 font-outfit text-[15px]" style={{ fontWeight: 300, color: muted }}>
                      <span className="inline-block w-3 h-px mt-[0.75em] flex-shrink-0" style={{ backgroundColor: label }} aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                  <Link
                    href="/kontakt"
                    className={`text-center font-outfit text-[14px] md:text-[13px] tracking-[0.08em] px-8 py-4 transition-all duration-300 ${
                      s.dark
                        ? 'bg-white text-[#111111] hover:bg-transparent hover:text-white'
                        : 'bg-[#111111] text-white hover:bg-transparent hover:text-[#111111]'
                    }`}
                    style={{ fontWeight: 300, border: `0.5px solid ${s.dark ? '#ffffff' : '#111111'}` }}
                  >
                    Pošalji upit
                  </Link>
                  <Link
                    href="/usluge"
                    className="group text-center sm:text-left font-outfit text-[14px] md:text-[13px] tracking-[0.04em] py-2 transition-opacity duration-300 hover:opacity-60"
                    style={{ fontWeight: 300, color: text }}
                  >
                    Detalji usluge{' '}
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
