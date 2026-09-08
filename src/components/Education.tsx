import { achievements, education } from "../data/content"
import { FadeIn, SectionHeader } from "./Section"

export function Education() {
  return (
    <section id="education" className="section-pad relative z-10">
      <div className="wrap">
        <FadeIn>
          <SectionHeader
            kicker="06 · Education"
            title="Education & credentials"
            intro="Computer Science at UET Lahore, plus certifications and competitions."
          />
        </FadeIn>
        <div className="mt-8">
          {education.map((ed) => (
            <article
              key={ed.id}
              className="grid gap-1 border-b border-white/10 py-4 md:grid-cols-[1fr_auto] md:items-baseline md:gap-8"
            >
              <div>
                <p className="font-mono text-[10px] tracking-wide text-cobalt uppercase">
                  {ed.note}
                </p>
                <h3 className="mt-1 text-[1.05rem] font-semibold tracking-tight">{ed.degree}</h3>
                <p className="mt-0.5 text-sm text-mute">{ed.school}</p>
              </div>
              <p className="font-mono text-[12px] text-mute">{ed.period}</p>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <p className="kicker">Certifications & Achievements</p>
          <div className="mt-3">
            {achievements.map((a) => (
              <article
                key={a.title}
                className="grid gap-1 border-b border-white/10 py-3.5 md:grid-cols-[8.5rem_1fr_auto] md:items-baseline md:gap-6"
              >
                <p className="font-mono text-[10px] tracking-wide text-mute uppercase">{a.kind}</p>
                <h3 className="text-[0.98rem] font-medium tracking-tight">{a.title}</h3>
                <p className="text-sm text-mute">{a.org}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
