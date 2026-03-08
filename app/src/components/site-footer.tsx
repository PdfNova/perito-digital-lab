import Link from "next/link";
import { ButtonLink, Container, SurfaceCard, TagList } from "@/components/ui";
import {
  brandDescriptor,
  contactDirectCtaLabel,
  contactEmail,
  contactMailto,
  contactPageCtaLabel,
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
    <footer className="border-t border-[var(--color-border)] bg-[rgba(255,255,255,0.34)]">
      <Container className="py-12 md:py-16">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <SurfaceCard
            title="Una firma tecnica debe cerrar con el mismo nivel de claridad con el que se presenta"
            description={`${brandDescriptor} con una presencia sobria, clara y orientada a consultas cualificadas.`}
          >
            <TagList
              items={[
                "Despacho profesional",
                "Analisis digital",
                "Trazabilidad",
                "Documentacion clara",
              ]}
            />
            <div className="grid gap-2 text-sm leading-7 text-[var(--color-muted)]">
              <p>La web ya combina servicios, metodologia y biblioteca editorial bajo una misma logica de trabajo.</p>
              <p>El objetivo del primer contacto es acotar mejor el contexto, no inflar expectativas ni forzar conclusiones.</p>
            </div>
            <Link
              href={contactMailto}
              className="text-sm font-medium text-[var(--color-accent-strong)] hover:text-[var(--color-text)]"
            >
              {contactEmail}
            </Link>
            <div className="flex flex-wrap gap-3 pt-2">
              <ButtonLink href="/contacto" label={contactPageCtaLabel} />
              <ButtonLink href={contactMailto} label={contactDirectCtaLabel} variant="secondary" />
            </div>
            <Link href="/recursos" className="text-sm font-medium text-[var(--color-accent-strong)] hover:text-[var(--color-text)]">
              Explorar recursos
            </Link>
          </SurfaceCard>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="premium-shell rounded-[1.8rem] p-6">
              <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[var(--color-muted)]">
                Navegacion
              </p>
              <div className="mt-5 flex flex-col gap-3 text-sm text-[var(--color-muted)]">
                {footerLinks.map((item) => (
                  <Link key={item.href} href={item.href} className="font-medium hover:text-[var(--color-text)]">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div data-surface="editorial" className="visual-frame min-h-[15rem] p-5">
              <div className="visual-grid" />
              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/58">
                    Firma tecnica
                  </p>
                  <p className="mt-4 max-w-xs text-lg leading-8 text-white/82">
                    Despacho, analisis y documentacion reunidos bajo una presencia clara, tecnica y discreta.
                  </p>
                  <p className="mt-4 max-w-xs text-sm leading-6 text-white/66">
                    Metodo visible, limites claros y una biblioteca editorial que acompana autoridad, descubrimiento y conversion.
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
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--color-border)] pt-5 text-sm text-[var(--color-muted)]">
          <p>Perito Digital Lab. Investigacion digital y documentacion tecnica.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/recursos/articulos/valor-documental-evidencia-digital" className="hover:text-[var(--color-text)]">
              Valor documental
            </Link>
            <Link href="/recursos/guias/revision-tecnica-evidencia-digital" className="hover:text-[var(--color-text)]">
              Revision tecnica
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
