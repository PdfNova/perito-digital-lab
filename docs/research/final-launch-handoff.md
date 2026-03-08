# Final Launch Handoff

## Ya listo

- Web publica con home, servicios, metodologia, recursos y contacto en estado serio y navegable.
- Hub editorial real con articulos, video principal, guia tecnica y piezas breves derivadas.
- Enlaces internos resueltos entre contenido, servicios y contacto.
- Capa basica de metadata publica y estructura de rutas consistente.
- Canal de contacto preparado para salida mediante correo de marca visible.

## Falta solo por resolver

- Sustituir `NEXT_PUBLIC_SITE_URL` por el dominio real.
- Sustituir `NEXT_PUBLIC_CONTACT_EMAIL` por el correo real de salida.
- Reemplazar imagenes temporales clave por activos finales si ya existen.
- Publicar o embeber el video final del episodio 01 cuando este grabado.

## Sustituciones directas

- Dominio: actualizar `NEXT_PUBLIC_SITE_URL`.
- Correo: actualizar `NEXT_PUBLIC_CONTACT_EMAIL`.
- Imagenes: reemplazar archivos actuales en `app/public/images/`.
- Video: decidir si la pagina del episodio enlaza, embebe o aloja la pieza final.

## Orden recomendado de salida

1. Configurar dominio y correo real.
2. Sustituir hero principal y visuales editoriales prioritarios si existen activos finales.
3. Publicar articulo base, guia tecnica y episodio 01.
4. Revisar enlaces finales y ejecutar `npm run build`.
5. Abrir difusion minima con home, recursos y contacto ya operativos.
