---
title: Playshelf
name: Playshelf
category: Progetto
group: code
thumbnail: img/portfolio/playshelf.jpg
order: 26
date_label: ottobre, 2026
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
- C#, .NET Framework (plugin Playnite)
- Docker, GitHub Actions
---

Playshelf è un servizio per chi usa Playnite, il programma che riunisce in un'unica libreria i giochi di Steam, GOG, Epic e degli altri store. Un plugin, installato su ogni PC, manda la libreria e le partite a un server, e un sito le mostra insieme: tutti i giochi, da qualunque store e da qualunque computer, in un solo posto.

Ogni utente ha un profilo pubblico in stile Steam, con i giochi preferiti, la libreria cercabile e filtrabile per stato (completato, in corso, da giocare...), le ore di gioco, l'attività recente e le statistiche per store, genere e piattaforma. Il profilo può essere pubblico, visibile solo a chi ha il link, o privato. Il PC si collega al proprio account con un codice di 8 caratteri confermato sul sito, senza mai scrivere la password nel plugin, e ogni collegamento si può revocare.

Il server registra le sessioni di gioco una per una, così le ore di due PC si sommano senza contarle due volte. Il plugin è un'estensione C# per Playnite; il server e il sito sono in TypeScript e girano in Docker su un server cloud ARM, con PostgreSQL. È in sviluppo e in beta a inviti su <a href="https://playshelf.gabrielepucciarelli.com" target="_blank">playshelf.gabrielepucciarelli.com</a>.
