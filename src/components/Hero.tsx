import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import { profile, stats } from "../data/content"

const lanes = [
  {
    id: "web",
    title: "Web products",
    copy: "Sites and apps in React, Next.js, or .NET, from the database through to launch.",
  },
  {
    id: "android",
    title: "Native Android",
    copy: "Kotlin apps with accounts, groups, calendars, and reminders that fire on time.",
  },
  {
    id: "ai",
    title: "Applied AI",
    copy: "Chat, search, and computer vision judged by results you can measure.",
  },
]

function LahoreClock() {
  const [time, setTime] = useState("")

  useEffect(() => {
    const tick = () => {
      setTime(
        new Intl.DateTimeFormat("en-PK", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone: "Asia/Karachi",
        }).format(new Date()),
      )
    }
    tick()
    const id = window.setInterval(tick, 30000)
    return () => window.clearInterval(id)
  }, [])

  return <span>{time || "--:--"}</span>
}

export function Hero() {
  const [lane, setLane] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const id = window.setInterval(() => {
      setLane((n) => (n + 1) % lanes.length)
    }, 4200)
    return () => window.clearInterval(id)
  }, [paused])

  const current = lanes[lane]

  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-x-clip pt-24 pb-16">
      <div className="wrap grid w-full items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:gap-16">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[13px] text-mute"
          >
            {profile.availability}
          </motion.p>

          <p className="kicker mt-7">Full-stack, Android, Applied AI</p>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-display mt-3 text-[clamp(2.5rem,6vw,4.4rem)] leading-[0.94] font-extrabold tracking-tight uppercase"
          >
            <span className="holo-text">{profile.firstName}</span>
            <span className="outline-type mt-1 block">{profile.lastName}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.12 }}
            className="prose-body mt-6"
          >
            {profile.headline}
          </motion.p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#contact" className="btn-glow rounded-full px-5 py-2.5 text-sm">
              Start a project
            </a>
            <a
              href="#work"
              className="rounded-full border border-white/16 px-5 py-2.5 text-sm text-ink/90 transition hover:bg-white/8"
            >
              View work
            </a>
            <a
              href={profile.cv}
              download={profile.cvFileName}
              className="px-2 py-2.5 text-sm text-mute transition hover:text-ink"
            >
              Download CV
            </a>
          </div>
        </div>

        <motion.aside
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="chroma-glass w-full overflow-hidden rounded-[1.5rem]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="flex min-h-[292px] flex-col p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="kicker">Now</p>
                <p className="mt-2 text-sm text-mute">{profile.location}</p>
              </div>
              <p className="font-mono text-[11px] tracking-wide text-cobalt">
                <LahoreClock /> PKT
              </p>
            </div>

            <div className="relative mt-10 min-h-[7.5rem] flex-1 overflow-hidden">
              <p className="font-mono text-[10px] tracking-widest text-mute uppercase">I build</p>
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-x-0 top-7"
                >
                  <p className="text-[1.35rem] leading-snug font-semibold tracking-tight">{current.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-mute">{current.copy}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-6 flex items-center gap-2">
              {lanes.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  aria-label={item.title}
                  onClick={() => setLane(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === lane ? "w-7 bg-cobalt" : "w-1.5 bg-white/25 hover:bg-white/45"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.aside>

        <div className="chroma-glass grid grid-cols-2 overflow-hidden rounded-3xl lg:col-span-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="px-6 py-5 shadow-[inset_-1px_0_0_rgba(255,255,255,0.08),inset_0_-1px_0_rgba(255,255,255,0.08)]"
            >
              <p className="font-display text-[1.7rem] leading-none font-bold tracking-tight">{s.value}</p>
              <p className="mt-2 text-[13px] text-mute">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
