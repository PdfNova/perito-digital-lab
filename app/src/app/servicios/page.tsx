import type { Metadata } from "next";
import Link from "next/link";
import {
  ActionBanner,
  BulletList,
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
import {
  articleBaseCtaLabel,
  contactPageCtaLabel,
  resourcesCtaLabel,
  technicalGuideCtaLabel,
  visualAssets,
} from "../site-config";

const services = [
  {
    title: "Investigacion digital",
    description:
      "Encargos donde hay que ordenar hechos, secuencias, cuentas, comunicaciones o activos digitales para entender mejor lo ocurrido.",
    items: [
      "Fuentes heterogeneas que no pueden leerse por separado",
      "Necesidad de reconstruir cronologias o relaciones",
      "Casos donde el componente digital altera la lectura del asunto",
    ],
    note: "Ordenar antes de concluir",
  },
  {
    title: "Analisis forense y preservacion",
    description:
      "Revision de evidencias, soportes y artefactos con foco en preservacion, integridad razonable y valor documental.",
    items: [
      "Soportes o exportaciones que requieren lectura tecnica prudente",
      "Materiales que necesitan preservacion y orden desde el inicio",
      "Casos donde el detalle tecnico condiciona la fuerza del resultado",
    ],
    note: "Preservar mejor para leer mejor",
  },
  {
    title: "OSINT y correlacion de indicios",
    description:
      "Uso serio de fuentes abiertas para aportar contexto, localizar activos y relacionar indicios sin sobrepasar lo que el material sostiene.",
    items: [
      "Perfiles, dominios, publicaciones o activos visibles que necesitan contexto",
      "Correlacion de indicios abiertos con materiales ya disponibles",
      "Necesidad de documentar hallazgos abiertos con metodo y limites",
    ],
    note: "Contexto abierto, inferencia prudente",
  },
  {
    title: "Huella digital y ausencias preocupantes",
    description:
      "Apoyo tecnico para localizar presencia digital, rastros visibles y senales de actividad o ausencia desde fuentes abiertas y analisis tecnico.",
    items: [
      "Huella digital dispersa o dificil de relacionar",
      "Necesidad de reconstruir presencia publica o abierta",
      "Consultas donde importa mapear activos y relaciones visibles",
    ],
    note: "Localizar con criterio y limites",
  },
  {
    title: "Moviles, mensajeria y dispositivos",
    description:
      "Analisis de conversaciones, exportaciones, registros y materiales procedentes de moviles o dispositivos, con lectura estructurada y utilidad documental.",
    items: [
      "Mensajeria que exige secuencia y contexto",
      "Dispositivos con informacion relevante para el caso",
      "Necesidad de distinguir entre observacion, relacion e interpretacion",
    ],
    note: "Secuencia, contexto y lectura tecnica",
  },
  {
    title: "Fraude tecnologico y trazabilidad",
    description:
      "Relacion de cuentas, comunicaciones, activos y eventos tecnicos para entender movimientos, conexiones y patrones de interes.",
    items: [
      "Relacion entre perfiles, cuentas, pagos, comunicaciones o dominios",
      "Necesidad de reconstruir secuencias y dependencias",
      "Asuntos donde la trazabilidad tecnica cambia la interpretacion",
    ],
    note: "Relacionar para aclarar",
  },
  {
    title: "Apoyo tecnico en familia y divorcios",
    description:
      "Soporte tecnico y documental cuando conversaciones, cronologias, activos abiertos o evidencia movil resultan relevantes dentro del procedimiento.",
    items: [
      "Mensajeria, capturas o exportaciones que necesitan mejor lectura",
      "Necesidad de ordenar hechos digitales de forma legible para terceros",
      "Encargos donde la prudencia expositiva importa tanto como el analisis",
    ],
    note: "Claridad tecnica para asuntos sensibles",
  },
  {
    title: "Informes tecnicos y periciales",
    description:
      "Preparacion de notas tecnicas, cronologias, anexos e informes para que el resultado pueda explicarse con claridad fuera del entorno tecnico.",
    items: [
      "Hallazgos que necesitan estructura y lenguaje documental",
      "Necesidad de separar observacion, inferencia y conclusion",
      "Casos donde el valor final esta en la calidad de la pieza entregada",
    ],
    note: "Del indicio a la pieza defendible",
  },
];

const fitCases = [
  "Despachos que necesitan apoyo tecnico claro y bien documentado.",
  "Asuntos con moviles, mensajeria, cronologias o activos abiertos relevantes.",
  "Procedimientos de familia o controversias donde lo digital modifica el contexto.",
  "Fraude, trazabilidad o relaciones entre cuentas, dispositivos y eventos.",
];

const outputs = [
  "Cronologia tecnica o secuencia de hechos",
  "Revision tecnica de evidencia y de su contexto",
  "Nota de correlacion o trazabilidad",
  "Informe tecnico o pieza pericial clara para terceros",
];

const trustBlocks = [
  {
    title: "Como se encuadra un encargo",
    description:
      "Se parte del problema, los materiales disponibles y la utilidad esperada. Esa delimitacion inicial condiciona todo el trabajo posterior.",
  },
  {
    title: "Como se protege la credibilidad",
    description:
      "La propuesta evita prometer atribuciones automaticas o certezas que los materiales no sostienen. Los limites forman parte del servicio.",
  },
  {
    title: "Que puede esperar la parte que consulta",
    description:
      "Mejor orden, mejor lectura, mejor explicacion del alcance y una salida mas util para tomar decisiones o documentar el asunto.",
  },
];

const supportContent = [
  {
    type: "Articulo base",
    title: "Valor documental de la evidencia digital",
    description:
      "Pieza recomendada para entender por que contexto, integridad y trazabilidad condicionan el valor de cualquier material.",
    meta: "Recurso de autoridad",
    href: "/recursos/articulos/valor-documental-evidencia-digital",
    cta: articleBaseCtaLabel,
    tags: ["Contexto", "Integridad", "Evidencia digital"],
  },
  {
    type: "Guia tecnica",
    title: "Revision tecnica de evidencia digital: alcance y limites",
    description:
      "Recurso pensado para alinear expectativas antes de solicitar una revision y reforzar la percepcion de servicio especializado.",
    meta: "Recurso orientado a conversion",
    href: "/recursos/guias/revision-tecnica-evidencia-digital",
    cta: technicalGuideCtaLabel,
    tags: ["Alcance", "Limites", "Revision tecnica"],
  },
];

export const metadata: Metadata = buildPageMetadata({
  title: "Servicios de investigacion digital, analisis pericial y documentacion tecnica",
  description:
    "Servicios de investigacion digital, analisis forense, OSINT, huella digital, trazabilidad, analisis de moviles e informes tecnicos para casos con componente digital.",
  path: "/servicios",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios especializados"
        title="Servicios tecnicos para asuntos donde lo digital exige una firma con mas peso"
        subtitle="La oferta deja de presentarse como un listado sobrio y pasa a articular una firma capaz de absorber encargos de investigacion digital, analisis forense, OSINT, huella digital, moviles, trazabilidad e informe pericial."
        primaryAction={{ href: "/contacto", label: contactPageCtaLabel }}
        secondaryAction={{ href: "/metodologia", label: "Ver metodologia" }}
        chips={[
          "Investigacion digital",
          "Apoyo en familia y divorcios",
          "Moviles y mensajeria",
          "Fraude tecnologico",
        ]}
        stats={[
          { value: "8", label: "Areas integradas en la oferta" },
          { value: "Claro", label: "Encaje y limites visibles" },
          { value: "Listo", label: "Puente directo a recursos y contacto" },
        ]}
        notes={[
          "La pagina se orienta a explicar mejor que problemas resuelve la firma y que tipo de encargos merecen una conversacion inicial.",
          "Servicios, metodologia y recursos forman una misma arquitectura de confianza comercial.",
        ]}
        visual={
          <ImagePanel
            src={visualAssets.servicesHero.src}
            alt={visualAssets.servicesHero.alt}
            eyebrow="Oferta de firma"
            title="Analisis digital, pericial y documental dentro de una cartera mas visible y mas solida"
            description="La oferta gana presencia al mostrar mejor los encargos reales, los limites y la forma en que el trabajo se traduce en salidas utiles."
            tags={["Servicios premium", "Entorno tecnico", "Confianza comercial"]}
            priority
          />
        }
      />

      <Section tint="dark">
        <Container className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
          <div>
            <Eyebrow tone="light">Encaje prioritario</Eyebrow>
            <SectionHeading
              title="La pagina deja claro para que tipo de necesidad esta pensada la firma"
              description="No se trata de prometer cualquier cosa. Se trata de mostrar mejor que clase de problemas se benefician de investigacion digital, analisis tecnico y una pieza documental clara."
              tone="light"
            />
            <div className="mt-8">
              <TagList
                items={[
                  "Despachos y litigios",
                  "Asuntos sensibles",
                  "Evidencia movil",
                  "OSINT con limites",
                ]}
                tone="light"
              />
            </div>
          </div>
          <SurfaceCard
            title="Encarga con mas sentido quien necesita"
            description="Ordenar hechos, reconstruir cronologias, leer evidencia movil, relacionar indicios abiertos o producir una salida documental seria para terceros."
            tone="light"
            compact
          >
            <BulletList items={fitCases} tone="light" />
          </SurfaceCard>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            title="Lineas de trabajo principales"
            description="Cada bloque esta pensado para sonar a encargo real: necesidad, tipo de material y sentido del resultado."
            align="center"
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {services.map((service) => (
              <SurfaceCard key={service.title} title={service.title} description={service.description} compact>
                <BulletList items={service.items} className="space-y-2.5" />
                <p className="text-sm font-medium text-[var(--color-accent-strong)]">{service.note}</p>
              </SurfaceCard>
            ))}
          </div>
        </Container>
      </Section>

      <Section tint="soft">
        <Container className="grid gap-8 lg:grid-cols-[1fr_0.96fr] lg:items-start">
          <div>
            <Eyebrow>Entregables</Eyebrow>
            <SectionHeading
              title="La propuesta gana fuerza cuando explica que tipo de salida puede producir"
              description="El valor comercial no termina en el analisis. Termina en la calidad con la que ese trabajo puede traducirse a cronologia, lectura tecnica, informe o pieza pericial."
            />
            <div className="mt-8 grid gap-3">
              {outputs.map((item) => (
                <div
                  key={item}
                  className="premium-shell rounded-[1.35rem] px-5 py-3.5 text-sm leading-6 text-[var(--color-text)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <ImagePanel
              src="/images/services/services-detail.svg"
              alt="Mesa de despacho con informe tecnico, dispositivos y soporte documental"
              eyebrow="Entorno de caso"
              title="Mesa de trabajo, evidencia, dispositivos e informe dentro de una misma escena"
              description="La presencia visual refuerza la idea de firma de alto nivel: criterios claros, soporte tecnico y salida documental bien presentada."
              tags={["Informe", "Dispositivos", "Contexto"]}
              aspect="landscape"
            />
            <SurfaceCard
              title="Relacion con metodologia y contacto"
              description="Servicios explica encaje. Metodologia muestra como se sostiene el trabajo. Contacto filtra mejor el primer intercambio."
              compact
            >
              <div className="flex flex-wrap gap-3">
                <ButtonLink href="/metodologia" label="Ver metodologia" variant="secondary" />
                <ButtonLink href="/contacto" label={contactPageCtaLabel} variant="secondary" />
              </div>
            </SurfaceCard>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
            <div>
              <Eyebrow>Capa de confianza</Eyebrow>
              <SectionHeading
                title="La solidez se apoya en estructura, no en cifras inventadas"
                description="La pagina refuerza confianza explicando como se encuadra un encargo, como se protege la credibilidad del analisis y que puede esperar la parte que consulta."
              />
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {trustBlocks.map((block) => (
                <SurfaceCard key={block.title} title={block.title} description={block.description} compact />
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section tint="soft">
        <Container className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
          <div>
            <Eyebrow>Antes de contactar</Eyebrow>
            <SectionHeading
              title="La biblioteca editorial ya trabaja a favor de la conversion"
              description="Quien recorre recursos antes de contactar entiende mejor el marco del trabajo, ajusta expectativas y plantea una consulta mas util."
            />
            <div className="mt-8">
              <Link className="inline-link" href="/recursos">
                {resourcesCtaLabel}
              </Link>
            </div>
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
                compact
              />
            ))}
          </div>
        </Container>
      </Section>

      <ActionBanner
        eyebrow="Siguiente paso"
        title="Si la necesidad encaja, el siguiente paso es presentar contexto, materiales y objetivo del encargo"
        description="Una consulta inicial util debe indicar que problema existe, que tipo de fuentes o dispositivos hay disponibles y que salida tecnica, documental o pericial se busca."
        primaryAction={{ href: "/contacto", label: contactPageCtaLabel }}
        secondaryAction={{ href: "/recursos", label: resourcesCtaLabel }}
        note="La pagina de servicios ya actua como una puerta de entrada mas potente, mas clara y mejor filtrada."
        highlights={[
          "Mayor presencia comercial sin perder prudencia ni rigor tecnico.",
          "Servicios ampliados e integrados sin sensacion de listado improvisado.",
        ]}
      />
    </>
  );
}
