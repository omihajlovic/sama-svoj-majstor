import Image from 'next/image'
import Link from 'next/link'
import type { BlogPost } from '@/data/blog'

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      {/* Image */}
      <div className="relative overflow-hidden mb-4" style={{ aspectRatio: '4/5' }}>
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Meta */}
      <p
        className="font-outfit text-[12px] text-[#999999] mb-2"
        style={{ fontWeight: 300 }}
      >
        {post.date} — {post.author}
      </p>

      {/* Title */}
      <h3
        className="font-cormorant text-[22px] text-[#111111] leading-snug transition-opacity duration-300 group-hover:opacity-50"
        style={{ fontWeight: 300 }}
      >
        {post.title}
      </h3>
    </Link>
  )
}
