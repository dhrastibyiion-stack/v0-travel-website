'use client'

import { FormEvent, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { getPlaceBySlug } from '@/lib/places-data'
import { Heart, Star, MapPin, Clock, DollarSign, Users, Calendar, ChevronDown, ChevronRight, ArrowLeft } from 'lucide-react'
import { useParams } from 'next/navigation'
import { Header } from '@/components/travel/header'

export default function PlaceDetail() {
  const params = useParams()
  const place = getPlaceBySlug(params.id as string)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [expandedDay, setExpandedDay] = useState<number | null>(0)
  const [wishlist, setWishlist] = useState(false)
  const [bookingStep, setBookingStep] = useState('overview')
  const [booking, setBooking] = useState({
    fullName: '',
    email: '',
    phone: '',
    travelers: '1',
    departureDate: '',
    notes: '',
  })
  const [bookingStatus, setBookingStatus] = useState<'idle' | 'success'>('idle')

  useEffect(() => {
    if (!place) return
    const saved = window.localStorage.getItem(`wanderlust-booking-${place.slug}`)
    if (saved) {
      try {
        setBooking(JSON.parse(saved))
      } catch {
        window.localStorage.removeItem(`wanderlust-booking-${place.slug}`)
      }
    }
  }, [place])

  if (!place) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl font-serif font-bold text-foreground mb-4">Place Not Found</h1>
          <Link href="/">
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Return Home
            </button>
          </Link>
        </motion.div>
      </div>
    )
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-background"
    >
      <Header variant="dark" />
      
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="absolute left-6 top-24 z-40"
      >
        <Link href="/#destinations">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors shadow-lg">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Back</span>
          </button>
        </Link>
        </Link>
      </motion.div>

      {/* Hero Section with Gallery */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <motion.div initial={{ scale: 1.1, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.7 }} className="relative w-full h-full">
          <Image
            src={place.gallery[activeImageIndex]}
            alt={place.name}
            fill
            className="object-cover w-full h-full"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </motion.div>

        {/* Gallery Thumbnails */}
        <div className="absolute bottom-6 left-6 right-6 flex gap-2 sm:gap-4 z-20">
          {place.gallery.map((_, idx) => (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveImageIndex(idx)}
              className={`relative h-20 w-20 sm:h-24 sm:w-24 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                idx === activeImageIndex ? 'ring-2 ring-accent scale-105' : 'opacity-70 hover:opacity-100'
              }`}
            >
              <Image
                src={place.gallery[idx]}
                alt={`Gallery ${idx + 1}`}
                fill
                className="object-cover"
                sizes="100px"
              />
            </motion.button>
          ))}
        </div>

        {/* Wishlist Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setWishlist(!wishlist)}
          className="absolute top-6 right-6 z-20 p-3 rounded-full bg-white/90 backdrop-blur-md hover:bg-white transition-colors shadow-lg"
        >
          <Heart className={`w-6 h-6 ${wishlist ? 'fill-red-500 text-red-500' : 'text-foreground'}`} />
        </motion.button>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 lg:p-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <div className="flex items-center gap-2 mb-4">
              <span className="px-4 py-1.5 bg-accent/90 backdrop-blur-md rounded-full text-sm font-semibold text-foreground">
                {place.continent}
              </span>
              <div className="flex items-center gap-1 px-4 py-1.5 bg-yellow-500/90 backdrop-blur-md rounded-full">
                <Star className="w-4 h-4 fill-white text-white" />
                <span className="text-sm font-semibold text-white">{place.rating}</span>
              </div>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-white mb-2 text-balance">
              {place.name}
            </h1>
            <p className="text-lg sm:text-xl text-white/90 font-medium">{place.tagline}</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Quick Facts Cards */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {[
                { icon: DollarSign, label: 'Price', value: place.price },
                { icon: Clock, label: 'Duration', value: place.duration },
                { icon: MapPin, label: 'Country', value: place.country },
                { icon: Calendar, label: 'Best Time', value: place.bestTime },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-card p-4 rounded-xl border border-border hover:border-accent transition-colors"
                >
                  <item.icon className="w-6 h-6 text-accent mb-2" />
                  <p className="text-xs text-muted-foreground font-medium mb-1">{item.label}</p>
                  <p className="text-sm font-bold text-foreground">{item.value}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-serif font-bold text-foreground">About {place.name}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{place.longDescription}</p>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-serif font-bold text-foreground">Highlights</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {place.highlights.map((highlight, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-3 p-4 bg-card rounded-lg border border-border/50"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                      <ChevronRight className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-foreground font-medium">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* What's Included */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-serif font-bold text-foreground">What&apos;s Included</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {place.included.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-3 p-4 bg-accent/10 rounded-lg border border-accent/20"
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent text-white flex items-center justify-center mt-0.5 text-xs font-bold">
                      ✓
                    </div>
                    <span className="text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Day-by-Day Itinerary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-serif font-bold text-foreground">Day-by-Day Itinerary</h2>
              <div className="space-y-3">
                {place.itinerary.map((day, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <button
                      onClick={() => setExpandedDay(expandedDay === day.day ? null : day.day)}
                      className="w-full p-4 bg-card border border-border rounded-lg hover:border-accent transition-colors text-left"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-serif font-bold text-lg text-foreground">
                            Day {day.day}: {day.title}
                          </h3>
                        </div>
                        <motion.div
                          animate={{ rotate: expandedDay === day.day ? 180 : 0 }}
                          className="flex-shrink-0"
                        >
                          <ChevronDown className="w-5 h-5 text-muted-foreground" />
                        </motion.div>
                      </div>
                    </button>
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: expandedDay === day.day ? 'auto' : 0,
                        opacity: expandedDay === day.day ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="p-4 bg-card/50 border-x border-b border-border text-muted-foreground leading-relaxed">
                        {day.description}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Destination Info Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4"
            >
              {[
                { label: 'Language', value: place.language },
                { label: 'Currency', value: place.currency },
                { label: 'Reviews', value: `${place.reviewCount.toLocaleString()} reviews` },
              ].map((info, idx) => (
                <div key={idx} className="bg-card p-4 rounded-lg border border-border/50">
                  <p className="text-xs text-muted-foreground font-medium mb-1">{info.label}</p>
                  <p className="text-sm font-semibold text-foreground">{info.value}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Sidebar - Booking Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24 bg-card rounded-2xl border border-border p-6 space-y-6 shadow-lg">
              {/* Price Section */}
              <div className="border-b border-border pb-6">
                <p className="text-sm text-muted-foreground mb-1">Price per person</p>
                <p className="text-4xl font-serif font-bold text-foreground mb-2">{place.price}</p>
                <p className="text-sm text-muted-foreground">{place.duration}</p>
              </div>

              {/* Booking Form */}
              <form
                className="space-y-4"
                onSubmit={(event: FormEvent<HTMLFormElement>) => {
                  event.preventDefault()
                  window.localStorage.setItem(`wanderlust-booking-${place.slug}`, JSON.stringify(booking))
                  setBookingStatus('success')
                }}
              >
                <div>
                  <label htmlFor="fullName" className="mb-2 block text-sm font-semibold text-foreground">Full name</label>
                  <input id="fullName" required value={booking.fullName} onChange={(event) => setBooking({ ...booking, fullName: event.target.value })} placeholder="Your full name" className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground outline-none focus:ring-2 focus:ring-accent" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold text-foreground">Email address</label>
                  <input id="email" required type="email" value={booking.email} onChange={(event) => setBooking({ ...booking, email: event.target.value })} placeholder="you@example.com" className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground outline-none focus:ring-2 focus:ring-accent" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="travelers" className="mb-2 block text-sm font-semibold text-foreground">Travelers</label>
                    <select id="travelers" value={booking.travelers} onChange={(event) => setBooking({ ...booking, travelers: event.target.value })} className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground outline-none focus:ring-2 focus:ring-accent">
                      {[1, 2, 3, 4, 5, 6].map((number) => <option key={number} value={number}>{number}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="departureDate" className="mb-2 block text-sm font-semibold text-foreground">Departure</label>
                    <input id="departureDate" required type="date" value={booking.departureDate} onChange={(event) => setBooking({ ...booking, departureDate: event.target.value })} min={new Date().toISOString().split('T')[0]} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground outline-none focus:ring-2 focus:ring-accent" />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-foreground">Phone number</label>
                  <input id="phone" required type="tel" value={booking.phone} onChange={(event) => setBooking({ ...booking, phone: event.target.value })} placeholder="+1 555 000 0000" className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground outline-none focus:ring-2 focus:ring-accent" />
                </div>
                <div>
                  <label htmlFor="notes" className="mb-2 block text-sm font-semibold text-foreground">Special requests <span className="font-normal text-muted-foreground">(optional)</span></label>
                  <textarea id="notes" rows={3} value={booking.notes} onChange={(event) => setBooking({ ...booking, notes: event.target.value })} placeholder="Tell us anything we should know" className="w-full resize-none rounded-lg border border-border bg-background px-4 py-2 text-foreground outline-none focus:ring-2 focus:ring-accent" />
                </div>

                <div className="space-y-3 border-t border-border pt-4">
                  <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full rounded-lg bg-accent py-3 font-bold text-accent-foreground transition-colors hover:bg-accent/90">{bookingStatus === 'success' ? 'Booking saved' : 'Book Now'}</motion.button>
                  <button type="button" onClick={() => { window.localStorage.removeItem(`wanderlust-booking-${place.slug}`); setBooking({ fullName: '', email: '', phone: '', travelers: '1', departureDate: '', notes: '' }); setBookingStatus('idle') }} className="w-full text-sm font-semibold text-muted-foreground hover:text-foreground">Clear saved details</button>
                </div>
                {bookingStatus === 'success' && <p role="status" className="rounded-lg bg-accent/10 p-3 text-center text-sm font-medium text-foreground">Your request is saved on this device. We&apos;ll contact you to confirm availability.</p>}
              </form>

              {/* Trust Badge */}
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 text-center text-sm">
                <p className="text-foreground font-semibold">🏆 Award-Winning Tours</p>
                <p className="text-muted-foreground text-xs mt-1">Trusted by thousands of travelers</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Similar Places CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Ready to Explore?</h2>
            <p className="text-lg text-muted-foreground mb-8">Discover more amazing destinations and start your adventure today.</p>
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent/90 transition-colors"
              >
                Explore All Places
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.main>
  )
}
