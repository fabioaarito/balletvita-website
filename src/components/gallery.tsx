'use client'

import { useState } from "react"
import Link from "next/link"
import { galleryConfig } from "@/data/site-config"

export function GallerySection() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? galleryConfig.images.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === galleryConfig.images.length - 1 ? 0 : c + 1))

  return (
    <section id="galeria" className="w-full bg-white">
      <div className="pt-[31px] lg:pt-12">
        <div className="relative w-full h-[267px] lg:h-[460px] overflow-hidden">
          <img
            key={current}
            src={galleryConfig.images[current].src}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
          <span className="absolute bottom-4 left-[24px] font-changa text-white text-[14px] lg:text-[20px] font-semibold whitespace-pre-line">
            {galleryConfig.images[current].caption}
          </span>
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
            {galleryConfig.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Foto ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-[#f6e449]" : "bg-white/60"}`}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-[40px] lg:mt-12 pb-[49px] lg:pb-16">
          <Link
            href="/espetaculos"
            className="w-[240px] lg:w-[300px] h-[50px] lg:h-[58px] rounded-full bg-[#f6e449] flex items-center justify-center hover:bg-[#f2de3b] transition-colors shadow-sm"
          >
            <span className="font-changa text-[#363535] text-[18px] lg:text-[22px] font-bold">
              {galleryConfig.cta}
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
