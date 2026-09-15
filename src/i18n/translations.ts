import type { Lang } from '@/config/site';

export interface NavItem {
  label: string;
  path: string;
}

export interface Translation {
  nav: NavItem[];
  navCta: string;
  languageLabel: string;
  footer: {
    tagline: string;
    navTitle: string;
    programsTitle: string;
    legalTitle: string;
    privacyPolicy: string;
    terms: string;
    rights: string;
    comingSoon: string;
  };
  common: {
    learnMore: string;
    applyNow: string;
    backToPrograms: string;
    breadcrumbHome: string;
    comingSoon: string;
    optional: string;
    required: string;
    loading: string;
  };
  cta: {
    applyBlueprint: string;
    startBlueprint: string;
    discoverNeeds: string;
    seeFit: string;
    beginBlueprint: string;
    finalCtaTitle: string;
    finalCtaSubtitle: string;
    finalCtaButton: string;
  };
  home: {
    positioning: string;
    heroH1: string;
    heroSub: string;
    heroCtaPrimary: string;
    heroCtaSecondary: string;
    problemEyebrow: string;
    problemTitle: string;
    problemSubtitle: string;
    problemItems: { title: string; desc: string }[];
    reframeEyebrow: string;
    reframeTitle: string;
    reframeSubtitle: string;
    reframeBody: string;
    blueprintEyebrow: string;
    blueprintTitle: string;
    blueprintSubtitle: string;
    blueprintFeatures: { title: string; desc: string }[];
    blueprintNote: string;
    differenceEyebrow: string;
    differenceTitle: string;
    differenceSubtitle: string;
    differenceBody: string;
    differenceVsItems: { title: string; desc: string }[];
    differenceIntegration: string;
    programsEyebrow: string;
    programsTitle: string;
    programsSubtitle: string;
    programsNote: string;
    trustEyebrow: string;
    trustTitle: string;
    trustSubtitle: string;
    trustItems: { title: string; desc: string }[];
    finalCtaEyebrow: string;
  };
  blueprintPage: {
    title: string;
    subtitle: string;
    overviewTitle: string;
    overviewBody: string;
    whatItIsTitle: string;
    whatItIsBody: string;
    elementsTitle: string;
    elements: string[];
    priceTitle: string;
    priceNote: string;
    programLogicTitle: string;
    programLogicBody: string;
    programLogicItems: string[];
    concurrencyTitle: string;
    concurrencyBody: string;
    fitTitle: string;
    fitBody: string;
    repetitionTitle: string;
    repetitionBody: string;
    notFramedAs: string;
    notFramedItems: string[];
    applyCtaTitle: string;
    applyCtaBody: string;
    applyCtaButton: string;
  };
  methodologyPage: {
    title: string;
    subtitle: string;
    steps: { num: string; title: string; desc: string }[];
    differentiatorTitle: string;
    differentiatorBody: string;
    boundariesTitle: string;
    boundariesBody: string;
    nextStepTitle: string;
    nextStepBody: string;
  };
  programsPage: {
    title: string;
    subtitle: string;
    intro: string;
    diagnosisNote: string;
    viewDetails: string;
  };
  whyPage: {
    title: string;
    subtitle: string;
    themes: { title: string; desc: string }[];
    comparisonTitle: string;
    comparisonIntro: string;
    conventionalItems: string[];
    copItems: string[];
    conclusion: string;
  };
  aboutPage: {
    title: string;
    subtitle: string;
    founderTitle: string;
    founderBody: string[];
    institutionalTitle: string;
    institutionalBody: string;
    portraitAlt: string;
    portraitPlaceholder: string;
  };
  faqPage: {
    title: string;
    subtitle: string;
    faqs: { q: string; a: string }[];
  };
  insightsPage: {
    title: string;
    subtitle: string;
    emptyTitle: string;
    emptyBody: string;
    themes: string[];
  };
  applyPage: {
    title: string;
    subtitle: string;
    introTitle: string;
    introBody: string;
    formTitle: string;
    sections: {
      company: string;
      businessStage: string;
      profitability: string;
      founderDependence: string;
      challenge: string;
      goals: string;
      christian: string;
      integration: string;
      contact: string;
    };
    fields: Record<string, { label: string; placeholder: string; help?: string; options?: string[] }>;
    submitButton: string;
    submittingButton: string;
    successTitle: string;
    successBody: string;
    errorTitle: string;
    errorBody: string;
    requiredNote: string;
    spamNote: string;
  };
  seo: {
    homeTitle: string;
    homeDesc: string;
    blueprintTitle: string;
    blueprintDesc: string;
    methodologyTitle: string;
    methodologyDesc: string;
    programsTitle: string;
    programsDesc: string;
    whyTitle: string;
    whyDesc: string;
    aboutTitle: string;
    aboutDesc: string;
    insightsTitle: string;
    insightsDesc: string;
    faqTitle: string;
    faqDesc: string;
    applyTitle: string;
    applyDesc: string;
  };
}

