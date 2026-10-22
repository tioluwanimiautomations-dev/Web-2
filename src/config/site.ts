import type { SiteConfig } from '../types';

/**
 * Central site configuration. Every component reads from here.
 * Empty values are open items: the pages show a visible [PLACEHOLDER] until they are filled.
 */
export const siteConfig: SiteConfig = {
  name: 'PracticeOp',
  brand: { prefix: 'Practice', accent: 'Op', suffix: '' },
  tagline: 'Intake systems for criminal defense firms.',
  description:
    'Intake system for criminal defense firms: every call, web form and ad lead answered 24/7 in English and Spanish, conflict-screened and booked, with the attorney approving each one by text.',
  lang: 'en',
  locale: 'en_US',

  // [PLACEHOLDER: contact email]
  email: '',
  // [PLACEHOLDER: phone number] Fill both and every Call now button dials it,
  // e.g. phone: '+1 (813) 555-0123', phoneHref: '+18135550123'.
  phone: '',
  phoneHref: '',
  callLabel: 'Call now',
  location: {
    label: 'Mailing address',
    // [PLACEHOLDER: mailing address, only once the founder confirms it is live]
    lines: [],
  },
  responseTime: 'A written reply before any call',

  footerBlurb: 'AI and operations systems for criminal defense firms. Starting with intake: every call answered, every booking approved by you.',
  copyright: `© ${new Date().getFullYear()} PracticeOp`,

  social: [{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/practiceop', icon: 'linkedin' }],

  seo: {
    titleSeparator: ' | ',
    defaultTitle: 'PracticeOp: intake system for criminal defense firms',
    // [PLACEHOLDER: 1200x627 Open Graph image]
    ogImage: '/images/hero.webp',
    ogImageAlt: 'PracticeOp, intake system for criminal defense firms.',
    twitterHandle: undefined,
    themeColor: '#155238',
  },

  cta: { label: 'Book a 25-minute intake audit', shortLabel: 'Book a 25-minute intake audit', href: '/#contact' },

  forms: {
    contactAction: '',
    newsletterAction: '',
    netlify: false,
  },
};

/** [PLACEHOLDER: booking URL. Founder must confirm cal.com/practiceop/audit or Calendly] */
export const bookingUrl = '';
