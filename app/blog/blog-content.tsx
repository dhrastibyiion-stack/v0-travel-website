"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Clock, User, Calendar } from "lucide-react"
import { blogPosts, categories, BlogPost } from "@/lib/blog-data"
import { Header } from "@/components/travel/header"
import { Footer } from "@/components/travel/footer"

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
        <div className="relative aspect-[4/3] overflow-hidden">
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

export function BlogContent() {
  const ref = useRef(null)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  return (
    <main className="min-h-screen bg-background">
      <Header variant="dark" />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-primary text-xs md:text-sm font-medium uppercase tracking-[0.3em]">
              Travel Blog
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mt-4">
              Stories & Inspiration
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Expert travel guides, tips, and inspiring stories from around the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            className="flex flex-wrap justify-center gap-2 md:gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-8 md:py-12 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                No articles found in this category.
              </p>
              <button
                onClick={() => setSelectedCategory("All")}
                className="mt-4 text-primary hover:underline"
              >
                View all articles
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}