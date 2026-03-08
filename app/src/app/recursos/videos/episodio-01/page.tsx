import type { Metadata } from "next";
import Link from "next/link";
import {
  ActionBanner,
  Breadcrumbs,
  ButtonLink,
  Container,
  EditorialMetaStrip,
  ImagePanel,
  PageHero,
  Section,
  SectionHeading,
  SurfaceCard,
  TagList,
} from "@/components/ui";
import { buildPageMetadata } from "@/app/metadata";
import {
  articleBaseCtaLabel,
  contactPageCtaLabel,
  episode01EmbedUrl,
  episode01ExternalUrl,
  episode01HasMediaAccess,
  technicalGuideCtaLabel,
} from "@/app/site-config";

const blocks = [
  {
    step: "01",
    title: "El valor no depende solo del hallazgo",
    description:
      "El episodio abre con una idea base: encontrar un archivo o una captura no equivale automaticamente a disponer de una evidencia util.",
  },
  {
    step: "02",
    title: "Cuatro factores que aumentan la utilidad",
    description:
      "Contexto, integridad, preservacion y documentacion se presentan como los cuatro pilares que refuerzan la lectura de una pieza digital.",
  },
  {
    step: "03",
    title: "Que suele debilitar una evidencia",
    description:
      "Se revisan errores frecuentes como manipular antes de documentar, conservar sin orden o depender de materiales incompletos.",
  },
  {
    step: "04",
    title: "De la pieza aislada a la cronologia",
    description:
      "La evidencia gana valor cuando puede integrarse en una secuencia comprensible y en un informe legible para terceros.",
  },
  {
    step: "05",
    title: "Cierre y continuidad editorial",
    description:
      "El episodio concluye subrayando que el valor documental importa tanto como el hallazgo tecnico y deriva hacia articulo y siguiente pieza.",
  },
];

const shorts = [
  {
    title: "No toda evidencia digital vale lo mismo",
    hook: "No toda evidencia digital vale lo mismo, aunque a simple vista parezca igual.",
    description:
      "Short pensado para fijar la idea central del episodio y abrir la puerta al contenido largo sin dramatizacion ni sobrepromesa.",
    meta: "35 a 45 segundos",
    cta: "Ver episodio completo",
  },
  {
    title: "El contexto puede ser tan importante como el archivo",
    hook: "A veces el problema no es el archivo. El problema es todo lo que falta alrededor.",
    description:
      "Corte vertical que explica por que fecha, origen y secuencia cambian la lectura de un mismo material digital.",
    meta: "40 a 50 segundos",
    cta: "Leer el articulo asociado",
  },
];

export const metadata: Metadata = buildPageMetadata({
  title: "Episodio 01: valor documental de la evidencia digital",
  description:
    "Pagina editorial del episodio 01 sobre contexto, integridad, preservacion y utilidad real de la evidencia digital.",
  path: "/recursos/videos/episodio-01",
  type: "article",
});

