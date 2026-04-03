import { Compass, Mountain, Waves, TreePalm, Camera, Utensils } from "lucide-react"

export interface Experience {
  id: string
  slug: string
  icon: string
  title: string
  shortDescription: string
  fullDescription: string
  color: string
  iconColor: string
  heroImage: string
  highlights: string[]
  included: string[]
  duration: string
  bestSeason: string
  price: string
  category: string
}

export const experiencesData: Experience[] = [
  {
    id: "1",
    slug: "cultural-tours",
    icon: "Compass",
    title: "Cultural Tours",
    shortDescription: "Immerse yourself in local traditions and heritage",
    fullDescription: "Experience the rich tapestry of world cultures through our carefully curated cultural tours. From ancient temples to traditional villages, from bustling markets to serene ceremonies, our tours offer an authentic glimpse into the heart and soul of each destination. You'll engage with local artisans, participate in traditional practices, and create memories that transcend typical tourism.",
    color: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
    heroImage: "/images/cultural.jpg",
    highlights: [
      "Visit ancient temples and sacred sites",
      "Interact with local artisans and craftsmen",
      "Participate in traditional ceremonies",
      "Explore historical landmarks with expert guides",
      "Taste authentic local cuisines"
    ],
    included: [
      "Expert local guides",
      "All entrance fees",
      "Traditional meal experiences",
      "Cultural workshop participation",
      "Comfortable transportation"
    ],
    duration: "7-14 days",
    bestSeason: "Year-round",
    price: "From $2,500",
    category: "Cultural"
  },
  {
    id: "2",
    slug: "adventure-trips",
    icon: "Mountain",
    title: "Adventure Trips",
    shortDescription: "Thrilling expeditions for the bold explorer",
    fullDescription: "Push your boundaries with our adrenaline-pumping adventure trips. Whether you're conquering mountain peaks, navigating wild rivers, or exploring untamed wilderness, our expert guides ensure safety while maximizing excitement. From trekking through remote landscapes to scaling volcanic summits, each adventure is designed to challenge and inspire.",
    color: "from-accent/30 to-accent/10",
    iconColor: "text-accent",
    heroImage: "/images/adventure.jpg",
    highlights: [
      "Mountain trekking expeditions",
      "White-water rafting",
      "Rock climbing and mountaineering",
      "Jungle survival experiences",
      "Desert expeditions"
    ],
    included: [
      "Professional adventure guides",
      "All safety equipment",
      "Premium accommodation",
      "All meals during expedition",
      "Transportation to/from trailheads"
    ],
    duration: "5-21 days",
    bestSeason: "Spring & Autumn",
    price: "From $3,200",
    category: "Adventure"
  },
  {
    id: "3",
    slug: "beach-getaways",
    icon: "Waves",
    title: "Beach Getaways",
    shortDescription: "Relax on pristine shores around the world",
    fullDescription: "Unwind on the world's most breathtaking beaches with our carefully selected beach destinations. From hidden coves to famous resort destinations, we offer experiences ranging from pure relaxation to water sports adventures. Picture yourself in overwater bungalows, on pristine white sand beaches, or exploring coral reefs teeming with marine life.",
    color: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
    heroImage: "/images/beach.jpg",
    highlights: [
      "World-class beach resorts",
      "Snorkeling and diving expeditions",
      "Sunset cruises and sailing",
      "Private island experiences",
      "Beach spa treatments"
    ],
    included: [
      "Luxury beachfront accommodation",
      "Water sports equipment",
      "Beach club access",
      "Daily breakfast",
      "Airport transfers"
    ],
    duration: "5-14 days",
    bestSeason: "Winter & Spring",
    price: "From $2,000",
    category: "Relaxation"
  },
  {
    id: "4",
    slug: "eco-tourism",
    icon: "TreePalm",
    title: "Eco Tourism",
    shortDescription: "Sustainable travel that protects nature",
    fullDescription: "Travel responsibly with our eco-conscious tourism experiences. Stay in eco-lodges, support conservation efforts, and learn about sustainable practices while exploring pristine natural environments. Our eco-tours are designed to minimize environmental impact while maximizing positive contributions to local communities and conservation.",
    color: "from-accent/30 to-accent/10",
    iconColor: "text-accent",
    heroImage: "/images/eco.jpg",
    highlights: [
      "Wildlife conservation projects",
      "Rainforest exploration",
      "Sustainable farm visits",
      "Marine conservation experiences",
      "Community-based tourism"
    ],
    included: [
      "Eco-certified accommodations",
      "Expert naturalist guides",
      "Conservation fees",
      "Organic meals",
      "Carbon offset program"
    ],
    duration: "7-14 days",
    bestSeason: "Year-round",
    price: "From $2,800",
    category: "Sustainability"
  },
  {
    id: "5",
    slug: "photography-tours",
    icon: "Camera",
    title: "Photography Tours",
    shortDescription: "Capture stunning moments in iconic locations",
    fullDescription: "Capture breathtaking moments with our specialized photography tours. Whether you're a professional photographer or an enthusiastic amateur, our tours are designed to take you to the most photogenic locations at the optimal times. Learn techniques from expert photographers while visiting stunning landscapes, vibrant cities, and exotic wildlife habitats.",
    color: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
    heroImage: "/images/photography.jpg",
    highlights: [
      "Golden hour shoots at iconic locations",
      "Wildlife photography expeditions",
      "Street photography in vibrant cities",
      "Landscape and nature photography",
      "Night sky and astrophotography"
    ],
    included: [
      "Professional photography guide",
      "Camera equipment rental available",
      "Post-processing workshops",
      "Photo editing software training",
      "Access to exclusive locations"
    ],
    duration: "8-15 days",
    bestSeason: "Varies by location",
    price: "From $3,500",
    category: "Photography"
  },
  {
    id: "6",
    slug: "culinary-journeys",
    icon: "Utensils",
    title: "Culinary Journeys",
    shortDescription: "Taste authentic flavors from every corner",
    fullDescription: "Embark on a gastronomic adventure through the world's most flavorful destinations. Our culinary tours take you beyond typical restaurant dining to experience authentic local cuisine, from street food favorites to gourmet masterpieces. Visit local markets, learn traditional cooking techniques, and dine in unique settings you'll never forget.",
    color: "from-accent/30 to-accent/10",
    iconColor: "text-accent",
    heroImage: "/images/culinary.jpg",
    highlights: [
      "Cooking classes with master chefs",
      "Local market tours and tastings",
      "Wine and cuisine pairings",
      "Street food exploration",
      "Farm-to-table dining experiences"
    ],
    included: [
      "All cooking classes",
      "Professional chef guides",
      "All meals and tastings",
      "Wine pairings",
      "Recipe booklet to take home"
    ],
    duration: "7-12 days",
    bestSeason: "Year-round",
    price: "From $2,800",
    category: "Culinary"
  }
]

export function getExperienceBySlug(slug: string): Experience | undefined {
  return experiencesData.find(exp => exp.slug === slug)
}

export function getAllExperienceSlugs(): string[] {
  return experiencesData.map(exp => exp.slug)
}

export function getExperienceIcon(iconName: string) {
  const icons: Record<string, React.ComponentType<any>> = {
    Compass,
    Mountain,
    Waves,
    TreePalm,
    Camera,
    Utensils
  }
  return icons[iconName] || Compass
}