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
import { caseStudyCtaLabel, contactPageCtaLabel, resourcesHubReturnLabel } from "@/app/site-config";

export const metadata: Metadata = buildPageMetadata({
  title: "Cuenta instrumental, smurfing y operativa circular: caso tipo",
  description:
    "Caso tipo anonimo sobre cuenta instrumental, ingresos fragmentados y una lectura tecnica que ordena secuencia, patron y limites sin forzar conclusiones excesivas.",
  path: "/recursos/casos/cuenta-instrumental-smurfing-operativa-circular",
  type: "article",
});

export default function InstrumentalAccountCasePage() {
  return (
    <>
      <PageHero
        eyebrow="Caso tipo"
        title="Cuenta instrumental, smurfing y operativa circular"
        subtitle="Un caso anonimo para mostrar como varios ingresos fragmentados y movimientos de paso dejan de ser apuntes sueltos cuando se leen dentro de una secuencia mas amplia, pero sin convertir el patron en una atribucion automatica."
        primaryAction={{ href: "#caso", label: caseStudyCtaLabel }}
        secondaryAction={{ href: "/contacto", label: contactPageCtaLabel }}
        stats={[
          { value: "6 min", label: "Lectura estimada" },
          { value: "Anonimo", label: "Patron editorial seguro" },
          { value: "Trazable", label: "Secuencia, redistribucion y limites" },
        ]}
        notes={[
          "La pieza no replica un expediente. Resume un patron recurrente convertido en caso tipo publicable y prudente.",
          "El valor no esta en dramatizar la operativa, sino en explicar por que una lectura temprana cambia la calidad del caso.",
        ]}
        visual={
          <ImagePanel
            src="/images/services/services-detail.svg"
            alt="Mesa de trabajo con movimientos, notas y documentacion sobre un caso tipo de cuenta instrumental"
            eyebrow="Patron financiero"
            title="Un ingreso aislado puede decir poco. La funcion de una cuenta dentro de la secuencia puede decir mucho mas"
            description="La pieza muestra por que fraccionamiento, redistribucion y operativa circular deben leerse con contexto, trazabilidad y limites expresos."
            tags={["Cuenta instrumental", "Smurfing", "Trazabilidad"]}
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
                { label: "Cuenta instrumental y operativa circular" },
              ]}
            />
            <EditorialMetaStrip
              items={[
                { label: "Formato", value: "Caso tipo anonimo" },
                { label: "Tema", value: "Cuenta instrumental, fraccionamiento y lectura prudente del patron" },
                { label: "Dirigido a", value: "Fraude bancario, trazabilidad y consultas con secuencia financiera" },
                { label: "Continuidad", value: "Conecta con guia de cuenta instrumental y servicio de fraude" },
              ]}
            />

            <ProseCard>
              <p>
                Este caso tipo resume un patron recurrente: varias operaciones de cuantia similar
                llegan a una cuenta intermedia en un periodo reducido y despues se redistribuyen con
                rapidez hacia otros destinos. El problema real no era confirmar que existian
                movimientos. Era valorar si esos movimientos, leidos con otras piezas, permitian
                describir una operativa con mas consistencia que una simple lista de ingresos y
                salidas.
              </p>

              <h2>Material de partida</h2>
              <p>
                Este tipo de asunto suele llegar con extractos parciales, referencias de movimientos,
                capturas de banca online, justificantes sueltos, hojas rehechas a mano y mensajes o
                correos donde se discuten pagos concretos. No siempre falta informacion. Lo que suele
                faltar es continuidad entre las piezas.
              </p>

              <h2>Donde aparecia la dificultad real</h2>
              <p>
                El caso no estaba vacio de datos. Estaba sobredeterminado por una conclusion prematura.
                Importes fragmentados, entradas y salidas muy proximas, mezcla de capturas y notas, y
                tendencia a leer intencionalidad antes de fijar secuencia. En ese punto, el riesgo no
                era no ver nada. El riesgo era ver demasiado pronto.
              </p>

              <h2>Que suele revisarse</h2>
              <p>
                La lectura util suele empezar por exportaciones o extractos con mejor continuidad,
                cuantias repetidas, ventanas temporales cortas, destinatarios de salida, conceptos de
                operacion, comunicaciones asociadas y cualquier referencia que permita cruzar cargos,
                ingresos y redistribucion dentro de la misma cronologia.
              </p>

              <h2>Herramientas o familias de herramientas aplicables</h2>
              <p>
                Aqui no manda una herramienta espectacular, sino una combinacion sobria de trabajo:
                extractos exportados en formato estructurado cuando existen, tablas de correlacion,
                cronologias comparadas, hashes de documentos si se conservan ficheros originales y,
                cuando el caso incluye correo o dispositivos, revisiones complementarias de cabeceras,
                artefactos o copias forenses con familias como FTK Imager o Magnet AXIOM.
              </p>

              <h2>Que hallazgos permite obtener</h2>
              <p>
                Ese trabajo puede dejar visible algo mucho mas util que una sospecha difusa: patrones
                de fraccionamiento, entradas y salidas demasiado proximas, cuentas que actuan como
                paso intermedio, redistribuciones recurrentes y relaciones temporales que no se
                apreciaban cuando todo estaba reducido a capturas sueltas.
              </p>

              <h2>Que limite tecnico sigue existiendo</h2>
              <p>
                Incluso con buena secuencia, un patron financiero visible no equivale por si solo a
                una atribucion cerrada sobre intencion, autoria o encaje completo de la operativa. La
                lectura pericial puede describir funcion aparente, recurrencia y consistencia del
                patron, pero debe dejar claro donde sigue haciendo falta soporte adicional.
              </p>

              <h2>Que salida documental puede producirse</h2>
              <p>
                La salida de mayor valor suele ser una cronologia clara, un cuadro de movimientos con
                relaciones visibles, una nota tecnica sobre fraccionamiento y redistribucion o un
                informe que explique con prudencia por que la cuenta aparece como instrumental dentro
                del conjunto y no solo dentro de una operacion aislada.
              </p>
              <blockquote>
                En fraude bancario y trazabilidad, una lectura precipitada suele inflar el patron. Una
                lectura ordenada suele volverlo mucho mas util.
              </blockquote>

              <h2>Utilidad profesional legitima</h2>
              <p>
                Este patron ayuda a entender cuando encajan mejor la investigacion digital con
                trazabilidad, la revision tecnica de secuencias financieras y documentales y los
                informes que necesitan mostrar patron, secuencia y limites a la vez.
              </p>

              <h2>Cierre</h2>
              <p>
                Este caso tipo no se publica como reconstruccion literal de un expediente, sino como
                ejemplo de un problema frecuente: datos suficientes para intuir un patron, pero mal
                ordenados para sostenerlo bien. En ese punto, una revision a tiempo no garantiza una
                conclusion absoluta, pero si evita errores de lectura y mejora mucho la calidad del
                caso que finalmente puede explicarse.
              </p>
            </ProseCard>
          </div>

          <div className="grid gap-4">
            <SurfaceCard
              title="Guia relacionada"
              description="La guia publica desarrolla con mas detalle que se entiende aqui por cuenta instrumental y por que el fraccionamiento exige lectura prudente."
            >
              <TagList items={["Guia", "Smurfing", "Patron financiero"]} />
              <Link className="inline-link" href="/recursos/guias/cuenta-instrumental-fraccionamiento">
                Leer guia aplicada
              </Link>
            </SurfaceCard>

            <SurfaceCard
              title="Relacion con servicios"
              description="Este patron conecta de forma directa con fraude tecnologico, trazabilidad, secuencias financieras y salida documental para terceros."
            >
              <TagList items={["Fraude", "Trazabilidad", "Informe"]} />
              <Link className="inline-link" href="/servicios/fraude-tecnologico-trazabilidad">
                Ver servicio principal
              </Link>
            </SurfaceCard>

            <SurfaceCard
              title="Volver al hub"
              description="El resto del hub amplia esta linea con fraude e-commerce, preservacion, documentos electronicos y OSINT con limites."
            >
              <TagList items={["Recursos", "Caso tipo", "Continuidad"]} />
              <Link className="inline-link" href="/recursos">
                {resourcesHubReturnLabel}
              </Link>
            </SurfaceCard>
          </div>
        </Container>
      </Section>

      <ActionBanner
        eyebrow="Continuidad editorial"
        title="Si el patron financiero ya apunta a una secuencia mas amplia, conviene revisar antes de convertirlo en una conclusion inflada"
        description="La utilidad de una consulta temprana en trazabilidad no esta en prometer atribuciones automaticas, sino en ordenar movimientos, materiales y relaciones antes de que el caso se discuta sobre una base pobre."
        primaryAction={{ href: "/contacto", label: contactPageCtaLabel }}
        secondaryAction={{ href: "/servicios/fraude-tecnologico-trazabilidad", label: "Ver servicio relacionado" }}
        note="En secuencias financieras y digitales, la calidad documental del punto de partida condiciona casi todo lo demas."
        highlights={[
          "Caso tipo pensado para hacer reconocible un patron frecuente sin exponer ningun dato sensible.",
          "Puente directo entre fraude bancario, smurfing, operativa circular y necesidad de lectura pericial temprana.",
        ]}
      />
    </>
  );
}
