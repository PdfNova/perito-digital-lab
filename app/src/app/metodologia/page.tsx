import type { Metadata } from "next";
import {
  ActionBanner,
  Container,
  PageHero,
  Section,
  SectionHeading,
  SurfaceCard,
  TagList,
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
        title="La metodologia estructura el analisis y refuerza la credibilidad del resultado"
        subtitle="El valor no esta solo en el hallazgo, sino en como se delimita, se preserva, se interpreta y se documenta."
        primaryAction={{ href: "/contacto", label: "Contactar" }}
        secondaryAction={{ href: "/servicios", label: "Ver servicios" }}
        notes={[
          "Metodo antes que precipitacion.",
          "Informe claro como salida natural del proceso.",
        ]}
      />

      <Section>
        <Container>
          <SectionHeading
            title="Trabajar con orden para explicar mejor"
            description="La metodologia combina analisis tecnico, lectura de contexto y documentacion clara. Su objetivo es reducir ruido, evitar interpretaciones apresuradas y producir resultados comprensibles."
          />
          <TagList items={["Rigor sin exhibicion"]} />
        </Container>
      </Section>

      <Section tint="soft">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {phases.map((phase, index) => (
              <SurfaceCard
                key={phase.title}
                title={`${index + 1}. ${phase.title}`}
                description={phase.description}
              >
                <p className="mt-4 text-sm font-medium text-[var(--color-accent)]">{phase.note}</p>
              </SurfaceCard>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionHeading
              title="Principios que sostienen el proceso"
              description="La metodologia se apoya en delimitacion clara, prudencia interpretativa, trazabilidad del razonamiento y separacion entre observacion, inferencia y conclusion."
            />
          </div>
          <TagList
            items={[
              "Delimitacion clara",
              "Prudencia interpretativa",
              "Trazabilidad del razonamiento",
              "Claridad expositiva",
            ]}
          />
        </Container>
      </Section>

      <Section tint="soft">
        <Container>
          <SurfaceCard
            title="Lo que una metodologia rigurosa tambien sabe decir"
            description="No toda evidencia permite la misma profundidad, no todo indicio tiene el mismo peso y no toda correlacion permite una afirmacion fuerte. Explicar los limites forma parte del trabajo."
          >
            <p className="mt-4 text-sm font-medium text-[var(--color-accent)]">
              No exagerar tambien es una forma de rigor.
            </p>
          </SurfaceCard>
        </Container>
      </Section>

      <ActionBanner
        title="Si el caso requiere metodo, el siguiente paso es acotar bien la necesidad"
        description="Una consulta inicial con contexto minimo permite valorar mejor el punto de partida, el tipo de fuentes disponibles y la salida documental mas razonable."
        primaryAction={{ href: "/contacto", label: "Contactar" }}
        secondaryAction={{ href: "/recursos", label: "Ver recursos" }}
        note="Mejor encuadre, mejor analisis."
      />
    </>
  );
}
