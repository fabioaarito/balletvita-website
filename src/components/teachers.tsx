'use client'

import { useState } from "react"
import Link from "next/link"
import { teachersConfig, professoresData } from "@/data/site-config"

const featuredSlugs = ["ana-corista", "teresa-alves-da-silva", "miguel-quintas", "noah-almeida"]

const featured = featuredSlugs
  .map((slug) => professoresData.find((p) => p.slug === slug))
  .filter((p): p is (typeof professoresData)[number] => Boolean(p))

export function TeachersSection() {
  const [open, setOpen] = useState(false)

  return (
    <section id="professores" className="w-full bg-white">
      <div className="mx-auto max-w-[402px] lg:max-w-7xl px-[25px] lg:px-8">
        <div className="pt-[38px] lg:pt-16">
          <h2 className="font-changa text-[#67c4a8] text-[22px] lg:text-[34px] font-bold text-center leading-[26px] lg:leading-[40px]">
            {teachersConfig.title}
          </h2>
          <div className="mt-[38px] lg:mt-10 flex lg:grid lg:grid-cols-4 lg:gap-4">
            <div className="w-1/2 lg:w-auto flex flex-col">
              {featured.filter((_, i) => i % 2 === 0).map((t) => (
                <TeacherPhoto key={t.slug} professor={t} />
              ))}
            </div>
            <div className="w-1/2 lg:w-auto flex flex-col">
              {featured.filter((_, i) => i % 2 === 1).map((t) => (
                <TeacherPhoto key={t.slug} professor={t} />
              ))}
            </div>
          </div>
          <div className="mt-[31px] pb-[56px] lg:pb-16 flex justify-center">
            <div className="relative w-[348px] lg:w-[420px]">
              <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between px-6 py-[4px] rounded-md border-[1px] border-[#67c4a8] text-[#67c4a8] hover:bg-[#67c4a8]/10 transition-colors"
              >
                <span className="font-changa text-[15px] lg:text-[17px] font-semibold">
                  {teachersConfig.dropdownLabel}
                </span>
                <svg className={`transition-transform ${open ? "rotate-180" : ""}`} width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 6L8 10L12 6" stroke="#67c4a8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {open && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden z-20">
                  {professoresData.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/professores/${p.slug}`}
                      className="block px-6 py-3 font-amiko text-sm text-[#363535] hover:bg-gray-50 border-b border-gray-100 last:border-0"
                    >
                      {p.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#67c4a8]">
        <div className="mx-auto max-w-[402px] lg:max-w-7xl px-[34px] lg:px-8">
          <div className="pt-[46px] lg:pt-12 pb-[36px] lg:pb-14 flex flex-col items-center">
            <p className="font-amiko text-white text-[19px] lg:text-[26px] font-bold text-center leading-[25px] max-w-[324px] lg:max-w-2xl whitespace-pre-line">
              {teachersConfig.ctaBandTitle}
            </p>
            <button className="mt-[44px] w-[266px] lg:w-[340px] h-[45px] lg:h-[54px] rounded-full bg-[#f6e449] flex items-center justify-center hover:bg-[#f2de3b] transition-colors shadow-sm">
              <span className="font-changa text-[#363535] text-[17px] lg:text-[21px] font-bold">
                {teachersConfig.cta}
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function TeacherPhoto({ professor }: { professor: (typeof professoresData)[number] }) {
  return (
    <div className="relative w-full h-[174px] overflow-hidden">
      <img src={professor.image} alt={professor.name} className="w-full h-full object-cover" />
      <div className="absolute inset-x-0 bottom-0 bg-[#67c4a8] px-3 py-[6px]">
        <p className="font-changa text-white text-[15px] lg:text-[17px] font-bold leading-[18px]">
          {professor.name}
        </p>
        <p className="font-changa text-white text-[11px] lg:text-[12px] font-semibold leading-[14px] opacity-90">
          {professor.homeLabel}
        </p>
      </div>
      <Link
        href={`/professores/${professor.slug}`}
        aria-label="Saber mais sobre o professor"
        className="absolute top-[6px] right-[6px] w-6 h-6 rounded-full bg-white text-[#67c4a8] shadow flex items-center justify-center hover:bg-[#67c4a8] hover:text-white transition-colors"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M7 3v8M3 7h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </Link>
    </div>
  )
}
