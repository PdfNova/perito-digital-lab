import Image from "next/image";
import Link from "next/link";

type Action = {
  href: string;
  label: string;
};

type MediaTag = {
  label: string;
};

type BreadcrumbItem = {
  href?: string;
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

export function ImagePanel({
  src,
  alt,
  eyebrow,
  title,
  description,
  tags = [],
  className = "",
  priority = false,
  aspect = "portrait",
}: {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
  description: string;
  tags?: MediaTag[] | string[];
  className?: string;
  priority?: boolean;
  aspect?: "portrait" | "landscape" | "wide";
}) {
  const normalizedTags = tags.map((tag) => (typeof tag === "string" ? { label: tag } : tag));

  return (
    <figure
      className={`image-panel image-panel--${aspect} relative overflow-hidden rounded-[2rem] ${className}`}
    >
      <div className="image-panel__media">
        <Image src={src} alt={alt} fill priority={priority} className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
      </div>
      <div className="image-panel__veil" />
      <figcaption className="image-panel__content">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="max-w-lg">
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-white/72">{eyebrow}</p>
            <h3 className="mt-3 text-3xl leading-tight text-white md:text-[2.45rem]">{title}</h3>
            <p className="mt-4 max-w-md text-sm leading-6 text-white/76 md:text-[0.96rem] md:leading-7">
              {description}
            </p>
          </div>
          {normalizedTags.length ? (
            <div className="flex flex-wrap justify-end gap-2">
              {normalizedTags.map((tag) => (
                <span key={tag.label} className="image-panel__tag">
                  {tag.label}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </figcaption>
    </figure>
  );
}

export function VisualPlaceholder({
  label,
  title,
  caption,
  tags = [],
  className = "",
}: {
  label: string;
  title: string;
  caption: string;
  tags?: string[];
  className?: string;
  variant?: "studio" | "briefing" | "timeline";
}) {
  return (
    <div className={`visual-frame min-h-[26rem] p-5 md:p-6 ${className}`}>
      <div className="visual-grid" />
      <div className="relative flex h-full flex-col justify-between">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="max-w-lg">
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-white/70">{label}</p>
            <h3 className="mt-3 text-3xl leading-tight text-white md:text-[2.4rem]">{title}</h3>
            <p className="mt-5 max-w-md text-sm leading-6 text-white/72">{caption}</p>
          </div>
          <div className="flex flex-wrap justify-end gap-2">
            {tags.map((tag) => (
              <span key={tag} className="visual-chip rounded-full px-3 py-1.5 text-[0.72rem] font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {["Contexto", "Lectura", "Documento"].map((item) => (
            <div key={item} className="visual-window rounded-[1.2rem] px-4 py-5">
              <p className="text-xs uppercase tracking-[0.24em] text-white/52">{item}</p>
              <div className="mt-4 visual-line h-2.5 w-[82%]" />
              <div className="mt-3 visual-line h-2.5 w-[62%]" />
            </div>
          ))}
        </div>
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
  eyebrow = "Siguiente paso",
  title,
  description,
  primaryAction,
  secondaryAction,
  note,
  highlights = [],
}: {
  eyebrow?: string;
  title: string;
  description: string;
  primaryAction: Action;
  secondaryAction?: Action;
  note?: string;
  highlights?: string[];
}) {
  return (
    <Section>
      <Container>
        <div className="premium-shell rounded-[2.2rem] p-6 md:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.06fr_0.94fr] lg:items-end">
            <div>
              <Eyebrow>{eyebrow}</Eyebrow>
              <SectionHeading title={title} description={description} />
              {note ? <p className="mt-5 text-sm font-medium text-[var(--color-accent-strong)]">{note}</p> : null}
              {highlights.length ? (
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {highlights.map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.2rem] border border-[var(--color-border)] bg-[rgba(255,255,255,0.56)] px-4 py-4 text-sm leading-6 text-[var(--color-text)]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
            <div className="grid gap-4 lg:justify-items-end">
              <div className="visual-window w-full max-w-md rounded-[1.6rem] p-5 text-white">
                <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/55">
                  Conversacion inicial
                </p>
                <div className="mt-4 grid gap-3">
                  <div className="visual-line h-2.5 w-[72%]" />
                  <div className="visual-line h-2.5 w-[88%]" />
                  <div className="visual-line h-2.5 w-[52%]" />
                </div>
                <div className="mt-5 grid gap-2 text-sm text-white/72">
                  <p>Contexto del caso</p>
                  <p>Materiales disponibles</p>
                  <p>Objetivo tecnico o documental</p>
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

export function EditorialMetaStrip({
  items,
}: {
  items: { label: string; value: string }[];
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-[1.35rem] border border-[var(--color-border)] bg-[rgba(255,255,255,0.72)] px-4 py-4 shadow-[var(--shadow-soft)]"
        >
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-[var(--color-muted)]">
            {item.label}
          </p>
          <p className="mt-2 text-sm leading-6 text-[var(--color-text)]">{item.value}</p>
        </div>
      ))}
    </div>
  );
}

export function ProseCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <article className={`premium-shell rounded-[2rem] p-6 md:p-8 lg:p-10 ${className}`}>
      <div className="article-prose">{children}</div>
    </article>
  );
}

export function ContentLinkCard({
  type,
  title,
  description,
  meta,
  href,
  cta,
  tags = [],
  className = "",
}: {
  type: string;
  title: string;
  description: string;
  meta?: string;
  href: string;
  cta: string;
  tags?: string[];
  className?: string;
}) {
  return (
    <SurfaceCard title={title} description={description} className={className}>
      <div className="grid gap-3 text-sm leading-7 text-[var(--color-muted)]">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-strong)]">
          {type}
        </p>
        {meta ? <p>{meta}</p> : null}
      </div>
      {tags.length ? <TagList items={tags} /> : null}
      <div className="pt-1">
        <ButtonLink href={href} label={cta} variant="secondary" />
      </div>
    </SurfaceCard>
  );
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-[var(--color-muted)]">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <div key={`${item.label}-${index}`} className="flex items-center gap-2">
            {item.href && !isLast ? (
              <Link href={item.href} className="hover:text-[var(--color-text)]">
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? "font-medium text-[var(--color-text)]" : ""}>{item.label}</span>
            )}
            {!isLast ? <span className="text-[var(--color-muted)]/60">/</span> : null}
          </div>
        );
      })}
    </nav>
  );
}
