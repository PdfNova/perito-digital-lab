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
  title: "Tokenizacion fraudulenta y pagos con wallet: por que la tarjeta fisica puede seguir en manos del titular",
  description:
    "Articulo aplicado sobre tokenizacion fraudulenta, wallets y medios de pago digitales cuando existen cargos u operaciones y la tarjeta fisica sigue con su titular.",
  path: "/recursos/articulos/tokenizacion-fraudulenta-tarjeta-wallet",
  type: "article",
});

export default function WalletTokenizationArticlePage() {
  return (
    <>
      <PageHero
        eyebrow="Articulo aplicado"
        title="Tokenizacion fraudulenta y pagos con wallet: por que la tarjeta fisica puede seguir en manos del titular"
        subtitle="Una pieza para explicar un patron que desconcierta a muchas personas afectadas: existen operaciones, la tarjeta sigue fisicamente disponible y, aun asi, la secuencia apunta a un problema real de tokenizacion, alta en wallet o uso digital del medio de pago."
        primaryAction={{ href: "#lectura", label: "Leer articulo" }}
        secondaryAction={{ href: "/contacto", label: contactPageCtaLabel }}
        stats={[
          { value: "7 min", label: "Lectura estimada" },
          { value: "Pago", label: "Wallet, token y secuencia digital" },
          { value: "Patron", label: "Lectura prudente de medios de pago" },
        ]}
        notes={[
          "La pieza se formula como patron tecnico y documental. No presupone un unico mecanismo ni una autoria cerrada.",
          "El objetivo es explicar por que la presencia fisica de la tarjeta no descarta por si sola un uso digital relevante.",
        ]}
        visual={
          <ImagePanel
            src="/images/services/services-detail.svg"
            alt="Medio de pago, telefono y documentacion para una lectura sobre tokenizacion fraudulenta y wallets"
            eyebrow="Medios de pago"
            title="Que la tarjeta siga en la mano del titular no siempre agota la explicacion del caso"
            description="La revision tecnica ayuda a leer mejor altas en wallet, alertas, dispositivos, mensajes y secuencias de cargo antes de formular conclusiones precipitadas."
            tags={["Wallet", "Tokenizacion", "Trazabilidad"]}
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
                { label: "Tokenizacion fraudulenta y wallet" },
              ]}
            />
            <EditorialMetaStrip
              items={[
                { label: "Formato", value: "Articulo aplicado" },
                { label: "Tema", value: "Tokenizacion, wallet y medios de pago digitales" },
                { label: "Dirigido a", value: "Consultas de fraude bancario, pagos y trazabilidad" },
                { label: "Continuidad", value: "Conecta con fraude tecnologico, cuentas instrumentales y contacto" },
              ]}
            />

            <ProseCard>
              <p>
                Uno de los errores mas frecuentes en este tipo de asuntos consiste en descartar el
                problema demasiado pronto: si la tarjeta fisica sigue con su titular, se concluye que
                los cargos no pueden encajar con una operativa digital real. Esa lectura puede ser
                demasiado pobre.
              </p>
              <p>
                En determinados contextos, el medio de pago puede haber quedado asociado a un token, a
                un alta en wallet o a una secuencia digital que no exige necesariamente la perdida
                fisica de la tarjeta. La pregunta tecnica deja entonces de ser solo donde estaba la
                tarjeta y pasa a ser que relacion existe entre altas, avisos, dispositivos, cargos y
                contexto de cuenta.
              </p>

              <h2>Por que este patron suele desconcertar</h2>
              <ul>
                <li>La tarjeta sigue en poder del titular.</li>
                <li>Los cargos o autorizaciones parecen reales, pero la secuencia no encaja a simple vista.</li>
                <li>Parte de las alertas llega por canales distintos y se revisa demasiado tarde.</li>
                <li>Se mezclan rapidamente hipotesis sobre clonacion, robo fisico o fallo del sistema.</li>
              </ul>
              <blockquote>
                En medios de pago digitales, la tarjeta fisica es solo una parte del problema. A veces
                ni siquiera la mas explicativa.
              </blockquote>

              <h2>Que suele merecer preservacion temprana</h2>
              <ul>
                <li>Alertas de alta o uso en wallet.</li>
                <li>Mensajes de verificacion, avisos de emisor y notificaciones de seguridad.</li>
                <li>Cronologia de cargos, rechazos o intentos de autorizacion.</li>
                <li>Cambios recientes de dispositivo, numero, correo o credenciales.</li>
                <li>Conversaciones con soporte, entidad emisora o comercio afectado.</li>
              </ul>
              <p>
                El valor no esta en guardar pantallas sin criterio, sino en conservar la secuencia:
                que se vio, cuando se vio y con que relacion respecto del resto de eventos.
              </p>

              <h2>Que puede aportar una revision tecnica</h2>
              <h3>Ordenar la cronologia</h3>
              <p>
                Permite leer si primero aparece un alta, luego una verificacion, despues un cargo o si
                la secuencia ya llega demasiado alterada para afirmarlo con fuerza.
              </p>

              <h3>Relacionar capas dispersas</h3>
              <p>
                En estos asuntos suelen mezclarse entidad emisora, wallet, comercio, notificaciones,
                capturas y relato del afectado. La revision util conecta esas capas sin convertir el
                patron en certeza automatica.
              </p>

              <h3>Contener conclusiones apresuradas</h3>
              <p>
                No todo cargo implica exactamente el mismo mecanismo. No toda alta en wallet explica
                por si sola toda la operativa. La prudencia aqui protege mas que la intuicion.
              </p>

              <h2>Errores que empeoran el caso</h2>
              <ul>
                <li>Suponer que la tenencia fisica de la tarjeta descarta cualquier uso digital.</li>
                <li>Perder notificaciones de alta, verificacion o cambio de dispositivo.</li>
                <li>Separar los cargos del resto del contexto tecnico y documental.</li>
                <li>Intentar reconstruir la secuencia solo de memoria varios dias despues.</li>
              </ul>

              <h2>Cierre</h2>
              <p>
                En patrones de tokenizacion fraudulenta o uso no esperado de wallets, la clave no
                suele estar en una unica pantalla. Suele estar en la secuencia entre avisos, altas,
                cargos, dispositivos y tiempos. Cuando esa lectura se hace pronto, el caso gana mucha
                claridad. Cuando se hace tarde, la operativa puede seguir siendo revisable, pero con
                bastante mas friccion y menos continuidad documental.
              </p>
            </ProseCard>
          </div>

          <div className="grid gap-4">
            <SurfaceCard
              title="Relacion con fraude y trazabilidad"
              description="Esta linea conecta de forma directa con fraude tecnologico, cuentas instrumentales y secuencias donde el medio de pago es solo una capa del problema."
            >
              <TagList items={["Fraude", "Trazabilidad", "Pago digital"]} />
              <Link className="inline-link" href="/servicios/fraude-tecnologico-trazabilidad">
                Ver servicio relacionado
              </Link>
            </SurfaceCard>

            <SurfaceCard
              title="Antes de que se pierdan avisos y contexto"
              description="Si ya existen cargos, verificaciones o alertas de wallet, conviene ordenar cuanto antes mensajes, tiempos y materiales base."
            >
              <TagList items={["Alertas", "Secuencia", "Consulta"]} />
              <Link className="inline-link" href="/contacto">
                {contactPageCtaLabel}
              </Link>
            </SurfaceCard>

            <SurfaceCard
              title="Volver al hub"
              description="El hub editorial reune esta pieza con guias sobre fraude, cuentas instrumentales, preservacion y lectura prudente del material digital."
            >
              <TagList items={["Recursos", "Fraude", "Continuidad"]} />
              <Link className="inline-link" href="/recursos">
                {resourcesHubReturnLabel}
              </Link>
            </SurfaceCard>
          </div>
        </Container>
      </Section>

      <ActionBanner
        eyebrow="Continuidad editorial"
        title="Si la secuencia de pagos no encaja y la tarjeta fisica sigue disponible, conviene revisar antes de descartar demasiado pronto el problema"
        description="Una consulta temprana permite ordenar cargos, altas en wallet, notificaciones y cambios de cuenta o dispositivo antes de que el material pierda continuidad."
        primaryAction={{ href: "/contacto", label: contactPageCtaLabel }}
        secondaryAction={{ href: "/servicios/fraude-tecnologico-trazabilidad", label: "Ver servicio relacionado" }}
        note="En medios de pago digitales, leer bien el patron suele importar mas que la intuicion inicial sobre lo ocurrido."
        highlights={[
          "Pieza pensada para consultas donde un medio de pago digital cambia la interpretacion del caso.",
          "Puente directo entre fraude bancario, tokenizacion, trazabilidad y necesidad de una revision temprana.",
        ]}
      />
    </>
  );
}
