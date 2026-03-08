import type { Metadata } from "next";
import Link from "next/link";
import {
  ActionBanner,
  Container,
  ContentLinkCard,
  ImagePanel,
  PageHero,
  Section,
  SectionHeading,
  SurfaceCard,
  TagList,
} from "@/components/ui";

const supportPieces = [
  {
    type: "Articulo",
    title: "Valor documental de la evidencia digital",
    description:
      "Lectura recomendada para entender que materiales suelen llegar mejor a una revision tecnica o documental.",
    meta: "Recurso base",
    href: "/recursos/articulos/valor-documental-evidencia-digital",
    cta: "Leer articulo",
    tags: ["Valor documental", "Contexto", "Integridad"],
  },
  {
    type: "Guia tecnica",
    title: "Revision tecnica de evidencia digital: alcance y limites",
    description:
      "Pieza orientada a alinear expectativas y aclarar que puede aportar realmente una revision antes del primer contacto.",
    meta: "Recurso de encaje",
    href: "/recursos/guias/revision-tecnica-evidencia-digital",
    cta: "Leer guia",
    tags: ["Alcance", "Limites", "Revision tecnica"],
  },
];

export const metadata: Metadata = {
  title: "Contacto para investigacion digital y documentacion tecnica",
  description:
    "Pagina de contacto orientada a consultas cualificadas sobre investigacion digital, analisis forense, trazabilidad, revision tecnica y documentacion tecnica.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Contacto para consultas tecnicas donde el componente digital exige contexto, metodo y claridad"
        subtitle="El objetivo no es solo recoger una consulta. Es ayudar a que llegue mejor planteada, con materiales identificados, alcance mas realista y un primer intercambio mas util."
        primaryAction={{ href: "#consulta", label: "Preparar consulta" }}
        secondaryAction={{ href: "/recursos", label: "Ver recursos" }}
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
            src="/images/lot-01/contact-hero.svg"
            alt="Entorno de despacho con mesa de trabajo, documentacion y zona preparada para una primera consulta"
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
            description="No hace falta enviar un relato extenso. Resulta mas util resumir el problema, indicar materiales disponibles, describir el momento del caso y explicar que se necesita aclarar."
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
              title="Estructura recomendada para plantear la consulta"
              description="La estructura siguiente deja claro que informacion conviene reunir para un primer intercambio util y mejor encuadrado."
            />
            <form className="mt-8 grid gap-4">
              <label className="grid gap-2">
                <span className="text-sm font-medium text-[var(--color-text)]">
                  Nombre o referencia de contacto
                </span>
                <input
                  className="input-shell rounded-2xl px-4 py-3 text-sm"
                  placeholder="Puede usarse una referencia profesional o identificador funcional"
                  readOnly
                />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-medium text-[var(--color-text)]">Correo de respuesta</span>
                <input
                  className="input-shell rounded-2xl px-4 py-3 text-sm"
                  placeholder="Canal de continuidad para la consulta"
                  readOnly
                />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-medium text-[var(--color-text)]">Tipo de necesidad</span>
                <select className="input-shell rounded-2xl px-4 py-3 text-sm" defaultValue="" disabled>
                  <option value="" disabled>
                    Investigacion digital, forense, OSINT, trazabilidad o documentacion
                  </option>
                </select>
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-medium text-[var(--color-text)]">Resumen del caso</span>
                <textarea
                  className="input-shell min-h-32 rounded-[1.4rem] px-4 py-3 text-sm"
                  placeholder="Describir el problema en pocas lineas, sin incluir datos innecesarios"
                  readOnly
                />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-medium text-[var(--color-text)]">Materiales disponibles</span>
                <textarea
                  className="input-shell min-h-28 rounded-[1.4rem] px-4 py-3 text-sm"
                  placeholder="Indicar si existen correos, capturas, cronologias, registros, dispositivos u otros soportes"
                  readOnly
                />
              </label>
              <div className="mt-2 grid gap-4 border-t border-[var(--color-border)] pt-5 lg:grid-cols-[1fr_auto] lg:items-center">
                <p className="max-w-xl text-sm leading-7 text-[var(--color-muted)]">
                  Esta estructura sirve para ordenar una consulta cualificada: problema, materiales,
                  objetivo y nivel de urgencia documental. Cuanto mejor llegue esa base, mejor encaja
                  la orientacion inicial.
                </p>
                <button type="button" className="button-primary">
                  Solicitar orientacion inicial
                </button>
              </div>
            </form>
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
              title="Que se revisa en la orientacion inicial"
              description="La primera conversacion no intenta resolver todo. Sirve para valorar encaje, ordenar el punto de partida y delimitar el siguiente paso razonable."
            >
              <TagList items={["Encaje", "Materiales", "Objetivo", "Siguiente paso"]} />
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
        title="Si la necesidad es real y el marco ya esta mas claro, el siguiente paso es plantear la consulta con materiales identificados y objetivo definido"
        description="La pagina de contacto no solo cierra el sitio. Tambien actua como filtro de calidad para que el primer intercambio se centre en contexto, alcance y utilidad documental."
        primaryAction={{ href: "#consulta", label: "Preparar consulta" }}
        secondaryAction={{ href: "/recursos", label: "Ver recursos" }}
        note="Mejor encaje, menos ruido y una expectativa mas razonable desde el principio."
        highlights={[
          "Entrada comercial mas propia de una firma tecnica de alto nivel.",
          "Recursos enlazados para mejorar la calidad del primer mensaje.",
        ]}
      />
    </>
  );
}
