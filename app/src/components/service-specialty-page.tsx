import Link from "next/link";
import {
  ActionBanner,
  BulletList,
  Container,
  ContentLinkCard,
  DecisionGuard,
  Eyebrow,
  ImagePanel,
  PageHero,
  Section,
  SectionHeading,
  SurfaceCard,
  TagList,
} from "@/components/ui";
import {
  beforeActionDescription,
  beforeActionTitle,
  contactPageCtaLabel,
  resourcesCtaLabel,
} from "@/app/site-config";
import type { ServiceSpecialty } from "@/app/servicios/service-specialties";

const specialtyWorkbench: Record<
  string,
  { materials: string[]; techniques: string[]; findings: string[] }
> = {
  "peritaje-moviles-mensajeria": {
    materials: [
      "Exportaciones completas, adjuntos, copias de chat, metadatos y cronologias de uso.",
      "Capturas con contexto, dispositivo de origen y archivos que sigan diferenciando original y copia.",
    ],
    techniques: [
      "Revisiones de movil y mensajeria con familias como Cellebrite o Magnet AXIOM cuando el material lo permite.",
      "Analisis de exportaciones, hashes, tiempos y continuidad entre mensajes, adjuntos y otras piezas.",
    ],
    findings: [
      "Secuencias mejor fijadas, lagunas de conversacion, continuidad entre adjuntos y valor real de cada artefacto.",
    ],
  },
  "osint-huella-digital": {
    materials: [
      "Perfiles, alias, dominios, publicaciones, capturas con fecha y fuentes abiertas conservadas con contexto.",
      "Snapshots, historicos publicos y referencias cruzadas entre activos visibles.",
    ],
    techniques: [
      "Correlacion de fuentes abiertas, preservacion de paginas visibles y cronologias de observacion.",
      "Jerarquizacion de hallazgos por fuente, fecha y fuerza de relacion, sin cerrar atribucion antes de tiempo.",
    ],
    findings: [
      "Mapas de relacion, persistencia de alias y limites claros entre correlacion publica y atribucion fuerte.",
    ],
  },
  "fraude-tecnologico-trazabilidad": {
    materials: [
      "Extractos, exportaciones CSV, justificantes, alertas, correos, wallets, hashes y cronologias de movimientos.",
      "Documentos que permitan cruzar pagos, cambios de cuenta, pedidos o redistribucion dentro del mismo intervalo.",
    ],
    techniques: [
      "Tablas de correlacion, lectura temporal de movimientos y contraste entre rastro financiero y rastro digital.",
      "Exploradores blockchain o hashes de transaccion cuando el caso entra en wallets o criptoactivos.",
    ],
    findings: [
      "Patrones de fraccionamiento, cuentas de paso, ventanas de operativa y separacion entre patron visible y atribucion cerrada.",
    ],
  },
  "evidencia-digital-conflictos-civiles": {
    materials: [
      "Capturas, exportaciones, PDFs, correos, cronologias y fuentes abiertas que alteran el contexto del asunto.",
      "Material sensible que necesita distinguir bien documento, relato y continuidad temporal.",
    ],
    techniques: [
      "Ordenacion documental, revision de metadatos, exportaciones, cabeceras y versiones cuando siguen disponibles.",
      "Lectura conjunta de mensajeria, cronologia y piezas documentales para producir una salida legible para terceros.",
    ],
    findings: [
      "Cronologias mas limpias, relacion entre piezas y una frontera mas clara entre observacion, patron y valor documental.",
    ],
  },
};

