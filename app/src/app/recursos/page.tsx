import type { Metadata } from "next";
import {
  ActionBanner,
  ButtonLink,
  Container,
  ContentLinkCard,
  DecisionGuard,
  EditorialMetaStrip,
  Eyebrow,
  ImagePanel,
  PageHero,
  Section,
  SectionHeading,
  SurfaceCard,
} from "@/components/ui";
import { buildPageMetadata } from "../metadata";
import {
  articleBaseCtaLabel,
  beforeActionDescription,
  beforeActionTitle,
  contactDirectCtaLabel,
  contactMailto,
  contactPageCtaLabel,
  technicalGuideCtaLabel,
} from "../site-config";
import { serviceSpecialties } from "../servicios/service-specialties";

const authorityHighlights = [
  {
    type: "Lectura clave",
    title: "Notario digital vs perito digital",
    description:
      "Duda que suele llegar mal encuadrada: diferenciar entre fijar un estado digital y analizar su contexto, su integridad y su alcance documental real.",
    meta: "Despachos y decisores / 7 min",
    href: "/recursos/articulos/notario-digital-vs-perito-digital",
    cta: "Leer lectura aplicada",
    tags: ["Perito digital", "Despachos", "Documento"],
  },
  {
    type: "Guia tecnica",
    title: "Firma electronica valida vs firma visual en PDF",
    description:
      "Controversia documental frecuente: distinguir apariencia, revisiones del archivo y peso documental del PDF sin sobreactuar el caso.",
    meta: "Documentos electronicos / 8 min",
    href: "/recursos/guias/firma-electronica-pdf-validez-documental",
    cta: "Leer guia tecnica",
    tags: ["PDF", "Firma electronica", "Valor documental"],
  },
  {
    type: "Articulo aplicado",
    title: "Tokenizacion fraudulenta y pagos con wallet",
    description:
      "Patron que suele cerrarse demasiado pronto: la tarjeta fisica puede seguir con su titular y, aun asi, existir una secuencia de uso digital que merece revision seria.",
    meta: "Medios de pago / 7 min",
    href: "/recursos/articulos/tokenizacion-fraudulenta-tarjeta-wallet",
    cta: "Leer articulo aplicado",
    tags: ["Wallet", "Tokenizacion", "Fraude bancario"],
  },
  {
    type: "Articulo aplicado",
    title: "Recovery scam cripto y falsa sensacion de rescate",
    description:
      "Segunda capa de fraude donde la urgencia por recuperar agrava el desorden documental, la trazabilidad y la lectura de la perdida inicial.",
    meta: "Cripto y trazabilidad / 7 min",
    href: "/recursos/articulos/recovery-scam-cripto-falsa-recuperacion",
    cta: "Leer articulo aplicado",
    tags: ["Cripto", "Recovery scam", "Hashes"],
  },
];

const appliedStories = [
  {
    type: "Caso tipo",
    title: "Cuenta instrumental, smurfing y operativa circular",
    description:
      "Caso anonimo sobre ingresos fragmentados, redistribucion y patron financiero que parece disperso hasta que la secuencia se ordena bien.",
    meta: "Fraude bancario / 6 min",
    href: "/recursos/casos/cuenta-instrumental-smurfing-operativa-circular",
    cta: "Leer caso tipo",
    tags: ["Smurfing", "Trazabilidad", "Operativa circular"],
  },
  {
    type: "Caso tipo",
    title: "Fraude e-commerce con email bombing",
    description:
      "Secuencia anonima donde el ruido de correo entierra alertas y muestra por que limpiar, archivar o reenviar antes de documentar sale caro.",
    meta: "Correo y fraude / 6 min",
    href: "/recursos/casos/fraude-ecommerce-email-bombing",
    cta: "Leer caso tipo",
    tags: ["Email bombing", "Preservacion", "Fraude e-commerce"],
  },
  {
    type: "Caso tipo",
    title: "Huella digital, OSINT y limites de atribucion",
    description:
      "Caso anonimo para mostrar cuando una correlacion abierta ayuda mucho y cuando una atribucion prematura debilita mas de lo que parece.",
    meta: "OSINT / 6 min",
    href: "/recursos/casos/huella-digital-osint",
    cta: "Leer caso tipo",
    tags: ["OSINT", "Atribucion", "Correlacion"],
  },
];

