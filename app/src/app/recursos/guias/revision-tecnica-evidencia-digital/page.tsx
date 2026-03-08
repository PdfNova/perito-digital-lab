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
  title: "Revision tecnica de evidencia digital: alcance y limites",
  description:
    "Recurso tecnico sobre lo que una revision de evidencia digital puede aportar realmente, sus limites y como mejora la credibilidad un enfoque prudente.",
  path: "/recursos/guias/revision-tecnica-evidencia-digital",
  type: "article",
});

export default function TechnicalReviewGuidePage() {
  return (
    <>
      <PageHero
        eyebrow="Guia tecnica"
        title="Revision tecnica de evidencia digital: alcance y limites"
        subtitle="Una pieza orientada a explicar que puede aportar realmente una revision tecnica, que no conviene pedirle y por que la claridad sobre limites mejora la credibilidad del resultado."
        primaryAction={{ href: "#guia", label: "Leer recurso" }}
        secondaryAction={{ href: "/contacto", label: contactPageCtaLabel }}
        stats={[
          { value: "7 min", label: "Lectura estimada" },
          { value: "Nuevo", label: "Segundo lote editorial" },
          { value: "Guia", label: "Recurso orientado a conversion" },
        ]}
        notes={[
          "Pensado para alinear expectativas antes de solicitar una revision tecnica.",
          "El foco esta en alcance real, utilidad documental y limites razonables del analisis.",
        ]}
        visual={
          <ImagePanel
            src="/images/resources/resources-featured.svg"
            alt="Recurso tecnico sobre revision de evidencia digital con informe, monitor y notas metodologicas"
            eyebrow="Alcance real"
            title="Leer mejor una revision tecnica empieza por entender bien sus limites"
            description="Una revision rigurosa no convierte cualquier material en certeza. Ordena, relaciona y explica mejor hasta donde puede sostenerse el analisis."
            tags={["Revision tecnica", "Limites", "Utilidad documental"]}
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
                { label: "Revision tecnica" },
              ]}
            />
            <EditorialMetaStrip
              items={[
                { label: "Formato", value: "Guia tecnica publica" },
                { label: "Tema", value: "Alcance y limites de una revision tecnica" },
                { label: "Dirigido a", value: "Perfiles juridicos, decisores y consultas cualificadas" },
                { label: "Continuidad", value: "Conecta con valor documental, preservacion y contacto" },
              ]}
            />

            <ProseCard>
              <p>
                Una revision tecnica no sirve para prometer certezas absolutas ni para convertir
                cualquier indicio en una conclusion fuerte. Su utilidad real esta en ordenar
                materiales, leer relaciones, delimitar que puede sostenerse con prudencia y explicar
                con claridad donde empiezan los limites. En contextos con componente digital, esa
                combinacion de metodo, alcance y lenguaje importa tanto como el propio hallazgo.
              </p>

              <h2>Por que conviene hablar primero de alcance</h2>
              <p>
                Cuando una necesidad llega a una revision tecnica, suele hacerlo con una expectativa
                implicita: que el analisis aclare por completo lo ocurrido. En algunos casos eso es
                posible hasta cierto punto. En otros, lo que puede conseguirse es mas acotado.
              </p>
              <ul>
                <li>Que materiales existen.</li>
                <li>Que puede leerse a partir de ellos.</li>
                <li>Que conclusion seria razonable sostener ante terceros.</li>
              </ul>
              <blockquote>
                Hablar de alcance desde el inicio no debilita el trabajo. Lo hace mas creible.
              </blockquote>

              <h2>Que si puede aportar una revision tecnica</h2>
              <h3>Ordenar el punto de partida</h3>
              <p>
                En muchos casos, el primer valor de una revision no es una conclusion final, sino una
                reorganizacion clara del problema. Archivos, capturas, correos, registros o
                cronologias dispersas pasan a leerse dentro de una estructura mas coherente.
              </p>

              <h3>Detectar relaciones y secuencias</h3>
              <p>
                La revision tecnica puede ayudar a identificar como se conectan distintos materiales,
                que eventos parecen guardar continuidad y que elementos merecen una lectura conjunta.
              </p>

              <h3>Delimitar observaciones utiles</h3>
              <p>
                No siempre hace falta llegar a una afirmacion maxima para generar valor. A veces lo
                mas util es fijar con precision que se observa, que secuencia resulta plausible, que
                huecos siguen existiendo y que piezas conservan mejor valor documental.
              </p>

              <h3>Traducir el analisis a una salida comprensible</h3>
              <p>
                Una parte central del trabajo consiste en convertir una lectura tecnica en una
                explicacion ordenada: nota tecnica, cronologia, esquema de relaciones o informe claro
                para terceros no tecnicos.
              </p>

              <h2>Que no conviene pedir a una revision tecnica</h2>
              <h3>Certezas que los materiales no sostienen</h3>
              <p>
                Si las fuentes son parciales, si la conservacion inicial fue deficiente o si falta
                contexto, el analisis no deberia prometer mas de lo que esas limitaciones permiten.
              </p>

              <h3>Atribuciones automaticas</h3>
              <p>
                Relacionar indicios, activos o patrones no equivale por si solo a una atribucion
                cerrada. En especial cuando el material procede de fuentes abiertas o secuencias
                incompletas, la prudencia forma parte del rigor.
              </p>

              <h3>Confirmaciones absolutas sobre intencion o autoria</h3>
              <p>
                Una parte del trabajo consiste precisamente en distinguir entre lo observable, lo
                correlacionable y lo que solo podria plantearse como inferencia limitada.
              </p>

              <h2>De que depende realmente el valor de la revision</h2>
              <ul>
                <li>Calidad del material de partida.</li>
                <li>Contexto disponible.</li>
                <li>Delimitacion del objetivo.</li>
                <li>Claridad al documentar limites.</li>
              </ul>
              <p>
                Una revision gana credibilidad cuando deja claro que puede afirmar, que solo puede
                sugerir y que queda fuera de alcance.
              </p>

              <h2>Como mejora la credibilidad un enfoque con limites</h2>
              <p>
                Existe una idea equivocada segun la cual explicar limites resta fuerza comercial. En
                realidad ocurre lo contrario. Cuando una revision tecnica distingue con precision entre
                observacion, correlacion e interpretacion, se vuelve mas util para decidir mejor.
              </p>
              <ul>
                <li>Mejora la lectura del caso.</li>
                <li>Mejora la utilidad del informe.</li>
                <li>Mejora la conversacion entre perfiles tecnicos y no tecnicos.</li>
                <li>Refuerza la confianza en el metodo aplicado.</li>
              </ul>

              <h2>Preguntas utiles antes de solicitar una revision</h2>
              <ol>
                <li>Que materiales existen realmente.</li>
                <li>En que estado de orden o preservacion se encuentran.</li>
                <li>Que se necesita aclarar exactamente.</li>
                <li>Que salida final seria util.</li>
              </ol>

              <h2>Cierre</h2>
              <p>
                Una revision tecnica rigurosa no demuestra cualquier cosa. Su valor real esta en leer
                mejor, delimitar mejor y explicar mejor. Cuando el trabajo se apoya en materiales
                suficientes, contexto razonable y un lenguaje prudente, la salida resulta mucho mas
                util que una conclusion inflada y dificil de defender.
              </p>
            </ProseCard>
          </div>

          <div className="grid gap-4">
            <SurfaceCard
              title="Lecturas que preparan mejor esta guia"
              description="Estas piezas ayudan a llegar a la revision tecnica con un marco previo mas claro."
            >
              <TagList items={["Valor documental", "Preservacion", "Metodo"]} />
              <Link className="inline-link" href="/recursos/articulos/valor-documental-evidencia-digital">
                Leer valor documental
              </Link>
              <Link className="inline-link" href="/recursos/articulos/preservacion-inicial-evidencia-digital">
                Leer preservacion inicial
              </Link>
            </SurfaceCard>

            <SurfaceCard
              title="Piezas breves derivadas"
              description="El segundo lote incorpora dos cortes verticales orientados a explicar alcance real y valor de los limites."
            >
              <TagList items={["Short 09", "Short 10", "Vertical"]} />
              <p className="text-sm leading-7 text-[var(--color-muted)]">
                El contenido breve deriva de esta misma pieza para reforzar autoridad y mejorar la
                entrada a contacto.
              </p>
            </SurfaceCard>
          </div>
        </Container>
      </Section>

      <ActionBanner
        eyebrow="Continuidad editorial"
        title="Si el objetivo es valorar alcance real y no solo acumular materiales, el siguiente paso es plantear la revision con contexto suficiente"
        description="Esta guia ayuda a ajustar expectativas antes del contacto. A partir de ahi, la conversacion inicial puede centrarse en materiales disponibles, objetivo documental y limites razonables del trabajo."
        primaryAction={{ href: "/contacto", label: contactPageCtaLabel }}
        secondaryAction={{ href: "/recursos", label: resourcesHubReturnLabel }}
        note="Una consulta mejor planteada mejora tanto el encaje comercial como la utilidad tecnica de la revision."
        highlights={[
          "Recurso tecnico orientado a conversion cualificada.",
          "Puente directo entre contenido editorial, metodologia y contacto.",
        ]}
      />
    </>
  );
}
