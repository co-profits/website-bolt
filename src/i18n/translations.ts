import type { Lang } from '@/config/site';

export interface NavItem {
  label: string;
  path: string;
}

export interface SelectOption {
  value: string;
  label: string;
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
    cookiePolicy: string;
    rights: string;
    applyVsContact: string;
    linkedin: string;
    instagram: string;
  };
  common: {
    learnMore: string;
    backToPrograms: string;
    breadcrumbHome: string;
    comingSoon: string;
    inDevelopment: string;
    optional: string;
    required: string;
    loading: string;
  };
  cta: {
    applyBlueprint: string;
    startBlueprint: string;
    seeHowBlueprintWorks: string;
    exploreBlueprint: string;
    contactAboutMentorship: string;
    finalCtaCopy: string;
    finalCtaButton: string;
  };
  home: {
    positioning: string;
    heroH1: string;
    heroSub: string;
    heroCtaPrimary: string;
    heroCtaSecondary: string;
    microcopy: string;
    problemTitle: string;
    problemIntro: string;
    problemItems: { title: string; desc: string }[];
    systemTitle: string;
    systemBody: string;
    diagramLabels: string[];
    methodTitle: string;
    methodBody: string;
    integrationTitle: string;
    integrationBody: string;
    blueprintTitle: string;
    blueprintBody: string;
    factStrip: string;
    blueprintCta: string;
    decisionTitle: string;
    decisionBody: string;
    finalCtaCopy: string;
    finalCtaButton: string;
  };
  blueprintPage: {
    eyebrow: string;
    title: string;
    hero: string;
    price: string;
    format: string;
    scope: string;
    whatItIs: string;
    whoItIsFor: string;
    businessProblem: string;
    integratedDiscernment: string;
    publicProcess: string;
    afterBlueprint: string;
    applicationBoundary: string;
    cta: string;
  };
  methodologyPage: {
    title: string;
    intro: string;
    stages: { num: string; title: string; desc: string }[];
    integration: string;
    biblicalHeading: string;
    biblicalBody: string[];
    cta: string;
  };
  programsPage: {
    title: string;
    intro: string;
    programs: { name: string; desc: string; category: string }[];
    cta: string;
    viewDetails: string;
  };
  whyPage: {
    title: string;
    intro: string;
    themes: { title: string; desc: string }[];
    cta: string;
  };
  aboutPage: {
    title: string;
    firmOpening: string;
    purpose: string;
    namingHeading: string;
    namingStory: string[];
    founderLabel: string;
    founderName: string;
    biography: string;
    callingStory: string;
    cta: string;
  };
  faqPage: {
    title: string;
    subtitle: string;
    faqs: { q: string; a: string }[];
  };
  insightsPage: {
    title: string;
    intro: string;
    featuredLabel: string;
    cardCta: string;
    emptyTitle: string;
    emptyBody: string;
    emptyCta: string;
    articleCta: string;
    loading: string;
    error: string;
  };
  applyPage: {
    title: string;
    intro: string;
    sectionHeading: string;
    helper: string;
    stepLabels: { step: string; of: string; step1: string; step2: string; step3: string };
    next: string;
    back: string;
    submit: string;
    submitting: string;
    errorSummary: string;
    fields: Record<string, { label: string; placeholder?: string; help?: string; options?: SelectOption[]; required?: boolean }>;
    founderPricingNote: string;
    consentRequired: string;
    consentInsights: string;
    propheticQuestionsHelper: string;
    successTitle: string;
    successBody: string;
    duplicate: string;
    errorTitle: string;
    errorBody: string;
    requiredNote: string;
    fieldError: string;
    emailError: string;
    minLengthError: string;
    websiteError: string;
  };
  contactPage: {
    title: string;
    intro: string;
    fields: { name: string; company: string; country: string; email: string; message: string };
    cta: string;
    privacy: string;
    success: string;
    error: string;
    applyDistinction: string;
    fieldError: string;
    emailError: string;
  };
  cookieBanner: {
    text: string;
    accept: string;
    necessary: string;
    settings: string;
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
    contactTitle: string;
    contactDesc: string;
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
    { label: 'Contact', path: '/en/contact' },
  ],
  navCta: 'Apply for Blueprint',
  languageLabel: 'ES',
  footer: {
    tagline: 'Strategic Business Consulting and Prophetic Guidance for Christian Entrepreneurs.',
    navTitle: 'Navigation',
    programsTitle: 'Programs',
    legalTitle: 'Legal',
    privacyPolicy: 'Privacy Policy',
    terms: 'Terms and Conditions',
    cookiePolicy: 'Cookie Policy',
    rights: 'All rights reserved.',
    applyVsContact: 'For a general inquiry, use Contact. To have your business evaluated for the Blueprint, use the application.',
    linkedin: 'Follow on LinkedIn',
    instagram: 'Follow on Instagram',
  },
  common: {
    learnMore: 'Learn more',
    backToPrograms: 'Back to all programs',
    breadcrumbHome: 'Home',
    comingSoon: 'Coming Soon',
    inDevelopment: 'In development',
    optional: 'Optional',
    required: 'Required',
    loading: 'Loading...',
  },
  cta: {
    applyBlueprint: 'Apply for the Prophetic Business Blueprint',
    startBlueprint: 'Start with the Prophetic Business Blueprint',
    seeHowBlueprintWorks: 'See how the Blueprint works',
    exploreBlueprint: 'Explore the Prophetic Business Blueprint',
    contactAboutMentorship: 'Contact Company of Profits about Mentorship',
    finalCtaCopy: 'You built it to gain freedom — and ended up as its most indispensable employee. That may be profitable, but it is not the freedom you built it for. It is time to build a business that can survive and grow with less dependence on you.',
    finalCtaButton: 'Apply for the Prophetic Business Blueprint',
  },
  home: {
    positioning: 'STRATEGIC BUSINESS CONSULTING + PROPHETIC DISCERNMENT FOR CHRISTIAN ENTREPRENEURS',
    heroH1: 'Make your company more profitable and less dependent on you — unlock your freedom.',
    heroSub: 'For established Christian entrepreneurs whose companies are profitable but still depend too heavily on them. We combine whole-business diagnosis, serious strategy, and Holy Spirit-led prophetic discernment to help you build more profit, more freedom, and more choice in how you lead.',
    heroCtaPrimary: 'Apply for the Prophetic Business Blueprint',
    heroCtaSecondary: 'See how the Blueprint works',
    microcopy: 'Paid diagnosis. Live, virtual and personalized. Application required.',
    problemTitle: 'Profit can grow while dependence on you grows with it.',
    problemIntro: "The cost is not only that you are always busy. It is that the company's decisions, value, and future remain tied to your constant involvement.",
    problemItems: [
      { title: 'Daily dependence', desc: 'Every important decision, relationship, or exception still comes back to you.' },
      { title: 'Business constraint', desc: 'Growth, margin, and execution are limited by what one person can see, decide, and carry.' },
      { title: 'Life, family, and personal margin', desc: 'Constant operational pressure and the anxiety that comes with it follow you home — into your marriage, your family, your rest, and your time with God. Business success should create room to live; it should not consume every moment you have.' },
    ],
    systemTitle: 'The issue is rarely one department. It is the system.',
    systemBody: 'The visible symptom may be pricing, delegation, or operations. The underlying constraint is often the system connecting them. A pricing problem may be a strategy problem. A delegation problem may be a decision-architecture problem. An operating problem may be a structural problem. Diagnosis comes before prescription because isolated fixes rarely change the system.',
    diagramLabels: ['Strategy', 'Economics', 'Operations', 'Decisions', 'Dependencies'],
    methodTitle: 'Before we recommend a program, we diagnose the business.',
    methodBody: 'Diagnose → Identify → Recommend → Execute → Reassess. The first step is not choosing a service. It is understanding what the business actually needs.',
    integrationTitle: 'Business strategy and prophetic discernment, brought into the same decision.',
    integrationBody: 'Business strategy helps us understand what the company is doing. Holy Spirit-led prophetic discernment helps us seek what requires discernment beyond analysis. The work is strongest when both inform the same practical decision.',
    blueprintTitle: 'A diagnostic process before a program is recommended.',
    blueprintBody: 'The Prophetic Business Blueprint produces a documented picture of your business, clarifies the constraint or opportunity that matters most, and identifies the right next intervention when that is the appropriate next step.',
    factStrip: 'USD $2,300 · 100% live, virtual and personalized · At least seven live sessions · Business consultant and prophet · Up to two founding partners included',
    blueprintCta: 'Explore the Prophetic Business Blueprint',
    decisionTitle: 'The Blueprint identifies the intervention.',
    decisionBody: 'Profit Maximization, Operational Optimization, and Freedom Architecture address different constraints. The right first move depends on the diagnosis. Mentorship is optional and ongoing.',
    finalCtaCopy: 'You built it to gain freedom — and ended up as its most indispensable employee. That may be profitable, but it is not the freedom you built it for. It is time to build a business that can survive and grow with less dependence on you.',
    finalCtaButton: 'Apply for the Prophetic Business Blueprint',
  },
  blueprintPage: {
    eyebrow: 'DIAGNOSTIC AND QUALIFICATION GATEWAY',
    title: 'Prophetic Business Blueprint',
    hero: 'A paid diagnostic process that combines business analysis with Holy Spirit-led prophetic discernment to determine what your business actually needs.',
    price: 'USD $2,300',
    format: '100% live, virtual and personalized.',
    scope: 'At least seven live videoconference sessions with a business consultant and a prophet. Each session focuses on a specific business topic or question within the diagnostic work. Each founding partner receives one individual prophetic session. Up to two founding partners are included. Each additional founding partner beginning with the third adds USD $100.',
    whatItIs: 'The Prophetic Business Blueprint is a substantive diagnostic engagement. It is not a free consultation, a recorded course, a self-service product, or a generic questionnaire. It produces a documented picture of your business, clarifies the constraint or opportunity that matters most, and identifies the right next intervention when that is the appropriate next step. The written diagnostic record is a substantive result in its own right: it reflects the diagnosis, analysis, and applied experience developed across the engagement.',
    whoItIsFor: 'Christian entrepreneurs with established, operating companies who recognize that profitability, growth, or opportunity has not yet created enough freedom from being indispensable.',
    businessProblem: 'Fragmented advice can address pricing, marketing, accounting, delegation, or operations one piece at a time while the system that connects them remains unchanged. The Blueprint examines the business as a whole.',
    integratedDiscernment: 'Business analysis examines what is happening in the company. Holy Spirit-led prophetic discernment is integrated into the search for direction, timing, confirmation, and what may require discernment beyond analysis.',
    publicProcess: 'Diagnose → Identify → Recommend → Execute → Reassess',
    afterBlueprint: 'The Blueprint informs the next intervention. Profit Maximization, Operational Optimization, or Freedom Architecture may be appropriate first depending on the diagnosis. Prophetic Business Mentorship is optional and may accompany the broader journey.',
    applicationBoundary: 'The Blueprint is the first step in getting to know each other. It lets you experience firsthand how we work and see your business more clearly, so you can decide whether the next step makes sense.\n\nIt is also a chance to see if we are aligned, both professionally and spiritually. If so, you and your company could move into one of our core programs.\n\nEither way, the Blueprint stands on its own: it is a documented diagnostic that can guide your decisions, whether or not you continue with us.',
    cta: 'Apply for the Prophetic Business Blueprint',
  },
  methodologyPage: {
    title: 'How the work moves from diagnosis to intervention.',
    intro: 'We diagnose the whole business before recommending what to change. The method shows how business analysis, prophetic discernment, interpretation, intervention, execution, and reassessment move together.',
    stages: [
      { num: '01', title: 'Business Diagnosis', desc: 'We examine the economics, operations, structure, decisions, dependencies, and opportunities shaping the business.' },
      { num: '02', title: 'Prophetic Discernment', desc: 'We seek Holy Spirit-led discernment alongside business analysis, including direction, confirmation, seasons, risks, timing, and strategic questions.' },
      { num: '03', title: 'Strategic Interpretation', desc: 'We bring the evidence and discernment together into a coherent picture of what is actually constraining the business.' },
      { num: '04', title: 'Intervention', desc: 'We recommend the appropriate next intervention. No program is prescribed by default.' },
      { num: '05', title: 'Execution', desc: 'We move into practical work with clear focus and accountable progress.' },
      { num: '06', title: 'Reassessment', desc: 'We review what changed and whether another intervention genuinely serves the business.' },
    ],
    integration: 'Business strategy helps us understand what the business is doing. Prophetic discernment helps us seek what requires discernment beyond analysis. The work is strongest when both inform the same practical decision.',
    biblicalHeading: 'Prophetic discernment and practical responsibility belong together.',
    biblicalBody: [
      "Scripture does not separate hearing from God from acting on what He says.",
      "A widow crushed by debt turns to Elisha, receives specific instructions, and obeys. What little she has in hand becomes provision (2 Kings 4:1–7). Joseph, crediting God with the interpretation, turns Pharaoh's dreams into a strategy that carries a nation through famine (Genesis 41). Jehoshaphat calls Judah to trust God, believe his prophets, and move forward (2 Chronicles 20:20). Different people, different crises, same response: they listened, they obeyed, and God's direction became action.",
      "None of this is a formula for easy success. It is a pattern: prophetic counsel is one of the ways God guides those who are willing to listen and brave enough to follow. On that foundation, we help business leaders build their companies.",
    ],
    cta: 'Apply for the Prophetic Business Blueprint',
  },
  programsPage: {
    title: 'The Blueprint identifies the intervention.',
    intro: 'Company of Profits does not begin by assigning a program from a menu. The Prophetic Business Blueprint diagnoses the business first. The next intervention follows the constraint or opportunity that matters most.',
    programs: [
      { name: 'Profit Maximization', desc: 'For businesses whose primary constraint is economic: pricing, margins, customer or offer economics, cost structure, working capital, revenue composition, or another profitability issue identified through diagnosis.', category: 'core' },
      { name: 'Operational Optimization', desc: 'For businesses whose primary constraint is operating structure: processes, roles, decisions, handoffs, accountability, delivery standards, or recurring friction that keeps returning to the founder.', category: 'core' },
      { name: 'Freedom Architecture', desc: 'For businesses whose primary constraint is founder dependence: decisions, relationships, knowledge, or daily operations that still rely too heavily on one person.', category: 'core' },
      { name: 'Prophetic Business Mentorship', desc: 'An optional ongoing relationship for business counsel and Holy Spirit-guided prophetic discernment, available before, during, or after core programs when additional support is needed and the relationship proceeds.', category: 'mentorship' },
      { name: 'Kingdom Wealth & Impact', desc: 'In development for a future stage of work around wealth capacity, stewardship, and purposeful impact.', category: 'future' },
    ],
    cta: 'Start with the Prophetic Business Blueprint',
    viewDetails: 'View details',
  },
  whyPage: {
    title: 'Why Company of Profits',
    intro: 'We work with Christian entrepreneurs and founders who want serious business strategy and genuine prophetic discernment held together. That combination changes what we diagnose, how we decide, and what we recommend next.',
    themes: [
      { title: 'Profit', desc: 'Profit is the resource that makes freedom, wealth capacity, and impact possible. We address the economics of the business with that reality in view.' },
      { title: 'Whole-system diagnosis', desc: 'We look for the relationships between symptoms rather than prescribing an isolated fix for each department.' },
      { title: 'Founder independence', desc: 'A profitable company should not require the founder to remain its operating system. We examine the structures, decisions, and dependencies that keep that pattern in place.' },
      { title: 'Prophetic integration', desc: 'Holy Spirit-led discernment is part of the core work. It is brought into strategic decisions rather than added as an ornamental spiritual layer.' },
      { title: 'Scope', desc: 'Prophetic discernment informs the way we seek direction; it does not replace the practical work of making and executing business decisions.' },
      { title: 'Fit', desc: 'Company of Profits is for Christian entrepreneurs who are willing to engage both dimensions. The Blueprint is the place to begin.' },
    ],
    cta: 'See how the Blueprint works',
  },
  aboutPage: {
    title: 'About Company of Profits',
    firmOpening: 'Company of Profits is a strategic business consulting and prophetic guidance firm for established Christian entrepreneurs. We work at the intersection of profitability, founder independence, business systems, and Holy Spirit-led discernment.',
    purpose: 'Its purpose is to help Christian entrepreneurs build companies that create profit, freedom, wealth capacity, and lasting impact without requiring the founder to remain the operating system.',
    namingHeading: 'Why the name "Company of Profits"?',
    namingStory: [
      'In English, "company" can mean both a business and a group of people, while "profits" echoes "prophets." The name is deliberate: we believe healthy profits and prophetic discernment belong in the same serious work.',
      'It also draws on the biblical phrase "a company of prophets" in 1 Samuel 10:10. In that passage, the Spirit of God comes upon Saul and he prophesies among the prophets; the text does not say that proximity alone caused it.',
      'For Company of Profits, the name expresses our commitment to help Christian entrepreneurs make wiser business decisions through serious strategy and Holy Spirit-led discernment.',
    ],
    founderLabel: 'THE FOUNDER',
    founderName: 'Paul Huguet',
    biography: "He is an entrepreneur and strategic advisor with nearly two decades of experience creating, operating, scaling, and advising companies across multiple industries and markets, including the Silicon Valley startup and venture capital ecosystem, where he lived for nearly two years. His entrepreneurial path and a deep encounter with the Holy Spirit led him to see that human strategy alone is not always enough; some business decisions require prophetic discernment. Today, Paul leads Company of Profits and oversees the firm's team of business consultants and prophets, bringing business strategy and prophetic discernment together for Christian entrepreneurs.",
    callingStory: "After seasons of consulting and building companies, Paul made a firm decision: he would never go back to consulting. His true passion was creating, structuring, and scaling businesses. But during a period of deep spiritual conviction, he understood that God was calling him to serve fellow Christian entrepreneurs. He resisted, because consulting was the one door he had closed for good. Yet the calling never faded, and in time he recognized that the firm he was meant to build, to empower Kingdom-minded business owners around the world, was Company of Profits.",
    cta: 'Apply for the Prophetic Business Blueprint',
  },
  faqPage: {
    title: 'Frequently Asked Questions',
    subtitle: 'Answers to help you understand how we work.',
    faqs: [
      { q: 'Who is Company of Profits for?', a: 'Company of Profits works with established Christian entrepreneurs whose companies are operating and ready for serious strategic diagnosis. The work is designed for people willing to engage both business strategy and Holy Spirit-led prophetic discernment.' },
      { q: 'Is the Prophetic Business Blueprint paid?', a: 'Yes. The price is USD $2,300.' },
      { q: 'What is included in the Blueprint?', a: 'The Blueprint is 100% live, virtual and personalized, with at least seven live videoconference sessions involving a business consultant and a prophet. Each live session focuses on a specific business topic or question within the diagnostic work. Each founding partner receives one individual prophetic session. Up to two founding partners are included. Each additional founding partner beginning with the third adds USD $100.' },
      { q: 'What happens after I apply?', a: 'We review the application and communicate about the next step. The review considers whether the Blueprint is appropriate for the business and whether there is sufficient strategic, spiritual, and relational alignment to proceed.' },
      { q: 'Does applying mean I am accepted?', a: 'No. Applying begins a review. It does not mean that you have been accepted into the Blueprint or a later program.' },
      { q: 'Is prophetic guidance included?', a: 'Yes. Prophetic discernment is integrated into the core work. The central engagement is not offered as a strategy-only version.' },
      { q: 'Are programs chosen before or after diagnosis?', a: 'After diagnosis. The Blueprint helps identify the constraint or opportunity that matters most and informs the appropriate next intervention.' },
      { q: 'Can Freedom Architecture be the first program?', a: 'Yes. Freedom Architecture may be the first intervention when founder dependence is the primary constraint identified through diagnosis.' },
      { q: 'Is the work live and remote?', a: 'Yes. The Blueprint is 100% live, virtual and personalized. It is not a recorded course or self-service product.' },
      { q: 'What do I receive from the Blueprint?', a: 'You receive a documented picture of the business, clarity about the primary constraint or opportunity, and a recommendation regarding the appropriate next intervention. The written diagnostic record is a substantive result in its own right: it reflects the diagnosis, analysis, and applied experience developed across the engagement.' },
      { q: 'What happens if there is not enough alignment to proceed?', a: 'The application may not proceed, or additional clarification may be requested. We do not promise acceptance or a later program.' },
      { q: 'Does completing the Blueprint guarantee a later program?', a: 'No. Completing the Blueprint does not guarantee admission to a subsequent program. The Blueprint is valuable as a diagnostic engagement even if no further program follows.' },
      { q: 'Is Mentorship mandatory?', a: 'No. Prophetic Business Mentorship is optional and may accompany, follow, or sit between other work when a continuing relationship is needed.' },
      { q: 'Is Kingdom Wealth & Impact available?', a: 'It is in development and is not currently accepting applications.' },
      { q: 'Does Company of Profits replace professional or pastoral advice?', a: 'No. Company of Profits provides strategic consulting and prophetic discernment for business decisions. Seek appropriate licensed professional or pastoral counsel for matters outside that scope.' },
    ],
  },
  insightsPage: {
    title: 'Insights for entrepreneurs building profit, freedom, and lasting capacity.',
    intro: 'Practical thinking on profitability, founder dependence, operating systems, strategic decisions, Christian leadership, stewardship, and Holy Spirit-led discernment in business.',
    featuredLabel: 'Featured insight',
    cardCta: 'Read the insight',
    emptyTitle: 'The Insights library is being built with care.',
    emptyBody: 'Explore the latest published thinking here, or begin with the Prophetic Business Blueprint to examine your business in context.',
    emptyCta: 'Explore the Prophetic Business Blueprint',
    articleCta: 'If this question is active in your business, the Blueprint is where we examine it in context.',
    loading: 'Loading insights...',
    error: 'We could not load the Insights library. Please try again later.',
  },
  applyPage: {
    title: 'Apply for the Prophetic Business Blueprint',
    intro: 'The application helps us understand your business and evaluate whether the Blueprint is the appropriate next step. It is not a request for sensitive financial documents, and submitting it does not mean you have been accepted.',
    sectionHeading: 'Tell us where the business is now and what you think needs to change.',
    helper: 'Answer at the level that is useful for an initial review. Do not include passwords, confidential documents, bank details, or sensitive personal information that is not necessary at this stage.',
    stepLabels: { step: 'Step', of: 'of', step1: 'Step 1 — Founder and company', step2: 'Step 2 — Business context', step3: 'Step 3 — Challenge, outcome, and fit' },
    next: 'Continue',
    back: 'Back',
    submit: 'Submit Application',
    submitting: 'Submitting...',
    errorSummary: 'Please review the following:',
    fields: {
      fullName: { label: 'Full name', placeholder: 'Your full name', required: true },
      email: { label: 'Work email', placeholder: 'you@company.com', required: true },
      companyName: { label: 'Company name', placeholder: 'Your company name', required: true },
      website: { label: 'Company website', placeholder: 'https://...' },
      country: { label: 'Country where the company primarily operates', placeholder: 'Select a country', required: true, options: [
        { value: 'US', label: 'United States' }, { value: 'CA', label: 'Canada' }, { value: 'MX', label: 'Mexico' },
        { value: 'AR', label: 'Argentina' }, { value: 'BR', label: 'Brazil' }, { value: 'CL', label: 'Chile' },
        { value: 'CO', label: 'Colombia' }, { value: 'PE', label: 'Peru' }, { value: 'VE', label: 'Venezuela' },
        { value: 'EC', label: 'Ecuador' }, { value: 'UY', label: 'Uruguay' }, { value: 'PY', label: 'Paraguay' },
        { value: 'BO', label: 'Bolivia' }, { value: 'CR', label: 'Costa Rica' }, { value: 'PA', label: 'Panama' },
        { value: 'DO', label: 'Dominican Republic' }, { value: 'GT', label: 'Guatemala' }, { value: 'ES', label: 'Spain' },
        { value: 'GB', label: 'United Kingdom' }, { value: 'DE', label: 'Germany' }, { value: 'FR', label: 'France' },
        { value: 'IT', label: 'Italy' }, { value: 'PT', label: 'Portugal' }, { value: 'NL', label: 'Netherlands' },
        { value: 'AU', label: 'Australia' }, { value: 'NZ', label: 'New Zealand' }, { value: 'ZA', label: 'South Africa' },
        { value: 'NG', label: 'Nigeria' }, { value: 'KE', label: 'Kenya' }, { value: 'IN', label: 'India' },
        { value: 'SG', label: 'Singapore' }, { value: 'AE', label: 'United Arab Emirates' }, { value: 'other', label: 'Other' },
      ]},
      preferredLanguage: { label: 'Preferred language', placeholder: 'Select...', required: true, options: [
        { value: 'en', label: 'English' }, { value: 'es', label: 'Español' },
      ]},
      industry: { label: 'Industry or business model', placeholder: 'e.g. Manufacturing, SaaS, Services...', required: true },
      employees: { label: 'Approximate number of employees', placeholder: 'Select...', required: true, options: [
        { value: '1-9', label: '1–9' }, { value: '10-24', label: '10–24' }, { value: '25-49', label: '25–49' },
        { value: '50-99', label: '50–99' }, { value: '100-plus', label: '100+' },
      ]},
      founderCount: { label: 'Active founding partners', placeholder: 'Enter number (1–20)', required: true },
      primaryMarket: { label: 'Primary market, if different from country', placeholder: 'e.g. North America, Europe, Latin America...' },
      profitabilityContext: { label: 'Current profitability context', placeholder: 'Select...', required: true, options: [
        { value: 'above-break-even', label: 'Above break-even' },
        { value: 'approximately-break-even', label: 'Approximately break-even' },
        { value: 'below-break-even', label: 'Below break-even' },
        { value: 'prefer-to-discuss', label: 'Prefer to discuss' },
      ]},
      dependencyLevel: { label: 'How dependent is the company on its founders?', placeholder: 'Select...', required: true, options: [
        { value: 'extremely-high', label: 'Extremely high' },
        { value: 'high', label: 'High' },
        { value: 'moderate', label: 'Moderate' },
        { value: 'low', label: 'Low' },
      ]},
      primaryConstraint: { label: 'Most important business issue right now', placeholder: 'Describe the most important issue you are facing...', required: true },
      desiredChange: { label: 'What change would make the company more valuable over the next 12–18 months?', placeholder: 'Describe the change that would make the biggest difference...', required: true },
      christianAlignment: { label: 'Do you identify as a Christian entrepreneur and are you open to integrating business strategy with prophetic discernment?', placeholder: 'Select...', required: true, options: [
        { value: 'yes-both', label: 'Yes, I identify as a Christian entrepreneur and I am open to both' },
        { value: 'questions', label: 'I have questions about this' },
        { value: 'no', label: 'No' },
      ]},
      phone: { label: 'Phone', placeholder: 'Your phone number', help: 'Optional. Max 40 characters.' },
      source: { label: 'How did you hear about Company of Profits?', placeholder: 'Select...', options: [
        { value: 'linkedin', label: 'LinkedIn' }, { value: 'instagram', label: 'Instagram' },
        { value: 'referral', label: 'Referral' }, { value: 'search-engine', label: 'Search engine' },
        { value: 'other', label: 'Other' },
      ]},
      sourceDetail: { label: 'Source detail', placeholder: 'e.g. a person\'s name, a group, a specific page...', help: 'Optional. Max 160 characters.' },
      additionalContext: { label: 'Additional context', placeholder: 'Anything else you would like us to know at this stage...', help: 'Do not include confidential documents or sensitive personal information.' },
    },
    propheticQuestionsHelper: 'If you have questions about the Christian or prophetic dimension, you may share them here. Please do not share sensitive spiritual or personal details.',
    founderPricingNote: 'The Blueprint base scope includes up to 2 active founding partners. Additional partners are priced at +USD $100 per partner from partner #3.',
    consentRequired: 'By submitting this application, you authorize Company of Profits to use the information you provide to review your application, evaluate whether the Blueprint is appropriate for your business, and communicate with you about it. See our Privacy Policy.',
    consentInsights: 'I would like to receive Company of Profits Insights.',
    successTitle: 'We received your application.',
    successBody: 'We will review it and evaluate the next step. Submission is not acceptance and does not guarantee admission to the Prophetic Business Blueprint or a later program.',
    duplicate: 'We already received an application with these details. Please do not submit it again.',
    errorTitle: 'We could not confirm the submission.',
    errorBody: 'Your information remains on this page. Please try again.',
    requiredNote: 'Fields marked with * are required.',
    fieldError: 'This field is required.',
    emailError: 'Please enter a valid email address.',
    minLengthError: 'Please enter at least 20 characters.',
    websiteError: 'Please enter a valid website address (http or https).',
  },
  contactPage: {
    title: 'Contact Us',
    intro: 'Use this pathway for partnerships, alliances, referrals, media, speaking, or another business inquiry. If you want your business evaluated for the Prophetic Business Blueprint, use the separate form.',
    fields: { name: 'Name', company: 'Company', country: 'Country', email: 'Email', message: 'Message' },
    cta: 'Send Message',
    privacy: 'Your information is used to review and respond to this message. See our Privacy Policy.',
    success: 'Your message was received. We will review it and respond through the email you provided.',
    error: 'We could not send your message. Your information remains on this page. Please try again.',
    applyDistinction: 'Looking for a business diagnosis? Apply for the Prophetic Business Blueprint.',
    fieldError: 'This field is required.',
    emailError: 'Please enter a valid email address.',
  },
  cookieBanner: {
    text: 'Company of Profits uses necessary cookies to keep the site working. With your permission, analytics tools help us understand aggregate usage and improve the experience. Read our Cookie Policy.',
    accept: 'Accept analytics',
    necessary: 'Only necessary',
    settings: 'Cookie settings',
  },
  seo: {
    homeTitle: 'Company of Profits — Strategic Business Consulting and Prophetic Guidance',
    homeDesc: 'Strategic business consulting and prophetic guidance for established Christian entrepreneurs. Build a company that is more profitable and less dependent on you.',
    blueprintTitle: 'Prophetic Business Blueprint — Company of Profits',
    blueprintDesc: 'A paid diagnostic process combining business analysis with Holy Spirit-led prophetic discernment. USD $2,300. Live, virtual and personalized. Apply to discover what your business actually needs.',
    methodologyTitle: 'Methodology — Company of Profits',
    methodologyDesc: 'How Company of Profits works: diagnosis, prophetic discernment, strategic interpretation, intervention, execution, and reassessment. Business strategy and prophetic discernment integrated.',
    programsTitle: 'Programs — Company of Profits',
    programsDesc: 'Strategic interventions selected after diagnosis. Profit Maximization, Operational Optimization, Freedom Architecture, Kingdom Wealth & Impact, and Prophetic Business Mentorship.',
    whyTitle: 'Why Company of Profits — Company of Profits',
    whyDesc: 'Serious business strategy, founder independence, whole-system diagnosis, and Holy Spirit-led discernment — integrated for Christian entrepreneurs.',
    aboutTitle: 'About Company of Profits',
    aboutDesc: 'Company of Profits is a strategic business consulting and prophetic guidance firm for established Christian entrepreneurs. Learn about the firm and its founder.',
    insightsTitle: 'Insights — Company of Profits',
    insightsDesc: 'Practical thinking on profitability, founder dependence, operating systems, strategic decisions, Christian leadership, stewardship, and prophetic discernment in business.',
    faqTitle: 'FAQ — Company of Profits',
    faqDesc: 'Answers about the Prophetic Business Blueprint, programs, prophetic guidance, fit, admission, and how Company of Profits works.',
    applyTitle: 'Apply for the Prophetic Business Blueprint — Company of Profits',
    applyDesc: 'Submit your application for the Prophetic Business Blueprint. The application helps us understand your business and evaluate whether the Blueprint is the appropriate next step.',
    contactTitle: 'Contact Company of Profits',
    contactDesc: 'Contact Company of Profits for partnerships, alliances, referrals, media, speaking, or other business inquiries.',
  }
};

