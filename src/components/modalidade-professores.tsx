'use client'

import { useState } from "react"
import Link from "next/link"
import { professoresData } from "@/data/site-config"

const pillClass =
  "w-[278px] lg:w-[360px] h-[46px] lg:h-[56px] rounded-full bg-[#f6e449] flex items-center justify-center gap-[10px] hover:bg-[#f2de3b] transition-colors shadow-sm"

export function ModalidadeProfessores({ slug, gallery }: { slug: string; gallery: readonly string[] }) {
  const [open, setOpen] = useState(true)

  const professores = professoresData.filter((p) =>
    p.modalidades.some((m) => m.slug === slug)
  )

  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-[402px] lg:max-w-7xl px-[30px] lg:px-8">
          <div className="pt-[6px] lg:pt-4 pb-[36px] lg:pb-12 flex flex-col items-center gap-[22px] lg:gap-8">
            <Link href="/horarios" className={pillClass}>
              <span className="font-changa text-[#363535] text-[18px] lg:text-[22px] font-bold">
                Horários
              </span>
            </Link>
            <button onClick={() => setOpen(!open)} className={pillClass}>
              <span className="font-changa text-[#363535] text-[18px] lg:text-[22px] font-bold">
                Professores
              </span>
              <svg width="14" height="9" viewBox="0 0 14 9">
                <path d="M0 0H14L7 9Z" fill="#363535" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {open && professores.length > 0 && (
        <div className="grid grid-cols-2 lg:mx-auto lg:flex lg:max-w-6xl lg:flex-wrap lg:justify-center lg:gap-8 lg:px-8">
          {professores.map((p) => (
            <Link
              key={p.slug}
              href={`/professores/${p.slug}`}
              className="group relative aspect-[4/5] overflow-hidden block lg:w-[260px] xl:w-[300px]"
            >
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-x-0 bottom-0 bg-[#67c4a8] px-[14px] lg:px-6 py-[8px] lg:py-3">
                <p className="font-changa text-white text-[15px] lg:text-[20px] font-bold leading-[18px] lg:leading-[24px]">
                  {p.name}
                </p>
                <p className="font-changa text-white text-[10px] lg:text-[13px] font-semibold opacity-90 leading-[13px] lg:leading-[16px]">
                  {p.homeLabel}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}

      <div className="mt-[20px] lg:mt-12 grid grid-cols-2 lg:mx-auto lg:max-w-6xl lg:grid-cols-4 lg:gap-8 lg:px-8">
        {gallery.map((src, i) => (
          <div key={i} className="aspect-[4/5] overflow-hidden">
            <img src={src} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </>
  )
}
