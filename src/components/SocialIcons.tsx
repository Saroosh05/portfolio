import { Mail, Phone } from "lucide-react"
import { profile } from "../data/content"

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-[17px] w-[17px]" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.16 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-[16px] w-[16px]" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 0 1 2.063-2.065 2.064 2.064 0 0 1 2.063 2.065c0 1.14-.925 2.065-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

const links = [
  { label: "Email", href: `mailto:${profile.email}`, icon: <Mail size={16} strokeWidth={1.75} /> },
  { label: "LinkedIn", href: profile.linkedin, icon: <LinkedInIcon /> },
  { label: "GitHub", href: profile.github, icon: <GitHubIcon /> },
  { label: "Phone", href: profile.phoneHref, icon: <Phone size={16} strokeWidth={1.75} /> },
]

export function SocialIcons() {
  return (
    <ul className="flex items-center gap-2">
      {links.map((link) => {
        const external = link.href.startsWith("http")
        return (
          <li key={link.label}>
            <a
              href={link.href}
              aria-label={link.label}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              className="social-icon"
            >
              {link.icon}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
