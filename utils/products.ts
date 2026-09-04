export interface Product {
  id: string;
  name: string;
  collection: string;
  phrase: string;
  price: number;
  image: string;
}

export const products: Product[] = [
  { id: 'quiet-strength', name: '"Quiet Strength"', collection: 'Ole Father Original', phrase: 'S · M · L · XL · XXL · XXXL', price: 45, image: '/03208755-8ec0-4970-96bb-487bdcd1bfc7.jpg' },
  { id: 'built-to-last', name: '"Built To Last"', collection: 'Say It Loud', phrase: 'S · M · L · XL · XXL · XXXL', price: 45, image: '/040de542-b562-44f4-8299-3a36d6a01c9d.jpg' },
  { id: 'work-hard-stay-humble', name: '"Work Hard, Stay Humble"', collection: 'The Classic Phrase', phrase: 'S · M · L · XL · XXL · XXXL', price: 45, image: '/1a2c0c69-39b9-4a77-a985-8531888c1c4b.jpg' },
  { id: 'built-for-more-1', name: '"Built For More"', collection: 'Born To Stand Out', phrase: 'S · M · L · XL · XXL · XXXL', price: 45, image: '/534a10b5-f98c-41c5-8adc-35d6e17c7b69.jpg' },
  { id: 'made-for-long-haul', name: '"Made For The Long Haul"', collection: 'Original Expression', phrase: 'S · M · L · XL · XXL · XXXL', price: 45, image: '/5db1391d-f005-4095-9457-71326fdcd6d3.jpg' },
  { id: 'built-for-more-2', name: '"Built For More"', collection: 'Heritage Edition', phrase: 'S · M · L · XL · XXL · XXXL', price: 45, image: '/9cc63174-90ff-43c1-9a3e-ab5b984cddc5.jpg' },
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}
