'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import Select from '@/components/Select'

const serviceOptions = [
  { value: 'brzi-saveti', label: 'Brzi saveti', hint: 'Jedna prostorija, od 45€' },
  { value: 'kompletan-dizajn', label: 'Kompletan dizajn', hint: 'Od ideje do realizacije' },
  { value: 'ne-znam', label: 'Nisam siguran/na', hint: 'Pomoći ću ti da izabereš' },
]

const spaceOptions = [
  { value: 'stan', label: 'Stan' },
  { value: 'kuca', label: 'Kuća' },
  { value: 'poslovni', label: 'Poslovni prostor' },
  { value: 'ugostiteljstvo', label: 'Ugostiteljski objekat' },
  { value: 'drugo', label: 'Nešto drugo' },
]

const budgetOptions = [
  { value: 'do-1000', label: 'Do 1.000€' },
  { value: '1000-3000', label: '1.000€ do 3.000€' },
  { value: '3000-plus', label: 'Preko 3.000€' },
  { value: 'ne-znam', label: 'Još ne znam', hint: 'Zajedno ćemo proceniti' },
]

const steps = [
  { title: 'Pošalješ upit', text: 'Par rečenica o prostoru je sasvim dovoljno za početak.' },
  { title: 'Javljam ti se u roku od 48 sati', text: 'Postavim nekoliko pitanja i, ako je potrebno, zamolim te za fotografije prostora.' },
  { title: 'Dogovaramo saradnju', text: 'Predložim pristup, rokove i cenu. Odluku donosiš tek kad ti je sve jasno.' },
]

const trust = ['Odgovor u roku od 48h', 'Bez obaveze', 'Online i uživo']

type Errors = Partial<Record<'ime' | 'kontakt', string>>

const isValidContact = (v: string) => {
  const s = v.trim()
  if (s.includes('@')) return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s)
  return s.replace(/[^\d]/g, '').length >= 8
}

