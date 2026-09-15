export interface ProgramContent {
  name: string;
  slug: string;
  status: 'active' | 'coming-soon';
  tagline: string;
  description: string;
  whoFor: string;
  businessProblem: string;
  desiredOutcome: string;
  whyItMatters: string;
  workstreams: string[];
  propheticIntegration: string;
  deliverables: string[];
  doesNotPromise: string[];
  blueprintRelation: string;
  nextStep: string;
}

export interface ProgramData {
  en: ProgramContent;
  es: ProgramContent;
  slugEn: string;
  slugEs: string;
  icon: string;
  status: 'active' | 'coming-soon';
  category: 'core' | 'mentorship' | 'future';
}

export const programs: ProgramData[] = [
  {
    slugEn: 'profit-maximization',
    slugEs: 'rentabilidad-maximizada',
    icon: 'trending-up',
    status: 'active',
    category: 'core',
    en: {
      name: 'Profit Maximization',
      slug: 'profit-maximization',
      status: 'active',
      tagline: 'Improve the economics and profitability of your business.',
      description:
        'A strategic intervention focused on identifying and removing profit constraints while capturing unrealized profit opportunities across the business.',
      whoFor:
        'Founders whose businesses are profitable but suspect significant unrealized profit potential — whether through pricing, cost structure, operational waste, or strategic misalignment.',
      businessProblem:
        'Many established businesses operate below their profit potential. Revenue grows but margins stagnate. Profit leaks persist for years unnoticed — in pricing, in operational waste, in underperforming segments, in decisions that made sense once but no longer do.',
      desiredOutcome:
        'A more profitable business with stronger margins, clearer profit drivers, and the strategic clarity to sustain and compound profit performance over time.',
      whyItMatters:
        'Profitability is the commercial foundation of everything else. Without strong profit performance, freedom, wealth, and impact remain theoretical. Profit is not the goal — but it is the resource that makes every other goal possible.',
      workstreams: [
        'Profit constraint identification and analysis',
        'Pricing and margin structure review',
        'Revenue quality and segment performance assessment',
        'Cost structure and operational waste evaluation',
        'Strategic profit opportunity mapping',
        'Profit performance execution plan',
      ],
      propheticIntegration:
        'Prophetic discernment may reveal hidden profit constraints, confirm strategic directions, identify seasons for specific interventions, or expose risks that conventional analysis would miss. The Holy Spirit provides strategic discernment that complements business analysis.',
      deliverables: [
        'Documented profit constraint analysis',
        'Strategic profit opportunity map',
        'Prioritized execution plan with key decisions identified',
        'Prophetic discernment summary relevant to profit strategy',
        'Progress reassessment framework',
      ],
      doesNotPromise: [
        'No fixed percentage profit increase is promised.',
        'No specific revenue or margin outcome is guaranteed.',
        'No timeline for results is prescribed without diagnosis.',
        'No result is promised without execution by the client.',
      ],
      blueprintRelation:
        'This program may be recommended as the first intervention after the Prophetic Business Blueprint — but only if diagnosis identifies profitability as the primary constraint or opportunity. It is not automatically first.',
      nextStep:
        'If this resonates with your situation, the next step is the Prophetic Business Blueprint — where we diagnose your business and determine whether this is the right intervention for you.',
    },
    es: {
      name: 'Rentabilidad Maximizada',
      slug: 'rentabilidad-maximizada',
      status: 'active',
      tagline: 'Mejorar la economía y rentabilidad de tu empresa.',
      description:
        'Una intervención estratégica enfocada en identificar y eliminar las restricciones de rentabilidad mientras se aprovechan las oportunidades de utilidad no realizadas en la empresa.',
      whoFor:
        'Empresarios cuyas empresas son rentables pero sospechan un potencial de utilidad significativo sin realizar — ya sea por precios, estructura de costos, desperdicio operativo o desalineación estratégica.',
      businessProblem:
        'Muchas empresas establecidas operan por debajo de su potencial de rentabilidad. Los ingresos crecen pero los márgenes se estancan. Las fugas de utilidad persisten durante años sin ser notadas — en los precios, en el desperdicio operativo, en segmentos de bajo desempeño, en decisiones que tuvieron sentido en su momento pero que ya no lo tienen.',
      desiredOutcome:
        'Una empresa más rentable con márgenes más fuertes, mejores factores de utilidad y la claridad estratégica para sostener y multiplicar el desempeño de rentabilidad a lo largo del tiempo.',
      whyItMatters:
        'La rentabilidad es el fundamento comercial de todo lo demás. Sin un desempeño sólido de utilidad, la libertad, la riqueza y el impacto siguen siendo teóricos. La utilidad no es el objetivo, pero es el recurso que hace posible cualquier otro objetivo.',
      workstreams: [
        'Identificación y análisis de restricciones de rentabilidad',
        'Revisión de estructura de precios y márgenes',
        'Evaluación de calidad de ingresos y desempeño por segmento',
        'Análisis de estructura de costos y desperdicio operativo',
        'Mapeo de oportunidades estratégicas de rentabilidad',
        'Plan de ejecución para mejorar el desempeño de utilidad',
      ],
      propheticIntegration:
        'La discernimiento profético puede revelar restricciones ocultas de rentabilidad, confirmar direcciones estratégicas, identificar tiempos para intervenciones específicas o exponer riesgos que el análisis convencional no detectaría. El Espíritu Santo provee discernimiento estratégico que complementa el análisis empresarial.',
      deliverables: [
        'Análisis documentado de restricciones de rentabilidad',
        'Mapa estratégico de oportunidades de utilidad',
        'Plan de ejecución priorizado con decisiones clave identificadas',
        'Resumen de discernimiento profético relevante a la estrategia de rentabilidad',
        'Marco de reevaluación de progreso',
      ],
      doesNotPromise: [
        'No se promete un porcentaje fijo de aumento en rentabilidad.',
        'No se garantiza un resultado específico de ingresos o márgenes.',
        'No se prescribe un plazo para resultados sin diagnóstico.',
        'No se promete resultado alguno sin ejecución por parte del cliente.',
      ],
      blueprintRelation:
        'Este programa puede ser recomendado como primera intervención después de la Radiografía Empresarial Profética — pero solo si el diagnóstico identifica la rentabilidad como la principal restricción u oportunidad. No es automáticamente el primero.',
      nextStep:
        'Si esto resuena con tu situación, el siguiente paso es la Radiografía Empresarial Profética — donde diagnosticamos tu empresa y determinamos si esta es la intervención adecuada para ti.',
    },
  },
  {
    slugEn: 'operational-optimization',
    slugEs: 'optimizacion-operativa',
    icon: 'settings',
    status: 'active',
    category: 'core',
    en: {
      name: 'Operational Optimization',
      slug: 'operational-optimization',
      status: 'active',
      tagline: 'Improve the operating structure and execution capacity of your business.',
      description:
        'A structural intervention that addresses how the business operates — roles, decision systems, execution capacity, and the organizational friction that slows everything down.',
      whoFor:
        'Founders whose businesses have outgrown their original operating structure — where roles are unclear, decisions bottleneck, execution is inconsistent, and the founder is pulled into too many operational matters.',
      businessProblem:
        'A business can be profitable and still operate poorly. Roles overlap or are undefined. Decisions pile up on the founder. Execution depends on who is paying attention that week. The operating structure that worked at one stage now creates friction at the current one.',
      desiredOutcome:
        'A business with clear roles, functional decision systems, consistent execution, and the organizational capability to operate without constant founder involvement in operations.',
      whyItMatters:
        'Operations is where strategy meets reality. Even the best strategic plan fails without an operating structure that can execute it. Operational friction is also one of the most common reasons founders remain trapped in the business.',
      workstreams: [
        'Operating structure and role clarity assessment',
        'Decision system design and bottleneck removal',
        'Execution capability and process evaluation',
        'Organizational friction identification',
        'Founder involvement reduction planning',
        'Operational execution plan',
      ],
      propheticIntegration:
        'Prophetic discernment may reveal hidden operational issues, identify the right people for key roles, expose structural risks, or provide direction on timing and prioritization of structural changes. The Holy Spirit brings insight that goes beyond organizational charts.',
      deliverables: [
        'Documented operating structure analysis',
        'Decision system redesign recommendations',
        'Role clarity and delegation framework',
        'Operational friction map with prioritized resolutions',
        'Prophetic discernment summary relevant to operational structure',
        'Execution plan with reassessment framework',
      ],
      doesNotPromise: [
        'No specific operational metric outcome is guaranteed.',
        'No promise that founder involvement drops to zero — the goal is appropriate involvement, not absence.',
        'No fixed timeline without diagnosis.',
        'No result without client execution.',
      ],
      blueprintRelation:
        'This program may be recommended first if the Blueprint identifies operating structure as the primary constraint. It is not always the first intervention — that determination requires diagnosis.',
      nextStep:
        'If your operations feel like they have outgrown their structure, the next step is the Prophetic Business Blueprint — where we diagnose whether this is the right intervention for your current situation.',
    },
    es: {
      name: 'Optimización Operativa',
      slug: 'optimizacion-operativa',
      status: 'active',
      tagline: 'Mejorar la estructura operativa y la capacidad de ejecución de tu empresa.',
      description:
        'Una intervención estructural que aborda cómo opera la empresa — roles, sistemas de decisión, capacidad de ejecución y la fricción organizacional que todo lo hace más lento.',
      whoFor:
        'Empresarios cuyas empresas han superado su estructura operativa original — donde los roles no están claros, las decisiones se atascan, la ejecución es inconsistente y el fundador es arrastrado a demasiados asuntos operativos.',
      businessProblem:
        'Una empresa puede ser rentable y aún así operar mal. Los roles se superponen o no están definidos. Las decisiones se acumulan en el fundador. La ejecución depende de quién esté prestando atención esa semana. La estructura operativa que funcionó en una etapa ahora genera fricción en la actual.',
      desiredOutcome:
        'Una empresa con roles claros, sistemas de decisión funcionales, ejecución consistente y la capacidad organizacional para operar sin la involucración constante del fundador en lo operativo.',
      whyItMatters:
        'La operación es donde la estrategia se encuentra con la realidad. Incluso el mejor plan estratégico fracasa sin una estructura operativa que pueda ejecutarlo. La fricción operativa es también una de las razones más comunes por las que los fundadores permanecen atrapados en la empresa.',
      workstreams: [
        'Evaluación de estructura operativa y claridad de roles',
        'Diseño de sistemas de decisión y eliminación de cuellos de botella',
        'Evaluación de capacidad de ejecución y procesos',
        'Identificación de fricción organizacional',
        'Planificación de reducción de involucración del fundador',
        'Plan de ejecución operativa',
      ],
      propheticIntegration:
        'El discernimiento profético puede revelar problemas operativos ocultos, identificar a las personas adecuadas para roles clave, exponer riesgos estructurales o proveer dirección sobre el momento y la priorización de cambios estructurales. El Espíritu Santo trae discernimiento que va más allá de los organigramas.',
      deliverables: [
        'Análisis documentado de estructura operativa',
        'Recomendaciones de rediseño de sistemas de decisión',
        'Marco de claridad de roles y delegación',
        'Mapa de fricción operativa con resoluciones priorizadas',
        'Resumen de discernimiento profético relevante a la estructura operativa',
        'Plan de ejecución con marco de reevaluación',
      ],
      doesNotPromise: [
        'No se garantiza un resultado operacional específico.',
        'No se promete que la involucración del fundador llegue a cero — el objetivo es una involucración adecuada, no la ausencia.',
        'No se fija un plazo sin diagnóstico.',
        'No hay resultado sin ejecución del cliente.',
      ],
      blueprintRelation:
        'Este programa puede ser recomendado primero si la Radiografía identifica la estructura operativa como la principal restricción. No es siempre la primera intervención — esa determinación requiere diagnóstico.',
      nextStep:
        'Si sientes que tus operaciones han superado su estructura, el siguiente paso es la Radiografía Empresarial Profética — donde diagnosticamos si esta es la intervención adecuada para tu situación actual.',
    },
  },
  {
    slugEn: 'freedom-architecture',
    slugEs: 'arquitectura-de-independencia',
    icon: 'compass',
    status: 'active',
    category: 'core',
    en: {
      name: 'Freedom Architecture',
      slug: 'freedom-architecture',
      status: 'active',
      tagline: 'Reduce founder dependence and create genuine freedom of choice.',
      description:
        'A leadership and structural intervention designed to build a company that can operate and grow with substantially less dependence on the founder — creating freedom of choice, not forced exit.',
      whoFor:
        'Founders who recognize that their business depends too heavily on them — for decisions, for relationships, for operational continuity — and want to build a company that gives them genuine freedom.',
      businessProblem:
        'A successful company should create more freedom than it demands. Yet many founders find themselves more trapped as the business grows. Key-person risk concentrates in one person. Decisions cannot proceed without the founder. Selling the company would be difficult because it depends on them. The founder is involved by necessity, not by choice.',
      desiredOutcome:
        'A company that can operate and grow with less founder intervention — where the founder remains involved by choice rather than necessity, with genuine freedom to decide how they spend their time, energy, and attention.',
      whyItMatters:
        'Founder dependence is the single most common reason a successful business becomes a trap. It limits growth, limits value, limits freedom, and limits the founder\'s capacity for family, for stewardship, and for hearing and following God.',
      workstreams: [
        'Founder dependence assessment and mapping',
        'Leadership structure and delegation architecture',
        'Decision authority redesign',
        'Key-person risk reduction planning',
        'Operating independence framework',
        'Freedom progression plan',
      ],
      propheticIntegration:
        'Prophetic discernment is especially relevant here — it may reveal the right timing for structural changes, identify the right people to carry greater responsibility, expose hidden dependencies, or provide direction on the founder\'s next season. The Holy Spirit brings wisdom that goes beyond organizational design.',
      deliverables: [
        'Documented founder dependence map',
        'Leadership and delegation architecture',
        'Decision authority framework',
        'Key-person risk reduction plan',
        'Prophetic discernment summary relevant to freedom and transition',
        'Freedom progression plan with reassessment framework',
      ],
      doesNotPromise: [
        'Freedom is not abandonment or forced exit.',
        'No promise that the founder disappears from the business.',
        'No promise to sell the company — that is a choice, not a goal.',
        'No fixed timeline without diagnosis.',
        'No result without client execution.',
      ],
      blueprintRelation:
        'This program may be recommended first if the Blueprint identifies founder dependence as the primary constraint. The Blueprint determines what the business actually needs — Freedom Architecture is not automatically the first or the last intervention.',
      nextStep:
        'If you recognize that your business depends too heavily on you, the next step is the Prophetic Business Blueprint — where we diagnose your business and determine whether this is the right intervention for now.',
    },
    es: {
      name: 'Arquitectura de Independencia',
      slug: 'arquitectura-de-independencia',
      status: 'active',
      tagline: 'Reducir la dependencia del fundador y crear libertad de elección genuina.',
      description:
        'Una intervención de liderazgo y estructura diseñada para construir una empresa que pueda operar y crecer con mucha menos dependencia del fundador — creando libertad de elección, no una salida forzada.',
      whoFor:
        'Empresarios que reconocen que su empresa depende demasiado de ellos — en las decisiones, en las relaciones, en la continuidad operativa — y quieren construir una empresa que les dé libertad genuina.',
      businessProblem:
        'Una empresa exitosa debería crear más libertad de la que exige. Sin embargo, muchos fundadores se sienten más atrapados a medida que la empresa crece. El riesgo de persona clave se concentra en una sola persona. Las decisiones no pueden avanzar sin el fundador. Vender la empresa sería difícil porque depende de él. El fundador está involucrado por necesidad, no por elección.',
      desiredOutcome:
        'Una empresa que pueda operar y crecer con menos intervención del fundador — donde el fundador permanezca involucrado por elección y no por necesidad, con libertad genuina para decidir cómo invierte su tiempo, energía y atención.',
      whyItMatters:
        'La dependencia del fundador es la razón más común por la que una empresa exitosa se convierte en una trampa. Limita el crecimiento, limita el valor, limita la libertad y limita la capacidad del fundador para la familia, para la mayordomía y para escuchar y seguir a Dios.',
      workstreams: [
        'Evaluación y mapeo de dependencia del fundador',
        'Arquitectura de liderazgo y delegación',
        'Rediseño de autoridad de decisiones',
        'Planificación de reducción de riesgo de persona clave',
        'Marco de independencia operativa',
        'Plan de progresión de libertad',
      ],
      propheticIntegration:
        'El discernimiento profético es especialmente relevante aquí — puede revelar el momento adecuado para cambios estructurales, identificar a las personas correctas para asumir mayor responsabilidad, exponer dependencias ocultas o proveer dirección sobre la próxima temporada del fundador. El Espíritu Santo trae sabiduría que va más allá del diseño organizacional.',
      deliverables: [
        'Mapa documentado de dependencia del fundador',
        'Arquitectura de liderazgo y delegación',
        'Marco de autoridad de decisiones',
        'Plan de reducción de riesgo de persona clave',
        'Resumen de discernimiento profético relevante a la libertad y transición',
        'Plan de progresión de libertad con marco de reevaluación',
      ],
      doesNotPromise: [
        'La libertad no es abandono ni salida forzada.',
        'No se promete que el fundador desaparezca de la empresa.',
        'No se promete vender la empresa — eso es una elección, no un objetivo.',
        'No se fija un plazo sin diagnóstico.',
        'No hay resultado sin ejecución del cliente.',
      ],
      blueprintRelation:
        'Este programa puede ser recomendado primero si la Radiografía identifica la dependencia del fundador como la principal restricción. La Radiografía determina lo que la empresa realmente necesita — Arquitectura de Independencia no es automáticamente la primera ni la última intervención.',
      nextStep:
        'Si reconoces que tu empresa depende demasiado de ti, el siguiente paso es la Radiografía Empresarial Profética — donde diagnosticamos tu empresa y determinamos si esta es la intervención adecuada para ahora.',
    },
  },
  {
    slugEn: 'kingdom-wealth-and-impact',
    slugEs: 'riqueza-de-reino-e-impacto',
    icon: 'crown',
    status: 'coming-soon',
    category: 'future',
    en: {
      name: 'Kingdom Wealth & Impact',
      slug: 'kingdom-wealth-and-impact',
      status: 'coming-soon',
      tagline: 'Financial organization, stewardship, and purposeful impact — coming soon.',
      description:
        'A future program designed to help Christian founders build wealth capacity and organize their financial lives for stewardship and Kingdom-oriented impact.',
      whoFor:
        'Founders who have built a profitable, well-structured, and increasingly independent business — and are ready to think strategically about wealth, stewardship, and impact.',
      businessProblem:
        'Profit and freedom are milestones, not destinations. Many founders reach a point where the question shifts from "how do I grow?" to "what is this all for?" — and discover they have no clear financial organization, stewardship strategy, or impact framework.',
      desiredOutcome:
        'A founder with organized finances, a stewardship mindset, asset-building strategy, and a clear framework for purposeful, Kingdom-oriented impact.',
      whyItMatters:
        'Wealth without purpose becomes a burden. Stewardship without strategy becomes guesswork. Impact without organization becomes scattered. This program addresses the dimension beyond profit and freedom.',
      workstreams: [
        'Financial organization and clarity',
        'Stewardship framework and philosophy',
        'Asset building and wealth capacity strategy',
        'Purposeful impact planning',
        'Kingdom-oriented legacy design',
      ],
      propheticIntegration:
        'Prophetic discernment will be central to this program — helping founders understand seasons, direction, and the specific stewardship and impact calls God has placed on their lives and businesses.',
      deliverables: [
        'Detailed program design in progress',
        'Full deliverables will be published when the program launches',
      ],
      doesNotPromise: [
        'No wealth outcomes are promised.',
        'No prosperity guarantees.',
        'No specific financial returns.',
      ],
      blueprintRelation:
        'This program will be part of the diagnosis-driven architecture once available. It is not yet available for application.',
      nextStep:
        'This program is not yet available. If you are interested in being notified when it launches, apply for the Prophetic Business Blueprint and indicate your interest in the application.',
    },
    es: {
      name: 'Riqueza de Reino e Impacto',
      slug: 'riqueza-de-reino-e-impacto',
      status: 'coming-soon',
      tagline: 'Organización financiera, mayordomía e impacto con propósito — próximamente.',
      description:
        'Un programa futuro diseñado para ayudar a empresarios cristianos a construir capacidad de riqueza y organizar su vida financiera para mayordomía e impacto orientado al Reino.',
      whoFor:
        'Empresarios que han construido una empresa rentable, bien estructurada y cada vez más independiente — y están listos para pensar estratégicamente sobre riqueza, mayordomía e impacto.',
      businessProblem:
        'La rentabilidad y la libertad son hitos, no destinos. Muchos fundadores llegan a un punto donde la pregunta cambia de "¿cómo crezco?" a "¿para qué es todo esto?" — y descubren que no tienen una organización financiera clara, ni una estrategia de mayordomía, ni un marco de impacto.',
      desiredOutcome:
        'Un fundador con finanzas organizadas, mentalidad de mayordomía, estrategia de construcción de activos y un marco claro para un impacto con propósito, orientado al Reino.',
      whyItMatters:
        'La riqueza sin propósito se convierte en carga. La mayordomía sin estrategia se convierte en adivinación. El impacto sin organización se convierte en dispersión. Este programa aborda la dimensión más allá de la rentabilidad y la libertad.',
      workstreams: [
        'Organización y claridad financiera',
        'Marco y filosofía de mayordomía',
        'Estrategia de construcción de activos y capacidad de riqueza',
        'Planificación de impacto con propósito',
        'Diseño de legado orientado al Reino',
      ],
      propheticIntegration:
        'El discernimiento profético será central en este programa — ayudando a los fundadores a entender tiempos, direcciones y los llamados específicos de mayordomía e impacto que Dios ha puesto en sus vidas y empresas.',
      deliverables: [
        'Diseño detallado del programa en progreso',
        'Los entregables completos se publicarán cuando el programa se lance',
      ],
      doesNotPromise: [
        'No se prometen resultados de riqueza.',
        'No hay garantías de prosperidad.',
        'No se garantizan retornos financieros específicos.',
      ],
      blueprintRelation:
        'Este programa será parte de la arquitectura basada en diagnóstico una vez disponible. Aún no está disponible para aplicación.',
      nextStep:
        'Este programa aún no está disponible. Si te interesa ser notificado cuando se lance, aplica a la Radiografía Empresarial Profética e indica tu interés en la aplicación.',
    },
  },
  {
    slugEn: 'prophetic-business-mentorship',
    slugEs: 'mentoria-empresarial-profetica',
    icon: 'users',
    status: 'active',
    category: 'mentorship',
    en: {
      name: 'Prophetic Business Mentorship',
      slug: 'prophetic-business-mentorship',
      status: 'active',
      tagline: 'An optional ongoing relationship for continued guidance and discernment.',
      description:
        'A flexible, ongoing mentorship relationship that combines business guidance with prophetic discernment. It is optional and may accompany a program, happen between programs, begin after a program, or continue long-term.',
      whoFor:
        'Founders who have completed the Prophetic Business Blueprint and want an ongoing relationship for continued strategic guidance, prophetic discernment, and accountability — whether alongside a core program or independently.',
      businessProblem:
        'Strategic decisions do not stop between programs. Founders face ongoing questions about direction, timing, people, risks, and opportunities. Without continued access to integrated business and prophetic guidance, momentum can stall and discernment can become intermittent.',
      desiredOutcome:
        'A founder with ongoing access to integrated business strategy and prophetic discernment — someone who knows their business, their context, and their walk with God, and can provide guidance as situations arise.',
      whyItMatters:
        'Some founders benefit from a continuous relationship rather than discrete interventions alone. Mentorship provides a consistent context for discernment, strategic conversation, and accountability.',
      workstreams: [
        'Ongoing strategic guidance and conversation',
        'Prophetic discernment for emerging decisions',
        'Accountability and progress review',
        'Seasonal direction and timing insight',
        'Integration of business and spiritual direction',
      ],
      propheticIntegration:
        'Prophetic discernment is woven throughout the mentorship relationship — available as situations arise, as decisions emerge, and as the founder navigates the ongoing complexity of leading a business.',
      deliverables: [
        'Regular mentorship sessions',
        'Ongoing access for emerging questions',
        'Prophetic discernment as situations arise',
        'Progress review and accountability',
      ],
      doesNotPromise: [
        'Mentorship is not a substitute for a core program when a core program is needed.',
        'No specific outcome is guaranteed.',
        'No prescribed frequency without mutual agreement.',
      ],
      blueprintRelation:
        'Mentorship requires completing the Prophetic Business Blueprint first. It may accompany any core program, happen between programs, or continue independently. It is not mandatory.',
      nextStep:
        'If you are interested in mentorship, the first step is the Prophetic Business Blueprint. During the application, you can indicate your interest in ongoing mentorship.',
    },
    es: {
      name: 'Mentoría Empresarial Profética',
      slug: 'mentoria-empresarial-profetica',
      status: 'active',
      tagline: 'Una relación continua y opcional para guía y discernimiento permanente.',
      description:
        'Una relación flexible y continua de mentoría que combina guía empresarial con discernimiento profético. Es opcional y puede acompañar un programa, darse entre programas, comenzar después de un programa o continuar a largo plazo.',
      whoFor:
        'Empresarios que han completado la Radiografía Empresarial Profética y desean una relación continua para guía estratégica, discernimiento profético y rendición de cuentas — ya sea junto a un programa core o de manera independiente.',
      businessProblem:
        'Las decisiones estratégicas no se detienen entre programas. Los fundadores enfrentan preguntas continuas sobre dirección, tiempos, personas, riesgos y oportunidades. Sin acceso continuo a guía empresarial y profética integrada, el impulso puede estancarse y el discernimiento puede volverse intermitente.',
      desiredOutcome:
        'Un fundador con acceso continuo a estrategia empresarial integrada y discernimiento profético — alguien que conoce su empresa, su contexto y su caminar con Dios, y puede proveer guía a medida que surgen las situaciones.',
      whyItMatters:
        'Algunos fundadores se benefician de una relación continua en lugar de solo intervenciones discretas. La mentoría provee un contexto consistente para discernimiento, conversación estratégica y rendición de cuentas.',
      workstreams: [
        'Guía estratégica y conversación continua',
        'Discernimiento profético para decisiones emergentes',
        'Rendición de cuentas y revisión de progreso',
        'Dirección estacional y discernimiento de tiempos',
        'Integración de dirección empresarial y espiritual',
      ],
      propheticIntegration:
        'El discernimiento profético está entretejido en toda la relación de mentoría — disponible a medida que surgen las situaciones, cuando emergen decisiones y mientras el fundador navega la complejidad continua de dirigir una empresa.',
      deliverables: [
        'Sesiones regulares de mentoría',
        'Acceso continuo para preguntas emergentes',
        'Discernimiento profético según surjan las situaciones',
        'Revisión de progreso y rendición de cuentas',
      ],
      doesNotPromise: [
        'La mentoría no sustituye un programa core cuando se necesita un programa core.',
        'No se garantiza un resultado específico.',
        'No se prescribe una frecuencia sin acuerdo mutuo.',
      ],
      blueprintRelation:
        'La mentoría requiere completar primero la Radiografía Empresarial Profética. Puede acompañar cualquier programa core, darse entre programas o continuar de manera independiente. No es obligatoria.',
      nextStep:
        'Si te interesa la mentoría, el primer paso es la Radiografía Empresarial Profética. Durante la aplicación, puedes indicar tu interés en mentoría continua.',
    },
  },
];

export function getProgramBySlug(slug: string, lang: 'en' | 'es'): ProgramData | undefined {
  return programs.find((p) => (lang === 'en' ? p.slugEn === slug : p.slugEs === slug));
}

export function getProgramPath(program: ProgramData, lang: 'en' | 'es'): string {
  return lang === 'en'
    ? `/en/programs/${program.slugEn}`
    : `/es/programas/${program.slugEs}`;
}
