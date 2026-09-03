"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <div className="wrap sec-pad" style={{ maxWidth: "800px" }}>
        <h1 style={{ fontSize: "clamp(40px, 6vw, 80px)", marginBottom: "20px" }}>GET IN TOUCH</h1>
        <p style={{ fontSize: "16px", fontWeight: 700, textTransform: "uppercase", marginBottom: "40px" }}>
          Have a question? Or want to bring your own design to life?<br />
          Submit your custom print-on-demand artwork below.
        </p>

        {submitted ? (
          <div style={{ background: "var(--yellow)", padding: "40px", border: "5px solid var(--black)", textAlign: "center" }}>
            <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>RECEIVED.</h2>
            <p style={{ fontWeight: 700, textTransform: "uppercase" }}>Your design and message have been sent to our team.<br/>We will be in touch shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <label style={{ fontSize: "13px", fontWeight: 700, textTransform: "uppercase" }}>Name</label>
                <input type="text" required style={{ padding: "16px", border: "3px solid var(--black)", background: "var(--white)", fontFamily: "inherit", fontSize: "14px", outline: "none" }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <label style={{ fontSize: "13px", fontWeight: 700, textTransform: "uppercase" }}>Email</label>
                <input type="email" required style={{ padding: "16px", border: "3px solid var(--black)", background: "var(--white)", fontFamily: "inherit", fontSize: "14px", outline: "none" }} />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label style={{ fontSize: "13px", fontWeight: 700, textTransform: "uppercase" }}>Upload Custom Design (PNG, JPG, Vector)</label>
              <div style={{ position: "relative", border: "3px dashed var(--black)", padding: "40px", textAlign: "center", background: "#f4f4f4", cursor: "pointer" }}>
                <input type="file" required accept="image/png, image/jpeg, application/pdf" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", opacity: 0, cursor: "pointer" }} />
                <span style={{ fontSize: "14px", fontWeight: 700, textTransform: "uppercase", pointerEvents: "none" }}>Click or drag to upload artwork</span>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label style={{ fontSize: "13px", fontWeight: 700, textTransform: "uppercase" }}>Message or Design Notes</label>
              <textarea required rows={5} style={{ padding: "16px", border: "3px solid var(--black)", background: "var(--white)", fontFamily: "inherit", fontSize: "14px", outline: "none", resize: "vertical" }}></textarea>
            </div>

            <button type="submit" className="btn btn-solid" style={{ fontSize: "16px", padding: "20px", marginTop: "10px" }}>SUBMIT DESIGN INQUIRY</button>
          </form>
        )}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        input:focus, textarea:focus {
          border-color: var(--red) !important;
        }
      `}} />
    </main>
  );
}
