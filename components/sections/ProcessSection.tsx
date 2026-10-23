'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'

const steps = [
  {
    number: '01',
    title: 'Javiš mi se',
    description: 'Popuniš kratki upitnik ili mi pišeš direktno. Ispričaš mi o prostoru, šta te muči i šta ti je bitno. Bez obaveze, bez pritiska.',
  },
  {
    number: '02',
    title: 'Sagledavam problem',
    description: 'Analiziram tvoj prostor kroz fotografije, skice i dimenzije. Slušam šta kažeš, ali i ono što ne kažeš. Svaki prostor ima specifičan izazov.',
  },
  {
    number: '03',
    title: 'Dogovaramo saradnju',
    description: 'Predlažem pristup koji odgovara tebi: brzi savet ili kompletna saradnja. Definišemo obim posla, rokove i cenu. Sve jasno, bez iznenađenja.',
  },
  {
    number: '04',
    title: 'Dobijaš rešenje',
    description: 'Predstavljam idejno rešenje: moodboard, plan nameštaja, preporuke za materijale i boje. Razgovaramo, doterujem prema tvom feedbacku.',
  },
  {
    number: '05',
    title: 'Razrađujem detalje',
    description: 'Detaljna specifikacija svakog elementa: koji nameštaj, koji materijal, koji dobavljač, koja cena. Imaš kompletnu listu za nabavku i izvođenje.',
  },
  {
    number: '06',
    title: 'Realizacija i podrška',
    description: 'Pratiš realizaciju, a ja sam tu za sva pitanja. Ako nešto ne proradi kako je planirano, rešavamo zajedno. Projekat je završen kad si zadovoljan/na.',
  },
]

const circle = (cx: number, cy: number, r: number) =>
  `M${cx - r} ${cy}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0`

// Architectural line pictograms, drawn as paths only so pathLength-based stroke animation works everywhere
const icons: string[][] = [
  ['M4 8h24v16H4z', 'M4 8l12 10 12-10'],
  ['M3 3h16v16H3z', 'M3 11h7', 'M10 19a5 5 0 0 1 5-5', circle(22, 22, 5), 'M25.5 25.5L29 29'],
  [circle(12, 16, 7), circle(20, 16, 7)],
  ['M4 4h11v11H4z', 'M17 4h11v11H17z', 'M4 17h11v11H4z', circle(22.5, 22.5, 5.5)],
  ['M4 28V4l24 24z', 'M9 23v-7l7 7z', 'M8 28v-3', 'M12 28v-3', 'M16 28v-3', 'M20 28v-3', 'M24 28v-3'],
  [circle(10, 16, 6), circle(10, 16, 2), 'M16 16h13', 'M24 16v4', 'M28 16v5'],
]

function StepIcon({ index }: { index: number }) {
  return (
    <span
      className="step-icon-box w-14 h-14 md:w-16 md:h-16 flex-shrink-0 flex items-center justify-center"
      aria-hidden
    >
      <svg viewBox="0 0 32 32" className="step-icon w-7 h-7 md:w-8 md:h-8" fill="none" stroke="#ffffff" strokeWidth="1">
        {icons[index].map((d, j) => (
          <path key={j} d={d} pathLength={1} style={{ transitionDelay: `${250 + j * 120}ms` }} />
        ))}
      </svg>
    </span>
  )
}

export default function ProcessSection() {
  const stepsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('step-visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    stepsRef.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: '#111111' }}>
      <style>{`
        .step-item {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .step-item.step-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .step-icon-box {
          border: 0.5px solid rgba(255,255,255,0.2);
          transition: border-color 0.4s ease, background-color 0.4s ease;
        }
        .step-item:hover .step-icon-box {
          border-color: rgba(255,255,255,0.6);
          background-color: rgba(255,255,255,0.04);
        }
        .step-icon path {
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          transition: stroke-dashoffset 1.4s cubic-bezier(0.65, 0, 0.35, 1);
        }
        .step-item.step-visible .step-icon path {
          stroke-dashoffset: 0;
        }
        @media (prefers-reduced-motion: reduce) {
          .step-item { opacity: 1; transform: none; transition: none; }
          .step-icon path { stroke-dasharray: none; transition: none; }
        }
        .process-cta {
          display: inline-block;
          font-family: var(--font-outfit);
          font-weight: 300;
          font-size: 14px;
          letter-spacing: 0.08em;
          color: white;
          background: transparent;
          border: 0.5px solid white;
          padding: 1rem 2.5rem;
          transition: background 0.3s ease, color 0.3s ease;
        }
        .process-cta:hover {
          background: white;
          color: #111111;
        }
      `}</style>

      <div className="max-w-[1440px] mx-auto px-5 md:px-16">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 mb-20 gap-8">
          <h2
            className="font-cormorant text-white"
            style={{ fontWeight: 300, fontSize: 'clamp(34px, 6.25vw, 48px)', lineHeight: 1.1 }}
          >
            Kako izgleda
            <br />
            <em style={{ fontStyle: 'italic' }}>saradnja</em>
          </h2>
          <div className="flex items-end">
            <p
              className="font-outfit text-[15px]"
              style={{ fontWeight: 300, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}
            >
              Svaki korak je osmišljen da ti bude jasan i bez stresa. Znaš uvek šta sledeće sledi i šta se od tebe očekuje.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div>
          {steps.map((step, i) => (
            <div
              key={step.number}
              ref={(el) => { stepsRef.current[i] = el }}
              className="step-item grid grid-cols-1 md:grid-cols-2 py-10 gap-6 items-center"
              style={{
                borderTop: '0.5px solid rgba(255,255,255,0.1)',
                borderBottom: i === steps.length - 1 ? '0.5px solid rgba(255,255,255,0.1)' : 'none',
                transitionDelay: `${i * 80}ms`,
              }}
            >
              {/* Left: icon + KORAK label and title */}
              <div className="flex items-center gap-5 md:gap-8">
                <StepIcon index={i} />
                <div>
                <p
                  className="font-outfit text-[13px] md:text-[12px] uppercase tracking-[0.12em]"
                  style={{ fontWeight: 300, color: 'rgba(255,255,255,0.55)', marginBottom: '0.5rem' }}
                >
                  KORAK {step.number}
                </p>
                <h3
                  className="font-cormorant text-white"
                  style={{ fontWeight: 300, fontSize: 'clamp(24px, 3.65vw, 28px)', lineHeight: 1.2 }}
                >
                  {step.title}
                </h3>
                </div>
              </div>

              {/* Right: description */}
              <p
                className="font-outfit text-[15px]"
                style={{ fontWeight: 300, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center" style={{ marginTop: '4rem' }}>
          <Link href="/kontakt" className="process-cta">
            Započni svoju transformaciju
          </Link>
        </div>
      </div>
    </section>
  )
}
