import { footerConfig } from "@/data/site-config"

export function Footer() {
  return (
    <footer className="w-full bg-white">
      <div className="mx-auto max-w-[402px] lg:max-w-7xl px-[30px] lg:px-8">
        <div className="flex flex-col items-center text-center py-[40px] lg:py-14">
          <h2 className="font-changa text-[#373636] text-[24px] lg:text-[28px] font-semibold">
            {footerConfig.heading}
          </h2>
          <div className="mt-[28px] lg:mt-8 flex flex-col gap-[4px] font-amiko text-[#363535] text-[16px] lg:text-[18px] leading-[24px]">
            {footerConfig.lines.map((line) => {
              const className = `${line.bold ? "font-bold" : ""}`
              return "link" in line && line.link ? (
                <a key={line.text} href={line.link} className={`${className} hover:underline`}>
                  {line.text}
                </a>
              ) : (
                <p key={line.text} className={className}>
                  {line.text}
                </p>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
