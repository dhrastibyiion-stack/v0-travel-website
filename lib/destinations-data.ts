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
  tags: string[]
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
    gallery: [
      "/images/santorini.jpg",
      "/images/santorini-2.jpg",
      "/images/santorini-3.jpg",
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80",
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80",
      "https://images.unsplash.com/photo-1503152394-c571994fd383?w=800&q=80",
      "https://images.unsplash.com/photo-1601581875039-e899893d520c?w=800&q=80",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
      "https://images.unsplash.com/photo-1504512485720-7d83a16ee930?w=800&q=80",
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&q=80"
    ],
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
    tags: ["cultural-tours", "beach-getaways", "photography-tours"],
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
    gallery: [
      "/images/bali.jpg",
      "/images/bali-2.jpg",
      "/images/bali-3.jpg",
      "/images/places/bali-temple.jpg",
      "/images/places/bali-beach.jpg",
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&q=80",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80",
      "https://images.unsplash.com/photo-1573790387438-4da905039392?w=800&q=80",
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&q=80"
    ],
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
    tags: ["cultural-tours", "eco-tourism", "beach-getaways"],
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
    gallery: [
      "/images/tokyo.jpg",
      "/images/tokyo-2.jpg",
      "/images/tokyo-3.jpg",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
      "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=800&q=80",
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800&q=80",
      "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&q=80",
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80",
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80",
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80"
    ],
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
    tags: ["cultural-tours", "photography-tours", "culinary-journeys"],
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
    gallery: [
      "/images/patagonia.jpg",
      "/images/patagonia-2.jpg",
      "/images/patagonia-3.jpg",
      "/images/places/peru.jpg",
      "https://images.unsplash.com/photo-1531761535209-180857e963b9?w=800&q=80",
      "https://images.unsplash.com/photo-1478827536114-da961b7f86d2?w=800&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
      "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80"
    ],
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
    tags: ["adventure-trips", "eco-tourism", "photography-tours"],
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
    gallery: [
      "/images/morocco.jpg",
      "/images/morocco-2.jpg",
      "/images/morocco-3.jpg",
      "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&q=80",
      "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=800&q=80",
      "https://images.unsplash.com/photo-1509106581673-d7c92781a8e0?w=800&q=80",
      "https://images.unsplash.com/photo-1518544801976-3e159e50e5bb?w=800&q=80"
    ],
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
    tags: ["cultural-tours", "culinary-journeys", "adventure-trips"],
    itinerary: [
      { day: 1, title: "Welcome to Marrakech", description: "Arrive at Marrakech Menara Airport. Transfer to your traditional riad in the medina. Evening walk to Jemaa el-Fnaa square." },
      { day: 2, title: "Medina Discovery", description: "Guided tour of the medina including souks, Koutoubia Mosque, and Bahia Palace. Afternoon visit to Majorelle Garden." },
      { day: 3, title: "Culinary Journey", description: "Morning visit to local markets. Traditional Moroccan cooking class. Afternoon relaxation at the riad." },
      { day: 4, title: "Atlas Mountains", description: "Day trip to the Atlas Mountains. Visit Berber villages. Traditional lunch with mountain views." },
      { day: 5, title: "Desert Adventure", description: "Early departure for Sahara Desert excursion. Camel ride at sunset. Dinner under the stars." },
      { day: 6, title: "Farewell", description: "Morning hammam spa experience. Last-minute shopping. Transfer to airport." }
    ]
  },
  {
    id: "paris",
    name: "Paris",
    country: "France",
    continent: "Europe",
    tagline: "The city of lights and romance",
    description: "Fall in love with the art, cuisine, and timeless elegance of France's enchanting capital.",
    longDescription: "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré. The Louvre Museum houses thousands of works of art, from antiquity to the mid-19th century.",
    heroImage: "/images/places/paris.jpg",
    gallery: [
      "/images/places/paris.jpg",
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80",
      "https://images.unsplash.com/photo-1478391679764-b2d8b3cd1e94?w=800&q=80",
      "https://images.unsplash.com/photo-1550340499-a6c60fc8287c?w=800&q=80",
      "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=800&q=80",
      "https://images.unsplash.com/photo-1509439581779-6298f75bf6e5?w=800&q=80",
      "https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b?w=800&q=80",
      "https://images.unsplash.com/photo-1541778406-96eb7b93da60?w=800&q=80",
      "https://images.unsplash.com/photo-1564594326900-559bc4f0a837?w=800&q=80"
    ],
    price: "$1,099",
    duration: "7 Days / 6 Nights",
    rating: 4.8,
    reviewCount: 5234,
    bestTime: "April - June, September - November",
    language: "French",
    currency: "Euro (EUR)",
    highlights: [
      "Visit the iconic Eiffel Tower",
      "Explore the Louvre Museum masterpieces",
      "Stroll through Montmartre and Sacré-Cœur",
      "Cruise along the Seine River at sunset",
      "Indulge in French cuisine and patisseries",
      "Discover the Palace of Versailles"
    ],
    included: [
      "6 nights boutique hotel accommodation",
      "Daily breakfast & 2 gourmet dinners",
      "Seine River dinner cruise",
      "Skip-the-line Louvre tour",
      "Versailles day trip with guide",
      "Paris Museum Pass"
    ],
    tags: ["cultural-tours", "culinary-journeys", "photography-tours"],
    itinerary: [
      { day: 1, title: "Bonjour Paris", description: "Arrive at Charles de Gaulle Airport. Private transfer to your boutique hotel in Le Marais. Evening walk along the Seine." },
      { day: 2, title: "Iconic Landmarks", description: "Morning visit to the Eiffel Tower. Afternoon at the Arc de Triomphe and Champs-Élysées. Evening Seine River cruise." },
      { day: 3, title: "Art & Culture", description: "Full day at the Louvre Museum. Evening visit to the Musée d'Orsay for impressionist masterpieces." },
      { day: 4, title: "Montmartre Discovery", description: "Explore Montmartre's artistic streets. Visit Sacré-Cœur Basilica. Afternoon cooking class with a French chef." },
      { day: 5, title: "Versailles Excursion", description: "Full-day trip to the Palace of Versailles. Explore the Hall of Mirrors and magnificent gardens." },
      { day: 6, title: "Le Marais & Shopping", description: "Morning exploration of Le Marais district. Afternoon shopping at Galeries Lafayette. Farewell gourmet dinner." },
      { day: 7, title: "Au Revoir", description: "Leisurely breakfast. Last visit to a local patisserie. Private transfer to airport." }
    ]
  },
  {
    id: "dubai",
    name: "Dubai",
    country: "UAE",
    continent: "Asia",
    tagline: "Luxury and modern marvels",
    description: "Experience the futuristic skyline, desert adventures, and unmatched luxury of the UAE.",
    longDescription: "Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture, and a lively nightlife scene. Burj Khalifa, an 830m-tall tower, dominates the skyscraper-filled skyline. At its foot lies Dubai Fountain, with jets and lights choreographed to music. On artificial islands just offshore is Atlantis, The Palm, a resort with water and marine-animal parks. Dubai is also a major global transport hub for passengers and cargo.",
    heroImage: "/images/places/dubai.jpg",
    gallery: [
      "/images/places/dubai.jpg",
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&q=80",
      "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800&q=80",
      "https://images.unsplash.com/photo-1546412414-e1885259563a?w=800&q=80",
      "https://images.unsplash.com/photo-1526495124232-a04e18491684?w=800&q=80",
      "https://images.unsplash.com/photo-1582672060674-bc2bd808a8c5?w=800&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80"
    ],
    price: "$1,299",
    duration: "6 Days / 5 Nights",
    rating: 4.7,
    reviewCount: 3891,
    bestTime: "November - March",
    language: "Arabic, English",
    currency: "UAE Dirham (AED)",
    highlights: [
      "Visit the Burj Khalifa observation deck",
      "Desert safari with dune bashing",
      "Explore the Gold and Spice Souks",
      "Experience luxury at Palm Jumeirah",
      "Dubai Fountain light show",
      "Shopping at Dubai Mall"
    ],
    included: [
      "5 nights 5-star hotel accommodation",
      "Daily breakfast",
      "Desert safari with BBQ dinner",
      "Burj Khalifa At The Top tickets",
      "Dubai Marina yacht cruise",
      "All transfers and guided tours"
    ],
    tags: ["adventure-trips", "photography-tours", "beach-getaways"],
    itinerary: [
      { day: 1, title: "Welcome to Dubai", description: "Arrive at Dubai International Airport. VIP transfer to your luxury hotel on Palm Jumeirah. Evening at leisure." },
      { day: 2, title: "Modern Marvels", description: "Morning visit to Burj Khalifa and Dubai Mall. Afternoon at Dubai Aquarium. Evening Dubai Fountain show." },
      { day: 3, title: "Desert Adventure", description: "Late afternoon desert safari with dune bashing, camel riding, and BBQ dinner under the stars at a Bedouin camp." },
      { day: 4, title: "Old Dubai & Culture", description: "Morning at Al Fahidi Historical District. Explore Gold and Spice Souks. Traditional abra ride across Dubai Creek." },
      { day: 5, title: "Luxury & Leisure", description: "Morning yacht cruise along Dubai Marina. Afternoon at a luxury beach club. Evening fine dining experience." },
      { day: 6, title: "Departure", description: "Morning at leisure for last-minute shopping. Transfer to airport for departure." }
    ]
  },
  {
    id: "maldives",
    name: "Maldives",
    country: "Maldives",
    continent: "Asia",
    tagline: "Crystal clear waters and private islands",
    description: "Escape to paradise in overwater villas surrounded by turquoise lagoons and pristine coral reefs.",
    longDescription: "The Maldives is a tropical nation in the Indian Ocean composed of 26 ring-shaped atolls, which are made up of more than 1,000 coral islands. It's known for its beaches, blue labyrinths, and extensive reefs. The capital, Malé, has a busy fish market, restaurants, and shops on the main road, Majeedhee Magu, and 17th-century Hukuru Miskiy (Old Friday Mosque) made of coral stone. The Maldives is the world's lowest country, with an average ground level of just 1.5 meters above sea level.",
    heroImage: "/images/places/maldives.jpg",
    gallery: [
      "/images/places/maldives.jpg",
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
      "https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=800&q=80",
      "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
      "https://images.unsplash.com/photo-1520454974749-611b7248ffdb?w=800&q=80",
      "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?w=800&q=80",
      "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=800&q=80"
    ],
    price: "$2,099",
    duration: "7 Days / 6 Nights",
    rating: 4.9,
    reviewCount: 2156,
    bestTime: "November - April",
    language: "Dhivehi, English",
    currency: "Maldivian Rufiyaa (MVR)",
    highlights: [
      "Stay in a luxury overwater villa",
      "Snorkel with manta rays and sea turtles",
      "Private sunset dolphin cruise",
      "Underwater restaurant dining experience",
      "Spa treatments over the ocean",
      "Bioluminescent beach walk at night"
    ],
    included: [
      "6 nights overwater villa",
      "All-inclusive meals & premium drinks",
      "Seaplane transfers",
      "Sunset dolphin cruise",
      "Snorkeling and diving excursions",
      "Couples spa treatment"
    ],
    tags: ["beach-getaways", "eco-tourism"],
    itinerary: [
      { day: 1, title: "Paradise Found", description: "Arrive at Velana International Airport. Scenic seaplane transfer to your private island resort. Welcome champagne and villa tour." },
      { day: 2, title: "Ocean Discovery", description: "Morning snorkeling excursion to a nearby reef. Afternoon at leisure in your overwater villa. Evening beach dinner." },
      { day: 3, title: "Marine Adventure", description: "Full-day diving or snorkeling trip to see manta rays and whale sharks. Sunset fishing experience." },
      { day: 4, title: "Island Hopping", description: "Visit local islands to experience Maldivian culture. Traditional lunch. Afternoon sandbank picnic." },
      { day: 5, title: "Spa & Relaxation", description: "Morning spa treatment over the ocean. Afternoon kayaking and paddleboarding. Private sunset dolphin cruise." },
      { day: 6, title: "Underwater Wonders", description: "Morning visit to an underwater restaurant. Afternoon at the resort pool. Farewell dinner on the beach." },
      { day: 7, title: "Until We Meet Again", description: "Leisurely morning. Seaplane transfer to Malé. Departure flight." }
    ]
  },
  {
    id: "swiss-alps",
    name: "Swiss Alps",
    country: "Switzerland",
    continent: "Europe",
    tagline: "Majestic mountains and skiing",
    description: "Breathe in crisp alpine air as you explore stunning peaks, charming villages, and world-class ski resorts.",
    longDescription: "The Swiss Alps are the portion of the Alps mountain range that lies within Switzerland. Because of their central position within the entire Alpine range, they are also known as the 'Heart of the Alps'. The Swiss Alps contain many of the most famous peaks in Europe, including the Matterhorn, Eiger, Jungfrau, and the Dufourspitze. Switzerland's alpine landscape has made it a premier destination for skiing, hiking, and mountaineering, while its charming villages and pristine lakes offer relaxation and natural beauty year-round.",
    heroImage: "/images/places/swiss-alps.jpg",
    gallery: [
      "/images/places/swiss-alps.jpg",
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?w=800&q=80",
      "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&q=80",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
      "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?w=800&q=80",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
      "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&q=80"
    ],
    price: "$1,899",
    duration: "8 Days / 7 Nights",
    rating: 4.9,
    reviewCount: 1876,
    bestTime: "December - March (skiing), June - September (hiking)",
    language: "German, French, Italian, Romansh",
    currency: "Swiss Franc (CHF)",
    highlights: [
      "Ride the Glacier Express panoramic train",
      "Visit the iconic Matterhorn in Zermatt",
      "Ski or hike in world-class resorts",
      "Explore charming Alpine villages",
      "Cruise on crystal-clear Lake Lucerne",
      "Taste authentic Swiss chocolate and fondue"
    ],
    included: [
      "7 nights luxury chalet/hotel",
      "All breakfasts & 4 dinners",
      "Glacier Express train tickets",
      "Cable car and gondola passes",
      "Guided mountain hikes",
      "Swiss chocolate tasting tour"
    ],
    tags: ["adventure-trips", "photography-tours", "eco-tourism"],
    itinerary: [
      { day: 1, title: "Welcome to Switzerland", description: "Arrive in Zurich. Scenic train to Lucerne. Evening walk along Chapel Bridge and Lake Lucerne." },
      { day: 2, title: "Lucerne & Surrounds", description: "Morning cruise on Lake Lucerne. Afternoon cable car to Mount Pilatus for panoramic Alpine views." },
      { day: 3, title: "Jungfrau Region", description: "Train to Interlaken. Jungfrau railway to the 'Top of Europe'. Explore the ice palace and observation deck." },
      { day: 4, title: "Glacier Express", description: "Board the famous Glacier Express from Interlaken to Zermatt. Journey through stunning mountain passes and valleys." },
      { day: 5, title: "Matterhorn Magic", description: "Full day in Zermatt. Cable car to Matterhorn Glacier Paradise. Afternoon exploring the car-free village." },
      { day: 6, title: "Alpine Adventures", description: "Guided hiking day through alpine meadows. Traditional Swiss lunch at a mountain hut. Afternoon at leisure." },
      { day: 7, title: "Fondue & Farewell", description: "Morning at a Swiss chocolate factory. Afternoon shopping in Lucerne. Evening traditional fondue dinner." },
      { day: 8, title: "Departure", description: "Breakfast with mountain views. Transfer to Zurich airport for departure." }
    ]
  },
  {
    id: "kyoto",
    name: "Kyoto",
    country: "Japan",
    continent: "Asia",
    tagline: "Ancient temples and serene gardens",
    description: "Step back in time in Japan's cultural heart, where centuries-old traditions live on in temples and tea houses.",
    longDescription: "Kyoto, once the capital of Japan, is a city on the island of Honshu. It's famous for its numerous classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses. It's also known for formal traditions such as kaiseki dining, consisting of multiple courses of precise dishes, and geisha, female entertainers often found in the Gion district. Kyoto is home to 17 UNESCO World Heritage Sites and over 2,000 temples and shrines.",
    heroImage: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80",
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80",
      "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=800&q=80",
      "https://images.unsplash.com/photo-1522623349500-de37a56ea2a5?w=800&q=80",
      "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=800&q=80",
      "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800&q=80",
      "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800&q=80",
      "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=800&q=80",
      "https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?w=800&q=80"
    ],
    price: "$1,399",
    duration: "7 Days / 6 Nights",
    rating: 4.9,
    reviewCount: 3245,
    bestTime: "March - May (cherry blossoms), October - November (autumn leaves)",
    language: "Japanese",
    currency: "Japanese Yen (JPY)",
    highlights: [
      "Walk through the iconic Fushimi Inari Shrine",
      "Visit the golden Kinkaku-ji temple",
      "Experience a traditional tea ceremony",
      "Explore the Arashiyama Bamboo Grove",
      "Spot geisha in the Gion district",
      "Stay in a traditional ryokan"
    ],
    included: [
      "6 nights accommodation (mix of hotel and ryokan)",
      "Daily breakfast & 2 kaiseki dinners",
      "7-day JR Pass for regional trains",
      "Guided temple and shrine tours",
      "Traditional tea ceremony",
      "Kimono rental experience"
    ],
    tags: ["cultural-tours", "photography-tours", "culinary-journeys"],
    itinerary: [
      { day: 1, title: "Arrival in Kyoto", description: "Arrive at Kansai Airport. Transfer to your hotel. Evening walk through Gion district." },
      { day: 2, title: "Thousand Torii Gates", description: "Morning visit to Fushimi Inari Shrine. Afternoon at Tofuku-ji Temple. Evening kaiseki dinner." },
      { day: 3, title: "Golden Pavilion & Zen", description: "Visit Kinkaku-ji (Golden Pavilion) and Ryoan-ji rock garden. Afternoon tea ceremony experience." },
      { day: 4, title: "Bamboo & Monkeys", description: "Morning at Arashiyama Bamboo Grove. Visit Tenryu-ji Temple. Afternoon at Monkey Park Iwatayama." },
      { day: 5, title: "Nara Day Trip", description: "Day trip to Nara. Visit Todai-ji Temple with the Great Buddha. Interact with friendly deer in Nara Park." },
      { day: 6, title: "Kimono & Culture", description: "Morning kimono rental experience. Explore Nishiki Market. Afternoon free time. Farewell dinner." },
      { day: 7, title: "Sayonara", description: "Morning at leisure. Transfer to Kansai Airport for departure." }
    ]
  },
  {
    id: "new-york",
    name: "New York",
    country: "United States",
    continent: "North America",
    tagline: "The city that never sleeps",
    description: "Experience the energy of the world's most iconic city with its towering skyline, Broadway shows, and diverse neighborhoods.",
    longDescription: "New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that's among the world's major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon-lit Times Square. The Statue of Liberty, a symbol of freedom, stands in New York Harbor.",
    heroImage: "/images/places/new-york.jpg",
    gallery: [
      "/images/places/new-york.jpg",
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80",
      "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=800&q=80",
      "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&q=80",
      "https://images.unsplash.com/photo-1522083165195-3424ed129620?w=800&q=80",
      "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=800&q=80",
      "https://images.unsplash.com/photo-1492666673288-3c4b4576ad9a?w=800&q=80",
      "https://images.unsplash.com/photo-1470219556762-1771e7f9427d?w=800&q=80",
      "https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=800&q=80",
      "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=800&q=80"
    ],
    price: "$1,199",
    duration: "7 Days / 6 Nights",
    rating: 4.7,
    reviewCount: 6542,
    bestTime: "April - June, September - November",
    language: "English",
    currency: "US Dollar (USD)",
    highlights: [
      "Visit the iconic Statue of Liberty",
      "Explore Central Park by bike",
      "Watch a Broadway show",
      "Walk across the Brooklyn Bridge",
      "Experience Times Square at night",
      "Visit the Metropolitan Museum of Art"
    ],
    included: [
      "6 nights boutique hotel in Manhattan",
      "Daily breakfast",
      "Statue of Liberty & Ellis Island tour",
      "Broadway show tickets",
      "New York CityPASS",
      "Guided food tour of Chinatown and Little Italy"
    ],
    tags: ["cultural-tours", "culinary-journeys", "photography-tours"],
    itinerary: [
      { day: 1, title: "Welcome to NYC", description: "Arrive at JFK/LaGuardia. Transfer to your boutique hotel in Midtown Manhattan. Evening walk through Times Square." },
      { day: 2, title: "Iconic Landmarks", description: "Morning visit to the Statue of Liberty and Ellis Island. Afternoon at the 9/11 Memorial. Evening in SoHo." },
      { day: 3, title: "Art & Culture", description: "Full day at the Metropolitan Museum of Art. Afternoon in Central Park. Evening Broadway show." },
      { day: 4, title: "Neighborhoods Tour", description: "Explore Greenwich Village, Chelsea Market, and the High Line. Food tour in Chinatown and Little Italy." },
      { day: 5, title: "Brooklyn Discovery", description: "Walk across the Brooklyn Bridge. Explore DUMBO and Williamsburg. Evening rooftop bar with skyline views." },
      { day: 6, title: "Museum & Shopping", description: "Morning at MoMA or the Guggenheim. Afternoon shopping on Fifth Avenue. Farewell dinner in the Meatpacking District." },
      { day: 7, title: "Departure", description: "Leisurely breakfast. Last stroll through Central Park. Transfer to airport." }
    ]
  },
  {
    id: "bora-bora",
    name: "Bora Bora",
    country: "French Polynesia",
    continent: "Oceania",
    tagline: "Turquoise lagoon and volcanic peaks",
    description: "Discover the jewel of the South Pacific, where dramatic volcanic peaks rise above crystal-clear turquoise waters.",
    longDescription: "Bora Bora is a small South Pacific island northwest of Tahiti in French Polynesia. Surrounded by sand-fringed motus (islets) and a turquoise lagoon protected by a coral reef, it's known for its scuba diving. It's also a popular luxury resort destination where visitors stay in overwater bungalows. At the island's center rises the dormant volcano Mount Otemanu, which provides a dramatic backdrop to the stunning lagoon.",
    heroImage: "/images/places/bora-bora.jpg",
    gallery: [
      "/images/places/bora-bora.jpg",
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
      "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&q=80",
      "https://images.unsplash.com/photo-1520454974749-611b7248ffdb?w=800&q=80",
      "https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=800&q=80",
      "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=800&q=80",
      "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?w=800&q=80"
    ],
    price: "$2,499",
    duration: "8 Days / 7 Nights",
    rating: 4.9,
    reviewCount: 1543,
    bestTime: "May - October",
    language: "French, Tahitian",
    currency: "CFP Franc (XPF)",
    highlights: [
      "Stay in a luxury overwater bungalow",
      "Snorkel with sharks and rays in the lagoon",
      "Hike Mount Otemanu for panoramic views",
      "Private motu picnic on a secluded islet",
      "Sunset cruise around the lagoon",
      "Traditional Polynesian spa experience"
    ],
    included: [
      "7 nights overwater bungalow",
      "Daily breakfast & 3 dinners",
      "Lagoon snorkeling excursion",
      "Sunset catamaran cruise",
      "Polynesian cultural show",
      "Couples spa treatment"
    ],
    tags: ["beach-getaways", "eco-tourism"],
    itinerary: [
      { day: 1, title: "Welcome to Paradise", description: "Arrive at Bora Bora Airport. Boat transfer to your overwater bungalow resort. Welcome cocktails and sunset views." },
      { day: 2, title: "Lagoon Discovery", description: "Morning lagoon snorkeling excursion to see sharks and rays. Afternoon at leisure. Evening beach dinner." },
      { day: 3, title: "Island Exploration", description: "Guided 4x4 tour of Bora Bora's interior. Visit historical sites and viewpoints. Afternoon at Matira Beach." },
      { day: 4, title: "Motu Picnic", description: "Private boat to a secluded motu. Gourmet picnic lunch on a private beach. Afternoon snorkeling and swimming." },
      { day: 5, title: "Adventure Day", description: "Morning jet ski tour of the lagoon. Afternoon paddleboarding and kayaking. Sunset cocktails." },
      { day: 6, title: "Spa & Culture", description: "Morning Polynesian spa treatment. Afternoon cultural workshop. Traditional Polynesian dance show and dinner." },
      { day: 7, title: "Sunset Sail", description: "Free morning for relaxation. Afternoon sunset catamaran cruise around the lagoon. Farewell dinner." },
      { day: 8, title: "Au Revoir", description: "Leisurely breakfast. Boat and flight transfer for departure." }
    ]
  },
  {
    id: "rio-de-janeiro",
    name: "Rio de Janeiro",
    country: "Brazil",
    continent: "South America",
    tagline: "Sun, samba, and spectacular views",
    description: "Feel the rhythm of Brazil in the Marvelous City, where golden beaches meet lush mountains and vibrant culture.",
    longDescription: "Rio de Janeiro is a huge seaside city in Brazil, famed for its Copacabana and Ipanema beaches, the 38m Christ the Redeemer statue atop Mount Corcovado, and for Sugarloaf Mountain, a granite peak with cable cars to its summit. The city is also known for its sprawling favelas, vibrant Carnival festival featuring parade floats, flamboyant costumes, and samba dancers, and a lively nightlife scene. Rio's dramatic landscape combines mountains, forests, and beaches in one of the world's most beautiful urban settings.",
    heroImage: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=80",
      "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=800&q=80",
      "https://images.unsplash.com/photo-1544989164-31dc3c298e3b?w=800&q=80",
      "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?w=800&q=80",
      "https://images.unsplash.com/photo-1564659907532-6b5f98c8e70f?w=800&q=80",
      "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=800&q=80",
      "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=800&q=80"
    ],
    price: "$1,099",
    duration: "7 Days / 6 Nights",
    rating: 4.7,
    reviewCount: 2891,
    bestTime: "December - March",
    language: "Portuguese",
    currency: "Brazilian Real (BRL)",
    highlights: [
      "Visit Christ the Redeemer atop Corcovado",
      "Relax on Copacabana and Ipanema beaches",
      "Ride the cable car to Sugarloaf Mountain",
      "Experience the vibrant Lapa nightlife",
      "Explore the Tijuca Forest National Park",
      "Learn samba in a traditional dance school"
    ],
    included: [
      "6 nights beachfront hotel accommodation",
      "Daily breakfast",
      "Christ the Redeemer skip-the-line tickets",
      "Sugarloaf Mountain cable car pass",
      "Guided favela walking tour",
      "Samba dance lesson"
    ],
    tags: ["beach-getaways", "cultural-tours", "photography-tours"],
    itinerary: [
      { day: 1, title: "Welcome to Rio", description: "Arrive at Galeão International Airport. Transfer to your beachfront hotel in Copacabana. Evening caipirinha tasting on the beach." },
      { day: 2, title: "Iconic Rio", description: "Morning visit to Christ the Redeemer at Corcovado. Afternoon exploring Santa Teresa neighborhood. Evening in Lapa." },
      { day: 3, title: "Sugarloaf & Beaches", description: "Cable car ride to Sugarloaf Mountain for panoramic views. Afternoon at Ipanema Beach. Sunset at Arpoador." },
      { day: 4, title: "Culture & Nature", description: "Morning at the Museum of Tomorrow and MAR Art Museum. Afternoon hike in Tijuca Forest to waterfalls." },
      { day: 5, title: "Favela & Samba", description: "Guided walking tour of Rocinha favela. Afternoon samba dance lesson. Evening at a traditional rodas de samba." },
      { day: 6, title: "Island Escape", description: "Full-day trip to Ilha Grande. Boat ride, snorkeling, and beach hopping on this tropical island paradise." },
      { day: 7, title: "Tchau Rio", description: "Leisurely morning at Copacabana. Last-minute shopping at Hippy Market. Transfer to airport for departure." }
    ]
  },
  {
    id: "buenos-aires",
    name: "Buenos Aires",
    country: "Argentina",
    continent: "South America",
    tagline: "Tango, steak, and European charm",
    description: "Discover the Paris of South America with its grand boulevards, passionate tango, and world-class cuisine.",
    longDescription: "Buenos Aires is Argentina's big, cosmopolitan capital city. It is centered on the Plaza de Mayo, lined with stately 19th-century buildings including Casa Rosada, the iconic, balcony-laden presidential palace. Other major attractions include the Teatro Colón, a grand 1900s opera house with nearly 2,500 seats, and the modern MALBA museum, displaying Latin American art. The city is known for its vibrant nightlife, with tango clubs, stylish restaurants, and lively bars. Buenos Aires also offers incredible shopping, from the flea markets of San Telmo to the chic boutiques of Palermo.",
    heroImage: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=800&q=80",
      "https://images.unsplash.com/photo-1612294037637-ec328d0e075e?w=800&q=80",
      "https://images.unsplash.com/photo-1568402102990-bc541580b59f?w=800&q=80",
      "https://images.unsplash.com/photo-1579687196544-08ae57ab5960?w=800&q=80",
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&q=80"
    ],
    price: "$999",
    duration: "7 Days / 6 Nights",
    rating: 4.8,
    reviewCount: 2345,
    bestTime: "March - May, September - November",
    language: "Spanish",
    currency: "Argentine Peso (ARS)",
    highlights: [
      "Watch an authentic tango show in San Telmo",
      "Explore the colorful La Boca neighborhood",
      "Attend a match at La Bombonera stadium",
      "Stroll through the historic Recoleta Cemetery",
      "Savor world-famous Argentine asado",
      "Shop at the vibrant San Telmo Sunday market"
    ],
    included: [
      "6 nights boutique hotel in Palermo",
      "Daily breakfast & 2 Argentine dinners",
      "Professional tango show with dinner",
      "Guided city walking tour",
      "Wine tasting of Argentine Malbec",
      "Gaucho ranch day trip"
    ],
    tags: ["cultural-tours", "culinary-journeys", "photography-tours"],
    itinerary: [
      { day: 1, title: "Buenos Aires Arrival", description: "Arrive at Ezeiza Airport. Transfer to boutique hotel in Palermo. Evening stroll and welcome dinner with Argentine steak and Malbec." },
      { day: 2, title: "Historic Center", description: "Walking tour of Plaza de Mayo, Casa Rosada, and Metropolitan Cathedral. Afternoon at the Obelisco and Teatro Colón." },
      { day: 3, title: "La Boca & San Telmo", description: "Morning at the colorful Caminito street in La Boca. Afternoon antique shopping in San Telmo. Evening tango show with dinner." },
      { day: 4, title: "Palermo & Recoleta", description: "Explore Palermo's parks and trendy boutiques. Visit Recoleta Cemetery and the MALBA art museum." },
      { day: 5, title: "Gaucho Experience", description: "Full-day trip to a traditional estancia in the Pampas. Horseback riding, asado lunch, and gaucho demonstrations." },
      { day: 6, title: "Food & Wine", description: "Morning empanada cooking class. Afternoon Malbec wine tasting in Palermo. Evening farewell dinner at a top parrilla." },
      { day: 7, title: "Hasta Luego", description: "Leisurely breakfast with medialunas. Last walk through Palermo Soho. Transfer to airport." }
    ]
  },
  {
    id: "sydney",
    name: "Sydney",
    country: "Australia",
    continent: "Oceania",
    tagline: "Harbor views and coastal adventures",
    description: "Experience Australia's dazzling harbor city with its iconic Opera House, stunning beaches, and vibrant culture.",
    longDescription: "Sydney, capital of New South Wales and one of Australia's largest cities, is best known for its harbourfront Sydney Opera House, with a distinctive sail-like design. Massive Darling Harbour and the smaller Circular Quay port are hubs of waterside life, with the arched Harbour Bridge and esteemed Royal Botanic Garden nearby. Sydney Tower's outdoor platform, the Skywalk, offers 360-degree views of the city and suburbs. The city also boasts some of the world's most famous beaches, including Bondi and Manly, as well as a thriving food and arts scene.",
    heroImage: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80",
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800&q=80",
      "https://images.unsplash.com/photo-1528072164453-f4e8ef0d475a?w=800&q=80",
      "https://images.unsplash.com/photo-1526958916923-a5879a272591?w=800&q=80",
      "https://images.unsplash.com/photo-1524293581917-878a6d017c71?w=800&q=80",
      "https://images.unsplash.com/photo-1598948485421-33a1655d3c18?w=800&q=80",
      "https://images.unsplash.com/photo-1506146635773-e47d80e79e1a?w=800&q=80"
    ],
    price: "$1,599",
    duration: "8 Days / 7 Nights",
    rating: 4.8,
    reviewCount: 3127,
    bestTime: "September - November, March - May",
    language: "English",
    currency: "Australian Dollar (AUD)",
    highlights: [
      "Tour the iconic Sydney Opera House",
      "Climb the Sydney Harbour Bridge",
      "Surf at Bondi Beach",
      "Take the ferry to Manly Beach",
      "Explore the Blue Mountains",
      "Visit Taronga Zoo with harbour views"
    ],
    included: [
      "7 nights harbour-view hotel",
      "Daily breakfast & 2 dinners",
      "Sydney Opera House guided tour",
      "Harbour BridgeClimb experience",
      "Blue Mountains full-day tour",
      "Bondi to Coogee coastal walk guide"
    ],
    tags: ["adventure-trips", "beach-getaways", "photography-tours"],
    itinerary: [
      { day: 1, title: "Welcome to Sydney", description: "Arrive at Sydney Kingsford Smith Airport. Transfer to your harbour-view hotel in Circular Quay. Evening walk along the waterfront." },
      { day: 2, title: "Opera House & Rocks", description: "Morning guided tour of the Sydney Opera House. Explore The Rocks historic district. Afternoon Harbour Bridge walk. Evening cruise on the harbour." },
      { day: 3, title: "Bondi & Beaches", description: "Morning surf lesson at Bondi Beach. Afternoon Bondi to Coogee coastal walk. Evening seafood dinner at Bondi Icebergs." },
      { day: 4, title: "Blue Mountains", description: "Full-day excursion to the Blue Mountains. See the Three Sisters rock formation. Scenic railway and Skyway rides." },
      { day: 5, title: "Harbour & Wildlife", description: "Morning ferry to Taronga Zoo. Afternoon kayaking in the harbour. Evening at Darling Harbour." },
      { day: 6, title: "Manly & Northern Beaches", description: "Ferry ride to Manly Beach. Morning at Shelly Beach for snorkeling. Afternoon exploring Manly town. Sunset drinks." },
      { day: 7, title: "Food & Culture", description: "Morning at the Sydney Fish Market. Afternoon at the Art Gallery of NSW. Evening Harbour BridgeClimb at sunset. Farewell dinner." },
      { day: 8, title: "Farewell Australia", description: "Leisurely breakfast with harbour views. Last-minute shopping at Queen Victoria Building. Transfer to airport." }
    ]
  }
]

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find(d => d.id === slug)
}

export function getAllDestinationSlugs(): string[] {
  return destinations.map(d => d.id)
}

export function getDestinationsByTag(tag: string): Destination[] {
  return destinations.filter(d => d.tags.includes(tag))
}

export function getDestinationsByContinent(continent: string): Destination[] {
  return destinations.filter(d => d.continent === continent)
}

export const allContinents = ["Asia", "Europe", "Africa", "South America", "North America", "Oceania"]

export const allTags = [
  { slug: "cultural-tours", label: "Cultural Tours" },
  { slug: "adventure-trips", label: "Adventure Trips" },
  { slug: "beach-getaways", label: "Beach Getaways" },
  { slug: "eco-tourism", label: "Eco Tourism" },
  { slug: "photography-tours", label: "Photography Tours" },
  { slug: "culinary-journeys", label: "Culinary Journeys" },
]
