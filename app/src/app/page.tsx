import type { Metadata } from "next";
import Link from "next/link";
import {
  ActionBanner,
  Container,
  Eyebrow,
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
        eyebrow="Investigacion digital · analisis forense · trazabilidad"
        title="Investigacion digital y trazabilidad tecnologica con enfoque tecnico y documental"
        subtitle="Analisis, correlacion e informe claro para casos donde la evidencia digital necesita orden, contexto y criterio."
        primaryAction={{ href: "/contacto", label: "Contactar" }}
        secondaryAction={{ href: "/metodologia", label: "Ver metodologia" }}
        notes={[
          "Enfoque sobrio, tecnico y orientado a documentacion.",
          "Pensado para casos que requieren claridad antes que ruido.",
        ]}
      />

      <Section>
        <Container className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Eyebrow>De la evidencia al informe</Eyebrow>
            <SectionHeading
              title="Una presencia digital pensada para casos que requieren criterio"
              description="El proyecto aborda investigacion digital, analisis forense, OSINT y trazabilidad desde una logica de metodo, prudencia y utilidad documental."
            />
          </div>
          <TagList
            items={[
              "Metodo antes que exhibicion",
              "Claridad antes que complejidad innecesaria",
              "Enfoque profesional, no invasivo",
            ]}
          />
        </Container>
      </Section>

      <Section tint="soft">
        <Container>
          <SectionHeading
            title="Cuando el componente digital complica la lectura del caso"
            description="Algunos casos no necesitan mas datos, sino mejor contexto. La web se orienta a situaciones donde la evidencia digital esta dispersa, la secuencia de hechos no es clara o la documentacion tecnica necesita una estructura mas comprensible."
          />
          <div className="grid gap-4 md:grid-cols-3">
            <StatCard
              value="01"
              label="Evidencia dispersa"
              description="Fuentes fragmentadas que exigen orden y criterio antes de cualquier conclusion."
            />
            <StatCard
              value="02"
              label="Cronologias incompletas"
              description="Secuencias que requieren contexto tecnico para entender relaciones y tiempos."
            />
            <StatCard
              value="03"
              label="Hallazgos dificiles de explicar"
              description="Resultados tecnicos que necesitan traducirse a una pieza documental comprensible."
            />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            title="Capacidades principales"
            description="La propuesta combina analisis tecnico y estructura documental para que los hallazgos sean comprensibles, trazables y utiles."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((item) => (
              <SurfaceCard key={item.title} title={item.title} description={item.description} />
            ))}
          </div>
          <div className="mt-8">
            <Link className="text-sm font-medium text-[var(--color-accent)]" href="/servicios">
              Ver servicios
            </Link>
          </div>
        </Container>
      </Section>

      <Section tint="soft">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeading
              title="Una metodologia pensada para reducir ruido"
              description="El trabajo se articula en fases: encuadre del caso, preservacion y orden de fuentes, analisis y correlacion, y documentacion final."
            />
            <Link className="text-sm font-medium text-[var(--color-accent)]" href="/metodologia">
              Ver metodologia completa
            </Link>
          </div>
          <div className="grid gap-4">
            {methodology.map((item, index) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-[var(--color-border)] bg-white px-5 py-5 shadow-[0_20px_60px_rgba(21,27,38,0.06)]"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-muted)]">
                  Paso {index + 1}
                </p>
                <p className="mt-2 text-lg text-[var(--color-text)]">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionHeading
              title="Contenido tecnico util para entender mejor el problema"
              description="La web integrara recursos orientados a evidencia digital, trazabilidad, documentacion e interpretacion prudente de hallazgos. Su funcion es aportar criterio antes de cualquier conversacion."
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="pill">Articulos tecnicos</span>
              <span className="pill">Guias breves</span>
              <span className="pill">Videos explicativos</span>
            </div>
          </div>
          <SurfaceCard
            title="Biblioteca editorial en crecimiento"
            description="Recursos para aclarar conceptos, preparar mejor una consulta y reforzar la autoridad del sitio sin recurrir a ruido comercial."
          >
            <Link className="mt-4 inline-block text-sm font-medium text-[var(--color-accent)]" href="/recursos">
              Ver recursos
            </Link>
          </SurfaceCard>
        </Container>
      </Section>

      <Section tint="soft">
        <Container className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionHeading
              title="Un enfoque profesional, no invasivo"
              description="La propuesta no se orienta a accesos, intrusiones ni promesas impropias. Se centra en analisis, contexto, correlacion e informe claro dentro de un marco prudente y documental."
            />
          </div>
          <TagList
            items={[
              "Sin reclamos agresivos",
              "Sin promesas absolutas",
              "Con limites explicitos",
            ]}
          />
        </Container>
      </Section>

      <ActionBanner
        title="Si el caso requiere claridad tecnica, el siguiente paso es ordenar el contexto"
        description="Una primera conversacion util empieza con una descripcion breve del problema, las fuentes disponibles y la necesidad concreta."
        primaryAction={{ href: "/contacto", label: "Contactar" }}
        secondaryAction={{ href: "/servicios", label: "Ver servicios" }}
        note="Consultas mejor orientadas, no mensajes genericos."
      />
    </>
  );
}
