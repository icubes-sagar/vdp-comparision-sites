import Link from "next/link";

export default function Navbar({ brand }) {
  return (
    <nav className="site-nav" role="navigation" aria-label="Main navigation">
      <div className="container-brand flex h-14 items-center justify-between">
        {/* Logo / Brand name */}
        <Link
          href="/"
          className="font-heading text-xl font-bold"
          style={{ color: "var(--color-primary)" }}
          aria-label={`${brand.name} — Home`}
        >
          {brand.name}
        </Link>

        {/* Right-side CTA */}
        <a
          href={brand.content.hero.ctaHref}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="btn-primary text-sm"
        >
          Get Best Deal
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </a>
      </div>
    </nav>
  );
}
