import Link from 'next/link'

const services = [
  {
    name: 'Brzi Saveti',
    tagline: 'Za konkretne odgovore bez dugog procesa',
    description:
      'Idealno za one koji imaju jasno definisan prostor i trebaju nekoga da im potvrdi pravac — ili da ih zaustavi pre skupih grešaka. Jedna prostorija, jasne preporuke, brz odgovor.',
    includes: [
      'Analiza fotografija i dimenzija prostora',
      'Preporuke za boje i materijale',
      'Sugestije za nameštaj i raspored',
      'Lista konkretnih proizvoda sa linkovima',
      'PDF dokument sa svim preporukama',
      'Jedno kolo korekcija',
    ],
    price: '45€ po prostoriji',
    cta: 'Pošalji upit',
    label: 'Dobijaš:',
  },
  {
    name: 'Kompletan Dizajn Enterijera',
    tagline: 'Od ideje do potpuno uređenog prostora',
    description:
      'Za one koji žele da ne misle ni o čemu — da ceo proces od prvog razgovora do finalne realizacije bude vođen. Idealno za rekonstrukcije, nove stanove i poslovne prostore.',
    includes: [
      'Detaljna analiza prostora (foto + video + teren)',
      'Idejno rešenje i moodboard',
      'Plan nameštaja i 3D vizualizacija',
      'Kompletna specifikacija materijala',
      'Koordinacija sa izvođačima',
      'Praćenje realizacije i podrška do kraja',
      'Neograničene konsultacije tokom procesa',
    ],
    price: 'Po dogovoru',
    cta: 'Pošalji upit',
    label: 'Uključuje:',
  },
]

export default function UslugePage() {
  return (
    <>
      {/* Header */}
      <div className="pt-40 pb-16" style={{ backgroundColor: '#f5f4f1' }}>
        <div className="max-w-[1440px] mx-auto px-16">
          <p
            className="font-outfit text-[11px] uppercase tracking-[0.12em] text-[#999999] mb-4"
            style={{ fontWeight: 300 }}
          >
            / Saradnja
          </p>
          <h1
            className="font-cormorant text-[#111111]"
            style={{
              fontWeight: 300,
              fontSize: 'clamp(30px, 5vw, 72px)',
              lineHeight: 1.05,
              maxWidth: '800px',
            }}
          >
            Izaberi način saradnje koji ti najviše odgovara
          </h1>
        </div>
      </div>

      {/* Services */}
      <div style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-[1440px] mx-auto px-16">
          {services.map((service, i) => (
            <div
              key={i}
              className="py-20"
              style={{ borderBottom: '0.5px solid rgba(0,0,0,0.1)' }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {/* Left */}
                <div>
                  <h2
                    className="font-cormorant text-[#111111] mb-3"
                    style={{ fontWeight: 300, fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 1.05 }}
                  >
                    {service.name}
                  </h2>
                  <p
                    className="font-outfit text-[14px] text-[#666666] mb-6"
                    style={{ fontWeight: 300, fontStyle: 'italic' }}
                  >
                    {service.tagline}
                  </p>
                  <p
                    className="font-outfit text-[14px] text-[#666666] mb-10"
                    style={{ fontWeight: 300, lineHeight: 1.8 }}
                  >
                    {service.description}
                  </p>
                  <div className="mb-8">
                    <p
                      className="font-outfit text-[11px] uppercase tracking-[0.12em] text-[#999999] mb-4"
                      style={{ fontWeight: 300 }}
                    >
                      {service.label}
                    </p>
                    <ul className="space-y-3">
                      {service.includes.map((item, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 font-outfit text-[14px] text-[#444444]"
                          style={{ fontWeight: 300 }}
                        >
                          <span className="text-[#999999] mt-0.5">—</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right */}
                <div className="flex flex-col justify-between">
                  <div>
                    <p
                      className="font-outfit text-[11px] uppercase tracking-[0.12em] text-[#999999] mb-3"
                      style={{ fontWeight: 300 }}
                    >
                      Cena
                    </p>
                    <p
                      className="font-cormorant text-[#111111] mb-10"
                      style={{ fontWeight: 300, fontSize: '36px' }}
                    >
                      {service.price}
                    </p>
                  </div>
                  <Link
                    href="/kontakt"
                    className="inline-block font-outfit text-[13px] tracking-[0.08em] text-white bg-[#111111] px-8 py-4 transition-all duration-300 hover:bg-white hover:text-[#111111] self-start"
                    style={{ fontWeight: 300, border: '0.5px solid #111111' }}
                  >
                    {service.cta}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison note */}
        <div className="max-w-[1440px] mx-auto px-16 py-16">
          <p
            className="font-outfit text-[14px] text-[#666666] text-center"
            style={{ fontWeight: 300, maxWidth: '600px', margin: '0 auto', lineHeight: 1.8 }}
          >
            Brzi saveti su za smernice i ideju, dok je kompletan dizajn za potpunu realizaciju prostora. Nisam sigurna/an koja je za tebe?{' '}
            <Link href="/kontakt" className="text-[#111111] underline underline-offset-4 hover:opacity-50 transition-opacity">
              Javi mi se
            </Link>{' '}
            i zajedno ćemo pronaći odgovor.
          </p>
        </div>
      </div>
    </>
  )
}
