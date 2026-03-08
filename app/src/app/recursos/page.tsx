import type { Metadata } from "next";
import Link from "next/link";
import {
  ActionBanner,
  Container,
  Eyebrow,
  ImagePanel,
  PageHero,
  Section,
  SectionHeading,
  SurfaceCard,
  TagList,
} from "@/components/ui";

const featuredPieces = [
  {
    type: "Video largo",
    title: "Que hace util a una evidencia digital y que la debilita",
    description:
      "Pieza principal de apertura sobre contexto, integridad, preservacion y valor documental en evidencia digital.",
    meta: "Duracion objetivo: 5 min 30 s a 6 min",
    status: "Guion cerrado y listo para grabacion",
    tags: ["Video", "Evidencia digital", "Marco base"],
  },
  {
    type: "Articulo 01",
    title: "Evidencia digital: que la hace mas util y que la debilita",
    description:
      "Articulo base de autoridad para explicar por que una pieza digital necesita contexto, orden y trazabilidad para sostenerse mejor.",
    meta: "Lectura estimada: 6 min",
    status: "Listo para publicar",
    tags: ["Articulo", "Integridad", "Documentacion"],
  },
  {
    type: "Articulo 02",
    title: "Preservacion inicial de informacion digital: errores que conviene evitar",
    description:
      "Guia breve y compartible sobre errores tempranos de conservacion y criterios minimos para llegar mejor al analisis.",
    meta: "Lectura estimada: 6 min",
    status: "Listo para publicar",
    tags: ["Articulo", "Preservacion", "Criterio inicial"],
  },
];

const shortPieces = [
  {
    title: "No toda evidencia digital vale lo mismo",
    description:
      "Corte vertical pensado para fijar la idea central del episodio: el valor depende tambien del contexto, la integridad y la claridad documental.",
    meta: "35 a 45 segundos",
  },
  {
    title: "El contexto puede ser tan importante como el archivo",
    description:
      "Short derivado para explicar por que fecha, origen y secuencia cambian la lectura de un mismo material digital.",
    meta: "40 a 50 segundos",
  },
];

const pillars = [
  {
    title: "Evidencia digital y preservacion",
    description:
      "Base metodologica para entender mejor integridad, contexto, conservacion y errores frecuentes.",
  },
  {
    title: "OSINT con criterio",
    description:
      "Piezas orientadas a utilidad real, limites de atribucion y lectura prudente de fuentes abiertas.",
  },
  {
    title: "Trazabilidad y cronologias",
    description:
      "Contenido pensado para ordenar secuencias, relaciones tecnicas y continuidad documental.",
  },
  {
    title: "Informes y documentacion",
    description:
      "Notas y recursos sobre estructura expositiva, anexos, limites y claridad tecnica.",
  },
  {
    title: "Lectura para perfiles juridicos",
    description:
      "Material util para entender mejor alcance, lenguaje y puntos de partida de una consulta tecnica.",
  },
];

