"use client";
import { useState } from "react";

export default function AsiaFAQ({ content }) {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" style={{ background: "#060B18", padding: "80px 24px", borderTop: "1px solid #1E2D4A" }} aria-label="Frequently asked questions">
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#F97316", display: "block", marginBottom: 12 }}>FAQ</span>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "clamp(28px,3vw,40px)", color: "#F1F5F9", letterSpacing: "-0.02em", margin: 0 }}>Common Questions</h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {content.faqs.map((faq, i) => (
            <div key={i} style={{
              background: "#0E1729",
              border: open === i ? "1px solid rgba(249,115,22,0.3)" : "1px solid #1E2D4A",
              borderRadius: 12, overflow: "hidden",
              boxShadow: open === i ? "0 0 20px rgba(249,115,22,0.04)" : "none",
            }}>
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                style={{
                  width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
                  padding: "18px 24px", background: "none", border: "none", cursor: "pointer",
                  textAlign: "left",
                }}
                aria-expanded={open === i}
              >
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 15, color: "#F1F5F9", paddingRight: 16 }}>{faq.question}</span>
                <span style={{
                  width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
                  background: open === i ? "#F97316" : "#1E2D4A",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 18, color: "#fff", fontWeight: 300, lineHeight: 1,
                  transition: "background 0.2s",
                }}>{open === i ? "−" : "+"}</span>
              </button>
              {open === i && (
                <div style={{ padding: "0 24px 18px" }}>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#94A3B8", lineHeight: 1.7, margin: 0 }}>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
