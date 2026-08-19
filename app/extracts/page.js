import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

const trustBadges = [
  { icon: "verified", label: "COA on Every Batch" },
  { icon: "calendar_month", label: "Fixed Annual Rate" },
  { icon: "all_inclusive", label: "365-Day Supply" },
  { icon: "biotech", label: "Grade Customisation" },
];

/** Green tea leaf grades — compound levels in dry leaf (our sourcing data) */
const greenTeaNutraceuticalGrades = [
  {
    name: "First-Flush Premium Leaf",
    polyphenols: "25–35%",
    egcg: "10–15%",
    caffeine: "3–4%",
    theanine: "0.1–0.5%",
    note: "Maximum EGCG yield for pharma & high-potency GTE",
  },
  {
    name: "Standard High-Polyphenol Leaf",
    polyphenols: "25–35%",
    egcg: "10–15%",
    caffeine: "2–3%",
    theanine: "0.1–0.5%",
    note: "Nutraceutical, cosmetics & antioxidant formulations",
  },
  {
    name: "Shade-Grown Leaf",
    polyphenols: "20–30%",
    egcg: "8–12%",
    caffeine: "1–2%",
    theanine: "1–3%",
    note: "L-Theanine–forward raw material for nootropics & calm-energy",
  },
  {
    name: "Mature / Low-Caffeine Leaf",
    polyphenols: "20–28%",
    egcg: "8–12%",
    caffeine: "1–2%",
    theanine: "0.1–0.3%",
    note: "Decaf-grade extract feedstock for pharma & children's products",
  },
];

/** Typical finished extract grades achievable from our green tea leaf */
const finishedGreenExtracts = [
  {
    name: "Pharma-Grade Polyphenol Extract",
    polyphenols: "90–98%",
    egcg: "—",
    caffeine: "<1%",
    theanine: "—",
  },
  {
    name: "Standard Polyphenol Extract (50–60%)",
    polyphenols: "50–60%",
    egcg: "45–50%",
    caffeine: "<2%",
    theanine: "—",
  },
  {
    name: "High-EGCG Extract (45–50% EGCG)",
    polyphenols: "95%+",
    egcg: "45–50%",
    caffeine: "<1%",
    theanine: "—",
  },
  {
    name: "Pharma-Grade EGCG (90–98%)",
    polyphenols: "98%+",
    egcg: "90–98%",
    caffeine: "<0.5%",
    theanine: "—",
  },
];

/** Black tea waste — theaflavin & thearubigin source material */
const blackTeaGrades = [
  {
    name: "Black Tea Waste — Standard",
    theaflavins: "3–6%",
    thearubigins: "10–30%",
    polyphenols: "15–25%",
    note: "Primary feedstock for black tea extract & TF concentrates",
  },
  {
    name: "Black Tea Waste — Concentrated Extract Target",
    theaflavins: "20–40%",
    thearubigins: "30–50%",
    polyphenols: "40–60%",
    note: "Typical output range for manufacturers processing our waste grade",
  },
];

const qualityStandards = [
  "Moisture content analysis on every batch",
  "Total polyphenol & EGCG % verification",
  "Heavy metals screening (Pb, Cd, As, Hg)",
  "Pesticide residue panel",
  "Microbial count (TPC, yeast & mould)",
  "Full Certificate of Analysis (COA) per shipment",
];

const applications = [
  "Capsules & tablets",
  "Powder blends",
  "Gummies & soft gels",
  "RTD beverages",
  "Cosmetic serums",
  "Sports nutrition",
  "Pharma & Ayurvedic API",
  "Functional foods",
];

