import type { Metadata } from "next";
import Link from "next/link";
import {
  ActionBanner,
  Container,
  Eyebrow,
  ImagePanel,
  PageHero,
  Section,
  SectionHeading,
  StatCard,
  SurfaceCard,
  TagList,
} from "@/components/ui";

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
    title: "OSINT y correlacion",
    description:
      "Uso de fuentes abiertas para aportar contexto, relacionar activos y reforzar hipotesis con cautela metodologica.",
  },
  {
    title: "Trazabilidad tecnologica",
    description:
      "Reconstruccion de secuencias, conexiones y movimientos entre cuentas, dispositivos, comunicaciones y eventos.",
  },
  {
    title: "Documentacion tecnica/pericial",
    description:
      "Transformacion del analisis en informes, anexos y piezas documentales claras para terceros no tecnicos.",
  },
];

const methodology = [
  "Delimitar el caso y su contexto.",
  "Preservar y organizar la informacion disponible.",
  "Analizar y relacionar indicios con criterio.",
  "Documentar hallazgos, limites y conclusiones.",
];

export const metadata: Metadata = {
  title: "Investigacion digital, analisis forense y trazabilidad tecnologica",
  description:
    "Analisis, correlacion e informe claro para casos donde la evidencia digital necesita orden, contexto y criterio.",
};

