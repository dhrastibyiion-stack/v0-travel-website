"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { Send, Check, Sparkles, Mail, Phone, MapPin, Clock } from "lucide-react"
import { TextReveal } from "./text-reveal"
import { MagneticButton } from "./magnetic-button"

export function CTA() {
  const ref = useRef(null)
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setEmail("")
      }, 3000)
    }
  }

  return (
    <section ref={ref} id="contact" className="py-24 lg:py-32 bg-secondary/30 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          style={{ opacity }}
          className="relative overflow-hidden rounded-[3rem]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Background Image with Parallax */}
          <motion.div style={{ y }} className="absolute inset-0 -top-20 -bottom-20">
            <Image
              src="/images/bali.jpg"
              alt="Beautiful travel destination"
              fill
              className="object-cover"
            />
          </motion.div>
          
          {/* Overlay with gradient */}
          <motion.div 
            className="absolute inset-0 bg-primary/90"
            animate={{ opacity: isHovered ? 0.85 : 0.9 }}
            transition={{ duration: 0.5 }}
          />

          {/* Animated decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{
                x: [0, 50, 0],
                y: [0, -30, 0],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 h-64 w-64 rounded-full bg-white/5"
            />
            <motion.div
              animate={{
                x: [0, -30, 0],
                y: [0, 40, 0],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-10 left-10 h-48 w-48 rounded-full bg-white/5"
            />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-white/5"
            />
          </div>

          {/* Content */}
          <div className="relative px-8 py-20 md:px-16 md:py-28 lg:py-36">
            <div className="mx-auto max-w-5xl text-center">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 mb-8"
              >
                <Sparkles className="h-4 w-4 text-white" />
                <span className="text-sm font-medium text-white">Get In Touch</span>
              </motion.div>

              <h2 className="font-serif text-4xl font-bold text-white md:text-5xl lg:text-7xl">
                <TextReveal delay={0.1}>Contact</TextReveal>
                <br />
                <span className="text-accent">
                  <TextReveal delay={0.3}>Us</TextReveal>
                </span>
              </h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-6 text-lg text-white/80 md:text-xl leading-relaxed"
              >
                Have questions about your next trip? We are here to help you
                plan the perfect getaway.
              </motion.p>

              {/* Contact Info Cards */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
              >
                {[
                  {
                    icon: Mail,
                    label: "Email Us",
                    value: "hello@wanderlust.com",
                    href: "mailto:hello@wanderlust.com",
                    isLink: true,
                  },
                  {
                    icon: Phone,
                    label: "Call Us",
                    value: "+1 (555) 123-4567",
                    href: "tel:+15551234567",
                    isLink: true,
                  },
                  {
                    icon: MapPin,
                    label: "Visit Us",
                    value: "123 Travel Lane, Suite 100, New York, NY 10001",
                    isLink: false,
                  },
                  {
                    icon: Clock,
                    label: "Working Hours",
                    value: "Mon - Sat: 9AM - 8PM",
                    isLink: false,
                  },
                ].map((item, index) => {
                  const Component = item.isLink ? motion.a : motion.div
                  return (
                    <Component
                      key={item.label}
                      {...(item.isLink ? { href: item.href } : {})}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="group flex flex-col items-center gap-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 p-6 transition-all duration-300 hover:bg-white/15 hover:border-white/20"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
                        <item.icon className="h-5 w-5 text-accent" />
                      </div>
                      <span className="text-sm font-medium text-white/60">{item.label}</span>
                      <span className="text-sm font-semibold text-white text-center leading-snug">{item.value}</span>
                    </Component>
                  )
                })}
              </motion.div>

              {/* Divider */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="my-12 flex items-center gap-4"
              >
                <div className="h-px flex-1 bg-white/20" />
                <span className="text-sm text-white/40">or subscribe to our newsletter</span>
                <div className="h-px flex-1 bg-white/20" />
              </motion.div>

              {/* Email Form */}
              <motion.form
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="flex flex-col gap-4 sm:flex-row sm:justify-center"
                onSubmit={handleSubmit}
              >
                <div className="relative flex-1 sm:max-w-md">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 px-6 py-4 pr-12 text-white placeholder:text-white/50 outline-none focus:border-white/40 transition-colors"
                    required
                    disabled={isSubmitted}
                  />
                  <motion.div 
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                    animate={{ opacity: email ? 1 : 0.5 }}
                  >
                    <Send className="h-5 w-5 text-white/50" />
                  </motion.div>
                </div>
                
                <MagneticButton
                  className={`group relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold transition-all duration-300 overflow-hidden ${
                    isSubmitted 
                      ? "bg-accent text-foreground" 
                      : "bg-white text-primary hover:bg-accent hover:text-foreground"
                  }`}
                >
                  <motion.span
                    initial={false}
                    animate={{ y: isSubmitted ? -30 : 0 }}
                    className="flex items-center gap-2"
                  >
                    Subscribe
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </motion.span>
                  <motion.span
                    initial={false}
                    animate={{ y: isSubmitted ? 0 : 30 }}
                    className="absolute inset-0 flex items-center justify-center gap-2"
                  >
                    <Check className="h-5 w-5" />
                    Subscribed!
                  </motion.span>
                </MagneticButton>
              </motion.form>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="mt-6 text-sm text-white/50"
              >
                Join 10,000+ travelers. No spam, unsubscribe anytime.
              </motion.p>

              {/* Trust badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="mt-12 flex flex-wrap items-center justify-center gap-8"
              >
                {["Trusted by 10K+", "5-Star Rated", "24/7 Support"].map((badge) => (
                  <div key={badge} className="flex items-center gap-2 text-white/60">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                    <span className="text-sm font-medium">{badge}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
