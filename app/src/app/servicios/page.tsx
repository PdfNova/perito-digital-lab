import type { Metadata } from "next";
import Link from "next/link";
import {
  ActionBanner,
  BulletList,
  ButtonLink,
  Container,
  ContentLinkCard,
  DecisionGuard,
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
  beforeActionDescription,
  beforeActionTitle,
  contactPageCtaLabel,
  resourcesCtaLabel,
  visualAssets,
} from "../site-config";
import { serviceSpecialties } from "./service-specialties";

const services = [
  {
    title: "Investigacion digital",
    description:
      "Encargos donde hay que ordenar hechos, cuentas, comunicaciones, documentos o activos digitales antes de que el caso se explique mal.",
    items: [
      "Fuentes heterogeneas que no pueden leerse por separado",
      "Necesidad de reconstruir secuencias, cronologias o relaciones",
      "Asuntos donde el componente digital cambia la interpretacion del problema",
    ],
    note: "Ordenar antes de concluir",
  },
  {
    title: "Analisis forense y preservacion",
    description:
      "Revision de evidencias, soportes y artefactos con foco en preservacion, integridad razonable y valor documental.",
    items: [
      "PDFs, mensajes, correos o exportaciones que llegan ya transformados",
      "Materiales que necesitan diferenciar original, copia y trabajo posterior",
      "Casos donde la forma de conservar condiciona la fuerza del resultado",
    ],
    note: "Preservar mejor para leer mejor",
  },
  {
    title: "OSINT y correlacion de indicios",
    description:
      "Uso serio de fuentes abiertas para aportar contexto, localizar activos y contener mejor el lenguaje de atribucion.",
    items: [
      "Perfiles, dominios o alias visibles que necesitan jerarquia comun",
      "Correlacion de indicios abiertos con materiales ya disponibles",
      "Necesidad de documentar hallazgos y limites con trazabilidad",
    ],
    note: "Contexto abierto, atribucion prudente",
  },
  {
    title: "Moviles, mensajeria y dispositivos",
    description:
      "Analisis de conversaciones, exportaciones, registros y materiales procedentes de moviles o dispositivos con utilidad documental real.",
    items: [
      "Mensajeria que exige secuencia, fuente y contexto",
      "Dispositivos con informacion relevante para asuntos civiles o sensibles",
      "Necesidad de distinguir observacion, patron e interpretacion",
    ],
    note: "Secuencia, contexto y lectura tecnica",
  },
];

const fitCases = [
  "Despachos que necesitan apoyo tecnico claro y una pieza documental util para terceros.",
  "Asuntos con fraude bancario, wallets, cripto, cuentas intermedias o secuencias de pago mal entendidas desde el primer relato.",
  "Controversias con moviles, mensajeria, PDFs, firmas, cronologias o activos abiertos relevantes que ya llegan mezclados o demasiado interpretados.",
  "Procedimientos donde una mala preservacion o una atribucion precipitada pueden empeorar mucho la lectura del caso.",
];

const outputs = [
  "Cronologia tecnica o secuencia de hechos",
  "Revision tecnica de documentos, evidencias y contexto",
  "Nota de correlacion o trazabilidad",
  "Informe tecnico o pieza pericial clara para terceros",
];

const casePatterns = [
  {
    title: "Tokenizacion fraudulenta con tarjeta aun en manos del titular",
    description:
      "Patron donde el medio de pago se usa digitalmente y la intuicion inicial puede cerrar demasiado pronto lo que realmente paso.",
  },
  {
    title: "Recovery scam cripto y segundo desorden documental",
    description:
      "Cuando a la perdida inicial se suma una falsa recuperacion que mezcla nuevas wallets, pagos adicionales, mas ruido y menos trazabilidad util.",
  },
  {
    title: "PDF con firma visible y valor documental mal entendido",
    description:
      "Cuando un documento parece claro por su apariencia, pero la estructura del archivo, sus revisiones o su origen todavia no se han leido bien.",
  },
  {
    title: "Cuenta instrumental, smurfing y operativa circular",
    description:
      "Cuando varios movimientos parecen menores hasta que la secuencia revela una funcion intermedia mucho mas relevante de lo que sugerian las capturas aisladas.",
  },
  {
    title: "Mensajeria recortada en conflicto civil o de familia",
    description:
      "Cuando capturas, exportaciones y cronologias parciales llegan mezcladas con interpretacion, recortes y exceso de relato.",
  },
  {
    title: "OSINT con correlacion prometedora y atribucion prematura",
    description:
      "Cuando encontrar activos abiertos no es el problema: el problema es explicar con que fuerza pueden sostener una conclusion sin convertir correlacion en atribucion fuerte.",
  },
];

