"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Instagram, Twitter, Facebook, Youtube, MapPin, Mail, Phone } from "lucide-react"

const footerLinks = {
  destinations: [
    { name: "Europe", href: "#" },
    { name: "Asia", href: "#" },
    { name: "Americas", href: "#" },
    { name: "Africa", href: "#" },
    { name: "Oceania", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Partners", href: "#" },
  ],
  support: [
    { name: "Help Center", href: "#" },
    { name: "Travel Insurance", href: "#" },
    { name: "Cancellation Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ],
}

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/" className="inline-block">
                <span className="font-serif text-3xl font-bold text-background">
                  Wanderlust
                </span>
              </Link>
              <p className="mt-4 max-w-sm text-background/70 leading-relaxed">
                Crafting unforgettable journeys for travelers who seek authentic
                experiences and meaningful connections around the world.
              </p>

              {/* Contact Info */}
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3 text-background/70">
                  <MapPin className="h-5 w-5" />
                  <span>123 Travel Street, Adventure City, AC 12345</span>
                </div>
                <div className="flex items-center gap-3 text-background/70">
                  <Mail className="h-5 w-5" />
                  <span>hello@wanderlust.travel</span>
                </div>
                <div className="flex items-center gap-3 text-background/70">
                  <Phone className="h-5 w-5" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 text-background transition-colors hover:bg-background/20"
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
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * (columnIndex + 1) }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-background">
                {title}
              </h3>
              <ul className="mt-6 space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-background/70 transition-colors hover:text-background"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-background/10 pt-8 md:flex-row"
        >
          <p className="text-sm text-background/60">
            &copy; {new Date().getFullYear()} Wanderlust Travel. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-background/60">
            <Link href="#" className="hover:text-background transition-colors">
              Terms
            </Link>
            <Link href="#" className="hover:text-background transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-background transition-colors">
              Cookies
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
