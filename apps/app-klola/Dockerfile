# Stage 1: Base image with Node.js and PNPM
FROM node:18-alpine AS base
RUN npm install -g pnpm@9.12.3
ENV PNPM_HOME=/usr/local/bin

# Stage 2: Install dependencies
FROM base AS deps
WORKDIR /app

# Menyalin seluruh codebase terlebih dahulu untuk memastikan semua package.json
# Ini menghindari masalah dengan pola glob yang mungkin tidak menangkap semua file
COPY . .

# Install dependencies with update (tidak menggunakan frozen-lockfile)
RUN pnpm install

# Stage 3: Build the application
FROM base AS builder
WORKDIR /app

# Copy all files from the deps stage (including node_modules)
COPY --from=deps /app ./

# Set environment for build
ENV NEXT_TELEMETRY_DISABLED=1

# Navigate to the ERP app directory and build
WORKDIR /app/apps/erp
RUN node ../../node_modules/.bin/next build

# Stage 4: Production runtime
FROM node:18-alpine AS runner
WORKDIR /app

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
ENV NEXT_TELEMETRY_DISABLED=1

# Create a non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy the complete standalone directory structure
COPY --from=builder /app/apps/erp/.next/standalone/ ./

# Copy static assets to the correct location
COPY --from=builder /app/apps/erp/.next/static ./apps/erp/.next/static
COPY --from=builder /app/apps/erp/public ./apps/erp/public

# Set proper permissions
RUN chown -R nextjs:nodejs /app
USER nextjs

# Expose port
EXPOSE 3000

# Start the application
CMD ["node", "apps/erp/server.js"]