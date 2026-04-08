"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { Menu, X, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { MagneticButton } from "./magnetic-button"
import { LanguageSelector } from "./language-selector"
import { CurrencyConverter } from "./currency-converter"

const navLinks = [
  { name: "Destinations", href: "/destinations" },
  { name: "Experiences", href: "/#experiences" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

interface HeaderProps {
  variant?: 'default' | 'dark'
}

export function Header({ variant = 'default' }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
    setIsScrolled(latest > 50)
  })

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  const menuVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const linkVariants = {
    closed: { y: 50, opacity: 0 },
    open: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || variant === 'dark'
            ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-black/10"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Link href="/" className="flex items-center gap-2 group">
                <motion.span 
                  className={`font-serif text-2xl font-bold tracking-tight transition-colors duration-300 ${
                    isScrolled || variant === 'dark' ? "text-black" : "text-white"
                  }`}
                  whileHover={{ scale: 1.02 }}
                >
                  Wanderlust
                </motion.span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {/* Language & Currency Selectors */}
              <div className="flex items-center gap-2 mr-4">
                <LanguageSelector isScrolled={isScrolled} variant={variant} />
                <CurrencyConverter isScrolled={isScrolled} variant={variant} />
              </div>
              
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (index + 1), duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    className={`group relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                      isScrolled || variant === 'dark' ? "text-black" : "text-white/90"
                    }`}
                  >
                    <span className="relative z-10">{link.name}</span>
                    <motion.span
                      className="absolute inset-0 rounded-full bg-primary/10"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.span
                      className="absolute bottom-1 left-4 right-4 h-0.5 bg-primary origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="ml-4"
              >
                <Link href="/destinations">
                  <MagneticButton
                    className="group relative overflow-hidden rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Book Now
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                    </span>
                    <motion.span
                      className="absolute inset-0 bg-accent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </MagneticButton>
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden relative z-50 p-2 transition-colors ${
                isMobileMenuOpen ? "text-background" : isScrolled || variant === 'dark' ? "text-black" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <motion.span
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 8 : 0,
                  }}
                  className="absolute top-1 left-0 w-6 h-0.5 bg-current"
                />
                <motion.span
                  animate={{
                    opacity: isMobileMenuOpen ? 0 : 1,
                    x: isMobileMenuOpen ? 20 : 0,
                  }}
                  className="absolute top-3 left-0 w-6 h-0.5 bg-current"
                />
                <motion.span
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -8 : 0,
                  }}
                  className="absolute top-5 left-0 w-6 h-0.5 bg-current"
                />
              </div>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Fullscreen */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 bg-primary md:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center px-6">
              <nav className="flex flex-col items-center gap-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    custom={i}
                    variants={linkVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="group flex items-center gap-4 text-background"
                    >
                      <span className="text-sm font-medium text-background/50">
                        0{i + 1}
                      </span>
                      <span className="font-serif text-4xl font-bold transition-colors hover:text-accent">
                        {link.name}
                      </span>
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  custom={navLinks.length}
                  variants={linkVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="mt-8"
                >
                  <Link
                    href="/destinations"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-primary"
                  >
                    Book Now
                    <ArrowUpRight className="h-5 w-5" />
                  </Link>
                </motion.div>
              </nav>

              {/* Bottom contact info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-12 left-6 right-6"
              >
                <div className="flex flex-col gap-2 text-sm">
                  <a href="mailto:hello@wanderlust.travel" className="text-background/60 hover:text-background transition-colors">hello@wanderlust.travel</a>
                  <a href="tel:+15551234567" className="text-background/60 hover:text-background transition-colors">+1 (555) 123-4567</a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
