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

function chunk<T>(arr: readonly T[], size: number): T[][] {
  const out: T[][] = []
  for (let i = 0; i < arr.length; i += size) {
    out.push(arr.slice(i, i + size))
  }
  return out
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
  const bioGroups = chunk(professor.bio, 2)

  return (
    <SubpageShell
      title={professor.name}
      variant="custom"
      beforeTitle={
        <div className="relative flex h-[280px] lg:h-[420px] w-full">
          <div className="w-[70%] h-full overflow-hidden">
            <img src={professor.image} alt={professor.name} className="w-full h-full object-cover" />
          </div>
          <div className="w-[30%] h-full bg-[#67c4a8]" />
          <div className="absolute bottom-0 left-[44%] right-0 min-h-[60px] lg:min-h-[84px] bg-[#f6e449] flex items-center justify-center px-[12px] py-[14px]">
            <span className="font-changa text-[#363535] text-[17px] lg:text-[26px] font-bold tracking-[1px] text-center leading-[22px] lg:leading-[32px]">
              {professor.name.toUpperCase()}
            </span>
          </div>
        </div>
      }
    >
      {bioGroups.map((group, gi) => {
        const isTeal = gi % 2 === 1
        return (
          <div key={gi} className={isTeal ? "bg-[#67c4a8]" : "bg-white"}>
            <div className="mx-auto max-w-[402px] lg:max-w-7xl px-[30px] lg:px-8">
              <div className={`max-w-3xl ${gi === 0 ? "pt-[34px] lg:pt-12 pb-[30px] lg:pb-10" : "py-[30px] lg:py-10"}`}>
                {gi === 0 && (
                  <p className="font-changa text-[#363535] text-[18px] lg:text-[24px] font-bold">
                    {professor.role}
                  </p>
                )}
                <div className={`${gi === 0 ? "mt-[24px] lg:mt-8" : ""} flex flex-col gap-[22px] lg:gap-7`}>
                  {group.map((paragraph) => (
                    <p
                      key={paragraph}
                      className={`font-amiko text-[17px] lg:text-[20px] leading-[26px] lg:leading-[30px] ${
                        isTeal ? "text-white" : "text-[#363535]"
                      }`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )
      })}

      <section className="bg-white">
        <div className="mx-auto max-w-[402px] lg:max-w-7xl px-[30px] lg:px-8">
          <div className="py-[44px] lg:py-16 flex flex-col items-center">
            <p className="font-changa text-[#363535] text-[22px] lg:text-[28px] font-bold text-center">
              Modalidades
            </p>
            <div className="mt-[34px] lg:mt-12 flex flex-wrap justify-center gap-[24px] lg:gap-10">
              {professor.modalidades.map((m) => (
                <Link
                  key={m.slug}
                  href={`/modalidades/${m.slug}`}
                  className="w-[116px] h-[116px] lg:w-[150px] lg:h-[150px] rounded-full bg-[#f6e449] flex items-center justify-center text-center px-[14px] hover:bg-[#f2de3b] transition-colors shadow-sm"
                >
                  <span className="font-changa text-[#363535] text-[16px] lg:text-[20px] font-bold leading-[20px] lg:leading-[24px]">
                    {m.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[402px] lg:max-w-7xl px-[30px] lg:px-8">
          <div className="pb-[46px] lg:pb-16 flex flex-wrap justify-center gap-[12px] lg:gap-4">
            {outros.map((p) => (
              <Link
                key={p.slug}
                href={`/professores/${p.slug}`}
                className="px-6 py-3 rounded-full border-[1px] border-[#67c4a8] text-[#67c4a8] font-changa text-[15px] lg:text-[17px] font-semibold hover:bg-[#67c4a8] hover:text-white transition-colors"
              >
                Conhecer {p.name}
              </Link>
            ))}
          </div>
          <div className="pb-[52px] lg:pb-16 flex justify-center">
            <Link
              href="/"
              className="w-[234px] lg:w-[280px] h-[45px] lg:h-[50px] rounded-full bg-[#f6e449] flex items-center justify-center hover:bg-[#f2de3b] transition-colors shadow-sm"
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
