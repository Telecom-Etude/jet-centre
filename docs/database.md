# Database

## Techstack

We use [PostgreSQL](https://www.postgresql.org/) as our [BDMS](https://en.wikipedia.org/wiki/Database#Database_management_system) and [Prisma](https://www.prisma.io/) to write schema, migration and access to the data in typescript.

## Important notice

> [!IMPORTANT]
> This tutorial isn't needed anymore.
>
> We recommend now using docker. Thus, you don't need to setup PostgreSQL manually anymore, so you don't need this tutorial.
> Even though it is not the prefered installation method, this page is still maintained and opened to improvement.

## Setup (installation)

To set up the database, first install postgresql and connect the server.

### Linux

```bash
sudo apt install postgresql       # Install PostgreSQL
sudo systemctl start postgresql   # Start the PostgreSQL daemon
sudo systemctl enable postgresql  # (optional) automatically start the daemon
                                  # when you turn on your computer
sudo -u postgres psql             # Connect the server using the `psql` command as the `postgres` user
# sudo sudo -u postgres psql      # If the first version fails, try this one
```

### macOS (with Homebrew)

```bash
brew search postgresql              # Find the latest version of postgresql
brew install postgresql@17          # Install it (replace 17 by your version)
brew services start postgresql@17   # Start the PostgreSQL daemon
brew services run postgresql@17     # (optional) automatically start the daemon
                                    # when you turn on your computer
export PATH="$PATH:/opt/homebrew/postgresql@17/bin" # add this to your .bashrc, .zshrc, etc.
createuser -s user
createdb db
```

You can now use

```bash
DB_URL="postgresql://your_pg_user:your_pg_password@localhost:5432/your_pg_database_name?schema=public"
```

and skip the weird `CREATE ROLE` SQL command in the next section.

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

Finally, create a file named `.env` at the root of your project (if it doesn't already exist), and add the following variable. You can put whatever name you want for _your_pg_database_name_.

```bash
DB_URL="postgresql://your_pg_user:your_pg_password@localhost:5432/your_pg_database_name?schema=public"
```

To initialize the database, run a prisma migration.

```bash
bun x prisma migrate deploy
```

## Schemas

Schemas are defined in `*.prisma` files in the `prisma` directory.
The file `schema.prisma` contains configuration for prisma.
You do not need to include those files in any way, prisma will look at all `*.prisma` files in the `prisma` directory.

## Migration

To update the schemas of the database, update them in the `*.prisma` files. Then, to generate and apply the migration, run the command :

```bash
bun x prisma migrate dev
```

When prisma applies a migration, it will also create files in the `node_modules/@prisma/client` directory to provide types in typescript.

## Reset & Seeding

To seed the database (apply modifications when the project is set up), use the `prisma/seed.ts`.
To seed is applied when you empty and reset your database. To reset your database, run this command:

```bash
bun x prisma reset
```

> [!WARNING]
>
> You will loose all your data by running this command.

## Contributing

To view the documentation of the database; please refer to this [link](https://telecom-etude.github.io/jet-centre).
