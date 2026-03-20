import Link from "next/link";

export default function Footer({ brand }) {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t py-10"
      style={{
        borderColor: "var(--color-border)",
        backgroundColor: "var(--color-surface)",
      }}
      role="contentinfo"
    >
      <div className="container-brand">
        {/* Top row */}
        <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <span
              className="font-heading text-lg font-bold"
              style={{ color: "var(--color-primary)" }}
            >
              {brand.name}
            </span>
            <p
              className="mt-1 text-sm"
              style={{ color: "var(--color-muted)" }}
            >
              {brand.content.footerTagline}
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-4">
              {brand.content.footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:underline"
                    style={{ color: "var(--color-muted)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Divider */}
        <div
          className="mb-4 h-px w-full"
          style={{ backgroundColor: "var(--color-border)" }}
        />

        {/* Bottom row */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs" style={{ color: "var(--color-muted)" }}>
            © {year} {brand.name}. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "var(--color-muted)" }}>
            This site may contain affiliate links. We may earn a commission at
            no extra cost to you.
          </p>
        </div>
      </div>
    </footer>
  );
}
