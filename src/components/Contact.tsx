import { useState, type FormEvent } from "react"
import { inquiryTypes, profile } from "../data/content"
import { FadeIn, SectionHeader } from "./Section"

const steps = [
  { no: "01", title: "Tell me the brief", copy: "What you need, who it is for, and when you need it." },
  { no: "02", title: "We agree the work", copy: "Scope, timeline, and what done looks like, agreed before coding starts." },
  { no: "03", title: "I build, you review", copy: "You get a working product you can run and review." },
]

type Status = "idle" | "sending" | "sent" | "confirm" | "error"

export function Contact() {
  const [status, setStatus] = useState<Status>("idle")

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    if (String(data.get("company") || "")) return

    const name = String(data.get("name") || "").trim()
    const email = String(data.get("email") || "").trim()
    const project = String(data.get("project") || "").trim()
    const message = String(data.get("message") || "").trim()
    setStatus("sending")

    const payload = new FormData()
    payload.append("name", name)
    payload.append("email", email)
    payload.append("project", project)
    payload.append("message", message)
    payload.append("_subject", `Project inquiry: ${project} (${name})`)
    payload.append("_template", "table")
    payload.append("_captcha", "false")
    payload.append("_replyto", email)

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: payload,
      })
      const json = (await res.json()) as { success?: string | boolean; message?: string }
      const ok = json.success === "true" || json.success === true
      const note = (json.message || "").toLowerCase()
      const needsConfirm =
        note.includes("confirm") || note.includes("activate") || note.includes("inbox")

      if (ok) {
        setStatus("sent")
        form.reset()
        return
      }
      setStatus(needsConfirm ? "confirm" : "error")
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="section-pad relative z-10 pb-24">
      <div className="wrap">
        <FadeIn>
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-12">
            <div>
              <SectionHeader kicker="07 · Contact" title="Let’s talk about your project." />
              <p className="prose-body mt-5">
                Messages go to {profile.email}. Tell me if you need a website, an Android app, an AI tool, or a business system, and I will reply with next steps.
              </p>

              <ol className="mt-8 space-y-4">
                {steps.map((step) => (
                  <li key={step.no} className="grid grid-cols-[2.4rem_1fr] gap-3">
                    <p className="font-mono pt-0.5 text-[11px] tracking-wide text-cobalt">{step.no}</p>
                    <div>
                      <p className="text-[0.98rem] font-semibold tracking-tight">{step.title}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-mute">{step.copy}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <a href={`mailto:${profile.email}`} className="skill-tile block no-underline">
                  <p className="font-mono text-[10px] tracking-wide text-cobalt uppercase">Email</p>
                  <p className="mt-2 text-[0.95rem] leading-snug font-medium tracking-tight">{profile.email}</p>
                </a>
                <a href={profile.phoneHref} className="skill-tile block no-underline">
                  <p className="font-mono text-[10px] tracking-wide text-cobalt uppercase">Phone</p>
                  <p className="mt-2 text-[0.95rem] leading-snug font-medium tracking-tight">{profile.phone}</p>
                </a>
              </div>
              <p className="mt-5 text-sm text-mute">
                {profile.location}, {profile.availability}
              </p>
            </div>

            <form onSubmit={onSubmit} className="chroma-glass overflow-hidden rounded-[1.7rem]">
              <div className="relative overflow-hidden px-6 pt-6 pb-5 md:px-8">
                <div className="absolute inset-0 bg-linear-to-br from-cyan-200/18 via-violet-400/10 to-transparent" />
                <p className="relative kicker">Project inquiry</p>
                <p className="relative mt-2 text-[1.2rem] font-semibold tracking-tight">Send a brief</p>
              </div>
              <div className="grid gap-5 p-6 md:grid-cols-2 md:p-8 md:pt-6">
                <input
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />

                <label className="font-mono text-[10px] tracking-widest text-mute uppercase">
                  Name
                  <input required name="name" autoComplete="name" placeholder="Your name" className="field" />
                </label>
                <label className="font-mono text-[10px] tracking-widest text-mute uppercase">
                  Email
                  <input
                    required
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    className="field"
                  />
                </label>
                <label className="font-mono text-[10px] tracking-widest text-mute uppercase md:col-span-2">
                  Project type
                  <select required name="project" defaultValue="" className="field">
                    <option value="" disabled>
                      What do you need?
                    </option>
                    {inquiryTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="font-mono text-[10px] tracking-widest text-mute uppercase md:col-span-2">
                  Brief
                  <textarea
                    required
                    name="message"
                    rows={5}
                    placeholder="What should it do, who is it for, and when you need it?"
                    className="field resize-none"
                  />
                </label>
                {status === "confirm" ? (
                  <p className="text-sm text-mute md:col-span-2">
                    Check {profile.email} for a FormSubmit email, click Activate Form, then send again.
                  </p>
                ) : null}
                {status === "error" ? (
                  <p className="text-sm text-mute md:col-span-2">
                    The form could not send. Email me at{" "}
                    <a href={`mailto:${profile.email}`} className="text-cobalt underline-offset-2 hover:underline">
                      {profile.email}
                    </a>
                    .
                  </p>
                ) : null}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-glow w-full rounded-full px-6 py-3 text-sm disabled:opacity-70 md:col-span-2"
                >
                  {status === "sending"
                    ? "Sending…"
                    : status === "sent"
                      ? "Message sent"
                      : "Send project inquiry"}
                </button>
              </div>
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
