# Public Case Sanitization

## Objetivo

Convertir material tecnico de origen real en contenido publicable sin exponer datos personales, financieros, procesales o institucionales que permitan identificar a personas, entidades, procedimientos o entornos concretos.

## Tipos de datos eliminados o reformulados

El material de trabajo utilizado como base editorial no conserva de forma publica ninguno de estos elementos:

- nombres y apellidos reales;
- DNI, NIE, pasaportes u otros identificadores documentales;
- cuentas bancarias, IBAN completos o referencias equivalentes;
- numeros de tarjeta o fragmentos que permitan su reconstruccion;
- direcciones fisicas completas;
- telefonos, correos o identificadores personales directos;
- IPs completas, identificadores tecnicos unicos o rutas internas no necesarias;
- nombres de juzgados, diligencias, expedientes o referencias procesales identificables;
- nombres de terceros que permitan reconstruir relaciones personales, comerciales o institucionales;
- marcas temporales exactas cuando puedan facilitar reidentificacion del caso.

## Reglas de anonimización aplicadas

### 1. Personas y entidades

- Las personas pasan a formularse como `persona A`, `interviniente B`, `tercero visible` o `comercio afectado`.
- Las entidades mercantiles se convierten en `plataforma`, `entidad emisora`, `pasarela de pago` o `proveedor`.
- Los nombres propios no se sustituyen por nombres ficticios realistas si eso puede inducir a pensar que se trata de un tercero concreto.

### 2. Datos financieros

- Los identificadores de cuenta se reducen a formulaciones como `cuenta receptora`, `cuenta instrumental`, `cuenta intermedia` o `cuenta de destino`.
- Las cantidades exactas se convierten, cuando conviene, en rangos o referencias cualitativas: `importe moderado`, `importes fragmentados`, `varios ingresos de cuantia similar`.
- Las secuencias financieras se explican como patron operativo, no como extracto literal.

### 3. Datos tecnicos

- Las IPs completas se eliminan o se reemplazan por formulaciones parciales y no reidentificables como `una IP residencial`, `un rango coherente`, `un acceso desde otra geografia`.
- Los identificadores de dispositivo, hashes, rutas locales o nombres internos solo se mantienen si son estrictamente didacticos y no proceden del caso real.
- Los logs se traducen a descripciones de comportamiento o secuencia tecnica.

### 4. Datos procesales o institucionales

- Las referencias a diligencias, oficios, juzgados, unidades o expedientes se reformulan como `procedimiento`, `encargo`, `fase documental` o `entorno procesal`.
- No se publican transcripciones literales de escritos ni fragmentos reconocibles de documentacion institucional.

### 5. Fechas, ubicaciones y cronologias

- Las fechas exactas se convierten en ventanas temporales: `en los dias posteriores`, `en la misma semana`, `en una fase inicial del caso`.
- Las ubicaciones concretas se reemplazan por niveles de generalidad compatibles con el analisis: `otra provincia`, `entorno nacional`, `operativa con componente transfronterizo`.

## Criterio editorial de publicación

El caso publico no replica un expediente. Lo convierte en un patron tecnico explicable.

La prioridad no es contar "lo que ocurrio" con detalle narrativo. La prioridad es extraer:

- patron operativo;
- indicios tecnicos relevantes;
- errores frecuentes de preservacion;
- limites del analisis;
- utilidad de una revision tecnica o documental.

## Nombres de casos tipo para uso publico

- `Caso tipo Alfa`: cuenta instrumental y fraccionamiento de ingresos.
- `Caso tipo Beta`: fraude e-commerce con email bombing y ocultacion de alertas.
- `Caso tipo Gamma`: preservacion deficiente de mensajeria y material movil.
- `Caso tipo Delta`: huella digital, OSINT y correlacion de indicios.
- `Caso tipo Epsilon`: conflicto civil o de familia con evidencia digital dispersa.

## Regla final de seguridad editorial

Si un detalle mejora color narrativo pero aumenta la capacidad de identificar a personas, entidades o procedimientos, debe eliminarse.
