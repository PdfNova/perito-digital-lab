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
    type: "Articulo aplicado",
    title: "Email bombing y fraude e-commerce",
    description:
      "Patron tecnico sobre correo saturado, alertas ocultas y la diferencia entre una bandeja molesta y una secuencia que merece revision seria.",
    meta: "Lectura estimada: 7 min",
    href: "/recursos/articulos/email-bombing-fraude-ecommerce",
    cta: "Leer articulo aplicado",
    tags: ["Fraude e-commerce", "Correo", "Secuencia"],
  },
  {
    type: "Guia tecnica",
    title: "Cuenta instrumental y fraccionamiento de ingresos",
    description:
      "Guia pensada para leer mejor patrones financieros visibles sin convertir recurrencias en certezas apresuradas.",
    meta: "Lectura estimada: 8 min",
    href: "/recursos/guias/cuenta-instrumental-fraccionamiento",
    cta: "Leer guia aplicada",
    tags: ["Trazabilidad", "Patron financiero", "Criterio"],
  },
  {
    type: "Caso tipo",
    title: "Fraude e-commerce con email bombing",
    description:
      "Caso tipo anonimo para mostrar como una secuencia aparentemente caotica cambia cuando se conserva y se correlaciona con criterio.",
    meta: "Lectura estimada: 6 min",
    href: "/recursos/casos/fraude-ecommerce-email-bombing",
    cta: "Leer caso tipo",
    tags: ["Caso tipo", "Ocultacion de alertas", "Preservacion"],
  },
];

const editorialRoutes = [
  {
    title: "Entrar por un patron reconocible",
    description:
      "Las nuevas piezas parten de asuntos concretos: correo saturado, cuentas intermedias, redistribucion de importes y secuencias mal preservadas.",
    tags: ["Patron", "Secuencia", "Lectura inicial"],
  },
  {
    title: "Pasar del patron al criterio",
    description:
      "La biblioteca no se limita a divulgar. Explica que puede sostenerse, que exige prudencia y por que una revision bien planteada ahorra errores.",
    tags: ["Limites", "Metodo", "Revision"],
  },
  {
    title: "Llegar a contacto con mejor encuadre",
    description:
      "Quien pasa por estas piezas suele formular mejor el problema, identificar materiales utiles y entender por que actuar tarde reduce valor.",
    tags: ["Consulta", "Preservacion", "Encaje"],
  },
];

const supportLibrary = [
  {
    type: "Articulo base",
    title: "Valor documental de la evidencia digital",
    description:
      "Marco inicial para entender por que contexto, integridad y trazabilidad siguen siendo el suelo comun de cualquier revision seria.",
    meta: "Lectura estimada: 6 min",
    href: "/recursos/articulos/valor-documental-evidencia-digital",
    cta: articleBaseCtaLabel,
    tags: ["Contexto", "Integridad", "Base documental"],
  },
  {
    type: "Articulo practico",
    title: "Preservacion inicial de evidencia digital",
    description:
      "Pieza centrada en errores iniciales de preservacion y en como afectan despues a la calidad de cualquier lectura tecnica.",
    meta: "Lectura estimada: 5 min",
    href: "/recursos/articulos/preservacion-inicial-evidencia-digital",
    cta: "Leer articulo practico",
    tags: ["Preservacion", "Errores frecuentes", "Punto de partida"],
  },
  {
    type: "Guia de alcance",
    title: "Revision tecnica de evidencia digital: alcance y limites",
    description:
      "Recurso para entender mejor que puede aportar una revision y por que explicar limites no debilita el resultado.",
    meta: "Lectura estimada: 7 min",
    href: "/recursos/guias/revision-tecnica-evidencia-digital",
    cta: technicalGuideCtaLabel,
    tags: ["Revision tecnica", "Alcance", "Conversion"],
  },
  {
    type: "Video principal",
    title: "Que hace util a una evidencia digital y que la debilita",
    description:
      "Pieza audiovisual de apertura para fijar el marco del proyecto y conectar despues con articulos, guias y casos tipo.",
    meta: "Duracion objetivo: 5:30-6:00",
    href: "/recursos/videos/episodio-01",
    cta: episodeCtaLabel,
    tags: ["Episodio 01", "Video largo", "Pieza base"],
  },
];

const readingSignals = [
  {
    title: "Actuar tarde suele reducir valor",
    description:
      "Varias piezas muestran el mismo principio: cuando la secuencia ya llega alterada, fragmentada o limpiada sin criterio, el margen de lectura se estrecha.",
  },
  {
    title: "Preservar bien ahorra errores caros",
    description:
      "La biblioteca refuerza la idea de que una mala preservacion no siempre destruye el caso, pero si puede complicarlo mucho mas de lo necesario.",
  },
  {
    title: "Un patron no equivale a una certeza",
    description:
      "El valor percibido del asesoramiento aumenta cuando el contenido hace visible que una revision seria tambien consiste en contener interpretaciones precipitadas.",
  },
  {
    title: "Una buena revision evita desorden acumulado",
    description:
      "El lector entiende mejor por que pedir ayuda no es solo buscar conclusiones, sino ordenar materiales antes de que el problema se vuelva mas costoso de explicar.",
  },
];

