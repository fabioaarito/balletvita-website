'use client'

import { useEffect, useState } from "react"

type ShowVideo = {
  title: string
  image: string
  video: string
}

export function ShowVideoGrid({ items }: { items: readonly ShowVideo[] }) {
  const [active, setActive] = useState<number | null>(null)
  const current = active === null ? null : items[active]

  useEffect(() => {
    if (active === null) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null)
    }

    document.addEventListener("keydown", onKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [active])

  return (
    <>
      <div className="grid grid-cols-2 gap-[20px] lg:mx-auto lg:max-w-6xl lg:grid-cols-3 lg:gap-8">
        {items.map((item, index) => (
          <button
            key={item.title}
            type="button"
            onClick={() => setActive(index)}
            className="group w-full text-left"
            aria-label={`Reproduzir vídeo: ${item.title}`}
          >
            <div className="relative aspect-[3/5] w-full overflow-hidden rounded-[14px] bg-black">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform duration-300 group-hover:scale-110 lg:h-[76px] lg:w-[76px]">
                  <svg width="24" height="24" viewBox="0 0 28 28" fill="none" className="ml-1" aria-hidden="true">
                    <path d="M10 7L21 14L10 21V7Z" fill="#67c4a8" />
                  </svg>
                </span>
              </span>
              <span className="absolute left-[14px] top-[14px] rounded-full bg-black/55 px-3 py-[3px] font-changa text-[11px] font-semibold uppercase tracking-[1px] text-white lg:text-[12px]">
                Vídeo
              </span>
            </div>
            <p className="font-changa text-[#363535] text-[16px] lg:text-[20px] font-semibold text-center mt-[14px] lg:mt-4">
              {item.title}
            </p>
          </button>
        ))}
      </div>

      {current && (
        <div
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-black/90 px-5 py-8"
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-label="Fechar vídeo"
            className="absolute right-5 top-5 flex h-[42px] w-[42px] items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <video
            src={current.video}
            poster={current.image}
            controls
            autoPlay
            playsInline
            className="max-h-[82vh] max-w-full rounded-lg bg-black shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          />
          <p className="mt-4 font-changa text-[18px] font-semibold text-white lg:text-[22px]">
            {current.title}
          </p>
        </div>
      )}
    </>
  )
}
