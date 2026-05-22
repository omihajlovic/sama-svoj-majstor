import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { projekti } from '@/data/projekti'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return projekti.map((p) => ({ slug: p.slug }))
}

export default function SingleProjekatPage({ params }: Props) {
  const project = projekti.find((p) => p.slug === params.slug)
  if (!project) notFound()

  const currentIndex = projekti.findIndex((p) => p.slug === params.slug)
  const nextProject = projekti[(currentIndex + 1) % projekti.length]

  return (
    <>
      {/* Breadcrumb + header */}
      <div className="pt-36 pb-16" style={{ backgroundColor: '#f5f4f1' }}>
        <div className="max-w-[1440px] mx-auto px-16">
          <div className="flex items-center gap-3 mb-8">
            <Link
              href="/projekti"
              className="font-outfit text-[12px] text-[#999999] transition-opacity duration-300 hover:opacity-50"
              style={{ fontWeight: 300 }}
            >
              ← Nazad na projekte
            </Link>
            <span className="text-[#999999]">·</span>
            <span
              className="font-outfit text-[12px] text-[#999999]"
              style={{ fontWeight: 300 }}
            >
              {project.category}
            </span>
          </div>

          <h1
            className="font-cormorant text-[#111111] mb-6"
            style={{ fontWeight: 300, fontSize: 'clamp(36px, 5.5vw, 72px)', lineHeight: 1.05 }}
          >
            {project.title}
          </h1>

          <div className="flex gap-8 flex-wrap">
            <div>
              <p className="font-outfit text-[11px] uppercase tracking-[0.1em] text-[#999999] mb-1" style={{ fontWeight: 300 }}>
                Površina
              </p>
              <p className="font-outfit text-[14px] text-[#111111]" style={{ fontWeight: 300 }}>
                {project.surface}
              </p>
            </div>
            <div>
              <p className="font-outfit text-[11px] uppercase tracking-[0.1em] text-[#999999] mb-1" style={{ fontWeight: 300 }}>
                Trajanje
              </p>
              <p className="font-outfit text-[14px] text-[#111111]" style={{ fontWeight: 300 }}>
                {project.duration}
              </p>
            </div>
            <div>
              <p className="font-outfit text-[11px] uppercase tracking-[0.1em] text-[#999999] mb-1" style={{ fontWeight: 300 }}>
                Kategorija
              </p>
              <p className="font-outfit text-[14px] text-[#111111]" style={{ fontWeight: 300 }}>
                {project.category}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Before/After slider */}
      <div style={{ height: '600px' }}>
        <BeforeAfterSlider
          beforeImage={project.beforeImage}
          afterImage={project.afterImage}
          height="600px"
        />
      </div>

      {/* Problem + Rešenje */}
      <section className="py-24" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-[1440px] mx-auto px-16 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2
              className="font-cormorant text-[#111111] mb-6"
              style={{ fontWeight: 300, fontSize: '28px' }}
            >
              Problem
            </h2>
            <p
              className="font-outfit text-[14px] text-[#666666]"
              style={{ fontWeight: 300, lineHeight: 1.8 }}
            >
              {project.problem}
            </p>
          </div>
          <div>
            <h2
              className="font-cormorant text-[#111111] mb-6"
              style={{ fontWeight: 300, fontSize: '28px' }}
            >
              Rešenje
            </h2>
            <p
              className="font-outfit text-[14px] text-[#666666]"
              style={{ fontWeight: 300, lineHeight: 1.8 }}
            >
              {project.resenje}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-24" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-[1440px] mx-auto px-16">
          <h2
            className="font-cormorant text-[#111111] mb-10"
            style={{ fontWeight: 300, fontSize: '36px' }}
          >
            Galerija
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.gallery.map((img, i) => (
              <div key={i} className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <Image
                  src={img}
                  alt={`${project.title} — slika ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ backgroundColor: '#f5f4f1' }}>
        <div className="max-w-[1440px] mx-auto px-16">
          <h2
            className="font-cormorant text-[#111111] mb-6"
            style={{ fontWeight: 300, fontSize: 'clamp(28px, 3vw, 42px)' }}
          >
            Želiš ovako nešto?
          </h2>
          <p
            className="font-outfit text-[14px] text-[#666666] mb-8"
            style={{ fontWeight: 300, maxWidth: '400px', margin: '0 auto 2rem' }}
          >
            Svaki prostor je drugačiji, ali svaki prostor ima potencijal. Javi mi se i razgovaramo.
          </p>
          <Link
            href="/kontakt"
            className="inline-block font-outfit text-[13px] tracking-[0.08em] text-white bg-[#111111] px-8 py-4 transition-all duration-300 hover:bg-white hover:text-[#111111] mb-4"
            style={{ fontWeight: 300, border: '0.5px solid #111111' }}
          >
            Pošalji upit
          </Link>
          <p
            className="font-outfit text-[12px] text-[#999999] block mt-4"
            style={{ fontWeight: 300 }}
          >
            Nakon prijave, javiću ti se sa sledećim koracima
          </p>
        </div>
      </section>

      {/* Next project */}
      <section style={{ borderTop: '0.5px solid rgba(0,0,0,0.1)', backgroundColor: '#ffffff' }}>
        <Link
          href={`/projekti/${nextProject.slug}`}
          className="block max-w-[1440px] mx-auto px-16 py-10 flex items-center justify-between group transition-opacity duration-300 hover:opacity-50"
        >
          <div>
            <p className="font-outfit text-[11px] uppercase tracking-[0.12em] text-[#999999] mb-2" style={{ fontWeight: 300 }}>
              Sledeći projekat
            </p>
            <p className="font-cormorant text-[#111111] text-[28px]" style={{ fontWeight: 300 }}>
              {nextProject.title}
            </p>
          </div>
          <span className="text-[#111111] text-2xl">→</span>
        </Link>
      </section>
    </>
  )
}
