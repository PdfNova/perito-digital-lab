import Link from "next/link";
import { ButtonLink, Container } from "@/components/ui";

const navigation = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/metodologia", label: "Metodologia" },
  { href: "/recursos", label: "Recursos" },
  { href: "/contacto", label: "Contacto" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[rgba(244,238,228,0.8)] shadow-[0_12px_34px_rgba(22,32,47,0.06)] backdrop-blur-xl">
      <Container className="py-4">
        <div className="premium-shell rounded-[1.7rem] px-5 py-4 md:px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link href="/" className="min-w-0">
              <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[var(--color-muted)]">
                Perito Digital Lab
              </p>
              <p className="mt-1 text-[1.04rem] font-medium text-[var(--color-text)]">
                Investigacion digital y documentacion tecnica
              </p>
            </Link>

            <ButtonLink href="/contacto" label="Orientacion inicial" variant="secondary" />
          </div>

          <nav className="mt-5 flex gap-2 overflow-x-auto pb-1 text-sm text-[var(--color-muted)]">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="shrink-0 rounded-full border border-[var(--color-border)] bg-[rgba(255,255,255,0.58)] px-3 py-2.5 font-medium transition hover:border-[var(--color-border-strong)] hover:bg-white/84 hover:text-[var(--color-text)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
