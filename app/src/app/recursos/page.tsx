import type { Metadata } from "next";
import Link from "next/link";
import {
  ActionBanner,
  Container,
  PageHero,
  Section,
  SectionHeading,
  SurfaceCard,
  TagList,
} from "@/components/ui";

const pillars = [
  {
    title: "Evidencia digital y preservacion",
    description:
      "Guias y notas sobre integridad, contexto y errores frecuentes al recopilar informacion.",
  },
  {
    title: "OSINT con criterio",
    description:
      "Piezas sobre correlacion de activos abiertos, limites de atribucion y documentacion prudente.",
  },
  {
    title: "Trazabilidad y cronologias",
    description:
      "Contenido orientado a relacionar eventos, secuencias y elementos tecnicos con utilidad practica.",
  },
  {
    title: "Informes y documentacion",
    description:
      "Recursos para explicar mejor hallazgos, anexos, limites y estructura expositiva.",
  },
  {
    title: "Guias para perfiles juridicos",
    description:
      "Material pensado para ayudar a pedir, preservar y entender mejor evidencia digital.",
  },
];

export const metadata: Metadata = {
  title: "Recursos sobre evidencia digital, trazabilidad y documentacion tecnica",
  description:
    "Articulos, guias y piezas explicativas sobre investigacion digital, analisis forense, OSINT, trazabilidad y documentacion tecnica.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Recursos"
        title="Recursos tecnicos para entender mejor evidencia, contexto y documentacion"
        subtitle="Contenido pensado para aportar criterio, aclarar conceptos y preparar mejor una consulta cuando el caso tiene componente digital."
        primaryAction={{ href: "#biblioteca", label: "Explorar recursos" }}
        secondaryAction={{ href: "/servicios", label: "Ver servicios" }}
        notes={["Contenido util.", "Tono sobrio.", "Enfoque reutilizable y anonimo."]}
      />

      <Section>
        <Container className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div>
            <SectionHeading
              title="Una biblioteca tecnica pensada para aportar claridad"
              description="Esta seccion reunira contenido breve y de profundidad media sobre evidencia digital, preservacion, OSINT, trazabilidad e informes. Su funcion es explicar mejor el marco de trabajo y reducir dudas frecuentes."
            />
          </div>
          <SurfaceCard
            title="Piezas recomendadas para empezar"
            description="Una seleccion inicial puede ayudar a entender como se organiza un caso digital, que errores conviene evitar y por que la documentacion importa tanto como el analisis."
          >
            <div className="grid gap-3 text-sm leading-7 text-[var(--color-muted)]">
              <p>Recorridos breves para entrar en materia sin perder contexto tecnico.</p>
              <p>Contenidos pensados para preparar mejor una conversacion o un caso.</p>
            </div>
            <p className="text-sm font-medium text-[var(--color-accent)]">Empezar por lo esencial.</p>
          </SurfaceCard>
        </Container>
      </Section>

      <Section tint="soft">
        <Container id="biblioteca">
          <SectionHeading
            title="Lineas editoriales principales"
            description="El contenido se agrupa en pilares que permiten recorrer el proyecto desde distintos intereses o necesidades."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {pillars.map((pillar) => (
              <SurfaceCard
                key={pillar.title}
                title={pillar.title}
                description={pillar.description}
              />
            ))}
          </div>
          <div className="mt-8 flex items-center justify-between gap-4 border-t border-[var(--color-border)] pt-5">
            <span className="text-sm font-medium text-[var(--color-accent)]">Explorar por tema</span>
            <Link className="inline-link" href="/contacto">
              Plantear una consulta
            </Link>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <SectionHeading
              title="Formatos de contenido"
              description="La primera version puede incluir articulos breves, guias descargables o resumibles, glosarios y piezas audiovisuales de explicacion tipo pizarra con voz y subtitulos."
            />
          </div>
          <SurfaceCard
            title="Una estructura editorial compacta y reutilizable"
            description="La biblioteca se organiza para que cada formato pueda escalar sin romper la coherencia del sitio."
          >
            <TagList items={["Articulos", "Guias", "Glosarios", "Videos"]} />
          </SurfaceCard>
        </Container>
      </Section>

      <Section tint="soft">
        <Container className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <SurfaceCard
            title="Recursos que ayudan a preparar mejor una necesidad real"
            description="Leer contenido tecnico antes de contactar permite formular mejor el problema, identificar lagunas de contexto y entender mejor que tipo de analisis o documentacion puede ser util."
          >
            <div className="grid gap-3 text-sm leading-7 text-[var(--color-muted)]">
              <p>El recurso no sustituye el analisis, pero mejora la calidad del punto de partida.</p>
              <p>Tambien reduce ruido y ayuda a distinguir necesidad tecnica de expectativa difusa.</p>
            </div>
            <p className="text-sm font-medium text-[var(--color-accent)]">
              Del recurso al caso concreto.
            </p>
          </SurfaceCard>

          <SurfaceCard
            title="Uso previsto de esta seccion"
            description="Espacio para concentrar autoridad, ampliar contexto y conectar el sitio con una futura capa editorial mas profunda."
          >
            <TagList
              items={[
                "Descubrimiento cualificado",
                "Autoridad metodologica",
                "Puente hacia contacto",
              ]}
            />
          </SurfaceCard>
        </Container>
      </Section>

      <ActionBanner
        title="Si el contenido ya aclaro el marco, el siguiente paso es plantear el caso con contexto"
        description="Cuando exista una necesidad concreta, conviene describir de forma breve el problema, el momento del caso y los materiales disponibles."
        primaryAction={{ href: "/contacto", label: "Contactar" }}
        secondaryAction={{ href: "/metodologia", label: "Ver metodologia" }}
        note="Recurso primero, contacto despues."
      />
    </>
  );
}
