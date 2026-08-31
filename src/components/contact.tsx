import { contactConfig } from "@/data/site-config"

export function ContactSection() {
  const addressLines = contactConfig.address.split("\n")
  return (
    <section id="contactos" className="w-full bg-[#efefef]">
      <div className="mx-auto max-w-[402px] lg:max-w-7xl px-[30px] lg:px-8">
        <div className="flex flex-col items-center text-center pt-[47px] pb-[46px] lg:py-16">
          <h2 className="font-changa text-[#67c4a8] text-[24px] lg:text-[32px] font-semibold leading-[30px] lg:leading-[38px] max-w-[320px] lg:max-w-none whitespace-pre-line">
            {contactConfig.heading}
          </h2>
          <div className="mt-[44px] lg:mt-12 flex flex-col items-center gap-[6px] font-amiko text-[#363535] text-[16px] lg:text-[18px] leading-[22px]">
            {addressLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <p className="mt-[6px]">{contactConfig.phone}</p>
            <p className="mt-[6px] whitespace-pre-line">
              {contactConfig.emails[0].label} ou
              <br />
              <a href={contactConfig.emails[1].href} className="hover:underline">
                {contactConfig.emails[1].label}
              </a>
            </p>
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
