"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import React from "react"
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
  Heart,
  MapPin,
  Globe,
  Banknote,
  ChevronDown,
  Map,
  ShieldCheck,
  X
} from "lucide-react"
import { getDestinationBySlug } from "@/lib/destinations-data"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

// Booking form data interface
interface BookingFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  travelers: number
  preferredDate: string
  endDate: string
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

// Hero Section
function HeroSection({ destination }: { destination: NonNullable<ReturnType<typeof getDestinationBySlug>> }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={ref} className="relative h-[50vh] md:h-[60vh] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src={destination.heroImage}
          alt={destination.name}
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
        <Link href={`/destinations/${destination.id}`}>
          <Button variant="ghost" size="sm" className="text-white hover:text-white hover:bg-white/20 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Destination
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
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-sm text-white">
                <MapPin className="h-3.5 w-3.5" />
                {destination.country}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/90 px-3 py-1 text-sm font-medium text-foreground">
                <Star className="h-3.5 w-3.5 fill-current" />
                {destination.rating} ({destination.reviewCount.toLocaleString()})
              </span>
            </motion.div>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Book Your Trip to {destination.name}
            </h1>

            <div className="flex flex-wrap gap-6 text-white/70">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{destination.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>Best: {destination.bestTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                <span>{destination.continent}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Destination Summary Card
function DestinationSummary({ destination }: { destination: NonNullable<ReturnType<typeof getDestinationBySlug>> }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className="p-6 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border/50"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="relative h-16 w-16 rounded-2xl overflow-hidden">
          <Image
            src={destination.heroImage}
            alt={destination.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="font-semibold text-lg">{destination.name}</h3>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" />
            {destination.country}, {destination.continent}
          </p>
        </div>
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Duration</span>
          <span className="font-medium">{destination.duration}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Best Time</span>
          <span className="font-medium">{destination.bestTime}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Language</span>
          <span className="font-medium">{destination.language}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Currency</span>
          <span className="font-medium">{destination.currency}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Price</span>
          <span className="font-bold text-primary">{destination.price} / person</span>
        </div>
      </div>

      <div className="border-t border-border/50 pt-4">
        <h4 className="font-semibold mb-3">What&apos;s Included</h4>
        <ul className="space-y-2">
          {destination.included.slice(0, 4).map((item, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="h-4 w-4 text-primary shrink-0" />
              {item}
            </li>
          ))}
          {destination.included.length > 4 && (
            <li className="text-sm text-primary font-medium pl-6">
              +{destination.included.length - 4} more included
            </li>
          )}
        </ul>
      </div>
    </motion.div>
  )
}

// Gallery Preview
function GalleryPreview({ images, name }: { images: string[]; name: string }) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)

  const previewImages = images.slice(0, 4)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="rounded-3xl overflow-hidden border border-border/50"
    >
      <div className="p-4 border-b border-border/50">
        <h4 className="font-semibold flex items-center gap-2">
          <Camera className="h-4 w-4 text-primary" />
          Gallery Preview
        </h4>
      </div>
      <div className="grid grid-cols-2 gap-1">
        {previewImages.map((img, i) => (
          <div
            key={i}
            className="relative aspect-square cursor-pointer group"
            onClick={() => { setSelectedImage(i); setLightboxOpen(true) }}
          >
            <Image src={img} alt={`${name} ${i + 1}`} fill className="object-cover" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">View</span>
            </div>
          </div>
        ))}
      </div>
      {images.length > 4 && (
        <button
          onClick={() => { setSelectedImage(0); setLightboxOpen(true) }}
          className="w-full p-3 text-sm text-primary font-medium hover:bg-primary/5 transition-colors"
        >
          View all {images.length} photos
        </button>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-white/70 z-10"
              onClick={() => setLightboxOpen(false)}
            >
              <X className="h-8 w-8" />
            </button>
            <div className="relative w-full max-w-4xl aspect-[3/2]">
              <Image
                src={images[selectedImage]}
                alt={`${name} photo`}
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setSelectedImage(i) }}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${i === selectedImage ? "bg-white" : "bg-white/40"}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// Itinerary Preview
function ItineraryPreview({ itinerary }: { itinerary: { day: number; title: string; description: string }[] }) {
  const [expandedDay, setExpandedDay] = useState<number | null>(1)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="rounded-3xl border border-border/50 overflow-hidden"
    >
      <div className="p-4 border-b border-border/50">
        <h4 className="font-semibold flex items-center gap-2">
          <Map className="h-4 w-4 text-primary" />
          Day-by-Day Itinerary
        </h4>
      </div>
      <div className="divide-y divide-border/50">
        {itinerary.map((item) => (
          <div key={item.day}>
            <button
              onClick={() => setExpandedDay(expandedDay === item.day ? null : item.day)}
              className="w-full flex items-center gap-3 p-4 text-left hover:bg-secondary/30 transition-colors"
            >
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-sm font-bold text-primary-foreground">{item.day}</span>
              </div>
              <span className="flex-1 font-medium text-sm">{item.title}</span>
              <motion.div
                animate={{ rotate: expandedDay === item.day ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </motion.div>
            </button>
            <AnimatePresence>
              {expandedDay === item.day && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-4 pb-4 pl-[3.75rem] text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

// Booking Form Component
function BookingForm({ destination }: { destination: NonNullable<ReturnType<typeof getDestinationBySlug>> }) {
  const [formData, setFormData] = useState<BookingFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    travelers: 2,
    preferredDate: "",
    endDate: "",
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
          Thank you for your booking request for {destination.name}. Our travel experts will contact you within 24 hours to confirm your reservation and discuss the details of your {destination.duration} trip.
        </p>
        <div className="space-y-3">
          <Link href={`/destinations/${destination.id}`}>
            <Button className="w-full rounded-full gap-2">
              Return to Destination
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
            <Label htmlFor="preferredDate">Start Date *</Label>
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
          <div className="space-y-2">
            <Label htmlFor="endDate">End Date</Label>
            <Input
              id="endDate"
              name="endDate"
              type="date"
              value={formData.endDate}
              onChange={handleChange}
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
            placeholder="Tell us about any dietary restrictions, accessibility needs, room preferences, or special occasions..."
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

// Price Breakdown
function PriceBreakdown({ destination, travelers }: { destination: NonNullable<ReturnType<typeof getDestinationBySlug>>; travelers: number }) {
  const basePrice = parseInt(destination.price.replace(/[^0-9]/g, "")) || 0
  const total = basePrice * Math.max(1, travelers)
  const taxRate = 0.05
  const taxes = Math.round(total * taxRate)
  const grandTotal = total + taxes

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="p-6 rounded-3xl bg-secondary/30 border border-border/50"
    >
      <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
        <CreditCard className="h-5 w-5 text-primary" />
        Price Breakdown
      </h3>

      <div className="space-y-3 mb-4">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Base Price per Person</span>
          <span>${basePrice.toLocaleString()}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Number of Travelers</span>
          <span>&times; {travelers}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Subtotal</span>
          <span>${total.toLocaleString()}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Taxes & Fees (5%)</span>
          <span>${taxes.toLocaleString()}</span>
        </div>
        <div className="h-px bg-border/50" />
        <div className="flex items-center justify-between font-bold text-xl">
          <span>Total</span>
          <span className="text-primary">${grandTotal.toLocaleString()}</span>
        </div>
      </div>

      <p className="text-xs text-muted-foreground text-center">
        *Final price may vary based on accommodations, seasonal pricing, and optional add-ons
      </p>
    </motion.div>
  )
}

// Highlights Section
function HighlightsSection({ highlights }: { highlights: string[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="rounded-3xl border border-border/50 overflow-hidden"
    >
      <div className="p-4 border-b border-border/50">
        <h4 className="font-semibold flex items-center gap-2">
          <Star className="h-4 w-4 text-primary" />
          Trip Highlights
        </h4>
      </div>
      <div className="p-4 space-y-3">
        {highlights.map((highlight, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="mt-0.5 flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
              <Check className="h-3 w-3 text-primary" />
            </div>
            <span className="text-sm text-foreground">{highlight}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

// All Included Items
function IncludedFullSection({ included }: { included: string[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35 }}
      className="rounded-3xl border border-border/50 overflow-hidden"
    >
      <div className="p-4 border-b border-border/50">
        <h4 className="font-semibold flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-primary" />
          What&apos;s Included
        </h4>
      </div>
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {included.map((item, index) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            <Check className="h-4 w-4 text-primary shrink-0" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

// Quick Facts
function QuickFacts({ destination }: { destination: NonNullable<ReturnType<typeof getDestinationBySlug>> }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25 }}
      className="rounded-3xl border border-border/50 overflow-hidden"
    >
      <div className="p-4 border-b border-border/50">
        <h4 className="font-semibold flex items-center gap-2">
          <Globe className="h-4 w-4 text-primary" />
          Quick Facts
        </h4>
      </div>
      <div className="p-4 space-y-4">
        <div className="flex items-center gap-3">
          <Globe className="h-5 w-5 text-primary" />
          <div>
            <p className="text-xs text-muted-foreground">Continent</p>
            <p className="font-medium text-sm">{destination.continent}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Banknote className="h-5 w-5 text-primary" />
          <div>
            <p className="text-xs text-muted-foreground">Currency</p>
            <p className="font-medium text-sm">{destination.currency}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Users className="h-5 w-5 text-primary" />
          <div>
            <p className="text-xs text-muted-foreground">Language</p>
            <p className="font-medium text-sm">{destination.language}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Calendar className="h-5 w-5 text-primary" />
          <div>
            <p className="text-xs text-muted-foreground">Best Time to Visit</p>
            <p className="font-medium text-sm">{destination.bestTime}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Main Page Component
export default function DestinationBookingPage({ params }: { params: Promise<{ slug: string }> }) {
  return <DestinationBookingContent params={params} />
}

function DestinationBookingContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params)
  const destination = getDestinationBySlug(slug)

  if (!destination) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <HeroSection destination={destination} />

      {/* Main Content */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Booking Form - 2/3 width */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="p-6 md:p-8 rounded-3xl bg-card border border-border/50"
              >
                <h2 className="text-2xl font-bold mb-2">Complete Your Booking</h2>
                <p className="text-muted-foreground mb-8">
                  Fill in your details below and our travel experts will get back to you within 24 hours to confirm your {destination.name} adventure.
                </p>

                <BookingForm destination={destination} />
              </motion.div>

              {/* Trip Details Below Form */}
              <HighlightsSection highlights={destination.highlights} />
              <IncludedFullSection included={destination.included} />
              <ItineraryPreview itinerary={destination.itinerary} />
              <GalleryPreview images={destination.gallery} name={destination.name} />
            </div>

            {/* Sidebar - 1/3 width */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="sticky top-24 space-y-6"
              >
                <DestinationSummary destination={destination} />
                <PriceBreakdown destination={destination} travelers={2} />
                <QuickFacts destination={destination} />

                {/* Why Book With Us */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="p-6 rounded-3xl bg-gradient-to-br from-accent/10 to-primary/10 border border-border/50"
                >
                  <h3 className="font-semibold mb-4">Why Travel With Us?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Plane className="h-3 w-3 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Expert Local Guides</p>
                        <p className="text-xs text-muted-foreground">Knowledgeable guides who know every hidden gem</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Hotel className="h-3 w-3 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Premium Accommodations</p>
                        <p className="text-xs text-muted-foreground">Hand-picked hotels and resorts</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Utensils className="h-3 w-3 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Authentic Experiences</p>
                        <p className="text-xs text-muted-foreground">Local cuisine, culture, and traditions</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Camera className="h-3 w-3 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">24/7 Travel Support</p>
                        <p className="text-xs text-muted-foreground">Always available throughout your journey</p>
                      </div>
                    </li>
                  </ul>
                </motion.div>

                {/* Rating & Reviews */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                  className="p-6 rounded-3xl border border-border/50 text-center"
                >
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < Math.floor(destination.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <p className="text-2xl font-bold">{destination.rating}/5</p>
                  <p className="text-sm text-muted-foreground">
                    Based on {destination.reviewCount.toLocaleString()} traveler reviews
                  </p>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Have Questions About {destination.name}?</h2>
            <p className="text-muted-foreground mb-6">
              Our travel experts are here to help you plan the perfect trip
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/destinations/${destination.id}`}>
                <Button variant="outline" className="rounded-full gap-2">
                  View Full Details
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
