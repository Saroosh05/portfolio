import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"
import { marquee, skillGroups } from "../data/content"
import { cn } from "../lib/cn"
import { FadeIn, SectionHeader } from "./Section"

export function Skills() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [dir, setDir] = useState(1)
  const group = skillGroups[index]

  const go = (delta: number) => {
    setDir(delta >= 0 ? 1 : -1)
    setIndex((n) => (n + delta + skillGroups.length) % skillGroups.length)
  }

  useEffect(() => {
    if (paused) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const id = window.setInterval(() => {
      setDir(1)
      setIndex((n) => (n + 1) % skillGroups.length)
    }, 4800)
    return () => window.clearInterval(id)
  }, [paused, index])

  const loop = [...marquee, ...marquee]

  return (
    <section id="skills" className="section-pad relative z-10">
      <div className="wrap">
        <FadeIn>
          <SectionHeader
            kicker="05 · Skills"
            title="The stack behind the work"
            intro="Languages, frameworks, and AI tools I use to ship."
          />
        </FadeIn>

        <div className="mt-8 overflow-hidden border-y border-white/10 py-3">
          <div className="marquee-track">
            {loop.map((item, i) => (
              <span key={`${item}-${i}`} className="font-mono px-5 text-[11px] tracking-[0.18em] text-mute uppercase">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div
          className="mt-8"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="flex w-full flex-wrap gap-2">
            {skillGroups.map((g, i) => (
              <button
                key={g.id}
                type="button"
                onClick={() => {
                  setDir(i > index ? 1 : -1)
                  setIndex(i)
                }}
                className={cn(
                  "flex min-h-[2.85rem] min-w-0 flex-1 items-center justify-center rounded-full px-2 py-2 text-center text-[11px] leading-tight tracking-wide transition-colors duration-150 sm:text-[12px]",
                  i === index
                    ? "bg-white text-[#07070f]"
                    : "border border-white/14 text-ink/80 hover:border-white/35",
                )}
              >
                {g.title}
              </button>
            ))}
          </div>

          <div className="chroma-glass relative mt-5 overflow-hidden rounded-[1.6rem]">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-linear-to-b from-cyan-200/10 to-transparent" />
            <div className="relative p-6 md:p-8">
              <div className="mb-7 flex items-end justify-between gap-4">
                <div>
                  <p className="font-mono text-[11px] tracking-wide text-cobalt">
                    {String(index + 1).padStart(2, "0")} / {String(skillGroups.length).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-[1.55rem] font-semibold tracking-tight">{group.title}</h3>
                  <p className="mt-1 text-sm text-mute">
                    {group.items.length} in this group
                  </p>
                </div>
                <div className="flex shrink-0 gap-2">
                  <button
                    type="button"
                    aria-label="Previous skill family"
                    onClick={() => go(-1)}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/16 text-ink/80 transition hover:bg-white/8"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    type="button"
                    aria-label="Next skill family"
                    onClick={() => go(1)}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/16 text-ink/80 transition hover:bg-white/8"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              <div className="relative overflow-hidden">
                <AnimatePresence mode="wait" custom={dir}>
                  <motion.ul
                    key={group.id}
                    custom={dir}
                    initial={{ opacity: 0, x: dir * 36 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: dir * -28 }}
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
                  >
                    {group.items.map((item, n) => (
                      <li key={item} className="skill-tile">
                        <span className="font-mono text-[10px] tracking-wide text-cobalt">
                          {String(n + 1).padStart(2, "0")}
                        </span>
                        <p className="mt-2 text-[0.98rem] leading-snug font-medium tracking-tight">{item}</p>
                      </li>
                    ))}
                  </motion.ul>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
