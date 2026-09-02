export const SITE_URL = "https://www.densitea.in";
export const SITE_NAME = "Densitea";
export const DEFAULT_OG_IMAGE = "/og-image.png";

export const business = {
  name: "Densitea",
  legalName: "Kishan Chand Brij Lal Company",
  email: "hello@densitea.in",
  phone: "+91 99150 50493",
  phoneTel: "+919915050493",
  locality: "Amritsar",
  region: "Punjab",
  country: "IN",
};

const defaultKeywords = [
  "green tea raw material",
  "tea extract supplier India",
  "EGCG supplier",
  "polyphenol tea leaf",
  "Camellia sinensis bulk",
  "nutraceutical tea extract",
  "tea export Amritsar",
  "Densitea",
];

export function createPageMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  noIndex = false,
  ogImage = DEFAULT_OG_IMAGE,
}) {
  const url = `${SITE_URL}${path}`;
  const allKeywords = [...new Set([...keywords, ...defaultKeywords])];

  return {
    title,
    description,
    keywords: allKeywords,
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false, googleBot: { index: false, follow: false } }
      : {
          index: true,
          follow: true,
          googleBot: { index: true, follow: true, "max-image-preview": "large" },
        },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url,
      siteName: SITE_NAME,
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 512,
          height: 512,
          alt: `${SITE_NAME} — premium Indian tea raw material supplier`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
