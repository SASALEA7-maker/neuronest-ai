'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpenText, MessageCircleHeart, Sparkles, Volume2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-24">
      {/* soft ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(60% 50% at 20% 15%, color-mix(in oklch, var(--brand-blue) 22%, transparent), transparent), radial-gradient(55% 45% at 85% 20%, color-mix(in oklch, var(--brand-purple) 20%, transparent), transparent), radial-gradient(50% 50% at 60% 90%, color-mix(in oklch, var(--brand-mint) 20%, transparent), transparent)',
        }}
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-sm font-medium text-muted-foreground lg:mx-0"
          >
            <Sparkles className="size-4 text-primary" />
            AI learning that adapts to every child
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Every Mind Learns <span className="text-gradient">Differently.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground lg:mx-0"
          >
            NeuroNest AI adapts lessons to every child&apos;s learning style using Artificial
            Intelligence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
          >
            <Button size="lg" className="w-full rounded-full text-base sm:w-auto" asChild>
              <a href="#demo">
                Try Demo
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full rounded-full border-border bg-card/60 text-base sm:w-auto"
              asChild
            >
              <a href="#why">Learn More</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground lg:justify-start"
          >
            <span className="flex items-center gap-2">
              <BookOpenText className="size-4 text-brand-blue" /> Dyslexia friendly
            </span>
            <span className="flex items-center gap-2">
              <Sparkles className="size-4 text-brand-purple" /> ADHD focus mode
            </span>
            <span className="flex items-center gap-2">
              <Volume2 className="size-4 text-brand-mint" /> Voice learning
            </span>
          </motion.div>
        </div>

        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="glass relative rounded-[2.5rem] border border-border p-3 shadow-2xl shadow-primary/10">
            <Image
              src="/hero-child-ai.png"
              alt="A happy child studying at a desk with a friendly glowing AI assistant"
              width={720}
              height={720}
              priority
              className="w-full rounded-[2rem]"
            />
          </div>

          {/* floating cards */}
          <motion.div
            className="absolute -left-4 top-10 hidden rounded-2xl border border-border bg-card p-3 shadow-xl sm:block"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
          >
            <div className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-xl bg-brand-mint/25 text-brand-mint">
                <Volume2 className="size-5" />
              </span>
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Read aloud</p>
                <p className="text-sm font-semibold">Now playing</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute -right-3 bottom-10 hidden rounded-2xl border border-border bg-card p-3 shadow-xl sm:block"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
          >
            <div className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-xl bg-brand-purple/25 text-brand-purple">
                <MessageCircleHeart className="size-5" />
              </span>
              <div className="text-left">
                <p className="text-xs text-muted-foreground">AI tutor</p>
                <p className="text-sm font-semibold">Explained simply</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
