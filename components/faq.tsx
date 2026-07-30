'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const faqs = [
  {
    q: 'Is NeuroNest AI suitable for children with both Dyslexia and ADHD?',
    a: 'Yes. NeuroNest was designed for neurodivergent learners. Dyslexia Reading Mode and ADHD Focus Mode can be used together, and every setting adapts independently to each child.',
  },
  {
    q: 'How does the AI personalize each lesson?',
    a: 'The AI observes how a child responds to explanations and adjusts the wording, pace and length automatically — making ideas simpler or adding examples until the concept clicks.',
  },
  {
    q: 'Do I need special software or fonts installed?',
    a: 'No. Everything runs in your browser, including OpenDyslexic font support, text-to-speech and the reading guide. Just open NeuroNest and turn on the settings you need.',
  },
  {
    q: 'Is my child’s data private and safe?',
    a: 'Absolutely. We follow accessibility-first and privacy-first principles. Learning data is only used to personalize lessons and is never sold or shared.',
  },
  {
    q: 'Can teachers and parents track progress together?',
    a: 'Yes. The Parent & Teacher Dashboard shares the same insights — progress, strengths, attention span and AI suggestions — so everyone supports the child consistently.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">FAQ</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Questions, answered
          </h2>
        </Reveal>

        <div className="mt-12 space-y-4">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <Reveal key={item.q} delay={i * 0.05}>
                <div
                  className={`overflow-hidden rounded-3xl border transition-colors ${
                    isOpen ? 'border-primary/40 bg-card' : 'border-border bg-card'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  >
                    <span className="text-base font-semibold sm:text-lg">{item.q}</span>
                    <span
                      className={`flex size-8 shrink-0 items-center justify-center rounded-full transition-all ${
                        isOpen ? 'rotate-45 bg-primary text-primary-foreground' : 'bg-secondary'
                      }`}
                    >
                      <Plus className="size-4" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <p className="px-5 pb-5 text-pretty leading-relaxed text-muted-foreground">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
