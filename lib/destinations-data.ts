export interface Destination {
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

export const destinations: Destination[] = [
  {
    id: "santorini",
    name: "Santorini",
    country: "Greece",
    continent: "Europe",
    tagline: "Iconic sunsets and white-washed villages",
    description: "Experience the magic of Santorini, where breathtaking sunsets paint the sky over the Aegean Sea.",
    longDescription: "Santorini, officially known as Thira, is a stunning Greek island in the southern Aegean Sea. Famous for its dramatic views, stunning sunsets, white-washed houses with blue domes, and a still active volcano, Santorini is unlike any other destination in the world. The island was shaped by a massive volcanic eruption around 3,600 years ago, creating its distinctive crescent shape and the submerged caldera that makes for such spectacular scenery today.",
    heroImage: "/images/santorini.jpg",
    gallery: ["/images/santorini.jpg", "/images/santorini-2.jpg", "/images/santorini-3.jpg"],
    price: "$1,299",
    duration: "7 Days / 6 Nights",
    rating: 4.9,
    reviewCount: 2847,
    bestTime: "April - October",
    language: "Greek",
    currency: "Euro (EUR)",
    highlights: [
      "Watch the world-famous sunset from Oia",
      "Explore ancient ruins of Akrotiri",
      "Swim in hot springs near the volcano",
      "Wine tasting at local vineyards",
      "Relax on unique red and black sand beaches",
      "Sail around the caldera"
    ],
    included: [
      "6 nights luxury accommodation",
      "Daily breakfast & 3 dinners",
      "Private airport transfers",
      "Guided caldera boat tour",
      "Wine tasting experience",
      "Sunset dinner in Oia"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Paradise", description: "Arrive at Santorini Airport. Private transfer to your luxury hotel in Fira. Evening at leisure to explore the charming streets." },
      { day: 2, title: "Volcanic Adventure", description: "Full-day boat tour to the volcano and hot springs. Visit Thirassia island for traditional Greek lunch." },
      { day: 3, title: "Ancient Mysteries", description: "Morning visit to Akrotiri archaeological site. Afternoon at Red Beach. Evening wine tasting." },
      { day: 4, title: "Oia Discovery", description: "Explore the picturesque village of Oia. Photography tour of the famous blue domes. Sunset dinner at a cliffside restaurant." },
      { day: 5, title: "Beach & Leisure", description: "Free day to enjoy Perissa black sand beach. Optional water sports or spa treatments." },
      { day: 6, title: "Local Flavors", description: "Greek cooking class in the morning. Afternoon visit to traditional villages. Farewell dinner." },
      { day: 7, title: "Departure", description: "Leisurely breakfast. Private transfer to airport for your departure." }
    ]
  },
  {
    id: "bali",
    name: "Bali",
    country: "Indonesia",
    continent: "Asia",
    tagline: "Tropical paradise with ancient temples",
    description: "Discover the Island of the Gods with its lush rice terraces, ancient temples, and vibrant culture.",
    longDescription: "Bali, known as the Island of the Gods, is a Indonesian paradise that captivates visitors with its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs. The island is also home to religious sites such as cliffside Uluwatu Temple. To the south, the beachside city of Kuta has lively bars, while Seminyak, Sanur, and Nusa Dua are popular resort towns. Ubud, the cultural heart of Bali, is famous for its traditional crafts and dance.",
    heroImage: "/images/bali.jpg",
    gallery: ["/images/bali.jpg", "/images/bali-2.jpg", "/images/bali-3.jpg"],
    price: "$899",
    duration: "8 Days / 7 Nights",
    rating: 4.8,
    reviewCount: 3562,
    bestTime: "April - October",
    language: "Indonesian",
    currency: "Indonesian Rupiah (IDR)",
    highlights: [
      "Visit the sacred Tirta Empul temple",
      "Trek through Tegallalang rice terraces",
      "Watch traditional Kecak dance at sunset",
      "Explore Ubud Monkey Forest",
      "Sunrise hike on Mount Batur",
      "Relax on pristine beaches of Nusa Penida"
    ],
    included: [
      "7 nights boutique accommodation",
      "Daily breakfast",
      "Private driver for all transfers",
      "Mount Batur sunrise trek",
      "Temple entrance fees",
      "Traditional Balinese massage"
    ],
    itinerary: [
      { day: 1, title: "Welcome to Bali", description: "Arrive at Ngurah Rai Airport. Transfer to your boutique villa in Ubud. Welcome dinner with traditional Balinese cuisine." },
      { day: 2, title: "Cultural Ubud", description: "Morning visit to Ubud Monkey Forest. Afternoon exploring local art galleries and craft villages. Traditional dance performance." },
      { day: 3, title: "Sacred Waters", description: "Visit Tirta Empul Temple for a purification ritual. Explore Gunung Kawi temple. Rice terrace walk in Tegallalang." },
      { day: 4, title: "Sunrise Trek", description: "Early morning hike up Mount Batur for spectacular sunrise. Afternoon spa treatments and relaxation." },
      { day: 5, title: "Island Paradise", description: "Day trip to Nusa Penida island. Visit Kelingking Beach, Angel Billabong, and Crystal Bay for snorkeling." },
      { day: 6, title: "Southern Beaches", description: "Transfer to Seminyak. Visit Tanah Lot temple at sunset. Beach club evening." },
      { day: 7, title: "Uluwatu Experience", description: "Visit Uluwatu Temple perched on dramatic cliffs. Kecak fire dance at sunset. Seafood dinner at Jimbaran Bay." },
      { day: 8, title: "Farewell", description: "Morning at leisure. Transfer to airport for departure." }
    ]
  },
  {
    id: "tokyo",
    name: "Tokyo",
    country: "Japan",
    continent: "Asia",
    tagline: "Where tradition meets innovation",
    description: "Immerse yourself in a city that seamlessly blends ancient traditions with cutting-edge technology.",
    longDescription: "Tokyo, Japan's busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods. The Imperial Palace sits amid large public gardens. The city's many museums offer exhibits ranging from classical art in the Tokyo National Museum to a reconstructed kabuki theater in the Edo-Tokyo Museum.",
    heroImage: "/images/tokyo.jpg",
    gallery: ["/images/tokyo.jpg", "/images/tokyo-2.jpg", "/images/tokyo-3.jpg"],
    price: "$1,499",
    duration: "9 Days / 8 Nights",
    rating: 4.9,
    reviewCount: 4128,
    bestTime: "March - May, October - November",
    language: "Japanese",
    currency: "Japanese Yen (JPY)",
    highlights: [
      "Experience the famous Shibuya Crossing",
      "Visit ancient Senso-ji Temple in Asakusa",
      "Explore the serene Meiji Shrine",
      "Day trip to Mount Fuji",
      "Traditional tea ceremony experience",
      "Discover Tsukiji Outer Market"
    ],
    included: [
      "8 nights accommodation",
      "7-day JR Pass",
      "Private guided city tour",
      "Mount Fuji day trip",
      "Traditional tea ceremony",
      "Sumo wrestling experience"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Tokyo", description: "Arrive at Narita/Haneda Airport. Transfer to hotel in Shinjuku. Evening exploration of Omoide Yokocho." },
      { day: 2, title: "Classic Tokyo", description: "Visit Senso-ji Temple in Asakusa. Explore Ueno Park and museums. Evening in Akihabara electronics district." },
      { day: 3, title: "Modern Tokyo", description: "Morning at Meiji Shrine. Harajuku street fashion exploration. Shibuya Crossing experience. Evening in Roppongi." },
      { day: 4, title: "Mount Fuji", description: "Full-day excursion to Mount Fuji. Visit Fuji Five Lakes region. Hot spring experience in Hakone." },
      { day: 5, title: "Traditional Arts", description: "Morning tea ceremony in a traditional garden. Afternoon kabuki theater or sumo experience." },
      { day: 6, title: "Foodie Paradise", description: "Tsukiji Outer Market tour. Sushi-making class. Evening food tour in Yurakucho." },
      { day: 7, title: "Day Trip to Kyoto", description: "Bullet train to Kyoto. Visit Fushimi Inari Shrine and Kinkaku-ji Temple. Return to Tokyo." },
      { day: 8, title: "Free Exploration", description: "Day at leisure to explore neighborhoods of your choice. Shopping in Ginza or Nakameguro." },
      { day: 9, title: "Sayonara", description: "Morning at leisure. Transfer to airport for departure." }
    ]
  },
  {
    id: "patagonia",
    name: "Patagonia",
    country: "Argentina",
    continent: "South America",
    tagline: "Untamed wilderness and glacial beauty",
    description: "Journey to the end of the world and discover raw, untouched natural beauty.",
    longDescription: "Patagonia is a sparsely populated region at the southern end of South America, shared by Argentina and Chile. The region comprises the southern section of the Andes mountains, lakes, fjords, and glaciers in the west and deserts, tablelands and steppes to the east. It is home to the spectacular Torres del Paine and Los Glaciares National Parks, offering some of the most dramatic landscapes on Earth.",
    heroImage: "/images/patagonia.jpg",
    gallery: ["/images/patagonia.jpg", "/images/patagonia-2.jpg", "/images/patagonia-3.jpg"],
    price: "$1,799",
    duration: "10 Days / 9 Nights",
    rating: 4.7,
    reviewCount: 1892,
    bestTime: "November - March",
    language: "Spanish",
    currency: "Argentine Peso (ARS)",
    highlights: [
      "Trek to Torres del Paine viewpoint",
      "Walk on Perito Moreno Glacier",
      "Spot wildlife including guanacos and condors",
      "Cruise through fjords and glaciers",
      "Visit remote estancias (ranches)",
      "Photography in dramatic landscapes"
    ],
    included: [
      "9 nights accommodation mix",
      "All internal flights",
      "Professional trekking guide",
      "Glacier walking equipment",
      "National park entrance fees",
      "All meals during treks"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Buenos Aires", description: "Arrive in Buenos Aires. Transfer to boutique hotel in Palermo. Welcome dinner with Argentine wine." },
      { day: 2, title: "Fly to El Calafate", description: "Morning flight to El Calafate, gateway to Los Glaciares. Afternoon at leisure to explore the town." },
      { day: 3, title: "Perito Moreno Glacier", description: "Full-day visit to Perito Moreno Glacier. Walkways viewing and optional ice trekking experience." },
      { day: 4, title: "Glacier Cruise", description: "Boat excursion through Lago Argentino visiting Upsala and Spegazzini glaciers." },
      { day: 5, title: "Transfer to Torres del Paine", description: "Scenic drive to Torres del Paine National Park in Chile. Settle into eco-lodge." },
      { day: 6, title: "W Trek Day 1", description: "Begin the famous W Trek. Hike to French Valley with stunning mountain views." },
      { day: 7, title: "W Trek Day 2", description: "Trek to the base of the Torres for sunrise. One of the most iconic views in Patagonia." },
      { day: 8, title: "Grey Glacier", description: "Hike along Grey Glacier. Kayaking option on Grey Lake among icebergs." },
      { day: 9, title: "Estancia Experience", description: "Visit a traditional Patagonian estancia. Horseback riding and authentic asado lunch." },
      { day: 10, title: "Return Journey", description: "Transfer to Punta Arenas. Flight back to Buenos Aires and onward departure." }
    ]
  },
  {
    id: "marrakech",
    name: "Marrakech",
    country: "Morocco",
    continent: "Africa",
    tagline: "Vibrant souks and exotic culture",
    description: "Lose yourself in the sensory overload of Morocco's most magical city.",
    longDescription: "Marrakech, a former imperial city in western Morocco, is a major economic center and home to mosques, palaces and gardens. The medina is a densely packed, walled medieval city dating to the Berber Empire, with mazelike alleys where thriving souks sell traditional textiles, pottery and jewelry. A symbol of the city, and visible for miles, is the Moorish Koutoubia Mosque minaret.",
    heroImage: "/images/morocco.jpg",
    gallery: ["/images/morocco.jpg", "/images/morocco-2.jpg", "/images/morocco-3.jpg"],
    price: "$749",
    duration: "6 Days / 5 Nights",
    rating: 4.6,
    reviewCount: 2156,
    bestTime: "March - May, September - November",
    language: "Arabic, French",
    currency: "Moroccan Dirham (MAD)",
    highlights: [
      "Get lost in the medina souks",
      "Visit the stunning Majorelle Garden",
      "Experience Jemaa el-Fnaa square",
      "Stay in a traditional riad",
      "Desert excursion to the Sahara",
      "Traditional hammam spa experience"
    ],
    included: [
      "5 nights riad accommodation",
      "Daily breakfast",
      "Guided medina tour",
      "Desert day trip",
      "Cooking class",
      "Hammam experience"
    ],
    itinerary: [
      { day: 1, title: "Welcome to Marrakech", description: "Arrive at Marrakech Menara Airport. Transfer to your traditional riad in the medina. Evening walk to Jemaa el-Fnaa square." },
      { day: 2, title: "Medina Discovery", description: "Guided tour of the medina including souks, Koutoubia Mosque, and Bahia Palace. Afternoon visit to Majorelle Garden." },
      { day: 3, title: "Culinary Journey", description: "Morning visit to local markets. Traditional Moroccan cooking class. Afternoon relaxation at the riad." },
      { day: 4, title: "Atlas Mountains", description: "Day trip to the Atlas Mountains. Visit Berber villages. Traditional lunch with mountain views." },
      { day: 5, title: "Desert Adventure", description: "Early departure for Sahara Desert excursion. Camel ride at sunset. Dinner under the stars." },
      { day: 6, title: "Farewell", description: "Morning hammam spa experience. Last-minute shopping. Transfer to airport." }
    ]
  }
]

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find(d => d.id === slug)
}

export function getAllDestinationSlugs(): string[] {
  return destinations.map(d => d.id)
}
