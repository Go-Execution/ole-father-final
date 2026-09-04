"use client";
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useCartStore } from '@/store/useCartStore';
import { products, Product } from '@/utils/products';

export default function Home() {
  const addToCart = useCartStore(state => state.addToCart);
  
  const splitRef = useRef<HTMLDivElement>(null);
  const splitCopyRef = useRef<HTMLDivElement>(null);
  const heroImgRef = useRef<HTMLImageElement>(null);
  const colCardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Hero Parallax
    if (heroImgRef.current) {
      gsap.to(heroImgRef.current, {
        y: '20%',
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
      });
    }

    // Collections Parallax
    colCardsRef.current.forEach((card, i) => {
      if (card) {
        const img = card.querySelector('img');
        if (img) {
          gsap.fromTo(img, 
            { y: '-10%' },
            {
              y: '10%',
              ease: 'none',
              scrollTrigger: {
                trigger: card,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              }
            }
          );
        }
      }
    });

    // Split section Pin animation
    // Only pin on non-mobile screens
    let mm = gsap.matchMedia();
    mm.add("(min-width: 861px)", () => {
      if (splitRef.current && splitCopyRef.current) {
        ScrollTrigger.create({
          trigger: splitRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: splitCopyRef.current,
          pinSpacing: false,
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      mm.revert();
    };
  }, []);

  const handleAddToCart = (e: React.MouseEvent, p: Product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({ ...p, id: `${p.id}-${Date.now()}` });
  };

  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <span className="season-tag">Autumn Collection — 2026</span>
          <h1>Wear<br/>the <mark>word.</mark></h1>
          <p>Bold designs. Original phrases. Heavyweight cotton, made to be worn your way — English, Français, Español.</p>
          <div className="hero-ctas">
            <Link href="#featured" className="btn btn-solid">Shop the collection</Link>
            <Link href="#featured" className="btn btn-outline">Explore designs</Link>
          </div>
        </div>
        <div className="hero-img">
          <img ref={heroImgRef} src="/9d66f84f-e2cb-4e4e-bfe3-f415b091268e.jpg" alt="Model wearing Ole Father graphic tee" style={{height: "120%"}} />
          <div className="price-badge">EVERY<br/>DESIGN<b>$45</b></div>
        </div>
      </section>

      <div className="marquee-strip">
        <div>
          <span>ORIGINAL PHRASES</span>//<span>HEAVYWEIGHT COTTON</span>//<span>THREE LANGUAGES</span>//<span>EVERY DESIGN $45</span>//
          <span>ORIGINAL PHRASES</span>//<span>HEAVYWEIGHT COTTON</span>//<span>THREE LANGUAGES</span>//<span>EVERY DESIGN $45</span>//
        </div>
      </div>

      <div className="wrap sec-pad">
        <div className="sec-head">
          <div><span className="eyebrow">Shop by collection</span><h2>Five ways in.</h2></div>
          <p>BY FIT, OR BY THE LANGUAGE THE PHRASE WAS WRITTEN IN.</p>
        </div>
      </div>
      
      <div className="collections" id="collections">
        {[
          { img: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=600&q=80", title: "Men's", sub: "Heavyweight cuts" },
          { img: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?auto=format&fit=crop&w=600&q=80", title: "Women's", sub: "Statement graphics" },
          { img: "https://images.unsplash.com/photo-1503341960582-b45751874cf0?auto=format&fit=crop&w=600&q=80", title: "English", sub: "Say it plain" },
          { img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=600&q=80", title: "Français", sub: "Dis-le fort" },
          { img: "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=600&q=80", title: "Español", sub: "Dilo alto" }
        ].map((col, i) => (
          <div className="col-card" key={i} ref={el => { if (el) colCardsRef.current[i] = el; }}>
            <img src={col.img} alt={col.title} style={{height: "120%"}} />
            <div className="tag"><h3>{col.title}</h3><small>{col.sub}</small></div>
          </div>
        ))}
      </div>

      <div className="wrap sec-pad" id="featured">
        <div className="sec-head">
          <div><span className="eyebrow">The line-up</span><h2>Featured designs</h2></div>
          <p>SIX PRINTS FROM THE CURRENT RUN.</p>
        </div>
      </div>
      
      <div className="products-grid">
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

      <div className="wrap sec-pad">
        <div style={{ textAlign: "center", border: "5px solid var(--black)", padding: "80px 20px" }}>
          <span className="eyebrow">They said it</span>
          <h2 style={{ fontSize: "clamp(30px, 4vw, 50px)", maxWidth: "20ch", margin: "20px auto 30px" }}>
            "FINALLY, A SHIRT THAT SPEAKS FOR ITSELF. THE QUALITY IS UNMATCHED."
          </h2>
          <p style={{ fontWeight: 700, fontSize: "14px", textTransform: "uppercase" }}>— HYPEBEAST MAGAZINE</p>
        </div>
      </div>

      <div className="split" ref={splitRef} id="about">
        <div className="split-copy" ref={splitCopyRef}>
          <span className="eyebrow" style={{background:"var(--yellow)", color:"var(--black)"}}>The idea</span>
          <h2>Not just a shirt.<br/>A statement.</h2>
          <p>Ole Father brings original designs, phrases and expressions to apparel made for people who want to wear something with personality.</p>
          <Link href="#featured" className="btn btn-solid" style={{background:"var(--yellow)", color:"var(--black)", width:"fit-content"}}>Discover Ole Father</Link>
        </div>
        <div className="split-img">
          <img src="/e6e838e9-587f-4934-8730-d29993984dcb.jpg" alt="Screen print" style={{height: "120%"}} />
        </div>
      </div>

      <div className="wrap sec-pad">
        <div className="sec-head">
          <div><span className="eyebrow">One idea, three languages</span><h2>Same design. Three ways to say it.</h2></div>
        </div>
      </div>
      
      <div className="langs">
        <div className="lang-card"><div className="code">English</div><h3>Wear the word.</h3></div>
        <div className="lang-card"><div className="code">Français</div><h3>Porte le mot.</h3></div>
        <div className="lang-card"><div className="code">Español</div><h3>Lleva la palabra.</h3></div>
      </div>

      <div style={{ background: "var(--red)", color: "var(--white)", padding: "100px 5vw", textAlign: "center", borderTop: "5px solid var(--black)" }}>
        <h2 style={{ fontSize: "clamp(40px, 8vw, 100px)", marginBottom: "20px" }}>DON'T WAIT.</h2>
        <p style={{ fontSize: "16px", fontWeight: 700, textTransform: "uppercase", marginBottom: "40px" }}>THE AUTUMN COLLECTION IS SELLING FAST.</p>
        <Link href="/shop" className="btn btn-outline" style={{ background: "var(--black)", color: "var(--white)", borderColor: "var(--black)" }}>SHOP ALL NOW</Link>
      </div>

      <div className="news">
        <h2>Stay in the loop</h2>
        <p>NEW DESIGNS, NEW PHRASES AND EXCLUSIVE RELEASES.</p>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="YOUR EMAIL ADDRESS" required />
          <button type="submit">JOIN</button>
        </form>
      </div>
    </main>
  );
}
