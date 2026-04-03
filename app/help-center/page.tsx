import { Header } from "@/components/travel/header"
import { Footer } from "@/components/travel/footer"
import Link from "next/link"
import { HelpCircle, Search, MessageCircle, Phone, Mail, BookOpen, CreditCard, MapPin, Shield, ChevronRight } from "lucide-react"

const faqCategories = [
  {
    icon: BookOpen,
    title: "Booking & Reservations",
    questions: [
      { q: "How do I book a trip?", a: "You can book a trip directly through our website by browsing destinations, selecting your preferred dates, and completing the checkout process. You'll receive a confirmation email once your booking is confirmed." },
      { q: "Can I modify my booking after confirmation?", a: "Yes, you can modify your booking up to 7 days before your departure date. Log in to your account, go to 'My Trips', and select the booking you'd like to change. Some modifications may incur additional fees." },
      { q: "What payment methods do you accept?", a: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, bank transfers, and installment payment plans through our partner Klarna." },
    ],
  },
  {
    icon: CreditCard,
    title: "Payments & Refunds",
    questions: [
      { q: "When will I be charged?", a: "A deposit of 20% is charged at the time of booking. The remaining balance is automatically charged 30 days before your departure date. For bookings made within 30 days of departure, the full amount is charged immediately." },
      { q: "How do refunds work?", a: "Refunds are processed within 5-10 business days and returned to your original payment method. Please refer to our Cancellation Policy for specific refund timelines based on when you cancel." },
      { q: "Do you offer payment plans?", a: "Yes, we offer interest-free installment plans through Klarna for trips over $500. You can split your payment into 3 or 6 monthly installments at checkout." },
    ],
  },
  {
    icon: MapPin,
    title: "Travel & Destinations",
    questions: [
      { q: "What's included in my trip package?", a: "Each package varies, but typically includes accommodation, select meals, guided tours, airport transfers, and activities listed in the itinerary. Flights are included unless stated otherwise. Check the specific trip page for detailed inclusions." },
      { q: "Do I need a visa for my destination?", a: "Visa requirements depend on your nationality and destination. We provide general visa guidance on each destination page, but we recommend checking with the relevant embassy or consulate. Our travel advisors can assist with visa application support." },
      { q: "What if my flight is delayed or cancelled?", a: "If your flight is delayed or cancelled, contact our 24/7 support line immediately. If you've booked a package with us, we'll help rearrange transfers and accommodations. We recommend purchasing travel insurance to cover additional costs from travel disruptions." },
    ],
  },
  {
    icon: Shield,
    title: "Safety & Support",
    questions: [
      { q: "Is it safe to travel to my chosen destination?", a: "We continuously monitor travel advisories from government sources. We'll notify you of any safety concerns related to your destination. We also provide detailed safety briefings before departure and have local partners in every destination we serve." },
      { q: "What support is available during my trip?", a: "We offer 24/7 support via phone, email, and our mobile app. Each trip includes a local guide or representative who can assist with day-to-day needs. Emergency assistance is always available." },
      { q: "How do I contact customer support?", a: "You can reach us via email at support@wanderlust.travel, by phone at +1 (555) 123-4567, or through the live chat on our website and app. Our support team is available 24/7." },
    ],
  },
]

const quickLinks = [
  { icon: BookOpen, title: "Booking Help", description: "Get help with reservations, changes, and cancellations", href: "/help-center#booking" },
  { icon: CreditCard, title: "Payment Issues", description: "Resolve billing questions, refunds, and payment plans", href: "/help-center#payments" },
  { icon: Shield, title: "Travel Insurance", description: "Learn about coverage options and claims", href: "/travel-insurance" },
  { icon: MessageCircle, title: "Contact Us", description: "Reach our support team anytime, 24/7", href: "/help-center#contact" },
]

export default function HelpCenterPage() {
  return (
    <main className="relative min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              <HelpCircle className="h-4 w-4" />
              Help Center
            </div>
            <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              How Can We <span className="text-primary">Help You?</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Find answers to frequently asked questions, get travel tips, and learn how to make the most of your Wanderlust experience.
            </p>

            {/* Search Bar */}
            <div className="mt-10 relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for help..."
                className="w-full rounded-full border border-border bg-background py-4 pl-12 pr-6 text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {quickLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <link.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{link.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{link.description}</p>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">
                  Learn more
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section id="booking" className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-muted-foreground">
              Browse our most common questions organized by topic.
            </p>
          </div>

          <div className="space-y-16">
            {faqCategories.map((category) => (
              <div key={category.title} id={category.title.toLowerCase().replace(/\s+/g, "-")}>
                <div className="flex items-center gap-3 mb-8">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <category.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.questions.map((item, idx) => (
                    <details key={idx} className="group rounded-xl border border-border bg-card">
                      <summary className="flex cursor-pointer items-center justify-between p-6 font-semibold text-foreground list-none">
                        <span>{item.q}</span>
                        <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform group-open:rotate-90" />
                      </summary>
                      <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                        {item.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-3xl bg-foreground p-12 text-center lg:p-16">
            <h2 className="font-serif text-3xl font-bold text-background sm:text-4xl">
              Still Need Help?
            </h2>
            <p className="mt-4 text-background/60 max-w-xl mx-auto">
              Our dedicated support team is available around the clock to assist you with any questions or concerns.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3 max-w-3xl mx-auto">
              <div className="rounded-2xl bg-background/10 p-6">
                <Phone className="h-8 w-8 text-accent mx-auto" />
                <h3 className="mt-4 font-semibold text-background">Call Us</h3>
                <p className="mt-2 text-sm text-background/60">+1 (555) 123-4567</p>
                <p className="text-xs text-background/40">Available 24/7</p>
              </div>
              <div className="rounded-2xl bg-background/10 p-6">
                <Mail className="h-8 w-8 text-accent mx-auto" />
                <h3 className="mt-4 font-semibold text-background">Email Us</h3>
                <p className="mt-2 text-sm text-background/60">support@wanderlust.travel</p>
                <p className="text-xs text-background/40">Response within 2 hours</p>
              </div>
              <div className="rounded-2xl bg-background/10 p-6">
                <MessageCircle className="h-8 w-8 text-accent mx-auto" />
                <h3 className="mt-4 font-semibold text-background">Live Chat</h3>
                <p className="mt-2 text-sm text-background/60">Chat with our team</p>
                <p className="text-xs text-background/40">Average wait: 2 min</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
