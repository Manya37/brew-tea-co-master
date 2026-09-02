import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About Densitea | 45+ Years Tea Export from Amritsar, Punjab",
  description:
    "Family-owned tea export house since Punjab. Assam CTC, Darjeeling, herbal wellness blends & extract-grade green tea leaf. KCBL — trusted across 12+ global markets.",
  path: "/about",
  keywords: [
    "tea export Amritsar",
    "Assam CTC bulk supplier",
    "Darjeeling tea export",
    "KCBL tea company",
    "Indian tea wholesaler",
    "herbal tea manufacturer India",
  ],
});

const stats = [
  { num: "45+", label: "Years in tea", icon: "history" },
  { num: "3rd", label: "Generation", icon: "family_history" },
  { num: "12+", label: "Export markets", icon: "public" },
  { num: "365", label: "Days supply", icon: "calendar_month" },
];

const exportMarkets = [
  "Dubai",
  "Canada",
  "Japan",
  "Korea",
  "Egypt",
  "Turkey",
  "UK",
  "Saudi Arabia",
  "USA",
  "Europe",
];

const values = [
  {
    icon: "eco",
    title: "Natural Integrity",
    desc: "Loose-leaf teas that preserve the leaf's character — richer flavour, deeper aroma, smoother texture.",
  },
  {
    icon: "verified_user",
    title: "Patience & Trust",
    desc: "From a handshake in Amritsar to global partnerships — consistency and reliability every season.",
  },
  {
    icon: "science",
    title: "Free of Harmful Chemicals",
    desc: "Handpicked from the finest gardens of Assam and the Himalayas, crafted for discerning buyers.",
  },
];

const portfolioCategories = [
  {
    icon: "spa",
    title: "Herbal & Wellness",
    items: ["Rose Tea", "Chamomile", "Hibiscus Roselle", "Detox Tea", "Wake Up Tea", "Honey Rooibos"],
  },
  {
    icon: "local_cafe",
    title: "Signature Chai",
    items: ["Kadak Masala Chai", "Mango Masala", "Dark Chocolate Chai", "Cardamom Elaichi", "Paan Chai"],
  },
  {
    icon: "agriculture",
    title: "Premium Bulk Teas",
    items: ["Assam CTC (all grades)", "Darjeeling (all flushes)", "Orthodox teas"],
  },
  {
    icon: "inventory_2",
    title: "Custom Solutions",
    items: ["Pyramid tea bags", "Custom jars", "Private label", "Herbal blends"],
  },
];

const bestSellers = [
  {
    name: "Blue Moon",
    tag: "Floral & Visual",
    desc: "Green tea with butterfly pea flower and lavender — antioxidant-rich, smooth, and calming.",
  },
  {
    name: "Kashmiri Kahwa",
    tag: "Himalayan Classic",
    desc: "Green tea with saffron, almonds, and spices — golden, warm, and aromatic.",
  },
  {
    name: "Chamomile Tea",
    tag: "Evening Favourite",
    desc: "Hand-picked chamomile blossoms for a light, soothing cup before rest.",
  },
  {
    name: "Kadak Masala Chai",
    tag: "Best Seller",
    desc: "Bold Assam CTC with cardamom, cinnamon, cloves, and ginger — unmistakably kadak.",
  },
];

const bulkHighlights = [
  {
    icon: "terrain",
    title: "Assam Teas",
    body: "Renowned for rich colour, malty flavour, and brisk strength — sourced directly from the gardens. Grades from BOP and BP to Dust, plus orthodox TGFOP and FTGFOP1.",
    detail: "Ideal for breakfast blends, milk teas, and flavoured tea bases.",
  },
  {
    icon: "landscape",
    title: "Darjeeling Teas",
    body: "Handpicked from misty Himalayan slopes — first flush (floral & brisk), second flush (muscatel & full-bodied), and autumnal flush (smooth & mellow).",
    detail: "Perfect for premium loose-leaf, specialty retailers, and export gift collections.",
  },
  {
    icon: "biotech",
    title: "Extract-Grade Raw Material",
    body: "High-polyphenol green tea leaf and black tea waste for extract manufacturers — EGCG, L-Theanine, theaflavins, and consistent year-round supply.",
    detail: "Explore compound specs and allocation via PureLeaf Extracts.",
  },
];

