# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

## Local Hosting & Public Tunnel Setup

To make your portfolio accessible from the internet while running on your own device:

### 1. Start the Portfolio Dev Server

```bash
# Windows PowerShell
$env:PORT="21113"; $env:BASE_PATH="/"; pnpm --filter @workspace/portfolio run dev
```

Your site will be available at `http://localhost:21113`.

### 2. Expose to the Internet via Cloudflare Tunnel

A Cloudflare Tunnel has already been downloaded to this project. Run it in a **separate terminal** while the dev server is running:

```bash
# Windows PowerShell
D:\portfolio\Creative-Showcase\cloudflared.exe tunnel --url http://localhost:21113
```

After a few seconds, you'll get a public URL like:
```
https://xxxxxx.trycloudflare.com
```

Anyone can visit this URL to see your portfolio live.

### 3. Alternative: LocalTunnel (Backup)

If Cloudflare Tunnel isn't working, use LocalTunnel (no install required):

```bash
npx --yes localtunnel --port 21113
```

You'll get a public URL like `https://xxxxx.loca.lt`. Click the "Click to Continue" button on first visit.

### Requirements

- Your computer must stay **on** and connected to the internet
- The dev server terminal must remain **open**
- The tunnel terminal must remain **open**
- URLs are **temporary** — they change every time you restart the tunnel

### For a Permanent Domain

For 24/7 uptime without keeping your PC on, deploy to **Vercel**, **Netlify**, or **Cloudflare Pages** instead.

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
