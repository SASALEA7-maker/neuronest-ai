'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

export type A11yKey =
  | 'dyslexiaFont'
  | 'letterSpacing'
  | 'darkMode'
  | 'readingGuide'
  | 'textToSpeech'
  | 'voiceNav'
  | 'highContrast'

type A11yState = Record<A11yKey, boolean>

const defaultState: A11yState = {
  dyslexiaFont: false,
  letterSpacing: false,
  darkMode: false,
  readingGuide: false,
  textToSpeech: false,
  voiceNav: false,
  highContrast: false,
}

type A11yContextValue = {
  settings: A11yState
  toggle: (key: A11yKey) => void
  speak: (text: string) => void
  stopSpeaking: () => void
  speaking: boolean
}

const AccessibilityContext = createContext<A11yContextValue | null>(null)

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<A11yState>(defaultState)
  const [speaking, setSpeaking] = useState(false)

  const toggle = useCallback((key: A11yKey) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }))
  }, [])

  // Apply document-level classes for global effects
  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', settings.darkMode)
    root.classList.toggle('dyslexia', settings.dyslexiaFont)
    root.classList.toggle('wide-spacing', settings.letterSpacing)
    root.classList.toggle('high-contrast', settings.highContrast)
  }, [settings])

  const stopSpeaking = useCallback(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel()
    }
    setSpeaking(false)
  }, [])

  const speak = useCallback((text: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.rate = 0.95
    utterance.pitch = 1.05
    utterance.onend = () => setSpeaking(false)
    utterance.onerror = () => setSpeaking(false)
    setSpeaking(true)
    window.speechSynthesis.speak(utterance)
  }, [])

  const value = useMemo(
    () => ({ settings, toggle, speak, stopSpeaking, speaking }),
    [settings, toggle, speak, stopSpeaking, speaking],
  )

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
      {settings.readingGuide && <ReadingGuide />}
    </AccessibilityContext.Provider>
  )
}

function ReadingGuide() {
  const [y, setY] = useState(0)

  useEffect(() => {
    const handler = (e: MouseEvent) => setY(e.clientY)
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 z-[100]"
      style={{ top: y - 24 }}
    >
      <div className="h-12 w-full bg-primary/10 ring-1 ring-primary/25 backdrop-brightness-105" />
    </div>
  )
}

export function useAccessibility() {
  const ctx = useContext(AccessibilityContext)
  if (!ctx) {
    throw new Error('useAccessibility must be used within AccessibilityProvider')
  }
  return ctx
}
