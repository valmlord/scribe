FROM node:20-slim

WORKDIR /workspaces/Scribe

# Install pnpm
RUN npm install -g pnpm@10.7

# Copy package.json files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/web/package.json ./apps/web/
COPY packages/shared/package.json ./packages/shared/

# Install dependencies
RUN pnpm install

# Copy the rest of the source code
COPY . .

EXPOSE 5173

CMD ["pnpm", "dev"]