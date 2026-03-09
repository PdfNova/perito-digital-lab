export type ServiceResourceLink = {
  type: string;
  title: string;
  description: string;
  meta: string;
  href: string;
  cta: string;
  tags: string[];
};

export type ServiceSpecialty = {
  slug: string;
  href: string;
  title: string;
  metadataTitle: string;
  metadataDescription: string;
  eyebrow: string;
  subtitle: string;
  chips: string[];
  stats: { value: string; label: string }[];
  notes: string[];
  visual: {
    src: string;
    alt: string;
    eyebrow: string;
    title: string;
    description: string;
    tags: string[];
  };
  landing: {
    description: string;
    meta: string;
    tags: string[];
  };
  problems: { title: string; description: string }[];
  fitCases: string[];
  missed: string[];
  contribution: string[];
  limits: string[];
  outputs: string[];
  relatedResources: ServiceResourceLink[];
};

export const serviceSpecialties: ServiceSpecialty[] = [
  {
    slug: "peritaje-moviles-mensajeria",
    href: "/servicios/peritaje-moviles-mensajeria",
    title: "Peritaje de moviles, mensajeria y evidencia digital",
    metadataTitle: "Peritaje de moviles, mensajeria y evidencia digital con revision tecnica",
    metadataDescription:
      "Servicio especializado para revisar moviles, conversaciones, exportaciones y evidencia digital con foco en secuencia, contexto, limites y salida documental prudente.",
    eyebrow: "Especialidad / moviles y mensajeria",
    subtitle:
      "Servicio orientado a asuntos donde conversaciones, exportaciones, capturas y materiales de moviles necesitan orden, secuencia y una lectura tecnica capaz de sostenerse mejor ante terceros.",
    chips: ["Moviles", "Mensajeria", "Exportaciones", "Evidencia digital"],
    stats: [
      { value: "Fuente", label: "Separacion de capturas, exportaciones y adjuntos" },
      { value: "Secuencia", label: "Reconstruccion temporal prudente" },
      { value: "Documento", label: "Salida clara para terceros" },
    ],
    notes: [
      "El valor del caso no suele depender solo del contenido de un mensaje, sino de su secuencia, su fuente y su contexto.",
      "La revision tecnica evita mezclar conflicto, intuicion y documento dentro de la misma capa de lectura.",
    ],
    visual: {
      src: "/images/slots/slot-moviles.svg",
      alt: "Dispositivos, capturas y exportaciones organizadas para un servicio de peritaje de moviles y mensajeria",
      eyebrow: "Peritaje movil",
      title: "Una conversacion no se vuelve mas solida por acumular pantallas, sino por ordenarlas con criterio",
      description:
        "La pagina explica cuando el trabajo tecnico aporta mas valor: al separar fuentes, fijar ventanas temporales y preparar una salida documental legible.",
      tags: ["Moviles", "Mensajeria", "Contexto"],
    },
    landing: {
      description:
        "Revision de conversaciones, capturas, exportaciones y materiales de dispositivos cuando el problema exige orden documental y lectura prudente.",
      meta: "Especialidad publica",
      tags: ["Moviles", "Mensajeria", "Informe"],
    },
    problems: [
      {
        title: "Conversaciones mezcladas y fragmentarias",
        description:
          "Capturas, exportaciones parciales y mensajes reenviados que no pueden leerse de forma aislada sin perder contexto.",
      },
      {
        title: "Secuencia incompleta o mal preservada",
        description:
          "Periodos distintos, marcas temporales poco claras o material alterado durante el intercambio entre partes.",
      },
      {
        title: "Conflicto narrativo por encima del documento",
        description:
          "Relatos cargados de interpretacion que dificultan separar lo observable de lo que solo se deduce.",
      },
      {
        title: "Necesidad de una salida clara para terceros",
        description:
          "Casos donde no basta con acumular pantallas: hace falta convertir el material en cronologia, nota tecnica o informe legible.",
      },
    ],
    fitCases: [
      "Asuntos con moviles, conversaciones o exportaciones que llegan en formatos distintos y sin estructura comun.",
      "Procedimientos donde la mensajeria modifica el contexto del asunto pero aun no esta ordenada con criterio.",
      "Encargos donde importa diferenciar lo que un mensaje muestra, lo que su secuencia sugiere y lo que todavia no conviene afirmar.",
      "Consultas que necesitan una salida tecnica o documental util para despacho, parte o tercero no tecnico.",
    ],
    missed: [
      "Dar el mismo peso a una captura aislada y a una exportacion con continuidad suficiente.",
      "Renombrar, reenviar o recortar archivos sin dejar claro que material es original y cual ya esta transformado.",
      "Confundir la explicacion del conflicto con la estructura documental del caso.",
      "Asumir que mas volumen de mensajes equivale automaticamente a mas valor probatorio.",
    ],
    contribution: [
      "Separar fuentes, capas de material y ventanas temporales para que la base deje de comportarse como ruido.",
      "Reconstruir secuencias razonables y relaciones entre mensajes, adjuntos, exportaciones y otros hitos del asunto.",
      "Delimitar con prudencia que puede sostenerse, que solo funciona como contexto y que necesita mas soporte.",
      "Preparar cronologias, cuadros de piezas o notas tecnicas que mejoren la lectura del caso fuera del entorno del conflicto.",
    ],
    limits: [
      "No toda conversacion fragmentaria permite una conclusion fuerte.",
      "Una revision tecnica puede ordenar mucho el caso sin convertir por si sola el material en prueba absoluta.",
      "La falta de continuidad o una preservacion pobre condicionan el alcance de cualquier lectura posterior.",
      "La prudencia expositiva forma parte del rigor y tambien del valor del servicio.",
    ],
    outputs: [
      "Cronologia tecnica de conversaciones o eventos relevantes.",
      "Revision tecnica de capturas, exportaciones y materiales de dispositivo.",
      "Cuadro documental de piezas y relaciones visibles.",
      "Nota tecnica o informe orientado a terceros con lenguaje prudente.",
    ],
    relatedResources: [
      {
        type: "Guia aplicada",
        title: "Mensajeria, moviles y conflictos civiles",
        description:
          "Pieza para entender por que el orden documental importa tanto como el contenido en asuntos sensibles.",
        meta: "Lectura estimada: 8 min",
        href: "/recursos/guias/mensajeria-moviles-conflictos-civiles",
        cta: "Leer guia aplicada",
        tags: ["Moviles", "Mensajeria", "Conflictos civiles"],
      },
      {
        type: "Guia de alcance",
        title: "Revision tecnica de evidencia digital: alcance y limites",
        description:
          "Marco para ajustar expectativas y entender mejor hasta donde puede sostenerse una revision tecnica seria.",
        meta: "Lectura estimada: 7 min",
        href: "/recursos/guias/revision-tecnica-evidencia-digital",
        cta: "Leer guia tecnica",
        tags: ["Revision tecnica", "Limites", "Metodo"],
      },
      {
        type: "Articulo base",
        title: "Valor documental de la evidencia digital",
        description:
          "Pieza base sobre contexto, integridad y trazabilidad documental para entender mejor la fuerza de cualquier material digital.",
        meta: "Lectura estimada: 6 min",
        href: "/recursos/articulos/valor-documental-evidencia-digital",
        cta: "Leer articulo base",
        tags: ["Contexto", "Integridad", "Documento"],
      },
    ],
  },
  {
    slug: "osint-huella-digital",
    href: "/servicios/osint-huella-digital",
    title: "OSINT, huella digital y correlacion de indicios",
    metadataTitle: "OSINT, huella digital y correlacion de indicios con limites de atribucion",
    metadataDescription:
      "Servicio especializado en OSINT, huella digital y correlacion de activos abiertos con metodo, trazabilidad y limites claros de atribucion prudente.",
    eyebrow: "Especialidad / OSINT y huella digital",
    subtitle:
      "Servicio orientado a consultas donde perfiles, alias, activos abiertos, dominios o rastros visibles exigen una lectura metodologica, prudente y bien documentada antes de sostener conclusiones mas fuertes.",
    chips: ["OSINT", "Huella digital", "Activos abiertos", "Correlacion"],
    stats: [
      { value: "Fuente", label: "Observacion abierta trazable" },
      { value: "Relacion", label: "Correlacion entre indicios visibles" },
      { value: "Limites", label: "Atribucion contenida y prudente" },
    ],
    notes: [
      "El valor de OSINT no esta solo en localizar activos visibles, sino en saber jerarquizarlos y documentar su alcance real.",
      "Una correlacion prometedora puede perder fuerza si se formula con un lenguaje de atribucion que el material todavia no sostiene.",
    ],
    visual: {
      src: "/images/slots/slot-analista.svg",
      alt: "Analista revisando activos abiertos y notas para un servicio de OSINT y huella digital",
      eyebrow: "Correlacion abierta",
      title: "Encontrar no basta. Hace falta saber hasta donde no conviene atribuir",
      description:
        "La especialidad se centra en localizar, ordenar y documentar indicios abiertos con metodo y limites, no en inflar coincidencias llamativas.",
      tags: ["OSINT", "Huella digital", "Atribucion"],
    },
    landing: {
      description:
        "Localizacion y correlacion de activos abiertos, perfiles y huella digital con trazabilidad del razonamiento y limites claros de atribucion.",
      meta: "Especialidad publica",
      tags: ["OSINT", "Huella digital", "Correlacion"],
    },
    problems: [
      {
        title: "Activos abiertos dispersos",
        description:
          "Perfiles, alias, dominios o publicaciones visibles que no tienen todavia una estructura comun de lectura.",
      },
      {
        title: "Correlaciones prometedoras pero mal formuladas",
        description:
          "Coincidencias tecnicamente interesantes que se presentan ya como identidad cerrada o atribucion total.",
      },
      {
        title: "Falta de trazabilidad del razonamiento",
        description:
          "Capturas, enlaces o referencias abiertas sin fecha, fuente o explicacion suficiente sobre como se relacionan.",
      },
      {
        title: "Necesidad de una salida prudente para terceros",
        description:
          "Casos donde importa explicar bien que se observa, que patron existe y donde empiezan los limites del material.",
      },
    ],
    fitCases: [
      "Consultas donde hay alias, perfiles o activos abiertos que necesitan lectura conjunta y jerarquizada.",
      "Asuntos en los que la huella digital visible puede aportar contexto, localizacion o relacion entre indicios.",
      "Encargos donde hace falta distinguir observacion abierta, correlacion consistente e inferencia que exige mas soporte.",
      "Situaciones donde el valor esta tanto en documentar hallazgos como en contener mejor el lenguaje de atribucion.",
    ],
    missed: [
      "Confundir una coincidencia visible con una prueba cerrada de identidad.",
      "Mezclar materiales abiertos de valor desigual sin una estructura comun de fuente y fecha.",
      "Usar lenguaje de atribucion fuerte sobre activos que solo permiten, por ahora, una lectura contextual o relacional.",
      "Pensar que el valor del trabajo esta en encontrar mucho y no en explicar bien que peso tiene cada hallazgo.",
    ],
    contribution: [
      "Ordenar activos abiertos por fuente, fecha, relacion observable y nivel de interes tecnico.",
      "Construir correlaciones trazables entre perfiles, alias, dominios, publicaciones u otras senales visibles.",
      "Separar con claridad hallazgo, indicio contextual, patron consistente e inferencia que necesita soporte adicional.",
      "Traducir esa lectura a mapas de relacion, notas tecnicas y cronologias abiertas utiles para terceros.",
    ],
    limits: [
      "No toda correlacion abierta justifica una atribucion total.",
      "La ausencia de contradiccion no equivale a prueba positiva de identidad.",
      "OSINT aporta mucho valor, pero su fuerza depende de la calidad documental del razonamiento y del material visible.",
      "Parte del rigor consiste en dejar claro que no debe afirmarse todavia.",
    ],
    outputs: [
      "Mapa de activos abiertos y relaciones visibles.",
      "Cronologia de observaciones o publicaciones relevantes.",
      "Nota tecnica de correlacion y alcance prudente.",
      "Esquema documental para tercero no tecnico o despacho.",
    ],
    relatedResources: [
      {
        type: "Caso tipo",
        title: "Huella digital, OSINT y limites de atribucion",
        description:
          "Caso anonimo sobre como una correlacion abierta puede ser valiosa sin justificar todavia una atribucion total.",
        meta: "Lectura estimada: 6 min",
        href: "/recursos/casos/huella-digital-osint",
        cta: "Leer caso tipo",
        tags: ["OSINT", "Huella digital", "Atribucion"],
      },
      {
        type: "Guia de alcance",
        title: "Revision tecnica de evidencia digital: alcance y limites",
        description:
          "Marco util para entender por que la credibilidad mejora cuando el analisis explica bien sus limites.",
        meta: "Lectura estimada: 7 min",
        href: "/recursos/guias/revision-tecnica-evidencia-digital",
        cta: "Leer guia tecnica",
        tags: ["Limites", "Revision tecnica", "Metodo"],
      },
      {
        type: "Articulo base",
        title: "Valor documental de la evidencia digital",
        description:
          "Pieza base para entender por que trazabilidad, contexto y claridad expositiva condicionan la utilidad de una lectura tecnica.",
        meta: "Lectura estimada: 6 min",
        href: "/recursos/articulos/valor-documental-evidencia-digital",
        cta: "Leer articulo base",
        tags: ["Trazabilidad", "Contexto", "Documento"],
      },
    ],
  },
  {
    slug: "fraude-tecnologico-trazabilidad",
    href: "/servicios/fraude-tecnologico-trazabilidad",
    title: "Fraude tecnologico, cuentas instrumentales y trazabilidad",
    metadataTitle: "Fraude tecnologico, cuentas instrumentales y trazabilidad tecnica",
    metadataDescription:
      "Servicio especializado para fraude tecnologico, cuentas instrumentales y trazabilidad de movimientos, comunicaciones y eventos con salida documental clara y prudente.",
    eyebrow: "Especialidad / fraude y trazabilidad",
    subtitle:
      "Servicio para asuntos donde cuentas, comunicaciones, pedidos, importes fragmentados o eventos tecnicos exigen una lectura de secuencia y relacion mas seria que la de un dato aislado.",
    chips: ["Fraude tecnologico", "Trazabilidad", "Cuentas instrumentales", "Secuencia"],
    stats: [
      { value: "Relacion", label: "Cuentas, comunicaciones y eventos" },
      { value: "Patron", label: "Lectura conjunta de movimientos y contexto" },
      { value: "Salida", label: "Cronologia y documento prudente" },
    ],
    notes: [
      "El valor no suele aparecer en el movimiento mas llamativo, sino en la secuencia completa y en su relacion con otras capas del caso.",
      "Una revision seria distingue entre anomalia visible, patron consistente e inferencia que todavia exige soporte adicional.",
    ],
    visual: {
      src: "/images/services/services-detail.svg",
      alt: "Mesa de trabajo con informe tecnico y documentacion para un servicio de fraude tecnologico y trazabilidad",
      eyebrow: "Trazabilidad y fraude",
      title: "Un movimiento aislado puede decir poco. La secuencia completa puede decir mucho mas",
      description:
        "La especialidad se orienta a relacionar cuentas, comunicaciones, pedidos y eventos tecnicos dentro de un mismo marco documental.",
      tags: ["Fraude", "Trazabilidad", "Documento"],
    },
    landing: {
      description:
        "Lectura de fraude tecnologico, cuentas instrumentales y trazabilidad entre movimientos, comunicaciones y eventos con enfoque prudente.",
      meta: "Especialidad publica",
      tags: ["Fraude", "Trazabilidad", "Cuentas instrumentales"],
    },
    problems: [
      {
        title: "Movimientos o eventos leidos por separado",
        description:
          "Cargos, pedidos, cambios de cuenta o comunicaciones que, aislados, parecen menores pero juntos revelan una operativa mayor.",
      },
      {
        title: "Fragmentacion de importes o de materiales",
        description:
          "Entradas, salidas, correos y referencias documentales que no conservan todavia una secuencia util para terceros.",
      },
      {
        title: "Confusion entre trazabilidad y conclusion",
        description:
          "Datos interesantes que se presentan ya como explicacion cerrada sin exponer bien su alcance y sus limites.",
      },
      {
        title: "Necesidad de ordenar varias capas del caso",
        description:
          "Asuntos donde hace falta relacionar cuentas, comunicaciones, pedidos, perfiles o eventos tecnicos en un mismo relato documental.",
      },
    ],
    fitCases: [
      "Fraude e-commerce, movimientos sospechosos o importes fragmentados que necesitan lectura conjunta.",
      "Consultas donde una cuenta o evento parece intermedio y su funcion exige contexto adicional.",
      "Asuntos con secuencias de correo, pedidos o cambios de cuenta que afectan la comprension del patron.",
      "Encargos que necesitan una cronologia clara y una nota tecnica antes de dar pasos posteriores.",
    ],
    missed: [
      "Quedarse solo con capturas sueltas de movimientos o alertas.",
      "Perder la relacion entre secuencia financiera y contexto digital.",
      "Tratar cada anomalia como conclusion en lugar de como parte de un patron posible.",
      "Confundir rapidez operativa con claridad documental.",
    ],
    contribution: [
      "Construir una lectura conjunta entre movimientos, comunicaciones, pedidos, alertas y otros hitos del asunto.",
      "Detectar relaciones visibles y recurrencias que merecen lectura mas seria sin sobreactuar su alcance.",
      "Delimitar con prudencia que parte del patron puede sostenerse ya y que parte sigue abierta.",
      "Traducir el analisis a cronologias, tablas de relacion o notas tecnicas legibles para terceros.",
    ],
    limits: [
      "Una recurrencia visible no equivale por si sola a atribucion cerrada.",
      "La calidad de la documentacion condiciona mucho la fuerza de cualquier lectura de fraude o trazabilidad.",
      "No todo fraccionamiento implica la misma operativa ni permite la misma conclusion.",
      "La prudencia metodologica protege mejor el caso que una narrativa demasiado enfatica.",
    ],
    outputs: [
      "Cronologia tecnica de movimientos, comunicaciones y eventos.",
      "Tabla de relacion entre activos, cuentas o hitos del caso.",
      "Nota tecnica de trazabilidad y alcance prudente.",
      "Informe tecnico orientado a tercero o despacho.",
    ],
    relatedResources: [
      {
        type: "Caso tipo",
        title: "Cuenta instrumental, smurfing y operativa circular",
        description:
          "Caso anonimo para mostrar por que ingresos fragmentados y redistribucion rapida necesitan lectura conjunta y no una intuicion aislada.",
        meta: "Lectura estimada: 6 min",
        href: "/recursos/casos/cuenta-instrumental-smurfing-operativa-circular",
        cta: "Leer caso tipo",
        tags: ["Fraude bancario", "Smurfing", "Trazabilidad"],
      },
      {
        type: "Articulo aplicado",
        title: "Tokenizacion fraudulenta y pagos con wallet",
        description:
          "Patron para entender por que la tarjeta fisica puede seguir con su titular y, aun asi, existir una secuencia digital relevante.",
        meta: "Lectura estimada: 7 min",
        href: "/recursos/articulos/tokenizacion-fraudulenta-tarjeta-wallet",
        cta: "Leer articulo aplicado",
        tags: ["Wallet", "Tokenizacion", "Pago digital"],
      },
      {
        type: "Articulo aplicado",
        title: "Recovery scam cripto y falsa sensacion de rescate",
        description:
          "Pieza para reconocer la segunda capa de fraude que aparece despues de la perdida inicial y empeora la trazabilidad del caso.",
        meta: "Lectura estimada: 7 min",
        href: "/recursos/articulos/recovery-scam-cripto-falsa-recuperacion",
        cta: "Leer articulo aplicado",
        tags: ["Cripto", "Hashes", "Recovery scam"],
      },
    ],
  },
  {
    slug: "evidencia-digital-conflictos-civiles",
    href: "/servicios/evidencia-digital-conflictos-civiles",
    title: "Apoyo tecnico en conflictos civiles o de familia con evidencia digital",
    metadataTitle: "Apoyo tecnico en conflictos civiles o de familia con evidencia digital",
    metadataDescription:
      "Servicio especializado para conflictos civiles o de familia donde conversaciones, cronologias, huella digital o materiales moviles necesitan orden, criterio y salida documental prudente para terceros.",
    eyebrow: "Especialidad / conflictos civiles o de familia",
    subtitle:
      "Servicio orientado a asuntos sensibles donde mensajeria, cronologias, activos abiertos o materiales digitales alteran la lectura del caso y exigen una presentacion tecnica clara, prudente y util para terceros.",
    chips: ["Conflictos civiles", "Familia", "Mensajeria", "Evidencia digital"],
    stats: [
      { value: "Orden", label: "Material sensible mejor estructurado" },
      { value: "Contexto", label: "Secuencia y explicacion prudente" },
      { value: "Salida", label: "Documento util para terceros" },
    ],
    notes: [
      "En asuntos sensibles, el trabajo tecnico no deberia reproducir el desorden emocional del conflicto.",
      "Parte del valor esta en distinguir observacion, secuencia e interpretacion antes de convertir el material en salida documental.",
    ],
    visual: {
      src: "/images/slots/slot-despacho.svg",
      alt: "Despacho y documentacion para un servicio de apoyo tecnico en conflictos civiles o de familia",
      eyebrow: "Asuntos sensibles",
      title: "Cuando lo digital altera el contexto del asunto, hace falta mas orden y menos dramatizacion",
      description:
        "La especialidad se centra en conversaciones, cronologias, huella digital y materiales de evidencia que necesitan una lectura legible y prudente.",
      tags: ["Familia", "Cronologia", "Documento"],
    },
    landing: {
      description:
        "Apoyo tecnico y documental en asuntos civiles o de familia donde la evidencia digital exige orden, secuencia y una salida prudente.",
      meta: "Especialidad publica",
      tags: ["Familia", "Cronologia", "Evidencia digital"],
    },
    problems: [
      {
        title: "Material abundante pero desordenado",
        description:
          "Capturas, exportaciones, notas, cronologias parciales y activos abiertos que llegan mezclados y sin jerarquia clara.",
      },
      {
        title: "Contexto digital que cambia la lectura del asunto",
        description:
          "Conversaciones, secuencias o rastros visibles que no pueden entenderse bien sin una revision estructurada.",
      },
      {
        title: "Exceso de relato y poca estructura documental",
        description:
          "Materiales que se presentan desde la hipotesis del conflicto y no desde una base tecnica ordenada.",
      },
      {
        title: "Necesidad de una salida prudente para terceros",
        description:
          "Casos donde importa mucho mas la claridad de la explicacion que la espectacularidad del hallazgo.",
      },
    ],
    fitCases: [
      "Procedimientos civiles o de familia donde la mensajeria, los moviles o la huella digital son relevantes.",
      "Asuntos sensibles que exigen separar mejor documento, contexto e interpretacion.",
      "Consultas donde hace falta reconstruir una cronologia o una secuencia digital de forma legible para terceros.",
      "Encargos que requieren una pieza tecnica prudente y clara antes de cualquier paso posterior.",
    ],
    missed: [
      "Organizar el material siguiendo la intensidad del conflicto y no la logica documental del caso.",
      "Mezclar conversaciones, capturas y observaciones abiertas sin distinguir fuente y fecha.",
      "Asumir que una exposicion mas enfatica mejora la fuerza del material.",
      "No fijar desde el inicio que salida tecnica o documental seria realmente util.",
    ],
    contribution: [
      "Ordenar materiales heterogeneos para que la base deje de comportarse como una acumulacion de pantallas y notas.",
      "Reconstruir secuencias y relaciones entre mensajes, cronologias, activos abiertos y otros elementos relevantes.",
      "Distinguir con prudencia observacion, contexto, patron e interpretacion.",
      "Preparar cronologias, notas tecnicas o informes claros orientados a terceros no tecnicos.",
    ],
    limits: [
      "No toda evidencia fragmentaria permite una conclusion maxima.",
      "Una revision tecnica puede mejorar mucho la claridad sin sustituir otras capas del caso.",
      "La calidad del material de partida y su preservacion condicionan el alcance del trabajo.",
      "En asuntos sensibles, la prudencia expositiva no resta fuerza: mejora credibilidad.",
    ],
    outputs: [
      "Cronologia tecnica de hechos y materiales digitales.",
      "Revision de conversaciones, capturas, exportaciones o activos abiertos.",
      "Nota tecnica de contexto, relaciones y alcance prudente.",
      "Documento o informe claro para tercero no tecnico o despacho.",
    ],
    relatedResources: [
      {
        type: "Guia aplicada",
        title: "Mensajeria, moviles y conflictos civiles",
        description:
          "Guia para entender por que en asuntos sensibles el orden documental importa tanto como el contenido de las conversaciones.",
        meta: "Lectura estimada: 8 min",
        href: "/recursos/guias/mensajeria-moviles-conflictos-civiles",
        cta: "Leer guia aplicada",
        tags: ["Moviles", "Mensajeria", "Conflictos civiles"],
      },
      {
        type: "Guia de alcance",
        title: "Revision tecnica de evidencia digital: alcance y limites",
        description:
          "Recurso pensado para explicar que puede aportar una revision seria y por que sus limites importan en asuntos sensibles.",
        meta: "Lectura estimada: 7 min",
        href: "/recursos/guias/revision-tecnica-evidencia-digital",
        cta: "Leer guia tecnica",
        tags: ["Alcance", "Limites", "Revision tecnica"],
      },
      {
        type: "Caso tipo",
        title: "Huella digital, OSINT y limites de atribucion",
        description:
          "Caso anonimo util para entender como las trazas abiertas pueden aportar contexto sin justificar por si solas una atribucion total.",
        meta: "Lectura estimada: 6 min",
        href: "/recursos/casos/huella-digital-osint",
        cta: "Leer caso tipo",
        tags: ["OSINT", "Huella digital", "Contexto"],
      },
    ],
  },
];

export function getServiceSpecialty(slug: string): ServiceSpecialty {
  const specialty = serviceSpecialties.find((item) => item.slug === slug);

  if (!specialty) {
    throw new Error(`Unknown service specialty: ${slug}`);
  }

  return specialty;
}
