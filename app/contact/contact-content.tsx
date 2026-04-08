"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Send, Check, Mail, Phone, MapPin, Clock, MessageCircle, User, FileText } from "lucide-react"
import { MagneticButton } from "@/components/travel/magnetic-button"

export function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: "", email: "", subject: "", message: "" })
      }, 3000)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email Us",
      value: "hello@wanderlust.travel",
      description: "We reply within 2 hours",
      href: "mailto:hello@wanderlust.travel",
    },
    {
      icon: Phone,
      label: "Call Us",
      value: "+1 (555) 123-4567",
      description: "Available 24/7",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      label: "Visit Us",
      value: "123 Travel Street",
      description: "New York, NY 10001",
      href: null,
    },
    {
      icon: Clock,
      label: "Working Hours",
      value: "Mon - Sat",
      description: "9AM - 8PM EST",
      href: null,
    },
  ]

  return (
    <>
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              Contact <span className="text-accent">Us</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Have questions about your next adventure? We're here to help you plan the perfect getaway.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  Get In Touch
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Whether you have a question about destinations, bookings, or need help planning your trip, our team is ready to assist you.
                </p>
              </motion.div>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href || undefined}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`flex items-start gap-4 rounded-2xl bg-secondary/50 p-5 transition-all duration-300 hover:bg-secondary ${
                      info.href ? "cursor-pointer hover:border-accent/30" : ""
                    }`}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                      <info.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{info.label}</h3>
                      <p className="text-sm font-medium text-foreground">{info.value}</p>
                      <p className="text-xs text-muted-foreground">{info.description}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-10 rounded-2xl bg-accent/10 p-6"
              >
                <div className="flex items-center gap-3">
                  <MessageCircle className="h-6 w-6 text-accent" />
                  <div>
                    <h3 className="font-semibold text-foreground">Live Chat Available</h3>
                    <p className="text-sm text-muted-foreground">
                      Chat with us directly for instant support during business hours.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl bg-secondary/30 p-8 lg:p-10"
            >
              <h3 className="font-serif text-xl font-bold text-foreground">
                Send Us a Message
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill out the form below and we'll get back to you soon.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div>
                  <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                    <User className="h-4 w-4" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                    <Mail className="h-4 w-4" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                    <FileText className="h-4 w-4" />
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="booking">Booking Inquiry</option>
                    <option value="existing">Existing Booking</option>
                    <option value="general">General Question</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                    <MessageCircle className="h-4 w-4" />
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your question or concern..."
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                  />
                </div>

                <MagneticButton
                  type="submit"
                  className={`w-full relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold transition-all duration-300 overflow-hidden ${
                    isSubmitted
                      ? "bg-accent text-foreground"
                      : "bg-primary text-white hover:bg-accent hover:text-foreground"
                  }`}
                >
                  <span
                    initial={undefined}
                    animate={{ y: isSubmitted ? -30 : 0 }}
                    className="flex items-center gap-2"
                  >
                    {isSubmitted ? "Message Sent!" : "Send Message"}
                    <Send className="h-4 w-4" />
                  </span>
                  <span
                    initial={undefined}
                    animate={{ y: isSubmitted ? 0 : 30 }}
                    className="absolute inset-0 flex items-center justify-center gap-2"
                  >
                    <Check className="h-5 w-5" />
                    Thank You!
                  </span>
                </MagneticButton>

                <p className="text-center text-xs text-muted-foreground">
                  By submitting this form, you agree to our Privacy Policy.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl font-bold">Frequently Asked Questions</h2>
          <p className="mt-2 text-background/60">Check our Help Center for quick answers to common questions.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/help-center"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-foreground hover:bg-accent/90 transition-colors"
            >
              Visit Help Center
            </a>
            <a
              href="/travel-insurance"
              className="inline-flex items-center gap-2 rounded-full border border-background/20 px-6 py-3 font-semibold text-background hover:bg-background/10 transition-colors"
            >
              Travel Insurance
            </a>
          </div>
        </div>
      </section>
    </>
  )
}