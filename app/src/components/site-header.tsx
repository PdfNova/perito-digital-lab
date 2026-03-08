import Link from "next/link";

const navigation = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/metodologia", label: "Metodologia" },
  { href: "/recursos", label: "Recursos" },
  { href: "/contacto", label: "Contacto" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-[rgba(246,242,234,0.88)] shadow-[0_10px_30px_rgba(20,27,38,0.04)] backdrop-blur-xl">
      <div className="mx-auto w-full max-w-7xl px-5 py-4 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="min-w-0">
            <div className="text-[0.68rem] uppercase tracking-[0.28em] text-[var(--color-muted)]">
              Perito Digital Lab
            </div>
            <div className="mt-1 text-[1.02rem] font-medium text-[var(--color-text)]">
              Investigacion digital y documentacion
            </div>
          </Link>

          <Link
            href="/contacto"
            className="button-secondary"
          >
            Contactar
          </Link>
        </div>

        <nav className="mt-4 flex gap-2 overflow-x-auto pb-1 text-sm text-[var(--color-muted)]">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full border border-[var(--color-border)] bg-[rgba(255,255,255,0.45)] px-3 py-2.5 transition hover:border-[var(--color-border-strong)] hover:bg-white/78 hover:text-[var(--color-text)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
