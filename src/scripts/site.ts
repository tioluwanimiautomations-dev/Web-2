/**
 * ST AI Agency — site-wide behaviour (vanilla, ~2.5 KB minified).
 * Sticky header · mobile menu · scroll reveal · hero drift · demo-safe forms · example phones
 */

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

/* ---------- sticky header: floats once the page hero has scrolled away ---------- */
const header = document.getElementById('hdr');
const hero = document.querySelector<HTMLElement>('[data-hero]');

if (header) {
  let ticking = false;
  const update = () => {
    const threshold = hero ? hero.offsetHeight - 120 : 120;
    header.classList.toggle('float', window.scrollY > threshold);
    ticking = false;
  };
  update();
  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true },
  );
  window.addEventListener('resize', update);
}

/* ---------- mobile menu ---------- */
const menu = document.getElementById('mob');
const burger = document.getElementById('burger');
const closeBtn = document.getElementById('mobX');

if (menu && burger && closeBtn) {
  const focusables = () =>
    Array.from(menu.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')).filter((el) => el.offsetParent !== null);

  let hideTimer: number | undefined;

  const open = () => {
    window.clearTimeout(hideTimer);
    menu.hidden = false;
    // force a style flush so the opacity/transform transition runs from the closed state,
    // and so the close button is visible (focusable) before we move focus to it
    void menu.offsetWidth;
    menu.classList.add('open');
    burger.setAttribute('aria-expanded', 'true');
    document.body.classList.add('menu-open');
    closeBtn.focus();
  };

  const close = (returnFocus = true) => {
    if (menu.hidden) return;
    menu.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
    hideTimer = window.setTimeout(() => (menu.hidden = true), reduceMotion.matches ? 0 : 350);
    if (returnFocus) burger.focus();
  };

  burger.addEventListener('click', open);
  closeBtn.addEventListener('click', () => close());
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => close(false)));

  document.addEventListener('keydown', (e) => {
    if (menu.hidden) return;
    if (e.key === 'Escape') {
      e.preventDefault();
      close();
      return;
    }
    // keep keyboard focus inside the open dialog
    if (e.key === 'Tab') {
      const items = focusables();
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  // menu is only for narrow screens — close it if the viewport grows past the breakpoint
  window.matchMedia('(min-width: 1201px)').addEventListener('change', (mq) => mq.matches && close(false));
}

/* ---------- scroll reveal ---------- */
const reveal = document.querySelectorAll<HTMLElement>('.rv');
if ('IntersectionObserver' in window && !reduceMotion.matches) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -50px 0px' },
  );
  reveal.forEach((el) => io.observe(el));
} else {
  reveal.forEach((el) => el.classList.add('in'));
}

/* ---------- slow drift on the hero photograph ---------- */
const drift = document.querySelector<HTMLImageElement>('.hero__media img');
if (drift) {
  let queued = false;
  const parallax = () => {
    queued = false;
    if (reduceMotion.matches || window.innerWidth <= 820) {
      drift.style.transform = 'scale(1.04)';
      return;
    }
    const y = Math.min(window.scrollY, 800);
    drift.style.transform = `scale(1.04) translateY(${y * 0.07}px)`;
  };
  const queue = () => {
    if (!queued) {
      queued = true;
      requestAnimationFrame(parallax);
    }
  };
  parallax();
  window.addEventListener('scroll', queue, { passive: true });
  window.addEventListener('resize', queue);
}

/* ---------- forms ----------
 * Forms without an `action` are in demo mode: nothing is sent anywhere and the
 * visitor is told so. Configure an endpoint in src/config/site.ts (see README).
 */
document.querySelectorAll<HTMLFormElement>('form.js-form').forEach((form) => {
  const status = form.querySelector<HTMLElement>('.form__status');
  form.addEventListener('submit', (e) => {
    if (form.dataset.demo !== 'true') return;
    e.preventDefault();
    if (status) {
      status.textContent =
        'Demo mode: this form is not connected yet, so nothing was sent. Connect a form provider in src/config/site.ts.';
    }
  });
});

