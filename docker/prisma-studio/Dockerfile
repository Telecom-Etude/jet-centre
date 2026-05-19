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

RUN --mount=type=cache,target=/root/.bun/install/cache bun install prisma@1.12 --frozen-lockfile --verbose

FROM base AS studio

CMD bun x prisma studio --hostname 0.0.0.0 --port 5555

