'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { projekti } from '@/data/projekti'

export default function ProjectsPreview() {
  const [startIndex, setStartIndex] = useState(0)
  const total = projekti.length

  const prev = () => setStartIndex((i) => (i - 1 + total) % total)
  const next = () => setStartIndex((i) => (i + 1) % total)

  const visible = [0, 1, 2].map((offset) => projekti[(startIndex + offset) % total])

  return (
    <section style={{ backgroundColor: '#f5f4f1' }}>
      <div className="max-w-[1440px] mx-auto px-16 pt-24 pb-16">
        {/* Top row */}
        <div className="flex items-start justify-between mb-12 gap-8 flex-wrap">
          <div className="flex-1 min-w-0">
            <p
              className="font-outfit text-[11px] uppercase tracking-[0.12em] text-[#999999] mb-4"
              style={{ fontWeight: 300 }}
            >
              / Neki od mojih projekata
            </p>
            <h2
              className="font-cormorant text-[#111111]"
              style={{ fontWeight: 300, fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1.1 }}
            >
              Svaki prostor ima svoju priču
            </h2>
          </div>
          <div className="flex items-start gap-8">
            <p
              className="font-outfit text-[13px] text-[#666666] max-w-[240px]"
              style={{ fontWeight: 300, lineHeight: 1.7 }}
            >
              Pogledaj neke od transformacija na kojima sam radila.
            </p>
            {/* Prev/Next buttons */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={prev}
                className="flex items-center justify-center text-[#111111] transition-opacity duration-300 hover:opacity-50"
                style={{
                  width: '44px',
                  height: '44px',
                  border: '0.5px solid rgba(0,0,0,0.2)',
                  fontWeight: 300,
                  fontSize: '18px',
                }}
                aria-label="Prethodni"
              >
                ←
              </button>
              <button
                onClick={next}
                className="flex items-center justify-center text-[#111111] transition-opacity duration-300 hover:opacity-50"
                style={{
                  width: '44px',
                  height: '44px',
                  border: '0.5px solid rgba(0,0,0,0.2)',
                  fontWeight: 300,
                  fontSize: '18px',
                }}
                aria-label="Sledeći"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel — full width, no padding */}
      <div className="flex overflow-hidden" style={{ height: '500px' }}>
        {visible.map((project, idx) => (
          <Link
            key={project.id}
            href={`/projekti/${project.slug}`}
            className="relative flex-shrink-0 transition-opacity duration-500 group"
            style={{
              width: idx === 0 ? '50%' : '25%',
              opacity: idx === 0 ? 1 : 0.5,
            }}
          >
            <Image
              src={project.afterImage}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Text overlay on first slide */}
            {idx === 0 && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-8">
                <div className="flex items-end justify-between">
                  <div>
                    <p
                      className="font-outfit text-[11px] uppercase tracking-[0.12em] text-white/70 mb-2"
                      style={{ fontWeight: 300 }}
                    >
                      {project.category}
                    </p>
                    <h3
                      className="font-cormorant text-white text-[28px]"
                      style={{ fontWeight: 300, lineHeight: 1.1 }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="font-outfit text-[13px] text-white/70 mt-1"
                      style={{ fontWeight: 300 }}
                    >
                      {project.description.slice(0, 60)}...
                    </p>
                  </div>
                  <span className="text-white text-xl">↗</span>
                </div>
              </div>
            )}
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center py-12">
        <Link
          href="/projekti"
          className="font-outfit text-[13px] text-[#111111] transition-opacity duration-300 hover:opacity-50"
          style={{
            fontWeight: 300,
            textDecoration: 'underline',
            textUnderlineOffset: '4px',
          }}
        >
          Pogledaj sve projekte
        </Link>
      </div>
    </section>
  )
}
