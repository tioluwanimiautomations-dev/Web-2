# PracticeOp website, option 2 (Web-2)

The PracticeOp site built on the [ST AI Agency](https://github.com/striviothemes/ST-AI-Agency)
theme exactly as designed, recoloured in shades of green, with sections PracticeOp can't honestly
fill removed and all copy from the PracticeOp brief (21 Oct 2026).

## Run it

Needs Node 22.12 or newer.

```bash
npm install
npm run dev      # http://localhost:4321
npm run dev -- --host   # also on your phone, same Wi-Fi: open the "Network" address
npm run build    # static site in dist/
```

## Home page, top to bottom

Hero (with the after-hours problems in the bar along its foot) · Systems PracticeOp builds ·
How it works · You stay in control · Free resources · Founding firm pilot · FAQ ·
Book a 25-minute intake audit · closing band.

Removed from the theme: client logos, customer results, stats, sectors, testimonial, team,
pricing, newsletter, blog, RSS, stock portraits.

## Free resources

One Markdown file per resource in `src/content/resources/`. Each becomes `/resources/<file-name>`.
To publish one: set `status: live` and `link: <Google Sheet URL>` in its frontmatter, and
replace the body text. Resource pages carry no booking pitch.

## Editing

- `src/config/site.ts`: name, CTA, email, booking URL (`bookingUrl`), social link.
- `src/data/*.ts`: all home page copy (hero, systems, steps, control checklist, pilot terms, FAQ).
- `src/styles/tokens.css`: the green palette (ST's token names kept).

## Open placeholders

Booking URL, contact email, founding slot count (3 or 5), mailing address, resource links,
privacy and terms review (analytics choice, review date, liability wording), Open Graph image
(currently the hero photo), domain (`SITE_URL`).

## Credits

- Theme: ST AI Agency by StrivioThemes, MIT (see `LICENSE`).
- Hero photo: "New York City at night HDR" by Paulo Barcellos Jr., CC BY-SA 2.0, via Wikimedia
  Commons, recoloured. Credited in the footer.
- Control section photo: "Apple-iphone-smartphone-desk" by www.Pixel.la Free Stock Photos, CC0,
  via Wikimedia Commons.
