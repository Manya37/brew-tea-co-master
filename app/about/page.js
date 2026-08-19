import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Us | PureLeaf Extracts",
  description:
    "India's premier green tea raw material supplier. High-polyphenol Camellia sinensis for extract manufacturers.",
};

export default function AboutPage() {
  return (
    <>
      <main className="pt-20 sm:pt-24">
        <section className="relative w-full min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center bg-surface-container-low overflow-hidden px-4 sm:px-grid-margin py-12 md:py-16">
          <div className="absolute inset-0 z-0">
            <Image
              src="/about-us.png"
              alt="Premium green tea leaf raw material."
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/60 to-background/40" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h1 className="font-display-xl text-display-xl text-on-surface mb-6">
              The Leaf Behind Every Great Extract.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
              PureLeaf Extracts supplies premium, high-polyphenol Camellia sinensis raw material to extract manufacturers, nutraceuticals, pharma, and cosmetics — across India and globally.
            </p>
            <Link
              href="/extracts"
              className="inline-block bg-inverse-surface text-inverse-on-surface px-8 py-4 rounded-full font-label-bold text-label-bold hover:bg-primary transition-colors shadow-[0_12px_32px_rgba(0,0,0,0.08)]"
            >
              View Extract Specifications
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
