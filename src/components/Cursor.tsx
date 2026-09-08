import { useEffect, useRef } from "react"

export function Cursor() {
  const blob = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return
    const el = blob.current
    if (!el) return
    let x = 0
    let y = 0
    let cx = 0
    let cy = 0
    let raf = 0
    const onMove = (e: PointerEvent) => {
      x = e.clientX
      y = e.clientY
    }
    const loop = () => {
      cx += (x - cx) * 0.48
      cy += (y - cy) * 0.48
      el.style.transform = `translate(${cx - 8}px, ${cy - 8}px)`
      raf = requestAnimationFrame(loop)
    }
    window.addEventListener("pointermove", onMove, { passive: true })
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("pointermove", onMove)
    }
  }, [])

  return (
    <div
      ref={blob}
      className="pointer-events-none fixed top-0 left-0 z-[90] hidden h-3.5 w-3.5 rounded-full bg-white/55 shadow-[0_0_18px_rgba(125,216,240,0.28)] md:block"
    />
  )
}
