COMPOSE := docker compose
EXEC := docker exec

dev:
	$(COMPOSE) -f docker-compose.dev.yml up --build

build:
	$(COMPOSE) -f docker-compose.dev.yml build

fmt:
	$(EXEC) app-dev npm run fmt

studio:
	$(EXEC) app-dev npx prisma studio --port 5555

seed: reset_db
	$(EXEC) app-dev npx prisma db seed -- --environment dev

seed-prod: reset_db
	$(EXEC) app-dev npx prisma db seed -- --environment prod

reset_db:
	$(EXEC) app-dev npx prisma db push --force-reset

migrate:
	$(EXEC) app-dev npx prisma migrate deploy

stop:
	$(COMPOSE) down

build-prod:
	$(COMPOSE) -f docker-compose.yml build

run-prod:
	$(COMPOSE) -f docker-compose.yml up -d

stop-prod:
	$(COMPOSE) -f docker-compose.yml down

.PHONY: build dev studio seed reset_db stop build-prod run-prod stop-prod
