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
- img/portfolio/full/playshelf/5.jpg
technologies:
- TypeScript
- NestJS, Fastify
- React, Vite
- PostgreSQL, Drizzle
- C#, .NET Framework (Playnite-Plugin)
- Docker, GitHub Actions
---

Playshelf ist ein Dienst für Nutzer von Playnite, dem Programm, das die Spiele von Steam, GOG, Epic und den anderen Stores in einer einzigen Bibliothek zusammenführt. Ein Plugin, auf jedem PC installiert, hält die Bibliothek über einen Server in beide Richtungen synchron: Bewertungen, Status, Kategorien und Tags, die auf einem Rechner geändert werden, kommen Feld für Feld auf den anderen an, mit einer Vorschau und einer Sicherung vor der ersten Synchronisierung. Die Spielzeit wird Sitzung für Sitzung erfasst, so addieren sich die Stunden von zwei PCs, ohne doppelt gezählt zu werden.

Jeder Nutzer hat außerdem ein öffentliches Profil im Stil von Steam: Cover, Lieblingsspiele, eine durchsuchbare Bibliothek mit Filtern nach Status, letzte Aktivitäten und für jedes Spiel eine Seite mit Beschreibung, Entwickler, Kritikerwertungen und freigeschalteten Erfolgen (aus der Erweiterung Playnite Achievements). Dasselbe Spiel in mehreren Stores wird zu einem einzigen Eintrag. Eine Statistikseite zeigt, wohin die Stunden gehen, den Fortschritt, die Bewertungen, die seltensten Erfolge und den Verlauf über die Zeit. Das Profil kann öffentlich, nur über den Link sichtbar oder privat sein; ein PC wird mit einem 8-stelligen Code mit dem Konto verbunden, ohne dass das Passwort je im Plugin eingegeben wird.

Website, Server und Plugin gibt es in sechs Sprachen (Italienisch, Englisch, Spanisch, Französisch, Deutsch und brasilianisches Portugiesisch). Das Plugin ist eine C#-Erweiterung für Playnite; Server und Website sind in TypeScript geschrieben und laufen in Docker auf einem ARM-Cloud-Server, mit PostgreSQL. Playshelf ist als Beta nur auf Einladung unter <a href="https://playshelf.gabrielepucciarelli.com" target="_blank">playshelf.gabrielepucciarelli.com</a> erreichbar.
