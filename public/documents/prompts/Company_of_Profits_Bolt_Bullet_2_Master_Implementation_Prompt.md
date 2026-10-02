# COMPANY OF PROFITS — BOLT BULLET 2 MASTER IMPLEMENTATION PROMPT

## 1. MISSION

Update the existing Company of Profits bilingual website to the approved Bullet 2 target state.

This is an upgrade to an existing production project, not a blank-slate rebuild. Inspect the current codebase first, preserve working architecture and data, and implement the complete public experience defined below.

Company of Profits is a premium strategic business consulting and prophetic guidance firm for established Christian entrepreneurs.

Commercial spine:

Profit → Freedom → Wealth → Legacy

Central proposition:

A company can be profitable while still depending too heavily on its founder.

The site must move the visitor from recognition of that tension to diagnosis, understanding of the Prophetic Business Blueprint, an appropriate next step, and a clear application or Contact action.

Continue the existing working architecture:

- Bolt
- GitHub
- Cloudflare Pages
- companyofprofits.com
- Supabase for application and Contact data
- Sanity for Insights
- Google Analytics
- Microsoft Clarity
- Google Search Console verification

Do not replace working systems unnecessarily.

## 2. IMPLEMENTATION RULES

Before editing:

1. Inspect routes, redirects, components, styles, localization, forms, Supabase, Sanity, assets, analytics, metadata, verification, and deployment.
2. Reuse working components and data wherever practical.
3. Make the smallest safe changes that produce this target state.
4. Preserve existing Blueprint application data, Sanity articles, environment-variable patterns, deployment configuration, and working integrations.
5. Do not create duplicate routes, duplicate database structures, mock content, or replacement integrations.
6. Preserve SEO continuity with intentional redirects when a route changes.
7. Keep private credentials and secrets out of prompts, frontend code, and committed files.
8. Use the supplied Application Form Specification as the authority for form fields, validation, consent, qualification behavior, accessibility, and submission handling.
9. Use the six supplied legal Markdown files as the authority for legal text. Render them faithfully; do not rewrite, summarize, paraphrase, modernize, or invent legal language.
10. Use the supplied Sanity, Google Analytics, and Microsoft Clarity connection fragments/configuration where provided. Never invent IDs or credentials.

Do not expose internal notes, review markup, private scoring, internal scripts, proprietary tools, or diagnostic mechanics.

## 3. BRAND AND EXPERIENCE

The experience must be:

- premium;
- editorial;
- strategically serious;
- international;
- restrained;
- credible;
- business-first;
- explicitly Christian without becoming a generic ministry site;
- spiritually clear without becoming devotional or mystical.

Typography:

- Manrope for display headings and major labels.
- Inter for body text, navigation, forms, UI, and long reading.

Palette:

- dark green and light green foundations;
- restrained light yellow and purple accents;
- sophisticated gradients used sparingly;
- strong contrast and generous editorial spacing.

Use typography, rules, dividers, data panels, native diagrams, and deliberate whitespace as information architecture. Every visual element must improve comprehension, trust, hierarchy, or action.

Use a non-mechanical visual rhythm:

- dark fields for recognition and conviction;
- light fields for explanation and diagnosis;
- dark fields for integrated differentiation;
- light fields for Blueprint evidence and decision logic;
- a considered dark/light close for trust and action.

## 4. APPROVED PROGRAM NAMES

English:

- Prophetic Business Blueprint
- Profit Maximization
- Operational Optimization
- Freedom Architecture
- Kingdom Wealth & Impact
- Prophetic Business Mentorship

Spanish:

- Radiografía Empresarial Profética
- Rentabilidad Maximizada
- Optimización Operativa
- Arquitectura de Independencia
- Riqueza de Reino e Impacto
- Mentoría Empresarial Profética

The Blueprint is the diagnostic gateway. Programs follow diagnosis and must not appear as equal menu choices.

Kingdom Wealth & Impact is in development and is not currently accepting applications.

Mentorship is optional and distinct from the diagnostic-to-intervention route.

## 5. ROUTES, NAVIGATION, AND SOCIAL

Implement these routes.

English:

- /en/
- /en/methodology
- /en/why-company-of-profits
- /en/about
- /en/insights
- /en/insights/[slug]
- /en/blueprint
- /en/programs
- /en/programs/profit-maximization
- /en/programs/operational-optimization
- /en/programs/freedom-architecture
- /en/programs/kingdom-wealth-and-impact
- /en/programs/prophetic-business-mentorship
- /en/faq
- /en/apply
- /en/contact
- /en/privacy-policy
- /en/terms-and-conditions
- /en/cookie-policy

Spanish:

- /es/
- /es/metodologia
- /es/por-que-company-of-profits
- /es/nosotros
- /es/insights
- /es/insights/[slug]
- /es/radiografia
- /es/programas
- /es/programas/rentabilidad-maximizada
- /es/programas/optimizacion-operativa
- /es/programas/arquitectura-de-independencia
- /es/programas/riqueza-de-reino-e-impacto
- /es/programas/mentoria-empresarial-profetica
- /es/preguntas-frecuentes
- /es/aplicar
- /es/contacto
- /es/politica-de-privacidad
- /es/terminos-y-condiciones
- /es/politica-de-cookies

English navigation: Blueprint, Methodology, Programs, Why Us, About, Insights, FAQ, Contact, Apply for Blueprint, ES.

Spanish navigation: Radiografía, Metodología, Programas, Por qué nosotros, Nosotros, Insights, Preguntas frecuentes, Contáctanos, Aplicar, EN.

Apply is the strongest CTA. Contact is a visible secondary path. The locale switch must preserve the equivalent route when one exists.

Footer descriptors:

English:

> Strategic Business Consulting and Prophetic Guidance for Christian Entrepreneurs.

Spanish:

> Consultoría estratégica de negocios y guía profética para empresarios cristianos.

Footer must link to the active-locale Home, Company pages, Programs, Apply, FAQ, Contact, legal pages, and social accounts. Include this distinction:

English:

> For a general inquiry, use Contact. To have your business evaluated for the Blueprint, use the application.

Spanish:

> Para una consulta general, utiliza Contáctanos. Para que evaluemos tu empresa para la Radiografía, utiliza la aplicación.

Literal social URLs:

- LinkedIn, both locales: https://www.linkedin.com/company/companyofprofits/
- English Instagram: https://www.instagram.com/companyofprofits
- Spanish Instagram: https://www.instagram.com/companyofprofits.es

Use recognizable icons and accessible labels. The active locale determines Instagram.

## 6. HOME

The Home narrative is recognition → cost → system → method → integrated differentiation → Blueprint → intervention → action.

### English copy

Eyebrow:

> STRATEGIC BUSINESS CONSULTING + PROPHETIC DISCERNMENT FOR CHRISTIAN ENTREPRENEURS

H1:

> Make your company more profitable and less dependent on you — unlock your freedom.

Supporting copy:

> For established Christian entrepreneurs whose companies are profitable but still depend too heavily on them. We combine whole-business diagnosis, serious strategy, and Holy Spirit-led prophetic discernment to help you build more profit, more freedom, and more choice in how you lead.

Primary CTA:

> Apply for the Prophetic Business Blueprint

Secondary CTA:

> See how the Blueprint works

Microcopy:

> Paid diagnosis. Live, virtual and personalized. Application required.

Problem heading:

> Profit can grow while dependence on you grows with it.

Problem introduction:

> The cost is not only that you are always busy. It is that the company’s decisions, value, and future remain tied to your constant involvement.

Daily dependence:

> Every important decision, relationship, or exception still comes back to you.

Business constraint:

> Growth, margin, and execution are limited by what one person can see, decide, and carry.

Life, family, and personal margin:

> Constant operational pressure and the anxiety that comes with it follow you home — into your marriage, your family, your rest, and your time with God. Business success should create room to live; it should not consume every moment you have.

System heading:

> The issue is rarely one department. It is the system.

System copy:

> The visible symptom may be pricing, delegation, or operations. The underlying constraint is often the system connecting them. A pricing problem may be a strategy problem. A delegation problem may be a decision-architecture problem. An operating problem may be a structural problem. Diagnosis comes before prescription because isolated fixes rarely change the system.

Diagram labels:

> Strategy · Economics · Operations · Decisions · Dependencies

Method heading:

> Before we recommend a program, we diagnose the business.

Method copy:

> Diagnose → Identify → Recommend → Execute → Reassess. The first step is not choosing a service. It is understanding what the business actually needs.

Integration heading:

> Business strategy and prophetic discernment, brought into the same decision.

Integration copy:

> Business strategy helps us understand what the company is doing. Holy Spirit-led prophetic discernment helps us seek what requires discernment beyond analysis. The work is strongest when both inform the same practical decision.

