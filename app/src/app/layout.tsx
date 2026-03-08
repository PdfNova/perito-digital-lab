import type { Metadata } from "next";
import { Instrument_Sans, Newsreader } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

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
    template: "%s | Perito Digital Lab",
  },
  description:
    "Investigacion digital, analisis forense, OSINT con limites, trazabilidad y documentacion tecnica con enfoque sobrio, claro y metodologico.",
  applicationName: "Perito Digital Lab",
  openGraph: {
    title: "Perito Digital Lab",
    description:
      "Investigacion digital, analisis forense, trazabilidad y documentacion tecnica con un enfoque sobrio y profesional.",
    type: "website",
    locale: "es_ES",
    siteName: "Perito Digital Lab",
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
