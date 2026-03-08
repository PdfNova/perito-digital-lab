import type { Metadata } from "next";
import Link from "next/link";
import {
  ActionBanner,
  Container,
  ContentLinkCard,
  Eyebrow,
  ImagePanel,
  PageHero,
  Section,
  SectionHeading,
  SurfaceCard,
  TagList,
} from "@/components/ui";
import { buildPageMetadata } from "../metadata";
import {
  articleBaseCtaLabel,
  contactPageCtaLabel,
  resourcesCtaLabel,
  technicalGuideCtaLabel,
} from "../site-config";

const phases = [
  {
    title: "Encuadre y delimitacion",
    description:
      "Antes de analizar, conviene entender el alcance del caso, su contexto, las preguntas relevantes y las fuentes disponibles. Un buen encuadre evita trabajo improductivo y mejora la lectura posterior.",
    note: "Definir el problema antes de ampliar el analisis.",
  },
  {
    title: "Preservacion y orden de fuentes",
    description:
      "La informacion debe organizarse y preservarse con criterio para no perder contexto, integridad o trazabilidad. Esta fase condiciona la calidad de todo lo que viene despues.",
    note: "Preservar bien es analizar mejor.",
  },
  {
    title: "Analisis y correlacion",
    description:
      "Los indicios se revisan de forma estructurada para detectar relaciones, secuencias, consistencias y limites. El objetivo no es acumular hallazgos, sino interpretarlos con prudencia.",
    note: "Relacionar antes de concluir.",
  },
  {
    title: "Documentacion e informe",
    description:
      "El resultado del analisis debe poder explicarse con claridad. Esta fase convierte la lectura tecnica en una pieza documental util, con observaciones, cautelas, anexos y una estructura comprensible para terceros.",
    note: "Documentar tambien es analizar.",
  },
];

const supportPieces = [
  {
    type: "Articulo base",
    title: "Valor documental de la evidencia digital",
    description:
      "Pieza recomendada para entender por que contexto, integridad y trazabilidad condicionan la lectura de cualquier material.",
    meta: "Marco conceptual",
    href: "/recursos/articulos/valor-documental-evidencia-digital",
    cta: articleBaseCtaLabel,
    tags: ["Contexto", "Integridad", "Valor documental"],
  },
  {
    type: "Guia tecnica",
    title: "Revision tecnica de evidencia digital: alcance y limites",
    description:
      "Guia pensada para explicar que puede sostenerse realmente al final del proceso y por que los limites forman parte del rigor.",
    meta: "Continuidad metodologica",
    href: "/recursos/guias/revision-tecnica-evidencia-digital",
    cta: technicalGuideCtaLabel,
    tags: ["Alcance", "Limites", "Revision tecnica"],
  },
];

export const metadata: Metadata = buildPageMetadata({
  title: "Metodologia de investigacion digital y documentacion tecnica",
  description:
    "Metodologia sobria y estructurada para preservar, analizar, correlacionar y documentar evidencia digital con claridad y prudencia.",
  path: "/metodologia",
});

