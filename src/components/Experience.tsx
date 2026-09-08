import { experience } from "../data/content"
import { FadeIn, SectionHeader } from "./Section"

export function Experience() {
  return (
    <section id="experience" className="section-pad relative z-10">
      <div className="wrap">
        <FadeIn>
          <SectionHeader
            kicker="04 · Experience"
            title="Where I’ve worked"
            intro="A web project at EBiz Logics, a learning stretch at Ustadam, and a teaching assistant role at UET Lahore."
          />
        </FadeIn>
        <div className="mt-8">
          {experience.map((job) => (
            <article
              key={job.id}
              className="grid gap-3 border-t border-white/10 py-7 md:grid-cols-[11.5rem_1fr] md:gap-10"
            >
              <p className="font-mono pt-0.5 text-[11px] tracking-wide text-mute">{job.period}</p>
              <div>
                <h3 className="text-[1.12rem] leading-snug font-semibold tracking-tight">{job.role}</h3>
                <p className="mt-1 text-sm text-mute">{job.org}</p>
                <p className="prose-body mt-3 text-[0.95rem]">{job.summary}</p>
                <ul className="mt-3 space-y-1.5">
                  {job.highlights.map((h) => (
                    <li key={h} className="text-sm leading-relaxed text-mute">
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {job.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/12 px-2.5 py-1 font-mono text-[10px] text-mute">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
