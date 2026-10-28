---
title: Playshelf
name: Playshelf
category: Projekt
group: code
thumbnail: img/portfolio/playshelf.jpg
order: 26
date_label: Oktober 2026
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
- C#, .NET Framework (Playnite-Plugin)
- Docker, GitHub Actions
---

Playshelf ist ein Dienst für Nutzer von Playnite, dem Programm, das die Spiele von Steam, GOG, Epic und den anderen Stores in einer einzigen Bibliothek zusammenführt. Ein Plugin, auf jedem PC installiert, schickt die Bibliothek und die gespielten Partien an einen Server, und eine Website zeigt sie gemeinsam an: alle Spiele, aus jedem Store und von jedem Rechner, an einem Ort.

Jeder Nutzer hat ein öffentliches Profil im Stil von Steam, mit Lieblingsspielen, einer durchsuchbaren Bibliothek mit Filtern nach Status (abgeschlossen, wird gespielt, noch zu spielen...), Spielzeit, letzten Aktivitäten und Statistiken nach Store, Genre und Plattform. Das Profil kann öffentlich, nur über den Link sichtbar oder privat sein. Ein PC wird mit einem 8-stelligen Code, der auf der Website bestätigt wird, mit dem Konto verbunden, ohne dass das Passwort je im Plugin eingegeben wird, und jede Verbindung lässt sich widerrufen.

Der Server speichert die Spielsitzungen einzeln, so addieren sich die Stunden von zwei PCs, ohne doppelt gezählt zu werden. Das Plugin ist eine C#-Erweiterung für Playnite; Server und Website sind in TypeScript geschrieben und laufen in Docker auf einem ARM-Cloud-Server, mit PostgreSQL. Playshelf ist in Entwicklung und als Beta nur auf Einladung unter <a href="https://playshelf.gabrielepucciarelli.com" target="_blank">playshelf.gabrielepucciarelli.com</a> erreichbar.
