### FRAGMENTO DE PROMPT - SANITY CMS (BLOG / INSIGHTS)
**Fecha:** 30 de septiembre 2026  
**Objetivo:** Conectar Sanity.io como la **única fuente principal de contenido** del blog (página Insights) del sitio Company of Profits, de forma que todas las entradas se gestionen desde Sanity Studio y se rendericen dinámicamente en el sitio en **español e inglés**.

**Datos de conexión (obligatorios):**
- Project ID: `tue7ygdx`
- Dataset: `production`
- API Version: `2025-02-19`
- Studio URL: `https://co-profits.sanity.studio/`
- Public Site URL: `https://www.companyofprofits.com/`

**Implementación técnica:**
1. Configurar Sanity como headless CMS principal del sitio. Toda la sección **Insights / Blog** debe consumir el contenido exclusivamente desde Sanity (no hardcodear posts ni usar archivos locales de markdown).
2. Usar las variables de entorno / configuración:
   - `SANITY_PROJECT_ID=tue7ygdx`
   - `SANITY_DATASET=production`
   - `SANITY_API_VERSION=2025-02-19`
3. El sitio debe soportar **contenido bilingüe** (español e inglés). Cada entrada de blog en Sanity debe poder tener versiones en ambos idiomas (o campos localizados) y el frontend debe mostrar la versión correcta según el idioma activo del usuario.
4. La página **Insights** debe listar todas las entradas publicadas (ordenadas por fecha, más recientes primero) y cada entrada debe tener su propia página de detalle (`/insights/[slug]` o equivalente en ambos idiomas).
5. Integrar el cliente de Sanity (`@sanity/client` o el método recomendado por el stack actual de Bolt) de forma limpia y ligera. No añadir dependencias innecesarias.
6. El contenido debe renderizarse correctamente en el entorno de **Cloudflare Pages**.
7. Las páginas del blog generadas desde Sanity deben heredar todos los scripts de tracking ya integrados (Google Analytics, Microsoft Clarity, etc.).
8. No incluir el Studio de Sanity dentro del sitio. El Studio vive en `https://co-profits.sanity.studio/` y se usa únicamente para editar contenido.

**Dependencias:** Ninguna adicional obligatoria más allá del cliente oficial de Sanity necesario para consultar el dataset `production`.

**Criterio de éxito:**
- Al visitar la página Insights del sitio se muestran las entradas publicadas desde el dataset `production` del proyecto `tue7ygdx`.
- Cada entrada tiene su página de detalle funcional.
- El contenido se muestra correctamente en español e inglés según el idioma del sitio.
- No existen posts hardcodeados ni archivos de contenido locales; todo proviene de Sanity.
- El Project ID `tue7ygdx` y el dataset `production` están correctamente configurados en el código.
