import { Resend } from "resend"

type AulaExperimentalPayload = {
  nome?: unknown
  dataNascimento?: unknown
  encarregado?: unknown
  telemovel?: unknown
  email?: unknown
  modalidade?: unknown
  experiencia?: unknown
  preferencia?: unknown
  observacoes?: unknown
  consentimento?: unknown
  website?: unknown
}

const MAX_LENGTH = 500

function clean(value: unknown, maxLength = MAX_LENGTH) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : ""
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
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

function errorResponse(message: string, status = 400) {
  return Response.json({ error: message }, { status })
}

export async function POST(request: Request) {
  let payload: AulaExperimentalPayload

  try {
    payload = (await request.json()) as AulaExperimentalPayload
  } catch {
    return errorResponse("Não foi possível ler os dados do formulário.")
  }

  // Honeypot field: silently accept requests filled by bots.
  if (clean(payload.website)) {
    return Response.json({ ok: true })
  }

  const nome = clean(payload.nome, 150)
  const dataNascimento = clean(payload.dataNascimento, 10)
  const encarregado = clean(payload.encarregado, 150)
  const telemovel = clean(payload.telemovel, 40)
  const email = clean(payload.email, 254)
  const modalidade = clean(payload.modalidade, 100)
  const experiencia = clean(payload.experiencia, 100)
  const preferencia = clean(payload.preferencia, MAX_LENGTH)
  const observacoes = clean(payload.observacoes, 300)
  const consentimento = payload.consentimento === true

  if (!nome) return errorResponse("Indica o teu nome.")
  if (!dataNascimento) return errorResponse("Indica a tua data de nascimento.")

  const age = calculateAge(dataNascimento)
  if (age === null || age < 0 || age > 120) {
    return errorResponse("Introduz uma data de nascimento válida.")
  }
  if (age < 18 && !encarregado) {
    return errorResponse("Indica o nome do encarregado de educação.")
  }
  if (!telemovel) return errorResponse("Indica o teu telemóvel.")
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return errorResponse("Introduz um e-mail válido.")
  }
  if (!modalidade) return errorResponse("Escolhe uma modalidade.")
  if (!experiencia) return errorResponse("Indica a tua experiência em dança.")
  if (!preferencia) return errorResponse("Indica a tua preferência de dias/horários.")
  if (!consentimento) {
    return errorResponse("É necessário aceitar a Política de Privacidade.")
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error("Missing RESEND_API_KEY environment variable.")
    return errorResponse("O envio do formulário ainda não está configurado.", 500)
  }

  const to = process.env.AULA_EXPERIMENTAL_TO_EMAIL ?? "geral@balletvita.pt"
  const from =
    process.env.AULA_EXPERIMENTAL_FROM_EMAIL ?? "Balletvita <onboarding@resend.dev>"

  const submittedAt = new Intl.DateTimeFormat("pt-PT", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "Europe/Lisbon",
  }).format(new Date())

  const rows: { label: string; value: string }[] = [
    { label: "Nome", value: nome },
    { label: "Data de nascimento", value: dataNascimento },
    { label: "Encarregado de educação", value: encarregado || "—" },
    { label: "Telemóvel", value: telemovel },
    { label: "E-mail", value: email },
    { label: "Modalidade", value: modalidade },
    { label: "Experiência em dança", value: experiencia },
    { label: "Preferência de dias/horários", value: preferencia },
    { label: "Observações", value: observacoes || "—" },
  ]

  const htmlRows = rows
    .map(
      (row) =>
        `<tr><td style="padding:10px 14px;border-bottom:1px solid #efefef;font-family:Arial,sans-serif;font-size:14px;color:#6b6b6b;vertical-align:top;width:38%">${escapeHtml(
          row.label
        )}</td><td style="padding:10px 14px;border-bottom:1px solid #efefef;font-family:Arial,sans-serif;font-size:14px;color:#363535;vertical-align:top">${escapeHtml(
          row.value
        )}</td></tr>`
    )
    .join("")

  const text = rows.map((row) => `${row.label}: ${row.value}`).join("\n")

  const html = `<div style="background:#efefef;padding:24px">
  <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden">
    <div style="background:#67c4a8;padding:22px 24px">
      <h1 style="margin:0;font-family:Arial,sans-serif;font-size:20px;color:#ffffff">Nova marcação de aula experimental</h1>
    </div>
    <div style="padding:8px 10px 20px">
      <table style="width:100%;border-collapse:collapse">${htmlRows}</table>
      <p style="margin:18px 14px 0;font-family:Arial,sans-serif;font-size:12px;color:#8a8a8a">Recebido a ${escapeHtml(
        submittedAt
      )} através do formulário do site.</p>
    </div>
  </div>
</div>`

  try {
    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Nova aula experimental — ${nome}`,
      html,
      text: `Nova marcação de aula experimental\n\n${text}\n\nRecebido a ${submittedAt}`,
    })

    if (error) {
      console.error("Resend error:", error)
      return errorResponse("Não foi possível enviar o pedido. Tenta novamente.", 502)
    }

    return Response.json({ ok: true })
  } catch (error) {
    console.error("Unexpected error sending aula experimental form:", error)
    return errorResponse("Não foi possível enviar o pedido. Tenta novamente.", 500)
  }
}
