### FRAGMENTO DE PROMPT - MICROSOFT CLARITY
**Fecha:** 21 de septiembre 2026  
**Objetivo:** Integrar Microsoft Clarity de forma limpia y ligera en el sitio web para obtener mapas de calor (heatmaps) y grabaciones de sesión (session recordings) que permitan entender el comportamiento real de los usuarios.

**Implementación técnica:**
1. Insertar el siguiente código **exacto** de Microsoft Clarity dentro de la etiqueta `<head>` de **todas** las páginas del sitio (incluyendo las páginas del blog generadas desde Sanity):

```html
<script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "ylyrmu1odz");
</script>
```

2. El código debe cargarse en todas las rutas (páginas estáticas + páginas dinámicas del blog).
3. No usar Google Tag Manager ni ninguna otra capa intermedia. Usar únicamente la instalación directa del script oficial de Clarity para mantener el sitio lo más ligero posible.
4. El tracking debe funcionar correctamente en el entorno de Cloudflare Pages.
5. Project ID de Clarity: `ylyrmu1odz`.

**Dependencias:** Ninguna. Es independiente del resto de módulos.

**Criterio de éxito:** 
- Al abrir el sitio y visitar Microsoft Clarity → Dashboard, se debe ver al menos 1 sesión o usuario en tiempo real (o en las últimas horas).
- El Project ID `ylyrmu1odz` debe aparecer correctamente en el código fuente de todas las páginas.
- Deben generarse heatmaps y session recordings de forma automática.
