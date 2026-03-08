import type { Metadata } from "next";
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
        title="Servicios presentados con una presencia mas cercana a un despacho tecnico de alto nivel"
        subtitle="La propuesta se organiza por necesidades reales de analisis, correlacion y documentacion, con una presentacion mas solida, mas visual y mas convincente."
        primaryAction={{ href: "/contacto", label: "Solicitar orientacion inicial" }}
        secondaryAction={{ href: "/metodologia", label: "Ver metodologia" }}
        stats={[
          { value: "5", label: "Areas nucleares de servicio" },
          { value: "Claro", label: "Alcance definido desde la primera lectura" },
          { value: "Pro", label: "Presencia comercial de alto nivel" },
        ]}
        notes={[
          "Presentacion orientada a confianza y criterio tecnico.",
          "Despacho, tecnologia y documentacion integrados en un mismo lenguaje visual.",
        ]}
        visual={
          <ImagePanel
            src="/images/lot-01/services-hero.svg"
            alt="Entorno profesional de analisis digital y documentacion tecnica"
            eyebrow="Revision tecnica"
            title="Despacho, herramientas y analisis presentados como una oferta de nivel"
            description="Una composicion orientada a transmitir orden, lectura tecnica y capacidad de documentacion desde la primera visita."
            tags={["Servicios", "Despacho", "Analisis"]}
            priority
          />
        }
      />

      <Section>
        <Container className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
          <div>
            <Eyebrow>Alcance</Eyebrow>
            <SectionHeading
              title="Una oferta pensada para explicar bien lo que si encaja"
              description="La pagina de servicios debe funcionar como una herramienta comercial sobria: orientar mejor, elevar la percepcion de nivel y filtrar expectativas impropias sin sonar defensiva."
            />
            <div className="mt-8">
              <TagList items={["Analisis con criterio", "Documentacion util", "Tono profesional"]} />
            </div>
          </div>
          <SurfaceCard
            title="Una oferta que se percibe madura desde el primer vistazo"
            description="La pagina de servicios debe comunicar nivel tecnico, claridad de alcance y una forma de trabajo reconocible sin depender de reclamos grandilocuentes."
          >
            <div className="grid gap-3 text-sm leading-7 text-[var(--color-muted)]">
              <p>La presencia comercial se apoya en jerarquia, tono y estructura, no en dramatizacion visual.</p>
              <p>Eso hace que cada servicio se lea como una capacidad profesional real y no como una promesa abstracta.</p>
            </div>
          </SurfaceCard>
        </Container>
      </Section>

      <Section tint="soft">
        <Container>
          <SectionHeading
            title="Lineas de trabajo principales"
            description="Cada bloque esta pensado para leerse como un servicio de nivel, no como una ficha tecnica suelta."
            align="center"
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {services.map((service) => (
              <SurfaceCard key={service.title} title={service.title} description={service.description}>
                <ul className="space-y-2 text-sm leading-7 text-[var(--color-muted)]">
                  {service.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-accent-strong)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm font-medium text-[var(--color-accent-strong)]">{service.note}</p>
              </SurfaceCard>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 lg:grid-cols-[1fr_0.96fr] lg:items-start">
          <div>
            <Eyebrow>Encaje</Eyebrow>
            <SectionHeading
              title="Cuando esta propuesta tiene sentido"
              description="La pagina gana fuerza cuando muestra con claridad para que tipo de necesidad esta pensada y que clase de cliente o caso se beneficia mas de este enfoque."
            />
            <div className="mt-8">
              <TagList
                items={[
                  "Casos con evidencia digital",
                  "Casos con necesidad de cronologia",
                  "Casos con necesidad de informe claro",
                ]}
              />
            </div>
          </div>

          <ImagePanel
            src="/images/services/services-detail.svg"
            alt="Mesa de trabajo con informe tecnico, monitor y herramientas de revision"
            eyebrow="Entorno de caso"
            title="Servicio presentado con mesa de trabajo, lectura tecnica y documentacion clara"
            description="Una escena sobria que acompana la explicacion de alcance y refuerza la confianza comercial sin excesos."
            tags={["Despacho", "Analisis", "Informe"]}
            aspect="landscape"
          />
        </Container>
      </Section>

      <Section tint="soft">
        <Container className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <SurfaceCard
            title="Limites de alcance"
            description="La web no ofrece accesos a cuentas, recuperaciones invasivas sobre terceros ni servicios planteados desde logicas opacas o agresivas. El marco de trabajo es tecnico, documental y prudente."
          >
            <p className="text-sm font-medium text-[var(--color-accent-strong)]">
              Alcance definido desde el inicio.
            </p>
          </SurfaceCard>

          <SurfaceCard
            title="Presencia comercial sin ruido"
            description="Una presentacion clara y serena permite percibir mejor el nivel tecnico, el alcance y la forma de trabajo."
          >
            <TagList items={["Mas jerarquia", "Mas presencia", "Mismo criterio tecnico"]} />
          </SurfaceCard>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-6 lg:grid-cols-3">
          <SurfaceCard
            title="Encuadre inicial"
            description="Antes de avanzar conviene acotar el caso, los materiales disponibles y el objetivo de la revision para evitar trabajo improductivo."
          />
          <SurfaceCard
            title="Lectura tecnica"
            description="La propuesta se orienta a ordenar indicios, relaciones y cronologias con una mirada tecnica prudente y documentable."
          />
          <SurfaceCard
            title="Salida util"
            description="El resultado debe poder traducirse a un informe, una nota tecnica o una estructura clara que sirva para decidir mejor."
          />
        </Container>
      </Section>

      <ActionBanner
        title="Si la necesidad encaja, el siguiente paso es concretar el contexto con una presentacion clara"
        description="Una consulta inicial util debe indicar que tipo de problema existe, que fuentes o materiales hay disponibles y que objetivo documental o tecnico se busca."
        primaryAction={{ href: "/contacto", label: "Solicitar orientacion inicial" }}
        secondaryAction={{ href: "/metodologia", label: "Ver metodologia" }}
        note="La pagina de servicios funciona como una puerta de entrada clara, seria y cualificada."
        highlights={[
          "Menos ambiguedad sobre lo que si encaja.",
          "Mejor percepcion de servicio especializado y de alto nivel.",
        ]}
      />
    </>
  );
}
