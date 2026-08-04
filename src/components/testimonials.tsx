import { testimonialsConfig } from "@/data/site-config"

const cardStyles = {
  outline: {
    card: "bg-transparent border-[#f6e449]",
    name: "text-[#f6e449]",
    role: "text-white",
    quote: "text-white",
  },
  yellow: {
    card: "bg-[#f6e449] border-transparent",
    name: "text-[#67c4a8]",
    role: "text-[#363535]",
    quote: "text-[#363535]",
  },
  teal: {
    card: "bg-[#67c4a8] border-transparent",
    name: "text-[#f6e449]",
    role: "text-white",
    quote: "text-white",
  },
} as const

export function TestimonialsSection() {
  const [a, b, c, d] = testimonialsConfig.cards
  return (
    <section id="testimonios" className="w-full">
      <div className="bg-[#67c4a8]">
        <div className="mx-auto max-w-[402px] lg:max-w-7xl px-[30px] lg:px-8">
          <div className="pt-[50px] lg:pt-14 pb-[47px] lg:pb-16">
            <h2 className="font-changa text-[#f6e449] text-[24px] lg:text-[34px] font-semibold text-center leading-[26px] lg:leading-[38px] whitespace-pre-line">
              {testimonialsConfig.headingTeal}
            </h2>
            <div className="mt-[82px] lg:mt-10 grid gap-[76px] lg:gap-8 lg:grid-cols-2">
              <TestimonialCard card={a} />
              <TestimonialCard card={b} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="mx-auto max-w-[402px] lg:max-w-7xl px-[30px] lg:px-8">
          <div className="pt-[40px] lg:pt-14 pb-[61px] lg:pb-20">
            <h2 className="font-changa text-[#67c4a8] text-[24px] lg:text-[34px] font-semibold text-center leading-[26px] lg:leading-[38px]">
              {testimonialsConfig.headingWhite}
            </h2>
            <div className="mt-[87px] lg:mt-10 grid gap-[78px] lg:gap-8 lg:grid-cols-2">
              <TestimonialCard card={c} />
              <TestimonialCard card={d} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ card }: { card: (typeof testimonialsConfig.cards)[number] }) {
  const s = cardStyles[card.variant]
  const mirrored = card.mirrored
  return (
    <div className={`relative h-[213px] lg:h-[240px] rounded-[18px] border-[4px] ${s.card}`}>
      <div className={`absolute -top-[40px] flex items-center gap-[15px] ${mirrored ? "flex-row-reverse right-[44px]" : "left-[44px]"}`}>
        <div className="w-[109px] h-[109px] lg:w-[120px] lg:h-[120px] rounded-full overflow-hidden shrink-0 shadow-md">
          <img src={card.avatar} alt="" className="w-full h-full object-cover" />
        </div>
        <div className={mirrored ? "text-right" : "text-left"}>
          <p className={`font-changa ${s.name} text-[16px] lg:text-[19px] font-bold`}>{card.name}</p>
          <p className={`font-changa ${s.role} text-[16px] lg:text-[18px] mt-[2px]`}>{card.role}</p>
        </div>
      </div>
      <p className={`absolute inset-x-[22px] top-[82px] lg:top-[104px] font-amiko ${s.quote} text-[16px] leading-[22px]`}>
        {card.quote}
      </p>
    </div>
  )
}
