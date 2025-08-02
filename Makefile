COMPOSE := docker compose
EXEC := docker exec

docker-start:
	docker start app-dev jet-centre-postgres-1 jet-centre-cache-1
dev:
	$(COMPOSE) -f docker-compose.dev.yml up --build

build:
	$(COMPOSE) -f docker-compose.dev.yml build

fmt:
	$(EXEC) app-dev npm run fmt

studio:
	$(EXEC) app-dev npx prisma studio

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

help:
	@echo "Available commands:"
	@echo "   docker-start   dev  build  fmt  studio  seed  seed-prod  reset_db  migrate  stop  build-prod  run-prod  stop-prod"
	@echo ""
	@echo "Documentation available at docs/makefile_commands.md"

.PHONY: build dev studio seed reset_db stop build-prod run-prod stop-prod help

.DEFAULT_GOAL := help
