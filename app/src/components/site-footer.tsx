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
    <footer className="border-t border-white/8 bg-[linear-gradient(135deg,#0f1722_0%,#152132_58%,#0c111a_100%)] text-white">
      <Container className="py-12 md:py-16">
        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="hero-shell">
            <div className="hero-shell__orb hero-shell__orb--one" />
            <div className="hero-shell__orb hero-shell__orb--two" />
            <div className="grid gap-5 p-6 md:p-8">
              <div>
                <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/54">
                  Cierre de firma
                </p>
                <h2 className="mt-4 max-w-2xl text-3xl leading-[0.98] text-white md:text-[2.95rem]">
                  Despacho tecnico, analisis digital y salida documental dentro de una misma firma
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-white/72 md:text-lg">
                  {brandDescriptor} con una presencia mas clara, visual y rematada, sin perder
                  prudencia ni credibilidad tecnica.
                </p>
              </div>

              <TagList
                items={[
                  "Investigacion digital",
                  "OSINT con limites",
                  "Analisis de moviles",
                  "Informes periciales",
                ]}
                tone="light"
                className="gap-2.5"
              />

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.05] p-5">
                  <p className="text-[0.68rem] uppercase tracking-[0.26em] text-white/52">
                    Tipo de encargos
                  </p>
                  <p className="mt-3 text-sm leading-6.5 text-white/72">
                    Encargos donde hace falta ordenar evidencia, correlacionar indicios, reconstruir
                    secuencias o convertir materiales digitales en una salida tecnica clara para
                    terceros.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.05] p-5">
                  <p className="text-[0.68rem] uppercase tracking-[0.26em] text-white/52">
                    {contactChannelEyebrow}
                  </p>
                  <Link
                    href={contactMailto}
                    className="mt-3 block text-lg font-medium text-[var(--color-accent-bright)]"
                  >
                    {contactChannelLabel}
                  </Link>
                  <p className="mt-2 text-sm leading-6.5 text-white/72">
                    {contactChannelDescription}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-1">
                <ButtonLink href="/contacto" label={contactPageCtaLabel} className="min-w-[14rem]" />
                <ButtonLink
                  href={contactMailto}
                  label={contactDirectCtaLabel}
                  variant="secondary"
                  className="min-w-[14rem]"
                />
              </div>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <SurfaceCard
              title="Navegacion"
              description="Acceso directo a las areas que ya sostienen la propuesta comercial y documental del sitio."
              tone="light"
              compact
            >
              <div className="flex flex-col gap-2.5 text-sm text-white/74">
                {footerLinks.map((item) => (
                  <Link key={item.href} href={item.href} className="font-medium hover:text-white">
                    {item.label}
                  </Link>
                ))}
              </div>
            </SurfaceCard>

            <div data-surface="editorial" className="visual-frame min-h-[16rem] p-5">
              <div className="visual-grid" />
              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/58">
                    Ventaja visible
                  </p>
                  <p className="mt-4 max-w-xs text-[1.05rem] leading-7 text-white/82">
                    Servicios, metodologia y recursos ya trabajan juntos como sistema de autoridad.
                  </p>
                  <p className="mt-3 max-w-xs text-sm leading-6 text-white/64">
                    La capa editorial refuerza posicionamiento, confianza y conversion sin recargar
                    el cierre.
                  </p>
                </div>
                <div className="grid gap-3">
                  <div className="visual-window rounded-[1.2rem] p-4">
                    <div className="visual-line h-2.5 w-[72%]" />
                    <div className="mt-3 visual-line h-2.5 w-[92%]" />
                    <div className="mt-3 visual-line h-2.5 w-[56%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/8 pt-5 text-sm text-white/56">
          <p>Perito Digital Lab. Investigacion digital, analisis pericial y documentacion tecnica.</p>
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
