# Deja Vu

Web hecha con Vite + React.

## Despliegue en IONOS

El proyecto ya queda preparado para hosting estático con rutas SPA:

- `public/.htaccess`: fallback para IONOS Linux/Apache.
- `public/web.config`: fallback para IONOS Windows/IIS.
- `public/404.html`: compatibilidad adicional con GitHub Pages.

Al hacer `npm run build`, esos archivos se copian automáticamente a `dist/`.

### Dominio principal

```bash
npm ci
npm run build
```

Sube el contenido de `dist/` al directorio asociado al dominio en IONOS.

### Subcarpeta

Si la web no va en la raiz del dominio y se sirve, por ejemplo, desde `/dejavu/`, genera el build asi:

```bash
npm run build -- --base=/dejavu/
```

Luego sube el contenido de `dist/` a esa carpeta y accede usando esa misma ruta.

### IONOS Deploy Now

Si prefieres conectarlo a GitHub:

- Build command: `npm ci && npm run build`
- Output directory: `dist`

### Notas

- En IONOS Linux, las rutas tipo `/carta` o `/contacto` quedan resueltas por `.htaccess`.
- En IONOS Windows, `web.config` solo se aplica si la carpeta esta marcada como aplicacion en el panel de IONOS.
- Si el dominio apunta directamente a la carpeta del proyecto publicado, no hace falta tocar nada mas.
