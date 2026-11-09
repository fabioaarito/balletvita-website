'use client'

import { useState } from "react"
import Link from "next/link"
import { aulaExperimentalConfig } from "@/data/site-config"

type FormValues = {
  nome: string
  dataNascimento: string
  encarregado: string
  telemovel: string
  email: string
  modalidade: string
  experiencia: string
  preferencia: string
  observacoes: string
  consentimento: boolean
}

type FormErrors = Partial<Record<keyof FormValues, string>>

const initialValues: FormValues = {
  nome: "",
  dataNascimento: "",
  encarregado: "",
  telemovel: "",
  email: "",
  modalidade: "",
  experiencia: "",
  preferencia: "",
  observacoes: "",
  consentimento: false,
}

const inputClassName =
  "h-[50px] lg:h-[54px] w-full rounded-[10px] bg-white px-5 font-amiko text-[16px] lg:text-[17px] text-[#363535] placeholder:text-[#8a8a8a] outline-none transition-shadow focus:ring-2 focus:ring-[#f6e449]"

const noteClassName = "mt-[10px] font-amiko text-white text-[13px] lg:text-[14px] leading-[18px]"

function todayInputValue() {
  const now = new Date()
  const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
  return local.toISOString().slice(0, 10)
}

function calculateAge(date: string) {
  const birth = new Date(`${date}T00:00:00`)
  if (Number.isNaN(birth.getTime())) return null
  const today = new Date()
  let age = today.getFullYear() - birth.getFullYear()
  const monthDiff = today.getMonth() - birth.getMonth()
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age -= 1
  }
  return age
}

function validate(values: FormValues) {
  const errors: FormErrors = {}

  if (!values.nome.trim()) errors.nome = "Indica o teu nome."
  if (!values.dataNascimento) {
    errors.dataNascimento = "Indica a tua data de nascimento."
  } else {
    const age = calculateAge(values.dataNascimento)
    if (age === null || age < 0 || age > 120) {
      errors.dataNascimento = "Introduz uma data de nascimento válida."
    } else if (age < 18 && !values.encarregado.trim()) {
      errors.encarregado = "Indica o nome do encarregado de educação."
    }
  }
  if (!values.telemovel.trim()) errors.telemovel = "Indica o teu telemóvel."
  if (!values.email.trim()) {
    errors.email = "Indica o teu e-mail."
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Introduz um e-mail válido."
  }
  if (!values.modalidade) errors.modalidade = "Escolhe uma modalidade."
  if (!values.experiencia) errors.experiencia = "Indica a tua experiência em dança."
  if (!values.preferencia.trim()) {
    errors.preferencia = "Indica a tua preferência de dias/horários."
  }
  if (!values.consentimento) {
    errors.consentimento = "É necessário aceitar a Política de Privacidade."
  }

  return errors
}

function ErrorMessage({ children }: { children?: string }) {
  if (!children) return null
  return (
    <p className="mt-[8px] font-amiko text-[#ffe0e0] text-[13px] leading-[18px]" role="alert">
      {children}
    </p>
  )
}