Blueprint heading:

> A diagnostic process before a program is recommended.

Blueprint copy:

> The Prophetic Business Blueprint produces a documented picture of your business, clarifies the constraint or opportunity that matters most, and identifies the right next intervention when that is the appropriate next step.

Fact strip:

> USD $2,300 · 100% live, virtual and personalized · At least seven live sessions · Business consultant and prophet · Up to two founding partners included

Blueprint CTA:

> Explore the Prophetic Business Blueprint

Decision heading:

> The Blueprint identifies the intervention.

Decision copy:

> Profit Maximization, Operational Optimization, and Freedom Architecture address different constraints. The right first move depends on the diagnosis. Mentorship is optional and ongoing.

Final CTA copy:

> You built it to gain freedom — and ended up as its most indispensable employee. That may be profitable, but it is not the freedom you built it for. It is time to build a business that can survive and grow with less dependence on you.

Final CTA:

> Apply for the Prophetic Business Blueprint

### Spanish copy

Eyebrow:

> CONSULTORÍA ESTRATÉGICA DE NEGOCIOS + DISCERNIMIENTO PROFÉTICO PARA EMPRESARIOS CRISTIANOS

H1:

> Haz que tu empresa sea más rentable y dependa menos de ti — desbloquea tu libertad.

Supporting copy:

> Para empresarios cristianos con empresas rentables que todavía dependen demasiado de ellos. Combinamos el diagnóstico integral del negocio, la estrategia empresarial y el discernimiento profético guiado por el Espíritu Santo para ayudarte a construir más rentabilidad, más libertad y más opciones para liderar.

Primary CTA:

> Aplicar a la Radiografía Empresarial Profética

Secondary CTA:

> Conoce cómo funciona la Radiografía

Microcopy:

> Diagnóstico pago. En vivo, virtual y personalizado. Requiere aplicación.

Problem heading:

> La rentabilidad puede crecer mientras la dependencia de ti también.

Problem introduction:

> El costo no es solo que estés siempre ocupado. Es que las decisiones, el valor y el futuro de la empresa sigan atados a tu participación constante.

Dependencia diaria:

> Cada decisión importante, relación o excepción sigue regresando a ti.

Restricción empresarial:

> El crecimiento, el margen y la ejecución quedan limitados por lo que una sola persona puede ver, decidir y sostener.

Vida, familia y margen personal:

> La presión operativa constante y la ansiedad que la acompaña te siguen hasta tu casa: a tu matrimonio, tu familia, tu descanso y tu tiempo con Dios. El éxito empresarial debería darte espacio para vivir; no consumir todo el tiempo que tienes.

System heading:

> El problema rara vez está en un solo departamento. Está en el sistema.

System copy:

> El síntoma visible puede ser el precio, la delegación o la operación. La restricción de fondo suele estar en el sistema que los conecta. Un problema de precios puede ser un problema de estrategia. Un problema de delegación puede ser un problema de arquitectura de decisiones. Un problema operativo puede ser un problema estructural. El diagnóstico precede a la prescripción porque las soluciones aisladas rara vez cambian el sistema.

Diagram labels:

> Estrategia · Economía · Operaciones · Decisiones · Dependencias

Method heading:

> Antes de recomendar un programa, diagnosticamos la empresa.

Method copy:

> Diagnosticar → Identificar → Recomendar → Ejecutar → Reevaluar. El primer paso no es elegir un servicio. Es entender qué necesita realmente la empresa.

Integration heading:

> Estrategia empresarial y discernimiento profético, integrados en la misma decisión.

Integration copy:

> La estrategia empresarial nos ayuda a entender qué está haciendo la empresa. El discernimiento profético guiado por el Espíritu Santo nos ayuda a buscar lo que requiere discernimiento más allá del análisis. El trabajo es más sólido cuando ambos informan la misma decisión práctica.

Blueprint heading:

> Un proceso diagnóstico antes de recomendar un programa.

Blueprint copy:

> La Radiografía Empresarial Profética produce una imagen documentada de tu empresa, aclara la restricción u oportunidad más importante e identifica la siguiente intervención adecuada cuando esa sea la decisión correcta.

Fact strip:

> USD $2.300 · 100 % en vivo, virtual y personalizado · Mínimo siete sesiones en vivo · Consultor empresarial y profeta · Hasta dos socios fundadores incluidos

Blueprint CTA:

> Conoce la Radiografía Empresarial Profética

Decision heading:

> La Radiografía identifica la intervención.

Decision copy:

> Rentabilidad Maximizada, Optimización Operativa y Arquitectura de Independencia responden a restricciones diferentes. La primera intervención adecuada depende del diagnóstico. La Mentoría es opcional y continua.

Final CTA copy:

> Construiste tu empresa para ganar libertad y terminaste siendo su empleado más indispensable. Puede ser rentable, pero no es la libertad para la que la construiste. Es hora de construir una empresa que pueda sobrevivir y crecer con menos dependencia de ti.

Final CTA:

> Aplicar a la Radiografía Empresarial Profética

Home UI:

- no hero image;
- three cost blocks as an editorial sequence, not equal cards;
- system diagram in native HTML/CSS/SVG, linear on mobile;
- primary CTA dominant;
- Contact secondary and contextual;
- Spanish headings must wrap naturally.

## 7. METHODOLOGY

Routes: /en/methodology and /es/metodologia.

English H1:

> How the work moves from diagnosis to intervention.

Intro:

> We diagnose the whole business before recommending what to change. The method shows how business analysis, prophetic discernment, interpretation, intervention, execution, and reassessment move together.

Stages:

Business Diagnosis:

> We examine the economics, operations, structure, decisions, dependencies, and opportunities shaping the business.

Prophetic Discernment:

> We seek Holy Spirit-led discernment alongside business analysis, including direction, confirmation, seasons, risks, timing, and strategic questions.

Strategic Interpretation:

> We bring the evidence and discernment together into a coherent picture of what is actually constraining the business.

Intervention:

> We recommend the appropriate next intervention. No program is prescribed by default.

Execution:

> We move into practical work with clear focus and accountable progress.

Reassessment:

> We review what changed and whether another intervention genuinely serves the business.

Integration:

> Business strategy helps us understand what the business is doing. Prophetic discernment helps us seek what requires discernment beyond analysis. The work is strongest when both inform the same practical decision.

CTA:

> Apply for the Prophetic Business Blueprint

Spanish H1:

> Cómo avanzamos del diagnóstico a la intervención.

Intro:

> Diagnosticamos la empresa completa antes de recomendar qué cambiar. El método muestra cómo avanzan juntos el análisis empresarial, el discernimiento profético, la interpretación, la intervención, la ejecución y la reevaluación.

Stages:

Diagnóstico Empresarial:

> Examinamos la economía, las operaciones, la estructura, las decisiones, las dependencias y las oportunidades que están dando forma a la empresa.

Discernimiento Profético:

> Buscamos discernimiento guiado por el Espíritu Santo junto con el análisis empresarial, incluyendo dirección, confirmación, temporadas, riesgos, tiempos y preguntas estratégicas.

Interpretación Estratégica:

> Integramos la evidencia y el discernimiento en una imagen coherente de lo que realmente está restringiendo a la empresa.

Intervención:

> Recomendamos la siguiente intervención adecuada. Ningún programa se prescribe por defecto.

Ejecución:

> Avanzamos hacia el trabajo práctico con un enfoque claro y progreso verificable.

Reevaluación:

> Revisamos qué cambió y si otra intervención realmente sirve a la empresa.

Integración:

> La estrategia empresarial nos ayuda a entender qué está haciendo la empresa. El discernimiento profético nos ayuda a buscar lo que requiere discernimiento más allá del análisis. El trabajo es más sólido cuando ambos informan la misma decisión práctica.

CTA:

> Aplicar a la Radiografía Empresarial Profética

Use a native six-stage path, vertical on desktop and linear on mobile. Do not expose private scoring or tools.

Contained biblical foundation:

English heading:

> Prophetic discernment and practical responsibility belong together.

English:

> Scripture does not separate hearing from God from acting on what He says.
> 
> A widow crushed by debt turns to Elisha, receives specific instructions, and obeys. What little she has in hand becomes provision (2 Kings 4:1–7). Joseph, crediting God with the interpretation, turns Pharaoh’s dreams into a strategy that carries a nation through famine (Genesis 41). Jehoshaphat calls Judah to trust God, believe his prophets, and move forward (2 Chronicles 20:20). Different people, different crises, same response: they listened, they obeyed, and God’s direction became action.
> 
> None of this is a formula for easy success. It is a pattern: prophetic counsel is one of the ways God guides those who are willing to listen and brave enough to follow. On that foundation, we help business leaders build their companies.

Spanish heading:

