import type { Link, NavigationItem } from '../types';

/**
 * Header navigation. Homepage sections use "/#id" so the links work from every page.
 * Items with `matchPath` get aria-current when the visitor is on that page.
 */
export const mainNav: NavigationItem[] = [
  { label: 'Systems', href: '/#services' },
  { label: 'How it works', href: '/#process' },
  { label: 'Founding pilot', href: '/#pilot' },
  { label: 'Free resources', href: '/resources', matchPath: '/resources' },
  { label: 'FAQ', href: '/#faq' },
];

/** Mobile menu: same links; the booking button sits below them. */
export const mobileNav: NavigationItem[] = mainNav;

export interface FooterColumn {
  title: string;
  links: Link[];
}

export const footerColumns: FooterColumn[] = [
  {
    title: 'Intake system',
    links: [
      { label: 'Systems', href: '/#services' },
      { label: 'You stay in control', href: '/#platform' },
      { label: 'How it works', href: '/#process' },
      { label: 'Founding pilot', href: '/#pilot' },
      { label: 'FAQ', href: '/#faq' },
    ],
  },
  {
    title: 'Free resources',
    links: [
      { label: 'All free resources', href: '/resources' },
      { label: 'Flat-fee hourly rate', href: '/resources/flat-fee-real-hourly-rate-calculator' },
      { label: 'Partner week audit', href: '/resources/partner-week-audit' },
      { label: 'Client update texts', href: '/resources/client-update-text-pack' },
    ],
  },
];

export const legalLinks: Link[] = [
  { label: 'Data and privacy', href: '/data-and-privacy' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
];
