'use client'

import { useRef, useState } from "react"
import { SubpageShell } from "@/components/subpage-shell"
import { horariosPage } from "@/data/site-config"

const dayLabels: Record<string, string> = {
  Segunda: "2ª Feira",
  Terça: "3ª Feira",
  Quarta: "4ª Feira",
  Quinta: "5ª Feira",
  Sexta: "6ª Feira",
  Sábado: "Sábado",
}

const dayOrder = ["2ª Feira", "3ª Feira", "4ª Feira", "5ª Feira", "6ª Feira", "Sábado"]

function parseDays(days: string) {
  return days
    .split(/,\s*|\s+e\s+/)
    .map((d) => d.trim())
    .filter(Boolean)
}

function startMinutes(time: string) {
  const match = time.match(/(\d{1,2})h(\d{2})/)
  if (!match) return Number.MAX_SAFE_INTEGER
  return Number(match[1]) * 60 + Number(match[2])
}

const days = dayOrder.map((label) => {
  const schedule: { time: string; classes: string; studio: string }[] = []
  for (const modalidade of horariosPage.modalidades) {
    for (const turma of modalidade.classes) {
      for (const s of turma.schedules) {
        if (s.days && parseDays(s.days).some((d) => dayLabels[d] === label)) {
          schedule.push({ time: s.time, classes: turma.name, studio: s.studio })
        }
      }
    }
  }
  schedule.sort((a, b) => startMinutes(a.time) - startMinutes(b.time))
  return { label, schedule }
})

function wrap(index: number, length: number) {
  return ((index % length) + length) % length
}

function useSwipe(onSwipeRight: () => void, onSwipeLeft: () => void) {
  const start = useRef<{ x: number; y: number } | null>(null)

  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0]
    start.current = { x: t.clientX, y: t.clientY }
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    const s = start.current
    start.current = null
    if (!s) return
    const t = e.changedTouches[0]
    const dx = t.clientX - s.x
    const dy = t.clientY - s.y
    if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return
    if (dx > 0) onSwipeRight()
    else onSwipeLeft()
  }

  return { onTouchStart, onTouchEnd }
}

function Selector({
  label,
  open,
  onToggle,
  children,
}: {
  label: string
  open: boolean
  onToggle: () => void
  children: React.ReactNode
}) {
  return (
    <div className="relative w-[278px] lg:w-[360px] mx-auto">
      <button
        onClick={onToggle}
        className="w-full h-[46px] lg:h-[56px] rounded-full bg-[#f6e449] flex items-center justify-center gap-[10px] hover:bg-[#f2de3b] transition-colors shadow-sm"
      >
        <span className="font-changa text-[#363535] text-[18px] lg:text-[22px] font-bold">{label}</span>
        <svg
          width="14"
          height="9"
          viewBox="0 0 14 9"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="M0 0H14L7 9Z" fill="#363535" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden z-20 max-h-[320px] overflow-y-auto">
          {children}
        </div>
      )}
    </div>
  )
}

function Dots({
  count,
  active,
  onSelect,
  labelFor,
}: {
  count: number
  active: number
  onSelect: (index: number) => void
  labelFor: (index: number) => string
}) {
  return (
    <div className="mt-[26px] lg:mt-8 flex flex-wrap justify-center gap-[10px]">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          aria-label={labelFor(i)}
          onClick={() => onSelect(i)}
          className={`w-[9px] h-[9px] rounded-full transition-colors ${
            i === active ? "bg-[#f6e449]" : "border-[2px] border-[#f6e449]"
          }`}
        />
      ))}
    </div>
  )
}

