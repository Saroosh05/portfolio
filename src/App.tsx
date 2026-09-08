import { useEffect, useState } from "react"
import { About } from "./components/About"
import { Background, Grain } from "./components/Background"
import { CommandPalette } from "./components/CommandPalette"
import { Contact } from "./components/Contact"
import { Cursor } from "./components/Cursor"
import { Education } from "./components/Education"
import { Engage } from "./components/Engage"
import { Experience } from "./components/Experience"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { Nav } from "./components/Nav"
import { Research } from "./components/Research"
import { Services } from "./components/Services"
import { Skills } from "./components/Skills"
import { Work } from "./components/Work"

export default function App() {
  const [command, setCommand] = useState(false)

  useEffect(() => {
    const id = window.location.hash.slice(1)
    if (!id) return
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: "auto", block: "start" })
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        setCommand((v) => !v)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <>
      <Cursor />
      <Background />
      <Grain />
      <Nav onOpenCommand={() => setCommand(true)} />
      <main className="relative z-10">
        <Hero />
        <About />
        <Engage />
        <Services />
        <Work />
        <Research />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
      <CommandPalette open={command} onClose={() => setCommand(false)} />
    </>
  )
}
