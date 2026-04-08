import { Header } from "@/components/travel/header"
import { Footer } from "@/components/travel/footer"
import Link from "next/link"
import { Shield, Eye, Lock, Database, Cookie, Globe, Mail, Users, Bell, FileText, Trash2, Settings } from "lucide-react"

function TextWithLinks({ text }: { text: string }) {
  const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/g
  const phoneRegex = /(\+?1?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4})/g
  
  const parts = text.split(emailRegex)
  
  return (
    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
      {parts.map((part, i) => {
        if (i === 0) {
          const phoneParts = part.split(phoneRegex)
          return phoneParts.map((phonePart, j) => {
            if (phonePart && phonePart.match(phoneRegex)) {
              return (
                <a key={`phone-${j}`} href={`tel:${phonePart.replace(/\D/g, '')}`} className="text-primary hover:underline">{phonePart}</a>
              )
            }
            return phonePart
          })
        }
        const match = part.match(emailRegex)
        if (match) {
          const beforeEmail = part.slice(0, part.indexOf(match[0]))
          const afterEmail = part.slice(part.indexOf(match[0]) + match[0].length)
          const phonePartsAfter = afterEmail.split(phoneRegex)
          return (
            <span key={i}>
              {beforeEmail}
              <a href={`mailto:${match[0]}`} className="text-primary hover:underline">{match[0]}</a>
              {phonePartsAfter.map((phonePart, j) => {
                if (phonePart && phonePart.match(phoneRegex)) {
                  return (
                    <a key={`phone-after-${j}`} href={`tel:${phonePart.replace(/\D/g, '')}`} className="text-primary hover:underline">{phonePart}</a>
                  )
                }
                return phonePart
              })}
            </span>
          )
        }
        return part
      })}
    </p>
  )
}

