[![Maintainability](https://api.codeclimate.com/v1/badges/f0e82214a4414ed29c27/maintainability)](https://codeclimate.com/github/valmlord/scribe/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/f0e82214a4414ed29c27/test_coverage)](https://codeclimate.com/github/valmlord/scribe/test_coverage)

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

```bash
.

├── __tests__
├── apps
│   └── web
│       ├── eslint.config.js
│       ├── index.html
│       ├── package.json
│       ├── pnpm-lock.yaml
│       ├── public
│       ├── README.md
│       ├── src
│       ├── tsconfig.app.json
│       ├── tsconfig.json
│       ├── tsconfig.node.json
│       └── vite.config.ts
├── infra
│   ├── docker
│   │   ├── docker-compose.yml
│   │   └── Dockerfile
│   ├── scripts
│   │   ├── code-climate.sh
│   │   └── docker.sh
│   └── testing
│       ├── jest.config.js
│       └── setup.ts
├── package.json
├── packages
│   └── shared
│       ├── eslint.config.js
│       ├── package.json
│       ├── src
│       │   ├── api
│       │   ├── components
│       │   ├── db
│       │   ├── hooks
│       │   ├── index.ts
│       │   ├── services
│       │   ├── types
│       │   └── utils
│       └── tsconfig.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── README.md
├── renovate.json
```

### 📋 Available Commands

- pnpm dev - Start web app in development mode
- pnpm dev:all - Run all apps in parallel
- pnpm build - Build all apps
- pnpm test - Run tests
- pnpm lint - Run linter
- pnpm clean - Clean build artifacts and node_modules