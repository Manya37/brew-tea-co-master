import { Inter, Libre_Baskerville } from "next/font/google";
import Navbar from "@/components/Navbar";
import JsonLd from "@/components/JsonLd";
import { SITE_NAME, SITE_URL } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const defaultTitle = "Green Tea Raw Material Supplier India | EGCG & Extract-Grade Leaf";
const defaultDescription =
  "Densitea supplies premium Camellia sinensis raw material for green tea extract, nutraceutical, pharma & cosmetic manufacturers. High EGCG, polyphenols & year-round supply from Amritsar.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${defaultTitle} | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: defaultDescription,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Food & Beverage",
  keywords: [
    "green tea raw material",
    "tea extract supplier India",
    "EGCG supplier",
    "polyphenol tea leaf",
    "Camellia sinensis bulk",
    "nutraceutical tea extract",
    "tea export Amritsar",
    "Densitea",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${defaultTitle} | ${SITE_NAME}`,
    description: defaultDescription,
    images: [
      {
        url: "/og-image.png",
        width: 512,
        height: 512,
        alt: `${SITE_NAME} — premium Indian tea raw material supplier`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${defaultTitle} | ${SITE_NAME}`,
    description: defaultDescription,
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "96x96" },
      { url: "/fav-icon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className="light scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} ${libreBaskerville.variable} bg-background text-on-background font-body-md antialiased min-h-screen`}
      >
        <JsonLd />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
