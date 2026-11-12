import type { Metadata } from "next"
import Link from "next/link"
import { SubpageShell } from "@/components/subpage-shell"
import { associacaoPage } from "@/data/site-config"

export const metadata: Metadata = {
  title: "Associação Pé Esquerdo | Balletvita",
}

const contentClass = "mx-auto max-w-[402px] lg:max-w-7xl px-[30px] lg:px-8"

function Band({
  gray = false,
  className = "",
  children,
}: {
  gray?: boolean
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={gray ? "bg-[#efefef]" : "bg-white"}>
      <div className={`${contentClass} py-[24px] lg:py-9 ${className}`}>{children}</div>
    </div>
  )
}

function Paragraphs({
  paragraphs,
  className = "",
}: {
  paragraphs: readonly string[]
  className?: string
}) {
  return (
    <div className={`flex flex-col gap-[16px] lg:gap-5 ${className}`}>
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

export default function AssociacaoPage() {
  const intro = associacaoPage.intro.paragraphs
  const missao = associacaoPage.missao.paragraphs
  const nucleoA = associacaoPage.atividade.nucleos[0]
  const nucleoB = associacaoPage.atividade.nucleos[1]
  const nucleoC = associacaoPage.atividade.nucleos[2]

  return (
    <SubpageShell
      title="ASSOCIAÇÃO PÉ ESQUERDO"
      variant="custom"
      footer={false}
      beforeTitle={
        <div className="bg-black">
          <div className="mx-auto max-w-[402px] lg:max-w-7xl px-[30px] lg:px-8 pt-[18px] lg:pt-6 pb-[44px] lg:pb-12">
            <Link href="/" aria-label="Balletvita — Página inicial" className="inline-flex">
              <img
                src="/images/logo.png"
                alt="Balletvita — Academia de Artes"
                className="w-[108px] lg:w-[155px] h-auto"
              />
            </Link>
            <div className="mt-[8px] lg:mt-3 flex justify-center">
              <img
                src="/images/assoc-logo-white.png"
                alt="Pé Esquerdo — Associação Cultural"
                className="w-[190px] lg:w-[260px] h-auto"
              />
            </div>
          </div>
        </div>
      }
    >
      <Band className="pt-[32px]">
        <h2 className="font-changa text-[#363535] text-[18px] lg:text-[26px] font-bold leading-[24px] lg:leading-[34px]">
          {associacaoPage.intro.title}
        </h2>
        <Paragraphs paragraphs={intro.slice(0, 2)} className="mt-[16px] lg:mt-6 gap-0" />
      </Band>

      <Band gray>
        <Paragraphs paragraphs={intro.slice(2, 4)} />
      </Band>

      <Band>
        <Paragraphs paragraphs={intro.slice(4, 6)} />
      </Band>

      <div className="w-full">
        <img
          src={associacaoPage.heroImage}
          alt=""
          className="w-full h-[210px] lg:h-[380px] object-cover"
        />
      </div>

      <Band className="pt-[32px]">
        <h2 className="font-changa text-[#363535] text-[18px] lg:text-[26px] font-bold leading-[24px] lg:leading-[34px]">
          {associacaoPage.missao.title}
        </h2>
        <Paragraphs paragraphs={missao.slice(0, 2)} className="mt-[16px] lg:mt-6" />
      </Band>

      <Band gray>
        <Paragraphs paragraphs={missao.slice(2, 4)} />
      </Band>

      <Band>
        <Paragraphs paragraphs={missao.slice(4, 7)} />
      </Band>

      <Band gray>
        <h2 className="font-changa text-[#363535] text-[18px] lg:text-[26px] font-bold leading-[24px] lg:leading-[34px]">
          {associacaoPage.objetivos.title}
        </h2>
        <ul className="mt-[14px] lg:mt-5 flex flex-col gap-[8px] lg:gap-3">
          {associacaoPage.objetivos.items.map((item) => (
            <li key={item} className="flex items-start gap-[8px]">
              <span className="font-amiko text-[#363535] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px]">
                •
              </span>
              <span className="font-amiko text-[#363535] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px] text-left">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </Band>

      <Band className="pt-[32px]">
        <h2 className="font-changa text-[#363535] text-[18px] lg:text-[26px] font-bold leading-[24px] lg:leading-[34px]">
          {associacaoPage.atividade.title}
        </h2>
        <p className="font-amiko text-[#363535] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px] text-left mt-[16px] lg:mt-6">
          {associacaoPage.atividade.intro}
        </p>
      </Band>

      <Band className="pt-0">
        <h3 className="font-changa text-[#363535] text-[15px] lg:text-[20px] font-bold leading-[22px] lg:leading-[28px]">
          {nucleoA.title}
        </h3>
        <Paragraphs paragraphs={nucleoA.paragraphs.slice(0, 3)} className="mt-[14px] lg:mt-5" />
      </Band>

      <Band gray>
        <Paragraphs paragraphs={nucleoA.paragraphs.slice(3, 6)} />
      </Band>

      <Band>
        <Paragraphs paragraphs={nucleoA.paragraphs.slice(6, 9)} />
      </Band>

      <Band className="pt-[32px]">
        <h3 className="font-changa text-[#363535] text-[15px] lg:text-[20px] font-bold leading-[22px] lg:leading-[28px]">
          {nucleoB.title}
        </h3>
        <Paragraphs paragraphs={nucleoB.paragraphs.slice(0, 2)} className="mt-[14px] lg:mt-5" />
      </Band>

      <Band gray>
        <Paragraphs paragraphs={nucleoB.paragraphs.slice(2, 4)} />
      </Band>

      <Band>
        <Paragraphs paragraphs={nucleoB.paragraphs.slice(4, 7)} />
      </Band>

      <figure className="relative w-full">
        <img
          src={associacaoPage.destaque.image}
          alt=""
          className="w-full h-[230px] lg:h-[420px] object-cover"
        />
        <figcaption className="absolute bottom-[18px] left-[24px] whitespace-pre-line font-changa text-[12px] lg:text-[16px] font-bold leading-[16px] lg:leading-[22px] text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
          {associacaoPage.destaque.caption}
        </figcaption>
      </figure>

      <Band className="pt-[32px]">
        <h3 className="font-changa text-[#363535] text-[15px] lg:text-[20px] font-bold leading-[22px] lg:leading-[28px]">
          {nucleoC.title}
        </h3>
        <Paragraphs paragraphs={nucleoC.paragraphs.slice(0, 4)} className="mt-[14px] lg:mt-5" />
      </Band>

      <Band gray>
        <Paragraphs paragraphs={nucleoC.paragraphs.slice(4, 6)} />
      </Band>

      <div className="grid grid-cols-2">
        {associacaoPage.contactosGaleria.map((src, index) => (
          <div key={`${src}-${index}`} className="aspect-square overflow-hidden">
            <img src={src} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      <Band className="py-[40px] lg:py-14">
        <h2 className="font-changa text-[#363535] text-[18px] lg:text-[24px] font-bold text-center">
          {associacaoPage.contactos.title}
        </h2>
        <div className="mx-auto mt-[24px] lg:mt-8 max-w-[320px] lg:max-w-md">
          <div className="flex flex-col gap-0 font-amiko text-[#363535] text-[15px] lg:text-[18px] leading-[23px] lg:leading-[28px]">
            {associacaoPage.contactos.lines.map((line, index) => (
              <p key={line} className={index === 0 ? "font-bold" : ""}>
                {line}
              </p>
            ))}
          </div>
        </div>
      </Band>
    </SubpageShell>
  )
}
