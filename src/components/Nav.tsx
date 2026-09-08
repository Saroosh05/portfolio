import { useEffect, useState } from "react"
import { nav, profile } from "../data/content"
import { cn } from "../lib/cn"

export function Nav({ onOpenCommand }: { onOpenCommand: () => void }) {
  const [active, setActive] = useState("top")
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const ids = ["top", ...nav.map((n) => n.id)]
      const marker = window.scrollY + 140
      let current = "top"
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        const top = el.getBoundingClientRect().top + window.scrollY
        if (top <= marker) current = id
      }
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 90
      if (atBottom) current = "contact"
      setActive(current)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="fixed top-0 right-0 left-0 z-50 pt-4">
      <div className="wrap">
        <div className="chroma-glass flex items-center justify-between gap-3 rounded-full px-3 py-1.5 md:px-4">
          <a
            href="#top"
            className="relative z-10 px-1.5 font-mono text-[12px] tracking-[0.28em] text-ink/90"
          >
            {profile.monogram}
          </a>
          <nav className="relative z-10 hidden items-center gap-0.5 lg:flex">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  "rounded-full px-3 py-1.5 text-[13px] leading-none transition-colors duration-150",
                  active === item.id
                    ? "bg-white/14 text-ink"
                    : "text-mute hover:text-ink",
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="relative z-10 flex items-center gap-1.5">
            <button
              type="button"
              onClick={onOpenCommand}
              className="hidden rounded-full px-2.5 py-1.5 font-mono text-[10px] tracking-wide text-mute hover:text-ink md:inline"
            >
              ⌘K
            </button>
            <a href="#contact" className="btn-glow relative z-10 rounded-full px-4 py-2 text-[13px] leading-none">
              <span className="md:hidden">Talk</span>
              <span className="hidden md:inline">Start a project</span>
            </a>
            <button
              type="button"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-sm lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
            >
              {open ? "×" : "☰"}
            </button>
          </div>
        </div>
        {open && (
          <div className="chroma-glass mt-2 rounded-3xl p-2 lg:hidden">
            <div className="relative z-10 grid">
              {nav.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-2.5 text-sm"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
