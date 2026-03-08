import type { Metadata } from "next";
import Link from "next/link";
import {
  ActionBanner,
  ButtonLink,
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
import { contactPageCtaLabel, visualAssets } from "../site-config";

const services = [
  {
    title: "Investigacion digital",
    description:
      "Analisis de hechos con componente digital para ordenar informacion, detectar relaciones y reducir ambiguedad.",
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
      "Revision tecnica de evidencias y soportes con foco en preservacion, lectura estructurada y valor documental.",
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
      "Uso prudente de fuentes abiertas para aportar contexto y reforzar lineas de analisis sin sobredimensionar conclusiones.",
    items: [
      "Activos abiertos que necesitan contexto",
      "Relacion entre perfiles, dominios o publicaciones",
      "Necesidad de documentar hallazgos abiertos con metodo",
    ],
    note: "Contexto abierto, interpretacion prudente",
  },
  {
    title: "Trazabilidad tecnologica",
    description:
      "Reconstruccion de conexiones y cronologias entre cuentas, dispositivos, comunicaciones y otros eventos tecnicos.",
    items: [
      "Necesidad de relacionar elementos heterogeneos",
      "Secuencias temporales incompletas",
      "Contextos donde el componente tecnico cambia la lectura del caso",
    ],
    note: "Relacionar para entender",
  },
  {
    title: "Documentacion tecnica y pericial",
    description:
      "Preparacion de informes, anexos y explicaciones estructuradas para que el analisis resulte util para terceros.",
    items: [
      "Hallazgos que necesitan una presentacion clara",
      "Necesidad de diferenciar observaciones, interpretaciones y limites",
      "Casos donde el valor esta en explicar bien el resultado",
    ],
    note: "Del analisis a la pieza documental",
  },
];

const supportContent = [
  {
    type: "Articulo base",
    title: "Valor documental de la evidencia digital",
    description:
      "Pieza recomendada para entender por que contexto, integridad y trazabilidad condicionan la utilidad de una evidencia.",
    meta: "Recurso de autoridad",
    href: "/recursos/articulos/valor-documental-evidencia-digital",
    cta: "Leer articulo",
    tags: ["Contexto", "Integridad", "Evidencia digital"],
  },
  {
    type: "Guia tecnica",
    title: "Revision tecnica de evidencia digital: alcance y limites",
    description:
      "Recurso pensado para alinear expectativas antes de solicitar una revision y reforzar la percepcion de servicio especializado.",
    meta: "Recurso orientado a conversion",
    href: "/recursos/guias/revision-tecnica-evidencia-digital",
    cta: "Leer guia",
    tags: ["Alcance", "Limites", "Revision tecnica"],
  },
];

const outputs = [
  "Cronologia tecnica o secuencia de hechos",
  "Nota tecnica de lectura o correlacion",
  "Aclaracion de alcance y limites",
  "Informe o pieza documental clara para terceros",
];

export const metadata: Metadata = buildPageMetadata({
  title: "Servicios de investigacion digital, analisis forense y documentacion tecnica",
  description:
    "Servicios orientados a investigacion digital, analisis forense, OSINT con limites, trazabilidad tecnologica y documentacion tecnica.",
  path: "/servicios",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title="Servicios tecnicos para casos donde la evidencia digital necesita orden, lectura y salida documental"
        subtitle="La propuesta se organiza por necesidades reales de analisis, correlacion y documentacion, con una presentacion mas cercana a una firma tecnica que a un listado generico de servicios."
        primaryAction={{ href: "/contacto", label: contactPageCtaLabel }}
        secondaryAction={{ href: "/recursos", label: "Ver recursos" }}
        stats={[
          { value: "5", label: "Areas nucleares de trabajo" },
          { value: "Real", label: "Biblioteca editorial ya integrada" },
          { value: "Claro", label: "Alcance y limites visibles" },
        ]}
        notes={[
          "Presentacion orientada a confianza, criterio tecnico y conversion cualificada.",
          "El sitio ya permite leer recursos antes de pasar al contacto.",
        ]}
        visual={
          <ImagePanel
            src={visualAssets.servicesHero.src}
            alt={visualAssets.servicesHero.alt}
            eyebrow="Revision tecnica"
            title="Despacho, herramientas y analisis presentados como una oferta seria y visible"
            description="La pagina de servicios ya no actua sola: se apoya en metodologia clara, recursos publicos y una entrada comercial mejor filtrada."
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
              description="La pagina de servicios debe orientar mejor, elevar la percepcion de nivel y filtrar expectativas impropias sin sonar defensiva ni abstracta."
            />
            <div className="mt-8">
              <TagList
                items={[
                  "Analisis con criterio",
                  "Documentacion util",
                  "Alcance claro",
                  "Consulta cualificada",
                ]}
              />
            </div>
          </div>
          <SurfaceCard
            title="Una oferta que se percibe madura desde el primer vistazo"
            description="La combinacion de servicios, recursos y metodologia hace que la pagina se lea como una propuesta profesional completa y no como una promesa sin prueba publica."
          >
            <div className="grid gap-3 text-sm leading-7 text-[var(--color-muted)]">
              <p>La presencia comercial se apoya en estructura, criterio y enlaces internos que ayudan a profundizar antes del contacto.</p>
              <p>Eso mejora la confianza y hace que el visitante entienda mejor para que tipo de necesidad esta pensada la propuesta.</p>
            </div>
          </SurfaceCard>
        </Container>
      </Section>

      <Section tint="soft">
        <Container>
          <SectionHeading
            title="Lineas de trabajo principales"
            description="Cada bloque esta pensado para leerse como una capacidad profesional real, con encaje, alcance y salida utiles."
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
              title="Cuando esta propuesta tiene mas sentido"
              description="La pagina gana fuerza cuando muestra para que tipo de necesidad esta pensada y que clase de caso se beneficia mas de este enfoque."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <SurfaceCard
                title="Encaja mejor cuando"
                description="Existe material digital ya disponible, necesidad de orden, dudas sobre relaciones o necesidad de una salida documental legible."
              />
              <SurfaceCard
                title="Conviene frenar cuando"
                description="La expectativa es una certeza automatica, una atribucion garantizada o una peticion planteada fuera de un marco tecnico y prudente."
              />
            </div>
          </div>

          <ImagePanel
            src="/images/services/services-detail.svg"
            alt="Mesa de trabajo con informe tecnico, monitor y herramientas de revision profesional"
            eyebrow="Entorno de caso"
            title="Mesa de trabajo, lectura tecnica y documentacion clara dentro de una misma escena"
            description="La presencia visual acompana la explicacion de alcance y refuerza la confianza comercial sin dramatizacion ni exceso."
            tags={["Despacho", "Analisis", "Informe"]}
            aspect="landscape"
          />
        </Container>
      </Section>

      <Section tint="soft">
        <Container className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <div>
            <Eyebrow>Outputs</Eyebrow>
            <SectionHeading
              title="Que tipo de salida puede esperarse"
              description="La propuesta gana fuerza cuando deja claro que el valor no termina en el analisis, sino en la forma util en la que ese trabajo puede traducirse."
            />
            <div className="mt-8 grid gap-3">
              {outputs.map((item) => (
                <div key={item} className="premium-shell rounded-[1.4rem] px-5 py-4 text-sm leading-7 text-[var(--color-text)]">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <SurfaceCard
              title="Como se articula la transicion hacia metodologia"
              description="Servicios explica encaje y outputs. Metodologia explica como se sostiene ese trabajo en la practica."
            >
              <Link className="inline-link" href="/metodologia">
                Ver metodologia
              </Link>
            </SurfaceCard>

            <SurfaceCard
              title="Como se articula la transicion hacia contacto"
              description="Quien ya entiende mejor alcance, materiales y salida esperada puede plantear una consulta con menos friccion y mejor encaje."
            >
              <Link className="inline-link" href="/contacto">
                Preparar consulta
              </Link>
              <div className="pt-1">
                <ButtonLink href="/contacto" label={contactPageCtaLabel} variant="secondary" />
              </div>
            </SurfaceCard>
          </div>
        </Container>
      </Section>

      <Section tint="soft">
        <Container className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <div>
            <Eyebrow>Antes de contactar</Eyebrow>
            <SectionHeading
              title="La biblioteca editorial ya ayuda a filtrar mejor la consulta"
              description="Antes de pasar al contacto, el visitante puede leer piezas que aclaran valor documental, preservacion y alcance de una revision tecnica."
            />
          </div>
          <div className="grid gap-4">
            {supportContent.map((item) => (
              <ContentLinkCard
                key={item.title}
                type={item.type}
                title={item.title}
                description={item.description}
                meta={item.meta}
                href={item.href}
                cta={item.cta}
                tags={item.tags}
              />
            ))}
          </div>
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
            description="El resultado debe poder traducirse a un informe, una nota tecnica o una estructura clara que ayude a decidir mejor."
          />
        </Container>
      </Section>

      <Section tint="soft">
        <Container className="grid gap-6 lg:grid-cols-[1.04fr_0.96fr] lg:items-start">
          <SurfaceCard
            title="Que puede esperar quien encarga un trabajo de este tipo"
            description="Una lectura mas clara del caso, mejor orden de materiales, delimitacion de alcance, prudencia al interpretar y una salida documental mas util para terceros."
          >
            <TagList
              items={[
                "Mejor encuadre",
                "Mas claridad documental",
                "Lectura prudente",
                "Salida util",
              ]}
            />
          </SurfaceCard>

          <SurfaceCard
            title="Que no se promete"
            description="No se promete una conclusion maxima en cualquier contexto. El valor esta en leer mejor, sostener mejor y explicar mejor hasta donde llega el trabajo."
          >
            <p className="text-sm font-medium text-[var(--color-accent-strong)]">
              Rigor y limites forman parte de la propuesta comercial.
            </p>
          </SurfaceCard>
        </Container>
      </Section>

      <ActionBanner
        title="Si la necesidad encaja, el siguiente paso es presentar el contexto con materiales, objetivo y punto de partida"
        description="Una consulta inicial util debe indicar que tipo de problema existe, que fuentes o materiales hay disponibles y que salida tecnica o documental se busca."
        primaryAction={{ href: "/contacto", label: contactPageCtaLabel }}
        secondaryAction={{ href: "/recursos", label: "Ver recursos" }}
        note="La pagina de servicios ya funciona como una puerta de entrada clara, seria y conectada con contenido real."
        highlights={[
          "Menos ambiguedad sobre lo que si encaja.",
          "Mejor percepcion de servicio especializado y de alto nivel.",
        ]}
      />
    </>
  );
}
