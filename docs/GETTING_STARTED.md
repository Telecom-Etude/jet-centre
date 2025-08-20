# Telecom Etude Centralised Tool

## Installation

### Requirements

- [Bun](https://bun.com/docs/installation)
- [Postgresql](https://www.postgresql.org/download/)
- [Docker](https://docs.docker.com/engine/install/)

### Node setup

Start by installing all project dependencies.

```bash
bun install
```

### Setup your .env

> At the end of this step, you can check you have all the variables by looking at `env.d.ts`.

Create a file named `.env` at the root of the project.

Add the `DB_URL` variable in your `.env` file like so : `DB_URL=postgres://postgres:postgres@localhost:5432/maindb?schema=public`

_The port and database names are defined in the `docker-compose.yml` file._

> If you just want to test the project locally with access to all pages, you can just set `DEV_MODE=true` and enter rubbish in the 3 `AUTH_` variables.

Generate a random `AUTH_SECRET` for your `.env` file. (e.g. by using `openssl rand -base64 255`)

You must also generate a Google Secret and ID. To set those up, refer to this [tutorial](https://www.youtube.com/watch?v=Rs8018RO5YQ&t=252).
The redirection URI should be `http://localhost:5005/api/auth/callback/google`

Finally, to make tests on your drive, you will need to specify what folder is used by Jet Centre. For that, create a folder in your drive and copy the ID (in the url, after `folders/`) and add it as `DOSSIER_SUIVI`.

> If you want to run _next start_ locally, also set `AUTH_TRUST_HOST="http://localhost:5005"`

Here's what your `.env` file must look like at this stage:

```bash
# Auth
AUTH_SECRET="your_auth_secret"
AUTH_GOOGLE_ID="your_google_id"
AUTH_GOOGLE_SECRET="your_google_secret"

# Database
DB_URL=postgres://postgres:postgres@localhost:5432/maindb?schema=public

# Drive
DOSSIER_SUIVI="LJHlkj1LjhLEKJhlKJDHlkjhIUY3063hOIU89367IGd"

# Others
DEV_MODE=true
AUTH_TRUST_HOST="http://localhost:5005"
```

### Setting up Docker

After you've installed Docker using [this guide](https://docs.docker.com/engine/install), you may want to also follow [these extra steps](https://docs.docker.com/engine/install/linux-postinstall/), notably `Manage Docker as a non-root user` to avoid having to write `sudo` before each command.

### Running the project

First make sure that Docker is running (see [website](https://docs.docker.com/engine/install)), then activate the Docker containers:

```bash
docker start app-dev jet-centre-postgres-1 jet-centre-cache-1
```

> To check your containers run `docker ps -a`

Now initialize the database:

- Makefile

```bash
make migrate
```

You can now run the project:

- Makefile

```bash
make dev
```

**Check out the [Makefile](../Makefile) for other commands you can run !**

## The code base

### Structure

```
.
├── docs                Folder including documentation, including this file.
├── package.json        File including dependencies and scripts to run (like `bun run dev`).
├── prisma              Folder containing the database (data and schemas)
├── public              Folder containing the static data (images, pdfs, etc.).
├── src                 Folder containing the code (front-end, back-end, requests, api, etc..).
└── tailwind.config.ts  Configuration for tailwind (variables, sizes, etc.).
```

> The non-important files and folders are ignored.

Let's focus on the `src/` folder:

```
.
├── actions             Contains the server actions (e.g. for authentication).
├── app                 Contains the front-end pages of the app.
├── components          Contains the components (see below).
├── db                  Contains the database requests.
├── drive               Contains everything related to Google Drive.
├── fonts               Contains the font of the project (`Avenir Next`)
├── lib                 Contains utils for different things
├── middleware.ts       The middleware is executed between the client request and the server response,
                            to handle redirections and check authorisations to access pages.
└── settings            Different settings
```

### Components

Before using a component, please check that it doesn't already exist. See [components.md] for this.
