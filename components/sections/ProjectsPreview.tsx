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
    <section style={{ backgroundColor: '#f5f4f1', overflow: 'hidden' }}>
      {/* Header — inside container */}
      <div className="max-w-[1440px] mx-auto px-16 pt-24 pb-12">
        <div className="flex items-start justify-between gap-8 flex-wrap">
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

      {/*
        Carousel:
        - Left edge aligns with container content (same as heading above)
        - Right side bleeds to viewport edge
        - paddingLeft mirrors container offset at all viewport widths
      */}
      <div
        className="flex"
        style={{
          paddingLeft: 'calc(max(0px, (100vw - 1440px) / 2) + 4rem)',
          gap: '14px',
          height: '500px',
        }}
      >
        {visible.map((project, idx) => {
          const isActive = idx === 0

          const imageBlock = (
            <>
              <Image
                src={project.afterImage}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {isActive && (
                <>
                  {/* Permanent bottom gradient + text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                  <div className="absolute bottom-8 left-8 pointer-events-none">
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

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 pointer-events-none" />

                  {/* ↗ icon in thin square — appears on hover, bottom right */}
                  <div
                    className="absolute bottom-8 right-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      width: '32px',
                      height: '32px',
                      border: '1px solid white',
                    }}
                  >
                    <span className="text-white text-[13px] leading-none">↗</span>
                  </div>
                </>
              )}
            </>
          )

          return isActive ? (
            <Link
              key={project.id}
              href={`/projekti/${project.slug}`}
              className="relative flex-shrink-0 group"
              style={{ width: '50vw', height: '100%', cursor: 'pointer' }}
            >
              {imageBlock}
            </Link>
          ) : (
            <div
              key={project.id}
              className="relative flex-shrink-0"
              style={{
                width: '25vw',
                height: '100%',
                opacity: 0.5,
                cursor: 'default',
                pointerEvents: 'none',
              }}
            >
              {imageBlock}
            </div>
          )
        })}
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
