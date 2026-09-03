"use client";

import { useCartStore } from "@/store/useCartStore";
import Link from "next/link";
import { useState } from "react";

export default function CheckoutPage() {
  const { items, getCartTotal } = useCartStore();
  const [placed, setPlaced] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPlaced(true);
  };

  if (placed) {
    return (
      <div style={{ padding: "100px 5vw", textAlign: "center", minHeight: "60vh" }}>
        <h1 style={{ fontSize: "clamp(40px, 5vw, 64px)", marginBottom: "20px" }}>ORDER CONFIRMED</h1>
        <p style={{ marginBottom: "40px", fontSize: "16px" }}>Your statement is on its way. Thank you for shopping with Ole Father.</p>
        <Link href="/" className="btn btn-solid">RETURN HOME</Link>
      </div>
    );
  }

  return (
    <main className="checkout-container">
      <section className="checkout-form-sec">
        <h1>CHECKOUT</h1>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "40px" }}>
            <h3 style={{ fontSize: "18px", marginBottom: "20px", borderBottom: "3px solid var(--black)", paddingBottom: "10px" }}>1. Shipping Details</h3>
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" required />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" required />
              </div>
            </div>
            <div className="form-group">
              <label>Address</label>
              <input type="text" required />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>City</label>
                <input type="text" required />
              </div>
              <div className="form-group">
                <label>Zip Code</label>
                <input type="text" required />
              </div>
            </div>
          </div>

          <div style={{ marginBottom: "40px" }}>
            <h3 style={{ fontSize: "18px", marginBottom: "20px", borderBottom: "3px solid var(--black)", paddingBottom: "10px" }}>2. Payment (Mockup)</h3>
            <div className="form-group">
              <label>Card Number</label>
              <input type="text" placeholder="XXXX XXXX XXXX XXXX" required />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Expiry (MM/YY)</label>
                <input type="text" placeholder="MM/YY" required />
              </div>
              <div className="form-group">
                <label>CVC</label>
                <input type="text" placeholder="123" required />
              </div>
            </div>
          </div>

          <button type="submit" className="checkout-btn" style={{ fontSize: "16px" }}>PLACE ORDER [MOCKUP]</button>
        </form>
      </section>

      <section className="checkout-summary-sec">
        <h2>ORDER SUMMARY</h2>
        
        {items.length === 0 ? (
          <p>Your cart is empty. <Link href="/" style={{ textDecoration: "underline" }}>Go shopping</Link></p>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "40px" }}>
            {items.map((item) => (
              <div key={item.id} style={{ display: "flex", gap: "16px", borderBottom: "2px solid #ccc", paddingBottom: "20px" }}>
                <img src={item.image} alt={item.name} style={{ width: "60px", height: "80px", border: "2px solid var(--black)" }} />
                <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "14px" }}>{item.name}</div>
                    <div style={{ fontSize: "11px", fontWeight: "bold" }}>{item.phrase}</div>
                  </div>
                  <div style={{ fontFamily: "'Archivo Black', sans-serif" }}>${item.price}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div style={{ borderTop: "3px solid var(--black)", paddingTop: "20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px", fontSize: "14px", fontWeight: 700 }}>
            <span>SUBTOTAL</span>
            <span>${getCartTotal()}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px", fontSize: "14px", fontWeight: 700 }}>
            <span>SHIPPING</span>
            <span>FREE</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px", fontSize: "20px", fontFamily: "'Archivo Black', sans-serif" }}>
            <span>TOTAL</span>
            <span>${getCartTotal()}</span>
          </div>
        </div>
      </section>
    </main>
  );
}
