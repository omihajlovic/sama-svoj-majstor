import StatsCounter from '@/components/StatsCounter'

export default function About() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-[1440px] mx-auto px-5 md:px-16">
        {/* Top: tag above heading, both left-aligned */}
        <div className="mb-8">
          <p
            className="font-outfit text-[14px] text-[#6e6e6e] mb-2"
            style={{ fontWeight: 300 }}
          >
            / O meni
          </p>
          <h2
            className="font-cormorant text-[#111111]"
            style={{ fontWeight: 300, fontSize: 'clamp(34px, 6.25vw, 48px)', lineHeight: 1.2 }}
          >
            Novinar po obrazovanju, dizajner po pozivu.
            <br />
            <em style={{ fontStyle: 'italic' }}>Svaki prostor ima svoju priču.</em>
          </h2>
        </div>

        {/* Mid: two paragraphs flush with heading */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-16 mb-12 md:mb-20">
          <p
            className="font-outfit text-[#666666]"
            style={{ fontWeight: 300, fontSize: '16px', lineHeight: 1.8 }}
          >
            Verujem da svaki prostor nosi priču svog stanara. Moj posao nije da ti nametnemo trend, već da te pitam kako živiš, šta te raduje, šta ti smeta, i da iz toga izvučem rešenje koje je samo tvoje. Dizajn enterijera nije luksuz. To je odluka da počneš da živiš bolje, odmah, u prostoru koji već imaš.
          </p>
          <p
            className="font-outfit text-[#666666]"
            style={{ fontWeight: 300, fontSize: '16px', lineHeight: 1.8 }}
          >
            Posle godina pisanja o arhitekturi i dizajnu, počela sam sama da uređujem prostore. Svaki projekat je za mene istraživanje u kom kombinujem znanje o materijalima, svetlosti i ergonomiji sa pažljivim slušanjem klijenta. Rezultat su prostori koji izgledaju lepo, ali se pre svega dobro osećaju.
          </p>
        </div>

      </div>

      <StatsCounter />
    </section>
  )
}
