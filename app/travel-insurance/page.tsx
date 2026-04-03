import { Header } from "@/components/travel/header"
import { Footer } from "@/components/travel/footer"
import Link from "next/link"
import { Shield, Check, X, Plane, Heart, Umbrella, AlertTriangle, Phone, ChevronRight } from "lucide-react"

const coveragePlans = [
  {
    name: "Essential",
    price: "$49",
    period: "per trip",
    description: "Basic coverage for budget-conscious travelers",
    features: [
      { text: "Trip cancellation up to $5,000", included: true },
      { text: "Emergency medical up to $50,000", included: true },
      { text: "Baggage loss/delay up to $1,000", included: true },
      { text: "Travel delay ($100/day, max 5 days)", included: true },
      { text: "24/7 emergency assistance", included: true },
      { text: "Adventure sports coverage", included: false },
      { text: "Cancel for any reason (CFAR)", included: false },
      { text: "Rental car coverage", included: false },
    ],
    popular: false,
  },
  {
    name: "Premium",
    price: "$99",
    period: "per trip",
    description: "Comprehensive coverage for most travelers",
    features: [
      { text: "Trip cancellation up to $15,000", included: true },
      { text: "Emergency medical up to $150,000", included: true },
      { text: "Baggage loss/delay up to $2,500", included: true },
      { text: "Travel delay ($200/day, max 7 days)", included: true },
      { text: "24/7 emergency assistance", included: true },
      { text: "Adventure sports coverage", included: true },
      { text: "Cancel for any reason (CFAR)", included: false },
      { text: "Rental car coverage", included: true },
    ],
    popular: true,
  },
  {
    name: "Ultimate",
    price: "$179",
    period: "per trip",
    description: "Maximum protection for worry-free travel",
    features: [
      { text: "Trip cancellation up to $30,000", included: true },
      { text: "Emergency medical up to $500,000", included: true },
      { text: "Baggage loss/delay up to $5,000", included: true },
      { text: "Travel delay ($300/day, max 10 days)", included: true },
      { text: "24/7 emergency assistance", included: true },
      { text: "Adventure sports coverage", included: true },
      { text: "Cancel for any reason (CFAR) — 75% refund", included: true },
      { text: "Rental car coverage up to $50,000", included: true },
    ],
    popular: false,
  },
]

const coverageHighlights = [
  {
    icon: Plane,
    title: "Trip Cancellation",
    description: "Reimbursement if you need to cancel your trip due to covered reasons such as illness, severe weather, or jury duty.",
  },
  {
    icon: Heart,
    title: "Emergency Medical",
    description: "Coverage for emergency medical treatment, hospital stays, and medical evacuation while traveling abroad.",
  },
  {
    icon: Umbrella,
    title: "Baggage Protection",
    description: "Compensation for lost, stolen, or delayed baggage, including essential items you need to purchase.",
  },
  {
    icon: AlertTriangle,
    title: "Travel Delay",
    description: "Reimbursement for additional expenses like meals and accommodation when your trip is delayed by covered events.",
  },
]

export default function TravelInsurancePage() {
  return (
    <main className="relative min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              <Shield className="h-4 w-4" />
              Travel Insurance
            </div>
            <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Travel With <span className="text-primary">Peace of Mind</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Protect your trip investment with comprehensive travel insurance. From trip cancellations to medical emergencies, we&apos;ve got you covered wherever your adventures take you.
            </p>
          </div>
        </div>
      </section>

      {/* Coverage Highlights */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {coverageHighlights.map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-card p-6 hover:shadow-lg transition-shadow">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
              Choose Your Coverage
            </h2>
            <p className="mt-4 text-muted-foreground">
              Select the plan that best fits your travel needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {coveragePlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border bg-card p-8 ${
                  plan.popular
                    ? "border-primary shadow-xl ring-2 ring-primary/20"
                    : "border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </div>
                )}
                <h3 className="font-serif text-2xl font-bold text-foreground">{plan.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-serif text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground/40 shrink-0 mt-0.5" />
                      )}
                      <span className={feature.included ? "text-foreground text-sm" : "text-muted-foreground/50 text-sm"}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-8 w-full rounded-full py-3 font-semibold transition-colors ${
                    plan.popular
                      ? "bg-primary text-white hover:bg-primary/90"
                      : "border border-border text-foreground hover:bg-primary hover:text-white hover:border-primary"
                  }`}
                >
                  Get {plan.name} Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
              How Travel Insurance Works
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Choose Your Plan",
                description: "Select the coverage level that matches your trip type, destination, and budget.",
              },
              {
                step: "02",
                title: "Travel With Confidence",
                description: "Enjoy your trip knowing you're protected against unexpected events and emergencies.",
              },
              {
                step: "03",
                title: "File a Claim",
                description: "If something goes wrong, file a claim online or call our 24/7 support line for immediate assistance.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 font-serif text-2xl font-bold text-primary">
                  {item.step}
                </div>
                <h3 className="mt-6 font-semibold text-foreground text-lg">{item.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-3xl bg-foreground p-12 text-center lg:p-16">
            <Shield className="h-12 w-12 text-accent mx-auto" />
            <h2 className="mt-6 font-serif text-3xl font-bold text-background sm:text-4xl">
              Ready to Protect Your Trip?
            </h2>
            <p className="mt-4 text-background/60 max-w-xl mx-auto">
              Add travel insurance during checkout or contact our team for personalized coverage recommendations.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/destinations"
                className="rounded-full bg-accent px-8 py-4 font-semibold text-foreground transition-colors hover:bg-accent/90"
              >
                Browse Destinations
              </Link>
              <Link
                href="/help-center"
                className="rounded-full border border-background/20 px-8 py-4 font-semibold text-background transition-colors hover:bg-background/10"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
