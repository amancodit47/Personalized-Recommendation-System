import React, { useState } from 'react';
import { Heart, TrendingUp, UserCircle } from 'lucide-react';
import { products, Product } from './data/products';
import { RecommendationEngine } from './utils/recommendationEngine';

const engine = new RecommendationEngine();

interface ProductWithScore extends Product {
  score?: number;
}

interface ProductCardProps {
  product: ProductWithScore;
  score?: number;
}

function App() {
  const [recommendations, setRecommendations] = useState<ProductWithScore[]>(
    engine.getColdStartRecommendations(products).map(product => ({
      ...product,
      score: undefined
    }))
  );
  const [allProducts, setAllProducts] = useState<ProductWithScore[]>(
    products.sort((a, b) => b.popularityScore - a.popularityScore)
  );
  const [round, setRound] = useState(1);
  const [likedProducts, setLikedProducts] = useState<number[]>([]);

  const handleLike = (productId: number) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      engine.updateUserProfile(product);
      setLikedProducts([...likedProducts, productId]);
      
      // Update recommendations immediately after each like
      const newRecommendations = engine.getPersonalizedRecommendations(products);
      setRecommendations(newRecommendations);
      
      // Update all products with new scores
      const updatedProducts = products
        .map(product => ({
          ...product,
          score: engine.calculatePersonalizedScore(product)
        }))
        .sort((a, b) => (b.score || 0) - (a.score || 0));
      
      setAllProducts(updatedProducts);
      setRound(2);
    }
  };

  const userProfile = engine.getUserProfile();

  const ProductCard: React.FC<ProductCardProps> = ({ product, score }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{product.title}</h3>
        <div className="flex justify-between items-center mb-2">
          <p className="text-gray-600">${product.price}</p>
          {score !== undefined && round > 1 && (
            <span className="text-sm text-blue-600">
              Match: {Math.round(score * 100)}%
            </span>
          )}
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <button
          onClick={() => handleLike(product.id)}
          disabled={likedProducts.includes(product.id)}
          className={`w-full py-2 px-4 rounded-md flex items-center justify-center gap-2 ${
            likedProducts.includes(product.id)
              ? 'bg-pink-100 text-pink-500'
              : 'bg-pink-500 text-white hover:bg-pink-600'
          }`}
        >
          <Heart size={20} />
          {likedProducts.includes(product.id) ? 'Liked' : 'Like'}
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            AI Shopping Recommendations
          </h1>
          <p className="text-gray-600">
            Round {round}: {round === 1 ? 'Cold Start' : 'Personalized'} Recommendations
          </p>
        </div>

        {/* Top Recommendations */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="text-blue-500" />
            <h2 className="text-xl font-semibold">Top Picks For You</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendations.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product}
                score={product.score}
              />
            ))}
          </div>
        </div>

        {/* User Profile */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <UserCircle size={24} className="text-gray-700" />
            <h2 className="text-xl font-semibold">Your Style Profile</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Preferred Tags</h3>
              <div className="flex flex-wrap gap-2">
                {Array.from(userProfile.preferredTags.entries()).map(([tag, count]) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                  >
                    {tag} ({count})
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Preferred Categories</h3>
              <div className="flex flex-wrap gap-2">
                {Array.from(userProfile.preferredCategories.entries()).map(([category, count]) => (
                  <span
                    key={category}
                    className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
                  >
                    {category} ({count})
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* All Products */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-6">All Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {allProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product}
                score={round === 1 ? undefined : product.score}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;