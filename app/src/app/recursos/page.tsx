import type { Metadata } from "next";
import Link from "next/link";
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
  contactDirectCtaLabel,
  contactMailto,
  contactPageCtaLabel,
} from "../site-config";

const featuredPieces = [
  {
    type: "Video principal",
    title: "Que hace util a una evidencia digital y que la debilita",
    description:
      "Pieza audiovisual de apertura sobre contexto, integridad, preservacion y valor documental en evidencia digital.",
    meta: "Duracion objetivo: 5:30-6:00",
    href: "/recursos/videos/episodio-01",
    cta: "Ver episodio",
    tags: ["Episodio 01", "Video largo", "Pieza base"],
  },
  {
    type: "Articulo destacado",
    title: "Valor documental de la evidencia digital",
    description:
      "Articulo base para entender por que una pieza digital necesita contexto, orden y trazabilidad para sostenerse mejor.",
    meta: "Lectura estimada: 6 min",
    href: "/recursos/articulos/valor-documental-evidencia-digital",
    cta: "Leer articulo",
    tags: ["Articulo", "Integridad", "Documentacion"],
  },
  {
    type: "Guia tecnica",
    title: "Revision tecnica de evidencia digital: alcance y limites",
    description:
      "Recurso orientado a explicar que puede aportar una revision tecnica y por que los limites refuerzan la credibilidad del analisis.",
    meta: "Lectura estimada: 7 min",
    href: "/recursos/guias/revision-tecnica-evidencia-digital",
    cta: "Leer guia",
    tags: ["Guia", "Revision tecnica", "Conversion"],
  },
];

const articles = [
  {
    type: "Articulo",
    title: "Valor documental de la evidencia digital",
    description:
      "Pieza de apertura sobre contexto, integridad, trazabilidad y factores que refuerzan o debilitan la utilidad de una evidencia.",
    meta: "Base editorial",
    href: "/recursos/articulos/valor-documental-evidencia-digital",
    cta: "Leer articulo",
    tags: ["Contexto", "Integridad", "Trazabilidad"],
  },
  {
    type: "Articulo",
    title: "Preservacion inicial de evidencia digital",
    description:
      "Guia practica sobre errores frecuentes de preservacion, orden de materiales y criterios minimos para un mejor punto de partida.",
    meta: "Pieza practica",
    href: "/recursos/articulos/preservacion-inicial-evidencia-digital",
    cta: "Leer articulo",
    tags: ["Preservacion", "Errores frecuentes", "Punto de partida"],
  },
];

const shorts = [
  {
    title: "No toda evidencia digital vale lo mismo",
    description:
      "Corte vertical que fija la idea central del episodio 01: el valor depende tambien del contexto, la integridad y la claridad documental.",
    meta: "35 a 45 segundos",
  },
  {
    title: "El contexto puede ser tan importante como el archivo",
    description:
      "Short derivado para explicar por que fecha, origen y secuencia cambian la lectura de un mismo material digital.",
    meta: "40 a 50 segundos",
  },
  {
    title: "Una revision tecnica no demuestra cualquier cosa",
    description:
      "Pieza breve derivada del segundo lote para alinear expectativas y reforzar el valor de los limites claros.",
    meta: "35 a 45 segundos",
  },
  {
    title: "Explicar limites tambien es una forma de rigor",
    description:
      "Corte vertical orientado a conversion cualificada y a la lectura del nuevo recurso tecnico.",
    meta: "40 a 50 segundos",
  },
];

const upcoming = [
  {
    title: "Que puede aportar realmente OSINT y donde estan sus limites",
    description:
      "Siguiente pieza prevista para ampliar el marco entre fuentes abiertas, contexto util y prudencia interpretativa.",
  },
  {
    title: "Diferencia entre indicio, correlacion e inferencia",
    description:
      "Contenido siguiente para reforzar lectura conceptual y mejorar la comprension de cualquier analisis posterior.",
  },
];

