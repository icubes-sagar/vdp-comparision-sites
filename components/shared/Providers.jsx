import ProviderCard from "@/components/shared/ProviderCard";

export default function Providers({ content }) {
  return (
    <section
      className="section"
      aria-labelledby="providers-heading"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="container-brand">
        {/* Section header */}
        <div className="mb-10">
          <h2
            id="providers-heading"
            className="section-title"
          >
            {content.evaluationTitle}
          </h2>
          <div className="brand-divider" />
          <p
            className="mt-4 max-w-2xl text-base leading-relaxed"
            style={{ color: "var(--color-muted)" }}
          >
            {content.evaluationText}
          </p>

          {/* Criteria pills */}
          <div className="mt-4 flex flex-wrap gap-2">
            {content.evaluationCriteria.map((criterion, i) => (
              <span
                key={criterion}
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium"
                style={{
                  borderColor: "var(--color-border)",
                  backgroundColor: "var(--color-surface)",
                  color: "var(--color-text)",
                }}
              >
                <span
                  className="flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-bold text-white"
                  style={{ backgroundColor: "var(--color-secondary)" }}
                >
                  {i + 1}
                </span>
                {criterion}
              </span>
            ))}
          </div>
        </div>

        {/* Provider cards */}
        <div className="space-y-8" role="list" aria-label="eSIM provider reviews">
          {content.providers.map((provider, index) => (
            <div key={provider.slug} role="listitem">
              <ProviderCard provider={provider} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
