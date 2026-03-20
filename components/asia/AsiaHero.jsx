export default function AsiaHero({ content }) {
  const { hero } = content;
  return (
    <section style={{
      minHeight: "100vh",
      background: "radial-gradient(ellipse at 60% 0%, #1a2744 0%, #060B18 55%), #060B18",
      display: "flex", alignItems: "center",
      padding: "120px 24px 80px",
      position: "relative", overflow: "hidden",
    }} aria-labelledby="asia-hero-h1">

      {/* Grid pattern overlay */}
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0, opacity: 0.04,
        backgroundImage: "linear-gradient(#94A3B8 1px, transparent 1px), linear-gradient(90deg, #94A3B8 1px, transparent 1px)",
        backgroundSize: "48px 48px",
        pointerEvents: "none",
      }} />

      {/* Glow blobs */}
      <div aria-hidden="true" style={{ position: "absolute", top: "10%", right: "-10%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div aria-hidden="true" style={{ position: "absolute", bottom: "-20%", left: "-5%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1240, margin: "0 auto", width: "100%", position: "relative", zIndex: 10 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="asia-hero-grid">

          {/* LEFT: Text */}
          <div>
            {/* Badges */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
              {hero.trustBadges.map(badge => (
                <span key={badge} style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  border: "1px solid #1E2D4A", borderRadius: 999,
                  padding: "4px 12px", fontSize: 12, fontWeight: 500,
                  color: "#94A3B8", background: "rgba(14,23,41,0.8)",
                  fontFamily: "'Inter', sans-serif",
                }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#F97316", display: "inline-block" }} />
                  {badge}
                </span>
              ))}
            </div>

            {/* H1 */}
            <h1 id="asia-hero-h1" style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800, fontSize: "clamp(36px, 4.5vw, 58px)",
              lineHeight: 1.1, color: "#F1F5F9",
              letterSpacing: "-0.03em", marginBottom: 24,
              textShadow: "0 0 80px rgba(249,115,22,0.15)",
            }}>
              {hero.h1.split("Asia").map((part, i, arr) => (
                <span key={i}>{part}{i < arr.length - 1 && <span style={{ color: "#F97316" }}>Asia</span>}</span>
              ))}
            </h1>

            {/* Intro */}
            <p style={{
              color: "#94A3B8", fontSize: 17, lineHeight: 1.7,
              maxWidth: 560, marginBottom: 36, fontFamily: "'Inter', sans-serif",
            }}>{hero.intro.slice(0, 200)}...</p>

            {/* CTA buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 48, alignItems: "center" }}>
              <a href={hero.ctaHref} target="_blank" rel="noopener noreferrer sponsored" style={{
                background: "#111827",
                boxShadow: "-4px 4px 0 #F97316",
                border: "1px solid #F97316",
                color: "#fff", padding: "14px 28px",
                borderRadius: 10, fontSize: 15, fontWeight: 700,
                textDecoration: "none", fontFamily: "'Space Grotesk', sans-serif",
                display: "inline-flex", alignItems: "center", gap: 8,
                transition: "transform 0.15s",
              }}>
                {hero.ctaText}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
              </a>
              {content.discountCode && (
                <span style={{
                  border: "1px solid #1E2D4A", borderRadius: 10,
                  padding: "13px 20px", fontSize: 14, color: "#94A3B8",
                  fontFamily: "'Inter', sans-serif", background: "rgba(14,23,41,0.6)",
                }}>
                  Code: <strong style={{ color: "#F97316", fontFamily: "monospace" }}>{content.discountCode}</strong> — 15% off
                </span>
              )}
            </div>

            {/* Stats strip */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, borderTop: "1px solid #1E2D4A", paddingTop: 28 }} className="asia-stats-grid">
              {[
                { value: "18", label: "Countries" },
                { value: "6", label: "Providers" },
                { value: "2026", label: "Updated" },
                { value: "100%", label: "Independent" },
              ].map(s => (
                <div key={s.label}>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: 28, color: "#F97316", lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: "#94A3B8", marginTop: 4, textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Visual card */}
          <div style={{ display: "flex", justifyContent: "center" }} className="asia-hero-card">
            <div style={{
              background: "linear-gradient(135deg, #0E1729 0%, #111827 100%)",
              border: "1px solid #1E2D4A",
              borderRadius: 20, padding: 32, width: "100%", maxWidth: 400,
              boxShadow: "0 0 60px rgba(249,115,22,0.08), 0 20px 60px rgba(0,0,0,0.6)",
            }}>
              {/* Header */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: "linear-gradient(135deg, #F97316, #EA580C)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2} aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                </div>
                <div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 16, color: "#F1F5F9" }}>Asia Coverage Map</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#94A3B8" }}>18 countries, 1 eSIM</div>
                </div>
              </div>

              {/* Country chips */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 24 }}>
                {["🇯🇵 Japan","🇸🇬 Singapore","🇹🇭 Thailand","🇰🇷 S. Korea","🇮🇩 Indonesia","🇮🇳 India","🇨🇳 China","🇲🇾 Malaysia","🇵🇭 Philippines","🇻🇳 Vietnam","🇭🇰 HK","🇹🇼 Taiwan","🇦🇺 Australia","🇳🇿 NZ","+4 more"].map(c => (
                  <span key={c} style={{ background: "#060B18", border: "1px solid #1E2D4A", borderRadius: 6, padding: "3px 8px", fontSize: 11, color: "#94A3B8", fontFamily: "'Inter', sans-serif" }}>{c}</span>
                ))}
              </div>

              {/* Feature list */}
              {["24/7 WhatsApp Support","Instant QR delivery","Satisfaction Guarantee","15% off with VOYE15"].map(f => (
                <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <div style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(249,115,22,0.15)", border: "1px solid rgba(249,115,22,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth={3} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
                  </div>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#94A3B8" }}>{f}</span>
                </div>
              ))}

              {/* Bottom CTA */}
              <a href={hero.ctaHref} target="_blank" rel="noopener noreferrer sponsored" style={{
                display: "block", marginTop: 24, background: "#F97316",
                color: "#fff", textAlign: "center", padding: "12px 20px",
                borderRadius: 10, fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700, fontSize: 14, textDecoration: "none",
                boxShadow: "0 4px 20px rgba(249,115,22,0.35)",
              }}>
                View Asia Plans →
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .asia-hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .asia-hero-card { display: none !important; }
          .asia-stats-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </section>
  );
}
