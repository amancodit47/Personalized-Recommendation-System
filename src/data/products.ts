export interface Product {
  id: number;
  title: string;
  category: string;
  tags: string[];
  price: number;
  image: string;
  popularityScore: number;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Boho Summer Dress",
    category: "dresses",
    tags: ["boho", "summer", "casual"],
    price: 79.99,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500",
    popularityScore: 0.89
  },
  {
    id: 2,
    title: "Vintage Denim Jacket",
    category: "outerwear",
    tags: ["vintage", "denim", "casual"],
    price: 129.99,
    image: "https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?w=500",
    popularityScore: 0.92
  },
  {
    id: 3,
    title: "Floral Maxi Skirt",
    category: "skirts",
    tags: ["floral", "boho", "summer"],
    price: 59.99,
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500",
    popularityScore: 0.78
  },
  {
    id: 4,
    title: "Classic White Blouse",
    category: "tops",
    tags: ["classic", "formal", "basic"],
    price: 49.99,
    image: "https://images.unsplash.com/photo-1604695573706-53170668f6a6?w=500",
    popularityScore: 0.95
  },
  {
    id: 5,
    title: "Leather Crossbody Bag",
    category: "accessories",
    tags: ["leather", "casual", "basic"],
    price: 89.99,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500",
    popularityScore: 0.88
  },
  {
    id: 6,
    title: "Elegant Evening Gown",
    category: "dresses",
    tags: ["elegant", "formal", "evening"],
    price: 299.99,
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500",
    popularityScore: 0.85
  },
  {
    id: 7,
    title: "Casual Linen Pants",
    category: "pants",
    tags: ["casual", "summer", "basic"],
    price: 69.99,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500",
    popularityScore: 0.91
  },
  {
    id: 8,
    title: "Statement Necklace",
    category: "accessories",
    tags: ["elegant", "formal", "jewelry"],
    price: 45.99,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500",
    popularityScore: 0.76
  },
  {
    id: 9,
    title: "Cozy Knit Sweater",
    category: "tops",
    tags: ["cozy", "winter", "casual"],
    price: 89.99,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500",
    popularityScore: 0.94
  },
  {
    id: 10,
    title: "High-Waisted Jeans",
    category: "pants",
    tags: ["denim", "casual", "basic"],
    price: 79.99,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500",
    popularityScore: 0.97
  },
  {
    id: 11,
    title: "Silk Scarf",
    category: "accessories",
    tags: ["silk", "elegant", "spring"],
    price: 39.99,
    image: "https://images.unsplash.com/photo-1601374093276-177651f740b4?w=500",
    popularityScore: 0.82
  },
  {
    id: 12,
    title: "Leather Ankle Boots",
    category: "shoes",
    tags: ["leather", "autumn", "casual"],
    price: 159.99,
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500",
    popularityScore: 0.93
  },
  {
    id: 13,
    title: "Pleated Mini Skirt",
    category: "skirts",
    tags: ["preppy", "spring", "casual"],
    price: 49.99,
    image: "https://images.unsplash.com/photo-1577900232427-18219b9166a0?w=500",
    popularityScore: 0.88
  },
  {
    id: 14,
    title: "Oversized Blazer",
    category: "outerwear",
    tags: ["formal", "business", "classic"],
    price: 149.99,
    image: "https://images.unsplash.com/photo-1548126032-079a0fb0099d?w=500",
    popularityScore: 0.91
  },
  {
    id: 15,
    title: "Summer Straw Hat",
    category: "accessories",
    tags: ["summer", "beach", "boho"],
    price: 34.99,
    image: "https://images.unsplash.com/photo-1565339119519-c9eaa1918b9f?w=500",
    popularityScore: 0.86
  },
  {
    id: 16,
    title: "Floral Wrap Dress",
    category: "dresses",
    tags: ["floral", "spring", "feminine"],
    price: 89.99,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500",
    popularityScore: 0.90
  },
  {
    id: 17,
    title: "Canvas Sneakers",
    category: "shoes",
    tags: ["casual", "sporty", "basic"],
    price: 54.99,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500",
    popularityScore: 0.95
  },
  {
    id: 18,
    title: "Velvet Evening Clutch",
    category: "accessories",
    tags: ["elegant", "evening", "velvet"],
    price: 69.99,
    image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=500",
    popularityScore: 0.83
  },
  {
    id: 19,
    title: "Printed Yoga Leggings",
    category: "activewear",
    tags: ["athletic", "casual", "comfortable"],
    price: 64.99,
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=500",
    popularityScore: 0.89
  },
  {
    id: 20,
    title: "Satin Camisole",
    category: "tops",
    tags: ["elegant", "basic", "evening"],
    price: 39.99,
    image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=500",
    popularityScore: 0.87
  },
  {
    id: 21,
    title: "Leather Biker Jacket",
    category: "outerwear",
    tags: ["leather", "edgy", "autumn"],
    price: 199.99,
    image: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=500",
    popularityScore: 0.92
  },
  {
    id: 22,
    title: "Sequin Party Dress",
    category: "dresses",
    tags: ["party", "evening", "glamorous"],
    price: 159.99,
    image: "https://images.unsplash.com/photo-1566662340354-7a1232a17eeb?w=500",
    popularityScore: 0.85
  },
  {
    id: 23,
    title: "Wide-Leg Trousers",
    category: "pants",
    tags: ["formal", "business", "elegant"],
    price: 89.99,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500",
    popularityScore: 0.88
  },
  {
    id: 24,
    title: "Pearl Earrings",
    category: "accessories",
    tags: ["classic", "elegant", "jewelry"],
    price: 49.99,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500",
    popularityScore: 0.91
  },
  {
    id: 25,
    title: "Striped Sailor Shirt",
    category: "tops",
    tags: ["nautical", "casual", "summer"],
    price: 44.99,
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500",
    popularityScore: 0.86
  },
  {
    id: 26,
    title: "Denim Mini Skirt",
    category: "skirts",
    tags: ["denim", "casual", "summer"],
    price: 49.99,
    image: "https://images.unsplash.com/photo-1582142306909-195724d33ffc?w=500",
    popularityScore: 0.89
  },
  {
    id: 27,
    title: "Suede Chelsea Boots",
    category: "shoes",
    tags: ["suede", "autumn", "casual"],
    price: 129.99,
    image: "https://images.unsplash.com/photo-1548430395-ec39eaf2aa1a?w=500",
    popularityScore: 0.90
  },
  {
    id: 28,
    title: "Printed Kimono",
    category: "outerwear",
    tags: ["boho", "summer", "printed"],
    price: 79.99,
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500",
    popularityScore: 0.84
  },
  {
    id: 29,
    title: "Sports Bra",
    category: "activewear",
    tags: ["athletic", "sporty", "comfortable"],
    price: 34.99,
    image: "https://images.unsplash.com/photo-1571945192246-4fcee13c27b1?w=500",
    popularityScore: 0.93
  },
  {
    id: 30,
    title: "Cashmere Beanie",
    category: "accessories",
    tags: ["winter", "cozy", "casual"],
    price: 45.99,
    image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=500",
    popularityScore: 0.87
  },
  {
    id: 31,
    title: "Polka Dot Blouse",
    category: "tops",
    tags: ["retro", "feminine", "spring"],
    price: 59.99,
    image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=500",
    popularityScore: 0.86
  },
  {
    id: 32,
    title: "Leather Tote Bag",
    category: "accessories",
    tags: ["leather", "business", "basic"],
    price: 149.99,
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500",
    popularityScore: 0.92
  },
  {
    id: 33,
    title: "Ruffled Midi Dress",
    category: "dresses",
    tags: ["feminine", "spring", "elegant"],
    price: 119.99,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500",
    popularityScore: 0.88
  },
  {
    id: 34,
    title: "Cargo Pants",
    category: "pants",
    tags: ["casual", "utilitarian", "streetwear"],
    price: 69.99,
    image: "https://images.unsplash.com/photo-1517438476312-10d79c077509?w=500",
    popularityScore: 0.85
  },
  {
    id: 35,
    title: "Platform Sandals",
    category: "shoes",
    tags: ["summer", "trendy", "casual"],
    price: 79.99,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500",
    popularityScore: 0.89
  },
  {
    id: 36,
    title: "Cropped Hoodie",
    category: "activewear",
    tags: ["casual", "sporty", "streetwear"],
    price: 54.99,
    image: "https://images.unsplash.com/photo-1556305078-869aa7d2bfc9?w=500",
    popularityScore: 0.91
  },
  {
    id: 37,
    title: "Silk Pajama Set",
    category: "sleepwear",
    tags: ["silk", "luxurious", "comfortable"],
    price: 129.99,
    image: "https://images.unsplash.com/photo-1573612664822-d7d347da7b80?w=500",
    popularityScore: 0.83
  },
  {
    id: 38,
    title: "Geometric Print Scarf",
    category: "accessories",
    tags: ["printed", "autumn", "colorful"],
    price: 29.99,
    image: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=500",
    popularityScore: 0.84
  },
  {
    id: 39,
    title: "Tennis Skirt",
    category: "activewear",
    tags: ["athletic", "preppy", "summer"],
    price: 49.99,
    image: "https://images.unsplash.com/photo-1545693315-85b6be26a3b5?w=500",
    popularityScore: 0.88
  },
  {
    id: 40,
    title: "Structured Handbag",
    category: "accessories",
    tags: ["formal", "business", "elegant"],
    price: 179.99,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
    popularityScore: 0.87
  },
  {
    id: 41,
    title: "Tie-Dye T-Shirt",
    category: "tops",
    tags: ["casual", "summer", "trendy"],
    price: 34.99,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500",
    popularityScore: 0.86
  },
  {
    id: 42,
    title: "Leather Gloves",
    category: "accessories",
    tags: ["winter", "leather", "elegant"],
    price: 59.99,
    image: "https://images.unsplash.com/photo-1584208124888-3a20b9c799e5?w=500",
    popularityScore: 0.82
  },
  {
    id: 43,
    title: "Wrap Jumpsuit",
    category: "dresses",
    tags: ["elegant", "summer", "versatile"],
    price: 109.99,
    image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=500",
    popularityScore: 0.89
  },
  {
    id: 44,
    title: "Running Shoes",
    category: "shoes",
    tags: ["athletic", "sporty", "comfortable"],
    price: 129.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    popularityScore: 0.94
  },
  {
    id: 45,
    title: "Leather Belt",
    category: "accessories",
    tags: ["leather", "basic", "classic"],
    price: 45.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
    popularityScore: 0.85
  },
  {
    id: 46,
    title: "Printed Maxi Dress",
    category: "dresses",
    tags: ["boho", "summer", "printed"],
    price: 139.99,
    image: "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=500",
    popularityScore: 0.90
  },
  {
    id: 47,
    title: "Wool Beret",
    category: "accessories",
    tags: ["winter", "french", "classic"],
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=500",
    popularityScore: 0.83
  },
  {
    id: 48,
    title: "Quilted Vest",
    category: "outerwear",
    tags: ["casual", "autumn", "layering"],
    price: 79.99,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500",
    popularityScore: 0.86
  },
  {
    id: 49,
    title: "Metallic Clutch",
    category: "accessories",
    tags: ["evening", "glamorous", "party"],
    price: 69.99,
    image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=500",
    popularityScore: 0.84
  },
  {
    id: 50,
    title: "Yoga Mat",
    category: "activewear",
    tags: ["athletic", "wellness", "exercise"],
    price: 39.99,
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500",
    popularityScore: 0.88
  }
];