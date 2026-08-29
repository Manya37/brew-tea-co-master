import Link from "next/link";
import BrandMark from "@/components/BrandMark";

export default function Footer() {
  return (
    <footer className="w-full page-section px-4 sm:px-grid-margin flex flex-col md:flex-row justify-between gap-8 md:gap-grid-gutter bg-inverse-surface text-inverse-on-surface">
      <div className="flex flex-col gap-4 max-w-md">
        <BrandMark inverted showText />
        <p className="font-body-md text-body-md text-inverse-on-surface/80">
          India&apos;s Green Tea Raw Material Supplier — Est. for extract manufacturing
        </p>
        <p className="font-body-md text-body-md text-inverse-on-surface/60 mt-2">
          © 2025 PureLeaf Extracts. All rights reserved.
        </p>
      </div>
      <div className="flex flex-wrap gap-8 md:gap-12">
        <div className="flex flex-col gap-3">
          <Link
            className="text-inverse-on-surface/80 hover:text-primary hover:underline transition-all font-body-md text-body-md uppercase tracking-wide"
            href="/#compounds"
          >
            Compounds
          </Link>
          <Link
            className="text-inverse-on-surface/80 hover:text-primary hover:underline transition-all font-body-md text-body-md uppercase tracking-wide"
            href="/extracts#sectors"
          >
            Sectors
          </Link>
          <Link
            className="text-inverse-on-surface/80 hover:text-primary hover:underline transition-all font-body-md text-body-md uppercase tracking-wide"
            href="/extracts"
          >
            Extracts
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <Link
            className="text-inverse-on-surface/80 hover:text-primary hover:underline transition-all font-body-md text-body-md uppercase tracking-wide"
            href="/#waitlist"
          >
            Waitlist
          </Link>
          <Link
            className="text-inverse-on-surface/80 hover:text-primary hover:underline transition-all font-body-md text-body-md uppercase tracking-wide"
            href="/about"
          >
            About Us
          </Link>
          <Link
            className="text-inverse-on-surface/80 hover:text-primary hover:underline transition-all font-body-md text-body-md uppercase tracking-wide"
            href="/contact"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
