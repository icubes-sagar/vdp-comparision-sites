export const asiaConfig = {
  id: "asia",
  name: "AsiaDataCompare",
  domain: "asiadatacompare.com",
  domains: ["asiadatacompare.com", "www.asiadatacompare.com"],

  theme: {
    colors: {
      primary: "#0A0F1E",
      secondary: "#1A2744",
      accent: "#F97316",
      bg: "#060B18",
      surface: "#0E1729",
      text: "#F1F5F9",
      muted: "#94A3B8",
      border: "#1E2D4A",
    },
    fonts: {
      heading: "'Space Grotesk', system-ui, sans-serif",
      body: "'Inter', system-ui, sans-serif",
    },
    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap",
    radius: "lg",
  },

  content: {
    metaTitle: "Best eSIM for Asia 2026 — Tested Across 18 Countries So You Don't Have To",
    metaDescription:
      "Looking for the best eSIM for Asia? We compared Voye Global, Airalo, Holafly, Saily, Nomad, and Maya across 18 Asian countries on coverage, pricing, support, and reliability. Get 15% off with code VOYE15.",
    canonicalBase: "https://asiadatacompare.com",
    ogImage: "https://asiadatacompare.com/og-image.jpg",

    hero: {
      h1: "Best eSIM for Asia 2026 — Compared Across 18 Countries So You Don't Have To",
      intro:
        "A two-week Asian itinerary might take you through Japan, Cambodia, Singapore, and Bali on a single ticket. Staying connected across all of it used to mean juggling local SIM cards at every border — now it takes four minutes and one QR code. We compared six of the most popular travel eSIM providers across 18 Asian destinations and ranked them on what actually matters: regional coverage, pricing transparency, support quality, setup ease, and additional features.",
      ctaText: "View Top Pick — Voye Global",
      ctaHref:
        "https://voyeglobal.com/esim/asia/?utm_source=google&utm_medium=organic-search&utm_campaign=asiadatacompare",
      trustBadges: [
        "18 Countries Tested",
        "6 Providers Compared",
        "Independent Review",
        "Updated 2026",
      ],
    },

    quickPicks: [
      { label: "Best Overall", winner: "Voye Global" },
      { label: "Best for Budget Fixed Data", winner: "Airalo" },
      { label: "Best for Unlimited Data", winner: "Holafly" },
      { label: "Best for Privacy & Security", winner: "Saily" },
      { label: "Best for Long-Term Stays", winner: "Nomad" },
      { label: "Best Multi-Network Coverage", winner: "Maya" },
    ],

    evaluationTitle: "How We Evaluated Each Provider",
    evaluationText:
      "Every provider in this comparison was assessed across six criteria. Verified user reviews were also factored in to ensure this ranking reflects real traveler experience, not just what each provider promises on their website.",
    evaluationCriteria: [
      "Asian country coverage breadth",
      "Pricing transparency & value per dollar",
      "Customer support availability & quality",
      "Setup experience & ease of use",
      "Additional features relevant to Asian travel",
      "Value per GB across common Asia routes",
    ],

    providers: [
      {
        rank: 1,
        name: "Voye Global",
        badge: "Editor's Choice — Top Pick 2026",
        tagline: "Best Overall eSIM for Asia",
        slug: "voye-global",
        featured: true,
        href: "https://voyeglobal.com/esim/asia/?utm_source=google&utm_medium=organic-search&utm_campaign=asiadatacompare",
        discount: "VOYE15",
        coverageCount: 18,
        pros: [
          "Single eSIM covers 18 Asian countries including Australia & New Zealand",
          "24/7 human support via live chat, email, and WhatsApp — multi-lingual",
          "Instant QR code delivery to email — no app required",
          "Fully transparent prepaid pricing with no hidden fees",
          "Satisfaction guarantee on every purchase",
          "Hotspot tethering fully supported without restriction",
          "Top-up mid-trip without reinstalling your eSIM",
          "Cancel anytime with no commitment",
          "Eco-friendly — no plastic SIM card or packaging",
          "Refer-and-earn: $5 per referral for you and your contact",
        ],
        cons: [
          "No monthly subscription option",
          "No plans shorter than 7 days",
          "No free trial",
        ],
        verdict:
          "The most complete Asia eSIM option for travelers who want wide coverage, honest pricing, and genuine human support across multiple channels — including WhatsApp. The strongest all-round pick for multi-country Asian itineraries in 2026.",
      },
      {
        rank: 2,
        name: "Saily",
        badge: "Best for Privacy",
        tagline: "Best for Privacy-Conscious Travelers",
        slug: "saily",
        coverageCount: 10,
        pros: [
          "Built-in ad blocker, malicious URL blocking, and virtual location tools",
          "Bundled with Nord Security products including NordVPN",
          "Airport lounge access, flight delay passes, and fast-track security perks",
          "Student discount available",
          "Competitive pricing from $4.99",
          "Reinstallable eSIM on the same device",
          "8% back as credits on every purchase",
          "Monthly auto-renew subscription available",
        ],
        cons: [
          "Support accessible through the app only",
          "5GB/day throttle on unlimited plans",
          "No standalone Asia-only plan — bundled with Oceania",
          "No cancel anytime on subscription plans",
          "Data-only — no calls or SMS",
        ],
        verdict:
          "The strongest pick for privacy-conscious travelers who want security tools bundled with their connectivity. Airport perks are unique in this category. Less suited to travelers who need support outside of the app environment.",
      },
      {
        rank: 3,
        name: "Nomad",
        badge: "Best for Long Stays",
        tagline: "Best for Long-Term Stays in Asia",
        slug: "nomad",
        coverageCount: 14,
        pros: [
          "Annual plans available: 50GB over 365 days",
          "Free 1GB trial for new users",
          "Short-term plans under 7 days available",
          "Hotspot tethering on iOS and Android",
          "Multiple sub-regional Asia options",
          "Student discount available",
          "Referral programme: $5 off for both parties, up to 5 referrals",
        ],
        cons: [
          "No 24/7 human support",
          "No cancel anytime on current plans",
          "No global plan covering Asia + other regions in one",
          "Mixed reviews on support response and refund handling",
          "Data-only — no calls or SMS",
        ],
        verdict:
          "The right pick for long-term travelers and digital nomads who need annual plan flexibility across Asia. The absence of 24/7 support is a meaningful trade-off for a region where connectivity issues can arise at inconvenient hours.",
      },
      {
        rank: 4,
        name: "Maya",
        badge: "Best Multi-Network",
        tagline: "Best for Multi-Network Coverage Across Asia",
        slug: "maya",
        coverageCount: 13,
        pros: [
          "Access to 400+ global carrier networks with automatic best-network selection",
          "Particularly strong in Japan, South Korea, India, and Thailand",
          "180-day money-back guarantee — most generous refund policy in this comparison",
          "Programmable activation dates for future trips",
          "Unrestricted hotspot on all prepaid plans",
          "Cancel anytime",
          "Transparent pricing with no hidden costs",
        ],
        cons: [
          "Covers only 13 Asian countries",
          "Browser-only management — no dedicated mobile app",
          "Weaker performance in rural Southeast Asia",
          "No WhatsApp or email support",
          "No free trial",
          "Data-only — no calls or SMS",
        ],
        verdict:
          "The strongest reliability pick for travelers who need automatic network switching across urban Asian destinations. The browser-only interface is a genuine practical limitation, and rural Southeast Asia coverage lags behind the top picks.",
      },
      {
        rank: 5,
        name: "Holafly",
        badge: "Best Unlimited",
        tagline: "Best for Unlimited Data in Asia",
        slug: "holafly",
        coverageCount: 16,
        pros: [
          "Unlimited data removes the need to monitor usage entirely",
          "WhatsApp support — one of only two providers in this comparison offering it",
          "Coverage across 16 Asian destinations",
          "HolaCoins loyalty rewards programme for repeat travelers",
          "Monthly subscription with cancel anytime",
          "15M+ customers with strong brand recognition",
        ],
        cons: [
          "Throttle threshold is not publicly disclosed",
          "Hotspot capped at 1GB per day",
          "Support response times slower during peak travel periods",
          "Covers 16 countries vs Voye's 18",
          "More expensive for light and moderate data users",
          "Data-only standard plans — no calls or SMS",
        ],
        verdict:
          "The best pick for heavy data users who need unlimited connectivity and want WhatsApp support. Budget travelers and moderate users will find better value with providers like Voye or Airalo.",
      },
      {
        rank: 6,
        name: "Airalo",
        badge: "Best Budget Fixed Data",
        tagline: "Best for Budget Travelers in Asia",
        slug: "airalo",
        coverageCount: 18,
        pros: [
          "World's first and largest eSIM marketplace — 18 Asian countries covered",
          "Free 1GB trial available in select regions",
          "Short-term plans under 7 days available",
          "Calls and SMS available on Discover+ Global plan (unique in this comparison)",
          "Competitive budget pricing with frequent promotions",
          "App available in 53 languages",
          "Student discount and referral credits available",
          "Cancel anytime",
        ],
        cons: [
          "Bot-first support system before reaching a human agent",
          "No WhatsApp or email direct support",
          "\"Unlimited\" plans capped at 3GB/day then throttled to 1000kbps",
          "Carrier quality inconsistent across Asian destinations",
          "Calls and SMS not available on regional Asia plan — global plan only",
        ],
        verdict:
          "The go-to option for budget travelers and those who want the widest plan selection across Asia. The bot-first support model is the main meaningful limitation — for travelers who may need real help in the field, Voye's multi-channel human support is a stronger choice.",
      },
    ],

    comparisonProviders: ["Voye Global", "Saily", "Nomad", "Maya", "Holafly", "Airalo"],
    comparisonTitle: "Full Comparison: Best eSIM for Asia 2026",
    comparisonSubtext: "Side-by-side breakdown across every feature that matters for Asian travelers.",
    featuredProvider: "Voye Global",
    comparisonFeatures: [
      {
        feature: "Asia plan country coverage",
        values: {
          "Voye Global": "18 countries",
          Saily: "10+ countries",
          Nomad: "14 countries",
          Maya: "13 countries",
          Holafly: "16 countries",
          Airalo: "18 countries",
        },
      },
      {
        feature: "Pricing model",
        values: {
          "Voye Global": "Prepaid fixed",
          Saily: "Fixed + capped unlimited",
          Nomad: "Fixed + capped unlimited",
          Maya: "Prepaid + unlimited",
          Holafly: "Unlimited only",
          Airalo: "Fixed + capped unlimited",
        },
      },
      {
        feature: "Single eSIM across region",
        values: {
          "Voye Global": "Yes",
          Saily: "Yes",
          Nomad: "Yes",
          Maya: "Yes",
          Holafly: "Yes",
          Airalo: "Yes",
        },
      },
      {
        feature: "Hotspot tethering",
        values: {
          "Voye Global": "Yes — unrestricted",
          Saily: "Yes",
          Nomad: "Yes",
          Maya: "Yes — unrestricted",
          Holafly: "Limited 1GB/day",
          Airalo: "Yes",
        },
      },
      {
        feature: "24/7 live chat support",
        values: {
          "Voye Global": "Yes — multi-lingual",
          Saily: "Yes",
          Nomad: "No",
          Maya: "Yes",
          Holafly: "Yes",
          Airalo: "Yes",
        },
      },
      {
        feature: "Email support",
        values: {
          "Voye Global": "Yes — multi-lingual",
          Saily: "Yes",
          Nomad: "No",
          Maya: "Yes",
          Holafly: "Yes",
          Airalo: "Yes",
        },
      },
      {
        feature: "WhatsApp support",
        values: {
          "Voye Global": "Yes — multi-lingual",
          Saily: "No",
          Nomad: "No",
          Maya: "No",
          Holafly: "Yes",
          Airalo: "No",
        },
      },
      {
        feature: "Cancel anytime",
        values: {
          "Voye Global": "Yes",
          Saily: "No",
          Nomad: "No",
          Maya: "Yes",
          Holafly: "Yes",
          Airalo: "Yes",
        },
      },
      {
        feature: "eSIM reinstall same device",
        values: {
          "Voye Global": "Yes",
          Saily: "Yes",
          Nomad: "Yes",
          Maya: "Yes",
          Holafly: "Yes",
          Airalo: "Yes",
        },
      },
      {
        feature: "Airport lounge / travel perks",
        values: {
          "Voye Global": "No",
          Saily: "Yes",
          Nomad: "No",
          Maya: "No",
          Holafly: "No",
          Airalo: "No",
        },
      },
      {
        feature: "Loyalty / referral programme",
        values: {
          "Voye Global": "Refer & Earn — $5/referral",
          Saily: "8% back as credits",
          Nomad: "$5 off both (up to 5)",
          Maya: "No",
          Holafly: "HolaCoins",
          Airalo: "Referral credits",
        },
      },
      {
        feature: "Satisfaction guarantee",
        values: {
          "Voye Global": "Yes — full guarantee",
          Saily: "No",
          Nomad: "No",
          Maya: "Yes — 180 days",
          Holafly: "Conditions apply",
          Airalo: "30-day",
        },
      },
      {
        feature: "Discount code",
        values: {
          "Voye Global": "VOYE15 — 15% off",
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

    testimonials: [
      {
        name: "James Whitfield",
        country: "United Kingdom",
        destination: "Japan, South Korea & Taiwan",
        initials: "JW",
        text: "Used the Voye Asia eSIM across Japan, South Korea, and Taiwan on a three-week trip. Coverage was consistent throughout — no dropouts in Tokyo, Seoul, or Taipei. Had one question mid-trip and WhatsApp support replied within minutes. A real person, not a bot.",
      },
      {
        name: "Sarah Mitchell",
        country: "Australia",
        destination: "Indonesia, Singapore & Malaysia",
        initials: "SM",
        text: "Coverage held up in Bali, Singapore, and Kuala Lumpur without a single dropout. QR code setup took four minutes — scanned it before boarding and had data working on arrival. No app needed, no contracts, no surprises.",
      },
      {
        name: "Tom Gallagher",
        country: "United States",
        destination: "China",
        initials: "TG",
        text: "China is where most foreign eSIMs fall apart. Voye worked throughout — solid data across Shanghai, Xi'an, and Chengdu. The WhatsApp support confirmed network details before I even landed, which set my expectations correctly from the start.",
      },
      {
        name: "Robert Chandler",
        country: "Canada",
        destination: "Hong Kong, Macau & Philippines",
        initials: "RC",
        text: "The Voye Asia plan handles Hong Kong, Macau, and the Philippines on one eSIM — no reinstalling when crossing. The Data Pool option for our team of four was a feature none of the other providers offered. Support responded to every query within the hour.",
      },
      {
        name: "Laura Bennett",
        country: "New Zealand",
        destination: "India",
        initials: "LB",
        text: "Voye held up across Mumbai, Delhi, and rural Rajasthan. No throttling surprises, no hidden caps. The support team confirmed network compatibility details before I departed — the kind of proactive help that makes a real difference when you're traveling solo.",
      },
    ],

    testimonialsTitle: "What Travelers Are Saying About Voye Global in Asia",
    testimonialsSubtext: "Real experiences from verified travelers across 18 Asian countries.",

    verdictTitle: "Which Asia eSIM Plan is Best for You?",
    verdictText:
      "Each provider in this comparison has a clear strength. Saily leads on privacy tools and airport perks — a unique combination in this category. Nomad is the strongest option for long-term travelers and digital nomads who need annual plan flexibility. Maya's 180-day money-back guarantee and automatic multi-network switching make it the most reliable choice for travelers heading to Japan, South Korea, India, and Thailand. Holafly suits heavy data users who want unlimited connectivity and WhatsApp support. Airalo offers the widest plan selection and the only calls-and-SMS option in the comparison.\n\nFor the majority of travelers heading to Asia in 2026 — especially those on multi-country itineraries — Voye Global represents the most balanced combination of what actually matters: 18-country coverage including Australia and New Zealand, multi-lingual 24/7 human support across live chat, email, and WhatsApp, a satisfaction guarantee, transparent prepaid pricing, cancel anytime, and eco-friendly delivery. No bots. No throttling surprises. No hidden fees.\n\nUse code VOYE15 for 15% off your first Voye Asia eSIM plan.",
    verdictCtaText: "View Voye Asia Plans",
    verdictCtaHref:
      "https://voyeglobal.com/esim/asia/?utm_source=google&utm_medium=organic-search&utm_campaign=asiadatacompare",
    discountCode: "VOYE15",
    discountNote: "Use code VOYE15 at checkout for 15% off your first Voye Asia eSIM plan.",

    finalCtaTitle: "Ready to Travel Asia Without Roaming Charges?",
    finalCtaSubtext: "Get instant connectivity across 18 Asian countries. Setup takes 4 minutes.",

    faqs: [
      {
        question: "What is the best eSIM for Asia in 2026?",
        answer:
          "Based on this comparison, Voye Global is the strongest overall eSIM for Asia in 2026 for most travelers, offering coverage across 18 Asian countries, instant QR code delivery, multi-lingual 24/7 human support via live chat, email, and WhatsApp, and a satisfaction guarantee. Use code VOYE15 for 15% off your first plan.",
      },
      {
        question: "Which 18 countries does the Voye Global Asia eSIM cover?",
        answer:
          "Voye's Asia eSIM plan covers Australia, Cambodia, China, Hong Kong, India, Indonesia, Japan, Macau, Malaysia, New Zealand, Pakistan, Philippines, Singapore, South Korea, Sri Lanka, Taiwan, Thailand, and Vietnam.",
      },
      {
        question: "Does the Voye Asia eSIM work in China?",
        answer:
          "Yes. Voye's Asia eSIM provides reliable data connectivity across China, including major cities such as Shanghai, Beijing, and Chengdu. It is one of the few providers in this comparison confirmed to work reliably in China.",
      },
      {
        question: "Can I use the Voye Asia eSIM as a hotspot?",
        answer:
          "Yes. Hotspot tethering is fully supported on Voye Asia plans without restriction. You can share your data connection with other devices throughout your trip.",
      },
      {
        question: "Does the Voye Asia eSIM support calls and texts?",
        answer:
          "Voye Asia plans are data-only. Voice calls and SMS are not included. You can make calls and send messages using data-based apps such as WhatsApp, FaceTime, and iMessage over your eSIM data connection.",
      },
      {
        question: "How do I set up and activate the Voye Asia eSIM?",
        answer:
          "After purchase, Voye sends a QR code to your email instantly. Open your device's cellular settings, select 'Add eSIM', and scan the QR code. No app download is required. Your eSIM activates automatically when you arrive in a covered country.",
      },
      {
        question: "Is there a discount code for the Voye Asia eSIM?",
        answer:
          "Yes. Enter code VOYE15 at checkout when purchasing any Voye Asia eSIM plan to receive 15% off your first order.",
      },
      {
        question: "Can I top up my Voye Asia eSIM mid-trip?",
        answer:
          "Yes. Voye supports mid-trip top-ups without requiring you to reinstall your eSIM or purchase a new QR code. Your existing eSIM profile is retained and additional data is added to the same plan.",
      },
    ],

    footerTagline:
      "Independent eSIM comparisons for Asian travelers. Updated for 2026.",
    footerLinks: [
      { label: "About", href: "/about" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Disclaimer", href: "/disclaimer" },
      { label: "Contact", href: "/contact" },
    ],
  },
};
