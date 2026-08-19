"use client";

import { useEffect, useRef, useState } from "react";

const compoundIcons = {
  "Total Polyphenols": "science",
  EGCG: "shield",
  "L-Theanine": "psychology",
  Caffeine: "bolt",
  Theaflavins: "opacity",
  Thearubigins: "layers",
};

function getPeakValue(bars) {
  const last = bars[bars.length - 1];
  return last?.value?.split("–").pop()?.trim() || last?.value;
}

function CompoundCard({ compound, index }) {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const isGreen = compound.sourceTone === "green";
  const icon = compoundIcons[compound.name] || "eco";
  const peak = getPeakValue(compound.bars);

  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -32px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={cardRef}
      className={`compound-card group relative flex flex-col h-full rounded-2xl overflow-hidden border transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(0,0,0,0.08)] ${
        isGreen
          ? "bg-white border-outline-variant/50 hover:border-primary/50"
          : "bg-white border-outline-variant/50 hover:border-tertiary/40"
      } ${visible ? "is-visible" : ""}`}
      style={{ animationDelay: `${index * 0.07}s` }}
    >
      <div
        className={`absolute inset-y-0 left-0 w-1 transition-all duration-500 group-hover:w-1.5 ${
          isGreen ? "bg-primary" : "bg-tertiary"
        }`}
      />

      <div
        className={`absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
          isGreen ? "bg-primary/20" : "bg-tertiary/15"
        }`}
      />

      <div className="relative p-6 md:p-7 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="flex items-center gap-3 min-w-0">
            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-105 ${
                isGreen ? "bg-primary/20 text-on-surface" : "bg-tertiary/10 text-tertiary"
              }`}
            >
              <span className="material-symbols-outlined text-[22px]">{icon}</span>
            </div>
            <div className="min-w-0">
              <span
                className={`inline-flex items-center gap-1.5 text-[10px] font-label-bold uppercase tracking-wider mb-1 ${
                  isGreen ? "text-on-surface-variant" : "text-tertiary"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${isGreen ? "bg-primary" : "bg-tertiary"}`}
                />
                {compound.source}
              </span>
              <h3 className="font-headline-md text-xl md:text-2xl text-on-surface leading-tight">
                {compound.name}
              </h3>
            </div>
          </div>

          <div className="text-right shrink-0">
            <span className="block font-label-bold text-[10px] text-on-surface-variant/50 uppercase tracking-wider mb-0.5">
              Peak
            </span>
            <span
              className={`font-headline-md text-2xl leading-none ${
                isGreen ? "text-on-surface" : "text-tertiary"
              }`}
            >
              {peak}
            </span>
          </div>
        </div>

        <p className="font-body-md text-sm md:text-base text-on-surface-variant mb-6 leading-relaxed flex-1">
          {compound.desc}
        </p>

        <div className="space-y-3 mb-6">
          {compound.bars.map((bar, barIndex) => (
            <div key={bar.label}>
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="font-label-bold text-[10px] text-on-surface-variant uppercase tracking-wide truncate">
                  {bar.label}
                </span>
                <span className="font-label-bold text-[11px] text-on-surface tabular-nums shrink-0">
                  {bar.value}
                </span>
              </div>
              <div className="h-1.5 bg-brew-grey rounded-full overflow-hidden">
                <div
                  className={`compound-bar-fill h-full rounded-full ${
                    isGreen
                      ? "bg-linear-to-r from-primary to-primary-container"
                      : "bg-linear-to-r from-tertiary to-brew-navy"
                  } ${visible ? "is-visible" : ""}`}
                  style={{
                    width: bar.width,
                    "--bar-index": barIndex,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5 pt-5 mt-auto border-t border-outline-variant/40">
          {compound.tags.map((tag) => (
            <span
              key={tag}
              className={`px-2.5 py-1 rounded-md font-label-bold text-[10px] uppercase tracking-wide transition-colors duration-300 ${
                isGreen
                  ? "bg-brew-cream-2 text-on-surface-variant group-hover:bg-primary/15"
                  : "bg-brew-grey text-on-surface-variant group-hover:bg-tertiary/10"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function CompoundsSection({ compounds }) {
  const headerRef = useRef(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const node = headerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="compounds"
      className="relative max-w-[1440px] mx-auto px-4 sm:px-grid-margin page-section"
    >
      <div
        ref={headerRef}
        className={`compound-header mb-8 md:mb-12 max-w-3xl ${headerVisible ? "is-visible" : ""}`}
      >
        <p className="font-label-bold text-label-bold text-primary uppercase tracking-wider mb-4">
          What&apos;s Inside the Leaf
        </p>
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">
          Two raw materials. Six key compounds. Every extract you need.
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          We supply both green tea leaf (for EGCG, polyphenols, and L-Theanine) and black tea waste
          (for theaflavins and thearubigins) — making us a single-source raw material partner for
          the full spectrum of tea-derived extracts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
        {compounds.map((compound, index) => (
          <CompoundCard key={compound.name} compound={compound} index={index} />
        ))}
      </div>
    </section>
  );
}
