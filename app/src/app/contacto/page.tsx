import type { Metadata } from "next";
import Link from "next/link";
import {
  ActionBanner,
  BulletList,
  ButtonLink,
  Container,
  ContentLinkCard,
  DecisionGuard,
  ImagePanel,
  PageHero,
  Section,
  SectionHeading,
  SurfaceCard,
  TagList,
} from "@/components/ui";
import {
  articleBaseCtaLabel,
  beforeActionTitle,
  contactAnchorCtaLabel,
  contactChannelDescription,
  contactChannelEyebrow,
  contactChannelLabel,
  contactDirectCtaLabel,
  contactFirstStepCopy,
  hasPublicContactEmail,
  contactMailto,
  contactResourceCtaLabel,
  contactResponseCopy,
  contactSubject,
  resourcesCtaLabel,
  technicalGuideCtaLabel,
  visualAssets,
} from "@/app/site-config";
import { buildPageMetadata } from "../metadata";

const supportPieces = [
  {
    type: "Lectura clave",
    title: "Notario digital vs perito digital",
    description:
      "Pieza recomendada para entender una duda que suele llegar mal planteada: que fija una constatacion documental y que aporta una lectura tecnica sobre origen, secuencia e integridad.",
    meta: "Recurso de encaje",
    href: "/recursos/articulos/notario-digital-vs-perito-digital",
    cta: "Leer lectura aplicada",
    tags: ["Despachos", "Documento", "Perito digital"],
  },
  {
    type: "Guia tecnica",
    title: "Firma electronica valida vs firma visual en PDF",
    description:
      "Guia para revisar documentos que parecen claros en pantalla pero exigen una lectura mejor de archivo, versiones y trazabilidad.",
    meta: "Documento electronico",
    href: "/recursos/guias/firma-electronica-pdf-validez-documental",
    cta: technicalGuideCtaLabel,
    tags: ["PDF", "Firma electronica", "Valor documental"],
  },
  {
    type: "Articulo base",
    title: "Valor documental de la evidencia digital",
    description:
      "Marco recomendado para entender por que contexto, integridad y trazabilidad condicionan la fuerza real del material, incluso cuando este parece convincente a primera vista.",
    meta: "Recurso base",
    href: "/recursos/articulos/valor-documental-evidencia-digital",
    cta: articleBaseCtaLabel,
    tags: ["Valor documental", "Contexto", "Integridad"],
  },
];

const fitCases = [
  "Despachos o profesionales juridicos que necesitan una lectura tecnica clara y no solo acumulacion de material.",
  "Procedimientos con mensajeria, moviles, PDFs, correos, wallets o documentos digitales relevantes.",
  "Encargos de fraude tecnologico, trazabilidad, huella digital o correlacion de indicios con limites.",
  "Casos donde una mala preservacion o una mala lectura inicial pueden empeorar mucho la utilidad posterior.",
];

const firstMessageItems = [
  "Breve descripcion del problema o de los hechos relevantes.",
  "Tipo de fuentes, materiales o dispositivos disponibles y si sigue existiendo acceso a la fuente original.",
  "Si el material ya ha sido reenviado, recortado, impreso, renombrado, exportado o parcialmente ordenado.",
  "Estado actual del caso, procedimiento o revision previa.",
  "Objetivo tecnico, documental o pericial que se pretende aclarar.",
];

const expectations = [
  {
    title: "Que ocurre en el primer intercambio",
    description:
      "Se valora encaje, materiales, prioridad y siguiente paso razonable. No se sustituye una revision tecnica en ese primer momento ni se fuerzan conclusiones sobre una base todavia debil.",
  },
  {
    title: "Que suele mejorar una consulta bien planteada",
    description:
      "Reduce ambiguedad, evita errores de preservacion y facilita decidir si conviene pasar a una fase de analisis, correlacion o documentacion con mejor separacion entre indicio e inferencia.",
  },
  {
    title: "Que suele llegar demasiado tarde",
    description:
      "Bandejas limpiadas, PDFs convertidos en imagen, capturas sin contexto, wallets con alertas perdidas, mensajes mezclados o secuencias reconstruidas de memoria.",
  },
  {
    title: "Que no se ofrece",
    description:
      "No se atienden peticiones orientadas a accesos a cuentas, recuperaciones invasivas sobre terceros ni identificaciones garantizadas.",
  },
];

