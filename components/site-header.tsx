'use client'

import { useEffect, useState } from 'react'
import { Brain, Menu, Moon, Sun, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAccessibility } from '@/components/accessibility-provider'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Why NeuroNest', href: '#why' },
  { label: 'AI Demo', href: '#demo' },
  { label: 'Upload', href: '#upload' },
  { label: 'Accessibility', href: '#accessibility' },
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'FAQ', href: '#faq' },
]

export function SiteHeader() {
  const { settings, toggle } = useAccessibility()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'py-2' : 'py-4',
      )}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={cn(
            'flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300',
            scrolled ? 'glass border border-border shadow-lg shadow-primary/5' : '',
          )}
        >
          <a href="#top" className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Brain className="size-5" />
            </span>
            <span className="text-lg font-bold tracking-tight">NeuroNest AI</span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              aria-label="Toggle dark mode"
              onClick={() => toggle('darkMode')}
            >
              {settings.darkMode ? <Sun className="size-5" /> : <Moon className="size-5" />}
            </Button>
            <Button className="hidden rounded-full sm:inline-flex" asChild>
              <a href="#demo">Try Demo</a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full lg:hidden"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </div>

        {open && (
          <div className="glass mt-2 rounded-3xl border border-border p-3 shadow-lg lg:hidden">
            <nav className="flex flex-col">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
