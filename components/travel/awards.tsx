"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Medal, Star, Crown, BadgeCheck, Globe, Heart, TrendingUp } from "lucide-react"

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

const stats = [
  { icon: Heart, value: "50K+", label: "Happy Travelers" },
  { icon: Globe, value: "60+", label: "Destinations" },
  { icon: TrendingUp, value: "15+", label: "Years Experience" },
  { icon: Star, value: "4.9", label: "Average Rating" },
]

export function Awards() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative overflow-hidden bg-muted/30 py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
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
            Recognition & Awards
          </span>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Honored by the <span className="text-accent">Industry</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-muted-foreground text-lg">
            Our commitment to exceptional travel experiences has been recognized by leading organizations worldwide.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-background border border-border"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <stat.icon className="h-6 w-6" />
              </div>
              <p className="font-serif text-3xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative p-6 rounded-2xl bg-background border border-border hover:border-accent/50 transition-all duration-300"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    <award.icon className="h-7 w-7" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {award.year}
                  </span>
                </div>

                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {award.title}
                </h3>
                <p className="text-sm text-accent font-medium mb-3">
                  {award.organization}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {award.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 opacity-60"
        >
          {["Virtuoso", "ASTA", "IATA", "WTA"].map((brand) => (
            <span key={brand} className="text-2xl font-serif font-bold text-muted-foreground">
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}