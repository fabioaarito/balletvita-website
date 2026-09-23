import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { SubpageShell } from "@/components/subpage-shell"
import { ModalidadeProfessores } from "@/components/modalidade-professores"
import { modalidadesData } from "@/data/site-config"

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

  const gallery: readonly string[] = "gallery" in modalidade ? modalidade.gallery : []

  return (
    <SubpageShell
      title={modalidade.title}
      variant="yellow"
      footer={false}
      beforeTitle={
        <div className="w-full">
          <img
            src={modalidade.image}
            alt={modalidade.title}
            className="w-full h-[240px] lg:h-[360px] object-cover"
          />
        </div>
      }
    >
      <div className="bg-[#67c4a8]">
        <div className="mx-auto w-full max-w-7xl px-[30px] lg:px-8">
          <div className="pt-[40px] lg:pt-12 pb-[42px] lg:pb-14">
            <div className="flex flex-col gap-[24px] lg:gap-8">
              {modalidade.paragraphs.map((p) => (
                <p
                  key={p}
                  className="font-amiko text-white text-[20px] lg:text-[22px] leading-[28px] lg:leading-[32px]"
                >
                  {p}
                </p>
              ))}
            </div>
            {"idadeMinima" in modalidade && modalidade.idadeMinima && (
              <p className="font-changa text-white text-[18px] lg:text-[22px] font-semibold mt-[40px] lg:mt-12">
                {modalidade.idadeMinima}
              </p>
            )}
          </div>
        </div>
      </div>
      {"badge" in modalidade && modalidade.badge && (
        <section className="bg-white">
          <div className="mx-auto w-full max-w-7xl px-[30px] lg:px-8">
            <div className="pt-[42px] lg:pt-14 pb-[44px] lg:pb-16">
              <div className="flex justify-center">
                <p className="font-playfair text-[#c30920] text-[26px] lg:text-[34px] font-bold leading-[30px] lg:leading-[40px] text-center whitespace-pre-line">
                  {modalidade.badge.title}
                </p>
              </div>
              <p className="font-amiko text-[#363535] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px] max-w-[430px] lg:max-w-3xl mx-auto mt-[30px] lg:mt-8">
                {modalidade.badge.text}
              </p>
            </div>
          </div>
        </section>
      )}
      <ModalidadeProfessores slug={modalidade.slug} gallery={gallery} />
    </SubpageShell>
  )
}