export default function AboutPage() {
  return (
    <>
      <main>
        {/* Hero */}
        <section className="relative w-full overflow-hidden">
          <div className="absolute inset-0 z-0 min-h-[78vh] sm:min-h-[82vh]">
            <Image
              src="/about-us.png"
              alt="Premium Indian tea — Densitea export portfolio"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center justify-center min-h-[78vh] sm:min-h-[82vh] px-4 sm:px-grid-margin pt-28 sm:pt-32 pb-20 sm:pb-24">
            <h1 className="font-display-xl text-display-xl text-white mb-5 sm:mb-6 leading-[1.08] drop-shadow-md">
              Taste the Legacy.
              <span className="block text-primary mt-2 sm:mt-3">Sip Something Superior.</span>
            </h1>

            <p className="font-body-lg text-body-lg text-white/90 mb-5 max-w-2xl mx-auto leading-relaxed">
              Crafted for those who know the difference. From a family tea business in Amritsar to a third-generation
              export house — authentic Indian teas for buyers worldwide.
            </p>

            <p className="font-label-bold text-xs uppercase tracking-wider text-primary mb-8 sm:mb-10">
              KCBL · Amritsar · Est. 45+ Years
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full sm:w-auto">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-8 py-3.5 rounded-xl font-label-bold text-label-bold hover:bg-primary/90 transition-colors shadow-lg"
              >
                Export Enquiries
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
              <Link
                href="/extracts"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-label-bold text-label-bold border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 transition-colors backdrop-blur-sm"
              >
                Extract Specs
              </Link>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="relative py-12 md:py-16 px-4 sm:px-grid-margin bg-surface-container-low">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-outline-variant to-transparent" />
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              <div className="lg:col-span-5 lg:sticky lg:top-28">
                <p className="font-label-bold text-label-bold text-primary uppercase tracking-wider mb-3 flex items-center gap-2">
                  <span className="w-8 h-px bg-primary" />
                  Our Story
                </p>
                <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4 leading-tight">
                  Rooted in Punjab.
                  <span className="block text-on-surface-variant">Trusted across export markets.</span>
                </h2>
                <blockquote className="border-l-4 border-primary pl-5 py-1 my-5">
                  <p className="font-body-lg text-on-surface italic leading-relaxed">
                    &ldquo;Back then, a handshake was the deal. Today we send samples across the world — and the process
                    still runs on the same thing: patience and trust.&rdquo;
                  </p>
                </blockquote>
                <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden shadow-md hidden lg:block">
                  <Image
                    src="/second.png"
                    alt="Tea gardens of Assam"
                    fill
                    className="object-cover"
                    sizes="400px"
                  />
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <div className="bg-surface rounded-2xl p-5 sm:p-6 border border-surface-container-highest shadow-sm">
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                    Our tea journey began <strong className="text-on-surface font-semibold">45 years ago</strong>, when
                    our grandfather laid the foundation of a small but passionate tea business in Punjab. For more than
                    two decades, we have specialized in sourcing and blending premium black tea, CTC tea, and green tea
                    — ensuring consistent quality and year-round supply.
                  </p>
                </div>

                <div className="bg-surface rounded-2xl p-5 sm:p-6 border border-surface-container-highest shadow-sm">
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                    This legacy continues today under the{" "}
                    <strong className="text-on-surface font-semibold">third generation</strong>, bringing authentic
                    Indian teas to discerning buyers worldwide. Alongside our signature flavoured teas, we proudly offer
                    Assam CTC teas — from strong, brisk grades to mellow, full-bodied blends — as well as classic
                    Darjeeling teas celebrated for their delicate aroma and muscatel flavour.
                  </p>
                </div>

                <div className="bg-primary-container/40 rounded-2xl p-5 sm:p-6 border border-primary/20">
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-3xl text-primary shrink-0 icon-fill">emoji_food_beverage</span>
                    <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                      Our loose-leaf teas preserve the leaf&apos;s natural integrity, unlocking a{" "}
                      <strong>richer flavour, deeper aroma, and smoother texture</strong> than ordinary tea bags.
                      Handpicked from the finest gardens of Assam, each brew delivers pure freshness — while we supply
                      high-polyphenol raw material for the extract industry through PureLeaf Extracts.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-10 pt-10 border-t border-outline-variant/50">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-surface rounded-2xl p-4 sm:p-5 border border-surface-container-highest text-center lg:text-left group hover:border-primary/40 hover:shadow-md transition-all"
                >
                  <span className="material-symbols-outlined text-2xl text-primary mb-3 icon-fill">{stat.icon}</span>
                  <div className="font-headline-lg text-headline-lg text-on-surface">{stat.num}</div>
                  <div className="font-label-bold text-label-bold text-on-surface-variant uppercase mt-1 text-xs">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-8 md:py-10 px-4 sm:px-grid-margin max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {values.map((value) => (
              <div
                key={value.title}
                className="relative p-5 sm:p-6 rounded-2xl bg-surface border border-surface-container-highest overflow-hidden group hover:shadow-lg transition-shadow"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-[4rem] -mr-4 -mt-4 group-hover:bg-primary/20 transition-colors" />
                <span className="material-symbols-outlined text-2xl text-primary mb-3 relative z-10 icon-fill">
                  {value.icon}
                </span>
                <h3 className="font-headline-md text-xl font-bold text-on-surface mb-2 relative z-10">{value.title}</h3>
                <p className="font-body-md text-on-surface-variant leading-relaxed relative z-10">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Export markets marquee */}
        <section className="py-5 bg-inverse-surface text-inverse-on-surface overflow-hidden">
          <p className="text-center font-label-bold text-xs uppercase tracking-[0.2em] text-primary mb-4 px-4">
            Exporting to discerning buyers worldwide
          </p>
          <div className="flex w-max animate-[marquee_24s_linear_infinite] gap-0">
            {[...exportMarkets, ...exportMarkets].map((market, i) => (
              <span key={`${market}-${i}`} className="flex items-center shrink-0">
                <span className="font-label-bold text-sm uppercase tracking-wider px-8 whitespace-nowrap text-inverse-on-surface/90">
                  {market}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              </span>
            ))}
          </div>
        </section>

        {/* Portfolio */}
        <section className="py-10 md:py-14 px-4 sm:px-grid-margin bg-surface-container">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
              <div className="max-w-xl">
                <p className="font-label-bold text-label-bold text-primary uppercase tracking-wider mb-2">
                  2026 Product Catalog
                </p>
                <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
                  Inside the export portfolio
                </h2>
              </div>
              <p className="font-body-md text-on-surface-variant max-w-md md:text-right">
                From wellness infusions and signature chai to bulk Assam, Darjeeling, and private-label packaging.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              {portfolioCategories.map((cat, index) => (
                <div
                  key={cat.title}
                  className="bg-surface rounded-2xl p-5 sm:p-6 border border-surface-container-highest hover:border-primary/30 hover:shadow-lg transition-all flex flex-col h-full"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-primary text-on-primary w-11 h-11 rounded-xl flex items-center justify-center">
                      <span className="material-symbols-outlined icon-fill">{cat.icon}</span>
                    </div>
                    <span className="font-headline-lg text-3xl text-outline-variant/60 font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-headline-md text-lg font-bold text-on-surface mb-3">{cat.title}</h3>
                  <ul className="space-y-2 mt-auto">
                    {cat.items.map((item) => (
                      <li
                        key={item}
                        className="font-body-md text-sm text-on-surface-variant flex items-start gap-2"
                      >
                        <span className="material-symbols-outlined text-primary text-base shrink-0 mt-0.5">check_circle</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Premium Origins */}
        <section className="py-10 md:py-14 px-4 sm:px-grid-margin max-w-[1440px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <p className="font-label-bold text-label-bold text-primary uppercase tracking-wider mb-2">Premium Origins</p>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
              Assam strength. Darjeeling character. Extract-grade precision.
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5">
            {bulkHighlights.map((item) => (
              <div
                key={item.title}
                className="group relative bg-surface-container-low rounded-2xl p-5 sm:p-6 border border-surface-container-highest hover:bg-surface hover:shadow-xl transition-all"
              >
                <span className="material-symbols-outlined text-3xl text-primary mb-4 icon-fill">{item.icon}</span>
                <h3 className="font-headline-md text-xl font-bold text-on-surface mb-2">{item.title}</h3>
                <p className="font-body-md text-on-surface-variant leading-relaxed mb-3">{item.body}</p>
                <p className="font-label-bold text-xs uppercase tracking-wider text-primary">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Best Sellers */}
        <section className="py-10 md:py-14 px-4 sm:px-grid-margin bg-secondary text-on-secondary relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-on-secondary" />
            <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-on-secondary" />
          </div>
          <div className="max-w-[1440px] mx-auto relative z-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
              <div>
                <p className="font-label-bold text-label-bold text-primary uppercase tracking-wider mb-2">Best Sellers</p>
                <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg">Signature blends buyers return for</h2>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-label-bold text-sm text-secondary-fixed hover:text-on-secondary transition-colors uppercase tracking-wider"
              >
                Request full catalog
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {bestSellers.map((product, i) => (
                <div
                  key={product.name}
                  className={`rounded-2xl p-5 border transition-all hover:scale-[1.02] ${
                    i === 3
                      ? "bg-primary text-on-primary border-primary sm:col-span-2 lg:col-span-1"
                      : "bg-on-secondary/10 border-on-secondary/15 backdrop-blur-sm"
                  }`}
                >
                  <span
                    className={`inline-block font-label-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full mb-3 ${
                      i === 3 ? "bg-on-primary/20 text-on-primary" : "bg-on-secondary/15 text-secondary-fixed"
                    }`}
                  >
                    {product.tag}
                  </span>
                  <h3 className="font-headline-md text-lg font-bold mb-2">{product.name}</h3>
                  <p
                    className={`font-body-md text-sm leading-relaxed ${
                      i === 3 ? "text-on-primary/90" : "text-secondary-fixed-dim"
                    }`}
                  >
                    {product.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company + CTA */}
        <section className="py-10 md:py-14 px-4 sm:px-grid-margin">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-grid-gutter">
            <div className="lg:col-span-5 bg-surface-container rounded-2xl p-6 md:p-8 border border-surface-container-highest">
              <p className="font-label-bold text-label-bold text-primary uppercase tracking-wider mb-3">Densitea · KCBL</p>
              <h2 className="font-headline-lg text-2xl md:text-3xl font-bold text-on-surface mb-4 leading-tight">
                Kishan Chand Brij Lal
              </h2>
              <address className="not-italic space-y-3 mb-6">
                <p className="font-body-md text-on-surface-variant flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary shrink-0">location_on</span>
                  Katra Ahluwalia, Amritsar, Punjab, India
                </p>
                <p className="font-body-md flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary shrink-0">mail</span>
                  <a href="mailto:hello@densitea.in" className="text-on-surface hover:text-primary transition-colors">
                    hello@densitea.in
                  </a>
                </p>
                <p className="font-body-md flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary shrink-0">call</span>
                  <a href="tel:+919915050493" className="text-on-surface hover:text-primary transition-colors">
                    +91 99150 50493
                  </a>
                </p>
                <p className="font-body-md text-sm text-on-surface-variant flex items-center gap-3 pt-2">
                  <span className="material-symbols-outlined text-primary shrink-0 text-lg">verified</span>
                  FSSAI No: 12125001000052
                </p>
              </address>
            </div>

            <div className="lg:col-span-7 relative rounded-2xl overflow-hidden min-h-[280px] flex items-end">
              <Image src="/third.png" alt="Indian tea export" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 60vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="relative z-10 p-6 md:p-8 w-full">
                <h3 className="font-headline-lg text-2xl md:text-3xl text-white mb-2">Ready to partner?</h3>
                <p className="font-body-md text-white/85 max-w-lg mb-5">
                  Bulk Assam CTC, Darjeeling flushes, private-label blends, pyramid bags, or extract-grade green tea —
                  our team responds within 48 hours.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-on-primary px-7 py-3.5 rounded-xl font-label-bold text-sm hover:bg-primary/90 transition-colors"
                >
                  Get in Touch
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
