import { aboutConfig } from "@/data/site-config"

export function AboutSection() {
  return (
    <section id="about" className="w-full bg-white">
      <div className="mx-auto max-w-[402px] lg:max-w-7xl px-[34px] lg:px-8">
        <div className="pt-[84px] lg:pt-20 pb-[42px] lg:pb-16">
          <h2 className="font-changa text-[#67c4a8] text-[32px] lg:text-[40px] font-bold text-center leading-[40px] lg:leading-[48px] tracking-wide">
            {aboutConfig.title}
          </h2>
          <p className="font-amiko text-[#363535] text-[16px] lg:text-[20px] leading-[22px] text-center max-w-[334px] lg:max-w-none mx-auto mt-[21px] lg:mt-8">
            {aboutConfig.text}
          </p>
          <div className="flex justify-center mt-[25px] lg:mt-10">
            <div className="w-[334px] lg:w-[640px] h-[174px] lg:h-[300px] rounded-[6px] overflow-hidden">
              <img src={aboutConfig.image} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
          <p className="font-amiko text-[#363535] text-[16px] lg:text-[20px] leading-[22px] text-center max-w-[334px] lg:max-w-none mx-auto mt-[25px] lg:mt-8">
            {aboutConfig.anniversary}
          </p>
          <div className="flex justify-center mt-[38px] lg:mt-10">
            <button className="w-[234px] lg:w-[280px] h-[45px] lg:h-[50px] rounded-full bg-[#f6e449] flex items-center justify-center hover:bg-[#f2de3b] transition-colors shadow-sm">
              <span className="font-changa text-[#363535] text-[17px] lg:text-[19px] font-bold">
                {aboutConfig.cta}
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
