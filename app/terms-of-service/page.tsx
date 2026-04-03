import { Header } from "@/components/travel/header"
import { Footer } from "@/components/travel/footer"
import Link from "next/link"
import { FileText, Scale, Shield, AlertTriangle, Users, Globe, CreditCard, Mail } from "lucide-react"

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    icon: FileText,
    content: [
      'By accessing or using the Wanderlust Travel website, mobile application, or any of our services (collectively, the "Services"), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our Services.',
      "These Terms of Service constitute a legally binding agreement between you and Wanderlust Travel Inc. ('Wanderlust', 'we', 'us', or 'our'). We reserve the right to modify these terms at any time, and such modifications will be effective immediately upon posting on our website.",
    ],
  },
  {
    id: "eligibility",
    title: "2. Eligibility & Account Registration",
    icon: Users,
    content: [
      "You must be at least 18 years old to use our Services. By using our Services, you represent and warrant that you meet this age requirement and have the legal capacity to enter into these terms.",
      "When creating an account, you agree to provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.",
    ],
  },
  {
    id: "booking",
    title: "3. Bookings & Reservations",
    icon: Globe,
    content: [
      "All bookings made through our Services are subject to availability and confirmation. A booking is confirmed only when you receive a written confirmation from us via email. Until confirmation is received, no contract exists between you and Wanderlust for the provision of travel services.",
      "Prices displayed on our website are per person unless otherwise stated and are subject to change without notice until a booking is confirmed. Confirmed bookings will not be subject to price increases except in cases of government-imposed taxes or significant currency fluctuations beyond our control.",
      "You are responsible for ensuring that all traveler information provided at the time of booking is accurate, including full names (as they appear on travel documents), dates of birth, passport details, and any special requirements. Errors in booking information may result in additional fees or denial of travel.",
    ],
  },
  {
    id: "payments",
    title: "4. Payments & Pricing",
    icon: CreditCard,
    content: [
      "We accept payment via major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. A deposit of 20% of the total trip cost is required at the time of booking, with the remaining balance due 30 days prior to departure.",
      "For bookings made within 30 days of departure, full payment is required at the time of booking. Failure to pay the balance by the due date may result in cancellation of your booking, and our standard cancellation fees will apply.",
      "All prices are quoted in US Dollars (USD) unless otherwise specified. Prices include applicable taxes and fees unless explicitly noted. We are not responsible for currency exchange rate differences or bank transaction fees charged by your financial institution.",
    ],
  },
  {
    id: "cancellation",
    title: "5. Cancellations & Changes",
    icon: AlertTriangle,
    content: [
      "Cancellation and change requests must be submitted in writing through your account dashboard or via email to cancellations@wanderlust.travel. The effective date of cancellation is the date we receive your written notice.",
      "Refund amounts are determined by the cancellation timeline outlined in our Cancellation Policy. We strongly recommend purchasing travel insurance to protect against unexpected cancellations.",
      "Date changes and destination transfers are subject to availability and may incur administrative fees. See our Cancellation Policy page for detailed information on refund timelines and fees.",
    ],
  },
  {
    id: "liability",
    title: "6. Limitation of Liability",
    icon: Scale,
    content: [
      'Wanderlust acts as an intermediary between you and third-party service providers (airlines, hotels, tour operators, etc.). While we carefully select our partners, we are not liable for the acts, errors, omissions, representations, warranties, breaches, or negligence of any third-party supplier or for any personal injuries, death, property damage, or other damages or expenses resulting therefrom.',
      "Our total liability to you for any claim arising from or related to our Services shall not exceed the total amount paid by you for the specific booking giving rise to the claim. In no event shall we be liable for indirect, incidental, special, consequential, or punitive damages.",
      "We do not guarantee that our Services will be uninterrupted, timely, secure, or error-free. We reserve the right to modify, suspend, or discontinue any part of our Services at any time without notice.",
    ],
  },
  {
    id: "conduct",
    title: "7. User Conduct",
    icon: Shield,
    content: [
      "You agree to use our Services only for lawful purposes and in accordance with these Terms. You agree not to use our Services to transmit any material that is defamatory, offensive, or otherwise objectionable, or to engage in any activity that could damage, disable, or impair our Services.",
      "We reserve the right to terminate or suspend your account and access to our Services at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to us, other users, or third parties, or for any other reason.",
    ],
  },
  {
    id: "intellectual-property",
    title: "8. Intellectual Property",
    icon: FileText,
    content: [
      "All content on our website and Services, including text, graphics, logos, images, audio, video, software, and the compilation thereof, is the property of Wanderlust or its content suppliers and is protected by international copyright, trademark, and other intellectual property laws.",
      "You may not reproduce, distribute, modify, create derivative works from, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Services without our prior written consent.",
    ],
  },
  {
    id: "governing-law",
    title: "9. Governing Law & Disputes",
    icon: Scale,
    content: [
      "These Terms of Service shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.",
      "Any dispute arising from or relating to these Terms or our Services shall first be attempted to be resolved through good-faith negotiation. If the dispute cannot be resolved through negotiation, it shall be submitted to binding arbitration in San Francisco, California, in accordance with the rules of the American Arbitration Association.",
    ],
  },
  {
    id: "contact",
    title: "10. Contact Information",
    icon: Mail,
    content: [
      "If you have any questions about these Terms of Service, please contact us at:",
      "Wanderlust Travel Inc.\n123 Travel Street, Adventure City, CA 94102\nEmail: legal@wanderlust.travel\nPhone: +1 (555) 123-4567",
    ],
  },
]

export default function TermsOfServicePage() {
  return (
    <main className="relative min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              <FileText className="h-4 w-4" />
              Terms of Service
            </div>
            <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Terms of <span className="text-primary">Service</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Please read these terms carefully before using our services. By accessing Wanderlust Travel, you agree to be bound by these terms and conditions.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Effective Date: January 1, 2026 &nbsp;|&nbsp; Last Updated: April 2, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 bg-background border-b border-border">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
            Table of Contents
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-foreground hover:bg-muted transition-colors"
              >
                <section.icon className="h-4 w-4 text-primary shrink-0" />
                {section.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section) => (
              <div key={section.id} id={section.id} className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <section.icon className="h-5 w-5" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-foreground">{section.title}</h2>
                </div>
                <div className="space-y-4 pl-13">
                  {section.content.map((paragraph, idx) => (
                    <p key={idx} className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-foreground text-center mb-8">
            Related Policies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/privacy-policy"
              className="rounded-xl border border-border bg-card p-6 text-center hover:shadow-lg transition-shadow"
            >
              <Shield className="h-8 w-8 text-primary mx-auto" />
              <h3 className="mt-3 font-semibold text-foreground">Privacy Policy</h3>
              <p className="mt-1 text-sm text-muted-foreground">How we handle your data</p>
            </Link>
            <Link
              href="/cancellation-policy"
              className="rounded-xl border border-border bg-card p-6 text-center hover:shadow-lg transition-shadow"
            >
              <AlertTriangle className="h-8 w-8 text-primary mx-auto" />
              <h3 className="mt-3 font-semibold text-foreground">Cancellation Policy</h3>
              <p className="mt-1 text-sm text-muted-foreground">Refund and cancellation details</p>
            </Link>
            <Link
              href="/travel-insurance"
              className="rounded-xl border border-border bg-card p-6 text-center hover:shadow-lg transition-shadow"
            >
              <Shield className="h-8 w-8 text-primary mx-auto" />
              <h3 className="mt-3 font-semibold text-foreground">Travel Insurance</h3>
              <p className="mt-1 text-sm text-muted-foreground">Protect your trip investment</p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
