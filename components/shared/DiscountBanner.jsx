export default function DiscountBanner({ content, className = "" }) {
  if (!content.discountCode) return null;

  return (
    <div
      className={`discount-banner ${className}`}
      role="complementary"
      aria-label="Exclusive discount offer"
    >
      {/* Left: text */}
      <div className="flex items-center gap-3">
        <span className="text-xl" aria-hidden="true">🎁</span>
        <div>
          <p
            className="text-sm font-semibold"
            style={{ color: "var(--color-text)" }}
          >
            Exclusive discount available
          </p>
          <p
            className="text-xs"
            style={{ color: "var(--color-muted)" }}
          >
            {content.discountNote}
          </p>
        </div>
      </div>

      {/* Right: code + CTA */}
      <div className="flex items-center gap-3">
        <code
          className="rounded-brand border-2 border-dashed px-3 py-1.5 font-mono text-sm font-bold tracking-widest"
          style={{
            borderColor: "var(--color-accent)",
            color: "var(--color-accent)",
          }}
        >
          {content.discountCode}
        </code>
        <a
          href={content.verdictCtaHref}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="btn-primary text-sm"
        >
          Apply &amp; Save
        </a>
      </div>
    </div>
  );
}
