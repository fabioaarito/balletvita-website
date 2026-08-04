'use client'

import { useState } from "react"
import { associationConfig, galleryConfig } from "@/data/site-config"

export function AssociationSection() {
  const [current, setCurrent] = useState(0)
  const images = galleryConfig.images

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1))

  return (
    <section id="associacao" className="w-full bg-white">
      <div className="mx-auto max-w-[402px] lg:max-w-7xl px-[30px] lg:px-8 flex justify-center">
        <img
          src={associationConfig.logo}
          alt="Pé Esquerdo — Associação Cultural"
          className="w-[290px] lg:w-[400px] h-auto"
        />
      </div>
      <div className="bg-black mt-[33px] lg:mt-10">
        <div className="mx-auto max-w-[402px] lg:max-w-7xl px-[30px] lg:px-8">
          <div className="flex flex-col items-center pb-[56px] lg:pb-16 pt-[46px] lg:pt-12">
          <h2 className="font-changa text-white text-[24px] lg:text-[32px] font-semibold">
            {associationConfig.title}
          </h2>
          <p className="font-amiko text-white text-[16px] lg:text-[18px] leading-[22px] lg:leading-[26px] text-center max-w-[340px] lg:max-w-xl mt-[38px] lg:mt-8">
            {associationConfig.text}
          </p>
          <div className="relative w-full h-[267px] lg:h-[420px] mt-[38px] lg:mt-10 overflow-hidden">
            <img
              key={current}
              src={images[current].src}
              alt=""
              className="w-full h-full object-cover"
            />
            <button
              onClick={prev}
              aria-label="Anterior"
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 lg:w-11 lg:h-11 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition-colors shadow"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 4L6 8L10 12" stroke="#363535" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Seguinte"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 lg:w-11 lg:h-11 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition-colors shadow"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 4L10 8L6 12" stroke="#363535" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Foto ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-[#f6e449]" : "bg-white/60"}`}
                />
              ))}
            </div>
          </div>
          <p className="font-amiko text-white text-[16px] lg:text-[18px] leading-[22px] lg:leading-[26px] text-center max-w-[340px] lg:max-w-xl mt-[53px] lg:mt-10">
            {associationConfig.text2}
          </p>
          <button className="w-[180px] lg:w-[220px] h-[45px] lg:h-[54px] rounded-full bg-[#f6e449] flex items-center justify-center hover:bg-[#f2de3b] transition-colors mt-[24px] lg:mt-8 shadow-sm">
            <span className="font-changa text-[#363535] text-[18px] lg:text-[22px] font-bold">
              {associationConfig.cta}
            </span>
          </button>
        </div>
      </div>
      </div>
    </section>
  )
}
