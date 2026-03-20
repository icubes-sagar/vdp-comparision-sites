function FAQSchema({ faqs }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function FAQ({ content }) {
  if (!content.faqs.length) return null;

  return (
    <section
      className="section"
      aria-labelledby="faq-heading"
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      {/* Inject FAQ schema */}
      <FAQSchema faqs={content.faqs} />

      <div className="container-brand">
        <div className="mb-8">
          <h2
            id="faq-heading"
            className="section-title"
          >
            Frequently Asked Questions
          </h2>
          <div className="brand-divider" />
          <p
            className="mt-3 text-base"
            style={{ color: "var(--color-muted)" }}
          >
            Everything you need to know before purchasing a Europe eSIM.
          </p>
        </div>

        {/* Accordion list */}
        <div
          className="divide-y rounded-brand border"
          style={{
            borderColor: "var(--color-border)",
          }}
          role="list"
        >
          {content.faqs.map((faq, i) => (
            <details
              key={i}
              className="group"
              role="listitem"
            >
              <summary
                className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-[color:var(--color-bg)]"
                aria-expanded="false"
              >
                <h3
                  className="text-left text-sm font-semibold md:text-base"
                  style={{ color: "var(--color-text)" }}
                >
                  {faq.question}
                </h3>

                {/* Chevron */}
                <span
                  className="faq-chevron flex-shrink-0"
                  style={{ color: "var(--color-muted)" }}
                  aria-hidden="true"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </summary>

              <div
                className="px-5 pb-5 pt-1 text-sm leading-relaxed"
                style={{ color: "var(--color-muted)" }}
              >
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
