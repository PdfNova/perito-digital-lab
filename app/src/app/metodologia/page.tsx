import type { Metadata } from "next";
import {
  ActionBanner,
  Container,
  Eyebrow,
  PageHero,
  Section,
  SectionHeading,
  SurfaceCard,
  TagList,
  VisualPlaceholder,
} from "@/components/ui";

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

export const metadata: Metadata = {
  title: "Metodologia de investigacion digital y documentacion tecnica",
  description:
    "Metodologia sobria y estructurada para preservar, analizar, correlacionar y documentar evidencia digital con claridad y prudencia.",
};

export default function MethodologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Metodologia"
        title="Un metodo visible refuerza la credibilidad antes de cualquier conversacion"
        subtitle="El valor no esta solo en el hallazgo, sino en como se delimita, se preserva, se interpreta y se convierte en una salida documental clara."
        primaryAction={{ href: "/contacto", label: "Contactar" }}
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
          <VisualPlaceholder
            label="Arquitectura de metodo"
            title="Cronologia, criterio y estructura analitica en una sola lectura"
            caption="Una composicion pensada para hacer visible el orden del trabajo y reforzar la sensacion de metodo desde el inicio."
            tags={["Proceso", "Cronologia", "Criterio"]}
            variant="timeline"
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
            <VisualPlaceholder
              label="Secuencia operativa"
              title="Cronologias, diagramas y lectura de relaciones como parte visible del proceso"
              caption="Una manera de mostrar el metodo como algo tangible: orden, tiempos, dependencias y salida documental."
              tags={["Secuencia", "Analisis", "Documentacion"]}
              className="min-h-[24rem]"
              variant="briefing"
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

      <ActionBanner
        title="Si el caso requiere metodo, la siguiente conversacion debe partir de una necesidad bien delimitada"
        description="Una consulta inicial con contexto minimo permite valorar mejor el punto de partida, el tipo de fuentes disponibles y la salida documental mas razonable."
        primaryAction={{ href: "/contacto", label: "Contactar" }}
        secondaryAction={{ href: "/recursos", label: "Ver recursos" }}
        note="La metodologia ya funciona como una prueba visible de criterio, orden y madurez profesional."
      />
    </>
  );
}
