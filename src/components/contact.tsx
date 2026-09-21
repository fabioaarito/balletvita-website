import { contactConfig } from "@/data/site-config"

const iconProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#67c4a8",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
}

function PinIcon() {
  return (
    <svg {...iconProps} className="shrink-0 mt-[2px]">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg {...iconProps} className="shrink-0">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg {...iconProps} className="shrink-0 mt-[2px]">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

export function ContactSection() {
  const addressLines = contactConfig.address.split("\n")
  const [geral, balletvita] = contactConfig.emails
  return (
    <section id="contactos" className="w-full bg-[#efefef]">
      <div className="mx-auto max-w-[402px] lg:max-w-7xl px-[30px] lg:px-8">
        <div className="flex flex-col items-center pt-[47px] pb-[46px] lg:py-16">
          <h2 className="font-changa text-[#67c4a8] text-[24px] lg:text-[32px] font-semibold leading-[30px] lg:leading-[38px] text-center max-w-[320px] lg:max-w-none whitespace-pre-line">
            {contactConfig.heading}
          </h2>
          <div className="mt-[44px] lg:mt-12 w-full max-w-[340px] lg:max-w-md flex flex-col gap-[22px]">
            <div className="flex items-start gap-[14px]">
              <PinIcon />
              <p className="font-amiko text-[#363535] text-[16px] lg:text-[18px] leading-[24px]">
                {addressLines.map((line, i) => (
                  <span key={line}>
                    {line}
                    {i < addressLines.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
            <div className="flex items-center gap-[14px]">
              <PhoneIcon />
              <p className="font-amiko text-[#363535] text-[16px] lg:text-[18px] leading-[24px]">
                {contactConfig.phone}
              </p>
            </div>
            <div className="flex items-start gap-[14px]">
              <MailIcon />
              <p className="font-amiko text-[#363535] text-[16px] lg:text-[18px] leading-[24px]">
                <a href={geral.href} className="hover:underline">
                  {geral.label}
                </a>{" "}
                ou{" "}
                <a href={balletvita.href} className="hover:underline">
                  {balletvita.label}
                </a>
              </p>
            </div>
          </div>
          <div className="mt-[44px] lg:mt-12 flex gap-[22px] lg:gap-6">
            {contactConfig.socials.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.alt}
                className="w-[48px] h-[48px] flex items-center justify-center transition-opacity hover:opacity-70"
              >
                <img src={social.src} alt="" className="w-[28px] h-[28px] object-contain" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