const appliedGuides = [
  {
    type: "Articulo aplicado",
    title: "Email bombing y fraude e-commerce",
    description:
      "Lectura sobre ruido digital, alertas ocultas y secuencia de fraude cuando correo y operativa comercial deben analizarse juntos.",
    meta: "7 min",
    href: "/recursos/articulos/email-bombing-fraude-ecommerce",
    cta: "Leer articulo aplicado",
    tags: ["Correo", "Secuencia", "Fraude e-commerce"],
  },
  {
    type: "Guia tecnica",
    title: "Mensajeria, moviles y conflictos civiles",
    description:
      "Guia para ordenar capturas, exportaciones y conversaciones cuando el exceso de pantallas no equivale a prueba solida.",
    meta: "8 min",
    href: "/recursos/guias/mensajeria-moviles-conflictos-civiles",
    cta: "Leer guia aplicada",
    tags: ["Moviles", "Mensajeria", "Conflictos civiles"],
  },
  {
    type: "Guia tecnica",
    title: "Cuenta instrumental y fraccionamiento de ingresos",
    description:
      "Guia para leer patrones financieros visibles sin convertir recurrencias en certezas apresuradas.",
    meta: "8 min",
    href: "/recursos/guias/cuenta-instrumental-fraccionamiento",
    cta: "Leer guia aplicada",
    tags: ["Cuenta instrumental", "Smurfing", "Criterio"],
  },
];

const documentaryBase = [
  {
    type: "Articulo base",
    title: "Valor documental de la evidencia digital",
    description:
      "Marco para entender por que contexto, integridad y trazabilidad siguen siendo el suelo comun de cualquier revision seria.",
    meta: "6 min",
    href: "/recursos/articulos/valor-documental-evidencia-digital",
    cta: articleBaseCtaLabel,
    tags: ["Contexto", "Integridad", "Base documental"],
  },
  {
    type: "Articulo base",
    title: "Preservacion inicial de evidencia digital",
    description:
      "Errores tempranos que reducen valor antes de que exista cronologia, informe o lectura tecnica de calidad.",
    meta: "5 min",
    href: "/recursos/articulos/preservacion-inicial-evidencia-digital",
    cta: "Leer articulo practico",
    tags: ["Preservacion", "Errores frecuentes", "Secuencia"],
  },
  {
    type: "Guia de alcance",
    title: "Revision tecnica de evidencia digital: alcance y limites",
    description:
      "Recurso para entender que puede aportar una revision y por que explicar limites tambien refuerza credibilidad.",
    meta: "7 min",
    href: "/recursos/guias/revision-tecnica-evidencia-digital",
    cta: technicalGuideCtaLabel,
    tags: ["Revision tecnica", "Alcance", "Limites"],
  },
];

const authoritySignals = [
  {
    title: "Que solemos ver en la practica",
    description:
      "Materiales que parecen cerrar el asunto y no lo hacen: capturas aisladas, PDFs planos, alertas tardias, wallets mal explicadas o secuencias financieras ya rotas.",
  },
  {
    title: "Errores frecuentes antes de pedir un informe",
    description:
      "Borrar, reenviar, imprimir, renombrar o mezclar fuentes antes de documentar suele reducir mas valor del que se percibe en ese momento.",
  },
  {
    title: "Lecturas que ayudan a no interpretar mal un caso",
    description:
      "Las piezas fuertes aclaran patron, secuencia, integridad, trazabilidad y limites antes de que una hipotesis debil domine el asunto por pura inercia.",
  },
  {
    title: "Por que consultar cambia el caso",
    description:
      "El hub prepara mejor el primer contacto porque hace visible que no todo material vale igual ni sostiene con la misma fuerza la conclusion que se quiere extraer.",
  },
];

