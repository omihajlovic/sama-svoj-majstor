export const dynamic = 'force-dynamic'

import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import BeforeAfterSection from '@/components/sections/BeforeAfterSection'
import PainPointsServices from '@/components/sections/PainPointsServices'
import ProjectsPreview from '@/components/sections/ProjectsPreview'
import ProcessSection from '@/components/sections/ProcessSection'
import Testimonials from '@/components/sections/Testimonials'
import WhoIsBehind from '@/components/sections/WhoIsBehind'
import FAQSection from '@/components/sections/FAQSection'
import BlogSection from '@/components/sections/BlogSection'
import FinalCTA from '@/components/sections/FinalCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <BeforeAfterSection />
      <PainPointsServices />
      <ProjectsPreview />
      <ProcessSection />
      <Testimonials />
      <WhoIsBehind />
      <FAQSection />
      <BlogSection />
      <FinalCTA />
    </>
  )
}
