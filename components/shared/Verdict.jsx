export default function Verdict({ content }) {
  const paragraphs = content.verdictText.split("\n\n").filter(Boolean);

  return (
    <section
      className="section"
      aria-labelledby="verdict-heading"
      style={{
        background:
          "linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)",
      }}
    >
      <div className="container-brand">
        <div className="mx-auto max-w-3xl text-center text-white">
          <h2
            id="verdict-heading"
            className="mb-6 text-3xl font-bold md:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {content.verdictTitle}
          </h2>

          {/* Verdict paragraphs */}
          <div className="space-y-4 text-left">
            {paragraphs.map((para, i) => (
              <p
                key={i}
                className="text-base leading-relaxed opacity-90"
              >
                {para}
              </p>
            ))}
          </div>

          {/* Discount banner */}
          {content.discountCode && (
            <div className="mt-8 rounded-brand border border-white/20 bg-white/10 px-6 py-4 backdrop-blur-sm">
              <p className="text-sm font-medium text-white/90">
                {content.discountNote}
              </p>
              <code className="mt-2 inline-block rounded bg-white/20 px-4 py-1.5 font-mono text-lg font-bold tracking-widest text-white">
                {content.discountCode}
              </code>
            </div>
          )}

          {/* CTA */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={content.verdictCtaHref}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-2 rounded-brand bg-white px-8 py-4 text-base font-bold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
              style={{ color: "var(--color-primary)" }}
              aria-label={content.verdictCtaText}
            >
              {content.verdictCtaText}
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
          </div>

          {/* Trust micro-copy */}
          <p className="mt-4 text-xs text-white/60">
            No hidden fees. Cancel anytime. Instant QR code delivery.
          </p>
        </div>
      </div>
    </section>
  );
}