const sections = [
  {
    id: "overview",
    title: "1. Privacy Overview",
    icon: Shield,
    content: [
      'At Wanderlust Travel ("Wanderlust", "we", "us", or "our"), we are committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our mobile application, or engage with our travel services (collectively, the "Services").',
      "We believe in transparency and want you to understand how your data is used. This policy applies to all users of our Services, including website visitors, registered users, and customers who book travel through our platform.",
    ],
  },
  {
    id: "collection",
    title: "2. Information We Collect",
    icon: Database,
    content: [
      "We collect information that you provide directly to us, including:\n\n• Personal identification information (name, email address, phone number, mailing address)\n• Travel document information (passport number, date of birth, nationality)\n• Payment information (credit card details, billing address)\n• Travel preferences and special requirements (dietary needs, accessibility requirements)\n• Communication records (emails, chat logs, phone call records)\n• Account credentials (username, password)",
      "We also automatically collect certain information when you use our Services:\n\n• Device information (IP address, browser type, operating system)\n• Usage data (pages visited, time spent on pages, click patterns)\n• Location data (with your consent, to provide location-based services)\n• Cookies and similar tracking technologies",
    ],
  },
  {
    id: "usage",
    title: "3. How We Use Your Information",
    icon: Eye,
    content: [
      "We use the information we collect for the following purposes:\n\n• Processing and managing your travel bookings\n• Communicating with you about your trips, including confirmations, updates, and travel advisories\n• Personalizing your experience and providing tailored travel recommendations\n• Processing payments and preventing fraud\n• Providing customer support and responding to inquiries\n• Sending marketing communications (with your consent)\n• Improving our Services, website, and user experience\n• Complying with legal obligations and enforcing our terms\n• Conducting analytics and research to better understand our users",
    ],
  },
  {
    id: "sharing",
    title: "4. Information Sharing & Disclosure",
    icon: Users,
    content: [
      "We may share your information with the following categories of third parties:\n\n• Travel service providers (airlines, hotels, tour operators, transfer companies) as necessary to fulfill your bookings\n• Payment processors to process transactions securely\n• Business partners who assist in providing our Services\n• Analytics providers to help us understand website usage\n• Legal authorities when required by law or to protect our rights",
      "We do not sell your personal information to third parties. All third-party service providers are contractually obligated to protect your data and use it only for the purposes specified by us.",
    ],
  },
  {
    id: "cookies",
    title: "5. Cookies & Tracking Technologies",
    icon: Cookie,
    content: [
      "We use cookies and similar tracking technologies to enhance your experience on our website:\n\n• Essential cookies: Required for the website to function properly\n• Analytics cookies: Help us understand how visitors interact with our website\n• Marketing cookies: Used to deliver relevant advertisements and track campaign performance\n• Preference cookies: Remember your settings and personalization choices",
      "You can control cookie preferences through your browser settings. Please note that disabling certain cookies may affect the functionality of our Services. For more information, see our Cookie Settings page accessible through the footer of our website.",
    ],
  },
  {
    id: "security",
    title: "6. Data Security",
    icon: Lock,
    content: [
      "We implement industry-standard security measures to protect your personal information, including:\n\n• SSL/TLS encryption for data in transit\n• AES-256 encryption for data at rest\n• Regular security audits and penetration testing\n• Access controls and authentication protocols\n• Employee training on data protection practices",
      "While we strive to protect your personal information, no method of electronic transmission or storage is 100% secure. We cannot guarantee absolute security but are committed to promptly addressing any security incidents that may occur.",
    ],
  },
  {
    id: "international",
    title: "7. International Data Transfers",
    icon: Globe,
    content: [
      "As a global travel company, your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws than your country.",
      "When we transfer your data internationally, we ensure appropriate safeguards are in place, including:\n\n• Standard Contractual Clauses approved by relevant authorities\n• Data Processing Agreements with all international partners\n• Compliance with applicable data protection frameworks (GDPR, CCPA, etc.)",
    ],
  },
  {
    id: "rights",
    title: "8. Your Privacy Rights",
    icon: Settings,
    content: [
      "Depending on your location, you may have the following rights regarding your personal information:\n\n• Right to access: Request a copy of the personal data we hold about you\n• Right to rectification: Request correction of inaccurate or incomplete data\n• Right to erasure: Request deletion of your personal data (subject to legal requirements)\n• Right to restriction: Request that we limit how we use your data\n• Right to data portability: Receive your data in a structured, machine-readable format\n• Right to object: Object to certain types of data processing\n• Right to withdraw consent: Withdraw consent for processing based on consent",
      "To exercise any of these rights, please contact us at privacy@wanderlust.travel. We will respond to your request within 30 days. We may need to verify your identity before processing your request.",
    ],
  },
  {
    id: "retention",
    title: "9. Data Retention",
    icon: Database,
    content: [
      "We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Specifically:\n\n• Account information: Retained for the duration of your account and up to 3 years after account deletion\n• Booking records: Retained for 7 years for tax and legal compliance purposes\n• Marketing preferences: Retained until you unsubscribe or withdraw consent\n• Usage data: Retained for up to 26 months for analytics purposes",
      "After the retention period expires, your data will be securely deleted or anonymized so that it can no longer be associated with you.",
    ],
  },
  {
    id: "children",
    title: "10. Children's Privacy",
    icon: Users,
    content: [
      "Our Services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have collected personal information from a child under 18, we will take steps to delete such information promptly.",
      "If you are a parent or guardian and believe your child has provided us with personal information, please contact us at privacy@wanderlust.travel.",
    ],
  },
  {
    id: "updates",
    title: "11. Policy Updates",
    icon: Bell,
    content: [
      'We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make material changes, we will notify you by:\n\n• Posting the updated policy on our website with a new "Last Updated" date\n• Sending an email notification to registered users\n• Displaying a prominent notice on our website or application',
      "We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.",
    ],
  },
  {
    id: "contact",
    title: "12. Contact Us",
    icon: Mail,
    content: [
      "If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:\n\nWanderlust Travel Inc.\nAttn: Privacy Officer\n123 Travel Street, Adventure City, CA 94102\nEmail: privacy@wanderlust.travel\nPhone: +1 (555) 123-4567",
      "For EU/EEA residents, you also have the right to lodge a complaint with your local data protection supervisory authority if you believe that we have not adequately addressed your concerns.",
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <main className="relative min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              <Shield className="h-4 w-4" />
              Privacy Policy
            </div>
            <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Privacy <span className="text-primary">Policy</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Your privacy matters to us. Learn how we collect, use, and protect your personal information when you use Wanderlust Travel services.
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
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

      {/* Privacy Content */}
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
                    <TextWithLinks key={idx} text={paragraph} />
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
              href="/terms-of-service"
              className="rounded-xl border border-border bg-card p-6 text-center hover:shadow-lg transition-shadow"
            >
              <FileText className="h-8 w-8 text-primary mx-auto" />
              <h3 className="mt-3 font-semibold text-foreground">Terms of Service</h3>
              <p className="mt-1 text-sm text-muted-foreground">Rules for using our services</p>
            </Link>
            <Link
              href="/cancellation-policy"
              className="rounded-xl border border-border bg-card p-6 text-center hover:shadow-lg transition-shadow"
            >
              <Trash2 className="h-8 w-8 text-primary mx-auto" />
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
