# Scribe

Scribe is a cross-platform application built with modern technologies and a clean, user-friendly UI/UX.

## 📦 Tech Stack

- **Frontend**: React Native + Tamagui (TypeScript)
- **Backend**: NestJS + PostgreSQL + Prisma
- **Dev Environment**: Docker + Dev Containers
- **Package Manager**: pnpm
- **Bundler**: Vite

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- pnpm 10+
- Docker and Docker Compose

### Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/valmlord/scribe.git
   cd scribe

2. Install dependencies:
   pnpm setup

3. Start development server:
   pnpm dev

### 🏗️ Project Structure

scribe/
├── apps/              # Applications
│   ├── mobile/        # Mobile app (React Native)
│   └── web/           # Web app (React)
├── packages/          # Shared packages
│   └── shared/        # Shared code (UI components, utilities, types)
└── [docker-compose.yml](http://_vscodecontentref_/0) # Docker configuration

### 📋 Available Commands

- pnpm dev - Start web app in development mode
- pnpm dev:all - Run all apps in parallel
- pnpm build - Build all apps
- pnpm test - Run tests
- pnpm lint - Run linter
- pnpm clean - Clean build artifacts and node_modules