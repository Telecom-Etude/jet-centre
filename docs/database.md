# Database

## Techstack

We use [PostgreSQL](https://www.postgresql.org/) as our [BDMS](https://en.wikipedia.org/wiki/Database#Database_management_system) and [Prisma](https://www.prisma.io/) to write schema, migration and access to the data in typescript.

## Setup (installation)

To set up the database, first install postgresql and connect the server.

### Linux

```bash
apt install postgresql          # Install PostgreSQL
sudo -u postgres psql           # Connect the server using the `psql` command as the `postgres` user
# sudo sudo -u postgres psql    # If the first version fails, try this one
```

### Windows

> Download the installer from [this page](https://www.postgresql.org/download/windows/)  
> Make sure you install PostgreSQL on port 5432  
> After the installation, make sure to add `C:\Program Files\PostgreSQL\<version>\bin` to your PATH.

```bash
psql -U postgres    # Connect the server using the `psql` command as the `postgres` user
```

## Setup (database creation)

Here, create a new role (user in postgresql) who can create a database, login and have a password.

```SQL
CREATE ROLE your_pg_user CREATEDB LOGIN PASSWORD 'your_pg_password';
```

Finally, create a file named `.env.local` at the root of your project (if it doesn't already exist), and add the following variable. You can put whatever name you want for _your_pg_database_name_.

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
