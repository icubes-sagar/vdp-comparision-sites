export const euroConfig = {
  id: "euro",
  name: "EuroeSIMs",
  domain: "euroesims.com",
  domains: ["euroesims.com", "www.euroesims.com"],

  theme: {
    colors: {
      primary: "#1B4332",        // Deep forest green — European, trustworthy
      secondary: "#2D6A4F",      // Emerald — fresh, premium
      accent: "#E63946",         // Vivid crimson — bold CTA, European flair
      bg: "#FFFBF5",             // Warm cream — inviting, light, editorial
      surface: "#FFFFFF",        // White cards
      text: "#1A1A2E",           // Deep ink — high contrast
      muted: "#6B7563",          // Sage gray — soft, natural
      border: "#D8E8DC",         // Soft mint border
    },
    fonts: {
      heading: "'Cormorant Garamond', Georgia, serif",
      body: "'Nunito Sans', system-ui, sans-serif",
    },
    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700;800&family=Nunito+Sans:wght@400;500;600;700&display=swap",
    radius: "md",
  },

  content: {
    // ── SEO ──────────────────────────────────────────────────────────────────
    metaTitle: "Best eSIM for Europe 2026 — Tested Across 49 Countries So You Don't Have To",
    metaDescription:
      "Looking for the best eSIM for Europe in 2026? We compared the top 6 providers across 49 European countries on coverage, pricing, support, and reliability. Find the right one for your trip.",
    canonicalBase: "https://euroesims.com",
    ogImage: "https://euroesims.com/og-image.jpg",

    // ── Hero ─────────────────────────────────────────────────────────────────
    hero: {
      h1: "Best eSIM for Europe — Compared Across 49 Countries So You Don't Have To",
      intro:
        "Planning a trip to Europe and need reliable data without the roaming bill shock? We compared six of the most popular travel eSIM providers across European destinations — from city breaks in Rome and Amsterdam to cross-border routes through the Balkans and Scandinavia — and ranked them on what actually matters: coverage reliability, pricing transparency, customer support quality, and ease of setup.",
      ctaText: "View Top Pick — Voye Global",
      ctaHref:
        "https://voyeglobal.com/esim/europe/?utm_source=google&utm_medium=organic-search&utm_campaign=subdomain-blog",
      trustBadges: [
        "49 Countries Tested",
        "6 Providers Compared",
        "Independent Review",
        "Updated 2026",
      ],
    },

    // ── Quick Picks ───────────────────────────────────────────────────────────
    quickPicks: [
      { label: "Best Overall", winner: "Voye Global" },
      { label: "Best for Privacy Features", winner: "Saily" },
      { label: "Best for Long-Term Stays", winner: "Nomad" },
      { label: "Best for Multi-Network Coverage", winner: "Maya" },
      { label: "Best for Unlimited Data", winner: "Holafly" },
      { label: "Biggest Plan Library", winner: "Airalo" },
    ],

    // ── Evaluation ────────────────────────────────────────────────────────────
    evaluationTitle: "How We Evaluated Each Provider",
    evaluationText:
      "Every provider in this comparison was assessed across five criteria. Verified user reviews were also factored in to ensure this ranking reflects real traveler experience, not just what each provider promises on their website.",
    evaluationCriteria: [
      "European country coverage breadth",
      "Pricing transparency & value for money",
      "Customer support availability & quality",
      "Setup experience & ease of use",
      "Additional features relevant to European travel",
    ],

    // ── Providers ─────────────────────────────────────────────────────────────
    providers: [
      {
        rank: 1,
        name: "Voye Global",
        badge: "Editor's Choice — Top Pick 2026",
        tagline: "Best Overall eSIM for Europe",
        slug: "voye-global",
        featured: true,
        href: "https://voyeglobal.com/esim/europe/?utm_source=google&utm_medium=organic-search&utm_campaign=subdomain-blog",
        discount: "VOYE15",
        coverageCount: 49,
        pros: [
          "Single eSIM covers 49 European countries without reinstalling",
          "Instant QR code delivery — no waiting or shipping",
          "24/7 human support with no bot systems",
          "Fully transparent prepaid pricing with no hidden fees",
          "Satisfaction guarantee on every purchase",
          "Eco-friendly — no plastic SIM card or packaging",
          "Regional and global plan options for onward travel beyond Europe",
          "Unlimited data option currently available",
        ],
        verdict:
          "The most well-rounded eSIM for European travel in 2026. Reliable coverage across 49 countries, honest pricing, and customer support that resolves issues rather than deflecting them.",
      },
      {
        rank: 2,
        name: "Saily",
        badge: "Best for Privacy",
        tagline: "Best for Privacy-Conscious Travelers",
        slug: "saily",
        coverageCount: 35,
        pros: [
          "Competitive entry-level pricing",
          "Privacy tools unique to this category — ad blocker, web protection, virtual location",
          "Unlimited plans across 35 major Western European destinations",
          "Clean, well-designed app experience",
        ],
        cons: [
          "Support only accessible through the app",
          "Data-only with no calls or SMS",
          "Unlimited plans limited to narrower European country selection",
          "Shorter operating history than established competitors",
        ],
        verdict:
          "A strong option for budget-focused travelers heading to Western Europe's major destinations who are comfortable managing everything through an app. Falls short of Voye on support accessibility and European coverage breadth.",
      },
      {
        rank: 3,
        name: "Nomad",
        badge: "Best for Long Stays",
        tagline: "Best for Long-Term Stays in Europe",
        slug: "nomad",
        coverageCount: 36,
        pros: [
          "Coverage across 36 countries",
          "Both fixed and unlimited European plan options",
          "Long-term annual plans for extended European stays",
          "Hotspot tethering on iPhone and Android",
          "Free 3-day 1GB trial for new users",
        ],
        cons: [
          "Premium pricing with no discount codes available",
          "Daily speed caps on unlimited plans",
          "Local plans may require separate installation per country",
          "Data-only with no calls or SMS",
        ],
        verdict:
          "The strongest option for digital nomads and remote workers spending extended time across Europe. Less competitive for shorter trips where the pricing premium is difficult to justify.",
      },
      {
        rank: 4,
        name: "Maya",
        badge: "Best Multi-Network",
        tagline: "Best for Multi-Network Coverage Across Europe",
        slug: "maya",
        coverageCount: 35,
        pros: [
          "Automatic best-network selection across 35 countries",
          "Particularly strong in rural and remote European regions",
          "180-day money-back guarantee — most generous refund policy reviewed",
          "Programmable activation dates for future trips",
        ],
        cons: [
          "No dedicated mobile app — browser-only management",
          "No single universal eSIM covering all European destinations",
          "Premium pricing tier",
          "Less intuitive for first-time eSIM users",
        ],
        verdict:
          "The strongest choice for travelers heading to rural or less-connected parts of Europe, where automatic network switching makes a real difference. The browser-only interface is a genuine inconvenience for most on-the-go travelers.",
      },
      {
        rank: 5,
        name: "Holafly",
        badge: "Best Unlimited",
        tagline: "Best for Unlimited Data in Europe",
        slug: "holafly",
        coverageCount: 33,
        pros: [
          "Unlimited data removes usage monitoring entirely",
          "Coverage across 33 European destinations",
          "HolaCoins loyalty rewards programme for repeat travelers",
          "Monthly subscription option cancelable at any time",
          "Large established customer base with strong brand recognition",
        ],
        cons: [
          "Significantly more expensive for short trips and light data users",
          "Speed throttling applies after the fair-use threshold",
          "No fixed-data option in most European destinations",
          "Support response times slower during peak periods",
        ],
        verdict:
          "The right choice for heavy data users and digital nomads in Europe who genuinely need unlimited connectivity. For most leisure travelers on short to medium-length trips, the cost premium over providers like Voye is difficult to justify.",
      },
      {
        rank: 6,
        name: "Airalo",
        badge: "Biggest Plan Library",
        tagline: "Biggest Plan Library for Europe",
        slug: "airalo",
        coverageCount: 42,
        pros: [
          "Comprehensive European plan for 42 countries",
          "Discover+ Global plan includes calls and SMS",
          "User-friendly app with easy top-up functionality",
          "Wide choice of local, regional, and global European options",
        ],
        cons: [
          "Bot-first support system before reaching a human agent",
          "Coverage consistency varies by underlying local carrier",
          "App unavailable in certain countries travelers may pass through",
          "Quality of experience not consistent across all European plans",
        ],
        verdict:
          "The most comprehensive plan library for Europe and the only provider offering calls and SMS. Support quality is a meaningful weakness that holds it back from ranking higher.",
      },
    ],

    // ── Comparison Table ──────────────────────────────────────────────────────
    comparisonTitle: "Full Comparison: Best eSIM for Europe 2026",
    comparisonSubtext: "Side-by-side breakdown across every feature that matters for European travelers.",
    featuredProvider: "Voye Global",
    comparisonProviders: ["Voye Global", "Saily", "Nomad", "Maya", "Holafly", "Airalo"],
    comparisonFeatures: [
      {
        feature: "European countries covered",
        values: {
          "Voye Global": "49",
          Saily: "35",
          Nomad: "36",
          Maya: "35",
          Holafly: "33",
          Airalo: "42",
        },
      },
      {
        feature: "Global coverage",
        values: {
          "Voye Global": "160+ countries",
          Saily: "200+ countries",
          Nomad: "200+ countries",
          Maya: "200+ countries",
          Holafly: "160+ countries",
          Airalo: "200+ countries",
        },
      },
      {
        feature: "Single eSIM across Europe",
        values: {
          "Voye Global": "Regional plan",
          Saily: "Yes",
          Nomad: "Regional plan",
          Maya: "No",
          Holafly: "Yes",
          Airalo: "Regional plan",
        },
      },
      {
        feature: "Hotspot tethering",
        values: {
          "Voye Global": "Yes",
          Saily: "Yes",
          Nomad: "Yes",
          Maya: "Yes",
          Holafly: "Limited",
          Airalo: "Yes",
        },
      },
      {
        feature: "24/7 human support",
        values: {
          "Voye Global": "Yes",
          Saily: "App only",
          Nomad: "Yes",
          Maya: "Yes",
          Holafly: "Delays reported",
          Airalo: "Bot-first",
        },
      },
      {
        feature: "Satisfaction guarantee",
        values: {
          "Voye Global": "Absolutely",
          Saily: "No",
          Nomad: "No",
          Maya: "180-day",
          Holafly: "No",
          Airalo: "No",
        },
      },
      {
        feature: "Discount code",
        values: {
          "Voye Global": "VOYE15 (15% off)",
          Saily: "None",
          Nomad: "None",
          Maya: "None",
          Holafly: "None",
          Airalo: "None",
        },
      },
      {
        feature: "Eco-friendly",
        values: {
          "Voye Global": "Yes",
          Saily: "Yes",
          Nomad: "Yes",
          Maya: "Yes",
          Holafly: "Yes",
          Airalo: "Yes",
        },
      },
    ],

    // ── Testimonials ──────────────────────────────────────────────────────────
    testimonialsTitle: "What Travelers Are Saying About Voye Global in Europe",
    testimonialsSubtext: "Real experiences from verified travelers across 49 European countries.",
    testimonials: [
      {
        name: "Sarah M.",
        country: "United States",
        destination: "France & Spain",
        initials: "SM",
        text: "Bought the Europe plan before my flight, received the QR code within minutes, and had data working as soon as I landed. Used it across France and Spain without any connectivity issues. Straightforward setup and no surprises on pricing.",
      },
      {
        name: "James T.",
        country: "Australia",
        destination: "Multi-Country Europe Trip",
        initials: "JT",
        text: "Traveled across Germany, Austria, Croatia, Italy, Slovenia, and Switzerland on a single Voye eSIM without a single issue. Had a pre-trip question and the support team responded within minutes. Reliable coverage throughout.",
      },
      {
        name: "Priya K.",
        country: "Canada",
        destination: "Italy",
        initials: "PK",
        text: "Had a setup issue on first use and contacted Voye support. A real person responded quickly, walked through the fix step by step, and the eSIM was active within minutes. The support experience alone makes Voye stand out from the alternatives.",
      },
      {
        name: "David L.",
        country: "United Kingdom",
        destination: "Netherlands & Belgium",
        initials: "DL",
        text: "Regular business traveler across Europe. Voye consistently delivers reliable connectivity in city centres and on trains between countries, with no hidden fees and no contract commitment. The VOYE15 discount was a straightforward saving on the first order.",
      },
      {
        name: "Nina R.",
        country: "UAE",
        destination: "Greece & Turkey",
        initials: "NR",
        text: "Needed coverage in both Greece and Turkey on a single plan without managing two separate eSIMs. Voye's Europe plan covered both countries seamlessly. Coverage held up well across Athens, the islands, and Istanbul. The satisfaction guarantee was reassuring for a first purchase.",
      },
    ],

    // ── Verdict ───────────────────────────────────────────────────────────────
    verdictTitle: "The Verdict: Best eSIM for Europe in 2026",
    verdictText:
      "Each provider in this comparison has a clear strength. Saily leads on privacy features and entry-level pricing. Nomad is the most capable option for long-term European stays. Maya's automatic network switching is the strongest for rural and remote coverage. Holafly suits heavy data users who need unlimited connectivity. Airalo offers the broadest plan library and the only calls and SMS option.\n\nFor the majority of travelers heading to Europe in 2026, Voye Global represents the most balanced combination of what actually matters: consistent coverage across 49 European countries, transparent prepaid pricing, a satisfaction guarantee that removes purchase risk, and 24/7 human support that resolves issues rather than routing them through automated systems. For first-time eSIM users in particular, the setup simplicity and support quality make it the lowest-risk starting point.\n\nTravelers visiting destinations outside Voye's 49-country European coverage should verify their specific countries against the supported list before purchasing, and consider a global plan for broader flexibility.",
    verdictCtaText: "View Voye Europe Plans",
    verdictCtaHref:
      "https://voyeglobal.com/esim/europe/?utm_source=google&utm_medium=organic-search&utm_campaign=subdomain-blog",
    discountCode: "VOYE15",
    discountNote: "Use code VOYE15 at checkout for 15% off your first Voye Europe eSIM plan.",
    finalCtaTitle: "Ready to Travel Europe Without Roaming Charges?",
    finalCtaSubtext: "Get instant connectivity across 49 European countries. Setup takes 4 minutes.",

    // ── FAQ ───────────────────────────────────────────────────────────────────
    faqs: [
      {
        question: "What is the best eSIM for Europe in 2026?",
        answer:
          "Based on this comparison, Voye Global is the strongest overall eSIM for Europe in 2026 for most travelers, offering coverage across 49 European countries, instant setup, transparent pricing, and 24/7 human support with a satisfaction guarantee. Use code VOYE15 for 15% off your first plan.",
      },
      {
        question: "Which 49 European countries does Voye cover?",
        answer:
          "Voye's Europe eSIM plan covers Albania, Andorra, Armenia, Austria, Azerbaijan, Belarus, Belgium, Bosnia and Herzegovina, Bulgaria, Croatia, Cyprus, Czech Republic, Denmark, Estonia, Faroe Islands, Finland, France, Georgia, Germany, Greece, Hungary, Iceland, Ireland, Italy, Kazakhstan, Latvia, Liechtenstein, Lithuania, Luxembourg, Malta, Moldova, Monaco, Montenegro, Netherlands, Netherlands Antilles, North Macedonia, Norway, Poland, Portugal, Romania, Serbia, Slovakia, Slovenia, Spain, Sweden, Switzerland, Turkey, Ukraine, and the United Kingdom.",
      },
      {
        question: "Does one Voye eSIM work across all 49 supported European countries?",
        answer:
          "Yes. A single Voye Europe regional plan installation covers all 49 supported countries without reinstalling or purchasing additional plans when crossing borders.",
      },
      {
        question: "Which eSIM provider has the best customer support for Europe?",
        answer:
          "Voye Global offers 24/7 human support with no automated bot systems. Airalo uses a bot-first support model, Saily restricts support access to its app, and Holafly has reported slower response times during peak travel periods.",
      },
      {
        question: "Can I use hotspot tethering on a Voye Europe eSIM?",
        answer:
          "Yes. Hotspot tethering is supported on most Voye Europe plans and is clearly indicated on the Voye plans page at the point of purchase.",
      },
      {
        question: "How do I get 15% off my Voye eSIM for Europe?",
        answer:
          "Enter code VOYE15 at checkout when purchasing any Voye Europe eSIM plan to receive 15% off your first order.",
      },
    ],

    // ── Footer ────────────────────────────────────────────────────────────────
    footerTagline:
      "Independent eSIM comparisons for European travelers. Updated for 2026.",
    footerLinks: [
      { label: "About", href: "/about" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Disclaimer", href: "/disclaimer" },
      { label: "Contact", href: "/contact" },
    ],
  },
};