> El discernimiento profético y la responsabilidad práctica van juntos.

Spanish:

> La Escritura nunca separa escuchar a Dios de actuar conforme a lo que Él dice.
> 
> Una viuda agobiada por las deudas acude a Eliseo, recibe instrucciones específicas y obedece. Lo poco que tiene en sus manos se convierte en provisión (2 Reyes 4:1–7). José, atribuyéndole a Dios la interpretación, convierte los sueños del faraón en una estrategia que lleva a una nación a superar la hambruna (Génesis 41). Josafat llama a Judá a confiar en Dios, creer a sus profetas y seguir adelante (2 Crónicas 20:20). Personas distintas, crisis distintas, la misma respuesta: escucharon, obedecieron y la dirección de Dios se convirtió en acción.
> 
> Nada de esto es una fórmula para el éxito fácil. Es un patrón: el consejo profético es una de las maneras en que Dios guía a quienes están dispuestos a escuchar y son lo bastante valientes para seguir. Sobre ese fundamento ayudamos a los líderes empresariales a edificar sus empresas.

Do not present biblical examples as a prosperity formula, prediction, or guarantee.

## 8. WHY COMPANY OF PROFITS

Routes: /en/why-company-of-profits and /es/por-que-company-of-profits.

English:

H1:

> Why Company of Profits

Intro:

> We work with Christian entrepreneurs and founders who want serious business strategy and genuine prophetic discernment held together. That combination changes what we diagnose, how we decide, and what we recommend next.

Profit:

> Profit is the resource that makes freedom, wealth capacity, and impact possible. We address the economics of the business with that reality in view.

Whole-system diagnosis:

> We look for the relationships between symptoms rather than prescribing an isolated fix for each department.

Founder independence:

> A profitable company should not require the founder to remain its operating system. We examine the structures, decisions, and dependencies that keep that pattern in place.

Prophetic integration:

> Holy Spirit-led discernment is part of the core work. It is brought into strategic decisions rather than added as an ornamental spiritual layer.

Scope:

> Prophetic discernment informs the way we seek direction; it does not replace the practical work of making and executing business decisions.

Fit:

> Company of Profits is for Christian entrepreneurs who are willing to engage both dimensions. The Blueprint is the place to begin.

CTA:

> See how the Blueprint works

Spanish:

H1:

> Por qué Company of Profits

Intro:

> Trabajamos con empresarios y fundadores cristianos que quieren integrar una estrategia empresarial seria con un discernimiento profético genuino. Esa combinación cambia lo que diagnosticamos, cómo decidimos y qué recomendamos después.

Rentabilidad:

> La rentabilidad es el recurso que hace posible la libertad, la capacidad de generar riqueza y el impacto. Abordamos la economía de la empresa teniendo esa realidad en cuenta.

Diagnóstico del sistema completo:

> Buscamos las relaciones entre los síntomas en lugar de prescribir una solución aislada para cada departamento.

Independencia del fundador:

> Una empresa rentable no debería exigir que el fundador siga siendo su sistema operativo. Examinamos las estructuras, decisiones y dependencias que mantienen ese patrón.

Discernimiento integrado:

> El discernimiento profético guiado por el Espíritu Santo es parte del trabajo central. Se integra en las decisiones estratégicas en lugar de añadirse como una capa espiritual ornamental.

Alcance:

> El discernimiento profético orienta la búsqueda de dirección; no reemplaza el trabajo práctico de tomar decisiones y ejecutarlas.

Afinidad:

> Company of Profits es para empresarios cristianos dispuestos a integrar ambas dimensiones. La Radiografía es el punto de partida.

CTA:

> Conoce cómo funciona la Radiografía

Use positive integration. Do not build a defensive comparison grid.

## 9. ABOUT

Routes: /en/about and /es/nosotros.

Lead with the firm, then naming story, then founder. The institutional firm must remain larger than the founder.

English:

H1:

> About Company of Profits

Firm opening:

> Company of Profits is a strategic business consulting and prophetic guidance firm for established Christian entrepreneurs. We work at the intersection of profitability, founder independence, business systems, and Holy Spirit-led discernment.

Purpose:

> Its purpose is to help Christian entrepreneurs build companies that create profit, freedom, wealth capacity, and lasting impact without requiring the founder to remain the operating system.

Naming story heading:

> Why the name “Company of Profits”?

Naming story:

> In English, “company” can mean both a business and a group of people, while “profits” echoes “prophets.” The name is deliberate: we believe healthy profits and prophetic discernment belong in the same serious work.
> 
> It also draws on the biblical phrase “a company of prophets” in 1 Samuel 10:10. In that passage, the Spirit of God comes upon Saul and he prophesies among the prophets; the text does not say that proximity alone caused it.
> 
> For Company of Profits, the name expresses our commitment to help Christian entrepreneurs make wiser business decisions through serious strategy and Holy Spirit-led discernment.

Founder label:

> THE FOUNDER

Name:

> Paul Huguet

Biography:

> He is an entrepreneur and strategic advisor with nearly two decades of experience creating, operating, scaling, and advising companies across multiple industries and markets, including the Silicon Valley startup and venture capital ecosystem, where he lived for nearly two years. His entrepreneurial path and a deep encounter with the Holy Spirit led him to see that human strategy alone is not always enough; some business decisions require prophetic discernment. Today, Paul leads Company of Profits and oversees the firm’s team of business consultants and prophets, bringing business strategy and prophetic discernment together for Christian entrepreneurs.

Calling story:

> After seasons of consulting and building companies, Paul made a firm decision: he would never go back to consulting. His true passion was creating, structuring, and scaling businesses. But during a period of deep spiritual conviction, he understood that God was calling him to serve fellow Christian entrepreneurs. He resisted, because consulting was the one door he had closed for good. Yet the calling never faded, and in time he recognized that the firm he was meant to build, to empower Kingdom-minded business owners around the world, was Company of Profits.

CTA:

> Apply for the Prophetic Business Blueprint

Spanish:

H1:

> Sobre Company of Profits

Apertura:

> Company of Profits es una firma de consultoría estratégica de negocios y guía profética para empresarios cristianos establecidos. Trabajamos en la intersección entre rentabilidad, independencia del fundador, sistemas empresariales y discernimiento profético guiado por el Espíritu Santo.

Propósito:

> Su propósito es ayudar a empresarios cristianos a construir empresas que produzcan rentabilidad, libertad, capacidad de generar riqueza e impacto duradero, sin que el fundador tenga que seguir siendo el sistema operativo.

Título de la historia del nombre:

> ¿Por qué el nombre “Company of Profits”?

Historia del nombre:

> En inglés, “company” puede significar tanto empresa como grupo de personas, mientras “profits” evoca “prophets”. El nombre es intencional: creemos que la rentabilidad saludable y el discernimiento profético pertenecen al mismo trabajo serio.
> 
> También toma como referencia la expresión “una compañía de profetas” de 1 Samuel 10:10. En ese pasaje, el Espíritu de Dios viene sobre Saúl y él profetiza entre los profetas; el texto no dice que la cercanía, por sí sola, haya causado ese cambio.
> 
> Para Company of Profits, el nombre expresa nuestro compromiso de ayudar a empresarios cristianos a tomar decisiones más sabias mediante estrategia seria y discernimiento guiado por el Espíritu Santo.

Founder label:

> EL FUNDADOR

Name:

> Paul Huguet

Biography:

> Es un empresario y asesor estratégico, con casi dos décadas de experiencia creando, operando, escalando y asesorando empresas en múltiples industrias y mercados, incluido el ecosistema de startups y venture capital de Silicon Valley, donde vivió durante casi dos años. Su camino empresarial y un encuentro profundo con el Espíritu Santo lo llevaron a reconocer que la estrategia humana por sí sola no siempre es suficiente; algunas decisiones empresariales requieren discernimiento profético. Hoy, Paul lidera Company of Profits y supervisa el equipo de consultores empresariales y profetas de la firma, integrando la estrategia empresarial con el discernimiento profético para servir a empresarios y fundadores cristianos.

Historia del llamado:

> Después de varias temporadas dedicado a la consultoría y a la construcción de negocios, Paul tomó una decisión firme: nunca volvería a la consultoría. Su verdadera pasión era crear, estructurar y escalar empresas. Pero durante un período de profunda convicción espiritual, comprendió que Dios lo llamaba a servir a otros empresarios cristianos. Se resistió, porque la consultoría era la única puerta que había cerrado para siempre. Sin embargo, el llamado nunca se apagó y, con el tiempo, reconoció que la firma que debía construir, para empoderar a empresarios con mentalidad de Reino en todo el mundo, era Company of Profits.

CTA:

> Aplicar a la Radiografía Empresarial Profética

