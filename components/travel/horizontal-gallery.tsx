"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const galleryImages = [
  {
    src: "/images/santorini.jpg",
    title: "Santorini Sunsets",
    subtitle: "Greece",
  },
  {
    src: "/images/bali.jpg",
    title: "Bali Serenity",
    subtitle: "Indonesia",
  },
  {
    src: "/images/tokyo.jpg",
    title: "Tokyo Nights",
    subtitle: "Japan",
  },
  {
    src: "/images/patagonia.jpg",
    title: "Patagonia Wild",
    subtitle: "Argentina",
  },
  {
    src: "/images/morocco.jpg",
    title: "Marrakech Magic",
    subtitle: "Morocco",
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
    <section ref={containerRef} className="relative h-[300vh] bg-foreground">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* Section Header */}
        <div className="absolute left-8 top-1/2 z-10 -translate-y-1/2 lg:left-16">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xs font-medium uppercase tracking-[0.3em] text-background/60"
          >
            Gallery
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 font-serif text-4xl font-bold text-background md:text-5xl lg:text-6xl [writing-mode:vertical-lr] rotate-180"
          >
            Explore
          </motion.h2>
        </div>

        {/* Horizontal Scroll Container */}
        <motion.div 
          style={{ x }} 
          className="flex gap-6 pl-32 pr-8 lg:gap-10 lg:pl-48"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="group relative h-[70vh] w-[45vw] flex-shrink-0 overflow-hidden rounded-2xl md:w-[35vw] lg:w-[30vw]"
              data-cursor="View"
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <p className="text-sm font-medium text-white/70">{image.subtitle}</p>
                  <h3 className="mt-1 font-serif text-2xl font-bold text-white lg:text-3xl">
                    {image.title}
                  </h3>
                </motion.div>
                
                {/* Hover line */}
                <motion.div 
                  className="mt-4 h-0.5 bg-white/50 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Number */}
              <div className="absolute right-6 top-6 font-serif text-6xl font-bold text-white/20 lg:text-8xl">
                {String(index + 1).padStart(2, "0")}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
