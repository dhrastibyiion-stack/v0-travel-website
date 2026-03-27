import { Header } from "@/components/travel/header"
import { Hero } from "@/components/travel/hero"
import { Destinations } from "@/components/travel/destinations"
import { Experiences } from "@/components/travel/experiences"
import { Testimonials } from "@/components/travel/testimonials"
import { CTA } from "@/components/travel/cta"
import { Footer } from "@/components/travel/footer"

export default function TravelHomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Destinations />
      <Experiences />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
