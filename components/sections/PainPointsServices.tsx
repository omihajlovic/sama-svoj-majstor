import Link from 'next/link'

const painPoints = [
  'Ne znam odakle da počnem sa uređenjem prostora',
  'Kupio/la sam nameštaj koji ne odgovara prostoru',
  'Prostor mi izgleda haotično i bez stila',
  'Nemam budžet za arhitektu, ali ipak hoću lepo',
]

const services = [
  {
    name: 'Brzi Saveti',
    description: 'Jednokratna konsultacija za konkretne odgovore — boje, nameštaj, raspored, materijali. Bez meseci čekanja.',
    href: '/usluge',
  },
  {
    name: 'Kompletan Dizajn',
    description: 'Od ideje do realizacije — plan prostora, odabir svih elemenata, praćenje izvođenja radova.',
    href: '/usluge',
  },
]

export default function PainPointsServices() {
  return (
    <section className="py-24" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-[1440px] mx-auto px-16">
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '5rem' }}>
          {/* Left: pain points */}
          <div>
            <h2
              className="font-cormorant text-[#111111] mb-12"
              style={{ fontWeight: 300, fontSize: 'clamp(36px, 4vw, 52px)', lineHeight: 1.1 }}
            >
              Ako se pronalaziš u{' '}
              <em style={{ fontStyle: 'italic' }}>ovome...</em>
            </h2>

            <div>
              {painPoints.map((point, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 py-5"
                  style={{ borderBottom: '0.5px solid rgba(0,0,0,0.1)' }}
                >
                  <span className="font-outfit text-[15px] text-[#999999] mt-0.5" style={{ fontWeight: 300 }}>—</span>
                  <p className="font-outfit text-[15px] text-[#444444]" style={{ fontWeight: 300 }}>
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: services */}
          <div>
            <p
              className="font-outfit text-[14px] text-[#999999] mb-8"
              style={{ fontWeight: 300 }}
            >
              / Kako mogu da ti pomognem
            </p>

            <div>
              {services.map((service, i) => (
                <Link
                  key={i}
                  href={service.href}
                  className="flex items-start justify-between gap-4 py-8 group transition-opacity duration-300 hover:opacity-50"
                  style={{ borderBottom: '0.5px solid rgba(0,0,0,0.1)' }}
                >
                  <div>
                    <h3
                      className="font-cormorant text-[#111111] mb-3"
                      style={{ fontWeight: 300, fontSize: '36px', lineHeight: 1.1 }}
                    >
                      {service.name}
                    </h3>
                    <p
                      className="font-outfit text-[13px] text-[#888888]"
                      style={{ fontWeight: 300, lineHeight: 1.7 }}
                    >
                      {service.description}
                    </p>
                  </div>
                  <span className="font-outfit text-[20px] text-[#111111] mt-1 flex-shrink-0" style={{ fontWeight: 300 }}>
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
