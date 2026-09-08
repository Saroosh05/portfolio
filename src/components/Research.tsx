import { Download } from "lucide-react"
import { research } from "../data/content"
import { FadeIn, SectionHeader } from "./Section"

export function Research() {
  return (
    <section id="research" className="section-pad relative z-10">
      <div className="wrap">
        <FadeIn>
          <SectionHeader
            kicker="03 · Research"
            title="Applied research"
            intro="Crop disease diagnosis and parallel information retrieval. Download either paper as a PDF."
          />
        </FadeIn>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {research.map((paper, i) => (
            <FadeIn key={paper.id} delay={i * 0.06}>
              <article className="neon-card flex h-full flex-col rounded-[1.4rem] p-6">
                <div className="flex items-start justify-between gap-3 font-mono text-[10px] tracking-wide text-cobalt uppercase">
                  <span>{paper.status}</span>
                  <span>{paper.year}</span>
                </div>
                <h3 className="mt-4 text-[1.15rem] leading-snug font-semibold tracking-tight">
                  {paper.title}
                </h3>
                <p className="mt-2 text-[13px] text-mute">{paper.authors.join(" · ")}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink/75">{paper.summary}</p>
                <p className="mt-6 text-[1.35rem] font-semibold tracking-tight text-cobalt">
                  {paper.metric}
                </p>
                <div className="mt-auto pt-6">
                  <a
                    href={paper.pdf}
                    download={paper.fileName}
                    className="inline-flex items-center gap-2 rounded-full border border-white/16 px-4 py-2.5 text-[13px] text-ink/90 transition hover:bg-white/8"
                  >
                    <Download size={14} />
                    Download paper
                  </a>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
