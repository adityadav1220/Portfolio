# Aditya Yadav — portfolio

A cinematic Next.js portfolio with a dark architectural hero, cursor-reactive lighting and depth, prominent Atlassian and Zoho experience, selected projects, engineering notes, technical skills, and a personal About section.

## Development

Use a Node.js version supported by Next.js 16 (Node 22 LTS is a suitable choice). The repository retains its existing pnpm lockfile.

```sh
corepack pnpm install
corepack pnpm dev
```

## Production

```sh
corepack pnpm build
corepack pnpm start
```

The GitHub repository is connected to the existing Vercel project. Branches receive previews; the production branch deploys to the configured portfolio domain.

## Editing content

- `app/page.tsx`: experience, projects, toolkit, education, credentials, and contact details.
- `app/globals.css`: layout, typography, palette, responsive styling, and reduced-motion rules.
- `app/components/atmosphere.tsx`: pointer lighting, projected fragments, parallax, and panel tilt. `GLOW_INTENSITY` is `0.7`.
- `app/components/navigation.tsx`: mobile navigation.
- `app/components/motion-toggle.tsx`: locally persisted motion preference.
- `public/Aditya-Yadav-Resume.pdf`: current résumé download.
- `design/asset-notes.md`: artwork provenance and design notes.

No contact form backend or third-party tracking is required; contact links open email, GitHub, and LinkedIn directly. Metadata, sitemap, robots, and a custom AY favicon are included.

## Validation

The Next.js production build includes TypeScript checking. Browser QA covers responsive layouts down to 320 pixels, navigation, internal anchor targets, expandable project notes, motion preference persistence, cursor response, and the exact résumé download.
