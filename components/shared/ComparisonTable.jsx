const POSITIVE_VALUES = new Set([
  "yes",
  "absolutely",
  "regional plan",
  "160+ countries",
  "200+ countries",
]);

function getCellStyle(provider, value, featuredProvider) {
  const lower = value.toLowerCase();
  const isVoye = provider === featuredProvider;
  const isPositive = POSITIVE_VALUES.has(lower) || lower.includes("voye15");
  const isNegative = ["no", "none", "bot-first", "app only", "delays reported", "limited"].includes(lower);

  if (isVoye) {
    return {
      fontWeight: 700,
      color: "var(--color-primary)",
    };
  }

  if (isPositive) {
    return { color: "var(--color-secondary)" };
  }
  if (isNegative) {
    return { color: "var(--color-muted)" };
  }
  return {};
}

export default function ComparisonTable({ content }) {
  const { comparisonFeatures, comparisonProviders } = content;
  const featuredProvider = content.featuredProvider ?? "Voye Global";
  const comparisonTitle = content.comparisonTitle ?? "Full Comparison: Best eSIM for Europe 2026";
  const comparisonSubtext = content.comparisonSubtext ?? "Side-by-side breakdown across every feature that matters for European travel.";

  if (!comparisonFeatures.length || !comparisonProviders.length) return null;

  return (
    <section
      className="section"
      aria-labelledby="comparison-heading"
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      <div className="container-brand">
        <div className="mb-8">
          <h2
            id="comparison-heading"
            className="section-title"
          >
            {comparisonTitle}
          </h2>
          <div className="brand-divider" />
          <p
            className="mt-3 text-base"
            style={{ color: "var(--color-muted)" }}
          >
            {comparisonSubtext}
          </p>
        </div>

        {/* Scrollable table wrapper */}
        <div
          className="overflow-x-auto rounded-brand border"
          style={{ borderColor: "var(--color-border)" }}
        >
          <table
            className="comparison-table w-full border-collapse text-left"
            aria-label="eSIM provider comparison table"
          >
            <caption className="sr-only">{content.comparisonTitle ?? "Comparison of top eSIM providers across key features"}</caption>

            <thead>
              <tr>
                {/* Feature column header */}
                <th
                  className="sticky left-0 z-10 min-w-[160px] px-4 py-3 text-xs"
                  style={{ backgroundColor: "var(--color-primary)" }}
                  scope="col"
                >
                  Feature
                </th>

                {/* Provider column headers */}
                {comparisonProviders.map((p) => (
                  <th
                    key={p}
                    className="min-w-[120px] px-4 py-3 text-xs"
                    style={{
                      backgroundColor:
                        p === featuredProvider
                          ? "color-mix(in srgb, var(--color-accent) 90%, #000)"
                          : "var(--color-primary)",
                    }}
                    scope="col"
                  >
                    {p}
                    {p === featuredProvider && (
                      <span className="ml-1.5 text-[10px] font-normal opacity-80">
                        ★ #1
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {comparisonFeatures.map((row, rowIndex) => (
                <tr key={row.feature}>
                  {/* Feature name cell */}
                  <td
                    className="sticky left-0 z-10 px-4 py-3 text-sm font-semibold"
                    style={{
                      backgroundColor:
                        rowIndex % 2 === 0
                          ? "var(--color-surface)"
                          : "color-mix(in srgb, var(--color-bg) 60%, var(--color-surface))",
                      color: "var(--color-text)",
                      borderRight: "1px solid var(--color-border)",
                    }}
                  >
                    {row.feature}
                  </td>

                  {/* Provider value cells */}
                  {comparisonProviders.map((p) => {
                    const value = row.values[p] ?? "—";
                    return (
                      <td
                        key={p}
                        className={`px-4 py-3 text-sm ${p === featuredProvider ? "highlight" : ""}`}
                        style={{
                          backgroundColor:
                            rowIndex % 2 === 0
                              ? "var(--color-surface)"
                              : "color-mix(in srgb, var(--color-bg) 60%, var(--color-surface))",
                          ...(p === featuredProvider
                            ? {
                                backgroundColor:
                                  rowIndex % 2 === 0
                                    ? "color-mix(in srgb, var(--color-accent) 5%, var(--color-surface))"
                                    : "color-mix(in srgb, var(--color-accent) 8%, var(--color-bg))",
                              }
                            : {}),
                          ...getCellStyle(p, value, featuredProvider),
                        }}
                      >
                        {value}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile scroll hint */}
        <p
          className="mt-2 text-center text-xs md:hidden"
          style={{ color: "var(--color-muted)" }}
          aria-live="polite"
        >
          ← Scroll horizontally to see all providers →
        </p>
      </div>
    </section>
  );
}
