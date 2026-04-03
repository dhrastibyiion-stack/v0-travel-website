"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { 
  ArrowLeft, 
  Calendar, 
  Users, 
  Clock, 
  Check,
  Star,
  Phone,
  Mail,
  User,
  MessageSquare,
  Plane,
  Hotel,
  Utensils,
  Camera,
  ChevronRight,
  Send,
  CreditCard,
  Shield,
  Heart
} from "lucide-react"
import { getExperienceBySlug, getExperienceIcon } from "@/lib/experiences-data"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"

// Map slugs to hero images
const heroImages: Record<string, string> = {
  "cultural-tours": "/images/hero-travel.jpg",
  "adventure-trips": "/images/morocco.jpg",
  "beach-getaways": "/images/bali.jpg",
  "eco-tourism": "/images/santorini.jpg",
  "photography-tours": "/images/tokyo.jpg",
  "culinary-journeys": "/images/patagonia.jpg"
}

// Booking form data interface
interface BookingFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  travelers: number
  preferredDate: string
  specialRequests: string
  agreeToTerms: boolean
}

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] } }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
}

// Hero Section with Booking Header
function HeroSection({ experience }: { experience: NonNullable<ReturnType<typeof getExperienceBySlug>> }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const Icon = getExperienceIcon(experience.icon)

  return (
    <section ref={ref} className="relative h-[50vh] md:h-[60vh] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src={heroImages[experience.slug] || "/images/hero-travel.jpg"}
          alt={experience.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
      </motion.div>
      
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute left-6 top-6 md:left-10 md:top-10 z-10"
      >
        <Link href={`/experiences/${experience.slug}`}>
          <Button variant="ghost" size="sm" className="text-white hover:text-white hover:bg-white/20 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Experience
          </Button>
        </Link>
      </motion.div>

      {/* Content */}
      <div className="absolute inset-0 flex items-end pb-12 md:pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="inline-flex items-center gap-1 rounded-full bg-white/20 px-3 py-1 text-sm text-white">
                <Icon className="h-4 w-4" />
                {experience.category}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-sm text-white">
                <Star className="h-3 w-3 fill-current" />
                Featured
              </span>
            </motion.div>
            
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Book Your {experience.title} Experience
            </h1>
            
            <div className="flex flex-wrap gap-6 text-white/70">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{experience.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>Best: {experience.bestSeason}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>Group or Private</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Experience Summary Card
function ExperienceSummary({ experience }: { experience: NonNullable<ReturnType<typeof getExperienceBySlug>> }) {
  const Icon = getExperienceIcon(experience.icon)
  
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className="p-6 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border/50"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/20">
          <Icon className="h-7 w-7 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-lg">{experience.title}</h3>
          <p className="text-sm text-muted-foreground">{experience.category}</p>
        </div>
      </div>
      
      <div className="space-y-3 mb-6">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Duration</span>
          <span className="font-medium">{experience.duration}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Best Season</span>
          <span className="font-medium">{experience.bestSeason}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Price</span>
          <span className="font-bold text-primary">{experience.price}</span>
        </div>
      </div>

      <div className="border-t border-border/50 pt-4">
        <h4 className="font-semibold mb-3">What's Included</h4>
        <ul className="space-y-2">
          {experience.included.slice(0, 4).map((item, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="h-4 w-4 text-primary shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

// Booking Form Component
function BookingForm({ experience }: { experience: NonNullable<ReturnType<typeof getExperienceBySlug>> }) {
  const [formData, setFormData] = useState<BookingFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    travelers: 2,
    preferredDate: "",
    specialRequests: "",
    agreeToTerms: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border/50 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6"
        >
          <Check className="h-10 w-10 text-primary" />
        </motion.div>
        <h3 className="text-2xl font-bold mb-2">Booking Request Sent!</h3>
        <p className="text-muted-foreground mb-6">
          Thank you for your booking request for {experience.title}. Our team will contact you within 24 hours to confirm your reservation and discuss the details.
        </p>
        <div className="space-y-3">
          <Link href={`/experiences/${experience.slug}`}>
            <Button className="w-full rounded-full gap-2">
              Return to Experience
              <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/">
            <Button variant="outline" className="w-full rounded-full">
              Back to Home
            </Button>
          </Link>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.form
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* Personal Information */}
      <motion.div variants={fadeInUp}>
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <User className="h-5 w-5 text-primary" />
          Personal Information
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name *</Label>
            <Input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="John"
              required
              className="rounded-xl"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name *</Label>
            <Input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Doe"
              required
              className="rounded-xl"
            />
          </div>
        </div>
      </motion.div>

      {/* Contact Information */}
      <motion.div variants={fadeInUp}>
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Mail className="h-5 w-5 text-primary" />
          Contact Details
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
              className="rounded-xl"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 123-4567"
              required
              className="rounded-xl"
            />
          </div>
        </div>
      </motion.div>

      {/* Trip Details */}
      <motion.div variants={fadeInUp}>
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Calendar className="h-5 w-5 text-primary" />
          Trip Details
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="travelers">Number of Travelers *</Label>
            <Input
              id="travelers"
              name="travelers"
              type="number"
              min={1}
              max={20}
              value={formData.travelers}
              onChange={handleChange}
              required
              className="rounded-xl"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="preferredDate">Preferred Date *</Label>
            <Input
              id="preferredDate"
              name="preferredDate"
              type="date"
              value={formData.preferredDate}
              onChange={handleChange}
              required
              className="rounded-xl"
            />
          </div>
        </div>
      </motion.div>

      {/* Special Requests */}
      <motion.div variants={fadeInUp}>
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-primary" />
          Special Requests
        </h3>
        
        <div className="space-y-2">
          <Label htmlFor="specialRequests">Any special requirements or preferences?</Label>
          <Textarea
            id="specialRequests"
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleChange}
            placeholder="Tell us about any dietary restrictions, accessibility needs, or preferences..."
            rows={4}
            className="rounded-xl resize-none"
          />
        </div>
      </motion.div>

      {/* Terms Agreement */}
      <motion.div variants={fadeInUp} className="flex items-start gap-3">
        <input
          type="checkbox"
          id="agreeToTerms"
          name="agreeToTerms"
          checked={formData.agreeToTerms}
          onChange={(e) => setFormData(prev => ({ ...prev, agreeToTerms: e.target.checked }))}
          required
          className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary"
        />
        <Label htmlFor="agreeToTerms" className="text-sm font-normal text-muted-foreground cursor-pointer">
          I agree to the booking terms and cancellation policy. I understand that this is a booking request and confirmation is subject to availability.
        </Label>
      </motion.div>

      {/* Submit Button */}
      <motion.div variants={fadeInUp}>
        <Button
          type="submit"
          disabled={isSubmitting || !formData.agreeToTerms}
          className="w-full rounded-full h-14 text-lg gap-2"
        >
          {isSubmitting ? (
            <>
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
              Processing...
            </>
          ) : (
            <>
              Send Booking Request
              <Send className="h-5 w-5" />
            </>
          )}
        </Button>
      </motion.div>

      {/* Trust Badges */}
      <motion.div 
        variants={fadeInUp}
        className="flex flex-wrap justify-center gap-4 pt-4"
      >
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Shield className="h-4 w-4 text-primary" />
          <span>Secure Booking</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <CreditCard className="h-4 w-4 text-primary" />
          <span>No Hidden Fees</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Heart className="h-4 w-4 text-primary" />
          <span>Free Cancellation</span>
        </div>
      </motion.div>
    </motion.form>
  )
}

// Price Breakdown Section
function PriceBreakdown({ experience, travelers }: { experience: NonNullable<ReturnType<typeof getExperienceBySlug>>; travelers: number }) {
  // Extract price value from string like "From $2,500"
  const basePrice = parseInt(experience.price.replace(/[^0-9]/g, "")) || 2500
  const total = basePrice * Math.max(1, travelers)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-6 rounded-3xl bg-secondary/30 border border-border/50"
    >
      <h3 className="font-semibold text-lg mb-4">Price Breakdown</h3>
      
      <div className="space-y-3 mb-4">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Base Price per Person</span>
          <span>${basePrice.toLocaleString()}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Number of Travelers</span>
          <span>× {travelers}</span>
        </div>
        <div className="h-px bg-border/50" />
        <div className="flex items-center justify-between font-bold text-xl">
          <span>Total</span>
          <span className="text-primary">${total.toLocaleString()}</span>
        </div>
      </div>
      
      <p className="text-xs text-muted-foreground text-center">
        *Final price may vary based on accommodations and seasonal pricing
      </p>
    </motion.div>
  )
}

// Main Page Component
export default function BookingPage({ params }: { params: Promise<{ slug: string }> }) {
  // Since we can't use use() in this context directly, we'll handle it differently
  // Using a client component wrapper approach
  return <BookingPageContent params={params} />
}

import React from "react"

function BookingPageContent({ params }: { params: Promise<{ slug: string }> }) {
  // Use React.use() to unwrap the promise
  const { slug } = React.use(params)
  const experience = getExperienceBySlug(slug)

  if (!experience) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <HeroSection experience={experience} />
      
      {/* Main Content */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Booking Form - 2/3 width */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="p-6 md:p-8 rounded-3xl bg-card border border-border/50"
              >
                <h2 className="text-2xl font-bold mb-2">Complete Your Booking</h2>
                <p className="text-muted-foreground mb-8">
                  Fill in your details below and we'll get back to you within 24 hours
                </p>
                
                <BookingForm experience={experience} />
              </motion.div>
            </div>

            {/* Sidebar - 1/3 width */}
            <div className="lg:col-span-1 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="sticky top-24 space-y-6"
              >
                <ExperienceSummary experience={experience} />
                <PriceBreakdown experience={experience} travelers={2} />
                
                {/* Why Book With Us */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-3xl bg-gradient-to-br from-accent/10 to-primary/10 border border-border/50"
                >
                  <h3 className="font-semibold mb-4">Why Travel With Us?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Plane className="h-3 w-3 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Expert Guides</p>
                        <p className="text-xs text-muted-foreground">Local experts with deep knowledge</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Hotel className="h-3 w-3 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Premium Stays</p>
                        <p className="text-xs text-muted-foreground">Curated accommodations</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Utensils className="h-3 w-3 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Authentic Experiences</p>
                        <p className="text-xs text-muted-foreground">Local cuisine & culture</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Camera className="h-3 w-3 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">24/7 Support</p>
                        <p className="text-xs text-muted-foreground">Always here to help</p>
                      </div>
                    </li>
                  </ul>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 bg-secondary/30">
        <div className="mx-auto max-w-4xl text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Have Questions?</h2>
            <p className="text-muted-foreground mb-6">
              Our travel experts are here to help you plan the perfect trip
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/experiences/${experience.slug}`}>
                <Button variant="outline" className="rounded-full gap-2">
                  Learn More
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
              <Button className="rounded-full gap-2 bg-white text-black hover:bg-white/90">
                Contact Us
                <Phone className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}