export default function HomePage() {
  return (
    <>
      <PageHero
        eyebrow="Investigacion digital / analisis forense / trazabilidad"
        title="Presencia digital sobria para analisis tecnico, evidencia y documentacion de alto nivel"
        subtitle="Una web pensada para transmitir criterio, metodo y capacidad de lectura en casos donde la informacion digital necesita orden, contexto y explicacion clara."
        primaryAction={{ href: "/contacto", label: "Solicitar orientacion inicial" }}
        secondaryAction={{ href: "/servicios", label: "Explorar servicios" }}
        stats={[
          { value: "5", label: "Lineas principales de trabajo" },
          { value: "01", label: "Marco metodologico claro y reusable" },
          { value: "Web", label: "Base para blog, video y recursos" },
        ]}
        notes={[
          "Enfoque tecnico, discreto y orientado a documentacion.",
          "Lenguaje visual alineado con despacho tecnico, analisis y documentacion.",
        ]}
        visual={
          <ImagePanel
            src="/images/lot-01/hero-main.svg"
            alt="Despacho tecnico con pantallas de analisis y documentacion de trabajo"
            eyebrow="Entorno de analisis"
            title="Despacho, analisis digital y tecnologia en una misma presencia"
            description="Una presencia pensada para unir mesa de trabajo, pantallas de revision y materiales de documentacion en una sola escena."
            tags={["Despacho profesional", "Analisis digital", "Documentacion"]}
            priority
          />
        }
      />

      <Section>
        <Container className="grid gap-8 lg:grid-cols-[1fr_0.98fr] lg:items-start">
          <div>
            <Eyebrow>Posicionamiento</Eyebrow>
            <SectionHeading
              title="Una marca pensada para casos donde el ruido tecnico exige criterio"
              description="El proyecto combina investigacion digital, analisis forense, OSINT, trazabilidad y documentacion pericial con una presencia mas cercana a un despacho tecnico de confianza que a una web generica de servicios."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <SurfaceCard
                title="Autoridad sin exhibicion"
                description="La credibilidad se apoya en estructura, metodo y claridad expositiva, no en reclamos agresivos ni en esteticas de confrontacion."
              />
              <SurfaceCard
                title="Tecnologia con contexto"
                description="El lenguaje visual y verbal se orienta a despacho, analisis y documentacion, no a simbolos oscuros o imagineria de hacking."
              />
            </div>
          </div>

          <ImagePanel
            src="/images/hero/hero-signature.svg"
            alt="Mesa de trabajo con documentacion tecnica y monitor de revision"
            eyebrow="Presencia de firma"
            title="Despacho tecnico y entorno de analisis"
            description="Una composicion sobria que combina superficie de trabajo, pantalla principal y piezas documentales con criterio editorial."
            tags={["Mesa de trabajo", "Pantallas", "Documentacion"]}
            aspect="landscape"
          />
        </Container>
      </Section>

      <Section tint="soft">
        <Container>
          <SectionHeading
            title="Cuando el componente digital complica la lectura del caso"
            description="La web se orienta a situaciones donde el problema no es solo encontrar informacion, sino darle forma, secuencia y utilidad documental."
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
              description="Secuencias que requieren contexto tecnico para entender relaciones, tiempos y valor probatorio."
            />
            <StatCard
              value="03"
              label="Hallazgos que deben explicarse"
              description="Resultados tecnicos que necesitan traducirse a una pieza clara para decisores y terceros no tecnicos."
            />
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <Eyebrow>Capacidades</Eyebrow>
            <SectionHeading
              title="Servicios pensados para aportar orden, trazabilidad y salida documental"
              description="La propuesta une analisis tecnico y estructura expositiva para que los hallazgos no solo existan, sino que puedan leerse con claridad."
            />
            <div className="mt-8">
              <Link className="inline-link" href="/servicios">
                Explorar servicios
              </Link>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {capabilities.map((item) => (
              <SurfaceCard key={item.title} title={item.title} description={item.description} />
            ))}
            <SurfaceCard
              title="Entorno de trabajo visible"
              description="La propuesta comercial gana fuerza cuando el sitio muestra un entorno serio de revision, lectura y documentacion sin apoyarse en reclamos grandilocuentes."
              className="md:col-span-2"
            >
              <TagList items={["Despacho tecnico", "Revision estructurada", "Criterio documental"]} />
            </SurfaceCard>
          </div>
        </Container>
      </Section>

      <Section tint="soft">
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
              alt="Cronologia tecnica y estructura metodologica en pantalla"
              eyebrow="Secuencia de trabajo"
              title="Cronologias, diagramas y flujo de trabajo en una misma lectura"
              description="Una manera de mostrar orden, lectura de tiempos y estructura de trabajo sin recurrir a artificios."
              tags={["Cronologia", "Proceso", "Analisis"]}
              aspect="landscape"
            />
            <SurfaceCard
              title="Metodo como elemento comercial"
              description="Mostrar bien el proceso aumenta confianza, filtra mejor las consultas y posiciona la marca como una propuesta tecnica de mayor nivel."
            >
              <Link className="inline-link" href="/metodologia">
                Ver metodologia completa
              </Link>
            </SurfaceCard>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div className="grid gap-4">
            <SurfaceCard
              title="Recursos orientados a reforzar autoridad"
              description="La capa editorial de la web se apoya en articulos, guias y videos que pueden convivir con una identidad visual mas fuerte y mas convincente."
            >
              <TagList items={["Articulos", "Guias", "Videos", "Recursos"]} />
              <Link className="inline-link" href="/recursos">
                Ver biblioteca editorial
              </Link>
            </SurfaceCard>
            <SurfaceCard
              title="Presencia editorial coherente"
              description="La capa de contenidos puede crecer con articulos, piezas audiovisuales y materiales de consulta sin romper el tono de firma tecnica."
            >
              <TagList items={["Blog", "Video faceless", "Guias utiles"]} />
            </SurfaceCard>
          </div>

          <div className="grid gap-4">
            <SurfaceCard
              title="Limites claros, presencia mas fuerte"
              description="Una estetica mas premium no cambia el posicionamiento: el proyecto sigue evitando tono invasivo, promesas impropias y lenguaje agresivo."
            >
              <TagList
                items={[
                  "Sin reclamos exagerados",
                  "Sin imagineria hacker",
                  "Con criterio tecnico visible",
                ]}
              />
            </SurfaceCard>
            <SurfaceCard
              title="Imagen con criterio editorial"
              description="El sistema visual ya admite escenas de despacho, pantallas, herramientas y materiales de trabajo sin perder sobriedad ni coherencia."
            >
              <div className="grid gap-3 text-sm leading-7 text-[var(--color-muted)]">
                <p>
                  La arquitectura visual ya contempla hero photography, stills de escritorio y
                  composiciones editoriales.
                </p>
                <p>La imagen acompana el posicionamiento del sitio y refuerza una presencia de firma mas consistente.</p>
              </div>
            </SurfaceCard>
            <SurfaceCard
              title="Una consulta bien filtrada ahorra tiempo desde el inicio"
              description="La home debe ayudar a que llegue mejor contexto, menos ruido y una expectativa mas razonable sobre el alcance del trabajo."
            >
              <TagList items={["Mejor encaje", "Mas claridad inicial", "Menos friccion comercial"]} />
            </SurfaceCard>
          </div>
        </Container>
      </Section>

      <ActionBanner
        title="Si el caso requiere claridad tecnica, el siguiente paso es acotar el contexto con una consulta bien planteada"
        description="Una primera toma de contacto util debe indicar que problema existe, que materiales hay disponibles y que salida tecnica o documental se espera obtener."
        primaryAction={{ href: "/contacto", label: "Solicitar orientacion inicial" }}
        secondaryAction={{ href: "/metodologia", label: "Ver metodologia" }}
        note="La conversion mejora cuando la web filtra mejor y transmite nivel sin exageracion."
        highlights={[
          "Consultas mejor formuladas desde el primer mensaje.",
          "Mas claridad sobre alcance, limites y siguiente paso razonable.",
        ]}
      />
    </>
  );
}
