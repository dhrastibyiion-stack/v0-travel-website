"use client"

import { motion, useInView } from "framer-motion"
import { useRef, use } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, User, Calendar, Share2, Heart, MessageCircle } from "lucide-react"
import { Header } from "@/components/travel/header"
import { Footer } from "@/components/travel/footer"

interface BlogPostPageProps {
  params: {
    id: string
  }
}

const blogContent: Record<string, {
  title: string
  excerpt: string
  category: string
  author: string
  authorAvatar: string
  date: string
  readTime: string
  image: string
  content: {
    text: string
    image?: string
    imageCaption?: string
  }[]
  relatedPosts: string[]
}> = {
  "solo-travel-tips": {
    title: "Solo Travel: 15 Essential Tips for First-Timers",
    excerpt: "Everything you need to know before embarking on your first solo adventure, from safety to making friends.",
    category: "Travel Tips",
    author: "Sarah Chen",
    authorAvatar: "SC",
    date: "Mar 25, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
    content: [
      {
        text: "Solo travel is one of the most rewarding experiences you can have. It pushes you out of your comfort zone, forces you to rely on yourself, and opens doors to connections you might never have made otherwise. But it can also be intimidating, especially for first-timers.",
      },
      {
        text: "Start small. If the idea of traveling alone to a foreign country scares you, begin with a solo weekend trip to a nearby city. Get comfortable with your own company before tackling bigger adventures. The goal is to build confidence gradually.",
        image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
        imageCaption: "Solo traveler exploring a new city",
      },
      {
        text: "Safety should always be your top priority. Research your destination thoroughly before arriving. Learn about local customs and any areas to avoid. Keep your valuables secure, and always have a copy of your important documents stored digitally.",
      },
      {
        text: "One of the biggest concerns for solo travelers is loneliness. The truth is, solo travel makes you more open to meeting people. Stay in hostels or book tours and activities where you'll naturally encounter other travelers. Some of the best friendships are formed in the most unexpected places.",
        image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=800&q=80",
        imageCaption: "Meeting fellow travelers at a hostel",
      },
      {
        text: "Trust your instincts. If something feels wrong, remove yourself from the situation. Solo travel is about freedom, but it's also about being smart. The world is generally safer than we think, but it's always better to err on the side of caution.",
      },
    ],
    relatedPosts: ["budget-thailand", "hidden-gems-italy"],
  },
  "best-time-visit-japan": {
    title: "Best Time to Visit Japan: A Seasonal Guide",
    excerpt: "Cherry blossoms in spring or autumn colors in fall? Here's when to plan your Japanese adventure.",
    category: "Planning",
    author: "Yuki Tanaka",
    authorAvatar: "YT",
    date: "Mar 22, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
    content: [
      {
        text: "Japan is a destination that offers something unique in every season. From the delicate cherry blossoms of spring to the vibrant foliage of autumn, each time of year brings its own magic. But knowing when to visit can make or break your trip.",
      },
      {
        text: "Spring, from late March to early May, is perhaps the most popular time to visit Japan. The cherry blossoms, or sakura, transform the country into a pink wonderland.",
        image: "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800&q=80",
        imageCaption: "Cherry blossoms in full bloom at Ueno Park, Tokyo",
      },
      {
        text: "The hanami tradition of flower viewing is taken very seriously, with locals and visitors alike gathering in parks for picnics under the blooming trees. Famous spots like Kyoto's Philosopher's Path and Tokyo's Ueno Park get incredibly crowded, so plan ahead.",
      },
      {
        text: "Summer in Japan brings festivals, fireworks, and a unique energy. The obon festival in mid-August sees many Japanese returning to their hometowns, but for travelers, it's a time of vibrant celebrations. Keep in mind that summer is also hot and humid, especially in the cities.",
      },
      {
        text: "Autumn, from late October to early December, is another spectacular time to visit. The momiji, or autumn leaves, paint the mountains and temples in shades of red, orange, and gold.",
        image: "https://images.unsplash.com/photo-1576675466969-38eeae4b41f6?w=800&q=80",
        imageCaption: "Autumn foliage at Kiyomizu-dera temple, Kyoto",
      },
      {
        text: "Kyoto during this season is particularly magical. The ancient temples with their Japanese gardens provide the perfect backdrop for the vibrant fall colors. It's also prime time for kaiseki dining, as the seasonal ingredients reach their peak.",
      },
      {
        text: "Winter offers a completely different perspective on Japan. Snow-covered landscapes in places like Hokkaido and the Japanese Alps create stunning scenery. It's also the best time for skiing and onsens, with fewer crowds and lower prices in many destinations.",
      },
    ],
    relatedPosts: ["hidden-gems-italy", "solo-travel-tips"],
  },
  "budget-thailand": {
    title: "Thailand on a Budget: Complete 2-Week Itinerary",
    excerpt: "How to explore the Land of Smiles without breaking the bank, including accommodation and food tips.",
    category: "Budget Travel",
    author: "David Park",
    authorAvatar: "DP",
    date: "Mar 18, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80",
    content: [
      {
        text: "Thailand remains one of the most affordable and rewarding destinations in Southeast Asia. With careful planning, you can experience everything from bustling Bangkok to tranquil island beaches without blowing your budget.",
      },
      {
        text: "Bangkok should be your starting point. The city offers an incredible mix of ancient temples, vibrant markets, and world-class street food. The Grand Palace and Wat Pho are must-visit attractions, while the many hostels in the city start at just $5 per night.",
        image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80",
        imageCaption: "Wat Arun temple at sunset, Bangkok",
      },
      {
        text: "For street food, head to Chinatown's Yaowarat Road or the night markets in Sukhumvit. You can eat like a king for under $2 at these local spots. Try the pad thai, som tam (green papaya salad), and fresh mango sticky rice.",
      },
      {
        text: "From Bangkok, take a bus or train north to Chiang Mai. This city is perfect for budget travelers, with affordable guesthouses and some of the best food in Thailand. The famous Sunday night walking street market is not to be missed.",
        image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80",
        imageCaption: "Chiang Mai old city walls",
      },
      {
        text: "Chiang Mai is also the base for treks to elephant sanctuaries and hill tribe villages. Be sure to negotiate prices and choose ethical sanctuaries that don't offer elephant riding.",
      },
      {
        text: "For beach lovers, head to the southern islands. Koh Lanta and Koh Phangan offer more affordable options than the touristy Phuket. You can find bungalows for $10-15 per night, and the beaches are stunning.",
      },
      {
        text: "Keep in mind that Thailand's peak season is November to February, when prices are highest. Traveling in the shoulder season (March-May or September-October) can save you even more money.",
      },
    ],
    relatedPosts: ["solo-travel-tips", "sustainable-travel"],
  },
  "sustainable-travel": {
    title: "Eco-Friendly Travel: How to Reduce Your Footprint",
    excerpt: "Simple changes that make a big difference in minimizing your environmental impact while exploring the world.",
    category: "Sustainability",
    author: "Emma Green",
    authorAvatar: "EG",
    date: "Mar 15, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
    content: [
      {
        text: "Traveling the world doesn't have to mean destroying it. With mindful choices, you can explore incredible destinations while minimizing your environmental impact. Here's how to become a more sustainable traveler.",
      },
      {
        text: "Start by reconsidering your transportation. Air travel is often the biggest contributor to a traveler's carbon footprint. When possible, choose trains over planes, especially for shorter distances. If you must fly, consider direct flights and carbon offset programs.",
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
        imageCaption: "Train travel through the Swiss Alps",
      },
      {
        text: "Once at your destination, opt for public transportation, biking, or walking instead of taxis and rental cars. It's not just better for the environment - you'll often see more of the local culture and interact with locals more authentically.",
      },
      {
        text: "Accommodation choices matter too. Look for hotels and resorts with eco-certifications or those actively implementing sustainable practices like solar power, water conservation, and waste reduction programs.",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
        imageCaption: "Eco-friendly resort in Costa Rica",
      },
      {
        text: "Your daily choices make a difference. Bring a reusable water bottle and shopping bag. Say no to single-use plastics. Choose restaurants that source local ingredients and support local communities.",
      },
      {
        text: "Consider staying at locally-owned accommodations and eating at locally-owned restaurants. This ensures your tourism dollars directly benefit the community you're visiting rather than international corporations.",
      },
      {
        text: "Finally, respect natural environments and wildlife. Follow guidelines for hiking, diving, and wildlife encounters. Never purchase products made from endangered species, and choose ethical wildlife experiences that don't exploit animals.",
      },
    ],
    relatedPosts: ["budget-thailand", "best-time-visit-japan"],
  },
  "safari-guide": {
    title: "African Safari: What to Expect on Your First Trip",
    excerpt: "From the Serengeti to Kruger, here's everything you need to know for an unforgettable safari experience.",
    category: "Adventure",
    author: "James Wilson",
    authorAvatar: "JW",
    date: "Mar 10, 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
    content: [
      {
        text: "An African safari is a bucket-list experience for many travelers. The vast savannas, diverse wildlife, and ancient cultures create memories that last a lifetime. Here's what you need to know to plan your first safari.",
      },
      {
        text: "The two most popular safari destinations are Tanzania's Serengeti and South Africa's Kruger National Park. The Serengeti is famous for the Great Migration, where millions of wildebeest cross the plains from May to July.",
        image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
        imageCaption: "Wildebeest crossing the Mara River during Great Migration",
      },
      {
        text: "Kruger is more accessible and offers excellent self-drive options, making it popular for budget travelers. The park is home to the Big Five (lion, leopard, rhino, elephant, and buffalo) and has a high density of wildlife.",
      },
      {
        text: "The best time for a safari depends on your goals. The dry season (June to October) offers the best wildlife viewing as animals gather around water sources. The wet season brings lush landscapes and newborn animals, plus lower prices.",
        image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80",
        imageCaption: "Elephants at a waterhole in Kruger",
      },
      {
        text: "When booking, consider your accommodation options. Luxury lodges offer exceptional service and prime locations but come with premium prices. Mid-range tented camps provide authentic safari experiences with more reasonable rates.",
      },
      {
        text: "Pack appropriately: neutral-colored clothing, binoculars, a good camera with zoom lens, and sunscreen. Always listen to your guide's instructions, especially around dangerous animals. Keep a safe distance and never exit your vehicle except in designated areas.",
      },
      {
        text: "A safari is not just about seeing animals - it's about experiencing the African bush. The early morning game drives, the sounds of the wilderness at night, and the vast star-filled skies create an unmatched sense of adventure and connection to nature.",
      },
    ],
    relatedPosts: ["sustainable-travel", "budget-thailand"],
  },
  "japan-guide": {
    title: "Japan Unveiled: Tradition Meets Modernity",
    excerpt: "Discover Japan's unique blend of ancient traditions and cutting-edge technology, from zen gardens to neon-lit Tokyo.",
    category: "Destinations",
    author: "Yuki Tanaka",
    authorAvatar: "YT",
    date: "Apr 1, 2026",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
    content: [
      {
        text: "Japan is a land of fascinating contrasts, where ancient temples stand alongside futuristic skyscrapers, and traditional tea ceremonies coexist with cutting-edge technology. This island nation offers travelers an experience unlike anywhere else on Earth.",
      },
      {
        text: "Tokyo, the bustling capital, is a sensory overload of neon lights, towering buildings, and ancient shrines. The district of Shibuya Crossing, where thousands of people cross each time the light changes, is quintessentially Tokyo.",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
        imageCaption: "Tokyo's Shibuya Crossing at night",
      },
      {
        text: "The city's diverse neighborhoods each offer unique experiences. Shinjuku boasts world-class shopping and entertainment, while Asakusa maintains its old-town atmosphere with traditional temples and markets.",
      },
      {
        text: "Kyoto, the former imperial capital, is the best place to experience traditional Japan. Over 2,000 temples and shrines dot the city, including the famous Golden Pavilion (Kinkaku-ji) and the vermillion gates of Fushimi Inari Shrine.",
        image: "https://images.unsplash.com/photo-1624253321171-1be53e12f5f4?w=800&q=80",
        imageCaption: "Fushimi Inari Shrine's famous torii gates",
      },
      {
        text: "Japanese cuisine has earned global recognition. From Michelin-starred sushi restaurants in Tokyo to humble ramen shops in Osaka, the country offers incredible culinary experiences.",
      },
      {
        text: "The Japanese concept of onsen (hot springs) provides a unique way to relax. The country offers everything from outdoor mountain baths to luxurious spa resorts.",
      },
      {
        text: "Japan's natural beauty is stunning. Mount Fuji, Japan's highest peak, is an iconic symbol. The Japanese Alps offer excellent hiking and skiing. In spring, the entire country transforms into a pink wonderland.",
      },
      {
        text: "To truly appreciate Japan, embrace the culture's emphasis on respect, harmony, and attention to detail. Take time to enjoy a tea ceremony, visit a Zen garden, and experience the beauty of fleeting moments.",
      },
    ],
    relatedPosts: ["best-time-visit-japan", "budget-thailand"],
  },
  "hidden-gems-europe": {
    title: "Hidden Gems of Europe: 10 Underrated Destinations",
    excerpt: "Escape the crowds and discover Europe's best-kept secrets, from remote villages to untouched wilderness.",
    category: "Destinations",
    author: "Marco Bianchi",
    authorAvatar: "MB",
    date: "Apr 5, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80",
    content: [
      {
        text: "While Paris, Rome, and Barcelona draw millions of visitors each year, Europe is home to countless lesser-known destinations that offer equally stunning experiences without the overwhelming crowds. Here's our guide to Europe's hidden gems.",
      },
      {
        text: "Starting in Slovenia, Lake Bled is a fairy-tale destination with its emerald-green lake, clifftop castle, and charming island church. It's small enough to explore in a day but magical enough to linger longer.",
        image: "https://images.unsplash.com/photo-1518558993053-32322197b15a?w=800&q=80",
        imageCaption: "Lake Bled with its iconic island church",
      },
      {
        text: "In Portugal, the Alentejo region offers rolling cork forests, whitewashed villages, and some of the country's best wines. The medieval town of Évora is a UNESCO World Heritage site that feels frozen in time.",
      },
      {
        text: "Georgia, the country at the crossroads of Europe and Asia, is one of Europe's last truly off-the-beaten-path destinations. The Caucasus Mountains offer incredible hiking, and the capital Tbilisi charms visitors with its unique architecture and warm hospitality.",
        image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=80",
        imageCaption: "Mountain village in the Caucasus",
      },
      {
        text: "For a Mediterranean experience without the crowds, head to Croatia's islands beyond Dubrovnik. The island of Hvar offers stunning beaches and historic towns, while the smaller islands like Vis remain authentically local.",
      },
      {
        text: "Poland's Tatra Mountains provide alpine scenery without the alpine prices. Zakopane is the winter sports capital, but the surrounding national park offers excellent hiking trails through some of Europe's most beautiful mountain landscapes.",
      },
      {
        text: "Lithuania's Curonians spit is a narrow sand dune peninsula that separates the Baltic Sea from a freshwater lagoon. It's a unique landscape that's perfect for cycling, birdwatching, and escaping the typical European tourist trail.",
      },
      {
        text: "These hidden gems prove that Europe has far more to offer than its famous capitals. Sometimes the best experiences come from wandering off the beaten path and discovering places that haven't yet been discovered by the masses.",
      },
    ],
    relatedPosts: ["mountain-adventures", "best-time-visit-japan"],
  },
  "mountain-adventures": {
    title: "Mountain Adventures: Best Hiking Trails for Beginners",
    excerpt: "Start your hiking journey with these accessible trails offering breathtaking views and unforgettable experiences.",
    category: "Adventure",
    author: "Alex Thompson",
    authorAvatar: "AT",
    date: "Apr 6, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
    content: [
      {
        text: "Mountain hiking offers an incredible way to connect with nature, get some exercise, and discover breathtaking landscapes. If you're new to hiking, starting with beginner-friendly trails is key to building confidence and enjoying the experience.",
      },
      {
        text: "In the Swiss Alps, the Schynige Platte to First trail offers stunning views of the Eiger, Mönch, and Jungfrau peaks without requiring technical climbing skills. The cogwheel train takes you partway up, making this accessible to most fitness levels.",
        image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80",
        imageCaption: "Hiking trail in the Swiss Alps",
      },
      {
        text: "The Tour du Mont Blanc circuit in France, Italy, and Switzerland is one of the most famous long-distance hikes, but you can tackle shorter sections as a beginner. The Val d'Arpette to Champex section is particularly beautiful and manageable.",
      },
      {
        text: "In the United States, Zion National Park's Angels Landing is challenging but the views are unmatched. For an easier start, the Narrows hike along the Virgin River is perfect for beginners and offers an otherworldly canyon experience.",
      },
      {
        text: "Scotland's West Highland Way is 154 kilometers of stunning Highland scenery. The terrain can be rugged, but the Milngavie to Bridge of Orchy section is relatively gentle and perfect for building your hiking stamina.",
      },
      {
        text: "Before hitting any trail, invest in proper footwear, bring layers for changing weather, carry enough water and snacks, and always tell someone your plans. Start early to avoid afternoon storms and give yourself plenty of time to complete your hike safely.",
      },
      {
        text: "Remember, hiking is about the journey, not just the destination. Take time to appreciate the wildflowers, listen to birdsong, and breathe in that fresh mountain air. The best hikers are those who leave no trace and respect the natural environment.",
      },
    ],
    relatedPosts: ["hidden-gems-europe", "safari-guide"],
  },
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = use(params)
  const post = blogContent[id] || blogContent["solo-travel-tips"]

  return (
    <main className="min-h-screen bg-background">
      <Header variant="dark" />
      
      {/* Hero Image */}
      <div className="relative h-[50vh] md:h-[60vh]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Article */}
      <article className="relative -mt-20 md:-mt-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </motion.div>

          {/* Article Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card rounded-3xl p-6 md:p-10 shadow-lg"
          >
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-muted-foreground text-sm">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {post.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-8">
              {post.excerpt}
            </p>

            {/* Author & Date */}
            <div className="flex items-center justify-between flex-wrap gap-4 border-t border-border pt-6">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                  {post.authorAvatar}
                </div>
                <div>
                  <p className="font-medium text-foreground">{post.author}</p>
                  <p className="text-sm text-muted-foreground">{post.date}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button className="p-2 rounded-full hover:bg-secondary transition-colors">
                  <Share2 className="h-5 w-5 text-muted-foreground" />
                </button>
                <button className="p-2 rounded-full hover:bg-secondary transition-colors">
                  <Heart className="h-5 w-5 text-muted-foreground" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 md:mt-12"
          >
            <div className="bg-card rounded-3xl p-6 md:p-10 md:py-12 shadow-lg">
              {post.content.map((item, index) => (
                <div key={index} className="mb-8 last:mb-0">
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {item.text}
                  </p>
                  {item.image && (
                    <figure className="mt-6">
                      <div className="relative aspect-video rounded-xl overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.imageCaption || ""}
                          fill
                          className="object-cover"
                        />
                      </div>
                      {item.imageCaption && (
                        <figcaption className="mt-3 text-sm text-muted-foreground italic text-center">
                          {item.imageCaption}
                        </figcaption>
                      )}
                    </figure>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Related Posts */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 md:mt-16"
          >
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {post.relatedPosts.map((relatedId) => {
                const related = blogContent[relatedId]
                if (!related) return null
                return (
                  <Link
                    key={relatedId}
                    href={`/blog/${relatedId}`}
                    className="group bg-card rounded-2xl p-6 hover:shadow-lg transition-all"
                  >
                    <div className="relative aspect-video mb-4 rounded-xl overflow-hidden">
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <span className="text-xs text-primary font-medium uppercase tracking-wider">
                      {related.category}
                    </span>
                    <h3 className="font-serif font-semibold text-foreground mt-2 group-hover:text-primary transition-colors">
                      {related.title}
                    </h3>
                  </Link>
                )
              })}
            </div>
          </motion.div>
        </div>
      </article>

      <Footer />
    </main>
  )
}