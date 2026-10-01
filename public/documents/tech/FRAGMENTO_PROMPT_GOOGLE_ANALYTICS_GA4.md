### FRAGMENTO DE PROMPT - GOOGLE ANALYTICS 4 (GA4)
**Fecha:** 21 de septiembre 2026  
**Objetivo:** Integrar Google Analytics 4 de forma limpia y ligera en el sitio web estático para medir visitas, páginas vistas, scroll, clics salientes y el envío del formulario.

**Implementación técnica:**
1. Insertar el siguiente código **exacto** de Google Tag (gtag.js) dentro de la etiqueta `<head>` de **todas** las páginas del sitio (incluyendo las páginas del blog generadas desde Sanity):

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-LVETR27HGQ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-LVETR27HGQ');
</script>
```

2. El código debe cargarse en todas las rutas (páginas estáticas + páginas dinámicas del blog).
3. No usar Google Tag Manager. Usar únicamente la instalación directa con gtag.js para mantener el sitio lo más ligero posible.
4. El tracking debe funcionar correctamente en el entorno de Cloudflare Pages.

**Dependencias:** Ninguna. Es independiente del resto de módulos.

**Criterio de éxito:** 
- Al abrir el sitio y visitar Google Analytics → Reports → Realtime, se debe ver al menos 1 usuario activo en menos de 60 segundos.
- El Measurement ID `G-LVETR27HGQ` debe aparecer correctamente en el código fuente de todas las páginas.
