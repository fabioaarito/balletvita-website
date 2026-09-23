import type { Metadata } from "next"
import { SubpageShell } from "@/components/subpage-shell"
import { sobreNosConfig } from "@/data/site-config"

export const metadata: Metadata = {
  title: "Sobre Nós | Balletvita",
}

export default function SobreNosPage() {
  return (
    <SubpageShell title="SOBRE NÓS" footer={false}>
      <section className="bg-white">
        <div className="mx-auto max-w-[402px] lg:max-w-7xl px-[30px] lg:px-8">
          <div className="pt-[44px] lg:pt-14 pb-[60px] lg:pb-20">
            <h2 className="font-changa text-[#67c4a8] text-[24px] lg:text-[32px] font-bold text-center">
              {sobreNosConfig.subtitle}
            </h2>
            <div className="mt-[30px] lg:mt-8 flex flex-col gap-[22px] lg:gap-7">
              {sobreNosConfig.intro.map((text) => (
                <p
                  key={text}
                  className="font-amiko text-[#363535] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px] text-left max-w-[430px] lg:max-w-3xl"
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="w-full">
        <img src={sobreNosConfig.introImage} alt="" className="w-full h-[260px] lg:h-[420px] object-cover" />
      </div>

      {sobreNosConfig.sections.map((section) => {
        const sectionImage = "image" in section ? section.image : undefined
        return section.band === "teal" ? (
          <div key={section.title} className="bg-[#67c4a8]">
            <div className="mx-auto max-w-[402px] lg:max-w-7xl px-[30px] lg:px-8">
              <div className="py-[46px] lg:py-14">
                <h3 className="font-changa text-white text-[22px] lg:text-[30px] font-bold text-center">
                  {section.title}
                </h3>
                <div className="mt-[28px] lg:mt-8 flex flex-col gap-[22px] lg:gap-7">
                  {section.paragraphs.map((p) => (
                    <p
                      key={p}
                      className="font-amiko text-white text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px] text-left max-w-[430px] lg:max-w-3xl"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <section key={section.title} className="bg-white">
            <div className="mx-auto max-w-[402px] lg:max-w-7xl px-[30px] lg:px-8">
              <div className="py-[46px] lg:py-14">
                <h3 className="font-changa text-[#67c4a8] text-[22px] lg:text-[30px] font-bold text-center">
                  {section.title}
                </h3>
                <div className="mt-[28px] lg:mt-8 flex flex-col gap-[22px] lg:gap-7">
                  {section.paragraphs.map((p) => (
                    <p
                      key={p}
                      className="font-amiko text-[#363535] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px] text-left max-w-[430px] lg:max-w-3xl"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            {sectionImage && (
              <div className="w-full">
                <img src={sectionImage} alt="" className="w-full h-[260px] lg:h-[420px] object-cover" />
              </div>
            )}
          </section>
        )
      })}

      <section className="bg-white">
        <div className="mx-auto max-w-[402px] lg:max-w-7xl px-[30px] lg:px-8">
          <div className="pt-[46px] lg:pt-14">
            <h3 className="font-changa text-[#67c4a8] text-[22px] lg:text-[30px] font-bold text-center">
              {sobreNosConfig.espaco.title}
            </h3>
            <p className="font-amiko text-[#363535] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px] text-left max-w-[430px] lg:max-w-3xl mt-[28px] lg:mt-8">
              {sobreNosConfig.espaco.text}
            </p>
          </div>
        </div>
        <div className="mt-[44px] lg:mt-14 pb-[52px] lg:pb-16 flex flex-col gap-[44px] lg:gap-14">
          {sobreNosConfig.espaco.studios.map((studio) => (
            <div key={studio.title}>
              <div className="mx-auto max-w-[402px] lg:max-w-7xl px-[30px] lg:px-8">
                <p className="font-changa text-[#363535] text-[20px] lg:text-[26px] font-bold text-center">
                  {studio.title}
                </p>
                <p className="font-amiko text-[#363535] text-[14px] lg:text-[16px] text-center mt-[4px]">
                  {studio.address}
                </p>
              </div>
              <div className="mt-[20px] lg:mt-6 grid grid-cols-2 lg:mx-auto lg:max-w-6xl lg:grid-cols-4 lg:gap-6 lg:px-8">
                {studio.images.map((src, i) => (
                  <div key={i} className="aspect-[4/3] overflow-hidden">
                    <img src={src} alt={`${studio.title} ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </SubpageShell>
  )
}
