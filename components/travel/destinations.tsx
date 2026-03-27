"use client"

import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { ArrowUpRight, Star } from "lucide-react"
import { TextReveal } from "./text-reveal"

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

function DestinationCard({ destination, index, isFeatured = false }: { 
  destination: typeof destinations[0]
  index: number
  isFeatured?: boolean 
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
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.33, 1, 0.68, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden rounded-3xl ${
        isFeatured ? "col-span-1 row-span-2 md:col-span-2 lg:col-span-2" : ""
      }`}
      data-cursor="View"
    >
      <motion.div 
        style={{ x: springX, y: springY }}
        className={`relative ${isFeatured ? "aspect-[4/3] md:aspect-auto md:h-full min-h-[400px] lg:min-h-[600px]" : "aspect-[4/3]"}`}
      >
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
          animate={{ opacity: isHovered ? 1 : 0.9 }}
        />
        
        {/* Animated border on hover */}
        <motion.div
          className="absolute inset-0 rounded-3xl border-2 border-white/0"
          animate={{ borderColor: isHovered ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0)" }}
          transition={{ duration: 0.3 }}
        />

        {/* Content */}
        <div className={`absolute inset-0 flex flex-col justify-end ${isFeatured ? "p-8 lg:p-10" : "p-6"}`}>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Star className={`fill-accent text-accent ${isFeatured ? "h-5 w-5" : "h-4 w-4"}`} />
              <span className={`font-medium text-white ${isFeatured ? "text-base" : "text-sm"}`}>
                {destination.rating}
              </span>
            </div>
            
            <h3 className={`font-serif font-bold text-white ${
              isFeatured ? "text-4xl lg:text-5xl" : "text-2xl"
            }`}>
              {destination.name}
            </h3>
            
            <p className={`text-white/80 ${isFeatured ? "text-base" : "text-sm"}`}>
              {destination.country}
            </p>
            
            {isFeatured && (
              <p className="mt-3 text-white/70 max-w-md">
                {destination.description}
              </p>
            )}
          </motion.div>

          <motion.div 
            className={`flex items-center justify-between ${isFeatured ? "mt-8" : "mt-4"}`}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div>
              <p className="text-xs text-white/60">{isFeatured ? "Starting from" : "From"}</p>
              <p className={`font-bold text-white ${isFeatured ? "text-3xl" : "text-xl"}`}>
                {destination.price}
              </p>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center justify-center rounded-full transition-all duration-300 ${
                isFeatured 
                  ? "h-14 w-14 bg-white text-foreground hover:bg-primary hover:text-white" 
                  : "h-10 w-10 bg-white/20 backdrop-blur-sm text-white group-hover:bg-white group-hover:text-foreground"
              }`}
            >
              <motion.div
                animate={{ rotate: isHovered ? 45 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowUpRight className={isFeatured ? "h-6 w-6" : "h-5 w-5"} />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Progress bar animation */}
          <motion.div
            className={`h-0.5 bg-white/30 mt-6 origin-left ${isFeatured ? "" : "mt-4"}`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isHovered ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

export function Destinations() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="destinations" className="py-24 lg:py-32 bg-background overflow-hidden">
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
            Popular Destinations
          </motion.p>
          
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-7xl">
            <TextReveal delay={0.2}>Explore Our Top</TextReveal>
            <br />
            <span className="text-primary">
              <TextReveal delay={0.4}>Destinations</TextReveal>
            </span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground"
          >
            Discover the most sought-after travel destinations handpicked by our
            experts for unforgettable experiences.
          </motion.p>
        </div>

        {/* Destinations Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <DestinationCard destination={destinations[0]} index={0} isFeatured />
          {destinations.slice(1).map((destination, index) => (
            <DestinationCard 
              key={destination.id} 
              destination={destination} 
              index={index + 1} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}
