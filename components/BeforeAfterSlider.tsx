'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import Image from 'next/image'

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeLabel?: string
  afterLabel?: string
  height?: string
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'PRE',
  afterLabel = 'POSLE',
  height = '100%',
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setPosition(pct)
  }, [])

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      isDragging.current = true
      updatePosition(e.clientX)

      const handleMouseMove = (e: MouseEvent) => {
        if (isDragging.current) updatePosition(e.clientX)
      }
      const handleMouseUp = () => {
        isDragging.current = false
        window.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('mouseup', handleMouseUp)
      }

      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
    },
    [updatePosition]
  )

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      updatePosition(e.touches[0].clientX)

      const handleTouchMove = (e: TouchEvent) => {
        updatePosition(e.touches[0].clientX)
      }
      const handleTouchEnd = () => {
        window.removeEventListener('touchmove', handleTouchMove)
        window.removeEventListener('touchend', handleTouchEnd)
      }

      window.addEventListener('touchmove', handleTouchMove, { passive: true })
      window.addEventListener('touchend', handleTouchEnd)
    },
    [updatePosition]
  )

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden select-none cursor-col-resize"
      style={{ height }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      {/* After image (full background) */}
      <div className="absolute inset-0">
        <Image
          src={afterImage}
          alt="Posle"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 60vw"
        />
      </div>

      {/* Before image (clipped left side) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <div className="absolute inset-0" style={{ width: `${10000 / position}%`, maxWidth: 'none' }}>
          <Image
            src={beforeImage}
            alt="Pre"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </div>
      </div>

      {/* Labels */}
      <span
        className="absolute bottom-4 left-4 font-outfit text-[11px] text-white uppercase tracking-[0.12em] z-10 pointer-events-none"
        style={{ fontWeight: 300 }}
      >
        {beforeLabel}
      </span>
      <span
        className="absolute bottom-4 right-4 font-outfit text-[11px] text-white uppercase tracking-[0.12em] z-10 pointer-events-none"
        style={{ fontWeight: 300 }}
      >
        {afterLabel}
      </span>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 z-20 pointer-events-none"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      >
        <div className="w-px h-full bg-white" />
        {/* Handle */}
        <div
          className="absolute top-1/2 left-1/2 pointer-events-auto cursor-col-resize"
          style={{
            transform: 'translate(-50%, -50%)',
            width: '40px',
            height: '40px',
            backgroundColor: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onMouseDown={handleMouseDown}
        >
          <span className="text-[#111111] text-[12px]">⟷</span>
        </div>
      </div>
    </div>
  )
}
