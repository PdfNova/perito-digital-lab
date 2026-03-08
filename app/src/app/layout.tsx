import type { Metadata } from "next";
import { Instrument_Sans, Newsreader } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const sans = Instrument_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const serif = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Investigacion digital y trazabilidad tecnologica",
    template: "%s | Investigacion digital",
  },
  description:
    "Investigacion digital, analisis forense, OSINT y documentacion tecnica con enfoque sobrio, claro y metodologico.",
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
