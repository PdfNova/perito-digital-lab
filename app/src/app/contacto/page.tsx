import type { Metadata } from "next";
import Link from "next/link";
import {
  ActionBanner,
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
  contactDirectCtaLabel,
  contactEmail,
  contactFirstStepCopy,
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

export const metadata: Metadata = buildPageMetadata({
  title: "Contacto para investigacion digital y documentacion tecnica",
  description:
    "Pagina de contacto orientada a consultas cualificadas sobre investigacion digital, analisis forense, trazabilidad, revision tecnica y documentacion tecnica.",
  path: "/contacto",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Contacto para consultas tecnicas donde el componente digital exige contexto, metodo y claridad"
        subtitle="El objetivo no es solo recoger una consulta. Es ayudar a que llegue mejor planteada, con materiales identificados, alcance mas realista y un primer intercambio mas util."
        primaryAction={{ href: "#consulta", label: contactAnchorCtaLabel }}
        secondaryAction={{ href: "/recursos", label: resourcesCtaLabel }}
        stats={[
          { value: "Claro", label: "Primer paso mejor encuadrado" },
          { value: "Filtro", label: "Mas calidad en la consulta inicial" },
          { value: "Serio", label: "Entrada propia de una firma tecnica" },
        ]}
        notes={[
          "La pagina ordena la consulta desde el primer momento y transmite un marco profesional claro.",
          "Los recursos publicados ya ayudan a llegar con mejor criterio antes del primer intercambio.",
        ]}
        visual={
          <ImagePanel
            src={visualAssets.contactHero.src}
            alt={visualAssets.contactHero.alt}
            eyebrow="Canal de consulta"
            title="Despacho, contexto y documentacion al servicio de una primera toma de contacto mas precisa"
            description="La pagina de contacto se apoya en un lenguaje visual sobrio y en una estructura que mejora el encaje antes de cualquier revision."
            tags={["Contacto", "Despacho", "Orientacion inicial"]}
            priority
          />
        }
      />

      <Section>
        <Container className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-start">
          <div>
            <SectionHeading
              title="Consultas donde una orientacion inicial suele aportar mas valor"
              description="La primera capa comercial de esta pagina consiste en ayudar al visitante a identificar si su necesidad encaja y a llegar con un punto de partida mas util."
            />
          </div>
          <SurfaceCard
            title="Encaja mejor cuando"
            description="Existe material digital ya disponible, necesidad de ordenar hechos, dudas sobre relaciones o necesidad de una salida documental clara."
          >
            <TagList
              items={[
                "Evidencia dispersa",
                "Necesidad de cronologia",
                "Revision tecnica",
                "Informe claro",
              ]}
            />
          </SurfaceCard>
        </Container>
      </Section>

      <Section tint="soft">
        <Container className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <SurfaceCard
            title="Informacion util para una primera consulta"
            description={contactFirstStepCopy}
          >
            <ul className="space-y-2 text-sm leading-7 text-[var(--color-muted)]">
              {[
                "Breve descripcion del problema",
                "Tipo de fuentes o materiales disponibles",
                "Estado actual del caso o del expediente",
                "Necesidad principal: analisis, correlacion, trazabilidad o documentacion",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-accent-strong)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm font-medium text-[var(--color-accent-strong)]">
              Cuanto mas claro el contexto, mejor la orientacion inicial.
            </p>
          </SurfaceCard>

          <SurfaceCard
            title="Lo que esta propuesta no ofrece"
            description="No se atienden solicitudes orientadas a accesos a cuentas, recuperaciones invasivas sobre terceros, identificaciones garantizadas ni peticiones formuladas desde logicas opacas o impropias."
          >
            <div className="grid gap-3 text-sm leading-7 text-[var(--color-muted)]">
              <p>Los limites claros mejoran la credibilidad del sitio y ayudan a que la consulta se formule mejor desde el inicio.</p>
              <p>El marco de trabajo sigue siendo tecnico, documental y prudente aunque la presentacion visual sea mas fuerte.</p>
            </div>
            <p className="text-sm font-medium text-[var(--color-accent-strong)]">
              Alcance tecnico y documental.
            </p>
          </SurfaceCard>
        </Container>
      </Section>

      <Section>
        <Container id="consulta" className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="premium-shell rounded-[2rem] p-6 md:p-8">
            <SectionHeading
              title="Correo directo para consultas con encaje tecnico"
              description="El primer paso ya puede resolverse con un correo claro, breve y bien orientado. La pagina ordena que conviene explicar, como formular la consulta y que esperar del intercambio inicial."
            />
            <div className="mt-8 grid gap-4">
              <div className="rounded-[1.6rem] border border-[var(--color-border)] bg-[rgba(255,255,255,0.7)] px-5 py-5 shadow-[var(--shadow-soft)]">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-[var(--color-muted)]">
                  Correo de marca
                </p>
                <p className="mt-3 text-2xl leading-tight text-[var(--color-text)] md:text-[2.2rem]">
                  {contactEmail}
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--color-muted)]">
                  Canal recomendado para una primera toma de contacto: breve, clara y centrada en el
                  problema, los materiales disponibles y el objetivo tecnico o documental.
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[1.15rem] border border-[var(--color-border)] bg-white/70 px-4 py-4">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-[var(--color-muted)]">
                      Asunto sugerido
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[var(--color-text)]">{contactSubject}</p>
                  </div>
                  <div className="rounded-[1.15rem] border border-[var(--color-border)] bg-white/70 px-4 py-4">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-[var(--color-muted)]">
                      Primer paso
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[var(--color-text)]">{contactResponseCopy}</p>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  <ButtonLink href={contactMailto} label={contactDirectCtaLabel} />
                  <ButtonLink href="/recursos" label={contactResourceCtaLabel} variant="secondary" />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <SurfaceCard
                  title="Que incluir en el primer mensaje"
                  description="Cuatro datos suelen bastar para encuadrar bien la consulta y mejorar la orientacion inicial."
                >
                  <ul className="space-y-2 text-sm leading-7 text-[var(--color-muted)]">
                    {[
                      "Descripcion breve del problema",
                      "Materiales o fuentes disponibles",
                      "Estado actual del caso",
                      "Objetivo tecnico o documental",
                    ].map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-accent-strong)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </SurfaceCard>

                <SurfaceCard
                  title="Que ocurre despues"
                  description={contactResponseCopy}
                >
                  <TagList items={["Encaje", "Alcance", "Prioridad", "Siguiente paso"]} />
                  <p className="text-sm leading-7 text-[var(--color-muted)]">
                    Si la necesidad encaja, la conversacion posterior ya puede entrar en materiales,
                    metodologia y salida documental esperada.
                  </p>
                </SurfaceCard>
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            <ImagePanel
              src="/images/contact/contact-detail.svg"
              alt="Mesa de reunion con documentacion tecnica, monitor y entorno de una primera conversacion profesional"
              eyebrow="Contexto de trabajo"
              title="Una primera conversacion debe sentirse clara, discreta y bien encuadrada"
              description="La dimension visual del contacto acompana la idea de orden profesional y ayuda a que la consulta se perciba como parte de un marco tecnico serio."
              tags={["Despacho", "Consulta", "Documentacion"]}
              aspect="wide"
            />

            <SurfaceCard
              title="Tiempo y expectativas del primer paso"
              description="La orientacion inicial no sustituye una revision tecnica. Sirve para entender el punto de partida y decidir con criterio si conviene avanzar."
            >
              <TagList items={["Primer encaje", "Lectura inicial", "Alcance razonable"]} />
            </SurfaceCard>

            <SurfaceCard
              title="Conviene no enviar"
              description="Datos personales innecesarios, relatos excesivamente largos o materiales sin un minimo de orden previo suelen empeorar el punto de partida."
            >
              <TagList items={["Menos exposicion", "Mas contexto util", "Mejor lectura inicial"]} />
            </SurfaceCard>
          </div>
        </Container>
      </Section>

      <Section tint="soft">
        <Container className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
          <div>
            <SectionHeading
              title="Lecturas que mejoran la calidad del primer contacto"
              description="Antes de escribir, estas piezas ayudan a entender mejor valor documental, preservacion inicial y alcance real de una revision."
            />
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
              />
            ))}
          </div>
        </Container>
      </Section>

      <ActionBanner
        eyebrow="Contacto directo"
        title="Si la necesidad es real y el marco ya esta mas claro, el siguiente paso es plantear la consulta con materiales identificados y objetivo definido"
        description="La pagina de contacto no solo cierra el sitio. Tambien actua como filtro de calidad para que el primer intercambio se centre en contexto, alcance y utilidad documental."
        primaryAction={{ href: contactMailto, label: contactDirectCtaLabel }}
        secondaryAction={{ href: "/recursos", label: resourcesCtaLabel }}
        note="Mejor encaje, menos ruido y una expectativa mas razonable desde el principio."
        highlights={[
          "Entrada comercial mas propia de una firma tecnica de alto nivel.",
          "Recursos enlazados para mejorar la calidad del primer mensaje.",
        ]}
      />
    </>
  );
}
