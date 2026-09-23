import type { Metadata } from "next"
import { SubpageShell } from "@/components/subpage-shell"
import { galeriaPage } from "@/data/site-config"

export const metadata: Metadata = {
  title: "Galeria | Balletvita",
}

export default function EspetaculosPage() {
  return (
    <SubpageShell title={galeriaPage.title} footer={false}>
      <section className="bg-white">
        <div className="mx-auto max-w-[402px] lg:max-w-7xl px-[30px] lg:px-8">
          <div className="pt-[42px] lg:pt-14 pb-[52px] lg:pb-16">
            <h2 className="font-changa text-[#67c4a8] text-[24px] lg:text-[32px] font-semibold text-center">
              {galeriaPage.heading}
            </h2>
            <div className="mt-[38px] lg:mt-12 grid grid-cols-2 gap-[20px] lg:gap-8">
              {galeriaPage.items.map((item) => (
                <div key={item.title} className="w-full">
                  <div className="relative aspect-[3/5] w-full overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <p className="font-changa text-[#363535] text-[16px] lg:text-[20px] font-semibold text-center mt-[14px] lg:mt-4">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[402px] lg:max-w-7xl px-[30px] lg:px-8">
          <h2 className="font-changa text-[#67c4a8] text-[24px] lg:text-[32px] font-semibold text-center">
            {galeriaPage.fotografiasTitle}
          </h2>
        </div>
        <div className="mt-[30px] lg:mt-10 grid grid-cols-3 lg:mx-auto lg:max-w-6xl lg:grid-cols-4 lg:gap-4 lg:px-8">
          {galeriaPage.fotografias.map((src, i) => (
            <div key={i} className="aspect-square overflow-hidden">
              <img src={src} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <div className="pb-[52px] lg:pb-16" />
      </section>
    </SubpageShell>
  )
}
