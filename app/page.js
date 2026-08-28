import Link from "next/link";
import Footer from "@/components/Footer";
import CompoundsSection from "@/components/CompoundsSection";
import HeroCarousel from "@/components/HeroCarousel";
import WaitlistForm from "@/components/WaitlistForm";

const marqueeItems = [
  "Green Tea Leaf",
  "EGCG 10–15%",
  "Total Polyphenols 35%",
  "L-Theanine Supplier",
  "Black Tea Waste",
  "Theaflavins 3–6%",
  "Thearubigins 10–30%",
  "Nutraceuticals",
  "Pharma & Ayurvedic",
  "Cosmetics",
  "Sports Nutrition",
  "Food & Beverage",
  "Fixed Annual Rate",
  "All-Year Supply",
];

const compounds = [
  {
    source: "Green Tea Leaf",
    sourceTone: "green",
    name: "Total Polyphenols",
    desc: "The complete family of antioxidant molecules. The higher the polyphenol %, the more potent and valuable the finished extract.",
    bars: [
      { label: "Dry leaf content", value: "25–35%", width: "70%" },
      { label: "Std. extract grade", value: "50–60%", width: "90%" },
      { label: "Pharma grade", value: "90–98%", width: "99%" },
    ],
    tags: ["Nutraceuticals", "Cosmetics", "Pharma"],
  },
  {
    source: "Green Tea Leaf",
    sourceTone: "green",
    name: "EGCG",
    desc: "Epigallocatechin Gallate — the most potent antioxidant in nature. 200× more powerful than Vitamin E. The benchmark molecule for every premium GTE product.",
    bars: [
      { label: "Dry leaf content", value: "10–15%", width: "45%" },
      { label: "Std. extract grade", value: "45–50%", width: "75%" },
      { label: "Pharma grade", value: "90–98%", width: "95%" },
    ],
    tags: ["Fat Burners", "Anti-Aging", "Liver Protection"],
  },
  {
    source: "Green Tea Leaf",
    sourceTone: "green",
    name: "L-Theanine",
    desc: "A rare amino acid found almost exclusively in tea. Creates calm, focused energy. Among the fastest-growing supplement ingredients globally — used in nootropics, sleep, and stress products.",
    bars: [
      { label: "Standard leaf", value: "0.1–0.5%", width: "20%" },
      { label: "Shade-grown leaf", value: "1–3%", width: "55%" },
    ],
    tags: ["Nootropics", "Sleep Supplements", "Stress Relief", "Energy Drinks"],
  },
  {
    source: "Green Tea Leaf",
    sourceTone: "green",
    name: "Caffeine",
    desc: "Naturally present at 2–4%. Sports nutrition brands want it for energy. Pharma and children's supplement manufacturers require decaffeinated raw material — we can advise on leaf grades for each requirement.",
    bars: [
      { label: "Young flush leaf", value: "3–4%", width: "80%" },
      { label: "Mature leaf", value: "1–2%", width: "50%" },
    ],
    tags: ["Sports Nutrition", "Energy Drinks", "Decaf Grade Available"],
  },
  {
    source: "Black Tea Waste",
    sourceTone: "black",
    name: "Theaflavins",
    desc: "Bright amber antioxidant pigments unique to black tea. Formed during oxidation of catechins. Clinically studied for cardiovascular support, LDL reduction, and anti-inflammatory effects.",
    bars: [
      { label: "Black tea waste", value: "3–6%", width: "40%" },
      { label: "Concentrated extract", value: "20–40%", width: "80%" },
    ],
    tags: ["Heart Health", "Anti-Inflammatory", "Cholesterol Mgmt"],
  },
  {
    source: "Black Tea Waste",
    sourceTone: "black",
    name: "Thearubigins",
    desc: "The most abundant compound in black tea extract by weight. Deep reddish-brown polymers with antioxidant and gut-health properties. Increasingly studied for prebiotic effects and metabolic health.",
    bars: [{ label: "Black tea waste", value: "10–30%", width: "65%" }],
    tags: ["Gut Health", "Antioxidant Blends", "Metabolic Health"],
  },
];

