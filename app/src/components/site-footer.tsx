import Link from "next/link";
import { ButtonLink, Container, SurfaceCard, TagList } from "@/components/ui";
import {
  brandDescriptor,
  contactChannelDescription,
  contactChannelEyebrow,
  contactChannelLabel,
  contactDirectCtaLabel,
  contactMailto,
  contactPageCtaLabel,
  resourcesCtaLabel,
} from "@/app/site-config";

const footerLinks = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/metodologia", label: "Metodologia" },
  { href: "/recursos", label: "Recursos" },
  { href: "/contacto", label: "Contacto" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 bg-[linear-gradient(135deg,#0c131d_0%,#142232_58%,#0a1017_100%)] text-white">
      <Container className="py-10 md:py-12">
        <div className="grid gap-5 lg:grid-cols-[1.12fr_0.88fr]">
          <div className="hero-shell">
            <div className="hero-shell__orb hero-shell__orb--one" />
            <div className="hero-shell__orb hero-shell__orb--two" />
            <div className="hero-shell__grid">
              <div>
                <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/54">
                  Cierre de firma
                </p>
                <h2 className="mt-3 max-w-2xl text-[2rem] leading-[1.02] text-white md:text-[2.55rem]">
                  Criterio tecnico, discrecion y una lectura mas ordenada de lo que realmente vale el material
                </h2>
                <p className="mt-3 max-w-2xl text-[0.98rem] leading-7 text-white/72">
                  {brandDescriptor} con una navegacion directa entre especialidades, recursos y
                  contacto para entrar con mejor criterio, no solo con mas material.
                </p>
              </div>

              <TagList
                items={[
                  "Investigacion digital",
                  "Historias anonimizadas",
                  "Analisis de moviles",
                  "Informes periciales",
                ]}
                tone="light"
                className="gap-2"
              />

              <div className="grid gap-3 md:grid-cols-[1.05fr_0.95fr]">
                <div className="rounded-[1.3rem] border border-white/8 bg-white/[0.04] p-4">
                  <p className="text-[0.68rem] uppercase tracking-[0.26em] text-white/52">
                    Navegacion util
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/72">
                    Servicios para el encaje, recursos para reconocer el patron y contacto para una
                    consulta mejor formulada antes de seguir degradando la base.
                  </p>
                </div>
                <div className="rounded-[1.3rem] border border-white/8 bg-white/[0.04] p-4">
                  <p className="text-[0.68rem] uppercase tracking-[0.26em] text-white/52">
                    {contactChannelEyebrow}
                  </p>
                  <Link
                    href={contactMailto}
                    className="mt-2 block text-base font-medium text-[var(--color-accent-bright)]"
                  >
                    {contactChannelLabel}
                  </Link>
                  <p className="mt-2 text-sm leading-6 text-white/72">
                    {contactChannelDescription}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <ButtonLink href="/contacto" label={contactPageCtaLabel} className="min-w-[13rem]" />
                <ButtonLink
                  href={contactMailto}
                  label={contactDirectCtaLabel}
                  variant="secondary"
                  className="min-w-[13rem]"
                />
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            <SurfaceCard
              title="Navegacion"
              description="Accesos directos a la capa comercial y editorial que sostiene la marca."
              tone="light"
              compact
            >
              <div className="grid gap-2 text-sm text-white/74 sm:grid-cols-2">
                {footerLinks.map((item) => (
                  <Link key={item.href} href={item.href} className="font-medium hover:text-white">
                    {item.label}
                  </Link>
                ))}
              </div>
            </SurfaceCard>

            <SurfaceCard
              title="Puentes de autoridad"
              description="La capa editorial ya funciona como sistema de criterio publico, mapa de problemas reales y filtro para consultas mejor planteadas sobre material que no siempre llega con la misma fuerza."
              tone="light"
              compact
            >
              <div className="grid gap-2 text-sm text-white/74">
                <Link href="/recursos" className="inline-link text-[var(--color-accent-bright)]">
                  {resourcesCtaLabel}
                </Link>
                <Link
                  href="/recursos/articulos/notario-digital-vs-perito-digital"
                  className="font-medium transition hover:text-white"
                >
                  Notario digital vs perito digital
                </Link>
                <Link
                  href="/recursos/guias/firma-electronica-pdf-validez-documental"
                  className="font-medium transition hover:text-white"
                >
                  Firma electronica y PDF
                </Link>
                <Link
                  href="/recursos/casos/cuenta-instrumental-smurfing-operativa-circular"
                  className="font-medium transition hover:text-white"
                >
                  Cuenta instrumental y smurfing
                </Link>
                <Link
                  href="/recursos/articulos/tokenizacion-fraudulenta-tarjeta-wallet"
                  className="font-medium transition hover:text-white"
                >
                  Tokenizacion fraudulenta y wallet
                </Link>
                <Link
                  href="/recursos/articulos/recovery-scam-cripto-falsa-recuperacion"
                  className="font-medium transition hover:text-white"
                >
                  Recovery scam cripto
                </Link>
              </div>
            </SurfaceCard>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-white/8 pt-5 text-sm text-white/56">
          <p>Perito Digital Lab. No sustituye la prueba: mejora su lectura, su orden y su utilidad documental.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/recursos" className="hover:text-white">
              {resourcesCtaLabel}
            </Link>
            <Link href="/recursos/guias/revision-tecnica-evidencia-digital" className="hover:text-white">
              Revision tecnica
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
