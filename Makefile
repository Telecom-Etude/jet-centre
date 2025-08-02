COMPOSE := docker compose
EXEC := docker exec

APP_CONTAINER_NAME := jc-app
DB_CONTAINER_NAME := jc-postgres
CACHE_CONTAINER_NAME := jc-redis

APP_SERVICE_NAME := app
DB_SERVICE_NAME := postgres
CACHE_SERVICE_NAME := cache

PREFIX := bun

DEV_COMPOSE := compose.dev.yml
PROD_COMPOSE := compose.prod.yml

TMUX_SESSION := dev-logs

# Development
up:
	$(COMPOSE) -f $(DEV_COMPOSE) up -d

down:
	$(COMPOSE) -f $(DEV_COMPOSE) down

build:
	$(COMPOSE) -f $(DEV_COMPOSE) build

reload: down up

logs:
	$(COMPOSE) -f $(DEV_COMPOSE) logs -f

slogs:
	tmux new-session -d -s $(TMUX_SESSION) -n logs "$(COMPOSE) -f $(DEV_COMPOSE) logs -f $(DB_SERVICE_NAME)"
	tmux split-window -v -t $(TMUX_SESSION):0 "$(COMPOSE) -f $(DEV_COMPOSE) logs -f $(APP_SERVICE_NAME)"
	tmux select-pane -t $(TMUX_SESSION):0.0
	tmux split-window -h -t $(TMUX_SESSION):0.0 "$(COMPOSE) -f $(DEV_COMPOSE) logs -f $(CACHE_SERVICE_NAME)"
	tmux select-layout -t $(TMUX_SESSION):0 tiled
	tmux select-pane -t $(TMUX_SESSION):0.0
	tmux attach-session -t $(TMUX_SESSION)

# Database
generate:
	$(COMPOSE) -f $(DEV_COMPOSE) exec $(APP_SERVICE_NAME) bun x prisma generate

reset-db:
	$(COMPOSE) -f $(DEV_COMPOSE) exec $(APP_SERVICE_NAME) bun x prisma migrate reset

migrate-db:
	$(COMPOSE) -f $(DEV_COMPOSE) exec $(APP_SERVICE_NAME) bun x prisma migrate dev

seed-db:
	$(COMPOSE) -f $(DEV_COMPOSE) exec $(APP_SERVICE_NAME) bun x prisma db seed -- --environment dev


# Prod
build-prod:
	$(COMPOSE) -f $(PROD_COMPOSE) build

up-prod:
	$(COMPOSE) -f $(PROD_COMPOSE) up -d

down-prod:
	$(COMPOSE) -f $(PROD_COMPOSE) down

migrate-prod:
	$(COMPOSE) -f $(PROD_COMPOSE) exec $(APP_SERVICE_NAME) bun x prisma migrate deploy

deploy: build-prod up-prod

.PHONY: up down build reload logs slogs reset-db migrate-db seed-db build-prod up-prod down-prod deploy

