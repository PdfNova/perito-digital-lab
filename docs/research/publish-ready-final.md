# Publish Ready Final

## Ya listo

- Web publica estatica con rutas principales, hub editorial y piezas navegables.
- Contacto resuelto con correo visible, asunto sugerido y CTA directos por `mailto`.
- Metadata publica basica, canonical, open graph y share image local activos.
- Assets prioritarios centralizados en `app/src/app/site-config.ts`.

## Sustituir antes de publicar

- `NEXT_PUBLIC_SITE_URL` por el dominio real.
- `NEXT_PUBLIC_CONTACT_EMAIL` por el correo real de salida.
- Assets finales de:
  - `hero-main`
  - `services-hero`
  - `contact-hero`
  - `og-default`

## Checklist final

1. Configurar dominio y correo real en variables publicas.
2. Sustituir los cuatro assets prioritarios manteniendo las mismas rutas o actualizando `site-config.ts`.
3. Revisar visualmente `home`, `servicios`, `recursos` y `contacto` con el dominio real.
4. Decidir si `episodio-01` se mantiene como pieza editorial autonoma o incorpora acceso audiovisual en la misma ruta.
5. Verificar `mailto`, enlaces internos y metadata compartida.
6. Ejecutar `npm run build`.
7. Publicar.
