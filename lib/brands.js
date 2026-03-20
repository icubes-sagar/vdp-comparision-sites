import { euroConfig } from "@/data/euro";
import { asiaConfig } from "@/data/asiadatacompare";

// ── Brand Registry ───────────────────────────────────────────────────────────
// Add new brands here. The middleware and page resolver both use this registry.

const brands = [euroConfig, asiaConfig];

/** Map of domain → BrandConfig for O(1) middleware lookup */
const domainMap = new Map();
brands.forEach((brand) => {
  const allDomains = [brand.domain, ...(brand.domains ?? [])];
  allDomains.forEach((d) => domainMap.set(d.toLowerCase(), brand));
});

/**
 * Resolve a brand from a hostname.
 * Falls back to euroConfig for unknown domains (useful in local dev).
 */
export function getBrandByDomain(hostname) {
  const host = hostname.split(":")[0].toLowerCase(); // strip port
  return domainMap.get(host) ?? euroConfig;
}

/**
 * Resolve a brand by its short id (e.g. "euro", "ok", "my").
 */
export function getBrandById(id) {
  return brands.find((b) => b.id === id);
}

export { brands };
