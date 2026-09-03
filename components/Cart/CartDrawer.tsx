"use client";
import { useCartStore } from '@/store/useCartStore';
import Link from 'next/link';

export default function CartDrawer() {
  const { items, isOpen, toggleCart, removeFromCart, getCartTotal } = useCartStore();

  return (
    <div className={`cart-drawer-overlay ${isOpen ? 'open' : ''}`} onClick={toggleCart}>
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button onClick={toggleCart}>CLOSE</button>
        </div>
        
        <div className="cart-items">
          {items.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div className="cart-item-details">
                  <div>
                    <div className="cart-item-title">{item.name}</div>
                    <div style={{fontSize: "11px", fontWeight: "bold"}}>{item.phrase}</div>
                  </div>
                  <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <span className="cart-item-price">${item.price}</span>
                    <button onClick={() => removeFromCart(item.id)} className="remove-btn">Remove</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>TOTAL</span>
              <span>${getCartTotal()}</span>
            </div>
            <Link href="/checkout" onClick={toggleCart} className="checkout-btn">
              Proceed to Checkout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
