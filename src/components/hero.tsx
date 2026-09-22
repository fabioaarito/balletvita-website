'use client'

import { heroConfig } from "@/data/site-config"
import { MenuOverlay } from "./nav"

export function Hero() {
  return (
    <section id="cta" className="w-full bg-white">
      <div className="relative">
        <div className="relative h-[707px] lg:h-[900px] w-full overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/videos/intro-homepage.mp4"
            poster="/images/hero-bg.jpg"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute top-0 inset-x-0 flex items-center justify-between px-[34px] lg:px-10 pt-[12px]">
            <div className="flex flex-col items-start">
              <img src="/images/logo.png" alt="Balletvita" className="w-[147px] lg:w-[220px] h-auto" />
              <span className="font-changa text-white text-[13px] lg:text-[17px] font-semibold mt-[2px] tracking-[1px]">
                {heroConfig.slogan}
              </span>
            </div>
            <div className="lg:hidden">
              <MenuOverlay />
            </div>
          </div>
          <div className="absolute left-[34px] right-[34px] lg:left-16 lg:right-16 bottom-[46px] lg:bottom-[60px]">
            <h1 className="font-changa-one text-[#f6e449] text-[22px] lg:text-[38px] leading-none">
              {heroConfig.title}
            </h1>
            <p className="font-amiko font-bold text-white text-[17px] lg:text-[26px] leading-[23px] mt-[8px] whitespace-pre-line">
              {heroConfig.tagline}
            </p>
          </div>
        </div>
        <div className="bg-[#67c4a8]">
          <div className="flex flex-col items-center px-[34px] lg:px-8 pt-[52px] lg:pt-16 pb-[52px] lg:pb-16">
            <button className="w-[266px] lg:w-[340px] h-[45px] lg:h-[54px] rounded-full bg-[#f6e449] flex items-center justify-center hover:bg-[#f2de3b] transition-colors shadow-sm">
              <span className="font-changa text-[#363535] text-[17px] lg:text-[21px] font-bold">
                {heroConfig.cta}
              </span>
            </button>
            <p className="font-amiko text-white text-[18px] lg:text-[23px] font-bold text-center leading-[24px] mt-[25px] max-w-[320px]">
              {heroConfig.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
