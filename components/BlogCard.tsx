'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { BlogPost } from '@/data/blog'

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  const [imgError, setImgError] = useState(false)

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      {/* Image */}
      <div className="relative overflow-hidden mb-4" style={{ aspectRatio: '4/5', backgroundColor: '#f5f4f1' }}>
        {imgError ? (
          // Fallback: neutral placeholder matching site palette
          <div className="absolute inset-0" style={{ backgroundColor: '#e8e6e1' }} />
        ) : (
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 33vw"
            onError={() => setImgError(true)}
          />
        )}
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
