export const brandName = "Perito Digital Lab";
export const brandDescriptor = "Investigacion digital y documentacion tecnica";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contacto@peritodigitallab.example";

export const contactSubject = `Consulta inicial - ${brandName}`;
export const contactPageCtaLabel = "Solicitar orientacion inicial";
export const contactDirectCtaLabel = "Escribir por correo";
export const contactAnchorCtaLabel = "Ver canal de contacto";
export const resourcesCtaLabel = "Explorar recursos";
export const episodeCtaLabel = "Abrir episodio";
export const articleBaseCtaLabel = "Leer articulo base";
export const technicalGuideCtaLabel = "Leer guia tecnica";
export const resourcesHubReturnLabel = "Volver al hub editorial";
export const contactFirstStepCopy =
  "Primer paso recomendado: resumir el problema, indicar materiales disponibles y definir el objetivo tecnico o documental.";
export const contactResponseCopy =
  "La respuesta inicial sirve para valorar encaje, ordenar el punto de partida y proponer el siguiente paso razonable.";
export const contactMailto = `mailto:${contactEmail}?subject=${encodeURIComponent(contactSubject)}`;

export const visualAssets = {
  heroMain: {
    src: "/images/lot-01/hero-main.svg",
    alt: "Despacho tecnico con pantallas de analisis, documentos y entorno profesional de trabajo",
  },
  servicesHero: {
    src: "/images/lot-01/services-hero.svg",
    alt: "Entorno profesional de analisis digital, documentacion y servicios tecnicos",
  },
  contactHero: {
    src: "/images/lot-01/contact-hero.svg",
    alt: "Entorno de despacho con mesa de trabajo, documentacion y zona preparada para una primera consulta",
  },
  shareDefault: {
    src: "/images/share/og-default.svg",
    alt: `${brandName} - ${brandDescriptor}`,
  },
} as const;

export const shareImageUrl = `${siteUrl}${visualAssets.shareDefault.src}`;
