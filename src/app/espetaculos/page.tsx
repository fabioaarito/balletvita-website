import type { Metadata } from "next"
import { SubpageShell } from "@/components/subpage-shell"
import { galeriaPage } from "@/data/site-config"

export const metadata: Metadata = {
  title: "Galeria | Balletvita",
}

export default function EspetaculosPage() {
  return (
    <SubpageShell title={galeriaPage.title}>
      <section className="bg-white">
        <div className="mx-auto max-w-[402px] lg:max-w-7xl px-[30px] lg:px-8">
          <div className="pt-[42px] lg:pt-14 pb-[52px] lg:pb-16">
            <h2 className="font-changa text-[#67c4a8] text-[24px] lg:text-[32px] font-semibold text-center">
              {galeriaPage.heading}
            </h2>
            <div className="mt-[38px] lg:mt-12 grid grid-cols-2 gap-[20px] lg:gap-8">
              {galeriaPage.items.map((item) => (
                <div key={item.title} className="w-full rounded-[14px] overflow-hidden">
                  <div className="relative h-[180px] lg:h-[300px] w-full overflow-hidden">
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
    </SubpageShell>
  )
}
