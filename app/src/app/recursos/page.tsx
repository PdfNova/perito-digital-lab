import type { Metadata } from "next";
import {
  ActionBanner,
  ButtonLink,
  Container,
  ContentLinkCard,
  Eyebrow,
  ImagePanel,
  PageHero,
  Section,
  SectionHeading,
  SurfaceCard,
  TagList,
} from "@/components/ui";
import { buildPageMetadata } from "../metadata";
import {
  articleBaseCtaLabel,
  contactDirectCtaLabel,
  contactMailto,
  contactPageCtaLabel,
  episodeCtaLabel,
  technicalGuideCtaLabel,
} from "../site-config";

const featuredPieces = [
  {
    type: "Video principal",
    title: "Que hace util a una evidencia digital y que la debilita",
    description:
      "Pieza audiovisual de apertura sobre contexto, integridad, preservacion y valor documental con funcion clara de autoridad publica.",
    meta: "Duracion objetivo: 5:30-6:00",
    href: "/recursos/videos/episodio-01",
    cta: episodeCtaLabel,
    tags: ["Episodio 01", "Video largo", "Pieza base"],
  },
  {
    type: "Articulo destacado",
    title: "Valor documental de la evidencia digital",
    description:
      "Articulo base para entender por que una pieza digital necesita contexto, orden y trazabilidad para sostenerse mejor.",
    meta: "Lectura estimada: 6 min",
    href: "/recursos/articulos/valor-documental-evidencia-digital",
    cta: articleBaseCtaLabel,
    tags: ["Articulo", "Integridad", "Documentacion"],
  },
  {
    type: "Guia tecnica",
    title: "Revision tecnica de evidencia digital: alcance y limites",
    description:
      "Recurso orientado a conversion para explicar que puede aportar una revision tecnica y por que sus limites importan.",
    meta: "Lectura estimada: 7 min",
    href: "/recursos/guias/revision-tecnica-evidencia-digital",
    cta: technicalGuideCtaLabel,
    tags: ["Guia", "Revision tecnica", "Conversion"],
  },
];

const editorialRoutes = [
  {
    title: "Entender valor documental",
    description:
      "Ruta recomendada para quien necesita ordenar conceptos y comprender por que no toda evidencia digital tiene la misma fuerza.",
    tags: ["Contexto", "Integridad", "Trazabilidad"],
  },
  {
    title: "Mejorar preservacion inicial",
    description:
      "Ruta util para perfilar mejor materiales, reducir errores frecuentes y llegar al analisis con un punto de partida mas legible.",
    tags: ["Preservacion", "Orden", "Punto de partida"],
  },
  {
    title: "Alinear expectativas sobre revision",
    description:
      "Ruta orientada a explicar alcance real, limites y utilidad documental antes de pedir una revision tecnica o pericial.",
    tags: ["Alcance", "Limites", "Revision tecnica"],
  },
];

const shorts = [
  {
    title: "No toda evidencia digital vale lo mismo",
    description:
      "Short pensado para fijar la idea central del episodio 01 y llevar hacia la lectura larga sin dramatizacion ni marketing vacio.",
    meta: "35 a 45 segundos",
  },
  {
    title: "El contexto puede ser tan importante como el archivo",
    description:
      "Pieza breve para explicar por que fecha, origen y secuencia cambian la lectura de un mismo material.",
    meta: "40 a 50 segundos",
  },
  {
    title: "Una revision tecnica no demuestra cualquier cosa",
    description:
      "Corte vertical orientado a conversion cualificada y a ajustar expectativas antes del contacto.",
    meta: "35 a 45 segundos",
  },
  {
    title: "Explicar limites tambien es una forma de rigor",
    description:
      "Pieza breve derivada de la guia tecnica para reforzar prudencia y autoridad metodologica.",
    meta: "40 a 50 segundos",
  },
];

const upcoming = [
  {
    title: "Que puede aportar realmente OSINT y donde estan sus limites",
    description:
      "Siguiente linea editorial prevista para reforzar el papel metodologico de fuentes abiertas dentro de la oferta comercial.",
  },
  {
    title: "Diferencia entre indicio, correlacion e inferencia",
    description:
      "Siguiente pieza para fijar lenguaje y elevar la calidad de cualquier conversacion posterior con perfiles juridicos y decisores.",
  },
  {
    title: "Lectura tecnica de mensajeria y exportaciones moviles",
    description:
      "Contenido previsto para conectar de forma directa la linea de servicios sobre moviles con la capa editorial del sitio.",
  },
];

