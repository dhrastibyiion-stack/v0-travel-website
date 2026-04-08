"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { TextReveal } from "./text-reveal"

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    location: "New York, USA",
    avatar: "SM",
    text: "Wanderlust made our honeymoon absolutely magical. From the seamless booking to the surprise upgrades, every detail was perfect. We can't wait to book our next adventure!",
    destination: "Santorini, Greece",
    rating: 5,
  },
  {
    id: 2,
    name: "James Chen",
    location: "Toronto, Canada",
    avatar: "JC",
    text: "I've traveled with many agencies, but none compare to Wanderlust. Their local guides in Japan gave us experiences we never would have found on our own.",
    destination: "Tokyo, Japan",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    location: "London, UK",
    avatar: "ER",
    text: "The Bali trip exceeded all expectations. The attention to detail, from the private villa to the cooking classes, made it truly unforgettable.",
    destination: "Bali, Indonesia",
    rating: 5,
  },
  {
    id: 4,
    name: "Michael Park",
    location: "Toronto, Canada",
    avatar: "MP",
    text: "Patagonia was on my bucket list for years. Wanderlust not only made it happen but created an adventure I'll be telling stories about forever.",
    destination: "Patagonia, Argentina",
    rating: 5,
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
  }

  return (
    <section id="about" className="py-24 lg:py-32 bg-background overflow-hidden">
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
            Testimonials
          </motion.p>
          
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-7xl">
            <TextReveal delay={0.2}>What Our Travelers</TextReveal>
            <br />
            <span className="text-primary">
              <TextReveal delay={0.4}>Say About Us</TextReveal>
            </span>
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div ref={ref} className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto max-w-5xl"
          >
            {/* Large Quote Icon */}
            <motion.div 
              className="absolute -top-8 left-0 md:-left-16 lg:-left-20"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Quote className="h-24 w-24 text-primary/10 md:h-32 md:w-32" />
            </motion.div>

            {/* Testimonial Content */}
            <div className="relative min-h-[400px] flex items-center justify-center">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                  className="text-center w-full"
                >
                  {/* Stars */}
                  <div className="mb-8 flex justify-center gap-2">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <motion.svg
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 + i * 0.05 }}
                        className="h-6 w-6 fill-accent text-accent"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </motion.svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-2xl leading-relaxed text-foreground md:text-3xl lg:text-4xl font-light">
                    &ldquo;{testimonials[currentIndex].text}&rdquo;
                  </p>

                  {/* Author Info */}
                  <motion.div 
                    className="mt-12 flex flex-col items-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {/* Avatar */}
                    <motion.div 
                      className="relative"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="absolute inset-0 rounded-full bg-primary/20 blur-lg" />
                      <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-primary text-2xl font-semibold text-primary-foreground ring-4 ring-background">
                        {testimonials[currentIndex].avatar}
                      </div>
                    </motion.div>
                    
                    <div className="text-center">
                      <p className="text-xl font-semibold text-foreground">
                        {testimonials[currentIndex].name}
                      </p>
                      <p className="text-muted-foreground">
                        {testimonials[currentIndex].location}
                      </p>
                      <p className="mt-2 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {testimonials[currentIndex].destination}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="mt-12 flex items-center justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-border bg-card text-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6" />
              </motion.button>

              {/* Progress dots with animation */}
              <div className="flex gap-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1)
                      setCurrentIndex(index)
                    }}
                    className="relative h-3 w-3"
                    aria-label={`Go to testimonial ${index + 1}`}
                  >
                    <span className={`absolute inset-0 rounded-full transition-colors duration-300 ${
                      index === currentIndex ? "bg-primary" : "bg-border"
                    }`} />
                    {index === currentIndex && (
                      <motion.span
                        layoutId="activeDot"
                        className="absolute inset-0 rounded-full bg-primary"
                        initial={undefined}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                    {index === currentIndex && (
                      <motion.span
                        className="absolute inset-0 rounded-full bg-primary/30"
                        animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </button>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-border bg-card text-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
