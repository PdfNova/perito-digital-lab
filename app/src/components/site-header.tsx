import Link from "next/link";
import { ButtonLink, Container } from "@/components/ui";

const navigation = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Especialidades" },
  { href: "/metodologia", label: "Metodologia" },
  { href: "/recursos", label: "Recursos" },
  { href: "/contacto", label: "Contacto" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[rgba(244,247,250,0.84)] shadow-[0_14px_36px_rgba(8,14,24,0.06)] backdrop-blur-xl">
      <Container className="py-3">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="min-w-0">
              <p className="text-[0.66rem] uppercase tracking-[0.28em] text-[var(--color-muted)]">
                Perito Digital Lab
              </p>
              <p className="mt-1 max-w-xl text-[0.98rem] font-medium text-[var(--color-text)]">
                Investigacion digital, analisis pericial y documentacion tecnica
              </p>
            </Link>

            <div className="flex items-center gap-2 lg:hidden">
              <Link
                href="/recursos"
                className="rounded-full border border-[var(--color-border)] bg-white/70 px-3 py-2 text-[0.82rem] font-medium text-[var(--color-muted)] transition hover:border-[var(--color-border-strong)] hover:text-[var(--color-text)]"
              >
                Historias
              </Link>
              <ButtonLink href="/contacto" label="Contacto" variant="secondary" className="min-h-[2.65rem]" />
            </div>
          </div>

          <nav className="flex gap-2 overflow-x-auto pb-1 text-[0.84rem] text-[var(--color-muted)] lg:flex-1 lg:justify-center lg:pb-0">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="shrink-0 rounded-full border border-transparent px-3 py-2 font-medium transition hover:border-[var(--color-border)] hover:bg-white/72 hover:text-[var(--color-text)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Link
              href="/recursos"
              className="rounded-full border border-[var(--color-border)] bg-white/72 px-3.5 py-2.5 text-sm font-medium text-[var(--color-muted)] transition hover:border-[var(--color-border-strong)] hover:text-[var(--color-text)]"
            >
              Blog / historias
            </Link>
            <ButtonLink href="/contacto" label="Valoracion inicial" variant="secondary" />
          </div>
        </div>
      </Container>
    </header>
  );
}
