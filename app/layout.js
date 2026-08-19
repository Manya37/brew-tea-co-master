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

export const metadata = {
  title: "PureLeaf Extracts — India's Green Tea Raw Material Supplier",
  description:
    "Premium high-polyphenol Camellia sinensis raw material for extract manufacturers, nutraceuticals, pharma, and cosmetics. One fixed rate. All-year supply.",
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
