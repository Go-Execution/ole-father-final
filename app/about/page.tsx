"use client";
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main>
      <div className="wrap sec-pad">
        <div className="sec-head">
          <div>
            <span className="eyebrow">Our Story</span>
            <h2>The Manifesto</h2>
          </div>
          <p>BUILT ON THE IDEALS OF RAW EXPRESSION AND HEAVYWEIGHT QUALITY.</p>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderTop: "var(--border) solid var(--black)", borderBottom: "var(--border) solid var(--black)" }} className="about-split">
        <div style={{ position: "relative", overflow: "hidden", minHeight: "400px" }}>
          <img src="https://images.unsplash.com/photo-1542272201-b1ca555f8505?auto=format&fit=crop&w=1200&q=80" alt="About Ole Father" style={{ filter: "grayscale(100%) contrast(1.15)" }} />
        </div>
        <div style={{ padding: "80px 5vw", display: "flex", flexDirection: "column", justifyContent: "center", gap: "22px", borderLeft: "var(--border) solid var(--black)", background: "var(--white)" }}>
          <h2 style={{ fontSize: "clamp(32px, 4.4vw, 54px)" }}>Original Words.</h2>
          <p style={{ maxWidth: "40ch", fontSize: "15px", lineHeight: 1.8, fontWeight: 400 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p style={{ maxWidth: "40ch", fontSize: "15px", lineHeight: 1.8, fontWeight: 400 }}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
          <Link href="/shop" className="btn btn-solid" style={{ width: "fit-content", marginTop: "20px" }}>Shop The Collection</Link>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @media(max-width: 860px) {
          .about-split {
            grid-template-columns: 1fr !important;
          }
          .about-split > div:last-child {
            border-left: none !important;
            border-top: var(--border) solid var(--black);
          }
        }
      `}} />
    </main>
  );
}
