import { Header } from "@/components/travel/header"
import { Footer } from "@/components/travel/footer"
import Link from "next/link"
import { CalendarX, Clock, DollarSign, AlertCircle, CheckCircle, HelpCircle, ArrowRight } from "lucide-react"

const cancellationTiers = [
  {
    timeframe: "60+ days before departure",
    refund: "Full refund",
    fee: "No cancellation fee",
    color: "bg-green-500/10 text-green-600 border-green-500/20",
  },
  {
    timeframe: "30–59 days before departure",
    refund: "75% refund",
    fee: "25% cancellation fee",
    color: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
  },
  {
    timeframe: "15–29 days before departure",
    refund: "50% refund",
    fee: "50% cancellation fee",
    color: "bg-orange-500/10 text-orange-600 border-orange-500/20",
  },
  {
    timeframe: "7–14 days before departure",
    refund: "25% refund",
    fee: "75% cancellation fee",
    color: "bg-red-500/10 text-red-600 border-red-500/20",
  },
  {
    timeframe: "Less than 7 days / No-show",
    refund: "No refund",
    fee: "100% cancellation fee",
    color: "bg-red-500/10 text-red-700 border-red-500/30",
  },
]

export default function CancellationPolicyPage() {
  return (
    <main className="relative min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              <CalendarX className="h-4 w-4" />
              Cancellation Policy
            </div>
            <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Flexible <span className="text-primary">Cancellation</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              We understand that plans can change. Our cancellation policy is designed to be fair and transparent, giving you flexibility while protecting your travel investment.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Last updated: April 2026
            </p>
          </div>
        </div>
      </section>

      {/* Refund Tiers */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
              Cancellation Timeline
            </h2>
            <p className="mt-4 text-muted-foreground">
              Refund amounts depend on when you cancel relative to your departure date.
            </p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {cancellationTiers.map((tier, idx) => (
              <div
                key={idx}
                className={`rounded-xl border p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 ${tier.color}`}
              >
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 shrink-0" />
                  <span className="font-semibold">{tier.timeframe}</span>
                </div>
                <div className="flex items-center gap-6 sm:text-right">
                  <div>
                    <p className="text-xs uppercase tracking-wider opacity-70">Refund</p>
                    <p className="font-bold">{tier.refund}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider opacity-70">Fee</p>
                    <p className="font-bold">{tier.fee}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Cancel */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
              How to Cancel Your Booking
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Log In to Your Account",
                description: "Sign in to your Wanderlust account and navigate to 'My Trips' in your dashboard.",
              },
              {
                step: "2",
                title: "Select Your Booking",
                description: "Find the trip you want to cancel and click 'Cancel Booking'. Review the refund amount shown.",
              },
              {
                step: "3",
                title: "Confirm Cancellation",
                description: "Confirm your cancellation. You'll receive an email with your refund details and timeline.",
              },
            ].map((item) => (
              <div key={item.step} className="rounded-2xl border border-border bg-card p-6 text-center">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Circumstances */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl text-center mb-12">
              Special Circumstances
            </h2>

            <div className="space-y-6">
              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10 shrink-0">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Force Majeure Events</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      If your trip is cancelled due to natural disasters, pandemics, government travel bans, or other events beyond our control, you will receive a full refund or the option to rebook at no additional cost. We will notify affected travelers as soon as possible.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 shrink-0">
                    <DollarSign className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Wanderlust-Initiated Cancellations</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      If we cancel your trip for any reason (e.g., insufficient bookings, safety concerns), you will receive a 100% refund or the option to transfer to another trip of equal or greater value at no extra charge.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10 shrink-0">
                    <AlertCircle className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Medical Emergencies</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      If you or an immediate family member experiences a medical emergency that prevents travel, we will provide a full refund with appropriate documentation (doctor&apos;s note or hospital records). Contact our support team as soon as possible.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-500/10 shrink-0">
                    <Clock className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Date Changes</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      Instead of cancelling, you may request a date change up to 14 days before departure. Date changes are free for the first request; subsequent changes incur a $50 administrative fee. New dates are subject to availability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Refund Timeline */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl mb-8">
              Refund Processing
            </h2>
            <div className="rounded-2xl border border-border bg-card p-8">
              <p className="text-muted-foreground leading-relaxed">
                Refunds are processed within <strong className="text-foreground">5–10 business days</strong> from the date of cancellation confirmation. The refund will be credited to the original payment method used during booking. Depending on your bank or credit card provider, it may take an additional 3–5 business days for the refund to appear in your account.
              </p>
              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-primary">
                <HelpCircle className="h-4 w-4" />
                <span>Questions about your refund? <Link href="/help-center" className="underline hover:no-underline">Contact our support team</Link></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-3xl bg-foreground p-12 text-center lg:p-16">
            <h2 className="font-serif text-3xl font-bold text-background sm:text-4xl">
              Protect Against the Unexpected
            </h2>
            <p className="mt-4 text-background/60 max-w-xl mx-auto">
              Add travel insurance to your booking for added protection, including Cancel for Any Reason (CFAR) coverage.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/travel-insurance"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-semibold text-foreground transition-colors hover:bg-accent/90"
              >
                View Insurance Plans
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/help-center"
                className="rounded-full border border-background/20 px-8 py-4 font-semibold text-background transition-colors hover:bg-background/10"
              >
                Visit Help Center
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
