import { Header } from "@/components/travel/header"
import { Footer } from "@/components/travel/footer"
import { ContactContent } from "./contact-content"

export default function ContactPage() {
  return (
    <main className="relative min-h-screen">
      <Header variant="dark" />
      <ContactContent />
      <Footer />
    </main>
  )
}