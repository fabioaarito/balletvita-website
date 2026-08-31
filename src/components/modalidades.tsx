'use client'

import { useState } from "react"
import Link from "next/link"
import { modalidadesConfig, modalidadesData } from "@/data/site-config"

const remainingModalities = modalidadesData.filter(
  (m) => !modalidadesConfig.items.some((i) => i.slug === m.slug)
)

export function ModalidadesSection() {
  const [open, setOpen] = useState(false)

  return (
    <section id="modalidades" className="w-full bg-[#67c4a8]">
      <div className="mx-auto max-w-[402px] lg:max-w-7xl px-[25px] lg:px-8">
        <div className="pt-[91px] lg:pt-20">
          <h2 className="font-changa text-[#f6e449] text-[21px] lg:text-[34px] font-bold text-center leading-[26px] lg:leading-[40px]">
            {modalidadesConfig.title}
          </h2>
          <div className="mt-[33px] lg:mt-8 flex flex-col items-center gap-[24px] lg:grid lg:grid-cols-3 lg:items-stretch lg:gap-6">
            {modalidadesConfig.items.map((item) => (
              <Link
                key={item.title}
                href={`/modalidades/${item.slug}`}
                className="relative w-[352px] lg:w-full h-[174px] lg:h-[240px] overflow-hidden group"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute inset-0 flex items-center justify-center font-changa text-white text-[17px] lg:text-[22px] font-bold tracking-[1.87px] text-center px-4">
                  {item.title}
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-[24px] pb-[36px] lg:pb-12 flex justify-center">
            <div className="relative w-[348px] lg:w-[420px]">
              <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between px-6 py-[4px] rounded-md border-[1px] border-[#f6e449] text-[#f6e449] hover:bg-[#f6e449]/10 transition-colors"
              >
                <span className="font-changa text-[15px] lg:text-[17px] font-semibold">
                  {modalidadesConfig.dropdownLabel}
                </span>
                <svg className={`transition-transform ${open ? "rotate-180" : ""}`} width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 6L8 10L12 6" stroke="#f6e449" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {open && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-white/10 overflow-hidden z-20">
                  {remainingModalities.map((m) => (
                    <Link
                      key={m.slug}
                      href={`/modalidades/${m.slug}`}
                      className="block px-6 py-3 font-amiko text-sm text-[#363535] hover:bg-gray-50 border-b border-gray-100 last:border-0"
                    >
                      {m.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f6e449]">
        <div className="mx-auto max-w-[402px] lg:max-w-7xl px-[21px] lg:px-8">
          <div className="pt-[55px] lg:pt-12 pb-[51px] lg:pb-16 flex flex-col items-center">
            <p className="font-amiko text-[#363535] text-[20px] lg:text-[26px] font-bold text-center leading-[27px] whitespace-pre-line">
              {modalidadesConfig.schedule}
            </p>
            <Link
              href="/horarios"
              className="mt-[23px] w-[240px] lg:w-[300px] h-[50px] lg:h-[58px] rounded-full bg-[#67c4a8] flex items-center justify-center hover:bg-[#56b096] transition-colors shadow-sm"
            >
              <span className="font-changa text-white text-[20px] lg:text-[24px] font-bold">
                {modalidadesConfig.scheduleCta}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
