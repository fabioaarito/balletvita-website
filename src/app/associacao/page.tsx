import type { Metadata } from "next"
import Link from "next/link"
import { SubpageShell } from "@/components/subpage-shell"
import { associationConfig, associacaoPage } from "@/data/site-config"

export const metadata: Metadata = {
  title: "Associação Pé Esquerdo | Balletvita",
}

export default function AssociacaoPage() {
  return (
    <SubpageShell title="ASSOCIAÇÃO PÉ ESQUERDO">
      <section className="bg-white">
        <div className="mx-auto max-w-[402px] lg:max-w-7xl px-[30px] lg:px-8 flex justify-center pt-[50px] lg:pt-16 pb-[40px] lg:pb-14">
          <img
            src={associationConfig.logo}
            alt="Pé Esquerdo — Associação Cultural"
            className="w-[290px] lg:w-[400px] h-auto"
          />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[402px] lg:max-w-7xl px-[30px] lg:px-8">
          <div className="pb-[46px] lg:pb-14">
            <h2 className="font-changa text-[#67c4a8] text-[22px] lg:text-[30px] font-bold text-center">
              {associacaoPage.intro.title}
            </h2>
            <div className="mt-[28px] lg:mt-8 flex flex-col gap-[22px] lg:gap-7">
              {associacaoPage.intro.paragraphs.map((p) => (
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
      </section>

      <div className="bg-[#67c4a8]">
        <div className="mx-auto max-w-[402px] lg:max-w-7xl px-[30px] lg:px-8">
          <div className="py-[46px] lg:py-14">
            <h2 className="font-changa text-white text-[22px] lg:text-[30px] font-bold text-center">
              {associacaoPage.missao.title}
            </h2>
            <div className="mt-[28px] lg:mt-8 flex flex-col gap-[22px] lg:gap-7">
              {associacaoPage.missao.paragraphs.map((p) => (
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

      <section className="bg-white">
        <div className="mx-auto max-w-[402px] lg:max-w-7xl px-[30px] lg:px-8">
          <div className="py-[46px] lg:py-14">
            <h2 className="font-changa text-[#67c4a8] text-[22px] lg:text-[30px] font-bold text-center">
              {associacaoPage.objetivos.title}
            </h2>
            <ul className="mt-[28px] lg:mt-8 flex flex-col gap-[16px] lg:gap-5 max-w-[430px] lg:max-w-3xl mx-auto">
              {associacaoPage.objetivos.items.map((item) => (
                <li key={item} className="flex items-start gap-[10px]">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0 mt-[4px]">
                    <path d="M5 9.5L7.5 12L13 6" stroke="#67c4a8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="font-amiko text-[#363535] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px] text-left">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[402px] lg:max-w-7xl px-[30px] lg:px-8">
          <div className="pb-[46px] lg:pb-14">
            <h2 className="font-changa text-[#67c4a8] text-[22px] lg:text-[30px] font-bold text-center">
              {associacaoPage.atividade.title}
            </h2>
            <p className="font-amiko text-[#363535] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px] text-center max-w-[430px] lg:max-w-3xl mx-auto mt-[28px] lg:mt-8">
              {associacaoPage.atividade.intro}
            </p>
            <div className="mt-[44px] lg:mt-14 flex flex-col gap-[44px] lg:gap-14">
              {associacaoPage.atividade.nucleos.map((nucleo) => (
                <div key={nucleo.title} className="rounded-[14px] bg-[#efefef]">
                  <div className="px-[24px] lg:px-12 py-[34px] lg:py-12">
                    <h3 className="font-changa text-[#67c4a8] text-[20px] lg:text-[26px] font-bold text-center">
                      {nucleo.title}
                    </h3>
                    <div className="mt-[24px] lg:mt-8 flex flex-col gap-[20px] lg:gap-6">
                      {nucleo.paragraphs.map((p) => (
                        <p
                          key={p}
                          className="font-amiko text-[#363535] text-[16px] lg:text-[19px] leading-[24px] lg:leading-[29px] text-center max-w-[430px] lg:max-w-3xl mx-auto"
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#67c4a8]">
        <div className="mx-auto max-w-[402px] lg:max-w-7xl px-[30px] lg:px-8">
          <div className="py-[46px] lg:py-14 flex flex-col items-center">
            <h2 className="font-changa text-white text-[22px] lg:text-[30px] font-bold text-center">
              {associacaoPage.contactos.title}
            </h2>
            <div className="mt-[24px] lg:mt-8 flex flex-col items-center gap-[4px] font-amiko text-white text-[16px] lg:text-[18px] leading-[24px] text-center">
              {associacaoPage.contactos.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <Link
              href="/"
              className="mt-[32px] lg:mt-10 w-[180px] lg:w-[220px] h-[45px] lg:h-[54px] rounded-full bg-[#f6e449] flex items-center justify-center hover:bg-[#f2de3b] transition-colors shadow-sm"
            >
              <span className="font-changa text-[#363535] text-[18px] lg:text-[22px] font-bold">
                Voltar ao início
              </span>
            </Link>
          </div>
        </div>
      </div>
    </SubpageShell>
  )
}
