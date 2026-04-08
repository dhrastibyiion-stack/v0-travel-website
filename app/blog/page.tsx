import { Metadata } from "next"
import { BlogContent } from "./blog-content"

export const metadata: Metadata = {
  title: "Travel Blog | Wanderlust - Latest Travel Stories & Tips",
  description: "Expert travel guides, tips, and inspiring stories from around the world. Plan your next adventure with our comprehensive blog.",
}

export default function BlogPage() {
  return <BlogContent />
}