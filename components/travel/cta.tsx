"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Send } from "lucide-react"

export function CTA() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/bali.jpg"
              alt="Beautiful travel destination"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary/85" />
          </div>

          {/* Content */}
          <div className="relative px-8 py-16 md:px-16 md:py-24 lg:py-32">
            <div className="mx-auto max-w-3xl text-center">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground/80"
              >
                Start Your Journey
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-serif text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl"
              >
                <span className="block text-balance">Ready for Your Next</span>
                <span className="block text-balance">Adventure?</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 text-lg text-primary-foreground/90"
              >
                Subscribe to our newsletter and be the first to know about
                exclusive deals, new destinations, and travel tips.
              </motion.p>

              {/* Email Form */}
              <motion.form
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-4 text-primary-foreground placeholder:text-primary-foreground/60 outline-none focus:ring-2 focus:ring-white/30 sm:max-w-md"
                  required
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-primary transition-all duration-300 hover:bg-white/90"
                >
                  Subscribe
                  <Send className="h-4 w-4" />
                </motion.button>
              </motion.form>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-4 text-sm text-primary-foreground/60"
              >
                Join 10,000+ travelers. No spam, unsubscribe anytime.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
