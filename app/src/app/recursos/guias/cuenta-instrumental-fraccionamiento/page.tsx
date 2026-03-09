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
  title: "Cuenta instrumental y fraccionamiento de ingresos",
  description:
    "Guia tecnica sobre cuentas intermedias, movimientos fragmentados y como leer un patron financiero visible con prudencia documental.",
  path: "/recursos/guias/cuenta-instrumental-fraccionamiento",
  type: "article",
});

export default function InstrumentalAccountGuidePage() {
  return (
    <>
      <PageHero
        eyebrow="Guia tecnica"
        title="Cuenta instrumental y fraccionamiento de ingresos"
        subtitle="Una guia para entender mejor cuando varios movimientos dejan de ser simples apuntes sueltos y empiezan a exigir una lectura conjunta, siempre con cautela sobre lo que puede sostenerse realmente."
        primaryAction={{ href: "#guia", label: "Leer guia" }}
        secondaryAction={{ href: "/contacto", label: contactPageCtaLabel }}
        stats={[
          { value: "8 min", label: "Lectura estimada" },
          { value: "Patron", label: "Cuenta intermedia y redistribucion" },
          { value: "Prudente", label: "Guia de alcance aplicado" },
        ]}
        notes={[
          "La expresion cuenta instrumental se usa aqui como funcion aparente, no como conclusion cerrada.",
          "El valor real suele aparecer al correlacionar movimientos con otros materiales y no al sobreactuar un apunte aislado.",
        ]}
        visual={
          <ImagePanel
            src="/images/services/services-detail.svg"
            alt="Mesa de trabajo con informe tecnico, movimientos y documentacion sobre trazabilidad financiera"
            eyebrow="Trazabilidad y patron"
            title="Ver una recurrencia no basta. Hace falta leer funcion, secuencia y limites"
            description="La guia se orienta a mejorar la calidad de la primera lectura antes de convertir un patron financiero visible en una afirmacion excesiva."
            tags={["Trazabilidad", "Patron financiero", "Documento"]}
            priority
            aspect="landscape"
          />
        }
      />

      <Section>
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_19rem] lg:items-start">
          <div className="grid gap-6" id="guia">
            <Breadcrumbs
              items={[
                { href: "/", label: "Inicio" },
                { href: "/recursos", label: "Recursos" },
                { label: "Cuenta instrumental y fraccionamiento" },
              ]}
            />
            <EditorialMetaStrip
              items={[
                { label: "Formato", value: "Guia tecnica aplicada" },
                { label: "Tema", value: "Cuenta intermedia, fraccionamiento y lectura prudente" },
                { label: "Dirigido a", value: "Perfiles juridicos, decisores y consultas con trazabilidad" },
                { label: "Continuidad", value: "Conecta con servicios de fraude y revision tecnica" },
              ]}
            />

            <ProseCard>
              <p>
                En asuntos con componente financiero y digital, el error mas frecuente no suele ser no
                ver el movimiento llamativo. Suele ser convertirlo demasiado pronto en una explicacion
                completa. Esta guia parte de una idea mas util: una cuenta intermedia se entiende mejor
                por la funcion que parece cumplir dentro de una secuencia que por el impacto aislado de
                uno de sus apuntes.
              </p>

              <h2>Que se describe aqui como cuenta instrumental</h2>
              <p>
                La expresion se usa para describir una funcion aparente: recepcion temporal,
                concentracion de ingresos, redistribucion posterior o paso intermedio dentro de un flujo
                mas amplio. Esa formulacion evita un problema habitual: confundir observacion tecnica
                con conclusion cerrada sobre autoria o intencionalidad.
              </p>
              <blockquote>
                El lenguaje prudente no debilita el caso. Evita que una lectura util se estropee por
                exceso de afirmacion.
              </blockquote>

              <h2>Cuando el fraccionamiento merece una lectura mas seria</h2>
              <ul>
                <li>Importes repetidos o en rangos proximos.</li>
                <li>Movimientos concentrados en ventanas temporales cortas.</li>
                <li>Salidas posteriores que reducen rapido la permanencia del saldo.</li>
                <li>Relacion visible con comunicaciones, pedidos o cambios de cuenta.</li>
              </ul>
              <p>
                Ninguno de estos elementos basta por si solo. El interes aparece cuando varias capas se
                sostienen al mismo tiempo y pueden explicarse con continuidad.
              </p>

              <h2>Materiales que mejoran mucho la lectura</h2>
              <p>
                La calidad del patron depende en gran parte del material disponible. Una revision suele
                ganar mucho cuando puede trabajar con extractos continuos, alertas de operaciones,
                referencias documentales de pagos y mensajes que permitan situar los movimientos dentro
                de un contexto temporal razonable.
              </p>

              <h2>Que aporta una revision tecnica</h2>
              <h3>Orden documental</h3>
              <p>
                Convierte capturas, notas y referencias dispersas en una secuencia legible para terceros.
              </p>

              <h3>Correlacion</h3>
              <p>
                Relaciona movimientos con mensajes, cambios de cuenta o hitos externos que alteran la
                lectura del conjunto.
              </p>

              <h3>Delimitacion de alcance</h3>
              <p>
                Distingue entre observacion, recurrencia con interes tecnico, patron consistente e
                inferencia que todavia necesita soporte.
              </p>

              <h2>Donde suelen perder fuerza estos asuntos</h2>
              <ul>
                <li>Capturas parciales sin continuidad.</li>
                <li>Mezcla de varias cuentas o plataformas sin estructura comun.</li>
                <li>Desconexion entre secuencia financiera y contexto digital.</li>
                <li>Interpretacion fijada antes de ordenar el material.</li>
              </ul>
              <p>
                Muchos problemas no nacen de la falta de datos, sino de una preservacion y una lectura
                inicial demasiado pobres para sostener despues una explicacion seria.
              </p>

              <h2>Cierre</h2>
              <p>
                Un patron financiero visible no siempre conduce a una conclusion maxima, pero puede
                resultar muy util si se documenta bien y se formula con el alcance correcto. Esa es una
                de las razones por las que una revision bien planteada no solo aclara mejor el asunto:
                tambien evita errores de enfoque que, cuando aparecen tarde, resultan bastante mas caros
                de corregir.
              </p>
            </ProseCard>
          </div>

          <div className="grid gap-4">
            <SurfaceCard
              title="Relacion con servicios"
              description="Este patron conecta de forma directa con trazabilidad, fraude tecnologico, investigacion digital e informes tecnicos orientados a secuencia y alcance."
            >
              <TagList items={["Fraude", "Trazabilidad", "Informe"]} />
              <Link className="inline-link" href="/servicios">
                Ver servicios relacionados
              </Link>
            </SurfaceCard>

            <SurfaceCard
              title="Antes de pedir una revision"
              description="Conviene llegar con materiales identificados, continuidad minima y una idea clara de que se necesita aclarar realmente."
            >
              <TagList items={["Materiales", "Objetivo", "Alcance"]} />
              <Link className="inline-link" href="/contacto">
                {contactPageCtaLabel}
              </Link>
            </SurfaceCard>

            <SurfaceCard
              title="Volver al hub"
              description="El resto de la biblioteca amplia este marco con piezas sobre preservacion, valor documental, correo y casos tipo anonimos."
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
        title="Si el patron ya es visible, el siguiente paso es revisar si el material permite sostenerlo con prudencia"
        description="Esta guia esta pensada para reconocer mejor el alcance del problema. Si existe una necesidad concreta, la consulta inicial puede centrarse en secuencia, materiales disponibles y salida documental razonable."
        primaryAction={{ href: "/contacto", label: contactPageCtaLabel }}
        secondaryAction={{ href: "/recursos", label: resourcesHubReturnLabel }}
        note="Una lectura precipitada puede inflar un patron. Una revision bien planteada ayuda a no perder su valor real."
        highlights={[
          "Guia para elevar la calidad de la primera lectura en asuntos de trazabilidad.",
          "Puente natural entre patron financiero visible, limites y encaje del servicio.",
        ]}
      />
    </>
  );
}
