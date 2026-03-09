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

type Tone = "default" | "light";

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
  tint?: "default" | "soft" | "dark";
}) {
  const tintClass =
    tint === "soft"
      ? "bg-[linear-gradient(180deg,rgba(228,235,243,0.58),rgba(244,247,250,0.18))]"
      : tint === "dark"
        ? "bg-[linear-gradient(135deg,#0d1521_0%,#162536_52%,#0a1018_100%)] text-white"
        : "";

  return <section className={`py-20 md:py-24 ${tintClass} ${className}`}>{children}</section>;
}

export function Eyebrow({
  children,
  tone = "default",
}: {
  children: React.ReactNode;
  tone?: Tone;
}) {
  return (
    <p
      className={`text-[0.68rem] font-semibold uppercase tracking-[0.3em] ${
        tone === "light" ? "text-white/62" : "text-[var(--color-muted)]"
      }`}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  title,
  description,
  align = "left",
  tone = "default",
}: {
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: Tone;
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <h2
        className={`text-3xl leading-[0.98] md:text-[3.35rem] ${
          tone === "light" ? "text-white" : "text-[var(--color-text)]"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 max-w-2xl text-base leading-7 md:text-lg ${
            tone === "light" ? "text-white/72" : "text-[var(--color-muted)]"
          }`}
        >
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
  className = "",
}: Action & {
  variant?: "primary" | "secondary";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`${variant === "primary" ? "button-primary" : "button-secondary"} ${className}`}
    >
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
    <div className="hero-stat rounded-[1.5rem] px-4 py-4">
      <p className="text-[1.7rem] leading-none text-white">{value}</p>
      <p className="mt-2 text-sm leading-6 text-white/70">{label}</p>
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
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </div>
      <div className="image-panel__veil" />
      <div className="image-panel__chrome" />
      <figcaption className="image-panel__content">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="max-w-lg">
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-white/66">{eyebrow}</p>
            <h3 className="mt-3 text-3xl leading-tight text-white md:text-[2.45rem]">{title}</h3>
            <p className="mt-4 max-w-md text-sm leading-6 text-white/74 md:text-[0.96rem] md:leading-7">
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
  chips = [],
  visual,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryAction: Action;
  secondaryAction?: Action;
  notes?: string[];
  stats?: { value: string; label: string }[];
  chips?: string[];
  visual?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pb-6 pt-6 md:pt-8">
      <Container>
        <div className="hero-shell">
          <div className="hero-shell__orb hero-shell__orb--one" />
          <div className="hero-shell__orb hero-shell__orb--two" />
          <div className="hero-shell__grid">
            <div className="max-w-4xl">
              <Eyebrow tone="light">{eyebrow}</Eyebrow>
              <h1 className="mt-4 text-4xl leading-[0.9] text-white sm:text-5xl md:text-6xl lg:text-[5.3rem]">
                {title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/72 md:text-lg md:leading-8">
                {subtitle}
              </p>
              {chips.length ? <TagList items={chips} tone="light" className="mt-6" /> : null}
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
                      className="rounded-[1.5rem] border border-white/10 bg-white/6 px-5 py-5 text-sm leading-6 text-white/78 backdrop-blur-xl"
                    >
                      {note}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
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
  tone = "default",
  compact = false,
}: {
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
  tone?: Tone;
  compact?: boolean;
}) {
  const toneClass =
    tone === "light"
      ? "border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] shadow-[0_28px_80px_rgba(4,10,20,0.24)]"
      : "premium-shell";

  return (
    <article
      className={`${toneClass} flex h-full flex-col rounded-[1.8rem] ${
        compact ? "p-5 md:p-6" : "p-6 md:p-7"
      } ${className}`}
    >
      <h3
        className={`leading-tight ${
          compact ? "text-[1.42rem] md:text-[1.62rem]" : "text-[1.8rem] md:text-[2.1rem]"
        } ${
          tone === "light" ? "text-white" : "text-[var(--color-text)]"
        }`}
      >
        {title}
      </h3>
      <p
        className={`${
          compact ? "mt-2.5 text-[0.94rem] leading-6.5" : "mt-3 text-[0.98rem] leading-7"
        } ${
          tone === "light" ? "text-white/70" : "text-[var(--color-muted)]"
        }`}
      >
        {description}
      </p>
      {children ? (
        <div className={`flex flex-1 flex-col ${compact ? "mt-4 gap-3" : "mt-5 gap-4"}`}>{children}</div>
      ) : null}
    </article>
  );
}

