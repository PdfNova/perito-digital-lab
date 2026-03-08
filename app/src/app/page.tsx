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
  StatCard,
  SurfaceCard,
  TagList,
} from "@/components/ui";
import { buildPageMetadata } from "./metadata";
import {
  contactPageCtaLabel,
  visualAssets,
} from "./site-config";

const capabilities = [
  {
    title: "Investigacion digital",
    description:
      "Ordenacion de indicios, relaciones y contexto tecnico para reconstruir hechos con mayor claridad.",
  },
  {
    title: "Analisis forense",
    description:
      "Revision tecnica de evidencias, preservacion y lectura estructurada de soportes y artefactos.",
  },
  {
    title: "OSINT con limites",
    description:
      "Uso de fuentes abiertas para aportar contexto y relacionar activos sin inflar atribuciones.",
  },
  {
    title: "Trazabilidad tecnologica",
    description:
      "Reconstruccion de secuencias, conexiones y movimientos entre cuentas, dispositivos y eventos.",
  },
];

const featuredResources = [
  {
    type: "Articulo",
    title: "Valor documental de la evidencia digital",
    description:
      "Pieza base para entender por que contexto, integridad y trazabilidad importan tanto como el hallazgo.",
    meta: "Lectura estimada: 6 min",
    href: "/recursos/articulos/valor-documental-evidencia-digital",
    cta: "Leer articulo",
    tags: ["Evidencia digital", "Contexto", "Integridad"],
  },
  {
    type: "Video",
    title: "Que hace util a una evidencia digital y que la debilita",
    description:
      "Episodio editorial que condensa el marco base del proyecto y lo convierte en una pieza grabable y reutilizable.",
    meta: "Duracion objetivo: 5:30-6:00",
    href: "/recursos/videos/episodio-01",
    cta: "Ver episodio",
    tags: ["Video largo", "Pieza base", "Shorts"],
  },
  {
    type: "Guia tecnica",
    title: "Revision tecnica de evidencia digital: alcance y limites",
    description:
      "Recurso nuevo orientado a explicar que puede aportar una revision tecnica y por que los limites refuerzan su credibilidad.",
    meta: "Lectura estimada: 7 min",
    href: "/recursos/guias/revision-tecnica-evidencia-digital",
    cta: "Leer guia",
    tags: ["Revision tecnica", "Alcance", "Conversion"],
  },
];

const methodology = [
  "Delimitar el caso y su contexto.",
  "Preservar y organizar la informacion disponible.",
  "Analizar y relacionar indicios con criterio.",
  "Documentar hallazgos, limites y conclusiones.",
];

const recommendedPath = [
  {
    title: "Entender el marco",
    description:
      "Empezar por el articulo base o por la guia tecnica para ajustar lenguaje, expectativas y valor documental.",
    href: "/recursos",
    cta: "Ir a recursos",
  },
  {
    title: "Valorar encaje",
    description:
      "Revisar servicios y metodologia para entender como se articula el trabajo y que tipo de necesidad encaja mejor.",
    href: "/servicios",
    cta: "Ver servicios",
  },
  {
    title: "Plantear la consulta",
    description:
      "Pasar a contacto con materiales identificados, objetivo claro y una expectativa razonable sobre la salida del trabajo.",
    href: "/contacto",
    cta: "Ir a contacto",
  },
];

