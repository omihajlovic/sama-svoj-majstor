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
    description: 'Analiziram tvoj prostor — fotografije, skice, dimenzije. Slušam šta kažeš, ali i ono što ne kažeš. Svaki prostor ima specifičan izazov.',
  },
  {
    number: '03',
    title: 'Dogovaramo saradnju',
    description: 'Predlažem pristup koji odgovara tebi — brzisavet ili kompletna saradnja. Definišemo obim posla, rokove i cenu. Sve jasno, bez iznenađenja.',
  },
  {
    number: '04',
    title: 'Dobijaš rešenje',
    description: 'Prezentacija idejnog rešenja — moodboard, plan nameštaja, preporuke za materijale i boje. Razgovaramo, doterujem prema tvom feedbacku.',
  },
  {
    number: '05',
    title: 'Razrađujem detalje',
    description: 'Detaljna specifikacija svakog elementa — koji nameštaj, koji materijal, koji dobavljač, koja cena. Imаš kompletnu listu za nabavku i izvođenje.',
  },
  {
    number: '06',
    title: 'Realizacija i podrška',
    description: 'Pratiš realizaciju, a ja sam tu za sva pitanja. Ako nešto ne proradi kako je planirano, rešavamo zajedno. Projekat je završen kad si zadovoljan/na.',
  },
]

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
    <section className="py-24" style={{ backgroundColor: '#111111' }}>
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

      <div className="max-w-[1440px] mx-auto px-16">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 mb-20 gap-8">
          <h2
            className="font-cormorant text-white"
            style={{ fontWeight: 300, fontSize: 'clamp(36px, 4.5vw, 56px)', lineHeight: 1.1 }}
          >
            Kako izgleda
            <br />
            <em style={{ fontStyle: 'italic' }}>saradnja</em>
          </h2>
          <div className="flex items-end">
            <p
              className="font-outfit text-[15px]"
              style={{ fontWeight: 300, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}
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
              {/* Left: KORAK label above title, both left-aligned */}
              <div>
                <p
                  className="font-outfit text-[12px] uppercase tracking-[0.12em]"
                  style={{ fontWeight: 300, color: 'rgba(255,255,255,0.4)', marginBottom: '0.5rem' }}
                >
                  KORAK {step.number}
                </p>
                <h3
                  className="font-cormorant text-white"
                  style={{ fontWeight: 300, fontSize: '28px', lineHeight: 1.2 }}
                >
                  {step.title}
                </h3>
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

        {/* CTA — centered, 4rem gap above to breathe after last step border */}
        <div className="text-center" style={{ marginTop: '4rem' }}>
          <Link href="/kontakt" className="process-cta">
            Započni svoju transformaciju
          </Link>
        </div>
      </div>
    </section>
  )
}
