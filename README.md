# Paste As Code Landing

Landing page for [`paste-as-code`](https://www.npmjs.com/package/paste-as-code), a small CLI for turning screenshots of code, stack traces, and terminal output into clean Markdown.

Live package links:

- Website: https://paste-as-code.vercel.app
- npm: https://www.npmjs.com/package/paste-as-code
- GitHub: https://github.com/rohitnv09/paste-as-code

## Tech Stack

- Static HTML
- Tailwind CSS
- Small vanilla JavaScript helpers
- Vercel static hosting

## Getting Started

Install dependencies:

```sh
npm install
```

Build the production CSS:

```sh
npm run build
```

Run a local preview:

```sh
npm run dev
```

The local server will print the preview URL in the terminal.

## Deploying

This repo is set up for Vercel.

Use these settings:

```txt
Build Command: npm run build
Output Directory: .
```

The site is static, so there is no server runtime or API route to configure.

## Project Structure

```txt
.
|-- index.html
|-- src
|   |-- app.js
|   |-- input.css
|   `-- theme-init.js
|-- scripts
|   `-- strip-css-banner.cjs
|-- styles.css
|-- vercel.json
|-- robots.txt
|-- sitemap.xml
|-- site.webmanifest
|-- favicon.svg
|-- apple-touch-icon.svg
`-- og-image.svg
```

## Production Notes

The page includes:

- Canonical and social metadata
- Open Graph and Twitter card tags
- JSON-LD structured data
- `robots.txt` and `sitemap.xml`
- Web manifest and favicon assets
- Content Security Policy and security headers through `vercel.json`
- No inline executable JavaScript
- No external font dependency
- Accessible landmarks, skip link, labels, and live copy feedback

## Validation

Before deploying, run:

```sh
npm run build
```

## License

MIT