export default function Episode01Page() {
  const hasEmbed = Boolean(episode01EmbedUrl);
  const hasExternalAccess = Boolean(episode01ExternalUrl);

  return (
    <>
      <PageHero
        eyebrow="Episodio editorial"
        title="Que hace util a una evidencia digital y que la debilita"
        subtitle="Episodio editorial de apertura sobre contexto, integridad, preservacion y valor documental. La pieza ya puede leerse como una unidad publica completa dentro del hub y concentra su resumen, estructura y derivados breves."
        primaryAction={{ href: "#estructura", label: "Ver estructura" }}
        secondaryAction={{
          href: "/recursos/articulos/valor-documental-evidencia-digital",
          label: articleBaseCtaLabel,
        }}
        stats={[
          { value: "5:30-6:00", label: "Duracion de referencia" },
          { value: "5", label: "Bloques narrativos" },
          { value: "2", label: "Shorts derivados" },
        ]}
        notes={[
          "La pieza mantiene una voz serena, didactica y sin dramatizacion.",
          "La pieza funciona como contenido de autoridad y tambien como puerta de entrada a la biblioteca editorial.",
        ]}
        visual={
          <ImagePanel
            src="/images/resources/resources-featured.svg"
            alt="Pieza audiovisual editorial sobre evidencia digital con guion, monitor y notas tecnicas"
            eyebrow="Episodio 01"
            title="Una pieza breve para fijar el marco metodologico del proyecto"
            description="El episodio articula la capa audiovisual y editorial del sitio en una misma ruta publica, conectada con articulos, guia tecnica y piezas verticales derivadas."
            tags={["Serie inicial", "Pieza editorial", "Criterio tecnico"]}
            priority
            aspect="landscape"
          />
        }
      />

      <Section>
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_19rem] lg:items-start">
          <div className="grid gap-6">
            <Breadcrumbs
              items={[
                { href: "/", label: "Inicio" },
                { href: "/recursos", label: "Recursos" },
                { label: "Episodio 01" },
              ]}
            />
            <EditorialMetaStrip
              items={[
                { label: "Formato", value: "Episodio editorial" },
                { label: "Disponibilidad", value: "Lectura publica y estructura completa" },
                { label: "Audiencia", value: "Perfiles juridicos, tecnicos y decisores" },
                { label: "Continuidad", value: "Conecta con articulo base, guia y contacto" },
              ]}
            />

            <SurfaceCard
              title="Resumen del episodio"
              description="No toda evidencia digital tiene el mismo valor. La pieza explica que una captura, un archivo o un registro solo resultan realmente utiles cuando pueden leerse con contexto, sostenerse con integridad y explicarse con claridad."
            >
              <div className="grid gap-3 text-sm leading-7 text-[var(--color-muted)]">
                <p>El episodio evita afirmaciones infladas y se centra en utilidad real, lectura prudente y valor documental.</p>
                <p>La pieza ya funciona como lectura autonoma y como puerta de entrada a los recursos que desarrollan el mismo marco con mas detalle.</p>
              </div>
              <TagList items={["Contexto", "Integridad", "Preservacion", "Documentacion"]} />
              <div className="flex flex-wrap gap-3 pt-1">
                <ButtonLink
                  href="/recursos/articulos/valor-documental-evidencia-digital"
                  label={articleBaseCtaLabel}
                  variant="secondary"
                />
                <ButtonLink href="/contacto" label="Llevar este marco a una consulta" variant="secondary" />
              </div>
            </SurfaceCard>
          </div>

          <div className="grid gap-4">
            {hasEmbed ? (
              <div className="premium-shell rounded-[1.8rem] p-4 md:p-5">
                <div className="overflow-hidden rounded-[1.35rem] border border-[var(--color-border)] bg-[rgba(255,255,255,0.62)] shadow-[var(--shadow-soft)]">
                  <div className="aspect-video">
                    <iframe
                      src={episode01EmbedUrl}
                      title="Episodio 01"
                      className="h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
                <div className="mt-4 grid gap-3 text-sm leading-7 text-[var(--color-muted)]">
                  <p>Acceso audiovisual integrado en la misma ruta editorial para mantener continuidad entre visionado, lectura y contacto.</p>
                  {hasExternalAccess ? (
                    <div>
                      <ButtonLink href={episode01ExternalUrl} label="Abrir acceso audiovisual" variant="secondary" />
                    </div>
                  ) : null}
                </div>
              </div>
            ) : (
              <SurfaceCard
                title="Como se publica esta pieza"
                description="Esta ruta funciona como pieza editorial completa del episodio: concentra la idea central, sus bloques, los cortes breves derivados y la continuidad con el resto del hub."
              >
                <TagList items={["Lectura guiada", "Serie inicial", "Hub editorial"]} />
                {episode01HasMediaAccess ? (
                  <div className="pt-1">
                    <ButtonLink href={episode01ExternalUrl} label="Abrir acceso audiovisual" variant="secondary" />
                  </div>
                ) : null}
              </SurfaceCard>
            )}

            <SurfaceCard
              title="Articulos relacionados"
              description="La pieza larga se apoya en dos articulos ya navegables para ampliar el mismo marco con mas detalle."
            >
              <Link
                className="inline-link"
                href="/recursos/articulos/valor-documental-evidencia-digital"
              >
                {articleBaseCtaLabel}
              </Link>
              <Link
                className="inline-link"
                href="/recursos/articulos/preservacion-inicial-evidencia-digital"
              >
                Leer articulo practico
              </Link>
              <Link
                className="inline-link"
                href="/recursos/guias/revision-tecnica-evidencia-digital"
              >
                {technicalGuideCtaLabel}
              </Link>
            </SurfaceCard>
          </div>
        </Container>
      </Section>

      <Section tint="soft">
        <Container id="estructura">
          <SectionHeading
            title="Estructura del episodio"
            description="La arquitectura narrativa queda visible para que la pieza pueda leerse, compartirse y reutilizarse con claridad dentro del ecosistema editorial."
            align="center"
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
            {blocks.map((block) => (
              <SurfaceCard
                key={block.step}
                title={`${block.step}. ${block.title}`}
                description={block.description}
              >
                <p className="text-sm leading-7 text-[var(--color-muted)]">
                  Bloque pensado para lectura guiada, locucion clara o ambas, con apoyo visual sobrio
                  y continuidad con el resto de la biblioteca.
                </p>
              </SurfaceCard>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <ImagePanel
            src="/images/resources/resources-library.svg"
            alt="Biblioteca editorial con recursos audiovisuales y cortes verticales derivados"
            eyebrow="Shorts derivados"
            title="Dos piezas breves para vertical que extienden el mismo argumento"
            description="Los cortes cortos funcionan como piezas editoriales breves: abren el argumento central, facilitan distribucion y empujan hacia lectura larga o contacto mejor encuadrado."
            tags={["Vertical", "Subtitulos", "Reutilizacion"]}
            aspect="landscape"
          />

          <div className="grid gap-4">
            {shorts.map((short) => (
              <SurfaceCard key={short.title} title={short.title} description={short.description}>
                <div className="grid gap-3 text-sm leading-7 text-[var(--color-muted)]">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-strong)]">
                    Hook
                  </p>
                  <p>{short.hook}</p>
                  <p>{short.meta}</p>
                  <p className="font-medium text-[var(--color-text)]">{short.cta}</p>
                </div>
              </SurfaceCard>
            ))}
          </div>
        </Container>
      </Section>

      <ActionBanner
        eyebrow="Continuidad editorial"
        title="Si este episodio ya deja claro el marco, el siguiente paso es profundizar en la pieza base o trasladar una necesidad real a una consulta mejor encuadrada"
        description="El episodio ya funciona como una pieza publica valida dentro del hub: resume el argumento principal, conecta con lecturas mas detalladas y permite avanzar hacia contacto sin perder continuidad."
        primaryAction={{
          href: "/recursos/articulos/valor-documental-evidencia-digital",
          label: articleBaseCtaLabel,
        }}
        secondaryAction={{ href: "/contacto", label: contactPageCtaLabel }}
        note="La misma ruta ya puede convivir con lectura editorial, acceso audiovisual futuro y continuidad directa hacia recursos y contacto."
        highlights={[
          "Pieza editorial alineada con el tono tecnico y discreto de la marca.",
          "Continuidad directa entre video largo, shorts, articulos y contacto.",
        ]}
      />
    </>
  );
}
