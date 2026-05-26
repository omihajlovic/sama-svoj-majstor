import Image from 'next/image'
import Link from 'next/link'

export default function WhoIsBehind() {
  return (
    <section style={{ backgroundColor: '#ffffff' }}>
      <div className="grid grid-cols-1 md:grid-cols-2" style={{ minHeight: '600px' }}>
        {/* Left: content */}
        <div className="flex flex-col justify-center px-16 py-24">
          <p
            className="font-outfit text-[14px] text-[#999999] mb-6"
            style={{ fontWeight: 300 }}
          >
            / Ko stoji iza ovih projekata
          </p>
          <h2
            className="font-cormorant text-[#111111] mb-8"
            style={{
              fontWeight: 300,
              fontSize: 'clamp(28px, 3vw, 42px)',
              lineHeight: 1.15,
            }}
          >
            Novinar koja je pronašla poziv u uređenju prostora
          </h2>
          <div className="mb-8">
            <p
              className="font-outfit text-[14px] text-[#666666] mb-4"
              style={{ fontWeight: 300, lineHeight: 1.8 }}
            >
              Počela sam karijeru kao novinarka koja je pisala o arhitekturi i dizajnu. Godinama sam intervjuisala arhitekte, pratila izložbe, pisala o najlepšim prostorima sveta — i sve vreme sam znala da to što opisujem hoću da radim, ne samo da opisujem.
            </p>
            <p
              className="font-outfit text-[14px] text-[#666666]"
              style={{ fontWeight: 300, lineHeight: 1.8 }}
            >
              Danas radim sa klijentima koji nemaju neograničen budžet ali imaju jasan osećaj za to šta žele. Pomažem im da taj osećaj prevedu u prostor koji funkcioniše i koji vole.
            </p>
          </div>

          <Link
            href="/kontakt"
            className="inline-block font-outfit text-[13px] tracking-[0.08em] text-white bg-[#111111] px-8 py-4 transition-all duration-300 hover:bg-white hover:text-[#111111] mb-4 self-start"
            style={{ fontWeight: 300, border: '0.5px solid #111111' }}
          >
            Pošalji upit
          </Link>
          <p
            className="font-outfit text-[12px] text-[#999999]"
            style={{ fontWeight: 300 }}
          >
            Nakon prijave, javiću ti se sa sledećim koracima
          </p>
        </div>

        {/* Right: full height photo */}
        <div className="relative min-h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900&q=80"
            alt="Ana Nikolić — dizajner enterijera"
            fill
            className="object-cover object-center"
            sizes="50vw"
          />
        </div>
      </div>
    </section>
  )
}
