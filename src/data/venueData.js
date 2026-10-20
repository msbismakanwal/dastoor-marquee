// Dastoor Marquee Kharian — central data file
// Phone verified from the venue's official Instagram (collected 2026-10-18).
export const VENUE = {
  name: "Dastoor Marquee",
  city: "Kharian",
  fullName: "Dastoor Marquee Kharian",
  phoneDisplay: "+92 333 8406021",
  phoneLink: "tel:+923338406021",
  whatsapp: "923338406021",
  address: "GT Road, Ali Chak, Kharian, Punjab, Pakistan (Plus Code: PWQF+V4F)",
  mapsQuery: "Dastoor Marquee Kharian",
  hours: "Open 24 hours — as listed on Google Maps",
  tagline: "Where Kharian Celebrates Its Biggest Days",
};

// Verified from the venue's Google Maps listing on 2026-10-20:
// 4.5 stars, 900 reviews, category "Banquet hall", GT Road Ali Chak.
export const VENUE_FACTS = {
  rating: 4.5,
  reviewsCount: 900,
  reviews: [
    { name: "Nadeem Ahmad", stars: 5, text: "Wonderful and spacious marquee. Superb presentation. Nice clean setup. Food was good. Spacious parking." },
    { name: "Muhammad Zarrar", stars: 4, text: "Nice and big sitting hall. Food stuff is very good and tasty." },
    { name: "Shabir Ahmed", stars: 5, text: "We were the first ones to book this wedding hall over 5 years ago, and we've been back a few times." },
  ],
};

export const waLink = (msg) =>
  `https://wa.me/${VENUE.whatsapp}?text=${encodeURIComponent(msg)}`;

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(VENUE.mapsQuery)}`;

const img = (id, w = 1000) =>
  `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

export const HERO_IMAGE = img("photo-1519167758481-83f550bb49b3", 1600);

export const HALLS = [
  {
    id: "grand-marquee",
    name: "The Grand Marquee Hall",
    badge: "Most Loved",
    tags: ["Marquee Hall", "Indoor", "Fully Air-Conditioned"],
    guests: "300 – 1,200 guests",
    desc: "Hamara signature hall — crystal chandeliers, royal stage setup aur spacious seating ke saath bara Barat aur Walima events ke liye perfect.",
    amenities: ["Valet Parking", "Power Backup", "Bridal Suite", "In-house Catering", "Central AC", "Prayer Area"],
    image: img("photo-1519167758481-83f550bb49b3"),
  },
  {
    id: "garden-lawn",
    name: "Dastoor Garden Lawn",
    badge: "Evening Favourite",
    tags: ["Lawn", "Outdoor", "Fairy-Light Setup"],
    guests: "400 – 1,500 guests",
    desc: "Khula aasmaan, fairy lights aur lush green lawn — Mehndi aur evening receptions ke liye Kharian ka sab se khoobsurat outdoor option.",
    amenities: ["Fairy-Light Decor", "Open-Air Seating", "Live Stations", "Valet Parking", "Power Backup"],
    image: img("photo-1464366400600-7168b8af9bc3"),
  },
];

export const PACKAGES = [
  {
    id: "silver",
    name: "Silver Package",
    tagline: "Essential wedding feast",
    badge: "Value Pick",
    dishes: ["Chicken Biryani", "Chicken Qorma", "Fresh Naan & Roti", "Garden Salad", "Raita", "Gulab Jamun", "Soft Drinks & Mineral Water"],
    image: img("photo-1563379091339-03b21ab4a4f8"),
  },
  {
    id: "gold",
    name: "Gold Package",
    tagline: "The classic Dastoor spread",
    badge: "Most Popular",
    dishes: ["Chicken Pulao / Biryani", "Mutton Qorma", "Chicken Tikka (BBQ)", "Seekh Kabab", "Fresh Naan", "Salad Bar & Raita", "Kheer / Firni", "Soft Drinks & Mineral Water"],
    image: img("photo-1555939594-58d7cb561ad1"),
  },
  {
    id: "platinum",
    name: "Platinum Package",
    tagline: "A royal feast for grand days",
    badge: "Signature",
    dishes: ["Mutton Pulao", "Mutton Karahi (Live)", "Chicken Chargha", "BBQ Platter (Tikka, Kabab, Malai Boti)", "Fish (Seasonal)", "Live Naan Station", "Full Salad Bar", "Rabri Kheer & Gulab Jamun", "Fresh Juices, Soft Drinks & Mineral Water", "Kashmiri Chai"],
    image: img("photo-1606491956689-2ea866880c84"),
  },
];

