# Tiara Beauty Website

Luxury beauty studio and spa website for **Tiara Beauty** in Al Khobar, Eastern Province, Saudi Arabia.

Live site: [tiarabeauty.sa](https://tiarabeauty.sa)

## Tech Stack

- **Static HTML/CSS/JS** exported from Webflow with custom enhancements
- **Bilingual** (English + Arabic) with full RTL support
- **Fonts**: Houstiq (display), Inter (body), Cairo (Arabic)
- **Hosting**: GitHub Pages

## Getting Started

```bash
# Install dependencies
npm install

# Start local dev server (port 3004)
npm run dev
```

Open [http://localhost:3004](http://localhost:3004) in your browser.

## Project Structure

```
├── css/                    # Stylesheets
│   ├── normalize.css       # CSS reset
│   ├── webflow.css         # Webflow runtime styles
│   └── tiara-a06d9a.webflow.css  # Custom brand styles
├── js/
│   ├── webflow.js          # Webflow framework (do not edit)
│   ├── translations.js     # All EN/AR translation strings
│   ├── language-switcher.js # Bilingual i18n system + RTL toggle
│   └── products-carousel.js # Product carousel navigation
├── fonts/                  # Houstiq, Inter, Cairo font files
├── images/                 # All images (team/, products/, services/, partners/)
├── scripts/                # Build scripts
│   ├── build-html.js       # HTML minification + asset path rewriting
│   └── copy-assets.js      # Copies fonts, images, static files to dist/
├── .github/workflows/      # CI/CD pipelines
│   ├── ci.yml              # Lint + build on PRs
│   └── deploy.yml          # Auto-deploy to GitHub Pages on push to main
├── index.html              # Homepage
├── about.html              # Brand story + founder message
├── team.html               # Team member profiles
├── contact.html            # Booking + location
├── privacy-policy.html     # Privacy policy
└── 404.html                # Error page
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start local dev server on port 3004 |
| `npm run lint` | Run ESLint on custom JS files |
| `npm run lint:fix` | Auto-fix ESLint issues |
| `npm run format` | Format JS files with Prettier |
| `npm run format:check` | Check formatting without modifying files |
| `npm run build` | Build optimized site to `dist/` |
| `npm run clean` | Remove `dist/` directory |

## Build Pipeline

Running `npm run build` produces an optimized version in `dist/`:

1. **CSS**: Combines and minifies `normalize.css` + `webflow.css` + custom CSS into one file
2. **JS**: Bundles and minifies `translations.js`, `language-switcher.js`, and `products-carousel.js` into a single file; separately minifies `webflow.js`
3. **HTML**: Rewrites asset paths to use bundled files and minifies all HTML pages
4. **Assets**: Copies fonts, images, `robots.txt`, and `sitemap.xml` to `dist/`

## Bilingual System (i18n)

The site supports English and Arabic with automatic RTL layout switching:

- **Translation keys**: All text content lives in `js/translations.js` as a `{ en: {...}, ar: {...} }` object
- **DOM binding**: HTML elements use `data-i18n="keyName"` attributes to map to translation keys
- **HTML content**: Add `data-i18n-html="true"` for keys containing HTML (e.g., `<br>` tags)
- **Language persistence**: User preference stored in `localStorage` under `tiara-language`
- **RTL toggle**: Arabic activates `dir="rtl"` on `<html>` and adds `.rtl` class to `<html>` and `<body>`

### Adding new translatable text

1. Add a key to both `en` and `ar` objects in `js/translations.js`
2. Add `data-i18n="yourKeyName"` to the HTML element
3. If the value contains HTML, also add `data-i18n-html="true"`

## CI/CD

- **Pull requests**: The `ci.yml` workflow runs lint and build checks
- **Deploy**: The `deploy.yml` workflow automatically builds and deploys to GitHub Pages when pushing to `main`

> **Note**: To use the deploy workflow, enable GitHub Pages with "GitHub Actions" as the source in your repository settings (Settings > Pages > Source > GitHub Actions).

## Design Tokens

```css
--beige: #efe0cb;        /* Velvet Cream - primary background */
--brown: #3f2823;        /* Royal Cocoa - text color */
--accent-green: #142821; /* Deep Velvet Green */
--vip-wine: #500b0c;     /* Vintage Wine - accent */
```

## Editing Guidelines

- **Do not edit** `js/webflow.js`, `css/webflow.css`, or `css/normalize.css` — these are framework files
- **Content changes**: Update text in `js/translations.js` (both `en` and `ar` keys)
- **Style changes**: Edit `css/tiara-a06d9a.webflow.css`
- **Run `npm run lint`** before committing to catch issues early
