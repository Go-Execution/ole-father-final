"use client";
import Link from 'next/link';
import { useCartStore } from '@/store/useCartStore';
import { products, Product } from '@/utils/products';

export default function ShopPage() {
  const addToCart = useCartStore(state => state.addToCart);

  const handleAddToCart = (e: React.MouseEvent, p: Product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({ ...p, id: `${p.id}-${Date.now()}` });
  };

  return (
    <main>
      <div className="wrap sec-pad">
        <div className="sec-head" style={{ marginBottom: "24px" }}>
          <div>
            <span className="eyebrow">All Products</span>
            <h2>Shop</h2>
          </div>
          <p>THE FULL COLLECTION. WEAR THE WORD.</p>
        </div>
      </div>

      <div className="products-grid" style={{ borderTop: "none" }}>
        {products.map((p) => (
          <div className="product" key={p.id}>
            <Link href={`/product/${p.id}`} className="product-img" style={{ display: 'block' }}>
              <img src={p.image} alt={p.name} />
            </Link>
            <div className="product-info">
              <div className="line">{p.collection}</div>
              <h3><Link href={`/product/${p.id}`}>{p.name}</Link></h3>
              <div className="phrase">{p.phrase}</div>
              <div className="row">
                <span className="price">${p.price}</span>
                <button onClick={(e) => handleAddToCart(e, p)} className="add-btn">ADD</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
