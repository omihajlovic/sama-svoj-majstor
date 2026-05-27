import StatsCounter from '@/components/StatsCounter'

export default function About() {
  return (
    <section className="py-24" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-[1440px] mx-auto px-16">
        {/* Top: tag above heading, both left-aligned */}
        <div className="mb-8">
          <p
            className="font-outfit text-[14px] text-[#999999] mb-2"
            style={{ fontWeight: 300 }}
          >
            / O meni
          </p>
          <h2
            className="font-cormorant text-[#111111]"
            style={{ fontWeight: 300, fontSize: '48px', lineHeight: 1.2 }}
          >
            Novinar po obrazovanju, dizajner po pozivu.
            <br />
            <em style={{ fontStyle: 'italic' }}>Svaki prostor ima svoju priču.</em>
          </h2>
        </div>

        {/* Mid: two paragraphs flush with heading */}
        <div
          className="grid mb-20"
          style={{ gridTemplateColumns: '1fr 1fr', gap: '4rem' }}
        >
          <p
            className="font-outfit text-[#666666]"
            style={{ fontWeight: 300, fontSize: '16px', lineHeight: 1.8 }}
          >
            Verujem da svaki prostor nosi priču svog stanara. Moj posao nije da ti nametnemo trend, već da te pitam kako živiš, šta te raduje, šta ti smeta — i da iz toga izvučem rešenje koje je samo tvoje. Dizajn enterijera nije luksuz. To je odluka da počneš da živiš bolje, odmah, u prostoru koji već imaš.
          </p>
          <p
            className="font-outfit text-[#666666]"
            style={{ fontWeight: 300, fontSize: '16px', lineHeight: 1.8 }}
          >
            Posle godina pisanja o arhitekturi i dizajnu, počela sam sama da uređujem prostore. Svaki projekat je za mene istraživanje — kombinujem znanje o materijalima, svetlosti i ergonomiji sa pažljivim slušanjem klijenta. Rezultat su prostori koji izgledaju lepo, ali se pre svega dobro osećaju.
          </p>
        </div>

      </div>

      {/* Stats sit outside the px-16 container so their own paddingLeft: 4rem
          aligns the numbers flush with the heading and body text above */}
      <StatsCounter />
    </section>
  )
}
