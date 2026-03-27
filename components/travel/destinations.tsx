"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { ArrowUpRight, Star } from "lucide-react"

const destinations = [
  {
    id: 1,
    name: "Santorini",
    country: "Greece",
    image: "/images/santorini.jpg",
    price: "$1,299",
    rating: 4.9,
    description: "Iconic sunsets and white-washed villages",
  },
  {
    id: 2,
    name: "Bali",
    country: "Indonesia",
    image: "/images/bali.jpg",
    price: "$899",
    rating: 4.8,
    description: "Tropical paradise with ancient temples",
  },
  {
    id: 3,
    name: "Tokyo",
    country: "Japan",
    image: "/images/tokyo.jpg",
    price: "$1,499",
    rating: 4.9,
    description: "Where tradition meets innovation",
  },
  {
    id: 4,
    name: "Patagonia",
    country: "Argentina",
    image: "/images/patagonia.jpg",
    price: "$1,799",
    rating: 4.7,
    description: "Untamed wilderness and glacial beauty",
  },
  {
    id: 5,
    name: "Marrakech",
    country: "Morocco",
    image: "/images/morocco.jpg",
    price: "$749",
    rating: 4.6,
    description: "Vibrant souks and exotic culture",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export function Destinations() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="destinations" className="py-24 lg:py-32 bg-background">
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
            Popular Destinations
          </p>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            <span className="block text-balance">Explore Our Top</span>
            <span className="block text-balance">Destinations</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Discover the most sought-after travel destinations handpicked by our
            experts for unforgettable experiences.
          </p>
        </motion.div>

        {/* Destinations Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {/* Featured Large Card */}
          <motion.div
            variants={itemVariants}
            className="group relative col-span-1 row-span-2 overflow-hidden rounded-3xl md:col-span-2 lg:col-span-2"
          >
            <div className="relative aspect-[4/3] md:aspect-auto md:h-full min-h-[400px] lg:min-h-[560px]">
              <Image
                src={destinations[0].image}
                alt={destinations[0].name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="h-4 w-4 fill-accent text-accent" />
                  <span className="text-sm font-medium text-white">
                    {destinations[0].rating}
                  </span>
                </div>
                <h3 className="font-serif text-3xl font-bold text-white md:text-4xl">
                  {destinations[0].name}
                </h3>
                <p className="text-white/80">{destinations[0].country}</p>
                <p className="mt-2 text-white/70 max-w-md">
                  {destinations[0].description}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/60">Starting from</p>
                    <p className="text-2xl font-bold text-white">
                      {destinations[0].price}
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-foreground transition-colors hover:bg-white/90"
                  >
                    Explore
                    <ArrowUpRight className="h-4 w-4" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Smaller Cards */}
          {destinations.slice(1).map((destination) => (
            <motion.div
              key={destination.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-3xl"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="h-3.5 w-3.5 fill-accent text-accent" />
                    <span className="text-xs font-medium text-white">
                      {destination.rating}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    {destination.name}
                  </h3>
                  <p className="text-sm text-white/80">{destination.country}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-white/60">From</p>
                      <p className="text-lg font-bold text-white">
                        {destination.price}
                      </p>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 45 }}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-colors group-hover:bg-white"
                    >
                      <ArrowUpRight className="h-5 w-5 text-white group-hover:text-foreground transition-colors" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
