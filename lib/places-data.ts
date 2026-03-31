export interface Place {
  id: string
  name: string
  country: string
  continent: string
  tagline: string
  description: string
  longDescription: string
  heroImage: string
  gallery: string[]
  price: string
  duration: string
  rating: number
  reviewCount: number
  bestTime: string
  language: string
  currency: string
  highlights: string[]
  included: string[]
  itinerary: {
    day: number
    title: string
    description: string
  }[]
}

export const places: Place[] = [
  {
    id: "paris",
    name: "Paris",
    country: "France",
    continent: "Europe",
    tagline: "City of Love and Lights",
    description: "Experience romantic strolls, world-class museums, and iconic architecture.",
    longDescription: "Paris, the capital of France, is one of the most iconic and romantic cities in the world. From the magnificent Eiffel Tower to the artistic treasures of the Louvre, Paris captivates visitors with its timeless beauty, exquisite cuisine, and undeniable charm.",
    heroImage: "/images/places/paris.jpg",
    gallery: ["/images/places/paris.jpg", "/images/santorini.jpg", "/images/tokyo.jpg"],
    price: "$1,199",
    duration: "5 Days / 4 Nights",
    rating: 4.9,
    reviewCount: 5621,
    bestTime: "April - May, September - October",
    language: "French",
    currency: "Euro (EUR)",
    highlights: [
      "Climb the Eiffel Tower",
      "Visit the Louvre Museum",
      "Stroll along the Seine",
      "Explore Notre-Dame Cathedral",
      "Shop at Champs-Élysées",
      "Enjoy Seine river cruise"
    ],
    included: [
      "4 nights 4-star hotel",
      "Daily breakfast",
      "Eiffel Tower access",
      "Louvre Museum entry",
      "Seine river cruise",
      "Airport transfers"
    ],
    itinerary: [
      { day: 1, title: "Arrival", description: "Arrive in Paris. Check-in at your hotel. Evening Seine river cruise." },
      { day: 2, title: "Iconic Paris", description: "Climb Eiffel Tower. Visit Trocadéro viewpoint. Explore Latin Quarter." },
      { day: 3, title: "Art & Culture", description: "Full day at Louvre Museum. Evening in Montmartre district." },
      { day: 4, title: "Hidden Gems", description: "Visit Sainte-Chapelle. Explore Marais district. Shopping at Champs-Élysées." },
      { day: 5, title: "Departure", description: "Morning at leisure. Transfer to airport." }
    ]
  },
  {
    id: "dubai",
    name: "Dubai",
    country: "United Arab Emirates",
    continent: "Asia",
    tagline: "Modern Luxury in the Desert",
    description: "Experience ultra-modern architecture, luxury shopping, and desert adventures.",
    longDescription: "Dubai is known for its luxury shopping, ultramodern architecture and vibrant nightlife scene. Burj Khalifa is a 828-meter high tower in the downtown area, and the Palm Jumeirah is a man-made palm-shaped island fringed with resort hotels.",
    heroImage: "/images/places/dubai.jpg",
    gallery: ["/images/places/dubai.jpg", "/images/tokyo.jpg", "/images/patagonia.jpg"],
    price: "$1,399",
    duration: "4 Days / 3 Nights",
    rating: 4.7,
    reviewCount: 3456,
    bestTime: "October - April",
    language: "Arabic, English",
    currency: "UAE Dirham (AED)",
    highlights: [
      "Visit Burj Khalifa",
      "Shop at Dubai Mall",
      "Desert safari with dune bashing",
      "Palm Jumeirah island tour",
      "Gold Souk exploration",
      "Beach club experience"
    ],
    included: [
      "3 nights luxury hotel",
      "Daily breakfast",
      "Burj Khalifa entry",
      "Desert safari tour",
      "Airport transfers",
      "Dinner cruise"
    ],
    itinerary: [
      { day: 1, title: "Arrival", description: "Arrive in Dubai. Hotel check-in. Evening Marina walk." },
      { day: 2, title: "Modern Dubai", description: "Burj Khalifa visit. Dubai Mall exploration. Evening at beach club." },
      { day: 3, title: "Desert Adventure", description: "Morning desert safari with dune bashing. Gold Souk and Spice Souk visit." },
      { day: 4, title: "Departure", description: "Morning at leisure. Transfer to airport." }
    ]
  },
  {
    id: "new-york",
    name: "New York",
    country: "United States",
    continent: "North America",
    tagline: "The City That Never Sleeps",
    description: "Discover the energy of Manhattan's iconic landmarks and world-class attractions.",
    longDescription: "New York City is famous for its iconic skyline, Broadway theaters, world-renowned museums, diverse neighborhoods, and endless entertainment options. From Times Square to Central Park, NYC offers unforgettable experiences.",
    heroImage: "/images/places/new-york.jpg",
    gallery: ["/images/places/new-york.jpg", "/images/tokyo.jpg", "/images/bali.jpg"],
    price: "$1,299",
    duration: "5 Days / 4 Nights",
    rating: 4.8,
    reviewCount: 4892,
    bestTime: "September - November, April - May",
    language: "English",
    currency: "US Dollar (USD)",
    highlights: [
      "Times Square experience",
      "Statue of Liberty visit",
      "Central Park stroll",
      "Broadway show",
      "Empire State Building",
      "High Line park walk"
    ],
    included: [
      "4 nights hotel",
      "Daily breakfast",
      "Statue of Liberty tour",
      "Broadway show",
      "Subway pass",
      "Restaurant discounts"
    ],
    itinerary: [
      { day: 1, title: "Arrival", description: "Arrive in NYC. Hotel check-in. Evening Times Square visit." },
      { day: 2, title: "Iconic NYC", description: "Statue of Liberty tour. Empire State Building at sunset." },
      { day: 3, title: "Culture", description: "Metropolitan Museum visit. Central Park exploration." },
      { day: 4, title: "Entertainment", description: "Broadway show. Times Square evening. Rooftop bar experience." },
      { day: 5, title: "Departure", description: "Morning brunch. Transfer to airport." }
    ]
  },
  {
    id: "maldives",
    name: "Maldives",
    country: "Maldives",
    continent: "Asia",
    tagline: "Paradise Overwater",
    description: "Relax in overwater bungalows surrounded by crystal-clear turquoise waters.",
    longDescription: "The Maldives is an archipelago in the Indian Ocean known for its clear lagoons and white sand beaches. The islands are a popular vacation destination, with snorkeling, scuba diving, and luxury resorts.",
    heroImage: "/images/places/maldives.jpg",
    gallery: ["/images/places/maldives.jpg", "/images/bali.jpg", "/images/santorini.jpg"],
    price: "$2,499",
    duration: "7 Days / 6 Nights",
    rating: 4.9,
    reviewCount: 2987,
    bestTime: "November - April",
    language: "Dhivehi, English",
    currency: "Maldivian Rufiyaa (MVR)",
    highlights: [
      "Overwater bungalow experience",
      "Snorkeling with tropical fish",
      "Scuba diving on coral reefs",
      "Sunset fishing",
      "Island hopping",
      "Spa treatments"
    ],
    included: [
      "6 nights water bungalow",
      "All meals & drinks",
      "Snorkeling equipment",
      "Island hopping tour",
      "Spa treatment",
      "Sunset cruise"
    ],
    itinerary: [
      { day: 1, title: "Arrival", description: "Arrive at Malé. Speedboat to resort. Check-in and orientation." },
      { day: 2, title: "Snorkeling", description: "House reef snorkeling. Afternoon spa session." },
      { day: 3, title: "Island Hopping", description: "Visit local islands. Swimming and beach time." },
      { day: 4, title: "Diving", description: "Scuba diving on coral gardens. Water sports activities." },
      { day: 5, title: "Relaxation", description: "Spa day. Private beach time. Sunset fishing." },
      { day: 6, title: "Adventure", description: "Dolphin watching. Underwater dining experience." },
      { day: 7, title: "Departure", description: "Final morning swim. Speedboat to Male for departure." }
    ]
  },
  {
    id: "bali-beach",
    name: "Bali Beach Retreat",
    country: "Indonesia",
    continent: "Asia",
    tagline: "Tropical Island Paradise",
    description: "Discover pristine beaches, water sports, and vibrant beach culture.",
    longDescription: "Bali's beaches offer something for everyone, from surfing at Uluwatu to relaxing at Seminyak. Crystal clear waters, white sand beaches, and beachside resorts make it perfect for beach lovers.",
    heroImage: "/images/places/bali-beach.jpg",
    gallery: ["/images/places/bali-beach.jpg", "/images/bali.jpg", "/images/maldives.jpg"],
    price: "$899",
    duration: "6 Days / 5 Nights",
    rating: 4.8,
    reviewCount: 3621,
    bestTime: "May - September",
    language: "Indonesian",
    currency: "Indonesian Rupiah (IDR)",
    highlights: [
      "Surfing lessons",
      "Beach club experience",
      "Waterski and jet ski",
      "Yoga at sunrise",
      "Beachside dining",
      "Beach parties"
    ],
    included: [
      "5 nights beach resort",
      "Daily breakfast",
      "Surfing lessons",
      "Beach activities",
      "Yoga classes",
      "Spa access"
    ],
    itinerary: [
      { day: 1, title: "Arrival", description: "Arrive in Bali. Transfer to beach resort. Evening beach walk." },
      { day: 2, title: "Surfing", description: "Surfing lessons at Uluwatu. Beachside lunch. Beach club evening." },
      { day: 3, title: "Water Sports", description: "Jet ski and waterski activities. Beach volleyball." },
      { day: 4, title: "Wellness", description: "Sunrise yoga session. Spa treatments. Beach meditation." },
      { day: 5, title: "Leisure", description: "Free beach time. Optional activities. Beach party." },
      { day: 6, title: "Departure", description: "Final morning swim. Transfer to airport." }
    ]
  },
  {
    id: "swiss-alps",
    name: "Swiss Alps",
    country: "Switzerland",
    continent: "Europe",
    tagline: "Alpine Mountain Adventure",
    description: "Experience stunning mountain scenery, hiking, and charming alpine villages.",
    longDescription: "The Swiss Alps offer breathtaking mountain scenery, world-class skiing, and charming villages. Home to the Matterhorn and numerous alpine lakes, this region is perfect for outdoor enthusiasts.",
    heroImage: "/images/places/swiss-alps.jpg",
    gallery: ["/images/places/swiss-alps.jpg", "/images/patagonia.jpg", "/images/iceland.jpg"],
    price: "$1,599",
    duration: "6 Days / 5 Nights",
    rating: 4.9,
    reviewCount: 2543,
    bestTime: "June - September",
    language: "German, French, Italian",
    currency: "Swiss Franc (CHF)",
    highlights: [
      "Matterhorn hiking",
      "Scenic train rides",
      "Alpine village exploration",
      "Mountain biking",
      "Cheese making tours",
      "Mountain hut dining"
    ],
    included: [
      "5 nights alpine lodge",
      "Daily breakfast",
      "Guided hiking tours",
      "Scenic train pass",
      "Cheese factory visit",
      "Mountain cable car"
    ],
    itinerary: [
      { day: 1, title: "Arrival", description: "Arrive in Zermatt. Alpine lodge check-in. Village exploration." },
      { day: 2, title: "Matterhorn View", description: "Hiking to Matterhorn viewpoint. Alpine scenery photography." },
      { day: 3, title: "Train Journey", description: "Scenic Bernina Express train ride. Alpine valleys exploration." },
      { day: 4, title: "Adventure", description: "Mountain biking or hiking. Cheese factory visit and tasting." },
      { day: 5, title: "Leisure", description: "Mountain hut dining. Spa and relaxation." },
      { day: 6, title: "Departure", description: "Final hike. Transfer to airport." }
    ]
  },
  {
    id: "bali-temple",
    name: "Bali Temple Circuit",
    country: "Indonesia",
    continent: "Asia",
    tagline: "Spiritual & Cultural Journey",
    description: "Explore ancient temples, spiritual rituals, and Balinese traditions.",
    longDescription: "Bali is known for its spiritual heritage and ancient temples. From clifftop Uluwatu Temple to the sacred Tirta Empul spring temple, visitors can experience Balinese spirituality and culture.",
    heroImage: "/images/places/bali-temple.jpg",
    gallery: ["/images/places/bali-temple.jpg", "/images/bali.jpg", "/images/thailand.jpg"],
    price: "$1,099",
    duration: "6 Days / 5 Nights",
    rating: 4.8,
    reviewCount: 2876,
    bestTime: "April - October",
    language: "Indonesian",
    currency: "Indonesian Rupiah (IDR)",
    highlights: [
      "Uluwatu Temple at sunset",
      "Tirta Empul purification",
      "Besakih Temple visit",
      "Temple ceremonies",
      "Traditional offerings",
      "Spiritual meditation"
    ],
    included: [
      "5 nights accommodation",
      "Daily breakfast",
      "Temple tours with guide",
      "Ceremony participation",
      "Meditation sessions",
      "Traditional meals"
    ],
    itinerary: [
      { day: 1, title: "Arrival", description: "Arrive in Bali. Hotel check-in. Evening orientation." },
      { day: 2, title: "Uluwatu Temple", description: "Visit cliffside Uluwatu Temple. Watch Kecak fire dance." },
      { day: 3, title: "Tirta Empul", description: "Sacred spring temple visit. Purification ritual participation." },
      { day: 4, title: "Temple Ceremony", description: "Traditional temple ceremony attendance. Spiritual meditation." },
      { day: 5, title: "Besakih Temple", description: "Visit Bali's largest temple. Local guide insights." },
      { day: 6, title: "Departure", description: "Morning meditation. Transfer to airport." }
    ]
  },
  {
    id: "bora-bora",
    name: "Bora Bora",
    country: "French Polynesia",
    continent: "Oceania",
    tagline: "South Pacific Luxury",
    description: "Escape to overwater bungalows in the heart of the South Pacific.",
    longDescription: "Bora Bora is a small South Pacific island known for its luxury resorts, pristine beaches, and incredible lagoon. It's consistently ranked as one of the world's most beautiful islands.",
    heroImage: "/images/places/bora-bora.jpg",
    gallery: ["/images/places/bora-bora.jpg", "/images/maldives.jpg", "/images/bali-beach.jpg"],
    price: "$2,199",
    duration: "5 Days / 4 Nights",
    rating: 4.9,
    reviewCount: 1954,
    bestTime: "May - October",
    language: "French, Tahitian",
    currency: "CFP Franc (XPF)",
    highlights: [
      "Overwater bungalow stay",
      "Lagoon snorkeling",
      "Shark & ray feeding",
      "Beach picnic",
      "Sunset cruise",
      "Water activities"
    ],
    included: [
      "4 nights overwater bungalow",
      "All meals & drinks",
      "Lagoon activities",
      "Shark & ray tour",
      "Sunset cruise",
      "Airport transfers"
    ],
    itinerary: [
      { day: 1, title: "Arrival", description: "Arrive in Bora Bora. Speedboat to resort bungalow." },
      { day: 2, title: "Lagoon", description: "Snorkeling in pristine lagoon. Shark and ray feeding." },
      { day: 3, title: "Beach Picnic", description: "Private island beach picnic. Water activities and relaxation." },
      { day: 4, title: "Sunset", description: "Sunset cruise around the island. Farewell dinner." },
      { day: 5, title: "Departure", description: "Final morning swim. Transfer to airport." }
    ]
  },
  {
    id: "iceland",
    name: "Iceland",
    country: "Iceland",
    continent: "Europe",
    tagline: "Land of Fire & Ice",
    description: "Experience waterfalls, glaciers, geysers, and natural wonders.",
    longDescription: "Iceland is known for its dramatic landscapes including waterfalls, glaciers, geysers, and black sand beaches. It's also home to the Golden Circle and the Blue Lagoon.",
    heroImage: "/images/places/iceland.jpg",
    gallery: ["/images/places/iceland.jpg", "/images/swiss-alps.jpg", "/images/patagonia.jpg"],
    price: "$1,799",
    duration: "7 Days / 6 Nights",
    rating: 4.8,
    reviewCount: 2112,
    bestTime: "June - August",
    language: "Icelandic, English",
    currency: "Icelandic Króna (ISK)",
    highlights: [
      "Golden Circle tour",
      "Blue Lagoon geothermal spa",
      "Waterfall hikes",
      "Glacier trekking",
      "Ice cave exploration",
      "Aurora watching"
    ],
    included: [
      "6 nights accommodation",
      "Daily breakfast",
      "Golden Circle tour",
      "Blue Lagoon entry",
      "Glacier trek",
      "All transfers"
    ],
    itinerary: [
      { day: 1, title: "Arrival", description: "Arrive in Reykjavik. Hotel check-in. Evening city walk." },
      { day: 2, title: "Golden Circle", description: "Þingvellir National Park. Geysir geothermal area. Gullfoss waterfall." },
      { day: 3, title: "Blue Lagoon", description: "Relax in geothermal Blue Lagoon. Sunset at lagoon." },
      { day: 4, title: "South Coast", description: "Seljalandsfoss and Skógafoss waterfalls. Black sand beaches." },
      { day: 5, title: "Glacier", description: "Vatnajökull glacier trekking. Ice cave exploration." },
      { day: 6, title: "Aurora", description: "Aurora hunting in the night. Mountain exploration." },
      { day: 7, title: "Departure", description: "Final morning in Reykjavik. Transfer to airport." }
    ]
  },
  {
    id: "thailand",
    name: "Thailand",
    country: "Thailand",
    continent: "Asia",
    tagline: "Land of Smiles",
    description: "Discover ancient temples, vibrant markets, and tropical beaches.",
    longDescription: "Thailand is famous for its ornate shrines, vibrant street life, and beaches. Bangkok is known for its street food, temples, and markets, while islands like Phuket and Krabi offer beach relaxation.",
    heroImage: "/images/places/thailand.jpg",
    gallery: ["/images/places/thailand.jpg", "/images/bali.jpg", "/images/tokyo.jpg"],
    price: "$1,099",
    duration: "7 Days / 6 Nights",
    rating: 4.7,
    reviewCount: 3289,
    bestTime: "November - February",
    language: "Thai, English",
    currency: "Thai Baht (THB)",
    highlights: [
      "Bangkok temple tour",
      "Floating markets",
      "Muay Thai boxing",
      "Island hopping",
      "Elephant sanctuary",
      "Night bazaar shopping"
    ],
    included: [
      "6 nights accommodation",
      "Daily breakfast",
      "Temple tours",
      "Floating market visit",
      "Island tour",
      "Cooking class"
    ],
    itinerary: [
      { day: 1, title: "Arrival", description: "Arrive in Bangkok. Hotel check-in. Evening street food tour." },
      { day: 2, title: "Bangkok", description: "Grand Palace and Temple of Emerald Buddha. River cruise." },
      { day: 3, title: "Markets", description: "Floating markets tour. Muay Thai boxing experience." },
      { day: 4, title: "Island", description: "Flight to Phuket. Beach relaxation and water activities." },
      { day: 5, title: "Krabi", description: "Island hopping to Krabi islands. Snorkeling and beach picnic." },
      { day: 6, title: "Wildlife", description: "Elephant sanctuary visit. Traditional massage." },
      { day: 7, title: "Departure", description: "Final morning at beach. Transfer to airport." }
    ]
  },
  {
    id: "peru",
    name: "Peru",
    country: "Peru",
    continent: "South America",
    tagline: "Ancient Civilizations",
    description: "Explore Machu Picchu, Sacred Valley, and Incan heritage.",
    longDescription: "Peru is home to Machu Picchu, one of the Seven Wonders of the World. The country also features the Sacred Valley with traditional villages, Inca ruins, and diverse landscapes.",
    heroImage: "/images/places/peru.jpg",
    gallery: ["/images/places/peru.jpg", "/images/patagonia.jpg", "/images/morocco.jpg"],
    price: "$1,599",
    duration: "8 Days / 7 Nights",
    rating: 4.8,
    reviewCount: 2654,
    bestTime: "May - September",
    language: "Spanish, Quechua",
    currency: "Peruvian Sol (PEN)",
    highlights: [
      "Machu Picchu trek",
      "Sacred Valley exploration",
      "Inca Trail hiking",
      "Lake Titicaca",
      "Local market visits",
      "Cultural village tours"
    ],
    included: [
      "7 nights accommodation",
      "Inca Trail permit",
      "Machu Picchu entrance",
      "Professional guide",
      "All meals on trek",
      "Sacred Valley tour"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Lima", description: "Arrive in Lima. City tour and museums. Historic center exploration." },
      { day: 2, title: "Sacred Valley", description: "Fly to Cusco. Transfer to Sacred Valley. Local market visit." },
      { day: 3, title: "Valley Tour", description: "Ollantaytambo fortress. Traditional village visits. Terraces exploration." },
      { day: 4, title: "Inca Trail Start", description: "Begin Inca Trail trek. Hiking through cloud forest." },
      { day: 5, title: "Trail Trek", description: "Continue Inca Trail. High altitude passes and ruins." },
      { day: 6, title: "Machu Picchu", description: "Reach Machu Picchu at sunrise. Explore the ancient ruins." },
      { day: 7, title: "Lake Titicaca", description: "Train to Aguas Calientes. Visit floating islands and local culture." },
      { day: 8, title: "Departure", description: "Return to Lima. International departure." }
    ]
  },
  {
    id: "spain",
    name: "Spain",
    country: "Spain",
    continent: "Europe",
    tagline: "Art, Architecture & Beaches",
    description: "Experience Barcelona's culture, Andalusian charm, and Mediterranean beaches.",
    longDescription: "Spain offers vibrant culture, world-class museums, stunning architecture from Gaudí, beautiful beaches, and delicious cuisine. From Barcelona to Madrid to Seville, each city has unique charm.",
    heroImage: "/images/places/spain.jpg",
    gallery: ["/images/places/spain.jpg", "/images/santorini.jpg", "/images/paris.jpg"],
    price: "$1,399",
    duration: "7 Days / 6 Nights",
    rating: 4.8,
    reviewCount: 2987,
    bestTime: "April - June, September - October",
    language: "Spanish, Catalan",
    currency: "Euro (EUR)",
    highlights: [
      "Sagrada Familia visit",
      "Park Güell exploration",
      "Flamenco dancing",
      "Prado Museum",
      "Andalusian architecture",
      "Beach relaxation"
    ],
    included: [
      "6 nights accommodation",
      "Daily breakfast",
      "Sagrada Familia tour",
      "Park Güell entrance",
      "Flamenco show",
      "Airport transfers"
    ],
    itinerary: [
      { day: 1, title: "Barcelona Arrival", description: "Arrive in Barcelona. Gothic Quarter exploration." },
      { day: 2, title: "Gaudí", description: "Sagrada Familia visit. Park Güell exploration." },
      { day: 3, title: "Culture", description: "Picasso Museum. Las Ramblas walk. Beach time." },
      { day: 4, title: "Barcelona", description: "Montjuïc mountain views. Magic Fountain show." },
      { day: 5, title: "Seville", description: "Train to Seville. Cathedral visit. Alcázar palace tour." },
      { day: 6, title: "Andalusian Culture", description: "Flamenco dancing lesson and show. Local tapas dinner." },
      { day: 7, title: "Departure", description: "Return to Barcelona. Airport transfer." }
    ]
  }
]

export function getPlaceBySlug(slug: string): Place | undefined {
  return places.find(p => p.id === slug)
}

export function getAllPlaceSlugs(): string[] {
  return places.map(p => p.id)
}
