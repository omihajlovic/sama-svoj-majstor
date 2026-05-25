'use client'

import { useState } from 'react'
import Link from 'next/link'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'
import { projekti } from '@/data/projekti'

export default function BeforeAfterSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const featured = projekti[activeIndex]
  const nextIndex = (activeIndex + 1) % projekti.length
  const prevIndex = (activeIndex - 1 + projekti.length) % projekti.length

  return (
    <section className="py-0" style={{ backgroundColor: '#f5f4f1' }}>
      <div className="max-w-[1440px] mx-auto px-16 py-24">
        <div
          className="grid gap-12"
          style={{ gridTemplateColumns: '280px 1fr' }}
        >
          {/* Left column */}
          <div className="flex flex-col justify-center py-4">
            <p
              className="font-outfit text-[11px] uppercase tracking-[0.12em] text-[#999999] mb-6"
              style={{ fontWeight: 300 }}
            >
              / Transformacije
            </p>
            <h3
              className="font-cormorant text-[#111111] mb-1"
              style={{ fontWeight: 300, fontSize: '32px', lineHeight: 1.15 }}
            >
              {featured.title}
            </h3>
            <p
              className="font-cormorant text-[#666666] mb-8"
              style={{ fontWeight: 300, fontSize: '20px', fontStyle: 'italic' }}
            >
              {featured.location}, {featured.surface}
            </p>

            <div className="mb-8">
              <div className="mb-3" style={{ borderBottom: '0.5px solid rgba(0,0,0,0.1)', paddingBottom: '12px' }}>
                <p className="font-outfit text-[11px] uppercase tracking-[0.1em] text-[#999999] mb-1" style={{ fontWeight: 300 }}>Tip projekta</p>
                <p className="font-outfit text-[13px] text-[#444444]" style={{ fontWeight: 300 }}>{featured.category}</p>
              </div>
              <div className="pt-2">
                <p className="font-outfit text-[11px] uppercase tracking-[0.1em] text-[#999999] mb-1" style={{ fontWeight: 300 }}>Trajanje</p>
                <p className="font-outfit text-[13px] text-[#444444]" style={{ fontWeight: 300 }}>{featured.duration}</p>
              </div>
            </div>

            <p
              className="font-outfit text-[13px] text-[#666666] mb-8"
              style={{ fontWeight: 300, lineHeight: 1.7 }}
            >
              Svaki prostor ima potencijal. Pogledaj kako izgledaju transformacije pre i posle — od prvog stanja do finalnog rezultata.
            </p>

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

          {/* Right: slider + nav below */}
          <div>
            {/* Slider */}
            <div style={{ height: '520px' }}>
              <BeforeAfterSlider
                beforeImage={featured.beforeImage}
                afterImage={featured.afterImage}
                height="520px"
              />
            </div>

            {/* Prev/Next navigation below slider */}
            <div className="flex items-center justify-end gap-8 mt-5">
              <div className="flex items-center gap-6">
                {/* Progress line */}
                <div
                  className="w-32 h-px"
                  style={{ backgroundColor: 'rgba(0,0,0,0.1)', position: 'relative' }}
                >
                  <div
                    className="h-px bg-[#111111] transition-all duration-500"
                    style={{ width: `${((activeIndex + 1) / projekti.length) * 100}%` }}
                  />
                </div>

                <span
                  className="font-outfit text-[12px] text-[#999999]"
                  style={{ fontWeight: 300 }}
                >
                  {activeIndex + 1} / {projekti.length}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActiveIndex(prevIndex)}
                  className="font-outfit text-[12px] text-[#111111] transition-opacity duration-300 hover:opacity-50"
                  style={{ fontWeight: 300 }}
                >
                  ← Prev
                </button>
                <button
                  onClick={() => setActiveIndex(nextIndex)}
                  className="font-outfit text-[12px] text-[#111111] transition-opacity duration-300 hover:opacity-50"
                  style={{ fontWeight: 300 }}
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
