import type { Metadata } from "next"
import Link from "next/link"
import { AulaExperimentalForm } from "@/components/aula-experimental-form"
import { aulaExperimentalConfig } from "@/data/site-config"

export const metadata: Metadata = {
  title: "Aula Experimental | Balletvita",
  description: aulaExperimentalConfig.intro,
}

export default function AulaExperimentalPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="bg-[#67c4a8]">
        <div className="mx-auto w-full max-w-[560px] px-[30px] lg:px-8">
          <div className="pt-[24px] lg:pt-9">
            <Link href="/" aria-label="Balletvita — Página inicial" className="inline-flex">
              <img src="/images/logo.png" alt="Balletvita" className="h-auto w-[147px] lg:w-[170px]" />
            </Link>
          </div>

          <h1 className="mt-[40px] lg:mt-12 text-center font-changa text-[#f6e449] text-[28px] lg:text-[34px] font-bold leading-[34px] lg:leading-[42px]">
            {aulaExperimentalConfig.title}
          </h1>
          <p className="mt-[24px] lg:mt-7 font-amiko text-white text-[17px] lg:text-[19px] leading-[24px] lg:leading-[28px]">
            {aulaExperimentalConfig.intro}
          </p>
          <div className="h-[30px] lg:h-9" />
        </div>
      </div>

      <AulaExperimentalForm />
    </main>
  )
}
