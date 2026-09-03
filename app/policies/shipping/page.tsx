"use client";

export default function ShippingPage() {
  return (
    <main>
      <div className="wrap sec-pad" style={{ maxWidth: "800px" }}>
        <h1 style={{ fontSize: "clamp(40px, 6vw, 80px)", marginBottom: "40px" }}>Shipping & Returns</h1>
        
        <div style={{ fontSize: "14px", lineHeight: 1.8, display: "flex", flexDirection: "column", gap: "20px" }}>
          
          <h2 style={{ fontSize: "24px", marginTop: "20px" }}>Shipping Policy</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis sapien vitae erat egestas, non finibus augue tincidunt. Aliquam ultricies odio tristique, vestibulum orci non, cursus lorem.</p>
          <ul style={{ paddingLeft: "20px" }}>
            <li>Standard Shipping: 3-5 Business Days (Free over $100)</li>
            <li>Express Shipping: 1-2 Business Days ($15)</li>
            <li>International Shipping: 7-14 Business Days (Calculated at checkout)</li>
          </ul>
          
          <h2 style={{ fontSize: "24px", marginTop: "20px" }}>Returns Policy</h2>
          <p>Aliquam sed nunc rutrum, molestie lorem scelerisque, faucibus ex. Vestibulum tristique sapien in est pulvinar hendrerit. Phasellus at erat in nisl consectetur elementum ut condimentum purus.</p>
          <p>Returns are accepted within 30 days of purchase for unworn, unwashed items with tags attached.</p>
        </div>
      </div>
    </main>
  );
}
