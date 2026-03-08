import type { Metadata } from "next";
import {
  Container,
  PageHero,
  Section,
  SectionHeading,
  SurfaceCard,
  TagList,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Contacto para investigacion digital y documentacion tecnica",
  description:
    "Pagina de contacto orientada a consultas cualificadas sobre investigacion digital, analisis forense, trazabilidad y documentacion tecnica.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Una primera conversacion util empieza con contexto claro"
        subtitle="Si el caso requiere orden tecnico, correlacion de indicios o una salida documental mas clara, este espacio sirve para plantear la necesidad de forma estructurada."
        primaryAction={{ href: "#consulta", label: "Enviar consulta" }}
        secondaryAction={{ href: "/servicios", label: "Ver servicios" }}
        notes={["Consultas mejor orientadas.", "Expectativas claras desde el inicio."]}
      />

      <Section>
        <Container className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div>
            <SectionHeading
              title="Casos donde una consulta inicial puede aportar valor"
              description="Tiene sentido contactar cuando existe evidencia digital que necesita contexto, una secuencia de hechos que requiere orden o una necesidad de documentacion tecnica mas clara para terceros."
            />
          </div>
          <SurfaceCard
            title="Antes del primer mensaje"
            description="Cuanto mas claro el marco inicial, mas util resultara la orientacion posterior."
          >
            <TagList
              items={[
                "Evidencia dispersa",
                "Necesidad de cronologia",
                "Necesidad de informe claro",
              ]}
            />
          </SurfaceCard>
        </Container>
      </Section>

      <Section tint="soft">
        <Container className="grid gap-6 lg:grid-cols-2">
          <SurfaceCard
            title="Informacion util para una primera consulta"
            description="No hace falta enviar un relato extenso. Resulta mas util resumir el problema, indicar que materiales existen, describir el momento del caso y explicar que se espera aclarar."
          >
            <ul className="space-y-2 text-sm text-[var(--color-muted)]">
              {[
                "Breve descripcion del problema",
                "Tipo de fuentes o materiales disponibles",
                "Estado actual del caso",
                "Necesidad principal: analisis, correlacion, trazabilidad o documentacion",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm font-medium text-[var(--color-accent)]">
              Cuanto mas claro el contexto, mejor la orientacion inicial.
            </p>
          </SurfaceCard>

          <SurfaceCard
            title="Lo que esta web no ofrece"
            description="No se atienden solicitudes orientadas a accesos a cuentas, recuperaciones invasivas sobre terceros, identificaciones garantizadas ni peticiones formuladas desde logicas opacas o impropias."
          >
            <div className="grid gap-3 text-sm leading-7 text-[var(--color-muted)]">
              <p>La utilidad de este sitio depende de mantener un alcance tecnico y documental claro.</p>
              <p>No se plantea como canal para encargos invasivos ni para promesas impropias.</p>
            </div>
            <p className="text-sm font-medium text-[var(--color-accent)]">
              Alcance tecnico y documental.
            </p>
          </SurfaceCard>
        </Container>
      </Section>

      <Section>
        <Container id="consulta" className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <div className="panel-surface rounded-[2rem] p-6 md:p-8">
            <SectionHeading
              title="Plantear la consulta"
              description="El canal de contacto debe invitar a explicar la necesidad con brevedad, claridad y enfoque practico."
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
                  placeholder="Se utilizara unicamente para dar continuidad a la consulta"
                  readOnly
                />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-medium text-[var(--color-text)]">Tipo de necesidad</span>
                <select className="input-shell rounded-2xl px-4 py-3 text-sm" defaultValue="" disabled>
                  <option value="" disabled>
                    Seleccionar entre investigacion digital, forense, OSINT, trazabilidad o documentacion
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
                  placeholder="Indicar si existen correos, capturas, cronologias, dispositivos, metadatos u otros soportes"
                  readOnly
                />
              </label>
              <div className="mt-2 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--color-border)] pt-5">
                <p className="max-w-md text-sm leading-7 text-[var(--color-muted)]">
                  Estructura visual del formulario. La logica de envio no se implementa en esta fase.
                </p>
                <button type="button" className="button-primary">
                  Enviar consulta
                </button>
              </div>
            </form>
          </div>

          <div className="grid gap-5">
            <SurfaceCard
              title="Discrecion y claridad desde el primer contacto"
              description="La comunicacion inicial debe evitar datos personales innecesarios y centrarse en los elementos tecnicos y documentales relevantes para valorar el encaje de la consulta."
            >
              <TagList items={["Menos exposicion", "Mas contexto util", "Mejor orientacion"]} />
            </SurfaceCard>

            <SurfaceCard
              title="El objetivo del primer contacto no es resolver todo"
              description="Una buena consulta inicial permite valorar alcance, limites y posibles siguientes pasos con mayor precision y menos ruido."
            >
              <div className="grid gap-3 text-sm leading-7 text-[var(--color-muted)]">
                <p>Primero se acota el punto de partida.</p>
                <p>Despues se decide si la necesidad encaja y que forma de trabajo tiene sentido.</p>
              </div>
              <p className="text-sm font-medium text-[var(--color-accent)]">
                Primer paso: explicar bien el contexto.
              </p>
            </SurfaceCard>
          </div>
        </Container>
      </Section>
    </>
  );
}
