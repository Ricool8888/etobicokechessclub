# Etobicoke Chess Club — Site Handbook

This repository is the source of the club's public website
(<https://ricool8888.github.io/etobicokechessclub/> until the custom domain is
live). It is a plain static site: HTML pages, one shared stylesheet, and a few
small JavaScript files. There is no build step, no database, and no server —
GitHub Pages serves the files straight from the `main` branch.

This handbook is for the exec team who keep the site up to date. It explains
how the site is put together, how to change each part without touching code,
and what to check before publishing.

---

## 1. The five-minute version

| If you need to… | Edit this file |
| --- | --- |
| Post club news | `assets/posts.json` |
| Add or change a special event | `assets/events.json` |
| Say the club is closed on a date | `assets/events.json` (a "closed" entry) |
| Add a tournament or post results | `assets/tournaments.json` |
| Add photos | `assets/gallery.json` (and upload images to `assets/gallery/`) |
| Show an announcement at the top of the home page | `assets/banner.json` |
| Change club rules, intro text, meeting time or address | the page itself (`index.html`, `about.html`, …) |

Everything in `assets/*.json` is committed to the repository; there is no admin
panel. Visitors can read, search and filter, but they cannot submit anything.

**To publish a change:** edit the file on GitHub (the pencil icon), commit
straight to `main`, and wait a minute or two. GitHub Pages rebuilds the site
automatically. If a change is risky, make it on a branch and open a pull request
so a second exec member can look at it first.

---

## 2. What each page is for

| File | Public URL | Purpose |
| --- | --- | --- |
| `index.html` | `/` | Home: intro, weekly meeting card, club rules, puzzles and live games |
| `about.html` | `/about` | Mandate, vision statement, board of directors |
| `posts-and-news.html` | `/posts-and-news` | Blog / news list, from `assets/posts.json` |
| `events-calendar.html` | `/events-calendar` | Month + list calendar of meetings, events and closures |
| `tournaments.html` | `/tournaments` | Upcoming tournaments, past results, "your first tournament" |
| `gallery.html` | `/gallery` | Photo gallery |
| `faq.html` | `/faq` | Frequently asked questions |
| `privacy.html` | `/privacy` | Privacy policy |
| `accessibility.html` | `/accessibility` | Accessibility statement |

Pages are named with hyphens (`events-calendar.html`) and every internal link
leaves off `.html` — GitHub Pages serves `/about` from `about.html`
automatically. Keep new links in that form.

---

## 3. Wording that must not change

When modifying or replacing files, the following wording has to stay (update
the surrounding facts if they change, but do not delete or crowd these out):

- **Index page:** intro paragraphs, addresses of Second Cup, club rules
- **About us page:** mandate, vision statement, person profiles (board of directors)
- **Posts / news page:** partnership with the Second Cup
- **Events calendar page:** info paragraph
- **Tournaments page:** info paragraph
- **FAQ page:** all answers for the FAQ questions

Anyone editing a page listed here should read its existing copy first and keep
its meaning intact.

---

## 4. How each part of the site works

### Posts and news page

Posts come from `assets/posts.json`. To publish a new post, add an object to
that file (in the repo) and commit — visitors can read, search and filter posts,
but can't submit their own.

```json
{
  "id": "post-2026-11-10-club-championship",
  "date": "2026-11-10",
  "title": "Club Championship results",
  "category": "Announcement",
  "excerpt": "One sentence shown in the list.",
  "content": "Full post text. Use \\n\\n between paragraphs."
}
```

### Events calendar page

Weekly meetings show automatically every Friday (set in `assets/calendar.js`).
Special events come from `assets/events.json`. Click a day to view what's
scheduled. To add a new event yourself, edit `assets/events.json` directly in
the repo and commit the change — visitors can view the calendar but can't
submit events.

```json
[
  {
    "date": "2026-12-04",
    "time": "6:00 PM - 9:00 PM",
    "title": "Simul with a club champion",
    "description": "Play the club champion on one of twelve boards."
  }
]
```

**Club closures.** Add `"closed": true` to an entry to mark the club as closed
that day. The day gets an **X** in the month grid and in the legend, the usual
Friday meeting is hidden for that date, and the list view shows "Club closed"
with the reason from `description`.

```json
[
  {
    "date": "2026-12-25",
    "time": "",
    "title": "Club closed",
    "description": "Holiday closure",
    "closed": true
  }
]
```

The calendar is keyboard friendly: Tab to the month grid, then use the arrow
keys to move between days, Home/End for the ends of the week, Enter to open a
day, and Escape to close it. Keep that working by leaving `calendar.js` alone
unless you are deliberately changing the calendar.

### Tournaments page

Tournaments are listed in `assets/tournaments.json`. To add a new one or mark
one as complete, edit that file in the repo and commit the change. Results links
point at chess-results.com.

### Banners on `index.html`

There are two styles of banner: `info` and `urgent`. To add a banner, add an
object to `assets/banner.json` and it appears at the top of the home page. If the
banner doesn't appear, check that the JSON is valid (a missing comma is the
usual cause).

```json
[
  {
    "id": "winter-rapid-2027",
    "enabled": true,
    "style": "urgent",
    "message": "Winter Rapid registration closes soon.",
    "linkUrl": "tournaments",
    "linkText": "Tournament details",
    "countdown": { "enabled": true, "deadlineUTC": "2027-01-16T02:00:00Z" }
  }
]
```

