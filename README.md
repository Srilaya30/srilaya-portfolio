# Maddukuri Srilaya Portfolio

A modern personal portfolio for Maddukuri Srilaya, built to showcase projects, skills, internships, certifications, achievements, and contact links in a polished responsive interface.

## Features

- Responsive hero section with profile image, animated role text, and social links
- About, education, skills, experience, projects, certifications, achievements, and contact sections
- Project cards with preview images and GitHub links
- Certification cards with certificate previews and external certificate links
- Mobile-safe layout with horizontal overflow protection
- Production build powered by Vite and TanStack Start

## Tech Stack

- React 19
- TypeScript
- TanStack Start and TanStack Router
- Vite
- Tailwind CSS
- Lucide React icons
- Radix UI component primitives

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the local URL shown in the terminal, usually:

```text
http://localhost:5173
```

## Available Scripts

```bash
npm run dev
```

Starts the local development server.

```bash
npm run build
```

Creates a production build in `dist/`.

```bash
npm run preview
```

Serves the production build locally for verification.

```bash
npm run lint
```

Runs ESLint across the project.

```bash
npm run format
```

Formats files with Prettier.

## Project Structure

```text
public/
  profile.jpg
  projects/
  certificates/

src/
  routes/
    __root.tsx
    index.tsx
  components/ui/
  hooks/
  lib/
  styles.css
```

## Assets

- Hero photo: `public/profile.jpg`
- Project images: `public/projects/`
- Certificate images: `public/certificates/`

When replacing images, keep the same filenames or update the paths in `src/routes/index.tsx`.

## Deployment

Build the project before deploying:

```bash
npm run build
```

Deploy the generated `dist/` output to your hosting provider. After deployment, verify:

- Profile image loads
- Project and certificate images load
- Resume, GitHub, LinkedIn, project, and certificate links open correctly
- Mobile view has no horizontal overflow

