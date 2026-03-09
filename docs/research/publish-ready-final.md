# Publish Ready Final

## Ya listo

- Web publica estatica con rutas principales, hub editorial y piezas navegables.
- Home, servicios y recursos ya conectan especialidades, contenido y contacto dentro de una misma narrativa de captacion.
- Contacto resuelto con correo visible, asunto sugerido y CTA directos por `mailto`.
- Metadata publica basica, canonical, open graph y share image local activos.
- `robots.txt` y `sitemap.xml` generados desde `app/src/app/`.
- Assets prioritarios, labels publicos y CTA principales centralizados en `app/src/app/site-config.ts`.

## Sustituir antes de publicar

- `NEXT_PUBLIC_SITE_URL` por el dominio real.
- Confirmar `NEXT_PUBLIC_CONTACT_EMAIL` si se quiere desacoplar del valor actual en codigo.
- `NEXT_PUBLIC_EPISODE_01_EMBED_URL` o `NEXT_PUBLIC_EPISODE_01_EXTERNAL_URL` si la pieza audiovisual ya existe.
- Assets finales de:
  - `hero-main`
  - `services-hero`
  - `contact-hero`
  - `og-default`

## Checklist final

1. Configurar `NEXT_PUBLIC_SITE_URL` con el dominio real para canonical, open graph, `robots` y `sitemap`.
2. Confirmar correo publico final y revisar asunto sugerido de `mailto`.
3. Sustituir los cuatro assets prioritarios manteniendo las mismas rutas o actualizando `site-config.ts`.
4. Revisar visualmente `home`, `servicios`, especialidades, `recursos`, `contacto` y `episodio-01` con el dominio real.
5. Validar `robots.txt`, `sitemap.xml`, metadata compartida y share image en entorno publico.
6. Si existe pieza audiovisual final, cargar `NEXT_PUBLIC_EPISODE_01_EMBED_URL` o `NEXT_PUBLIC_EPISODE_01_EXTERNAL_URL`; si no, publicar la version editorial actual.
7. Ejecutar `npm run lint` y `npm run build`.
8. Publicar.
