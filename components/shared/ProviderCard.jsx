function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 flex-shrink-0"
      style={{ color: "var(--color-accent)" }}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 flex-shrink-0"
      style={{ color: "var(--color-muted)" }}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  );
}

export default function ProviderCard({ provider, index }) {
  const isFeatured = provider.featured === true;

  return (
    <article
      id={provider.slug}
      className="card relative scroll-mt-20"
      aria-labelledby={`provider-${provider.slug}-heading`}
      style={
        isFeatured
          ? {
              borderWidth: "2px",
              borderColor: "var(--color-accent)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
            }
          : {}
      }
    >
      {/* Featured ribbon */}
      {isFeatured && (
        <div
          className="absolute -top-px left-6 flex items-center gap-1.5 rounded-b-brand px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white"
          style={{ backgroundColor: "var(--color-accent)" }}
          aria-label="Editor's top pick"
        >
          <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          Editor&apos;s Choice
        </div>
      )}

      <div className="pt-4">
        {/* Header row */}
        <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
          <div>
            {/* Rank badge */}
            <div className="mb-2 flex items-center gap-2">
              <span
                className="flex h-7 w-7 items-center justify-center rounded-full text-sm font-bold text-white"
                style={{ backgroundColor: "var(--color-primary)" }}
              >
                {provider.rank}
              </span>
              {provider.badge && (
                <span className="badge text-[10px]">{provider.badge}</span>
              )}
            </div>

            {/* Provider name - H3 for SEO hierarchy */}
            <h3
              id={`provider-${provider.slug}-heading`}
              className="text-2xl font-bold"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--color-primary)",
              }}
            >
              {provider.rank}. {provider.name}
            </h3>
            <p
              className="mt-0.5 text-base font-medium"
              style={{ color: "var(--color-muted)" }}
            >
              {provider.tagline}
            </p>
          </div>

          {/* Coverage pill */}
          <div
            className="flex flex-col items-center rounded-brand border px-4 py-2 text-center"
            style={{
              borderColor: "var(--color-border)",
              backgroundColor: "var(--color-bg)",
            }}
          >
            <span
              className="text-2xl font-bold"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--color-primary)",
              }}
            >
              {provider.coverageCount}
            </span>
            <span
              className="text-[11px] font-medium uppercase tracking-wider"
              style={{ color: "var(--color-muted)" }}
            >
              Countries
            </span>
          </div>
        </div>

        {/* Pros / Cons grid */}
        <div
          className={`mb-4 grid gap-6 ${provider.cons ? "md:grid-cols-2" : "grid-cols-1"}`}
        >
          {/* Pros */}
          <div>
            <h4
              className="mb-3 text-xs font-bold uppercase tracking-wider"
              style={{ color: "var(--color-primary)" }}
            >
              What Works Well
            </h4>
            <ul className="space-y-2" role="list">
              {provider.pros.map((pro) => (
                <li key={pro} className="check-item">
                  <CheckIcon />
                  <span className="text-sm" style={{ color: "var(--color-text)" }}>
                    {pro}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cons */}
          {provider.cons && provider.cons.length > 0 && (
            <div>
              <h4
                className="mb-3 text-xs font-bold uppercase tracking-wider"
                style={{ color: "var(--color-muted)" }}
              >
                What Could Be Better
              </h4>
              <ul className="space-y-2" role="list">
                {provider.cons.map((con) => (
                  <li key={con} className="check-item">
                    <CrossIcon />
                    <span className="text-sm" style={{ color: "var(--color-muted)" }}>
                      {con}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Divider */}
        <div
          className="mb-4 h-px w-full"
          style={{ backgroundColor: "var(--color-border)" }}
        />

        {/* Verdict */}
        <div
          className="mb-5 rounded-brand border-l-4 py-3 pl-4 pr-3"
          style={{
            borderLeftColor: isFeatured ? "var(--color-accent)" : "var(--color-secondary)",
            backgroundColor: "var(--color-bg)",
          }}
        >
          <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "var(--color-muted)" }}>
            Verdict
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "var(--color-text)" }}>
            {provider.verdict}
          </p>
        </div>

        {/* CTA (only for featured / providers with link) */}
        {provider.href && (
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={provider.href}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="btn-primary"
              aria-label={`View ${provider.name} Europe plans`}
            >
              View {provider.name} Plans
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
            {provider.discount && (
              <span
                className="text-sm font-medium"
                style={{ color: "var(--color-muted)" }}
              >
                Use code{" "}
                <code
                  className="rounded px-1.5 py-0.5 font-mono text-xs font-bold"
                  style={{
                    backgroundColor: "var(--color-accent)",
                    color: "#fff",
                  }}
                >
                  {provider.discount}
                </code>{" "}
                for 15% off
              </span>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
