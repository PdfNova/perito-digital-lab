import type { Metadata } from "next";
import Link from "next/link";
import {
  ActionBanner,
  Container,
  EditorialMetaStrip,
  ImagePanel,
  PageHero,
  ProseCard,
  Section,
  SurfaceCard,
  TagList,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Preservacion inicial de evidencia digital",
  description:
    "Articulo sobre errores frecuentes de preservacion inicial y criterios minimos para conservar mejor informacion digital desde el principio.",
};

export default function InitialPreservationArticlePage() {
  return (
    <>
      <PageHero
        eyebrow="Articulo"
        title="Preservacion inicial de evidencia digital"
        subtitle="Una guia breve para entender por que guardar no es lo mismo que preservar y que errores suelen empobrecer el valor de la informacion desde las primeras fases."
        primaryAction={{ href: "#lectura", label: "Leer articulo" }}
        secondaryAction={{
          href: "/recursos/articulos/valor-documental-evidencia-digital",
          label: "Ver articulo anterior",
        }}
        stats={[
          { value: "6 min", label: "Lectura estimada" },
          { value: "Practica", label: "Pieza util y compartible" },
          { value: "Inicial", label: "Fase critica del caso" },
        ]}
        notes={[
          "Pensado para ordenar el punto de partida antes de una revision tecnica o documental.",
          "El objetivo es mejorar claridad, no convertir la fase inicial en un procedimiento complejo.",
        ]}
        visual={
          <ImagePanel
            src="/images/resources/resources-library.svg"
            alt="Documentacion tecnica organizada para preservar mejor informacion digital desde la fase inicial"
            eyebrow="Preservacion"
            title="Conservar mejor desde el inicio mejora la lectura posterior del caso"
            description="El punto de partida importa: orden, contexto y continuidad reducen friccion y hacen mas legible cualquier revision posterior."
            tags={["Guia practica", "Orden", "Continuidad"]}
            priority
            aspect="landscape"
          />
        }
      />

      <Section>
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_19rem] lg:items-start">
          <div className="grid gap-6" id="lectura">
            <EditorialMetaStrip
              items={[
                { label: "Formato", value: "Articulo practico" },
                { label: "Tema", value: "Preservacion inicial y errores frecuentes" },
                { label: "Dirigido a", value: "Perfiles juridicos, clientes y decisores" },
                { label: "Continuidad", value: "Complementa el marco sobre valor documental" },
              ]}
            />

            <ProseCard>
              <p>
                En muchos casos, la calidad del analisis posterior depende de decisiones tomadas en
                los primeros minutos o en las primeras horas. Preservar no es solo guardar. Preservar
                implica conservar informacion de una forma que mantenga contexto, orden y legibilidad
                suficiente para una revision tecnica o documental posterior.
              </p>

              <h2>Guardar no es lo mismo que preservar</h2>
              <p>
                Es frecuente pensar que basta con almacenar capturas, reenviar correos o copiar
                archivos a una carpeta para haber resuelto la fase inicial. En realidad, eso solo
                cubre una parte del problema.
              </p>
              <p>
                Guardar significa retener algo. Preservar significa retenerlo sin deteriorar
                innecesariamente su utilidad posterior. Esa diferencia importa porque una misma
                informacion puede llegar al analisis en condiciones muy distintas.
              </p>
              <ul>
                <li>Una conversacion exportada no equivale a varias capturas sueltas.</li>
                <li>
                  Un conjunto de archivos con fechas y origen identificados no equivale a una carpeta
                  con copias mezcladas.
                </li>
                <li>
                  Un enlace documentado con fecha y contexto no equivale a una referencia anotada de
                  memoria.
                </li>
              </ul>
              <blockquote>
                La preservacion inicial no exige sofisticacion excesiva. Exige criterio, orden y
                prudencia.
              </blockquote>

              <h2>Errores frecuentes al inicio de un caso digital</h2>

              <h3>Revisar antes de documentar</h3>
              <p>
                Uno de los fallos mas habituales consiste en abrir, mover o reenviar materiales antes
                de registrar su estado inicial. Esa practica puede alterar el orden, dificultar la
                trazabilidad o hacer mas confusa la explicacion posterior.
              </p>

              <h3>Confiar solo en capturas</h3>
              <p>
                Las capturas pueden ser utiles como apoyo, pero no siempre conservan suficiente
                informacion para una lectura completa. A menudo faltan secuencia, contexto de
                pantalla, identificadores relevantes o relacion con otros elementos.
              </p>

              <h3>Mezclar fuentes sin criterio</h3>
              <p>
                Cuando se juntan mensajes, correos, documentos y enlaces en un mismo bloque sin
                separar origen ni fecha aproximada, la lectura posterior se vuelve mas costosa y menos
                clara.
              </p>

              <h3>Renombrar o reorganizar sin dejar rastro</h3>
              <p>
                Cambiar nombres de archivos, mover carpetas o reconstruir una cronologia de memoria
                puede parecer una mejora organizativa, pero si no queda constancia de ese proceso se
                pierde parte del recorrido documental del material.
              </p>

              <h2>Que conviene preservar primero</h2>

              <h3>1. Identificar fuentes principales</h3>
              <p>
                Antes de recopilar de forma intensiva, conviene identificar de donde sale cada
                material: dispositivo, servicio, cuenta, conversacion, correo o plataforma. Esa
                primera identificacion reduce duplicidades y mejora el orden.
              </p>

              <h3>2. Conservar estructura y contexto</h3>
              <p>
                Siempre que sea posible, es preferible mantener la estructura original del material o
                una exportacion que conserve secuencia y referencias basicas. Cuanta mas continuidad
                se preserve, menos huecos habra luego.
              </p>

              <h3>3. Registrar fecha, procedencia y relacion</h3>
              <p>
                Una nota simple con fecha aproximada, origen y motivo de relevancia puede ahorrar
                mucho tiempo despues. No hace falta convertir la recogida inicial en un informe
                completo, pero si dejar una huella minima y consistente.
              </p>

              <h3>4. Separar original y trabajo</h3>
              <p>
                Cuando se empieza a revisar o clasificar, conviene distinguir entre lo conservado como
                base y las copias de trabajo. Esa separacion reduce confusiones y facilita explicar el
                proceso.
              </p>

              <h2>Que informacion puede perderse por una mala practica</h2>
              <p>
                Una mala preservacion no siempre destruye la utilidad del material, pero suele
                reducirla. Entre las perdidas mas frecuentes estan:
              </p>
              <ul>
                <li>Relacion entre mensajes o eventos.</li>
                <li>Referencias temporales completas.</li>
                <li>Continuidad entre archivos o versiones.</li>
                <li>Datos de contexto que no aparecen en una captura aislada.</li>
                <li>Claridad sobre el origen exacto de cada pieza.</li>
              </ul>

              <h2>Criterios minimos para una preservacion mas util</h2>
              <ol>
                <li>Ordenar por fuente y tipo de material.</li>
                <li>Anotar una referencia temporal basica.</li>
                <li>Evitar cambios innecesarios antes de registrar el estado inicial.</li>
                <li>Conservar versiones de trabajo separadas del material base.</li>
                <li>Mantener un criterio uniforme de nombres y carpetas.</li>
              </ol>
              <p>
                Estos pasos no sustituyen una revision tecnica, pero si mejoran de forma clara la
                calidad del punto de partida.
              </p>

              <h2>Cierre</h2>
              <p>
                Preservar mejor no es una cuestion estetica ni burocratica. Es una manera de proteger
                la utilidad futura de la informacion. Cuando la recogida inicial se hace con orden y
                criterio, el analisis posterior gana claridad, la cronologia resulta mas legible y el
                informe final puede sostenerse con menos friccion.
              </p>
            </ProseCard>
          </div>

          <div className="grid gap-4">
            <SurfaceCard
              title="Pieza anterior"
              description="Si necesitas el marco conceptual completo, la lectura anterior explica por que contexto, integridad y trazabilidad importan tanto."
            >
              <TagList items={["Valor documental", "Contexto", "Integridad"]} />
              <Link
                className="inline-link"
                href="/recursos/articulos/valor-documental-evidencia-digital"
              >
                Leer articulo base
              </Link>
            </SurfaceCard>

            <SurfaceCard
              title="Continuidad audiovisual"
              description="El episodio 01 resume este mismo marco en video y deja listos dos cortes verticales derivados."
            >
              <TagList items={["Video", "Shorts", "Resumen grabable"]} />
              <Link className="inline-link" href="/recursos/videos/episodio-01">
                Ver pagina del episodio
              </Link>
            </SurfaceCard>

            <SurfaceCard
              title="Despues de preservar, conviene acotar alcance"
              description="La guia sobre revision tecnica ayuda a entender hasta donde puede llegar el analisis cuando el material ya ha sido ordenado."
            >
              <TagList items={["Alcance", "Revision", "Salida documental"]} />
              <Link className="inline-link" href="/recursos/guias/revision-tecnica-evidencia-digital">
                Leer guia tecnica
              </Link>
            </SurfaceCard>
          </div>
        </Container>
      </Section>

      <ActionBanner
        title="Si ya existe material digital recopilado, el siguiente paso es ordenarlo mejor antes de extraer conclusiones fuertes"
        description="Esta pieza ayuda a mejorar el punto de partida. Si la necesidad ya es concreta, la conversacion inicial puede centrarse en materiales disponibles, prioridad documental y alcance razonable."
        primaryAction={{ href: "/contacto", label: "Iniciar contacto" }}
        secondaryAction={{ href: "/recursos/videos/episodio-01", label: "Ver episodio" }}
        note="Mejor preservacion inicial suele traducirse en mejor claridad tecnica y mejor tiempo de respuesta."
        highlights={[
          "Guia util para fases tempranas de un caso con componente digital.",
          "Complemento directo del articulo sobre valor documental.",
        ]}
      />
    </>
  );
}
