'use client'

import { useEffect, useId, useRef, useState } from 'react'

export type SelectOption = { value: string; label: string; hint?: string }

type Props = {
  name: string
  label: string
  options: SelectOption[]
  value: string
  onChange: (value: string) => void
  placeholder?: string
  optional?: boolean
}

export default function Select({ name, label, options, value, onChange, placeholder = 'Izaberi', optional }: Props) {
  const id = useId()
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const rootRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const typed = useRef({ text: '', at: 0 })

  const selected = options.find((o) => o.value === value)

  const openList = (index?: number) => {
    const current = options.findIndex((o) => o.value === value)
    setActive(index ?? (current >= 0 ? current : 0))
    setOpen(true)
  }

  const close = (focusButton = true) => {
    setOpen(false)
    if (focusButton) buttonRef.current?.focus()
  }

  const choose = (index: number) => {
    onChange(options[index].value)
    close()
  }

  useEffect(() => {
    if (!open) return
    listRef.current?.focus()
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) close(false)
    }
    document.addEventListener('pointerdown', onPointer)
    return () => document.removeEventListener('pointerdown', onPointer)
  }, [open])

  useEffect(() => {
    if (!open) return
    listRef.current?.querySelector<HTMLElement>(`[data-index="${active}"]`)?.scrollIntoView({ block: 'nearest' })
  }, [active, open])

  const typeahead = (key: string) => {
    const now = Date.now()
    typed.current = { text: now - typed.current.at < 600 ? typed.current.text + key.toLowerCase() : key.toLowerCase(), at: now }
    const match = options.findIndex((o) => o.label.toLowerCase().startsWith(typed.current.text))
    if (match >= 0) setActive(match)
  }

  const onButtonKey = (e: React.KeyboardEvent) => {
    if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(e.key)) {
      e.preventDefault()
      openList()
    }
  }

  const onListKey = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown': e.preventDefault(); setActive((a) => Math.min(a + 1, options.length - 1)); break
      case 'ArrowUp': e.preventDefault(); setActive((a) => Math.max(a - 1, 0)); break
      case 'Home': e.preventDefault(); setActive(0); break
      case 'End': e.preventDefault(); setActive(options.length - 1); break
      case 'Enter':
      case ' ': e.preventDefault(); choose(active); break
      case 'Escape': e.preventDefault(); close(); break
      case 'Tab': close(false); break
      default: if (e.key.length === 1) typeahead(e.key)
    }
  }

  return (
    <div ref={rootRef} className="relative">
      <span id={`${id}-label`} className="form-label">
        {label}
        {optional && <span className="form-optional">opciono</span>}
      </span>

      <button
        ref={buttonRef}
        type="button"
        id={`${id}-button`}
        className="form-control flex items-center justify-between gap-4 text-left"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-labelledby={`${id}-label ${id}-button`}
        data-open={open || undefined}
        onClick={() => (open ? close() : openList())}
        onKeyDown={onButtonKey}
      >
        <span className={selected ? 'text-[#111111]' : 'text-[#757575]'}>{selected ? selected.label : placeholder}</span>
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          aria-hidden
          className="flex-shrink-0 transition-transform duration-300"
          style={{ transform: open ? 'rotate(180deg)' : 'none' }}
        >
          <path d="M1 1.5L6 6.5L11 1.5" stroke="#111111" strokeWidth="1" />
        </svg>
      </button>
      <input type="hidden" name={name} value={value} />

      <ul
        ref={listRef}
        role="listbox"
        tabIndex={-1}
        aria-labelledby={`${id}-label`}
        aria-activedescendant={open ? `${id}-opt-${active}` : undefined}
        onKeyDown={onListKey}
        className="absolute left-0 right-0 z-30 mt-2 max-h-[320px] overflow-auto bg-white outline-none transition-[opacity,transform] duration-200"
        style={{
          border: '0.5px solid rgba(0,0,0,0.15)',
          boxShadow: '0 18px 40px -12px rgba(17,17,17,0.18)',
          opacity: open ? 1 : 0,
          transform: open ? 'translateY(0)' : 'translateY(-6px)',
          pointerEvents: open ? 'auto' : 'none',
          visibility: open ? 'visible' : 'hidden',
        }}
      >
        {options.map((o, i) => {
          const isSelected = o.value === value
          return (
            <li
              key={o.value}
              id={`${id}-opt-${i}`}
              data-index={i}
              role="option"
              aria-selected={isSelected}
              onPointerMove={() => setActive(i)}
              onClick={() => choose(i)}
              className="flex items-center justify-between gap-4 px-5 py-3.5 cursor-pointer"
              style={{
                backgroundColor: i === active ? '#f5f4f1' : 'transparent',
                borderTop: i === 0 ? 'none' : '0.5px solid rgba(0,0,0,0.06)',
              }}
            >
              <span>
                <span className="block font-outfit text-[15px] text-[#111111]" style={{ fontWeight: isSelected ? 400 : 300 }}>
                  {o.label}
                </span>
                {o.hint && (
                  <span className="block font-outfit text-[14px] md:text-[13px] text-[#6e6e6e] mt-0.5" style={{ fontWeight: 300 }}>
                    {o.hint}
                  </span>
                )}
              </span>
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden className="flex-shrink-0" style={{ opacity: isSelected ? 1 : 0 }}>
                <path d="M1 5L5 9L13 1" stroke="#111111" strokeWidth="1.2" />
              </svg>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
