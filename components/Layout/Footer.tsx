import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="logo" style={{ marginBottom: "14px" }}>OLE FATHER</div>
            <p style={{ fontSize: "13px", maxWidth: "32ch", lineHeight: 1.6, fontWeight: 400 }}>
              Original words, phrases and designs, printed on apparel made to be worn your way.
            </p>
          </div>
          <div>
            <h4>Shop</h4>
            <ul>
              <li><Link href="/#collections">Men</Link></li>
              <li><Link href="/#collections">Women</Link></li>
              <li><Link href="/#collections">Collections</Link></li>
              <li><Link href="/#featured">New Arrivals</Link></li>
            </ul>
          </div>
          <div>
            <h4>Brand</h4>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/contact">Stockists</Link></li>
              <li><Link href="/contact">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4>Support</h4>
            <ul>
              <li><Link href="/policies/shipping">Shipping</Link></li>
              <li><Link href="/policies/shipping">Returns</Link></li>
              <li><Link href="/policies/privacy">Privacy</Link></li>
              <li><Link href="/policies/terms">Terms</Link></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 OLE FATHER. ALL RIGHTS RESERVED.</span>
          <span>DESIGN CONCEPT — BRUTALISM</span>
        </div>
      </div>
    </footer>
  );
}
