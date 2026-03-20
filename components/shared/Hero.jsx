export default function Hero({ content }) {
  const { hero } = content;

  return (
    <section
      className="section relative overflow-hidden"
      style={{ background: "var(--color-bg)" }}
      aria-labelledby="hero-heading"
    >
      {/* Background pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(var(--color-primary) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      {/* Decorative gradient blob */}
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-10 blur-3xl"
        style={{ backgroundColor: "var(--color-secondary)" }}
        aria-hidden="true"
      />

      <div className="container-brand relative z-10">
        {/* Trust badges row */}
        <div className="mb-8 flex flex-wrap gap-2">
          {hero.trustBadges.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium"
              style={{
                borderColor: "var(--color-border)",
                backgroundColor: "var(--color-surface)",
                color: "var(--color-muted)",
              }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: "var(--color-accent)" }}
              />
              {badge}
            </span>
          ))}
        </div>

        {/* H1 */}
        <h1
          id="hero-heading"
          className="animate-on-load mb-6 max-w-4xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--color-text)",
            animation: "fadeUp 0.7s ease-out forwards",
          }}
        >
          {hero.h1}
        </h1>

        {/* Intro paragraph */}
        <p
          className="mb-8 max-w-3xl text-lg leading-relaxed md:text-xl"
          style={{
            color: "var(--color-muted)",
            animation: "fadeUp 0.7s ease-out 150ms forwards",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          {hero.intro}
        </p>

        {/* CTA cluster */}
        <div
          className="flex flex-wrap items-center gap-4"
          style={{
            animation: "fadeUp 0.7s ease-out 300ms forwards",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          <a
            href={hero.ctaHref}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="btn-primary text-base"
          >
            {hero.ctaText}
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </a>

          {content.discountCode && (
            <div
              className="flex items-center gap-2 rounded-brand border px-4 py-2.5 text-sm font-medium"
              style={{
                borderColor: "var(--color-accent)",
                color: "var(--color-text)",
                backgroundColor: "var(--color-surface)",
              }}
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 14.25l6-6m4.5-3.493V21.75l-4.125-1.688a4.5 4.5 0 0 0-3.375 0l-4.5 1.688a4.5 4.5 0 0 0-3.375 0l-4.125-1.687V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185Z"
                />
              </svg>
              Use code&nbsp;
              <code
                className="rounded px-1.5 py-0.5 font-mono text-xs font-bold"
                style={{
                  backgroundColor: "var(--color-accent)",
                  color: "#fff",
                }}
              >
                {content.discountCode}
              </code>
              &nbsp;for 15% off
            </div>
          )}
        </div>

        {/* Stats strip */}
        <div
          className="mt-12 grid grid-cols-2 gap-4 border-t pt-8 sm:grid-cols-4"
          style={{ borderColor: "var(--color-border)" }}
        >
          {[
            { value: "49", label: "European Countries" },
            { value: "6", label: "Providers Compared" },
            { value: "2026", label: "Fully Updated" },
            { value: "100%", label: "Independent Review" },
          ].map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <div
                className="text-2xl font-bold md:text-3xl"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--color-primary)",
                }}
              >
                {stat.value}
              </div>
              <div
                className="mt-0.5 text-xs font-medium uppercase tracking-wider"
                style={{ color: "var(--color-muted)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
