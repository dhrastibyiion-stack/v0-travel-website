"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Users, Heart, Compass, ArrowRight, Play } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Passion for Travel",
    description: "We believe travel has the power to transform lives and create lasting memories.",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Every decision we make is guided by what&apos;s best for our travelers.",
  },
  {
    icon: Compass,
    title: "Authentic Experiences",
    description: "We curate genuine connections with local cultures and hidden gems.",
  },
  {
    icon: MapPin,
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

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" ref={ref} className="relative overflow-hidden py-24 bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            About Wanderlust
          </span>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Crafting <span className="text-accent">Unforgettable</span> Journeys
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-muted-foreground text-lg">
            Since 2009, we've been transforming travel dreams into reality. Our team of passionate explorers is dedicated to creating authentic, sustainable, and life-changing travel experiences.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src="/images/bali.jpg"
                alt="Travel team exploring destination"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              {/* Play Button Overlay */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-lg"
              >
                <Play className="h-8 w-8 text-primary ml-1" fill="currentColor" />
              </motion.button>

              {/* Experience Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg"
              >
                <p className="font-serif text-3xl font-bold text-primary">15+</p>
                <p className="text-xs text-muted-foreground">Years of Excellence</p>
              </motion.div>
            </div>

            {/* Floating Images */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-8 -left-8 w-32 h-32 rounded-2xl overflow-hidden border-4 border-background shadow-xl hidden md:block"
            >
              <Image
                src="/images/santorini.jpg"
                alt="Happy travelers"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
              Our Story
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Wanderlust Travel was born from a simple belief: everyone deserves to experience the magic of our world. What started as a small team of passionate travelers has grown into a trusted name in the travel industry.
              </p>
              <p>
                We specialize in creating personalized travel experiences that go beyond the typical tourist path. From pristine beaches to bustling metropolises, from ancient cultures to modern wonders, we help our travelers discover the soul of each destination.
              </p>
              <p>
                Our dedicated team works tirelessly to ensure every detail of your journey is perfect. With local experts in every destination, exclusive partnerships, and a passion for authentic experiences, we make the impossible happen.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="p-4 rounded-xl bg-muted/50 hover:bg-accent/5 transition-colors group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                      <value.icon className="h-5 w-5" />
                    </div>
                    <h4 className="font-semibold text-foreground">{value.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Learn More About Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="text-center mb-12">
            <h3 className="font-serif text-3xl font-bold text-foreground">
              Meet Our Team
            </h3>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Our dedicated professionals bring decades of combined experience and endless passion to every journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group text-center"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={member.image || "/images/placeholder.jpg"}
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
        </motion.div>
      </div>
    </section>
  )
}