export function ServiceSpecialtyPage({ specialty }: { specialty: ServiceSpecialty }) {
  const workbench = specialtyWorkbench[specialty.slug];

  return (
    <>
      <PageHero
        eyebrow={specialty.eyebrow}
        title={specialty.title}
        subtitle={specialty.subtitle}
        primaryAction={{ href: "/contacto", label: contactPageCtaLabel }}
        secondaryAction={{ href: "#recursos", label: "Ver casos y guias relacionadas" }}
        chips={specialty.chips}
        stats={specialty.stats}
        notes={specialty.notes}
        visual={
          <ImagePanel
            src={specialty.visual.src}
            alt={specialty.visual.alt}
            eyebrow={specialty.visual.eyebrow}
            title={specialty.visual.title}
            description={specialty.visual.description}
            tags={specialty.visual.tags}
            priority
          />
        }
      />

      <Section tint="dark">
        <Container className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
          <div>
            <Eyebrow tone="light">Que problemas resuelve</Eyebrow>
            <SectionHeading
              title="Cuando el asunto necesita mas lectura tecnica y menos intuicion o soluciones genericas"
              description="La especialidad se orienta a problemas que no mejoran acumulando materiales, sino ordenando mejor el punto de partida, delimitando alcance y evitando errores de lectura tempranos."
              tone="light"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {specialty.problems.map((problem) => (
              <SurfaceCard
                key={problem.title}
                title={problem.title}
                description={problem.description}
                tone="light"
                compact
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-start">
          <div>
            <Eyebrow>En que casos encaja</Eyebrow>
            <SectionHeading
              title="Consultas donde una revision bien planteada cambia la calidad del caso y de la consulta"
              description="No se trata de prometer cualquier resultado. Se trata de mostrar en que clase de asunto el trabajo tecnico aporta mas claridad, mejor encuadre y una salida documental mucho mas util antes de que el material siga perdiendo fuerza."
            />
            <div className="mt-8">
              <TagList items={specialty.chips} />
            </div>
          </div>
          <SurfaceCard
            title="Encaja especialmente cuando existe"
            description="Estos encargos suelen compartir una necesidad comun: transformar un conjunto de materiales dispersos o mal formulados en una base tecnica mucho mas legible."
            compact
          >
            <BulletList items={specialty.fitCases} />
          </SurfaceCard>
        </Container>
      </Section>

      <Section tint="soft">
        <Container className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
          <div>
            <Eyebrow>Lo que suele pasarse por alto</Eyebrow>
            <SectionHeading
              title="Varios problemas no nacen del hallazgo, sino de como se conserva, se formula o se interpreta demasiado pronto"
              description="Buena parte del valor de una revision experta consiste en evitar estos errores de enfoque antes de que debiliten el caso, rompan la secuencia o encarezcan su reconstruccion."
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {specialty.missed.map((item) => (
              <SurfaceCard
                key={item}
                title={item}
                description="Error recurrente que suele reducir claridad, alcance o credibilidad del material."
                compact
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr] xl:items-start">
          <div>
            <Eyebrow>Utilidad inmediata</Eyebrow>
            <SectionHeading
              title="En esta clase de asunto suele ayudar saber que llega mal, que conviene preservar y que no debe afirmarse todavia"
              description="Antes del analisis profundo, una consulta temprana ya puede mejorar mucho la calidad del caso si evita que el material se siga degradando o que la interpretacion se adelante demasiado."
            />
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <SurfaceCard
              title="Suele llegar mal"
              description={
                specialty.missed[0] ??
                "Material mezclado, transformado o explicado con mas conclusion que estructura."
              }
              compact
            />
            <SurfaceCard
              title="Conviene preservar antes"
              description={
                specialty.contribution[0] ??
                "Separar fuentes, versiones y continuidad del material antes de seguir moviendolo."
              }
              compact
            />
            <SurfaceCard
              title="No debe afirmarse aun"
              description={
                specialty.limits[0] ??
                "La lectura maxima exige mas soporte del que a veces parece existir al principio."
              }
              compact
            />
          </div>
        </Container>
      </Section>

      <Section tint="dark">
        <Container className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <Eyebrow tone="light">Aporte tecnico</Eyebrow>
            <SectionHeading
              title="Que puede aportar una revision tecnica seria y por que suele ser valiosa cuanto antes"
              description="El valor no esta en inflar el caso. Esta en leer mejor, ordenar mejor, distinguir mejor y traducir el trabajo a una salida documental mas util."
              tone="light"
            />
          </div>
          <div className="grid gap-4">
            {workbench ? (
              <SurfaceCard
                title="Material revisable, tecnicas y hallazgos posibles"
                description="La especialidad no se apoya en abstracciones. Suele trabajar sobre artefactos concretos, familias de revision aplicables y una salida documental proporcionada al material disponible."
                tone="light"
                compact
              >
                <BulletList
                  items={[
                    `Material de partida: ${workbench.materials.join(" ")}`,
                    `Tecnicas aplicables: ${workbench.techniques.join(" ")}`,
                    `Hallazgos posibles: ${workbench.findings.join(" ")}`,
                  ]}
                  tone="light"
                />
              </SurfaceCard>
            ) : null}
            <SurfaceCard
              title="Aporte habitual"
              description="Una revision rigurosa mejora la estructura del caso antes de intentar maximizar conclusiones."
              tone="light"
              compact
            >
              <BulletList items={specialty.contribution} tone="light" />
            </SurfaceCard>
            <div className="grid gap-4 md:grid-cols-2">
              <SurfaceCard
                title="Entregables posibles"
                description="La salida final depende del material disponible, del objetivo del encargo y del alcance prudente del analisis."
                tone="light"
                compact
              >
                <BulletList items={specialty.outputs} tone="light" />
              </SurfaceCard>
              <SurfaceCard
                title="Puente hacia contacto"
                description="La consulta inicial sirve para valorar encaje, materiales y utilidad documental esperable antes de comprometer una lectura mas profunda."
                tone="light"
                compact
              >
                <Link className="inline-link text-white" href="/contacto">
                  {contactPageCtaLabel}
                </Link>
              </SurfaceCard>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <DecisionGuard
            eyebrow="Antes de mover o reinterpretar mas material"
            title={beforeActionTitle}
            description={beforeActionDescription}
            items={[
              specialty.missed[0] ??
                "Lo que suele llegar peor no es la falta de material, sino material ya mezclado o transformado antes de fijar una base minima.",
              specialty.missed[1] ??
                "Muchas conclusiones se debilitan porque el alcance real del material aun no estaba claro cuando se cerraron.",
              specialty.limits[0] ??
                "No toda pieza conserva la misma fuerza documental ni el mismo valor de atribucion.",
              specialty.contribution[0] ??
                "Una lectura temprana suele aportar mas cuando todavia conserva mejor contexto y secuencia.",
            ]}
            primaryAction={{ href: "/contacto", label: contactPageCtaLabel }}
            secondaryAction={{ href: "#recursos", label: "Ver casos y guias relacionadas" }}
          />
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-start">
          <div>
            <Eyebrow>Limites y enfoque prudente</Eyebrow>
            <SectionHeading
              title="La credibilidad mejora cuando el servicio explica bien hasta donde puede sostenerse"
              description="El enfoque no consiste en prometer atribuciones, certezas o reconstrucciones imposibles. Consiste en explicar mejor que puede leerse, con que fuerza y con que salida documental sin confundir correlacion con prueba cerrada."
            />
          </div>
          <SurfaceCard
            title="Limites importantes"
            description="Explicar limites no debilita el servicio. Lo vuelve mas serio, mas util y mejor preparado para terceros."
            compact
          >
            <BulletList items={specialty.limits} />
          </SurfaceCard>
        </Container>
      </Section>

      <Section tint="soft">
        <Container id="recursos">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
            <div>
            <Eyebrow>Recursos relacionados</Eyebrow>
            <SectionHeading
              title="Casos tipo, guias y lecturas aplicadas que ayudan a reconocer mejor el problema antes de la consulta"
              description="Estos recursos no sustituyen el servicio. Funcionan como capa de criterio, marco previo y prueba publica de como se trabaja esta clase de asunto cuando el material no llega limpio ni bien encuadrado."
            />
            </div>
            <SurfaceCard
              title="Puente con el hub editorial"
              description="Recursos y servicios comparten el mismo marco: contexto, secuencia, limites y utilidad documental. Quien recorre ambas capas suele formular mejor la consulta."
              compact
            >
              <Link className="inline-link" href="/recursos">
                {resourcesCtaLabel}
              </Link>
            </SurfaceCard>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {specialty.relatedResources.map((item) => (
              <ContentLinkCard
                key={item.title}
                type={item.type}
                title={item.title}
                description={item.description}
                meta={item.meta}
                href={item.href}
                cta={item.cta}
                tags={item.tags}
                compact
              />
            ))}
          </div>
        </Container>
      </Section>

      <ActionBanner
        eyebrow="Siguiente paso"
        title="Si el asunto encaja, el siguiente paso es una consulta con materiales identificados y objetivo documental claro"
        description="La conversacion inicial sirve para acotar el problema, revisar que material existe y definir una salida tecnica o pericial razonable antes de sobredimensionar el alcance o seguir degradando la base documental."
        primaryAction={{ href: "/contacto", label: contactPageCtaLabel }}
        secondaryAction={{ href: "/servicios", label: "Volver a servicios" }}
        note="La mejor entrada no es una promesa maxima. Es una consulta bien encuadrada, con prudencia y criterio, antes de que la secuencia llegue mas rota."
        highlights={[
          "Servicio pensado para captar consultas cualificadas y mejor formuladas.",
          "Puente directo entre patron observado, limites metodologicos y salida documental posible.",
        ]}
      />
    </>
  );
}
