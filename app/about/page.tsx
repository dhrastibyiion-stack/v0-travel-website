import { Metadata } from "next"
import { AboutContent } from "./about-content"

export const metadata: Metadata = {
  title: "About Us | Wanderlust Travel",
  description: "Learn more about Wanderlust Travel - our story, mission, team, and commitment to creating unforgettable travel experiences since 2009.",
}

export default function AboutPage() {
  return <AboutContent />
}