function NextSteps() {
  return (
    <div>
      <p className="form-label mb-6">Šta se dešava posle</p>
      <ol>
        {steps.map((s, i) => (
          <li key={s.title} className="flex gap-5 py-5" style={{ borderTop: '0.5px solid rgba(0,0,0,0.12)' }}>
            <span className="w-6 flex-shrink-0 font-outfit text-[12px] tracking-[0.1em] text-[#6e6e6e] pt-1.5" style={{ fontWeight: 300 }}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <div>
              <p className="font-cormorant text-[#111111] text-[22px] mb-1" style={{ fontWeight: 300, lineHeight: 1.25 }}>
                {s.title}
              </p>
              <p className="font-outfit text-[15px] text-[#666666]" style={{ fontWeight: 300, lineHeight: 1.6 }}>
                {s.text}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

function DirectContact() {
  return (
    <div>
      <p className="form-label mb-4">Radije pišeš direktno?</p>
      <a
        href="mailto:hello@samasvojmajstor.rs"
        className="block font-cormorant text-[#111111] text-[24px] mb-2 transition-opacity duration-300 hover:opacity-60"
        style={{ fontWeight: 300 }}
      >
        hello@samasvojmajstor.rs
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-block font-outfit text-[15px] text-[#111111] py-1 transition-opacity duration-300 hover:opacity-60"
        style={{ fontWeight: 300 }}
      >
        Instagram <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
      </a>
    </div>
  )
}

export default function KontaktPage() {
  const [form, setForm] = useState({
    usluga: '',
    ime: '',
    kontakt: '',
    tipProstora: '',
    kvadratura: '',
    budzet: '',
    poruka: '',
  })
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)
  const imeRef = useRef<HTMLInputElement>(null)
  const kontaktRef = useRef<HTMLInputElement>(null)
  const topRef = useRef<HTMLDivElement>(null)

  const set = (key: keyof typeof form, value: string) => {
    setForm((f) => ({ ...f, [key]: value }))
    if (key in errors) setErrors((e) => ({ ...e, [key]: undefined }))
  }

  const validate = (): Errors => {
    const e: Errors = {}
    if (!form.ime.trim()) e.ime = 'Upiši svoje ime.'
    if (!form.kontakt.trim()) e.kontakt = 'Ostavi email ili broj telefona da bih mogla da ti odgovorim.'
    else if (!isValidContact(form.kontakt)) e.kontakt = 'Proveri email ili broj telefona.'
    return e
  }

  const onBlur = (key: 'ime' | 'kontakt') => {
    if (!form[key].trim()) return
    const e = validate()
    setErrors((prev) => ({ ...prev, [key]: e[key] }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const found = validate()
    setErrors(found)
    if (found.ime) return imeRef.current?.focus()
    if (found.kontakt) return kontaktRef.current?.focus()
    setSubmitted(true)
    requestAnimationFrame(() => topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }))
  }

  const autoGrow = (el: HTMLTextAreaElement) => {
    el.style.height = 'auto'
    el.style.height = `${el.scrollHeight}px`
  }

  const firstName = form.ime.trim().split(/\s+/)[0]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
      {/* Intro panel */}
      <aside
        className="pt-28 pb-12 px-5 md:px-16 lg:pt-40 lg:pb-24 lg:pr-16 lg:pl-[max(4rem,calc((100vw_-_1440px)/2_+_4rem))]"
        style={{ backgroundColor: '#f5f4f1' }}
      >
        <div className="lg:sticky lg:top-32">
          <p className="font-outfit text-[14px] text-[#6e6e6e] mb-2" style={{ fontWeight: 300 }}>
            / Kontakt
          </p>
          <h1
            className="font-cormorant text-[#111111] mb-6"
            style={{ fontWeight: 300, fontSize: 'clamp(40px, 4.4vw, 60px)', lineHeight: 1.05 }}
          >
            Imaš prostor koji <em style={{ fontStyle: 'italic' }}>želiš da urediš?</em>
          </h1>
          <p className="font-outfit text-[16px] text-[#666666] max-w-[440px] mb-8" style={{ fontWeight: 300, lineHeight: 1.7 }}>
            Pošalji mi nekoliko osnovnih informacija o prostoru. Javiću ti se u roku od 48 sati sa predlogom kako dalje.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {trust.map((t) => (
              <li key={t} className="flex items-center gap-2 font-outfit text-[14px] text-[#111111]" style={{ fontWeight: 300 }}>
                <svg width="12" height="9" viewBox="0 0 14 10" fill="none" aria-hidden>
                  <path d="M1 5L5 9L13 1" stroke="#111111" strokeWidth="1.2" />
                </svg>
                {t}
              </li>
            ))}
          </ul>

          <div className="hidden lg:block mt-16 space-y-14">
            <NextSteps />
            <DirectContact />
          </div>
        </div>
      </aside>

      {/* Form */}
      <div ref={topRef} className="px-5 md:px-16 py-12 md:py-16 lg:pt-40 lg:pb-24 lg:pl-20 lg:pr-[max(4rem,calc((100vw_-_1440px)/2_+_4rem))] scroll-mt-20">
        <div className="max-w-[680px]">
          {submitted ? (
            <div className="py-6" role="status">
              <div className="w-14 h-14 flex items-center justify-center mb-8" style={{ border: '1px solid #111111' }}>
                <svg width="22" height="16" viewBox="0 0 14 10" fill="none" aria-hidden>
                  <path d="M1 5L5 9L13 1" stroke="#111111" strokeWidth="1" />
                </svg>
              </div>
              <p className="font-outfit text-[14px] text-[#6e6e6e] mb-2" style={{ fontWeight: 300 }}>
                / Upit je poslat
              </p>
              <h2
                className="font-cormorant text-[#111111] mb-5"
                style={{ fontWeight: 300, fontSize: 'clamp(34px, 6.25vw, 48px)', lineHeight: 1.1 }}
              >
                Hvala, {firstName}.
              </h2>
              <p className="font-outfit text-[16px] text-[#666666] max-w-[520px] mb-10" style={{ fontWeight: 300, lineHeight: 1.7 }}>
                Javiću ti se u roku od 48 sati na <span className="text-[#111111]">{form.kontakt.trim()}</span>. Do tada pogledaj neke od transformacija na kojima sam radila.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                <Link
                  href="/projekti"
                  className="text-center font-outfit text-[13px] tracking-[0.08em] text-white bg-[#111111] px-8 py-4 transition-all duration-300 hover:bg-white hover:text-[#111111]"
                  style={{ fontWeight: 300, border: '0.5px solid #111111' }}
                >
                  Pogledaj projekte
                </Link>
                <Link
                  href="/"
                  className="text-center sm:text-left font-outfit text-[13px] tracking-[0.04em] text-[#111111] py-2 transition-opacity duration-300 hover:opacity-60"
                  style={{ fontWeight: 300 }}
                >
                  Nazad na početnu
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              {/* Service */}
              <fieldset className="mb-12">
                <legend className="form-label mb-4">
                  Šta ti je potrebno?<span className="form-optional">opciono</span>
                </legend>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {serviceOptions.map((o) => {
                    const checked = form.usluga === o.value
                    return (
                      <label
                        key={o.value}
                        className="relative flex sm:flex-col items-start gap-4 sm:gap-6 p-4 sm:p-5 cursor-pointer transition-colors duration-200 has-[:focus-visible]:outline has-[:focus-visible]:outline-1 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-[#111111]"
                        style={{
                          border: `1px solid ${checked ? '#111111' : 'rgba(0,0,0,0.16)'}`,
                          backgroundColor: checked ? '#f5f4f1' : '#ffffff',
                        }}
                      >
                        <input
                          type="radio"
                          name="usluga"
                          value={o.value}
                          checked={checked}
                          onChange={() => set('usluga', o.value)}
                          className="sr-only"
                        />
                        <span
                          className="radio-dot mt-1.5 sm:mt-0 w-4 h-4 flex-shrink-0 flex items-center justify-center"
                          style={{ border: `1px solid ${checked ? '#111111' : '#8c8c8c'}` }}
                          aria-hidden
                        >
                          <span className="radio-dot w-2 h-2" style={{ backgroundColor: '#111111', opacity: checked ? 1 : 0, transition: 'opacity 0.2s' }} />
                        </span>
                        <span>
                          <span className="block font-cormorant text-[#111111] text-[22px] sm:text-[20px]" style={{ fontWeight: 300, lineHeight: 1.15 }}>
                            {o.label}
                          </span>
                          <span className="block font-outfit text-[13px] text-[#6e6e6e] mt-1" style={{ fontWeight: 300 }}>
                            {o.hint}
                          </span>
                        </span>
                      </label>
                    )
                  })}
                </div>
              </fieldset>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
                <div>
                  <label htmlFor="ime" className="form-label">Ime</label>
                  <input
                    ref={imeRef}
                    id="ime"
                    name="ime"
                    type="text"
                    autoComplete="name"
                    placeholder="Tvoje ime"
                    value={form.ime}
                    onChange={(e) => set('ime', e.target.value)}
                    onBlur={() => onBlur('ime')}
                    aria-invalid={!!errors.ime}
                    aria-describedby={errors.ime ? 'ime-error' : undefined}
                    className="form-control"
                  />
                  {errors.ime && <p id="ime-error" className="form-error">{errors.ime}</p>}
                </div>

                <div>
                  <label htmlFor="kontakt" className="form-label">Email ili telefon</label>
                  <input
                    ref={kontaktRef}
                    id="kontakt"
                    name="kontakt"
                    type="text"
                    autoComplete="email"
                    inputMode="email"
                    placeholder="ime@primer.com ili +381…"
                    value={form.kontakt}
                    onChange={(e) => set('kontakt', e.target.value)}
                    onBlur={() => onBlur('kontakt')}
                    aria-invalid={!!errors.kontakt}
                    aria-describedby={errors.kontakt ? 'kontakt-error' : undefined}
                    className="form-control"
                  />
                  {errors.kontakt && <p id="kontakt-error" className="form-error">{errors.kontakt}</p>}
                </div>

                <Select
                  name="tipProstora"
                  label="Tip prostora"
                  optional
                  options={spaceOptions}
                  value={form.tipProstora}
                  onChange={(v) => set('tipProstora', v)}
                />

                <div>
                  <label htmlFor="kvadratura" className="form-label">
                    Kvadratura<span className="form-optional">opciono</span>
                  </label>
                  <div className="relative">
                    <input
                      id="kvadratura"
                      name="kvadratura"
                      type="text"
                      inputMode="numeric"
                      placeholder="npr. 45"
                      value={form.kvadratura}
                      onChange={(e) => set('kvadratura', e.target.value.replace(/[^\d.,]/g, ''))}
                      className="form-control pr-10"
                    />
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 font-outfit text-[15px] text-[#6e6e6e] pointer-events-none" style={{ fontWeight: 300 }}>
                      m²
                    </span>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <Select
                    name="budzet"
                    label="Okvirni budžet"
                    optional
                    options={budgetOptions}
                    value={form.budzet}
                    onChange={(v) => set('budzet', v)}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="poruka" className="form-label">
                    O prostoru<span className="form-optional">opciono</span>
                  </label>
                  <textarea
                    id="poruka"
                    name="poruka"
                    rows={3}
                    placeholder="Šta te muči u prostoru i kakav osećaj želiš da postigneš?"
                    value={form.poruka}
                    onChange={(e) => {
                      set('poruka', e.target.value)
                      autoGrow(e.target)
                    }}
                    className="form-control resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="group w-full mt-12 flex items-center justify-center gap-3 font-outfit text-[14px] tracking-[0.08em] text-white bg-[#111111] py-5 transition-all duration-300 hover:bg-white hover:text-[#111111] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#111111]"
                style={{ fontWeight: 300, border: '0.5px solid #111111' }}
              >
                Pošalji upit
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
              </button>

              <p className="font-outfit text-[13px] text-[#6e6e6e] text-center mt-5 max-w-[460px] mx-auto" style={{ fontWeight: 300, lineHeight: 1.6 }}>
                Odgovaram u roku od 48 sati. Slanje upita te ni na šta ne obavezuje, a podatke koristim samo da bih ti odgovorila.
              </p>
            </form>
          )}

          <div className="lg:hidden mt-16 pt-12 space-y-12" style={{ borderTop: '0.5px solid rgba(0,0,0,0.12)' }}>
            <NextSteps />
            <DirectContact />
          </div>
        </div>
      </div>
    </div>
  )
}
