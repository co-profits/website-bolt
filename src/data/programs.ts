export interface ProgramContent {
  name: string;
  slug: string;
  status: 'active' | 'coming-soon';
  tagline: string;
  hero: string;
  whoFor: string;
  businessProblem: string;
  whatItAddresses: string;
  howItWorks: string;
  propheticIntegration: string;
  whatChanges: string;
  cta: string;
  relatedCta: string;
  blueprintRelation: string;
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
      tagline: 'For businesses whose primary constraint is economic.',
      hero: 'Improve the economics of the business by identifying the constraint that is limiting profitability and the opportunity that may be leaving value on the table.',
      whoFor: 'Companies generating real revenue whose profitability is constrained by pricing, customer economics, cost structure, working capital, revenue composition, or another issue identified through diagnosis.',
      businessProblem: 'Growth can increase complexity without improving the economics of the business. When revenue rises but margin, visibility, or decision quality does not, the business can become busier without becoming stronger.',
      whatItAddresses: 'Pricing logic, margin relationships, customer or offer economics, cost discipline, working capital, and commercial decisions that shape profitability.',
      howItWorks: 'The Blueprint first determines whether profitability is the primary constraint or opportunity. If it is, the work focuses on the commercial relationships that matter most rather than imposing a generic financial program.',
      propheticIntegration: 'Prophetic discernment is integrated into decisions about direction, timing, relationships, stewardship, and the conditions surrounding the business.',
      whatChanges: 'The intended direction is clearer commercial decision-making and stronger economic foundations. No fixed financial result is promised.',
      cta: 'Find out whether Profit Maximization is right for your business.',
      relatedCta: 'Start with the Prophetic Business Blueprint.',
      blueprintRelation: 'The Blueprint determines whether profitability is the primary constraint or opportunity before this program is recommended.',
    },
    es: {
      name: 'Rentabilidad Maximizada',
      slug: 'rentabilidad-maximizada',
      status: 'active',
      tagline: 'Para empresas cuya principal restricción es económica.',
      hero: 'Mejora la economía de la empresa al identificar la restricción que está limitando la rentabilidad y la oportunidad que podría estar quedándose sin aprovechar.',
      whoFor: 'Empresas con ingresos reales cuya rentabilidad está limitada por los precios, la economía de sus clientes, la estructura de costos, el capital de trabajo, la composición de sus ingresos u otro factor identificado en el diagnóstico.',
      businessProblem: 'El crecimiento puede aumentar la complejidad sin mejorar la economía del negocio. Cuando los ingresos suben, pero el margen, la visibilidad o la calidad de las decisiones no avanzan, la empresa puede estar más ocupada sin ser más sólida.',
      whatItAddresses: 'Lógica de precios, relaciones entre márgenes, economía de clientes u ofertas, disciplina de costos, capital de trabajo y decisiones comerciales que determinan la rentabilidad.',
      howItWorks: 'La Radiografía determina primero si la rentabilidad es la principal restricción u oportunidad. Si lo es, el trabajo se concentra en las relaciones comerciales más importantes en lugar de imponer un programa financiero genérico.',
      propheticIntegration: 'El discernimiento profético se integra en las decisiones sobre dirección, tiempos, relaciones, mayordomía y condiciones que rodean a la empresa.',
      whatChanges: 'La dirección buscada es una toma de decisiones comerciales más clara y bases económicas más sólidas. No se promete un resultado financiero específico.',
      cta: 'Descubre si Rentabilidad Maximizada es adecuada para tu empresa.',
      relatedCta: 'Comienza con la Radiografía Empresarial Profética.',
      blueprintRelation: 'La Radiografía determina si la rentabilidad es la principal restricción u oportunidad antes de recomendar este programa.',
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
      tagline: 'For businesses whose primary constraint is operating structure.',
      hero: 'Improve the operating structure and execution capacity of the business so decisions, responsibilities, and delivery do not keep routing through the founder.',
      whoFor: 'Companies where founders spend too much time resolving operational emergencies, mediating confusion, checking work, or carrying decisions that should be distributed.',
      businessProblem: 'Informal operating habits can work for a while and then become a source of friction as the company grows. When processes, roles, handoffs, decision rights, or standards are unclear, the founder becomes the default answer to every unresolved issue.',
      whatItAddresses: 'Processes, role clarity, decision rights, accountability, operating rhythms, handoffs, delivery standards, and the points where work repeatedly returns to the founder.',
      howItWorks: 'The Blueprint determines whether operating structure is the primary constraint. If so, the intervention focuses on the few relationships and decisions that will make execution clearer and more dependable.',
      propheticIntegration: 'Prophetic discernment is brought into questions of leadership, integrity, relationships, timing, and the human dynamics shaping the operating system.',
      whatChanges: 'The aim is to reduce operational friction, clarify responsibilities, automate where possible, and enable the company to operate with less unnecessary intervention from the founder.',
      cta: 'Find out whether Operational Optimization is right for your business.',
      relatedCta: 'Start with the Prophetic Business Blueprint.',
      blueprintRelation: 'The Blueprint determines whether operating structure is the primary constraint before this program is recommended.',
    },
    es: {
      name: 'Optimización Operativa',
      slug: 'optimizacion-operativa',
      status: 'active',
      tagline: 'Para empresas cuya principal restricción está en la estructura operativa.',
      hero: 'Mejora la estructura operativa y la capacidad de ejecución para que las decisiones, las responsabilidades y la entrega no sigan pasando por el fundador.',
      whoFor: 'Empresas cuyos fundadores pasan demasiado tiempo apagando emergencias operativas, mediando confusiones, revisando el trabajo o cargando decisiones que deberían estar distribuidas.',
      businessProblem: 'Los hábitos operativos informales pueden funcionar por un tiempo y luego convertirse en una fuente de fricción a medida que la empresa crece. Cuando los procesos, los roles, las transferencias de tareas, los derechos de decisión o los estándares no están claros, el fundador se convierte en la respuesta automática a cada problema pendiente.',
      whatItAddresses: 'Procesos, claridad de roles, derechos de decisión, rendición de cuentas, ritmos operativos, transferencias de tareas, estándares de entrega y los puntos donde el trabajo regresa repetidamente al fundador.',
      howItWorks: 'La Radiografía determina si la estructura operativa es la principal restricción. Si lo es, la intervención se concentra en las relaciones y decisiones que harán que la ejecución sea más clara y confiable.',
      propheticIntegration: 'El discernimiento profético se integra en las preguntas de liderazgo, integridad, relaciones, tiempos y dinámicas humanas que están dando forma al sistema operativo.',
      whatChanges: 'La dirección buscada es reducir la fricción operativa, aclarar la responsabilidad, automatizar cuando sea posible y permitir que la empresa ejecute con menos intervención innecesaria del fundador.',
      cta: 'Descubre si Optimización Operativa es adecuada para tu empresa.',
      relatedCta: 'Comienza con la Radiografía Empresarial Profética.',
      blueprintRelation: 'La Radiografía determina si la estructura operativa es la principal restricción antes de recomendar este programa.',
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
      tagline: 'For businesses whose primary constraint is founder dependence.',
      hero: 'Reduce founder dependence and build a company that can operate and grow with more freedom of choice.',
      whoFor: 'Christian entrepreneurs whose decisions, relationships, knowledge, and daily operations still depend too heavily on their personal presence.',
      businessProblem: 'When critical decisions and institutional knowledge live mainly in the founder, the business cannot create reliable space for rest, family, strategic leadership, or the next stage of growth.',
      whatItAddresses: 'Decision distribution, leadership capacity, institutional knowledge, governance, delegation, founder availability, and patterns that make the founder indispensable by default.',
      howItWorks: 'The Blueprint determines whether founder dependence is the primary constraint. If it is, the work focuses on structures and leadership capacity that allow the founder to lead by choice rather than necessity.',
      propheticIntegration: 'Freedom also requires discernment. Prophetic guidance is integrated into questions of timing, stewardship, responsibility, rest, leadership, and decisions shaping the founder\'s role.',
      whatChanges: 'The intended direction is a company that can operate with less dependence on the founder while the founder retains responsible leadership and meaningful choice.',
      cta: 'Find out whether Freedom Architecture is right for your business.',
      relatedCta: 'Start with the Prophetic Business Blueprint.',
      blueprintRelation: 'The Blueprint determines whether founder dependence is the primary constraint before this program is recommended.',
    },
    es: {
      name: 'Arquitectura de Independencia',
      slug: 'arquitectura-de-independencia',
      status: 'active',
      tagline: 'Para empresas cuya principal restricción es la dependencia del fundador.',
      hero: 'Reduce la dependencia del fundador y construye una empresa que pueda operar y crecer con mayor libertad de elección.',
      whoFor: 'Empresarios cristianos cuyas decisiones, relaciones, conocimiento y operación diaria todavía dependen demasiado de su presencia personal.',
      businessProblem: 'Cuando las decisiones críticas y el conocimiento institucional viven principalmente en la mente del fundador, la empresa no puede crear un espacio confiable para el descanso, la familia, el liderazgo estratégico ni la siguiente etapa de crecimiento.',
      whatItAddresses: 'Distribución de decisiones, capacidad de liderazgo, conocimiento institucional, gobernanza, delegación, disponibilidad del fundador y patrones que lo vuelven indispensable por defecto.',
      howItWorks: 'La Radiografía determina si la dependencia del fundador es la principal restricción. Si lo es, el trabajo se concentra en construir estructuras y capacidad de liderazgo que permitan liderar por elección y no por necesidad.',
      propheticIntegration: 'La libertad también requiere discernimiento. La guía profética se integra en las preguntas de tiempos, mayordomía, responsabilidad, descanso, liderazgo y en las decisiones que definen el papel del fundador.',
      whatChanges: 'La dirección buscada es una empresa que opere con menor dependencia del fundador, mientras el fundador conserva un liderazgo responsable y una capacidad real de elegir.',
      cta: 'Descubre si Arquitectura de Independencia es adecuada para tu empresa.',
      relatedCta: 'Comienza con la Radiografía Empresarial Profética.',
      blueprintRelation: 'La Radiografía determina si la dependencia del fundador es la principal restricción antes de recomendar este programa.',
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
      tagline: 'In development — not currently accepting applications.',
      hero: 'Kingdom Wealth & Impact is being shaped for a future stage of work around wealth capacity, stewardship, and purposeful impact.',
      whoFor: '',
      businessProblem: '',
      whatItAddresses: '',
      howItWorks: '',
      propheticIntegration: '',
      whatChanges: '',
      cta: '',
      relatedCta: '',
      blueprintRelation: 'This program is in development and is not currently accepting applications.',
    },
    es: {
      name: 'Riqueza de Reino e Impacto',
      slug: 'riqueza-de-reino-e-impacto',
      status: 'coming-soon',
      tagline: 'En desarrollo — actualmente no acepta aplicaciones.',
      hero: 'Riqueza de Reino e Impacto se está diseñando para una etapa futura en torno a la capacidad de generar riqueza, la mayordomía e impacto con propósito.',
      whoFor: '',
      businessProblem: '',
      whatItAddresses: '',
      howItWorks: '',
      propheticIntegration: '',
      whatChanges: '',
      cta: '',
      relatedCta: '',
      blueprintRelation: 'Este programa está en desarrollo y actualmente no acepta aplicaciones.',
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
      tagline: 'An optional ongoing relationship.',
      hero: 'Continued business guidance and Holy Spirit-led prophetic discernment for entrepreneurs navigating important decisions, transitions, and seasons.',
      whoFor: 'Christian entrepreneurs who want an ongoing relationship for business counsel and prophetic discernment before, during, or after core programs.',
      businessProblem: 'Some decisions are not isolated events. They unfold across seasons of growth, uncertainty, leadership, and change. An ongoing relationship can bring continuity when it is needed.',
      whatItAddresses: 'Strategic reflection, decision review, leadership questions, and prophetic discernment in the context of ongoing work.',
      howItWorks: 'Mentorship is not a substitute for the Blueprint\'s initial diagnosis and is not automatically prescribed. It may be considered when ongoing accompaniment is needed.',
      propheticIntegration: 'Prophetic discernment is woven throughout the mentorship relationship.',
      whatChanges: 'Mentorship is optional and selective. Specific scope and cadence are defined only if the relationship proceeds.',
      cta: 'Contact Company of Profits about Mentorship.',
      relatedCta: 'Explore the Prophetic Business Blueprint.',
      blueprintRelation: 'Mentorship is not a substitute for the Blueprint and is not automatically prescribed.',
    },
    es: {
      name: 'Mentoría Empresarial Profética',
      slug: 'mentoria-empresarial-profetica',
      status: 'active',
      tagline: 'Una relación opcional y continua.',
      hero: 'Guía empresarial continua y discernimiento profético guiado por el Espíritu Santo para empresarios que atraviesan decisiones importantes, transiciones y temporadas complejas.',
      whoFor: 'Empresarios cristianos que desean una relación continua de consejo empresarial y discernimiento profético antes, durante o después de los programas principales.',
      businessProblem: 'Algunas decisiones no son hechos aislados. Se desarrollan a lo largo de temporadas de crecimiento, incertidumbre, liderazgo y cambio. Una relación continua puede aportar continuidad cuando sea necesaria.',
      whatItAddresses: 'Análisis estratégico, revisión de decisiones, preguntas de liderazgo y discernimiento profético dentro del trabajo continuo del empresario.',
      howItWorks: 'La Mentoría no sustituye el diagnóstico inicial de la Radiografía ni se prescribe automáticamente. Puede considerarse cuando el acompañamiento continuo sea necesario.',
      propheticIntegration: 'El discernimiento profético está entretejido en toda la relación de mentoría.',
      whatChanges: 'La Mentoría es opcional y selectiva. El alcance y la frecuencia específicos se definen únicamente si la relación avanza.',
      cta: 'Contacta a Company of Profits sobre la Mentoría.',
      relatedCta: 'Conoce la Radiografía Empresarial Profética.',
      blueprintRelation: 'La Mentoría no sustituye la Radiografía ni se prescribe automáticamente.',
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
