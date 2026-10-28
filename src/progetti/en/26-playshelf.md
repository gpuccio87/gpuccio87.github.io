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
technologies:
- TypeScript
- NestJS, Fastify
- React, Vite
- PostgreSQL, Drizzle
- C#, .NET Framework (Playnite plugin)
- Docker, GitHub Actions
---

Playshelf is a service for Playnite users, Playnite being the program that brings games from Steam, GOG, Epic and the other stores together in a single library. A plugin, installed on every PC, sends the library and play sessions to a server, and a website shows them together: all your games, from any store and any computer, in one place.

Each user has a Steam-style public profile, with their favourite games, a library you can search and filter by status (completed, playing, plan to play...), playtime, recent activity and statistics by store, genre and platform. The profile can be public, visible only to people with the link, or private. A PC is linked to an account with an 8-character code confirmed on the website, without ever typing the password into the plugin, and every link can be revoked.

The server records play sessions one by one, so the hours from two PCs add up without being counted twice. The plugin is a C# extension for Playnite; the server and the website are written in TypeScript and run in Docker on an ARM cloud server, with PostgreSQL. It's in development and in invite-only beta at <a href="https://playshelf.gabrielepucciarelli.com" target="_blank">playshelf.gabrielepucciarelli.com</a>.