const en: Translation = {
  nav: [
    { label: 'Home', path: '/en/' },
    { label: 'Blueprint', path: '/en/blueprint' },
    { label: 'Methodology', path: '/en/methodology' },
    { label: 'Programs', path: '/en/programs' },
    { label: 'Why Us', path: '/en/why-company-of-profits' },
    { label: 'About', path: '/en/about' },
    { label: 'Insights', path: '/en/insights' },
    { label: 'FAQ', path: '/en/faq' },
  ],
  navCta: 'Apply for Blueprint',
  languageLabel: 'ES',
  footer: {
    tagline: 'Strategic Business Consulting and Prophetic Guidance for Christian Founders.',
    navTitle: 'Navigation',
    programsTitle: 'Programs',
    legalTitle: 'Legal',
    privacyPolicy: 'Privacy Policy',
    terms: 'Terms of Service',
    rights: 'All rights reserved.',
    comingSoon: 'Coming Soon',
  },
  common: {
    learnMore: 'Learn more',
    applyNow: 'Apply now',
    backToPrograms: 'Back to all programs',
    breadcrumbHome: 'Home',
    comingSoon: 'Coming Soon',
    optional: 'Optional',
    required: 'Required',
    loading: 'Loading...',
  },
  cta: {
    applyBlueprint: 'Apply for the Prophetic Business Blueprint',
    startBlueprint: 'Start with the Prophetic Business Blueprint',
    discoverNeeds: 'Discover What Your Business Needs',
    seeFit: 'See If Your Business Is a Fit',
    beginBlueprint: 'Begin Your Business Blueprint',
    finalCtaTitle: 'You built the hard thing. Now decide what that success should make possible.',
    finalCtaSubtitle: 'If your company is profitable but still depends too heavily on you, the next step is diagnosis — not guessing. Apply for the Prophetic Business Blueprint and find out what your business actually needs.',
    finalCtaButton: 'Apply for the Prophetic Business Blueprint',
  },
  home: {
    positioning: 'Strategic Business Consulting and Prophetic Guidance for Christian Founders.',
    heroH1: 'Make your company more profitable and less dependent on you — unlock your freedom.',
    heroSub: 'Company of Profits helps established Christian founders build companies that create more profit, more freedom, and greater capacity for stewardship and impact — through serious business strategy and Holy Spirit-led prophetic discernment.',
    heroCtaPrimary: 'Apply for the Prophetic Business Blueprint',
    heroCtaSecondary: 'Discover what your business needs',
    problemEyebrow: 'The Problem',
    problemTitle: 'A profitable company can still own you.',
    problemSubtitle: 'Success creates its own trap. The business grows, but so does everything that depends on you.',
    problemItems: [
      { title: 'You cannot take a real vacation', desc: 'The business needs your decisions, your attention, your presence — constantly.' },
      { title: 'Everything bottlenecks on you', desc: 'Decisions, relationships, institutional knowledge — it all flows through one person.' },
      { title: 'Growth has a ceiling', desc: 'The company cannot grow beyond what you personally can oversee and carry.' },
      { title: 'Selling would be difficult', desc: 'Because the business depends on you, its value is tied to your continued involvement.' },
      { title: 'You want more time with family', desc: 'And more space to hear and follow God — but the business consumes the margin.' },
      { title: 'Success should create more freedom', desc: 'A profitable company should give you options, not obligations. Something is misaligned.' },
    ],
    reframeEyebrow: 'The Reframe',
    reframeTitle: 'The issue is rarely one department. It is the system.',
    reframeSubtitle: 'Fragmented advice addresses symptoms. The real constraint is usually systemic — a combination of strategy, structure, decisions, and dependencies that reinforce each other.',
    reframeBody: 'A pricing problem may actually be a strategy problem. A delegation problem may actually be a decision-architecture problem. A profit problem may actually be an operational structure problem. Treating symptoms in isolation rarely changes the system. That is why diagnosis comes before prescription.',
    blueprintEyebrow: 'The Blueprint',
    blueprintTitle: 'Before we recommend a program, we diagnose the business.',
    blueprintSubtitle: 'The Prophetic Business Blueprint is a paid, substantive diagnostic engagement that combines business analysis with prophetic discernment to produce a documented picture of your business and determine the right next intervention.',
    blueprintFeatures: [
      { title: 'Paid and publicly priced', desc: 'A serious engagement, not a free sales call disguised as a consultation.' },
      { title: 'Application-based', desc: 'Not every applicant is accepted. Fit matters — strategic, spiritual, and relational.' },
      { title: 'Business diagnosis', desc: 'A structured analysis of your business — economics, operations, structure, and constraints.' },
      { title: 'Prophetic discernment', desc: 'Holy Spirit-led discernment integrated with business analysis, not bolted on.' },
      { title: 'Documented', desc: 'You receive a documented picture of your business — valuable as a standalone experience.' },
      { title: 'Determines the next step', desc: 'The Blueprint identifies the right intervention — not a generic program sequence.' },
    ],
    blueprintNote: 'Completing the Blueprint does not guarantee admission to a subsequent program. Company of Profits retains admission discretion and seeks to be guided by the Holy Spirit in fit decisions.',
    differenceEyebrow: 'The Difference',
    differenceTitle: 'Business strategy and prophetic discernment — integrated, not bolted on.',
    differenceSubtitle: 'This is not conventional consulting with a spiritual add-on. And it is not Christian coaching without business substance. It is both, genuinely integrated.',
    differenceBody: 'The Holy Spirit is understood as the ultimate source of direction and discernment. Company of Profits combines that spiritual dimension with serious business expertise and practical execution. Prophetic discernment may address hidden problems, confirmation, seasons, direction, risks, timing, and strategic decisions requiring discernment that conventional analysis alone cannot reach.',
    differenceVsItems: [
      { title: 'Conventional consulting', desc: 'Addresses strategy and operations but lacks spiritual discernment. Misses what the Holy Spirit reveals.' },
      { title: 'Generic business coaching', desc: 'Addresses accountability and habits but lacks depth in both strategy and discernment.' },
      { title: 'Christian coaching', desc: 'Addresses faith and personal growth but often lacks serious business strategy and execution capability.' },
      { title: 'Ministry-oriented programs', desc: 'Addresses spiritual formation but is not built for the commercial complexity of an established business.' },
    ],
    differenceIntegration: 'Every client engagement includes prophetic guidance. There is no strategic-only option.',
    programsEyebrow: 'The Programs',
    programsTitle: 'There is no universal next step.',
    programsSubtitle: 'Programs are strategic interventions selected after diagnosis — not a service menu for self-selection. The Blueprint determines what your business actually needs.',
    programsNote: 'Only one core program is active at a time. The path is diagnose → identify constraint or opportunity → recommend the right intervention → execute → reassess → continue only when appropriate.',
    trustEyebrow: 'Trust',
    trustTitle: 'No hype. No artificial timelines. No prescribed program without diagnosis.',
    trustSubtitle: 'Company of Profits is launching. Trust comes from specificity, methodology, boundaries, transparency, and substantive value — not from fabricated proof.',
    trustItems: [
      { title: 'Specificity', desc: 'We tell you exactly what we do, how we do it, and what we do not promise.' },
      { title: 'Methodology', desc: 'A clear, public-facing process that you can evaluate before you apply.' },
      { title: 'Boundaries', desc: 'Admission is selective. The Blueprint is paid. Not everyone is accepted.' },
      { title: 'Transparency', desc: 'No hidden sequence, no invented metrics, no fake testimonials, no prosperity promises.' },
      { title: 'Founder authority', desc: 'Built by a founder who understands the problem from the inside — not a theorist.' },
      { title: 'Substantive Blueprint', desc: 'The diagnostic engagement is valuable on its own — not merely a sales conversation.' },
    ],
    finalCtaEyebrow: 'Your Next Step',
  },
  blueprintPage: {
    title: 'Prophetic Business Blueprint',
    subtitle: 'A paid diagnostic engagement that combines business analysis with prophetic discernment to determine what your business actually needs.',
    overviewTitle: 'What the Blueprint is',
    overviewBody: 'The Prophetic Business Blueprint is a substantive, documented diagnostic engagement. It is not a free consultation, a sales call, or a generic discovery questionnaire. It is a serious paid process that produces a documented picture of your business and helps determine the most appropriate next intervention.',
    whatItIsTitle: 'The experience',
    whatItIsBody: 'The Blueprint combines business analysis, strategic sessions, prophetic discernment, and diagnosis into a single coherent engagement. You receive clarity about where your business stands, what is constraining it, and what intervention — if any — is appropriate next.',
    elementsTitle: 'What it includes',
    elements: [
      'Business analysis across economics, operations, and structure',
      'Strategic sessions with the founder',
      'Prophetic discernment and revelation',
      'Documented diagnosis of constraints and opportunities',
      'Strategic clarity on the right next step',
    ],
    priceTitle: 'Price',
    priceNote: 'The Blueprint is a paid engagement with a public price. The final price will be displayed here before launch.',
    programLogicTitle: 'How the Blueprint determines your next step',
    programLogicBody: 'The Blueprint determines the recommended first program based on what your business actually needs. Any core program can be recommended first:',
    programLogicItems: [
      'Freedom Architecture may be first if founder independence is the primary constraint.',
      'Operational Optimization may be first if operating structure is the major constraint.',
      'Profit Maximization may be first if profitability is the primary opportunity.',
      'Profit Maximization is not automatically first.',
      'A client may skip Profit Maximization if it is not the appropriate need.',
    ],
    concurrencyTitle: 'One program at a time',
    concurrencyBody: 'Only one core program is active at a time. You do not have to follow a fixed linear sequence. The commercial logic is: diagnose → identify constraint or opportunity → recommend the right intervention → execute → reassess → continue only when appropriate.',
    fitTitle: 'Fit and admission',
    fitBody: 'The Blueprint is also the first strategic fit test, spiritual fit test, and relational fit test. Not every applicant is accepted. Payment or completion of the Blueprint does not guarantee admission to a subsequent program. Company of Profits retains admission discretion and seeks to be guided by the Holy Spirit in fit decisions.',
    repetitionTitle: 'Reassessment, not repetition',
    repetitionBody: 'The Blueprint is not repeated before every future program. Reassessment may happen when necessary, but it is not a second Blueprint.',
    notFramedAs: 'What the Blueprint is not',
    notFramedItems: [
      'A free consultation',
      'A sales call',
      'A generic discovery call',
      'A cheap lead magnet',
      'An unstructured questionnaire',
    ],
    applyCtaTitle: 'Ready to find out what your business needs?',
    applyCtaBody: 'Apply for the Prophetic Business Blueprint. The application helps us understand your business and determine fit before proceeding.',
    applyCtaButton: 'Apply for the Prophetic Business Blueprint',
  },
  methodologyPage: {
    title: 'Methodology',
    subtitle: 'How Company of Profits works — at a level you can evaluate before you apply.',
    steps: [
      { num: '01', title: 'Business Diagnosis', desc: 'A structured analysis of your business — economics, operations, structure, constraints, and opportunities. We look at the whole system, not isolated symptoms.' },
      { num: '02', title: 'Prophetic Discernment', desc: 'Holy Spirit-led discernment integrated with business analysis. We seek direction on hidden problems, confirmation, seasons, risks, timing, and strategic decisions requiring discernment.' },
      { num: '03', title: 'Strategic Interpretation', desc: 'We combine business analysis and prophetic discernment into a coherent strategic picture. This is where diagnosis becomes clarity — what is actually constraining the business and what intervention is appropriate.' },
      { num: '04', title: 'Intervention', desc: 'Based on diagnosis, we recommend the right intervention — not a generic sequence. Any core program may be appropriate first, depending on what the business actually needs.' },
      { num: '05', title: 'Execution', desc: 'The recommended program is executed with clear workstreams, deliverables, and progress assessment. Execution is where strategy becomes result.' },
      { num: '06', title: 'Reassessment', desc: 'After execution, we reassess. Continuing is appropriate only when there is a clear next intervention that serves the business. There is no prescribed sequence or automatic upsell.' },
    ],
    differentiatorTitle: 'Business + Prophetic',
    differentiatorBody: 'The core differentiator is the genuine integration of serious business strategy with Holy Spirit-led prophetic discernment. This is not a spiritual add-on to conventional consulting. It is not business coaching with a Christian label. It is both, working together — because the most important strategic decisions often require discernment that analysis alone cannot reach.',
    boundariesTitle: 'What we do not expose',
    boundariesBody: 'Our public methodology communicates outcomes, mechanism, major workstreams, boundaries, and high-level deliverables. We do not expose internal modules, session scripts, private tools, proprietary diagnostic scoring logic, or implementation details that are not intended for public disclosure.',
    nextStepTitle: 'Your next step',
    nextStepBody: 'If this methodology resonates with how you think about your business, the next step is the Prophetic Business Blueprint — where this process is applied to your specific situation.',
  },
  programsPage: {
    title: 'Programs',
    subtitle: 'Strategic interventions selected after diagnosis — not a service menu.',
    intro: 'Programs are not interchangeable services. They are targeted interventions designed to address specific constraints and opportunities identified through the Prophetic Business Blueprint. Only one core program is active at a time.',
    diagnosisNote: 'The Blueprint determines the right program for your business. You do not self-select a program — you apply for the Blueprint, and diagnosis guides the recommendation.',
    viewDetails: 'View details',
  },
  whyPage: {
    title: 'Why Company of Profits',
    subtitle: 'Why this firm instead of a conventional consulting firm or Christian coaching provider?',
    themes: [
      { title: 'Serious business strategy', desc: 'We bring real strategic depth — not motivational coaching dressed up as consulting. Profitability, operations, structure, and growth are addressed with commercial seriousness.' },
      { title: 'Profitability as the commercial axis', desc: 'Every intervention improves profitability directly or indirectly. Profit is the resource that makes freedom, wealth, and impact possible.' },
      { title: 'Founder independence', desc: 'We help build companies that no longer depend on the founder to operate and grow — creating genuine freedom of choice.' },
      { title: 'Whole-system diagnosis', desc: 'We look at the entire system — strategy, structure, operations, decisions, dependencies — rather than treating symptoms in isolation.' },
      { title: 'Holy Spirit-led discernment', desc: 'Prophetic discernment is genuinely integrated with business strategy. The Holy Spirit is the ultimate source of direction and discernment.' },
      { title: 'Christian founder specialization', desc: 'We work specifically with Christian founders — empresarios cristianos — who want their business and their faith to be integrated, not compartmentalized.' },
      { title: 'Integrated intervention architecture', desc: 'Programs are part of a coherent architecture — diagnose, recommend, intervene, reassess — not a disconnected service catalog.' },
      { title: 'Diagnosis before prescription', desc: 'We diagnose before we recommend. No program is prescribed without understanding what the business actually needs.' },
      { title: 'Premium and selective', desc: 'Admission is selective. Not every applicant is accepted. Fit — strategic, spiritual, and relational — matters.' },
    ],
    comparisonTitle: 'How we differ',
    comparisonIntro: 'The difference is not one of degree. It is a difference in kind.',
    conventionalItems: [
      'Addresses strategy and operations but lacks spiritual discernment.',
      'Prescribes solutions without prophetic insight.',
      'Treats the business as a mechanical system.',
      'May not understand the founder\'s spiritual context.',
    ],
    copItems: [
      'Addresses strategy, operations, and structure with commercial seriousness.',
      'Integrates Holy Spirit-led prophetic discernment into strategic decisions.',
      'Treats the business as both a commercial and spiritual stewardship.',
      'Designed specifically for Christian founders and their context.',
    ],
    conclusion: 'Company of Profits exists for founders who want both — serious business strategy and genuine prophetic discernment — and who are unwilling to settle for either one alone.',
  },
  aboutPage: {
    title: 'About',
    subtitle: 'Company of Profits and its founder.',
    founderTitle: 'The Founder',
    founderBody: [
      'Company of Profits was founded by Paul, a strategic advisor who understands the tension between business success and personal freedom from the inside.',
      'After building and working with established businesses, Paul recognized a pattern: profitable companies that still depended too heavily on their founders. Companies where the founder was indispensable — not by design, but by default. Companies where success had created a trap that looked like achievement.',
      'The conviction behind Company of Profits is that business strategy and prophetic discernment belong together. The Holy Spirit is the ultimate source of direction and discernment. Serious business expertise and practical execution are how that direction is implemented. Neither alone is sufficient.',
      'Company of Profits is built as an institution — not a personal brand. The firm exists to serve Christian founders, and the methodology, programs, and process are designed to outlive any individual engagement.',
    ],
    institutionalTitle: 'The firm',
    institutionalBody: 'Company of Profits is a premium strategic business consulting and prophetic guidance firm for established Christian founders. The firm integrates serious business strategy with Holy Spirit-led prophetic discernment. It is not a church, a ministry, a coaching business, or a personal-brand platform. It is a serious business advisory firm with a Christian worldview and a prophetic differentiation.',
    portraitAlt: 'Paul — Founder of Company of Profits',
    portraitPlaceholder: 'Founder portrait will be placed here.',
  },
  faqPage: {
    title: 'Frequently Asked Questions',
    subtitle: 'Answers to help you determine fit and understand how we work.',
    faqs: [
      { q: 'Who is Company of Profits for?', a: 'Company of Profits is for Christian founders — empresarios cristianos — with established businesses, typically 10+ employees, who recognize that their company depends too heavily on them and want to build something more profitable, more capable, and less dependent on their constant involvement.' },
      { q: 'What does prophetic guidance mean in a business context?', a: 'Prophetic guidance means seeking and receiving direction from the Holy Spirit about business decisions, strategy, timing, risks, hidden problems, and seasons. It is discernment that complements — not replaces — serious business analysis. The Holy Spirit is understood as the ultimate source of direction and discernment.' },
      { q: 'Is prophetic guidance optional?', a: 'No. Every client engagement includes prophetic guidance. There is no strategic-only engagement option. Prophetic discernment is integrated with business strategy — not offered as an optional add-on.' },
      { q: 'What is the Prophetic Business Blueprint?', a: 'The Prophetic Business Blueprint is a paid, substantive diagnostic engagement that combines business analysis with prophetic discernment. It produces a documented picture of your business and determines the most appropriate next intervention. It is the required entry point before any first core program.' },
      { q: 'Is the Blueprint paid?', a: 'Yes. The Blueprint is a paid engagement with a public price. It is not a free consultation or a sales call. The final price will be displayed on the Blueprint page before launch.' },
      { q: 'What does the Blueprint produce?', a: 'The Blueprint produces a documented diagnosis of your business — including constraints, opportunities, and a recommendation for the right next intervention. It may include business analysis, strategic sessions, prophetic discernment, and strategic clarity. It is valuable as a standalone experience.' },
      { q: 'Why is a Blueprint required before a first program?', a: 'Because diagnosis should come before prescription. Without understanding what your business actually needs, any program recommendation would be a guess. The Blueprint ensures the right intervention is recommended for your specific situation — not a generic sequence.' },
      { q: 'Can I choose a program myself?', a: 'Programs are not self-selected from a service menu. The Blueprint determines the recommended program based on diagnosis. This is the diagnosis-driven model — not a "pick a service" approach. You can express interest in a specific program, but the recommendation comes from diagnosis.' },
      { q: 'Can Freedom Architecture be the first program?', a: 'Yes. Any core program can be recommended first. If the Blueprint identifies founder dependence as the primary constraint, Freedom Architecture may be the recommended first intervention.' },
      { q: 'Do I have to complete Profit Maximization first?', a: 'No. Profit Maximization is not automatically first. It may be first if profitability is the primary opportunity, but a client may skip it if it is not the appropriate need. The Blueprint determines the right sequence for your business.' },
      { q: 'Can I work on more than one core program at a time?', a: 'No. Only one core program is active at a time. After completion and reassessment, the next intervention — if any — is determined. This ensures focus and quality of execution.' },
      { q: 'Is Mentorship mandatory?', a: 'No. Prophetic Business Mentorship is optional. It may accompany a program, happen between programs, begin after a program, or continue long-term. It is not required.' },
      { q: 'What happens after the Blueprint?', a: 'After the Blueprint, you receive a documented diagnosis and a recommendation for the right next intervention. If a program is recommended and you are accepted, you proceed with that program. If no program is appropriate, that is also a valid outcome.' },
      { q: 'Does completing the Blueprint guarantee admission to a later program?', a: 'No. Payment or completion of the Blueprint does not guarantee admission to a subsequent program. Company of Profits retains admission discretion and seeks to be guided by the Holy Spirit in fit decisions.' },
      { q: 'Is Kingdom Wealth & Impact available yet?', a: 'No. Kingdom Wealth & Impact is marked as Coming Soon. It is not yet available for application. If you are interested, apply for the Blueprint and indicate your interest in the application.' },
      { q: 'Does Company of Profits work with non-Christian founders?', a: 'Company of Profits is specifically designed for Christian founders. The prophetic dimension is integral to the methodology, and the firm operates from a Christian worldview. Founders who do not share this foundation would not be a fit.' },
      { q: 'What company size is generally appropriate?', a: 'Companies with 10+ employees are the typical fit. The work addresses established businesses with meaningful unrealized potential — companies that have moved beyond the early startup phase and have enough complexity to benefit from structural and strategic intervention.' },
      { q: 'What markets do you serve?', a: 'Priority markets for the first 2-3 years are the United States and Latin America. The United States has commercial priority. English and Spanish have equal strategic importance. The website is English-first, Spanish-second.' },
      { q: 'Is this consulting, coaching, ministry, or something else?', a: 'It is strategic business consulting and prophetic guidance — a category of its own. It is not conventional consulting, generic coaching, Christian coaching, or ministry. It is a serious business advisory firm with a Christian worldview and prophetic differentiation.' },
      { q: 'Is selling the company the goal?', a: 'No. The goal is freedom of choice — not forced exit, disappearance, or sale. Exit readiness may eventually be a consequence of building a less founder-dependent company, but it is not the core promise. The objective is a company that can operate and grow with less dependence on you.' },
      { q: 'What should I expect from the application?', a: 'The application asks about your company, business stage, profitability, founder dependence, primary challenge, goals, Christian alignment, and willingness to engage with business strategy and prophetic discernment. It is designed to qualify fit — not to maximize the number of submissions. After submission, your application will be reviewed for fit.' },
    ],
  },
  insightsPage: {
    title: 'Insights',
    subtitle: 'Thinking on profitability, founder independence, prophetic discernment, and building a business that creates freedom.',
    emptyTitle: 'Articles coming soon',
    emptyBody: 'We are building a library of strategic thinking for Christian founders. No articles have been published yet — when they are, they will appear here. In the meantime, the Prophetic Business Blueprint is the best way to get specific insight into your business.',
    themes: [
      'Profitability',
      'Founder dependence',
      'Operating systems',
      'Strategic decisions',
      'Strategic clarity',
      'Prophetic discernment in business',
      'Christian leadership',
      'Stewardship',
      'Kingdom impact',
    ],
  },
  applyPage: {
    title: 'Apply for the Prophetic Business Blueprint',
    subtitle: 'The application helps us understand your business and determine fit before proceeding. We review every application carefully.',
    introTitle: 'Why we ask for this information',
    introBody: 'The application is designed to qualify fit — not to maximize the number of submissions. We ask about your company, your business stage, founder dependence, your primary challenge, and your alignment with the Christian and prophetic identity of Company of Profits. This helps both of us determine whether the Blueprint is appropriate for your situation.',
    formTitle: 'Blueprint Application',
    sections: {
      company: 'Company',
      businessStage: 'Business Stage',
      profitability: 'Profitability Context',
      founderDependence: 'Founder Dependence',
      challenge: 'Primary Challenge',
      goals: 'Goals',
      christian: 'Christian Alignment',
      integration: 'Business + Prophetic Integration',
      contact: 'Contact Information',
    },
    fields: {
      companyName: { label: 'Company name', placeholder: 'Your company name' },
      website: { label: 'Website', placeholder: 'https://...' },
      industry: { label: 'Industry / business model', placeholder: 'e.g. Manufacturing, SaaS, Services...' },
      employees: { label: 'Number of employees', placeholder: 'Approximate number', options: ['1-9', '10-24', '25-49', '50-99', '100-249', '250+'] },
      location: { label: 'Location / market', placeholder: 'Country and primary market' },
      founderStructure: { label: 'Founder structure', placeholder: 'Single founder, multi-founder, family business...', options: ['Single founder', 'Multi-founder', 'Family business', 'Other'] },
      businessStageDesc: { label: 'Brief description of your business stage', placeholder: 'Where is the business today? What does growth look like?' },
      aboveBreakEven: { label: 'Is the business above monthly break-even?', placeholder: '', options: ['Yes', 'No', 'Approximately break-even', 'Prefer not to say'] },
      profitabilityContext: { label: 'Profitability context', placeholder: 'Briefly describe your current profitability situation', help: 'No need for sensitive financial data — just a general picture.' },
      founderDependenceLevel: { label: 'How dependent is the business on you?', placeholder: '', options: ['Extremely — most decisions flow through me', 'Highly — key decisions and relationships', 'Moderately — some areas run independently', 'Low — the business operates largely without me'] },
      founderInvolvement: { label: 'Where are you most involved?', placeholder: 'Which areas of the business require your direct involvement?' },
      bottlenecks: { label: 'Key-person or decision bottlenecks', placeholder: 'Where do things slow down because they need you?' },
      primaryChallenge: { label: 'Primary business challenge', placeholder: 'What is the most important issue you are facing right now?' },
      profitGoals: { label: 'Profitability goals', placeholder: 'What would you like to improve about profitability?' },
      freedomGoals: { label: 'Freedom / independence goals', placeholder: 'What would freedom look like for you?' },
      growthGoals: { label: 'Growth goals', placeholder: 'Where do you want the business to go?' },
      otherGoals: { label: 'Other relevant objectives', placeholder: 'Anything else important to you' },
      christianAlignment: { label: 'Do you identify as a Christian founder?', placeholder: '', options: ['Yes', 'I am exploring faith', 'No'] },
      christianAlignmentContext: { label: 'Brief context (optional)', placeholder: 'Anything that helps us understand your faith journey and business' },
      integrationWillingness: { label: 'Are you willing to engage with business strategy and prophetic discernment?', placeholder: '', options: ['Yes — I want both', 'I am open to the prophetic dimension', 'I have questions about this', 'No'] },
      integrationContext: { label: 'Any questions or context about the prophetic dimension?', placeholder: 'We are happy to address any questions' },
      fullName: { label: 'Full name', placeholder: 'Your full name' },
      email: { label: 'Email', placeholder: 'you@company.com' },
      phone: { label: 'Phone (optional)', placeholder: 'Your phone number' },
      preferredLanguage: { label: 'Preferred language', placeholder: '', options: ['English', 'Spanish'] },
      anythingElse: { label: 'Anything else you would like us to know?', placeholder: 'Optional — share whatever you think is relevant' },
    },
    submitButton: 'Submit Application',
    submittingButton: 'Submitting...',
    successTitle: 'Application received.',
    successBody: 'Thank you. Your application has been submitted and will be reviewed for fit. We do not promise a specific response timeline, but we will be in touch. In the meantime, please ensure our emails can reach you.',
    errorTitle: 'Something went wrong.',
    errorBody: 'Your application could not be submitted at this time. Please try again, or contact us directly if the problem persists.',
    requiredNote: 'Fields marked with * are required. Others are optional but help us better understand your situation.',
    spamNote: 'This form is protected against spam. Your information is handled securely and never shared.',
  },
  seo: {
    homeTitle: 'Company of Profits — Strategic Business Consulting and Prophetic Guidance for Christian Founders',
    homeDesc: 'Helping established Christian founders build companies that are more profitable, less dependent on the founder, and creating genuine freedom. Business strategy and Holy Spirit-led prophetic discernment, integrated.',
    blueprintTitle: 'Prophetic Business Blueprint — Company of Profits',
    blueprintDesc: 'A paid diagnostic engagement combining business analysis with prophetic discernment. The required first step before any core program. Apply to discover what your business actually needs.',
    methodologyTitle: 'Methodology — Company of Profits',
    methodologyDesc: 'How Company of Profits works: diagnosis, prophetic discernment, strategic interpretation, intervention, execution, and reassessment. Business strategy and prophetic discernment integrated.',
    programsTitle: 'Programs — Company of Profits',
    programsDesc: 'Strategic interventions selected after diagnosis — not a service menu. Profit Maximization, Operational Optimization, Freedom Architecture, Kingdom Wealth & Impact, and Prophetic Business Mentorship.',
    whyTitle: 'Why Company of Profits — Strategic Business Consulting and Prophetic Guidance',
    whyDesc: 'Why this firm instead of conventional consulting or Christian coaching? Serious business strategy, founder independence, whole-system diagnosis, and Holy Spirit-led discernment — integrated.',
    aboutTitle: 'About — Company of Profits',
    aboutDesc: 'Company of Profits is a premium strategic business consulting and prophetic guidance firm for established Christian founders. Learn about the firm and its founder.',
    insightsTitle: 'Insights — Company of Profits',
    insightsDesc: 'Strategic thinking on profitability, founder independence, prophetic discernment, and building a business that creates freedom for Christian founders.',
    faqTitle: 'FAQ — Company of Profits',
    faqDesc: 'Answers about the Prophetic Business Blueprint, programs, prophetic guidance, fit, admission, and how Company of Profits works with Christian founders.',
    applyTitle: 'Apply for the Prophetic Business Blueprint — Company of Profits',
    applyDesc: 'Submit your application for the Prophetic Business Blueprint. The application helps us understand your business and determine fit before proceeding.',
  },
};

