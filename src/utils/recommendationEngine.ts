import { Product } from '../data/products';

export interface UserProfile {
  likedProducts: number[];
  preferredTags: Map<string, number>;
  preferredCategories: Map<string, number>;
}

export class RecommendationEngine {
  private userProfile: UserProfile = {
    likedProducts: [],
    preferredTags: new Map(),
    preferredCategories: new Map()
  };

  public getColdStartRecommendations(products: Product[]): Product[] {
    return products
      .sort((a, b) => b.popularityScore - a.popularityScore)
      .slice(0, 3);
  }

  public updateUserProfile(product: Product) {
    this.userProfile.likedProducts.push(product.id);
    
    // Update tag preferences
    product.tags.forEach(tag => {
      const currentCount = this.userProfile.preferredTags.get(tag) || 0;
      this.userProfile.preferredTags.set(tag, currentCount + 1);
    });

    // Update category preferences
    const currentCategoryCount = this.userProfile.preferredCategories.get(product.category) || 0;
    this.userProfile.preferredCategories.set(product.category, currentCategoryCount + 1);
  }

  public getPersonalizedRecommendations(products: Product[]): Product[] {
    if (this.userProfile.likedProducts.length === 0) {
      return this.getColdStartRecommendations(products);
    }

    const availableProducts = products.filter(p => !this.userProfile.likedProducts.includes(p.id));
    const scoredProducts = availableProducts.map(product => ({
      ...product,
      score: this.calculatePersonalizedScore(product)
    }));

    // Sort by personalized score and get top 3
    return scoredProducts
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);
  }

  public calculatePersonalizedScore(product: Product): number {
    let score = product.popularityScore * 0.2; // Reduced base score weight

    // Calculate tag match score
    const tagScore = product.tags.reduce((acc, tag) => {
      const tagWeight = this.userProfile.preferredTags.get(tag) || 0;
      return acc + (tagWeight * 0.4); // Increased tag weight
    }, 0);

    // Calculate category match score
    const categoryWeight = this.userProfile.preferredCategories.get(product.category) || 0;
    const categoryScore = categoryWeight * 0.4; // Increased category weight

    // Combine scores
    score += tagScore + categoryScore;

    return score;
  }

  public getUserProfile(): UserProfile {
    return this.userProfile;
  }
}