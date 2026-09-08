import { motion } from "framer-motion"
import type { ReactNode } from "react"

export function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      className={className}
      style={{ overflow: "visible" }}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.48, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function SectionHeader({
  kicker,
  title,
  intro,
}: {
  kicker: string
  title: string
  intro?: string
}) {
  return (
    <div>
      <p className="kicker">{kicker}</p>
      <h2 className="section-title">{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </div>
  )
}
