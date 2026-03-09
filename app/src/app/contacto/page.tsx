import type { Metadata } from "next";
import Link from "next/link";
import {
  ActionBanner,
  BulletList,
  ButtonLink,
  Container,
  ContentLinkCard,
  ImagePanel,
  PageHero,
  Section,
  SectionHeading,
  SurfaceCard,
  TagList,
} from "@/components/ui";
import {
  articleBaseCtaLabel,
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
    type: "Articulo",
    title: "Valor documental de la evidencia digital",
    description:
      "Lectura recomendada para entender que materiales suelen llegar mejor a una revision tecnica o documental.",
    meta: "Recurso base",
    href: "/recursos/articulos/valor-documental-evidencia-digital",
    cta: articleBaseCtaLabel,
    tags: ["Valor documental", "Contexto", "Integridad"],
  },
  {
    type: "Guia tecnica",
    title: "Revision tecnica de evidencia digital: alcance y limites",
    description:
      "Pieza orientada a alinear expectativas y aclarar que puede aportar realmente una revision antes del primer contacto.",
    meta: "Recurso de encaje",
    href: "/recursos/guias/revision-tecnica-evidencia-digital",
    cta: technicalGuideCtaLabel,
    tags: ["Alcance", "Limites", "Revision tecnica"],
  },
];

const fitCases = [
  "Despachos o profesionales juridicos que necesitan apoyo tecnico claro.",
  "Procedimientos de familia o divorcios con material digital relevante.",
  "Casos con moviles, mensajeria, exportaciones o dispositivos como pieza central.",
  "Encargos de trazabilidad, fraude tecnologico, huella digital o correlacion de indicios.",
];

const firstMessageItems = [
  "Breve descripcion del problema o de los hechos relevantes.",
  "Tipo de fuentes, materiales o dispositivos disponibles.",
  "Estado actual del caso, procedimiento o revision previa.",
  "Objetivo tecnico, documental o pericial que se pretende aclarar.",
];

const expectations = [
  {
    title: "Que ocurre en el primer intercambio",
    description:
      "Se valora encaje, materiales, prioridad y siguiente paso razonable. No se sustituye una revision tecnica en ese primer momento.",
  },
  {
    title: "Que suele mejorar una consulta bien planteada",
    description:
      "Reduce ambiguedad, permite encuadrar mejor el trabajo y facilita decidir si conviene pasar a una fase de analisis o documentacion.",
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
        subtitle="La pagina de contacto pasa a funcionar como una entrada comercial mas fuerte: explica mejor que tipo de encargos encajan, como conviene plantear la consulta y que puede esperarse del primer intercambio."
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
          "El objetivo no es recoger mensajes largos sino convertir el primer contacto en una conversacion mas util.",
          "Los recursos publicados y la pagina de servicios ya preparan mejor a quien llega hasta aqui.",
        ]}
        visual={
          <ImagePanel
            src={visualAssets.contactHero.src}
            alt={visualAssets.contactHero.alt}
            eyebrow="Canal de consulta"
            title="Despacho, criterio y documentacion al servicio de una toma de contacto mas precisa"
            description="La pagina proyecta un marco mas comercial y mas fuerte sin abandonar la discrecion ni el enfoque tecnico."
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
              description="La primera capa comercial de esta pagina consiste en ayudar a detectar encaje y a preparar mejor el caso antes de cualquier revision."
              tone="light"
            />
          </div>
          <SurfaceCard
            title="Encaja mejor cuando"
            description="Existe material digital ya disponible, necesidad de ordenar hechos, dudas sobre relaciones o necesidad de una salida documental clara."
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
              description="La pagina ordena que conviene explicar y que puede esperarse de la primera respuesta, con un primer intercambio mas claro y mejor filtrado."
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
                  <p className="text-sm leading-6.5 text-[var(--color-muted)]">
                    Si la necesidad encaja, la conversacion posterior ya puede entrar en materiales,
                    metodologia y salida documental esperada.
                  </p>
                </SurfaceCard>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
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
              title="Lecturas que mejoran la calidad del primer contacto"
              description="Antes de escribir, estas piezas ayudan a entender mejor valor documental, preservacion inicial y alcance real de una revision."
            />
            <div className="mt-7">
              <Link className="inline-link" href="/recursos">
                {resourcesCtaLabel}
              </Link>
            </div>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
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
        title="Si la necesidad es real y el marco ya esta mas claro, el siguiente paso es plantear la consulta con materiales identificados y objetivo definido"
        description="La pagina de contacto no solo cierra el sitio. Funciona como filtro de calidad para que el primer intercambio se centre en encaje, alcance y utilidad documental."
        primaryAction={{ href: contactMailto, label: contactDirectCtaLabel }}
        secondaryAction={{ href: "/recursos", label: resourcesCtaLabel }}
        note="Mejor encaje, menos ruido y una expectativa mas razonable desde el principio."
        highlights={[
          "Entrada comercial mas potente y mas propia de una firma especializada.",
          "Recursos y servicios enlazados para mejorar la calidad del primer mensaje.",
        ]}
      />
    </>
  );
}