Do not add a founder photograph, portrait placeholder, synthetic identity, or empty image frame. Do not imply that Paul co-leads with prophets.

## 10. INSIGHTS

Routes: /en/insights, /en/insights/[slug], /es/insights, /es/insights/[slug].

Insights is a Sanity-powered authority and discovery system that supports the consulting funnel.

English:

H1:

> Insights for entrepreneurs building profit, freedom, and lasting capacity.

Intro:

> Practical thinking on profitability, founder dependence, operating systems, strategic decisions, Christian leadership, stewardship, and Holy Spirit-led discernment in business.

Featured label: Featured insight

Card CTA: Read the insight

Empty state:

> The Insights library is being built with care. Explore the latest published thinking here, or begin with the Prophetic Business Blueprint to examine your business in context.

Empty CTA: Explore the Prophetic Business Blueprint

Article CTA:

> If this question is active in your business, the Blueprint is where we examine it in context.

Spanish:

H1:

> Insights para empresarios que están construyendo rentabilidad, libertad y capacidad duradera.

Intro:

> Ideas prácticas sobre rentabilidad, dependencia del fundador, sistemas operativos, decisiones estratégicas, liderazgo, mayordomía y discernimiento profético guiado por el Espíritu Santo en los negocios.

Featured label: Insight destacado

Card CTA: Leer el insight

Empty state:

> La biblioteca de Insights se está construyendo con cuidado. Aquí aparecerán los artículos publicados; mientras tanto, la Radiografía Empresarial Profética es el punto de partida para examinar tu empresa dentro de su contexto.

Empty CTA: Conoce la Radiografía Empresarial Profética

Article CTA:

> Si esta pregunta está presente en tu empresa, la Radiografía es el espacio para examinarla dentro de su contexto.

Render existing Sanity articles only. Support locale, title, slug, excerpt, key takeaway, dates, approved author information, categories, semantic body, visible FAQs, related articles, supplied media, visible sources, and paired translation when available. Use real loading, empty, error, and missing-translation states. Do not fabricate articles, authors, dates, statistics, or publishing cadence.

For three or more articles, feature the newest once and list the rest. For one or two, do not duplicate cards to fill a grid. Do not add search merely for a two-article library. Use Article or BlogPosting structured data from actual Sanity fields only.

## 11. BLUEPRINT

Routes: /en/blueprint and /es/radiografia.

The Blueprint is paid, live, virtual, personalized, substantive, and the first step in a possible relationship. It allows the entrepreneur to experience the work, understand the business more clearly, and assess professional and spiritual alignment. It has standalone diagnostic value. Completion does not guarantee admission to a later program.

### English

Eyebrow:

> DIAGNOSTIC AND QUALIFICATION GATEWAY

H1:

> Prophetic Business Blueprint

Hero:

> A paid diagnostic process that combines business analysis with Holy Spirit-led prophetic discernment to determine what your business actually needs.

Price: USD $2,300

Format:

> 100% live, virtual and personalized.

Scope:

> At least seven live videoconference sessions with a business consultant and a prophet. Each session focuses on a specific business topic or question within the diagnostic work. Each founding partner receives one individual prophetic session. Up to two founding partners are included. Each additional founding partner beginning with the third adds USD $100.

What it is:

> The Prophetic Business Blueprint is a substantive diagnostic engagement. It is not a free consultation, a recorded course, a self-service product, or a generic questionnaire. It produces a documented picture of your business, clarifies the constraint or opportunity that matters most, and identifies the right next intervention when that is the appropriate next step. The written diagnostic record is a substantive result in its own right: it reflects the diagnosis, analysis, and applied experience developed across the engagement.

Who it is for:

> Christian entrepreneurs with established, operating companies who recognize that profitability, growth, or opportunity has not yet created enough freedom from being indispensable.

Business problem:

> Fragmented advice can address pricing, marketing, accounting, delegation, or operations one piece at a time while the system that connects them remains unchanged. The Blueprint examines the business as a whole.

Integrated discernment:

> Business analysis examines what is happening in the company. Holy Spirit-led prophetic discernment is integrated into the search for direction, timing, confirmation, and what may require discernment beyond analysis.

Public process:

> Diagnose → Identify → Recommend → Execute → Reassess

After the Blueprint:

> The Blueprint informs the next intervention. Profit Maximization, Operational Optimization, or Freedom Architecture may be appropriate first depending on the diagnosis. Prophetic Business Mentorship is optional and may accompany the broader journey.

Application boundary:

> The Blueprint is the first step in getting to know each other. It lets you experience firsthand how we work and see your business more clearly, so you can decide whether the next step makes sense.
> 
> It is also a chance to see if we are aligned, both professionally and spiritually. If so, you and your company could move into one of our core programs.
> 
> Either way, the Blueprint stands on its own: it is a documented diagnostic that can guide your decisions, whether or not you continue with us.

CTA:

> Apply for the Prophetic Business Blueprint

### Spanish

Eyebrow:

> PUERTA DE ENTRADA DIAGNÓSTICA Y DE EVALUACIÓN

H1:

> Radiografía Empresarial Profética

Hero:

> Un proceso diagnóstico pago que combina análisis empresarial con discernimiento profético guiado por el Espíritu Santo para determinar qué necesita realmente tu empresa.

Price: USD $2.300

Format:

> 100 % en vivo, virtual y personalizado.

Scope:

> Mínimo siete sesiones por videoconferencia en vivo con un consultor empresarial y un profeta. Cada sesión se enfoca en un tema o una pregunta empresarial específicos dentro del proceso diagnóstico. Cada socio fundador recibe una sesión profética individual. Se incluyen hasta dos socios fundadores. Cada socio fundador adicional a partir del tercero suma USD $100.

Qué es:

> La Radiografía Empresarial Profética es un proceso diagnóstico sustantivo. No es una consulta gratuita, un curso grabado, un producto de autoservicio ni un cuestionario genérico. Produce una imagen documentada de tu empresa, aclara la restricción u oportunidad más importante e identifica la siguiente intervención adecuada cuando esa sea la decisión correcta. El documento diagnóstico es un resultado sustantivo por sí mismo: reúne el diagnóstico, el análisis y la experiencia aplicada durante el proceso.

Para quién es:

> Empresarios cristianos con empresas establecidas y operativas que reconocen que la rentabilidad, el crecimiento o las oportunidades todavía no han producido suficiente libertad para dejar de ser indispensables.

Problema empresarial:

> El consejo fragmentado puede abordar el precio, el marketing, la contabilidad, la delegación o la operación por separado mientras el sistema que los conecta permanece igual. La Radiografía examina la empresa como un todo.

Discernimiento integrado:

> El análisis empresarial examina qué está ocurriendo en la empresa. El discernimiento profético guiado por el Espíritu Santo se integra en la búsqueda de dirección, tiempos, confirmación y aquello que requiere discernimiento más allá del análisis.

Proceso público:

> Diagnosticar → Identificar → Recomendar → Ejecutar → Reevaluar

Después de la Radiografía:

> La Radiografía orienta la siguiente intervención. Rentabilidad Maximizada, Optimización Operativa o Arquitectura de Independencia pueden ser adecuadas como primera intervención según el diagnóstico. La Mentoría Empresarial Profética es opcional y puede acompañar el proceso más amplio.

Frontera de la aplicación:

> El Blueprint es el primer paso para conocernos. Te permite descubrir de primera mano cómo trabajamos y ver tu negocio con mayor claridad, para que puedas decidir si el siguiente paso tiene sentido.
> 
> También es una oportunidad para ver si estamos alineados, tanto en lo profesional como en lo espiritual. Si es así, tú y tu empresa podrían pasar a uno de nuestros programas principales.
> 
> Sea cual sea el caso, el Blueprint tiene un gran valor por sí mismo: es un diagnóstico documentado que puede guiar tus decisiones, continúes o no con nosotros.

CTA:

> Aplicar a la Radiografía Empresarial Profética

Blueprint UI:

- exact facts in HTML;
- accessible price, format, sessions, and partner panel;
- one approved Blueprint image beside scope/price or documented-process content on desktop and below it on mobile;
- no text overlay;
- no fake dossier, fake report, fake metrics, fake client data, or application-reference number;
- make application, review, and acceptance distinct.

## 12. PROGRAMS

Routes: /en/programs and /es/programas.

Use one upstream Blueprint block, three core intervention pathways, a distinct optional Mentorship treatment, and a restrained development treatment for Kingdom Wealth & Impact.

English overview:

H1:

> The Blueprint identifies the intervention.

Intro:

> Company of Profits does not begin by assigning a program from a menu. The Prophetic Business Blueprint diagnoses the business first. The next intervention follows the constraint or opportunity that matters most.

Profit Maximization:

