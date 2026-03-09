import Link from "next/link";
import {
  ActionBanner,
  BulletList,
  Container,
  ContentLinkCard,
  Eyebrow,
  ImagePanel,
  PageHero,
  Section,
  SectionHeading,
  SurfaceCard,
  TagList,
} from "@/components/ui";
import { contactPageCtaLabel, resourcesCtaLabel } from "@/app/site-config";
import type { ServiceSpecialty } from "@/app/servicios/service-specialties";

export function ServiceSpecialtyPage({ specialty }: { specialty: ServiceSpecialty }) {
  return (
    <>
      <PageHero
        eyebrow={specialty.eyebrow}
        title={specialty.title}
        subtitle={specialty.subtitle}
        primaryAction={{ href: "/contacto", label: contactPageCtaLabel }}
        secondaryAction={{ href: "#recursos", label: "Ver recursos relacionados" }}
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
              title="Cuando el asunto necesita mas lectura tecnica y menos soluciones genericas"
              description="La especialidad se orienta a problemas que no mejoran acumulando materiales, sino ordenando mejor el punto de partida, delimitando alcance y preparando una salida documental util."
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
              title="Consultas donde una revision bien planteada cambia la calidad del caso"
              description="No se trata de prometer cualquier resultado. Se trata de mostrar en que clase de asunto el trabajo tecnico aporta mas claridad, mejor encuadre y una salida mas util para terceros."
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
              title="Varios problemas no nacen del hallazgo, sino de como se conserva, se formula o se interpreta"
              description="Buena parte del valor de una revision experta consiste en evitar estos errores de enfoque antes de que debiliten el caso o encarezcan su reconstruccion."
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

      <Section tint="dark">
        <Container className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <Eyebrow tone="light">Aporte tecnico</Eyebrow>
            <SectionHeading
              title="Que puede aportar una revision tecnica seria"
              description="El valor no esta en inflar el caso. Esta en leer mejor, ordenar mejor, distinguir mejor y traducir el trabajo a una salida documental mas util."
              tone="light"
            />
          </div>
          <div className="grid gap-4">
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
        <Container className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-start">
          <div>
            <Eyebrow>Limites y enfoque prudente</Eyebrow>
            <SectionHeading
              title="La credibilidad mejora cuando el servicio explica bien hasta donde puede sostenerse"
              description="El enfoque no consiste en prometer atribuciones, certezas o reconstrucciones imposibles. Consiste en explicar mejor que puede leerse, con que fuerza y con que salida documental."
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
                title="Contenido publico que ayuda a entender mejor el problema antes de la consulta"
                description="Estos recursos no sustituyen el servicio. Funcionan como capa de criterio, marco previo y prueba publica de como se trabaja esta clase de asunto."
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
        description="La conversacion inicial sirve para acotar el problema, revisar que material existe y definir una salida tecnica o pericial razonable antes de sobredimensionar el alcance."
        primaryAction={{ href: "/contacto", label: contactPageCtaLabel }}
        secondaryAction={{ href: "/servicios", label: "Volver a servicios" }}
        note="La mejor entrada no es una promesa maxima. Es una consulta bien encuadrada, con prudencia y criterio."
        highlights={[
          "Servicio pensado para captar consultas cualificadas y mejor formuladas.",
          "Puente directo entre patron observado, limites metodologicos y salida documental posible.",
        ]}
      />
    </>
  );
}
