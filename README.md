# FutureFeed — Compliance Evidence Dashboard

A clickable prototype for compliance managers at defense contractors. FutureFeed replaces spreadsheet-and-email chaos with a clear workflow for tracking requirements, attaching evidence, and monitoring audit readiness.

## Live Demo

Deploy to Vercel for a public URL:

```bash
npm run build
npx vercel --prod
```

Or run locally:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Core Workflow

```text
Requirement → Missing Evidence → Upload / Attach Evidence → Review → Mark Complete
```

The dashboard always surfaces:

- What is **complete**
- What is **missing evidence**
- What **blocks audit readiness**

## Features

| Area | What it does |
|------|----------------|
| **Dashboard** | Total controls, completed count, needs-attention count, audit readiness %, at-risk items, recently updated |
| **Requirements list** | Searchable table with status filter; sorted by attention priority |
| **Requirement detail** | Description, evidence list, activity timeline, upload simulation, mark complete |
| **Evidence upload** | Simulated file attach — updates status to In Review automatically |

## Product Decisions

1. **Dashboard-first** — Audit readiness % is the primary metric. Compliance managers need a single glance answer before drilling into controls.

2. **Four-status model** — Complete, Missing Evidence, In Review, and Not Started map directly to the audit prep lifecycle without over-engineering state machines.

3. **Attention-based sorting** — Missing evidence and not-started items float to the top, mirroring how managers triage from spreadsheets today.

4. **Simulated upload → In Review** — Uploading evidence auto-advances status, reflecting real review workflows without backend complexity.

5. **At-risk callouts** — Blocking requirements are highlighted on both the dashboard and detail views so gaps are never buried in a long list.

6. **Enterprise aesthetic** — Neutral palette, operational layout, no marketing chrome. Built to feel like an internal GRC tool.

## Tech Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS 4
- shadcn/ui
- In-memory React context (no backend)

## Project Structure

```text
src/
├── app/                    # Routes: /, /requirements, /requirements/[id]
├── components/
│   ├── dashboard/          # Stat cards, audit readiness, recent activity
│   ├── layout/             # Sidebar shell, page headers
│   └── requirements/       # List, detail, upload dialog, status badges
└── lib/
    ├── mock-data.ts        # 12 NIST-style sample controls
    ├── store.tsx           # Client state for uploads & completions
    └── requirements-utils.ts
```

## Security

```bash
npm audit
```

As of the last check, `npm audit` reports 2 moderate vulnerabilities in PostCSS bundled with Next.js. Fixing them requires a breaking downgrade (`npm audit fix --force` → Next.js 9.x), which is not reasonable for this prototype. Dependencies are otherwise minimal.

## Out of Scope

- Authentication
- Real file storage
- Production backend
- External integrations
- Full compliance rule engine

## License

Private prototype — not for production use.