> For businesses whose primary constraint is economic: pricing, margins, customer or offer economics, cost structure, working capital, revenue composition, or another profitability issue identified through diagnosis.

Operational Optimization:

> For businesses whose primary constraint is operating structure: processes, roles, decisions, handoffs, accountability, delivery standards, or recurring friction that keeps returning to the founder.

Freedom Architecture:

> For businesses whose primary constraint is founder dependence: decisions, relationships, knowledge, or daily operations that still rely too heavily on one person.

Prophetic Business Mentorship:

> An optional ongoing relationship for business counsel and Holy Spirit-guided prophetic discernment, available before, during, or after core programs when additional support is needed and the relationship proceeds.

Kingdom Wealth & Impact:

> In development for a future stage of work around wealth capacity, stewardship, and purposeful impact.

CTA:

> Start with the Prophetic Business Blueprint

Spanish overview:

H1:

> La Radiografía identifica la intervención.

Intro:

> Company of Profits no comienza asignando un programa desde un menú de servicios. La Radiografía Empresarial Profética diagnostica primero la empresa. La siguiente intervención depende de la restricción u oportunidad más importante.

Rentabilidad Maximizada:

> Para empresas cuya principal restricción es económica: precios, márgenes, economía de clientes u ofertas, estructura de costos, capital de trabajo, composición de ingresos u otro problema de rentabilidad identificado en el diagnóstico.

Optimización Operativa:

> Para empresas cuya principal restricción está en la estructura operativa: procesos, roles, decisiones, transferencias de tareas, rendición de cuentas, estándares de entrega o fricciones recurrentes que siguen regresando al fundador.

Arquitectura de Independencia:

> Para empresas cuya principal restricción es la dependencia del fundador: decisiones, relaciones, conocimiento u operación diaria que todavía dependen demasiado de una sola persona.

Mentoría Empresarial Profética:

> Una relación continua y opcional de consejo empresarial y discernimiento profético guiado por el Espíritu Santo, disponible antes, durante o después de los programas principales cuando se necesita apoyo adicional y la relación avanza.

Riqueza de Reino e Impacto:

> En desarrollo para una etapa futura en torno a la capacidad de generar riqueza, la mayordomía y el impacto con propósito.

CTA:

> Comienza con la Radiografía Empresarial Profética

For detail pages, use the following final copy and structure. Each page must link back to the Blueprint and use native information design.

### Profit Maximization / Rentabilidad Maximizada

English:

- H1: Profit Maximization.
- Hero: Improve the economics of the business by identifying the constraint that is limiting profitability and the opportunity that may be leaving value on the table.
- Who it is for: Companies generating real revenue whose profitability is constrained by pricing, customer economics, cost structure, working capital, revenue composition, or another issue identified through diagnosis.
- Problem: Growth can increase complexity without improving the economics of the business. When revenue rises but margin, visibility, or decision quality does not, the business can become busier without becoming stronger.
- What it addresses: pricing logic, margin relationships, customer or offer economics, cost discipline, working capital, and commercial decisions that shape profitability.
- How it works: The Blueprint first determines whether profitability is the primary constraint or opportunity. If it is, the work focuses on the commercial relationships that matter most rather than imposing a generic financial program.
- Prophetic integration: Prophetic discernment is integrated into decisions about direction, timing, relationships, stewardship, and the conditions surrounding the business.
- What changes: The intended direction is clearer commercial decision-making and stronger economic foundations. No fixed financial result is promised.
- CTA: Find out whether Profit Maximization is right for your business.
- Related CTA: Start with the Prophetic Business Blueprint.

Spanish:

- H1: Rentabilidad Maximizada.
- Hero: Mejora la economía de la empresa al identificar la restricción que está limitando la rentabilidad y la oportunidad que podría estar quedándose sin aprovechar.
- Para quién: Empresas con ingresos reales cuya rentabilidad está limitada por los precios, la economía de sus clientes, la estructura de costos, el capital de trabajo, la composición de sus ingresos u otro factor identificado en el diagnóstico.
- Problema: El crecimiento puede aumentar la complejidad sin mejorar la economía del negocio. Cuando los ingresos suben, pero el margen, la visibilidad o la calidad de las decisiones no avanzan, la empresa puede estar más ocupada sin ser más sólida.
- Qué aborda: lógica de precios, relaciones entre márgenes, economía de clientes u ofertas, disciplina de costos, capital de trabajo y decisiones comerciales que determinan la rentabilidad.
- Cómo funciona: La Radiografía determina primero si la rentabilidad es la principal restricción u oportunidad. Si lo es, el trabajo se concentra en las relaciones comerciales más importantes en lugar de imponer un programa financiero genérico.
- Discernimiento profético: El discernimiento profético se integra en las decisiones sobre dirección, tiempos, relaciones, mayordomía y condiciones que rodean a la empresa.
- Qué cambia: La dirección buscada es una toma de decisiones comerciales más clara y bases económicas más sólidas. No se promete un resultado financiero específico.
- CTA: Descubre si Rentabilidad Maximizada es adecuada para tu empresa.
- Related CTA: Comienza con la Radiografía Empresarial Profética.

### Operational Optimization / Optimización Operativa

English:

- H1: Operational Optimization.
- Hero: Improve the operating structure and execution capacity of the business so decisions, responsibilities, and delivery do not keep routing through the founder.
- Who it is for: Companies where founders spend too much time resolving operational emergencies, mediating confusion, checking work, or carrying decisions that should be distributed.
- Problem: Informal operating habits can work for a while and then become a source of friction as the company grows. When processes, roles, handoffs, decision rights, or standards are unclear, the founder becomes the default answer to every unresolved issue.
- What it addresses: processes, role clarity, decision rights, accountability, operating rhythms, handoffs, delivery standards, and the points where work repeatedly returns to the founder.
- How it works: The Blueprint determines whether operating structure is the primary constraint. If so, the intervention focuses on the few relationships and decisions that will make execution clearer and more dependable.
- Prophetic integration: Prophetic discernment is brought into questions of leadership, integrity, relationships, timing, and the human dynamics shaping the operating system.
- What changes: The aim is to reduce operational friction, clarify responsibilities, automate where possible, and enable the company to operate with less unnecessary intervention from the founder.
- CTA: Find out whether Operational Optimization is right for your business.
- Related CTA: Start with the Prophetic Business Blueprint.

Spanish:

- H1: Optimización Operativa.
- Hero: Mejora la estructura operativa y la capacidad de ejecución para que las decisiones, las responsabilidades y la entrega no sigan pasando por el fundador.
- Para quién: Empresas cuyos fundadores pasan demasiado tiempo apagando emergencias operativas, mediando confusiones, revisando el trabajo o cargando decisiones que deberían estar distribuidas.
- Problema: Los hábitos operativos informales pueden funcionar por un tiempo y luego convertirse en una fuente de fricción a medida que la empresa crece. Cuando los procesos, los roles, las transferencias de tareas, los derechos de decisión o los estándares no están claros, el fundador se convierte en la respuesta automática a cada problema pendiente.
- Qué aborda: procesos, claridad de roles, derechos de decisión, rendición de cuentas, ritmos operativos, transferencias de tareas, estándares de entrega y los puntos donde el trabajo regresa repetidamente al fundador.
- Cómo funciona: La Radiografía determina si la estructura operativa es la principal restricción. Si lo es, la intervención se concentra en las relaciones y decisiones que harán que la ejecución sea más clara y confiable.
- Discernimiento profético: El discernimiento profético se integra en las preguntas de liderazgo, integridad, relaciones, tiempos y dinámicas humanas que están dando forma al sistema operativo.
- Qué cambia: La dirección buscada es reducir la fricción operativa, aclarar la responsabilidad, automatizar cuando sea posible y permitir que la empresa ejecute con menos intervención innecesaria del fundador.
- CTA: Descubre si Optimización Operativa es adecuada para tu empresa.
- Related CTA: Comienza con la Radiografía Empresarial Profética.

### Freedom Architecture / Arquitectura de Independencia

English:

- H1: Freedom Architecture.
- Hero: Reduce founder dependence and build a company that can operate and grow with more freedom of choice.
- Who it is for: Christian entrepreneurs whose decisions, relationships, knowledge, and daily operations still depend too heavily on their personal presence.
- Problem: When critical decisions and institutional knowledge live mainly in the founder, the business cannot create reliable space for rest, family, strategic leadership, or the next stage of growth.
- What it addresses: decision distribution, leadership capacity, institutional knowledge, governance, delegation, founder availability, and patterns that make the founder indispensable by default.
- How it works: The Blueprint determines whether founder dependence is the primary constraint. If it is, the work focuses on structures and leadership capacity that allow the founder to lead by choice rather than necessity.
- Prophetic integration: Freedom also requires discernment. Prophetic guidance is integrated into questions of timing, stewardship, responsibility, rest, leadership, and decisions shaping the founder’s role.
- What changes: The intended direction is a company that can operate with less dependence on the founder while the founder retains responsible leadership and meaningful choice.
- CTA: Find out whether Freedom Architecture is right for your business.
- Related CTA: Start with the Prophetic Business Blueprint.

