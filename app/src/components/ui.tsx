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
      className={`py-20 md:py-24 ${tint === "soft" ? "bg-[rgba(255,255,255,0.22)]" : ""} ${className}`}
    >
      {children}
    </section>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-muted)]">
      {children}
    </p>
  );
}

export function SectionHeading({
  title,
  description,
  align = "left",
}: {
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <h2 className="text-3xl leading-[1.02] text-[var(--color-text)] md:text-[3.2rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--color-muted)] md:text-lg">
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

export function HeroStat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-[1.3rem] border border-[var(--color-border)] bg-[rgba(255,255,255,0.68)] px-4 py-4 shadow-[var(--shadow-soft)]">
      <p className="text-[1.55rem] leading-none text-[var(--color-text)]">{value}</p>
      <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{label}</p>
    </div>
  );
}

function StudioVisual({ caption }: { caption: string }) {
  return (
    <div className="relative mt-8 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="visual-window rounded-[1.5rem] p-4">
        <div className="mb-4 flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/18" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/18" />
        </div>
        <div className="grid gap-3">
          <div className="visual-line w-[72%]" />
          <div className="visual-line w-[92%]" />
          <div className="visual-line w-[58%]" />
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="rounded-[1.2rem] border border-white/12 bg-white/6 p-4">
            <div className="visual-line h-3 w-[58%]" />
            <div className="mt-4 visual-line h-2.5 w-full" />
            <div className="mt-2 visual-line h-2.5 w-[74%]" />
          </div>
          <div className="rounded-[1.2rem] border border-white/12 bg-white/6 p-4">
            <div className="visual-line h-3 w-[48%]" />
            <div className="mt-4 visual-line h-2.5 w-full" />
            <div className="mt-2 visual-line h-2.5 w-[62%]" />
          </div>
        </div>
      </div>

      <div className="grid gap-4">
        <div className="visual-window rounded-[1.4rem] p-4">
          <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/58">
            Cuadro tecnico
          </p>
          <div className="mt-4 rounded-[1rem] border border-white/10 bg-white/6 p-4">
            <div className="grid gap-2">
              <div className="visual-line h-2.5 w-[72%]" />
              <div className="visual-line h-2.5 w-[88%]" />
              <div className="visual-line h-2.5 w-[54%]" />
            </div>
          </div>
        </div>
        <div className="visual-window rounded-[1.4rem] p-4">
          <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/58">Sintesis</p>
          <p className="mt-4 max-w-xs text-sm leading-6 text-white/72">{caption}</p>
        </div>
      </div>
    </div>
  );
}

