'use client'

import { useState } from "react"
import { heroConfig } from "@/data/site-config"

const links = [
  { label: "Sobre", href: "#about" },
  { label: "Modalidades", href: "#modalidades" },
  { label: "Professores", href: "#professores" },
  { label: "Em Palco", href: "#palco" },
  { label: "Galeria", href: "#galeria" },
  { label: "Contactos", href: "#contactos" },
]

export function MenuOverlay() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Abrir menu"
        className="flex flex-col justify-center items-end gap-[7px] w-[35px] h-[35px]"
      >
        <span className="block w-[20px] h-[3px] bg-white rounded" />
        <span className="block w-[20px] h-[3px] bg-white rounded" />
        <span className="block w-[20px] h-[3px] bg-white rounded" />
      </button>

      <div
        className={`fixed inset-0 z-50 bg-[#67c4a8] transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between px-2 pt-[12px]">
          <img src="/images/logo.png" alt="Balletvita" className="w-[147px] h-auto" />
          <button
            onClick={() => setOpen(false)}
            aria-label="Fechar menu"
            className="w-[35px] h-[35px] relative"
          >
            <span className="absolute top-1/2 left-0 w-[26px] h-[3px] bg-white rounded rotate-45" />
            <span className="absolute top-1/2 left-0 w-[26px] h-[3px] bg-white rounded -rotate-45" />
          </button>
        </div>
        <nav className="px-[34px] pt-[40px] flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-changa text-white text-[22px] font-semibold uppercase tracking-wide py-2 border-b border-white/20"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#cta"
            onClick={() => setOpen(false)}
            className="mt-6 self-start inline-flex items-center px-6 py-3 rounded-full bg-[#f6e449] font-changa text-[#363535] font-bold"
          >
            {heroConfig.cta}
          </a>
        </nav>
      </div>
    </>
  )
}
