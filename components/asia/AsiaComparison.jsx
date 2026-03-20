export default function AsiaComparison({ content }) {
  const { comparisonProviders, comparisonFeatures, featuredProvider } = content;
  return (
    <section id="compare" style={{ background: "#060B18", padding: "80px 24px", borderTop: "1px solid #1E2D4A" }} aria-label="Provider comparison table">
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#F97316", display: "block", marginBottom: 12 }}>Side by Side</span>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "clamp(28px,3vw,40px)", color: "#F1F5F9", letterSpacing: "-0.02em", margin: 0 }}>{content.comparisonTitle}</h2>
        </div>
        <div style={{ overflowX: "auto", borderRadius: 16, border: "1px solid #1E2D4A" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 700 }}>
            <caption className="sr-only">{content.comparisonTitle}</caption>
            <thead>
              <tr style={{ background: "#0E1729", borderBottom: "1px solid #1E2D4A" }}>
                <th style={{ padding: "14px 20px", textAlign: "left", fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "#94A3B8", minWidth: 180 }}>Feature</th>
                {comparisonProviders.map(p => (
                  <th key={p} style={{
                    padding: "14px 16px", textAlign: "center",
                    fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 700,
                    color: p === featuredProvider ? "#F97316" : "#F1F5F9",
                    background: p === featuredProvider ? "rgba(249,115,22,0.06)" : "transparent",
                    borderLeft: p === featuredProvider ? "1px solid rgba(249,115,22,0.2)" : "1px solid #1E2D4A",
                    borderRight: p === featuredProvider ? "1px solid rgba(249,115,22,0.2)" : "none",
                    minWidth: 120,
                  }}>
                    {p === featuredProvider && <div style={{ fontSize: 10, color: "#F97316", marginBottom: 2 }}>★ #1</div>}
                    {p}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((row, ri) => (
                <tr key={row.feature} style={{ background: ri % 2 === 0 ? "#060B18" : "#080E1C", borderBottom: "1px solid #1E2D4A" }}>
                  <td style={{ padding: "12px 20px", fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 500, color: "#94A3B8" }}>{row.feature}</td>
                  {comparisonProviders.map(p => {
                    const val = row.values[p] ?? "—";
                    const isFeatured = p === featuredProvider;
                    const isYes = val === "Yes" || val.toLowerCase().startsWith("yes");
                    const isNo = val === "No" || val === "None" || val.toLowerCase().startsWith("no");
                    return (
                      <td key={p} style={{
                        padding: "12px 16px", textAlign: "center",
                        fontFamily: "'Inter', sans-serif", fontSize: 13,
                        color: isFeatured ? "#F97316" : isYes ? "#22C55E" : isNo ? "#6B7E9A" : "#94A3B8",
                        background: isFeatured ? "rgba(249,115,22,0.04)" : "transparent",
                        borderLeft: isFeatured ? "1px solid rgba(249,115,22,0.15)" : "1px solid #1E2D4A",
                        borderRight: isFeatured ? "1px solid rgba(249,115,22,0.15)" : "none",
                        fontWeight: isFeatured ? 600 : 400,
                      }}>
                        {isYes && !isFeatured ? "✓" : isNo && !isFeatured ? "✗" : val}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
