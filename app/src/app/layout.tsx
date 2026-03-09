import type { Metadata } from "next";
import { Instrument_Sans, Newsreader } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { brandDescriptor, brandName, shareImageUrl, siteUrl, visualAssets } from "./site-config";

const sans = Instrument_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const serif = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Investigacion digital, evidencia y documentacion tecnica",
    template: `%s | ${brandName}`,
  },
  description:
    "Investigacion digital, analisis pericial, OSINT con limites, trazabilidad y documentacion tecnica con una presencia premium, clara y metodologica.",
  applicationName: brandName,
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: brandName,
    description:
      "Investigacion digital, analisis pericial, trazabilidad y documentacion tecnica con una presencia premium y profesional.",
    url: siteUrl,
    type: "website",
    locale: "es_ES",
    siteName: brandName,
    images: [
      {
        url: shareImageUrl,
        width: 1200,
        height: 630,
        alt: visualAssets.shareDefault.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: brandName,
    description: `${brandDescriptor} con una presencia premium y profesional.`,
    images: [shareImageUrl],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${sans.variable} ${serif.variable}`}>
        <div className="site-frame">
          <SiteHeader />
          <main className="pb-24">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
