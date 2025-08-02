# Makefile commands

Here is a description of all commands you can find in the [Makefile](../Makefile)

## Starting & running the project

`docker-start`: Set up the docker containers

`dev`: Run the project in development

`run-prod`: Run the project in production

## Compiling the Docker images

`build`: Compile the images in development

`build-prod`: Compile the images in production

## Stopping the project

`stop`: Stop Docker

`down`: Stop Docker and delete containers in development

`down-prod`: Stop Docker and delete containers in production

## Useful for dev

`fmt`: Formats all the code

`studio`: Opens prisma studio (database debugging)

## Database

`reset-db`: Updates the database without creating a migration

`migrate`: Updates the database and creates a migration

`seed`: Seed (populate) a database

`seed-prod`: Seed a database in production
