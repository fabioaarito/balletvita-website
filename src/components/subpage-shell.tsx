import { Footer } from "./footer"

export function SubpageShell({
  title,
  variant = "teal",
  beforeTitle,
  children,
}: {
  title: string
  variant?: "teal" | "yellow" | "custom"
  beforeTitle?: React.ReactNode
  children: React.ReactNode
}) {
  const isYellow = variant === "yellow"
  const isCustom = variant === "custom"
  return (
    <main className="min-h-screen bg-white">
      <div className="h-[64px] lg:h-[80px] bg-white" />
      {beforeTitle}
      {!isCustom && (
        <div className={isYellow ? "bg-[#f6e449]" : "bg-[#67c4a8]"}>
          <div className="relative mx-auto max-w-[402px] lg:max-w-7xl px-[30px] lg:px-8">
            <div
              className={
                isYellow
                  ? "h-[72px] lg:h-[84px] flex items-center"
                  : "h-[190px] lg:h-[220px] flex items-end pb-[24px] lg:pb-8"
              }
            >
              <h1
                className={`font-changa text-[26px] lg:text-[40px] font-bold leading-[30px] lg:leading-[48px] ${
                  isYellow ? "text-[#363535]" : "text-[#f6e449]"
                }`}
              >
                {title}
              </h1>
            </div>
            {!isYellow && (
              <div className="absolute right-0 top-0 bottom-0 w-[60px] lg:w-[80px] bg-[#f6e449]" />
            )}
          </div>
        </div>
      )}
      {children}
      <Footer />
    </main>
  )
}
