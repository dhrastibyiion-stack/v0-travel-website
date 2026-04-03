"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useRef, useState, Suspense } from "react"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { ArrowLeft, ArrowUpRight, Star, MapPin, Search } from "lucide-react"
import { destinations, allTags, getDestinationsByTag, allContinents, getDestinationsByContinent } from "@/lib/destinations-data"
import { Header } from "@/components/travel/header"

function DestinationCard({ destination, index }: {
  destination: typeof destinations[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, { stiffness: 150, damping: 15 })
  const springY = useSpring(y, { stiffness: 150, damping: 15 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) * 0.1)
    y.set((e.clientY - centerY) * 0.1)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <Link href={`/destinations/${destination.id}`}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: index * 0.1, ease: [0.33, 1, 0.68, 1] }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="group relative overflow-hidden rounded-3xl cursor-pointer aspect-[4/3]"
      >
        <motion.div
          style={{ x: springX, y: springY }}
          className="relative aspect-[4/3]"
        >
          <Image
            src={destination.heroImage}
            alt={destination.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
            animate={{ opacity: isHovered ? 1 : 0.9 }}
          />

          <motion.div
            className="absolute inset-0 rounded-3xl border-2 border-white/0"
            animate={{ borderColor: isHovered ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0)" }}
            transition={{ duration: 0.3 }}
          />

          <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Star className="fill-accent text-accent h-4 w-4" />
                <span className="font-medium text-white text-sm">
                  {destination.rating}
                </span>
              </div>

              <h3 className="font-serif font-bold text-white text-xl md:text-2xl">
                {destination.name}
              </h3>

              <p className="text-white/80 text-sm">
                {destination.country}
              </p>

              <p className="mt-2 text-white/70 text-sm">
                {destination.description}
              </p>
            </motion.div>

            <motion.div
              className="flex items-center justify-between mt-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div>
                <p className="text-xs text-white/60">From</p>
                <p className="font-bold text-white text-lg md:text-xl">
                  {destination.price}
                </p>
              </div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center rounded-full transition-all duration-300 h-9 w-9 md:h-10 md:w-10 bg-white/20 backdrop-blur-sm text-white group-hover:bg-white group-hover:text-foreground"
              >
                <motion.div
                  animate={{ rotate: isHovered ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5" />
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="h-0.5 bg-white/30 mt-4 origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isHovered ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>
      </motion.div>
    </Link>
  )
}

function DestinationsContent() {
  const searchParams = useSearchParams()
  const activeCategory = searchParams.get("category")
  const activeContinent = searchParams.get("continent")
  const initialSearch = searchParams.get("search") || ""
  const [searchQuery, setSearchQuery] = useState(initialSearch)

  let filteredDestinations = destinations

  if (activeCategory) {
    filteredDestinations = getDestinationsByTag(activeCategory)
  }
  if (activeContinent) {
    filteredDestinations = filteredDestinations.filter(d => d.continent === activeContinent)
  }

  const searchFiltered = searchQuery
    ? filteredDestinations.filter(d =>
        d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.continent.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredDestinations

  const activeLabel = activeCategory
    ? allTags.find(t => t.slug === activeCategory)?.label || activeCategory
    : activeContinent
    ? activeContinent
    : null

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Banner */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src="/images/hero-travel.jpg"
          alt="Explore Destinations"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 text-sm transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>

            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              {activeLabel ? activeLabel : "Explore Destinations"}
            </h1>

            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              {activeLabel
                ? `Discover the best ${activeLabel.toLowerCase()} destinations around the world.`
                : "Discover breathtaking destinations and create unforgettable memories."
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters and Content */}
      <section className="py-12 md:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-border bg-card pl-12 pr-6 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            <Link
              href="/destinations"
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                !activeCategory
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground hover:bg-primary/10"
              }`}
            >
              All
            </Link>
            {allTags.map((tag) => (
              <Link
                key={tag.slug}
                href={`/destinations?category=${tag.slug}`}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  activeCategory === tag.slug
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-primary/10"
                }`}
              >
                {tag.label}
              </Link>
            ))}
          </motion.div>

          {/* Continent Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {allContinents.map((continent) => (
              <Link
                key={continent}
                href={activeCategory ? `/destinations?category=${activeCategory}&continent=${continent}` : `/destinations?continent=${continent}`}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  activeContinent === continent
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary text-foreground hover:bg-accent/10"
                }`}
              >
                {continent}
              </Link>
            ))}
          </motion.div>

          {/* Results Count */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center text-muted-foreground mb-8"
          >
            Showing {searchFiltered.length} destination{searchFiltered.length !== 1 ? "s" : ""}
            {activeLabel ? ` in ${activeLabel}` : ""}
          </motion.p>

          {/* Destinations Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {searchFiltered.map((destination, index) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
                index={index}
              />
            ))}
          </div>

          {searchFiltered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-xl text-muted-foreground">
                No destinations found matching your criteria.
              </p>
              <Link
                href="/destinations"
                className="inline-flex items-center gap-2 mt-4 text-primary hover:underline"
              >
                View all destinations
              </Link>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  )
}

export default function DestinationsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading destinations...</p>
      </div>
    }>
      <DestinationsContent />
    </Suspense>
  )
}
