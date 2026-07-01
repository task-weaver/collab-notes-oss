# Contributing to Collab Notes for OSS Teams

Thank you for your interest in contributing! We welcome all contributions.

## Good First Issues

Here are 3 beginner-friendly tasks you can work on:

---

### Task 1: Implement GitHub OAuth Login with NextAuth.js
**Description**: Add GitHub OAuth authentication using NextAuth.js so users can log in with their GitHub accounts.

**Acceptance Criteria**:
1. Set up NextAuth.js with GitHub provider using environment variables (`AUTH_GITHUB_ID`, `AUTH_GITHUB_SECRET`, `AUTH_SECRET`)
2. Add a "Login with GitHub" button to the home page
3. Create a `/api/auth/[...nextauth]` route
4. When logged in, show a user profile section and logout button

**Resources**:
- NextAuth.js Docs: https://authjs.dev/reference/nextjs
- NextAuth.js GitHub Provider: https://authjs.dev/reference/core/providers/github

---

### Task 2: Add Markdown Note Editor
**Description**: Create a basic note-taking UI with Markdown support using react-markdown.

**Acceptance Criteria**:
1. Add a new `/notes` page with:
   - A Markdown editor (can use a simple textarea)
   - A live preview of the rendered Markdown (using react-markdown)
2. Add a "Create Note" button
3. Store notes in local storage for now (we'll replace with Supabase later)

**Resources**:
- react-markdown Docs: https://remarkjs.github.io/react-markdown/
- Next.js App Router Pages: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts

---

### Task 3: Implement Basic Note Search
**Description**: Add basic search functionality to find notes by title or content.

**Acceptance Criteria**:
1. Add a search bar to the `/notes` page
2. Filter notes in real-time as the user types
3. Highlight matching text (optional but nice!)
4. Work with the local storage notes from Task 2

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