const es: Translation = {
  nav: [
    { label: 'Inicio', path: '/es/' },
    { label: 'Radiografía', path: '/es/radiografia' },
    { label: 'Metodología', path: '/es/metodologia' },
    { label: 'Programas', path: '/es/programas' },
    { label: 'Por qué nosotros', path: '/es/por-que-company-of-profits' },
    { label: 'Nosotros', path: '/es/nosotros' },
    { label: 'Insights', path: '/es/insights' },
    { label: 'Preguntas frecuentes', path: '/es/preguntas-frecuentes' },
    { label: 'Contáctanos', path: '/es/contacto' },
  ],
  navCta: 'Aplicar',
  languageLabel: 'EN',
  footer: {
    tagline: 'Consultoría estratégica de negocios y guía profética para empresarios cristianos.',
    navTitle: 'Navegación',
    programsTitle: 'Programas',
    legalTitle: 'Legal',
    privacyPolicy: 'Política de Privacidad',
    terms: 'Términos y Condiciones',
    cookiePolicy: 'Política de Cookies',
    rights: 'Todos los derechos reservados.',
    applyVsContact: 'Para una consulta general, utiliza Contáctanos. Para que evaluemos tu empresa para la Radiografía, utiliza la aplicación.',
    linkedin: 'Seguir en LinkedIn',
    instagram: 'Seguir en Instagram',
  },
  common: {
    learnMore: 'Saber más',
    backToPrograms: 'Volver a todos los programas',
    breadcrumbHome: 'Inicio',
    comingSoon: 'Próximamente',
    inDevelopment: 'En desarrollo',
    optional: 'Opcional',
    required: 'Requerido',
    loading: 'Cargando...',
  },
  cta: {
    applyBlueprint: 'Aplicar a la Radiografía Empresarial Profética',
    startBlueprint: 'Comienza con la Radiografía Empresarial Profética',
    seeHowBlueprintWorks: 'Conoce cómo funciona la Radiografía',
    exploreBlueprint: 'Conoce la Radiografía Empresarial Profética',
    contactAboutMentorship: 'Contacta a Company of Profits sobre la Mentoría',
    finalCtaCopy: 'Construiste tu empresa para ganar libertad y terminaste siendo su empleado más indispensable. Puede ser rentable, pero no es la libertad para la que la construiste. Es hora de construir una empresa que pueda sobrevivir y crecer con menos dependencia de ti.',
    finalCtaButton: 'Aplicar a la Radiografía Empresarial Profética',
  },
  home: {
    positioning: 'CONSULTORÍA ESTRATÉGICA DE NEGOCIOS + DISCERNIMIENTO PROFÉTICO PARA EMPRESARIOS CRISTIANOS',
    heroH1: 'Haz que tu empresa sea más rentable y dependa menos de ti — desbloquea tu libertad.',
    heroSub: 'Para empresarios cristianos con empresas rentables que todavía dependen demasiado de ellos. Combinamos el diagnóstico integral del negocio, la estrategia empresarial y el discernimiento profético guiado por el Espíritu Santo para ayudarte a construir más rentabilidad, más libertad y más opciones para liderar.',
    heroCtaPrimary: 'Aplicar a la Radiografía Empresarial Profética',
    heroCtaSecondary: 'Conoce cómo funciona la Radiografía',
    microcopy: 'Diagnóstico pago. En vivo, virtual y personalizado. Requiere aplicación.',
    problemTitle: 'La rentabilidad puede crecer mientras la dependencia de ti también.',
    problemIntro: 'El costo no es solo que estés siempre ocupado. Es que las decisiones, el valor y el futuro de la empresa sigan atados a tu participación constante.',
    problemItems: [
      { title: 'Dependencia diaria', desc: 'Cada decisión importante, relación o excepción sigue regresando a ti.' },
      { title: 'Restricción empresarial', desc: 'El crecimiento, el margen y la ejecución quedan limitados por lo que una sola persona puede ver, decidir y sostener.' },
      { title: 'Vida, familia y margen personal', desc: 'La presión operativa constante y la ansiedad que la acompaña te siguen hasta tu casa: a tu matrimonio, tu familia, tu descanso y tu tiempo con Dios. El éxito empresarial debería darte espacio para vivir; no consumir todo el tiempo que tienes.' },
    ],
    systemTitle: 'El problema rara vez está en un solo departamento. Está en el sistema.',
    systemBody: 'El síntoma visible puede ser el precio, la delegación o la operación. La restricción de fondo suele estar en el sistema que los conecta. Un problema de precios puede ser un problema de estrategia. Un problema de delegación puede ser un problema de arquitectura de decisiones. Un problema operativo puede ser un problema estructural. El diagnóstico precede a la prescripción porque las soluciones aisladas rara vez cambian el sistema.',
    diagramLabels: ['Estrategia', 'Economía', 'Operaciones', 'Decisiones', 'Dependencias'],
    methodTitle: 'Antes de recomendar un programa, diagnosticamos la empresa.',
    methodBody: 'Diagnosticar → Identificar → Recomendar → Ejecutar → Reevaluar. El primer paso no es elegir un servicio. Es entender qué necesita realmente la empresa.',
    integrationTitle: 'Estrategia empresarial y discernimiento profético, integrados en la misma decisión.',
    integrationBody: 'La estrategia empresarial nos ayuda a entender qué está haciendo la empresa. El discernimiento profético guiado por el Espíritu Santo nos ayuda a buscar lo que requiere discernimiento más allá del análisis. El trabajo es más sólido cuando ambos informan la misma decisión práctica.',
    blueprintTitle: 'Un proceso diagnóstico antes de recomendar un programa.',
    blueprintBody: 'La Radiografía Empresarial Profética produce una imagen documentada de tu empresa, aclara la restricción u oportunidad más importante e identifica la siguiente intervención adecuada cuando esa sea la decisión correcta.',
    factStrip: 'USD $2.300 · 100 % en vivo, virtual y personalizado · Mínimo siete sesiones en vivo · Consultor empresarial y profeta · Hasta dos socios fundadores incluidos',
    blueprintCta: 'Conoce la Radiografía Empresarial Profética',
    decisionTitle: 'La Radiografía identifica la intervención.',
    decisionBody: 'Rentabilidad Maximizada, Optimización Operativa y Arquitectura de Independencia responden a restricciones diferentes. La primera intervención adecuada depende del diagnóstico. La Mentoría es opcional y continua.',
    finalCtaCopy: 'Construiste tu empresa para ganar libertad y terminaste siendo su empleado más indispensable. Puede ser rentable, pero no es la libertad para la que la construiste. Es hora de construir una empresa que pueda sobrevivir y crecer con menos dependencia de ti.',
    finalCtaButton: 'Aplicar a la Radiografía Empresarial Profética',
  },
  blueprintPage: {
    eyebrow: 'PUERTA DE ENTRADA DIAGNÓSTICA Y DE EVALUACIÓN',
    title: 'Radiografía Empresarial Profética',
    hero: 'Un proceso diagnóstico pago que combina análisis empresarial con discernimiento profético guiado por el Espíritu Santo para determinar qué necesita realmente tu empresa.',
    price: 'USD $2.300',
    format: '100 % en vivo, virtual y personalizado.',
    scope: 'Mínimo siete sesiones por videoconferencia en vivo con un consultor empresarial y un profeta. Cada sesión se enfoca en un tema o una pregunta empresarial específicos dentro del proceso diagnóstico. Cada socio fundador recibe una sesión profética individual. Se incluyen hasta dos socios fundadores. Cada socio fundador adicional a partir del tercero suma USD $100.',
    whatItIs: 'La Radiografía Empresarial Profética es un proceso diagnóstico sustantivo. No es una consulta gratuita, un curso grabado, un producto de autoservicio ni un cuestionario genérico. Produce una imagen documentada de tu empresa, aclara la restricción u oportunidad más importante e identifica la siguiente intervención adecuada cuando esa sea la decisión correcta. El documento diagnóstico es un resultado sustantivo por sí mismo: reúne el diagnóstico, el análisis y la experiencia aplicada durante el proceso.',
    whoItIsFor: 'Empresarios cristianos con empresas establecidas y operativas que reconocen que la rentabilidad, el crecimiento o las oportunidades todavía no han producido suficiente libertad para dejar de ser indispensables.',
    businessProblem: 'El consejo fragmentado puede abordar el precio, el marketing, la contabilidad, la delegación o la operación por separado mientras el sistema que los conecta permanece igual. La Radiografía examina la empresa como un todo.',
    integratedDiscernment: 'El análisis empresarial examina qué está ocurriendo en la empresa. El discernimiento profético guiado por el Espíritu Santo se integra en la búsqueda de dirección, tiempos, confirmación y aquello que requiere discernimiento más allá del análisis.',
    publicProcess: 'Diagnosticar → Identificar → Recomendar → Ejecutar → Reevaluar',
    afterBlueprint: 'La Radiografía orienta la siguiente intervención. Rentabilidad Maximizada, Optimización Operativa o Arquitectura de Independencia pueden ser adecuadas como primera intervención según el diagnóstico. La Mentoría Empresarial Profética es opcional y puede acompañar el proceso más amplio.',
    applicationBoundary: 'El Blueprint es el primer paso para conocernos. Te permite descubrir de primera mano cómo trabajamos y ver tu negocio con mayor claridad, para que puedas decidir si el siguiente paso tiene sentido.\n\nTambién es una oportunidad para ver si estamos alineados, tanto en lo profesional como en lo espiritual. Si es así, tú y tu empresa podrían pasar a uno de nuestros programas principales.\n\nSea cual sea el caso, el Blueprint tiene un gran valor por sí mismo: es un diagnóstico documentado que puede guiar tus decisiones, continúes o no con nosotros.',
    cta: 'Aplicar a la Radiografía Empresarial Profética',
  },
  methodologyPage: {
    title: 'Cómo avanzamos del diagnóstico a la intervención.',
    intro: 'Diagnosticamos la empresa completa antes de recomendar qué cambiar. El método muestra cómo avanzan juntos el análisis empresarial, el discernimiento profético, la interpretación, la intervención, la ejecución y la reevaluación.',
    stages: [
      { num: '01', title: 'Diagnóstico Empresarial', desc: 'Examinamos la economía, las operaciones, la estructura, las decisiones, las dependencias y las oportunidades que están dando forma a la empresa.' },
      { num: '02', title: 'Discernimiento Profético', desc: 'Buscamos discernimiento guiado por el Espíritu Santo junto con el análisis empresarial, incluyendo dirección, confirmación, temporadas, riesgos, tiempos y preguntas estratégicas.' },
      { num: '03', title: 'Interpretación Estratégica', desc: 'Integramos la evidencia y el discernimiento en una imagen coherente de lo que realmente está restringiendo a la empresa.' },
      { num: '04', title: 'Intervención', desc: 'Recomendamos la siguiente intervención adecuada. Ningún programa se prescribe por defecto.' },
      { num: '05', title: 'Ejecución', desc: 'Avanzamos hacia el trabajo práctico con un enfoque claro y progreso verificable.' },
      { num: '06', title: 'Reevaluación', desc: 'Revisamos qué cambió y si otra intervención realmente sirve a la empresa.' },
    ],
    integration: 'La estrategia empresarial nos ayuda a entender qué está haciendo la empresa. El discernimiento profético nos ayuda a buscar lo que requiere discernimiento más allá del análisis. El trabajo es más sólido cuando ambos informan la misma decisión práctica.',
    biblicalHeading: 'El discernimiento profético y la responsabilidad práctica van juntos.',
    biblicalBody: [
      'La Escritura nunca separa escuchar a Dios de actuar conforme a lo que Él dice.',
      'Una viuda agobiada por las deudas acude a Eliseo, recibe instrucciones específicas y obedece. Lo poco que tiene en sus manos se convierte en provisión (2 Reyes 4:1–7). José, atribuyéndole a Dios la interpretación, convierte los sueños del faraón en una estrategia que lleva a una nación a superar la hambruna (Génesis 41). Josafat llama a Judá a confiar en Dios, creer a sus profetas y seguir adelante (2 Crónicas 20:20). Personas distintas, crisis distintas, la misma respuesta: escucharon, obedecieron y la dirección de Dios se convirtió en acción.',
      'Nada de esto es una fórmula para el éxito fácil. Es un patrón: el consejo profético es una de las maneras en que Dios guía a quienes están dispuestos a escuchar y son lo bastante valientes para seguir. Sobre ese fundamento ayudamos a los líderes empresariales a edificar sus empresas.',
    ],
    cta: 'Aplicar a la Radiografía Empresarial Profética',
  },
  programsPage: {
    title: 'La Radiografía identifica la intervención.',
    intro: 'Company of Profits no comienza asignando un programa desde un menú de servicios. La Radiografía Empresarial Profética diagnostica primero la empresa. La siguiente intervención depende de la restricción u oportunidad más importante.',
    programs: [
      { name: 'Rentabilidad Maximizada', desc: 'Para empresas cuya principal restricción es económica: precios, márgenes, economía de clientes u ofertas, estructura de costos, capital de trabajo, composición de ingresos u otro problema de rentabilidad identificado en el diagnóstico.', category: 'core' },
      { name: 'Optimización Operativa', desc: 'Para empresas cuya principal restricción está en la estructura operativa: procesos, roles, decisiones, transferencias de tareas, rendición de cuentas, estándares de entrega o fricciones recurrentes que siguen regresando al fundador.', category: 'core' },
      { name: 'Arquitectura de Independencia', desc: 'Para empresas cuya principal restricción es la dependencia del fundador: decisiones, relaciones, conocimiento u operación diaria que todavía dependen demasiado de una sola persona.', category: 'core' },
      { name: 'Mentoría Empresarial Profética', desc: 'Una relación continua y opcional de consejo empresarial y discernimiento profético guiado por el Espíritu Santo, disponible antes, durante o después de los programas principales cuando se necesita apoyo adicional y la relación avanza.', category: 'mentorship' },
      { name: 'Riqueza de Reino e Impacto', desc: 'En desarrollo para una etapa futura en torno a la capacidad de generar riqueza, la mayordomía y el impacto con propósito.', category: 'future' },
    ],
    cta: 'Comienza con la Radiografía Empresarial Profética',
    viewDetails: 'Ver detalles',
  },
  whyPage: {
    title: 'Por qué Company of Profits',
    intro: 'Trabajamos con empresarios y fundadores cristianos que quieren integrar una estrategia empresarial seria con un discernimiento profético genuino. Esa combinación cambia lo que diagnosticamos, cómo decidimos y qué recomendamos después.',
    themes: [
      { title: 'Rentabilidad', desc: 'La rentabilidad es el recurso que hace posible la libertad, la capacidad de generar riqueza y el impacto. Abordamos la economía de la empresa teniendo esa realidad en cuenta.' },
      { title: 'Diagnóstico del sistema completo', desc: 'Buscamos las relaciones entre los síntomas en lugar de prescribir una solución aislada para cada departamento.' },
      { title: 'Independencia del fundador', desc: 'Una empresa rentable no debería exigir que el fundador siga siendo su sistema operativo. Examinamos las estructuras, decisiones y dependencias que mantienen ese patrón.' },
      { title: 'Discernimiento integrado', desc: 'El discernimiento profético guiado por el Espíritu Santo es parte del trabajo central. Se integra en las decisiones estratégicas en lugar de añadirse como una capa espiritual ornamental.' },
      { title: 'Alcance', desc: 'El discernimiento profético orienta la búsqueda de dirección; no reemplaza el trabajo práctico de tomar decisiones y ejecutarlas.' },
      { title: 'Afinidad', desc: 'Company of Profits es para empresarios cristianos dispuestos a integrar ambas dimensiones. La Radiografía es el punto de partida.' },
    ],
    cta: 'Conoce cómo funciona la Radiografía',
  },
  aboutPage: {
    title: 'Sobre Company of Profits',
    firmOpening: 'Company of Profits es una firma de consultoría estratégica de negocios y guía profética para empresarios cristianos establecidos. Trabajamos en la intersección entre rentabilidad, independencia del fundador, sistemas empresariales y discernimiento profético guiado por el Espíritu Santo.',
    purpose: 'Su propósito es ayudar a empresarios cristianos a construir empresas que produzcan rentabilidad, libertad, capacidad de generar riqueza e impacto duradero, sin que el fundador tenga que seguir siendo el sistema operativo.',
    namingHeading: '¿Por qué el nombre "Company of Profits"?',
    namingStory: [
      'En inglés, "company" puede significar tanto empresa como grupo de personas, mientras "profits" evoca "prophets". El nombre es intencional: creemos que la rentabilidad saludable y el discernimiento profético pertenecen al mismo trabajo serio.',
      'También toma como referencia la expresión "una compañía de profetas" de 1 Samuel 10:10. En ese pasaje, el Espíritu de Dios viene sobre Saúl y él profetiza entre los profetas; el texto no dice que la cercanía, por sí sola, haya causado ese cambio.',
      'Para Company of Profits, el nombre expresa nuestro compromiso de ayudar a empresarios cristianos a tomar decisiones más sabias mediante estrategia seria y discernimiento guiado por el Espíritu Santo.',
    ],
    founderLabel: 'EL FUNDADOR',
    founderName: 'Paul Huguet',
    biography: 'Es un empresario y asesor estratégico, con casi dos décadas de experiencia creando, operando, escalando y asesorando empresas en múltiples industrias y mercados, incluido el ecosistema de startups y venture capital de Silicon Valley, donde vivió durante casi dos años. Su camino empresarial y un encuentro profundo con el Espíritu Santo lo llevaron a reconocer que la estrategia humana por sí sola no siempre es suficiente; algunas decisiones empresariales requieren discernimiento profético. Hoy, Paul lidera Company of Profits y supervisa el equipo de consultores empresariales y profetas de la firma, integrando la estrategia empresarial con el discernimiento profético para servir a empresarios y fundadores cristianos.',
    callingStory: 'Después de varias temporadas dedicado a la consultoría y a la construcción de negocios, Paul tomó una decisión firme: nunca volvería a la consultoría. Su verdadera pasión era crear, estructurar y escalar empresas. Pero durante un período de profunda convicción espiritual, comprendió que Dios lo llamaba a servir a otros empresarios cristianos. Se resistió, porque la consultoría era la única puerta que había cerrado para siempre. Sin embargo, el llamado nunca se apagó y, con el tiempo, reconoció que la firma que debía construir, para empoderar a empresarios con mentalidad de Reino en todo el mundo, era Company of Profits.',
    cta: 'Aplicar a la Radiografía Empresarial Profética',
  },
  faqPage: {
    title: 'Preguntas Frecuentes',
    subtitle: 'Respuestas para ayudarte a entender cómo trabajamos.',
    faqs: [
      { q: '¿Para quién es Company of Profits?', a: 'Company of Profits trabaja con empresarios cristianos cuyas empresas están establecidas, operativas y listas para un diagnóstico estratégico serio. El proceso está diseñado para personas dispuestas a integrar estrategia empresarial y discernimiento profético guiado por el Espíritu Santo.' },
      { q: '¿La Radiografía Empresarial Profética es de pago?', a: 'Sí. El precio es de USD $2.300.' },
      { q: '¿Qué incluye la Radiografía?', a: 'La Radiografía es 100 % en vivo, virtual y personalizada, con mínimo siete sesiones por videoconferencia junto con un consultor empresarial y un profeta. Cada sesión en vivo se enfoca en un tema o una pregunta empresarial específicos dentro del proceso diagnóstico. Cada socio fundador recibe una sesión profética individual. Se incluyen hasta dos socios fundadores. Cada socio fundador adicional a partir del tercero suma USD $100.' },
      { q: '¿Qué sucede después de aplicar?', a: 'Revisamos la aplicación y te comunicamos el siguiente paso. La revisión considera si la Radiografía es adecuada para la empresa y si existe suficiente afinidad estratégica, espiritual y relacional para avanzar.' },
      { q: '¿Aplicar significa que ya fui aceptado?', a: 'No. Aplicar inicia una revisión. No significa que hayas sido aceptado en la Radiografía ni en un programa posterior.' },
      { q: '¿La guía profética está incluida?', a: 'Sí. El discernimiento profético se integra en el trabajo central. El proceso principal no se ofrece como una versión únicamente estratégica.' },
      { q: '¿Los programas se eligen antes o después del diagnóstico?', a: 'Después del diagnóstico. La Radiografía ayuda a identificar la restricción u oportunidad más importante y orienta la intervención adecuada.' },
      { q: '¿Arquitectura de Independencia puede ser el primer programa?', a: 'Sí. Arquitectura de Independencia puede ser la primera intervención cuando la dependencia del fundador sea la principal restricción identificada en el diagnóstico.' },
      { q: '¿El trabajo es en vivo y remoto?', a: 'Sí. La Radiografía es 100 % en vivo, virtual y personalizada. No es un curso grabado ni un producto de autoservicio.' },
      { q: '¿Qué recibo en la Radiografía?', a: 'Recibes una imagen documentada de la empresa, claridad sobre la principal restricción u oportunidad y una recomendación sobre la intervención adecuada. El documento diagnóstico es un resultado sustantivo por sí mismo: reúne el diagnóstico, el análisis y la experiencia aplicada durante el proceso.' },
      { q: '¿Qué sucede si no existe suficiente afinidad para avanzar?', a: 'La aplicación puede no continuar o podemos solicitar una aclaración adicional. No prometemos aceptación ni un programa posterior.' },
      { q: '¿Completar la Radiografía garantiza un programa posterior?', a: 'No. Completar la Radiografía no garantiza la admisión a un programa posterior. La Radiografía tiene valor como proceso diagnóstico aunque no continúe ningún programa.' },
      { q: '¿La Mentoría es obligatoria?', a: 'No. La Mentoría Empresarial Profética es opcional y puede acompañar, seguir o ubicarse entre otros procesos cuando una relación continua sea necesaria.' },
      { q: '¿Riqueza de Reino e Impacto ya está disponible?', a: 'Está en desarrollo y actualmente no acepta aplicaciones.' },
      { q: '¿Company of Profits reemplaza la asesoría profesional o pastoral?', a: 'No. Company of Profits ofrece consultoría estratégica y discernimiento profético para decisiones empresariales. Busca el acompañamiento profesional o pastoral apropiado para asuntos que estén fuera de ese alcance.' },
    ],
  },
  insightsPage: {
    title: 'Insights para empresarios que están construyendo rentabilidad, libertad y capacidad duradera.',
    intro: 'Ideas prácticas sobre rentabilidad, dependencia del fundador, sistemas operativos, decisiones estratégicas, liderazgo, mayordomía y discernimiento profético guiado por el Espíritu Santo en los negocios.',
    featuredLabel: 'Insight destacado',
    cardCta: 'Leer el insight',
    emptyTitle: 'La biblioteca de Insights se está construyendo con cuidado.',
    emptyBody: 'Aquí aparecerán los artículos publicados; mientras tanto, la Radiografía Empresarial Profética es el punto de partida para examinar tu empresa dentro de su contexto.',
    emptyCta: 'Conoce la Radiografía Empresarial Profética',
    articleCta: 'Si esta pregunta está presente en tu empresa, la Radiografía es el espacio para examinarla dentro de su contexto.',
    loading: 'Cargando insights...',
    error: 'No pudimos cargar la biblioteca de Insights. Por favor intenta más tarde.',
  },
  applyPage: {
    title: 'Aplicar a la Radiografía Empresarial Profética',
    intro: 'La aplicación nos ayuda a entender tu empresa y evaluar si la Radiografía es el siguiente paso adecuado. No solicitamos documentos financieros sensibles, y enviar la aplicación no significa que hayas sido aceptado.',
    sectionHeading: 'Cuéntanos dónde está hoy tu empresa y qué crees que necesita cambiar.',
    helper: 'Responde con el nivel de detalle útil para una primera revisión. No incluyas contraseñas, documentos confidenciales, datos bancarios ni información personal sensible que no sea necesaria en esta etapa.',
    stepLabels: { step: 'Paso', of: 'de', step1: 'Paso 1 — Fundador y empresa', step2: 'Paso 2 — Contexto empresarial', step3: 'Paso 3 — Reto, resultado y compatibilidad' },
    next: 'Continuar',
    back: 'Atrás',
    submit: 'Enviar aplicación',
    submitting: 'Enviando...',
    errorSummary: 'Por favor revisa lo siguiente:',
    fields: {
      fullName: { label: 'Nombre completo', placeholder: 'Tu nombre completo', required: true },
      email: { label: 'Correo electrónico de trabajo', placeholder: 'tu@empresa.com', required: true },
      companyName: { label: 'Nombre de la empresa', placeholder: 'El nombre de tu empresa', required: true },
      website: { label: 'Sitio web de la empresa', placeholder: 'https://...' },
      country: { label: 'País donde opera principalmente', placeholder: 'Selecciona un país', required: true, options: [
        { value: 'US', label: 'Estados Unidos' }, { value: 'CA', label: 'Canadá' }, { value: 'MX', label: 'México' },
        { value: 'AR', label: 'Argentina' }, { value: 'BR', label: 'Brasil' }, { value: 'CL', label: 'Chile' },
        { value: 'CO', label: 'Colombia' }, { value: 'PE', label: 'Perú' }, { value: 'VE', label: 'Venezuela' },
        { value: 'EC', label: 'Ecuador' }, { value: 'UY', label: 'Uruguay' }, { value: 'PY', label: 'Paraguay' },
        { value: 'BO', label: 'Bolivia' }, { value: 'CR', label: 'Costa Rica' }, { value: 'PA', label: 'Panamá' },
        { value: 'DO', label: 'República Dominicana' }, { value: 'GT', label: 'Guatemala' }, { value: 'ES', label: 'España' },
        { value: 'GB', label: 'Reino Unido' }, { value: 'DE', label: 'Alemania' }, { value: 'FR', label: 'Francia' },
        { value: 'IT', label: 'Italia' }, { value: 'PT', label: 'Portugal' }, { value: 'NL', label: 'Países Bajos' },
        { value: 'AU', label: 'Australia' }, { value: 'NZ', label: 'Nueva Zelanda' }, { value: 'ZA', label: 'Sudáfrica' },
        { value: 'NG', label: 'Nigeria' }, { value: 'KE', label: 'Kenia' }, { value: 'IN', label: 'India' },
        { value: 'SG', label: 'Singapur' }, { value: 'AE', label: 'Emiratos Árabes Unidos' }, { value: 'other', label: 'Otro' },
      ]},
      preferredLanguage: { label: 'Idioma preferido', placeholder: 'Selecciona...', required: true, options: [
        { value: 'en', label: 'Inglés' }, { value: 'es', label: 'Español' },
      ]},
      industry: { label: 'Industria o modelo de negocio', placeholder: 'Ej. Manufactura, SaaS, Servicios...', required: true },
      employees: { label: 'Número aproximado de empleados', placeholder: 'Selecciona...', required: true, options: [
        { value: '1-9', label: '1–9' }, { value: '10-24', label: '10–24' }, { value: '25-49', label: '25–49' },
        { value: '50-99', label: '50–99' }, { value: '100-plus', label: '100+' },
      ]},
      founderCount: { label: 'Socios fundadores activos', placeholder: 'Ingresa el número (1–20)', required: true },
      primaryMarket: { label: 'Mercado principal, si es diferente del país', placeholder: 'Ej. Norteamérica, Europa, América Latina...' },
      profitabilityContext: { label: 'Contexto actual de rentabilidad', placeholder: 'Selecciona...', required: true, options: [
        { value: 'above-break-even', label: 'Por encima del punto de equilibrio' },
        { value: 'approximately-break-even', label: 'Aproximadamente en equilibrio' },
        { value: 'below-break-even', label: 'Por debajo del punto de equilibrio' },
        { value: 'prefer-to-discuss', label: 'Prefiero conversarlo' },
      ]},
      dependencyLevel: { label: '¿Qué tan dependiente es la empresa de sus fundadores?', placeholder: 'Selecciona...', required: true, options: [
        { value: 'extremely-high', label: 'Extremadamente alta' },
        { value: 'high', label: 'Alta' },
        { value: 'moderate', label: 'Moderada' },
        { value: 'low', label: 'Baja' },
      ]},
      primaryConstraint: { label: 'Reto empresarial más importante hoy', placeholder: 'Describe el problema más importante que enfrentas...', required: true },
      desiredChange: { label: '¿Qué cambio haría más valiosa la empresa en los próximos 12–18 meses?', placeholder: 'Describe el cambio que haría la mayor diferencia...', required: true },
      christianAlignment: { label: '¿Te identificas como empresario cristiano y estás abierto a integrar estrategia empresarial con discernimiento profético?', placeholder: 'Selecciona...', required: true, options: [
        { value: 'yes-both', label: 'Sí, me identifico como empresario cristiano y estoy abierto a ambos' },
        { value: 'questions', label: 'Tengo preguntas sobre esto' },
        { value: 'no', label: 'No' },
      ]},
      phone: { label: 'Teléfono', placeholder: 'Tu número de teléfono', help: 'Opcional. Máximo 40 caracteres.' },
      source: { label: '¿Cómo te enteraste sobre Company of Profits?', placeholder: 'Selecciona...', options: [
        { value: 'linkedin', label: 'LinkedIn' }, { value: 'instagram', label: 'Instagram' },
        { value: 'referral', label: 'Referido' }, { value: 'search-engine', label: 'Motor de búsqueda' },
        { value: 'other', label: 'Otro' },
      ]},
      sourceDetail: { label: 'Detalle de la fuente', placeholder: 'Ej. el nombre de una persona, un grupo, una página específica...', help: 'Opcional. Máximo 160 caracteres.' },
      additionalContext: { label: 'Contexto adicional', placeholder: 'Algo más que quieras que sepamos en esta etapa...', help: 'No incluyas documentos confidenciales ni información personal sensible.' },
    },
    propheticQuestionsHelper: 'Si tienes preguntas sobre la dimensión cristiana o profética, puedes compartirlas aquí. No incluyas detalles espirituales o personales sensibles.',
    founderPricingNote: 'El alcance base de la Radiografía incluye hasta 2 socios fundadores activos. Los socios adicionales tienen un costo de +USD $100 por socio a partir del tercero.',
    consentRequired: 'Al enviar esta aplicación, autorizas a Company of Profits a utilizar la información que proporcionas para revisar tu aplicación, evaluar si la Radiografía es adecuada para tu empresa y comunicarse contigo al respecto. Consulta nuestra Política de Privacidad.',
    consentInsights: 'Quiero recibir Insights de Company of Profits.',
    successTitle: 'Recibimos tu aplicación.',
    successBody: 'La revisaremos y evaluaremos el siguiente paso. Enviar la aplicación no significa ser aceptado ni garantiza la admisión a la Radiografía Empresarial Profética o a un programa posterior.',
    duplicate: 'Ya recibimos una aplicación con estos datos. No es necesario enviarla de nuevo.',
    errorTitle: 'No pudimos confirmar el envío.',
    errorBody: 'Tu información permanece en esta página. Intenta nuevamente.',
    requiredNote: 'Los campos marcados con * son requeridos.',
    fieldError: 'Este campo es requerido.',
    emailError: 'Por favor ingresa un correo válido.',
    minLengthError: 'Por favor ingresa al menos 20 caracteres.',
    websiteError: 'Por favor ingresa una dirección válida (http o https).',
  },
  contactPage: {
    title: 'Contáctanos',
    intro: 'Usa este canal para alianzas, asociaciones, referidos, medios, conferencias u otra consulta empresarial. Si quieres que evaluemos tu empresa para la Radiografía Empresarial Profética, utiliza el formulario separado.',
    fields: { name: 'Nombre', company: 'Empresa', country: 'País', email: 'Correo electrónico', message: 'Mensaje' },
    cta: 'Enviar mensaje',
    privacy: 'Utilizaremos tu información para revisar y responder este mensaje. Consulta nuestra Política de Privacidad.',
    success: 'Recibimos tu mensaje. Lo revisaremos y responderemos a través del correo electrónico que proporcionaste.',
    error: 'No pudimos enviar tu mensaje. Tu información permanece en esta página. Intenta nuevamente.',
    applyDistinction: '¿Buscas un diagnóstico empresarial? Aplica a la Radiografía Empresarial Profética.',
    fieldError: 'Este campo es requerido.',
    emailError: 'Por favor ingresa un correo válido.',
  },
  cookieBanner: {
    text: 'Company of Profits utiliza cookies necesarias para que el sitio funcione. Con tu permiso, las herramientas de analítica nos ayudan a entender el uso agregado y mejorar la experiencia. Consulta nuestra Política de Cookies.',
    accept: 'Aceptar analítica',
    necessary: 'Solo necesarias',
    settings: 'Configurar cookies',
  },
  seo: {
    homeTitle: 'Company of Profits — Consultoría Estratégica y Guía Profética',
    homeDesc: 'Consultoría estratégica de negocios y guía profética para empresarios cristianos establecidos. Construye una empresa más rentable y menos dependiente de ti.',
    blueprintTitle: 'Radiografía Empresarial Profética — Company of Profits',
    blueprintDesc: 'Un proceso diagnóstico pago que combina análisis empresarial con discernimiento profético guiado por el Espíritu Santo. USD $2.300. En vivo, virtual y personalizado.',
    methodologyTitle: 'Metodología — Company of Profits',
    methodologyDesc: 'Cómo trabaja Company of Profits: diagnóstico, discernimiento profético, interpretación estratégica, intervención, ejecución y reevaluación. Estrategia empresarial y discernimiento profético integrados.',
    programsTitle: 'Programas — Company of Profits',
    programsDesc: 'Intervenciones estratégicas seleccionadas después del diagnóstico. Rentabilidad Maximizada, Optimización Operativa, Arquitectura de Independencia, Riqueza de Reino e Impacto y Mentoría Empresarial Profética.',
    whyTitle: 'Por qué Company of Profits — Company of Profits',
    whyDesc: 'Estrategia empresarial seria, independencia del fundador, diagnóstico del sistema completo y discernimiento guiado por el Espíritu Santo — integrados para empresarios cristianos.',
    aboutTitle: 'Sobre Company of Profits',
    aboutDesc: 'Company of Profits es una firma de consultoría estratégica de negocios y guía profética para empresarios cristianos establecidos. Conoce la firma y su fundador.',
    insightsTitle: 'Insights — Company of Profits',
    insightsDesc: 'Ideas prácticas sobre rentabilidad, dependencia del fundador, sistemas operativos, decisiones estratégicas, liderazgo, mayordomía y discernimiento profético en los negocios.',
    faqTitle: 'Preguntas Frecuentes — Company of Profits',
    faqDesc: 'Respuestas sobre la Radiografía Empresarial Profética, los programas, la guía profética, el ajuste, la admisión y cómo trabaja Company of Profits.',
    applyTitle: 'Aplicar a la Radiografía Empresarial Profética — Company of Profits',
    applyDesc: 'Envía tu aplicación para la Radiografía Empresarial Profética. La aplicación nos ayuda a entender tu empresa y evaluar si la Radiografía es el siguiente paso adecuado.',
    contactTitle: 'Contáctanos — Company of Profits',
    contactDesc: 'Contacta a Company of Profits para alianzas, asociaciones, referidos, medios, conferencias u otras consultas empresariales.',
  },
};

export const translations: Record<Lang, Translation> = { en, es };
