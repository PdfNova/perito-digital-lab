import Link from "next/link";

type Action = {
  href: string;
  label: string;
};

export function Container({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div id={id} className={`mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className = "",
  tint = "default",
}: {
  children: React.ReactNode;
  className?: string;
  tint?: "default" | "soft";
}) {
  return (
    <section
      className={`py-20 md:py-24 ${tint === "soft" ? "bg-[rgba(255,255,255,0.28)]" : ""} ${className}`}
    >
      {children}
    </section>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[0.72rem] uppercase tracking-[0.28em] text-[var(--color-muted)]">
      {children}
    </p>
  );
}

export function SectionHeading({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <h2 className="text-4xl leading-tight text-[var(--color-text)] md:text-5xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-lg leading-8 text-[var(--color-muted)]">{description}</p>
      ) : null}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  notes,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryAction: Action;
  secondaryAction?: Action;
  notes?: string[];
}) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-border)]">
      <Container className="grid gap-12 py-20 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div className="max-w-4xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-5 text-5xl leading-[0.95] text-[var(--color-text)] sm:text-6xl md:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted)] md:text-xl">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={primaryAction.href}
              className="rounded-full bg-[var(--color-text)] px-5 py-3 text-sm font-medium text-white transition hover:opacity-92"
            >
              {primaryAction.label}
            </Link>
            {secondaryAction ? (
              <Link
                href={secondaryAction.href}
                className="rounded-full border border-[var(--color-border-strong)] bg-[rgba(255,255,255,0.85)] px-5 py-3 text-sm font-medium text-[var(--color-text)] transition hover:border-[var(--color-text)]"
              >
                {secondaryAction.label}
              </Link>
            ) : null}
          </div>
        </div>
        <div className="rounded-[2rem] border border-[var(--color-border)] bg-[rgba(255,255,255,0.72)] p-6 shadow-[var(--shadow)] backdrop-blur">
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">
            Marco inicial
          </p>
          <div className="mt-5 space-y-3">
            {notes?.map((note) => (
              <div
                key={note}
                className="rounded-[1.2rem] border border-[var(--color-border)] bg-white/80 px-4 py-4 text-sm leading-6 text-[var(--color-text)]"
              >
                {note}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function SurfaceCard({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <article className="rounded-[1.8rem] border border-[var(--color-border)] bg-[rgba(255,255,255,0.82)] p-6 shadow-[0_24px_64px_rgba(21,27,38,0.06)] backdrop-blur">
      <h3 className="text-3xl leading-tight text-[var(--color-text)]">{title}</h3>
      <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">{description}</p>
      {children}
    </article>
  );
}

export function StatCard({
  value,
  label,
  description,
}: {
  value: string;
  label: string;
  description: string;
}) {
  return (
    <article className="rounded-[1.8rem] border border-[var(--color-border)] bg-[rgba(255,255,255,0.82)] p-6 shadow-[0_24px_64px_rgba(21,27,38,0.06)]">
      <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">{value}</p>
      <h3 className="mt-4 text-2xl text-[var(--color-text)]">{label}</h3>
      <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">{description}</p>
    </article>
  );
}

export function TagList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((item) => (
        <span key={item} className="pill">
          {item}
        </span>
      ))}
    </div>
  );
}

export function ActionBanner({
  title,
  description,
  primaryAction,
  secondaryAction,
  note,
}: {
  title: string;
  description: string;
  primaryAction: Action;
  secondaryAction?: Action;
  note?: string;
}) {
  return (
    <Section>
      <Container>
        <div className="rounded-[2rem] border border-[var(--color-border)] bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(236,231,221,0.92))] p-8 shadow-[var(--shadow)] md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <SectionHeading title={title} description={description} />
              {note ? <p className="mt-5 text-sm font-medium text-[var(--color-accent)]">{note}</p> : null}
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                href={primaryAction.href}
                className="rounded-full bg-[var(--color-text)] px-5 py-3 text-sm font-medium text-white"
              >
                {primaryAction.label}
              </Link>
              {secondaryAction ? (
                <Link
                  href={secondaryAction.href}
                  className="rounded-full border border-[var(--color-border-strong)] bg-white/85 px-5 py-3 text-sm font-medium text-[var(--color-text)]"
                >
                  {secondaryAction.label}
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
