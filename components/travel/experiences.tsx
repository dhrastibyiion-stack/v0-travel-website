"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Compass, Mountain, Waves, TreePalm, Camera, Utensils } from "lucide-react"

const experiences = [
  {
    icon: Compass,
    title: "Cultural Tours",
    description: "Immerse yourself in local traditions and heritage",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Mountain,
    title: "Adventure Trips",
    description: "Thrilling expeditions for the bold explorer",
    color: "bg-accent/20 text-accent",
  },
  {
    icon: Waves,
    title: "Beach Getaways",
    description: "Relax on pristine shores around the world",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: TreePalm,
    title: "Eco Tourism",
    description: "Sustainable travel that protects nature",
    color: "bg-accent/20 text-accent",
  },
  {
    icon: Camera,
    title: "Photography Tours",
    description: "Capture stunning moments in iconic locations",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Utensils,
    title: "Culinary Journeys",
    description: "Taste authentic flavors from every corner",
    color: "bg-accent/20 text-accent",
  },
]

const stats = [
  { value: "50+", label: "Destinations" },
  { value: "10K+", label: "Happy Travelers" },
  { value: "15+", label: "Years Experience" },
  { value: "24/7", label: "Support" },
]

export function Experiences() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experiences" className="py-24 lg:py-32 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            What We Offer
          </p>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            <span className="text-balance">Unique Travel Experiences</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            From adrenaline-pumping adventures to serene retreats, we craft
            experiences that match your travel style.
          </p>
        </motion.div>

        {/* Experiences Grid */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group rounded-2xl bg-card p-8 shadow-sm transition-shadow duration-300 hover:shadow-lg border border-border/50"
            >
              <div
                className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl ${experience.color}`}
              >
                <experience.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">
                {experience.title}
              </h3>
              <p className="text-muted-foreground">{experience.description}</p>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                className="mt-6 h-0.5 bg-gradient-to-r from-primary/50 to-transparent"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 rounded-3xl bg-primary p-10 md:p-16"
        >
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="text-center"
              >
                <p className="font-serif text-4xl font-bold text-primary-foreground md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium text-primary-foreground/80">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
