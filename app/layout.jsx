import { getBrand, buildCanonical, buildOGMeta } from "@/lib/brand-resolver";
import "./globals.css";

export async function generateMetadata() {
  const brand = await getBrand();
  const og = buildOGMeta(brand);

  return {
    title: brand.content.metaTitle,
    description: brand.content.metaDescription,
    metadataBase: new URL(brand.content.canonicalBase),
    alternates: {
      canonical: buildCanonical(brand),
    },
    openGraph: og,
    twitter: {
      card: "summary_large_image",
      title: brand.content.metaTitle,
      description: brand.content.metaDescription,
      images: brand.content.ogImage ? [brand.content.ogImage] : [],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

export default async function RootLayout({ children }) {
  const brand = await getBrand();
  const { colors, fonts, googleFontsUrl, radius } = brand.theme;

  const radiusMap = {
    none: "0px",
    sm: "4px",
    md: "8px",
    lg: "12px",
    full: "9999px",
  };

  const cssVars = `
    --color-primary: ${colors.primary};
    --color-secondary: ${colors.secondary};
    --color-accent: ${colors.accent};
    --color-bg: ${colors.bg};
    --color-surface: ${colors.surface};
    --color-text: ${colors.text};
    --color-muted: ${colors.muted};
    --color-border: ${colors.border};
    --font-heading: ${fonts.heading};
    --font-body: ${fonts.body};
    --radius: ${radiusMap[radius]};
  `.trim();

  return (
    <html lang="en">
      <head>
        {/* Preconnect for Google Fonts performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link href={googleFontsUrl} rel="stylesheet" />

        {/* Inject CSS custom properties for brand theming */}
        <style
          dangerouslySetInnerHTML={{
            __html: `:root { ${cssVars} }`,
          }}
        />
      </head>
      <body
        style={{
          backgroundColor: colors.bg,
          color: colors.text,
          fontFamily: fonts.body,
        }}
      >
        {children}
      </body>
    </html>
  );
}
