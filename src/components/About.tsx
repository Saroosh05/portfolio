import { profile } from "../data/content"
import { FadeIn } from "./Section"

export function About() {
  return (
    <section id="about" className="section-pad relative z-10">
      <div className="wrap">
        <FadeIn>
          <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="kicker">01 · About</p>
              <h2 className="section-title">I take a brief from idea to a working product.</h2>
            </div>
            <div>
              <p className="prose-body">{profile.summary}</p>
              <div className="mt-8 grid gap-5 sm:grid-cols-3">
                {[
                  ["Based", profile.location],
                  ["Languages", profile.languages.join(" & ")],
                  ["For you", "Brief to a working product"],
                ].map(([k, v]) => (
                  <div key={k} className="border-t border-white/16 pt-3">
                    <p className="font-mono text-[10px] tracking-widest text-cobalt uppercase">{k}</p>
                    <p className="mt-1.5 text-sm leading-snug">{v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
