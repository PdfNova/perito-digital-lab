import Link from "next/link";
import { Container } from "@/components/ui";

const footerLinks = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/metodologia", label: "Metodologia" },
  { href: "/recursos", label: "Recursos" },
  { href: "/contacto", label: "Contacto" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[rgba(255,255,255,0.56)]">
      <Container className="grid gap-8 py-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[1.7rem] border border-[var(--color-border)] bg-[rgba(255,255,255,0.72)] p-6 shadow-[var(--shadow-soft)]">
          <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[var(--color-muted)]">
            Perito Digital Lab
          </p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--color-muted)]">
            Investigacion digital, analisis forense, OSINT y documentacion tecnica con un
            enfoque sobrio, claro y metodologico.
          </p>
          <p className="mt-4 text-sm font-medium text-[var(--color-accent)]">
            Claridad tecnica, discrecion y utilidad documental.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-[1.7rem] border border-[var(--color-border)] bg-[rgba(255,255,255,0.64)] p-6 shadow-[var(--shadow-soft)]">
            <p className="text-sm font-medium text-[var(--color-text)]">Navegacion</p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-[var(--color-muted)]">
              {footerLinks.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-[var(--color-text)]">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="rounded-[1.7rem] border border-[var(--color-border)] bg-[rgba(255,255,255,0.64)] p-6 shadow-[var(--shadow-soft)]">
            <p className="text-sm font-medium text-[var(--color-text)]">Enfoque</p>
            <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
              Proyecto orientado a analisis, contexto, trazabilidad e informe claro. No se
              presenta como oferta invasiva ni como escaparate de herramientas.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