Spanish:

- H1: Arquitectura de Independencia.
- Hero: Reduce la dependencia del fundador y construye una empresa que pueda operar y crecer con mayor libertad de elección.
- Para quién: Empresarios cristianos cuyas decisiones, relaciones, conocimiento y operación diaria todavía dependen demasiado de su presencia personal.
- Problema: Cuando las decisiones críticas y el conocimiento institucional viven principalmente en la mente del fundador, la empresa no puede crear un espacio confiable para el descanso, la familia, el liderazgo estratégico ni la siguiente etapa de crecimiento.
- Qué aborda: distribución de decisiones, capacidad de liderazgo, conocimiento institucional, gobernanza, delegación, disponibilidad del fundador y patrones que lo vuelven indispensable por defecto.
- Cómo funciona: La Radiografía determina si la dependencia del fundador es la principal restricción. Si lo es, el trabajo se concentra en construir estructuras y capacidad de liderazgo que permitan liderar por elección y no por necesidad.
- Discernimiento profético: La libertad también requiere discernimiento. La guía profética se integra en las preguntas de tiempos, mayordomía, responsabilidad, descanso, liderazgo y en las decisiones que definen el papel del fundador.
- Qué cambia: La dirección buscada es una empresa que opere con menor dependencia del fundador, mientras el fundador conserva un liderazgo responsable y una capacidad real de elegir.
- CTA: Descubre si Arquitectura de Independencia es adecuada para tu empresa.
- Related CTA: Comienza con la Radiografía Empresarial Profética.

### Kingdom Wealth & Impact / Riqueza de Reino e Impacto

English:

- Eyebrow: FUTURE PROGRAM.
- Status: In development — not currently accepting applications.
- H1: Kingdom Wealth & Impact.
- Copy: Kingdom Wealth & Impact is being shaped for a future stage of work around wealth capacity, stewardship, and purposeful impact.

Spanish:

- Eyebrow: PROGRAMA FUTURO.
- Status: En desarrollo — actualmente no acepta aplicaciones.
- H1: Riqueza de Reino e Impacto.
- Copy: Riqueza de Reino e Impacto se está diseñando para una etapa futura en torno a la capacidad de generar riqueza, mayordomía e impacto con propósito.

Do not add price, current availability, investment promises, wealth-structuring deliverables, or prosperity guarantees.

### Prophetic Business Mentorship / Mentoría Empresarial Profética

English:

- Eyebrow: OPTIONAL ONGOING RELATIONSHIP.
- H1: Prophetic Business Mentorship.
- Hero: Continued business guidance and Holy Spirit-led prophetic discernment for entrepreneurs navigating important decisions, transitions, and seasons.
- Who it is for: Christian entrepreneurs who want an ongoing relationship for business counsel and prophetic discernment before, during, or after core programs.
- Problem: Some decisions are not isolated events. They unfold across seasons of growth, uncertainty, leadership, and change. An ongoing relationship can bring continuity when it is needed.
- What it addresses: strategic reflection, decision review, leadership questions, and prophetic discernment in the context of ongoing work.
- Relationship to Blueprint: Mentorship is not a substitute for the Blueprint’s initial diagnosis and is not automatically prescribed. It may be considered when ongoing accompaniment is needed.
- Availability: Mentorship is optional and selective. Specific scope and cadence are defined only if the relationship proceeds.
- CTA: Contact Company of Profits about Mentorship.
- Related CTA: Explore the Prophetic Business Blueprint.

Spanish:

- Eyebrow: RELACIÓN OPCIONAL Y CONTINUA.
- H1: Mentoría Empresarial Profética.
- Hero: Guía empresarial continua y discernimiento profético guiado por el Espíritu Santo para empresarios que atraviesan decisiones importantes, transiciones y temporadas complejas.
- Para quién: Empresarios cristianos que desean una relación continua de consejo empresarial y discernimiento profético antes, durante o después de los programas principales.
- Problema: Algunas decisiones no son hechos aislados. Se desarrollan a lo largo de temporadas de crecimiento, incertidumbre, liderazgo y cambio. Una relación continua puede aportar continuidad cuando sea necesaria.
- Qué aborda: análisis estratégico, revisión de decisiones, preguntas de liderazgo y discernimiento profético dentro del trabajo continuo del empresario.
- Relación con la Radiografía: La Mentoría no sustituye el diagnóstico inicial de la Radiografía ni se prescribe automáticamente. Puede considerarse cuando el acompañamiento continuo sea necesario.
- Disponibilidad: La Mentoría es opcional y selectiva. El alcance y la frecuencia específicos se definen únicamente si la relación avanza.
- CTA: Contacta a Company of Profits sobre la Mentoría.
- Related CTA: Conoce la Radiografía Empresarial Profética.

Do not invent fixed cadence, guaranteed availability, or pastoral language.

## 13. FAQ

Routes: /en/faq and /es/preguntas-frecuentes.

Use an accessible accordion with real buttons, visible focus, correct expanded state, and answer panels.

English:

Who is Company of Profits for?

> Company of Profits works with established Christian entrepreneurs whose companies are operating and ready for serious strategic diagnosis. The work is designed for people willing to engage both business strategy and Holy Spirit-led prophetic discernment.

Is the Prophetic Business Blueprint paid?

> Yes. The price is USD $2,300.

What is included in the Blueprint?

> The Blueprint is 100% live, virtual and personalized, with at least seven live videoconference sessions involving a business consultant and a prophet. Each live session focuses on a specific business topic or question within the diagnostic work. Each founding partner receives one individual prophetic session. Up to two founding partners are included. Each additional founding partner beginning with the third adds USD $100.

What happens after I apply?

> We review the application and communicate about the next step. The review considers whether the Blueprint is appropriate for the business and whether there is sufficient strategic, spiritual, and relational alignment to proceed.

Does applying mean I am accepted?

> No. Applying begins a review. It does not mean that you have been accepted into the Blueprint or a later program.

Is prophetic guidance included?

> Yes. Prophetic discernment is integrated into the core work. The central engagement is not offered as a strategy-only version.

Are programs chosen before or after diagnosis?

> After diagnosis. The Blueprint helps identify the constraint or opportunity that matters most and informs the appropriate next intervention.

Can Freedom Architecture be the first program?

> Yes. Freedom Architecture may be the first intervention when founder dependence is the primary constraint identified through diagnosis.

Is the work live and remote?

> Yes. The Blueprint is 100% live, virtual and personalized. It is not a recorded course or self-service product.

What do I receive from the Blueprint?

> You receive a documented picture of the business, clarity about the primary constraint or opportunity, and a recommendation regarding the appropriate next intervention. The written diagnostic record is a substantive result in its own right: it reflects the diagnosis, analysis, and applied experience developed across the engagement.

What happens if there is not enough alignment to proceed?

> The application may not proceed, or additional clarification may be requested. We do not promise acceptance or a later program.

Does completing the Blueprint guarantee a later program?

> No. Completing the Blueprint does not guarantee admission to a subsequent program. The Blueprint is valuable as a diagnostic engagement even if no further program follows.

Is Mentorship mandatory?

> No. Prophetic Business Mentorship is optional and may accompany, follow, or sit between other work when a continuing relationship is needed.

Is Kingdom Wealth & Impact available?

> It is in development and is not currently accepting applications.

Does Company of Profits replace professional or pastoral advice?

> No. Company of Profits provides strategic consulting and prophetic discernment for business decisions. Seek appropriate licensed professional or pastoral counsel for matters outside that scope.

Spanish:

¿Para quién es Company of Profits?

> Company of Profits trabaja con empresarios cristianos cuyas empresas están establecidas, operativas y listas para un diagnóstico estratégico serio. El proceso está diseñado para personas dispuestas a integrar estrategia empresarial y discernimiento profético guiado por el Espíritu Santo.

¿La Radiografía Empresarial Profética es de pago?

> Sí. El precio es de USD $2.300.

¿Qué incluye la Radiografía?

> La Radiografía es 100 % en vivo, virtual y personalizada, con mínimo siete sesiones por videoconferencia junto con un consultor empresarial y un profeta. Cada sesión en vivo se enfoca en un tema o una pregunta empresarial específicos dentro del proceso diagnóstico. Cada socio fundador recibe una sesión profética individual. Se incluyen hasta dos socios fundadores. Cada socio fundador adicional a partir del tercero suma USD $100.

¿Qué sucede después de aplicar?

