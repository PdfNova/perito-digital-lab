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
  title: "Firma electronica valida vs firma visual insertada en PDF",
  description:
    "Guia tecnica para distinguir entre un PDF con apariencia firmada y un documento cuya firma electronica, revisiones y contexto permiten una lectura documental mas seria.",
  path: "/recursos/guias/firma-electronica-pdf-validez-documental",
  type: "article",
});

export default function PdfSignatureGuidePage() {
  return (
    <>
      <PageHero
        eyebrow="Guia tecnica"
        title="Firma electronica valida vs firma visual insertada en PDF"
        subtitle="Una guia para separar una confusion habitual: que un PDF muestre una firma, un sello o una rubrica visible no significa por si solo que conserve la misma fuerza documental que un documento electronico con firma verificable."
        primaryAction={{ href: "#guia", label: "Leer guia" }}
        secondaryAction={{ href: "/contacto", label: contactPageCtaLabel }}
        stats={[
          { value: "8 min", label: "Lectura estimada" },
          { value: "PDF", label: "Documento, revisiones y contexto" },
          { value: "Util", label: "Guia de lectura para despachos y decisores" },
        ]}
        notes={[
          "La pieza evita afirmaciones cerradas sobre validez juridica abstracta. Se centra en lectura tecnica y valor documental.",
          "El foco esta en distinguir apariencia visual, estructura del documento y trazabilidad de su generacion.",
        ]}
        visual={
          <ImagePanel
            src="/images/slots/slot-documental.svg"
            alt="PDF, firma visible y documento tecnico para una guia sobre firma electronica y validez documental"
            eyebrow="Documento electronico"
            title="La apariencia de una firma puede impresionar. Lo decisivo suele estar en la estructura y el contexto del documento"
            description="La lectura tecnica revisa si hay contenedor verificable, revisiones, transformaciones y suficientes elementos para explicar que peso tiene realmente el PDF."
            tags={["PDF", "Firma electronica", "Valor documental"]}
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
                { label: "Firma electronica y PDF" },
              ]}
            />
            <EditorialMetaStrip
              items={[
                { label: "Formato", value: "Guia tecnica aplicada" },
                { label: "Tema", value: "Firma electronica, PDF y lectura documental prudente" },
                { label: "Dirigido a", value: "Despachos, decisores y consultas sobre documentos digitales" },
                { label: "Continuidad", value: "Conecta con valor documental, informes y contacto" },
              ]}
            />

            <ProseCard>
              <p>
                En documentos digitales es frecuente que la discusion empiece demasiado pronto por la
                parte visual: si aparece una rubrica, un sello o una caja de firma, se da por hecho
                que el problema ya esta resuelto. A veces ocurre lo contrario: se rechaza un documento
                por su aspecto sin haber revisado todavia que estructura conserva en realidad.
              </p>

              <h2>Material de partida habitual</h2>
              <p>
                Este tipo de controversia suele llegar con un PDF reenviado, alguna captura de la zona
                firmada, versiones impresas y escaneadas, correos donde se adjunto el archivo y, en
                ocasiones, un CSV o referencia de verificacion. La dificultad no esta solo en ver una
                firma. Esta en saber que clase de archivo sigue existiendo y cual ya es solo copia de
                trabajo.
              </p>

              <h2>Por que la apariencia del PDF puede inducir a error</h2>
              <p>
                Un PDF puede mostrar una firma visible y, sin embargo, haber llegado como copia plana,
                impresion escaneada, exportacion posterior o documento regrabado varias veces. Tambien
                puede ocurrir que un documento mantenga una firma electronica verificable aunque su
                lectura superficial resulte menos evidente para quien lo recibe.
              </p>
              <p>
                La pregunta util no es solo si se ve una firma. Es que clase de documento tenemos
                delante y que conserva todavia sobre su generacion, revisiones y relacion con la fuente
                original.
              </p>

              <h2>Que suele revisarse</h2>
              <p>
                La lectura prudente suele revisar si existe firma electronica verificable en el propio
                documento, si el archivo muestra indicios de reimpresion o aplanado, si conserva
                metadatos, revisiones o versiones sucesivas, si se aporta como original digital o como
                copia posterior y si puede relacionarse con correo, expediente o flujo de envio.
              </p>

              <h2>Herramientas o familias de herramientas aplicables</h2>
              <p>
                Aqui importan mas las tecnicas que el nombre comercial: validacion criptografica del
                PDF, comprobacion de certificados o CSV cuando existe, revision de metadatos,
                comparacion de versiones, hashes para integridad y contraste con correos o repositorios
                desde los que salio el archivo. Si solo queda una impresion escaneada, la caja de
                herramientas cambia porque buena parte de la estructura original ya no esta.
              </p>

              <h2>Que hallazgos permite obtener</h2>
              <p>
                Ese trabajo puede aclarar si el documento conserva una firma verificable, si la firma
                es solo visual, si el archivo fue rehecho, si existen versiones inconsistentes, si el
                PDF mantiene relacion demostrable con su fuente y que peso documental cabe darle dentro
                del caso.
              </p>

              <h2>Que limite tecnico sigue existiendo</h2>
              <p>
                Si el original digital ya no existe, si solo quedan capturas o una impresion
                escaneada, la revision puede seguir describiendo mucho del problema, pero con menos
                capacidad para pronunciarse sobre integridad criptografica, historial de versiones o
                fuerza documental completa del archivo de origen.
              </p>

              <h2>Que salida documental puede producirse</h2>
              <p>
                La salida mas util suele ser una nota tecnica sobre verificabilidad e integridad, una
                comparativa de versiones, un cuadro documental de origen y transformaciones o un
                informe que explique a terceros por que un PDF aparentemente firmado puede tener un
                alcance muy distinto segun el artefacto que realmente se conserva.
              </p>
              <blockquote>
                Una firma visible puede ser solo una parte del documento. No necesariamente la que mas
                valor aporta por si sola.
              </blockquote>

              <h2>Errores frecuentes que debilitan estos asuntos</h2>
              <h3>Trabajar solo con pantallas o recortes</h3>
              <p>
                Una captura de la zona firmada puede servir como referencia, pero no sustituye el
                examen del archivo ni permite leer bien revisiones, estructura o procedencia.
              </p>

              <h3>Imprimir, escanear y volver a circular el documento</h3>
              <p>
                Esa practica puede conservar una imagen del contenido, pero suele empobrecer mucho la
                capacidad de revisar propiedades del archivo, continuidad documental y relacion con la
                version digital de origen.
              </p>

              <h3>Confundir cuestion formal con lectura tecnica</h3>
              <p>
                Una revision seria no se limita a decir si algo parece firmado. Intenta explicar que
                puede sostenerse a partir del documento disponible y que parte del analisis depende de
                recuperar mejor su contexto.
              </p>

              <h2>Que puede aportar una revision experta</h2>
              <p>
                No siempre permite responder de forma absoluta a todas las preguntas del caso, pero si
                suele ayudar a fijar algo mucho mas util:
              </p>
              <ul>
                <li>que clase de archivo se esta revisando realmente;</li>
                <li>si conserva elementos tecnicos relevantes o si ya llega empobrecido;</li>
                <li>que relacion mantiene con otras versiones o con su flujo de envio;</li>
                <li>que alcance prudente cabe atribuirle dentro del conjunto documental.</li>
              </ul>

              <h2>Cuando conviene pedir esa lectura cuanto antes</h2>
              <p>
                Especialmente cuando el asunto ya incluye versiones reenviadas, PDFs impresos y
                escaneados, dudas sobre transformacion posterior, imagenes incrustadas, firma visual
                sin mas soporte visible o necesidad de explicar a terceros que peso tiene de verdad el
                documento.
              </p>

              <h2>Cierre</h2>
              <p>
                En documentos digitales, la apariencia no agota el problema. Una firma visual puede
                acompañar un documento fuerte, uno debil o uno ya transformado. Por eso la lectura
                tecnica importa tanto: ayuda a separar lo que se ve, lo que el archivo conserva y lo
                que todavia puede sostenerse con criterio documental.
              </p>
            </ProseCard>
          </div>

          <div className="grid gap-4">
            <SurfaceCard
              title="Relacion con valor documental"
              description="Antes de discutir sobre la firma visible, conviene tener claro por que contexto, integridad y trazabilidad condicionan cualquier lectura del PDF."
            >
              <TagList items={["Documento", "Integridad", "Contexto"]} />
              <Link className="inline-link" href="/recursos/articulos/valor-documental-evidencia-digital">
                Leer articulo base
              </Link>
            </SurfaceCard>

            <SurfaceCard
              title="Consulta temprana"
              description="Si ya existen varias versiones, reenvios o documentos impresos y escaneados, conviene ordenar cuanto antes que archivo conserva mas valor."
            >
              <TagList items={["PDF", "Versiones", "Consulta"]} />
              <Link className="inline-link" href="/contacto">
                {contactPageCtaLabel}
              </Link>
            </SurfaceCard>

            <SurfaceCard
              title="Volver al hub"
              description="El hub editorial reune esta guia con piezas sobre preservacion, OSINT, fraude, cuentas instrumentales y lectura de mensajeria."
            >
              <TagList items={["Recursos", "Guias", "Continuidad"]} />
              <Link className="inline-link" href="/recursos">
                {resourcesHubReturnLabel}
              </Link>
            </SurfaceCard>
          </div>
        </Container>
      </Section>

      <ActionBanner
        eyebrow="Continuidad editorial"
        title="Si el documento ya genera dudas sobre firma, versiones o transformaciones, conviene revisarlo antes de seguir perdiendo estructura"
        description="La utilidad de una lectura tecnica en PDFs no esta en dramatizar el archivo, sino en separar apariencia visual, origen, revisiones y alcance documental antes de que el caso se discuta sobre una base demasiado pobre."
        primaryAction={{ href: "/contacto", label: contactPageCtaLabel }}
        secondaryAction={{ href: "/recursos", label: resourcesHubReturnLabel }}
        note="En documentos electronicos, llegar con el archivo adecuado suele cambiar mas que cualquier explicacion posterior."
        highlights={[
          "Guia pensada para consultas donde un PDF ya esta en el centro de la controversia documental.",
          "Puente directo entre documento, integridad del archivo y necesidad de una lectura pericial prudente.",
        ]}
      />
    </>
  );
}
