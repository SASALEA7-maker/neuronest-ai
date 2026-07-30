'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, Copy, Languages, Sparkles, Volume2, Wand2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'
import { useAccessibility } from '@/components/accessibility-provider'

const EXAMPLE =
  'Photosynthesis is the biochemical process by which green plants synthesize food using sunlight.'

const EASY_DEFAULT =
  'Plants use sunlight to make their own food, just like a tiny solar-powered kitchen.'

const TRANSLATIONS = [
  { label: 'English', text: EASY_DEFAULT },
  {
    label: 'Español',
    text: 'Las plantas usan la luz del sol para hacer su propia comida, como una pequeña cocina que funciona con energía solar.',
  },
  {
    label: 'हिन्दी',
    text: 'पौधे सूरज की रोशनी का उपयोग करके अपना भोजन खुद बनाते हैं, ठीक एक छोटी सौर-ऊर्जा वाली रसोई की तरह।',
  },
]

function simplify(text: string) {
  const trimmed = text.trim()
  if (!trimmed) return ''
  if (trimmed === EXAMPLE) return EASY_DEFAULT
  const firstSentence = trimmed.split(/(?<=[.!?])\s/)[0]
  return `In simple words: ${firstSentence.replace(/\s+/g, ' ')} — explained gently, one idea at a time, so it is easy to picture and remember.`
}

export function AiDemo() {
  const { speak } = useAccessibility()
  const [input, setInput] = useState(EXAMPLE)
  const [result, setResult] = useState<string | null>(EASY_DEFAULT)
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)
  const [langIndex, setLangIndex] = useState(0)

  const isDefault = input.trim() === EXAMPLE

  const handleSimplify = () => {
    setLoading(true)
    setResult(null)
    setLangIndex(0)
    setTimeout(() => {
      setResult(simplify(input))
      setLoading(false)
    }, 900)
  }

  const shownText =
    result && isDefault ? TRANSLATIONS[langIndex].text : (result ?? '')

  const handleCopy = async () => {
    await navigator.clipboard.writeText(shownText)
    setCopied(true)
    setTimeout(() => setCopied(false), 1600)
  }

  const handleTranslate = () => {
    if (isDefault) {
      setLangIndex((i) => (i + 1) % TRANSLATIONS.length)
    }
  }

  return (
    <section
      id="demo"
      className="scroll-mt-24 bg-secondary/40 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-5xl px-4">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Interactive AI demonstration
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            See how NeuroNest makes hard ideas easy
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Input card */}
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <label htmlFor="paragraph" className="text-sm font-semibold">
                Paste any difficult paragraph
              </label>
              <textarea
                id="paragraph"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                rows={6}
                className="mt-3 w-full resize-none rounded-2xl border border-border bg-background p-4 text-sm leading-relaxed outline-none transition-shadow focus:ring-2 focus:ring-primary/40"
                placeholder="e.g. Photosynthesis is the biochemical process by which green plants synthesize food using sunlight."
              />
              <Button
                onClick={handleSimplify}
                disabled={loading || !input.trim()}
                className="mt-4 w-full rounded-full text-base"
                size="lg"
              >
                <Wand2 className="size-4" />
                {loading ? 'Thinking…' : 'Simplify with AI'}
              </Button>
            </div>

            {/* Response card */}
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full opacity-40 blur-2xl"
                style={{ background: 'var(--brand-mint)' }}
              />
              <div className="flex items-center gap-2">
                <span className="flex size-9 items-center justify-center rounded-xl bg-brand-mint/20 text-brand-mint">
                  <Sparkles className="size-5" />
                </span>
                <h3 className="text-lg font-bold">Easy Version</h3>
                {result && isDefault && (
                  <span className="ml-auto rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                    {TRANSLATIONS[langIndex].label}
                  </span>
                )}
              </div>

              <div className="mt-4 min-h-[7rem]">
                <AnimatePresence mode="wait">
                  {loading ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-3"
                    >
                      {[0, 1, 2].map((n) => (
                        <div
                          key={n}
                          className="h-4 animate-pulse rounded-full bg-muted"
                          style={{ width: `${90 - n * 15}%` }}
                        />
                      ))}
                    </motion.div>
                  ) : (
                    <motion.p
                      key={shownText}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-pretty text-base leading-relaxed"
                    >
                      🌱 {shownText}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <Button
                  variant="secondary"
                  size="sm"
                  className="rounded-full"
                  onClick={() => speak(shownText)}
                  disabled={!result || loading}
                >
                  <Volume2 className="size-4" />
                  Read Aloud
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  className="rounded-full"
                  onClick={handleCopy}
                  disabled={!result || loading}
                >
                  {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
                  {copied ? 'Copied' : 'Copy'}
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  className="rounded-full"
                  onClick={handleTranslate}
                  disabled={!result || loading || !isDefault}
                >
                  <Languages className="size-4" />
                  Translate
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
