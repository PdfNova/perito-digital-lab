import type { MetadataRoute } from "next";
import { siteUrl } from "./site-config";
import { serviceSpecialties } from "./servicios/service-specialties";

const resourceRoutes = [
  "/recursos",
  "/recursos/articulos/valor-documental-evidencia-digital",
  "/recursos/articulos/preservacion-inicial-evidencia-digital",
  "/recursos/articulos/email-bombing-fraude-ecommerce",
  "/recursos/guias/revision-tecnica-evidencia-digital",
  "/recursos/guias/cuenta-instrumental-fraccionamiento",
  "/recursos/guias/mensajeria-moviles-conflictos-civiles",
  "/recursos/casos/fraude-ecommerce-email-bombing",
  "/recursos/casos/huella-digital-osint",
  "/recursos/videos/episodio-01",
];

const baseRoutes = ["/", "/servicios", "/metodologia", "/contacto"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [...baseRoutes, ...serviceSpecialties.map((item) => item.href), ...resourceRoutes].map(
    (path) => ({
      url: `${siteUrl}${path}`,
      lastModified: now,
      changeFrequency: path === "/" || path === "/servicios" || path === "/recursos" ? "weekly" : "monthly",
      priority: path === "/" ? 1 : path === "/servicios" || path === "/recursos" || path === "/contacto" ? 0.9 : 0.7,
    }),
  );
}
