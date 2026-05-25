export default function About() {
  return (
    <section className="py-28" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-[1440px] mx-auto px-16">
        {/* Top: tag + statement */}
        <div className="grid mb-16" style={{ gridTemplateColumns: '160px 1fr' }}>
          <p
            className="font-outfit text-[12px] text-[#999999] pt-2"
            style={{ fontWeight: 300 }}
          >
            / O meni
          </p>
          <h2
            className="font-cormorant text-[#111111]"
            style={{ fontWeight: 300, fontSize: 'clamp(28px, 3vw, 38px)', lineHeight: 1.2 }}
          >
            Novinar po obrazovanju, dizajner po pozivu.
            <br />
            <em style={{ fontStyle: 'italic' }}>Svaki prostor ima svoju priču.</em>
          </h2>
        </div>

        {/* Mid: two paragraphs */}
        <div
          className="grid mb-20"
          style={{ gridTemplateColumns: '160px 1fr 1fr', gap: '4rem' }}
        >
          <div />
          <p
            className="font-outfit text-[13px] text-[#666666]"
            style={{ fontWeight: 300, lineHeight: 1.8 }}
          >
            Verujem da svaki prostor nosi priču svog stanara. Moj posao nije da ti nametnemo trend, već da te pitam kako živiš, šta te raduje, šta ti smeta — i da iz toga izvučem rešenje koje je samo tvoje. Dizajn enterijera nije luksuz. To je odluka da počneš da živiš bolje, odmah, u prostoru koji već imaš.
          </p>
          <p
            className="font-outfit text-[13px] text-[#666666]"
            style={{ fontWeight: 300, lineHeight: 1.8 }}
          >
            Posle godina pisanja o arhitekturi i dizajnu, počela sam sama da uređujem prostore. Svaki projekat je za mene istraživanje — kombinujem znanje o materijalima, svetlosti i ergonomiji sa pažljivim slušanjem klijenta. Rezultat su prostori koji izgledaju lepo, ali se pre svega dobro osećaju.
          </p>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-3"
          style={{ borderTop: '0.5px solid rgba(0,0,0,0.1)' }}
        >
          {[
            {
              number: '48+',
              label: 'Zadovoljnih klijenata',
              desc: 'Svaki klijent je nova priča i novo rešenje prilagođeno upravo njemu.',
            },
            {
              number: '60+',
              label: 'Završenih projekata',
              desc: 'Od malih stanova do kompleksnih komercijalnih prostora.',
            },
            {
              number: '7+',
              label: 'Godina iskustva',
              desc: 'Znanje stečeno kroz praksu, greške i stalne edukacije.',
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="py-10 px-8"
              style={{
                borderLeft: i > 0 ? '0.5px solid rgba(0,0,0,0.1)' : 'none',
              }}
            >
              <p
                className="font-cormorant text-[#111111] mb-2"
                style={{ fontWeight: 300, fontSize: '56px', lineHeight: 1 }}
              >
                {stat.number}
              </p>
              <p
                className="font-outfit text-[13px] text-[#111111] mb-2"
                style={{ fontWeight: 400 }}
              >
                {stat.label}
              </p>
              <p
                className="font-outfit text-[12px] text-[#888888]"
                style={{ fontWeight: 300 }}
              >
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
