'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { places } from '@/lib/places-data'
import { Star, MapPin, Clock } from 'lucide-react'

export function Places() {
  const containerRef = useRef(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="relative min-h-screen w-full bg-background py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-serif font-bold text-foreground mb-4 text-balance">
            Explore Amazing Places
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Discover 12 incredible destinations around the world, each with unique experiences and unforgettable memories waiting for you.
          </p>
        </motion.div>

        {/* 3-Column Grid Layout - 4 Rows (12 places total) */}
        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {places.map((place, index) => (
            <motion.div key={place.id} variants={itemVariants}>
              <Link href={`/destinations?continent=${place.continent}`}>
                <div className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer bg-card shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  {/* Image Container */}
                  <div className="relative w-full h-full">
                    <Image
                      src={place.heroImage}
                      alt={place.name}
                      fill
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500 ease-out"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content Container */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    {/* Top Badge */}
                    <div className="flex justify-between items-start">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="bg-accent/90 backdrop-blur-md rounded-full px-4 py-1.5 text-sm font-semibold text-foreground"
                      >
                        {place.continent}
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="flex items-center gap-1 bg-yellow-500/90 backdrop-blur-md rounded-full px-3 py-1.5"
                      >
                        <Star className="w-4 h-4 fill-white text-white" />
                        <span className="text-sm font-semibold text-white">{place.rating}</span>
                      </motion.div>
                    </div>

                    {/* Bottom Content */}
                    <div className="space-y-3">
                      <div>
                        <motion.h3
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                          className="text-2xl sm:text-3xl font-serif font-bold text-white mb-1 group-hover:translate-y-0 translate-y-2 transition-transform duration-300"
                        >
                          {place.name}
                        </motion.h3>
                        <motion.p
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.15 }}
                          className="text-sm text-white/80 font-medium"
                        >
                          {place.tagline}
                        </motion.p>
                      </div>

                      {/* Info Row */}
                      <div className="flex gap-4 text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{place.country}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{place.duration.split('/')[0].trim()}</span>
                        </div>
                      </div>

                      {/* Price and CTA */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex justify-between items-center pt-2 border-t border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <span className="text-xl font-bold text-accent">{place.price}</span>
                        <motion.div
                          whileHover={{ x: 4 }}
                          className="bg-accent/20 hover:bg-accent/30 rounded-lg px-3 py-2 text-white text-sm font-semibold transition-colors"
                        >
                          Explore →
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
