@AGENTS.md

# Repo quick-start instructions

## What this repo is
This is the shared starter repo for Philaprep and Notary business build work.
The stack appears to be Next.js with the App Router.

## What to optimize for
- Small, safe changes first
- Clean mobile-first UI
- Clear business messaging
- Reusable components
- Do not break routing, config, or deployment

## Default working rules
- Before making edits, explain the plan briefly
- Prefer the smallest useful fix first
- Do not refactor unrelated files
- Keep code simple and readable
- When editing UI, preserve responsive behavior
- When suggesting changes, name the exact files to touch

## Priority areas right now
- `app/page.tsx`
- `app/layout.tsx`
- `app/globals.css`
- `public/`

## Do not touch unless asked
- `next.config.ts`
- `tsconfig.json`
- `eslint.config.mjs`
- package/tooling setup

## How to respond inside this repo
When helping in this repo:
1. Say what you found
2. Say the smallest safe fix
3. List the files that will change
4. Then make the change

## First task behavior
If I ask for help without enough detail, start by inspecting the current page structure and tell me the top 3 smallest improvements before changing anything.