export default function MethodologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Metodologia"
        title="Un metodo visible refuerza la credibilidad antes de cualquier conversacion"
        subtitle="El valor no esta solo en el hallazgo, sino en como se delimita, se preserva, se interpreta y se convierte en una salida documental clara."
        primaryAction={{ href: "/contacto", label: contactPageCtaLabel }}
        secondaryAction={{ href: "/servicios", label: "Ver servicios" }}
        stats={[
          { value: "4", label: "Fases principales del proceso" },
          { value: "Metodo", label: "Como elemento de confianza comercial" },
          { value: "Claro", label: "Proceso legible desde el inicio" },
        ]}
        notes={[
          "La metodologia debe percibirse como una ventaja competitiva, no como un anexo.",
          "El metodo se presenta como una estructura de trabajo visible, sobria y comprensible.",
        ]}
        visual={
          <ImagePanel
            src="/images/methodology/methodology-hero.svg"
            alt="Esquema metodologico con cronologia, notas y estructura de analisis"
            eyebrow="Arquitectura de metodo"
            title="Cronologia, criterio y estructura analitica en una sola lectura"
            description="Una composicion pensada para hacer visible el orden del trabajo y reforzar la sensacion de metodo desde el inicio."
            tags={["Proceso", "Cronologia", "Criterio"]}
            priority
          />
        }
      />

      <Section>
        <Container className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-start">
          <div>
            <Eyebrow>Enfoque</Eyebrow>
            <SectionHeading
              title="Trabajar con orden para explicar mejor"
              description="La metodologia no se presenta como una lista tecnica seca, sino como una forma de dar confianza, reducir ruido y producir resultados comprensibles."
            />
            <div className="mt-8">
              <TagList items={["Rigor sin exhibicion", "Proceso visible", "Documentacion clara"]} />
            </div>
          </div>

          <SurfaceCard
            title="Metodo con presencia comercial"
            description="En una web de servicios de alto nivel, explicar bien el proceso transmite madurez, eleva la percepcion de calidad y reduce dudas antes del contacto."
          >
            <div className="grid gap-3 text-sm leading-7 text-[var(--color-muted)]">
              <p>La metodologia debe sentirse como una promesa de orden y credibilidad.</p>
              <p>No se muestra para impresionar con tecnicismos, sino para clarificar como se trabaja.</p>
            </div>
          </SurfaceCard>
        </Container>
      </Section>

      <Section tint="soft">
        <Container className="grid gap-8 lg:grid-cols-[1.04fr_0.96fr] lg:items-start">
          <div className="grid gap-4">
            {phases.map((phase, index) => (
              <SurfaceCard
                key={phase.title}
                title={`${index + 1}. ${phase.title}`}
                description={phase.description}
              >
                <p className="text-sm font-medium text-[var(--color-accent-strong)]">{phase.note}</p>
              </SurfaceCard>
            ))}
          </div>

          <div className="grid gap-4">
            <ImagePanel
              src="/images/methodology/methodology-process.svg"
              alt="Pantalla de proceso con secuencia de analisis y documentacion"
              eyebrow="Secuencia operativa"
              title="Cronologias, diagramas y lectura de relaciones como parte visible del proceso"
              description="Una manera de mostrar el metodo como algo tangible: orden, tiempos, dependencias y salida documental."
              tags={["Secuencia", "Analisis", "Documentacion"]}
              aspect="landscape"
            />
            <SurfaceCard
              title="Cada fase debe verse util"
              description="La estructura metodologica debe percibirse como un sistema tangible de trabajo, no como un texto accesorio."
            />
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 lg:grid-cols-[1fr_0.98fr] lg:items-start">
          <div>
            <Eyebrow>Principios</Eyebrow>
            <SectionHeading
              title="Principios que sostienen el proceso"
              description="La metodologia se apoya en delimitacion clara, prudencia interpretativa, trazabilidad del razonamiento y separacion entre observacion, inferencia y conclusion."
            />
          </div>
          <SurfaceCard
            title="Base metodologica visible"
            description="Estos principios ayudan a que el sitio se perciba como una firma tecnica organizada y no como una simple pagina informativa."
          >
            <TagList
              items={[
                "Delimitacion clara",
                "Prudencia interpretativa",
                "Trazabilidad del razonamiento",
                "Claridad expositiva",
              ]}
            />
          </SurfaceCard>
        </Container>
      </Section>

      <Section tint="soft">
        <Container className="grid gap-6 lg:grid-cols-[1.04fr_0.96fr] lg:items-start">
          <SurfaceCard
            title="Lo que una metodologia rigurosa tambien sabe decir"
            description="No toda evidencia permite la misma profundidad, no todo indicio tiene el mismo peso y no toda correlacion permite una afirmacion fuerte. Explicar los limites forma parte del trabajo."
          >
            <p className="text-sm font-medium text-[var(--color-accent-strong)]">
              No exagerar tambien es una forma de rigor.
            </p>
          </SurfaceCard>

          <SurfaceCard
            title="El metodo tambien comunica posicionamiento"
            description="Cuando el proceso se explica con precision, la pagina deja de parecer un folleto y pasa a proyectar una firma capaz de trabajar con criterio, limites y claridad expositiva."
          >
            <TagList
              items={[
                "Lectura ordenada",
                "Prudencia interpretativa",
                "Salida documental clara",
              ]}
            />
          </SurfaceCard>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-6 lg:grid-cols-3">
          <SurfaceCard
            title="Delimitacion"
            description="Un metodo serio empieza por definir preguntas, fuentes y alcance antes de ampliar materiales o hipotesis."
          />
          <SurfaceCard
            title="Trazabilidad"
            description="Cada lectura debe poder reconstruirse con claridad para diferenciar observacion, relacion entre indicios e interpretacion."
          />
          <SurfaceCard
            title="Documento final"
            description="La metodologia solo se completa cuando el analisis puede trasladarse a una salida clara, util y entendible para terceros."
          />
        </Container>
      </Section>

      <Section tint="soft">
        <Container className="grid gap-6 lg:grid-cols-[1.04fr_0.96fr] lg:items-start">
          <SurfaceCard
            title="Que suele entregar un proceso bien llevado"
            description="Cronologia estructurada, lectura de relaciones, nota tecnica, aclaracion de alcance o una pieza documental clara para apoyar decisiones posteriores."
          >
            <TagList
              items={[
                "Cronologia",
                "Nota tecnica",
                "Lectura de relaciones",
                "Salida documental",
              ]}
            />
          </SurfaceCard>

          <SurfaceCard
            title="Que puede esperar el cliente del proceso"
            description="Orden, prudencia, mejor lectura del punto de partida y una explicacion clara de lo que puede sostenerse y de lo que queda fuera de alcance."
          />
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
          <div>
            <Eyebrow>Lecturas que sostienen el metodo</Eyebrow>
            <SectionHeading
              title="La metodologia se entiende mejor cuando puede recorrerse tambien desde el contenido"
              description="Estas piezas complementan la pagina y convierten el metodo en algo mas tangible: valor documental, preservacion inicial y alcance real del analisis."
            />
            <div className="mt-8">
              <Link className="inline-link" href="/recursos">
                {resourcesCtaLabel}
              </Link>
            </div>
          </div>
          <div className="grid gap-4">
            {supportPieces.map((piece) => (
              <ContentLinkCard
                key={piece.title}
                type={piece.type}
                title={piece.title}
                description={piece.description}
                meta={piece.meta}
                href={piece.href}
                cta={piece.cta}
                tags={piece.tags}
              />
            ))}
          </div>
        </Container>
      </Section>

      <ActionBanner
        eyebrow="Metodo visible"
        title="Si el caso requiere metodo, la siguiente conversacion debe partir de una necesidad bien delimitada"
        description="Una consulta inicial con contexto minimo permite valorar mejor el punto de partida, el tipo de fuentes disponibles y la salida documental mas razonable."
        primaryAction={{ href: "/contacto", label: contactPageCtaLabel }}
        secondaryAction={{ href: "/recursos", label: resourcesCtaLabel }}
        note="La metodologia ya funciona como una prueba visible de criterio, orden y madurez profesional."
        highlights={[
          "El metodo ayuda a filtrar expectativas poco realistas.",
          "La claridad del proceso mejora la confianza antes del encargo.",
        ]}
      />
    </>
  );
}