export const metadata: Metadata = buildPageMetadata({
  title: "Recursos sobre evidencia digital, preservacion y revision tecnica",
  description:
    "Hub editorial con articulos, guia tecnica, video y piezas breves sobre evidencia digital, preservacion, revision tecnica y documentacion.",
  path: "/recursos",
});

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Hub editorial"
        title="Recursos tecnicos y editoriales convertidos en una ventaja comercial visible"
        subtitle="La biblioteca deja de verse como una seccion secundaria. Ahora funciona como escaparate de criterio, prueba publica de autoridad y filtro para consultas mejor formuladas."
        primaryAction={{ href: "#destacados", label: "Ver piezas destacadas" }}
        secondaryAction={{ href: "/contacto", label: contactPageCtaLabel }}
        chips={[
          "Articulos base",
          "Guia tecnica",
          "Video principal",
          "Piezas breves derivadas",
        ]}
        stats={[
          { value: "3", label: "Piezas publicas principales" },
          { value: "4", label: "Piezas breves previstas" },
          { value: "Activo", label: "Hub editorial ya navegable" },
        ]}
        notes={[
          "Todas las piezas comparten un mismo marco: contexto, integridad, preservacion y claridad documental.",
          "El contenido ahora sostiene mejor la percepcion de firma y trabaja junto a servicios y contacto.",
        ]}
        visual={
          <ImagePanel
            src="/images/resources/resources-hero.svg"
            alt="Portada editorial con monitor, mesa de despacho y recursos de autoridad"
            eyebrow="Biblioteca de firma"
            title="Una portada editorial pensada para descubrir, confiar y avanzar hacia una consulta mejor encuadrada"
            description="La pagina muestra piezas reales, continuidad entre formatos y una estructura visual mas fuerte para que el contenido se perciba como una ventaja profesional."
            tags={["Autoridad", "Descubrimiento", "Conversion"]}
            priority
          />
        }
      />

      <Section tint="dark">
        <Container className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
          <div>
            <Eyebrow tone="light">Como funciona el hub</Eyebrow>
            <SectionHeading
              title="Contenido para entender mejor el problema antes de pasar a la conversacion comercial"
              description="La biblioteca se organiza para que una primera visita pueda recorrer piezas clave, entender mejor el lenguaje del proyecto y llegar a contacto con expectativas mas realistas."
              tone="light"
            />
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {editorialRoutes.map((route) => (
              <SurfaceCard
                key={route.title}
                title={route.title}
                description={route.description}
                tone="light"
              >
                <TagList items={route.tags} tone="light" />
              </SurfaceCard>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container id="destacados">
          <SectionHeading
            title="Piezas destacadas"
            description="Las piezas principales concentran el mayor peso de autoridad y articulan la entrada editorial del proyecto."
            align="center"
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {featuredPieces.map((piece) => (
              <ContentLinkCard
                key={piece.title}
                type={piece.type}
                title={piece.title}
                description={piece.description}
                meta={piece.meta}
                href={piece.href}
                cta={piece.cta}
                tags={piece.tags}
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section tint="soft">
        <Container className="grid gap-8 lg:grid-cols-[1.04fr_0.96fr] lg:items-start">
          <div>
            <Eyebrow>Arquitectura editorial</Eyebrow>
            <SectionHeading
              title="El video, los articulos y la guia tecnica ya forman un sistema coherente"
              description="La combinacion de formatos hace que recursos parezca una serie editorial de firma, no una coleccion dispersa de textos y piezas sueltas."
            />
            <div className="mt-8 grid gap-4">
              <ContentLinkCard
                type="Articulo"
                title="Preservacion inicial de evidencia digital"
                description="Guia practica sobre errores frecuentes de preservacion, orden de materiales y criterios minimos para llegar mejor al analisis."
                meta="Pieza practica"
                href="/recursos/articulos/preservacion-inicial-evidencia-digital"
                cta="Leer articulo practico"
                tags={["Preservacion", "Errores frecuentes", "Punto de partida"]}
              />
            </div>
          </div>

          <ImagePanel
            src="/images/resources/resources-featured.svg"
            alt="Escena editorial con episodio principal, articulos y guia tecnica en un entorno premium"
            eyebrow="Serie inicial"
            title="La capa editorial ya tiene densidad suficiente para apoyar la marca y la conversion"
            description="El contenido no compite con los servicios. Los refuerza. Da lenguaje, autoridad y contexto antes de cualquier encargo."
            tags={["Video", "Articulos", "Guia", "Firma"]}
            aspect="landscape"
          />
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-start">
          <div>
            <Eyebrow>Piezas breves</Eyebrow>
            <SectionHeading
              title="Shorts derivados para descubrimiento, presencia y continuidad"
              description="Las piezas breves actuan como extensiones del hub: abren argumentos, empujan hacia las lecturas largas y hacen que la parte editorial gane visibilidad comercial."
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {shorts.map((piece) => (
              <SurfaceCard key={piece.title} title={piece.title} description={piece.description}>
                <p className="text-sm font-medium text-[var(--color-accent-strong)]">{piece.meta}</p>
              </SurfaceCard>
            ))}
          </div>
        </Container>
      </Section>

      <Section tint="soft">
        <Container className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
          <div>
            <Eyebrow>Siguientes lineas</Eyebrow>
            <SectionHeading
              title="La biblioteca ya deja ver hacia donde crece"
              description="La proyeccion editorial refuerza la sensacion de firma viva: OSINT con limites, correlacion de indicios, lectura de mensajeria y mas piezas sobre alcance real."
            />
          </div>
          <div className="grid gap-4">
            {upcoming.map((item) => (
              <SurfaceCard key={item.title} title={item.title} description={item.description} />
            ))}
            <SurfaceCard
              title="Puente hacia contacto"
              description="Quien llega a contacto despues de pasar por recursos suele entender mejor materiales, limites y utilidad documental del trabajo."
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
        eyebrow="Hub editorial"
        title="Si el contenido ya aclara el marco, el siguiente paso es convertir esa lectura en una consulta mejor formulada"
        description="Recursos ya no es una seccion secundaria. Es una portada editorial con peso comercial real, pensada para reforzar autoridad y mejorar la calidad del primer contacto."
        primaryAction={{ href: "/contacto", label: contactPageCtaLabel }}
        secondaryAction={{ href: "/servicios", label: "Volver a servicios" }}
        note="La biblioteca ya trabaja como capa de confianza, descubrimiento y conversion dentro de una misma narrativa de firma."
        highlights={[
          "Mayor visibilidad del contenido como prueba publica de criterio.",
          "Mejor cohesion entre recursos, servicios y contacto.",
        ]}
      />
    </>
  );
}
