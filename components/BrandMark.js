import Image from "next/image";
import Link from "next/link";

export default function BrandMark({ showText = true, inverted = false, onClick, className = "" }) {
  const textClass = inverted ? "text-inverse-on-surface" : "text-on-surface";

  return (
    <Link
      href="/"
      onClick={onClick}
      className={`flex items-center gap-1 sm:gap-1.5 shrink-0 ${className}`}
      aria-label="Densitea home"
    >
      <Image
        src="/densi-logo.png"
        alt=""
        width={238}
        height={192}
        priority
        unoptimized
        className={`h-12 sm:h-14 w-auto shrink-0 -mr-2 sm:-mr-3 ${inverted ? "brightness-0 invert" : ""}`}
      />
      {showText && (
        <span
          className={`font-headline-md text-xl sm:text-2xl tracking-tight leading-none ${textClass}`}
        >
          Densi<span className="text-primary">tea</span>
        </span>
      )}
    </Link>
  );
}
