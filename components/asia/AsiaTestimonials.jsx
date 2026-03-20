export default function AsiaTestimonials({ content }) {
  return (
    <section id="reviews" style={{ background: "#060B18", padding: "80px 24px", borderTop: "1px solid #1E2D4A" }} aria-label="Traveler reviews">
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#F97316", display: "block", marginBottom: 12 }}>Real Travelers</span>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "clamp(28px,3vw,40px)", color: "#F1F5F9", letterSpacing: "-0.02em", margin: "0 0 12px" }}>{content.testimonialsTitle}</h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: "#94A3B8", margin: 0 }}>{content.testimonialsSubtext}</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="asia-reviews-grid">
          {content.testimonials.map((t, i) => (
            <div key={t.name} style={{
              background: "#0E1729", border: "1px solid #1E2D4A",
              borderRadius: 16, padding: "28px 24px",
              boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
              position: "relative",
            }}>
              {/* Orange quote mark */}
              <div style={{ fontSize: 56, lineHeight: 0.8, color: "rgba(249,115,22,0.2)", fontFamily: "Georgia, serif", marginBottom: 16, fontWeight: 900 }}>"</div>
              {/* Stars */}
              <div style={{ display: "flex", gap: 3, marginBottom: 14 }}>
                {[1,2,3,4,5].map(s => <span key={s} style={{ color: "#F97316", fontSize: 14 }}>★</span>)}
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#94A3B8", lineHeight: 1.7, margin: "0 0 20px" }}>"{t.text}"</p>
              <div style={{ display: "flex", alignItems: "center", gap: 12, borderTop: "1px solid #1E2D4A", paddingTop: 16 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: "50%",
                  background: i === 0 ? "linear-gradient(135deg, #F97316, #EA580C)" : "linear-gradient(135deg, #1E2D4A, #2D3F5A)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 14,
                  color: "#fff", flexShrink: 0,
                }}>{t.initials}</div>
                <div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 14, color: "#F1F5F9" }}>{t.name}</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#94A3B8" }}>{t.country} → {t.destination}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){.asia-reviews-grid{grid-template-columns:repeat(2,1fr)!important;}}@media(max-width:600px){.asia-reviews-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
