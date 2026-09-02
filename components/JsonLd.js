import { SITE_URL, business } from "@/lib/seo";

export default function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: business.name,
    legalName: business.legalName,
    url: SITE_URL,
    logo: `${SITE_URL}/og-image.png`,
    email: business.email,
    telephone: business.phoneTel,
    address: {
      "@type": "PostalAddress",
      addressLocality: business.locality,
      addressRegion: business.region,
      addressCountry: business.country,
    },
    sameAs: [SITE_URL],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: business.name,
    url: SITE_URL,
    description:
      "Premium green tea raw material and extract-grade Camellia sinensis leaf for manufacturers in India and worldwide.",
    publisher: {
      "@type": "Organization",
      name: business.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/og-image.png`,
      },
    },
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "WholesaleStore",
    name: business.name,
    image: `${SITE_URL}/og-image.png`,
    url: SITE_URL,
    telephone: business.phoneTel,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: business.locality,
      addressRegion: business.region,
      addressCountry: business.country,
    },
    priceRange: "$$",
    areaServed: ["IN", "AE", "US", "GB", "CA", "JP", "KR", "EU"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
    </>
  );
}
