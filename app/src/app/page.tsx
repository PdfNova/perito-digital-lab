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
  StatCard,
  SurfaceCard,
  TagList,
} from "@/components/ui";
import { buildPageMetadata } from "./metadata";
import {
  contactPageCtaLabel,
  resourcesCtaLabel,
  visualAssets,
} from "./site-config";
import { serviceSpecialties } from "./servicios/service-specialties";

const serviceLines = serviceSpecialties.map((specialty) => ({
  type: "Especialidad",
  title: specialty.title,
  description: specialty.landing.description,
  meta: specialty.landing.meta,
  href: specialty.href,
  cta: "Ver servicio",
  tags: specialty.landing.tags,
}));

const proofBlocks = [
  {
    title: "Como se trabaja",
    description:
      "Encuadre inicial, preservacion, analisis, correlacion y documentacion dentro de una secuencia visible y explicable.",
  },
  {
    title: "Que puede esperar el cliente",
    description:
      "Mas claridad sobre materiales, mejor lectura del punto de partida, alcance razonable y una salida tecnica o documental mas util.",
  },
  {
    title: "Que encargos encajan mejor",
    description:
      "Casos donde hay evidencia dispersa, mensajes, dispositivos, activos abiertos o necesidad de reconstruir hechos y explicarlos bien.",
  },
  {
    title: "Que entregables puede haber",
    description:
      "Cronologias, notas de correlacion, revisiones tecnicas, anexos y piezas periciales redactadas con prudencia y estructura.",
  },
];

const featuredResources = [
  {
    type: "Articulo aplicado",
    title: "Email bombing y fraude e-commerce",
    description:
      "Pieza para entender como el ruido puede ocultar alertas utiles y por que preservar la secuencia cambia el valor del caso.",
    meta: "Lectura estimada: 7 min",
    href: "/recursos/articulos/email-bombing-fraude-ecommerce",
    cta: "Leer articulo aplicado",
    tags: ["Fraude e-commerce", "Correo", "Secuencia"],
  },
  {
    type: "Guia tecnica",
    title: "Mensajeria, moviles y conflictos civiles",
    description:
      "Guia para ordenar conversaciones, capturas y exportaciones cuando el problema ya llega mezclado con conflicto y exceso de relato.",
    meta: "Lectura estimada: 8 min",
    href: "/recursos/guias/mensajeria-moviles-conflictos-civiles",
    cta: "Leer guia aplicada",
    tags: ["Moviles", "Mensajeria", "Conflictos civiles"],
  },
  {
    type: "Guia tecnica",
    title: "Cuenta instrumental y fraccionamiento de ingresos",
    description:
      "Guia para leer mejor patrones financieros visibles sin convertir una recurrencia en una conclusion precipitada.",
    meta: "Lectura estimada: 8 min",
    href: "/recursos/guias/cuenta-instrumental-fraccionamiento",
    cta: "Leer guia aplicada",
    tags: ["Trazabilidad", "Patron financiero", "Criterio"],
  },
  {
    type: "Caso tipo",
    title: "Huella digital, OSINT y limites de atribucion",
    description:
      "Caso anonimo para mostrar como una correlacion abierta puede ser valiosa sin justificar todavia una atribucion total.",
    meta: "Lectura estimada: 6 min",
    href: "/recursos/casos/huella-digital-osint",
    cta: "Leer caso tipo",
    tags: ["OSINT", "Huella digital", "Atribucion"],
  },
];

const casePatterns = [
  {
    title: "Cuenta instrumental y dispersion de importes",
    description:
      "Cuando un movimiento aislado parece menor, pero la secuencia completa apunta a una operativa financiera mas amplia y mejor documentable.",
  },
  {
    title: "Fraude e-commerce con ocultacion de alertas",
    description:
      "Cuando pedidos, cambios de cuenta o accesos quedan enterrados entre ruido, correo masivo y materiales mal preservados.",
  },
  {
    title: "Huella digital y correlacion de indicios",
    description:
      "Cuando perfiles, dominios, activos abiertos y trazas visibles solo cobran sentido al leerse como un conjunto coherente.",
  },
  {
    title: "Mensajeria y conflicto civil con evidencia dispersa",
    description:
      "Cuando capturas, exportaciones y cronologias parciales necesitan orden para convertirse en una pieza legible para terceros.",
  },
];

