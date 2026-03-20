export default function AsiaProviders({ content }) {
  return (
    <section id="providers" style={{ background: "#060B18", padding: "80px 24px" }} aria-label="eSIM providers">
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#F97316", display: "block", marginBottom: 12 }}>Provider Rankings</span>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "clamp(28px,3vw,40px)", color: "#F1F5F9", letterSpacing: "-0.02em", margin: "0 0 12px" }}>6 Asia eSIM Providers, Ranked</h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: "#94A3B8", maxWidth: 560, margin: "0 auto" }}>{content.evaluationText}</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {content.providers.map((p, i) => (
            <div key={p.name} style={{
              background: p.featured ? "linear-gradient(135deg, #0E1729 0%, #111827 100%)" : "#0E1729",
              border: p.featured ? "1px solid rgba(249,115,22,0.4)" : "1px solid #1E2D4A",
              borderRadius: 16, padding: "28px 32px",
              boxShadow: p.featured ? "0 0 40px rgba(249,115,22,0.06), 0 8px 32px rgba(0,0,0,0.4)" : "0 4px 16px rgba(0,0,0,0.3)",
              position: "relative", overflow: "hidden",
            }}>
              {p.featured && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #F97316, #EA580C)" }} aria-hidden="true" />}

              <div style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 24, alignItems: "flex-start" }} className="asia-provider-grid">
                {/* Rank badge */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: "50%",
                    background: p.featured ? "linear-gradient(135deg, #F97316, #EA580C)" : "#1E2D4A",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: 18,
                    color: p.featured ? "#fff" : "#94A3B8",
                    boxShadow: p.featured ? "0 4px 16px rgba(249,115,22,0.35)" : "none",
                  }}>#{p.rank}</div>
                  {p.coverageCount && <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: "#94A3B8", textAlign: "center", lineHeight: 1.3 }}>{p.coverageCount}<br/><span style={{ color: "#6B7E9A" }}>countries</span></div>}
                </div>

                {/* Content */}
                <div>
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 10, marginBottom: 6 }}>
                    <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 22, color: "#F1F5F9", margin: 0 }}>{p.name}</h3>
                    <span style={{
                      background: p.featured ? "rgba(249,115,22,0.15)" : "rgba(148,163,184,0.1)",
                      border: `1px solid ${p.featured ? "rgba(249,115,22,0.4)" : "#1E2D4A"}`,
                      color: p.featured ? "#F97316" : "#94A3B8",
                      borderRadius: 999, padding: "3px 10px", fontSize: 11, fontWeight: 600,
                      fontFamily: "'Inter', sans-serif",
                    }}>{p.badge}</span>
                  </div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#94A3B8", margin: "0 0 16px", fontStyle: "italic" }}>{p.tagline}</p>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }} className="asia-pros-cons">
                    <div>
                      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#22C55E", marginBottom: 8 }}>✓ Pros</div>
                      {(p.pros || []).slice(0, 4).map(pro => (
                        <div key={pro} style={{ display: "flex", gap: 8, marginBottom: 5, alignItems: "flex-start" }}>
                          <span style={{ color: "#22C55E", fontSize: 12, marginTop: 2, flexShrink: 0 }}>●</span>
                          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#94A3B8", lineHeight: 1.4 }}>{pro}</span>
                        </div>
                      ))}
                    </div>
                    {p.cons && p.cons.length > 0 && (
                      <div>
                        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#F87171", marginBottom: 8 }}>✗ Cons</div>
                        {p.cons.slice(0, 3).map(con => (
                          <div key={con} style={{ display: "flex", gap: 8, marginBottom: 5, alignItems: "flex-start" }}>
                            <span style={{ color: "#F87171", fontSize: 12, marginTop: 2, flexShrink: 0 }}>●</span>
                            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#94A3B8", lineHeight: 1.4 }}>{con}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {p.verdict && (
                    <div style={{ marginTop: 14, borderLeft: "2px solid rgba(249,115,22,0.4)", paddingLeft: 14 }}>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#94A3B8", fontStyle: "italic", margin: 0, lineHeight: 1.6 }}>"{p.verdict}"</p>
                    </div>
                  )}
                </div>

                {/* CTA */}
                {p.featured && (
                  <div style={{ flexShrink: 0 }} className="asia-provider-cta">
                    <a href={p.href} target="_blank" rel="noopener noreferrer sponsored" style={{
                      display: "block", background: "#111827",
                      boxShadow: "-4px 4px 0 #F97316",
                      border: "1px solid #F97316", color: "#fff",
                      padding: "12px 20px", borderRadius: 10,
                      fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 13,
                      textDecoration: "none", textAlign: "center", whiteSpace: "nowrap",
                    }}>
                      View Plans →
                    </a>
                    {p.discount && (
                      <div style={{ textAlign: "center", marginTop: 8, fontFamily: "'Inter', sans-serif", fontSize: 11, color: "#94A3B8" }}>
                        Use <strong style={{ color: "#F97316", fontFamily: "monospace" }}>{p.discount}</strong> for 15% off
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:768px){.asia-provider-grid{grid-template-columns:1fr!important;gap:16px!important;}.asia-provider-cta{display:none!important;}.asia-pros-cons{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
