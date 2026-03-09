import type { Metadata } from "next";
import Link from "next/link";
import {
  ActionBanner,
  BulletList,
  ButtonLink,
  Container,
  ContentLinkCard,
  DecisionGuard,
  EditorialMetaStrip,
  Eyebrow,
  ImagePanel,
  PageHero,
  Section,
  SectionHeading,
  StatCard,
  SurfaceCard,
} from "@/components/ui";
import { buildPageMetadata } from "./metadata";
import {
  beforeActionDescription,
  beforeActionTitle,
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
    title: "Preservacion y secuencia",
    description:
      "Buena parte del valor del caso se gana o se pierde antes del informe: cuando exportaciones, correos, extractos, hashes o PDFs conservan fuente, continuidad y una secuencia que no llega rehecha.",
  },
  {
    title: "Lectura pericial prudente",
    description:
      "No todo indicio sostiene la misma conclusion. El trabajo util separa observacion, patron, correlacion, inferencia y limite a partir de metadatos, cronologias, cabeceras, artefactos y contexto.",
  },
  {
    title: "Salida util para terceros",
    description:
      "Cronologia, nota tecnica, cuadro documental o informe claro para quien debe decidir sin depender de capturas llamativas, PDFs planos o un relato mal cerrado.",
  },
];

const featuredResources = [
  {
    type: "Lectura clave",
    title: "Notario digital vs perito digital",
    description:
      "Duda que suele interpretarse mal: que fija una constatacion documental y que aporta una lectura tecnica sobre contexto, integridad y secuencia.",
    meta: "Despachos y decisores / 7 min",
    href: "/recursos/articulos/notario-digital-vs-perito-digital",
    cta: "Leer lectura aplicada",
    tags: ["Despachos", "Documento", "Perito digital"],
  },
  {
    type: "Guia tecnica",
    title: "Firma electronica valida vs firma visual en PDF",
    description:
      "Controversia documental frecuente: distinguir apariencia de firma, estructura del archivo, revisiones y valor documental real del PDF.",
    meta: "Documento electronico / 8 min",
    href: "/recursos/guias/firma-electronica-pdf-validez-documental",
    cta: "Leer guia tecnica",
    tags: ["PDF", "Firma electronica", "Valor documental"],
  },
  {
    type: "Caso tipo",
    title: "Cuenta instrumental, smurfing y operativa circular",
    description:
      "Patron que suele llegar fragmentado: una secuencia financiera mal leida puede inflar, ocultar o debilitar un patron muy relevante.",
    meta: "Fraude bancario / 6 min",
    href: "/recursos/casos/cuenta-instrumental-smurfing-operativa-circular",
    cta: "Leer caso tipo",
    tags: ["Fraude bancario", "Smurfing", "Trazabilidad"],
  },
];

const editorialSignals = [
  {
    title: "Casos que suelen llegar mal planteados",
    description:
      "Fraude con wallet cerrado demasiado pronto, recovery scam que reabre la perdida, PDFs con firma visible, secuencias financieras fragmentadas y mensajeria ya recortada.",
  },
  {
    title: "Errores que hacen perder valor probatorio",
    description:
      "Material reenviado demasiadas veces, alertas borradas, PDFs impresos y escaneados, capturas sin fuente o exportaciones incompletas que ya no sostienen igual la misma lectura.",
  },
  {
    title: "Por que conviene consultar antes de actuar",
    description:
      "Hay materiales que parecen cerrar el asunto y solo aportan una parte. Una lectura temprana evita fijar explicaciones pobres sobre una base que luego cuesta mucho recomponer.",
  },
];

