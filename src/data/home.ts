import type { SectionHeading } from '../types';

/** Copy for the homepage hero: the ratified one-liner from the brief. */
export const hero = {
  eyebrow: 'Intake for criminal defense firms',
  /** Each entry is one line of the headline; `tint` lines use the mint accent. */
  headline: [
    { text: 'Criminal defense firms', tint: false },
    { text: 'run on voicemail,', tint: false },
    { text: 'paper and guesswork.', tint: true },
  ],
  lead: 'I build the AI systems that replace them. Starting with intake: every call answered in English and Spanish, every signed case traced to its ad.',
  primaryCta: { label: 'Book a 25-minute intake audit', href: '/#contact' },
  image: '/images/hero.webp',
  credentials: [
    { icon: 'clock', label: 'Answered 24/7' },
    { icon: 'check-circle', label: 'English and Spanish' },
    { icon: 'shield-check', label: 'You approve every booking' },
  ] as const,
};

/** The bar along the foot of the hero: the after-hours problem, in the attorney's language. No statistics. */
export const heroProblems = [
  { value: 'After 5pm', label: 'The phone goes to voicemail.' },
  { value: 'The message', label: 'Nobody calls back before the family hires someone else.' },
  { value: 'The ad', label: "You can't tell which one actually signed a retainer." },
  { value: '11pm', label: "Arrests don't happen during office hours." },
];

export const sections: Record<'solutions' | 'platform' | 'process' | 'pilot' | 'insights' | 'faq' | 'contact', SectionHeading> = {
  solutions: {
    kicker: 'What PracticeOp builds',
    title: 'Systems built for<br>criminal defense.',
    lead: 'Intake is the first one, and the only one for sale today. The systems that follow are built on the same rule: the attorney stays in control.',
  },
  platform: {
    kicker: 'You stay in control',
    title: 'The attorney approves<br>every booking.',
    lead: 'The intake system collects the facts, checks for conflicts and puts the decision in front of you. That is all it does.',
  },
  process: {
    kicker: 'How it works',
    title: 'One call,<br>end to end.',
    lead: 'Example: a DUI arrest call at 11:40pm on a Saturday. Web forms and ad leads take the same path.',
  },
  pilot: {
    kicker: 'Founding firm pilot',
    title: 'A 30-day live pilot,<br>with a guarantee.',
    lead: 'For a small number of criminal defense firms in Florida and Texas. Fees and the monthly rate are covered on the call, not on this site.',
  },
  insights: {
    kicker: 'Free resources',
    title: 'Free tools for<br>the whole firm.',
    lead: 'Spreadsheets and text templates. No email, no login. Open it, make a copy, use it.',
  },
  faq: {
    kicker: 'Questions',
    title: 'Before you<br>book a call',
    lead: 'If yours is not here, ask it on the call.',
  },
  contact: {
    kicker: 'Intake audit',
    title: 'Book a 25-minute<br>intake audit',
    lead: "A look at how calls, forms and ad leads are handled after hours at your firm today, and whether it's worth fixing. If it isn't, that's the answer.",
  },
};

/** The pilot terms, word for word from the brief. No prices. */
export const pilotTerms = [
  { title: 'The pilot', body: '30 days, live, on your real calls, forms and ad leads.' },
  {
    title: 'The guarantee',
    body: 'Full refund of the pilot fee if fewer than 5 qualified after-hours leads are captured in 30 days. Misses caused by the intake system itself count against PracticeOp.',
  },
  {
    title: 'Qualified lead',
    body: "A new prospect with a criminal matter in the firm's state or counties, with name, number and charge captured, conflict-screened, and delivered to the attorney within 5 minutes.",
  },
  { title: 'After-hours', body: "Outside the firm's documented staffed hours, or unanswered after 4 rings or 20 seconds." },
  {
    title: 'Founding rate',
    body: 'Founding firms lock their monthly rate for 12 months. The rate covers the systems that follow intake: court-date and deadline tracking, then payment plans. Month-to-month after the pilot.',
  },
];

/** Call-to-action band above the footer. */
export const finalCta = {
  kicker: 'Founding slots close 15 December 2026',
  title: 'Stop losing the 11pm call.',
  lead: 'Twenty-five minutes on how your after-hours calls, forms and ad leads are handled today, and whether it is worth fixing.',
};