const sectors = [
  {
    icon: "medication",
    name: "Nutraceuticals & Supplements",
    desc: "The single largest consumer of green tea extract globally. EGCG and polyphenols power antioxidant, weight management, and cardiovascular supplement lines.",
    compounds: ["EGCG", "Polyphenols", "L-Theanine"],
  },
  {
    icon: "spa",
    name: "Pharma & Ayurvedic",
    desc: "Botanical APIs for liver protection, cardiovascular, anti-obesity and anti-diabetic formulations. Both modern pharma and classical Ayurvedic manufacturers source GTE as a core ingredient.",
    compounds: ["EGCG", "Polyphenols", "Theaflavins"],
  },
  {
    icon: "face",
    name: "Cosmetics & Skincare",
    desc: "Anti-aging serums, sunscreens, scalp treatments, and acne formulations. EGCG's UV-protective and anti-inflammatory properties make it one of the most sought-after skincare actives.",
    compounds: ["EGCG", "Polyphenols"],
  },
  {
    icon: "local_cafe",
    name: "Food & Beverages",
    desc: "RTD green teas, functional beverages, energy drinks, and natural food preservation. Green tea extract is also used as a clean-label natural antioxidant in edible oils and packaged foods.",
    compounds: ["Polyphenols", "Caffeine", "Thearubigins"],
  },
  {
    icon: "fitness_center",
    name: "Sports Nutrition",
    desc: "Pre-workouts, fat burners, and recovery formulas. The EGCG + caffeine combination is one of the most evidence-backed thermogenic stacks in sports nutrition.",
    compounds: ["EGCG", "Caffeine", "L-Theanine"],
  },
  {
    icon: "pets",
    name: "Pet Food & Oral Care",
    desc: "Natural antioxidant preservation in premium pet food, dental chews for dogs, herbal toothpastes and mouthwashes. Emerging high-growth applications with consistent demand.",
    compounds: ["Polyphenols", "EGCG"],
  },
];

const benefits = [
  "High antioxidant activity from premium polyphenol leaf",
  "Predictable input costs with annual fixed-rate contracts",
  "Single supplier for green leaf + black tea waste",
  "Grade matched to your extraction target (EGCG, TF, L-Theanine)",
];

export const metadata = {
  title: "Green Tea Extracts — Raw Material Grades | PureLeaf Extracts",
  description:
    "Extract-grade green tea leaf and black tea waste raw material. Polyphenol, EGCG, L-Theanine, theaflavin and thearubigin specifications for extract manufacturers.",
};

