# Startup Pitch Platform

A full-stack startup showcase and pitch directory built with **Next.js 15**, **Sanity CMS v3**, **NextAuth v5** (GitHub OAuth), and **Sentry** error monitoring.

---

## Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | Next.js 15 (App Router), React 19, TypeScript |
| **CMS & Data** | Sanity v3 (`next-sanity`, `sanity-plugin-markdown`, Sanity Typegen) |
| **Authentication** | NextAuth v5 (GitHub OAuth provider synced with Sanity `author` records) |
| **Styling & UI** | Tailwind CSS, Radix UI primitives, `@uiw/react-md-editor`, Sonner |
| **Observability** | Sentry (`@sentry/nextjs` client, server, and edge instrumentation) |

---

## Project Structure

```text
platform/
├── app/
│   ├── (root)/            # Main startup directory layout & pages
│   ├── global-error.tsx   # Sentry global error boundary
│   └── layout.tsx         # Root typography & layout
├── components/            # Navbar, search, startup cards & pitch submission form
├── sanity/
│   ├── lib/               # Sanity client, write-client, GROQ queries & live preview
│   ├── schemaTypes/       # Author & Startup document schemas
│   └── types.ts           # Generated Sanity TypeScript types
├── auth.ts                # NextAuth GitHub OAuth configuration
├── instrumentation.ts     # Sentry server/edge instrumentation hook
└── next.config.ts
```

---

## Environment Variables

Configure `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-06-22
SANITY_WRITE_TOKEN=your_sanity_write_token
AUTH_SECRET=your_nextauth_secret
AUTH_GITHUB_ID=your_github_oauth_client_id
AUTH_GITHUB_SECRET=your_github_oauth_client_secret
```

---

## Local Development

```bash
npm install
npm run dev
```

> `predev` and `prebuild` automatically extract Sanity schemas and regenerate `sanity/types.ts` via `npm run typegen`.
