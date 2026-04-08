"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Clock, User } from "lucide-react"
import { TextReveal } from "./text-reveal"
import { blogPosts, categories, BlogPost } from "@/lib/blog-data"

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={`/blog/${post.id}`}>
      <motion.article
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: index * 0.1, ease: [0.33, 1, 0.68, 1] }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative overflow-hidden rounded-3xl cursor-pointer"
        data-cursor="Read"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          
          {/* Category Badge */}
          <motion.div
            className="absolute top-4 left-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-medium">
              {post.category}
            </span>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {/* Meta info */}
            <div className="flex items-center gap-4 text-white/70 text-xs mb-3">
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
              <span className="flex items-center gap-1">
                <User className="h-3.5 w-3.5" />
                {post.author}
              </span>
            </div>

            <h3 className="font-serif font-bold text-white text-lg md:text-xl line-clamp-2 group-hover:text-accent transition-colors">
              {post.title}
            </h3>
            
            <p className="mt-2 text-white/70 text-sm line-clamp-2">
              {post.excerpt}
            </p>

            {/* Read more */}
            <motion.div
              className="flex items-center gap-2 mt-4 text-white/90 text-sm font-medium"
              animate={{ x: isHovered ? 5 : 0 }}
            >
              Read Article
              <ArrowUpRight className="h-4 w-4" />
            </motion.div>
          </motion.div>
        </div>
      </motion.article>
    </Link>
  )
}

function FeaturedPost({ post }: { post: BlogPost }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={`/blog/${post.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-3xl cursor-pointer"
        data-cursor="Read"
      >
        <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full bg-secondary">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent lg:bg-gradient-to-r lg:from-black/70 lg:via-black/30 lg:to-transparent" />
        </div>
        
        <div className="relative bg-secondary/50 p-6 md:p-8 lg:p-12 flex flex-col justify-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="inline-block bg-accent text-white px-3 py-1 rounded-full text-xs font-medium mb-4">
              Featured
            </span>
            
            <span className="text-primary text-xs font-medium uppercase tracking-wider">
              {post.category}
            </span>
            
            <h3 className="font-serif font-bold text-foreground text-2xl md:text-3xl lg:text-4xl mt-2 mb-4 group-hover:text-primary transition-colors">
              {post.title}
            </h3>
            
            <p className="text-muted-foreground text-lg line-clamp-3">
              {post.excerpt}
            </p>
            
            <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold text-primary">
                  {post.authorAvatar}
                </span>
                {post.author}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Link>
  )
}

export function Blog() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  const featuredPost = blogPosts.find(post => post.featured) || blogPosts[0]
  const regularPosts = filteredPosts.filter(post => post.id !== featuredPost.id)

  return (
    <section id="blog" className="py-16 md:py-24 lg:py-32 bg-secondary overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 md:mb-20 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-xs md:text-sm font-medium uppercase tracking-[0.2em] md:tracking-[0.3em] text-primary"
          >
            Travel Blog
          </motion.p>
          
          <h2 className="font-serif text-3xl md:text-5xl lg:text-7xl font-bold text-foreground">
            <TextReveal delay={0.2}>Latest Travel</TextReveal>
            <br />
            <span className="text-primary">
              <TextReveal delay={0.4}>Stories & Tips</TextReveal>
            </span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mx-auto mt-6 md:mt-8 max-w-2xl text-base md:text-lg text-muted-foreground px-4"
          >
            Expert insights, travel guides, and inspiring stories from around the world.
          </motion.p>
        </div>

        {/* Featured Post */}
        <div className="mb-12 md:mb-16">
          <FeaturedPost post={featuredPost} />
        </div>

        {/* Category Filter */}
        <motion.div
          ref={ref}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-white text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {regularPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 md:mt-16 text-center"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            View All Articles
            <ArrowUpRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}