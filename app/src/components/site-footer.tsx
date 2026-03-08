import Link from "next/link";
import { ButtonLink, Container, SurfaceCard, TagList } from "@/components/ui";

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
            title="Presencia digital para casos que requieren criterio"
            description="Investigacion digital, analisis forense, OSINT y documentacion tecnica con enfoque sobrio, visual y preparado para una futura capa editorial mas amplia."
          >
            <TagList
              items={[
                "Despacho profesional",
                "Analisis digital",
                "Trazabilidad",
                "Documentacion clara",
              ]}
            />
            <div className="flex flex-wrap gap-3 pt-2">
              <ButtonLink href="/contacto" label="Iniciar contacto" />
              <ButtonLink href="/recursos" label="Explorar recursos" variant="secondary" />
            </div>
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

            <div className="visual-frame min-h-[15rem] p-5">
              <div className="visual-grid" />
              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/58">
                    Marca preparada para imagen real
                  </p>
                  <p className="mt-4 max-w-xs text-lg leading-8 text-white/82">
                    Espacio visual reservado para despacho, herramientas y workspace de analisis.
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
      </Container>
    </footer>
  );
}
