import FAQ from '@/components/FAQ'

export default function FAQSection() {
  return (
    <section className="py-24" style={{ backgroundColor: '#f5f4f1' }}>
      <div className="max-w-[1440px] mx-auto px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {/* Left: sticky title */}
          <div>
            <div className="sticky top-24">
              <h2
                className="font-cormorant text-[#111111]"
                style={{ fontWeight: 300, fontSize: 'clamp(32px, 3.5vw, 48px)', lineHeight: 1.1 }}
              >
                Često postavljana pitanja
              </h2>
            </div>
          </div>

          {/* Right: accordion */}
          <div style={{ borderTop: '0.5px solid rgba(0,0,0,0.1)' }}>
            <FAQ />
          </div>
        </div>
      </div>
    </section>
  )
}
