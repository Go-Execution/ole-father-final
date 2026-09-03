"use client";

export default function TermsPage() {
  return (
    <main>
      <div className="wrap sec-pad" style={{ maxWidth: "800px" }}>
        <h1 style={{ fontSize: "clamp(40px, 6vw, 80px)", marginBottom: "40px" }}>Terms & Conditions</h1>
        
        <div style={{ fontSize: "14px", lineHeight: 1.8, display: "flex", flexDirection: "column", gap: "20px" }}>
          <p><strong>Last Updated: September 2026</strong></p>
          
          <h2 style={{ fontSize: "24px", marginTop: "20px" }}>1. General</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in odio quis nisi mollis pretium id vel metus. Nulla facilisi. Praesent congue orci nec enim tempus, at elementum elit dapibus.</p>
          
          <h2 style={{ fontSize: "24px", marginTop: "20px" }}>2. Purchases and Payments</h2>
          <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse potenti. Ut ullamcorper ligula mattis, iaculis erat non, bibendum justo.</p>
          
          <h2 style={{ fontSize: "24px", marginTop: "20px" }}>3. Liability</h2>
          <p>Aliquam erat volutpat. Fusce elementum nulla in nulla rhoncus porta. Pellentesque vitae vehicula nulla, id eleifend orci.</p>
        </div>
      </div>
    </main>
  );
}
