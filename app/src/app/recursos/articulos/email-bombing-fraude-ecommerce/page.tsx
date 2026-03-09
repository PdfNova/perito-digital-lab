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
import { contactPageCtaLabel } from "@/app/site-config";

export const metadata: Metadata = buildPageMetadata({
  title: "Email bombing y fraude e-commerce: preservacion y revision tecnica",
  description:
    "Articulo aplicado sobre correo saturado, alertas ocultas, preservacion inicial y utilidad de una revision tecnica para reconstruir la secuencia con prudencia.",
  path: "/recursos/articulos/email-bombing-fraude-ecommerce",
  type: "article",
});

export default function EmailBombingFraudArticlePage() {
  return (
    <>
      <PageHero
        eyebrow="Articulo aplicado"
        title="Email bombing y fraude e-commerce"
        subtitle="Una pieza para entender cuando el exceso de correo deja de ser una molestia y pasa a convertirse en una capa operativa del fraude, especialmente cuando oculta alertas utiles en la ventana mas critica."
        primaryAction={{ href: "#lectura", label: "Leer articulo" }}
        secondaryAction={{ href: "/contacto", label: contactPageCtaLabel }}
        stats={[
          { value: "7 min", label: "Lectura estimada" },
          { value: "Patron", label: "Correo, alertas y secuencia" },
          { value: "Aplicado", label: "Articulo orientado a criterio" },
        ]}
        notes={[
          "La clave no esta en el volumen bruto del correo, sino en la funcion que ese ruido cumple dentro del intervalo critico.",
          "La lectura tecnica gana valor cuando distingue entre coincidencia, patron y limite de atribucion.",
        ]}
        visual={
          <ImagePanel
            src="/images/resources/resources-library.svg"
            alt="Escena editorial con correo, alertas y contexto tecnico sobre fraude e-commerce"
            eyebrow="Correo y contexto"
            title="El ruido digital solo importa cuando altera visibilidad, tiempos y capacidad de reaccion"
            description="La pieza explica por que preservar la secuencia antes de limpiar la bandeja cambia mucho el valor documental del caso."
            tags={["Fraude e-commerce", "Correo", "Preservacion"]}
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
                { label: "Email bombing y fraude e-commerce" },
              ]}
            />
            <EditorialMetaStrip
              items={[
                { label: "Formato", value: "Articulo aplicado" },
                { label: "Tema", value: "Correo saturado, alertas ocultas y secuencia de fraude" },
                { label: "Dirigido a", value: "Perfiles juridicos, decisores y consultas iniciales" },
                { label: "Continuidad", value: "Conecta con preservacion, caso tipo y contacto" },
              ]}
            />

            <ProseCard>
              <p>
                El email bombing suele analizarse tarde y mal. Tarde, porque primero se vive como una
                incidencia molesta y no como una pieza de contexto. Mal, porque muchas veces se limpia
                la bandeja antes de fijar una secuencia minima. En determinados fraudes e-commerce,
                esa reaccion reduce valor justo en el momento en que mas haria falta conservarlo.
              </p>

              <h2>Lo que cambia la lectura del caso</h2>
              <p>
                Una bandeja saturada no demuestra por si sola una operativa de fraude. Lo que la vuelve
                tecnicamente relevante es la coincidencia con otros hechos: pedidos inesperados,
                cambios de cuenta, accesos no reconocidos o alertas autenticas que quedaron enterradas
                entre mensajes accesorios.
              </p>
              <blockquote>
                La pregunta util no es cuantos correos entraron, sino que quedo oculto mientras
                entraban.
              </blockquote>

              <h2>Patron habitual</h2>
              <ul>
                <li>Acceso no esperado o modificacion de credenciales.</li>
                <li>Cambio de direccion, metodo de pago o datos de cuenta.</li>
                <li>Pedidos, cargos o incidencias comerciales no reconocidas.</li>
                <li>Volumen anomalo de correo en la misma ventana temporal.</li>
                <li>Retraso en detectar la alerta realmente importante.</li>
              </ul>
              <p>
                El valor no esta en dramatizar ese patron. Esta en documentar la secuencia sin mezclar
                observacion, intuicion y atribucion.
              </p>

              <h2>El error mas comun ocurre demasiado pronto</h2>
              <p>
                Cuando la bandeja se vuelve inutilizable, borrar y filtrar parece una respuesta
                razonable. Desde el punto de vista documental puede ser un problema serio, porque la
                operativa pierde su forma mas explicable: el orden temporal.
              </p>
              <ul>
                <li>Se limpia antes de fijar el intervalo critico.</li>
                <li>Se conservan solo los correos mas llamativos.</li>
                <li>Se pierde la relacion con pedidos, tickets o cambios de cuenta.</li>
                <li>La historia del caso se reconstruye despues sobre material ya fragmentado.</li>
              </ul>

              <h2>Que puede aportar una revision tecnica</h2>
              <h3>Reconstruir el intervalo</h3>
              <p>
                Saber si el bombardeo fue anterior, simultaneo o posterior al evento relevante cambia
                la calidad de la lectura.
              </p>

              <h3>Separar ruido de alerta util</h3>
              <p>
                No todo mensaje merece el mismo peso. El interes tecnico esta en fijar que correos
                sirven de contexto, cuales sostienen una alerta autentica y cuales solo aumentan el
                ruido.
              </p>

              <h3>Relacionar capas distintas del asunto</h3>
              <p>
                Correo, actividad comercial, cambios de cuenta y capturas suelen llegar en archivos y
                tiempos distintos. El trabajo util es correlacionarlos con prudencia, no convertirlos
                sin mas en una conclusion total.
              </p>

              <h2>Limites que conviene respetar</h2>
              <p>
                No toda saturacion es una maniobra deliberada. No toda alerta enterrada permite
                reconstruir por si sola la operativa entera. La credibilidad mejora cuando el analisis
                distingue entre incidencia, coincidencia relevante, patron consistente e inferencia que
                todavia necesita soporte adicional.
              </p>

              <h2>Cierre</h2>
              <p>
                En fraude e-commerce, el ruido puede ser funcional. Si la secuencia se preserva mal,
                la alerta util se pierde primero en la bandeja y despues en la explicacion del caso.
                Si se documenta a tiempo, una revision tecnica no necesita exagerar el problema para
                volverlo relevante: le basta con mostrar por que esa combinacion de correo, tiempo y
                operativa cambia el valor del asunto.
              </p>
            </ProseCard>
          </div>

          <div className="grid gap-4">
            <SurfaceCard
              title="Caso tipo relacionado"
              description="La version anonima del mismo patron muestra como cambia la explicacion cuando el correo y la operativa comercial se leen como una sola secuencia."
            >
              <TagList items={["Caso tipo", "Secuencia", "Ocultacion de alertas"]} />
              <Link className="inline-link" href="/recursos/casos/fraude-ecommerce-email-bombing">
                Leer caso tipo
              </Link>
            </SurfaceCard>

            <SurfaceCard
              title="Lectura de continuidad"
              description="La pieza sobre preservacion inicial ayuda a entender por que limpiar, mover o recortar demasiado pronto complica despues la revision."
            >
              <TagList items={["Preservacion", "Errores frecuentes", "Punto de partida"]} />
              <Link className="inline-link" href="/recursos/articulos/preservacion-inicial-evidencia-digital">
                Leer preservacion inicial
              </Link>
            </SurfaceCard>

            <SurfaceCard
              title="Cuando conviene revisar a tiempo"
              description="Si ya existe un problema real con correo, pedidos, cargos o cambios de cuenta, esta linea suele encajar mejor en la especialidad de fraude tecnologico y trazabilidad."
            >
              <TagList items={["Fraude", "Trazabilidad", "Consulta inicial"]} />
              <Link className="inline-link" href="/servicios/fraude-tecnologico-trazabilidad">
                Ver servicio relacionado
              </Link>
            </SurfaceCard>
          </div>
        </Container>
      </Section>

      <ActionBanner
        eyebrow="Continuidad editorial"
        title="Si el patron se parece a un caso real, el siguiente paso no es dramatizarlo sino revisarlo con orden"
        description="Esta pieza ayuda a reconocer una secuencia. Si ya existe una necesidad concreta, la consulta inicial puede centrarse en materiales disponibles, ventana temporal y utilidad documental esperable."
        primaryAction={{ href: "/contacto", label: contactPageCtaLabel }}
        secondaryAction={{ href: "/servicios/fraude-tecnologico-trazabilidad", label: "Ver servicio relacionado" }}
        note="Actuar tarde o limpiar la bandeja sin criterio puede reducir valor de una forma dificil de recuperar."
        highlights={[
          "Articulo pensado para mostrar experiencia aplicada sin sensacionalismo.",
          "Puente directo entre patron observado, preservacion y revision tecnica.",
        ]}
      />
    </>
  );
}
