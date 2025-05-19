# Jet Centre: Telecom Etude Centralised Tool


![License](https://img.shields.io/github/license/telecom-etude/jet-centre)
![Issues](https://img.shields.io/github/issues/telecom-etude/jet-centre)
![Pull Requests](https://img.shields.io/github/issues-pr/telecom-etude/jet-centre)
![Documentation Website](https://img.shields.io/website?url=https%3A%2F%2Ftelecom-etude.github.io%2Fjet-centre)


## CI/CD checks

![Build](https://github.com/telecom-etude/jet-centre/actions/workflows/build.yml/badge.svg)
![Format](https://github.com/telecom-etude/jet-centre/actions/workflows/fmt.yml/badge.svg)
![Knip](https://github.com/telecom-etude/jet-centre/actions/workflows/knip.yml/badge.svg)
![Conventional commits](https://github.com/telecom-etude/jet-centre/actions/workflows/commits.yml/badge.svg)


## Overview

Jet Centre is an ERP-CRM for [Telecom Etude](https://telecom-etude.fr), the Junior-Entreprise of [Télécom Paris](https://telecom-paris.fr).
It allows the Telecom Etude's administrators to manage more easily and proficiently their missions and their projects within the Junior-Enterprise.

This is a centralised app that will allow CDP to enter once the data, and see it mirrored on all documents, deadlines, notifications, etc., as well as having everything in one and single place (documents, communication, notifications, help for new CDPs, etc.).


### Goal

Here are the main goals of this tool:

- Centralise all the tools we use within the Junior-Entreprise.
- Centralise all the data:
    - Showcase-website, with the form-applications;
    - Google Drive, with all the documents;
    - Slack with all the messaging and communication;
    - WhatsApp for communication with assignees;
    - LinkedIn/Emails for prospection.
- Follow easily the KPIs with nice graphs.
- Follow health and status of missions and departments.
- Increase GPRD compliance.
- Automate simple tasks
- Remove repetitve tasks (e.g. fill a follow-up  un tableau de suivi)


### Snapshots

![Mission follow](/docs/images/mission-follow.png)

![Dashboard](/docs/images/dashboard.png)

![Create mission](/docs/images/create.png)


## Contributing

Please refer to the [Getting Started Guide](/docs/GETTING_STARTED.md) to know how to install and launch the project!

Please read the [Contribution Guide](/docs/CONTRIBUTING.md) before contributing to this project.


## External resources

- [Planning and Specifications](https://docs.google.com/document/d/1CzvHDF7RaJH02KWRsCnQcQE092i8NNxbOPfbOsbXEHg/edit?usp=sharing)
- [Figma Design](https://www.figma.com/design/3MOoUXn1fM81b36aXTMpKJ/Telecom-Etude-Centralized-Tool?node-id=0-1&t=yhJvmaIEMpC5kIlt-1)
- [Database documentation](https://telecom-etude.github.io/jet-centre)
- [DB Designer](https://dbdesigner.page.link/URRwLbFdp8r9qiiF6)


## Used technologies


### Technical stack

- Fullstack [Next.js](https://nextjs.org/) (v15), with the App router.
- [TypeScript](https://www.typescriptlang.org/), for type safety.
- [Tailwind CSS](https://tailwindcss.com/) (v3) for styling.
- [Auth.js](https://authjs.dev/) (v5 of [NextAuth.js](https://next-auth.js.org/)), for authentication, with the Google Provider.
- [PostgreSQL](https://www.postgresql.org/), for the database.
- [Prisma](https://www.prisma.io/), for object modeling.
- [Docker](https://www.docker.com/) for easy deployment


### Recommended tutorials

- [Auth.js](https://www.youtube.com/watch?v=1MTyCvS05V4) (advanced level, for deep understanding)
- [Google Provider](https://www.youtube.com/watch?v=Rs8018RO5YQ)
