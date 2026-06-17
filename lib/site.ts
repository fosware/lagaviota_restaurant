export const business = {
  name: "La Gaviota Mexican Restaurant",
  shortName: "La Gaviota",
  tagline: "Fresh Mexican food / Comida mexicana fresca",
  phoneDisplay: "303-368-9941",
  phoneHref: "tel:3033689941",
  email: "lagaviotarestaurantaurora@gmail.com",
  emailHref: "mailto:lagaviotarestaurantaurora@gmail.com",
  address: "2280 S Quebec, Denver, CO 80231",
  addressStreet: "2280 S Quebec",
  city: "Denver",
  state: "CO",
  zip: "80231",
  country: "US",
  hours: "Monday-Sunday, 9:00 am-7:00 pm",
  shortHours: "Open daily, 9 am-7 pm",
  mapsQuery: "2280 S Quebec Denver CO 80231",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=2280%20S%20Quebec%2C%20Denver%2C%20CO%2080231",
  mapEmbed:
    "https://www.google.com/maps?q=2280%20S%20Quebec%2C%20Denver%2C%20CO%2080231&output=embed",
  url: "https://www.lagaviotadenver.com",
  latitude: 39.67498,
  longitude: -104.90272,
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Catering", href: "/catering" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const seo = {
  title: "La Gaviota Mexican Restaurant | Mexican Food & Catering in Denver, CO",
  description:
    "Enjoy authentic Mexican food, tacos, tamales, seafood, pupusas, carryout and party catering at La Gaviota Mexican Restaurant in Denver, CO. Call 303-368-9941.",
  keywords: [
    "Mexican restaurant Denver",
    "Mexican food Denver",
    "Mexican catering Denver",
    "Tacos Denver",
    "Tamales Denver",
    "Carryout Mexican food Denver",
    "Mexican restaurant South Quebec Denver",
    "Mexican food near 2280 S Quebec",
  ],
};

export type MenuItem = {
  name: string;
  description?: string;
};

export type MenuCategory = {
  name: string;
  eyebrow?: string;
  description: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    name: "Tacos La Gaviota",
    eyebrow: "Street favorites",
    description: "Simple, satisfying tacos made for quick lunches, family dinners and late cravings.",
    items: [
      { name: "Tacos" },
      { name: "Birria de Chivo" },
      { name: "Carne Asada" },
      { name: "Tostadas de Asada" },
    ],
  },
  {
    name: "Burritos Smothered",
    eyebrow: "Hearty plates",
    description: "Warm, filling burritos with the comfort of a full Mexican plate.",
    items: [{ name: "Burrito Smothered" }, { name: "Fajitas Combinadas" }, { name: "Alambre" }],
  },
  {
    name: "Antojitos",
    eyebrow: "Made to share",
    description: "Mexican and Central American favorites for the table.",
    items: [
      { name: "Gorditas de Asada" },
      { name: "Sopes de Asada" },
      { name: "Pupusas" },
      { name: "Pambazo" },
      { name: "Torta" },
      { name: "Enchiladas de Pollo" },
    ],
  },
  {
    name: "Seafood",
    eyebrow: "Mariscos",
    description: "Seafood plates, soups and shrimp dishes from the current restaurant menu.",
    items: [
      { name: "Camarones a la Diabla" },
      { name: "Mojarra Frita" },
      { name: "Siete Mares" },
      { name: "Ceviche de Camarón" },
      { name: "Coctel de Camarones" },
      { name: "Camarones Empanizados" },
      { name: "Camarones al Mojo de Ajo" },
      { name: "Caldo de Camarón y Pescado" },
    ],
  },
  {
    name: "Breakfast & Soups",
    eyebrow: "Comfort food",
    description: "Warm plates and bowls for a slower meal.",
    items: [
      { name: "Chilaquiles" },
      { name: "Huevos Rancheros" },
      { name: "Desayuno Salvadoreño" },
      { name: "Caldo de Res" },
    ],
  },
  {
    name: "Sides, Postres & Drinks",
    eyebrow: "Finish the meal",
    description: "Ask by phone about available sides, desserts, drinks, micheladas and salsa bar options.",
    items: [
      { name: "Tamales" },
      { name: "Quesadillas" },
      { name: "Postres" },
      { name: "Drinks" },
      { name: "Micheladas" },
      { name: "Salsa Bar" },
    ],
  },
];

