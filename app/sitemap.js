import { SITE_URL } from "@/lib/seo";

export default function sitemap() {
  const lastModified = new Date();

  return [
    { url: SITE_URL, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/about`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/extracts`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/contact`, lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];
}
