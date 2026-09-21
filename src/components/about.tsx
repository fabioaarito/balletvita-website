import Link from "next/link"
import { aboutConfig } from "@/data/site-config"

export function AboutSection() {
  return (
    <section id="about" className="w-full bg-white">
      <div className="mx-auto max-w-[402px] lg:max-w-7xl px-[34px] lg:px-8">
        <div className="pt-[84px] lg:pt-20 pb-[42px] lg:pb-16">
          <h2 className="font-changa text-[#67c4a8] text-[32px] lg:text-[40px] font-bold text-center leading-[40px] lg:leading-[48px] tracking-wide">
            {aboutConfig.title}
          </h2>
          <p className="font-amiko text-[#363535] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px] text-left max-w-[430px] lg:max-w-3xl mt-[21px] lg:mt-8">
            {aboutConfig.text}
          </p>
          <div className="mt-[25px] lg:mt-10">
            <div className="w-full h-[190px] lg:h-[340px] rounded-[14px] overflow-hidden">
              <img src={aboutConfig.image} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
          <p className="font-amiko text-[#363535] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px] text-left max-w-[430px] lg:max-w-3xl mt-[25px] lg:mt-8">
            {aboutConfig.anniversary}
          </p>
          <div className="flex justify-center mt-[38px] lg:mt-10">
            <Link
              href="/sobre-nos"
              className="w-[234px] lg:w-[280px] h-[45px] lg:h-[50px] rounded-full bg-[#f6e449] flex items-center justify-center hover:bg-[#f2de3b] transition-colors shadow-sm"
            >
              <span className="font-changa text-[#363535] text-[17px] lg:text-[19px] font-bold">
                {aboutConfig.cta}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
