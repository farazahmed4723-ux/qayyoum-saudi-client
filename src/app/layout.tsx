import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0F172A",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://qayyoum-saudi.com"),
  title: "صيانة مكيفات وغسالات وثلاجات بالرياض | مؤسسة للتبريد والتكييف حي الزهرة",
  description:
    "أفضل فني صيانة مكيفات، ثلاجات، غسالات أوتوماتيك وعادية، وأفران غاز بالرياض حي الزهرة. خدمة فحص منزلي، استلام وتوصيل مجاناً، وضمان 25 يوماً. اتصل الآن: 0571881029 / 0597942690.",
  keywords: [
    "صيانة غسالات بالرياض",
    "صيانة مكيفات سبليت الرياض",
    "تصليح ثلاجات حي الزهرة",
    "فني صيانة كروت الكترونية",
    "صيانة افران غاز الرياض",
    "مؤسسة للتبريد والتكييف",
    "تصليح اجهزة منزلية الرياض",
    "ضمان صيانة 25 يوم",
    "استلام وتوصيل مجاني اجهزة الرياض",
  ],
  authors: [{ name: "مؤسسة للتبريد والتكييف وصيانة الأجهزة المنزلية" }],
  openGraph: {
    title: "صيانة مكيفات وغسالات وثلاجات بالرياض | مؤسسة للتبريد والتكييف حي الزهرة",
    description:
      "مركز صيانة معتمد بالرياض حي الزهرة. إصلاح مكيفات، ثلاجات، غسالات، وكروت إلكترونية مع استلام وتوصيل مجاني وضمان 25 يوماً.",
    locale: "ar_SA",
    type: "website",
    images: [
      {
        url: "/images/shop-front.jpg",
        width: 1200,
        height: 630,
        alt: "مؤسسة للتبريد والتكييف وصيانة الأجهزة المنزلية بالرياض",
      },
    ],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HVACBusiness"],
    "@id": "https://maps.app.goo.gl/T19ncfinjYBDfpck9?g_st=ac",
    name: "مؤسسة للتبريد والتكييف وصيانة الأجهزة المنزلية",
    alternateName: "مؤسسة خالد بن سعد بن سعود العصيمي - للتبريد والتكييف",
    description:
      "أفضل فني صيانة مكيفات، ثلاجات، غسالات أوتوماتيك وعادية، وأفران غاز بالرياض حي الزهرة. خدمة فحص منزلي، استلام وتوصيل مجاناً، وضمان 25 يوماً معتمد.",
    image: "/images/shop-front.jpg",
    telephone: ["+966571881029", "+966597942690"],
    priceRange: "SAR",
    address: {
      "@type": "PostalAddress",
      streetAddress: "6969 لبيد بن ربيعة، حي الزهرة",
      addressLocality: "الرياض",
      postalCode: "12987",
      addressCountry: "SA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 24.5936,
      longitude: 46.6854,
    },
    url: "https://maps.app.goo.gl/T19ncfinjYBDfpck9?g_st=ac",
    hasMap: "https://maps.app.goo.gl/T19ncfinjYBDfpck9?g_st=ac",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "23:00",
      },
    ],
    areaServed: [
      {
        "@type": "City",
        name: "Riyadh",
      },
    ],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 24.5936,
        longitude: 46.6854,
      },
      geoRadius: "50000",
    },
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "صيانة غسالات أوتوماتيك وعادية",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "صيانة مكيفات سبليت وشباك وتعبئة فريون",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "صيانة ثلاجات وفريزر وكشف كمبروسر",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "برمجة وإصلاح كروت إلكترونية وإنفرتر",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "صيانة وتأهيل أفران ومواقد الغاز",
        },
      },
    ],
  };

  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased font-sans selection:bg-amber-400 selection:text-slate-950 pb-20 md:pb-0">
        {children}
      </body>
    </html>
  );
}