const es: Translation = {
  nav: [
    { label: 'Inicio', path: '/es/' },
    { label: 'Radiografía', path: '/es/radiografia' },
    { label: 'Metodología', path: '/es/metodologia' },
    { label: 'Programas', path: '/es/programas' },
    { label: 'Por Qué Nosotros', path: '/es/por-que-company-of-profits' },
    { label: 'Nosotros', path: '/es/nosotros' },
    { label: 'Insights', path: '/es/insights' },
    { label: 'Preguntas', path: '/es/preguntas-frecuentes' },
  ],
  navCta: 'Aplicar a la Radiografía',
  languageLabel: 'EN',
  footer: {
    tagline: 'Consultoría Estratégica Empresarial y Guía Profética para Empresarios Cristianos.',
    navTitle: 'Navegación',
    programsTitle: 'Programas',
    legalTitle: 'Legal',
    privacyPolicy: 'Política de Privacidad',
    terms: 'Términos de Servicio',
    rights: 'Todos los derechos reservados.',
    comingSoon: 'Próximamente',
  },
  common: {
    learnMore: 'Saber más',
    applyNow: 'Aplicar ahora',
    backToPrograms: 'Volver a todos los programas',
    breadcrumbHome: 'Inicio',
    comingSoon: 'Próximamente',
    optional: 'Opcional',
    required: 'Requerido',
    loading: 'Cargando...',
  },
  cta: {
    applyBlueprint: 'Aplicar a la Radiografía Empresarial Profética',
    startBlueprint: 'Comenzar con la Radiografía Empresarial Profética',
    discoverNeeds: 'Descubre lo que tu empresa necesita',
    seeFit: 'Verifica si tu empresa es indicada',
    beginBlueprint: 'Comienza tu Radiografía Empresarial',
    finalCtaTitle: 'Construiste lo difícil. Ahora decide qué debería hacer posible ese éxito.',
    finalCtaSubtitle: 'Si tu empresa es rentable pero aún depende demasiado de ti, el siguiente paso es el diagnóstico — no adivinar. Aplica a la Radiografía Empresarial Profética y descubre lo que tu empresa realmente necesita.',
    finalCtaButton: 'Aplicar a la Radiografía Empresarial Profética',
  },
  home: {
    positioning: 'Consultoría Estratégica Empresarial y Guía Profética para Empresarios Cristianos.',
    heroH1: 'Haz que tu empresa sea más rentable y dependa menos de ti — desbloquea tu libertad.',
    heroSub: 'Company of Profits ayuda a empresarios cristianos establecidos a construir empresas que generan más rentabilidad, más libertad y mayor capacidad para la mayordomía y el impacto — a través de estrategia empresarial seria y discernimiento profético guiado por el Espíritu Santo.',
    heroCtaPrimary: 'Aplicar a la Radiografía Empresarial Profética',
    heroCtaSecondary: 'Descubre lo que tu empresa necesita',
    problemEyebrow: 'El Problema',
    problemTitle: 'Una empresa rentable puede seguir teniéndote atrapado.',
    problemSubtitle: 'El éxito crea su propia trampa. La empresa crece, pero también crece todo lo que depende de ti.',
    problemItems: [
      { title: 'No puedes tomarte vacaciones reales', desc: 'La empresa necesita tus decisiones, tu atención, tu presencia — constantemente.' },
      { title: 'Todo se atasca contigo', desc: 'Decisiones, relaciones, conocimiento institucional — todo fluye por una sola persona.' },
      { title: 'El crecimiento tiene un techo', desc: 'La empresa no puede crecer más allá de lo que tú personalmente puedes supervisar y cargar.' },
      { title: 'Vender sería difícil', desc: 'Porque la empresa depende de ti, su valor está ligado a tu participación continua.' },
      { title: 'Quieres más tiempo con la familia', desc: 'Y más espacio para escuchar y seguir a Dios — pero la empresa consume el margen.' },
      { title: 'El éxito debería crear más libertad', desc: 'Una empresa rentable debería darte opciones, no obligaciones. Algo está desalineado.' },
    ],
    reframeEyebrow: 'El Nuevo Enfoque',
    reframeTitle: 'El problema rara vez es un departamento. Es el sistema.',
    reframeSubtitle: 'El consejo fragmentado trata síntomas. La restricción real suele ser sistémica — una combinación de estrategia, estructura, decisiones y dependencias que se refuerzan entre sí.',
    reframeBody: 'Un problema de precios puede ser en realidad un problema de estrategia. Un problema de delegación puede ser un problema de arquitectura de decisiones. Un problema de rentabilidad puede ser un problema de estructura operativa. Tratar síntomas de forma aislada rara vez cambia el sistema. Por eso el diagnóstico viene antes de la prescripción.',
    blueprintEyebrow: 'La Radiografía',
    blueprintTitle: 'Antes de recomendar un programa, diagnosticamos la empresa.',
    blueprintSubtitle: 'La Radiografía Empresarial Profética es un compromiso diagnóstico pagado y sustancial que combina análisis empresarial con discernimiento profético para producir un panorama documentado de tu empresa y determinar la siguiente intervención adecuada.',
    blueprintFeatures: [
      { title: 'Pagado y precio público', desc: 'Un compromiso serio, no una venta disfrazada de consulta gratuita.' },
      { title: 'Por aplicación', desc: 'No todo solicitante es aceptado. El ajuste importa — estratégico, espiritual y relacional.' },
      { title: 'Diagnóstico empresarial', desc: 'Un análisis estructurado de tu empresa — economía, operaciones, estructura y restricciones.' },
      { title: 'Discernimiento profético', desc: 'Discernimiento guiado por el Espíritu Santo, integrado con el análisis empresarial, no añadido.' },
      { title: 'Documentado', desc: 'Recibes un panorama documentado de tu empresa — valioso como experiencia independiente.' },
      { title: 'Determina el siguiente paso', desc: 'La Radiografía identifica la intervención correcta — no una secuencia genérica de programas.' },
    ],
    blueprintNote: 'Completar la Radiografía no garantiza admisión a un programa posterior. Company of Profits se reserva la discreción de admisión y busca ser guiada por el Espíritu Santo en las decisiones de ajuste.',
    differenceEyebrow: 'La Diferencia',
    differenceTitle: 'Estrategia empresarial y discernimiento profético — integrados, no añadidos.',
    differenceSubtitle: 'Esto no es consultoría convencional con un complemento espiritual. Y no es coaching cristiano sin sustancia empresarial. Es ambos, genuinamente integrados.',
    differenceBody: 'El Espíritu Santo es entendido como la fuente última de dirección y discernimiento. Company of Profits combina esa dimensión espiritual con experiencia empresarial seria y ejecución práctica. El discernimiento profético puede abordar problemas ocultos, confirmación, tiempos, dirección, riesgos y decisiones estratégicas que requieren un discernimiento que el análisis convencional solo no puede alcanzar.',
    differenceVsItems: [
      { title: 'Consultoría convencional', desc: 'Aborda estrategia y operaciones pero carece de discernimiento espiritual. Pierde lo que el Espíritu Santo revela.' },
      { title: 'Coaching empresarial genérico', desc: 'Aborda rendición de cuentas y hábitos pero carece de profundidad tanto en estrategia como en discernimiento.' },
      { title: 'Coaching cristiano', desc: 'Aborda la fe y el crecimiento personal pero a menudo carece de estrategia empresarial seria y capacidad de ejecución.' },
      { title: 'Programas orientados al ministerio', desc: 'Abordan la formación espiritual pero no están diseñados para la complejidad comercial de una empresa establecida.' },
    ],
    differenceIntegration: 'Cada compromiso con el cliente incluye guía profética. No existe una opción de solo estrategia.',
    programsEyebrow: 'Los Programas',
    programsTitle: 'No existe un siguiente paso universal.',
    programsSubtitle: 'Los programas son intervenciones estratégicas seleccionadas después del diagnóstico — no un menú de servicios para auto-selección. La Radiografía determina lo que tu empresa realmente necesita.',
    programsNote: 'Solo un programa core está activo a la vez. El camino es diagnosticar → identificar restricción u oportunidad → recomendar la intervención correcta → ejecutar → reevaluar → continuar solo cuando sea apropiado.',
    trustEyebrow: 'Confianza',
    trustTitle: 'Sin exageración. Sin tiempos artificiales. Sin programa prescrito sin diagnóstico.',
    trustSubtitle: 'Company of Profits está iniciando. La confianza viene de la especificidad, la metodología, los límites, la transparencia y el valor sustancial — no de pruebas fabricadas.',
    trustItems: [
      { title: 'Especificidad', desc: 'Te decimos exactamente qué hacemos, cómo lo hacemos y qué no prometemos.' },
      { title: 'Metodología', desc: 'Un proceso claro y público que puedes evaluar antes de aplicar.' },
      { title: 'Límites', desc: 'La admisión es selectiva. La Radiografía es pagada. No todos son aceptados.' },
      { title: 'Transparencia', desc: 'Sin secuencia oculta, sin métricas inventadas, sin testimonios falsos, sin promesas de prosperidad.' },
      { title: 'Autoridad del fundador', desc: 'Construido por un fundador que entiende el problema desde adentro — no un teórico.' },
      { title: 'Radiografía sustancial', desc: 'El compromiso diagnóstico es valioso por sí solo — no es simplemente una conversación de ventas.' },
    ],
    finalCtaEyebrow: 'Tu Siguiente Paso',
  },
  blueprintPage: {
    title: 'Radiografía Empresarial Profética',
    subtitle: 'Un compromiso diagnóstico pagado que combina análisis empresarial con discernimiento profético para determinar lo que tu empresa realmente necesita.',
    overviewTitle: 'Qué es la Radiografía',
    overviewBody: 'La Radiografía Empresarial Profética es un compromiso diagnóstico documentado y sustancial. No es una consulta gratuita, una llamada de ventas ni un cuestionario genérico de descubrimiento. Es un proceso pagado serio que produce un panorama documentado de tu empresa y ayuda a determinar la intervención más apropiada.',
    whatItIsTitle: 'La experiencia',
    whatItIsBody: 'La Radiografía combina análisis empresarial, sesiones estratégicas, discernimiento profético y diagnóstico en un solo compromiso coherente. Recibes claridad sobre dónde está tu empresa, qué la está restringiendo y qué intervención — si alguna — es la adecuada.',
    elementsTitle: 'Qué incluye',
    elements: [
      'Análisis empresarial de economía, operaciones y estructura',
      'Sesiones estratégicas con el fundador',
      'Discernimiento y revelación profética',
      'Diagnóstico documentado de restricciones y oportunidades',
      'Claridad estratégica sobre el siguiente paso correcto',
    ],
    priceTitle: 'Precio',
    priceNote: 'La Radiografía es un compromiso pagado con un precio público. El precio final se mostrará aquí antes del lanzamiento.',
    programLogicTitle: 'Cómo la Radiografía determina tu siguiente paso',
    programLogicBody: 'La Radiografía determina el programa recomendado basándose en lo que tu empresa realmente necesita. Cualquier programa core puede ser recomendado primero:',
    programLogicItems: [
      'Arquitectura de Independencia puede ser primero si la dependencia del fundador es la restricción principal.',
      'Optimización Operativa puede ser primero si la estructura operativa es la mayor restricción.',
      'Rentabilidad Maximizada puede ser primero si la rentabilidad es la oportunidad principal.',
      'Rentabilidad Maximizada no es automáticamente primero.',
      'Un cliente puede saltarse Rentabilidad Maximizada si no es la necesidad apropiada.',
    ],
    concurrencyTitle: 'Un programa a la vez',
    concurrencyBody: 'Solo un programa core está activo a la vez. No tienes que seguir una secuencia lineal fija. La lógica comercial es: diagnosticar → identificar restricción u oportunidad → recomendar la intervención correcta → ejecutar → reevaluar → continuar solo cuando sea apropiado.',
    fitTitle: 'Ajuste y admisión',
    fitBody: 'La Radiografía es también la primera prueba de ajuste estratégico, ajuste espiritual y ajuste relacional. No todo solicitante es aceptado. El pago o la completion de la Radiografía no garantiza admisión a un programa posterior. Company of Profits se reserva la discreción de admisión y busca ser guiada por el Espíritu Santo en las decisiones de ajuste.',
    repetitionTitle: 'Reevaluación, no repetición',
    repetitionBody: 'La Radiografía no se repite antes de cada futuro programa. La reevaluación puede darse cuando sea necesario, pero no es una segunda Radiografía.',
    notFramedAs: 'Lo que la Radiografía no es',
    notFramedItems: [
      'Una consulta gratuita',
      'Una llamada de ventas',
      'Una llamada genérica de descubrimiento',
      'Un imán de leads barato',
      'Un cuestionario sin estructura',
    ],
    applyCtaTitle: '¿Listo para descubrir lo que tu empresa necesita?',
    applyCtaBody: 'Aplica a la Radiografía Empresarial Profética. La aplicación nos ayuda a entender tu empresa y determinar el ajuste antes de proceder.',
    applyCtaButton: 'Aplicar a la Radiografía Empresarial Profética',
  },
  methodologyPage: {
    title: 'Metodología',
    subtitle: 'Cómo trabaja Company of Profits — a un nivel que puedes evaluar antes de aplicar.',
    steps: [
      { num: '01', title: 'Diagnóstico Empresarial', desc: 'Un análisis estructurado de tu empresa — economía, operaciones, estructura, restricciones y oportunidades. Vemos el sistema completo, no síntomas aislados.' },
      { num: '02', title: 'Discernimiento Profético', desc: 'Discernimiento guiado por el Espíritu Santo, integrado con el análisis empresarial. Buscamos dirección sobre problemas ocultos, confirmación, tiempos, riesgos y decisiones estratégicas que requieren discernimiento.' },
      { num: '03', title: 'Interpretación Estratégica', desc: 'Combinamos el análisis empresarial y el discernimiento profético en un panorama estratégico coherente. Aquí es donde el diagnóstico se convierte en claridad — qué está restringiendo la empresa y qué intervención es apropiada.' },
      { num: '04', title: 'Intervención', desc: 'Basado en el diagnóstico, recomendamos la intervención correcta — no una secuencia genérica. Cualquier programa core puede ser apropiado primero, dependiendo de lo que la empresa realmente necesita.' },
      { num: '05', title: 'Ejecución', desc: 'El programa recomendado se ejecuta con workstreams claros, entregables y evaluación de progreso. La ejecución es donde la estrategia se convierte en resultado.' },
      { num: '06', title: 'Reevaluación', desc: 'Después de la ejecución, reevaluamos. Continuar es apropiado solo cuando hay una clara siguiente intervención que sirve a la empresa. No hay secuencia prescrita ni venta automática.' },
    ],
    differentiatorTitle: 'Estrategia + Profético',
    differentiatorBody: 'El diferenciador central es la integración genuina de estrategia empresarial seria con discernimiento profético guiado por el Espíritu Santo. Esto no es un complemento espiritual a la consultoría convencional. No es coaching empresarial con una etiqueta cristiana. Es ambos, trabajando juntos — porque las decisiones estratégicas más importantes a menudo requieren un discernimiento que el análisis solo no puede alcanzar.',
    boundariesTitle: 'Lo que no exponemos',
    boundariesBody: 'Nuestra metodología pública comunica resultados, mecanismo, workstreams principales, límites y entregables de alto nivel. No exponemos módulos internos, guiones de sesiones, herramientas privadas, lógica de calificación diagnóstica propietaria o detalles de implementación que no están destinados a divulgación pública.',
    nextStepTitle: 'Tu siguiente paso',
    nextStepBody: 'Si esta metodología resuena con cómo piensas sobre tu empresa, el siguiente paso es la Radiografía Empresarial Profética — donde este proceso se aplica a tu situación específica.',
  },
  programsPage: {
    title: 'Programas',
    subtitle: 'Intervenciones estratégicas seleccionadas después del diagnóstico — no un menú de servicios.',
    intro: 'Los programas no son servicios intercambiables. Son intervenciones enfocadas diseñadas para abordar restricciones y oportunidades específicas identificadas a través de la Radiografía Empresarial Profética. Solo un programa core está activo a la vez.',
    diagnosisNote: 'La Radiografía determina el programa correcto para tu empresa. No te auto-seleccionas un programa — aplicas a la Radiografía, y el diagnóstico guía la recomendación.',
    viewDetails: 'Ver detalles',
  },
  whyPage: {
    title: 'Por Qué Company of Profits',
    subtitle: '¿Por esta firma en lugar de una consultora convencional o un proveedor de coaching cristiano?',
    themes: [
      { title: 'Estrategia empresarial seria', desc: 'Traemos profundidad estratégica real — no coaching motivacional disfrazado de consultoría. Rentabilidad, operaciones, estructura y crecimiento se abordan con seriedad comercial.' },
      { title: 'Rentabilidad como eje comercial', desc: 'Cada intervención mejora la rentabilidad directa o indirectamente. La utilidad es el recurso que hace posible la libertad, la riqueza y el impacto.' },
      { title: 'Independencia del fundador', desc: 'Ayudamos a construir empresas que ya no dependen del fundador para operar y crecer — creando libertad de elección genuina.' },
      { title: 'Diagnóstico del sistema completo', desc: 'Vemos el sistema entero — estrategia, estructura, operaciones, decisiones, dependencias — en lugar de tratar síntomas de forma aislada.' },
      { title: 'Discernimiento guiado por el Espíritu Santo', desc: 'El discernimiento profético está genuinamente integrado con la estrategia empresarial. El Espíritu Santo es la fuente última de dirección y discernimiento.' },
      { title: 'Especialización en fundadores cristianos', desc: 'Trabajamos específicamente con empresarios cristianos que quieren que su empresa y su fe estén integradas, no compartimentadas.' },
      { title: 'Arquitectura de intervención integrada', desc: 'Los programas son parte de una arquitectura coherente — diagnosticar, recomendar, intervenir, reevaluar — no un catálogo desconectado de servicios.' },
      { title: 'Diagnóstico antes de prescripción', desc: 'Diagnosticamos antes de recomendar. Ningún programa se prescribe sin entender lo que la empresa realmente necesita.' },
      { title: 'Premium y selectivo', desc: 'La admisión es selectiva. No todo solicitante es aceptado. El ajuste — estratégico, espiritual y relacional — importa.' },
    ],
    comparisonTitle: 'Cómo diferimos',
    comparisonIntro: 'La diferencia no es de grado. Es una diferencia de tipo.',
    conventionalItems: [
      'Aborda estrategia y operaciones pero carece de discernimiento espiritual.',
      'Prescribe soluciones sin discernimiento profético.',
      'Trata la empresa como un sistema mecánico.',
      'Puede no entender el contexto espiritual del fundador.',
    ],
    copItems: [
      'Aborda estrategia, operaciones y estructura con seriedad comercial.',
      'Integra discernimiento profético guiado por el Espíritu Santo en decisiones estratégicas.',
      'Trata la empresa como mayordomía comercial y espiritual.',
      'Diseñado específicamente para empresarios cristianos y su contexto.',
    ],
    conclusion: 'Company of Profits existe para fundadores que quieren ambos — estrategia empresarial seria y discernimiento profético genuino — y que no están dispuestos a conformarse con solo uno.',
  },
  aboutPage: {
    title: 'Nosotros',
    subtitle: 'Company of Profits y su fundador.',
    founderTitle: 'El Fundador',
    founderBody: [
      'Company of Profits fue fundada por Paul, un asesor estratégico que entiende desde adentro la tensión entre el éxito empresarial y la libertad personal.',
      'Después de construir y trabajar con empresas establecidas, Paul reconoció un patrón: empresas rentables que aún dependían demasiado de sus fundadores. Empresas donde el fundador era indispensable — no por diseño, sino por defecto. Empresas donde el éxito había creado una trampa que parecía un logro.',
      'La convicción detrás de Company of Profits es que la estrategia empresarial y el discernimiento profético pertenecen juntos. El Espíritu Santo es la fuente última de dirección y discernimiento. La experiencia empresarial seria y la ejecución práctica son cómo esa dirección se implementa. Ninguno solo es suficiente.',
      'Company of Profits está construida como una institución — no una marca personal. La firma existe para servir a empresarios cristianos, y la metodología, los programas y el proceso están diseñados para sobrevivir a cualquier compromiso individual.',
    ],
    institutionalTitle: 'La firma',
    institutionalBody: 'Company of Profits es una firma premium de consultoría estratégica empresarial y guía profética para empresarios cristianos establecidos. La firma integra estrategia empresarial seria con discernimiento profético guiado por el Espíritu Santo. No es una iglesia, un ministerio, un negocio de coaching ni una plataforma de marca personal. Es una firma de asesoría empresarial seria con una cosmovisión cristiana y una diferenciación profética.',
    portraitAlt: 'Paul — Fundador de Company of Profits',
    portraitPlaceholder: 'El retrato del fundador se colocará aquí.',
  },
  faqPage: {
    title: 'Preguntas Frecuentes',
    subtitle: 'Respuestas para ayudarte a determinar el ajuste y entender cómo trabajamos.',
    faqs: [
      { q: '¿Para quién es Company of Profits?', a: 'Company of Profits es para empresarios cristianos con empresas establecidas, típicamente con más de 10 empleados, que reconocen que su empresa depende demasiado de ellos y quieren construir algo más rentable, más capaz y menos dependiente de su involucración constante.' },
      { q: '¿Qué significa la guía profética en un contexto empresarial?', a: 'La guía profética significa buscar y recibir dirección del Espíritu Santo sobre decisiones empresariales, estrategia, tiempos, riesgos, problemas ocultos y estaciones. Es un discernimiento que complementa — no reemplaza — el análisis empresarial serio. El Espíritu Santo es entendido como la fuente última de dirección y discernimiento.' },
      { q: '¿La guía profética es opcional?', a: 'No. Cada compromiso con el cliente incluye guía profética. No existe una opción de compromiso solo estratégico. El discernimiento profético está integrado con la estrategia empresarial — no se ofrece como un complemento opcional.' },
      { q: '¿Qué es la Radiografía Empresarial Profética?', a: 'La Radiografía Empresarial Profética es un compromiso diagnóstico pagado y sustancial que combina análisis empresarial con discernimiento profético. Produce un panorama documentado de tu empresa y determina la intervención más apropiada. Es el punto de entrada requerido antes de cualquier primer programa core.' },
      { q: '¿La Radiografía es pagada?', a: 'Sí. La Radiografía es un compromiso pagado con un precio público. No es una consulta gratuita ni una llamada de ventas. El precio final se mostrará en la página de la Radiografía antes del lanzamiento.' },
      { q: '¿Qué produce la Radiografía?', a: 'La Radiografía produce un diagnóstico documentado de tu empresa — incluyendo restricciones, oportunidades y una recomendación para la siguiente intervención correcta. Puede incluir análisis empresarial, sesiones estratégicas, discernimiento profético y claridad estratégica. Es valiosa como experiencia independiente.' },
      { q: '¿Por qué se requiere una Radiografía antes de un primer programa?', a: 'Porque el diagnóstico debe venir antes de la prescripción. Sin entender lo que tu empresa realmente necesita, cualquier recomendación de programa sería una suposición. La Radiografía asegura que se recomiende la intervención correcta para tu situación específica — no una secuencia genérica.' },
      { q: '¿Puedo elegir un programa yo mismo?', a: 'Los programas no se auto-seleccionan de un menú de servicios. La Radiografía determina el programa recomendado basándose en el diagnóstico. Este es el modelo basado en diagnóstico — no un enfoque de "elige un servicio". Puedes expresar interés en un programa específico, pero la recomendación viene del diagnóstico.' },
      { q: '¿Arquitectura de Independencia puede ser el primer programa?', a: 'Sí. Cualquier programa core puede ser recomendado primero. Si la Radiografía identifica la dependencia del fundador como la restricción principal, Arquitectura de Independencia puede ser la primera intervención recomendada.' },
      { q: '¿Tengo que completar Rentabilidad Maximizada primero?', a: 'No. Rentabilidad Maximizada no es automáticamente primero. Puede ser primero si la rentabilidad es la oportunidad principal, pero un cliente puede saltárselo si no es la necesidad apropiada. La Radiografía determina la secuencia correcta para tu empresa.' },
      { q: '¿Puedo trabajar en más de un programa core a la vez?', a: 'No. Solo un programa core está activo a la vez. Después de la finalización y reevaluación, se determina la siguiente intervención — si la hay. Esto asegura enfoque y calidad de ejecución.' },
      { q: '¿La Mentoría es obligatoria?', a: 'No. La Mentoría Empresarial Profética es opcional. Puede acompañar un programa, darse entre programas, comenzar después de un programa o continuar a largo plazo. No es obligatoria.' },
      { q: '¿Qué pasa después de la Radiografía?', a: 'Después de la Radiografía, recibes un diagnóstico documentado y una recomendación para la siguiente intervención correcta. Si se recomienda un programa y eres aceptado, procedes con ese programa. Si ningún programa es apropiado, eso también es un resultado válido.' },
      { q: '¿Completar la Radiografía garantiza admisión a un programa posterior?', a: 'No. El pago o la finalización de la Radiografía no garantiza admisión a un programa posterior. Company of Profits se reserva la discreción de admisión y busca ser guiada por el Espíritu Santo en las decisiones de ajuste.' },
      { q: '¿Riqueza de Reino e Impacto está disponible?', a: 'No. Riqueza de Reino e Impacto está marcada como Próximamente. Aún no está disponible para aplicación. Si te interesa, aplica a la Radiografía e indica tu interés en la aplicación.' },
      { q: '¿Company of Profits trabaja con fundadores no cristianos?', a: 'Company of Profits está diseñada específicamente para empresarios cristianos. La dimensión profética es integral para la metodología, y la firma opera desde una cosmovisión cristiana. Fundadores que no comparten esta base no serían un ajuste adecuado.' },
      { q: '¿Qué tamaño de empresa es generalmente apropiado?', a: 'Empresas con más de 10 empleados son el ajuste típico. El trabajo aborda empresas establecidas con potencial significativo sin realizar — empresas que han superado la fase inicial de startup y tienen suficiente complejidad para beneficiarse de intervención estructural y estratégica.' },
      { q: '¿Qué mercados sirven?', a: 'Los mercados prioritarios para los primeros 2-3 años son Estados Unidos y América Latina. Estados Unidos tiene prioridad comercial. El inglés y el español tienen igual importancia estratégica. El sitio web es primero en inglés, segundo en español.' },
      { q: '¿Esto es consultoría, coaching, ministerio o algo más?', a: 'Es consultoría estratégica empresarial y guía profética — una categoría propia. No es consultoría convencional, coaching genérico, coaching cristiano ni ministerio. Es una firma de asesoría empresarial seria con cosmovisión cristiana y diferenciación profética.' },
      { q: '¿Vender la empresa es el objetivo?', a: 'No. El objetivo es libertad de elección — no salida forzada, desaparición ni venta. La preparación para la venta puede eventualmente ser consecuencia de construir una empresa menos dependiente del fundador, pero no es la promesa central. El objetivo es una empresa que pueda operar y crecer con menos dependencia de ti.' },
      { q: '¿Qué puedo esperar de la aplicación?', a: 'La aplicación pregunta sobre tu empresa, etapa del negocio, rentabilidad, dependencia del fundador, desafío principal, objetivos, alineación cristiana y disposición a involucrarte con estrategia empresarial y discernimiento profético. Está diseñada para calificar el ajuste — no para maximizar el número de envíos. Después del envío, tu aplicación será revisada para evaluar el ajuste.' },
    ],
  },
  insightsPage: {
    title: 'Insights',
    subtitle: 'Reflexión sobre rentabilidad, independencia del fundador, discernimiento profético y construcción de una empresa que crea libertad.',
    emptyTitle: 'Artículos próximamente',
    emptyBody: 'Estamos construyendo una biblioteca de pensamiento estratégico para empresarios cristianos. Aún no se han publicado artículos — cuando lo estén, aparecerán aquí. Mientras tanto, la Radiografía Empresarial Profética es la mejor manera de obtener discernimiento específico sobre tu empresa.',
    themes: [
      'Rentabilidad',
      'Dependencia del fundador',
      'Sistemas operativos',
      'Decisiones estratégicas',
      'Claridad estratégica',
      'Discernimiento profético en los negocios',
      'Liderazgo cristiano',
      'Mayordomía',
      'Impacto del Reino',
    ],
  },
  applyPage: {
    title: 'Aplicar a la Radiografía Empresarial Profética',
    subtitle: 'La aplicación nos ayuda a entender tu empresa y determinar el ajuste antes de proceder. Revisamos cada aplicación cuidadosamente.',
    introTitle: 'Por qué pedimos esta información',
    introBody: 'La aplicación está diseñada para calificar el ajuste — no para maximizar el número de envíos. Preguntamos sobre tu empresa, etapa del negocio, rentabilidad, dependencia del fundador, tu desafío principal y tu alineación con la identidad cristiana y profética de Company of Profits. Esto nos ayuda a ambos a determinar si la Radiografía es apropiada para tu situación.',
    formTitle: 'Solicitud de Radiografía',
    sections: {
      company: 'Empresa',
      businessStage: 'Etapa del Negocio',
      profitability: 'Contexto de Rentabilidad',
      founderDependence: 'Dependencia del Fundador',
      challenge: 'Desafío Principal',
      goals: 'Objetivos',
      christian: 'Alineación Cristiana',
      integration: 'Integración Estrategia + Profético',
      contact: 'Información de Contacto',
    },
    fields: {
      companyName: { label: 'Nombre de la empresa', placeholder: 'El nombre de tu empresa' },
      website: { label: 'Sitio web', placeholder: 'https://...' },
      industry: { label: 'Industria / modelo de negocio', placeholder: 'Ej. Manufactura, SaaS, Servicios...' },
      employees: { label: 'Número de empleados', placeholder: 'Número aproximado', options: ['1-9', '10-24', '25-49', '50-99', '100-249', '250+'] },
      location: { label: 'Ubicación / mercado', placeholder: 'País y mercado principal' },
      founderStructure: { label: 'Estructura de fundadores', placeholder: 'Fundador único, cofundadores, empresa familiar...', options: ['Fundador único', 'Cofundadores', 'Empresa familiar', 'Otro'] },
      businessStageDesc: { label: 'Breve descripción de la etapa de tu empresa', placeholder: '¿Dónde está la empresa hoy? ¿Cómo es el crecimiento?' },
      aboveBreakEven: { label: '¿La empresa está por encima del punto de equilibrio mensual?', placeholder: '', options: ['Sí', 'No', 'Aproximadamente en equilibrio', 'Prefiero no decir'] },
      profitabilityContext: { label: 'Contexto de rentabilidad', placeholder: 'Describe brevemente tu situación actual de rentabilidad', help: 'No necesitas datos financieros sensibles — solo un panorama general.' },
      founderDependenceLevel: { label: '¿Qué tan dependiente es la empresa de ti?', placeholder: '', options: ['Extremadamente — la mayoría de decisiones fluyen por mí', 'Altamente — decisiones clave y relaciones', 'Moderadamente — algunas áreas funcionan solas', 'Bajo — la empresa opera en gran parte sin mí'] },
      founderInvolvement: { label: '¿En dónde estás más involucrado?', placeholder: '¿Qué áreas de la empresa requieren tu involucración directa?' },
      bottlenecks: { label: 'Cuellos de botella de persona clave o decisiones', placeholder: '¿Dónde se frenan las cosas porque te necesitan a ti?' },
      primaryChallenge: { label: 'Desafío empresarial principal', placeholder: '¿Cuál es el problema más importante que enfrentas ahora mismo?' },
      profitGoals: { label: 'Objetivos de rentabilidad', placeholder: '¿Qué te gustaría mejorar sobre la rentabilidad?' },
      freedomGoals: { label: 'Objetivos de libertad / independencia', placeholder: '¿Cómo se vería la libertad para ti?' },
      growthGoals: { label: 'Objetivos de crecimiento', placeholder: '¿H dónde quieres llevar la empresa?' },
      otherGoals: { label: 'Otros objetivos relevantes', placeholder: 'Cualquier otra cosa importante para ti' },
      christianAlignment: { label: '¿Te identificas como un empresario cristiano?', placeholder: '', options: ['Sí', 'Estoy explorando la fe', 'No'] },
      christianAlignmentContext: { label: 'Contexto breve (opcional)', placeholder: 'Algo que nos ayude a entender tu camino de fe y empresa' },
      integrationWillingness: { label: '¿Estás dispuesto a involucrarte con estrategia empresarial y discernimiento profético?', placeholder: '', options: ['Sí — quiero ambos', 'Estoy abierto a la dimensión profética', 'Tengo preguntas sobre esto', 'No'] },
      integrationContext: { label: '¿Alguna pregunta o contexto sobre la dimensión profética?', placeholder: 'Estamos disponibles para responder cualquier pregunta' },
      fullName: { label: 'Nombre completo', placeholder: 'Tu nombre completo' },
      email: { label: 'Correo electrónico', placeholder: 'tu@empresa.com' },
      phone: { label: 'Teléfono (opcional)', placeholder: 'Tu número de teléfono' },
      preferredLanguage: { label: 'Idioma preferido', placeholder: '', options: ['Inglés', 'Español'] },
      anythingElse: { label: '¿Algo más que nos quieras compartir?', placeholder: 'Opcional — comparte lo que consideres relevante' },
    },
    submitButton: 'Enviar Solicitud',
    submittingButton: 'Enviando...',
    successTitle: 'Solicitud recibida.',
    successBody: 'Gracias. Tu solicitud ha sido enviada y será revisada para evaluar el ajuste. No prometemos un tiempo específico de respuesta, pero nos pondremos en contacto. Mientras tanto, asegúrate de que nuestros correos puedan llegarte.',
    errorTitle: 'Algo salió mal.',
    errorBody: 'Tu solicitud no pudo ser enviada en este momento. Por favor intenta de nuevo, o contáctanos directamente si el problema persiste.',
    requiredNote: 'Los campos marcados con * son requeridos. Los demás son opcionales pero nos ayudan a entender mejor tu situación.',
    spamNote: 'Este formulario está protegido contra spam. Tu información se maneja de forma segura y nunca se comparte.',
  },
  seo: {
    homeTitle: 'Company of Profits — Consultoría Estratégica Empresarial y Guía Profética para Empresarios Cristianos',
    homeDesc: 'Ayudamos a empresarios cristianos establecidos a construir empresas más rentables, menos dependientes del fundador y con libertad genuina. Estrategia empresarial y discernimiento profético guiado por el Espíritu Santo, integrados.',
    blueprintTitle: 'Radiografía Empresarial Profética — Company of Profits',
    blueprintDesc: 'Un compromiso diagnóstico pagado que combina análisis empresarial con discernimiento profético. El primer paso requerido antes de cualquier programa core. Aplica para descubrir lo que tu empresa realmente necesita.',
    methodologyTitle: 'Metodología — Company of Profits',
    methodologyDesc: 'Cómo trabaja Company of Profits: diagnóstico, discernimiento profético, interpretación estratégica, intervención, ejecución y reevaluación. Estrategia empresarial y discernimiento profético integrados.',
    programsTitle: 'Programas — Company of Profits',
    programsDesc: 'Intervenciones estratégicas seleccionadas después del diagnóstico — no un menú de servicios. Rentabilidad Maximizada, Optimización Operativa, Arquitectura de Independencia, Riqueza de Reino e Impacto y Mentoría Empresarial Profética.',
    whyTitle: 'Por Qué Company of Profits — Consultoría Estratégica y Guía Profética',
    whyDesc: '¿Por esta firma en lugar de consultoría convencional o coaching cristiano? Estrategia empresarial seria, independencia del fundador, diagnóstico del sistema completo y discernimiento guiado por el Espíritu Santo — integrados.',
    aboutTitle: 'Nosotros — Company of Profits',
    aboutDesc: 'Company of Profits es una firma premium de consultoría estratégica empresarial y guía profética para empresarios cristianos establecidos. Conoce la firma y su fundador.',
    insightsTitle: 'Insights — Company of Profits',
    insightsDesc: 'Pensamiento estratégico sobre rentabilidad, independencia del fundador, discernimiento profético y construcción de una empresa que crea libertad para empresarios cristianos.',
    faqTitle: 'Preguntas Frecuentes — Company of Profits',
    faqDesc: 'Respuestas sobre la Radiografía Empresarial Profética, los programas, la guía profética, el ajuste, la admisión y cómo Company of Profits trabaja con empresarios cristianos.',
    applyTitle: 'Aplicar a la Radiografía Empresarial Profética — Company of Profits',
    applyDesc: 'Envía tu solicitud para la Radiografía Empresarial Profética. La aplicación nos ayuda a entender tu empresa y determinar el ajuste antes de proceder.',
  },
};

export const translations: Record<Lang, Translation> = { en, es };
