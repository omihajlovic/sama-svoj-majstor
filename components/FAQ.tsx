'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: 'Kako funkcioniše plaćanje?',
    answer: 'Plaćanje se dogovara individualno za svaki projekat. Za brze savete plaćanje je fiksno po prostoriji (45€), dok se za kompletan dizajn enterijera cena dogovara na osnovu kvadrature i obima posla. Uplate se vrše u dogovorenim fazama — nikad sve odjednom.',
  },
  {
    question: 'Da li radite online?',
    answer: 'Da, radim i online i uživo. Velika većina projekata se može uspešno realizovati online — putem video poziva, detaljnih upitnika i digitalne razmene materijala. Za klijente u Beogradu i okolini, rado dolazim i na teren za inicijalnu procenu prostora.',
  },
  {
    question: 'Koliko traje projekat?',
    answer: 'Zavisi od obima saradnje. Brzi savet za jednu prostoriju — 5-7 radnih dana. Kompletan dizajn enterijera jednosobnog stana — 4-8 nedelja. Veći prostori i rekonstrukcije traju proporcionalno duže. Sve rokove dogovaramo pre početka rada.',
  },
  {
    question: 'Koja usluga je za mene?',
    answer: 'Ako imaš jasan prostor koji znaš šta hoćeš, ali trebaš nekoga da ti potvrdi pravac i da ti da konkretne preporuke za nameštaj, materijale i boje — brzi saveti su za tebe. Ako ti treba neko ko će od nule osmisliti prostor, napraviti plan nameštaja, odabrati sve materijale i voditi te kroz ceo proces — to je kompletan dizajn.',
  },
  {
    question: 'Da li radite male stanove?',
    answer: 'Apsolutno. Mali stanovi su zapravo moja specijalnost. Dizajnirati mali prostor dobro je zapravo teže od dizajniranja velikog — zahteva kreativnost, poznavanje ergonomije i iskustvo sa pametnim rešenjima za odlaganje. Rado radim stanove od 20m² naviše.',
  },
]

interface FAQProps {
  items?: FAQItem[]
}

export default function FAQ({ items = faqItems }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div>
      {items.map((item, index) => (
        <div
          key={index}
          style={{ borderBottom: '0.5px solid rgba(0,0,0,0.1)' }}
        >
          <button
            className="w-full flex items-start justify-between py-6 text-left transition-opacity duration-300 hover:opacity-60"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span
              className="font-cormorant text-[20px] text-[#111111] pr-8"
              style={{ fontWeight: 300, fontStyle: 'italic' }}
            >
              {item.question}
            </span>
            <span
              className="font-outfit text-[18px] text-[#111111] flex-shrink-0 mt-0.5 transition-transform duration-300"
              style={{
                fontWeight: 300,
                transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)',
              }}
            >
              +
            </span>
          </button>

          {/* Answer with height animation */}
          <div
            className="overflow-hidden transition-all duration-500 ease-in-out"
            style={{
              maxHeight: openIndex === index ? '500px' : '0',
              opacity: openIndex === index ? 1 : 0,
            }}
          >
            <p
              className="font-outfit text-[14px] text-[#666666] leading-[1.8] pb-6"
              style={{ fontWeight: 300 }}
            >
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
