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
        title="Una biblioteca editorial preparada para verse como parte de una marca tecnica seria"
        subtitle="La seccion de recursos debe reforzar autoridad, invitar a explorar y quedar lista para convivir con articulos, video y fotografia editorial de calidad."
        primaryAction={{ href: "#biblioteca", label: "Explorar recursos" }}
        secondaryAction={{ href: "/contacto", label: "Contactar" }}
        stats={[
          { value: "5", label: "Pilares editoriales principales" },
          { value: "Blog", label: "Preparado para piezas de autoridad" },
          { value: "Video", label: "Conectado con una capa audiovisual futura" },
        ]}
        notes={[
          "La biblioteca debe sentirse curada, no improvisada.",
          "El sistema visual ya admite imagen editorial y stills de desk setup.",
        ]}
        visual={
          <VisualPlaceholder
            label="Placeholder editorial principal"
            title="Biblioteca tecnica, video faceless y fotografia de workspace"
            caption="Espacio reservado para sustituirse despues por composicion editorial, escritorio, libreta tecnica o still de pantalla."
            tags={["Recursos", "Editorial", "Workspace"]}
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
              <p>Material preparado para conectar con la capa de video faceless y con futuras guias de descarga.</p>
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
            description="Cada pilar se presenta como una categoria editorial fuerte, lista para crecer con piezas visuales, stills de apoyo y contenidos derivados."
            align="center"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {pillars.map((pillar) => (
              <SurfaceCard key={pillar.title} title={pillar.title} description={pillar.description} />
            ))}
            <VisualPlaceholder
              label="Placeholder para featured post"
              title="Bloque preparado para articulo destacado o pieza audiovisual principal"
              caption="Puede sustituirse por miniatura editorial o fotografia real sin rehacer la maqueta."
              tags={["Featured", "Articulo", "Video"]}
              className="md:col-span-2 xl:col-span-1 min-h-[23rem]"
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
            label="Placeholder de escritorio editorial"
            title="Espacio para libreta, monitor, subtitulos y composicion de contenidos"
            caption="Preparado para reforzar la sensacion de marca editorial de alto nivel."
            tags={["Desk setup", "Editorial", "Contenido"]}
            className="min-h-[22rem]"
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
              <p>La seccion queda lista para incorporar miniaturas, retratos de workspace o visuales de pizarra faceless.</p>
            </div>
          </SurfaceCard>

          <SurfaceCard
            title="Una biblioteca mas preparada para convertirse en marca"
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
        description="La seccion de recursos queda preparada para incorporar fotografia, miniaturas y composiciones editoriales sin perder sobriedad."
        primaryAction={{ href: "/contacto", label: "Contactar" }}
        secondaryAction={{ href: "/metodologia", label: "Ver metodologia" }}
        note="Esta es una de las zonas que mas gana con un lenguaje visual mas editorial."
      />
    </>
  );
}
