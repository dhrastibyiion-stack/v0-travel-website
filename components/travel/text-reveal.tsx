"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface TextRevealProps {
  children: string
  className?: string
  delay?: number
  staggerDelay?: number
}

export function TextReveal({ 
  children, 
  className = "", 
  delay = 0,
  staggerDelay = 0.03 
}: TextRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  
  const words = children.split(" ")

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
            transition={{
              duration: 0.5,
              delay: delay + wordIndex * staggerDelay,
              ease: [0.33, 1, 0.68, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

interface CharRevealProps {
  children: string
  className?: string
  delay?: number
}

export function CharReveal({ children, className = "", delay = 0 }: CharRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  
  const chars = children.split("")

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {chars.map((char, charIndex) => (
        <motion.span
          key={charIndex}
          className="inline-block"
          initial={{ y: "100%", opacity: 0, rotateX: 90 }}
          animate={isInView ? { y: 0, opacity: 1, rotateX: 0 } : { y: "100%", opacity: 0, rotateX: 90 }}
          transition={{
            duration: 0.4,
            delay: delay + charIndex * 0.02,
            ease: [0.33, 1, 0.68, 1],
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  )
}
