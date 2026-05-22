import Image from 'next/image'
import Link from 'next/link'
import type { Projekat } from '@/data/projekti'

interface ProjectCardProps {
  project: Projekat
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projekti/${project.slug}`} className="group block">
      {/* Image container */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
        <Image
          src={project.afterImage}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
          <span
            className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            ↗
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="pt-4">
        <p
          className="font-outfit text-[11px] uppercase tracking-[0.12em] text-[#999999] mb-2"
          style={{ fontWeight: 300 }}
        >
          {project.category}
        </p>
        <h3
          className="font-cormorant text-[24px] text-[#111111] mb-2 transition-opacity duration-300 group-hover:opacity-50"
          style={{ fontWeight: 300 }}
        >
          {project.title}
        </h3>
        <p
          className="font-outfit text-[13px] text-[#666666] leading-relaxed line-clamp-2"
          style={{ fontWeight: 300 }}
        >
          {project.description}
        </p>
      </div>
    </Link>
  )
}
