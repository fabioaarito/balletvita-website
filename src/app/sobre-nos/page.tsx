import type { Metadata } from "next"
import { Fragment } from "react"
import { SubpageShell } from "@/components/subpage-shell"
import { sobreNosConfig } from "@/data/site-config"

export const metadata: Metadata = {
  title: "Sobre Nós | Balletvita",
}

function Paragraphs({
  paragraphs,
  className = "",
}: {
  paragraphs: readonly string[]
  className?: string
}) {
  return (
    <div className={`flex flex-col gap-[22px] lg:gap-7 ${className}`}>
      {paragraphs.map((paragraph) => (
        <p
          key={paragraph}
          className="font-amiko text-[#363535] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px] text-left"
        >
          {paragraph}
        </p>
      ))}
    </div>
  )
}

export default function SobreNosPage() {
  return (
    <SubpageShell title="SOBRE NÓS" logo footer={false}>
      <section className="bg-white">
        <div className="mx-auto max-w-[402px] lg:max-w-7xl px-[34px] lg:px-8">
          <div className="pt-[38px] lg:pt-14 pb-[28px] lg:pb-10">
            <h2 className="font-changa text-[#67c4a8] text-[20px] lg:text-[26px] font-bold text-center leading-[26px] lg:leading-[34px]">
              {sobreNosConfig.subtitle}
            </h2>
            <Paragraphs paragraphs={sobreNosConfig.intro} className="mt-[24px] lg:mt-8" />
          </div>
        </div>
      </section>

      <div className="w-full">
        <img
          src={sobreNosConfig.introImage}
          alt=""
          className="w-full h-[235px] lg:h-[420px] object-cover"
        />
      </div>

      {sobreNosConfig.sections.map((section) => {
        const sectionImage = "image" in section ? section.image : undefined
        const imageAfterParagraph =
          "imageAfterParagraph" in section ? section.imageAfterParagraph : -1
        const isTeal = section.band === "teal"

        return (
          <section key={section.title} className={isTeal ? "bg-[#67c4a8]" : "bg-white"}>
            <div className="mx-auto max-w-[402px] lg:max-w-7xl px-[34px] lg:px-8">
              <div className="py-[36px] lg:py-14">
                <h3
                  className={`font-changa font-bold text-left leading-[24px] lg:leading-[32px] ${
                    isTeal ? "text-white" : "text-[#363535]"
                  } text-[17px] lg:text-[22px]`}
                >
                  {section.title}
                </h3>
                <div className="mt-[20px] lg:mt-7 flex flex-col gap-[22px] lg:gap-7">
                  {section.paragraphs.map((paragraph, paragraphIndex) => (
                    <Fragment key={paragraph}>
                      <p
                        className={`font-amiko text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px] text-left ${
                          isTeal ? "text-white" : "text-[#363535]"
                        }`}
                      >
                        {paragraph}
                      </p>
                      {sectionImage && paragraphIndex === imageAfterParagraph && (
                        <div className="-mx-[34px] lg:-mx-8">
                          <img
                            src={sectionImage}
                            alt=""
                            className="w-full h-[235px] lg:h-[420px] object-cover"
                          />
                        </div>
                      )}
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )
      })}

      <section className="bg-white">
        <div className="mx-auto max-w-[402px] lg:max-w-7xl px-[34px] lg:px-8">
          <div className="pt-[34px] lg:pt-14">
            <h3 className="font-changa text-[#67c4a8] text-[20px] lg:text-[26px] font-bold text-center leading-[26px] lg:leading-[34px]">
              {sobreNosConfig.espaco.title}
            </h3>
            <p className="font-amiko text-[#363535] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px] text-left mt-[24px] lg:mt-8">
              {sobreNosConfig.espaco.text}
            </p>
          </div>
        </div>
        <div className="mt-[30px] lg:mt-12 pb-[52px] lg:pb-16 flex flex-col gap-[40px] lg:gap-14">
          {sobreNosConfig.espaco.studios.map((studio) => (
            <div key={studio.title}>
              <div className="mx-auto max-w-[402px] lg:max-w-7xl px-[34px] lg:px-8">
                <p className="font-changa text-[#363535] text-[14px] lg:text-[18px] font-bold text-center">
                  {studio.title}
                </p>
                <p className="font-amiko text-[#363535] text-[14px] lg:text-[16px] text-center mt-[4px]">
                  {studio.address}
                </p>
              </div>
              <div className="mt-[18px] lg:mt-6 grid grid-cols-2 lg:mx-auto lg:max-w-6xl lg:grid-cols-4 lg:gap-6 lg:px-8">
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
