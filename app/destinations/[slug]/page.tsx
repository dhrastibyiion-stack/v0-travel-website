"use client"

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useRef, useState, use } from "react"
import Image from "next/image"
import Link from "next/link"
import { 
  ArrowLeft, 
  Star, 
  Calendar, 
  Clock, 
  MapPin, 
  Globe, 
  Banknote,
  Check,
  ChevronDown,
  ChevronRight,
  Users,
  Heart
} from "lucide-react"
import { getDestinationBySlug, getAllDestinationSlugs } from "@/lib/destinations-data"
import { countryBlogPosts, BlogPost } from "@/lib/blog-data"
import { notFound } from "next/navigation"

// Country mapping for blog guides
const countrySlugMap: Record<string, string> = {
  Greece: "greece",
  Italy: "italy",
  Japan: "japan",
  Thailand: "thailand",
  Kenya: "kenya",
  France: "france",
  Switzerland: "switzerland",
  Indonesia: "bali",
  Maldives: "maldives",
}
import { Button } from "@/components/ui/button"

// Hero Section with Parallax
function HeroSection({ destination }: { destination: NonNullable<ReturnType<typeof getDestinationBySlug>> }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={ref} className="relative h-[80vh] md:h-[90vh] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src={destination.heroImage}
          alt={destination.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </motion.div>
      
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="absolute top-6 left-6 z-20"
      >
        <Link href="/#destinations">
          <Button 
            variant="outline" 
            size="sm"
            className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Destinations
          </Button>
        </Link>
      </motion.div>

      {/* Hero Content */}
      <motion.div 
        style={{ opacity }}
        className="absolute inset-0 flex flex-col justify-end pb-16 md:pb-24"
      >
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-sm text-white">
                <MapPin className="h-3.5 w-3.5" />
                {destination.country}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/90 px-3 py-1 text-sm font-medium text-foreground">
                <Star className="h-3.5 w-3.5 fill-current" />
                {destination.rating} ({destination.reviewCount.toLocaleString()} reviews)
              </span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4">
              {destination.name}
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl">
              {destination.tagline}
            </p>
          </motion.div>

          {/* Quick Info Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-4 md:gap-8"
          >
            <div className="flex items-center gap-2 text-white/90">
              <Clock className="h-5 w-5" />
              <span>{destination.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Calendar className="h-5 w-5" />
              <span>Best: {destination.bestTime}</span>
            </div>
            <div className="text-3xl md:text-4xl font-bold text-white">
              {destination.price}
              <span className="text-base font-normal text-white/70 ml-2">per person</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex flex-col items-center gap-2 text-white/60"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}

// Gallery Section
function GallerySection({ images, name }: { images: string[], name: string }) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-10"
        >
          Gallery
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                index === 0 ? "md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto md:h-full" : "aspect-[4/3]"
              }`}
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image}
                alt={`${name} - Image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-medium">View</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-5xl aspect-[3/2]"
            >
              <Image
                src={images[selectedImage]}
                alt={`${name} - Image ${selectedImage + 1}`}
                fill
                className="object-contain"
              />
            </motion.div>
            <button 
              className="absolute top-6 right-6 text-white text-xl"
              onClick={() => setSelectedImage(null)}
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

// Overview Section
function OverviewSection({ destination }: { destination: NonNullable<ReturnType<typeof getDestinationBySlug>> }) {
  const countrySlug = countrySlugMap[destination.country]
  const countryGuide = countrySlug ? countryBlogPosts[countrySlug] : null

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                About {destination.name}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {destination.longDescription}
              </p>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                Trip Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {destination.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 flex-shrink-0 h-5 w-5 rounded-full bg-primary flex items-center justify-center">
                      <Check className="h-3 w-3 text-primary-foreground" />
                    </div>
                    <span className="text-foreground">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Country Guide Link */}
            {countryGuide && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-12"
              >
                <div className="bg-card rounded-2xl p-6 md:p-8 border border-border">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="relative aspect-[16/9] md:w-64 flex-shrink-0 rounded-xl overflow-hidden">
                      <Image
                        src={countryGuide.image}
                        alt={countryGuide.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-medium uppercase tracking-wider text-primary">
                        Country Guide
                      </span>
                      <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mt-2">
                        {countryGuide.title}
                      </h3>
                      <p className="text-muted-foreground mt-2 line-clamp-2">
                        {countryGuide.excerpt}
                      </p>
                      <Link href={`/blog/${countryGuide.id}`}>
                        <Button className="mt-4" variant="outline">
                          Read Full Guide
                          <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="sticky top-24 space-y-6"
            >
              {/* Quick Facts Card */}
              <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
                <h3 className="font-serif text-xl font-bold text-foreground mb-6">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Continent</p>
                      <p className="font-medium text-foreground">{destination.continent}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Banknote className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Currency</p>
                      <p className="font-medium text-foreground">{destination.currency}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Language</p>
                      <p className="font-medium text-foreground">{destination.language}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Best Time to Visit</p>
                      <p className="font-medium text-foreground">{destination.bestTime}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Booking Card */}
              <div className="bg-primary rounded-2xl p-6 text-primary-foreground">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold">{destination.price}</span>
                  <span className="text-primary-foreground/70">/ person</span>
                </div>
                <p className="text-primary-foreground/80 mb-6">{destination.duration}</p>
                
                <Link href={`/destinations/${destination.id}/book`}>
                  <Button 
                    size="lg" 
                    className="w-full bg-white text-primary hover:bg-white/90 font-semibold"
                  >
                    Book This Trip
                  </Button>
                </Link>
                
                <button className="w-full mt-3 flex items-center justify-center gap-2 text-primary-foreground/80 hover:text-white transition-colors">
                  <Heart className="h-4 w-4" />
                  Save to Wishlist
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

// What's Included Section
function IncludedSection({ included }: { included: string[] }) {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-10 text-center"
        >
          What&apos;s Included
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {included.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4 p-5 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <span className="text-foreground font-medium">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Itinerary Section
function ItinerarySection({ itinerary }: { itinerary: { day: number; title: string; description: string }[] }) {
  const [openDay, setOpenDay] = useState<number | null>(1)

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-center"
        >
          Day-by-Day Itinerary
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto"
        >
          Explore your journey with our carefully crafted daily schedule
        </motion.p>

        <div className="space-y-4">
          {itinerary.map((item, index) => (
            <motion.div
              key={item.day}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-card rounded-xl border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpenDay(openDay === item.day ? null : item.day)}
                className="w-full flex items-center gap-4 p-5 text-left hover:bg-secondary/50 transition-colors"
              >
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-lg font-bold text-primary-foreground">{item.day}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground text-lg">{item.title}</h3>
                </div>
                <motion.div
                  animate={{ rotate: openDay === item.day ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openDay === item.day && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pl-[5.5rem]">
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// CTA Section
function CTASection({ name, slug }: { name: string; slug: string }) {
  return (
    <section className="py-16 md:py-24 bg-foreground text-background">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-5xl font-bold mb-6"
        >
          Ready to Explore {name}?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-background/70 text-lg mb-10 max-w-2xl mx-auto"
        >
          Book your dream trip today and let us create unforgettable memories for you. Our travel experts are ready to customize your perfect itinerary.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href={`/destinations/${slug}/book`}>
            <Button size="lg" className="bg-white text-foreground hover:bg-white/90 px-8">
              Book Now
            </Button>
          </Link>
          <Button size="lg" className="bg-white text-black hover:bg-white/90 px-8">
            Contact Us
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

// Main Page Component
export default function DestinationPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params)
  const destination = getDestinationBySlug(resolvedParams.slug)

  if (!destination) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <HeroSection destination={destination} />
      <GallerySection images={destination.gallery} name={destination.name} />
      <OverviewSection destination={destination} />
      <IncludedSection included={destination.included} />
      <ItinerarySection itinerary={destination.itinerary} />
      <CTASection name={destination.name} slug={destination.id} />
      
      {/* Back to Top */}
      <div className="py-8 text-center bg-background border-t border-border">
        <Link href="/" className="text-primary hover:underline inline-flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
    </main>
  )
}