const supportContent = [
  {
    type: "Lectura clave",
    title: "Notario digital vs perito digital",
    description:
      "Pieza para entender que fija una constatacion documental y que aporta una lectura tecnica sobre origen, secuencia e integridad.",
    meta: "Despachos y decisores",
    href: "/recursos/articulos/notario-digital-vs-perito-digital",
    cta: "Leer lectura aplicada",
    tags: ["Perito digital", "Documento", "Despachos"],
  },
  {
    type: "Guia tecnica",
    title: "Firma electronica valida vs firma visual en PDF",
    description:
      "Guia para revisar documentos que parecen claros en pantalla, pero exigen mejor lectura de archivo, versiones y trazabilidad.",
    meta: "PDF y documentos",
    href: "/recursos/guias/firma-electronica-pdf-validez-documental",
    cta: "Leer guia tecnica",
    tags: ["PDF", "Firma electronica", "Valor documental"],
  },
  {
    type: "Caso tipo",
    title: "Cuenta instrumental, smurfing y operativa circular",
    description:
      "Caso anonimo sobre fraude bancario y secuencias financieras que requieren lectura conjunta, no intuiciones aisladas.",
    meta: "Fraude bancario",
    href: "/recursos/casos/cuenta-instrumental-smurfing-operativa-circular",
    cta: "Leer caso tipo",
    tags: ["Smurfing", "Trazabilidad", "Operativa circular"],
  },
  {
    type: "Articulo aplicado",
    title: "Tokenizacion fraudulenta y pagos con wallet",
    description:
      "Patron para entender por que la tarjeta fisica puede seguir disponible y, aun asi, existir una secuencia digital relevante.",
    meta: "Wallet y pago digital",
    href: "/recursos/articulos/tokenizacion-fraudulenta-tarjeta-wallet",
    cta: "Leer articulo aplicado",
    tags: ["Wallet", "Tokenizacion", "Fraude bancario"],
  },
  {
    type: "Articulo aplicado",
    title: "Recovery scam cripto y falsa sensacion de rescate",
    description:
      "Pieza para reconocer la segunda capa de fraude que suele empeorar mucho la trazabilidad y la documentacion del caso.",
    meta: "Cripto y trazabilidad",
    href: "/recursos/articulos/recovery-scam-cripto-falsa-recuperacion",
    cta: "Leer articulo aplicado",
    tags: ["Cripto", "Hashes", "Recovery scam"],
  },
];

