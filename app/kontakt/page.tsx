'use client'

import { useState } from 'react'

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    ime: '',
    kontakt: '',
    kvadratura: '',
    tipProstora: '',
    budzet: '',
    poruka: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    border: 'none',
    borderBottom: '0.5px solid #111111',
    background: 'transparent',
    padding: '1rem 0',
    fontFamily: 'var(--font-outfit)',
    fontWeight: 300,
    fontSize: '16px',
    color: '#111111',
    outline: 'none',
  }

  const labelStyle: React.CSSProperties = {
    fontFamily: 'var(--font-outfit)',
    fontWeight: 300,
    fontSize: '11px',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.1em',
    color: '#999999',
    display: 'block',
    marginBottom: '4px',
  }

  return (
    <>
      <div className="pt-40 pb-24" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-[1440px] mx-auto px-16">
          {/* Heading */}
          <div className="text-center mb-16">
            <h1
              className="font-cormorant text-[#111111] mb-4"
              style={{
                fontWeight: 300,
                fontSize: '48px',
                lineHeight: 1.05,
              }}
            >
              Imaš prostor koji želiš da urediš?
            </h1>
            <p
              className="font-outfit text-[#666666]"
              style={{ fontWeight: 300, fontSize: '16px', lineHeight: 1.6 }}
            >
              Pošalji mi osnovne informacije i javiću ti se
            </p>
          </div>

          {/* Form */}
          {submitted ? (
            <div className="max-w-[640px] mx-auto text-center py-16">
              <p
                className="font-cormorant text-[#111111] mb-4"
                style={{ fontWeight: 300, fontSize: '36px' }}
              >
                Hvala na upitu!
              </p>
              <p
                className="font-outfit text-[#666666]"
                style={{ fontWeight: 300, fontSize: '14px', lineHeight: 1.7 }}
              >
                Javiću ti se u roku od 48 sati sa sledećim koracima.
              </p>
            </div>
          ) : (
            <form
              className="max-w-[640px] mx-auto"
              onSubmit={handleSubmit}
            >
              <div className="space-y-10">
                {/* Ime */}
                <div>
                  <label style={labelStyle}>Ime</label>
                  <input
                    name="ime"
                    type="text"
                    placeholder="Tvoje ime"
                    required
                    value={formData.ime}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>

                {/* Email / telefon */}
                <div>
                  <label style={labelStyle}>Email ili telefon</label>
                  <input
                    name="kontakt"
                    type="text"
                    placeholder="email@primer.com ili +381..."
                    required
                    value={formData.kontakt}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>

                {/* Kvadratura */}
                <div>
                  <label style={labelStyle}>Kvadratura okvirno</label>
                  <input
                    name="kvadratura"
                    type="text"
                    placeholder="npr. 45 m²"
                    value={formData.kvadratura}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>

                {/* Tip prostora */}
                <div>
                  <label style={labelStyle}>Tip prostora</label>
                  <select
                    name="tipProstora"
                    value={formData.tipProstora}
                    onChange={handleChange}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                  >
                    <option value="">Izaberi...</option>
                    <option value="stan">Stan</option>
                    <option value="kuca">Kuća</option>
                    <option value="poslovni">Poslovni prostor</option>
                    <option value="ugostiteljstvo">Ugostiteljstvo</option>
                  </select>
                </div>

                {/* Budžet */}
                <div>
                  <label style={labelStyle}>Budžet okvirno</label>
                  <select
                    name="budzet"
                    value={formData.budzet}
                    onChange={handleChange}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                  >
                    <option value="">Izaberi...</option>
                    <option value="do1000">do 1.000€</option>
                    <option value="1000-3000">1.000€ – 3.000€</option>
                    <option value="3000+">3.000€+</option>
                  </select>
                </div>

                {/* Poruka */}
                <div>
                  <label style={labelStyle}>Poruka</label>
                  <textarea
                    name="poruka"
                    rows={4}
                    placeholder="Šta te muči u prostoru? Kakav osećaj želiš da postigneš?"
                    value={formData.poruka}
                    onChange={handleChange}
                    style={{ ...inputStyle, resize: 'none' as const }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full font-outfit text-[13px] tracking-[0.08em] text-white bg-[#111111] py-5 transition-all duration-300 hover:bg-white hover:text-[#111111]"
                  style={{ fontWeight: 300, border: '0.5px solid #111111' }}
                >
                  Pošalji upit
                </button>

                <p
                  className="font-outfit text-[12px] text-[#999999] text-center"
                  style={{ fontWeight: 300 }}
                >
                  Nakon prijave, javiću ti se sa sledećim koracima i detaljima o plaćanju
                </p>
              </div>
            </form>
          )}

          {/* Trust elements */}
          <div className="max-w-[640px] mx-auto mt-16 flex flex-wrap items-center justify-center gap-6"
            style={{ borderTop: '0.5px solid rgba(0,0,0,0.1)', paddingTop: '24px' }}
          >
            {[
              'Odgovaram u roku od 48h',
              'Bez obaveze',
              'hello@samasvojmajstor.rs',
            ].map((item, i) => (
              <span
                key={i}
                className="font-outfit text-[13px] text-[#999999]"
                style={{ fontWeight: 300 }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