export const metadata: Metadata = buildPageMetadata({
  title: "Investigacion digital, analisis pericial y documentacion tecnica",
  description:
    "Firma de investigacion digital, analisis pericial, OSINT con limites, trazabilidad e informes tecnicos para casos donde la evidencia debe sostenerse con criterio.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <PageHero
        eyebrow="Firma tecnica / investigacion digital / analisis pericial"
        title="Investigacion digital y analisis pericial para casos donde una mala lectura puede empeorarlo todo"
        subtitle="Firma orientada a despachos, procedimientos sensibles y encargos con componente digital donde hace falta ordenar materiales, reconstruir secuencia y distinguir mejor que sirve como indicio, que sostiene correlacion y que ya puede defenderse documentalmente a partir de exportaciones, metadatos, hashes, cronologias o artefactos revisables."
        primaryAction={{ href: "/contacto", label: contactPageCtaLabel }}
        secondaryAction={{ href: "/recursos", label: resourcesCtaLabel }}
        chips={[
          "OSINT con limites",
          "Moviles y mensajeria",
          "Fraude y trazabilidad",
          "Informes tecnicos y periciales",
        ]}
        stats={[
          { value: "4", label: "Especialidades visibles" },
          { value: "14", label: "Piezas editoriales publicas" },
          { value: "Temprano", label: "Consultar antes suele proteger valor" },
        ]}
        notes={[
          "La autoridad publica no se apoya en promesas. Se apoya en patrones reconocibles, errores repetidos y lectura tecnica prudente.",
          "Servicios, recursos y contacto ya funcionan como un mismo recorrido para reconocer que material llega fuerte, que material llega aparente y cuando conviene consultar antes de seguir moviendolo.",
        ]}
        visual={
          <ImagePanel
            src={visualAssets.heroMain.src}
            alt={visualAssets.heroMain.alt}
            eyebrow="Direccion de firma"
            title="Despacho, analisis digital y criterio documental en una sola presencia"
            description="La primera impresion ya no suena a biblioteca generalista: suena a firma que distingue bien entre material aparente, material util y secuencias que ya llegan debilitadas."
            tags={["Firma premium", "Entorno tecnico", "Criterio documental"]}
            priority
          />
        }
      />

      <Section tint="dark">
        <Container>
          <div className="grid gap-7 xl:grid-cols-[0.88fr_1.12fr] xl:items-start">
            <div>
              <Eyebrow tone="light">Cuando aporta valor</Eyebrow>
              <SectionHeading
                title="Cuando el problema ya no es solo encontrar un dato, sino evitar una lectura debil del caso"
                description="La firma encaja mejor cuando hay evidencia dispersa, decisiones tomadas deprisa, secuencias mal conservadas o necesidad de traducir lo tecnico a una pieza comprensible para terceros."
                tone="light"
              />
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <StatCard
                value="01"
                label="Evidencia mal conservada"
                description="Capturas, PDFs, correos o exportaciones que llegan ya reenviados, incompletos o fuera de la fuente que les daba mas valor."
                tone="light"
              />
              <StatCard
                value="02"
                label="Secuencia mal leida"
                description="Hechos que cambian al ordenar alertas, movimientos, mensajes, documentos y tiempos dentro de una sola secuencia legible."
                tone="light"
              />
              <StatCard
                value="03"
                label="Necesidad de criterio"
                description="Casos donde una lectura tecnica temprana evita atribuciones pobres, ruido acumulado y decisiones caras de corregir despues."
                tone="light"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 xl:grid-cols-[1.16fr_0.84fr] xl:items-start">
          <div>
            <Eyebrow>Especialidades prioritarias</Eyebrow>
            <SectionHeading
              title="Servicios enfocados para problemas donde una consulta bien planteada cambia el resultado"
              description="La portada concentra las especialidades que mejor captan consultas cualificadas y las acompana de una explicacion clara sobre como se ordena un asunto antes de convertirlo en informe, nota tecnica o pieza pericial."
            />
            <div className="mt-7 grid gap-4 lg:grid-cols-2">
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
          </div>

          <div className="grid gap-4">
            <SurfaceCard
              title="Como se convierte un problema digital en una lectura util"
              description="La autoridad no sale de enumerar servicios. Sale de mostrar que decisiones suelen degradar un caso y que hace una revision seria para devolverle estructura."
              compact
            >
              <BulletList
                items={[
                  "Se fija que material existe realmente y en que estado de preservacion llega: exportaciones, cabeceras, PDF verificable, extractos, tx hash o copia de trabajo.",
                  "Se ordenan secuencias y relaciones con apoyo en cronologias, metadatos, hashes y artefactos antes de extraer conclusiones fuertes o cerrar atribuciones.",
                  "Se documenta una salida clara con limites visibles para terceros y con mejor separacion entre indicio e inferencia.",
                ]}
              />
              <div className="pt-1">
                <ButtonLink href="/servicios" label="Ver especialidades" variant="secondary" />
              </div>
            </SurfaceCard>

            <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-1">
              {proofBlocks.map((block) => (
                <SurfaceCard key={block.title} title={block.title} description={block.description} compact />
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section tint="soft">
        <Container>
          <div className="grid gap-7 xl:grid-cols-[0.86fr_1.14fr] xl:items-end">
            <div>
              <Eyebrow>Casos, historias y lecturas aplicadas</Eyebrow>
              <SectionHeading
                title="La home ya deja ver problemas reales anonimizados, decisiones que llegan tarde y criterios que cambian la lectura del caso"
                description="La capa editorial ya no parece una biblioteca lateral. Funciona como prueba publica de experiencia aplicada en fraude, documentos, medios de pago, mensajeria, OSINT y preservacion."
              />
            </div>
            <SurfaceCard
              title="Por que esta zona eleva autoridad de verdad"
              description="Las piezas destacadas no venden espectacularidad. Hacen visible por que un caso con capturas, PDFs, correos, wallets o movimientos bancarios puede necesitar lectura tecnica mucho antes de lo que parece."
              compact
            >
              <EditorialMetaStrip
                items={[
                  { label: "Casos", value: "Patrones anonimizados y errores recurrentes de lectura." },
                  { label: "Guias", value: "Lecturas tecnicas sobre PDF, firmas, wallets, atribucion y alcance." },
                  { label: "Artefactos", value: "Exportaciones, metadatos, hashes, cabeceras, extractos y cronologias." },
                  { label: "Puente", value: "Cada pieza conecta con especialidad, metodologia o contacto." },
                ]}
              />
            </SurfaceCard>
          </div>

          <div className="mt-7 grid gap-4 xl:grid-cols-[1.28fr_0.72fr]">
            <div className="grid gap-4 lg:grid-cols-3">
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
                  compact
                />
              ))}
            </div>

            <SurfaceCard
              title="Pruebas publicas de criterio, no lecturas accesorias"
              description="Estas piezas dominan la percepcion de autoridad porque hacen visible que muchos asuntos se debilitan por una mala lectura inicial y por acciones previas evitables."
              compact
            >
              <div className="grid gap-3">
                {editorialSignals.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.15rem] border border-[var(--color-border)] bg-white/70 px-4 py-3.5"
                  >
                    <p className="text-sm font-medium text-[var(--color-text)]">{item.title}</p>
                    <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{item.description}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 pt-1">
                <ButtonLink href="/recursos" label={resourcesCtaLabel} variant="secondary" />
                <Link className="inline-link" href="/recursos/articulos/tokenizacion-fraudulenta-tarjeta-wallet">
                  Ver otro patron aplicable
                </Link>
              </div>
            </SurfaceCard>
          </div>

          <div className="mt-7">
            <DecisionGuard
              eyebrow="Antes de tomar decisiones sobre el material digital"
              title={beforeActionTitle}
              description={beforeActionDescription}
              items={[
                "Hay consultas que llegan con capturas reenviadas muchas veces y sin la fuente que les daba continuidad.",
                "Hay PDFs con firma visible que ya vienen impresos, escaneados o separados de la validacion criptografica que permitiria leerlos mejor.",
                "Hay fraudes con wallet donde faltan alertas, cronologia de cargos o contexto de dispositivo y esa intuicion inicial hace perder tiempo valioso.",
                "Hay recuperaciones cripto aparentes que anaden nuevas wallets, tx hash, pagos y ruido antes de que se haya ordenado la perdida inicial.",
              ]}
              primaryAction={{ href: "/contacto", label: contactPageCtaLabel }}
              secondaryAction={{ href: "/recursos", label: resourcesCtaLabel }}
            />
          </div>
        </Container>
      </Section>

      <ActionBanner
        eyebrow="Siguiente paso"
        title="Si el asunto requiere criterio tecnico y una salida documental seria, conviene consultar antes de que el material se siga degradando"
        description="La mejor entrada no es una promesa maxima. Es una consulta con objetivo claro, materiales identificados y una expectativa razonable sobre lo que puede revisarse, correlacionarse o documentarse sin inflar lo que aun no sostiene el material."
        primaryAction={{ href: "/contacto", label: contactPageCtaLabel }}
        secondaryAction={{ href: "/recursos", label: resourcesCtaLabel }}
        note="La home cierra con una idea mas concreta: no todo material llega con el mismo valor y una mala preservacion puede empeorar mucho su lectura posterior."
        highlights={[
          "Autoridad publica basada en patrones reconocibles, no en claims vacios.",
          "Puente directo entre experiencia aplicada, material util y consulta cualificada.",
        ]}
      />
    </>
  );
}
