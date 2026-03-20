const AVATAR_COLORS = [
  "var(--color-primary)",
  "var(--color-secondary)",
  "var(--color-accent)",
  "var(--color-primary)",
  "var(--color-secondary)",
];

function StarRating() {
  return (
    <div className="flex gap-0.5" aria-label="5 stars">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="h-4 w-4"
          style={{ color: "var(--color-accent)" }}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials({ content }) {
  if (!content.testimonials.length) return null;

  const testimonialsTitle = content.testimonialsTitle ?? "What Travelers Are Saying About Voye Global in Europe";
  const testimonialsSubtext = content.testimonialsSubtext ?? "Real experiences from verified travelers across 49 European countries.";

  return (
    <section
      className="section"
      aria-labelledby="testimonials-heading"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="container-brand">
        <div className="mb-10 text-center">
          <h2
            id="testimonials-heading"
            className="section-title"
          >
            {testimonialsTitle}
          </h2>
          <div className="brand-divider mx-auto" />
          <p
            className="mt-3 text-base"
            style={{ color: "var(--color-muted)" }}
          >
            {testimonialsSubtext}
          </p>
        </div>

        {/* Testimonial grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {content.testimonials.map((t, i) => (
            <figure
              key={t.name}
              className="card flex flex-col gap-4"
              aria-label={`Testimonial from ${t.name}`}
            >
              {/* Stars */}
              <StarRating />

              {/* Quote */}
              <blockquote className="flex-1">
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-text)" }}
                >
                  &ldquo;{t.text}&rdquo;
                </p>
              </blockquote>

              {/* Attribution */}
              <figcaption className="flex items-center gap-3 border-t pt-4"
                style={{ borderColor: "var(--color-border)" }}>
                {/* Avatar */}
                <div
                  className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                  style={{ backgroundColor: AVATAR_COLORS[i % AVATAR_COLORS.length] }}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>

                <div>
                  <div
                    className="text-sm font-semibold"
                    style={{ color: "var(--color-text)" }}
                  >
                    {t.name}
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "var(--color-muted)" }}
                  >
                    {t.country} &middot; {t.destination}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Trust indicator */}
        <div
          className="mt-8 flex items-center justify-center gap-2 text-sm"
          style={{ color: "var(--color-muted)" }}
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
              d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
            />
          </svg>
          Reviews sourced from verified purchasers. No paid placements.
        </div>
      </div>
    </section>
  );
}
