'use client'

import { motion } from 'framer-motion'
import { HeartHandshake, MessageCircleHeart, Sparkles } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { Button } from '@/components/ui/button'

const principles = [
  {
    icon: HeartHandshake,
    title: 'Built with families',
    body: 'We are partnering with parents, teachers and specialists to shape NeuroNest around real classroom and home needs.',
    tint: 'bg-brand-purple/20 text-brand-purple',
  },
  {
    icon: Sparkles,
    title: 'Evidence-led design',
    body: 'Our accessibility features are informed by established dyslexia and ADHD research — not guesswork.',
    tint: 'bg-brand-blue/20 text-brand-blue',
  },
  {
    icon: MessageCircleHeart,
    title: 'Your story goes here',
    body: 'Once early testing begins, real experiences from parents and educators will be shared in this space.',
    tint: 'bg-brand-mint/25 text-brand-mint',
  },
]

export function Testimonials() {
  return (
    <section id="stories" className="scroll-mt-24 bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <Sparkles className="size-3.5" /> Prototype &mdash; stories coming soon
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            We&apos;re just getting started
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            NeuroNest AI is an early-stage prototype preparing for launch. We haven&apos;t collected
            reviews yet &mdash; instead, here is what guides how we build.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-sm"
              >
                <span
                  className={`flex size-12 items-center justify-center rounded-2xl ${p.tint}`}
                >
                  <p.icon className="size-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{p.title}</h3>
                <p className="mt-2 flex-1 text-pretty leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mx-auto mt-12 max-w-xl text-center">
          <div className="rounded-3xl border border-dashed border-primary/40 bg-card/60 p-8">
            <h3 className="text-xl font-bold">Want to help shape NeuroNest?</h3>
            <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
              We&apos;re looking for parents, teachers and specialists to join early testing.
            </p>
            <Button size="lg" className="mt-6 rounded-full" asChild>
              <a href="#cta">Join the early access list</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