/* ---------- example phones: Approve / Decline show what would happen ---------- */
document.querySelectorAll<HTMLElement>('[data-attorney-phone]').forEach((phone) => {
  const buttons = phone.querySelectorAll<HTMLButtonElement>('[data-choice]');
  const outcomes = phone.querySelectorAll<HTMLElement>('[data-outcome]');
  outcomes.forEach((o) => (o.hidden = true));
  buttons.forEach((b) =>
    b.addEventListener('click', () => {
      outcomes.forEach((o) => (o.hidden = o.dataset.outcome !== b.dataset.choice));
      // inside a scrolling app screen, bring the result into view like the app would
      const pane = b.closest<HTMLElement>('.slack__feed, .mail__msg');
      if (pane) pane.scrollTo({ top: pane.scrollHeight, behavior: reduceMotion.matches ? 'auto' : 'smooth' });
      buttons.forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
    }),
  );
});

/* ---------- phone deck: the approval arrives in Slack, then by email, once ----------
 * Phones see the two screens as a swipe deck with two tabs; wider screens see them side by side.
 * Without JavaScript, or with reduced motion, every line is simply there.
 */
const wait = (ms: number) => new Promise<void>((resolve) => window.setTimeout(resolve, ms));

document.querySelectorAll<HTMLElement>('[data-deck]').forEach((deck) => {
  const track = deck.querySelector<HTMLElement>('[data-deck-track]');
  const cards = Array.from(deck.querySelectorAll<HTMLElement>('.door'));
  const tabs = Array.from(deck.querySelectorAll<HTMLButtonElement>('[data-deck-tab]'));
  const inboxes = Array.from(deck.querySelectorAll<HTMLElement>('[data-attorney-phone]'));
  if (!track || cards.length < 2) return;

  const offset = (i: number) => cards[i].offsetLeft - cards[0].offsetLeft;
  const goTo = (i: number) => track.scrollTo({ left: offset(i), behavior: reduceMotion.matches ? 'auto' : 'smooth' });
  const setTab = (i: number) => tabs.forEach((t, j) => t.setAttribute('aria-pressed', String(i === j)));

  // the lit tab follows the scroll, except right after a tap (the last card can't scroll to the left edge)
  let pinnedTab = -1;
  let pinTimer = 0;
  track.addEventListener(
    'scroll',
    () => {
      if (pinnedTab >= 0) return;
      const step = offset(1) || 1;
      setTab(Math.max(0, Math.min(cards.length - 1, Math.round(track.scrollLeft / step))));
    },
    { passive: true },
  );

  let touched = false;
  const markTouched = () => {
    touched = true;
    inboxes.forEach((el) => el.classList.add('arrived'));
  };
  ['pointerdown', 'touchstart', 'wheel'].forEach((type) => track.addEventListener(type, markTouched, { passive: true }));
  tabs.forEach((t, i) =>
    t.addEventListener('click', () => {
      markTouched();
      pinnedTab = i;
      setTab(i);
      window.clearTimeout(pinTimer);
      pinTimer = window.setTimeout(() => (pinnedTab = -1), 900);
      goTo(i);
    }),
  );

  if (reduceMotion.matches || !('IntersectionObserver' in window)) return;
  inboxes.forEach((el) => el.classList.add('is-seq'));

  const play = async () => {
    for (let i = 0; i < inboxes.length && !touched; i++) {
      await wait(i === 0 ? 500 : 2200);
      if (touched) break;
      const card = inboxes[i].closest<HTMLElement>('.door');
      const index = card ? cards.indexOf(card) : -1;
      // scroll only if that phone isn't already fully on screen
      if (card && index > 0) {
        const left = card.offsetLeft - track.scrollLeft - cards[0].offsetLeft;
        if (left < 0 || left + card.offsetWidth > track.clientWidth - cards[0].offsetLeft + 1) {
          goTo(index);
          await wait(450);
        }
      }
      inboxes[i].classList.add('arrived');
    }
  };
  const io = new IntersectionObserver(
    (entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        io.disconnect();
        play();
      }
    },
    { threshold: 0.55 },
  );
  // start when the first phone is mostly on screen, so the visitor actually sees it land
  io.observe(cards[0]);
});
