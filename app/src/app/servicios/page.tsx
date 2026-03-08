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

const services = [
  {
    title: "Investigacion digital",
    description:
      "Analisis de hechos con componente digital para ordenar informacion, detectar relaciones y reducir ambiguedad en el caso.",
    items: [
      "Hechos dispersos en multiples fuentes",
      "Necesidad de reconstruir secuencias",
      "Dudas sobre relacion entre eventos o activos",
    ],
    note: "Ordenar el contexto",
  },
  {
    title: "Analisis forense",
    description:
      "Revision tecnica de evidencias y soportes con foco en preservacion, lectura estructurada y valor documental de los hallazgos.",
    items: [
      "Informacion que requiere preservacion adecuada",
      "Revision de artefactos o metadatos",
      "Necesidad de interpretar evidencia con cautela",
    ],
    note: "Preservar antes de interpretar",
  },
  {
    title: "OSINT y correlacion de indicios",
    description:
      "Uso prudente de fuentes abiertas para aportar contexto, relacionar activos y reforzar lineas de analisis sin sobredimensionar conclusiones.",
    items: [
      "Activos abiertos que necesitan contexto",
      "Relacion entre perfiles, dominios, correos o publicaciones",
      "Necesidad de documentar hallazgos abiertos con metodo",
    ],
    note: "Contexto abierto, interpretacion prudente",
  },
  {
    title: "Trazabilidad tecnologica",
    description:
      "Reconstruccion de conexiones y cronologias entre cuentas, dispositivos, comunicaciones, plataformas y otros eventos tecnicos relevantes.",
    items: [
      "Necesidad de relacionar elementos heterogeneos",
      "Secuencias temporales incompletas",
      "Casos donde el contexto tecnico modifica la lectura de los hechos",
    ],
    note: "Relacionar para entender",
  },
  {
    title: "Documentacion tecnica y pericial",
    description:
      "Preparacion de informes, anexos y explicaciones estructuradas para que el analisis sea comprensible y util para terceros no tecnicos.",
    items: [
      "Hallazgos que necesitan una presentacion clara",
      "Necesidad de diferenciar observaciones, interpretaciones y limites",
      "Casos donde el valor esta en explicar bien el resultado",
    ],
    note: "Del analisis a la pieza documental",
  },
];

export const metadata: Metadata = {
  title: "Servicios de investigacion digital, forense y documentacion tecnica",
  description:
    "Lineas de trabajo orientadas a investigacion digital, analisis forense, OSINT, trazabilidad tecnologica y documentacion tecnica.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title="Servicios orientados a analizar, correlacionar y documentar hechos digitales"
        subtitle="La propuesta se organiza por necesidades reales de analisis y documentacion, no por herramientas ni promesas ambiguas."
        primaryAction={{ href: "/contacto", label: "Contactar con contexto inicial" }}
        secondaryAction={{ href: "/metodologia", label: "Ver metodologia" }}
        notes={["Alcance definido.", "Lenguaje claro.", "Limites explicitos."]}
      />

      <Section>
        <Container>
          <SectionHeading
            title="Que puede aportar esta linea de trabajo"
            description="La web presenta servicios para casos donde hace falta ordenar evidencia digital, reconstruir secuencias, correlacionar indicios o traducir hallazgos tecnicos a una base documental comprensible."
          />
          <TagList items={["Analisis con criterio", "Documentacion util"]} />
        </Container>
      </Section>

      <Section tint="soft">
        <Container>
          <div className="grid gap-5">
            {services.map((service) => (
              <SurfaceCard key={service.title} title={service.title} description={service.description}>
                <ul className="mt-5 space-y-2 text-sm text-[var(--color-muted)]">
                  {service.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm font-medium text-[var(--color-accent)]">{service.note}</p>
              </SurfaceCard>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionHeading
              title="Cuando esta propuesta tiene sentido"
              description="Encaja especialmente cuando el caso requiere contexto tecnico, prudencia metodologica y una salida documental clara. No esta pensada para solicitudes imprecisas, invasivas o apoyadas en expectativas impropias."
            />
          </div>
          <TagList
            items={[
              "Casos con evidencia digital",
              "Casos con necesidad de cronologia",
              "Casos con necesidad de informe claro",
            ]}
          />
        </Container>
      </Section>

      <Section tint="soft">
        <Container>
          <SurfaceCard
            title="Limites de alcance"
            description="La web no ofrece accesos a cuentas, recuperaciones invasivas sobre terceros ni servicios planteados desde logicas opacas o agresivas. El marco de trabajo es tecnico, documental y prudente."
          >
            <p className="mt-4 text-sm font-medium text-[var(--color-accent)]">
              Alcance definido desde el inicio.
            </p>
          </SurfaceCard>
        </Container>
      </Section>

      <ActionBanner
        title="Si la necesidad encaja, el siguiente paso es concretar el contexto"
        description="Una consulta inicial util debe indicar que tipo de problema existe, que fuentes o materiales hay disponibles y que objetivo documental o tecnico se busca."
        primaryAction={{ href: "/contacto", label: "Contactar con contexto inicial" }}
        secondaryAction={{ href: "/metodologia", label: "Ver metodologia" }}
        note="Mejor contexto, mejor punto de partida."
      />
    </>
  );
}
