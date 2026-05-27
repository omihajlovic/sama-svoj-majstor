const testimonials = [
  {
    quote: 'Sanja je uspela da od našeg malog i haotičnog stana napravi prostor u koji se jedva čekamo da se vratimo kući. Svaka odluka je imala smisla i sve je savršeno funkcionisalo u celini.',
    name: 'Marija S.',
    info: 'Stan, Beograd — 48m²',
  },
  {
    quote: 'Nisam verovala da je moguće toliko promeniti prostor bez rekonstrukcije. Samo prerasporedom nameštaja i novim bojama, stan je postao duplo lepši. I to za razumnu cenu.',
    name: 'Jovana M.',
    info: 'Konsultacija, Novi Sad',
  },
  {
    quote: 'Radili smo na uređenju restorana i ceo proces je bio pravi dobar sa Anom. Slušala je naše ideje, ali je i znala kada da nas zaustavi i predloži bolje rešenje.',
    name: 'Marko R.',
    info: 'Restoran, Beograd — 80m²',
  },
  {
    quote: 'Preporučila bih Anu svakome ko želi da ozbiljno uredi prostor bez da se oseća izgubljeno u procesu. Sve je bilo transparentno, rokovi su ispoštovani i rezultat je prevazišao očekivanja.',
    name: 'Tijana K.',
    info: 'Kuća, Novi Sad — 120m²',
  },
  {
    quote: 'Konačno prostor koji je i lep i funkcionalan. Sanja je razumela da imam malu decu i da mi treba i estetika i praktičnost — i pronašla savršenu ravnotežu.',
    name: 'Nikola P.',
    info: 'Stan, Beograd — 65m²',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24" style={{ backgroundColor: '#f5f4f1' }}>
      <div className="max-w-[1440px] mx-auto px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {/* Left: sticky title */}
          <div>
            <div className="sticky top-24">
              <p
                className="font-outfit text-[14px] text-[#999999] mb-2"
                style={{ fontWeight: 300 }}
              >
                / Utisci
              </p>
              <h2
                className="font-cormorant text-[#111111]"
                style={{ fontWeight: 300, fontSize: 'clamp(32px, 3.5vw, 48px)', lineHeight: 1.1 }}
              >
                Šta klijenti kažu
              </h2>
            </div>
          </div>

          {/* Right: testimonials */}
          <div>
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="py-10"
                style={{ borderBottom: '0.5px solid rgba(0,0,0,0.1)' }}
              >
                <p
                  className="font-cormorant text-[#111111] mb-6"
                  style={{
                    fontWeight: 300,
                    fontSize: '24px',
                    fontStyle: 'italic',
                    lineHeight: 1.5,
                  }}
                >
                  "{t.quote}"
                </p>
                <div>
                  <p
                    className="font-outfit text-[13px] text-[#111111] tracking-[0.08em]"
                    style={{ fontWeight: 300 }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="font-outfit text-[13px] text-[#999999]"
                    style={{ fontWeight: 300 }}
                  >
                    {t.info}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