const editorialMarkers = [
  { label: "14 piezas", value: "Articulos, guias y casos tipo ya enlazados a especialidades reales." },
  { label: "Problemas", value: "Fraude bancario, wallets, cripto, PDF, OSINT, mensajeria y preservacion." },
  { label: "Metodo", value: "Patron, secuencia, integridad, contexto, trazabilidad y limites." },
  { label: "Salida", value: "La lectura publica empuja de forma natural hacia servicios y contacto." },
];

export const metadata: Metadata = buildPageMetadata({
  title: "Recursos sobre evidencia digital, revision tecnica y servicios especializados",
  description:
    "Centro editorial con articulos aplicados, guias, casos tipo y criterios documentales conectados con especialidades sobre fraude, documentos, OSINT, mensajeria y trazabilidad.",
  path: "/recursos",
});

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Centro editorial de autoridad"
        title="Casos, guias y criterios para entender por que una lectura tecnica puede cambiar un caso"
        subtitle="Recursos deja de funcionar como biblioteca general y pasa a comportarse como mapa de problemas reales: fraude, documentos, wallets, mensajeria, OSINT, preservacion, limites de atribucion y errores que ya hacen perder valor antes de pedir una revision."
        primaryAction={{ href: "#destacados", label: "Ver piezas destacadas" }}
        secondaryAction={{ href: "/contacto", label: contactPageCtaLabel }}
        chips={[
          "Historias anonimizadas",
          "Guias tecnicas",
          "Fraude y trazabilidad",
          "Base documental",
        ]}
        stats={[
          { value: "14", label: "Piezas publicas ya navegables" },
          { value: "7", label: "Patrones de caso ya visibles" },
          { value: "Serio", label: "Hub preparado para captar mejor" },
        ]}
        notes={[
          "El tono deja de sonar a divulgacion generalista y se acerca a criterio experto, errores frecuentes y decisiones que llegan tarde.",
          "El valor comercial no esta en empujar a contacto por insistencia, sino en hacer visible que una revision seria evita lecturas pobres y ordena mejor una consulta temprana.",
        ]}
        visual={
          <ImagePanel
            src="/images/resources/resources-hero.svg"
            alt="Portada editorial con monitor, mesa de despacho y recursos de autoridad"
            eyebrow="Biblioteca de firma"
            title="Una portada editorial pensada para descubrir patron, entender limites y consultar con mejor criterio"
            description="La pagina muestra experiencia aplicada sin inventar casos ni apoyarse en espectacularidad. El peso esta en la lectura tecnica y documental de materiales que muchas veces ya llegan debilitados."
            tags={["Autoridad", "Patrones reales", "Consulta cualificada"]}
            priority
          />
        }
      />

      <Section tint="dark">
        <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <Eyebrow tone="light">Como funciona el hub</Eyebrow>
            <SectionHeading
              title="Contenido para reconocer un patron real, evitar errores caros y llegar a la consulta con mejor base"
              description="La biblioteca se organiza para pasar de la intuicion al criterio: que se observa, que se conserva, que puede sostenerse y donde una lectura temprana evita que el caso se debilite."
              tone="light"
            />
          </div>
          <SurfaceCard
              title="Que encuentra aqui quien llega con un problema real"
            description="No solo conceptos. Encuentra errores recurrentes, decisiones que llegan tarde, documentos mal leidos, secuencias degradadas y patrones anonimizados que suelen requerir una revision experta."
            tone="light"
            compact
          >
            <EditorialMetaStrip items={editorialMarkers} />
          </SurfaceCard>
        </Container>
      </Section>

      <Section>
        <Container id="destacados">
          <div className="grid gap-7 xl:grid-cols-[0.86fr_1.14fr] xl:items-end">
            <div>
              <Eyebrow>Piezas de autoridad</Eyebrow>
              <SectionHeading
                title="Cuatro piezas que elevan la percepcion de criterio, experiencia aplicada y necesidad real de asesoramiento"
                description="Aqui se concentra el salto de tono: controversias documentales, diferencia entre fijacion y analisis, medios de pago digitales y falsas recuperaciones cripto."
              />
            </div>
            <SurfaceCard
              title="Por que estas piezas son centrales"
              description="No son articulos ornamentales. Responden a dudas que suelen interpretarse mal y a errores previos que, si no se corrigen, reducen mucho la calidad del caso."
              compact
            >
              <div className="grid gap-3">
                {authoritySignals.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.15rem] border border-[var(--color-border)] bg-white/70 px-4 py-3.5"
                  >
                    <p className="text-sm font-medium text-[var(--color-text)]">{item.title}</p>
                    <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{item.description}</p>
                  </div>
                ))}
              </div>
            </SurfaceCard>
          </div>

          <div className="mt-7 grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
            {authorityHighlights.map((piece) => (
              <ContentLinkCard
                key={piece.title}
                type={piece.type}
                title={piece.title}
                description={piece.description}
                meta={piece.meta}
                href={piece.href}
                cta={piece.cta}
                tags={piece.tags}
                compact
              />
            ))}
          </div>

          <div className="mt-7">
            <DecisionGuard
              eyebrow="Antes de dar por valido un PDF, una captura o un saldo"
              title={beforeActionTitle}
              description={beforeActionDescription}
              items={[
                "Lo que suele llegar peor no es la falta de material, sino el material ya mezclado, reenviado o sin la fuente que lo hacia mas legible.",
                "Un PDF, una captura o un cargo aislado pueden orientar, pero se debilitan mucho cuando se separan de su secuencia y de su validacion real.",
                "Alertas, notificaciones, mensajes y versiones de archivo borrados demasiado pronto dejan huecos que luego ya no se explican igual.",
                "La intuicion inicial suele apretar antes que el analisis. Estas piezas ayudan a que no cierre el caso antes de tiempo.",
              ]}
              primaryAction={{ href: "/contacto", label: contactPageCtaLabel }}
              secondaryAction={{ href: "/servicios", label: "Ver especialidades" }}
            />
          </div>
        </Container>
      </Section>

      <Section tint="soft">
        <Container className="grid gap-8 xl:grid-cols-[1.12fr_0.88fr] xl:items-start">
          <div>
            <Eyebrow>Historias anonimizadas y experiencias aplicadas</Eyebrow>
            <SectionHeading
              title="Casos tipo donde una mala preservacion, una mala lectura o una atribucion precipitada debilitan el asunto"
              description="Estos patrones ya publicados muestran mejor que muchas descripciones de servicio por que un caso digital puede cambiar al ordenarse con criterio."
            />
            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {appliedStories.map((piece) => (
                <ContentLinkCard
                  key={piece.title}
                  type={piece.type}
                  title={piece.title}
                  description={piece.description}
                  meta={piece.meta}
                  href={piece.href}
                  cta={piece.cta}
                  tags={piece.tags}
                  compact
                />
              ))}
            </div>
          </div>

          <ImagePanel
            src="/images/resources/resources-featured.svg"
            alt="Escena editorial con documentos, monitor y recursos aplicados"
            eyebrow="Historias y patron"
            title="La experiencia aplicada se hace visible cuando el contenido muestra donde se rompe un caso y donde puede ordenarse mejor"
            description="Cada caso tipo trabaja como prueba publica de metodo: no cuenta un expediente, convierte un patron real en una lectura util y prudente."
            tags={["Casos tipo", "Patrones", "Metodo"]}
            aspect="landscape"
          />
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 xl:grid-cols-[0.88fr_1.12fr] xl:items-start">
          <div>
            <Eyebrow>Guias para revisar mejor</Eyebrow>
            <SectionHeading
              title="Lecturas aplicadas que aclaran que revisar, que conservar y por que una consulta temprana evita errores caros"
              description="Estas piezas conectan directamente con fraude e-commerce, moviles, mensajeria, cuentas instrumentales y revisiones donde el valor depende de secuencia y contexto."
            />
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {appliedGuides.map((piece) => (
              <ContentLinkCard
                key={piece.title}
                type={piece.type}
                title={piece.title}
                description={piece.description}
                meta={piece.meta}
                href={piece.href}
                cta={piece.cta}
                tags={piece.tags}
                compact
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section tint="soft">
        <Container className="grid gap-8 xl:grid-cols-[0.88fr_1.12fr] xl:items-start">
          <div>
            <Eyebrow>Base documental</Eyebrow>
            <SectionHeading
              title="El suelo comun sigue siendo el mismo: valor documental, preservacion, alcance y limites"
              description="Sin esta base, los casos llamativos pierden peso muy deprisa. Con esta base, las piezas mas aplicadas se vuelven mucho mas utiles comercial y tecnicamente."
            />
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {documentaryBase.map((piece) => (
              <ContentLinkCard
                key={piece.title}
                type={piece.type}
                title={piece.title}
                description={piece.description}
                meta={piece.meta}
                href={piece.href}
                cta={piece.cta}
                tags={piece.tags}
                compact
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr] xl:items-start">
          <div>
            <Eyebrow>Puente a servicios y contacto</Eyebrow>
            <SectionHeading
              title="La biblioteca ya funciona como mapa de problemas reales y entrada natural a una especialidad o a una consulta cualificada"
              description="Despues de recorrer estas piezas suele resultar mas claro si el caso necesita fraude y trazabilidad, mensajeria y moviles, OSINT con limites o una revision tecnica de documentos y materiales digitales."
            />
          </div>
          <div className="grid gap-4">
            {serviceSpecialties.slice(0, 3).map((item) => (
              <ContentLinkCard
                key={item.slug}
                type="Especialidad"
                title={item.title}
                description={item.landing.description}
                meta={item.landing.meta}
                href={item.href}
                cta="Ver servicio"
                tags={item.landing.tags}
                compact
              />
            ))}
            <SurfaceCard
              title="Si el patron ya resulta demasiado reconocible"
              description="El siguiente paso no es actuar deprisa sin orden. Es fijar que material existe, en que estado llega y que salida documental puede ser razonable antes de seguir perdiendo contexto."
            >
              <div className="flex flex-wrap gap-3">
                <ButtonLink href="/contacto" label={contactPageCtaLabel} />
                <ButtonLink href={contactMailto} label={contactDirectCtaLabel} variant="secondary" />
              </div>
            </SurfaceCard>
          </div>
        </Container>
      </Section>

      <ActionBanner
        eyebrow="Centro editorial"
        title="Si el contenido ya deja ver el patron y sus limites, el siguiente paso es convertir esa lectura en una consulta mejor planteada"
        description="Recursos ya no actua como seccion secundaria. Funciona como prueba publica de experiencia aplicada y como filtro natural para consultas con mejor material, mejor contexto y menos ruido."
        primaryAction={{ href: "/contacto", label: contactPageCtaLabel }}
        secondaryAction={{ href: "/servicios", label: "Ver especialidades" }}
        note="Las mejores piezas no solo informan. Hacen visible que parte del problema ya puede estar en la conservacion, en la secuencia o en una atribucion cerrada demasiado pronto."
        highlights={[
          "Mas autoridad concreta en fraude, documentos, wallets, cripto, OSINT y mensajeria.",
          "Mejor cohesion entre patron observado, especialidad adecuada y consulta cualificada.",
        ]}
      />
    </>
  );
}
