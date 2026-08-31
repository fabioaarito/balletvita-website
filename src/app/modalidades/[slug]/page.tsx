import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { SubpageShell } from "@/components/subpage-shell"
import { modalidadesData, professoresData } from "@/data/site-config"

export function generateStaticParams() {
  return modalidadesData.map((m) => ({ slug: m.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const modalidade = modalidadesData.find((m) => m.slug === slug)
  return {
    title: modalidade ? `${modalidade.title} | Balletvita` : "Modalidade | Balletvita",
  }
}

export default async function ModalidadePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const modalidade = modalidadesData.find((m) => m.slug === slug)
  if (!modalidade) notFound()

  const outras = modalidadesData.filter((m) => m.slug !== slug)
  const professores = professoresData

  return (
    <SubpageShell
      title={modalidade.title}
      variant="yellow"
      beforeTitle={
        <div className="bg-white">
          <div className="mx-auto max-w-[402px] lg:max-w-7xl px-[30px] lg:px-8">
            <div className="pt-[30px] lg:pt-10 flex justify-center">
              <div className="w-full lg:w-[640px] h-[240px] lg:h-[360px] rounded-[14px] overflow-hidden">
                <img src={modalidade.image} alt={modalidade.title} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      }
    >
      <div className="bg-[#67c4a8]">
        <div className="mx-auto max-w-[402px] lg:max-w-7xl px-[30px] lg:px-8">
          <div className="pt-[40px] lg:pt-12 pb-[42px] lg:pb-14">
            <div className="flex flex-col gap-[22px] lg:gap-7">
              {modalidade.paragraphs.map((p) => (
                <p
                  key={p}
                  className="font-amiko text-white text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px] text-center max-w-[430px] lg:max-w-3xl mx-auto"
                >
                  {p}
                </p>
              ))}
            </div>
            {"idadeMinima" in modalidade && modalidade.idadeMinima && (
              <p className="font-changa text-[#f6e449] text-[17px] lg:text-[22px] font-semibold text-center mt-[34px] lg:mt-10">
                {modalidade.idadeMinima}
              </p>
            )}
          </div>
        </div>
      </div>
      {"badge" in modalidade && modalidade.badge && (
        <section className="bg-white">
          <div className="mx-auto max-w-[402px] lg:max-w-7xl px-[30px] lg:px-8">
            <div className="pt-[42px] lg:pt-14 pb-[44px] lg:pb-16">
              <div className="flex justify-center">
                <p className="font-changa text-[#c30920] text-[22px] lg:text-[30px] font-bold leading-[26px] lg:leading-[34px] text-center whitespace-pre-line">
                  {modalidade.badge.title}
                </p>
              </div>
              <p className="font-amiko text-[#363535] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px] text-center max-w-[430px] lg:max-w-3xl mx-auto mt-[30px] lg:mt-8">
                {modalidade.badge.text}
              </p>
            </div>
          </div>
        </section>
      )}
      <section className="bg-white">
        <div className="mx-auto max-w-[402px] lg:max-w-7xl px-[30px] lg:px-8">
          <div className="flex flex-col items-center pt-[6px] lg:pt-4 pb-[46px] lg:pb-16">
            <Link
              href="/horarios"
              className="w-[200px] lg:w-[240px] h-[45px] lg:h-[52px] rounded-full bg-[#f6e449] flex items-center justify-center hover:bg-[#f2de3b] transition-colors shadow-sm"
            >
              <span className="font-changa text-[#363535] text-[18px] lg:text-[21px] font-bold">
                Horários
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-[402px] lg:max-w-7xl px-[30px] lg:px-8">
          <div className="pb-[52px] lg:pb-16">
            <p className="font-changa text-[#67c4a8] text-[18px] lg:text-[24px] font-semibold text-center">
              Professores
            </p>
            <div className="mt-[30px] lg:mt-10 grid gap-[26px] lg:grid-cols-2 lg:gap-8">
              {professores.map((p) => (
                <Link
                  key={p.slug}
                  href={`/professores/${p.slug}`}
                  className="group relative w-full h-[240px] lg:h-[280px] rounded-[14px] overflow-hidden block"
                >
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent pt-10 pb-3 px-4">
                    <p className="font-changa text-white text-[17px] lg:text-[20px] font-bold">{p.name}</p>
                    <p className="font-changa text-white text-[12px] lg:text-[13px] font-semibold opacity-90">{p.homeLabel}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-[402px] lg:max-w-7xl px-[30px] lg:px-8">
          <div className="pb-[52px] lg:pb-16">
            <p className="font-changa text-[#67c4a8] text-[18px] lg:text-[24px] font-semibold text-center">
              Outras modalidades
            </p>
            <div className="flex flex-wrap justify-center gap-[10px] lg:gap-4 mt-[24px] lg:mt-8">
              {outras.map((m) => (
                <Link
                  key={m.slug}
                  href={`/modalidades/${m.slug}`}
                  className="px-6 py-3 rounded-full border-[1px] border-[#67c4a8] text-[#67c4a8] font-changa text-[15px] lg:text-[17px] font-semibold hover:bg-[#67c4a8] hover:text-white transition-colors"
                >
                  {m.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SubpageShell>
  )
}
