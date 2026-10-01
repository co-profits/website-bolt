export const siteConfig = {
  companyName: 'Company of Profits',
  domain: 'https://www.companyofprofits.com',
  blueprintPrice: 'USD $2,300',
  contactEmail: '[OFFICIAL CONTACT EMAIL — CONFIGURE BEFORE LAUNCH]',
  analyticsId: 'G-LVETR27HGQ',
  clarityId: 'ylyrmu1odz',
  sanityProjectId: 'tue7ygdx',
  sanityDataset: 'production',
  sanityApiVersion: '2025-02-19',
  social: {
    linkedin: 'https://www.linkedin.com/company/companyofprofits/',
    instagramEn: 'https://www.instagram.com/companyofprofits',
    instagramEs: 'https://www.instagram.com/companyofprofits.es',
  },
  ogImage: '/assets/images/Company_of_Profits_Logo_Dark_bg.webp',
} as const;

export type Lang = 'en' | 'es';