A banner removes itself once its countdown deadline passes. Set
`"enabled": false` to switch one off early.

### Gallery page

Photos go in `assets/gallery/` and each one needs an entry in
`assets/gallery.json` (grouped into sections). Full instructions are in the
comment at the top of `gallery.html`. `gallery.json` is `[]` until the first
photos are added.

### Home page extras

- **Save Club to My Contacts** downloads `assets/downloads/etobicoke-chess-club.vcf`,
  a contact card with the club's email, meeting time and venue. If the meeting
  time or address changes, update that file too — it is plain text, one field
  per line.
- **Show map** loads the Google Maps embed only when a visitor presses it. The
  address is printed above it, so nobody needs the map to find us, and the
  site makes no Google request for visitors who never open it.
- **Watch live games** loads the Lichess TV board on request instead of on every
  visit.
- **Show evaluation / Pause evaluation** downloads the chess engine only when a
  visitor asks for an evaluation, and pauses it again on the next press.
- **Puzzle of the Day** comes from Lichess's public API and is unaffected by
  the buttons above.

---

## 5. Privacy and accessibility pages

`privacy.html` and `accessibility.html` are public statements about how the
site actually behaves. Treat them as documentation of the code, not marketing:

- If you add a service that receives visitor data (a form, an embed, analytics),
  say so on the privacy page **before** publishing it.
- If you change how the site behaves for keyboard, screen-reader or
  reduced-motion visitors, update the accessibility page in the same pull
  request.
- Bump the "Last updated" / "Last reviewed" date at the top of the page when you
  change it.

Both pages are linked from the footer of every page.

---

## 6. Before you publish: a short checklist

1. **Keyboard pass.** Put the mouse away and tab through every page you
   changed: menu, buttons, forms, calendar, gallery, footer. Focus should always
   be visible; Escape should close anything that opened (menu, day dialog,
   lightbox, share menu).
2. **Links.** Follow every link you added. Internal links have no `.html`.
3. **JSON.** Open the file you edited in a JSON validator (or check the page
   after publishing). One stray comma blanks the whole list.
4. **Both themes.** Check the page in dark and light mode with the footer
   switch.
5. **Phone width.** Narrow the browser to phone width and check that the layout
   still reads and nothing overlaps (the calendar switches to list view on
   small screens).
6. **Accessibility page.** If the change touched an interaction, does
   `accessibility.html` still describe the site truthfully?

---

## 7. Custom domain / DNS (once the domain is purchased)

1. Add a file named `CNAME` at the repo root containing just the domain
   (e.g. `etobicokechessclub.com`).
2. At the domain registrar, add A records for the apex domain pointing to
   `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`,
   and a CNAME record for `www` pointing to `ricool8888.github.io`.
3. In GitHub: **Settings → Pages → Custom domain**, enter the domain, wait for
   the DNS check, then tick **Enforce HTTPS**.
4. Replace `https://ricool8888.github.io/etobicokechessclub/` with the new
   domain in the canonical / `og:url` tags of each page, `sitemap.xml`,
   `robots.txt` and `assets/downloads/etobicoke-chess-club.vcf`.

Until then the site is at <https://ricool8888.github.io/etobicokechessclub/>.

---

## 8. Extra files explained

- **`robots.txt`** tells automated web crawlers and search engine bots which
  pages and files they can or cannot visit.
- **`sitemap.xml`** is the roadmap for search engines: it lists the site's URLs
  and how often they change. Add new pages here.
- **`400.html`**, **`404.html`**, **`503.html`** are custom error pages: a broken
  request, a page that does not exist, and a maintenance notice. Add them to the
  repo root if they are not present; GitHub Pages uses `404.html` automatically.
- **`.nojekyll`** is an empty configuration file that tells GitHub Pages to skip
  the Jekyll static site generator, so files and folders that start with an
  underscore are not ignored.
- **`.github/workflows/static.yml`** is the GitHub Actions workflow that builds
  and deploys the static site to GitHub Pages whenever `main` changes. If the
  repository deploys from **Settings → Pages → Deploy from a branch** instead,
  this file is not needed.

---

## 9. When something looks wrong

| Symptom | Usual cause |
| --- | --- |
| A list (news, events, tournaments, gallery) is empty | The JSON file is invalid, or the entry is missing a required field (`date` and `title` for events). Open the browser console; the page logs what it could not load. |
| Nothing changed after committing | GitHub Pages is still building (check the Actions tab), or the browser cached the old file — hard-refresh. |
| A banner does not appear | `"enabled"` is false, the JSON is invalid, or its countdown deadline has passed. |
| The calendar opens on the wrong view | Month/list is remembered per visitor in their browser; it is not a site setting. |
| The map, live board or evaluation will not load | Those are third-party services (Google, Lichess, cdnjs) and can be blocked by a network or an extension. Everything else on the page still works. |

If a change breaks the site, revert the commit on GitHub
(**History → the commit → Revert**) — Pages redeploys the previous version.

---

## 10. Who to ask

Site questions, content corrections and photo removal requests:
**etobicokechessclub@gmail.com**.

Accessibility barriers reported by a visitor should be fixed promptly; if you
cannot fix one quickly, reply with the information in another format (email,
large print, or over the phone) and add the limitation to
`accessibility.html`.