export const metadata: Metadata = buildPageMetadata({
  title: "Recursos sobre evidencia digital, preservacion y revision tecnica",
  description:
    "Hub editorial con articulos, guias tecnicas, video y piezas breves sobre evidencia digital, preservacion, revision tecnica y documentacion.",
  path: "/recursos",
});

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Recursos"
        title="Recursos tecnicos y editoriales para leer mejor evidencia digital, preservacion y revision"
        subtitle="La biblioteca editorial ya funciona como un hub real: piezas destacadas, articulos, video principal, guias tecnicas y contenidos breves pensados para autoridad, descubrimiento y conversion."
        primaryAction={{ href: "#destacados", label: "Ver destacados" }}
        secondaryAction={{ href: "/contacto", label: contactPageCtaLabel }}
        stats={[
          { value: "3", label: "Piezas publicas principales" },
          { value: "4", label: "Shorts previstos y derivados" },
          { value: "Real", label: "Hub editorial ya navegable" },
        ]}
        notes={[
          "Todas las piezas comparten un mismo marco: contexto, integridad, preservacion y claridad documental.",
          "El contenido ya actua como capa de autoridad y como filtro de consultas mejor planteadas.",
        ]}
        visual={
          <ImagePanel
            src="/images/resources/resources-hero.svg"
            alt="Mesa editorial con monitor, documentacion tecnica y piezas de contenido sobre evidencia digital y revision"
            eyebrow="Hub editorial"
            title="Una portada editorial pensada para descubrir contenido real y avanzar hacia una consulta mejor planteada"
            description="La biblioteca ya no presenta promesas futuras: muestra piezas concretas, enlazadas entre si y alineadas con servicios, metodologia y contacto."
            tags={["Articulos", "Guias", "Video", "Shorts"]}
            priority
          />
        }
      />

      <Section>
        <Container className="grid gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-start">
          <div>
            <Eyebrow>Portada editorial</Eyebrow>
            <SectionHeading
              title="Una biblioteca que ya muestra criterio, continuidad y contenido util"
              description="El hub editorial deja ver las piezas mas relevantes, facilita la navegacion entre ellas y ayuda a que la web se perciba como una firma viva y no como una simple presentacion de servicios."
            />
          </div>
          <SurfaceCard
            title="Como se usa este hub"
            description="Puede leerse por tema, por formato o por momento del proceso: comprender valor documental, mejorar la preservacion inicial, alinear expectativas sobre revision tecnica o pasar a contacto con mejor contexto."
          >
            <TagList
              items={[
                "Descubrimiento",
                "Autoridad",
                "Conversion",
                "Continuidad editorial",
              ]}
            />
          </SurfaceCard>
        </Container>
      </Section>

      <Section tint="soft" className="py-10 md:py-12">
        <Container>
          <div className="flex flex-wrap gap-3">
            {[
              { href: "#destacados", label: "Destacados" },
              { href: "#articulos", label: "Articulos" },
              { href: "#guia", label: "Guia tecnica" },
              { href: "#video", label: "Video principal" },
              { href: "#breves", label: "Piezas breves" },
              { href: "#siguientes", label: "Siguientes contenidos" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-[var(--color-border)] bg-[rgba(255,255,255,0.72)] px-4 py-2.5 text-sm font-medium text-[var(--color-text)] transition hover:border-[var(--color-border-strong)] hover:bg-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section tint="soft">
        <Container id="destacados">
          <SectionHeading
            title="Destacados"
            description="Las piezas principales del momento articulan la entrada editorial del proyecto y concentran el mayor impacto para una primera visita."
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

      <Section>
        <Container id="articulos" className="grid gap-8 lg:grid-cols-[1.04fr_0.96fr] lg:items-start">
          <div>
            <Eyebrow>Articulos</Eyebrow>
            <SectionHeading
              title="Articulos ya disponibles"
              description="Las piezas escritas funcionan como columna base del hub: fijan lenguaje, ordenan conceptos y preparan mejor la entrada a guias, video y contacto."
            />
            <div className="mt-8 grid gap-4">
              {articles.map((article) => (
                <ContentLinkCard
                  key={article.title}
                  type={article.type}
                  title={article.title}
                  description={article.description}
                  meta={article.meta}
                  href={article.href}
                  cta={article.cta}
                  tags={article.tags}
                />
              ))}
            </div>
          </div>

          <ImagePanel
            src="/images/resources/resources-featured.svg"
            alt="Escena editorial con pieza audiovisual principal, articulos y notas tecnicas conectadas"
            eyebrow="Video principal"
            title="El video de apertura y los articulos base forman una misma serie editorial"
            description="La combinacion de episodio, articulos y guia tecnica convierte recursos en una portada editorial coherente, no en una coleccion dispersa de piezas."
            tags={["Episodio 01", "Serie inicial", "Biblioteca activa"]}
            aspect="landscape"
          />
        </Container>
      </Section>

      <Section tint="soft">
        <Container id="guia" className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
          <div>
            <Eyebrow>Guia tecnica</Eyebrow>
            <SectionHeading
              title="Una pieza orientada a conversion cualificada"
              description="La guia sobre revision tecnica no actua como contenido accesorio. Funciona como puente entre lectura editorial, expectativa realista y contacto mejor encuadrado."
            />
          </div>
          <ContentLinkCard
            type="Guia tecnica"
            title="Revision tecnica de evidencia digital: alcance y limites"
            description="Recurso pensado para explicar que puede aportar una revision, que no conviene pedirle y por que los limites mejoran la credibilidad del trabajo."
            meta="Pieza de segundo lote"
            href="/recursos/guias/revision-tecnica-evidencia-digital"
            cta="Leer guia tecnica"
            tags={["Revision tecnica", "Alcance", "Limites", "Conversion"]}
          />
        </Container>
      </Section>

      <Section tint="soft">
        <Container id="breves" className="grid gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-start">
          <div>
            <Eyebrow>Piezas breves</Eyebrow>
            <SectionHeading
              title="Shorts derivados para descubrimiento y continuidad"
              description="Las piezas breves no aparecen como ruido aislado: funcionan como cortes orientados a vertical para llevar hacia el episodio, los articulos o la guia tecnica."
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

      <Section>
        <Container id="video" className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
          <SurfaceCard
            title="Video principal de la serie"
            description="El episodio 01 articula la entrada audiovisual del proyecto y ayuda a convertir el marco metodologico en una pieza breve, clara y publicable."
          >
            <TagList items={["Episodio 01", "Video largo", "Marco base", "Shorts"]} />
            <Link className="inline-link" href="/recursos/videos/episodio-01">
              Ver pagina del episodio
            </Link>
          </SurfaceCard>

          <SurfaceCard
            title="Ruta recomendada de lectura"
            description="Una ruta sencilla para una primera visita: articulo base, preservacion inicial, guia de revision tecnica y despues contacto si la necesidad ya esta mejor planteada."
          >
            <TagList items={["Articulo base", "Preservacion", "Guia tecnica", "Contacto"]} />
          </SurfaceCard>
        </Container>
      </Section>

      <Section tint="soft">
        <Container id="siguientes" className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <Eyebrow>Proximos contenidos</Eyebrow>
            <SectionHeading
              title="Lo siguiente en la serie"
              description="El hub ya muestra hacia donde crece la biblioteca: fuentes abiertas con limites, correlacion de indicios y mas piezas sobre alcance real del analisis."
            />
            <div className="mt-8 grid gap-4">
              {upcoming.map((item) => (
                <SurfaceCard key={item.title} title={item.title} description={item.description} />
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <SurfaceCard
              title="Navegacion entre piezas"
              description="El valor del hub aumenta cuando una lectura empuja de forma natural a la siguiente: del articulo base a preservacion, de ahi a revision tecnica y despues a contacto."
            >
              <TagList
                items={[
                  "Lectura encadenada",
                  "Mas tiempo de exploracion",
                  "Mejor calidad de la consulta",
                ]}
              />
            </SurfaceCard>

            <SurfaceCard
              title="Puente hacia contacto"
              description="Quien llega a contacto despues de pasar por recursos suele entender mejor contexto, materiales y limites razonables del trabajo."
            >
              <div className="grid gap-3">
                <Link className="inline-link" href="/contacto">
                  Pasar a contacto con mejor contexto
                </Link>
                <ButtonLink href={contactMailto} label={contactDirectCtaLabel} variant="secondary" />
              </div>
            </SurfaceCard>
          </div>
        </Container>
      </Section>

      <ActionBanner
        title="Si el contenido ya aclara el marco, el siguiente paso es convertir esa lectura en una consulta mejor formulada"
        description="Recursos ya no es una seccion secundaria. Es una portada editorial que ayuda a entender mejor el problema, mejora el descubrimiento del sitio y refuerza la calidad del contacto."
        primaryAction={{ href: "/contacto", label: contactPageCtaLabel }}
        secondaryAction={{ href: "/servicios", label: "Ver servicios" }}
        note="El contenido publicado ya refuerza autoridad, filtra expectativas y sostiene mejor la conversion."
        highlights={[
          "Hub editorial real con piezas enlazadas y navegables.",
          "Segundo lote ya integrado con nueva guia y nuevos shorts.",
        ]}
      />
    </>
  );
}
