import { getBrand } from "@/lib/brand-resolver";

export default async function robots() {
  const brand = await getBrand();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/", "/admin/"],
    },
    sitemap: `${brand.content.canonicalBase}/sitemap.xml`,
    host: brand.content.canonicalBase,
  };
}
