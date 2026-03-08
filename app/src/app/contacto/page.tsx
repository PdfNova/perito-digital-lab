import type { Metadata } from "next";
import {
  Container,
  ImagePanel,
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
        title="Una pagina de contacto que ya transmite confianza, nivel y orden profesional"
        subtitle="El objetivo no es solo recoger una consulta: es proyectar una imagen clara, rigurosa y adecuada para trabajos tecnicos de mayor valor."
        primaryAction={{ href: "#consulta", label: "Enviar consulta" }}
        secondaryAction={{ href: "/servicios", label: "Ver servicios" }}
        stats={[
          { value: "Claro", label: "Formulario visual sin ruido" },
          { value: "Filtro", label: "Mejor orientacion desde el inicio" },
          { value: "Serio", label: "Canal claro para consultas cualificadas" },
        ]}
        notes={[
          "La presencia visual debe hacer que el contacto se sienta mas serio y mas cuidado.",
          "La pagina ordena la consulta desde el primer momento y transmite un marco profesional claro.",
        ]}
        visual={
          <ImagePanel
            src="/images/contact/contact-hero.svg"
            alt="Entorno de despacho con zona de contacto y documentacion profesional"
            eyebrow="Canal de consulta"
            title="Despacho, escritorio y entorno profesional al servicio de una primera toma de contacto"
            description="Una composicion pensada para reforzar seriedad, orden y confianza antes del primer intercambio."
            tags={["Contacto", "Despacho", "Confianza"]}
            priority
          />
        }
      />

      <Section>
        <Container className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-start">
          <div>
            <SectionHeading
              title="Casos donde una consulta inicial puede aportar valor"
              description="La primera capa comercial de esta pagina consiste en ayudar al visitante a identificar si su necesidad encaja y a llegar con mejor contexto."
            />
          </div>
          <SurfaceCard
            title="Antes del primer mensaje"
            description="Cuanto mas claro el marco inicial, mas util resultara la orientacion posterior y mas profesional se percibira la conversacion."
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
        <Container className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <SurfaceCard
            title="Informacion util para una primera consulta"
            description="No hace falta enviar un relato extenso. Resulta mas util resumir el problema, indicar que materiales existen, describir el momento del caso y explicar que se espera aclarar."
          >
            <ul className="space-y-2 text-sm leading-7 text-[var(--color-muted)]">
              {[
                "Breve descripcion del problema",
                "Tipo de fuentes o materiales disponibles",
                "Estado actual del caso",
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
            title="Lo que esta web no ofrece"
            description="No se atienden solicitudes orientadas a accesos a cuentas, recuperaciones invasivas sobre terceros, identificaciones garantizadas ni peticiones formuladas desde logicas opacas o impropias."
          >
            <div className="grid gap-3 text-sm leading-7 text-[var(--color-muted)]">
              <p>La utilidad de esta pagina aumenta cuando el visitante percibe limites claros y una posicion profesional coherente.</p>
              <p>La mejora visual no cambia esa base: la refuerza y la vuelve mas convincente.</p>
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
              title="Plantear la consulta"
              description="El canal de contacto debe verse serio, limpio y alineado con una relacion profesional de mayor nivel."
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
                  Canal inicial orientado a consultas tecnicas bien formuladas y con contexto suficiente.
                </p>
                <button type="button" className="button-primary">
                  Enviar consulta
                </button>
              </div>
            </form>
          </div>

          <div className="grid gap-5">
            <ImagePanel
              src="/images/contact/contact-detail.svg"
              alt="Mesa de reunion con documentacion tecnica y canal de consulta"
              eyebrow="Contexto de trabajo"
              title="Una primera conversacion debe sentirse clara, discreta y bien encuadrada"
              description="La dimension visual del contacto acompana la idea de orden profesional y ayuda a que la consulta se perciba como parte de un marco tecnico serio."
              tags={["Despacho", "Consulta", "Documentacion"]}
              aspect="wide"
            />
            <SurfaceCard
              title="Una consulta bien planteada mejora la respuesta inicial"
              description="Cuando el problema llega resumido con claridad, con las fuentes identificadas y con una expectativa concreta, la conversacion avanza con mas precision desde el principio."
            >
              <TagList items={["Contexto util", "Mejor encaje", "Respuesta mas precisa"]} />
            </SurfaceCard>

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
            </SurfaceCard>
          </div>
        </Container>
      </Section>
    </>
  );
}
