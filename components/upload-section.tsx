'use client'

import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  FileText,
  Image as ImageIcon,
  KeyRound,
  PenLine,
  ScanText,
  Sparkles,
  UploadCloud,
  Volume2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'

const results = [
  {
    icon: Sparkles,
    title: 'AI Summary',
    desc: 'A short, friendly overview of the whole document in plain language.',
    tint: 'bg-brand-purple/15 text-brand-purple',
  },
  {
    icon: KeyRound,
    title: 'Key Points',
    desc: 'The most important ideas pulled out as an easy checklist.',
    tint: 'bg-brand-blue/15 text-brand-blue',
  },
  {
    icon: ScanText,
    title: 'Vocabulary Simplified',
    desc: 'Hard words replaced with simple ones a child understands.',
    tint: 'bg-brand-mint/20 text-brand-mint',
  },
  {
    icon: Volume2,
    title: 'Read Aloud',
    desc: 'The whole document narrated with clear, gentle text-to-speech.',
    tint: 'bg-primary/15 text-primary',
  },
  {
    icon: ImageIcon,
    title: 'Visual Explanation',
    desc: 'Concepts turned into simple pictures and diagrams to remember.',
    tint: 'bg-brand-purple/15 text-brand-purple',
  },
]

const supported = [
  { icon: FileText, label: 'PDF' },
  { icon: ImageIcon, label: 'Images' },
  { icon: PenLine, label: 'Handwritten Notes' },
]

export function UploadSection() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [status, setStatus] = useState<'idle' | 'processing' | 'done'>('idle')
  const [fileName, setFileName] = useState<string | null>(null)
  const [dragging, setDragging] = useState(false)

  const process = (name: string) => {
    setFileName(name)
    setStatus('processing')
    setTimeout(() => setStatus('done'), 1600)
  }

  return (
    <section id="upload" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Upload learning material
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Turn any document into an accessible lesson
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <div
            onDragOver={(e) => {
              e.preventDefault()
              setDragging(true)
            }}
            onDragLeave={() => setDragging(false)}
            onDrop={(e) => {
              e.preventDefault()
              setDragging(false)
              const f = e.dataTransfer.files?.[0]
              process(f ? f.name : 'lesson-notes.pdf')
            }}
            className={`relative overflow-hidden rounded-[2rem] border-2 border-dashed p-10 text-center transition-colors ${
              dragging ? 'border-primary bg-primary/5' : 'border-border bg-card'
            }`}
          >
            <input
              ref={inputRef}
              type="file"
              accept=".pdf,image/*"
              className="sr-only"
              onChange={(e) => {
                const f = e.target.files?.[0]
                if (f) process(f.name)
              }}
            />
            <motion.span
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
              className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-primary/12 text-primary"
            >
              <UploadCloud className="size-8" />
            </motion.span>
            <h3 className="mt-5 text-xl font-bold">Drag &amp; drop your file here</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              or click to browse from your device
            </p>
            <Button
              className="mt-5 rounded-full"
              size="lg"
              onClick={() => inputRef.current?.click()}
            >
              Choose file
            </Button>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              {supported.map((s) => (
                <span
                  key={s.label}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-sm font-medium text-secondary-foreground"
                >
                  <s.icon className="size-4" />
                  {s.label}
                </span>
              ))}
            </div>

            {fileName && (
              <p className="mt-4 text-sm text-muted-foreground">
                {status === 'processing' ? 'Analyzing' : 'Analyzed'}:{' '}
                <span className="font-semibold text-foreground">{fileName}</span>
              </p>
            )}
          </div>
        </Reveal>

        <AnimatePresence>
          {status !== 'idle' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {results.map((r, i) => (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-3xl border border-border bg-card p-6 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className={`flex size-12 items-center justify-center rounded-2xl ${r.tint}`}>
                      <r.icon className="size-6" />
                    </span>
                    {status === 'processing' ? (
                      <span className="size-5 animate-spin rounded-full border-2 border-muted border-t-primary" />
                    ) : (
                      <span className="flex size-6 items-center justify-center rounded-full bg-brand-mint/25 text-brand-mint">
                        ✓
                      </span>
                    )}
                  </div>
                  <h3 className="mt-4 text-base font-bold">{r.title}</h3>
                  {status === 'processing' ? (
                    <div className="mt-3 space-y-2">
                      <div className="h-3 w-full animate-pulse rounded-full bg-muted" />
                      <div className="h-3 w-2/3 animate-pulse rounded-full bg-muted" />
                    </div>
                  ) : (
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
