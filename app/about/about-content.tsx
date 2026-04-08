"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Award, Medal, Star, Crown, BadgeCheck, Globe, Heart, TrendingUp, MapPin, Users, Compass, Leaf, Mail, Phone } from "lucide-react"
import { Header } from "@/components/travel/header"

const stats = [
  { icon: Heart, value: "50K+", label: "Happy Travelers" },
  { icon: Globe, value: "60+", label: "Destinations" },
  { icon: TrendingUp, value: "15+", label: "Years Experience" },
  { icon: Star, value: "4.9", label: "Average Rating" },
]

const awards = [
  {
    icon: Award,
    title: "Best Travel Agency 2024",
    organization: "World Travel Awards",
    year: "2024",
    description: "Recognized as the leading travel agency for exceptional service and innovative travel experiences.",
  },
  {
    icon: Medal,
    title: "Gold Medal Excellence",
    organization: "Travel Weekly Globe",
    year: "2023",
    description: "Awarded gold for customer satisfaction and sustainable tourism practices.",
  },
  {
    icon: Star,
    title: "Traveler's Choice Award",
    organization: "TripAdvisor",
    year: "2024",
    description: "Consistently ranked in the top 1% of travel experiences worldwide.",
  },
  {
    icon: Crown,
    title: "Luxury Travel Specialist",
    organization: "Virtuoso Network",
    year: "2023",
    description: "Exclusive membership in the premier network of luxury travel advisors.",
  },
  {
    icon: BadgeCheck,
    title: "Sustainable Tourism Leader",
    organization: "Green Globe",
    year: "2024",
    description: "Recognized for commitment to eco-friendly and responsible travel.",
  },
  {
    icon: Globe,
    title: "Best Destination Experts",
    organization: "Travel + Leisure",
    year: "2023",
    description: "Named top destination specialists for Asia and Europe regions.",
  },
]

const values = [
  {
    icon: Heart,
    title: "Passion for Travel",
    description: "We believe travel has the power to transform lives and create lasting memories.",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Every decision we make is guided by what's best for our travelers.",
  },
  {
    icon: Compass,
    title: "Authentic Experiences",
    description: "We curate genuine connections with local cultures and hidden gems.",
  },
  {
    icon: Leaf,
    title: "Sustainable Tourism",
    description: "We're committed to responsible travel that protects our planet.",
  },
]

const team = [
  {
    name: "Sarah Mitchell",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&crop=face",
    bio: "Former travel journalist with 20+ years exploring 80+ countries.",
  },
  {
    name: "David Chen",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face",
    bio: "Expert in logistics and creating seamless travel experiences.",
  },
  {
    name: "Elena Rodriguez",
    role: "Destination Specialist",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&crop=face",
    bio: "Passionate about Latin American cultures and sustainable tourism.",
  },
  {
    name: "James Wilson",
    role: "Adventure Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
    bio: "Mountaineer and expedition leader with a love for adventure.",
  },
]

export function AboutContent() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })
  
  const storyRef = useRef(null)
  const storyInView = useInView(storyRef, { once: true, margin: "-100px" })
  
  const valuesRef = useRef(null)
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" })
  
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" })
  
  const awardsRef = useRef(null)
  const awardsInView = useInView(awardsRef, { once: true, margin: "-100px" })
  
  const teamRef = useRef(null)
  const teamInView = useInView(teamRef, { once: true, margin: "-100px" })

  return (
    <main className="min-h-screen bg-background">
      <Header variant="dark" />
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              About Wanderlust
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">
              Crafting <span className="text-accent">Unforgettable</span> Journeys
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-muted-foreground">
              Since 2009, we've been transforming travel dreams into reality. Our team of passionate explorers is dedicated to creating authentic, sustainable, and life-changing travel experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="aspect-[21/9] relative">
              <Image
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600&h=700&fit=crop"
                alt="Wanderlust Travel Team"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section ref={storyRef} className="py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={storyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
                Our <span className="text-accent">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Wanderlust Travel was born from a simple belief: everyone deserves to experience the magic of our world. What started as a small team of passionate travelers has grown into a trusted name in the travel industry.
                </p>
                <p>
                  Our journey began in 2009 when Sarah Mitchell, a former travel journalist, decided to share her passion for authentic travel experiences with others. From organizing small group trips to hidden destinations, we quickly gained a reputation for creating unforgettable journeys that go beyond typical tourism.
                </p>
                <p>
                  Today, we've helped over 50,000 travelers discover the wonders of our world. Our dedicated team works tirelessly to ensure every detail of your journey is perfect. With local experts in every destination, exclusive partnerships, and a passion for authentic experiences, we make the impossible happen.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={storyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=800&h=1000&fit=crop"
                alt="Travel adventure"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white font-serif text-xl font-semibold">
                  "Life is either a daring adventure or nothing at all."
                </p>
                <p className="text-white/70 text-sm mt-2">— Helen Keller</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 px-6 bg-muted/30">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={statsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                className="text-center p-8 rounded-2xl bg-background border border-border"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                  <stat.icon className="h-7 w-7" />
                </div>
                <p className="font-serif text-4xl font-bold text-foreground">{stat.value}</p>
                <p className="text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl font-bold text-foreground">
              Our <span className="text-accent">Values</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="p-8 rounded-2xl bg-muted/30 border border-border hover:border-accent/50 transition-colors"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 text-accent mb-6">
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section ref={awardsRef} className="py-20 px-6 bg-muted/30">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={awardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Recognition & Awards
            </span>
            <h2 className="font-serif text-4xl font-bold text-foreground">
              Honored by the <span className="text-accent">Industry</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
              Our commitment to exceptional travel experiences has been recognized by leading organizations worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 30 }}
                animate={awardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="p-6 rounded-2xl bg-background border border-border"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 text-accent">
                    <award.icon className="h-7 w-7" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {award.year}
                  </span>
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">{award.title}</h3>
                <p className="text-sm text-accent font-medium mb-3">{award.organization}</p>
                <p className="text-sm text-muted-foreground">{award.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={awardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 opacity-60"
          >
            {["Virtuoso", "ASTA", "IATA", "WTA"].map((brand) => (
              <span key={brand} className="text-2xl font-serif font-bold text-muted-foreground">
                {brand}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl font-bold text-foreground">
              Meet Our <span className="text-accent">Team</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
              Our dedicated professionals bring decades of combined experience and endless passion to every journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="text-center group"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="font-semibold text-foreground">{member.name}</h4>
                <p className="text-sm text-accent font-medium">{member.role}</p>
                <p className="text-xs text-muted-foreground mt-2">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 px-6 bg-primary">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Whether you have questions about a destination or ready to book your next adventure, we're here to help make your travel dreams a reality.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-full font-semibold hover:bg-accent/90 transition-colors"
            >
              Explore Destinations
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Contact Info */}
      <section className="py-16 px-6 bg-background border-t border-border">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
              <a href="mailto:hello@wanderlust.travel" className="text-muted-foreground hover:text-primary transition-colors">hello@wanderlust.travel</a>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
              <a href="tel:+15551234567" className="text-muted-foreground hover:text-primary transition-colors">+1 (555) 123-4567</a>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Visit Us</h3>
              <p className="text-muted-foreground">123 Travel Street, New York, NY 10001</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}