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
import {
  contactPageCtaLabel,
  episodeCtaLabel,
  technicalGuideCtaLabel,
} from "@/app/site-config";

export const metadata: Metadata = buildPageMetadata({
  title: "Valor documental de la evidencia digital",
  description:
    "Articulo sobre contexto, integridad, trazabilidad y factores que refuerzan o debilitan la utilidad de una evidencia digital.",
  path: "/recursos/articulos/valor-documental-evidencia-digital",
  type: "article",
});

export default function DocumentaryValueArticlePage() {
  return (
    <>
      <PageHero
        eyebrow="Articulo"
        title="Valor documental de la evidencia digital"
        subtitle="Una pieza base para entender por que un archivo, una captura o un registro solo resultan realmente utiles cuando conservan contexto, integridad razonable y capacidad de explicacion."
        primaryAction={{ href: "#lectura", label: "Leer articulo" }}
        secondaryAction={{ href: "/recursos/videos/episodio-01", label: episodeCtaLabel }}
        stats={[
          { value: "6 min", label: "Lectura estimada" },
          { value: "Base", label: "Pieza editorial de apertura" },
          { value: "Marco", label: "Contexto, integridad y trazabilidad" },
        ]}
        notes={[
          "Pensado para perfiles tecnicos, juridicos y decisores que necesitan un marco claro.",
          "El foco esta en utilidad documental, no en espectacularidad ni afirmaciones excesivas.",
        ]}
        visual={
          <ImagePanel
            src="/images/resources/resources-featured.svg"
            alt="Escena editorial con monitor, notas y documentacion sobre valor documental de la evidencia digital"
            eyebrow="Evidencia digital"
            title="Una pieza resulta mas solida cuando puede leerse, relacionarse y explicarse con claridad"
            description="El valor de una evidencia no depende solo de su existencia. Depende de si puede sostener una lectura prudente dentro de un conjunto mas amplio."
            tags={["Articulo base", "Lectura", "Criterio"]}
            priority
            aspect="landscape"
          />
        }
      />

      <Section>
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_19rem] lg:items-start">
          <div className="grid gap-6" id="lectura">
            <Breadcrumbs
              items={[
                { href: "/", label: "Inicio" },
                { href: "/recursos", label: "Recursos" },
                { label: "Valor documental" },
              ]}
            />
            <EditorialMetaStrip
              items={[
                { label: "Formato", value: "Articulo editorial" },
                { label: "Tema", value: "Valor documental de la evidencia digital" },
                { label: "Dirigido a", value: "Perfiles juridicos, tecnicos y decisores" },
                { label: "Continuidad", value: "Conecta con preservacion inicial y episodio 01" },
              ]}
            />

            <ProseCard>
              <p>
                La utilidad de una evidencia digital no depende solo de que exista un archivo, una
                captura o un registro. Depende de si ese material conserva contexto, puede
                relacionarse con otros elementos, mantiene una integridad razonable y permite
                explicarse con claridad. En la practica, muchas piezas pierden fuerza no por lo que
                muestran, sino por como llegaron, como se conservaron o como se intentan interpretar.
              </p>

              <h2>Por que no toda evidencia digital vale lo mismo</h2>
              <p>
                En entornos tecnicos y documentales es habitual encontrar una idea simplificada: si
                hay un mensaje, una captura o un archivo, ya existe evidencia suficiente. Esa lectura
                suele ser incompleta.
              </p>
              <p>
                Dos materiales aparentemente similares pueden tener un valor muy distinto. Un archivo
                exportado con contexto temporal, procedencia conocida y relacion con otros elementos
                ofrece una lectura mas solida que una captura aislada recibida fuera de secuencia. Lo
                mismo ocurre con un registro tecnico cuya fuente puede identificarse frente a otro del
                que solo se conserva una copia parcial.
              </p>
              <blockquote>
                La pregunta util no es solo que aparece aqui, sino que puede sostener ese material
                con un minimo de rigor.
              </blockquote>

              <h2>Contexto, integridad y trazabilidad</h2>
              <p>
                Hay tres factores que influyen de forma directa en la utilidad real de una evidencia
                digital y que conviene revisar antes de formular afirmaciones fuertes.
              </p>

              <h3>Contexto</h3>
              <p>
                El contexto permite entender de donde sale un material, en que momento aparece y como
                se relaciona con otros elementos del caso. Sin ese marco, incluso un contenido
                autentico puede leerse de forma incompleta.
              </p>
              <ul>
                <li>Origen del material.</li>
                <li>Fecha o ventana temporal aproximada.</li>
                <li>Relacion con otras conversaciones, registros o dispositivos.</li>
                <li>Finalidad con la que se conserva o se aporta.</li>
              </ul>

              <h3>Integridad</h3>
              <p>
                La integridad no significa perfeccion absoluta. Significa que el material mantiene una
                continuidad razonable y no presenta alteraciones obvias que afecten a su lectura. Un
                archivo renombrado, una exportacion parcial o una captura recortada no invalidan
                siempre su uso, pero si obligan a ser mas prudentes con lo que se afirma sobre el.
              </p>

              <h3>Trazabilidad</h3>
              <p>
                La trazabilidad documental permite seguir el recorrido del material: quien lo obtuvo,
                en que formato, bajo que condiciones y con que relacion respecto de otros elementos.
                Sin trazabilidad, la evidencia puede convertirse en una pieza aislada dificil de
                explicar ante terceros.
              </p>

              <h2>Que suele debilitar una evidencia desde el inicio</h2>
              <p>
                Muchos problemas no aparecen en la fase de analisis, sino bastante antes. Algunas
                practicas frecuentes reducen de forma clara el valor posterior de un material.
              </p>

              <h3>Manipular antes de documentar</h3>
              <p>
                Abrir, reenviar, recortar, reorganizar o revisar un material sin dejar constancia
                previa suele empobrecer la lectura posterior. A veces el contenido sigue siendo util,
                pero se pierde parte de la secuencia o del contexto inicial.
              </p>

              <h3>Conservar sin orden</h3>
              <p>
                Guardar archivos, capturas, enlaces y exportaciones en carpetas dispersas o sin
                nomenclatura clara dificulta reconstruir el caso. La desorganizacion no siempre impide
                el trabajo, pero aumenta el tiempo necesario y reduce claridad.
              </p>

              <h3>Perder metadatos o estructura</h3>
              <p>
                Un mensaje convertido en captura y separado de su entorno conserva menos informacion
                que una exportacion ordenada. Un archivo sin fecha visible o sin relacion con su fuente
                original obliga a usar un lenguaje mucho mas limitado.
              </p>

              <h3>Depender de materiales incompletos</h3>
              <p>
                Cuando solo se conserva una parte de una conversacion, una secuencia fragmentada de
                pantallas o un conjunto parcial de registros, cualquier conclusion debe plantearse con
                mas cautela. La ausencia de contexto no siempre invalida el material, pero si
                condiciona su fuerza.
              </p>

              <h2>Evidencia, cronologia e informe</h2>
              <p>
                La utilidad de una evidencia aumenta cuando puede integrarse en una secuencia
                comprensible. No basta con acumular piezas. Hace falta poder relacionarlas.
              </p>
              <ol>
                <li>Que elemento tenemos.</li>
                <li>De donde procede.</li>
                <li>Como se relaciona con otros elementos.</li>
                <li>Que puede afirmarse con prudencia a partir de ese conjunto.</li>
              </ol>
              <p>
                Cuando esa base existe, resulta mucho mas facil construir cronologias, ordenar hechos
                y redactar informes tecnicos legibles. Cuando no existe, el trabajo se desplaza desde
                el analisis hacia la reparacion del desorden inicial.
              </p>

              <h2>Criterios simples para una primera lectura mas solida</h2>
              <ul>
                <li>Comprobar si el origen del material esta claro.</li>
                <li>Confirmar si existe una referencia temporal razonable.</li>
                <li>Revisar si el formato conservado mantiene estructura suficiente.</li>
                <li>Valorar si puede relacionarse con otras piezas.</li>
                <li>Comprobar si la documentacion disponible permite explicarlo a un tercero.</li>
              </ul>
              <p>
                No se trata de inflar requisitos ni de presentar la evidencia digital como un terreno
                inaccesible. Se trata de distinguir entre material meramente disponible y material
                realmente util.
              </p>

              <h2>Cierre</h2>
              <p>
                Una evidencia digital es mas solida cuando puede leerse con contexto, sostenerse con
                integridad y explicarse con claridad. Ese principio mejora el analisis, mejora la
                documentacion y tambien mejora la calidad de cualquier consulta posterior.
              </p>
            </ProseCard>
          </div>

          <div className="grid gap-4">
            <SurfaceCard
              title="Lectura relacionada"
              description="La siguiente pieza practica desarrolla que errores de preservacion inicial condicionan la utilidad del material desde el principio."
            >
              <TagList items={["Preservacion", "Errores frecuentes", "Punto de partida"]} />
              <Link
                className="inline-link"
                href="/recursos/articulos/preservacion-inicial-evidencia-digital"
              >
                Leer articulo relacionado
              </Link>
            </SurfaceCard>

            <SurfaceCard
              title="Version audiovisual"
              description="El episodio 01 condensa este mismo marco en formato breve, grabable y reutilizable para recursos audiovisuales."
            >
              <TagList items={["Video largo", "5 bloques", "Shorts derivados"]} />
              <Link className="inline-link" href="/recursos/videos/episodio-01">
                {episodeCtaLabel}
              </Link>
            </SurfaceCard>

            <SurfaceCard
              title="Siguiente lectura de alcance"
              description="La guia sobre revision tecnica ayuda a entender que puede y que no puede sostenerse despues de este marco inicial."
            >
              <TagList items={["Revision tecnica", "Alcance", "Limites"]} />
              <Link className="inline-link" href="/recursos/guias/revision-tecnica-evidencia-digital">
                {technicalGuideCtaLabel}
              </Link>
            </SurfaceCard>
          </div>
        </Container>
      </Section>

      <ActionBanner
        eyebrow="Continuidad editorial"
        title="Si necesitas valorar materiales digitales con mejor contexto y mejor lenguaje tecnico, el siguiente paso es plantear la consulta con orden"
        description="Esta pieza ofrece un marco de lectura. Si existe una necesidad concreta, la conversacion inicial puede centrarse en materiales disponibles, objetivo documental y limites razonables del analisis."
        primaryAction={{ href: "/contacto", label: contactPageCtaLabel }}
        secondaryAction={{
          href: "/recursos/articulos/preservacion-inicial-evidencia-digital",
          label: "Leer la siguiente pieza",
        }}
        note="El valor documental mejora cuando el problema llega bien formulado y con materiales mejor conservados."
        highlights={[
          "Marco base para entender utilidad real de una evidencia digital.",
          "Puente natural entre lectura editorial, video y contacto cualificado.",
        ]}
      />
    </>
  );
}