export default function HorariosPage() {
  const [dayIndex, setDayIndex] = useState(0)
  const [dayDir, setDayDir] = useState<"next" | "prev">("next")
  const [dayOpen, setDayOpen] = useState(false)
  const [modalidadeOpen, setModalidadeOpen] = useState(false)
  const [modalidadeIndex, setModalidadeIndex] = useState(0)
  const [modalidadeDir, setModalidadeDir] = useState<"next" | "prev">("next")

  const day = days[dayIndex]
  const modalidade = horariosPage.modalidades[modalidadeIndex]

  const goDay = (target: number, dir: "next" | "prev") => {
    setDayDir(dir)
    setDayIndex(wrap(target, days.length))
  }

  const goModalidade = (target: number, dir: "next" | "prev") => {
    setModalidadeDir(dir)
    setModalidadeIndex(wrap(target, horariosPage.modalidades.length))
  }

  const daySwipe = useSwipe(
    () => goDay(dayIndex - 1, "prev"),
    () => goDay(dayIndex + 1, "next")
  )

  const modalidadeSwipe = useSwipe(
    () => goModalidade(modalidadeIndex - 1, "prev"),
    () => goModalidade(modalidadeIndex + 1, "next")
  )

  return (
    <SubpageShell title="HORÁRIOS" footer={false}>
      <section className="bg-white">
        <div className="mx-auto max-w-[402px] lg:max-w-7xl px-[30px] lg:px-8">
          <div className="pt-[42px] lg:pt-14 pb-[38px] lg:pb-12">
            <p className="font-amiko text-[#363535] text-[16px] lg:text-[20px] leading-[26px] lg:leading-[30px] max-w-[430px] lg:max-w-3xl">
              {horariosPage.intro}
            </p>
            <div className="mt-[30px] lg:mt-10">
              <Selector
                label={horariosPage.dayLabel}
                open={dayOpen}
                onToggle={() => setDayOpen(!dayOpen)}
              >
                {days.map((d, i) => (
                  <button
                    key={d.label}
                    onClick={() => {
                      goDay(i, i > dayIndex ? "next" : "prev")
                      setDayOpen(false)
                    }}
                    className={`block w-full text-left px-6 py-3 font-amiko text-sm hover:bg-gray-50 border-b border-gray-100 last:border-0 ${
                      i === dayIndex ? "text-[#67c4a8] font-bold" : "text-[#363535]"
                    }`}
                  >
                    {d.label}
                  </button>
                ))}
              </Selector>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#67c4a8]" {...daySwipe}>
        <div className="mx-auto max-w-[402px] lg:max-w-7xl px-[30px] lg:px-8">
          <div className="py-[34px] lg:py-12">
            <div
              key={dayIndex}
              className={dayDir === "next" ? "hor-slide-in-right" : "hor-slide-in-left"}
            >
              <h2 className="font-changa text-white text-[22px] lg:text-[30px] font-bold text-center">
                {day.label}
              </h2>
              <div className="mt-[24px] lg:mt-8 flex flex-col gap-[10px] lg:gap-3">
                {day.schedule.length === 0 && (
                  <p className="font-amiko text-white text-[15px] text-center py-[13px]">
                    Sem aulas neste dia.
                  </p>
                )}
                {day.schedule.map((s, i) => (
                  <div
                    key={`${s.time}-${s.classes}-${i}`}
                    className="flex items-stretch bg-white rounded-[16px]"
                  >
                    <div className="flex items-center justify-center m-[6px] px-[14px] lg:px-[18px] rounded-[12px] bg-[#efefef] shrink-0">
                      <span className="font-amiko text-[#363535] text-[15px] lg:text-[17px] whitespace-nowrap">
                        {s.time}
                      </span>
                    </div>
                    <div className="flex flex-col justify-center py-[10px] pr-[16px]">
                      <span className="font-amiko text-[#363535] text-[15px] lg:text-[17px] leading-[20px] lg:leading-[22px]">
                        {s.classes}
                      </span>
                      {s.studio && (
                        <span className="font-amiko text-[#67c4a8] text-[12px] lg:text-[14px] mt-[2px]">
                          {s.studio}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Dots
              count={days.length}
              active={dayIndex}
              onSelect={(i) => goDay(i, i > dayIndex ? "next" : "prev")}
              labelFor={(i) => days[i].label}
            />
          </div>
        </div>
      </div>

      <section className="bg-white">
        <div className="mx-auto max-w-[402px] lg:max-w-7xl px-[30px] lg:px-8">
          <div className="py-[38px] lg:py-12">
            <Selector
              label={horariosPage.modalidadeLabel}
              open={modalidadeOpen}
              onToggle={() => setModalidadeOpen(!modalidadeOpen)}
            >
              {horariosPage.modalidades.map((m, i) => (
                <button
                  key={m.title}
                  onClick={() => {
                    goModalidade(i, i > modalidadeIndex ? "next" : "prev")
                    setModalidadeOpen(false)
                  }}
                  className={`block w-full text-left px-6 py-3 font-amiko text-sm hover:bg-gray-50 border-b border-gray-100 last:border-0 ${
                    i === modalidadeIndex ? "text-[#67c4a8] font-bold" : "text-[#363535]"
                  }`}
                >
                  {m.title}
                </button>
              ))}
            </Selector>
          </div>
        </div>
      </section>

      <div className="bg-[#67c4a8]" {...modalidadeSwipe}>
        <div className="mx-auto max-w-[402px] lg:max-w-7xl px-[30px] lg:px-8">
          <div className="py-[34px] lg:py-12">
            <div
              key={modalidadeIndex}
              className={modalidadeDir === "next" ? "hor-slide-in-right" : "hor-slide-in-left"}
            >
              <h2 className="font-changa text-white text-[22px] lg:text-[30px] font-bold text-center">
                {modalidade.title}
              </h2>
              <div className="mt-[24px] lg:mt-8 flex flex-col gap-[10px] lg:gap-3">
                {modalidade.classes.map((turma) => (
                  <div key={turma.name} className="flex items-stretch bg-white rounded-[16px]">
                    <div className="flex items-center m-[6px] px-[14px] lg:px-[18px] rounded-[12px] bg-[#efefef] shrink-0 max-w-[48%]">
                      <span className="font-amiko text-[#363535] text-[15px] lg:text-[17px] leading-[19px]">
                        {turma.name}
                      </span>
                    </div>
                    <div className="flex flex-col justify-center gap-[2px] py-[10px] pr-[16px]">
                      {turma.schedules.map((s, i) => (
                        <span
                          key={`${s.days}-${s.time}-${i}`}
                          className="font-amiko text-[#363535] text-[14px] lg:text-[16px] leading-[20px]"
                        >
                          {s.days ? `${s.days} · ` : ""}
                          {s.time}
                          {s.studio ? <span className="text-[#67c4a8]"> | {s.studio}</span> : null}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              {modalidade.note && (
                <p className="mt-[16px] font-amiko text-white text-[13px] lg:text-[15px] text-center">
                  {modalidade.note}
                </p>
              )}
            </div>
            <Dots
              count={horariosPage.modalidades.length}
              active={modalidadeIndex}
              onSelect={(i) => goModalidade(i, i > modalidadeIndex ? "next" : "prev")}
              labelFor={(i) => horariosPage.modalidades[i].title}
            />
          </div>
        </div>
      </div>

      <section className="bg-white">
        <div className="mx-auto max-w-[402px] lg:max-w-7xl px-[30px] lg:px-8">
          <p className="py-[26px] lg:py-9 font-amiko text-[#67c4a8] text-[13px] lg:text-[15px] text-center">
            {horariosPage.note}
          </p>
        </div>
      </section>
    </SubpageShell>
  )
}
