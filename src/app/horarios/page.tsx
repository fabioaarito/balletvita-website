'use client'

import { useState } from "react"
import { SubpageShell } from "@/components/subpage-shell"
import { horariosPage } from "@/data/site-config"

export default function HorariosPage() {
  const [dayIndex, setDayIndex] = useState(0)
  const [modalidadeOpen, setModalidadeOpen] = useState(false)
  const [modalidadeIndex, setModalidadeIndex] = useState<number | null>(null)

  const day = horariosPage.days[dayIndex]
  const modalidade = modalidadeIndex !== null ? horariosPage.modalidades[modalidadeIndex] : null

  return (
    <SubpageShell title="HORÁRIOS">
      <section className="bg-white">
        <div className="mx-auto max-w-[402px] lg:max-w-7xl px-[30px] lg:px-8">
          <div className="pt-[42px] lg:pt-14 pb-[50px] lg:pb-16">
            <p className="font-amiko text-[#363535] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px] text-center max-w-[430px] lg:max-w-3xl mx-auto">
              {horariosPage.intro}
            </p>

            <div className="mt-[40px] lg:mt-12 flex flex-col gap-[14px]">
              <div className="flex items-center justify-between px-6 py-[10px] rounded-md border-[1px] border-[#67c4a8] text-[#67c4a8]">
                <span className="font-changa text-[15px] lg:text-[17px] font-semibold">
                  {horariosPage.dayLabel} -
                </span>
                <select
                  value={dayIndex}
                  onChange={(e) => setDayIndex(Number(e.target.value))}
                  className="font-changa text-[#67c4a8] text-[15px] lg:text-[17px] font-semibold bg-transparent outline-none cursor-pointer"
                >
                  {horariosPage.days.map((d, i) => (
                    <option key={d.label} value={i}>
                      {d.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-[2px] mt-[18px]">
                {day.schedule.map((s) => (
                  <div key={s.time} className="flex items-baseline gap-[18px] py-[13px] border-b-[1px] border-[#efefef]">
                    <span className="font-changa text-[#67c4a8] text-[17px] lg:text-[20px] font-bold w-[60px] shrink-0">
                      {s.time}
                    </span>
                    <span className="font-amiko text-[#363535] text-[15px] lg:text-[17px] leading-[22px]">
                      {s.classes}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-[40px] lg:mt-12">
              <div className="relative w-full">
                <button
                  onClick={() => setModalidadeOpen(!modalidadeOpen)}
                  className="w-full flex items-center justify-between px-6 py-[10px] rounded-md border-[1px] border-[#67c4a8] text-[#67c4a8] hover:bg-[#67c4a8]/5 transition-colors"
                >
                  <span className="font-changa text-[15px] lg:text-[17px] font-semibold">
                    {horariosPage.modalidadeLabel} -
                  </span>
                  <svg className={`transition-transform ${modalidadeOpen ? "rotate-180" : ""}`} width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 6L8 10L12 6" stroke="#67c4a8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {modalidadeOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden z-20">
                    {horariosPage.modalidades.map((m, i) => (
                      <button
                        key={m.title}
                        onClick={() => {
                          setModalidadeIndex(i)
                          setModalidadeOpen(false)
                        }}
                        className="block w-full text-left px-6 py-3 font-amiko text-sm text-[#363535] hover:bg-gray-50 border-b border-gray-100 last:border-0"
                      >
                        {m.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {modalidade && (
                <div className="mt-[26px] lg:mt-8 flex flex-col gap-[18px]">
                  <p className="font-changa text-[#67c4a8] text-[19px] lg:text-[24px] font-semibold text-center">
                    {modalidade.title}
                  </p>
                  <div className="flex flex-col gap-[2px]">
                    {modalidade.levels.map((level) => (
                      <div key={level.name} className="flex items-baseline justify-between gap-[12px] py-[13px] border-b-[1px] border-[#efefef]">
                        <span className="font-changa text-[#363535] text-[16px] lg:text-[18px] font-semibold">
                          {level.name}
                        </span>
                        <span className="font-amiko text-[#363535] text-[14px] lg:text-[16px] text-right">
                          {level.horario}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </SubpageShell>
  )
}
