"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Instagram, Twitter, Facebook, Youtube, MapPin, Mail, Phone, ArrowUpRight, Star } from "lucide-react"
import { MagneticButton } from "./magnetic-button"
import { destinations } from "@/lib/destinations-data"

const footerDestinations = destinations.slice(0, 8).map(d => ({
  name: d.name,
  href: `/destinations/${d.id}`,
  image: d.heroImage,
  country: d.country,
  rating: d.rating,
}))

const footerLinks = {
  experiences: [
    { name: "Cultural Tours", href: "/experiences/cultural-tours" },
    { name: "Adventure Trips", href: "/experiences/adventure-trips" },
    { name: "Beach Getaways", href: "/experiences/beach-getaways" },
    { name: "Eco Tourism", href: "/experiences/eco-tourism" },
    { name: "Photography Tours", href: "/experiences/photography-tours" },
    { name: "Culinary Journeys", href: "/experiences/culinary-journeys" },
  ],
  company: [
    { name: "About Us", href: "/#about" },
    { name: "Destinations", href: "/destinations" },
    { name: "Experiences", href: "/#experiences" },
    { name: "Reviews", href: "/#about" },
    { name: "Contact", href: "/contact" },
  ],
  support: [
    { name: "Help Center", href: "/help-center" },
    { name: "Travel Insurance", href: "/travel-insurance" },
    { name: "Cancellation Policy", href: "/cancellation-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
    { name: "Privacy Policy", href: "/privacy-policy" },
  ],
}

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <footer ref={ref} className="relative bg-foreground text-background overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        {/* Top section with large CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="mb-20 flex flex-col items-center text-center lg:flex-row lg:justify-between lg:text-left"
        >
          <div>
            <h3 className="font-serif text-4xl font-bold text-background md:text-5xl lg:text-6xl">
              Let&apos;s Plan Your
              <br />
              <span className="text-accent">Dream Trip</span>
            </h3>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 lg:mt-0"
          >
            <Link href="/destinations">
              <MagneticButton className="group flex items-center gap-3 rounded-full bg-white px-8 py-5 font-semibold text-foreground transition-all duration-300 hover:bg-primary hover:text-white">
                Start Planning
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
              </MagneticButton>
            </Link>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-px bg-background/10 origin-left"
        />

        <div className="pt-16">
          {/* Destinations Grid with Images */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-background mb-6">
              Popular Destinations
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
              {footerDestinations.map((dest, index) => (
                <motion.div
                  key={dest.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                >
                  <Link href={dest.href} className="group block">
                    <div className="relative aspect-square rounded-xl overflow-hidden">
                      <Image
                        src={dest.image}
                        alt={dest.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute inset-0 flex flex-col justify-end p-2.5">
                        <p className="font-semibold text-white text-xs leading-tight">{dest.name}</p>
                        <div className="flex items-center gap-1 mt-0.5">
                          <Star className="h-2.5 w-2.5 fill-accent text-accent" />
                          <span className="text-white/80 text-[10px]">{dest.rating}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link href="/" className="inline-block">
                <span className="font-serif text-3xl font-bold text-background">
                  Wanderlust
                </span>
              </Link>
              <p className="mt-6 max-w-sm text-background/60 leading-relaxed">
                Crafting unforgettable journeys for travelers who seek authentic
                experiences and meaningful connections around the world.
              </p>

              {/* Contact Info */}
              <div className="mt-8 space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="group flex items-center gap-3 text-background/60 hover:text-background transition-colors"
                >
                  <MapPin className="h-5 w-5 transition-transform group-hover:scale-110" />
                  <span>123 Travel Street, Adventure City</span>
                </motion.div>
                <motion.a
                  href="mailto:hello@wanderlust.travel"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="group flex items-center gap-3 text-background/60 hover:text-background transition-colors cursor-pointer"
                >
                  <Mail className="h-5 w-5 transition-transform group-hover:scale-110" />
                  <span>hello@wanderlust.travel</span>
                </motion.a>
                <motion.a
                  href="tel:+15551234567"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="group flex items-center gap-3 text-background/60 hover:text-background transition-colors cursor-pointer"
                >
                  <Phone className="h-5 w-5 transition-transform group-hover:scale-110" />
                  <span>+1 (555) 123-4567</span>
                </motion.a>
              </div>

              {/* Social Links */}
              <div className="mt-10 flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-background/10 text-background transition-colors hover:bg-primary hover:text-white"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links], columnIndex) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 + columnIndex * 0.1 }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-background">
                {title.charAt(0).toUpperCase() + title.slice(1)}
              </h3>
              <ul className="mt-6 space-y-3">
                {links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.4, delay: 0.6 + columnIndex * 0.1 + linkIndex * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-background/60 transition-colors hover:text-background"
                    >
                      {link.name}
                      <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-background/10 pt-8 md:flex-row"
        >
          <p className="text-sm text-background/50">
            &copy; {new Date().getFullYear()} Wanderlust Travel. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-background/50">
            {[
              { name: "Terms", href: "/terms-of-service" },
              { name: "Privacy", href: "/privacy-policy" },
              { name: "Cancellation", href: "/cancellation-policy" },
            ].map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                className="hover:text-background transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Large background text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.02 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none"
      >
        <span className="font-serif text-[20vw] font-bold text-background whitespace-nowrap">
          WANDERLUST
        </span>
      </motion.div>
    </footer>
  )
}
