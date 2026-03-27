"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { ChevronDown, MapPin, Calendar, Users, ArrowRight } from "lucide-react"
import { MagneticButton } from "./magnetic-button"

export function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      rotateX: 90,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  }

  const title1 = "Your Journey"
  const title2 = "Begins Here"

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
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      </motion.div>

      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-1/2 -right-1/4 h-[800px] w-[800px] rounded-full bg-primary/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-1/2 -left-1/4 h-[600px] w-[600px] rounded-full bg-accent/20 blur-3xl"
        />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity, y: textY }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 text-sm font-medium uppercase tracking-[0.4em] text-white/80"
        >
          <span className="inline-block border-b border-white/30 pb-2">Discover the World</span>
        </motion.p>

        {/* Animated Title */}
        <div className="overflow-hidden">
          <motion.h1
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className="max-w-5xl font-serif text-5xl font-bold leading-none text-white md:text-7xl lg:text-[6rem] xl:text-[7rem]"
          >
            <span className="block mb-2">
              {title1.split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className="inline-block"
                  style={{ transformOrigin: "bottom" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
            <span className="block text-accent">
              {title2.split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className="inline-block"
                  style={{ transformOrigin: "bottom" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-8 max-w-xl text-lg text-white/80 md:text-xl leading-relaxed"
        >
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </motion.p>

        {/* Search Box */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12 w-full max-w-4xl"
        >
          <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-4 shadow-2xl md:p-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
              <div className="flex items-center gap-3 border-b border-white/20 pb-4 md:border-b-0 md:border-r md:pb-0 md:pr-4">
                <MapPin className="h-5 w-5 text-white/70" />
                <div className="flex-1">
                  <p className="text-xs font-medium text-white/60">Where to?</p>
                  <input
                    type="text"
                    placeholder="Search destinations"
                    className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/50"
                  />
                </div>
              </div>
              <div className="flex items-center gap-3 border-b border-white/20 pb-4 md:border-b-0 md:border-r md:pb-0 md:pr-4">
                <Calendar className="h-5 w-5 text-white/70" />
                <div className="flex-1">
                  <p className="text-xs font-medium text-white/60">When?</p>
                  <input
                    type="text"
                    placeholder="Add dates"
                    className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/50"
                  />
                </div>
              </div>
              <div className="flex items-center gap-3 border-b border-white/20 pb-4 md:border-b-0 md:border-r md:pb-0 md:pr-4">
                <Users className="h-5 w-5 text-white/70" />
                <div className="flex-1">
                  <p className="text-xs font-medium text-white/60">Travelers</p>
                  <input
                    type="text"
                    placeholder="Add guests"
                    className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/50"
                  />
                </div>
              </div>
              <MagneticButton
                className="group flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-semibold text-foreground transition-all duration-300 hover:bg-primary hover:text-white"
                data-cursor="Search"
              >
                Explore
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </MagneticButton>
            </div>
          </div>
        </motion.div>

        {/* Floating stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-32 left-6 hidden lg:block"
        >
          <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-6">
            <p className="font-serif text-4xl font-bold text-white">50+</p>
            <p className="text-sm text-white/70">Destinations</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7 }}
          className="absolute bottom-32 right-6 hidden lg:block"
        >
          <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-6">
            <p className="font-serif text-4xl font-bold text-white">10K+</p>
            <p className="text-sm text-white/70">Happy Travelers</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-white/60">Scroll</span>
          <div className="h-12 w-6 rounded-full border-2 border-white/30 p-1">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="h-2 w-2 rounded-full bg-white"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
