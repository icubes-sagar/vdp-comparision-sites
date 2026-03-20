const RANK_ICONS = ["🏆","🥈","🥉","4️⃣","5️⃣","6️⃣"];

export default function AsiaQuickPicks({ content }) {
  return (
    <section style={{ background: "#060B18", padding: "80px 24px", borderTop: "1px solid #1E2D4A" }} aria-label="Quick picks summary">
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#F97316", display: "block", marginBottom: 12 }}>At a Glance</span>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 3vw, 40px)", color: "#F1F5F9", letterSpacing: "-0.02em", margin: 0 }}>Best eSIM for Asia — Quick Picks</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="asia-picks-grid">
          {content.quickPicks.map((pick, i) => (
            <div key={pick.label} style={{
              background: "#0E1729", border: i === 0 ? "1px solid rgba(249,115,22,0.4)" : "1px solid #1E2D4A",
              borderRadius: 14, padding: "20px 24px",
              boxShadow: i === 0 ? "0 0 24px rgba(249,115,22,0.08)" : "none",
              position: "relative", overflow: "hidden",
            }}>
              {i === 0 && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #F97316, #EA580C)" }} aria-hidden="true" />}
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <span style={{ fontSize: 22, lineHeight: 1, flexShrink: 0, marginTop: 2 }}>{RANK_ICONS[i]}</span>
                <div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "#94A3B8", marginBottom: 4 }}>{pick.label}</div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 17, color: i === 0 ? "#F97316" : "#F1F5F9" }}>{pick.winner}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){.asia-picks-grid{grid-template-columns:repeat(2,1fr)!important;}}@media(max-width:600px){.asia-picks-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
