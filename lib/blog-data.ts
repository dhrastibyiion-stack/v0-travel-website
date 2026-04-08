export interface BlogPost {
  id: string
  title: string
  excerpt: string
  category: string
  author: string
  authorAvatar: string
  date: string
  readTime: string
  image: string
  featured?: boolean
  country?: string
}

export const countryBlogPosts: Record<string, {
  id: string
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
}> = {
  "japan": {
    id: "japan-guide",
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
        text: "Tokyo, the bustling capital, is a sensory overload of neon lights, towering buildings, and ancient shrines. The district of Shibuya Crossing, where thousands of people cross each time the light changes, is quintessentially Tokyo. Yet within the city, you'll find serene gardens like the Imperial Palace East Gardens.",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
        imageCaption: "Tokyo's Shibuya Crossing at night",
      },
      {
        text: "The city's diverse neighborhoods each offer unique experiences. Shinjuku boasts world-class shopping and entertainment, while Asakusa maintains its old-town atmosphere with traditional temples and markets. Harajuku is the heart of Japanese youth culture and fashion.",
      },
      {
        text: "Kyoto, the former imperial capital, is the best place to experience traditional Japan. Over 2,000 temples and shrines dot the city, including the famous Golden Pavilion (Kinkaku-ji) and the vermillion gates of Fushimi Inari Shrine. The Philosopher's Path in spring is magical when the cherry blossoms bloom.",
        image: "https://images.unsplash.com/photo-1624253321171-1be53e12f5f4?w=800&q=80",
        imageCaption: "Fushimi Inari Shrine's famous torii gates",
      },
      {
        text: "Japanese cuisine has earned global recognition. From Michelin-starred sushi restaurants in Tokyo to humble ramen shops in Osaka, the country offers incredible culinary experiences. Don't miss trying fresh sushi at Tsukiji Outer Market, authentic kaiseki (multi-course) dining, and the various regional specialties.",
      },
      {
        text: "The Japanese concept of onsen (hot springs) provides a unique way to relax. The country offers everything from outdoor mountain baths to luxurious spa resorts. Hakone, near Tokyo, is famous for its hot springs with views of Mount Fuji.",
      },
      {
        text: "Japan's natural beauty is stunning. Mount Fuji, Japan's highest peak, is an iconic symbol. The Japanese Alps offer excellent hiking and skiing. In spring, the entire country transforms into a pink wonderland during cherry blossom season, with hanami (flower viewing) celebrations throughout the country.",
      },
      {
        text: "Modern Japan continues to innovate. The bullet train (Shinkansen) network is one of the most efficient in the world. Akihabara in Tokyo is a paradise for tech enthusiasts and anime fans. Japanese craftsmanship, from electronics to traditional ceramics, reflects a dedication to quality and precision.",
      },
      {
        text: "To truly appreciate Japan, embrace the culture's emphasis on respect, harmony, and attention to detail. Take time to enjoy a tea ceremony, visit a Zen garden, and experience the seasons through the Japanese concept of mono no aware – the awareness of impermanence and the beauty of fleeting moments.",
      },
    ],
  },
  "thailand": {
    id: "thailand-guide",
    title: "Thailand: The Land of Smiles Awaits",
    excerpt: "From bustling Bangkok to pristine islands, explore everything Thailand has to offer for the modern traveler.",
    category: "Destinations",
    author: "David Park",
    authorAvatar: "DP",
    date: "Mar 30, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80",
    content: [
      {
        text: "Thailand, known as the Land of Smiles, welcomes visitors with warm hospitality, stunning natural beauty, rich cultural heritage, and some of the best street food in the world. Whether you seek adventure, relaxation, or cultural immersion, Thailand delivers unforgettable experiences.",
      },
      {
        text: "Bangkok, the vibrant capital, is a city of contrasts. Grand palaces and ancient temples stand alongside modern shopping malls and pulsating nightlife. The Grand Palace, with its intricate architecture and glittering spires, remains the most iconic landmark. Nearby, Wat Pho houses the massive Reclining Buddha.",
        image: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=800&q=80",
        imageCaption: "The Grand Palace in Bangkok",
      },
      {
        text: "Bangkok's street food scene is legendary. From sizzling pad thai to fragrant mango sticky rice, the city's food stalls offer incredible flavors at affordable prices. The floating markets, particularly Khlong Lat Mayom, provide a unique shopping experience on traditional boats.",
      },
      {
        text: "Northern Thailand offers a different perspective. Chiang Mai, theRose of the North, is known for its ancient temples, vibrant night markets, and proximity to elephant sanctuaries and hill tribe communities. The stunning Doi Suthep temple perched on a mountain offers panoramic views.",
        image: "https://images.unsplash.com/photo-1512553204530-3716501a7603?w=800&q=80",
        imageCaption: "Temple in Chiang Mai old city",
      },
      {
        text: "The Thai islands cater to every taste. Phuket offers luxury resorts and lively beach parties. For a more laid-back vibe, Krabi's limestone cliffs and beaches attract rock climbers and those seeking tranquility. The Phi Phi Islands, made famous by the movie 'The Beach', offer stunning marine life.",
        image: "https://images.unsplash.com/photo-1536684177187-50f9e5a6b987?w=800&q=80",
        imageCaption: "Crystal clear waters of Thai islands",
      },
      {
        text: "Koh Phangan is famous for its Full Moon Party, but also offers serene beaches and yoga retreats. Koh Samui remains a favorite with its palm-fringed shores and luxury villas. For diving enthusiasts, Koh Tao offers some of the best diving in Thailand.",
      },
      {
        text: "Thai cuisine is internationally beloved for its perfect balance of sweet, sour, salty, and spicy flavors. From green curry to tom yum soup, each dish tells a story of the country's culinary heritage. Cooking classes in Bangkok and Chiang Mai allow visitors to learn the secrets of Thai cooking.",
      },
      {
        text: "Thailand's Buddhist heritage is evident throughout the country. Temples, known as wats, are found in every town and city. The elaborate religious festivals, especially Songkran (Thai New Year) in April and Loy Krathong (Festival of Light), showcase the country's spiritual traditions.",
      },
      {
        text: "What makes Thailand special is the warmth of its people. The Thai concept of 'sanuk' (fun) and 'mai pen rai' (no problem) permeates daily life. Visitors quickly understand why Thailand is called the Land of Smiles – it's a place where hospitality is a way of life.",
      },
    ],
  },
  "kenya": {
    id: "kenya-guide",
    title: "Kenya: The Ultimate Safari Destination",
    excerpt: "Experience the magic of an African safari in Kenya, home to the great migration and incredible wildlife.",
    category: "Destinations",
    author: "James Wilson",
    authorAvatar: "JW",
    date: "Mar 28, 2026",
    readTime: "13 min read",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
    content: [
      {
        text: "Kenya is the quintessential safari destination, offering some of the most spectacular wildlife viewing opportunities on Earth. From the endless savannas of the Maasai Mara to the snow-capped peaks of Mount Kenya, this East African nation promises adventure and unforgettable encounters with nature.",
      },
      {
        text: "The Maasai Mara National Reserve is Kenya's most famous wildlife sanctuary. Here, you'll witness the Great Migration, one of nature's most awe-inspiring spectacles. Each year, millions of wildebeest, zebras, and gazelles cross from the Serengeti in Tanzania, braving crocodile-infested rivers in search of fresh grazing lands.",
        image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80",
        imageCaption: "Wildebeest migration in Maasai Mara",
      },
      {
        text: "The Mara is also home to the Big Five – lion, leopard, elephant, rhino, and buffalo. Early morning and late afternoon game drives offer the best opportunities to spot these magnificent animals. The prides of lions here are among the most studied in Africa, and you're likely to see them hunting or relaxing in the shade.",
      },
      {
        text: "Nairobi, the capital city, provides a fascinating urban contrast. The Nairobi National Park, located just outside the city center, is unique for having wildlife against a city skyline. The David Sheldrick Wildlife Trust offers the chance to see baby elephants being rehabilitated and returned to the wild.",
        image: "https://images.unsplash.com/photo-1616087151320-7d0c0733b932?w=800&q=80",
        imageCaption: "Elephants at a watering hole near Nairobi",
      },
      {
        text: "The Rift Valley lakes offer different experiences. Lake Nakuru, famous for its flamingos, provides stunning birdwatching opportunities. Lake Naivasha is a haven for hippos and a base for exploring Hell's Gate National Park, where you can cycle or walk among wildlife.",
      },
      {
        text: "Kenya's coastal region offers a different adventure. The Swahili culture of Mombasa, with its blend of African, Arab, and Indian influences, creates a unique atmosphere. The beaches of Malindi and Diani, with their coral reefs, are perfect for diving, snorkeling, and relaxation.",
        image: "https://images.unsplash.com/photo-1576675466969-38eeae4b41f6?w=800&q=80",
        imageCaption: "Kenya's pristine coastline",
      },
      {
        text: "The Maasai people, with their distinctive red shukas and beadwork, represent Kenya's rich cultural heritage. Visiting a Maasai village offers insight into traditional pastoralist life and the opportunity to support community-owned tourism initiatives.",
      },
      {
        text: "Conservation is at the heart of Kenyan tourism. Many lodges and camps work directly with local communities and conservation organizations. By choosing ethical safari operators, visitors contribute to protecting Kenya's wildlife for future generations.",
      },
      {
        text: "There's something primal about the African bush – the golden grass swaying in the wind, the distant call of a lion at dusk, the thundering hooves of a wildebeest herd. Kenya offers not just a safari, but a profound connection to the natural world that stays with you long after you return home.",
      },
    ],
  },
  "greece": {
    id: "greece-guide",
    title: "Greece: Ancient Wonders & Island Paradise",
    excerpt: "Explore Greece's rich history, stunning islands, and Mediterranean charm that has captivated travelers for millennia.",
    category: "Destinations",
    author: "Elena Papadopoulos",
    authorAvatar: "EP",
    date: "Mar 27, 2026",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&q=80",
    content: [
      {
        text: "Greece is a country where ancient history meets stunning natural beauty. From the iconic white-washed buildings of the Cyclades to the ancient ruins of Athens, Greece offers an unparalleled journey through time and culture. This Mediterranean gem has been drawing travelers for thousands of years, and its allure shows no signs of fading.",
      },
      {
        text: "Athens, the capital, is an open-air museum of ancient civilization. The Acropolis, with its magnificent Parthenon temple, stands as one of the most important archaeological sites in the world. The nearby Ancient Agora, where Socrates once walked, provides a window into daily life in classical Greece.",
        image: "https://images.unsplash.com/photo-1555993539-1732b0258237?w=800&q=80",
        imageCaption: "The Acropolis and Parthenon in Athens",
      },
      {
        text: "No visit to Athens is complete without exploring the National Archaeological Museum, which houses one of the most important collections of Greek art in the world. From golden masks to intricate pottery, the artifacts tell the story of a civilization that shaped Western culture.",
      },
      {
        text: "The Greek islands are the epitome of Mediterranean paradise. Santorini, with its stunning sunsets and distinctive white and blue architecture, is perhaps the most famous. The volcanic landscape creates dramatic seascapes, and the black sand beaches offer a unique coastal experience.",
        image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80",
        imageCaption: "Blue domes of Santorini",
      },
      {
        text: "Mykonos, known for its vibrant nightlife and beautiful beaches, attracts a cosmopolitan crowd. The labyrinthine old town, with its winding streets and white buildings, is perfect for exploration. The famous windmills, dating back to the 16th century, remain iconic landmarks.",
      },
      {
        text: "Crete, the largest Greek island, offers incredible diversity. The ancient Palace of Knossos, center of the Minoan civilization, is a must-visit. The island's dramatic gorges, including the famous Samaria Gorge, draw hikers from around the world. The unique cuisine of Crete, featuring fresh seafood and local produce, is a culinary highlight.",
        image: "https://images.unsplash.com/photo-1504512485720-7d83a16ee930?w=800&q=80",
        imageCaption: "Traditional village in Crete",
      },
      {
        text: "The Greek mainland has its own treasures. Delphi, once considered the center of the world, offers spectacular ruins perched on the slopes of Mount Parnassus. The monastic community of Meteora, with its monasteries built atop towering rock pillars, is one of Greece's most surreal sights.",
      },
      {
        text: "Greek cuisine is a celebration of fresh ingredients and bold flavors. From moussaka and souvlaki to fresh salads and honey-soaked pastries, the food reflects the Mediterranean lifestyle. The country's olive oil, produced for millennia, is considered among the finest in the world.",
      },
      {
        text: "What makes Greece special is the combination of its incredible history, natural beauty, and warm hospitality. The Greek concept of philoxenia (love of strangers) means visitors are always welcomed. Whether you're exploring ancient ruins, lounging on pristine beaches, or enjoying a meal with locals, Greece offers experiences that create lasting memories.",
      },
    ],
  },
  "france": {
    id: "france-guide",
    title: "France: Art, Culture & Culinary Excellence",
    excerpt: "Discover France's world-class museums, romantic cities, and the finest cuisine that defines the art de vivre.",
    category: "Destinations",
    author: "Sophie Martin",
    authorAvatar: "SM",
    date: "Mar 26, 2026",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
    content: [
      {
        text: "France is the world's most visited country, and for good reason. From the浪漫的街道 of Paris to the薰衣草 fields of Provence, France offers an unrivaled combination of art, culture, cuisine, and landscapes. The French concept of 'art de vivre' – the art of living – permeates every aspect of life here.",
      },
      {
        text: "Paris, the City of Light, is a destination that needs no introduction. The Eiffel Tower, rising gracefully over the skyline, is the ultimate symbol of the city. But beyond the iconic landmarks lies a city of neighborhood cafés, elegant boutiques, and world-class museums.",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
        imageCaption: "The Eiffel Tower and Paris skyline",
      },
      {
        text: "The Louvre, once a royal palace, now houses one of the most impressive art collections in history. From the Mona Lisa to the Venus de Milo, the museum's treasures span centuries of human creativity. The nearby Musée d'Orsay, housed in a former railway station, showcases Impressionist masterpieces.",
      },
      {
        text: "The French Riviera embodies elegance and glamour. Nice, with its Promenade des Anglais and vibrant old town, offers Mediterranean charm. Monaco, the tiny principality known for its casino and Grand Prix, exudes luxury. The perfume fields of Grasse nearby produce some of the world's finest fragrances.",
        image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=800&q=80",
        imageCaption: "Vieux Nice and the Mediterranean coast",
      },
      {
        text: "The Loire Valley, with its Renaissance castles, is a testament to French grandeur. Chenonceau, spanning the Cher River, and Chambord, with its double helix staircase, are architectural marvels set among beautiful gardens. The region is also famous for its wines and cuisines.",
      },
      {
        text: "Provence, with its lavender fields, olive groves, and Roman ruins, captures the essence of French countryside. The markets of Aix-en-Provence overflow with local produce, while Arles showcases Van Gogh's artistic legacy. The perched villages of the Luberon offer timeless charm.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
        imageCaption: "Lavender fields in Provence",
      },
      {
        text: "French cuisine is a cornerstone of the country's identity. From buttery croissants to rich coq au vin, each dish reflects regional traditions and seasonal ingredients. The cheese selection, with over 1,000 varieties, is mind-boggling. And of course, French wines, from Bordeaux to Burgundy, are celebrated worldwide.",
      },
      {
        text: "The French Alps offer world-class skiing and stunning mountain scenery. Chamonix, at the foot of Mont Blanc, attracts adventure seekers year-round. The Alpine villages, with their wooden chalets and fresh mountain air, provide a magical winter escape.",
      },
      {
        text: "France transforms with the seasons. Spring brings blooming gardens and the Cannes Film Festival. Autumn offers harvest festivals and golden foliage. Each season reveals a different facet of this remarkable country, making it a destination that rewards repeat visits.",
      },
    ],
  },
  "switzerland": {
    id: "switzerland-guide",
    title: "Switzerland: Alpine Majesty & Precision",
    excerpt: "Experience Switzerland's breathtaking mountains, pristine lakes, and world-renowned efficiency and hospitality.",
    category: "Destinations",
    author: "Hans Mueller",
    authorAvatar: "HM",
    date: "Mar 25, 2026",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800&q=80",
    content: [
      {
        text: "Switzerland is a country that seems to have been designed for postcard perfection. The Swiss Alps dominate the landscape, with snow-capped peaks, crystal-clear lakes, and pristine villages that look like they've been plucked from a fairy tale. But Switzerland is more than just natural beauty – it's a nation of precision, innovation, and exceptional quality of life.",
      },
      {
        text: "Zürich, the largest city, sits on the shores of Lake Zürich and offers a perfect blend of old and new. The medieval old town, with its winding streets and historic churches, contrasts beautifully with the modern Bahnhofstrasse, one of Europe's most prestigious shopping streets. The city's cultural scene, from world-class museums to vibrant nightlife, rivals any European capital.",
        image: "https://images.unsplash.com/photo-1524312791264-c7e3c2b26a1a?w=800&q=80",
        imageCaption: "Lake Zürich and the old town",
      },
      {
        text: "Interlaken, nestled between Lake Thun and Lake Brienz, is the adventure capital of Switzerland. From here, you can explore the stunning Jungfrau region, take a thrilling paragliding flight over the Alps, or ride the highest railway in Europe to the Jungfraujoch, known as the 'Top of Europe'.",
        image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800&q=80",
        imageCaption: "Interlaken with the Alps in background",
      },
      {
        text: "Lucerne, with its iconic Chapel Bridge and Lion Monument, offers Swiss charm at its finest. The nearby Mount Pilatus and Rigi provide spectacular Alpine experiences, with cogwheel railways and hiking trails that cater to all levels of fitness.",
      },
      {
        text: "The Swiss rail network is an engineering marvel. The Glacier Express, often called the slowest express train in the world, traverses spectacular mountain scenery between Zermatt and St. Moritz. The journey through the Landwasser Viaduct and the Oberalp Pass is nothing short of breathtaking.",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
        imageCaption: "The Glacier Express traversing the Alps",
      },
      {
        text: "Zermatt, at the foot of the Matterhorn, is one of the world's most famous alpine villages. The car-free center, with its traditional wooden chalets and upscale restaurants, offers a quintessential Swiss experience. In winter, the skiing is exceptional; in summer, hiking around the Matterhorn reveals some of the most dramatic mountain scenery in Europe.",
      },
      {
        text: "Swiss cuisine reflects the country's multilingual culture. German-influenced dishes like rösti dominate in the German-speaking regions, while Italian-influenced cuisine prevails in Ticino. Fondue and raclette, the ultimate Swiss comfort foods, are found throughout the country, best enjoyed after a day on the mountain.",
      },
      {
        text: "What makes Switzerland special is the attention to detail. Whether it's the punctual trains, the clean streets, or the well-maintained hiking trails, everything works with Swiss efficiency. Yet beneath this precision lies a deep appreciation for nature and tradition that makes Switzerland both modern and timeless.",
      },
    ],
  },
  "bali": {
    id: "bali-guide",
    title: "Bali: The Island of Gods & Temples",
    excerpt: "Experience Bali's spiritual essence, terraced rice fields, and the unique culture that makes it Indonesia's most beloved island.",
    category: "Destinations",
    author: "Wayan Sukarno",
    authorAvatar: "WS",
    date: "Mar 23, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    content: [
      {
        text: "Bali is more than just a tropical paradise – it's a spiritual island where ancient traditions blend seamlessly with modern tourism. Known as the Island of the Gods, Bali's cultural richness, stunning landscapes, and warm hospitality make it one of the world's most beloved destinations.",
      },
      {
        text: "Ubud, the cultural heart of Bali, sits surrounded by rice terraces and traditional villages. The Ubud Palace and the surrounding artisan quarters showcase the best of Balinese arts and crafts. The famous Monkey Forest provides a unique blend of nature and spiritual significance, with temples hidden among the jungle.",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
        imageCaption: "Tegallalang Rice Terraces near Ubud",
      },
      {
        text: "The temple of Tanah Lot, perched on a rock formation in the sea, is one of Bali's most iconic landmarks. At sunset, the temple becomes a silhouette against the orange sky, creating a scene that has been photographed countless times. The nearby pura (temple) of Uluwatu offers dramatic cliff-top views and traditional Kecak fire dances.",
      },
      {
        text: "Bali's beaches cater to every taste. Seminyak offers upscale beach clubs and modern restaurants. Kuta draws surfers with its consistent waves. The remote beaches of the east and north remain quieter, offering a more traditional experience. The Gili Islands, just a short boat ride away, offer excellent diving and a relaxed island vibe.",
      },
      {
        text: "Balinese Hinduism permeates every aspect of daily life. Offerings of flowers and incense are made three times daily, and temple festivals mark the calendar. The temple ceremonies, with their gamelan music and traditional dances, are deeply moving experiences that reveal the spiritual heart of Balinese culture.",
      },
      {
        text: "Balinese cuisine is a highlight of any visit. From the famous Babi Guling (suckling pig) to fresh seafood on the beach, the food is flavorful and aromatic. The morning markets throughout the island offer a feast for the senses, with exotic fruits, spices, and local delicacies.",
      },
      {
        text: "Beyond the beaches, Bali offers incredible natural beauty. The volcano of Mount Agung is the island's spiritual center, while the surrounding slopes are carpeted with terraced rice fields. The waterfalls of the north and the hot springs of the east offer refreshing escapes from the tropical heat.",
      },
      {
        text: "What makes Bali special is the warmth of its people and their dedication to preserving their cultural heritage. Despite the influx of tourism, the Balinese have maintained their traditions and their spiritual practices. This balance between tradition and modernity is what makes Bali such a unique and enduring destination.",
      },
    ],
  },
  "maldives": {
    id: "maldives-guide",
    title: "Maldives: Paradise Found in the Indian Ocean",
    excerpt: "Escape to the Maldives' crystal-clear waters, overwater villas, and some of the best diving in the world.",
    category: "Destinations",
    author: "Ahmed Nasir",
    authorAvatar: "AN",
    date: "Mar 22, 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
    content: [
      {
        text: "The Maldives is the embodiment of a tropical paradise. This island nation, scattered across the Indian Ocean like a string of pearls, offers some of the most pristine beaches, clearest waters, and luxurious resorts in the world. It's a destination that redefines the concept of relaxation.",
      },
      {
        text: "The Maldives consists of 1,200 islands spread over 90,000 square kilometers of ocean. The islands are low-lying coral atolls, barely above sea level, surrounded by shallow lagoons and vibrant coral reefs. From above, the pattern of islands and reefs creates a stunning geometric tapestry.",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
        imageCaption: "Aerial view of Maldives islands",
      },
      {
        text: "The overwater bungalows, built on stilts above the lagoon, have become iconic of luxury tropical travel. These private villas offer direct access to the crystal-clear waters below, with glass floor panels to observe the marine life. Many resorts also feature private pools and butler service for the ultimate in pampering.",
      },
      {
        text: "The Maldives offers world-class diving and snorkeling. The coral reefs teem with life – from tiny seahorses to majestic manta rays and whale sharks. The visibility can exceed 50 meters, and the water temperature stays warm year-round. Cleaning stations where reef fish gather to be cleaned by cleaner fish are a highlight.",
      },
      {
        text: "The underwater world extends beyond the reefs. Deep water channels, known as thilas, attract larger marine animals. Night dives reveal a different world, with sleeping fish and nocturnal creatures emerging from their hiding places. Many resorts offer diving courses for all skill levels.",
      },
      {
        text: "The local culture of the Maldives reflects its Islamic heritage and maritime traditions. The capital, Malé, offers a glimpse into daily Maldivian life, with its Friday mosque, fish market, and narrow streets. The traditional dhoni boats and the art of tuna fishing remain important parts of local life.",
      },
      {
        text: "While the Maldives is known for luxury, there's also a more authentic side to discover. Visiting local islands, where Maldivian families have lived for generations, offers insight into traditional island life. The local cuisine, featuring fresh tuna and coconut, is delicious and different from resort food.",
      },
      {
        text: "Climate change poses significant challenges to this low-lying nation, and the Maldives has become a leader in environmental conservation. Many resorts have implemented solar power and desalination systems, and marine biologists work to restore damaged coral reefs. Visiting the Maldives today means supporting these conservation efforts.",
      },
    ],
  },
  "brazil": {
    id: "brazil-guide",
    title: "Brazil: Rhythm, Rainforests & Revolution",
    excerpt: "Experience the vibrant culture, stunning beaches, and breathtaking natural wonders of South America's largest nation.",
    category: "Destinations",
    author: "Ana Silva",
    authorAvatar: "AS",
    date: "Apr 3, 2026",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=80",
    content: [
      {
        text: "Brazil is a country of extraordinary diversity and infectious energy. From the iconic statue of Christ the Redeemer in Rio de Janeiro to the vast Amazon rainforest, Brazil offers experiences that range from cosmopolitan sophistication to wild natural beauty. This is a land where samba rhythms fill the air and every day feels like a celebration.",
      },
      {
        text: "Rio de Janeiro, the Marvelous City, is perhaps Brazil's most famous destination. The towering peaks of Sugarloaf and Tijuca frame a city of stunning beaches, vibrant neighborhoods, and world-famous festivals. Copacabana and Ipanema beaches are legendary, while the annual Carnival transforms the city into the world's largest party.",
        image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=80",
        imageCaption: "Christ the Redeemer overlooking Rio de Janeiro",
      },
      {
        text: "The Amazon rainforest, the lungs of the Earth, covers much of Brazil's territory. Exploring this vast wilderness by boat or on jungle treks reveals incredible biodiversity – from colorful macaws to pink river dolphins. The meeting of the waters near Manaus, where the dark Rio Negro meets the sandy Rio Solimões, is a natural phenomenon not to be missed.",
      },
      {
        text: "Iguazu Falls, shared with Argentina, is one of the most spectacular waterfalls in the world. The cascades stretch for nearly 3 kilometers with hundreds of falls plunging through the tropical jungle. The Devil's Throat, a U-shaped, 82-meter-high waterfall, is the most dramatic of all, with spray visible from kilometers away.",
        image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800&q=80",
        imageCaption: "The magnificent Iguazu Falls",
      },
      {
        text: "Brazil's northeastern coast offers a different vibe. The beaches of Salvador, with their colonial architecture and Afro-Brazilian culture, showcase a unique heritage. The dune landscape of Lençóis Maranhenses, though technically inland, creates pools of crystal-clear water between white sand dunes that look like a tropical desert.",
      },
      {
        text: "Brazilian cuisine is a delicious blend of indigenous, African, and Portuguese influences. Feijoada, a black bean stew with pork, is the national dish. Churrasco, the Brazilian BBQ tradition, features various cuts of meat grilled on skewers. The fresh tropical fruits, from mango to cupuaçu, make for refreshing snacks and juices.",
      },
      {
        text: "The Pantanal, the world's largest tropical wetland, is one of the best places in South America for wildlife viewing. This vast flooded plain is home to jaguars, caimans, anacondas, and thousands of bird species. Unlike the Amazon, the Pantanal offers easier access and higher chances of spotting iconic wildlife.",
      },
      {
        text: "What makes Brazil special is its warmth and inclusivity. Brazilians have a unique ability to find joy in everyday life, whether it's a spontaneous beach volleyball game or a late-night rodízio dinner. This zest for life, combined with breathtaking natural beauty, makes Brazil an unforgettable destination.",
      },
    ],
  },
  "austria": {
    id: "austria-guide",
    title: "Austria: Alpine grandeur & Imperial Elegance",
    excerpt: "Discover Austria's stunning mountain scenery, rich musical heritage, and timeless Habsburg charm.",
    category: "Destinations",
    author: "Stefan Weber",
    authorAvatar: "SW",
    date: "Apr 4, 2026",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=800&q=80",
    content: [
      {
        text: "Austria is a country that weaves together natural beauty and cultural richness like few others. From the soaring peaks of the Austrian Alps to the elegant boulevards of Vienna, this small nation has left an enormous mark on European history, music, and art. It's a destination that appeals to romantics, adventurers, and culture lovers alike.",
      },
      {
        text: "Vienna, the capital city, embodies old-world grandeur. The Habsburgs transformed this city into a cultural powerhouse, and today visitors can explore their former summer palace, Schönbrunn, with its 1,441 rooms and stunning gardens. The historic center, a UNESCO World Heritage site, is a masterpiece of baroque architecture.",
        image: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=800&q=80",
        imageCaption: "Schönbrunn Palace in Vienna",
      },
      {
        text: "Vienna's musical heritage is unmatched. Mozart, Beethoven, and Strauss all called this city home, and their works are still performed nightly in grand concert halls. The Vienna State Opera offers world-class performances, while the Vienna Philharmonic's New Year's Concert is broadcast globally. Even coffee houses feature live classical music.",
      },
      {
        text: "The Austrian Alps provide some of Europe's most dramatic mountain scenery. Hallstatt, with its picturesque lake and salt mine heritage, looks like a medieval fairy tale. The Grossglockner High Alpine Road traverses breathtaking passes with views of Austria's highest peak. In winter, resorts like St. Anton and Kitzbühel attract skiers from around the world.",
        image: "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?w=800&q=80",
        imageCaption: "The stunning Hallstatt village",
      },
      {
        text: "Salzburg, Mozart's birthplace, is one of Austria's most beautiful cities. The imposing Hohensalzburg Fortress sits above a charming old town of baroque churches and narrow streets. Every summer, the Salzburg Festival attracts world-renowned musicians and actors for weeks of exceptional performances.",
      },
      {
        text: "Austrian cuisine reflects the country's alpine location and imperial history. Wiener Schnitzel, a breaded and fried veal cutlet, is perhaps the most famous dish. Kaiserschmarrn, a fluffy shredded pancake with raisins, is a beloved dessert. The wine regions of Burgenland and Styria produce excellent whites that pair perfectly with local fare.",
      },
      {
        text: "The Austrian lake district, including Lake Wolfgang and Lake Attersee, offers a more relaxed alpine experience. These crystal-clear lakes, framed by mountains, are perfect for swimming in summer and form picture-perfect scenes that have inspired artists for centuries. The charming lakeside towns maintain their traditional Austrian character.",
      },
      {
        text: "What makes Austria special is its ability to preserve the past while embracing the future. Whether you're attending a classical concert in Vienna, skiing in the Alps, or simply enjoying a slice of apple strudel in a mountain village, Austria offers a quality of experience that reflects its centuries of refinement and natural endowment.",
      },
    ],
  },
}

