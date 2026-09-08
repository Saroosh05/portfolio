import { FadeIn } from "./Section"

export function Engage() {
  return (
    <section className="section-pad relative z-10 pt-2 md:pt-4">
      <div className="wrap">
        <FadeIn>
          <div className="chroma-glass overflow-hidden rounded-[1.7rem] px-6 py-7 md:px-10 md:py-8">
            <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-cyan-200/14 via-violet-400/8 to-transparent" />
            <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-10">
              <div className="min-w-0 flex-1">
                <p className="kicker">Ready when you are</p>
                <h2 className="section-title">Have a product in mind? Let’s build it.</h2>
                <p className="cta-copy">
                  Web, Android, or AI. Send the brief and I will reply with how we start.
                </p>
              </div>
              <a
                href="#contact"
                className="btn-glow relative z-10 inline-flex shrink-0 self-start rounded-full px-6 py-3 text-sm md:self-center"
              >
                Start a project
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
