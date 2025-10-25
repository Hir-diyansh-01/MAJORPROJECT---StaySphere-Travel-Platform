const sampleListings = [
   {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Boston",
    country: "United States",
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Miami",
    country: "United States",
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Montana",
    country: "United States",
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
  },
  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Charleston",
    country: "United States",
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New Hampshire",
    country: "United States",
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
  },
  {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
  },
  {
    title: "Amalfi Cliffside Infinity Villa",
    description:
      "Terraced villa carved into Amalfi cliffs with a heated infinity pool over the Tyrrhenian Sea.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60",
    },
    price: 9200,
    location: "Positano",
    country: "Italy",
  },
  {
    title: "Malibu Ocean Glass House",
    description:
      "Floor‑to‑ceiling glass walls, private beach access, and sunset decks facing the Pacific.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?auto=format&fit=crop&w=800&q=60",
    },
    price: 10800,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Bali Jungle Waterfall Villa",
    description:
      "Open‑air pavilion villa beside a hidden waterfall, handcrafted teak and stone baths.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=60",
    },
    price: 3100,
    location: "Ubud",
    country: "Indonesia",
  },
  {
    title: "Santorini Caldera Cave Suite",
    description:
      "Cycladic cave suite with plunge pool looking over the caldera and blue domes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
    },
    price: 6800,
    location: "Oia",
    country: "Greece",
  },
  {
    title: "Kyoto Bamboo Ryokan",
    description:
      "Traditional machiya with tatami suites, hinoki bath, and a private moss garden.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=800&q=60",
    },
    price: 2600,
    location: "Kyoto",
    country: "Japan",
  },
  {
    title: "Swiss Alps Panorama Chalet",
    description:
      "Ski‑in chalet with cedar sauna and glacier views near the Matterhorn.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?auto=format&fit=crop&w=800&q=60",
    },
    price: 7400,
    location: "Zermatt",
    country: "Switzerland",
  },
  {
    title: "Paris Left Bank Penthouse",
    description:
      "Haussmannian penthouse with Eiffel Tower terrace and curated art library.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=800&q=60",
    },
    price: 8200,
    location: "Paris",
    country: "France",
  },
  {
    title: "Dubai Skytop Lagoon Suite",
    description:
      "Glass‑edge lagoon pool 60 floors up, with skyline and desert horizon views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=60",
    },
    price: 9800,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "Iceland Aurora Glass Cabin",
    description:
      "Heated glass cabin under the northern lights with geothermal hot tub.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=800&q=60",
    },
    price: 4300,
    location: "Reykjanes",
    country: "Iceland",
  },
  {
    title: "Marrakech Riad of Lanterns",
    description:
      "Restored riad with zellige courtyard pool and rooftop desert lounge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=60",
    },
    price: 2400,
    location: "Marrakech",
    country: "Morocco",
  },
  {
    title: "New York Central Park SkyLoft",
    description:
      "Corner glass loft with Park views, private chef’s kitchen, and gallery walls.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=60",
    },
    price: 12500,
    location: "New York",
    country: "United States",
  },
  {
    title: "Lake Como Neoclassical Villa",
    description:
      "Lakeside lawns, boat dock, frescoed salons and a marble colonnade.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=800&q=60",
    },
    price: 9900,
    location: "Bellagio",
    country: "Italy",
  },
  {
    title: "Phuket Cliff Pool Residence",
    description:
      "Cantilevered pool over Andaman Sea, tropical stone showers and butler service.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?auto=format&fit=crop&w=800&q=60",
    },
    price: 5300,
    location: "Phuket",
    country: "Thailand",
  },
  {
    title: "Queenstown Lakeview Lodge",
    description:
      "Contemporary alpine lodge with hot tub deck overlooking Lake Wakatipu.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?auto=format&fit=crop&w=800&q=60",
    },
    price: 4600,
    location: "Queenstown",
    country: "New Zealand",
  },
  {
    title: "Mikonos Windmill Residence",
    description:
      "Converted whitewashed windmill with Aegean panoramas and stone courtyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?auto=format&fit=crop&w=800&q=60",
    },
    price: 3800,
    location: "Mykonos",
    country: "Greece",
  },
  {
    title: "Serengeti Glass Safari Lodge",
    description:
      "Glass‑fronted suites for sunrise game viewing; evening firepit under the Milky Way.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=60",
    },
    price: 5200,
    location: "Serengeti",
    country: "Tanzania",
  },
  {
    title: "Tulum Jungle Casa",
    description:
      "Concrete‑and‑timber minimal villa with rooftop plunge pool amidst palms.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1544986581-efac024faf62?auto=format&fit=crop&w=800&q=60",
    },
    price: 2100,
    location: "Tulum",
    country: "Mexico",
  },
  {
    title: "Norwegian Fjord Spa Cabin",
    description:
      "Waterfront timber cabin with wood‑fired hot tub and kayak dock on the fjord.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60",
    },
    price: 3600,
    location: "Aurland",
    country: "Norway",
  },
  {
    title: "Cappadocia Balloon View House",
    description:
      "Stone cave home with dawn terrace to watch hot‑air balloons fill the sky.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?auto=format&fit=crop&w=800&q=60",
    },
    price: 1900,
    location: "Göreme",
    country: "Turkey",
  },
  {
    title: "Reykjavik Geothermal Villa",
    description:
      "Minimal black‑clad villa with private geothermal plunge and ocean horizon.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60",
    },
    price: 5100,
    location: "Reykjavik",
    country: "Iceland",
  },
  {
    title: "Kerala Backwater Lotus Houseboat",
    description:
      "Hand‑woven kettuvallam with sunset deck drifting through coconut lagoons.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Alleppey",
    country: "India",
  },
  {
    title: "Bahamas Overwater Coral Bungalow",
    description:
      "Turquoise shallows, glass floor panels and a private snorkel ladder.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?auto=format&fit=crop&w=800&q=60",
    },
    price: 8700,
    location: "Exumas",
    country: "Bahamas",
  },
  {
    title: "Venice Grand Canal Palazzo",
    description:
      "17th‑century palazzo with gilded salons and private gondola mooring.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=800&q=60",
    },
    price: 9100,
    location: "Venice",
    country: "Italy",
  },
  {
    title: "Scottish Highlands Castle Keep",
    description:
      "Restored keep with great hall, peat fireplaces, and loch outlooks.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?auto=format&fit=crop&w=800&q=60",
    },
    price: 4200,
    location: "Inverness",
    country: "United Kingdom",
  },
  {
    title: "Hvar Adriatic Stone Villa",
    description:
      "Sun‑bleached stone villa with citrus courtyard and rooftop sea lounge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60",
    },
    price: 3300,
    location: "Hvar",
    country: "Croatia",
  },
  {
    title: "Seoul Riverline Design Loft",
    description:
      "Architect’s loft with gallery concrete, Han River terrace and tea room.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Seoul",
    country: "South Korea",
  },
  {
    title: "Lisbon Azulejo Townhouse",
    description:
      "Blue‑tile façade, sunlit stair hall and a miradouro rooftop patio.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Lisbon",
    country: "Portugal",
  },
  {
    title: "Banff Mountain View Cabin",
    description:
      "Pine cabin with panoramic Rockies windows and cedar soaking tub.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?auto=format&fit=crop&w=800&q=60",
    },
    price: 2900,
    location: "Banff",
    country: "Canada",
  },
  {
    title: "Capri Blue Grotto Terrace",
    description:
      "Cliff villa with lemon pergola and terraces above sapphire waters.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?auto=format&fit=crop&w=800&q=60",
    },
    price: 7400,
    location: "Capri",
    country: "Italy",
  },
  {
    title: "Dubai Palm Overwater Villa",
    description:
      "Overwater deck on The Palm with skyline sunsets and private hammam.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&w=800&q=60",
    },
    price: 11200,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "Havana Art Deco Residence",
    description:
      "Restored Art Deco gem with patterned floors and rooftop malecon views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?auto=format&fit=crop&w=800&q=60",
    },
    price: 1700,
    location: "Havana",
    country: "Cuba",
  },
  {
    title: "Tromsø Arctic Waterfront Loft",
    description:
      "Nordic‑minimal loft on the quay; watch aurora dance over the harbor.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=60",
    },
    price: 4100,
    location: "Tromsø",
    country: "Norway",
  },
  {
    title: "Mendoza Vineyard Hacienda",
    description:
      "Adobe hacienda on a malbec estate with Andes backdrop and barrel spa.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?auto=format&fit=crop&w=800&q=60",
    },
    price: 2600,
    location: "Mendoza",
    country: "Argentina",
  },
  {
    title: "Queenstown Alpine Glass Dome",
    description:
      "Geodesic dome with star ceiling and lake vista deck; pure stargazing.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60",
    },
    price: 2400,
    location: "Queenstown",
    country: "New Zealand",
  },
  {
    title: "Seychelles Granite Bay Villa",
    description:
      "Secluded cove, granite boulders, and a palm‑shaded infinity pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=60",
    },
    price: 9700,
    location: "La Digue",
    country: "Seychelles",
  },
  {
    title: "Cape Town Twelve Apostles House",
    description:
      "Glass‑edge pool between Table Mountain and Atlantic breakers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60",
    },
    price: 5700,
    location: "Camps Bay",
    country: "South Africa",
  },
  {
    title: "Hoi An Lantern Waterfront Villa",
    description:
      "Riverside villa that glows at night, with teak bridges and koi ponds.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1496412705862-e0088f16f791?auto=format&fit=crop&w=800&q=60",
    },
    price: 1900,
    location: "Hoi An",
    country: "Vietnam",
  },
  {
    title: "Dubrovnik Walled City Terrace",
    description:
      "Stone townhouse with rooftop overlooking terracotta roofs and Adriatic blue.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Dubrovnik",
    country: "Croatia",
  },
  {
    title: "Patagonia Glacier View Lodge",
    description:
      "Timber lodge facing icy blue glaciers and windswept pampas.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=60",
    },
    price: 3900,
    location: "El Calafate",
    country: "Argentina",
  },
  {
    title: "Mikonos Sunset Horizon Suite",
    description:
      "Cycladic white suite with infinity edge soaking pool at golden hour.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&w=800&q=60",
    },
    price: 6200,
    location: "Mykonos",
    country: "Greece",
  },
  {
    title: "Oman Desert Starcamp",
    description:
      "Canvas‑and‑wood luxury tents among dunes; private astronomy deck.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Wahiba Sands",
    country: "Oman",
  },
  {
    title: "London Thames Panorama Penthouse",
    description:
      "River‑bend glass penthouse with skyline wrap terrace and library.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?auto=format&fit=crop&w=800&q=60",
    },
    price: 9800,
    location: "London",
    country: "United Kingdom",
  },
  {
    title: "Doha Pearl Marina Sky Suite",
    description:
      "Marina‑front sky suite with Arabic modern interiors and sea horizon.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?auto=format&fit=crop&w=800&q=60",
    },
    price: 6200,
    location: "Doha",
    country: "Qatar",
  },
  {
    title: "Hvar Olive Grove Hideaway",
    description:
      "Minimal stone casita tucked inside ancient olive terraces by the sea.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60",
    },
    price: 2300,
    location: "Hvar",
    country: "Croatia",
  },
  {
    title: "Athens Acropolis View Suite",
    description:
      "Design suite with frame‑perfect Acropolis views from a plunge balcony.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=60",
    },
    price: 2800,
    location: "Athens",
    country: "Greece",
  },
  {
    title: "Seville Orange Courtyard House",
    description:
      "Andalusian house with orange patio, arches and rooftop cathedral views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1496412705862-e0088f16f791?auto=format&fit=crop&w=800&q=60",
    },
    price: 1900,
    location: "Seville",
    country: "Spain",
  },
  {
    title: "Kyoto Kamo River Suite",
    description:
      "Shoji‑screen suite with river veranda and tea ceremony room.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=800&q=60",
    },
    price: 3200,
    location: "Kyoto",
    country: "Japan",
  },
  {
    title: "Tahiti Over‑Lagoon Pavilion",
    description:
      "Glass‑panel pavilion above lagoon shallows with reef snorkel access.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?auto=format&fit=crop&w=800&q=60",
    },
    price: 9800,
    location: "Moorea",
    country: "French Polynesia",
  },
  {
    title: "Zurich Lake Light Loft",
    description:
      "Scandi‑chic loft with double‑height windows over Lake Zurich promenades.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?auto=format&fit=crop&w=800&q=60",
    },
    price: 5400,
    location: "Zurich",
    country: "Switzerland",
  },
  {
    title: "Istanbul Bosphorus Mansion",
    description:
      "Ottoman‑era yali with private pier and sunrise ferries gliding past.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?auto=format&fit=crop&w=800&q=60",
    },
    price: 6100,
    location: "Istanbul",
    country: "Turkey",
  },
  {
    title: "Maui Hana Cliff Cottage",
    description:
      "Seaside cottage on the Road to Hana; hammock decks over palm cliffs.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60",
    },
    price: 2700,
    location: "Hana",
    country: "United States",
  },
  {
    title: "Porto Douro River Atelier",
    description:
      "Artist’s atelier with stone arches and balconies above the Douro.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Porto",
    country: "Portugal",
  },
  {
    title: "Auckland Harbor SkyHome",
    description:
      "Harborside glass home with rooftop spa and Rangitoto volcano views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=60",
    },
    price: 5200,
    location: "Auckland",
    country: "New Zealand",
  },
  {
    title: "Cusco Sacred Valley Lodge",
    description:
      "Andean lodge with stone fireplaces and terraces facing terraced hills.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?auto=format&fit=crop&w=800&q=60",
    },
    price: 2100,
    location: "Urubamba",
    country: "Peru",
  },
  {
    title: "Hong Kong Victoria Peak Duplex",
    description:
      "Skyline‑wrap duplex with funicular views and a zen rock garden.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&w=800&q=60",
    },
    price: 11800,
    location: "Hong Kong",
    country: "Hong Kong",
  },
  {
    title: "Tuscany Cypress Ridge Villa",
    description:
      "Stone villa along cypress drive with olive groves and sunset pergola.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60",
    },
    price: 6300,
    location: "Montepulciano",
    country: "Italy",
  },
  {
    title: "UAE Desert Mirage Villa",
    description:
      "Arabian‑modern courtyard house emerging like a mirage in golden dunes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1560448075-bb485b067938?auto=format&fit=crop&w=800&q=60",
    },
    price: 7200,
    location: "Abu Dhabi",
    country: "United Arab Emirates",
  },
  {
    title: "Hoi An River Lantern House",
    description:
      "Lantern‑lit evenings on a stilts house above the Thu Bon River.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1496412705862-e0088f16f791?auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Hoi An",
    country: "Vietnam",
  },
  {
    title: "Bora Bora Horizon Bungalow",
    description:
      "Overwater horizon‑line deck with coral reef snorkeling steps away.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?auto=format&fit=crop&w=800&q=60",
    },
    price: 12500,
    location: "Bora Bora",
    country: "French Polynesia",
  },
  {
    title: "Edinburgh Royal Mile Loft",
    description:
      "Stone‑arched loft tucked above the Royal Mile with castle views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?auto=format&fit=crop&w=800&q=60",
    },
    price: 2400,
    location: "Edinburgh",
    country: "United Kingdom",
  },
  {
    title: "Seoul Hanok Courtyard Home",
    description:
      "Restored hanok with heated ondol floors and a bamboo inner court.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=800&q=60",
    },
    price: 2700,
    location: "Seoul",
    country: "South Korea",
  },
  {
    title: "Zanzibar Spice Coast Villa",
    description:
      "Swahili‑carved doors, rooftop dhow lounge and a tide‑edge pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=60",
    },
    price: 4100,
    location: "Paje",
    country: "Tanzania",
  },
  {
    title: "Queenstown Ridge A‑Frame",
    description:
      "A‑frame with glass gable, cedar hot tub and dramatic alpine ridgeline.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=60",
    },
    price: 2600,
    location: "Arrowtown",
    country: "New Zealand",
  },
  {
    title: "Athens Riviera Sky Loft",
    description:
      "Minimalist loft overlooking the Saronic Gulf, steps from marinas.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Vouliagmeni",
    country: "Greece",
  },
];

module.exports = sampleListings;