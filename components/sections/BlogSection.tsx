import Link from 'next/link'
import BlogCard from '@/components/BlogCard'
import { blogPosts } from '@/data/blog'

export default function BlogSection() {
  return (
    <section className="py-24" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-[1440px] mx-auto px-16">
        {/* Header */}
        <div
          className="flex items-end justify-between mb-16"
          style={{ borderBottom: '0.5px solid rgba(0,0,0,0.1)', paddingBottom: '24px' }}
        >
          <h2
            className="font-cormorant text-[#111111]"
            style={{ fontWeight: 300, fontSize: '48px', lineHeight: 1.1 }}
          >
            Blog
          </h2>
          <Link
            href="/blog"
            className="font-outfit text-[12px] text-[#111111] uppercase tracking-[0.08em] transition-opacity duration-300 hover:opacity-50"
            style={{ fontWeight: 300 }}
          >
            Vidi sve →
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}
