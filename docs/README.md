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

![Eslint](https://github.com/telecom-etude/jet-centre/actions/workflows/eslint.yml/badge.svg)

## Overview

Jet Centre is an ERP-CRM for [Telecom Etude](https://telecom-etude.fr), the Junior-Entreprise of [Télécom Paris](https://telecom-paris.fr).
It allows the Telecom Etude's administrators to manage more easily and proficiently their missions and their projects within the Junior-Enterprise.

This is a centralised app that will allow CDP to enter once the data, and see it mirrored on all documents, deadlines, notifications, etc., as well as having everything in one and single place (documents, communication, notifications, help for new CDPs, etc.).

## Presentation

Jet-Centre is a kind of ERP that makes life easier for admins, both as CDP and in your position. First and foremost, it's a centralisation and automation tool. Centralisation in that all information and tools will be accessible from this tool, and automationin that you will only have to enter information once (e.g. to avoid rewriting the cient's information in the 10 BCs, or to write the same thing in a RM and a CE such as the layout of phases).

For example, for the assignee selection, the CDP creates the MRI from the tool and the tool automatically creates the form. The answers to the MRI will automatically appear on the tool (cv + answers to the form) and put them in the follow-up folder, which means you can have all the information in one place without having to put everything in the study folder and open it each time. You can also decide to personalise things that weren't so great before, e.g. when filling in the interview form, only one CDP could answer at a time on the form, and you couldn't see in real time what the other CDP was writing.

It will also help CDPs who are at the beginning of their mandate or who don't do a lot of studies. Having a checklist, tips on how to write documents, email templates, etc. For the time being, for a first version, we've concentrated mainly on the CDP aspect, so the specifics per job will come later. We only have mandatory features like MRI validation for secgé+dirco, the treasury page for treasury docs...

It's a tool that would bring everything together in one place.

- For missions: all the information you need, document writing, MRIs creation, meeting notes, customer emails, forms etc...
- For your job: job cards and books for handover, integrated indicator tracking (most of which is calculated automatically) to automate a maximum number of tasks to lighten workloads (avoid having to write the same thing several times, send satisfaction forms and manage follow-ups, compute KPIs, etc.).

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
- Remove repetitve tasks (e.g. fill a follow-up un tableau de suivi)

### Snapshots

![Mission follow](/docs/images/mission-follow.png)

![Dashboard](/docs/images/dashboard.png)

![Create mission](/docs/images/create.png)

## Contributing

Please refer to the [Getting Started Guide](/docs/GETTING_STARTED.md) to know how to install and launch the project!

Please read the [Contribution Guide](/docs/CONTRIBUTING.md) before contributing to this project.

## External resources

- [Specifications and details](https://docs.google.com/document/d/1CzvHDF7RaJH02KWRsCnQcQE092i8NNxbOPfbOsbXEHg/edit?usp=sharing)
- [Planning](https://github.com/Telecom-Etude/jet-centre/milestones)
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
