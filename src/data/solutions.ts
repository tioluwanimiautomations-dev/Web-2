import type { Solution } from '../types';

/** "What PracticeOp builds". Intake is live; the rest follow it, with no delivery dates. */
export const solutions: Solution[] = [
  {
    number: '01',
    title: 'Intake system',
    description:
      'Every call, web form and ad lead answered 24/7 in English and Spanish. Charge, county and custody status captured, conflict-screened, and texted to you to approve. Live now.',
    href: '/#process',
    category: 'Live now',
  },
  {
    number: '02',
    title: 'Ad source tracking',
    description:
      'Part of intake. The system sits inside the call, so it is built to track which ad, form or page each signed case came from: cost per signed case, not cost per click.',
    href: '/#process',
    category: 'Part of intake',
  },
  {
    number: '03',
    title: 'Court-date and deadline tracking',
    description:
      'The next system after intake. Founding firms get it under the monthly rate they lock in, at no extra charge.',
    href: '/#pilot',
    category: 'Next',
  },
  {
    number: '04',
    title: 'Payment plans',
    description:
      'The system after court dates. Also covered by the founding rate.',
    href: '/#pilot',
    category: 'After that',
  },
];
