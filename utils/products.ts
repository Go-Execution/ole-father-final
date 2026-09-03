export interface Product {
  id: string;
  name: string;
  collection: string;
  phrase: string;
  price: number;
  image: string;
}

export const products: Product[] = [
  { id: 'quiet-strength', name: '"Quiet Strength"', collection: 'Ole Father Original', phrase: 'S · M · L · XL · XXL · XXXL', price: 45, image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80' },
  { id: 'built-to-last', name: '"Built To Last"', collection: 'Say It Loud', phrase: 'S · M · L · XL · XXL · XXXL', price: 45, image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=600&q=80' },
  { id: 'work-hard-stay-humble', name: '"Work Hard, Stay Humble"', collection: 'The Classic Phrase', phrase: 'S · M · L · XL · XXL · XXXL', price: 45, image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=600&q=80' },
  { id: 'built-for-more-1', name: '"Built For More"', collection: 'Born To Stand Out', phrase: 'S · M · L · XL · XXL · XXXL', price: 45, image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=600&q=80' },
  { id: 'made-for-long-haul', name: '"Made For The Long Haul"', collection: 'Original Expression', phrase: 'S · M · L · XL · XXL · XXXL', price: 45, image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80' },
  { id: 'built-for-more-2', name: '"Built For More"', collection: 'Heritage Edition', phrase: 'S · M · L · XL · XXL · XXXL', price: 45, image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=600&q=80' },
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}
