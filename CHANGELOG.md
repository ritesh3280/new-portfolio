# Changelog

## 2026-10-19 — Resume refresh + Rune & Bragi

Updated the site to match the new resume and added the HackUMBC 2026 project.

### Projects (`src/components/Projects.tsx`)
- Added **Rune & Bragi** as the first card: 1st Overall + Community Impact at HackUMBC 2026.
  - Code: https://github.com/NSP909/IMG2BRL
  - Demo: https://devpost.com/software/rune-bragi
  - Image: `src/assets/images/runebragi.png`
- Changed the grid from 4 to 3 columns on large screens, so the 9 cards fill 3 even rows.

### Hero (`src/components/Hero.tsx`, `src/App.tsx`)
- Changed "7x Hackathon Winner" to **8x Hackathon Winner**.

### About: bio (`src/components/About.tsx`)
- Changed "I build things that work" to "I build things people enjoy using and that are actually needed".
- Changed "AI projects that win hackathons" to "projects that win hackathons".
- Replaced "also researching with kidneys 🫘" with two lines:
  - predicting post transplant kidney function and outcomes 🫘
  - also working with dental scans to predict carotid calcification 🦷

### About: skills
- Matched the skills to the resume:
  - **Frameworks & ML**: React, Next.js, NestJS, GraphQL, Node.js, FastAPI, Flask, PyTorch, LangChain
  - **Systems & Tools**: AWS, GCP, Docker, Redis, Temporal, Pub/Sub, PostgreSQL, BigQuery, LaunchDarkly, CI/CD

### About: timeline
- New order: **Terrapin Works → Dandy → Machamp Lab → Fire Climate Computing Lab**.
- **Terrapin Works**: new summary and 4 resume bullets covering the V2 API rebuild, check-in hardening, the check-in reasons redesign, and the workshop check-in build.
- **Dandy**: new summary and 3 resume bullets covering international holiday planning, carrier- and lab-specific holidays, and the event-driven pipeline. Added Pub/Sub and Redis to its tags.
- **Research**: renamed the lab from "Staraptor Lab" to **Machamp Lab**. Replaced the bullets with the resume ones: kidney-transplant outcome models for 500+ patients, the 12–18-feature signature, and the NIH R01 dental X-ray pipeline.
- Kept the Fire Climate Computing Lab entry as is.

### Contact (`src/components/Contact.tsx`)
- Removed "Best way to reach me is email - I typically respond within 24 hours."

### Meta (`index.html`)
- Changed "award-winning AI projects" to "award-winning projects" in the page description.

### Cleanup
- Deleted the unused `Experience.tsx` and `Footer.tsx` components.

### Still to do
- The Resume links in the Hero and Contact sections still open the old Google Drive PDF. Replace that file in Drive with the new resume.

### Commits
- `d9018fa` Update portfolio from new resume and add Rune & Bragi
- `4863b33` Drop 'AI' from projects wording in bio and meta description
- `4d8d7b1` Remove email response-time line from contact section
- `eeab137` Put Terrapin Works first in timeline, then Dandy
