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
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[rgba(12,18,27,0.78)] shadow-[0_18px_50px_rgba(8,14,24,0.22)] backdrop-blur-2xl">
      <Container className="py-4">
        <div className="rounded-[1.9rem] border border-white/8 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] px-5 py-4 shadow-[0_20px_60px_rgba(8,14,24,0.24)] md:px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link href="/" className="min-w-0">
              <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/52">
                Perito Digital Lab
              </p>
              <p className="mt-1 max-w-xl text-[1.04rem] font-medium text-white/88">
                Investigacion digital, analisis pericial y documentacion tecnica
              </p>
            </Link>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/recursos"
                className="hidden rounded-full border border-white/10 bg-white/6 px-3.5 py-2.5 text-sm font-medium text-white/70 transition hover:border-white/18 hover:bg-white/10 hover:text-white md:inline-flex"
              >
                Biblioteca editorial
              </Link>
              <ButtonLink href="/contacto" label="Valoracion inicial" variant="secondary" />
            </div>
          </div>

          <nav className="mt-5 flex gap-2 overflow-x-auto pb-1 text-sm text-white/64">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="shrink-0 rounded-full border border-white/8 bg-white/5 px-3 py-2.5 font-medium transition hover:border-white/18 hover:bg-white/10 hover:text-white"
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
