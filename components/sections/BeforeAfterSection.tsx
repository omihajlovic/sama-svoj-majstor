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
    <section className="py-16 md:py-24" style={{ backgroundColor: '#f5f4f1' }}>
      <div className="max-w-[1440px] mx-auto px-5 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr]">
          {/* Left column — pr gives breathing room without affecting grid split */}
          <div className="flex flex-col justify-center py-4 mb-6 md:mb-0 md:pr-16">
            <p
              className="font-outfit text-[14px] text-[#999999] mb-2"
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
          <div className="min-w-0">
            {/* Slider */}
            <div className="h-[420px] md:h-[520px]">
              <BeforeAfterSlider
                beforeImage={featured.beforeImage}
                afterImage={featured.afterImage}
                height="100%"
              />
            </div>

            {/* Bottom bar: drag hint (left) + prev/next nav (right) */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0 mt-5">

              {/* Left: drag hint */}
              <div className="flex items-center gap-2">
                <span className="text-[#999999]" style={{ fontSize: '13px' }}>⟷</span>
                <span
                  className="font-outfit text-[13px] text-[#999999]"
                  style={{ fontWeight: 300 }}
                >
                  Prevuci da vidiš pre i posle
                </span>
              </div>

              {/* Right: progress + prev/next */}
              <div className="flex items-center justify-between md:justify-start w-full md:w-auto gap-8">
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

                <div className="flex items-center gap-1 md:gap-3">
                  <button
                    onClick={() => setActiveIndex(prevIndex)}
                    className="font-outfit text-[12px] text-[#111111] px-2 py-3 md:p-0 transition-opacity duration-300 hover:opacity-50"
                    style={{ fontWeight: 300 }}
                  >
                    ← Prev
                  </button>
                  <button
                    onClick={() => setActiveIndex(nextIndex)}
                    className="font-outfit text-[12px] text-[#111111] px-2 py-3 md:p-0 transition-opacity duration-300 hover:opacity-50"
                    style={{ fontWeight: 300 }}
                  >
                    Next →
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
