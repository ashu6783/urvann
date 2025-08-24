const plantsData = [
  {
    name: "Money Plant",
    price: 299,
    categories: ["Indoor", "Air Purifying", "Home Decor", "Low Maintenance"],
    available: true,
    sunlight: false,
    wateringFrequency: 7,
    description: "A popular indoor plant known for bringing good luck and purifying air"
  },
  {
    name: "Snake Plant (Sansevieria)",
    price: 399,
    categories: ["Indoor", "Air Purifying", "Low Maintenance", "Succulent"],
    available: true,
    sunlight: false,
    wateringFrequency: 14,
    description: "Hardy plant that thrives in low light and purifies air at night"
  },
  {
    name: "Rubber Plant (Ficus Elastica)",
    price: 549,
    categories: ["Indoor", "Air Purifying", "Home Decor"],
    available: true,
    sunlight: true,
    wateringFrequency: 10,
    description: "Glossy-leaved plant perfect for modern home decor"
  },
  {
    name: "Peace Lily",
    price: 459,
    categories: ["Indoor", "Air Purifying", "Flowering", "Home Decor"],
    available: false,
    sunlight: false,
    wateringFrequency: 7,
    description: "Beautiful flowering plant that blooms white flowers"
  },
  {
    name: "Spider Plant",
    price: 249,
    categories: ["Indoor", "Air Purifying", "Hanging", "Low Maintenance"],
    available: true,
    sunlight: true,
    wateringFrequency: 5,
    description: "Easy-care plant with cascading baby plants"
  },
  {
    name: "Aloe Vera",
    price: 199,
    categories: ["Indoor", "Outdoor", "Succulent", "Medicinal", "Low Maintenance"],
    available: true,
    sunlight: true,
    wateringFrequency: 21,
    description: "Multi-purpose succulent with healing properties"
  },
  {
    name: "Jade Plant",
    price: 329,
    categories: ["Indoor", "Succulent", "Low Maintenance", "Home Decor"],
    available: true,
    sunlight: true,
    wateringFrequency: 14,
    description: "Symbol of prosperity with thick, fleshy leaves"
  },
  {
    name: "Boston Fern",
    price: 399,
    categories: ["Indoor", "Hanging", "Air Purifying", "Home Decor"],
    available: true,
    sunlight: false,
    wateringFrequency: 3,
    description: "Lush green fern perfect for humid environments"
  },
  {
    name: "Monstera Deliciosa",
    price: 899,
    categories: ["Indoor", "Home Decor", "Tropical"],
    available: false,
    sunlight: true,
    wateringFrequency: 7,
    description: "Instagram-famous plant with split leaves"
  },
  {
    name: "ZZ Plant (Zamioculcas Zamiifolia)",
    price: 649,
    categories: ["Indoor", "Low Maintenance", "Air Purifying", "Home Decor"],
    available: true,
    sunlight: false,
    wateringFrequency: 21,
    description: "Nearly indestructible plant with glossy leaves"
  },
  {
    name: "Bamboo Palm",
    price: 799,
    categories: ["Indoor", "Air Purifying", "Tropical", "Home Decor"],
    available: true,
    sunlight: false,
    wateringFrequency: 5,
    description: "Elegant palm that adds tropical vibes to any room"
  },
  {
    name: "Pothos",
    price: 249,
    categories: ["Indoor", "Hanging", "Air Purifying", "Low Maintenance"],
    available: true,
    sunlight: false,
    wateringFrequency: 7,
    description: "Trailing vine perfect for hanging baskets or shelves"
  },
  {
    name: "Philodendron",
    price: 349,
    categories: ["Indoor", "Tropical", "Air Purifying", "Home Decor"],
    available: true,
    sunlight: true,
    wateringFrequency: 7,
    description: "Heart-shaped leaves that bring warmth to any space"
  },
  {
    name: "Areca Palm",
    price: 649,
    categories: ["Indoor", "Air Purifying", "Tropical", "Home Decor"],
    available: false,
    sunlight: true,
    wateringFrequency: 5,
    description: "Feathery palm fronds that create a tropical paradise"
  },
  {
    name: "Cactus (Mixed Variety)",
    price: 149,
    categories: ["Indoor", "Outdoor", "Succulent", "Low Maintenance"],
    available: true,
    sunlight: true,
    wateringFrequency: 30,
    description: "Low-maintenance desert plants in various shapes"
  },
  {
    name: "English Ivy",
    price: 299,
    categories: ["Indoor", "Hanging", "Air Purifying", "Climbing"],
    available: true,
    sunlight: false,
    wateringFrequency: 5,
    description: "Classic trailing plant perfect for hanging or climbing"
  },
  {
    name: "Dracaena",
    price: 549,
    categories: ["Indoor", "Air Purifying", "Home Decor", "Tropical"],
    available: true,
    sunlight: true,
    wateringFrequency: 10,
    description: "Spiky leaves in various colors for modern decor"
  },
  {
    name: "Chinese Evergreen",
    price: 449,
    categories: ["Indoor", "Air Purifying", "Home Decor", "Low Maintenance"],
    available: true,
    sunlight: false,
    wateringFrequency: 7,
    description: "Colorful foliage that thrives in low light"
  },
  {
    name: "Haworthia",
    price: 199,
    categories: ["Indoor", "Succulent", "Low Maintenance", "Home Decor"],
    available: true,
    sunlight: true,
    wateringFrequency: 21,
    description: "Small succulent with distinctive white stripes"
  },
  {
    name: "Bird of Paradise",
    price: 1199,
    categories: ["Indoor", "Outdoor", "Tropical", "Home Decor"],
    available: false,
    sunlight: true,
    wateringFrequency: 5,
    description: "Dramatic large leaves that create a tropical statement"
  },
  {
    name: "Calathea",
    price: 599,
    categories: ["Indoor", "Air Purifying", "Home Decor", "Tropical"],
    available: true,
    sunlight: false,
    wateringFrequency: 5,
    description: "Prayer plant with stunning patterned leaves"
  },
  {
    name: "Croton",
    price: 449,
    categories: ["Indoor", "Outdoor", "Home Decor", "Colorful"],
    available: true,
    sunlight: true,
    wateringFrequency: 5,
    description: "Vibrant multi-colored leaves for bright spaces"
  },
  {
    name: "Norfolk Pine",
    price: 899,
    categories: ["Indoor", "Home Decor", "Tropical"],
    available: true,
    sunlight: true,
    wateringFrequency: 7,
    description: "Living Christmas tree that grows indoors"
  },
  {
    name: "Schefflera",
    price: 549,
    categories: ["Indoor", "Air Purifying", "Home Decor", "Low Maintenance"],
    available: true,
    sunlight: true,
    wateringFrequency: 10,
    description: "Umbrella plant with glossy compound leaves"
  },
  {
    name: "Echeveria",
    price: 179,
    categories: ["Indoor", "Outdoor", "Succulent", "Low Maintenance"],
    available: true,
    sunlight: true,
    wateringFrequency: 21,
    description: "Rose-shaped succulent perfect for arrangements"
  },
  {
    name: "Anthurium",
    price: 699,
    categories: ["Indoor", "Flowering", "Tropical", "Home Decor"],
    available: false,
    sunlight: false,
    wateringFrequency: 5,
    description: "Exotic flowering plant with heart-shaped blooms"
  },
  {
    name: "Majesty Palm",
    price: 999,
    categories: ["Indoor", "Tropical", "Air Purifying", "Home Decor"],
    available: true,
    sunlight: true,
    wateringFrequency: 5,
    description: "Majestic palm that brings tropical elegance indoors"
  },
  {
    name: "Weeping Fig",
    price: 649,
    categories: ["Indoor", "Air Purifying", "Home Decor"],
    available: true,
    sunlight: true,
    wateringFrequency: 7,
    description: "Classic indoor tree with small glossy leaves"
  },
  {
    name: "Ponytail Palm",
    price: 749,
    categories: ["Indoor", "Succulent", "Low Maintenance", "Home Decor"],
    available: true,
    sunlight: true,
    wateringFrequency: 14,
    description: "Unique plant with swollen trunk and long leaves"
  },
  {
    name: "Parlor Palm",
    price: 449,
    categories: ["Indoor", "Air Purifying", "Tropical", "Low Maintenance"],
    available: true,
    sunlight: false,
    wateringFrequency: 7,
    description: "Compact palm perfect for small spaces"
  },
  {
    name: "String of Hearts",
    price: 349,
    categories: ["Indoor", "Hanging", "Succulent", "Home Decor"],
    available: true,
    sunlight: true,
    wateringFrequency: 14,
    description: "Trailing succulent with heart-shaped leaves"
  },
  {
    name: "Dieffenbachia",
    price: 499,
    categories: ["Indoor", "Air Purifying", "Home Decor", "Tropical"],
    available: true,
    sunlight: false,
    wateringFrequency: 7,
    description: "Dumb cane with striking variegated leaves"
  },
  {
    name: "Prayer Plant (Maranta)",
    price: 399,
    categories: ["Indoor", "Air Purifying", "Home Decor", "Tropical"],
    available: false,
    sunlight: false,
    wateringFrequency: 5,
    description: "Leaves fold up at night like praying hands"
  },
  {
    name: "Chinese Money Plant",
    price: 299,
    categories: ["Indoor", "Low Maintenance", "Home Decor"],
    available: true,
    sunlight: true,
    wateringFrequency: 7,
    description: "Round coin-shaped leaves symbolizing good fortune"
  },
  {
    name: "Yucca Plant",
    price: 699,
    categories: ["Indoor", "Outdoor", "Low Maintenance", "Home Decor"],
    available: true,
    sunlight: true,
    wateringFrequency: 14,
    description: "Sword-like leaves creating architectural interest"
  },
  {
    name: "Hoya (Wax Plant)",
    price: 449,
    categories: ["Indoor", "Hanging", "Flowering", "Home Decor"],
    available: true,
    sunlight: true,
    wateringFrequency: 10,
    description: "Waxy leaves with fragrant star-shaped flowers"
  },
  {
    name: "Peperomia",
    price: 249,
    categories: ["Indoor", "Low Maintenance", "Home Decor", "Succulent"],
    available: true,
    sunlight: false,
    wateringFrequency: 10,
    description: "Compact plant with thick, succulent-like leaves"
  },
  {
    name: "Tradescantia",
    price: 199,
    categories: ["Indoor", "Hanging", "Colorful", "Low Maintenance"],
    available: true,
    sunlight: true,
    wateringFrequency: 5,
    description: "Wandering jew with purple and silver striped leaves"
  },
  {
    name: "Aglaonema",
    price: 549,
    categories: ["Indoor", "Air Purifying", "Home Decor", "Colorful"],
    available: true,
    sunlight: false,
    wateringFrequency: 7,
    description: "Chinese evergreen with colorful variegated foliage"
  },
  {
    name: "Oxalis",
    price: 179,
    categories: ["Indoor", "Flowering", "Colorful", "Low Maintenance"],
    available: true,
    sunlight: true,
    wateringFrequency: 5,
    description: "Shamrock plant with delicate purple or pink flowers"
  },
  {
    name: "Kentia Palm",
    price: 1199,
    categories: ["Indoor", "Tropical", "Air Purifying", "Home Decor"],
    available: false,
    sunlight: false,
    wateringFrequency: 7,
    description: "Elegant slow-growing palm perfect for corners"
  },
  {
    name: "Fittonia",
    price: 199,
    categories: ["Indoor", "Colorful", "Low Maintenance", "Home Decor"],
    available: true,
    sunlight: false,
    wateringFrequency: 5,
    description: "Nerve plant with intricate white or pink leaf patterns"
  },
  {
    name: "Coleus",
    price: 229,
    categories: ["Indoor", "Outdoor", "Colorful", "Annual"],
    available: true,
    sunlight: true,
    wateringFrequency: 3,
    description: "Vibrant foliage plant in reds, purples, and greens"
  },
  {
    name: "Cast Iron Plant",
    price: 449,
    categories: ["Indoor", "Low Maintenance", "Air Purifying"],
    available: true,
    sunlight: false,
    wateringFrequency: 14,
    description: "Nearly indestructible plant that tolerates neglect"
  },
  {
    name: "Monstera Adansonii",
    price: 599,
    categories: ["Indoor", "Hanging", "Tropical", "Home Decor"],
    available: true,
    sunlight: true,
    wateringFrequency: 7,
    description: "Swiss cheese vine with fenestrated leaves"
  },
  {
    name: "Begonia",
    price: 349,
    categories: ["Indoor", "Outdoor", "Flowering", "Colorful"],
    available: true,
    sunlight: true,
    wateringFrequency: 5,
    description: "Colorful flowers and interesting leaf patterns"
  },
  {
    name: "Bromeliads",
    price: 599,
    categories: ["Indoor", "Tropical", "Flowering", "Home Decor"],
    available: false,
    sunlight: false,
    wateringFrequency: 7,
    description: "Exotic tropical plants with colorful bracts"
  },
  {
    name: "Air Plants (Tillandsia)",
    price: 299,
    categories: ["Indoor", "Low Maintenance", "Unique", "Home Decor"],
    available: true,
    sunlight: true,
    wateringFrequency: 7,
    description: "Soil-free plants that absorb moisture from air"
  },
  {
    name: "Caladium",
    price: 399,
    categories: ["Indoor", "Outdoor", "Colorful", "Tropical"],
    available: true,
    sunlight: false,
    wateringFrequency: 5,
    description: "Heart-shaped leaves in pink, white, and green"
  }
];

export default plantsData;