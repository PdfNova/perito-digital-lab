import type { Metadata } from "next";
import Link from "next/link";
import {
  ActionBanner,
  Breadcrumbs,
  Container,
  EditorialMetaStrip,
  ImagePanel,
  PageHero,
  ProseCard,
  Section,
  SurfaceCard,
  TagList,
} from "@/components/ui";
import { buildPageMetadata } from "@/app/metadata";
import { contactPageCtaLabel, resourcesHubReturnLabel } from "@/app/site-config";

export const metadata: Metadata = buildPageMetadata({
  title: "Huella digital, OSINT y limites de atribucion: caso tipo",
  description:
    "Caso tipo anonimo sobre perfiles, activos abiertos y como una revision tecnica documenta correlaciones y limites de atribucion sin sobreactuar el alcance.",
  path: "/recursos/casos/huella-digital-osint",
  type: "article",
});

export default function DigitalFootprintOsintCasePage() {
  return (
    <>
      <PageHero
        eyebrow="Caso tipo"
        title="Huella digital, OSINT y limites de atribucion"
        subtitle="Un caso anonimo para mostrar como varias senales abiertas pueden resultar tecnicamente prometedoras sin justificar todavia una atribucion total, y por que esa distincion forma parte del valor del trabajo."
        primaryAction={{ href: "#caso", label: "Leer caso tipo" }}
        secondaryAction={{ href: "/contacto", label: contactPageCtaLabel }}
        stats={[
          { value: "6 min", label: "Lectura estimada" },
          { value: "OSINT", label: "Activos abiertos y correlacion" },
          { value: "Limites", label: "Caso tipo sobre atribucion prudente" },
        ]}
        notes={[
          "La pieza no se publica para inflar coincidencias, sino para mostrar donde una revision experta contiene mejor el alcance.",
          "El material se presenta como patron anonimo: sin perfiles reales, dominios identificables ni referencias de procedimiento.",
        ]}
        visual={
          <ImagePanel
            src="/images/slots/slot-analista.svg"
            alt="Analista revisando activos abiertos y notas para un caso tipo de huella digital y OSINT"
            eyebrow="Correlacion abierta"
            title="El valor de OSINT no esta solo en encontrar, sino en saber hasta donde no conviene atribuir"
            description="La pieza muestra como una huella digital visible gana credibilidad cuando se documenta por capas y con limites expresos."
            tags={["OSINT", "Huella digital", "Correlacion"]}
            priority
            aspect="landscape"
          />
        }
      />

      <Section>
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_19rem] lg:items-start">
          <div className="grid gap-6" id="caso">
            <Breadcrumbs
              items={[
                { href: "/", label: "Inicio" },
                { href: "/recursos", label: "Recursos" },
                { label: "Caso tipo de huella digital y OSINT" },
              ]}
            />
            <EditorialMetaStrip
              items={[
                { label: "Formato", value: "Caso tipo anonimo" },
                { label: "Tema", value: "Huella digital, activos abiertos y alcance de atribucion" },
                { label: "Dirigido a", value: "Perfiles juridicos, decisores y consultas de OSINT" },
                { label: "Continuidad", value: "Conecta con huella digital, correlacion y contacto" },
              ]}
            />

            <ProseCard>
              <p>
                La consulta no se limitaba a localizar presencia digital. La necesidad real era valorar
                si varias senales abiertas permitian hablar de una relacion consistente entre perfiles,
                alias y activos visibles o si esa lectura ya estaba empujando el material mas alla de
                lo que podia sostener con prudencia.
              </p>

              <h2>Punto de partida</h2>
              <ul>
                <li>Capturas de perfiles y publicaciones.</li>
                <li>Referencias a alias repetidos.</li>
                <li>Enlaces a activos abiertos observados en momentos distintos.</li>
                <li>Notas con conclusiones ya avanzadas sobre posible identidad comun.</li>
              </ul>

              <h2>Donde aparecia la dificultad real</h2>
              <p>
                El problema no era la falta de indicios. Era la falta de jerarquia entre ellos.
                Coincidencias tratadas como identidad cerrada, materiales de valor desigual mezclados
                sin estructura y poco margen entre observacion visible e inferencia fuerte.
              </p>

              <h2>Trabajo tecnico util</h2>
              <ol>
                <li>Separar datos visibles, correlaciones e interpretaciones sugeridas.</li>
                <li>Ordenar activos abiertos por fuente, fecha y relacion observable.</li>
                <li>Identificar que coincidencias merecen lectura conjunta y cuales solo aportan contexto.</li>
                <li>Fijar con claridad donde acaba el patron visible y donde empieza una atribucion que necesita mas soporte.</li>
              </ol>

              <h2>Lo que este caso tipo ensena</h2>
              <p>
                Varias coincidencias abiertas resultaban tecnicamente interesantes, pero no equivalian
                por si solas a una identificacion cerrada. El valor real aparecia al documentar la
                relacion entre activos y al contener mejor el lenguaje de atribucion.
              </p>
              <blockquote>
                En OSINT, parte del rigor consiste en saber que no debe afirmarse todavia.
              </blockquote>

              <h2>Utilidad editorial y profesional</h2>
              <p>
                Este patron muestra por que una revision experta en huella digital y fuentes abiertas no
                se limita a encontrar perfiles o activos. Tambien ordena, jerarquiza y fija limites
                para que una linea prometedora no se debilite por exceso de afirmacion.
              </p>

              <h2>Cierre</h2>
              <p>
                Este caso tipo se publica para mostrar una diferencia importante: una huella digital
                abierta puede ser muy util incluso cuando no permite todavia una atribucion total. Esa
                prudencia no enfria el trabajo. Lo vuelve mas creible, mas documentable y mucho mas
                util para decidir el siguiente paso.
              </p>
            </ProseCard>
          </div>

          <div className="grid gap-4">
            <SurfaceCard
              title="Lectura de continuidad"
              description="Esta linea conecta de forma directa con la especialidad de OSINT y huella digital cuando el problema ya exige ordenar activos abiertos y contener mejor la atribucion."
            >
              <TagList items={["OSINT", "Huella digital", "Atribucion"]} />
              <Link className="inline-link" href="/servicios/osint-huella-digital">
                Ver servicio relacionado
              </Link>
            </SurfaceCard>

            <SurfaceCard
              title="Relacion con servicios"
              description="Este patron conecta de forma directa con OSINT, huella digital, correlacion de indicios y notas tecnicas de alcance para terceros."
            >
              <TagList items={["OSINT", "Huella digital", "Correlacion"]} />
              <Link className="inline-link" href="/servicios/osint-huella-digital">
                Ver servicio principal
              </Link>
            </SurfaceCard>

            <SurfaceCard
              title="Volver al hub"
              description="Recursos reune esta linea junto a fraude, preservacion, mensajeria y revisiones tecnicas orientadas a secuencia y limites."
            >
              <TagList items={["Recursos", "Continuidad", "Lecturas"]} />
              <Link className="inline-link" href="/recursos">
                {resourcesHubReturnLabel}
              </Link>
            </SurfaceCard>
          </div>
        </Container>
      </Section>

      <ActionBanner
        eyebrow="Continuidad editorial"
        title="Si varias senales abiertas parecen apuntar en la misma direccion, el siguiente paso es revisar su alcance antes de atribuir demasiado"
        description="El caso tipo ayuda a reconocer un patron. Si existe una necesidad concreta, la consulta inicial puede centrarse en activos visibles, materiales ya conservados y utilidad documental esperable."
        primaryAction={{ href: "/contacto", label: contactPageCtaLabel }}
        secondaryAction={{ href: "/servicios/osint-huella-digital", label: "Ver servicio relacionado" }}
        note="Una conclusion contenida y bien documentada suele aportar mas valor que una atribucion prematura."
        highlights={[
          "Caso tipo pensado para mostrar OSINT con criterio y sin exhibicionismo.",
          "Puente directo entre correlacion abierta, limites de atribucion y asesoramiento experto.",
        ]}
      />
    </>
  );
}
