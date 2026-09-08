import { profile } from "../data/content"
import { SocialIcons } from "./SocialIcons"

export function Footer() {
  return (
    <footer className="relative z-10 mt-6 border-t border-white/10 py-7">
      <div className="wrap flex flex-col items-center gap-5 sm:flex-row sm:justify-between">
        <p className="text-sm font-medium tracking-tight">{profile.name}</p>
        <SocialIcons />
        <p className="font-mono text-[11px] text-mute">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
