export default function AsiaDiscountBar({ content }) {
  if (!content.discountCode) return null;
  return (
    <div style={{
      background: "linear-gradient(90deg, rgba(249,115,22,0.12) 0%, rgba(249,115,22,0.06) 50%, rgba(249,115,22,0.12) 100%)",
      borderTop: "1px solid rgba(249,115,22,0.2)",
      borderBottom: "1px solid rgba(249,115,22,0.2)",
      padding: "12px 24px",
    }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#94A3B8" }}>🎉 Exclusive discount:</span>
        <code style={{ fontFamily: "monospace", fontWeight: 700, fontSize: 15, color: "#F97316", background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.3)", borderRadius: 6, padding: "2px 8px" }}>{content.discountCode}</code>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#94A3B8" }}>{content.discountNote}</span>
      </div>
    </div>
  );
}
