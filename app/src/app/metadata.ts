import type { Metadata } from "next";
import { brandName, shareImageUrl, siteUrl } from "./site-config";

type PageMetadataInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
};

export function buildPageMetadata({
  title,
  description,
  path = "",
  image = shareImageUrl,
  type = "website",
}: PageMetadataInput): Metadata {
  const url = new URL(path, siteUrl).toString();

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: brandName,
      locale: "es_ES",
      type,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${brandName} - ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
