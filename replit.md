# Overview

This is a **$DXRI Agent-to-Agent Payment Dashboard** - a modern fintech-style web application for managing crypto payments between agents on the Solana blockchain. The platform provides real-time transaction monitoring, payment sending/receiving capabilities, and a marketplace for discovering and interacting with other agents. It's built as a full-stack TypeScript application with a React frontend and Express backend.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Framework & Tooling**
- React 18 with TypeScript using Vite as the build tool
- Client-side routing via Wouter (lightweight alternative to React Router)
- TanStack Query for server state management and API data fetching
- Component library based on Radix UI primitives with shadcn/ui styling patterns

**Design System**
- Tailwind CSS for utility-first styling with custom design tokens
- Typography: Inter for UI elements, Space Grotesk for headings/financial values
- Custom color system with CSS variables supporting light/dark themes
- Glassmorphism effects and hover states for premium fintech aesthetic
- Responsive layout with fixed sidebar (256px) and scrollable main content area

**Component Structure**
- Atomic design pattern with reusable UI components in `/components/ui/`
- Business logic components in `/components/` (AgentCard, TransactionCard, etc.)
- Page components in `/pages/` for each major route
- All components are TypeScript with proper prop typing

**State Management Strategy**
- React Query for server state (API calls, caching, refetching)
- Local component state via React hooks (useState, useEffect)
- No global state management library (Redux/Zustand) currently implemented
- Toast notifications for user feedback

## Backend Architecture

**Server Framework**
- Express.js with TypeScript running on Node.js
- HTTP server creation via Node's built-in `http` module
- Custom Vite middleware integration for development HMR
- Request/response logging middleware with JSON capture

**API Design**
- RESTful API structure with `/api` prefix for all endpoints
- Routes registered in `server/routes.ts`
- Storage abstraction layer via `IStorage` interface
- Currently using in-memory storage (`MemStorage`) for development

**Storage Layer**
- Interface-based storage design (`IStorage`) for easy database swapping
- In-memory Map-based storage for users (development/demo mode)
- Prepared for PostgreSQL integration via Drizzle ORM (configured but not actively used)
- Schema defined in `shared/schema.ts` using Drizzle and Zod for validation

## Data Storage

**Database Configuration**
- Drizzle ORM configured for PostgreSQL dialect
- Neon serverless PostgreSQL driver (`@neondatabase/serverless`)
- Schema migrations output to `/migrations` directory
- Connection via `DATABASE_URL` environment variable

**Schema Design**
- Users table with UUID primary keys, username, and password fields
- Zod schemas for runtime validation (`insertUserSchema`)
- Type inference for TypeScript (`InsertUser`, `User` types)
- Shared schema between frontend and backend via `/shared` directory

**Current Implementation**
- Storage interface allows switching between in-memory and database implementations
- CRUD operations abstracted: `getUser()`, `getUserByUsername()`, `createUser()`
- Ready to swap `MemStorage` for database-backed storage when needed

## Authentication & Authorization

**Current State**
- Basic user schema exists (username/password) but authentication not implemented
- No session management or JWT tokens currently active
- "Connect Wallet" functionality shows placeholder dialogs
- Frontend has `WalletRequiredDialog` component for gated features

**Planned Implementation**
- Solana wallet connection for blockchain-based authentication
- Agent address verification and signing
- Payment authorization via wallet signatures

## External Dependencies

**Blockchain & Crypto**
- Solana blockchain integration (planned - UI components ready)
- SPL token support for USDC payments
- Wallet adapters for Phantom, Solflare, etc. (not yet implemented)

**UI Component Libraries**
- Radix UI primitives for accessible, unstyled components
- Recharts for data visualization (payment volume charts, analytics)
- Lucide React for icon system
- date-fns for timestamp formatting

**Development Tools**
- Replit-specific plugins: runtime error modal, cartographer, dev banner
- TypeScript with strict mode enabled
- ESBuild for production server bundling
- PostCSS with Tailwind and Autoprefixer

**Design Assets**
- Google Fonts: Inter and Space Grotesk loaded via CDN
- Custom logo images in `/logo-black.png` and `/logo-white.png`
- Generated placeholder images in `/attached_assets/generated_images/`

**API Integration Points**
- No external APIs currently integrated
- Mock data used throughout for demo purposes
- Ready for integration with:
  - Solana RPC nodes
  - Token price feeds
  - NFT metadata services
  - Transaction indexers

**Session & Storage**
- `connect-pg-simple` for PostgreSQL session storage (configured but unused)
- In-memory session management during development