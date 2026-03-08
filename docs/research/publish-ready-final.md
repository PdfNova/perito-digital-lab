# Publish Ready Final

## Ya listo

- Web publica estatica con rutas principales, hub editorial y piezas navegables.
- Contacto resuelto con correo visible, asunto sugerido y CTA directos por `mailto`.
- Metadata publica basica, canonical, open graph y share image local activos.
- Assets prioritarios, labels publicos y CTA principales centralizados en `app/src/app/site-config.ts`.

## Sustituir antes de publicar

- `NEXT_PUBLIC_SITE_URL` por el dominio real.
- `NEXT_PUBLIC_CONTACT_EMAIL` por el correo real de salida.
- `NEXT_PUBLIC_EPISODE_01_EMBED_URL` o `NEXT_PUBLIC_EPISODE_01_EXTERNAL_URL` si la pieza audiovisual ya existe.
- Assets finales de:
  - `hero-main`
  - `services-hero`
  - `contact-hero`
  - `og-default`

## Checklist final

1. Configurar dominio y correo real en variables publicas.
2. Sustituir los cuatro assets prioritarios manteniendo las mismas rutas o actualizando `site-config.ts`.
3. Revisar visualmente `home`, `servicios`, `recursos`, `contacto` y `episodio-01` con el dominio real.
4. Si existe pieza audiovisual final, cargar `NEXT_PUBLIC_EPISODE_01_EMBED_URL` o `NEXT_PUBLIC_EPISODE_01_EXTERNAL_URL`; si no, publicar la version editorial actual.
5. Verificar `mailto`, enlaces internos y metadata compartida.
6. Ejecutar `npm run build`.
7. Publicar.
