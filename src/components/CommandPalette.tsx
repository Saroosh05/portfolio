import { AnimatePresence, motion } from "framer-motion"
import { Search } from "lucide-react"
import { useEffect, useMemo, useState } from "react"
import { nav, profile, projects } from "../data/content"
import { cn } from "../lib/cn"

type Item = {
  href: string
  label: string
  hint: string
  group: "Jump" | "Work" | "Links"
  download?: string
}

export function CommandPalette({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const [q, setQ] = useState("")
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (!open) {
      setQ("")
      setActive(0)
      return
    }
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  const items = useMemo(() => {
    const query = q.trim().toLowerCase()
    const all: Item[] = [
      ...nav.map((n) => ({
        href: `#${n.id}`,
        label: n.label,
        hint: n.no,
        group: "Jump" as const,
      })),
      ...projects.map((p) => ({
        href: "#work",
        label: p.title,
        hint: p.kind,
        group: "Work" as const,
      })),
      { href: "#contact", label: "Start a project", hint: "07", group: "Jump" as const },
      { href: profile.github, label: "GitHub", hint: "External", group: "Links" },
      { href: profile.linkedin, label: "LinkedIn", hint: "External", group: "Links" },
      { href: `mailto:${profile.email}`, label: "Email", hint: "Mail", group: "Links" },
      { href: profile.cv, label: "Download CV", hint: "PDF", group: "Links", download: profile.cvFileName },
    ]
    return all.filter(
      (item) =>
        !query ||
        item.label.toLowerCase().includes(query) ||
        item.hint.toLowerCase().includes(query) ||
        item.group.toLowerCase().includes(query),
    )
  }, [q])

  useEffect(() => {
    setActive(0)
  }, [q])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault()
        onClose()
        return
      }
      if (e.key === "ArrowDown") {
        e.preventDefault()
        setActive((n) => Math.min(n + 1, Math.max(items.length - 1, 0)))
      }
      if (e.key === "ArrowUp") {
        e.preventDefault()
        setActive((n) => Math.max(n - 1, 0))
      }
      if (e.key === "Enter" && items[active]) {
        e.preventDefault()
        window.location.href = items[active].href
        onClose()
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, onClose, items, active])

  const groups = ["Jump", "Work", "Links"] as const

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] grid place-items-center bg-black/62 px-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 16, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 10, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="chroma-glass w-full max-w-xl overflow-hidden rounded-[1.6rem]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex items-center gap-3 border-b border-white/10 px-5 py-4">
              <Search size={16} className="shrink-0 text-cobalt" />
              <input
                autoFocus
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search a section, project, or link…"
                className="w-full bg-transparent text-[15px] outline-none"
              />
              <kbd className="font-mono hidden rounded-md border border-white/14 px-1.5 py-0.5 text-[10px] text-mute sm:inline">
                ESC
              </kbd>
            </div>

            <div className="max-h-[52vh] overflow-auto py-2">
              {items.length === 0 ? (
                <p className="px-5 py-8 text-center text-sm text-mute">Nothing matches that search.</p>
              ) : (
                groups.map((group) => {
                  const rows = items.filter((item) => item.group === group)
                  if (!rows.length) return null
                  return (
                    <div key={group} className="px-2 pb-2">
                      <p className="font-mono px-3 pt-3 pb-1.5 text-[10px] tracking-[0.16em] text-cobalt uppercase">
                        {group}
                      </p>
                      {rows.map((item) => {
                        const i = items.indexOf(item)
                        return (
                          <a
                            key={`${item.href}-${item.label}`}
                            href={item.href}
                            download={item.download}
                            onClick={onClose}
                            onMouseEnter={() => setActive(i)}
                            className={cn(
                              "flex items-center justify-between rounded-xl px-3 py-2.5 text-sm transition-colors",
                              i === active ? "bg-white/12 text-ink" : "text-ink/85 hover:bg-white/8",
                            )}
                          >
                            <span className="font-medium tracking-tight">{item.label}</span>
                            <span className="font-mono text-[10px] text-mute uppercase">{item.hint}</span>
                          </a>
                        )
                      })}
                    </div>
                  )
                })
              )}
            </div>

            <div className="flex items-center justify-between gap-3 border-t border-white/10 px-5 py-3 text-[11px] text-mute">
              <p>↑↓ to move · Enter to open</p>
              <p className="font-mono">{items.length} results</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
