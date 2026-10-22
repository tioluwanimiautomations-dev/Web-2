import type { FAQItem } from '../types';

/** Answers use only facts stated in the PracticeOp brief. */
export const faqs: FAQItem[] = [
  {
    question: 'Does it give callers legal advice?',
    answer:
      'No. It collects the facts the attorney needs to decide: charge, county, custody status, how they found you. It never gives legal advice and never decides whether to take a case.',
  },
  {
    question: 'Who decides which consults get booked?',
    answer:
      'You do. Every lead comes to you as a text with Approve or Decline. Approve books the consult on your calendar and creates the matter. Decline sends the caller a respectful text. Nothing is booked without your yes.',
  },
  {
    question: 'What about Spanish-speaking callers?',
    answer:
      'Bilingual intake is built in, not an add-on. The caller picks the language by speaking it, and you get the summary in English.',
  },
  {
    question: 'We also take PI and family cases. Does that work?',
    answer: 'We build criminal intake. PI and family callers get routed and tagged, never qualified.',
  },
  {
    question: 'What happens to call recordings and our client list?',
    answer:
      "No call audio is kept, only transcripts and the captured fields. PracticeOp never copies your client list: conflict checks query your own practice management system and store only the result. Access is revoked when a firm leaves.",
  },
  {
    question: 'What do we keep?',
    answer: 'Your own phone number, website and calendar. Nothing is replaced.',
  },
  {
    question: 'What does it cost?',
    answer:
      'Fees and the monthly rate are covered on the 25-minute call, not on this site. Founding firms lock their monthly rate for 12 months.',
  },
];