function SpecTable({ title, subtitle, headers, rows, rowKey = "name" }) {
  return (
    <div className="mb-12 md:mb-16 last:mb-0">
      <h3 className="font-headline-md text-xl md:text-2xl text-on-surface mb-2">{title}</h3>
      {subtitle && (
        <p className="font-body-md text-body-md text-on-surface-variant mb-6 max-w-3xl">
          {subtitle}
        </p>
      )}
      <div className="overflow-x-auto rounded-2xl border border-outline-variant bg-surface shadow-sm">
        <table className="w-full min-w-[640px] text-left border-collapse">
          <thead>
            <tr className="bg-surface-container border-b border-outline-variant">
              {headers.map((h) => (
                <th
                  key={h.key}
                  className="px-4 py-3 md:px-6 md:py-4 font-label-bold text-[11px] md:text-xs uppercase tracking-wider text-on-surface-variant"
                >
                  {h.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row[rowKey]}
                className="border-b border-outline-variant/60 last:border-0 hover:bg-surface-container-low/80 transition-colors"
              >
                {headers.map((h) => (
                  <td
                    key={h.key}
                    className={`px-4 py-3 md:px-6 md:py-4 text-sm md:text-base ${
                      h.key === rowKey
                        ? "font-label-bold text-on-surface"
                        : "text-on-surface-variant font-body-md tabular-nums"
                    }`}
                  >
                    {row[h.key] ?? "—"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function ExtractsPage() {
  return (
    <>
      <main className="w-full max-w-[1440px] mx-auto pt-20 sm:pt-24">
        {/* Hero */}
        <section className="px-4 sm:px-grid-margin page-section grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-grid-gutter items-center min-h-0 md:min-h-[60vh]">
          <div className="flex flex-col items-start gap-5 sm:gap-6">
            <div className="bg-primary-container text-on-primary-container font-label-bold text-label-bold px-4 py-2 rounded-full inline-block text-xs sm:text-sm">
              Extract-Grade Raw Material
            </div>
            <h1 className="font-display-xl text-display-xl text-on-background">
              Green Tea Extracts Start With the Right Leaf.
            </h1>
            <p className="font-body-lg text-base sm:text-body-lg text-on-surface-variant max-w-lg">
              We supply high-polyphenol Camellia sinensis raw material — green tea leaf for EGCG,
              polyphenols and L-Theanine, and black tea waste for theaflavins and thearubigins. One
              fixed rate. All-year allocation for extract manufacturers.
            </p>
            <Link
              href="#specifications"
              className="inline-flex items-center justify-center gap-2 bg-inverse-surface text-inverse-on-surface font-label-bold text-label-bold px-8 py-4 rounded-full hover:bg-primary hover:text-on-primary transition-colors w-full sm:w-auto"
            >
              View specifications
              <span className="material-symbols-outlined text-lg">arrow_downward</span>
            </Link>
          </div>
          <div className="w-full min-h-[240px] sm:min-h-[320px] md:min-h-[480px] rounded-2xl md:rounded-3xl overflow-hidden relative shadow-[0_12px_32px_rgba(0,0,0,0.08)]">
            <Image
              src="/supply.png"
              alt="Premium green tea leaf for extract manufacturing."
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </section>

        {/* Trust badges */}
        <section className="px-4 sm:px-grid-margin pb-8 md:pb-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1440px] mx-auto">
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex flex-col items-center text-center p-5 rounded-2xl bg-primary-container/40 border border-primary/20"
              >
                <span className="material-symbols-outlined text-3xl text-primary mb-2">
                  {badge.icon}
                </span>
                <span className="font-label-bold text-xs sm:text-sm uppercase tracking-wide text-on-surface">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Intro */}
        <section className="px-4 sm:px-grid-margin page-section-tight bg-surface-container-low">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-label-bold text-label-bold text-primary uppercase tracking-wider mb-4">
              PureLeaf Extracts
            </p>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-6">
              Raw material specifications for every major tea-derived extract line.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant text-pretty">
              Every finished green tea extract — whether 50% polyphenol, 98% EGCG, or L-Theanine
              concentrate — begins with leaf grade selection. We supply both green tea leaf and black
              tea waste so extract manufacturers can cover the full catechin and theaflavin spectrum
              from a single Indian source, with COA-backed quality and annual contract pricing.
            </p>
          </div>
        </section>

        {/* Specification tables */}
        <section id="specifications" className="px-4 sm:px-grid-margin page-section">
          <div className="max-w-[1440px] mx-auto">
            <p className="font-label-bold text-label-bold text-primary uppercase tracking-wider mb-4">
              Our Offering
            </p>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-10 md:mb-14">
              Raw material &amp; extract-grade specifications
            </h2>

            <SpecTable
              title="Green Tea Leaf — Nutraceutical, Pharma & Cosmetic Grades"
              subtitle="Compound levels in dry leaf. Select the grade that matches your extraction target."
              rowKey="name"
              headers={[
                { key: "name", label: "Leaf Grade" },
                { key: "polyphenols", label: "Polyphenols" },
                { key: "egcg", label: "EGCG" },
                { key: "caffeine", label: "Caffeine" },
                { key: "theanine", label: "L-Theanine" },
                { key: "note", label: "Application" },
              ]}
              rows={greenTeaNutraceuticalGrades}
            />

            <SpecTable
              title="Typical Finished Extract Grades (from PureLeaf raw material)"
              subtitle="Reference ranges for extract output when processing our high-polyphenol leaf — for manufacturer planning only."
              rowKey="name"
              headers={[
                { key: "name", label: "Extract Type" },
                { key: "polyphenols", label: "Polyphenols" },
                { key: "egcg", label: "EGCG" },
                { key: "caffeine", label: "Caffeine" },
                { key: "theanine", label: "L-Theanine" },
              ]}
              rows={finishedGreenExtracts}
            />

            <SpecTable
              title="Black Tea Waste — Theaflavins & Thearubigins"
              subtitle="Single-source black tea waste for theaflavin-rich extract and cardiovascular health formulations."
              rowKey="name"
              headers={[
                { key: "name", label: "Material / Target" },
                { key: "theaflavins", label: "Theaflavins" },
                { key: "thearubigins", label: "Thearubigins" },
                { key: "polyphenols", label: "Polyphenols" },
                { key: "note", label: "Notes" },
              ]}
              rows={blackTeaGrades}
            />
          </div>
        </section>

        {/* Quality + benefits grid */}
        <section className="px-4 sm:px-grid-margin page-section bg-surface-container">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <p className="font-label-bold text-label-bold text-primary uppercase tracking-wider mb-4">
                Quality Standards
              </p>
              <h2 className="font-headline-md text-2xl md:text-3xl text-on-surface mb-6">
                Every batch documented. Every shipment verified.
              </h2>
              <ul className="space-y-3">
                {qualityStandards.map((item) => (
                  <li key={item} className="flex items-start gap-3 font-body-md text-on-surface-variant">
                    <span className="material-symbols-outlined text-primary text-lg shrink-0 mt-0.5">
                      check_circle
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-surface rounded-2xl p-6 border border-outline-variant">
                <p className="font-label-bold text-label-bold text-primary uppercase tracking-wider mb-3 text-xs">
                  Key Benefits
                </p>
                <ul className="space-y-2">
                  {benefits.map((b) => (
                    <li key={b} className="font-body-md text-sm text-on-surface-variant">
                      • {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-surface rounded-2xl p-6 border border-outline-variant">
                <p className="font-label-bold text-label-bold text-primary uppercase tracking-wider mb-3 text-xs">
                  Applications
                </p>
                <div className="flex flex-wrap gap-2">
                  {applications.map((app) => (
                    <span
                      key={app}
                      className="px-3 py-1.5 rounded-full bg-primary-container/50 font-label-bold text-[10px] uppercase tracking-wide text-on-primary-container"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
              <div className="sm:col-span-2 bg-primary rounded-2xl p-6 md:p-8 text-on-primary">
                <p className="font-label-bold text-label-bold uppercase tracking-wider mb-2 text-xs opacity-80">
                  Compound Coverage
                </p>
                <p className="font-body-md text-sm md:text-base opacity-95 mb-4">
                  Six key compounds from two raw materials: Total Polyphenols, EGCG, L-Theanine,
                  Caffeine, Theaflavins, and Thearubigins — the full tea extract portfolio from one
                  supplier.
                </p>
                <Link
                  href="/#compounds"
                  className="inline-flex items-center gap-2 font-label-bold text-label-bold hover:underline"
                >
                  View compound details on home
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* The PureLeaf Way */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-grid-margin page-section">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-grid-gutter">
            <div className="md:col-span-12 mb-12 text-center">
              <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
                The PureLeaf Way
              </h2>
            </div>

            <div className="md:col-span-8 bg-surface-container rounded-xl overflow-hidden flex flex-col md:flex-row group">
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <span className="inline-block bg-primary-container text-on-primary-container px-3 py-1 rounded-full font-label-bold text-label-bold text-xs mb-4 w-max">
                  Our Focus
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-4">
                  High-Polyphenol Raw Leaf
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  We supply green tea leaf for EGCG, polyphenols, and L-Theanine — and black tea waste for theaflavins and thearubigins. One source for the full spectrum of tea-derived extracts.
                </p>
              </div>
              <div className="md:w-1/2 relative h-64 md:h-auto min-h-[256px]">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrpdfeOcVd6-nMgXy7ObqRwDEJTFW2iNDq62W4EDfmtmcQKyVO4lyGVLgcMrYsEvWvth4WJNwYuMXnBukxLHppw0YjAIVhKO833VW7nG2TRafaTmz8T9xMBD1OSX9PbjSVT5ptUSRdWQ8Z5k_1H3ynfKiXvrdMCyG1ITNlSQ8E37CWHYiunjhV_erc1sbdhkgte8MplZROpWmxCWT_PvHaRPZn0gJO74vxYrVCJZs5GMbbZ8pqHudQ"
                  alt="Close up of high quality green tea leaves."
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="md:col-span-4 bg-tertiary-container rounded-xl p-8 md:p-12 flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined fill text-on-tertiary-container mb-6 text-4xl">
                  visibility
                </span>
                <h3 className="font-headline-md text-headline-md text-on-tertiary-container mb-4">
                  COA on Every Batch
                </h3>
                <p className="font-body-md text-body-md text-on-tertiary-container/80">
                  Full Certificate of Analysis on every shipment — moisture, polyphenol content, EGCG %, heavy metals, pesticide residue, and microbial count.
                </p>
              </div>
            </div>

            <div className="md:col-span-4 bg-primary-container rounded-xl p-8 md:p-12 flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined fill text-on-primary-container mb-6 text-4xl">
                  lock
                </span>
                <h3 className="font-headline-md text-headline-md text-on-primary-container mb-4">
                  One Fixed Rate, All Year
                </h3>
                <p className="font-body-md text-body-md text-on-primary-container/80">
                  No seasonal price spikes. Annual supply contracts at a single fixed rate — so your input costs stay predictable.
                </p>
              </div>
            </div>

            <div className="md:col-span-8 bg-surface-container rounded-xl overflow-hidden relative min-h-[400px] flex items-end p-8 md:p-12 group">
              <div className="absolute inset-0 z-0">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuChQpvRwxYL70fpixCTqWSriqFkProdd2EOnu3M8MugXEVHSy8vMa6BPlqiVST1L_d9ys8LKUZNWVBBlKWUVv9xUq1W4lf3Qx1ilcCHt6luHHrP3Cjh8vkR563L7JBBRD1mX2_kgIsVEixZ1eXYX0zLe_DR4bzuGoI5WWMTBBe9uXAuZF7SOkc8wqoja1CMyqpd4gT9ESFbaWoidKt2McteAxexpi7tGwFpYGuzKDIUg70sTDoeyNCj"
                  alt="Partnership with extract manufacturers."
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
              </div>
              <div className="relative z-10 max-w-lg">
                <h3 className="font-headline-md text-headline-md text-on-surface mb-4">
                  Built for Manufacturers
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  We supply directly to extract manufacturers and large-scale formulators — not middlemen. Our model is built around your production calendar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section id="sectors" className="bg-surface-container page-section px-4 sm:px-grid-margin">
          <div className="max-w-[1440px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <p className="font-label-bold text-label-bold text-primary uppercase tracking-wider mb-4">
                Industries We Serve
              </p>
              <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">
                Every sector that relies on tea-derived compounds.
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                Our raw material feeds extract manufacturers who supply to the full breadth of
                the botanical ingredients industry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sectors.map((sector) => (
                <div
                  key={sector.name}
                  className="bg-surface rounded-2xl p-8 border border-surface-variant hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                >
                  <span className="material-symbols-outlined text-4xl text-primary mb-4 block">
                    {sector.icon}
                  </span>
                  <h3 className="font-headline-md text-xl font-bold text-on-surface mb-3">
                    {sector.name}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                    {sector.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {sector.compounds.map((c) => (
                      <span
                        key={c}
                        className="px-3 py-1 rounded-full bg-primary-container/30 text-on-primary-container font-label-bold text-xs uppercase"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="inquiry" className="px-4 sm:px-grid-margin page-section-tight">
          <div className="max-w-[1000px] mx-auto">
            <div className="bg-primary rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 text-on-primary shadow-2xl">
              <span className="inline-flex items-center gap-2 bg-on-primary/15 px-4 py-2 rounded-full font-label-bold text-label-bold text-xs uppercase mb-5">
                <span className="material-symbols-outlined text-sm">bolt</span>
                Limited Availability
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-3 text-left">
                2025–2026 supply slots are filling up.
              </h2>
              <p className="font-body-md text-sm sm:text-body-md text-on-primary/90 mb-6 text-left">
                We partner with a select number of manufacturers each year. Current partners are
                secured through next year.
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
                href="/#waitlist"
                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 bg-on-primary text-inverse-on-surface font-label-bold text-label-bold rounded-lg hover:bg-inverse-surface transition-colors"
              >
                Secure Your Slot
                <span className="material-symbols-outlined ml-2">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
