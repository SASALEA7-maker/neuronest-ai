import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { WhySection } from '@/components/why-section'
import { AiDemo } from '@/components/ai-demo'
import { UploadSection } from '@/components/upload-section'
import { AccessibilitySection } from '@/components/accessibility-section'
import { DashboardSection } from '@/components/dashboard-section'
import { Testimonials } from '@/components/testimonials'
import { Faq } from '@/components/faq'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <Hero />
        <WhySection />
        <AiDemo />
        <UploadSection />
        <AccessibilitySection />
        <DashboardSection />
        <Testimonials />
        <Faq />
      </main>
      <SiteFooter />
    </div>
  )
}
