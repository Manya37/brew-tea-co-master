import { Inter, Libre_Baskerville } from "next/font/google";
import Navbar from "@/components/Navbar";
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

const siteUrl = "https://www.densitea.in";
const title = "Densitea — India's Green Tea Raw Material Supplier";
const description =
  "Premium high-polyphenol Camellia sinensis raw material for extract manufacturers, nutraceuticals, pharma, and cosmetics. One fixed rate. All-year supply.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "96x96" },
      { url: "/fav-icon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Densitea",
    title,
    description,
    images: [
      {
        url: "/og-image.png",
        width: 512,
        height: 512,
        alt: "Densitea logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} ${libreBaskerville.variable} bg-background text-on-background font-body-md antialiased min-h-screen`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