export const MENU_CATEGORIES = [
  {
    id: "mains",
    label: "Main Dishes",
    items: [
      { name: "Chicken Biryani", desc: "Sindhi-style layered biryani, raita ke saath" },
      { name: "Chicken Pulao", desc: "Yakhni pulao, shami kabab ke saath" },
      { name: "Mutton Qorma", desc: "Slow-cooked signature qorma" },
      { name: "Chicken Karahi", desc: "Desi ghee, fresh tomatoes & green chillies" },
      { name: "Mutton Karahi", desc: "Live karahi station par tayyar" },
      { name: "Chicken Chargha", desc: "Whole steamed & fried, Lahori style" },
    ],
  },
  {
    id: "bbq",
    label: "BBQ & Starters",
    items: [
      { name: "Chicken Tikka", desc: "Charcoal-grilled, leg & chest pieces" },
      { name: "Seekh Kabab", desc: "Beef & chicken, hand-rolled" },
      { name: "Chicken Malai Boti", desc: "Creamy, melt-in-mouth cubes" },
      { name: "Fried Fish (Seasonal)", desc: "Masala fish, imli chutney ke saath" },
      { name: "Spring Rolls", desc: "Crispy vegetable & chicken rolls" },
      { name: "Chicken Wings", desc: "Spicy glazed wings" },
    ],
  },
  {
    id: "sides",
    label: "Sides & Breads",
    items: [
      { name: "Roghni Naan", desc: "Tandoor se fresh, til wala" },
      { name: "Sheermal & Taftan", desc: "Walima ke liye khaas" },
      { name: "Salad Bar", desc: "Russian, garden & channa salads" },
      { name: "Mint Raita", desc: "Zeera & podina raita" },
      { name: "Green Chutney", desc: "Fresh dhania-podina" },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    items: [
      { name: "Gulab Jamun", desc: "Warm, khoya jamun" },
      { name: "Rabri Kheer", desc: "Mitti ke bartan mein thandi kheer" },
      { name: "Firni", desc: "Kesar firni, pista garnish" },
      { name: "Gajar ka Halwa", desc: "Desi ghee, khoya & nuts" },
      { name: "Kulfa / Ice Cream", desc: "Traditional khoya kulfa" },
      { name: "Fresh Fruit", desc: "Seasonal fruit platter" },
    ],
  },
  {
    id: "drinks",
    label: "Beverages",
    items: [
      { name: "Kashmiri Chai", desc: "Pink tea, crushed nuts" },
      { name: "Fresh Juices", desc: "Orange & seasonal juices (live counter)" },
      { name: "Soft Drinks", desc: "Chilled, unlimited serving" },
      { name: "Mineral Water", desc: "Sealed bottles" },
      { name: "Green Tea (Qehwa)", desc: "Khane ke baad hazme ke liye" },
    ],
  },
];

export const GALLERY = [
  { src: img("photo-1519167758481-83f550bb49b3", 800), label: "Grand Marquee Hall" },
  { src: img("photo-1511795409834-ef04bbd61622", 800), label: "Reception Setup" },
  { src: img("photo-1464366400600-7168b8af9bc3", 800), label: "Garden Lawn at Dusk" },
  { src: img("photo-1519741497674-611481863552", 800), label: "Bride & Groom Moments" },
  { src: img("photo-1465495976277-4387d4b0b4c6", 800), label: "Evening Lights" },
  { src: img("photo-1591604466107-ec97de577aff", 800), label: "Stage Decor" },
  { src: img("photo-1522673607200-164d1b6ce486", 800), label: "Walima Details" },
  { src: img("photo-1469371670807-013ccf25f16a", 800), label: "Celebration Nights" },
  { src: img("photo-1563379091339-03b21ab4a4f8", 800), label: "Signature Biryani" },
  { src: img("photo-1555939594-58d7cb561ad1", 800), label: "Live BBQ" },
  { src: img("photo-1478146896981-b80fe463b330", 800), label: "Mehndi Vibes" },
  { src: img("photo-1523438885200-e635ba2c371e", 800), label: "Banquet Seating" },
];

export const FUNCTIONS = [
  { name: "Barat", desc: "Grand hall, royal stage aur full catering ke saath aap ka bara din." },
  { name: "Walima", desc: "Elegant reception setup aur premium menu ke saath." },
  { name: "Mehndi", desc: "Rang-biranga decor, lawn setup aur dholki ki raat." },
  { name: "Nikah", desc: "Pur-sukoon, khoobsurat aur dignified ceremony." },
  { name: "Reception", desc: "Families ke liye relaxed, classy gathering." },
  { name: "Engagement", desc: "Chhoti, pyari aur yaadgar taqreeb ke liye perfect." },
];
