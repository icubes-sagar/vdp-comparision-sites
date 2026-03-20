import Link from "next/link";

export default function NotFound() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center px-4 text-center"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div
        className="mb-4 text-7xl font-bold"
        style={{
          fontFamily: "var(--font-heading)",
          color: "var(--color-primary)",
        }}
      >
        404
      </div>
      <h1
        className="mb-3 text-2xl font-bold"
        style={{ fontFamily: "var(--font-heading)", color: "var(--color-text)" }}
      >
        Page not found
      </h1>
      <p className="mb-8 text-base" style={{ color: "var(--color-muted)" }}>
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="btn-primary"
      >
        Back to Homepage
      </Link>
    </main>
  );
}
