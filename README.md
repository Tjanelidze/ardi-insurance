# ARDI — ავტომობილის დაზღვევა

Car insurance quote application — ARDI technical assessment.

## Setup

```bash
npm install
npm run dev
```

## Stack

- React 18 + TypeScript
- Tailwind CSS v4
- Vite

No additional UI libraries used.

## Structure

```
src/
├── api/            # Mock async functions
├── components/
│   ├── layout/     # Header, WizardLayout, DraftBanner
│   ├── steps/      # StepOne, StepTwo, StepThree
│   └── ui/         # TextInput, PackageCard, AddonRow, icons…
├── constants/      # Static data and initial values
├── context/        # WizardContext — useReducer global state
├── hooks/          # useDarkMode, usePreventUnload, useWizardDraft
├── styles/         # Global styles, Tailwind entry point
├── types/          # Shared TypeScript types
└── utils/          # calculatePremium, validation, date helpers
```

## Features

- 3-step wizard with back/forward navigation
- Form validation ID (11 digits), phone, age 18+, car year, market value
- Plate lookup mock API, auto-fills brand/model/year
- Price calculation package rate + age/car age surcharges + addons
- Dark mode persisted to localStorage
- Draft save form progress restored on page reload

## What's Left

- Unit tests for `calculatePremium()` and validators
- Accessibility improvements (focus management, ARIA)
- Quote history
- PDF export