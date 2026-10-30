---
title: Playshelf
name: Playshelf
category: Project
group: code
thumbnail: img/portfolio/playshelf.jpg
order: 26
date_label: October 2026
author: Gabriele Pucciarelli
images:
- img/portfolio/full/playshelf/1.jpg
- img/portfolio/full/playshelf/2.jpg
- img/portfolio/full/playshelf/3.jpg
- img/portfolio/full/playshelf/4.jpg
- img/portfolio/full/playshelf/5.jpg
technologies:
- TypeScript
- NestJS, Fastify
- React, Vite
- PostgreSQL, Drizzle
- C#, .NET Framework (Playnite plugin)
- Docker, GitHub Actions
---

Playshelf is a service for Playnite users, Playnite being the program that brings games from Steam, GOG, Epic and the other stores together in a single library. A plugin, installed on every PC, keeps the library in sync in both directions through a server: ratings, statuses, categories and tags changed on one computer reach the others, field by field, with a preview and a backup before the first sync. Playtime is recorded session by session, so the hours from two PCs add up without being counted twice.

Each user also gets a Steam-style public profile: covers, favourite games, a library you can search and filter by status, recent activity and, for every game, a page with description, developer, critic scores and unlocked achievements (read from the Playnite Achievements extension). The same game owned on several stores becomes a single entry. A statistics page shows where the hours go, completion, ratings, the rarest achievements and trends over time. The profile can be public, visible only to people with the link, or private; a PC is linked to the account with an 8-character code, without ever typing the password into the plugin.

The website, the server and the plugin are available in six languages (Italian, English, Spanish, French, German and Brazilian Portuguese). The plugin is a C# extension for Playnite; the server and the website are written in TypeScript and run in Docker on an ARM cloud server, with PostgreSQL. It's in invite-only beta at <a href="https://playshelf.gabrielepucciarelli.com" target="_blank">playshelf.gabrielepucciarelli.com</a>.
