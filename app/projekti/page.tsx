'use client'

import { useState } from 'react'
import ProjectCard from '@/components/ProjectCard'
import { projekti } from '@/data/projekti'

const categories = ['Svi', 'Stanovi', 'Kuhinje', 'Poslovni prostori', 'Ugostiteljstvo']

export default function ProjektiPage() {
  const [activeCategory, setActiveCategory] = useState('Svi')

  const filtered =
    activeCategory === 'Svi'
      ? projekti
      : projekti.filter((p) => p.category === activeCategory)

  return (
    <>
      {/* Header */}
      <div className="pt-40 pb-16" style={{ backgroundColor: '#f5f4f1' }}>
        <div className="max-w-[1440px] mx-auto px-16">
          <p
            className="font-outfit text-[14px] text-[#999999] mb-2"
            style={{ fontWeight: 300 }}
          >
            / Moji radovi
          </p>
          <h1
            className="font-cormorant text-[#111111] mb-6"
            style={{ fontWeight: 300, fontSize: 'clamp(42px, 6vw, 72px)', lineHeight: 1.05 }}
          >
            Projekti
          </h1>
          <p
            className="font-outfit text-[14px] text-[#666666]"
            style={{ fontWeight: 300, maxWidth: '480px', lineHeight: 1.7 }}
          >
            Svaki prostor je drugačija priča. Pogledaj transformacije koje smo uradili zajedno sa klijentima.
          </p>
        </div>
      </div>

      {/* Filter tabs */}
      <div
        className="sticky top-16 z-30"
        style={{ backgroundColor: '#ffffff', borderBottom: '0.5px solid rgba(0,0,0,0.1)' }}
      >
        <div className="max-w-[1440px] mx-auto px-16">
          <div className="flex gap-2 py-4 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="font-outfit text-[12px] tracking-[0.06em] px-5 py-2 whitespace-nowrap transition-all duration-300"
                style={{
                  fontWeight: 300,
                  backgroundColor: activeCategory === cat ? '#111111' : 'transparent',
                  color: activeCategory === cat ? '#ffffff' : '#111111',
                  border: activeCategory === cat ? '0.5px solid #111111' : '0.5px solid rgba(0,0,0,0.2)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-[1440px] mx-auto px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p
              className="font-outfit text-[14px] text-[#999999] text-center py-20"
              style={{ fontWeight: 300 }}
            >
              Nema projekata u ovoj kategoriji.
            </p>
          )}
        </div>
      </div>
    </>
  )
}
