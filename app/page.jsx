import { getBrand } from "@/lib/brand-resolver";
import StructuredData from "@/components/shared/StructuredData";

// Euro brand components (existing)
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Hero from "@/components/shared/Hero";
import QuickPicks from "@/components/shared/QuickPicks";
import Providers from "@/components/shared/Providers";
import ComparisonTable from "@/components/shared/ComparisonTable";
import Testimonials from "@/components/shared/Testimonials";
import Verdict from "@/components/shared/Verdict";
import FAQ from "@/components/shared/FAQ";
import DiscountBanner from "@/components/shared/DiscountBanner";

// Asia brand components (Ola Cabs-style dark UI)
import AsiaNav from "@/components/asia/AsiaNav";
import AsiaHero from "@/components/asia/AsiaHero";
import AsiaQuickPicks from "@/components/asia/AsiaQuickPicks";
import AsiaProviders from "@/components/asia/AsiaProviders";
import AsiaComparison from "@/components/asia/AsiaComparison";
import AsiaTestimonials from "@/components/asia/AsiaTestimonials";
import AsiaVerdict from "@/components/asia/AsiaVerdict";
import AsiaFAQ from "@/components/asia/AsiaFAQ";
import AsiaFooter from "@/components/asia/AsiaFooter";
import AsiaDiscountBar from "@/components/asia/AsiaDiscountBar";

export default async function HomePage() {
  const brand = await getBrand();
  const { content } = brand;

  // ── Asia brand — Ola Cabs dark UI ────────────────────────────────────────
  if (brand.id === "asia") {
    return (
      <>
        <StructuredData brand={brand} />
        <AsiaNav brand={brand} />
        <main id="main-content" role="main">
          <AsiaHero content={content} />
          <AsiaDiscountBar content={content} />
          <AsiaQuickPicks content={content} />
          <AsiaProviders content={content} />
          <AsiaComparison content={content} />
          <AsiaTestimonials content={content} />
          <AsiaVerdict content={content} />
          <AsiaFAQ content={content} />
        </main>
        <AsiaFooter brand={brand} />
      </>
    );
  }

  // ── Euro brand — default light UI ────────────────────────────────────────
  return (
    <>
      <StructuredData brand={brand} />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:px-4 focus:py-2 focus:text-sm"
        style={{ backgroundColor: "var(--color-accent)", color: "#fff", borderRadius: "var(--radius)" }}
      >
        Skip to main content
      </a>
      <Navbar brand={brand} />
      <main id="main-content" role="main">
        <Hero content={content} />
        {content.discountCode && (
          <div className="border-y" style={{ backgroundColor: "var(--color-surface)", borderColor: "var(--color-border)" }}>
            <div className="container-brand py-4">
              <DiscountBanner content={content} />
            </div>
          </div>
        )}
        <QuickPicks content={content} />
        <Providers content={content} />
        <ComparisonTable content={content} />
        <Testimonials content={content} />
        <Verdict content={content} />
        <FAQ content={content} />
        <section className="section" style={{ backgroundColor: "var(--color-bg)" }} aria-label="Final call to action">
          <div className="container-brand text-center">
            <h2 className="mb-3 text-2xl font-bold md:text-3xl" style={{ fontFamily: "var(--font-heading)", color: "var(--color-text)" }}>
              {content.finalCtaTitle ?? "Ready to Travel Without Roaming Charges?"}
            </h2>
            <p className="mb-8 text-base" style={{ color: "var(--color-muted)" }}>
              {content.finalCtaSubtext ?? "Get instant connectivity. Delivered as a QR code within minutes."}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={content.verdictCtaHref} target="_blank" rel="noopener noreferrer sponsored" className="btn-primary text-base">
                {content.verdictCtaText ?? "View eSIM Plans"}
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs" style={{ color: "var(--color-muted)" }}>
              {["Instant QR code delivery","No plastic SIM waste","24/7 human support","Satisfaction guarantee"].map(item => (
                <span key={item} className="flex items-center gap-1.5">
                  <svg className="h-3.5 w-3.5" style={{ color: "var(--color-accent)" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer brand={brand} />
    </>
  );
}
