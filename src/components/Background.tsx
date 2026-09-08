import { useEffect, useRef } from "react"

export function Background() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    let raf = 0
    let t = 0
    const pointer = { x: 0.62, y: 0.3 }
    const target = { x: 0.62, y: 0.3 }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.floor(window.innerWidth * dpr)
      canvas.height = Math.floor(window.innerHeight * dpr)
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX / window.innerWidth
      target.y = e.clientY / window.innerHeight
    }

    const blob = (x: number, y: number, radius: number, color: string) => {
      const g = ctx.createRadialGradient(x, y, 0, x, y, radius)
      g.addColorStop(0, color)
      g.addColorStop(1, "rgba(0,0,0,0)")
      ctx.fillStyle = g
      ctx.beginPath()
      ctx.arc(x, y, radius, 0, Math.PI * 2)
      ctx.fill()
    }

    const draw = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      t += 0.004
      pointer.x += (target.x - pointer.x) * 0.1
      pointer.y += (target.y - pointer.y) * 0.1
      ctx.fillStyle = "#07070f"
      ctx.fillRect(0, 0, w, h)
      blob(w * (0.18 + Math.sin(t) * 0.03), h * 0.16, w * 0.38, "rgba(92, 78, 170, 0.28)")
      blob(w * (0.86 + Math.cos(t * 0.8) * 0.02), h * 0.2, w * 0.32, "rgba(70, 168, 196, 0.2)")
      blob(w * 0.5, h * 0.92, w * 0.42, "rgba(80, 60, 140, 0.12)")
      blob(pointer.x * w, pointer.y * h, w * 0.2, "rgba(142, 228, 245, 0.12)")
      raf = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener("resize", resize)
    window.addEventListener("pointermove", onMove, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
      window.removeEventListener("pointermove", onMove)
    }
  }, [])

  return <canvas ref={ref} className="pointer-events-none fixed inset-0 z-0" />
}

export function Grain() {
  return <div className="grain" aria-hidden />
}
