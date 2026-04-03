"use client"

import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Star } from "lucide-react"
import { TextReveal } from "./text-reveal"
import { destinations as allDestinations } from "@/lib/destinations-data"

function DestinationCard({ destination, index }: { 
  destination: typeof allDestinations[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const springX = useSpring(x, { stiffness: 150, damping: 15 })
  const springY = useSpring(y, { stiffness: 150, damping: 15 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) * 0.1)
    y.set((e.clientY - centerY) * 0.1)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <Link href={`/destinations/${destination.id}`}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: index * 0.15, ease: [0.33, 1, 0.68, 1] }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="group relative overflow-hidden rounded-3xl cursor-pointer aspect-[4/3]"
        data-cursor="View"
      >
        <motion.div 
          style={{ x: springX, y: springY }}
          className="relative aspect-[4/3]"
        >
          <Image
            src={destination.heroImage}
            alt={destination.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
            animate={{ opacity: isHovered ? 1 : 0.9 }}
          />
          
          {/* Animated border on hover */}
          <motion.div
            className="absolute inset-0 rounded-3xl border-2 border-white/0"
            animate={{ borderColor: isHovered ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0)" }}
            transition={{ duration: 0.3 }}
          />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Star className="fill-accent text-accent h-4 w-4" />
                <span className="font-medium text-white text-sm">
                  {destination.rating}
                </span>
              </div>
              
              <h3 className="font-serif font-bold text-white text-xl md:text-2xl">
                {destination.name}
              </h3>
              
              <p className="text-white/80 text-sm">
                {destination.country}
              </p>
              
              <p className="mt-2 text-white/70 text-sm">
                {destination.tagline}
              </p>
            </motion.div>

            <motion.div 
              className="flex items-center justify-between mt-4"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div>
                <p className="text-xs text-white/60">From</p>
                <p className="font-bold text-white text-lg md:text-xl">
                  {destination.price}
                </p>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center rounded-full transition-all duration-300 h-9 w-9 md:h-10 md:w-10 bg-white/20 backdrop-blur-sm text-white group-hover:bg-white group-hover:text-foreground cursor-pointer"
                aria-label={`View ${destination.name}`}
              >
                <motion.div
                  animate={{ rotate: isHovered ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5" />
                </motion.div>
              </motion.button>
            </motion.div>

            {/* Progress bar animation */}
            <motion.div
              className="h-0.5 bg-white/30 mt-4 origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isHovered ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>
      </motion.div>
    </Link>
  )
}

export function Destinations() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="destinations" className="py-16 md:py-24 lg:py-32 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 md:mb-20 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-xs md:text-sm font-medium uppercase tracking-[0.2em] md:tracking-[0.3em] text-primary"
          >
            Popular Destinations
          </motion.p>
          
          <h2 className="font-serif text-3xl md:text-5xl lg:text-7xl font-bold text-foreground">
            <TextReveal delay={0.2}>Explore Our Top</TextReveal>
            <br />
            <span className="text-primary">
              <TextReveal delay={0.4}>Destinations</TextReveal>
            </span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mx-auto mt-6 md:mt-8 max-w-2xl text-base md:text-lg text-muted-foreground px-4"
          >
            Discover the most sought-after travel destinations handpicked by our
            experts for unforgettable experiences.
          </motion.p>
        </div>

        {/* Destinations Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {allDestinations.slice(0, 11).map((destination, index) => (
            <DestinationCard 
              key={destination.id} 
              destination={destination} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}
