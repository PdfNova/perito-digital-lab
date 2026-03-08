import type { Metadata } from "next";
import Link from "next/link";
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
        title="Una biblioteca editorial integrada en una marca tecnica sobria y consistente"
        subtitle="La seccion de recursos refuerza autoridad, ordena la exploracion y da continuidad natural al enfoque tecnico del sitio a traves de articulos, video y piezas de consulta."
        primaryAction={{ href: "#biblioteca", label: "Explorar recursos" }}
        secondaryAction={{ href: "/contacto", label: "Contactar" }}
        stats={[
          { value: "5", label: "Pilares editoriales principales" },
          { value: "Blog", label: "Articulos de criterio y contexto" },
          { value: "Video", label: "Piezas breves de apoyo editorial" },
        ]}
        notes={[
          "La biblioteca debe sentirse curada, no improvisada.",
          "El lenguaje visual acompana el tono tecnico sin perder claridad comercial.",
        ]}
        visual={
          <VisualPlaceholder
            label="Biblioteca tecnica"
            title="Articulos, piezas audiovisuales y notas de trabajo bajo un mismo criterio editorial"
            caption="Una composicion pensada para asociar contenido, analisis y documentacion con una presencia de marca sobria y reconocible."
            tags={["Recursos", "Editorial", "Analisis"]}
            variant="briefing"
          />
        }
      />

      <Section>
        <Container className="grid gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-start">
          <div>
            <Eyebrow>Biblioteca</Eyebrow>
            <SectionHeading
              title="Una seccion de recursos que ya transmite curaduria"
              description="Aunque el archivo editorial todavia este en crecimiento, esta area debe percibirse como una biblioteca tecnica cuidada y en expansion."
            />
          </div>
          <SurfaceCard
            title="Piezas recomendadas para empezar"
            description="La home editorial puede destacar una seleccion breve para entrar en materia sin perder tono profesional ni caer en una estetica de blog generico."
          >
            <div className="grid gap-3 text-sm leading-7 text-[var(--color-muted)]">
              <p>Recorridos breves sobre preservacion, contexto y lectura prudente de indicios.</p>
              <p>Material pensado para dialogar con articulos, video breve y recursos de consulta dentro de una misma linea editorial.</p>
            </div>
            <p className="text-sm font-medium text-[var(--color-accent-strong)]">
              Empezar por lo esencial.
            </p>
          </SurfaceCard>
        </Container>
      </Section>

      <Section tint="soft">
        <Container id="biblioteca">
          <SectionHeading
            title="Lineas editoriales principales"
            description="Cada pilar se presenta como una categoria editorial fuerte, pensada para reunir piezas utiles, legibles y alineadas con el posicionamiento del proyecto."
            align="center"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {pillars.map((pillar) => (
              <SurfaceCard key={pillar.title} title={pillar.title} description={pillar.description} />
            ))}
            <VisualPlaceholder
              label="Contenido destacado"
              title="Una pieza central para abrir la biblioteca con contexto, criterio y continuidad visual"
              caption="Este bloque refuerza la idea de biblioteca curada y permite destacar una guia, un articulo o una pieza audiovisual con mayor peso."
              tags={["Destacado", "Articulo", "Video"]}
              className="md:col-span-2 xl:col-span-1 min-h-[23rem]"
              variant="studio"
            />
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--color-border)] pt-6">
            <span className="text-sm font-medium text-[var(--color-accent-strong)]">
              Explorar por tema
            </span>
            <Link className="inline-link" href="/contacto">
              Plantear una consulta
            </Link>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
          <SurfaceCard
            title="Formatos de contenido"
            description="La seccion puede alojar articulos breves, glosarios, guias descargables y piezas audiovisuales sin perder coherencia visual."
          >
            <TagList items={["Articulos", "Guias", "Glosarios", "Videos"]} />
          </SurfaceCard>

          <VisualPlaceholder
            label="Criterio editorial"
            title="Libreta, monitor y estructura de contenidos como parte de una biblioteca con identidad propia"
            caption="Una escena que acompana la dimension editorial del proyecto y sostiene una sensacion de archivo tecnico bien cuidado."
            tags={["Editorial", "Contenido", "Biblioteca"]}
            className="min-h-[22rem]"
            variant="timeline"
          />
        </Container>
      </Section>

      <Section tint="soft">
        <Container className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <SurfaceCard
            title="Recursos que preparan mejor una necesidad real"
            description="Leer contenido tecnico antes de contactar mejora la formulacion del problema, ordena expectativas y refuerza el valor del sitio como puerta de entrada cualificada."
          >
            <div className="grid gap-3 text-sm leading-7 text-[var(--color-muted)]">
              <p>El contenido deja de ser un relleno visual y pasa a integrarse como una capa de autoridad, marca y conversion.</p>
              <p>La biblioteca funciona como un entorno de referencia: ayuda a entender mejor el marco tecnico antes de plantear una consulta.</p>
            </div>
          </SurfaceCard>

          <SurfaceCard
            title="Una biblioteca que ya actua como marca"
            description="La mejora visual de recursos hace que la web parezca menos estatica y mas cercana a una firma con criterio, archivo y presencia editorial propia."
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
        title="Si el contenido ya aclaro el marco, el siguiente paso es plantear la necesidad con contexto"
        description="La seccion de recursos acompana el posicionamiento del sitio y funciona como una biblioteca de apoyo para entender mejor problemas, limites y criterios de trabajo."
        primaryAction={{ href: "/contacto", label: "Contactar" }}
        secondaryAction={{ href: "/metodologia", label: "Ver metodologia" }}
        note="El valor editorial refuerza autoridad y mejora la calidad de las consultas que llegan al sitio."
      />
    </>
  );
}
