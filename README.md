This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

# Peppermint Frontend Assessment - Ask Stream Dashboard

This project implements Page 2 of an AI chatbot dashboard as part of the Peppermint Frontend Assessment.

##  Overview
The application is an interactive dashboard featuring:
- AI-powered query interface with conversational analytics
- Stacked cards 
- Interactive bookmarks and history sidebar
- Responsive design for mobile and desktop views

##  Approach
Since Radix UI was already installed in the starter code, I leveraged its components for:

Accessibility: Built-in ARIA labels and keyboard navigation

Unstyled Primitives: Clean base components to build upon

Consistency: Uniform behavior across interactive elements

Professional Foundation: Industry-standard component library

## Component Architecture
Reusable UI Components: Created in /components/ui/ (Button, Input, Card, etc.)

Layout Components: Separate layout logic from page components

Custom Components: Built specialized components like StackedCards and BetaBadge


## 🚀 Live Demo

**Deployed Application:** [https://frontend-streams-assessment-sepia.vercel.app/dashboard/streams]
**GitHub Repository:** [https://github.com/caleb-ali/frontend-streams-assessment]


## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun package manager

### Local Development

1. **Clone and navigate to the project:**
   ```bash
   git clone [your-repo-url]
   cd frontend-streams-assessment

2. **install dependencies:**
npm install
# or
yarn install
# or
pnpm install

3. **run development server:**
npm run dev
# or
yarn dev
# or
pnpm dev

4. **Open your browser:**

Navigate to http://localhost:3000/dashboard/streams to view the application.