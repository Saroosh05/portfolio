import { AnimatePresence, motion } from "framer-motion"
import { ArrowUpRight, Download, X } from "lucide-react"
import { useEffect, useMemo, useRef, useState, type MouseEvent } from "react"
import { createPortal } from "react-dom"
import {
  projectFilters,
  projects,
  type ProjectCategory,
} from "../data/content"
import { cn } from "../lib/cn"
import { FadeIn, SectionHeader } from "./Section"

type Project = (typeof projects)[number]

function shine(e: MouseEvent<HTMLButtonElement>) {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`)
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`)
}

export function Work() {
  const [filter, setFilter] = useState<ProjectCategory>("All")
  const [active, setActive] = useState<Project | null>(null)
  const rail = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = rail.current
    if (!el) return
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return
      const max = el.scrollWidth - el.clientWidth
      const atEnd = e.deltaY > 0 && el.scrollLeft >= max - 1
      const atStart = e.deltaY < 0 && el.scrollLeft <= 1
      if (atEnd || atStart) return
      el.scrollLeft += e.deltaY
      e.preventDefault()
    }
    el.addEventListener("wheel", onWheel, { passive: false })
    return () => el.removeEventListener("wheel", onWheel)
  }, [])

  useEffect(() => {
    if (!active) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null)
    }
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener("keydown", onKey)
    }
  }, [active])

  const list = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.category.includes(filter)),
    [filter],
  )

  return (
    <section id="work" className="section-pad relative z-10 overflow-visible">
      <div className="wrap">
        <FadeIn>
          <SectionHeader
            kicker="02 · Work"
            title="Selected work"
            intro="Ten projects across web, Android, and AI. Scroll across, then open a card for the stack and what it does."
          />
        </FadeIn>

        <div className="mt-7 flex flex-wrap gap-2">
          {projectFilters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-full px-3.5 py-1.5 text-[12px] tracking-wide transition-colors duration-150",
                filter === f
                  ? "bg-white text-[#07070f]"
                  : "border border-white/14 text-ink/80 hover:border-white/35",
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div ref={rail} className="cinema mt-2">
          {list.map((p, i) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setActive(p)}
              onMouseMove={shine}
              className="neon-card flex min-h-[252px] flex-col rounded-[1.4rem] p-5 text-left"
            >
              <div className="relative z-10 flex items-center justify-between gap-3">
                <p className="font-mono text-[10px] tracking-[0.14em] text-cobalt uppercase">
                  {p.kind}
                </p>
                <p className="font-mono text-[10px] text-mute/80">
                  {String(i + 1).padStart(2, "0")}
                </p>
              </div>
              <h3 className="relative z-10 mt-5 text-[1.18rem] leading-snug font-semibold tracking-tight">
                {p.title}
              </h3>
              <p className="relative z-10 mt-1 text-[13px] text-mute">{p.subtitle}</p>
              <p className="relative z-10 mt-4 line-clamp-3 text-[13.5px] leading-relaxed text-ink/75">
                {p.summary}
              </p>
              <span className="relative z-10 mt-auto inline-flex items-center gap-1.5 pt-5 text-[13px] text-cobalt">
                Details <ArrowUpRight size={14} />
              </span>
            </button>
          ))}
        </div>
      </div>

      {createPortal(
        <AnimatePresence>
          {active && (
            <motion.div
              className="fixed inset-0 z-[80] bg-black/62 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActive(null)}
            >
              <motion.aside
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                className="chroma-glass absolute top-0 right-0 flex h-full w-full max-w-[32rem] flex-col overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative shrink-0 overflow-hidden px-8 pt-8 pb-7">
                  <div className="absolute inset-0 bg-linear-to-br from-cyan-200/22 via-violet-400/14 to-transparent" />
                  <div className="absolute -top-10 -right-8 h-36 w-36 rounded-full bg-cyan-300/15 blur-3xl" />
                  <button
                    type="button"
                    onClick={() => setActive(null)}
                    className="absolute top-6 right-5 z-20 grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-black/30 backdrop-blur-sm"
                    aria-label="Close"
                  >
                    <X size={15} />
                  </button>
                  <div className="relative flex items-center justify-between gap-4 pr-12">
                    <p className="font-mono text-[10px] tracking-[0.18em] text-cobalt uppercase">{active.kind}</p>
                    <p className="font-mono text-[10px] tracking-wide text-mute">
                      {String(projects.findIndex((p) => p.id === active.id) + 1).padStart(2, "0")} /{" "}
                      {String(projects.length).padStart(2, "0")}
                    </p>
                  </div>
                  <h3 className="relative mt-5 text-[2rem] leading-tight font-semibold tracking-tight">
                    {active.title}
                  </h3>
                  <p className="relative mt-2 text-[1.02rem] text-mute">{active.subtitle}</p>
                </div>

                <div className="flex-1 overflow-auto px-8 pt-2 pb-10">
                  <p className="text-[1rem] leading-relaxed text-ink/85">{active.summary}</p>

                  <p className="kicker mt-8">What it does</p>
                  <ol className="mt-4 space-y-3">
                    {active.details.map((d, i) => (
                      <li key={d} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3.5">
                        <span className="font-mono mt-0.5 shrink-0 text-[10px] tracking-wide text-cobalt">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-sm leading-relaxed text-ink/82">{d}</span>
                      </li>
                    ))}
                  </ol>

                  <p className="kicker mt-8">Stack</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {active.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-white/12 bg-white/[0.05] px-3 py-1.5 font-mono text-[11px] text-ink/85"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {active.downloadHref ? (
                    <a
                      href={active.downloadHref}
                      download={active.downloadName}
                      className="btn-glow mt-9 inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-sm"
                    >
                      <Download size={15} />
                      {active.downloadLabel ?? "Download the app"}
                    </a>
                  ) : null}
                  {active.href ? (
                    <a
                      href={active.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`${
                        active.downloadHref
                          ? "mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/16 px-4 py-3 text-sm text-ink/90 transition hover:bg-white/8"
                          : "btn-glow mt-9 inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-sm"
                      }`}
                    >
                      {active.cta ?? "View the project"} <ArrowUpRight size={15} />
                    </a>
                  ) : !active.downloadHref && active.cta ? (
                    <p className="mt-9 inline-flex w-full items-center justify-center rounded-full border border-white/16 px-4 py-3 text-sm text-mute">
                      {active.cta}
                    </p>
                  ) : null}
                  <a
                    href="#contact"
                    onClick={() => setActive(null)}
                    className={`${
                      active.downloadHref || active.href || active.cta ? "mt-3" : "mt-9"
                    } inline-flex w-full items-center justify-center rounded-full border border-white/16 px-4 py-3 text-sm text-ink/90 transition hover:bg-white/8`}
                  >
                    Start a similar project
                  </a>
                </div>
              </motion.aside>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </section>
  )
}
