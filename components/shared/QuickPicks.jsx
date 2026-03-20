const PICK_ICONS = {
  0: "🏆",
  1: "🔒",
  2: "🗓️",
  3: "📡",
  4: "♾️",
  5: "📚",
};

export default function QuickPicks({ content }) {
  return (
    <section
      className="section"
      aria-labelledby="quick-picks-heading"
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      <div className="container-brand">
        <div className="mb-8">
          <h2
            id="quick-picks-heading"
            className="section-title"
          >
            Quick Picks
          </h2>
          <div className="brand-divider" />
          <p
            className="mt-3 text-base"
            style={{ color: "var(--color-muted)" }}
          >
            Short on time? Here are the best options by category.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {content.quickPicks.map((pick, i) => (
            <div
              key={pick.label}
              className="flex items-center gap-4 rounded-brand border p-4 transition-shadow hover:shadow-sm"
              style={{
                borderColor: "var(--color-border)",
                backgroundColor: "var(--color-bg)",
                ...(i === 0
                  ? {
                      borderColor: "var(--color-accent)",
                      background:
                        "color-mix(in srgb, var(--color-accent) 6%, var(--color-bg))",
                    }
                  : {}),
              }}
            >
              {/* Icon */}
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-xl"
                style={{ backgroundColor: "var(--color-bg)" }}>
                {PICK_ICONS[i] ?? "✓"}
              </span>

              {/* Text */}
              <div className="min-w-0">
                <p
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "var(--color-muted)" }}
                >
                  {pick.label}
                </p>
                <p
                  className="mt-0.5 truncate text-base font-bold"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: i === 0 ? "var(--color-accent)" : "var(--color-primary)",
                  }}
                >
                  {pick.winner}
                </p>
              </div>

              {/* Winner badge for top pick */}
              {i === 0 && (
                <span className="ml-auto flex-shrink-0 badge-accent text-[10px]">
                  #1
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
