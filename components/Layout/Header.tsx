"use client";
import Link from 'next/link';
import { useCartStore } from '@/store/useCartStore';

export default function Header() {
  const { items, toggleCart } = useCartStore();

  return (
    <header>
      <div className="nav-left">
        <Link href="/shop">Shop</Link>
        <Link href="/#featured">New</Link>
        <Link href="/#collections">Collections</Link>
      </div>
      <Link href="/" className="logo">OLE FATHER</Link>
      <div className="nav-right">
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <button onClick={toggleCart}>Cart [{items.length}]</button>
      </div>
    </header>
  );
}
