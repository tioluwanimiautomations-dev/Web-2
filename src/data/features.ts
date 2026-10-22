import type { Feature } from '../types';

/** Checklist in the "You stay in control" section. Only statements the brief confirms are true. */
export const features: Feature[] = [
  { title: 'You approve every booking', description: 'Nothing lands on your calendar without your yes. Approve or Decline by text.' },
  { title: 'Never gives legal advice', description: 'It collects the facts. It never advises and never decides whether to take a case.' },
  { title: 'Conflict check first', description: 'It checks your own practice management system before you see the lead. A failed check is marked “conflict check pending”, never “no conflict”.' },
  { title: 'No call audio kept', description: 'Transcripts and the captured fields only. Your client list is never copied.' },
];
