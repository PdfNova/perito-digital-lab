import type { Metadata } from "next";
import Link from "next/link";
import {
  ActionBanner,
  Container,
  EditorialMetaStrip,
  ImagePanel,
  PageHero,
  Section,
  SectionHeading,
  SurfaceCard,
  TagList,
} from "@/components/ui";

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

export const metadata: Metadata = {
  title: "Episodio 01: valor documental de la evidencia digital",
  description:
    "Pagina editorial del episodio 01 sobre contexto, integridad, preservacion y utilidad real de la evidencia digital.",
};

export default function Episode01Page() {
  return (
    <>
      <PageHero
        eyebrow="Video"
        title="Que hace util a una evidencia digital y que la debilita"
        subtitle="Pagina editorial del episodio 01: una pieza breve, grabable y reutilizable para explicar por que el valor de una evidencia depende de contexto, integridad, preservacion y capacidad de documentacion."
        primaryAction={{ href: "#estructura", label: "Ver estructura" }}
        secondaryAction={{
          href: "/recursos/articulos/valor-documental-evidencia-digital",
          label: "Leer articulo base",
        }}
        stats={[
          { value: "5:30-6:00", label: "Duracion objetivo" },
          { value: "5", label: "Bloques narrativos" },
          { value: "2", label: "Shorts derivados" },
        ]}
        notes={[
          "El tono esta pensado para voz serena, didactica y sin dramatizacion.",
          "La pieza funciona como contenido de autoridad y tambien como puerta de entrada a la biblioteca editorial.",
        ]}
        visual={
          <ImagePanel
            src="/images/resources/resources-featured.svg"
            alt="Pieza audiovisual editorial sobre evidencia digital con guion, monitor y notas tecnicas"
            eyebrow="Episodio 01"
            title="Una pieza breve para fijar el marco metodologico del proyecto"
            description="El episodio abre la capa audiovisual del sitio y articula el primer lote entre video, articulos y piezas verticales derivadas."
            tags={["Video largo", "Faceless", "Criterio tecnico"]}
            priority
            aspect="landscape"
          />
        }
      />

      <Section>
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_19rem] lg:items-start">
          <div className="grid gap-6">
            <EditorialMetaStrip
              items={[
                { label: "Formato", value: "Video largo" },
                { label: "Estado", value: "Guion listo para grabacion" },
                { label: "Audiencia", value: "Perfiles juridicos, tecnicos y decisores" },
                { label: "Continuidad", value: "Conecta con articulo base y guia practica" },
              ]}
            />

            <SurfaceCard
              title="Resumen del episodio"
              description="No toda evidencia digital tiene el mismo valor. La pieza explica que una captura, un archivo o un registro solo resultan realmente utiles cuando pueden leerse con contexto, sostenerse con integridad y explicarse con claridad."
            >
              <div className="grid gap-3 text-sm leading-7 text-[var(--color-muted)]">
                <p>El episodio evita afirmaciones infladas y se centra en utilidad real, lectura prudente y valor documental.</p>
                <p>Tambien deja el puente ya preparado hacia preservacion inicial y hacia la conversacion comercial del sitio.</p>
              </div>
              <TagList items={["Contexto", "Integridad", "Preservacion", "Documentacion"]} />
            </SurfaceCard>
          </div>

          <div className="grid gap-4">
            <SurfaceCard
              title="Articulos relacionados"
              description="La pieza larga se apoya en dos articulos ya navegables para ampliar el mismo marco con mas detalle."
            >
              <Link
                className="inline-link"
                href="/recursos/articulos/valor-documental-evidencia-digital"
              >
                Leer articulo base
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
                Leer guia de alcance
              </Link>
            </SurfaceCard>
          </div>
        </Container>
      </Section>

      <Section tint="soft">
        <Container id="estructura">
          <SectionHeading
            title="Estructura del episodio"
            description="La pagina del video no muestra solo un resumen. Presenta la arquitectura narrativa de la pieza y permite entender su utilidad antes de grabarla o reutilizarla."
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
                  Bloque pensado para locucion clara, apoyo visual sobrio y continuidad con el resto
                  de la biblioteca.
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
            description="Los cortes cortos no se plantean como contenido aislado, sino como extensiones del episodio y como puerta de entrada a la lectura larga."
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
                  <p>{short.cta}</p>
                </div>
              </SurfaceCard>
            ))}
          </div>
        </Container>
      </Section>

      <ActionBanner
        title="Si este episodio ya deja claro el marco, el siguiente paso es leer la pieza base o plantear una necesidad con mejor contexto"
        description="La capa audiovisual sirve para fijar ideas principales con claridad. La biblioteca editorial amplifica el detalle y la pagina de contacto permite convertir esa lectura en una conversacion mejor planteada."
        primaryAction={{
          href: "/recursos/articulos/valor-documental-evidencia-digital",
          label: "Leer articulo base",
        }}
        secondaryAction={{ href: "/contacto", label: "Iniciar contacto" }}
        note="El episodio ya esta estructurado para grabacion y sus dos shorts pueden reutilizarse como piezas verticales de entrada."
        highlights={[
          "Pieza audiovisual alineada con el tono tecnico y discreto de la marca.",
          "Continuidad directa entre video largo, shorts, articulos y contacto.",
        ]}
      />
    </>
  );
}
