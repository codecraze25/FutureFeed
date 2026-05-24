# FutureFeed Prototype — Compliance Evidence Dashboard

## Overview

Build a clickable prototype for a compliance evidence management dashboard used by compliance managers at defense contractors.

The main goal is to simplify audit preparation by helping users:

- Track compliance requirements
- See missing evidence quickly
- Upload or attach evidence
- Mark requirements as complete
- Understand audit readiness at a glance

The prototype should feel realistic and usable, not like a wireframe.

---

# Core User

## Primary User
Compliance Manager

## User Context
Today they manage compliance through:
- spreadsheets
- shared drives
- email threads
- manual tracking

The prototype should reduce this chaos into a clean workflow.

---

# Main User Workflow

The product should support this core flow:

```text
Requirement
→ Missing Evidence
→ Upload / Attach Evidence
→ Review
→ Mark Complete
```

The user should always know:
- what is complete
- what is missing
- what needs attention next

---

# Prototype Scope

## Must Have

### 1. Dashboard Overview

A landing dashboard showing:

- Total requirements
- Completed requirements
- Requirements missing evidence
- Audit readiness percentage
- Recently updated items

Suggested cards:
- Total Controls
- Completed
- Needs Attention
- Audit Readiness %

---

### 2. Requirements List

A table or list view of compliance requirements.

Each row should include:
- Requirement ID
- Title
- Status
- Evidence count
- Last updated date

Suggested statuses:
- Complete
- Missing Evidence
- In Review
- Not Started

Optional:
- Simple search
- Status filtering

---

### 3. Requirement Detail View

Clicking a requirement should open a detail page or side panel.

Include:
- Requirement description
- Current status
- Attached evidence
- Notes/activity history
- Upload evidence action
- Mark complete action

---

### 4. Evidence Upload Simulation

No real backend required.

Simulate:
- uploading files
- attaching evidence
- changing status after upload

Mock files:
- PDF policies
- screenshots
- security reports
- access review exports

---

### 5. Audit Readiness UX

The UI should clearly communicate:
- overall progress
- risky/missing areas
- what still blocks audit readiness

This is important.

---

# Technical Expectations

## Goal

Product thinking and UX clarity matter more than enterprise architecture.

Keep implementation pragmatic and clean.

---

# Recommended Stack

You can use:
- Next.js
- React
- TypeScript
- Tailwind
- shadcn/ui

No backend required unless you want one.

Mock data is completely fine.

---

# Design Direction

## Desired Feel

- Modern
- Clean
- Operational
- Trustworthy
- Security-focused

Avoid:
- flashy animations
- marketing-style UI
- overdesigned visuals

Think:
- internal enterprise tool
- compliance operations dashboard
- security workflow product

---

# Suggested Mock Data

## Example Requirements

### AC-2
Account Management

Status: Missing Evidence

---

### IA-5
Authenticator Management

Status: In Review

---

### SC-7
Boundary Protection

Status: Complete

---

# Security Expectations

Security awareness matters.

If using dependencies/packages:

## Required

```bash
npm audit
```

Fix vulnerabilities where reasonable.

Keep dependencies minimal and clean.

---

# What NOT To Build

Do NOT spend time on:
- authentication
- real file storage
- production backend
- real integrations
- full compliance logic
- pixel-perfect polish

Focus on:
- usability
- workflow clarity
- realistic operations flow

---

# Deliverable

Provide:
- Public URL
- Clickable prototype
- Clean README
- Short explanation of product decisions

---

# Success Criteria

A successful prototype should make someone immediately understand:

> “This tool helps compliance managers know exactly what evidence is missing and prepares them for audits without spreadsheets and chaos.”