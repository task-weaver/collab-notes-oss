# Contributing to Collab Notes for OSS Teams

Thank you for your interest in contributing! We welcome all contributions.

## Good First Issues

Here are 3 beginner-friendly tasks you can work on:

---

### Task 1: Implement GitHub OAuth Login with NextAuth.js
**Difficulty**: Easy/Medium  
**Task Type**: Authentication  

**Description**: Add GitHub OAuth authentication using NextAuth.js so users can log in with their GitHub accounts.

**Acceptance Criteria**:
1. Set up NextAuth.js with GitHub provider using environment variables (`AUTH_GITHUB_ID`, `AUTH_GITHUB_SECRET`, `AUTH_SECRET`)
2. Add a "Login with GitHub" button to the home page (`app/page.tsx`)
3. Create a `/api/auth/[...nextauth]/route.ts` API route (Next.js App Router format)
4. When logged in, show:
   - User's GitHub profile picture and name
   - A "Logout" button
5. When logged out, only show the login button

**Resources**:
- NextAuth.js Docs (Next.js App Router): https://authjs.dev/reference/nextjs
- NextAuth.js GitHub Provider: https://authjs.dev/reference/core/providers/github
- How to Generate a GitHub OAuth App: https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app

---

### Task 2: Add Markdown Note Editor
**Difficulty**: Easy  
**Task Type**: Frontend UI  

**Description**: Create a basic note-taking UI with Markdown support using react-markdown.

**Acceptance Criteria**:
1. Add a new `/notes` page (`app/notes/page.tsx`) with:
   - A Markdown editor (can use a simple textarea)
   - A live preview of the rendered Markdown (using react-markdown)
2. Add a "Create Note" button
3. Store notes in local storage for now (we'll replace with Supabase later)

**Resources**:
- react-markdown Docs: https://remarkjs.github.io/react-markdown/
- Next.js App Router Pages: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts

---

### Task 3: Implement Basic Note Search
**Difficulty**: Easy  
**Task Type**: Frontend UI/Filtering  

**Description**: Add basic search functionality to find notes by title or content.

**Acceptance Criteria**:
1. Add a search bar to the `/notes` page
2. Filter notes in real-time as the user types
3. Highlight matching text (optional but nice!)
4. Work with the local storage notes from Task 2

---

### Task 4: Set Up Supabase PostgreSQL Database
**Difficulty**: Medium  
**Task Type**: Backend/Database  

**Description**: Set up a Supabase project with PostgreSQL tables for spaces and notes.

**Acceptance Criteria**:
1. Create a new Supabase project (https://supabase.com/)
2. Create a SQL schema with 2 tables:
   - `spaces`: id, name, github_repo_url, user_id, created_at, updated_at
   - `notes`: id, space_id, title, content, github_issue_url, user_id, created_at, updated_at
3. Add the Supabase project URL and anon key to `.env.example`
4. Write a quick setup guide for new contributors in README.md

**Resources**:
- Supabase Docs: https://supabase.com/docs
- Supabase SQL Editor: https://supabase.com/docs/guides/database

---

### Task 5: Replace Local Storage with Supabase CRUD APIs
**Difficulty**: Medium  
**Task Type**: Backend/API  

**Description**: Create Next.js API routes for CRUD operations on notes and spaces using Supabase.

**Acceptance Criteria**:
1. Create API routes like:
   - `/api/spaces` (GET, POST)
   - `/api/spaces/[spaceId]` (GET, PUT, DELETE)
   - `/api/notes` (GET, POST)
   - `/api/notes/[noteId]` (GET, PUT, DELETE)
2. Use `@supabase/supabase-js` to interact with the PostgreSQL database
3. Update the `/notes` page to use these API routes instead of local storage
4. Make sure routes are protected (only logged-in users can access their own spaces/notes)

**Resources**:
- Next.js App Router API Routes: https://nextjs.org/docs/app/building-your-application/routing/route-handlers
- Supabase JavaScript Client: https://supabase.com/docs/reference/javascript/introduction

---

## How to Contribute

1. Fork the repo
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes
4. Commit your changes: `git commit -m 'Add some feature'`
5. Push to the branch: `git push origin feature/your-feature`
6. Open a pull request

## Code of Conduct

Please be respectful and inclusive in all interactions.
