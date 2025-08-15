ARG NODE_VERSION=20

FROM node:${NODE_VERSION}-alpine AS base

ARG BUN_VERSION=1.0.15

WORKDIR /build

RUN apk update && apk add curl unzip bash


# -- bun-v${BUN_VERSION}
RUN curl -fsSL https://bun.sh/install | bash

ENV PATH="${PATH}:/root/.bun/bin"

# FROM node:24-alpine AS base

FROM base AS deps
# https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine
RUN apk update
RUN apk add --no-cache libc6-compat git openssl

WORKDIR /app

COPY package.json bun.lock ./
RUN --mount=type=cache,target=/root/.bun/install/cache bun install --frozen-lockfile --verbose

FROM base AS dev

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED 1


FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN bun x prisma generate

RUN bun run build

FROM base AS runner
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

ENV PORT=3000

CMD HOSTNAME="0.0.0.0" node server.js