export function AulaExperimentalForm() {
  const [values, setValues] = useState<FormValues>(initialValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle")
  const [serverError, setServerError] = useState("")
  const [dateFocused, setDateFocused] = useState(false)
  const [website, setWebsite] = useState("")

  const update = <K extends keyof FormValues>(key: K, value: FormValues[K]) => {
    setValues((current) => ({ ...current, [key]: value }))
    setErrors((current) => ({ ...current, [key]: undefined }))
  }

  const age = values.dataNascimento ? calculateAge(values.dataNascimento) : null
  const isMinor = age !== null && age < 18
  const showDatePlaceholder = !values.dataNascimento && !dateFocused

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setServerError("")

    const validationErrors = validate(values)
    setErrors(validationErrors)

    const firstError = Object.keys(validationErrors)[0]
    if (firstError) {
      document.getElementById(`field-${firstError}`)?.focus()
      return
    }

    setStatus("submitting")
    try {
      const response = await fetch("/api/aula-experimental", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, website }),
      })

      const data = (await response.json().catch(() => null)) as { error?: string } | null
      if (!response.ok) {
        throw new Error(data?.error ?? "Não foi possível enviar o pedido. Tenta novamente.")
      }

      setStatus("success")
      setValues(initialValues)
    } catch (error) {
      setStatus("idle")
      setServerError(
        error instanceof Error
          ? error.message
          : "Não foi possível enviar o pedido. Tenta novamente."
      )
    }
  }

  if (status === "success") {
    return (
      <div className="bg-[#efefef]">
        <div className="mx-auto w-full max-w-[560px] px-[30px] lg:px-8 py-[54px] lg:py-16 flex flex-col items-center text-center">
          <div className="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#67c4a8]">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="m5 12 4.5 4.5L19 7"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h2 className="mt-[24px] font-changa text-[#363535] text-[24px] lg:text-[28px] font-bold">
            {aulaExperimentalConfig.successTitle}
          </h2>
          <p className="mt-[12px] max-w-[340px] font-amiko text-[#363535] text-[16px] lg:text-[17px] leading-[24px]">
            {aulaExperimentalConfig.successMessage}
          </p>
          <Link
            href="/"
            className="mt-[28px] inline-flex h-[45px] lg:h-[50px] w-[200px] items-center justify-center rounded-full bg-[#f6e449] font-changa text-[#363535] text-[17px] font-bold transition-colors hover:bg-[#f2de3b]"
          >
            Voltar ao site
          </Link>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="bg-[#67c4a8]">
        <div className="mx-auto w-full max-w-[560px] px-[30px] lg:px-8">
          <div className="flex flex-col gap-[19px] pb-[34px]">
            <div>
              <label htmlFor="field-nome" className="sr-only">
                Nome
              </label>
              <input
                id="field-nome"
                name="nome"
                type="text"
                autoComplete="name"
                placeholder="Nome"
                value={values.nome}
                onChange={(event) => update("nome", event.target.value)}
                className={inputClassName}
                aria-invalid={Boolean(errors.nome)}
              />
              <ErrorMessage>{errors.nome}</ErrorMessage>
            </div>

            <div>
              <label htmlFor="field-dataNascimento" className="sr-only">
                Data de Nascimento
              </label>
              <div className="relative">
                <input
                  id="field-dataNascimento"
                  name="dataNascimento"
                  type="date"
                  max={todayInputValue()}
                  value={values.dataNascimento}
                  onChange={(event) => update("dataNascimento", event.target.value)}
                  onFocus={() => setDateFocused(true)}
                  onBlur={() => setDateFocused(false)}
                  className={inputClassName}
                  aria-invalid={Boolean(errors.dataNascimento)}
                />
                {showDatePlaceholder && (
                  <span className="pointer-events-none absolute inset-y-0 left-5 flex items-center bg-white pr-4 font-amiko text-[16px] lg:text-[17px] text-[#8a8a8a]">
                    Data de Nascimento
                  </span>
                )}
              </div>
              <ErrorMessage>{errors.dataNascimento}</ErrorMessage>
            </div>

            <div>
              <label htmlFor="field-encarregado" className="sr-only">
                Nome do Encarregado de Educação
              </label>
              <input
                id="field-encarregado"
                name="encarregado"
                type="text"
                autoComplete="name"
                placeholder="Nome do Encarregado de Educação"
                value={values.encarregado}
                onChange={(event) => update("encarregado", event.target.value)}
                className={inputClassName}
                aria-invalid={Boolean(errors.encarregado)}
              />
              <p className={noteClassName}>
                {isMinor
                  ? "*Obrigatório para menores de 18 anos"
                  : aulaExperimentalConfig.guardianNote}
              </p>
              <ErrorMessage>{errors.encarregado}</ErrorMessage>
            </div>

            <div>
              <label htmlFor="field-telemovel" className="sr-only">
                Telemóvel
              </label>
              <input
                id="field-telemovel"
                name="telemovel"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="Telemóvel"
                value={values.telemovel}
                onChange={(event) => update("telemovel", event.target.value)}
                className={inputClassName}
                aria-invalid={Boolean(errors.telemovel)}
              />
              <ErrorMessage>{errors.telemovel}</ErrorMessage>
            </div>

            <div>
              <label htmlFor="field-email" className="sr-only">
                E-mail
              </label>
              <input
                id="field-email"
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="E-mail"
                value={values.email}
                onChange={(event) => update("email", event.target.value)}
                className={inputClassName}
                aria-invalid={Boolean(errors.email)}
              />
              <ErrorMessage>{errors.email}</ErrorMessage>
            </div>
          </div>

          <div className="pb-[30px]">
            <fieldset>
              <legend className="font-amiko text-white text-[16px] lg:text-[18px] font-bold leading-[22px] lg:leading-[24px]">
                {aulaExperimentalConfig.modalityQuestion}
              </legend>
              <div className="mt-[18px] flex flex-col gap-[14px]">
                {aulaExperimentalConfig.modalities.map((modality, index) => (
                  <label key={modality} className="flex cursor-pointer items-center gap-[15px]">
                    <input
                      id={index === 0 ? "field-modalidade" : undefined}
                      type="radio"
                      name="modalidade"
                      value={modality}
                      checked={values.modalidade === modality}
                      onChange={() => update("modalidade", modality)}
                      className="peer sr-only"
                    />
                    <span
                      aria-hidden="true"
                      className="h-[21px] w-[21px] shrink-0 rounded-full border-[2.5px] border-white bg-transparent transition-all peer-checked:border-[6px] peer-checked:bg-[#f6e449] peer-focus-visible:ring-2 peer-focus-visible:ring-[#f6e449] peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-[#67c4a8]"
                    />
                    <span className="font-amiko text-white text-[17px] lg:text-[18px] leading-[22px]">
                      {modality}
                    </span>
                  </label>
                ))}
              </div>
              <ErrorMessage>{errors.modalidade}</ErrorMessage>
            </fieldset>
          </div>

          <div className="pb-[34px]">
            <fieldset>
              <legend className="font-amiko text-white text-[16px] lg:text-[18px] font-bold leading-[22px] lg:leading-[24px]">
                {aulaExperimentalConfig.experienceQuestion}
              </legend>
              <div className="mt-[18px] flex flex-col gap-[14px]">
                {aulaExperimentalConfig.experienceOptions.map((option, index) => (
                  <label key={option} className="flex cursor-pointer items-center gap-[15px]">
                    <input
                      id={index === 0 ? "field-experiencia" : undefined}
                      type="radio"
                      name="experiencia"
                      value={option}
                      checked={values.experiencia === option}
                      onChange={() => update("experiencia", option)}
                      className="peer sr-only"
                    />
                    <span
                      aria-hidden="true"
                      className="h-[21px] w-[21px] shrink-0 rounded-full border-[2.5px] border-white bg-transparent transition-all peer-checked:border-[6px] peer-checked:bg-[#f6e449] peer-focus-visible:ring-2 peer-focus-visible:ring-[#f6e449] peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-[#67c4a8]"
                    />
                    <span className="font-amiko text-white text-[17px] lg:text-[18px] leading-[22px]">
                      {option}
                    </span>
                  </label>
                ))}
              </div>
              <ErrorMessage>{errors.experiencia}</ErrorMessage>
            </fieldset>
          </div>

          <div className="flex flex-col gap-[22px] pb-[40px]">
            <div>
              <label htmlFor="field-preferencia" className="sr-only">
                Preferência de dias/horários
              </label>
              <input
                id="field-preferencia"
                name="preferencia"
                type="text"
                placeholder="Preferência de dias/horários"
                value={values.preferencia}
                onChange={(event) => update("preferencia", event.target.value)}
                className={inputClassName}
                aria-invalid={Boolean(errors.preferencia)}
              />
              <p className={noteClassName}>{aulaExperimentalConfig.preferenceNote}</p>
              <ErrorMessage>{errors.preferencia}</ErrorMessage>
            </div>

            <div>
              <label htmlFor="field-observacoes" className="sr-only">
                Observações
              </label>
              <textarea
                id="field-observacoes"
                name="observacoes"
                rows={4}
                maxLength={300}
                placeholder="Observações"
                value={values.observacoes}
                onChange={(event) => update("observacoes", event.target.value)}
                aria-describedby="observacoes-note observacoes-counter"
                className="min-h-[104px] w-full resize-y rounded-[10px] bg-white px-5 py-4 font-amiko text-[16px] lg:text-[17px] leading-[22px] text-[#363535] placeholder:text-[#8a8a8a] outline-none transition-shadow focus:ring-2 focus:ring-[#f6e449]"
              />
              <div className="mt-[10px] flex items-end justify-between gap-4">
                <p id="observacoes-note" className="font-amiko text-white text-[13px] lg:text-[14px] leading-[18px]">
                  {aulaExperimentalConfig.observationsNote}
                </p>
                <span
                  id="observacoes-counter"
                  className="shrink-0 whitespace-nowrap font-amiko text-white/70 text-[12px] leading-[16px]"
                >
                  {values.observacoes.length}/300
                </span>
              </div>
            </div>
          </div>

          <input
            type="text"
            name="website"
            value={website}
            onChange={(event) => setWebsite(event.target.value)}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="pointer-events-none absolute left-[-9999px] h-0 w-0 opacity-0"
          />
        </div>
      </div>

      <div className="bg-[#efefef]">
        <div className="mx-auto w-full max-w-[560px] px-[30px] lg:px-8">
          <div className="flex flex-col items-center py-[32px] lg:py-10">
            <div className="w-[290px] lg:w-[320px]">
              <label className="flex cursor-pointer items-start gap-[14px]">
                <input
                  id="field-consentimento"
                  type="checkbox"
                  name="consentimento"
                  checked={values.consentimento}
                  onChange={(event) => update("consentimento", event.target.checked)}
                  className="peer sr-only"
                />
                <span
                  aria-hidden="true"
                  className={`mt-[1px] flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full border-2 transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-[#67c4a8] peer-focus-visible:ring-offset-2 ${
                    values.consentimento
                      ? "border-[#363535] bg-[#363535]"
                      : "border-[#6b6b6b] bg-transparent"
                  }`}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    className={values.consentimento ? "opacity-100" : "opacity-0"}
                  >
                    <path
                      d="m5 12 4.5 4.5L19 7"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="font-amiko text-[#363535] text-[14px] lg:text-[15px] leading-[20px]">
                  {aulaExperimentalConfig.consent} *
                </span>
              </label>
              {errors.consentimento && (
                <p className="mt-[8px] pl-[36px] font-amiko text-[#b00020] text-[13px] leading-[18px]" role="alert">
                  {errors.consentimento}
                </p>
              )}
            </div>

            {serverError && (
              <p
                className="mt-[18px] max-w-[290px] text-center font-amiko text-[#b00020] text-[14px] leading-[20px]"
                role="alert"
              >
                {serverError}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-[28px] h-[50px] lg:h-[56px] w-[266px] lg:w-[300px] rounded-full bg-[#f6e449] font-changa text-[#363535] text-[20px] lg:text-[22px] font-bold transition-colors hover:bg-[#f2de3b] disabled:cursor-wait disabled:opacity-70"
            >
              {status === "submitting"
                ? aulaExperimentalConfig.submitting
                : aulaExperimentalConfig.submit}
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}