const whyUs = [
  {
    number: "01",
    title: "Monopoly Supply Advantage",
    desc: "We hold a dominant supply position in premium green tea leaf sourcing — giving our partners price stability no other supplier can match.",
  },
  {
    number: "02",
    title: "One Fixed Rate, All Year",
    desc: "No seasonal price spikes. We offer annual supply contracts at a single fixed rate — so your input costs are predictable and your margins are protected.",
  },
  {
    number: "03",
    title: "Both Green & Black Tea",
    desc: "Green tea leaf for EGCG, polyphenols and L-Theanine. Black tea waste for theaflavins and thearubigins. One supplier for your entire tea extract portfolio.",
  },
  {
    number: "04",
    title: "COA on Every Batch",
    desc: "Full Certificate of Analysis available for every shipment — including moisture, polyphenol content, EGCG %, heavy metals, pesticide residue, and microbial count.",
  },
];

const supplyItems = [
  {
    icon: "calendar_month",
    title: "Annual Supply Contracts",
    desc: "Lock in your raw material requirement for 12 months at one agreed rate. No renegotiation mid-year. No surprise shortages.",
  },
  {
    icon: "inventory_2",
    title: "Flexible Volumes",
    desc: "From trial quantities to bulk tonnage. We work with your extraction capacity and scale with you as your business grows.",
  },
  {
    icon: "biotech",
    title: "Grade Customisation",
    desc: "First-flush young leaf for maximum EGCG. Mature leaf for lower caffeine. Shade-grown for L-Theanine. We match the leaf grade to your formulation requirement.",
  },
  {
    icon: "handshake",
    title: "Direct Manufacturer Pricing",
    desc: "No distributor margin. No agent fees. You deal directly with us, and you get pricing that reflects that.",
  },
];

const waitlistTags = [
  "EGCG Extraction",
  "Polyphenol Extract",
  "L-Theanine Source",
  "Theaflavins",
  "Thearubigins",
  "Black Tea Waste",
  "Decaf Green Tea",
  "Botanical API",
  "Phytoextract Raw Material",
  "Camellia Sinensis",
];

const heroStats = [
  { num: "35%", label: "Max polyphenols in leaf" },
  { num: "15%", label: "EGCG per dry weight" },
  { num: "365", label: "Days supply guarantee" },
  { num: "2", label: "Raw materials available" },
];