export const menuHighlights = [
  "Tacos",
  "Burritos",
  "Tamales",
  "Seafood",
  "Pupusas",
  "Tortas",
  "Gorditas",
  "Micheladas",
];

export const cateringOccasions = [
  "Parties",
  "Anniversaries",
  "Graduations",
  "Birthdays",
  "Family gatherings",
  "Special occasions",
];

export const faqs = [
  {
    question: "Do you offer carryout?",
    answer: "Yes. Call 303-368-9941 to pre-order your carryout.",
  },
  {
    question: "Do you offer catering?",
    answer:
      "Yes. La Gaviota offers Mexican food catering for parties, anniversaries, graduations, birthdays and special occasions.",
  },
  {
    question: "How do I order catering?",
    answer: "Call 303-368-9941 and ask about catering or party packages.",
  },
  {
    question: "What kind of food is on the menu?",
    answer:
      "The menu includes tacos, burritos, gorditas, seafood, pupusas, sopes, tortas, tostadas, sides, desserts and drinks.",
  },
  {
    question: "Where are you located?",
    answer: "La Gaviota Mexican Restaurant is located at 2280 S Quebec, Denver, CO 80231.",
  },
  {
    question: "What are your business hours?",
    answer: "Monday through Sunday, 9:00 am to 7:00 pm.",
  },
  {
    question: "Do you have dine-in?",
    answer: "Yes. Guests can dine in at the restaurant, and carryout is also available.",
  },
  {
    question: "Do you show soccer?",
    answer:
      "The existing site mentions live soccer on flat-screen TVs. Confirm before publishing if this is still current.",
  },
];

export const galleryImages = [
  {
    src: "/images/fajitas-combinadas.webp",
    avif: "/images/fajitas-combinadas.avif",
    alt: "Fajitas combinadas served at La Gaviota Mexican Restaurant in Denver",
    title: "Fajitas combinadas",
    featured: true,
  },
  {
    src: "/images/alambre.webp",
    avif: "/images/alambre.avif",
    alt: "Alambre plate from La Gaviota Mexican Restaurant in Denver",
    title: "Alambre",
  },
  {
    src: "/images/camarones-diabla.webp",
    avif: "/images/camarones-diabla.avif",
    alt: "Camarones a la diabla seafood plate at La Gaviota",
    title: "Camarones a la diabla",
  },
  {
    src: "/images/torta.webp",
    avif: "/images/torta.avif",
    alt: "Torta from La Gaviota Mexican Restaurant in Denver",
    title: "Torta",
  },
  {
    src: "/images/pupusas.webp",
    avif: "/images/pupusas.avif",
    alt: "Pupusas served at La Gaviota Mexican Restaurant",
    title: "Pupusas",
  },
  {
    src: "/images/sopes.webp",
    avif: "/images/sopes.avif",
    alt: "Sopes de asada from La Gaviota Mexican Restaurant",
    title: "Sopes de asada",
  },
  {
    src: "/images/birria.webp",
    avif: "/images/birria.avif",
    alt: "Birria de chivo from La Gaviota Mexican Restaurant",
    title: "Birria de chivo",
  },
  {
    src: "/images/burrito-smothered.webp",
    avif: "/images/burrito-smothered.avif",
    alt: "Burrito smothered from La Gaviota Mexican Restaurant",
    title: "Burrito smothered",
  },
  {
    src: "/images/salsa-bar.webp",
    avif: "/images/salsa-bar.avif",
    alt: "La Gaviota salsa bar with fresh salsa choices",
    title: "Salsa bar",
  },
];
