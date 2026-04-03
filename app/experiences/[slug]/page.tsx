"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  MapPin, 
  Check,
  Star,
  ChevronRight
} from "lucide-react"
import { getExperienceBySlug, getAllExperienceSlugs, getExperienceIcon } from "@/lib/experiences-data"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"

// Map slugs to hero images
const heroImages: Record<string, string> = {
  "cultural-tours": "/images/hero-travel.jpg",
  "adventure-trips": "/images/morocco.jpg",
  "beach-getaways": "/images/bali.jpg",
  "eco-tourism": "/images/santorini.jpg",
  "photography-tours": "/images/tokyo.jpg",
  "culinary-journeys": "/images/patagonia.jpg"
}


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
    <section ref={ref} className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src={heroImages[experience.slug] || "/images/hero-travel.jpg"}
          alt={experience.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      </motion.div>
      
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute left-6 top-6 md:left-10 md:top-10 z-10"
      >
        <Link href="/">
          <Button variant="ghost" size="sm" className="text-white hover:text-white hover:bg-white/20 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </motion.div>

      {/* Content */}
      <div className="absolute inset-0 flex items-end pb-12 md:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1 rounded-full bg-white/20 px-3 py-1 text-sm text-white">
                <Icon className="h-4 w-4" />
                {experience.category}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-sm text-white">
                <Star className="h-3 w-3 fill-current" />
                Featured Experience
              </span>
            </div>
            
            <h1 className="font-serif text-4xl font-bold text-white md:text-5xl lg:text-7xl mb-6">
              {experience.title}
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 max-w-2xl">
              {experience.shortDescription}
            </p>

            <div className="flex flex-wrap gap-6 mt-8 text-white/70">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{experience.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>Best: {experience.bestSeason}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>Multiple Destinations</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Main Content
function MainContent({ experience }: { experience: NonNullable<ReturnType<typeof getExperienceBySlug>> }) {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">About This Experience</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {experience.fullDescription}
              </p>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Highlights</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {experience.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Included */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">What's Included</h2>
              <ul className="space-y-3">
                {experience.included.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="sticky top-24 space-y-6"
            >
              {/* Price Card */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border/50">
                <p className="text-sm text-muted-foreground mb-2">Starting from</p>
                <p className="text-3xl font-bold text-foreground">{experience.price}</p>
                <p className="text-sm text-muted-foreground mt-2">per person</p>
                <a href={`/experiences/${experience.slug}/book`}>
                  <Button className="w-full mt-6 rounded-full cursor-pointer">
                    Book Now
                  </Button>
                </a>
                <a href="#contact">
                  <Button variant="outline" className="w-full mt-3 rounded-full cursor-pointer">
                    Ask a Question
                  </Button>
                </a>
              </div>

              {/* Quick Info */}
              <div className="p-6 rounded-3xl bg-secondary/30 border border-border/50 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Duration</span>
                  <span className="font-semibold">{experience.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Best Season</span>
                  <span className="font-semibold">{experience.bestSeason}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Category</span>
                  <span className="font-semibold">{experience.category}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

// CTA Section
function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today to customize your perfect travel experience. Our experts are ready to help you plan an unforgettable adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full gap-2 bg-white text-black hover:bg-white/90">
              Contact Us
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full">
              View All Experiences
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Main Page Component
export default function ExperiencePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params)
  const experience = getExperienceBySlug(slug)

  if (!experience) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <HeroSection experience={experience} />
      <MainContent experience={experience} />
      <CTASection />
    </main>
  )
}

// Need to import React for use() hook
import React from "react"