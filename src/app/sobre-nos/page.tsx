import type { Metadata } from "next"
import { SubpageShell } from "@/components/subpage-shell"
import { sobreNosConfig } from "@/data/site-config"

export const metadata: Metadata = {
  title: "Sobre Nós | Balletvita",
}

export default function SobreNosPage() {
  return (
    <SubpageShell title="SOBRE NÓS">
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
                  className="font-amiko text-[#363535] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px] text-center max-w-[430px] lg:max-w-3xl mx-auto"
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
                      className="font-amiko text-white text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px] text-center max-w-[430px] lg:max-w-3xl mx-auto"
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
                      className="font-amiko text-[#363535] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px] text-center max-w-[430px] lg:max-w-3xl mx-auto"
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
          <div className="pt-[46px] lg:pt-14 pb-[52px] lg:pb-16">
            <h3 className="font-changa text-[#67c4a8] text-[22px] lg:text-[30px] font-bold text-center">
              {sobreNosConfig.espaco.title}
            </h3>
            <p className="font-amiko text-[#363535] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px] text-center max-w-[430px] lg:max-w-3xl mx-auto mt-[28px] lg:mt-8">
              {sobreNosConfig.espaco.text}
            </p>
            <div className="mt-[44px] lg:mt-14 flex flex-col gap-[44px] lg:gap-14">
              {sobreNosConfig.espaco.studios.map((studio) => (
                <div key={studio.title} className="w-full">
                  <div className="w-full rounded-[14px] overflow-hidden">
                    <img src={studio.image} alt={studio.title} className="w-full h-[240px] lg:h-[380px] object-cover" />
                  </div>
                  <p className="font-changa text-[#363535] text-[20px] lg:text-[26px] font-bold text-center mt-[20px] lg:mt-6">
                    {studio.title}
                  </p>
                  <p className="font-amiko text-[#363535] text-[14px] lg:text-[16px] text-center mt-[4px]">
                    {studio.address}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SubpageShell>
  )
}
