"use client"

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Compass, Mountain, Waves, TreePalm, Camera, Utensils, ArrowRight } from "lucide-react"
import { TextReveal } from "./text-reveal"
import { MagneticButton } from "./magnetic-button"

const experiences = [
  {
    icon: Compass,
    title: "Cultural Tours",
    description: "Immerse yourself in local traditions and heritage",
    color: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
  },
  {
    icon: Mountain,
    title: "Adventure Trips",
    description: "Thrilling expeditions for the bold explorer",
    color: "from-accent/30 to-accent/10",
    iconColor: "text-accent",
  },
  {
    icon: Waves,
    title: "Beach Getaways",
    description: "Relax on pristine shores around the world",
    color: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
  },
  {
    icon: TreePalm,
    title: "Eco Tourism",
    description: "Sustainable travel that protects nature",
    color: "from-accent/30 to-accent/10",
    iconColor: "text-accent",
  },
  {
    icon: Camera,
    title: "Photography Tours",
    description: "Capture stunning moments in iconic locations",
    color: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
  },
  {
    icon: Utensils,
    title: "Culinary Journeys",
    description: "Taste authentic flavors from every corner",
    color: "from-accent/30 to-accent/10",
    iconColor: "text-accent",
  },
]

const stats = [
  { value: 50, suffix: "+", label: "Destinations" },
  { value: 10, suffix: "K+", label: "Happy Travelers" },
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 24, suffix: "/7", label: "Support" },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: "easeOut",
      })
      return controls.stop
    }
  }, [isInView, value, count])

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest)
    })
    return unsubscribe
  }, [rounded])

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  )
}

function ExperienceCard({ experience, index }: { experience: typeof experiences[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const Icon = experience.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.33, 1, 0.68, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
      data-cursor="Explore"
    >
      <motion.div
        className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${experience.color} p-8 border border-border/50 h-full`}
        whileHover={{ y: -12 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Animated background circles */}
        <motion.div
          className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/5"
          animate={{ scale: isHovered ? 1.5 : 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="absolute -bottom-5 -left-5 h-24 w-24 rounded-full bg-white/5"
          animate={{ scale: isHovered ? 1.3 : 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        />

        {/* Icon */}
        <motion.div
          className={`relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-lg`}
          whileHover={{ rotate: 5, scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Icon className={`h-8 w-8 ${experience.iconColor}`} />
        </motion.div>

        {/* Content */}
        <h3 className="relative mb-3 text-xl font-semibold text-foreground">
          {experience.title}
        </h3>
        <p className="relative text-muted-foreground leading-relaxed">
          {experience.description}
        </p>

        {/* Arrow indicator */}
        <motion.div
          className="absolute bottom-8 right-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowRight className="h-5 w-5 text-foreground" />
        </motion.div>

        {/* Bottom line animation */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-primary"
          initial={{ width: 0 }}
          animate={{ width: isHovered ? "100%" : 0 }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>
    </motion.div>
  )
}

export function Experiences() {
  return (
    <section id="experiences" className="py-24 lg:py-32 bg-secondary/30 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary"
          >
            What We Offer
          </motion.p>
          
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-7xl">
            <TextReveal delay={0.2}>Unique Travel</TextReveal>
            <br />
            <span className="text-primary">
              <TextReveal delay={0.4}>Experiences</TextReveal>
            </span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground"
          >
            From adrenaline-pumping adventures to serene retreats, we craft
            experiences that match your travel style.
          </motion.p>
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.title} experience={experience} index={index} />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 relative"
        >
          <div className="absolute inset-0 rounded-[2.5rem] bg-foreground transform -rotate-1" />
          <div className="relative rounded-[2.5rem] bg-foreground p-12 md:p-16 lg:p-20">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
            
            <div className="relative grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <p className="font-serif text-5xl font-bold text-background md:text-6xl lg:text-7xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-3 text-sm font-medium text-background/60 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA inside stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative mt-12 flex justify-center"
            >
              <MagneticButton className="group flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-foreground transition-all duration-300 hover:bg-primary hover:text-white">
                Start Planning Your Trip
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </MagneticButton>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
