"use client";
import { notFound } from "next/navigation";
import { useCartStore } from "@/store/useCartStore";
import { getProductById, products } from "@/utils/products";
import { useState, use, useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = use(params);
  const product = getProductById(unwrappedParams.id);
  const addToCart = useCartStore((state) => state.addToCart);
  
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  
  useEffect(() => {
    gsap.fromTo('.prod-anim', 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' }
    );
  }, []);

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size first.");
      return;
    }
    // Add to cart with a unique ID based on timestamp so multiple of same item don't share ID in our simple mockup
    addToCart({ ...product, id: `${product.id}-${Date.now()}` });
  };

  const sizes = ["S", "M", "L", "XL", "XXL", "XXXL"];

  return (
    <main style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "calc(100vh - 85px)" }} className="prod-container">
      {/* Left side - Image */}
      <div style={{ borderRight: "var(--border) solid var(--black)", position: "relative", overflow: "hidden" }}>
        <img src={product.image} alt={product.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>

      {/* Right side - Details */}
      <div style={{ padding: "60px 5vw", backgroundColor: "var(--white)", position: "sticky", top: "85px", height: "calc(100vh - 85px)", overflowY: "auto" }}>
        <span className="eyebrow prod-anim">{product.collection}</span>
        <h1 className="prod-anim" style={{ fontSize: "clamp(36px, 5vw, 64px)", marginBottom: "20px" }}>{product.name}</h1>
        <p className="prod-anim" style={{ fontSize: "24px", fontFamily: "'Archivo Black', sans-serif", marginBottom: "40px" }}>${product.price}</p>
        
        <div className="prod-anim" style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "14px", marginBottom: "12px", textTransform: "uppercase" }}>Select Size</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {sizes.map((size) => (
              <button 
                key={size}
                onClick={() => setSelectedSize(size)}
                style={{
                  padding: "12px 20px",
                  border: "3px solid var(--black)",
                  background: selectedSize === size ? "var(--black)" : "var(--white)",
                  color: selectedSize === size ? "var(--yellow)" : "var(--black)",
                  fontFamily: "'Space Mono'",
                  fontWeight: 700,
                  cursor: "pointer"
                }}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <button 
          onClick={handleAddToCart}
          className="prod-anim btn btn-solid" 
          style={{ width: "100%", textAlign: "center", fontSize: "16px", padding: "20px" }}
        >
          {selectedSize ? "ADD TO CART" : "SELECT A SIZE"}
        </button>

        <div className="prod-anim" style={{ marginTop: "60px", borderTop: "3px solid var(--black)", paddingTop: "30px" }}>
          <h3 style={{ fontSize: "16px", marginBottom: "16px", fontFamily: "'Space Mono'" }}>Details</h3>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", fontSize: "14px", opacity: 0.8 }}>
            <li>- Original phrasing: {product.phrase}</li>
            <li>- 100% Heavyweight Cotton</li>
            <li>- Screen printed design</li>
            <li>- Designed and printed in the USA</li>
          </ul>
        </div>
      </div>
      
      {/* Featured Products Section */}
      <div style={{ gridColumn: "1 / -1", borderTop: "5px solid var(--black)" }}>
        <div className="wrap sec-pad">
          <div className="sec-head">
            <div><span className="eyebrow">More to explore</span><h2>Featured</h2></div>
          </div>
        </div>
        <div className="products-grid" style={{ borderTop: "none" }}>
          {products.slice(0, 3).map((p) => (
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
                  <Link href={`/product/${p.id}`} className="add-btn" style={{ textDecoration: "none" }}>VIEW</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick responsive fix for mobile view */}
      <style dangerouslySetInnerHTML={{__html: `
        @media(max-width: 900px) {
          .prod-container {
            grid-template-columns: 1fr !important;
          }
          .prod-container > div:first-child {
            border-right: none !important;
            border-bottom: var(--border) solid var(--black);
            height: 60vh;
          }
          .prod-container > div:last-child {
            position: relative !important;
            height: auto !important;
            top: 0 !important;
          }
        }
      `}} />
    </main>
  );
}
