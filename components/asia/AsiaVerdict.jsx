export default function AsiaVerdict({ content }) {
  return (
    <section style={{
      background: "linear-gradient(135deg, #0A0F1E 0%, #111827 50%, #0A0F1E 100%)",
      padding: "80px 24px", borderTop: "1px solid #1E2D4A", borderBottom: "1px solid #1E2D4A",
    }} aria-label="Verdict">
      <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#F97316", display: "block", marginBottom: 12 }}>Our Verdict</span>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "clamp(28px,3vw,42px)", color: "#F1F5F9", letterSpacing: "-0.02em", marginBottom: 28 }}>{content.verdictTitle}</h2>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "#94A3B8", lineHeight: 1.8, textAlign: "left", marginBottom: 40, maxWidth: 780, margin: "0 auto 40px" }}>
          {content.verdictText.split("\n\n").map((para, i) => (
            <p key={i} style={{ marginBottom: 16 }}>{para}</p>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
          <a href={content.verdictCtaHref} target="_blank" rel="noopener noreferrer sponsored" style={{
            background: "#111827",
            boxShadow: "-4px 4px 0 #F97316",
            border: "1px solid #F97316",
            color: "#fff", padding: "16px 32px", borderRadius: 12,
            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 16,
            textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8,
          }}>
            {content.verdictCtaText}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/></svg>
          </a>
          {content.discountCode && (
            <div style={{ border: "1px solid #1E2D4A", borderRadius: 12, padding: "15px 24px", fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#94A3B8", background: "rgba(14,23,41,0.6)" }}>
              Code: <strong style={{ color: "#F97316", fontFamily: "monospace" }}>{content.discountCode}</strong> — 15% off first order
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