function BriefingVisual({ caption, tags }: { caption: string; tags: string[] }) {
  return (
    <div className="relative mt-8 grid gap-4">
      <div className="visual-window rounded-[1.6rem] p-5">
        <div className="grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[1.2rem] border border-white/10 bg-white/6 p-5">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/58">
              Revision de caso
            </p>
            <div className="mt-4 grid gap-3">
              <div className="visual-line w-[68%]" />
              <div className="visual-line w-[92%]" />
              <div className="visual-line w-[74%]" />
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {["Contexto", "Fuentes", "Criterio"].map((item) => (
                <div
                  key={item}
                  className="rounded-[1rem] border border-white/10 bg-white/6 px-3 py-4 text-sm text-white/74"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-3">
            <div className="rounded-[1.2rem] border border-white/10 bg-white/6 p-4">
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/58">Lectura</p>
              <p className="mt-3 text-sm leading-6 text-white/72">{caption}</p>
            </div>
            <div className="rounded-[1.2rem] border border-white/10 bg-white/6 p-4">
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/58">Claves</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/12 bg-white/8 px-3 py-1.5 text-[0.74rem] text-white/76"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        {["Encuadre", "Analisis", "Documento"].map((item, index) => (
          <div key={item} className="visual-window rounded-[1.2rem] px-4 py-5">
            <p className="text-xs uppercase tracking-[0.24em] text-white/52">0{index + 1}</p>
            <p className="mt-3 text-base text-white/84">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TimelineVisual({ caption }: { caption: string }) {
  return (
    <div className="relative mt-8 grid gap-4 lg:grid-cols-[0.92fr_1.08fr]">
      <div className="visual-window rounded-[1.5rem] p-5">
        <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/58">Secuencia</p>
        <div className="mt-5 grid gap-4">
          {["Encuadre", "Correlacion", "Salida documental"].map((item, index) => (
            <div key={item} className="flex items-start gap-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/14 bg-white/8 text-xs text-white/76">
                0{index + 1}
              </span>
              <div className="pt-1">
                <p className="text-sm text-white/84">{item}</p>
                <div className="mt-3 visual-line h-2 w-[8rem]" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid gap-4">
        <div className="visual-window rounded-[1.5rem] p-5">
          <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/58">Contexto</p>
          <div className="mt-4 grid gap-3">
            <div className="visual-line w-[72%]" />
            <div className="visual-line w-[96%]" />
            <div className="visual-line w-[61%]" />
          </div>
        </div>
        <div className="visual-window rounded-[1.5rem] p-5">
          <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/58">Enfoque</p>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/72">{caption}</p>
        </div>
      </div>
    </div>
  );
}

export function VisualPlaceholder({
  label,
  title,
  caption,
  tags = [],
  className = "",
  variant = "studio",
}: {
  label: string;
  title: string;
  caption: string;
  tags?: string[];
  className?: string;
  variant?: "studio" | "briefing" | "timeline";
}) {
  return (
    <div
      data-variant={variant}
      className={`visual-frame min-h-[26rem] p-5 md:p-6 ${className}`}
    >
      <div className="visual-grid" />
      <div className="relative flex h-full flex-col justify-between">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-white/70">{label}</p>
            <h3 className="mt-3 max-w-md text-3xl leading-tight text-white md:text-[2.6rem]">
              {title}
            </h3>
          </div>
          <div className="flex flex-wrap justify-end gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="visual-chip rounded-full px-3 py-1.5 text-[0.72rem] font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        {variant === "briefing" ? <BriefingVisual caption={caption} tags={tags} /> : null}
        {variant === "timeline" ? <TimelineVisual caption={caption} /> : null}
        {variant === "studio" ? <StudioVisual caption={caption} /> : null}
      </div>
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
  stats = [],
  visual,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryAction: Action;
  secondaryAction?: Action;
  notes?: string[];
  stats?: { value: string; label: string }[];
  visual?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-border)] pb-6">
      <Container className="grid gap-10 py-12 md:py-16 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div className="max-w-4xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-4 text-4xl leading-[0.94] text-[var(--color-text)] sm:text-5xl md:text-6xl lg:text-[5.15rem]">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--color-muted)] md:text-lg md:leading-8">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={primaryAction.href} label={primaryAction.label} />
            {secondaryAction ? (
              <ButtonLink
                href={secondaryAction.href}
                label={secondaryAction.label}
                variant="secondary"
              />
            ) : null}
          </div>
          {stats.length ? (
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <HeroStat key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </div>
          ) : null}
        </div>

        <div className="grid gap-4">
          {visual}
          {notes?.length ? (
            <div className="grid gap-3 sm:grid-cols-2">
              {notes.map((note) => (
                <div
                  key={note}
                  className="premium-shell rounded-[1.5rem] px-5 py-5 text-sm leading-6 text-[var(--color-text)]"
                >
                  {note}
                </div>
              ))}
            </div>
          ) : null}
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
      className={`premium-shell flex h-full flex-col rounded-[1.8rem] p-6 md:p-7 ${className}`}
    >
      <h3 className="text-[1.95rem] leading-tight text-[var(--color-text)] md:text-[2.15rem]">
        {title}
      </h3>
      <p className="mt-3 text-[0.98rem] leading-7 text-[var(--color-muted)]">{description}</p>
      {children ? <div className="mt-5 flex flex-1 flex-col gap-4">{children}</div> : null}
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
    <article className="premium-shell rounded-[1.8rem] p-6">
      <div className="flex items-center gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-strong)]">
          {value}
        </span>
        <h3 className="text-[1.65rem] leading-tight text-[var(--color-text)]">{label}</h3>
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
        <div className="premium-shell rounded-[2.2rem] p-6 md:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.06fr_0.94fr] lg:items-end">
            <div>
              <Eyebrow>Contacto cualificado</Eyebrow>
              <SectionHeading title={title} description={description} />
              {note ? <p className="mt-5 text-sm font-medium text-[var(--color-accent-strong)]">{note}</p> : null}
            </div>
            <div className="grid gap-4 lg:justify-items-end">
              <div className="visual-window w-full max-w-md rounded-[1.6rem] p-5 text-white">
                <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/55">
                  Consulta inicial
                </p>
                <div className="mt-4 grid gap-3">
                  <div className="visual-line h-2.5 w-[72%]" />
                  <div className="visual-line h-2.5 w-[88%]" />
                  <div className="visual-line h-2.5 w-[52%]" />
                </div>
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
        </div>
      </Container>
    </Section>
  );
}
