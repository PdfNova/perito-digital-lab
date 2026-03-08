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
      className={`py-16 md:py-20 ${tint === "soft" ? "bg-[rgba(255,255,255,0.28)]" : ""} ${className}`}
    >
      {children}
    </section>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[var(--color-muted)]">
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
      <h2 className="text-3xl leading-tight text-[var(--color-text)] md:text-[3.15rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--color-muted)] md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function ButtonLink({
  href,
  label,
  variant = "primary",
}: Action & {
  variant?: "primary" | "secondary";
}) {
  return (
    <Link href={href} className={variant === "primary" ? "button-primary" : "button-secondary"}>
      {label}
    </Link>
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
      <Container className="grid gap-10 py-16 md:py-20 lg:grid-cols-[1.06fr_0.94fr] lg:items-end">
        <div className="max-w-4xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-4 text-4xl leading-[0.95] text-[var(--color-text)] sm:text-5xl md:text-6xl lg:text-[4.7rem]">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--color-muted)] md:text-lg md:leading-8">
            {subtitle}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <ButtonLink href={primaryAction.href} label={primaryAction.label} />
            {secondaryAction ? (
              <ButtonLink
                href={secondaryAction.href}
                label={secondaryAction.label}
                variant="secondary"
              />
            ) : null}
          </div>
        </div>
        <div className="panel-surface rounded-[2rem] p-5 md:p-6">
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">
            Marco inicial
          </p>
          <div className="mt-4 grid gap-3">
            {notes?.map((note) => (
              <div
                key={note}
                className="rounded-[1.25rem] border border-[var(--color-border)] bg-white/88 px-4 py-4 text-sm leading-6 text-[var(--color-text)]"
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
  className = "",
}: {
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <article
      className={`panel-surface flex h-full flex-col rounded-[1.7rem] p-5 md:p-6 ${className}`}
    >
      <h3 className="text-[1.8rem] leading-tight text-[var(--color-text)] md:text-[2rem]">
        {title}
      </h3>
      <p className="mt-3 text-[0.98rem] leading-7 text-[var(--color-muted)]">{description}</p>
      {children ? <div className="mt-5">{children}</div> : null}
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
    <article className="panel-surface rounded-[1.7rem] p-5 md:p-6">
      <div className="flex items-center gap-4">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--accent-soft)] text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
          {value}
        </span>
        <h3 className="text-[1.55rem] leading-tight text-[var(--color-text)]">{label}</h3>
      </div>
      <p className="mt-4 text-[0.98rem] leading-7 text-[var(--color-muted)]">{description}</p>
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
        <div className="rounded-[2rem] border border-[var(--color-border)] bg-[linear-gradient(135deg,rgba(255,255,255,0.94),rgba(236,231,221,0.96))] p-6 shadow-[var(--shadow)] md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <SectionHeading title={title} description={description} />
              {note ? <p className="mt-5 text-sm font-medium text-[var(--color-accent)]">{note}</p> : null}
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <ButtonLink href={primaryAction.href} label={primaryAction.label} />
              {secondaryAction ? (
                <ButtonLink
                  href={secondaryAction.href}
                  label={secondaryAction.label}
                  variant="secondary"
                />
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
