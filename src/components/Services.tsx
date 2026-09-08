import { useState } from "react"
import { services } from "../data/content"
import { cn } from "../lib/cn"
import { FadeIn, SectionHeader } from "./Section"

export function Services() {
  const [open, setOpen] = useState(services[0].id)

  return (
    <section id="services" className="section-pad relative z-10">
      <div className="wrap">
        <FadeIn>
          <SectionHeader
            kicker="Practice"
            title="What you can hire me for"
            intro="Web, Android, AI, and the systems underneath."
          />
        </FadeIn>
        <div className="mt-8 border-y border-white/10">
          {services.map((s) => {
            const isOpen = open === s.id
            return (
              <article key={s.id} className="border-b border-white/10 last:border-b-0">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? "" : s.id)}
                  className="flex w-full items-center gap-4 py-4 text-left"
                >
                  <span className="font-mono w-8 shrink-0 text-xs text-cobalt">{s.tag}</span>
                  <span className="flex-1 text-[1.05rem] font-semibold tracking-tight md:text-[1.15rem]">
                    {s.title}
                  </span>
                  <span className="font-mono w-4 text-center text-mute">{isOpen ? "–" : "+"}</span>
                </button>
                <div
                  className={cn(
                    "grid overflow-hidden transition-[grid-template-rows] duration-300",
                    isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="min-h-0 pl-12">
                    <p className="prose-body mt-0 text-[0.95rem]">{s.copy}</p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {s.points.map((p) => (
                        <li
                          key={p}
                          className="rounded-full border border-white/12 bg-white/5 px-3 py-1 text-[12px]"
                        >
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