export function StatCard({
  value,
  label,
  description,
  tone = "default",
}: {
  value: string;
  label: string;
  description: string;
  tone?: Tone;
}) {
  return (
    <article
      className={`rounded-[1.8rem] p-6 ${
        tone === "light"
          ? "border border-white/10 bg-white/6 shadow-[0_28px_80px_rgba(4,10,20,0.24)]"
          : "premium-shell"
      }`}
    >
      <div className="flex items-center gap-4">
        <span
          className={`flex h-12 w-12 items-center justify-center rounded-full text-xs font-semibold uppercase tracking-[0.22em] ${
            tone === "light"
              ? "bg-white/10 text-[var(--color-accent-bright)]"
              : "bg-[var(--color-accent-soft)] text-[var(--color-accent-strong)]"
          }`}
        >
          {value}
        </span>
        <h3
          className={`text-[1.65rem] leading-tight ${
            tone === "light" ? "text-white" : "text-[var(--color-text)]"
          }`}
        >
          {label}
        </h3>
      </div>
      <p
        className={`mt-4 text-[0.98rem] leading-7 ${
          tone === "light" ? "text-white/70" : "text-[var(--color-muted)]"
        }`}
      >
        {description}
      </p>
    </article>
  );
}

export function TagList({
  items,
  tone = "default",
  className = "",
}: {
  items: string[];
  tone?: Tone;
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {items.map((item) => (
        <span key={item} className={tone === "light" ? "pill pill--light" : "pill"}>
          {item}
        </span>
      ))}
    </div>
  );
}

export function BulletList({
  items,
  tone = "default",
  className = "",
}: {
  items: string[];
  tone?: Tone;
  className?: string;
}) {
  return (
    <ul
      className={`space-y-3 text-sm leading-7 ${
        tone === "light" ? "text-white/72" : "text-[var(--color-muted)]"
      } ${className}`}
    >
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            className={`mt-2 h-1.5 w-1.5 rounded-full ${
              tone === "light" ? "bg-[var(--color-accent-bright)]" : "bg-[var(--color-accent-strong)]"
            }`}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
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
    <Section className="pt-8">
      <Container>
        <div className="hero-shell">
          <div className="hero-shell__orb hero-shell__orb--one" />
          <div className="hero-shell__orb hero-shell__orb--two" />
          <div className="grid gap-8 lg:grid-cols-[1.06fr_0.94fr] lg:items-end">
            <div>
              <Eyebrow tone="light">{eyebrow}</Eyebrow>
              <SectionHeading title={title} description={description} tone="light" />
              {note ? (
                <p className="mt-5 text-sm font-medium text-[var(--color-accent-bright)]">{note}</p>
              ) : null}
              {highlights.length ? (
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {highlights.map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.2rem] border border-white/10 bg-white/6 px-4 py-4 text-sm leading-6 text-white/78"
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
                  Encaje de la consulta
                </p>
                <div className="mt-4 grid gap-3">
                  <div className="visual-line h-2.5 w-[72%]" />
                  <div className="visual-line h-2.5 w-[88%]" />
                  <div className="visual-line h-2.5 w-[52%]" />
                </div>
                <div className="mt-5 grid gap-2 text-sm text-white/72">
                  <p>Contexto y materiales</p>
                  <p>Objetivo tecnico o pericial</p>
                  <p>Salida documental esperable</p>
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
          className="rounded-[1.35rem] border border-[var(--color-border)] bg-[rgba(255,255,255,0.8)] px-4 py-4 shadow-[var(--shadow-soft)]"
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
  tone = "default",
  compact = false,
}: {
  type: string;
  title: string;
  description: string;
  meta?: string;
  href: string;
  cta: string;
  tags?: string[];
  className?: string;
  tone?: Tone;
  compact?: boolean;
}) {
  return (
    <SurfaceCard
      title={title}
      description={description}
      className={className}
      tone={tone}
      compact={compact}
    >
      <div
        className={`grid gap-3 text-sm leading-7 ${
          tone === "light" ? "text-white/70" : "text-[var(--color-muted)]"
        }`}
      >
        <p
          className={`text-[0.7rem] font-semibold uppercase tracking-[0.24em] ${
            tone === "light" ? "text-[var(--color-accent-bright)]" : "text-[var(--color-accent-strong)]"
          }`}
        >
          {type}
        </p>
        {meta ? <p>{meta}</p> : null}
      </div>
      {tags.length ? <TagList items={tags} tone={tone} /> : null}
      <div className="pt-1">
        <ButtonLink href={href} label={cta} variant={tone === "light" ? "primary" : "secondary"} />
      </div>
    </SurfaceCard>
  );
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap items-center gap-2 text-sm text-[var(--color-muted)]"
    >
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
