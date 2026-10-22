import type { ProcessStep } from '../types';

/** One call, end to end. Times are from the labeled example: a DUI arrest call at 11:40pm on a Saturday. */
export const processSteps: ProcessStep[] = [
  {
    number: '1',
    title: 'It answers',
    description:
      "Your firm's own number. Greets in English and switches to Spanish if the caller does. No voicemail, no message for Monday.",
    timing: 'Example: 11:40pm',
  },
  {
    number: '2',
    title: 'It captures and screens',
    description:
      'Name, callback number, charge, county, custody status and how they found you. Then a conflict check against your own system.',
    timing: 'Example: 11:41pm to 11:43pm',
  },
  {
    number: '3',
    title: 'It texts you',
    description:
      'One message with the facts and two choices. Approve books the consult and creates the matter. Decline sends the caller a respectful text.',
    timing: 'Example: 11:44pm, your call',
  },
];
