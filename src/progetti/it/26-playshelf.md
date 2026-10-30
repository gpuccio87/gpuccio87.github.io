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
- img/portfolio/full/playshelf/5.jpg
technologies:
- TypeScript
- NestJS, Fastify
- React, Vite
- PostgreSQL, Drizzle
- C#, .NET Framework (plugin Playnite)
- Docker, GitHub Actions
---

Playshelf è un servizio per chi usa Playnite, il programma che riunisce in un'unica libreria i giochi di Steam, GOG, Epic e degli altri store. Un plugin, installato su ogni PC, tiene la libreria sincronizzata in entrambe le direzioni attraverso un server: voti, stati, categorie e tag cambiati su un computer arrivano sugli altri, campo per campo, con un'anteprima e un backup prima della prima sincronizzazione. Le ore di gioco si registrano sessione per sessione, così quelle di due PC si sommano senza contarle due volte.

Ogni utente ha poi un profilo pubblico in stile Steam: copertine, giochi preferiti, libreria cercabile e filtrabile per stato, attività recente e, per ogni gioco, una scheda con descrizione, sviluppatore, voti della critica e achievement sbloccati (letti dall'estensione Playnite Achievements). Lo stesso gioco posseduto su più store diventa una scheda sola. Una pagina di statistiche mostra dove vanno le ore, il completamento, i voti, gli achievement più rari e l'andamento nel tempo. Il profilo può essere pubblico, visibile solo a chi ha il link, o privato; il PC si collega all'account con un codice di 8 caratteri, senza mai scrivere la password nel plugin.

Sito, server e plugin sono in sei lingue (italiano, inglese, spagnolo, francese, tedesco e portoghese brasiliano). Il plugin è un'estensione C# per Playnite; il server e il sito sono in TypeScript e girano in Docker su un server cloud ARM, con PostgreSQL. È in beta a inviti su <a href="https://playshelf.gabrielepucciarelli.com" target="_blank">playshelf.gabrielepucciarelli.com</a>.
