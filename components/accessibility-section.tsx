'use client'

import {
  Contrast,
  Moon,
  MousePointer2,
  Ruler,
  Type,
  Volume2,
  Waypoints,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import {
  useAccessibility,
  type A11yKey,
} from '@/components/accessibility-provider'

const toggles: { key: A11yKey; label: string; desc: string; icon: LucideIcon }[] = [
  { key: 'dyslexiaFont', label: 'Enable Dyslexia Font', desc: 'Switch to the OpenDyslexic typeface.', icon: Type },
  { key: 'letterSpacing', label: 'Increase Letter Spacing', desc: 'More space between letters and lines.', icon: Ruler },
  { key: 'darkMode', label: 'Dark Mode', desc: 'A softer, low-light color theme.', icon: Moon },
  { key: 'readingGuide', label: 'Reading Guide', desc: 'A highlight bar that follows your cursor.', icon: Waypoints },
  { key: 'textToSpeech', label: 'Text-to-Speech', desc: 'Hover any text and hear it read aloud.', icon: Volume2 },
  { key: 'voiceNav', label: 'Voice Navigation', desc: 'Navigate lessons with your voice.', icon: MousePointer2 },
  { key: 'highContrast', label: 'High Contrast', desc: 'Stronger contrast for easier reading.', icon: Contrast },
]

function Toggle({
  on,
  onClick,
  label,
}: {
  on: boolean
  onClick: () => void
  label: string
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      aria-label={label}
      onClick={onClick}
      className={`relative inline-flex h-7 w-12 shrink-0 items-center rounded-full transition-colors ${
        on ? 'bg-primary' : 'bg-muted'
      }`}
    >
      <span
        className={`inline-block size-5 transform rounded-full bg-background shadow transition-transform ${
          on ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  )
}

export function AccessibilitySection() {
  const { settings, toggle } = useAccessibility()

  return (
    <section id="accessibility" className="scroll-mt-24 bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Accessibility
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Try the controls — they work right now
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Every setting below instantly changes this whole page, so you can feel exactly what
            each child experiences.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <div className="grid gap-4 sm:grid-cols-2">
            {toggles.map((t) => {
              const on = settings[t.key]
              return (
                <div
                  key={t.key}
                  className={`flex items-center gap-4 rounded-3xl border p-5 transition-colors ${
                    on ? 'border-primary/40 bg-primary/5' : 'border-border bg-card'
                  }`}
                >
                  <span
                    className={`flex size-11 shrink-0 items-center justify-center rounded-2xl transition-colors ${
                      on ? 'bg-primary text-primary-foreground' : 'bg-secondary text-foreground'
                    }`}
                  >
                    <t.icon className="size-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold">{t.label}</p>
                    <p className="text-sm text-muted-foreground">{t.desc}</p>
                  </div>
                  <Toggle on={on} onClick={() => toggle(t.key)} label={t.label} />
                </div>
              )
            })}
          </div>
          {settings.textToSpeech && (
            <p className="mt-4 text-center text-sm text-muted-foreground">
              Text-to-Speech is on — use any &ldquo;Read Aloud&rdquo; button to hear content
              narrated.
            </p>
          )}
        </Reveal>
      </div>
    </section>
  )
}
