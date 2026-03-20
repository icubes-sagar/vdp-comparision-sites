"use client";
export default function AsiaFooter({ brand }) {
  const { content } = brand;
  return (
    <footer style={{ background: "#030710", borderTop: "1px solid #1E2D4A", padding: "48px 24px 32px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "start", marginBottom: 32, flexWrap: "wrap" }} className="asia-footer-grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg, #F97316, #EA580C)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: 14, color: "#fff" }}>A</div>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 16, color: "#F1F5F9" }}>AsiaDataCompare</span>
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#94A3B8", maxWidth: 380, lineHeight: 1.6, margin: "0 0 16px" }}>{content.footerTagline}</p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: "#6B7E9A", margin: 0 }}>
              This site contains affiliate links. We may earn a commission when you purchase via our links at no extra cost to you.
            </p>
          </div>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {content.footerLinks.map(link => (
              <a key={link.label} href={link.href} style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#94A3B8", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = "#F97316"}
                onMouseLeave={e => e.target.style.color = "#94A3B8"}
              >{link.label}</a>
            ))}
          </div>
        </div>
        <div style={{ borderTop: "1px solid #1E2D4A", paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#6B7E9A", margin: 0 }}>© 2026 AsiaDataCompare. All rights reserved.</p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#6B7E9A", margin: 0 }}>Updated March 2026</p>
        </div>
      </div>
      <style>{`@media(max-width:640px){.asia-footer-grid{grid-template-columns:1fr!important;}}`}</style>
    </footer>
  );
}