export const metadata: Metadata = buildPageMetadata({
  title: "Investigacion digital, evidencia y documentacion tecnica",
  description:
    "Investigacion digital, analisis forense, trazabilidad y documentacion tecnica para casos donde la evidencia digital necesita orden, contexto y claridad expositiva.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <PageHero
        eyebrow="Investigacion digital / analisis forense / trazabilidad"
        title="Investigacion digital y documentacion tecnica para casos donde el componente digital exige criterio"
        subtitle="Una presencia pensada para consultas cualificadas donde la informacion digital necesita orden, lectura metodologica y una salida documental clara."
        primaryAction={{ href: "/contacto", label: contactPageCtaLabel }}
        secondaryAction={{ href: "/recursos", label: "Explorar recursos" }}
        stats={[
          { value: "4", label: "Piezas editoriales ya visibles" },
          { value: "5", label: "Lineas principales de trabajo" },
          { value: "Listo", label: "Sistema publico casi cerrado" },
        ]}
        notes={[
          "Enfoque tecnico, discreto y orientado a documentacion.",
          "Servicios, metodologia, recursos y contacto ya actuan como un mismo sistema de entrada.",
        ]}
        visual={
          <ImagePanel
            src={visualAssets.heroMain.src}
            alt={visualAssets.heroMain.alt}
            eyebrow="Entorno de analisis"
            title="Despacho, analisis digital y documentacion reunidos bajo una misma logica de trabajo"
            description="La web ya no se limita a presentar servicios: muestra metodo, recursos reales y una capa editorial que ayuda a entender mejor cada necesidad."
            tags={["Despacho profesional", "Analisis digital", "Biblioteca editorial"]}
            priority
          />
        }
      />

      <Section>
        <Container className="grid gap-8 lg:grid-cols-[1fr_0.98fr] lg:items-start">
          <div>
            <Eyebrow>Posicionamiento</Eyebrow>
            <SectionHeading
              title="Una firma tecnica para leer mejor evidencia digital, trazabilidad y alcance documental"
              description="El proyecto combina investigacion digital, analisis forense, OSINT con limites, trazabilidad y documentacion tecnica con una presencia mas cercana a un despacho de criterio que a una web generica de servicios."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <SurfaceCard
                title="Autoridad sin exhibicion"
                description="La credibilidad se apoya en estructura, metodo, piezas publicas y claridad expositiva, no en reclamos agresivos."
              />
              <SurfaceCard
                title="Contenido que ya trabaja"
                description="La biblioteca editorial ayuda a construir confianza, mejora el encaje de la consulta y hace que la web se perciba viva."
              />
            </div>
          </div>

          <ImagePanel
            src="/images/hero/hero-signature.svg"
            alt="Mesa de trabajo con documentacion tecnica, pantalla principal y materiales de analisis"
            eyebrow="Presencia de firma"
            title="Una presencia de despacho tecnico, no una simple portada de servicios"
            description="La capa visual y editorial acompana un posicionamiento mas serio: analisis, metodo, piezas publicas y conversion cualificada."
            tags={["Mesa de trabajo", "Pantallas", "Metodo"]}
            aspect="landscape"
          />
        </Container>
      </Section>

      <Section tint="soft">
        <Container className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-start">
          <div>
            <Eyebrow>Recorrido</Eyebrow>
            <SectionHeading
              title="Un recorrido claro desde la primera visita hasta la consulta"
              description="La home ya no funciona solo como presentacion. Ordena el camino entre contenido, servicios, metodologia y contacto para que el sitio se perciba como un sistema completo."
            />
          </div>
          <div className="grid gap-4">
            {recommendedPath.map((item) => (
              <SurfaceCard key={item.title} title={item.title} description={item.description}>
                <Link className="inline-link" href={item.href}>
                  {item.cta}
                </Link>
              </SurfaceCard>
            ))}
          </div>
        </Container>
      </Section>

      <Section tint="soft">
        <Container>
          <SectionHeading
            title="Cuando el componente digital complica la lectura del caso"
            description="La propuesta se orienta a situaciones donde el problema no es solo encontrar informacion, sino darle forma, secuencia y utilidad documental."
            align="center"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <StatCard
              value="01"
              label="Evidencia dispersa"
              description="Fuentes fragmentadas que exigen orden, criterio y lectura conjunta antes de cualquier conclusion."
            />
            <StatCard
              value="02"
              label="Cronologias incompletas"
              description="Secuencias que requieren contexto tecnico para entender relaciones, tiempos y valor documental."
            />
            <StatCard
              value="03"
              label="Necesidad de informe claro"
              description="Hallazgos que deben traducirse a una salida comprensible para decisores y terceros no tecnicos."
            />
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div>
            <Eyebrow>Capacidades</Eyebrow>
            <SectionHeading
              title="Servicios pensados para aportar orden, trazabilidad y salida documental"
              description="La propuesta une analisis tecnico y estructura expositiva para que los hallazgos no solo existan, sino que puedan sostenerse y explicarse."
            />
            <div className="mt-8 grid gap-3">
              <Link className="inline-link" href="/servicios">
                Explorar servicios
              </Link>
              <Link className="inline-link" href="/metodologia">
                Ver metodologia
              </Link>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {capabilities.map((item) => (
              <SurfaceCard key={item.title} title={item.title} description={item.description} />
            ))}
            <SurfaceCard
              title="Lectura, metodo y documentacion bajo una misma propuesta"
              description="La capa comercial gana fuerza cuando la web deja ver que existe un sistema completo: servicios, piezas publicas, metodologia visible y un punto de contacto mejor filtrado."
              className="md:col-span-2"
            >
              <TagList
                items={[
                  "Despacho tecnico",
                  "Revision estructurada",
                  "Biblioteca editorial",
                  "Consulta cualificada",
                ]}
              />
            </SurfaceCard>
          </div>
        </Container>
      </Section>

      <Section tint="soft">
        <Container>
          <SectionHeading
            title="El sitio ya tiene contenido que puede leerse y reutilizarse"
            description="La home ya no apunta a una biblioteca futura. Destaca piezas reales que ayudan a entender mejor el enfoque antes de pasar a servicios o contacto."
            align="center"
          />
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

      <Section>
        <Container className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <div>
            <Eyebrow>Metodologia</Eyebrow>
            <SectionHeading
              title="Una metodologia visible y creible desde la primera visita"
              description="El valor no esta solo en el resultado, sino en la forma de encuadrar, preservar, analizar y documentar cada necesidad."
            />
            <div className="mt-8 grid gap-3">
              {methodology.map((item, index) => (
                <div key={item} className="premium-shell rounded-[1.45rem] px-5 py-4">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-strong)]">
                      {index + 1}
                    </span>
                    <div>
                      <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[var(--color-muted)]">
                        Paso {index + 1}
                      </p>
                      <p className="mt-1 text-base leading-7 text-[var(--color-text)]">{item}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <ImagePanel
              src="/images/methodology/methodology-process.svg"
              alt="Cronologia tecnica, notas metodologicas y estructura de proceso en pantalla"
              eyebrow="Secuencia de trabajo"
              title="Cronologias, criterios y salida documental dentro de un mismo proceso visible"
              description="Mostrar bien el proceso filtra mejor la consulta, reduce ruido comercial y refuerza la percepcion de servicio especializado."
              tags={["Cronologia", "Proceso", "Analisis"]}
              aspect="landscape"
            />
            <SurfaceCard
              title="Metodo como ventaja visible"
              description="La combinacion de proceso claro y contenido publico hace que la home se perciba mas cercana a una firma real y menos a una presentacion estatica."
            >
              <Link className="inline-link" href="/metodologia">
                Ver metodologia completa
              </Link>
            </SurfaceCard>
          </div>
        </Container>
      </Section>

      <Section tint="soft">
        <Container className="grid gap-6 lg:grid-cols-3">
          <SurfaceCard
            title="Que puede esperar una consulta bien encuadrada"
            description="Un primer intercambio util no busca aparentar certeza. Busca ordenar el problema, aclarar materiales disponibles y valorar el siguiente paso razonable."
          />
          <SurfaceCard
            title="Como se percibe mejor el trabajo"
            description="La combinacion de servicios, metodologia visible y recursos publicos hace que la propuesta resulte mas creible antes de cualquier encargo."
          />
          <SurfaceCard
            title="Que suele salir de un trabajo bien planteado"
            description="Cronologias, notas tecnicas, lectura de relaciones, aclaracion de alcance o una pieza documental clara para decidir mejor."
          />
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
          <SurfaceCard
            title="Que hace que esta home ya se perciba mas publica"
            description="La pagina principal ya combina posicionamiento, piezas reales, metodo visible y un camino de conversion mejor articulado."
          >
            <TagList
              items={[
                "Contenido integrado",
                "Metodo visible",
                "Servicios claros",
                "Contacto preparado",
              ]}
            />
            <div className="pt-1">
              <ButtonLink href="/recursos" label="Entrar en el hub editorial" variant="secondary" />
            </div>
          </SurfaceCard>

          <SurfaceCard
            title="Que puede esperar quien llega con una necesidad real"
            description="Un primer intercambio mas ordenado, una mejor lectura del punto de partida y una explicacion mas clara sobre alcance, limites y siguiente paso razonable."
          >
            <Link className="inline-link" href="/contacto">
              Preparar una consulta mejor planteada
            </Link>
            <p className="text-sm leading-7 text-[var(--color-muted)]">
              El recorrido recomendado ya esta visible: recursos para entender el marco, servicios
              para validar encaje y contacto para abrir una conversacion inicial con mejor contexto.
            </p>
          </SurfaceCard>
        </Container>
      </Section>

      <ActionBanner
        title="Si el caso requiere claridad tecnica, el siguiente paso es acotar el contexto con una consulta bien planteada"
        description="La mejor entrada no es un mensaje largo ni una promesa inflada. Es una consulta con objetivo claro, materiales identificados y una expectativa razonable sobre la salida tecnica o documental."
        primaryAction={{ href: "/contacto", label: contactPageCtaLabel }}
        secondaryAction={{ href: "/recursos", label: "Explorar recursos" }}
        note="El sitio ya combina servicios, metodologia y contenido publico para mejorar la calidad del primer intercambio."
        highlights={[
          "Consultas mejor formuladas desde el primer mensaje.",
          "Contenido real que ayuda a decidir mejor antes de contactar.",
        ]}
      />
    </>
  );
}