export const blogPosts: BlogPost[] = [
  {
    id: "japan-guide",
    title: "Japan Unveiled: Tradition Meets Modernity",
    excerpt: "Discover Japan's unique blend of ancient traditions and cutting-edge technology, from zen gardens to neon-lit Tokyo.",
    category: "Destinations",
    author: "Yuki Tanaka",
    authorAvatar: "YT",
    date: "Apr 1, 2026",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
    featured: true,
  },
  {
    id: "hidden-gems-europe",
    title: "Hidden Gems of Europe: 10 Underrated Destinations",
    excerpt: "Escape the crowds and discover Europe's best-kept secrets, from remote villages to untouched wilderness.",
    category: "Destinations",
    author: "Marco Bianchi",
    authorAvatar: "MB",
    date: "Apr 5, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80",
    featured: true,
  },
  {
    id: "mountain-adventures",
    title: "Mountain Adventures: Best Hiking Trails for Beginners",
    excerpt: "Start your hiking journey with these accessible trails offering breathtaking views and unforgettable experiences.",
    category: "Adventure",
    author: "Alex Thompson",
    authorAvatar: "AT",
    date: "Apr 6, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
  },
  {
    id: "solo-travel-tips",
    title: "Solo Travel: 15 Essential Tips for First-Timers",
    excerpt: "Everything you need to know before embarking on your first solo adventure, from safety to making friends.",
    category: "Travel Tips",
    author: "Sarah Chen",
    authorAvatar: "SC",
    date: "Mar 25, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
  },
  {
    id: "best-time-visit-japan",
    title: "Best Time to Visit Japan: A Seasonal Guide",
    excerpt: "Cherry blossoms in spring or autumn colors in fall? Here's when to plan your Japanese adventure.",
    category: "Planning",
    author: "Yuki Tanaka",
    authorAvatar: "YT",
    date: "Mar 22, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
  },
  {
    id: "budget-thailand",
    title: "Thailand on a Budget: Complete 2-Week Itinerary",
    excerpt: "How to explore the Land of Smiles without breaking the bank, including accommodation and food tips.",
    category: "Budget Travel",
    author: "David Park",
    authorAvatar: "DP",
    date: "Mar 18, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80",
  },
  {
    id: "sustainable-travel",
    title: "Eco-Friendly Travel: How to Reduce Your Footprint",
    excerpt: "Simple changes that make a big difference in minimizing your environmental impact while exploring the world.",
    category: "Sustainability",
    author: "Emma Green",
    authorAvatar: "EG",
    date: "Mar 15, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
    featured: true,
  },
  {
    id: "safari-guide",
    title: "African Safari: What to Expect on Your First Trip",
    excerpt: "From the Serengeti to Kruger, here's everything you need to know for an unforgettable safari experience.",
    category: "Adventure",
    author: "James Wilson",
    authorAvatar: "JW",
    date: "Mar 10, 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
  },
]

export const categories = [
  "All",
  "Destinations",
  "Travel Tips",
  "Planning",
  "Budget Travel",
  "Sustainability",
  "Adventure",
]