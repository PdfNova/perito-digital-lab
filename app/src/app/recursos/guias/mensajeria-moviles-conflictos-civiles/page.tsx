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
  title: "Mensajeria, moviles y conflictos civiles: orden y revision tecnica",
  description:
    "Guia tecnica sobre conversaciones, exportaciones, capturas y materiales de moviles en asuntos civiles o de familia con necesidad de orden, secuencia y revision tecnica prudente.",
  path: "/recursos/guias/mensajeria-moviles-conflictos-civiles",
  type: "article",
});

export default function MessagingCivilConflictsGuidePage() {
  return (
    <>
      <PageHero
        eyebrow="Guia tecnica"
        title="Mensajeria, moviles y conflictos civiles o de familia"
        subtitle="Una guia para ordenar conversaciones, exportaciones y materiales de moviles cuando el problema no es la falta de mensajes, sino el exceso de pantallas, versiones parciales y conflicto mezclado con documentacion."
        primaryAction={{ href: "#guia", label: "Leer guia" }}
        secondaryAction={{ href: "/contacto", label: contactPageCtaLabel }}
        stats={[
          { value: "8 min", label: "Lectura estimada" },
          { value: "Moviles", label: "Mensajeria, secuencia y fuente" },
          { value: "Civil", label: "Guia orientada a conflictos sensibles" },
        ]}
        notes={[
          "El valor tecnico suele aparecer cuando el material deja de comportarse como ruido y empieza a comportarse como documento.",
          "La prudencia expositiva importa tanto como el analisis en asuntos civiles o de familia con evidencia digital.",
        ]}
        visual={
          <ImagePanel
            src="/images/slots/slot-moviles.svg"
            alt="Dispositivos, capturas y exportaciones organizadas para una guia sobre mensajeria y moviles"
            eyebrow="Mensajeria y orden"
            title="Una conversacion no se sostiene mejor por acumular pantallas, sino por ordenarlas con criterio"
            description="La guia fija fuente, secuencia y alcance para que una mezcla de mensajes y capturas pueda explicarse con mas claridad y menos ruido."
            tags={["Moviles", "Mensajeria", "Secuencia"]}
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
                { label: "Mensajeria, moviles y conflictos civiles" },
              ]}
            />
            <EditorialMetaStrip
              items={[
                { label: "Formato", value: "Guia tecnica aplicada" },
                { label: "Tema", value: "Mensajeria, moviles y conflictos sensibles" },
                { label: "Dirigido a", value: "Perfiles juridicos, decisores y consultas civiles o de familia" },
                { label: "Continuidad", value: "Conecta con servicios de moviles, familia e informe" },
              ]}
            />

            <ProseCard>
              <p>
                En conflictos civiles o de familia, la evidencia digital rara vez llega en un formato
                lineal y limpio. Lo habitual es una acumulacion de capturas, audios, mensajes
                reenviados, exportaciones parciales y versiones superpuestas de una misma conversacion.
                En ese entorno, el problema no es solo tecnico. Tambien es documental.
              </p>

              <h2>Que conviene separar desde el principio</h2>
              <p>
                Una revision seria gana mucho cuando separa tres planos que suelen llegar mezclados:
                fuente, secuencia e interpretacion. No pesa igual una captura aislada, una exportacion
                con continuidad o una explicacion verbal sobre lo que una parte cree que esa secuencia
                demuestra.
              </p>
              <blockquote>
                En estos asuntos, contener el conflicto documental es una parte importante del propio
                trabajo tecnico.
              </blockquote>

              <h2>Problemas frecuentes</h2>
              <ul>
                <li>Capturas recortadas sin contexto de pantalla.</li>
                <li>Periodos distintos mezclados en una misma carpeta.</li>
                <li>Archivos renombrados sin criterio uniforme.</li>
                <li>Hipotesis del conflicto convertida en estructura documental.</li>
              </ul>

              <h2>Que puede aportar una revision tecnica</h2>
              <h3>Ordenar por capas</h3>
              <p>
                Separar capturas, exportaciones, adjuntos y notas de contexto evita que el caso se
                convierta en una sola masa de pantallas.
              </p>

              <h3>Reconstruir ventanas temporales</h3>
              <p>
                No siempre hace falta una cronologia absoluta. A menudo basta con fijar continuidad
                aparente, puntos de ruptura y relaciones entre mensajes o eventos.
              </p>

              <h3>Delimitar alcance</h3>
              <p>
                Una revision util distingue entre mensaje observable, secuencia coherente, patron con
                interes tecnico e inferencia que todavia exige soporte adicional.
              </p>

              <h2>Por que importa tanto la forma de preservarlo</h2>
              <p>
                En estos asuntos, una mala preservacion no siempre destruye el valor del material, pero
                si puede volver mucho mas costosa su lectura. Cuanto antes se ordena fuente, secuencia y
                continuidad, mas facil resulta producir una salida comprensible para terceros.
              </p>

              <h2>Cierre</h2>
              <p>
                En mensajeria y moviles, el asesoramiento experto no consiste en cargar de dramatismo el
                contenido. Consiste en reducir ruido, fijar limites y preparar una lectura que pueda
                sostenerse mejor fuera del entorno del conflicto. Esa diferencia suele marcar el valor
                real de una revision bien planteada.
              </p>
            </ProseCard>
          </div>

          <div className="grid gap-4">
            <SurfaceCard
              title="Relacion con servicios"
              description="Esta guia conecta de forma directa con el peritaje de moviles y mensajeria, y con el apoyo tecnico en conflictos civiles o de familia con evidencia digital."
            >
              <TagList items={["Moviles", "Familia", "Informe"]} />
              <Link className="inline-link" href="/servicios/peritaje-moviles-mensajeria">
                Ver peritaje relacionado
              </Link>
            </SurfaceCard>

            <SurfaceCard
              title="Antes de mover mas material"
              description="Si el asunto ya combina capturas, exportaciones y varios dispositivos, conviene fijar cuanto antes que existe, de donde sale y en que orden ha llegado."
            >
              <TagList items={["Preservacion", "Fuente", "Secuencia"]} />
              <Link className="inline-link" href="/contacto">
                {contactPageCtaLabel}
              </Link>
            </SurfaceCard>

            <SurfaceCard
              title="Volver al hub"
              description="La biblioteca amplia este marco con piezas sobre valor documental, preservacion, fraude y OSINT con limites de atribucion."
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
        title="Si el conflicto ya mezcla pantallas, mensajes y versiones parciales, el siguiente paso es ordenar antes de interpretar"
        description="La guia ofrece un marco de lectura. Si existe una necesidad concreta, la consulta inicial puede centrarse en materiales disponibles, dispositivos implicados y salida documental razonable."
        primaryAction={{ href: "/contacto", label: contactPageCtaLabel }}
        secondaryAction={{ href: "/servicios/evidencia-digital-conflictos-civiles", label: "Ver servicio relacionado" }}
        note="Cuanto mas se retrasa el orden documental, mas esfuerzo exige recuperar despues una secuencia legible."
        highlights={[
          "Guia pensada para conflictos sensibles donde la prudencia expositiva importa.",
          "Puente directo entre mensajeria, orden documental y asesoramiento experto.",
        ]}
      />
    </>
  );
}
