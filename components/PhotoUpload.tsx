'use client'

import { useEffect, useId, useMemo, useState } from 'react'

const MAX_FILES = 8
const MAX_MB = 10

type Props = { files: File[]; onChange: (files: File[]) => void }

export default function PhotoUpload({ files, onChange }: Props) {
  const id = useId()
  const [dragging, setDragging] = useState(false)
  const [error, setError] = useState('')

  const previews = useMemo(() => files.map((f) => URL.createObjectURL(f)), [files])
  useEffect(() => () => previews.forEach((u) => URL.revokeObjectURL(u)), [previews])

  const add = (list: FileList | null) => {
    if (!list) return
    const incoming = Array.from(list)
    const images = incoming.filter((f) => f.type.startsWith('image/'))
    const fitting = images.filter((f) => f.size <= MAX_MB * 1024 * 1024)
    const room = MAX_FILES - files.length
    const accepted = fitting.slice(0, Math.max(room, 0))

    if (images.length < incoming.length) setError('Možeš da dodaš samo fotografije.')
    else if (fitting.length < images.length) setError(`Neke fotografije su veće od ${MAX_MB} MB.`)
    else if (fitting.length > room) setError(`Najviše ${MAX_FILES} fotografija.`)
    else setError('')

    if (accepted.length) onChange([...files, ...accepted])
  }

  const remove = (index: number) => {
    onChange(files.filter((_, i) => i !== index))
    setError('')
  }

  const full = files.length >= MAX_FILES

  return (
    <div>
      <p className="form-label mb-3">
        Fotografije prostora<span className="form-optional">opciono</span>
      </p>

      {!full && (
        <label
          htmlFor={id}
          onDragOver={(e) => {
            e.preventDefault()
            setDragging(true)
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={(e) => {
            e.preventDefault()
            setDragging(false)
            add(e.dataTransfer.files)
          }}
          className="group flex flex-col items-center justify-center text-center gap-3 px-6 py-8 md:py-10 cursor-pointer transition-colors duration-200 has-[:focus-visible]:outline has-[:focus-visible]:outline-1 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-[#111111]"
          style={{
            border: `1px dashed ${dragging ? '#111111' : '#8c8c8c'}`,
            backgroundColor: dragging ? '#f5f4f1' : '#fbfaf8',
          }}
        >
          <input
            id={id}
            type="file"
            accept="image/*"
            multiple
            className="sr-only"
            onChange={(e) => {
              add(e.target.files)
              e.target.value = ''
            }}
          />
          <span
            className="w-11 h-11 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-0.5"
            style={{ border: '1px solid #111111' }}
            aria-hidden
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 3v12M3 9h12" stroke="#111111" strokeWidth="1" />
            </svg>
          </span>
          <span className="font-cormorant text-[#111111] text-[20px]" style={{ fontWeight: 300, lineHeight: 1.2 }}>
            <span className="hidden md:inline">Prevuci fotografije ovde ili klikni da ih izabereš</span>
            <span className="md:hidden">Dodaj fotografije iz galerije</span>
          </span>
          <span className="font-outfit text-[14px] md:text-[13px] text-[#6e6e6e]" style={{ fontWeight: 300 }}>
            Do {MAX_FILES} fotografija, najviše {MAX_MB} MB po slici. Slike mi pomažu da ti dam konkretniji odgovor.
          </span>
        </label>
      )}

      {files.length > 0 && (
        <div className="mt-4">
          <ul className="grid grid-cols-3 sm:grid-cols-4 gap-2">
            {files.map((f, i) => (
              <li key={`${f.name}-${f.lastModified}-${i}`} className="relative aspect-square overflow-hidden bg-[#f5f4f1]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={previews[i]} alt={f.name} className="w-full h-full object-cover" />
                <button
                  type="button"
                  onClick={() => remove(i)}
                  aria-label={`Ukloni ${f.name}`}
                  className="absolute top-1.5 right-1.5 w-8 h-8 flex items-center justify-center bg-white/90 transition-colors duration-200 hover:bg-white"
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                    <path d="M1 1l8 8M9 1L1 9" stroke="#111111" strokeWidth="1" />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
          <p className="font-outfit text-[14px] md:text-[13px] text-[#6e6e6e] mt-3" style={{ fontWeight: 300 }}>
            {files.length} od {MAX_FILES} fotografija
          </p>
        </div>
      )}

      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
