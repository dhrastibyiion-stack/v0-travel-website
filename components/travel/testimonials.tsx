"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    location: "New York, USA",
    avatar: "SM",
    text: "Wanderlust made our honeymoon absolutely magical. From the seamless booking to the surprise upgrades, every detail was perfect. We can&apos;t wait to book our next adventure!",
    destination: "Santorini, Greece",
  },
  {
    id: 2,
    name: "James Chen",
    location: "Toronto, Canada",
    avatar: "JC",
    text: "I&apos;ve traveled with many agencies, but none compare to Wanderlust. Their local guides in Japan gave us experiences we never would have found on our own.",
    destination: "Tokyo, Japan",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    location: "London, UK",
    avatar: "ER",
    text: "The Bali trip exceeded all expectations. The attention to detail, from the private villa to the cooking classes, made it truly unforgettable.",
    destination: "Bali, Indonesia",
  },
  {
    id: 4,
    name: "Michael Park",
    location: "Sydney, Australia",
    avatar: "MP",
    text: "Patagonia was on my bucket list for years. Wanderlust not only made it happen but created an adventure I&apos;ll be telling stories about forever.",
    destination: "Patagonia, Argentina",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    )
  }

  return (
    <section id="about" className="py-24 lg:py-32 bg-background overflow-hidden">
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
            Testimonials
          </p>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            <span className="text-balance">What Our Travelers Say</span>
          </h2>
        </motion.div>

        {/* Testimonials Carousel */}
        <div ref={ref} className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto max-w-4xl"
          >
            {/* Quote Icon */}
            <div className="absolute -top-8 left-0 md:-left-8">
              <Quote className="h-16 w-16 text-primary/20" />
            </div>

            {/* Testimonial Content */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="text-xl leading-relaxed text-foreground md:text-2xl lg:text-3xl font-light">
                &ldquo;{testimonials[currentIndex].text}&rdquo;
              </p>

              <div className="mt-10 flex flex-col items-center gap-4">
                {/* Avatar */}
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-semibold text-primary-foreground">
                  {testimonials[currentIndex].avatar}
                </div>
                <div>
                  <p className="text-lg font-semibold text-foreground">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].location}
                  </p>
                  <p className="mt-1 text-sm font-medium text-primary">
                    Traveled to {testimonials[currentIndex].destination}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="mt-12 flex items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-primary hover:text-primary-foreground hover:border-primary"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </motion.button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-8 bg-primary"
                        : "w-2 bg-border hover:bg-primary/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-primary hover:text-primary-foreground hover:border-primary"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
