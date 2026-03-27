"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"

const galleryImages = [
  {
    src: "/images/santorini.jpg",
    title: "Santorini Sunsets",
    subtitle: "Greece",
    slug: "santorini",
  },
  {
    src: "/images/bali.jpg",
    title: "Bali Serenity",
    subtitle: "Indonesia",
    slug: "bali",
  },
  {
    src: "/images/tokyo.jpg",
    title: "Tokyo Nights",
    subtitle: "Japan",
    slug: "tokyo",
  },
  {
    src: "/images/patagonia.jpg",
    title: "Patagonia Wild",
    subtitle: "Argentina",
    slug: "patagonia",
  },
  {
    src: "/images/morocco.jpg",
    title: "Marrakech Magic",
    subtitle: "Morocco",
    slug: "marrakech",
  },
]

export function HorizontalGallery() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"])

  return (
    <section ref={containerRef} className="relative h-[200vh] md:h-[300vh] bg-foreground">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* Section Header */}
        <div className="absolute left-4 md:left-8 top-1/2 z-10 -translate-y-1/2 lg:left-16">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xs font-medium uppercase tracking-[0.2em] md:tracking-[0.3em] text-background/60"
          >
            Gallery
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-background [writing-mode:vertical-lr] rotate-180"
          >
            Explore
          </motion.h2>
        </div>

        {/* Horizontal Scroll Container */}
        <motion.div 
          style={{ x }} 
          className="flex gap-4 md:gap-6 pl-20 md:pl-32 pr-8 lg:gap-10 lg:pl-48"
        >
          {galleryImages.map((image, index) => (
            <Link key={index} href={`/destinations/${image.slug}`}>
              <motion.div
                className="group relative h-[60vh] w-[70vw] md:h-[70vh] md:w-[45vw] flex-shrink-0 overflow-hidden rounded-2xl lg:w-[30vw] cursor-pointer"
                data-cursor="View"
                whileHover={{ scale: 0.98 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 lg:p-8">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <p className="text-xs md:text-sm font-medium text-white/70">{image.subtitle}</p>
                    <h3 className="mt-1 font-serif text-xl md:text-2xl lg:text-3xl font-bold text-white">
                      {image.title}
                    </h3>
                  </motion.div>
                  
                  {/* Hover line */}
                  <motion.div 
                    className="mt-3 md:mt-4 h-0.5 bg-white/50 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                {/* Number */}
                <div className="absolute right-4 md:right-6 top-4 md:top-6 font-serif text-5xl md:text-6xl lg:text-8xl font-bold text-white/20">
                  {String(index + 1).padStart(2, "0")}
                </div>
                
                {/* View Button on Hover */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-colors duration-300"
                >
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="text-white text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full"
                  >
                    Explore Destination
                  </motion.span>
                </motion.div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