> Revisamos la aplicación y te comunicamos el siguiente paso. La revisión considera si la Radiografía es adecuada para la empresa y si existe suficiente afinidad estratégica, espiritual y relacional para avanzar.

¿Aplicar significa que ya fui aceptado?

> No. Aplicar inicia una revisión. No significa que hayas sido aceptado en la Radiografía ni en un programa posterior.

¿La guía profética está incluida?

> Sí. El discernimiento profético se integra en el trabajo central. El proceso principal no se ofrece como una versión únicamente estratégica.

¿Los programas se eligen antes o después del diagnóstico?

> Después del diagnóstico. La Radiografía ayuda a identificar la restricción u oportunidad más importante y orienta la intervención adecuada.

¿Arquitectura de Independencia puede ser el primer programa?

> Sí. Arquitectura de Independencia puede ser la primera intervención cuando la dependencia del fundador sea la principal restricción identificada en el diagnóstico.

¿El trabajo es en vivo y remoto?

> Sí. La Radiografía es 100 % en vivo, virtual y personalizada. No es un curso grabado ni un producto de autoservicio.

¿Qué recibo en la Radiografía?

> Recibes una imagen documentada de la empresa, claridad sobre la principal restricción u oportunidad y una recomendación sobre la intervención adecuada. El documento diagnóstico es un resultado sustantivo por sí mismo: reúne el diagnóstico, el análisis y la experiencia aplicada durante el proceso.

¿Qué sucede si no existe suficiente afinidad para avanzar?

> La aplicación puede no continuar o podemos solicitar una aclaración adicional. No prometemos aceptación ni un programa posterior.

¿Completar la Radiografía garantiza un programa posterior?

> No. Completar la Radiografía no garantiza la admisión a un programa posterior. La Radiografía tiene valor como proceso diagnóstico aunque no continúe ningún programa.

¿La Mentoría es obligatoria?

> No. La Mentoría Empresarial Profética es opcional y puede acompañar, seguir o ubicarse entre otros procesos cuando una relación continua sea necesaria.

¿Riqueza de Reino e Impacto ya está disponible?

> Está en desarrollo y actualmente no acepta aplicaciones.

¿Company of Profits reemplaza la asesoría profesional o pastoral?

> No. Company of Profits ofrece consultoría estratégica y discernimiento profético para decisiones empresariales. Busca el acompañamiento profesional o pastoral apropiado para asuntos que estén fuera de ese alcance.

Use FAQ structured data only for visible FAQ content.

## 14. APPLY

Routes: /en/apply and /es/aplicar.

Use the supplied Application Form Specification (/home/project/public/documents/tech/Company_of_Profits_Application_Form_Specification_v1.1.md) for the complete functional contract. The form is bilingual, three-step, accessible, and connected to the existing Supabase application flow.

English H1:

> Apply for the Prophetic Business Blueprint

Intro:

> The application helps us understand your business and evaluate whether the Blueprint is the appropriate next step. It is not a request for sensitive financial documents, and submitting it does not mean you have been accepted.

Section heading:

> Tell us where the business is now and what you think needs to change.

Helper:

> Answer at the level that is useful for an initial review. Do not include passwords, confidential documents, bank details, or sensitive personal information that is not necessary at this stage.

Spanish H1:

> Aplicar a la Radiografía Empresarial Profética

Intro:

> La aplicación nos ayuda a entender tu empresa y evaluar si la Radiografía es el siguiente paso adecuado. No solicitamos documentos financieros sensibles, y enviar la aplicación no significa que hayas sido aceptado.

Section heading:

> Cuéntanos dónde está hoy tu empresa y qué crees que necesita cambiar.

Helper:

> Responde con el nivel de detalle útil para una primera revisión. No incluyas contraseñas, documentos confidenciales, datos bancarios ni información personal sensible que no sea necesaria en esta etapa.

Steps and fields:

Step 1 — Founder and company / Fundador y empresa:

- Full name / Nombre completo — required.
- Work email / Correo electrónico de trabajo — required.
- Company name / Nombre de la empresa — required.
- Company website / Sitio web de la empresa — optional.
- Country where the company primarily operates / País donde opera principalmente — required.
- Preferred language / Idioma preferido — required.
- Industry or business model / Industria o modelo de negocio — required.
- Approximate number of employees / Número aproximado de empleados — required.
- Active founding partners / Socios fundadores activos — required.
- Primary market, if different from country / Mercado principal, si es diferente del país — conditional.

Step 2 — Business context / Contexto empresarial:

- Current profitability context / Contexto actual de rentabilidad — required.
- How dependent is the company on its founders? / ¿Qué tan dependiente es la empresa de sus fundadores? — required.
- Most important business issue right now / Reto empresarial más importante hoy — required.

Step 3 — Desired change and alignment / Cambio deseado y afinidad:

- What change would make the company more valuable over the next 12–18 months? / ¿Qué cambio haría más valiosa la empresa en los próximos 12–18 meses? — required.
- Do you identify as a Christian entrepreneur and are you open to integrating business strategy with prophetic discernment? / ¿Te identificas como empresario cristiano y estás abierto a integrar estrategia empresarial con discernimiento profético? — required.
- Phone / Teléfono — required according to the supplied form specification.
- How did you hear about Company of Profits? / ¿Cómo te enteraste sobre Company of Profits? — required.
- Additional context / Contexto adicional — optional.
- Insights consent / Consentimiento para recibir Insights — optional and unchecked by default.

Show active step and total steps. Retain completed values between steps. Provide field-level errors in the active language. Do not expose internal qualification scores.

Required consent, English:

> By submitting this application, you authorize Company of Profits to use the information you provide to review your application, evaluate whether the Blueprint is appropriate for your business, and communicate with you about it. See our Privacy Policy.

Required consent, Spanish:

> Al enviar esta aplicación, autorizas a Company of Profits a utilizar la información que proporcionas para revisar tu aplicación, evaluar si la Radiografía es adecuada para tu empresa y comunicarse contigo al respecto. Consulta nuestra Política de Privacidad.

Keep required application consent separate from optional Insights consent. Never pre-check marketing consent.

Success, English:

> We received your application.
> 
> We will review it and evaluate the next step. Submission is not acceptance and does not guarantee admission to the Prophetic Business Blueprint or a later program.

Success, Spanish:

> Recibimos tu aplicación.
> 
> La revisaremos y evaluaremos el siguiente paso. Enviar la aplicación no significa ser aceptado ni garantiza la admisión a la Radiografía Empresarial Profética o a un programa posterior.

Duplicate, English:

> We already received an application with these details. Please do not submit it again.

Duplicate, Spanish:

> Ya recibimos una aplicación con estos datos. No es necesario enviarla de nuevo.

Failure, English:

> We could not confirm the submission. Your information remains on this page. Please try again.

Failure, Spanish:

> No pudimos confirmar el envío. Tu información permanece en esta página. Intenta nuevamente.

Do not invent an application reference number or response-window promise.

## 15. CONTACT

Routes: /en/contact and /es/contacto.

Contact is a separate journey from Apply.

English H1:

> Contact Us

Intro:

> Use this pathway for partnerships, alliances, referrals, media, speaking, or another business inquiry. If you want your business evaluated for the Prophetic Business Blueprint, use the separate form.

Fields:

- Name — required.
- Company — required.
- Country — required.
- Email — required.
- Message — required.

No phone field.

CTA: Send Message

Privacy:

> Your information is used to review and respond to this message. See our Privacy Policy.

Success:

> Your message was received. We will review it and respond through the email you provided.

Error:

> We could not send your message. Your information remains on this page. Please try again.

Application distinction:

> Looking for a business diagnosis? Apply for the Prophetic Business Blueprint.

Spanish H1:

> Contáctanos

Intro:

> Usa este canal para alianzas, asociaciones, referidos, medios, conferencias u otra consulta empresarial. Si quieres que evaluemos tu empresa para la Radiografía Empresarial Profética, utiliza el formulario separado.

Fields:

- Nombre — obligatorio.
- Empresa — obligatoria.
- País — obligatorio.
- Correo electrónico — obligatorio.
- Mensaje — obligatorio.

No phone field.

CTA: Enviar mensaje

Privacy:

> Utilizaremos tu información para revisar y responder este mensaje. Consulta nuestra Política de Privacidad.

Success:

> Recibimos tu mensaje. Lo revisaremos y responderemos a través del correo electrónico que proporcionaste.

Error:

> No pudimos enviar tu mensaje. Tu información permanece en esta página. Intenta nuevamente.

Application distinction:

> ¿Buscas un diagnóstico empresarial? Aplica a la Radiografía Empresarial Profética.

Store Contact submissions in a dedicated Supabase table separate from Blueprint applications with name, company, country, email, message, language, and created timestamp. Language must be en or es. Use secure existing patterns.

