
import { ProductCardProps } from "@/components/common/ProductCard";

// Mock product data
export const products: ProductCardProps[] = [
  {
    id: 1,
    name: "Sauvage Eau de Parfum",
    brand: "Dior",
    price: 120.00,
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=800&auto=format&fit=crop",
    gender: "men",
    isOnSale: false
  },
  {
    id: 2,
    name: "Fahrenheit",
    brand: "Dior",
    price: 99.50,
    image: "https://images.unsplash.com/photo-1585386959984-a4a9302a173c?q=80&w=800&auto=format&fit=crop",
    gender: "men",
    isOnSale: true,
    discountPercentage: 15
  },
  {
    id: 3,
    name: "Acqua di Giò Profumo",
    brand: "Giorgio Armani",
    price: 138.00,
    image: "https://images.unsplash.com/photo-1595425970377-c61637d01558?q=80&w=800&auto=format&fit=crop",
    gender: "men",
    isOnSale: false
  },
  {
    id: 4,
    name: "Le Male",
    brand: "Jean Paul Gaultier",
    price: 85.99,
    image: "https://images.unsplash.com/photo-1616841888027-8f5471ee07e2?q=80&w=800&auto=format&fit=crop",
    gender: "men",
    isOnSale: false
  },
  {
    id: 5,
    name: "1 Million",
    brand: "Paco Rabanne",
    price: 92.00,
    image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?q=80&w=800&auto=format&fit=crop",
    gender: "men",
    isOnSale: true,
    discountPercentage: 20
  },
  {
    id: 6,
    name: "J'adore Eau de Parfum",
    brand: "Dior",
    price: 130.00,
    image: "https://images.unsplash.com/photo-1563170352-898d145e9d96?q=80&w=800&auto=format&fit=crop",
    gender: "women",
    isOnSale: false
  },
  {
    id: 7,
    name: "Miss Dior",
    brand: "Dior",
    price: 110.00,
    image: "https://images.unsplash.com/photo-1591375372156-542495912da9?q=80&w=800&auto=format&fit=crop",
    gender: "women",
    isOnSale: false
  },
  {
    id: 8,
    name: "Sì Passione",
    brand: "Giorgio Armani",
    price: 125.00,
    image: "https://images.unsplash.com/photo-1566977776052-6e61e35bf9be?q=80&w=800&auto=format&fit=crop",
    gender: "women",
    isOnSale: true,
    discountPercentage: 10
  },
  {
    id: 9,
    name: "La Vie Est Belle",
    brand: "Lancôme",
    price: 98.00,
    image: "https://images.unsplash.com/photo-1592842232644-28598f5e6b98?q=80&w=800&auto=format&fit=crop",
    gender: "women",
    isOnSale: false
  },
  {
    id: 10,
    name: "Coco Mademoiselle",
    brand: "Chanel",
    price: 143.00,
    image: "https://images.unsplash.com/photo-1602928899371-431e73127ae1?q=80&w=800&auto=format&fit=crop",
    gender: "women",
    isOnSale: true,
    discountPercentage: 25
  }
];

// Perfume types data
export const perfumeTypes = {
  men: [
    {
      name: "Woody",
      description: "Characterized by warm, earthy notes like sandalwood and cedar",
      examples: ["Dior Sauvage", "Tom Ford Oud Wood"]
    },
    {
      name: "Spicy",
      description: "Bold and warming notes such as pepper, cinnamon and clove",
      examples: ["Givenchy Gentleman", "Viktor & Rolf Spicebomb"]
    },
    {
      name: "Fresh",
      description: "Citrus, aromatic and clean scents that are invigorating",
      examples: ["Acqua di Giò", "Versace Pour Homme"]
    },
    {
      name: "Oriental",
      description: "Warm and sensual with notes of vanilla, amber and spices",
      examples: ["Dior Homme Intense", "Jean Paul Gaultier Le Male"]
    }
  ],
  women: [
    {
      name: "Floral",
      description: "Dominated by flower notes like rose, jasmine and lily",
      examples: ["Chanel No. 5", "Dior J'adore"]
    },
    {
      name: "Oriental",
      description: "Rich and exotic with vanilla, amber and spice undertones",
      examples: ["YSL Black Opium", "Lancôme La Vie Est Belle"]
    },
    {
      name: "Fruity",
      description: "Sweet and playful notes of berries, citrus and tropical fruits",
      examples: ["Marc Jacobs Daisy", "Dolce & Gabbana Light Blue"]
    },
    {
      name: "Fresh",
      description: "Clean, crisp and light with citrus and aquatic notes",
      examples: ["Jo Malone Wood Sage & Sea Salt", "Calvin Klein CK One"]
    }
  ]
};

// Ingredients and notes data
export const ingredientsData = {
  notes: {
    top: [
      { name: "Bergamot", description: "Citrusy and bright, providing an initial fresh burst" },
      { name: "Lemon", description: "Sharp, clean citrus note that adds zest" },
      { name: "Lavender", description: "Herbal, slightly floral and calming" },
      { name: "Pink Pepper", description: "Spicy with subtle fruity undertones" }
    ],
    middle: [
      { name: "Rose", description: "Floral, romantic and versatile" },
      { name: "Jasmine", description: "Rich, sweet and intensely floral" },
      { name: "Geranium", description: "Green, slightly rosy with minty undertones" },
      { name: "Cinnamon", description: "Warm, spicy and comforting" }
    ],
    base: [
      { name: "Vanilla", description: "Sweet, warm and comforting" },
      { name: "Sandalwood", description: "Creamy, warm woody note" },
      { name: "Amber", description: "Warm, powdery and slightly sweet" },
      { name: "Musk", description: "Soft, sensual and skin-like" }
    ]
  },
  families: [
    {
      name: "Floral",
      description: "The most popular family, centered around flowers like rose, jasmine, and lily",
      examples: ["Chanel No. 5", "Miss Dior"]
    },
    {
      name: "Oriental",
      description: "Warm and exotic with vanilla, amber and spice notes",
      examples: ["YSL Opium", "Dior Poison"]
    },
    {
      name: "Woody",
      description: "Centered around warm woods like sandalwood, cedar and vetiver",
      examples: ["Tom Ford Oud Wood", "Terre d'Hermès"]
    },
    {
      name: "Fresh",
      description: "Clean, crisp scents including citrus, green and aquatic notes",
      examples: ["Acqua di Parma Colonia", "Issey Miyake L'Eau d'Issey"]
    }
  ]
};

// Get all products
export const getAllProducts = () => {
  return products;
};

// Get products by gender
export const getProductsByGender = (gender: 'men' | 'women' | 'unisex') => {
  return products.filter(product => product.gender === gender);
};

// Get discounted products
export const getDiscountedProducts = () => {
  return products.filter(product => product.isOnSale);
};

// Get product by ID
export const getProductById = (id: number) => {
  return products.find(product => product.id === id);
};
