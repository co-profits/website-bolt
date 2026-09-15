export const siteConfig = {
  companyName: 'Company of Profits',
  domain: '[PRODUCTION DOMAIN — CONFIGURE BEFORE LAUNCH]',
  blueprintPrice: '[BLUEPRINT PRICE — CONFIGURE BEFORE LAUNCH]',
  contactEmail: '[OFFICIAL CONTACT EMAIL — CONFIGURE BEFORE LAUNCH]',
  contactPhone: '[OFFICIAL PHONE — CONFIGURE BEFORE LAUNCH OR REMOVE]',
  businessAddress: '[OFFICIAL BUSINESS ADDRESS — CONFIGURE BEFORE LAUNCH OR REMOVE]',
  privacyPolicyUrl: '[PRIVACY POLICY URL — CONFIGURE BEFORE LAUNCH]',
  termsUrl: '[TERMS URL — CONFIGURE BEFORE LAUNCH]',
  hubspotPortalId: '[HUBSPOT PORTAL ID — CONFIGURE BEFORE LAUNCH]',
  hubspotFormId: '[HUBSPOT FORM ID — CONFIGURE BEFORE LAUNCH]',
  wordpressApiUrl: '[VITE_WORDPRESS_API_URL — CONFIGURE BEFORE LAUNCH]',
  analyticsId: '[ANALYTICS MEASUREMENT ID — CONFIGURE BEFORE LAUNCH]',
  socialTwitter: '[SOCIAL URL — CONFIGURE OR REMOVE]',
  socialLinkedIn: '[SOCIAL URL — CONFIGURE OR REMOVE]',
  socialInstagram: '[SOCIAL URL — CONFIGURE OR REMOVE]',
  ogImage: '/og-image.png',
} as const;

export type Lang = 'en' | 'es';
