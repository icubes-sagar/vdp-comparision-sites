"use client";
import { useState, useEffect } from "react";

export default function AsiaNav({ brand }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { content } = brand;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(6,11,24,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #1E2D4A" : "none",
        transition: "all 0.3s ease",
        padding: "0 24px",
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 8,
            background: "linear-gradient(135deg, #F97316, #EA580C)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: 16, color: "#fff"
          }}>A</div>
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 18, color: "#fff", letterSpacing: "-0.02em" }}>
            AsiaDataCompare
          </span>
        </div>

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: 32 }} className="asia-nav-links">
          {[["Providers", "#providers"], ["Compare", "#compare"], ["Reviews", "#reviews"], ["FAQ", "#faq"]].map(([label, href]) => (
            <a key={label} href={href} style={{ color: "#94A3B8", fontSize: 14, fontWeight: 500, textDecoration: "none", fontFamily: "'Inter', sans-serif", transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = "#F97316"}
              onMouseLeave={e => e.target.style.color = "#94A3B8"}
            >{label}</a>
          ))}
          <a
            href={content.hero.ctaHref}
            target="_blank"
            rel="noopener noreferrer sponsored"
            style={{
              background: "#111827",
              boxShadow: "-3px 3px 0 #F97316",
              border: "1px solid #F97316",
              color: "#fff",
              padding: "8px 20px",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 700,
              textDecoration: "none",
              fontFamily: "'Space Grotesk', sans-serif",
              transition: "transform 0.15s",
              display: "inline-block",
            }}
          >
            Get 15% Off →
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 8, display: "none" }}
          className="asia-hamburger"
          aria-label="Toggle menu"
        >
          <div style={{ width: 24, height: 2, background: "#fff", marginBottom: 5, transition: "0.3s" }} />
          <div style={{ width: 24, height: 2, background: "#fff", marginBottom: 5, transition: "0.3s" }} />
          <div style={{ width: 24, height: 2, background: "#fff", transition: "0.3s" }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: "rgba(6,11,24,0.98)", borderTop: "1px solid #1E2D4A",
          padding: "16px 24px", display: "flex", flexDirection: "column", gap: 16
        }}>
          {[["Providers", "#providers"], ["Compare", "#compare"], ["Reviews", "#reviews"], ["FAQ", "#faq"]].map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)}
              style={{ color: "#94A3B8", fontSize: 15, fontWeight: 500, textDecoration: "none", fontFamily: "'Inter', sans-serif" }}
            >{label}</a>
          ))}
          <a href={content.hero.ctaHref} target="_blank" rel="noopener noreferrer sponsored"
            style={{ background: "#111827", boxShadow: "-3px 3px 0 #F97316", border: "1px solid #F97316", color: "#fff", padding: "10px 20px", borderRadius: 8, fontSize: 14, fontWeight: 700, textDecoration: "none", fontFamily: "'Space Grotesk', sans-serif", textAlign: "center" }}
          >Get 15% Off →</a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .asia-nav-links { display: none !important; }
          .asia-hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
