# Collab Notes for OSS Teams

A lightweight, collaborative note-taking app tailored specifically for open source teams—with features that integrate with GitHub workflows!

## Features (MVP)

- GitHub login (OAuth)
- Create "spaces" linked to GitHub repos
- Real-time collaborative note editing
- Link notes to specific GitHub issues/PRs
- Markdown support
- Basic search functionality

## Tech Stack

- Full-stack: Next.js 16 (App Router) + TypeScript
- Styling: Tailwind CSS
- Auth: NextAuth.js (GitHub OAuth)
- Real-time collab: Y.js + Supabase Realtime
- Database: Supabase PostgreSQL

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

1. Clone the repo
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env` and fill in your values
4. Run the dev server: `npm run dev`

## Contributing

Contributions are welcome! Please check out [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## License

MIT
