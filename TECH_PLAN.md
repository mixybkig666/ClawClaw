# Project Nova - Technical Proposal

## Tech Stack (Recommended by Codex)
- **Framework**: [Next.js](https://nextjs.org/) (App Router) - Best for SEO and performance.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Rapid UI development.
- **Language**: [TypeScript](https://www.typescript.org/) - Type safety for complex agent logic.
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com/) - Fast, free, and secure.
- **State Management**: React Context / Hooks.

## Project Structure
- `/app`: Pages and Layouts.
- `/components`: Reusable UI elements (Wallet Footer, War Room Module).
- `/content`: Meeting logs and articles (Markdown/MDX).
- `/lib`: Helper functions for fetching AI logs.

## Phase 1: MVP Execution
1. Initialize Next.js project.
2. Build the **"Digital War Room"** module to render `WAR_ROOM.md` logs.
3. Integrate the **"Support Luca"** footer with the wallet address.
4. Set up CI/CD via GitHub Actions for Cloudflare Pages.