export const metadata: Metadata = {
  title: "Recursos sobre evidencia digital, trazabilidad y documentacion tecnica",
  description:
    "Primer lote editorial con articulos, video y piezas breves sobre investigacion digital, analisis forense, OSINT, trazabilidad y documentacion tecnica.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Recursos"
        title="Contenido real para leer, grabar y reutilizar con criterio tecnico"
        subtitle="La biblioteca editorial ya incorpora un primer lote de lanzamiento con dos articulos publicables, un episodio principal listo para grabacion y dos shorts derivados sobre evidencia digital y preservacion."
        primaryAction={{ href: "#lanzamiento", label: "Ver lote inicial" }}
        secondaryAction={{ href: "/contacto", label: "Contactar" }}
        stats={[
          { value: "2", label: "Articulos listos para publicar" },
          { value: "1", label: "Video largo listo para grabar" },
          { value: "2", label: "Shorts derivados en vertical" },
        ]}
        notes={[
          "Todas las piezas comparten un mismo marco: contexto, integridad y claridad documental.",
          "La biblioteca ya funciona como una capa de autoridad y tambien como filtro de consultas mejor planteadas.",
        ]}
        visual={
          <ImagePanel
            src="/images/resources/resources-hero.svg"
            alt="Mesa editorial con monitor, documentacion tecnica y piezas de contenido sobre evidencia digital"
            eyebrow="Lanzamiento editorial"
            title="Un primer lote compacto, coherente y listo para activar la capa viva del proyecto"
            description="El contenido inicial se apoya en una misma linea metodologica y prepara el terreno para blog, video largo, shorts y futuras piezas descargables."
            tags={["Articulos", "Video", "Shorts"]}
            priority
          />
        }
      />

      <Section>
        <Container className="grid gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-start">
          <div>
            <Eyebrow>Lote 01</Eyebrow>
            <SectionHeading
              title="Una biblioteca que ya muestra piezas concretas"
              description="Este primer bloque editorial no presenta promesas de contenido: presenta material ya redactado, alineado con la web y listo para pasar a publicacion o grabacion."
            />
          </div>
          <SurfaceCard
            title="Tema de apertura del lanzamiento"
            description="El primer lote se concentra en un eje claro: que hace util a una evidencia digital y como la preservacion inicial condiciona la lectura posterior."
          >
            <div className="grid gap-3 text-sm leading-7 text-[var(--color-muted)]">
              <p>El enfoque combina valor documental, criterios de conservacion y lenguaje comprensible para perfiles tecnicos y juridicos.</p>
              <p>El objetivo no es volumen editorial, sino una primera muestra de autoridad util, reutilizable y consistente con la marca.</p>
            </div>
            <p className="text-sm font-medium text-[var(--color-accent-strong)]">
              Una misma idea desplegada en varios formatos.
            </p>
          </SurfaceCard>
        </Container>
      </Section>

      <Section tint="soft">
        <Container id="lanzamiento">
          <SectionHeading
            title="Piezas destacadas del primer lote"
            description="Los tres contenidos principales ya tienen posicion propio dentro de la biblioteca y pueden usarse como base de lanzamiento, captacion y autoridad."
            align="center"
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {featuredPieces.map((piece) => (
              <SurfaceCard key={piece.title} title={piece.title} description={piece.description}>
                <div className="grid gap-3 text-sm leading-7 text-[var(--color-muted)]">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-strong)]">
                    {piece.type}
                  </p>
                  <p>{piece.meta}</p>
                  <p>{piece.status}</p>
                </div>
                <TagList items={piece.tags} />
              </SurfaceCard>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--color-border)] pt-6">
            <span className="text-sm font-medium text-[var(--color-accent-strong)]">
              Primer lote coherente para web, blog y video
            </span>
            <Link className="inline-link" href="/contacto">
              Plantear una consulta con mejor contexto
            </Link>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <ImagePanel
            src="/images/resources/resources-featured.svg"
            alt="Escena editorial con pieza audiovisual principal y notas tecnicas de apoyo"
            eyebrow="Contenido central"
            title="El episodio principal fija el marco y los articulos lo vuelven mas util"
            description="La combinacion de video largo, texto base y pieza practica de preservacion permite lanzar una capa editorial compacta, pero ya claramente util."
            tags={["Episodio 01", "Articulo base", "Guia practica"]}
            aspect="landscape"
          />

          <div className="grid gap-4">
            {shortPieces.map((piece) => (
              <SurfaceCard
                key={piece.title}
                title={piece.title}
                description={piece.description}
              >
                <div className="grid gap-3 text-sm leading-7 text-[var(--color-muted)]">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-strong)]">
                    Short derivado
                  </p>
                  <p>{piece.meta}</p>
                  <p>Formato pensado para vertical, subtitulado y reutilizacion entre video largo y recursos.</p>
                </div>
              </SurfaceCard>
            ))}
          </div>
        </Container>
      </Section>

      <Section tint="soft">
        <Container className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-start">
          <SurfaceCard
            title="Como se organiza ya la biblioteca"
            description="Aunque el primer lote se abre con evidencia digital y preservacion, la seccion queda ordenada desde ahora alrededor de cinco ejes claros de lectura."
          >
            <TagList
              items={[
                "Evidencia digital",
                "Preservacion",
                "OSINT",
                "Trazabilidad",
                "Documentacion",
              ]}
            />
            <p className="text-sm leading-7 text-[var(--color-muted)]">
              Esa estructura facilita crecer sin perder criterio y mantiene una continuidad directa entre recursos, metodologia y contacto.
            </p>
          </SurfaceCard>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {pillars.map((pillar) => (
              <SurfaceCard key={pillar.title} title={pillar.title} description={pillar.description} />
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
          <SurfaceCard
            title="Que aporta este primer lote a la conversacion comercial"
            description="El contenido ya no cumple solo una funcion editorial. Tambien ayuda a formular mejor una necesidad, ajustar expectativas y reforzar la percepcion de servicio especializado."
          >
            <div className="grid gap-3 text-sm leading-7 text-[var(--color-muted)]">
              <p>Quien llega a contacto despues de leer o ver estas piezas suele entender mejor la diferencia entre un hallazgo aislado y un material documentalmente util.</p>
              <p>Eso mejora la calidad del primer intercambio y acerca la web a una firma tecnica con criterio propio, no solo a una presentacion institucional.</p>
            </div>
          </SurfaceCard>

          <ImagePanel
            src="/images/resources/resources-library.svg"
            alt="Biblioteca editorial con notas, cronologias y recursos tecnicos organizados"
            eyebrow="Biblioteca activa"
            title="Un entorno editorial que acompana autoridad, descubrimiento y conversion"
            description="La seccion de recursos ya puede operar como puerta de entrada a la marca y como apoyo de lectura para quienes necesitan entender mejor su punto de partida."
            tags={["Autoridad", "Lectura", "Contacto"]}
            aspect="landscape"
          />
        </Container>
      </Section>

      <ActionBanner
        title="Si este primer lote ya aclara el marco, el siguiente paso es plantear la necesidad con materiales y objetivo definidos"
        description="La biblioteca editorial ayuda a entender mejor contexto, integridad, preservacion y limites. A partir de ahi, la conversacion inicial gana precision y la consulta llega mejor enfocada."
        primaryAction={{ href: "/contacto", label: "Iniciar contacto" }}
        secondaryAction={{ href: "/metodologia", label: "Ver metodologia" }}
        note="El contenido no sustituye una revision tecnica, pero si mejora de forma clara el punto de partida."
        highlights={[
          "Primer lote ya listo para publicar y grabar.",
          "Marco metodologico coherente entre web, video y blog.",
        ]}
      />
    </>
  );
}
