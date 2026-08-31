import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { SubpageShell } from "@/components/subpage-shell"
import { professoresData } from "@/data/site-config"

export function generateStaticParams() {
  return professoresData.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const professor = professoresData.find((p) => p.slug === slug)
  return {
    title: professor ? `${professor.name} | Balletvita` : "Professor | Balletvita",
  }
}

export default async function ProfessorPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const professor = professoresData.find((p) => p.slug === slug)
  if (!professor) notFound()

  const outros = professoresData.filter((p) => p.slug !== slug)

  return (
    <SubpageShell
      title={professor.name}
      variant="yellow"
      beforeTitle={
        <div className="bg-white">
          <div className="mx-auto max-w-[402px] lg:max-w-7xl px-[30px] lg:px-8">
            <div className="pt-[38px] lg:pt-12">
              <div className="flex justify-center">
                <div className="w-[240px] lg:w-[300px] h-[240px] lg:h-[300px] rounded-full overflow-hidden">
                  <img src={professor.image} alt={professor.name} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    >
      <section className="bg-white">
        <div className="mx-auto max-w-[402px] lg:max-w-7xl px-[30px] lg:px-8">
          <div className="pt-[34px] lg:pt-12">
            <p className="font-changa text-[#363535] text-[20px] lg:text-[26px] font-semibold text-center">
              {professor.role}
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-[402px] lg:max-w-7xl px-[30px] lg:px-8">
          <div className="pt-[30px] lg:pt-10 pb-[44px] lg:pb-16 flex flex-col gap-[22px] lg:gap-7">
            {professor.bio.map((paragraph) => (
              <p
                key={paragraph}
                className="font-amiko text-[#363535] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px] text-center max-w-[430px] lg:max-w-3xl mx-auto"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>
      <div className="bg-[#67c4a8]">
        <div className="mx-auto max-w-[402px] lg:max-w-7xl px-[30px] lg:px-8">
          <div className="pt-[44px] lg:pt-14 pb-[48px] lg:pb-16">
            <p className="font-changa text-white text-[22px] lg:text-[28px] font-bold text-center">
              Modalidades
            </p>
            <div className="mt-[30px] lg:mt-10 flex flex-wrap justify-center gap-[12px] lg:gap-5">
              {professor.modalidades.map((m) => (
                <Link
                  key={m.slug}
                  href={`/modalidades/${m.slug}`}
                  className="px-7 py-3 rounded-full border-[1px] border-white text-white font-changa text-[15px] lg:text-[17px] font-semibold hover:bg-white hover:text-[#67c4a8] transition-colors"
                >
                  {m.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <section className="bg-white">
        <div className="mx-auto max-w-[402px] lg:max-w-7xl px-[30px] lg:px-8">
          <div className="py-[46px] lg:py-14 flex flex-col items-center">
            {outros.map((p) => (
              <Link
                key={p.slug}
                href={`/professores/${p.slug}`}
                className="px-6 py-3 rounded-full border-[1px] border-[#67c4a8] text-[#67c4a8] font-changa text-[15px] lg:text-[17px] font-semibold hover:bg-[#67c4a8] hover:text-white transition-colors"
              >
                Conhecer {p.name}
              </Link>
            ))}
            <Link
              href="/"
              className="mt-[40px] lg:mt-12 w-[234px] lg:w-[280px] h-[45px] lg:h-[50px] rounded-full bg-[#f6e449] flex items-center justify-center hover:bg-[#f2de3b] transition-colors shadow-sm"
            >
              <span className="font-changa text-[#363535] text-[17px] lg:text-[19px] font-bold">
                Voltar ao início
              </span>
            </Link>
          </div>
        </div>
      </section>
    </SubpageShell>
  )
}
