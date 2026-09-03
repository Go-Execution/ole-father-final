import { create } from 'zustand';

export interface Product {
  id: string;
  name: string;
  collection: string;
  phrase: string;
  price: number;
  image: string;
}

interface CartState {
  items: Product[];
  isOpen: boolean;
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  toggleCart: () => void;
  getCartTotal: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  isOpen: false,
  addToCart: (product) => set((state) => ({ 
    items: [...state.items, product],
    isOpen: true 
  })),
  removeFromCart: (id) => set((state) => ({ 
    items: state.items.filter((item) => item.id !== id) 
  })),
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  getCartTotal: () => get().items.reduce((total, item) => total + item.price, 0),
}));
