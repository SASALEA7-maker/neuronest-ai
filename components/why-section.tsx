'use client'

import { motion } from 'framer-motion'
import { BookOpen, Brain, Mic, Zap } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const features = [
  {
    icon: Brain,
    title: 'AI Personalized Learning',
    desc: 'AI changes explanations according to every child’s understanding.',
    tint: 'bg-brand-purple/15 text-brand-purple',
  },
  {
    icon: BookOpen,
    title: 'Dyslexia Reading Mode',
    desc: 'OpenDyslexic font support, increased spacing, highlighted reading and text-to-speech.',
    tint: 'bg-brand-blue/15 text-brand-blue',
  },
  {
    icon: Zap,
    title: 'ADHD Focus Mode',
    desc: 'Distraction-free interface with one task at a time and short focused lessons.',
    tint: 'bg-brand-mint/20 text-brand-mint',
  },
  {
    icon: Mic,
    title: 'Voice Learning',
    desc: 'Students can ask questions using voice instead of typing.',
    tint: 'bg-primary/15 text-primary',
  },
]

export function WhySection() {
  return (
    <section id="why" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Why NeuroNest?
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Learning designed around how children actually think
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Four intelligent modes work together to make every lesson clearer, calmer and
            genuinely accessible.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group h-full rounded-3xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-xl hover:shadow-primary/10"
              >
                <span
                  className={`flex size-14 items-center justify-center rounded-2xl ${f.tint} transition-transform group-hover:scale-110`}
                >
                  <f.icon className="size-7" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
