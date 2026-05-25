import BlogCard from '@/components/BlogCard'
import { blogPosts } from '@/data/blog'

export default function BlogPage() {
  return (
    <>
      {/* Header */}
      <div className="pt-40 pb-16" style={{ backgroundColor: '#f5f4f1' }}>
        <div className="max-w-[1440px] mx-auto px-16">
          <p
            className="font-outfit text-[11px] uppercase tracking-[0.12em] text-[#999999] mb-4"
            style={{ fontWeight: 300 }}
          >
            / Tekstovi i saveti
          </p>
          <h1
            className="font-cormorant text-[#111111] mb-6"
            style={{ fontWeight: 300, fontSize: 'clamp(42px, 6vw, 72px)', lineHeight: 1.05 }}
          >
            Blog
          </h1>
          <p
            className="font-outfit text-[14px] text-[#666666]"
            style={{ fontWeight: 300, maxWidth: '480px', lineHeight: 1.7 }}
          >
            Saveti, inspiracija i priče iz prakse — za svakoga ko želi da uredi prostor pametno.
          </p>
        </div>
      </div>

      {/* Posts grid */}
      <div className="py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-[1440px] mx-auto px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