export default function HomePage() {
  const marqueeContent = [...marqueeItems, ...marqueeItems];

  return (
    <>
      {/* Hero — carousel background + text overlay */}
      <section className="relative w-full min-h-[75vh] sm:min-h-[80vh] flex flex-col justify-center px-4 sm:px-grid-margin pt-32 sm:pt-36 md:pt-44 pb-12 md:pb-16 overflow-hidden">
        <HeroCarousel />
        <div className="relative z-10 max-w-[1440px] mx-auto w-full">
          <p className="font-label-bold text-label-bold text-primary uppercase tracking-wider mb-4 sm:mb-6 flex items-center gap-3 text-xs sm:text-sm">
            <span className="w-8 sm:w-10 h-px bg-primary shrink-0" />
            India&apos;s Premier Raw Material Supplier
          </p>
          <h1 className="font-display-xl text-display-xl text-on-surface mb-4 sm:mb-6 max-w-3xl">
            The leaf behind <em className="text-primary not-italic font-extrabold">every</em> great green tea extract.
          </h1>
          <p className="font-body-lg text-base sm:text-body-lg text-on-surface-variant max-w-xl mb-8 sm:mb-10">
            We supply premium, high-polyphenol Camellia sinensis raw material to extract manufacturers, nutraceutical formulators, pharma companies, and cosmetic brands across India and globally. One fixed rate. All-year supply. No interruptions.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 items-stretch sm:items-center mb-10 sm:mb-12">
            <Link
              href="#waitlist"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 bg-inverse-surface text-inverse-on-surface font-label-bold text-label-bold rounded-lg hover:bg-primary hover:text-on-primary transition-colors shadow-lg text-sm sm:text-base"
            >
              Join the Waitlist
            </Link>
            <Link
              href="#compounds"
              className="inline-flex items-center justify-center sm:justify-start text-primary font-label-bold text-label-bold hover:text-on-surface transition-colors group text-sm sm:text-base py-2"
            >
              View compound specifications
              <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-4xl">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <div className="font-headline-lg text-headline-lg text-on-surface">{stat.num}</div>
                <div className="font-label-bold text-label-bold text-on-surface-variant uppercase mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-surface-container border-y border-surface-variant overflow-hidden py-4">
        <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-0">
          {marqueeContent.map((item, i) => (
            <span key={`${item}-${i}`} className="flex items-center shrink-0">
              <span className="font-label-bold text-label-bold text-on-surface-variant uppercase px-6 whitespace-nowrap">
                {item}
              </span>
              <span className="text-primary font-bold">·</span>
            </span>
          ))}
        </div>
      </div>

      <CompoundsSection compounds={compounds} />

      {/* Why Us */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-grid-margin page-section">
        <p className="font-label-bold text-label-bold text-primary uppercase tracking-wider mb-4">
          Why Choose Us
        </p>
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-8 md:mb-10 max-w-3xl">
          What makes our raw material different.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {whyUs.map((item) => (
            <div key={item.number}>
              <div className="font-display-xl text-5xl font-extrabold text-surface-container-highest mb-4">
                {item.number}
              </div>
              <h3 className="font-label-bold text-label-bold text-on-surface mb-2">
                {item.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Supply Model — side-by-side on xl; section height follows left column only */}
      <section
        id="supply"
        className="bg-surface-container-low pt-10 pb-10 md:pt-14 md:pb-14 px-4 sm:px-grid-margin"
      >
        <div className="max-w-[1440px] mx-auto xl:relative flex flex-col">
          <div className="order-2 xl:order-none xl:max-w-[calc(50%-1.25rem)]">
            <p className="font-label-bold text-label-bold text-primary uppercase tracking-wider mb-4">
              Supply Model
            </p>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">
              Built for manufacturers. Not for middlemen.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 md:mb-10">
              We supply directly to extract manufacturers and large-scale formulators. Our model is designed around your production calendar, not ours.
            </p>
            <div className="space-y-5 md:space-y-6">
              {supplyItems.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 pb-5 md:pb-6 border-b border-surface-variant last:border-0 last:pb-0"
                >
                  <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-primary-container/30 text-on-primary-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-xl">{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-label-bold text-label-bold text-on-surface mb-1">
                      {item.title}
                    </h3>
                    <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 xl:order-none mb-8 xl:mb-0 xl:absolute xl:top-0 xl:right-0 xl:w-[calc(50%-1.25rem)]">
            <div className="xl:sticky xl:top-28 bg-primary rounded-2xl md:rounded-3xl p-6 sm:p-8 text-on-primary shadow-2xl">
              <span className="inline-flex items-center gap-2 bg-on-primary/15 px-4 py-2 rounded-full font-label-bold text-label-bold text-xs uppercase mb-5">
                <span className="material-symbols-outlined text-sm">bolt</span>
                Limited Availability
              </span>
              <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-3">
                2025–2026 supply slots are filling up.
              </h3>
              <p className="font-body-md text-sm sm:text-body-md text-on-primary/90 mb-6">
                We partner with a select number of manufacturers each year. Current partners are secured through next year.
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-1 h-2 bg-on-primary/20 rounded-full overflow-hidden">
                  <div className="h-full w-[78%] bg-primary-container rounded-full" />
                </div>
                <span className="font-label-bold text-label-bold text-on-primary whitespace-nowrap text-sm">
                  78% allocated
                </span>
              </div>
              <Link
                href="#waitlist"
                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 bg-on-primary text-inverse-on-surface font-label-bold text-label-bold rounded-lg hover:bg-inverse-surface transition-colors"
              >
                Secure Your Slot
                <span className="material-symbols-outlined ml-2">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section
        id="waitlist"
        className="max-w-[1440px] mx-auto px-4 sm:px-grid-margin page-section-tight text-center"
      >
        <p className="font-label-bold text-label-bold text-primary uppercase tracking-wider mb-4">
          Join the Waitlist
        </p>
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4 max-w-2xl mx-auto">
          Be first in line when new supply slots open.
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto mb-8 md:mb-10">
          Tell us what you need. We&apos;ll reach out directly when allocation becomes available for your sector and volume requirement.
        </p>

        <WaitlistForm />
        <p className="font-body-md text-sm text-on-surface-variant mb-8 md:mb-10">
          We respond within 48 hours. No spam. No middlemen. Direct conversation with our supply team.
        </p>

        <div className="flex flex-wrap justify-center gap-2">
          {waitlistTags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full border border-outline-variant font-label-bold text-xs text-on-surface-variant uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
