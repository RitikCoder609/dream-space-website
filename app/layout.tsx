import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dreamspaceinfra.org"),

  title: {
    default:
      "Dream Space Infra Developers | Real Estate Developers in Patna",
    template: "%s | Dream Space Infra Developers",
  },

  description:
    "Dream Space Infra Developers (OPC) Pvt Ltd is a real estate and infrastructure development company in Patna, Bihar, offering residential projects, property development and real estate solutions.",

  applicationName: "Dream Space Infra Developers",

  authors: [
    {
      name: "Dream Space Infra Developers",
    },
  ],

  creator: "Dream Space Infra Developers",
  publisher: "Dream Space Infra Developers",

  alternates: {
    canonical: "https://dreamspaceinfra.org",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://dreamspaceinfra.org",
    siteName: "Dream Space Infra Developers",
    title:
      "Dream Space Infra Developers | Real Estate Developers in Patna",
    description:
      "Dream Space Infra Developers — real estate and infrastructure development company in Patna, Bihar.",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Dream Space Infra Developers | Real Estate Developers in Patna",
    description:
      "Dream Space Infra Developers — real estate and infrastructure development company in Patna, Bihar.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Dream Space Infra Developers",
  url: "https://dreamspaceinfra.org",
  description:
    "Dream Space Infra Developers (OPC) Pvt Ltd is a real estate and infrastructure development company in Patna, Bihar, offering residential projects, property development and real estate solutions.",
  areaServed: {
    "@type": "City",
    name: "Patna",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Patna",
    addressRegion: "Bihar",
    addressCountry: "IN",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${manrope.variable} font-sans`}>
        {children}

         <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(jsonLd),
    }}
  />
      </body>
    </html>
  );
}
