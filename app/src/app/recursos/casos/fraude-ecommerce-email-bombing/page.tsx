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
  title: "Caso tipo: fraude e-commerce con email bombing",
  description:
    "Caso tipo anonimo sobre saturacion de correo, alertas ocultas y como una revision tecnica ordena la secuencia sin exagerar el alcance.",
  path: "/recursos/casos/fraude-ecommerce-email-bombing",
  type: "article",
});

export default function EcommerceEmailBombingCasePage() {
  return (
    <>
      <PageHero
        eyebrow="Caso tipo"
        title="Fraude e-commerce con email bombing"
        subtitle="Un caso anonimo para mostrar como una secuencia aparentemente caotica cambia cuando correo, pedidos y eventos relevantes dejan de leerse por separado y pasan a documentarse como un solo intervalo."
        primaryAction={{ href: "#caso", label: "Leer caso tipo" }}
        secondaryAction={{ href: "/contacto", label: contactPageCtaLabel }}
        stats={[
          { value: "6 min", label: "Lectura estimada" },
          { value: "Anonimo", label: "Patron editorial seguro" },
          { value: "Util", label: "Secuencia y limites" },
        ]}
        notes={[
          "El objetivo no es dramatizar la historia, sino mostrar donde una revision tecnica aporta orden y criterio.",
          "El caso se publica como patron anonimo: sin cuentas reales, remitentes identificables ni referencias de procedimiento.",
        ]}
        visual={
          <ImagePanel
            src="/images/resources/resources-featured.svg"
            alt="Escena editorial con monitor, correo y documentacion sobre caso tipo de fraude e-commerce"
            eyebrow="Patron anonimo"
            title="Cuando el correo deja de ser ruido y pasa a ser contexto del fraude"
            description="La pieza muestra por que preservar antes de limpiar cambia la calidad del caso y evita perder la secuencia mas explicable."
            tags={["Caso tipo", "Correo", "Secuencia"]}
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
                { label: "Caso tipo de fraude e-commerce" },
              ]}
            />
            <EditorialMetaStrip
              items={[
                { label: "Formato", value: "Caso tipo anonimo" },
                { label: "Tema", value: "Correo saturado, alertas ocultas y operativa comercial" },
                { label: "Dirigido a", value: "Perfiles juridicos, decisores y consultas aplicadas" },
                { label: "Continuidad", value: "Conecta con el articulo aplicado y preservacion" },
              ]}
            />

            <ProseCard>
              <p>
                La consulta de partida no consistia en revisar una bandeja molesta. La necesidad real
                era entender si ese exceso de correo guardaba relacion con cambios relevantes
                producidos en la misma ventana temporal y si aun existia material suficiente para
                reconstruir la secuencia con solvencia.
              </p>

              <h2>Material inicial</h2>
              <ul>
                <li>Bandeja con volumen anomalo de correo.</li>
                <li>Mensajes de confirmacion mezclados con ruido.</li>
                <li>Referencias a pedidos o cargos no esperados.</li>
                <li>Capturas y notas de contexto aportadas en momentos distintos.</li>
              </ul>

              <h2>Donde aparecia la dificultad real</h2>
              <p>
                El caso no estaba vacio. Estaba mal ensamblado. Parte del correo habia sido filtrado,
                parte del contexto solo sobrevivio en capturas y el relato del problema ya incluia
                interpretaciones mas fuertes que el propio material disponible.
              </p>
              <ul>
                <li>Tendencia a limpiar la bandeja antes de preservarla.</li>
                <li>Dificultad para separar mensajes accesorios de alertas utiles.</li>
                <li>Mezcla de cronologia comercial, cronologia tecnica y relato subjetivo.</li>
                <li>Perdida parcial de continuidad documental.</li>
              </ul>

              <h2>Trabajo tecnico util</h2>
              <ol>
                <li>Reconstruir cuando empezo la saturacion.</li>
                <li>Identificar alertas autenticas dentro de esa ventana.</li>
                <li>Relacionar correo, pedidos y otros eventos relevantes.</li>
                <li>Fijar con claridad donde terminaba la observacion y donde empezaba una inferencia mas fuerte.</li>
              </ol>

              <h2>Lo que este caso tipo ensena</h2>
              <p>
                El volumen de correo por si solo no era concluyente. Lo que convertia el ruido en un
                indicio serio de contexto era su coincidencia temporal con eventos relevantes y la
                capacidad de explicarlo dentro de una sola cronologia prudente.
              </p>
              <blockquote>
                La salida mas util no fue una narracion dramatica. Fue una secuencia documentada con
                limites expresos.
              </blockquote>

              <h2>Utilidad editorial y profesional</h2>
              <p>
                Este patron ayuda a explicar el valor de la investigacion digital en fraude e-commerce,
                la importancia de la preservacion inicial y la razon por la que una revision tecnica no
                se limita a opinar sobre unos correos: ordena el problema antes de que se vuelva mas
                dificil de sostener.
              </p>

              <h2>Cierre</h2>
              <p>
                Este caso tipo se publica por una razon sencilla: muestra como una alerta puede quedar
                oculta dos veces, primero en la bandeja y despues en la explicacion del caso. Cuando el
                material se revisa a tiempo, ese patron gana claridad. Cuando se llega tarde, parte del
                valor no desaparece del todo, pero si se vuelve mucho mas costoso de recuperar.
              </p>
            </ProseCard>
          </div>

          <div className="grid gap-4">
            <SurfaceCard
              title="Articulo relacionado"
              description="La pieza editorial aplicada desarrolla con mas detalle por que el ruido digital puede formar parte del problema y no solo del contexto."
            >
              <TagList items={["Articulo", "Patron", "Fraude e-commerce"]} />
              <Link className="inline-link" href="/recursos/articulos/email-bombing-fraude-ecommerce">
                Leer articulo aplicado
              </Link>
            </SurfaceCard>

            <SurfaceCard
              title="Antes de que el material pierda mas valor"
              description="Si el caso real ya combina correo, pedidos, cargos o cambios de cuenta, conviene fijar cuanto antes que existe y en que estado de orden se encuentra."
            >
              <TagList items={["Consulta inicial", "Materiales", "Secuencia"]} />
              <Link className="inline-link" href="/contacto">
                {contactPageCtaLabel}
              </Link>
            </SurfaceCard>

            <SurfaceCard
              title="Seguir leyendo"
              description="El hub editorial reune la base documental y las piezas aplicadas que ayudan a reconocer mejor este tipo de patrones."
            >
              <TagList items={["Recursos", "Guia", "Preservacion"]} />
              <Link className="inline-link" href="/recursos">
                {resourcesHubReturnLabel}
              </Link>
            </SurfaceCard>
          </div>
        </Container>
      </Section>

      <ActionBanner
        eyebrow="Continuidad editorial"
        title="Si este caso tipo se parece demasiado a un problema real, conviene revisar antes de que la secuencia se siga degradando"
        description="La utilidad de una consulta inicial no esta en sobredimensionar el asunto, sino en fijar materiales, ventana temporal y objetivo documental antes de que el ruido termine dominando la lectura."
        primaryAction={{ href: "/contacto", label: contactPageCtaLabel }}
        secondaryAction={{ href: "/recursos/articulos/email-bombing-fraude-ecommerce", label: "Volver al articulo" }}
        note="Una mala preservacion no siempre destruye el caso, pero si puede volverlo mucho menos legible."
        highlights={[
          "Caso tipo pensado para mostrar criterio aplicado sin exponer ningun dato sensible.",
          "Puente directo entre patron observable, asesoramiento y accion temprana.",
        ]}
      />
    </>
  );
}
