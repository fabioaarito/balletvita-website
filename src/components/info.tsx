import { infoCardsConfig } from "@/data/site-config"

export function InfoCards() {
  return (
    <section id="info" className="w-full bg-white">
      <div className="mx-auto max-w-[402px] lg:max-w-7xl px-[34px] lg:px-8">
        <div className="pt-[28px] lg:pt-10 pb-[14px] lg:pb-8 flex flex-col gap-[28px] lg:grid lg:grid-cols-3 lg:gap-6 lg:items-start">
          <InfoBlock block={infoCardsConfig.blocks[0]} />
        </div>
      </div>
      <div className="bg-[#efefef]">
        <div className="mx-auto max-w-[402px] lg:max-w-7xl px-[34px] lg:px-8">
          <div className="py-[22px] lg:py-8 lg:px-16">
            <InfoBlock block={infoCardsConfig.blocks[1]} />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[402px] lg:max-w-7xl px-[34px] lg:px-8">
        <div className="pt-[14px] lg:pt-8 pb-[31px] lg:pb-14 flex flex-col gap-[28px] lg:grid lg:grid-cols-3 lg:gap-6 lg:items-start">
          <InfoBlock block={infoCardsConfig.blocks[2]} />
        </div>
      </div>
    </section>
  )
}

function InfoBlock({ block }: { block: (typeof infoCardsConfig.blocks)[number] }) {
  return (
    <div className="flex flex-col items-center text-center">
      <h3 className="font-changa text-[#67c4a8] text-[19px] lg:text-[26px] font-semibold">
        {block.title}
      </h3>
      <ul className="mt-[12px] flex flex-col items-center gap-2">
        {block.items.map((item) => (
          <li key={item} className="flex items-center gap-[4px]">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0">
              <path d="M5 9.5L7.5 12L13 6" stroke="#67c4a8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="font-amiko text-[#363535] text-[16px] lg:text-[18px] text-left">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
