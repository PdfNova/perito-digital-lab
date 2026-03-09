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
  resourcesHubReturnLabel,
  technicalGuideCtaLabel,
} from "@/app/site-config";

export const metadata: Metadata = buildPageMetadata({
  title: "Notario digital vs perito digital: que fija uno y que analiza el otro",
  description:
    "Articulo aplicado sobre diferencias entre dejar constancia de un estado digital y realizar una lectura tecnica sobre origen, secuencia, integridad y alcance documental.",
  path: "/recursos/articulos/notario-digital-vs-perito-digital",
  type: "article",
});

export default function NotaryVsExpertArticlePage() {
  return (
    <>
      <PageHero
        eyebrow="Articulo aplicado"
        title="Notario digital vs perito digital: que fija uno y que analiza el otro"
        subtitle="Una pieza para aclarar una confusion frecuente: dejar constancia de una pantalla, un contenido o un acceso no equivale por si solo a leer tecnicamente el caso ni a valorar que alcance documental tiene de verdad."
        primaryAction={{ href: "#lectura", label: "Leer articulo" }}
        secondaryAction={{ href: "/contacto", label: contactPageCtaLabel }}
        stats={[
          { value: "7 min", label: "Lectura estimada" },
          { value: "Util", label: "Pieza pensada para despachos y decisores" },
          { value: "Marco", label: "Fijacion frente a analisis" },
        ]}
        notes={[
          "La pieza evita oposiciones artificiales: en algunos asuntos ambas intervenciones pueden ser complementarias.",
          "El foco esta en que problema resuelve cada una y por que llegar tarde suele empobrecer ambas.",
        ]}
        visual={
          <ImagePanel
            src="/images/slots/slot-documental.svg"
            alt="Pantalla, informe y documentacion para explicar diferencias entre fijacion documental y analisis pericial"
            eyebrow="Documento y lectura"
            title="Fijar un estado digital ayuda. Analizar su alcance tecnico es otra capa distinta"
            description="Una consulta mejor planteada distingue entre dejar constancia de algo visible y estudiar si ese material conserva contexto, secuencia e integridad suficiente."
            tags={["Despachos", "Documento", "Lectura tecnica"]}
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
                { label: "Notario digital vs perito digital" },
              ]}
            />
            <EditorialMetaStrip
              items={[
                { label: "Formato", value: "Articulo aplicado" },
                { label: "Tema", value: "Fijacion de estado digital frente a lectura tecnica y pericial" },
                { label: "Dirigido a", value: "Despachos, decisores y consultas con documentacion digital" },
                { label: "Continuidad", value: "Conecta con revision tecnica, preservacion y documentos electronicos" },
              ]}
            />

            <ProseCard>
              <p>
                En consultas con componente digital aparece con frecuencia una pregunta mal formulada:
                si ya existe una actuacion notarial o una constatacion de pantalla, que puede aportar
                todavia una lectura pericial. La respuesta util no pasa por enfrentar figuras. Pasa
                por distinguir funciones.
              </p>
              <p>
                En terminos prudentes, una actuacion orientada a dejar constancia puede ayudar a fijar
                un estado visible en un momento concreto. Una lectura pericial o tecnica se mueve en
                otro plano: origen del material, secuencia, integridad razonable, metadatos, relacion
                con otras piezas y limites de lo que realmente conviene afirmar.
              </p>

              <h2>Por que conviene separar fijacion y analisis</h2>
              <p>
                Un caso digital rara vez se agota en una captura, una URL o un documento mostrado en
                pantalla. Lo que suele cambiar su lectura es el conjunto:
              </p>
              <ul>
                <li>de donde sale el material;</li>
                <li>cuando aparece dentro de la secuencia;</li>
                <li>que versiones o transformaciones ha sufrido;</li>
                <li>con que otras piezas debe leerse de forma conjunta.</li>
              </ul>
              <blockquote>
                Fijar un estado visible puede ser util. Determinar que peso tiene dentro del caso es
                otro trabajo distinto.
              </blockquote>

              <h2>Que suele aportar una actuacion de constancia</h2>
              <p>
                Puede resultar especialmente util cuando hace falta dejar documentado que cierto
                contenido, acceso, pagina o entorno visible existia de una determinada manera en una
                fecha concreta. Esa capa ayuda a no depender solo del relato posterior.
              </p>
              <p>
                Pero esa constatacion no responde por si sola a preguntas como estas: si el contenido
                fue alterado antes, si el PDF que se ve conserva sus propiedades originales, si una
                conversacion esta completa, si varias piezas pertenecen a la misma secuencia o si lo
                visible admite una inferencia mas fuerte de la que parece a simple vista.
              </p>

              <h2>Que suele aportar una lectura pericial o tecnica</h2>
              <h3>Contextualizar el material</h3>
              <p>
                No solo importa que algo exista. Importa de donde sale, como se obtuvo y con que otras
                piezas guarda continuidad.
              </p>

              <h3>Revisar integridad y transformaciones</h3>
              <p>
                En documentos, mensajeria, correo o PDFs, la pregunta tecnica suele ser si el material
                ha llegado como original, como copia de trabajo, como exportacion parcial o como
                captura ya descontextualizada.
              </p>

              <h3>Delimitar que puede sostenerse</h3>
              <p>
                Parte del valor pericial esta en poner freno donde hace falta: separar lo observable,
                lo que funciona como patron y lo que todavia necesitara soporte adicional.
              </p>

              <h2>Errores frecuentes cuando esta diferencia se plantea tarde</h2>
              <ul>
                <li>Creer que una pantalla fijada ya resuelve el problema de fondo.</li>
                <li>Intentar suplir con constatacion una preservacion pobre del material base.</li>
                <li>Aportar solo capturas de un documento o de una conversacion ya transformada.</li>
                <li>Confundir apariencia visible con validez documental o alcance probatorio.</li>
              </ul>
              <p>
                En esos escenarios, la dificultad no es solo tecnica. Tambien es expositiva: el caso
                llega con una capa de seguridad aparente que puede no coincidir con la calidad real del
                material.
              </p>

              <h2>Cuando ambas capas pueden ser complementarias</h2>
              <p>
                Hay asuntos en los que conviene distinguir claramente el momento de fijar un estado
                visible y el momento de analizar tecnicamente lo que ese estado significa. Una consulta
                temprana ayuda precisamente a eso: decidir que conviene preservar, que se debe fijar y
                que preguntas tecnicas deben responderse despues con mas calma.
              </p>

              <h2>Cierre</h2>
              <p>
                La diferencia entre notario digital y perito digital no es una disputa de etiquetas.
                Es una diferencia de funcion. Uno puede ayudar a dejar constancia de un estado. El otro
                aporta lectura tecnica, secuencia, integridad y limites. Cuando esa distincion se hace
                bien y a tiempo, el caso gana claridad. Cuando se confunde, a menudo se llega tarde y
                con expectativas peor ajustadas.
              </p>
            </ProseCard>
          </div>

          <div className="grid gap-4">
            <SurfaceCard
              title="Lectura de continuidad"
              description="La guia sobre revision tecnica ayuda a aterrizar que puede analizarse despues de una primera fijacion documental."
            >
              <TagList items={["Revision tecnica", "Alcance", "Metodo"]} />
              <Link className="inline-link" href="/recursos/guias/revision-tecnica-evidencia-digital">
                {technicalGuideCtaLabel}
              </Link>
            </SurfaceCard>

            <SurfaceCard
              title="Si el caso ya esta en marcha"
              description="Una consulta temprana ayuda a decidir que conviene preservar, que se ha transformado ya y que lectura tecnica puede seguir siendo util."
            >
              <TagList items={["Consulta", "Preservacion", "Documento"]} />
              <Link className="inline-link" href="/contacto">
                {contactPageCtaLabel}
              </Link>
            </SurfaceCard>

            <SurfaceCard
              title="Volver al hub"
              description="Recursos reune esta pieza con guias sobre preservacion, documentos electronicos, mensajeria, fraude y casos tipo anonimizados."
            >
              <TagList items={["Recursos", "Criterio", "Continuidad"]} />
              <Link className="inline-link" href="/recursos">
                {resourcesHubReturnLabel}
              </Link>
            </SurfaceCard>
          </div>
        </Container>
      </Section>

      <ActionBanner
        eyebrow="Continuidad editorial"
        title="Si hace falta distinguir entre fijar un estado digital y analizar su alcance real, conviene plantearlo antes de que el material pierda contexto"
        description="La utilidad de una consulta inicial no esta en sobredimensionar el problema, sino en separar bien preservacion, fijacion documental y lectura tecnica antes de que se mezclen."
        primaryAction={{ href: "/contacto", label: contactPageCtaLabel }}
        secondaryAction={{ href: "/recursos", label: resourcesHubReturnLabel }}
        note="Parte del valor de una revision experta consiste en formular mejor la pregunta, no solo en responderla."
        highlights={[
          "Pieza pensada para despachos y consultas donde la documentacion digital ya existe, pero aun no esta bien leida.",
          "Puente directo entre preservacion, fijacion de estado y necesidad real de asesoramiento pericial.",
        ]}
      />
    </>
  );
}
