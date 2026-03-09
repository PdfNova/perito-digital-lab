import type { Metadata } from "next";
import Link from "next/link";
import {
  ActionBanner,
  BulletList,
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
      "Definir bien la pregunta, el contexto, el tipo de materiales y el objetivo final evita trabajo improductivo y mejora el valor del resultado.",
    note: "Definir el problema antes de ampliar el caso.",
  },
  {
    title: "Preservacion y orden",
    description:
      "La informacion debe mantenerse con estructura, continuidad y referencias minimas para que el analisis posterior conserve trazabilidad.",
    note: "Preservar tambien es proteger la explicacion futura.",
  },
  {
    title: "Analisis y correlacion",
    description:
      "Los indicios se revisan para detectar relaciones, secuencias, inconsistencias y limites. El valor esta en interpretar con prudencia.",
    note: "Relacionar antes de afirmar.",
  },
  {
    title: "Documentacion y entrega",
    description:
      "El trabajo se convierte en cronologia, nota tecnica, anexo o informe con estructura clara para perfiles tecnicos y no tecnicos.",
    note: "La salida documental completa el metodo.",
  },
];

const principles = [
  "Delimitacion clara del objetivo y de las fuentes.",
  "Diferenciacion entre observacion, correlacion e inferencia.",
  "Trazabilidad del razonamiento y de la documentacion.",
  "Prudencia expositiva para no sobredimensionar materiales.",
];

const expectations = [
  {
    title: "Que puede esperar el cliente",
    description:
      "Un proceso legible, mejor orden del punto de partida y una explicacion clara de lo que puede sostenerse y de lo que queda fuera de alcance.",
  },
  {
    title: "Que hace creible el proceso",
    description:
      "Mostrar cada fase, sus dependencias y sus limites convierte metodologia en una prueba visible de madurez profesional.",
  },
  {
    title: "Que no promete el metodo",
    description:
      "No promete convertir cualquier indicio en certeza maxima. Promete leer mejor, ordenar mejor y explicar mejor el alcance real.",
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
      "Guia pensada para explicar que puede sostenerse al final del proceso y por que los limites forman parte del rigor.",
    meta: "Continuidad metodologica",
    href: "/recursos/guias/revision-tecnica-evidencia-digital",
    cta: technicalGuideCtaLabel,
    tags: ["Alcance", "Limites", "Revision tecnica"],
  },
];

export const metadata: Metadata = buildPageMetadata({
  title: "Metodologia de investigacion digital y documentacion tecnica",
  description:
    "Metodologia visible para preservar, analizar, correlacionar y documentar evidencia digital con criterio, prudencia y claridad expositiva.",
  path: "/metodologia",
});

export default function MethodologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Metodologia"
        title="Un metodo visible convierte la prudencia en una ventaja competitiva"
        subtitle="La metodologia se presenta como parte central de la firma: encuadre, preservacion, analisis, correlacion y documentacion dentro de una secuencia comprensible, comercialmente valiosa y tecnicamente creible."
        primaryAction={{ href: "/contacto", label: contactPageCtaLabel }}
        secondaryAction={{ href: "/servicios", label: "Volver a servicios" }}
        chips={[
          "Encuadre del caso",
          "Preservacion",
          "Correlacion de indicios",
          "Informe claro",
        ]}
        stats={[
          { value: "4", label: "Fases principales del proceso" },
          { value: "Visible", label: "Metodo como prueba de confianza" },
          { value: "Claro", label: "Proceso entendible desde el inicio" },
        ]}
        notes={[
          "La metodologia se usa para reforzar credibilidad, no para impresionar con tecnicismos.",
          "Explicar los limites del proceso eleva la percepcion de rigor y reduce expectativas impropias.",
        ]}
        visual={
          <ImagePanel
            src="/images/methodology/methodology-hero.svg"
            alt="Esquema de metodologia con cronologia, paneles de analisis y documentacion"
            eyebrow="Arquitectura de trabajo"
            title="Cronologia, criterio y estructura analitica dentro de un mismo lenguaje visual"
            description="La pagina deja ver que el metodo no es un texto accesorio. Es una parte visible del valor de la firma."
            tags={["Proceso", "Cronologia", "Rigor"]}
            priority
          />
        }
      />

      <Section tint="dark">
        <Container className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <Eyebrow tone="light">Logica del proceso</Eyebrow>
            <SectionHeading
              title="Trabajar con orden para que el analisis pueda sostenerse y explicarse"
              description="El metodo se presenta como una cadena coherente. Si falla el encuadre, falla la lectura. Si falla la preservacion, se debilita la salida. Mostrar eso eleva confianza."
              tone="light"
            />
          </div>
          <SurfaceCard
            title="Cadena metodologica"
            description="Cada fase prepara la siguiente y reduce friccion: contexto, preservacion, analisis, relacion entre indicios y documento final."
            tone="light"
          >
            <TagList
              items={[
                "Encuadre",
                "Preservacion",
                "Analisis",
                "Correlacion",
                "Entrega",
              ]}
              tone="light"
            />
          </SurfaceCard>
        </Container>
      </Section>

      <Section>
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
              alt="Panel de proceso con secuencia metodologica y esquema de documentacion"
              eyebrow="Secuencia operativa"
              title="Paneles, tiempos, dependencias y salida documental como parte tangible del trabajo"
              description="La metodologia se materializa en secuencias, relaciones y criterios que permiten comprender mejor el proceso incluso antes del encargo."
              tags={["Secuencia", "Dependencias", "Documento"]}
              aspect="landscape"
            />
            <SurfaceCard
              title="Por que esta pagina refuerza confianza"
              description="Quien ve bien el proceso entiende mejor que la propuesta no depende de retorica comercial sino de un sistema de trabajo concreto."
            />
          </div>
        </Container>
      </Section>

      <Section tint="soft">
        <Container className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
          <div>
            <Eyebrow>Principios</Eyebrow>
            <SectionHeading
              title="Principios que sostienen una lectura tecnica creible"
              description="La metodologia se apoya en prudencia interpretativa, trazabilidad del razonamiento y claridad al separar observacion, correlacion e inferencia."
            />
            <div className="mt-8">
              <BulletList items={principles} />
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {expectations.map((item) => (
              <SurfaceCard key={item.title} title={item.title} description={item.description} />
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 lg:grid-cols-[1fr_0.98fr] lg:items-start">
          <div>
            <Eyebrow>Puente editorial</Eyebrow>
            <SectionHeading
              title="La metodologia se entiende mejor cuando tambien puede recorrerse desde el contenido"
              description="El articulo base y la guia tecnica convierten el metodo en algo aun mas tangible: valor documental, preservacion inicial, alcance real del analisis y prudencia expositiva."
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
        title="Si el caso requiere metodo, el siguiente paso es abrir la consulta con una necesidad bien delimitada"
        description="Una conversacion inicial con contexto minimo, materiales identificados y objetivo claro permite valorar mejor el alcance y la salida documental mas razonable."
        primaryAction={{ href: "/contacto", label: contactPageCtaLabel }}
        secondaryAction={{ href: "/recursos", label: resourcesCtaLabel }}
        note="La metodologia ya funciona como una prueba visible de orden, criterio y madurez profesional."
        highlights={[
          "Proceso legible y comercialmente valioso sin perder sobriedad.",
          "Mejor alineacion entre servicios, contenido y contacto.",
        ]}
      />
    </>
  );
}
