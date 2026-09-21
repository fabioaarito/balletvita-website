import { palcoConfig } from "@/data/site-config"

export function PalcoSection() {
  return (
    <section id="palco" className="w-full bg-white">
      <div className="mx-auto max-w-[402px] lg:max-w-7xl px-[28px] lg:px-8">
        <div className="pt-[49px] lg:pt-16">
          <h2 className="font-changa text-[#67c4a8] text-[26px] lg:text-[40px] font-bold text-center">
            {palcoConfig.title}
          </h2>
          <p className="font-amiko text-[#363535] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px] text-left max-w-[430px] lg:max-w-3xl mt-[30px] lg:mt-8 whitespace-pre-line">
            {palcoConfig.text}
          </p>
        </div>
      </div>
      <div className="mt-[31px] lg:mt-10">
        <div className="relative w-full h-[650px] lg:h-[560px] overflow-hidden">
          <img src={palcoConfig.videoThumb} alt="Vídeo da Balletvita" className="w-full h-full object-cover" />
          <button aria-label="Reproduzir vídeo" className="absolute inset-0 m-auto w-[72px] h-[72px] lg:w-[96px] lg:h-[96px] rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors shadow-lg">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="ml-1">
              <path d="M10 7L21 14L10 21V7Z" fill="#67c4a8" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
