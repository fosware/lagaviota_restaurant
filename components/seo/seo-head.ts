import type { Metadata } from "next";
import { business, seo } from "@/lib/site";

type SEOHeadProps = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
};

export function SEOHead({
  title,
  description = seo.description,
  path = "/",
  image = "/images/fajitas-combinadas.webp",
}: SEOHeadProps): Metadata {
  const pageTitle = title ?? seo.title;
  const url = `${business.url}${path}`;

  return {
    title: pageTitle,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: pageTitle,
      description,
      url,
      siteName: business.name,
      type: "website",
      images: [{ url: image, width: 1200, height: 800, alt: pageTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [image],
    },
  };
}