export const metadata: Metadata = buildPageMetadata({
  title: "Contacto para investigacion digital y documentacion tecnica",
  description:
    "Pagina de contacto para consultas sobre investigacion digital, analisis pericial, trazabilidad, OSINT, evidencia movil y documentacion tecnica.",
  path: "/contacto",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Contacto para consultas tecnicas que necesitan una primera lectura seria y bien encuadrada"
        subtitle="La pagina de contacto funciona como entrada final del recorrido: ayuda a detectar encaje, plantear mejor la consulta y llegar antes de que el material se degrade, la secuencia se rompa o el caso se explique peor de lo que permite el soporte real."
        primaryAction={{ href: "#consulta", label: contactAnchorCtaLabel }}
        secondaryAction={{ href: "/servicios", label: "Volver a servicios" }}
        chips={[
          "Valoracion inicial",
          "Contexto y materiales",
          "Encaje del encargo",
          "Salida documental",
        ]}
        stats={[
          { value: "Claro", label: "Primer paso mejor encuadrado" },
          { value: "Filtro", label: "Mas calidad en la consulta inicial" },
          { value: "Serio", label: "Canal propio de una firma tecnica" },
        ]}
        notes={[
          "El objetivo no es recoger mensajes largos sino convertir el primer contacto en una conversacion tecnica mas util.",
          "Los recursos y especialidades ya permiten llegar con patron, materiales y limites mucho mejor entendidos.",
        ]}
        visual={
          <ImagePanel
            src={visualAssets.contactHero.src}
            alt={visualAssets.contactHero.alt}
            eyebrow="Canal de consulta"
            title="Despacho, criterio y documentacion al servicio de una toma de contacto mas precisa"
            description="La pagina proyecta un marco mas comercial y mas fuerte sin abandonar la discrecion ni el enfoque tecnico ni la prudencia sobre lo que el material todavia no sostiene."
            tags={["Contacto premium", "Despacho", "Orientacion inicial"]}
            priority
          />
        }
      />

      <Section tint="dark">
        <Container className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
          <div className="max-w-2xl">
            <SectionHeading
              title="Consultas donde una orientacion inicial suele aportar mas valor"
              description="La primera capa comercial de esta pagina consiste en ayudar a detectar encaje y a evitar decisiones tempranas que debiliten el caso antes de cualquier revision."
              tone="light"
            />
          </div>
          <SurfaceCard
              title="Encaja mejor cuando"
            description="Existe material digital ya disponible, necesidad de ordenar hechos, dudas sobre relaciones o necesidad de una salida documental clara antes de que se siga perdiendo valor."
            tone="light"
            compact
          >
            <BulletList items={fitCases} tone="light" className="space-y-2.5" />
          </SurfaceCard>
        </Container>
      </Section>

      <Section>
        <Container id="consulta" className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="premium-shell rounded-[2rem] p-6 md:p-10">
            <SectionHeading
              title="Correo directo para consultas con encaje tecnico o pericial"
              description="La pagina ordena que conviene explicar, que transformaciones ha sufrido ya el material y que puede esperarse de una primera respuesta prudente."
            />
            <div className="mt-9 grid gap-5">
              <div className="rounded-[1.7rem] border border-[var(--color-border)] bg-[rgba(255,255,255,0.8)] px-5 py-5 shadow-[var(--shadow-soft)] md:px-6 md:py-6">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-[var(--color-muted)]">
                  {contactChannelEyebrow}
                </p>
                <p className="mt-3 text-2xl leading-tight text-[var(--color-text)] md:text-[2.3rem]">
                  {contactChannelLabel}
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--color-muted)]">
                  {contactChannelDescription}
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="soft-panel rounded-[1.15rem] px-4 py-4">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-[var(--color-muted)]">
                      {hasPublicContactEmail ? "Asunto sugerido" : "Primer encuadre"}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[var(--color-text)]">
                      {hasPublicContactEmail
                        ? contactSubject
                        : "Breve descripcion, materiales disponibles y objetivo tecnico."}
                    </p>
                  </div>
                  <div className="soft-panel rounded-[1.15rem] px-4 py-4">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-[var(--color-muted)]">
                      Primer paso
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[var(--color-text)]">{contactResponseCopy}</p>
                  </div>
                </div>

                <div className="mt-6 border-t border-[var(--color-border)]/70 pt-5">
                  <div className="flex flex-wrap gap-3">
                    <ButtonLink
                      href={contactMailto}
                      label={contactDirectCtaLabel}
                      className="min-w-[15rem] px-6"
                    />
                    <ButtonLink
                      href="/recursos"
                      label={contactResourceCtaLabel}
                      variant="secondary"
                      className="min-w-[15rem]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
              <SurfaceCard
                  title="Que incluir en el primer mensaje"
                  description={contactFirstStepCopy}
                  compact
                >
                  <BulletList items={firstMessageItems} className="space-y-2.5" />
                </SurfaceCard>

                <SurfaceCard title="Que ocurre despues" description={contactResponseCopy} compact>
                  <TagList items={["Encaje", "Alcance", "Prioridad", "Siguiente paso"]} className="gap-2.5" />
                  <p className="text-sm leading-[1.65rem] text-[var(--color-muted)]">
                    Si la necesidad encaja, la conversacion posterior ya puede entrar en materiales,
                    metodologia y salida documental esperada.
                  </p>
                </SurfaceCard>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <DecisionGuard
              eyebrow="Antes de enviar material"
              title={beforeActionTitle}
              description="Una consulta mejor planteada no necesita un relato mas largo. Necesita que el material llegue con mas contexto, menos transformaciones y una secuencia minima que todavia pueda leerse."
              items={[
                "Lo que mas complica muchas consultas no es la falta de material, sino el material ya reenviado, recortado o sacado de su fuente original.",
                "PDFs impresos y escaneados, capturas renombradas o mensajes mezclados suelen llegar con menos valor del que parecia al enviarlos.",
                "Si existe wallet, PDF, correo, exportacion o movimiento relevante, indica si sigue disponible en su fuente original y si conserva alertas, versiones o contexto.",
                "Una consulta temprana suele ayudar mas cuando todavia puede saberse que pieza es indicio, cual solo aporta contexto y cual merece revision prioritaria.",
              ]}
              primaryAction={{ href: contactMailto, label: contactDirectCtaLabel }}
              secondaryAction={{ href: "/recursos", label: contactResourceCtaLabel }}
            />

            <ImagePanel
              src="/images/contact/contact-detail.svg"
              alt="Mesa de reunion con documentacion tecnica, pantalla y entorno premium de consulta"
              eyebrow="Contexto de trabajo"
              title="La primera conversacion debe sentirse precisa, discreta y profesional"
              description="La direccion visual del contacto acompana la idea de orden y potencia la percepcion de firma de alto nivel."
              tags={["Consulta", "Despacho", "Documentacion"]}
              aspect="wide"
            />

            {expectations.map((item) => (
              <SurfaceCard key={item.title} title={item.title} description={item.description} compact />
            ))}
          </div>
        </Container>
      </Section>

      <Section tint="soft">
        <Container className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
          <div className="max-w-2xl">
            <SectionHeading
              title="Lecturas e historias que mejoran la calidad del primer contacto"
              description="Antes de escribir, estas piezas ayudan a entender mejor valor documental, documentos electronicos, diferencia entre fijacion y analisis y errores que suelen repetirse."
            />
            <div className="mt-7">
              <Link className="inline-link" href="/recursos">
                {resourcesCtaLabel}
              </Link>
            </div>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {supportPieces.map((piece) => (
              <ContentLinkCard
                key={piece.title}
                type={piece.type}
                title={piece.title}
                description={piece.description}
                meta={piece.meta}
                href={piece.href}
                cta={piece.cta}
                tags={piece.tags}
                className="min-h-[unset]"
                compact
              />
            ))}
          </div>
        </Container>
      </Section>

      <ActionBanner
        eyebrow="Contacto directo"
        title="Si la necesidad es real y el marco ya esta mas claro, el siguiente paso es plantear la consulta antes de que el material pierda mas valor"
        description="La pagina de contacto no solo cierra el sitio. Funciona como filtro de calidad para que el primer intercambio se centre en encaje, alcance, preservacion y utilidad documental antes de que el caso llegue aun mas debilitado."
        primaryAction={{ href: contactMailto, label: contactDirectCtaLabel }}
        secondaryAction={{ href: "/recursos", label: resourcesCtaLabel }}
        note="Hay consultas que llegan cuando ya se ha perdido parte del valor documental. Cuanto antes se ordena el caso, mejor suele leerse y mas facil resulta distinguir material util de material solo aparente."
        highlights={[
          "Entrada comercial mas util para una consulta cualificada y mejor formulada.",
          "Recursos y servicios enlazados para evitar errores caros antes del primer intercambio.",
        ]}
      />
    </>
  );
}
