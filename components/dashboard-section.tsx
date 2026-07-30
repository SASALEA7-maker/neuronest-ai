'use client'

import { motion } from 'framer-motion'
import {
  BrainCircuit,
  CalendarDays,
  Gauge,
  Lightbulb,
  LineChart,
  Sparkles,
  Target,
  TrendingUp,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'

const bars = [40, 62, 55, 78, 70, 88, 82]

export function DashboardSection() {
  return (
    <section id="dashboard" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Parent &amp; Teacher Dashboard
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Clear insight into every child&apos;s journey
          </h2>
          <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <Sparkles className="size-3.5 text-primary" /> Sample preview &mdash; illustrative data
          </span>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {/* Learning Progress — large card */}
          <Reveal className="lg:col-span-2">
            <div className="h-full rounded-3xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                    <LineChart className="size-6" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold">Learning Progress</h3>
                    <p className="text-sm text-muted-foreground">Last 7 days</p>
                  </div>
                </div>
                <span className="flex items-center gap-1 rounded-full bg-brand-mint/20 px-3 py-1 text-sm font-semibold text-brand-mint">
                  <TrendingUp className="size-4" /> +18%
                </span>
              </div>
              <div className="mt-8 flex h-40 items-end gap-3">
                {bars.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: i * 0.08, ease: 'easeOut' }}
                    className="flex-1 rounded-t-xl bg-gradient-to-t from-primary/40 to-primary"
                  />
                ))}
              </div>
            </div>
          </Reveal>

          {/* AI Suggestions */}
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-border bg-card p-6 shadow-sm">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-brand-purple/15 text-brand-purple">
                <BrainCircuit className="size-6" />
              </span>
              <h3 className="mt-4 text-lg font-bold">AI Suggestions</h3>
              <ul className="mt-4 space-y-3">
                {[
                  'Try 10-minute focus lessons in the morning.',
                  'Add read-aloud for science topics.',
                  'Celebrate the reading streak — 5 days!',
                ].map((s) => (
                  <li key={s} className="flex gap-2.5 text-sm leading-relaxed">
                    <Sparkles className="mt-0.5 size-4 shrink-0 text-brand-purple" />
                    <span className="text-muted-foreground">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Small stat cards */}
          <Reveal delay={0.05}>
            <StatCard
              icon={CalendarDays}
              tint="bg-brand-blue/15 text-brand-blue"
              title="Weekly Reports"
              value="Ready"
              sub="Auto-sent every Sunday"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <StatCard
              icon={Target}
              tint="bg-brand-mint/20 text-brand-mint"
              title="Strengths"
              value="Reading & Art"
              sub="Top performing areas"
            />
          </Reveal>
          <Reveal delay={0.15}>
            <StatCard
              icon={Lightbulb}
              tint="bg-primary/15 text-primary"
              title="Areas to Improve"
              value="Math focus"
              sub="Gentle daily practice"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <StatCard
              icon={Gauge}
              tint="bg-brand-purple/15 text-brand-purple"
              title="Attention Span"
              value="12 min"
              sub="Up from 8 min"
              progress={68}
            />
          </Reveal>
          <Reveal delay={0.15}>
            <StatCard
              icon={TrendingUp}
              tint="bg-brand-blue/15 text-brand-blue"
              title="Reading Speed"
              value="94 wpm"
              sub="Steady improvement"
              progress={74}
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function StatCard({
  icon: Icon,
  tint,
  title,
  value,
  sub,
  progress,
}: {
  icon: typeof LineChart
  tint: string
  title: string
  value: string
  sub: string
  progress?: number
}) {
  return (
    <div className="h-full rounded-3xl border border-border bg-card p-6 shadow-sm">
      <span className={`flex size-11 items-center justify-center rounded-2xl ${tint}`}>
        <Icon className="size-6" />
      </span>
      <h3 className="mt-4 text-sm font-semibold text-muted-foreground">{title}</h3>
      <p className="mt-1 text-2xl font-bold tracking-tight">{value}</p>
      <p className="mt-1 text-sm text-muted-foreground">{sub}</p>
      {typeof progress === 'number' && (
        <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-muted">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${progress}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="h-full rounded-full bg-primary"
          />
        </div>
      )}
    </div>
  )
}
