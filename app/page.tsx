import { Header } from "@/components/travel/header"
import { Hero } from "@/components/travel/hero"
import { Destinations } from "@/components/travel/destinations"
import { HorizontalGallery } from "@/components/travel/horizontal-gallery"
import { Places } from "@/components/travel/places"
import { Experiences } from "@/components/travel/experiences"
import { Testimonials } from "@/components/travel/testimonials"
import { CTA } from "@/components/travel/cta"
import { Footer } from "@/components/travel/footer"
import { CustomCursor } from "@/components/travel/custom-cursor"
import { ScrollProgress } from "@/components/travel/scroll-progress"
import { SmoothScroll } from "@/components/travel/smooth-scroll"

export default function TravelHomePage() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen cursor-none md:cursor-none">
        <CustomCursor />
        <ScrollProgress />
        <Header />
        <Hero />
        <Destinations />
        <HorizontalGallery />
        <Places />
        <Experiences />
        <Testimonials />
        <CTA />
        <Footer />
      </main>
    </SmoothScroll>
  )
}
