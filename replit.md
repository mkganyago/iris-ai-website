# IRIS-AI Project Website

## Overview
Modern, responsive website for the IRIS-AI (Irrigation Resource Intelligence System - AI) project from the University of Johannesburg. This is a catchment-scale irrigation intelligence system for water-use efficiency and compliance, powered by Earth Observation and AI.

## Project Structure
```
├── client/                  # Frontend React application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   │   ├── ui/          # Shadcn UI components
│   │   │   ├── navigation.tsx
│   │   │   ├── hero-section.tsx
│   │   │   ├── overview-section.tsx
│   │   │   ├── products-section.tsx
│   │   │   ├── technology-section.tsx
│   │   │   ├── impact-section.tsx
│   │   │   ├── timeline-section.tsx
│   │   │   ├── team-section.tsx
│   │   │   ├── resources-section.tsx
│   │   │   ├── contact-section.tsx
│   │   │   ├── contact-form.tsx
│   │   │   ├── footer.tsx
│   │   │   ├── theme-provider.tsx
│   │   │   └── theme-toggle.tsx
│   │   ├── pages/           # Page components
│   │   │   ├── home.tsx
│   │   │   └── not-found.tsx
│   │   ├── lib/             # Utility functions
│   │   └── hooks/           # Custom React hooks
├── server/                  # Backend Express server
│   ├── routes.ts            # API endpoints
│   └── storage.ts           # In-memory storage
├── shared/                  # Shared types and schemas
│   └── schema.ts            # Zod schemas and types
└── attached_assets/         # Generated images and assets
```

## Key Features
1. **Hero Section** - Full-screen parallax hero with aerial irrigation imagery
2. **Project Overview** - Mission statement and key statistics
3. **Core Products** - Three main technological solutions (Compliance Dashboard, Farmer Advisory Service, Open-Source Repository)
4. **Technology Stack** - Data sources, AI architecture, and methodology
5. **Impact Metrics** - Animated counters showing project goals
6. **Timeline** - Visual project roadmap (2025-2027)
7. **Team Section** - Team members and partner organizations
8. **Resources** - Publications and open-source code (coming soon)
9. **Contact Form** - Functional contact form with validation
10. **Dark Mode** - Full dark mode support with theme toggle

## Tech Stack
- **Frontend**: React, TypeScript, Tailwind CSS, Framer Motion
- **Backend**: Express.js, Node.js
- **UI Components**: Shadcn/UI
- **Animations**: Framer Motion for scroll animations and parallax effects
- **Forms**: React Hook Form with Zod validation

## Design System
- **Colors**: Water/agriculture theme with cyan/teal primary, green secondary
- **Typography**: Inter (primary), JetBrains Mono (technical)
- **Spacing**: Tailwind units (4, 6, 8, 12, 16, 20, 24)
- **See**: `design_guidelines.md` for complete design specifications

## API Endpoints
- `POST /api/contact` - Submit contact form message
- `GET /api/health` - Health check endpoint

## GitHub Pages Deployment
This website can be hosted on GitHub Pages by:
1. Create a repository named `iris-ai-project`
2. Build the frontend: `npm run build`
3. Deploy the `dist` folder to GitHub Pages
4. Enable Pages in repository settings

## Recent Changes
- January 2026: Initial website development
  - Complete landing page with all sections
  - Dark mode support
  - Contact form integration
  - Responsive design for all screen sizes