export const metadata: Metadata = buildPageMetadata({
  title: "Recursos sobre evidencia digital, preservacion y revision tecnica",
  description:
    "Hub editorial con articulos aplicados, guias, casos tipo y recursos base sobre evidencia digital, preservacion, revision tecnica y documentacion.",
  path: "/recursos",
});

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Hub editorial"
        title="Recursos tecnicos y editoriales convertidos en criterio aplicado y autoridad visible"
        subtitle="La biblioteca ya no solo explica conceptos. Publica patrones, guias y casos tipo anonimizados para mostrar mejor donde una revision tecnica aporta orden, limites y salida documental util."
        primaryAction={{ href: "#destacados", label: "Ver piezas destacadas" }}
        secondaryAction={{ href: "/contacto", label: contactPageCtaLabel }}
        chips={[
          "Articulos aplicados",
          "Guias tecnicas",
          "Casos tipo",
          "Base documental",
        ]}
        stats={[
          { value: "7", label: "Piezas publicas ya navegables" },
          { value: "3", label: "Piezas de patron integradas" },
          { value: "Activo", label: "Hub editorial listo para captar mejor" },
        ]}
        notes={[
          "Las nuevas piezas elevan el tono desde la observacion tecnica, el patron y los limites, no desde la espectacularidad del caso.",
          "El contenido ahora sostiene mejor la necesidad percibida de criterio experto antes de convertir el problema en encargo.",
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
              title="Contenido para reconocer mejor el patron y llegar a la consulta con mas criterio"
              description="La biblioteca se organiza para que una primera visita pase de la intuicion al encuadre tecnico: que se observa, que puede sostenerse y por que preservar y ordenar a tiempo importa."
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
            description="Aqui es donde el contenido deja de sonar a divulgacion general y empieza a comportarse como experiencia aplicada, prudente y util."
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
              title="La base documental sigue sosteniendo las piezas mas aplicadas"
              description="Las nuevas lecturas ganan fuerza porque descansan sobre un marco previo de valor documental, preservacion y limites de la revision."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {supportLibrary.map((piece) => (
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
            alt="Escena editorial con episodio principal, articulos y guia tecnica en un entorno premium"
            eyebrow="Sistema editorial"
            title="Las piezas de patron ganan credibilidad porque nacen de una base documental ya visible"
            description="El contenido no sustituye el asesoramiento. Prepara mejor la conversacion, filtra expectativas y hace mas comprensible el valor de una revision bien planteada."
            tags={["Base documental", "Articulos aplicados", "Guia", "Firma"]}
            aspect="landscape"
          />
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-start">
          <div>
            <Eyebrow>Lo que estas piezas dejan claro</Eyebrow>
            <SectionHeading
              title="El contenido ya transmite por que el criterio tecnico evita errores caros"
              description="La biblioteca no empuja hacia contacto por insistencia comercial. Lo hace mostrando de forma natural que preservar mal, llegar tarde o interpretar demasiado pronto complica el caso."
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {readingSignals.map((piece) => (
              <SurfaceCard key={piece.title} title={piece.title} description={piece.description} compact />
            ))}
          </div>
        </Container>
      </Section>

      <Section tint="soft">
        <Container className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
          <div>
            <Eyebrow>Puente a servicios</Eyebrow>
            <SectionHeading
              title="Las lecturas publicas ya preparan mejor una consulta real"
              description="Despues de recorrer estas piezas suele resultar mas claro que material existe, que patron se intuye y por que una revision experta no consiste en afirmar mas, sino en leer mejor."
            />
          </div>
          <div className="grid gap-4">
            {featuredPieces.map((item) => (
              <SurfaceCard key={item.title} title={item.title} description={item.description} />
            ))}
            <SurfaceCard
              title="Puente hacia contacto"
              description="Quien llega a contacto despues de pasar por recursos suele plantear mejor el problema, identificar materiales utiles y entender que una buena preservacion cambia la calidad del encargo."
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
        title="Si el contenido ya deja ver el patron y sus limites, el siguiente paso es convertir esa lectura en una consulta mejor planteada"
        description="Recursos ya no es una seccion secundaria. Es una portada editorial con peso comercial real, pensada para mostrar experiencia aplicada y mejorar la calidad del primer contacto."
        primaryAction={{ href: "/contacto", label: contactPageCtaLabel }}
        secondaryAction={{ href: "/servicios", label: "Volver a servicios" }}
        note="Las mejores piezas ya no solo informan. Hacen visible por que un caso real necesita criterio, preservacion y revision experta."
        highlights={[
          "Piezas publicas mas memorables y mas conectadas con servicios.",
          "Mejor cohesion entre patron observado, asesoramiento y primer contacto.",
        ]}
      />
    </>
  );
}
