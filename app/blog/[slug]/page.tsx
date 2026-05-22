import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { blogPosts } from '@/data/blog'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export default function SingleBlogPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  // Convert simple markdown-like formatting to JSX
  const paragraphs = post.content.split('\n\n').filter(Boolean)

  return (
    <>
      {/* Back link */}
      <div className="pt-28 pb-0" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-[1440px] mx-auto px-16">
          <Link
            href="/blog"
            className="font-outfit text-[13px] text-[#999999] transition-opacity duration-300 hover:opacity-50"
            style={{ fontWeight: 300 }}
          >
            ← Nazad na blog
          </Link>
        </div>
      </div>

      {/* Article header */}
      <div className="pt-10 pb-16" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-[680px] mx-auto px-8">
          <p
            className="font-outfit text-[12px] text-[#999999] mb-6"
            style={{ fontWeight: 300 }}
          >
            {post.date}
          </p>
          <h1
            className="font-cormorant text-[#111111] mb-8"
            style={{ fontWeight: 300, fontSize: 'clamp(32px, 5vw, 56px)', lineHeight: 1.08 }}
          >
            {post.title}
          </h1>
        </div>
      </div>

      {/* Hero image */}
      <div className="relative w-full mb-16" style={{ height: '60vh', minHeight: '400px' }}>
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      {/* Article body */}
      <article className="max-w-[680px] mx-auto px-8 pb-24">
        {paragraphs.map((para, i) => {
          if (para.startsWith('**') && para.endsWith('**')) {
            return (
              <h3
                key={i}
                className="font-cormorant text-[#111111] mb-4 mt-10"
                style={{ fontWeight: 300, fontSize: '28px' }}
              >
                {para.replace(/\*\*/g, '')}
              </h3>
            )
          }

          // Handle inline bold
          const parts = para.split(/\*\*(.*?)\*\*/g)
          return (
            <p
              key={i}
              className="font-outfit text-[#333333] mb-6"
              style={{ fontWeight: 300, fontSize: '16px', lineHeight: 1.9 }}
            >
              {parts.map((part, j) =>
                j % 2 === 1 ? (
                  <strong key={j} className="font-outfit text-[#111111]" style={{ fontWeight: 400 }}>
                    {part}
                  </strong>
                ) : (
                  part
                )
              )}
            </p>
          )
        })}

        {/* End CTA */}
        <div
          className="mt-16 pt-12"
          style={{ borderTop: '0.5px solid rgba(0,0,0,0.1)' }}
        >
          <h3
            className="font-cormorant text-[#111111] mb-4"
            style={{ fontWeight: 300, fontSize: '28px' }}
          >
            Imaš pitanja o uređenju svog prostora?
          </h3>
          <p
            className="font-outfit text-[14px] text-[#666666] mb-8"
            style={{ fontWeight: 300, lineHeight: 1.7 }}
          >
            Javi mi se i rado ću ti pomoći da pronađeš pravo rešenje za tvoj prostor.
          </p>
          <Link
            href="/kontakt"
            className="inline-block font-outfit text-[13px] tracking-[0.08em] text-white bg-[#111111] px-8 py-4 transition-all duration-300 hover:bg-white hover:text-[#111111]"
            style={{ fontWeight: 300, border: '0.5px solid #111111' }}
          >
            Pošalji upit
          </Link>
        </div>
      </article>
    </>
  )
}
