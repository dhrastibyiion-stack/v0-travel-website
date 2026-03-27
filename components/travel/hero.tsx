"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { ChevronDown, MapPin, Calendar, Users } from "lucide-react"

export function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image
          src="/images/hero-travel.jpg"
          alt="Beautiful travel destination"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-white/80"
        >
          Discover the World
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl font-serif text-5xl font-bold leading-tight text-white md:text-7xl lg:text-8xl"
        >
          <span className="block text-balance">Your Journey</span>
          <span className="block text-balance">Begins Here</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 max-w-xl text-lg text-white/90 md:text-xl"
        >
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </motion.p>

        {/* Search Box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 w-full max-w-4xl"
        >
          <div className="rounded-2xl bg-white/95 backdrop-blur-sm p-4 shadow-2xl md:p-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
              <div className="flex items-center gap-3 border-b border-border pb-4 md:border-b-0 md:border-r md:pb-0 md:pr-4">
                <MapPin className="h-5 w-5 text-primary" />
                <div className="flex-1">
                  <p className="text-xs font-medium text-muted-foreground">Where to?</p>
                  <input
                    type="text"
                    placeholder="Search destinations"
                    className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
                  />
                </div>
              </div>
              <div className="flex items-center gap-3 border-b border-border pb-4 md:border-b-0 md:border-r md:pb-0 md:pr-4">
                <Calendar className="h-5 w-5 text-primary" />
                <div className="flex-1">
                  <p className="text-xs font-medium text-muted-foreground">When?</p>
                  <input
                    type="text"
                    placeholder="Add dates"
                    className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
                  />
                </div>
              </div>
              <div className="flex items-center gap-3 border-b border-border pb-4 md:border-b-0 md:border-r md:pb-0 md:pr-4">
                <Users className="h-5 w-5 text-primary" />
                <div className="flex-1">
                  <p className="text-xs font-medium text-muted-foreground">Travelers</p>
                  <input
                    type="text"
                    placeholder="Add guests"
                    className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
                  />
                </div>
              </div>
              <button className="rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98]">
                Explore
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs font-medium text-white/70">Scroll to explore</span>
          <ChevronDown className="h-5 w-5 text-white/70" />
        </motion.div>
      </motion.div>
    </section>
  )
}