const brandScenes = [
  {
    src: "/images/slots/slot-despacho.svg",
    alt: "Escena visual de despacho profesional y mesa de reunion tecnica",
    title: "Despacho y reunion tecnica",
    description:
      "Mesa de reunion, documentacion y una atmosfera sobria de despacho para reforzar posicionamiento y confianza.",
  },
  {
    src: "/images/slots/slot-analista.svg",
    alt: "Escena visual de analista trabajando con pantallas y notas",
    title: "Analisis y entorno de trabajo",
    description:
      "Pantallas, notas de trabajo y lectura de indicios dentro de un entorno tecnico sin estetica exhibicionista.",
  },
  {
    src: "/images/slots/slot-moviles.svg",
    alt: "Escena visual de moviles, evidencias y cadena documental",
    title: "Moviles y evidencia organizada",
    description:
      "Dispositivos, exportaciones y materiales ordenados con criterio documental y lectura pericial.",
  },
  {
    src: "/images/slots/slot-documental.svg",
    alt: "Escena visual de informes, pantallas y documentacion tecnica",
    title: "Informe y capa documental",
    description:
      "Informe, anexos y trazabilidad documental dentro de una direccion visual coherente con la firma.",
  },
];

export const metadata: Metadata = buildPageMetadata({
  title: "Investigacion digital, analisis pericial y documentacion tecnica",
  description:
    "Firma de investigacion digital, analisis forense, OSINT con limites, trazabilidad e informes tecnicos para casos donde la evidencia debe sostenerse con criterio.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <PageHero
        eyebrow="Firma tecnica / investigacion digital / analisis pericial"
        title="Investigacion digital y analisis pericial para casos donde la evidencia necesita sostenerse"
        subtitle="Una firma especializada para despachos, procedimientos sensibles y encargos con componente digital donde hace falta ordenar materiales, reconstruir hechos y producir una salida documental clara, sobria y defendible."
        primaryAction={{ href: "/contacto", label: contactPageCtaLabel }}
        secondaryAction={{ href: "/servicios", label: "Ver servicios prioritarios" }}
        chips={[
          "OSINT con limites",
          "Moviles y mensajeria",
          "Fraude y trazabilidad",
          "Informes tecnicos y periciales",
        ]}
        stats={[
          { value: "8", label: "Lineas de servicio integradas" },
          { value: "4", label: "Bloques de confianza visibles" },
          { value: "Real", label: "Hub editorial ya operativo" },
        ]}
        notes={[
          "La web combina direccion de firma, metodo visible y un discurso comercial mas claro sobre que problemas resuelve.",
          "La credibilidad se apoya en estructura, limites y piezas publicas, no en cifras inventadas ni promesas maximas.",
        ]}
        visual={
          <ImagePanel
            src={visualAssets.heroMain.src}
            alt={visualAssets.heroMain.alt}
            eyebrow="Direccion de arte"
            title="Despacho, analisis digital y criterio documental reunidos en una misma presencia"
            description="La portada deja de comportarse como una web sobria de estudio y pasa a proyectar una firma mas potente, visual y claramente especializada."
            tags={["Firma premium", "Entorno tecnico", "Salida documental"]}
            priority
          />
        }
      />

      <Section tint="dark">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-start">
            <div>
              <Eyebrow tone="light">Problemas que resuelve</Eyebrow>
              <SectionHeading
                title="Cuando lo digital cambia la lectura del asunto y hace falta una firma con mas estructura"
                description="La propuesta esta pensada para situaciones donde la informacion existe, pero no esta ordenada, no se entiende bien o no puede traducirse todavia a una pieza util para terceros."
                tone="light"
              />
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <StatCard
                value="01"
                label="Evidencia dispersa"
                description="Mensajes, capturas, exportaciones, dispositivos o fuentes abiertas que no pueden leerse de forma aislada."
                tone="light"
              />
              <StatCard
                value="02"
                label="Cronologia incompleta"
                description="Hechos que necesitan secuencia, relacion entre indicios y contexto tecnico para ganar claridad."
                tone="light"
              />
              <StatCard
                value="03"
                label="Necesidad de informe"
                description="Casos donde el valor esta en convertir el analisis en una salida clara, prudente y defendible."
                tone="light"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <Eyebrow>Servicios prioritarios</Eyebrow>
              <SectionHeading
                title="Cuatro especialidades publicas para captar consultas mejor formuladas"
                description="La home ya no apunta solo a una oferta general. Destaca cuatro paginas de servicio pensadas para explicar mejor problemas concretos, limites y salida documental posible."
              />
            </div>
            <SurfaceCard
              title="Una propuesta comercial mas fuerte"
              description="Cada especialidad se presenta como una necesidad profesional concreta, con mejor encaje, mayor presencia visual y una salida inteligible para perfiles tecnicos y no tecnicos."
              compact
            >
              <BulletList
                items={[
                  "Problemas mejor definidos desde la primera visita.",
                  "Puente directo entre especialidades, recursos y contacto.",
                  "Mas claridad sobre encaje, limites y salida documental.",
                ]}
              />
              <div className="pt-1">
                <ButtonLink href="/servicios" label="Explorar alcance completo" variant="secondary" />
              </div>
            </SurfaceCard>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {serviceLines.map((service) => (
              <ContentLinkCard
                key={service.title}
                type={service.type}
                title={service.title}
                description={service.description}
                meta={service.meta}
                href={service.href}
                cta={service.cta}
                tags={service.tags}
                compact
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section tint="soft">
        <Container className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <div className="grid gap-4">
            <ImagePanel
              src="/images/hero/hero-signature.svg"
              alt="Mesa principal de despacho con informe, pantallas y entorno premium"
              eyebrow="Presencia de firma"
              title="Una direccion mas cercana a despacho premium que a portfolio editorial"
              description="La marca gana fuerza cuando la web deja ver escala, rigor y una atmosfera de trabajo mas potente, sin caer en signos visuales estridentes."
              tags={["Despacho", "Marca", "Confianza"]}
              aspect="landscape"
            />
            <SurfaceCard
              title="Encaje prioritario"
              description="Especialmente util para despachos, asuntos de familia, fraude tecnologico, controversias con moviles y casos donde la huella digital exige reconstruccion prudente."
              compact
            >
              <TagList
                items={[
                  "Despachos juridicos",
                  "Procedimientos sensibles",
                  "Evidencia movil",
                  "Trazabilidad",
                ]}
              />
            </SurfaceCard>
          </div>

          <div>
            <Eyebrow>Confianza estructural</Eyebrow>
            <SectionHeading
              title="La autoridad se hace visible sin inventar cifras ni apoyarse en exhibicion"
              description="La capa de confianza se construye mostrando como se trabaja, que encargos encajan, que puede esperar quien consulta y que tipo de entregables salen de un proceso bien llevado."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {proofBlocks.map((block) => (
                <SurfaceCard key={block.title} title={block.title} description={block.description} compact />
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <Eyebrow>Casos tipo</Eyebrow>
            <SectionHeading
              title="Patrones donde una revision tecnica suele revelar mas de lo que parece al inicio"
              description="Varios encargos comparten una misma logica: un elemento aislado parece menor hasta que se lee dentro de una secuencia mayor. Parte de esos patrones ya estan publicados en recursos para mostrar mejor donde empieza el valor del criterio experto."
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {casePatterns.map((item) => (
              <SurfaceCard key={item.title} title={item.title} description={item.description} compact />
            ))}
          </div>
        </Container>
      </Section>

      <Section tint="dark">
        <Container className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <Eyebrow tone="light">Metodo y entregables</Eyebrow>
            <SectionHeading
              title="Una firma premium no solo explica servicios: muestra como convierte indicios en salidas utiles"
              description="El recorrido operativo esta pensado para reforzar la percepcion de solidez: encuadre, preservacion, analisis, correlacion, documentacion y entrega legible."
              tone="light"
            />
            <div className="mt-8">
              <TagList
                items={[
                  "Encuadre inicial",
                  "Preservacion y orden",
                  "Analisis y correlacion",
                  "Informe claro",
                ]}
                tone="light"
              />
            </div>
          </div>
          <div className="grid gap-4">
            <SurfaceCard
              title="Como se traduce en la practica"
              description="La consulta inicial no intenta vender una certeza. Intenta acotar mejor el problema, leer el material disponible y definir la salida tecnica o pericial mas sensata."
              tone="light"
              compact
            >
              <BulletList
                items={[
                  "Revision de materiales y del objetivo del encargo.",
                  "Lectura de relaciones, secuencias y limites.",
                  "Preparacion de cronologia, nota tecnica o informe.",
                ]}
                tone="light"
              />
            </SurfaceCard>
            <div className="grid gap-4 md:grid-cols-2">
              <SurfaceCard
                title="Salidas habituales"
                description="Cronologias, correlacion de indicios, lectura de mensajeria, revision tecnica de evidencia y documento final orientado a terceros."
                tone="light"
                compact
              />
              <SurfaceCard
                title="Ventaja comercial real"
                description="Mostrar proceso y salida eleva la confianza antes del contacto y filtra mejor encargos impropios o expectativas irreales."
                tone="light"
                compact
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
            <div>
              <Eyebrow>Recursos como ventaja</Eyebrow>
              <SectionHeading
                title="La biblioteca ya publica patrones de caso, guias y lecturas aplicadas"
                description="Los recursos ya no solo informan. Funcionan como prueba publica de criterio en fraude, mensajeria, conflictos sensibles y OSINT con limites, y preparan mejor una conversacion comercial con materiales y alcance mas claros."
              />
            </div>
            <SurfaceCard
              title="Contenido que trabaja para la firma"
              description="Articulos aplicados, guias y casos tipo elevan la percepcion de experiencia real y dejan mas claro por que una revision bien planteada evita errores de enfoque, de preservacion y de atribucion."
              compact
            >
              <Link className="inline-link" href="/recursos">
                {resourcesCtaLabel}
              </Link>
            </SurfaceCard>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {featuredResources.map((resource) => (
              <ContentLinkCard
                key={resource.title}
                type={resource.type}
                title={resource.title}
                description={resource.description}
                meta={resource.meta}
                href={resource.href}
                cta={resource.cta}
                tags={resource.tags}
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section tint="soft">
        <Container>
          <SectionHeading
            title="Escenas visuales que ya fijan el lenguaje de la firma"
            description="Despacho, analisis, moviles e informe documental dentro de una misma direccion de marca, ya integrada como parte del cierre visual del sitio."
            align="center"
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {brandScenes.map((slot) => (
              <SurfaceCard key={slot.title} title={slot.title} description={slot.description} compact>
                <ImagePanel
                  src={slot.src}
                  alt={slot.alt}
                  eyebrow="Escena de marca"
                  title={slot.title}
                  description={slot.description}
                  tags={["Despacho", "Analisis", "Documento"]}
                  aspect="wide"
                />
              </SurfaceCard>
            ))}
          </div>
        </Container>
      </Section>

      <ActionBanner
        eyebrow="Siguiente paso"
        title="Si el asunto requiere criterio tecnico y una salida documental solida, el siguiente paso es una consulta bien encuadrada"
        description="La mejor entrada no es una promesa maxima. Es una consulta con objetivo claro, materiales identificados y una expectativa razonable sobre lo que puede ordenarse, correlacionarse o documentarse."
        primaryAction={{ href: "/contacto", label: contactPageCtaLabel }}
        secondaryAction={{ href: "/recursos", label: resourcesCtaLabel }}
        note="La home ya funciona como una portada comercial mas fuerte: firma, servicios, confianza, recursos y contacto dentro de una sola narrativa."
        highlights={[
          "Servicios ampliados y mejor articulados para encargos de mayor valor.",
          "Presencia visual claramente superior y mas propia de una firma especializada.",
        ]}
      />
    </>
  );
}
