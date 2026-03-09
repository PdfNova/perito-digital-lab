export const brandName = "Perito Digital Lab";
export const brandDescriptor = "Investigacion digital, analisis pericial y documentacion tecnica";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "bite_17@hotmail.com";
export const hasPublicContactEmail = true;

export const contactSubject = `Consulta inicial - ${brandName}`;
export const contactPageCtaLabel = "Solicitar valoracion inicial";
export const contactDirectCtaLabel = hasPublicContactEmail
  ? "Escribir por correo"
  : "Solicitar orientacion inicial";
export const contactAnchorCtaLabel = "Ver canal de consulta";
export const contactResourceCtaLabel = "Revisar casos y guias antes de escribir";
export const resourcesCtaLabel = "Explorar casos, guias y criterios";
export const episodeCtaLabel = "Abrir episodio";
export const articleBaseCtaLabel = "Leer articulo base";
export const technicalGuideCtaLabel = "Leer guia tecnica";
export const resourcesHubReturnLabel = "Volver al hub editorial";
export const caseStudyCtaLabel = "Leer caso tipo";
export const appliedArticleCtaLabel = "Leer lectura aplicada";
export const beforeActionTitle = "Antes de mover, borrar, reenviar o imprimir nada";
export const beforeActionDescription =
  "Parte del valor documental se pierde antes de la revision: con capturas fuera de fuente, PDFs rehechos, alertas borradas, mensajes mezclados o secuencias ya rotas. Una consulta temprana suele aportar mas cuando todavia es posible separar indicio, correlacion e inferencia sobre una base con mejor contexto, continuidad y trazabilidad.";
export const contactChannelEyebrow = hasPublicContactEmail ? "Correo de marca" : "Canal de consulta";
export const contactChannelLabel = hasPublicContactEmail
  ? contactEmail
  : "Canal de consulta cualificada";
export const contactChannelDescription = hasPublicContactEmail
  ? "Canal recomendado para una primera toma de contacto: breve, precisa y centrada en el problema, los materiales disponibles y el objetivo tecnico o documental."
  : "La direccion directa se facilita dentro del intercambio inicial para mantener discrecion, encaje y mejor trazabilidad del primer contacto.";
export const contactFirstStepCopy =
  "Primer paso recomendado: resumir el problema, indicar materiales disponibles, explicar si ya han sido manipulados y definir con claridad el objetivo tecnico, documental o pericial.";
export const contactResponseCopy =
  "La respuesta inicial sirve para valorar encaje, distinguir material aparente de material util y separar mejor indicio, correlacion e inferencia antes de marcar el siguiente paso razonable.";
export const contactMailto = `mailto:${contactEmail}?subject=${encodeURIComponent(contactSubject)}`;
export const episode01EmbedUrl = process.env.NEXT_PUBLIC_EPISODE_01_EMBED_URL ?? "";
export const episode01ExternalUrl = process.env.NEXT_PUBLIC_EPISODE_01_EXTERNAL_URL ?? "";
export const episode01HasMediaAccess = Boolean(episode01EmbedUrl || episode01ExternalUrl);

export const visualAssets = {
  heroMain: {
    src: "/images/lot-01/hero-main.png",
    alt: "Despacho profesional con pantalla principal, documentacion tecnica y entorno de analisis digital",
  },
  servicesHero: {
    src: "/images/lot-01/services-hero.png",
    alt: "Entorno de investigacion digital con paneles de analisis, informe tecnico y mesa de trabajo profesional",
  },
  contactHero: {
    src: "/images/lot-01/contact-hero.png",
    alt: "Despacho preparado para una consulta tecnica con documentacion, dispositivos y ambiente profesional",
  },
  shareDefault: {
    src: "/images/share/og-default.png",
    alt: `${brandName} - ${brandDescriptor}`,
  },
} as const;

export const shareImageUrl = `${siteUrl}${visualAssets.shareDefault.src}`;