export const metadata: Metadata = buildPageMetadata({
  title: "Servicios de investigacion digital, analisis pericial y documentacion tecnica",
  description:
    "Servicios de investigacion digital, analisis pericial, OSINT, fraude, documentos, medios de pago, mensajeria e informes tecnicos para casos con componente digital.",
  path: "/servicios",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios especializados"
        title="Servicios tecnicos para asuntos donde lo digital exige lectura pericial, criterio y una salida defendible"
        subtitle="La oferta se presenta con mas foco y con mejor conexion a problemas reconocibles: fraude, wallets, cripto, PDFs, mensajeria, OSINT, secuencias financieras y documentacion sensible que muchas veces ya llegan degradados por decisiones previas."
        primaryAction={{ href: "/contacto", label: contactPageCtaLabel }}
        secondaryAction={{ href: "/recursos", label: resourcesCtaLabel }}
        chips={[
          "Fraude y trazabilidad",
          "Moviles y mensajeria",
          "OSINT con limites",
          "Documentos y evidencia digital",
        ]}
        stats={[
          { value: "4", label: "Especialidades publicas prioritarias" },
          { value: "14", label: "Piezas conectadas al servicio" },
          { value: "Util", label: "Puente directo entre patron y consulta" },
        ]}
        notes={[
          "La pagina deja claro que el valor del servicio aparece cuando el caso necesita mas lectura tecnica y menos intuicion.",
          "Servicios, recursos y contacto forman ya una misma arquitectura de criterio, prudencia y conversion cualificada sobre materiales que no siempre llegan con la misma fuerza.",
        ]}
        visual={
          <ImagePanel
            src={visualAssets.servicesHero.src}
            alt={visualAssets.servicesHero.alt}
            eyebrow="Oferta de firma"
            title="Analisis digital, documental y pericial para casos donde una lectura pobre sale cara"
            description="La oferta ya no se limita a describir capacidades: muestra mejor patrones reales, errores frecuentes y el valor de una consulta temprana antes de que la secuencia se siga degradando."
            tags={["Servicios premium", "Criterio experto", "Salida documental"]}
            priority
          />
        }
      />

      <Section tint="dark">
        <Container className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
          <div>
            <Eyebrow tone="light">Encaje prioritario</Eyebrow>
            <SectionHeading
              title="La firma encaja mejor cuando el problema exige ordenar materiales, contener conclusiones y documentar bien el alcance"
              description="No se trata de prometer cualquier cosa. Se trata de mostrar que clase de asuntos se benefician de investigacion digital, lectura pericial prudente y una pieza documental clara."
              tone="light"
            />
            <div className="mt-8">
              <TagList
                items={[
                  "Despachos y litigios",
                  "Asuntos sensibles",
                  "Fraude y medios de pago",
                  "OSINT con limites",
                ]}
                tone="light"
              />
            </div>
          </div>
          <SurfaceCard
              title="Encaja especialmente cuando existe"
            description="La necesidad comun suele ser la misma: transformar un conjunto de materiales dispersos, mal preservados o demasiado interpretados en una base tecnica mucho mas util para decidir."
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
            title="Directorio de especialidades"
            description="Las cuatro especialidades publicas funcionan como entradas claras a problemas que ya suelen llegar con errores de preservacion, expectativas mal ajustadas o necesidad de una lectura mas fina."
            align="center"
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {serviceSpecialties.map((specialty) => (
              <ContentLinkCard
                key={specialty.slug}
                type="Especialidad"
                title={specialty.title}
                description={specialty.landing.description}
                meta={specialty.landing.meta}
                href={specialty.href}
                cta="Ver servicio"
                tags={specialty.landing.tags}
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section tint="soft">
        <Container>
          <SectionHeading
            title="Lineas de trabajo principales"
            description="Junto al directorio de especialidades, la oferta general sigue mostrando lineas de soporte donde el valor esta en secuencia, trazabilidad, integridad y prudencia expositiva."
            align="center"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <SurfaceCard key={service.title} title={service.title} description={service.description} compact>
                <BulletList items={service.items} className="space-y-2.5" />
                <p className="text-sm font-medium text-[var(--color-accent-strong)]">{service.note}</p>
              </SurfaceCard>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr] xl:items-start">
          <div>
            <Eyebrow>Patrones reconocibles</Eyebrow>
            <SectionHeading
            title="Problemas donde una lectura temprana suele aportar mucho mas de lo que parecia al inicio"
              description="La utilidad del servicio se entiende mejor cuando se ve donde suelen fallar los casos: pagos digitales mal explicados, documentos pobres, secuencias rotas, OSINT inflado o mensajeria convertida en ruido."
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {casePatterns.map((item) => (
              <SurfaceCard key={item.title} title={item.title} description={item.description} compact />
            ))}
          </div>
        </Container>
      </Section>

      <Section tint="soft">
        <Container className="grid gap-8 xl:grid-cols-[0.88fr_1.12fr] xl:items-start">
          <div>
            <Eyebrow>Por que conviene consultar pronto</Eyebrow>
            <SectionHeading
              title="Hay casos que no llegan cortos de material: llegan mal mezclados, mal preservados o demasiado interpretados"
              description="La utilidad de una consulta temprana suele estar en evitar tres errores frecuentes: transformar el material antes de fijarlo, afirmar demasiado pronto y perder continuidad entre fuentes."
            />
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <SurfaceCard
              title="Que suele llegar mal"
              description="Capturas sin contexto, PDFs impresos y escaneados, alertas perdidas, wallets explicadas solo por saldo o secuencias financieras que ya llegan partidas."
              compact
            />
            <SurfaceCard
              title="Que conviene preservar antes"
              description="Archivos originales, exportaciones, mensajes completos, notificaciones, tiempos aproximados y la relacion entre piezas antes de reenviar o reordenar."
              compact
            />
            <SurfaceCard
              title="Que no debe afirmarse todavia"
              description="Autoria cerrada, validez absoluta, atribucion total o explicacion maxima si el material aun no permite separar bien indicio, correlacion e inferencia."
              compact
            />
          </div>
        </Container>
      </Section>

      <Section tint="dark">
        <Container className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <Eyebrow tone="light">Aporte y entregables</Eyebrow>
            <SectionHeading
              title="El valor real aparece cuando el servicio explica que puede revisar, que no conviene afirmar aun y que salida puede producir"
              description="Una revision seria no compite en grandilocuencia. Compite en claridad sobre materiales, secuencia, limites y traduccion documental."
              tone="light"
            />
          </div>
          <div className="grid gap-4">
            <SurfaceCard
              title="Que suele aportar una lectura temprana"
              description="En muchos asuntos la primera mejora no es una conclusion maxima. Es un caso mejor ordenado, menos expuesto al error y mas util para decidir."
              tone="light"
              compact
            >
              <BulletList
                items={[
                  "Separar material original, copia, exportacion o captura antes de que todo se mezcle en la misma capa.",
                  "Reconstruir secuencias antes de inflar interpretaciones o dar por cerrada una explicacion.",
                  "Relacionar documentos, pagos, mensajes, activos o alertas dentro del mismo marco.",
                  "Definir una salida tecnica o pericial que resulte util para terceros.",
                ]}
                tone="light"
              />
            </SurfaceCard>
            <div className="grid gap-4 md:grid-cols-2">
              <SurfaceCard
                title="Entregables posibles"
                description="La salida final depende del material disponible, del objetivo del encargo y del alcance prudente del analisis."
                tone="light"
                compact
              >
                <BulletList items={outputs} tone="light" />
              </SurfaceCard>
              <SurfaceCard
                title="Puente hacia contacto"
                description="La consulta inicial sirve para valorar encaje, materiales y utilidad documental esperable antes de comprometer una lectura mas profunda."
                tone="light"
                compact
              >
                <div className="flex flex-wrap gap-3">
                  <ButtonLink href="/contacto" label={contactPageCtaLabel} />
                  <ButtonLink href="/recursos" label={resourcesCtaLabel} variant="secondary" />
                </div>
              </SurfaceCard>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <DecisionGuard
            eyebrow="Antes de tomar decisiones sobre el material digital"
            title={beforeActionTitle}
            description={beforeActionDescription}
            items={[
              "Una captura aislada puede orientar, pero suele llegar con mas conclusion que contexto cuando ya ha pasado por varios reenvios.",
              "Un PDF con firma visible puede necesitar todavia una revision de archivo, versiones y procedencia antes de sostener mas.",
              "Un saldo, un cargo o una wallet no se leen bien fuera de secuencia, alertas y contexto de cuenta.",
              "En fraude, mensajeria u OSINT, afirmar demasiado pronto suele debilitar mas que ayudar.",
            ]}
            primaryAction={{ href: "/contacto", label: contactPageCtaLabel }}
            secondaryAction={{ href: "/recursos", label: resourcesCtaLabel }}
          />
        </Container>
      </Section>

      <Section tint="soft">
        <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <Eyebrow>Recursos que hacen reconocible el problema</Eyebrow>
            <SectionHeading
              title="La capa editorial ya acompana la oferta con piezas que hacen visible por que una revision experta puede cambiar la interpretacion del caso"
              description="Quien recorre estas lecturas antes de contactar entiende mejor el patron, preserva mejor el material y formula una consulta con mas criterio."
            />
            <div className="mt-8">
              <Link className="inline-link" href="/recursos">
                {resourcesCtaLabel}
              </Link>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
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
        title="Si la necesidad encaja, el siguiente paso es consultar con contexto, materiales y objetivo del encargo bien definidos"
        description="Una consulta inicial util no busca una promesa maxima. Busca evitar errores de lectura, ordenar mejor el punto de partida y definir una salida tecnica o documental razonable antes de que el caso llegue mas debilitado."
        primaryAction={{ href: "/contacto", label: contactPageCtaLabel }}
        secondaryAction={{ href: "/recursos", label: resourcesCtaLabel }}
        note="Servicios ya actua como puerta de entrada a problemas reales donde una consulta temprana puede evitar errores caros de preservacion, enfoque o atribucion."
        highlights={[
          "Mas conexion entre servicios, patrones reconocibles y autoridad editorial.",
          "Mas claridad sobre por que una lectura tecnica temprana evita errores caros.",
        ]}
      />
    </>
  );
}
