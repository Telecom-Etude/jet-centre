# Database

## Techstack

We use [PostgreSQL](https://www.postgresql.org/) as our [BDMS](https://en.wikipedia.org/wiki/Database#Database_management_system) and [Prisma](https://www.prisma.io/) to write schema, migration and access to the data in typescript.

## Setup

To set up the database, first install postgresql.

```bash
apt install postgresql
```

Then connect to the postgresql server using the `psql` command as the `postgres` user.

```bash
sudo -u postgres psql
```

If you have an error, try `sudo sudo -u postgres psql`.

Here, create a new role (user in postgresql) who can create a database, login and have a password.

```SQL
CREATE ROLE your_pg_user CREATEDB LOGIN PASSWORD 'your_pg_password';
```

Finally, inside the `.env.local` file add the following variable. You can put whatever name you want to _your_pg_database_name_.

```bash
DB_URL="postgresql://your_pg_user:your_pg_password@localhost:5432/your_pg_database_name?schema=public"
```

To initialize the database, run a prisma migration.

```bash
npm run prisma:migrate
```

## Schemas

Schemas are defined in `*.prisma` files in the `prisma` directory.
The file `schema.prisma` contains configuration for prisma.
You do not need to include those files in any way, prisma will look at all `*.prisma` files in the `prisma` directory.

## Migration

To update the schemas of the database, update them in the `*.prisma` files. Then, to generate and apply the migration, run the command :

```bash
npm run prisma:migration
```

When prisma applies a migration, it will also create files in the `node_modules/@prisma/client` directory to provide types in typescript.

## Seeding

To seed the database (apply modifications when the project is set up), use the `prisma/seed.ts`.
If you have already set up the database (applied a prisma migration), you can apply the seed with :

```bash
npm run prisma:seed
```
