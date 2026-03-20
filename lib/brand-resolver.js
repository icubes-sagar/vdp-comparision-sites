import { headers } from "next/headers";
import { getBrandById, getBrandByDomain } from "@/lib/brands";
import { euroConfig } from "@/data/euro";

/**
 * Server-side brand resolver.
 *
 * Reads the `x-brand-id` header injected by middleware and returns the
 * matching BrandConfig. Safe to call from any Server Component or Route Handler.
 *
 * Falls back to euroConfig if the header is missing (e.g. during static generation).
 */
export async function getBrand() {
  const headersList = await headers();
  const brandId = headersList.get("x-brand-id");
  const brandDomain = headersList.get("x-brand-domain");

  if (brandId) {
    const brand = getBrandById(brandId);
    if (brand) return brand;
  }

  if (brandDomain) {
    return getBrandByDomain(brandDomain);
  }

  return euroConfig;
}

/**
 * Build the canonical URL for a given path using the brand's canonical base.
 */
export function buildCanonical(brand, path = "/") {
  const base = brand.content.canonicalBase.replace(/\/$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalizedPath}`;
}

/**
 * Generate OpenGraph metadata object for a brand.
 */
export function buildOGMeta(brand) {
  return {
    title: brand.content.metaTitle,
    description: brand.content.metaDescription,
    url: brand.content.canonicalBase,
    siteName: brand.name,
    images: brand.content.ogImage
      ? [{ url: brand.content.ogImage, width: 1200, height: 630 }]
      : [],
    locale: "en_US",
    type: "website",
  };
}
