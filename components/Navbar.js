"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BrandMark from "@/components/BrandMark";

const navLinks = [
  { href: "/about", label: "About Us" },
  { href: "/extracts", label: "Extracts" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const linkClass = (href) => {
    const active = isActive(href);
    return active
      ? "text-on-surface border-b-2 border-primary pb-1 font-label-bold text-label-bold uppercase tracking-wide"
      : "text-on-surface-variant hover:text-on-surface transition-colors font-label-bold text-label-bold uppercase tracking-wide";
  };

  const mobileLinkClass = (href) => {
    const active = isActive(href);
    return active
      ? "block py-2.5 pl-3 border-l-2 border-primary text-on-surface font-label-bold text-sm uppercase tracking-wide"
      : "block py-2.5 pl-3 border-l-2 border-transparent text-on-surface-variant hover:text-on-surface font-label-bold text-sm uppercase tracking-wide transition-colors";
  };

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  return (
    <>
      {isHome && (
        <div className="fixed top-0 left-0 right-0 z-[60] h-10 bg-primary border-b border-on-primary/10 px-4 sm:px-grid-margin flex items-center justify-center gap-3">
          <span className="w-2 h-2 rounded-full bg-on-primary animate-pulse shrink-0" />
          <p className="font-label-bold text-label-bold text-on-primary uppercase tracking-wider text-center text-[10px] sm:text-xs md:text-sm leading-tight">
            Supply slots for 2026–27 are filling fast — limited allocation remaining
          </p>
        </div>
      )}

      <nav
        className={`fixed left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-outline-variant ${
          isHome ? "top-10" : "top-0"
        }`}
      >
        {menuOpen && (
          <button
            type="button"
            className="md:hidden fixed inset-0 z-40 bg-black/20"
            onClick={closeMenu}
            aria-label="Close menu"
          />
        )}

        <div className="relative z-50 flex justify-between items-center gap-3 px-4 sm:px-grid-margin h-16 sm:h-[72px] max-w-[1440px] mx-auto w-full">
          <BrandMark onClick={closeMenu} showText className="min-w-0" />

          <div className="hidden md:flex items-center gap-5 lg:gap-8">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className={linkClass(link.href)}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/#waitlist"
              className="hidden sm:inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 bg-on-surface text-inverse-on-surface font-label-bold text-label-bold rounded-lg border border-on-surface hover:bg-primary hover:text-on-primary hover:border-primary transition-colors whitespace-nowrap shrink-0 uppercase tracking-wide text-xs sm:text-sm"
            >
              Join Waitlist
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-outline-variant text-on-surface"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <span className="material-symbols-outlined text-xl">
                {menuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full z-50 border-t border-outline-variant bg-white shadow-lg px-4 py-3">
            <div className="max-w-[1440px] mx-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  className={mobileLinkClass(link.href)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 pt-2 border-t border-outline-variant">
                <Link
                  href="/#waitlist"
                  onClick={closeMenu}
                  className="sm:hidden inline-flex w-full items-center justify-center px-4 py-2.5 bg-on-surface text-inverse-on-surface font-label-bold text-label-bold rounded-lg uppercase tracking-wide text-sm"
                >
                  Join Waitlist
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
