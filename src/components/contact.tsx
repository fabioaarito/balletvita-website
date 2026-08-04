import { contactConfig } from "@/data/site-config"

const icons = [
  {
    bg: "#efc7dd",
    glyph: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 21s-7-6.1-7-11a7 7 0 1 1 14 0c0 4.9-7 11-7 11Z"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="10" r="2.5" stroke="#fff" strokeWidth="2" />
      </svg>
    ),
  },
  {
    bg: "#f47bda",
    glyph: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
        <path
          d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    bg: "#f47bda",
    glyph: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="#fff" strokeWidth="2" />
        <path d="m4 7 8 6 8-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
] as const

export function ContactSection() {
  const [addressLine1, addressLine2] = contactConfig.address.split("\n")
  return (
    <section id="contactos" className="w-full bg-[#efefef]">
      <div className="mx-auto max-w-[402px] lg:max-w-7xl px-[30px] lg:px-8">
        <div className="flex flex-col items-center text-center pt-[47px] pb-[46px] lg:py-16">
          <h2 className="font-changa text-[#373535] text-[24px] lg:text-[32px] font-semibold leading-[26px] lg:leading-[34px] max-w-[320px] lg:max-w-none">
            {contactConfig.heading}
          </h2>
          <div className="mt-[47px] lg:mt-12 flex gap-[26px]">
            {icons.map((icon, i) => (
              <div
                key={i}
                className="w-[88px] h-[88px] lg:w-[110px] lg:h-[110px] rounded-[18px] flex items-center justify-center"
                style={{ backgroundColor: icon.bg }}
              >
                {icon.glyph}
              </div>
            ))}
          </div>
          <div className="mt-[60px] lg:mt-14 flex flex-col items-center gap-[6px] font-amiko text-[#363535] text-[16px] lg:text-[18px] leading-[22px]">
            <p className="max-w-[300px]">
              {addressLine1}
              <br />
              {addressLine2}
            </p>
            <p>{contactConfig.phone}</p>
            <p>
              {contactConfig.emails.map((email, i) => (
                <span key={email.label}>
                  {i > 0 && <span> ou </span>}
                  <a href={email.href} className="hover:underline">
                    {email.label}
                  </a>
                </span>
              ))}
            </p>
          </div>
          <div className="mt-[40px] lg:mt-10 flex gap-[26px]">
            {contactConfig.socials.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.alt}
                className="w-[48px] h-[48px] rounded-full bg-[#454545] flex items-center justify-center hover:bg-[#5a5a5a] transition-colors overflow-hidden"
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
