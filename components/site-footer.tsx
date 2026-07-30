'use client'

import { AtSign, Brain, Globe, Mail, MessageCircle, Send } from 'lucide-react'

const columns = [
  {
    heading: 'Product',
    links: ['AI Demo', 'Upload Material', 'Accessibility', 'Dashboard'],
  },
  {
    heading: 'Company',
    links: ['About', 'Careers', 'Blog', 'Press'],
  },
  {
    heading: 'Support',
    links: ['Help Center', 'Community', 'Contact', 'Status'],
  },
]

const socials = [
  { icon: Send, label: 'Telegram' },
  { icon: MessageCircle, label: 'Community' },
  { icon: AtSign, label: 'Email us' },
  { icon: Globe, label: 'Website' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Brain className="size-5" />
              </span>
              <span className="text-lg font-bold tracking-tight">NeuroNest AI</span>
            </a>
            <p className="mt-4 max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
              AI-powered learning that adapts to every child&apos;s mind — built with
              accessibility at its heart for learners with Dyslexia and ADHD.
            </p>
            <a
              href="mailto:hello@neuronest.ai"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              <Mail className="size-4" />
              hello@neuronest.ai
            </a>
            <div className="mt-5 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-sm font-semibold">{col.heading}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} NeuroNest AI. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Terms
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
