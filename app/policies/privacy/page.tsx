"use client";

export default function PrivacyPage() {
  return (
    <main>
      <div className="wrap sec-pad" style={{ maxWidth: "800px" }}>
        <h1 style={{ fontSize: "clamp(40px, 6vw, 80px)", marginBottom: "40px" }}>Privacy Policy</h1>
        
        <div style={{ fontSize: "14px", lineHeight: 1.8, display: "flex", flexDirection: "column", gap: "20px" }}>
          <p><strong>Last Updated: September 2026</strong></p>
          
          <h2 style={{ fontSize: "24px", marginTop: "20px" }}>1. Information We Collect</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.</p>
          
          <h2 style={{ fontSize: "24px", marginTop: "20px" }}>2. How We Use Your Information</h2>
          <p>Fusce tincidunt, justo in dictum pretium, dolor orci congue felis, eu auctor diam lorem non magna. Vivamus sit amet odio ut purus egestas faucibus.</p>
          
          <h2 style={{ fontSize: "24px", marginTop: "20px" }}>3. Data Sharing</h2>
          <p>Cras in tellus ut ex ullamcorper hendrerit in ut est. Aenean dignissim mi vel magna viverra eleifend.</p>
          
          <h2 style={{ fontSize: "24px", marginTop: "20px" }}>4. Security</h2>
          <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed vel dui nec sapien tincidunt lacinia.</p>
        </div>
      </div>
    </main>
  );
}