## 16. LEGAL AND COOKIE EXPERIENCE

Legal routes:

- /en/privacy-policy
  - /home/project/public/documents/legal/privacy-policy.md
- /en/terms-and-conditions
  - /home/project/public/documents/legal/terms-and-conditions.md
- /en/cookie-policy
  - /home/project/public/documents/legal/cookie-policy.md
- /es/politica-de-privacidad
  - /home/project/public/documents/legal/politica-de-privacidad.md
- /es/terminos-y-condiciones
  - /home/project/public/documents/legal/terminos-y-condiciones.md
- /es/politica-de-cookies
  - /home/project/public/documents/legal/politica-de-cookies.md

Use the supplied six legal Markdown files faithfully. Keep locale-specific links and equivalent language switching. Link legal pages from every footer. Place Privacy beside Blueprint consent and Cookie Policy from the consent surface.

Cookie banner English:

> Company of Profits uses necessary cookies to keep the site working. With your permission, analytics tools help us understand aggregate usage and improve the experience. Read our Cookie Policy.

Buttons: Accept analytics · Only necessary · Cookie settings

Cookie banner Spanish:

> Company of Profits utiliza cookies necesarias para que el sitio funcione. Con tu permiso, las herramientas de analítica nos ayudan a entender el uso agregado y mejorar la experiencia. Consulta nuestra Política de Cookies.

Buttons: Aceptar analítica · Solo necesarias · Configurar cookies

Show on first visit until a choice is made. Keep it small and unobtrusive, never full-screen. Use the active locale. Make settings reachable later. Load analytics tools only after affirmative analytics consent.

## 17. INTEGRATIONS AND SECURITY

Supabase:

- preserve the Blueprint flow and data;
- preserve secure access patterns;
- use one dedicated Contact table;
- store Contact language as en or es;
- retain form values on recoverable errors;
- test English and Spanish success, duplicate, failure, and retry states;
- never expose service-role keys client-side.

Sanity:

- /home/project/public/documents/tech/FRAGMENTO_PROMPT_SANITY.md
- use the supplied connection prompt fragment to connect the existing Sanity project;
- preserve existing article records and schemas;
- render the Insights index and article pages;
- keep queries locale-aware;
- handle loading, empty, error, and missing-translation states.

Google Analytics:

- /home/project/public/documents/tech/FRAGMENTO_PROMPT_GOOGLE_ANALYTICS_GA4.md

- use the supplied approved configuration;

- load only after affirmative analytics consent;

- never invent a measurement ID.

Microsoft Clarity:

- /home/project/public/documents/tech/FRAGMENTO_PROMPT_MICROSOFT_CLARITY.md

- use the supplied approved configuration;

- load only after affirmative analytics consent;

- never invent a project ID.

Google Search Console:

- preserve the existing owner-verification path;
- do not invent a connector or credentials;
- keep the production sitemap available;
- keep verification records out of public UI.

Security:

- use project environment variables/secrets;
- no private credentials in frontend code;
- avoid unsafe HTML injection;
- preserve HTTPS;
- handle rejected promises and network failures;
- remove production debug output;
- resolve console/runtime errors.

## 18. SEO, GEO, AND SEMANTIC IMPLEMENTATION

For every public route implement:

- unique title;
- concise unique meta description;
- one semantic H1;
- meaningful H2/H3 hierarchy;
- canonical URL;
- hreflang;
- correct locale lang attribute;
- Open Graph;
- locale-specific social metadata;
- relevant internal links toward the Blueprint;
- intentional indexability.

Also implement an XML sitemap, intentional robots rules, clean 404, and intentional loading/empty/error/success states.

Use Article or BlogPosting structured data for actual Insights fields. Use FAQPage structured data only for visible FAQ content. Use truthful Organization/WebSite structured data only from factual content.

Metadata direction:

- Home EN: Company of Profits — Strategic Business Consulting and Prophetic Guidance
- Home ES: Company of Profits — Consultoría Estratégica y Guía Profética
- Blueprint EN: Prophetic Business Blueprint — Company of Profits
- Blueprint ES: Radiografía Empresarial Profética — Company of Profits
- Methodology EN: Methodology — Company of Profits
- Methodology ES: Metodología — Company of Profits
- Why Us EN: Why Company of Profits — Company of Profits
- Why Us ES: Por qué Company of Profits — Company of Profits
- About EN: About Company of Profits
- About ES: Sobre Company of Profits
- Insights EN/ES: Insights — Company of Profits
- Apply EN: Apply for the Prophetic Business Blueprint — Company of Profits
- Apply ES: Aplicar a la Radiografía Empresarial Profética — Company of Profits
- Contact EN: Contact Company of Profits
- Contact ES: Contáctanos — Company of Profits

Do not invent outcomes, awards, metrics, client counts, testimonials, certifications, case studies, or unsupported SEO claims.

## 19. ASSETS AND VISUAL IMPLEMENTATION

Use only these supplied approved assets:

- light logo: 
  - /home/project/public/assets/images/Company_of_Profits_Logo_Dark_bg.webp
- dark logo:
  - /home/project/public/assets/images/Company_of_Profits_Logo_Light_bg.webp
- favicon package: 
  - /home/project/public/
  - /home/project/public/documents/tech/favicon_text.txt
- flame/path SVG, 3 versions:
  - /home/project/public/assets/images/flame_Light_Green.png
  - /home/project/public/assets/images/flame_Light_Yellow.png
  - /home/project/public/assets/images/flame_Purple.png
- one approved Magnific-generated Blueprint image.
  - /home/project/public/assets/images/Editorial_still_life_representing_an_organized_business_diagnostic_dossier.png

Use the correct logo on dark/light fields. Use the favicon unchanged. Use the flame/path SVG sparingly as a restrained path or marker, never as literal fire decoration.

Use the approved Blueprint image only to give materiality to the paid diagnostic and support scope/price or documented-process content. Do not use it as a generic hero background, overlay text, or reuse it merely to fill space.

English alt:

> Editorial still life representing an organized business diagnostic dossier.

Spanish alt:

> Bodegón editorial que representa un dossier organizado de diagnóstico empresarial.

Use native HTML/CSS/SVG for founder-dependence diagrams, symptom-to-system relationships, methodology, integration, Blueprint process, program relationships, operations flow, fact panels, timelines, and navigation.

Do not add a founder photograph, portrait placeholder, synthetic identity, or new generated image. Avoid generic SaaS card walls, stock consulting photography, church imagery, angels, glowing hands, mystical spectacle, decorative literal flames, fake documents, generated readable text, fake metrics, logos, client data, or image-based exact information.

## 20. RESPONSIVE AND ACCESSIBLE QUALITY

Design desktop, tablet, and mobile deliberately. Test navigation, locale switching, long headings, CTA wrapping, cost blocks, diagrams, Blueprint facts/image crop, program pathways, FAQ, forms, articles, legal pages, footer, touch targets, and keyboard behavior.

Requirements:

- no horizontal overflow;
- no essential hover-only information;
- preserved reading order;
- Blueprint image below facts on mobile;
- diagrams become clear vertical sequences;
- readable body measure;
- visible keyboard focus;
- reduced-motion support;
- semantic HTML;
- correct heading hierarchy;
- accessible labels and errors;
- accessible accordion states;
- adequate contrast;
- accurate alt text;
- correct lang attributes;
- accessible mobile navigation;
- no duplicate IDs;
- no nested interactive elements.

## 21. COMPLETION CHECK

Before finishing, verify:

- all listed English and Spanish routes work;
- final copy is present in both locales;
- navigation and equivalent-route switching work;
- Blueprint is the primary gateway;
- Contact and Apply are distinct;
- the current program names are used;
- Kingdom Wealth & Impact is clearly in development;
- Mentorship is optional and distinct;
- no founder photo or placeholder exists;
- no unsupported proof, claims, or deliverables exist;
- no internal implementation language is visible;
- Blueprint price, format, sessions, partner rule, diagnostic value, alignment boundary, and non-acceptance message are visible;
- the three-step application works in both locales;
- application consent is separate from optional Insights consent;
- Contact has exactly five fields and no phone;
- Contact stores locale separately from Blueprint applications;
- Sanity index and article pages render existing content;
- analytics and Clarity wait for affirmative analytics consent;
- Search Console verification remains valid;
- no secrets are exposed;
- canonical, hreflang, sitemap, robots, metadata, and structured data work;
- article pages are indexable when intended;
- legal routes and cookie settings are reachable;
- approved logos, favicon, flame/path SVG, and Blueprint image are used correctly;
- no unapproved imagery appears;
- no console/runtime errors remain.

Inspect before changing, preserve before replacing, and validate the complete public bilingual experience rather than stopping at a visual mockup.
