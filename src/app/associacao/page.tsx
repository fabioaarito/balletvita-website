import type { Metadata } from "next"
import Link from "next/link"
import { SubpageShell } from "@/components/subpage-shell"
import { associationConfig, galleryConfig } from "@/data/site-config"

export const metadata: Metadata = {
  title: "Associação Pé Esquerdo | Balletvita",
}

export default function AssociacaoPage() {
  return (
    <SubpageShell title="ASSOCIAÇÃO PÉ ESQUERDO">
      <section className="bg-white">
        <div className="mx-auto max-w-[402px] lg:max-w-7xl px-[30px] lg:px-8 flex justify-center pt-[50px] lg:pt-16">
          <img
            src={associationConfig.logo}
            alt="Pé Esquerdo — Associação Cultural"
            className="w-[290px] lg:w-[400px] h-auto"
          />
        </div>
        <div className="bg-black mt-[40px] lg:mt-14">
          <div className="mx-auto max-w-[402px] lg:max-w-7xl px-[30px] lg:px-8">
            <div className="flex flex-col items-center py-[50px] lg:py-16">
              <h2 className="font-changa text-white text-[24px] lg:text-[32px] font-semibold text-center">
                {associationConfig.title}
              </h2>
              <p className="font-amiko text-white text-[16px] lg:text-[18px] leading-[22px] lg:leading-[26px] text-center max-w-[340px] lg:max-w-xl mt-[38px] lg:mt-8">
                {associationConfig.text}
              </p>
              <div className="grid gap-[24px] lg:grid-cols-2 lg:gap-8 w-full mt-[38px] lg:mt-10">
                {galleryConfig.images.map((img, i) => (
                  <img key={i} src={img.src} alt="" className="w-full h-[267px] lg:h-[380px] object-cover rounded-[14px]" />
                ))}
              </div>
              <p className="font-amiko text-white text-[16px] lg:text-[18px] leading-[22px] lg:leading-[26px] text-center max-w-[340px] lg:max-w-xl mt-[44px] lg:mt-10">
                {associationConfig.text2}
              </p>
              <Link
                href="/"
                className="w-[180px] lg:w-[220px] h-[45px] lg:h-[54px] rounded-full bg-[#f6e449] flex items-center justify-center hover:bg-[#f2de3b] transition-colors mt-[24px] lg:mt-8 shadow-sm"
              >
                <span className="font-changa text-[#363535] text-[18px] lg:text-[22px] font-bold">
                  Voltar ao início
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SubpageShell>
  )
}
