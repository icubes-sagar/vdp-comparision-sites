import { NextResponse } from "next/server";

/**
 * Multi-brand middleware.
 *
 * Inlines domain → brand-id mapping to avoid Edge Runtime import restrictions.
 * Server Components load the full BrandConfig via lib/brands.js on their side.
 *
 * Local dev override:
 *  Set the `?brand=<id>` query param (or `NEXT_PUBLIC_BRAND` env var)
 *  to force a specific brand without needing a real domain.
 */

/** domain → brand id */
const DOMAIN_MAP = {
  "euroesims.com": "euro",
  "www.euroesims.com": "euro",
  "asiadatacompare.com": "asia",
  "www.asiadatacompare.com": "asia",
};

/** brand id → canonical domain */
const ID_TO_DOMAIN = {
  euro: "euroesims.com",
  asia: "asiadatacompare.com",
};

const DEFAULT_BRAND_ID = "euro";
const DEFAULT_DOMAIN = "euroesims.com";

export function middleware(request) {
  const { hostname, searchParams } = request.nextUrl;

  // ── Dev override via query param or env var ───────────────────────────────
  const devId =
    searchParams.get("brand") ?? process.env.NEXT_PUBLIC_BRAND ?? null;

  const brandId = devId
    ? (ID_TO_DOMAIN[devId] ? devId : DEFAULT_BRAND_ID)
    : (DOMAIN_MAP[hostname.toLowerCase()] ?? DEFAULT_BRAND_ID);

  const brandDomain = ID_TO_DOMAIN[brandId] ?? DEFAULT_DOMAIN;

  // ── Inject brand headers for Server Components ────────────────────────────
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-brand-id", brandId);
  requestHeaders.set("x-brand-domain", brandDomain);

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  // Run on all routes except Next internals and static assets
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|fonts|images|icons).*)",
  ],
};
