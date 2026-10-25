---
title: Tonight
name: Tonight
category: Progetto
group: code
thumbnail: img/portfolio/tonight.jpg
order: 18
date_label: ottobre, 2026
author: Gabriele Pucciarelli
images:
- img/portfolio/full/tonight/1.jpg
- img/portfolio/full/tonight/2.jpg
- img/portfolio/full/tonight/3.jpg
- img/portfolio/full/tonight/4.jpg
technologies:
- Python
- FastAPI
- PostgreSQL, SQLAlchemy, Alembic
- Docker, GitHub Actions
- TMDB API, Wikidata
- Plex, Jellyfin, Radarr, Sonarr
---

Tonight è <a class="ajax-page-load" href="portfolio-11.html">MoviePal</a> trasformato in un servizio web per più utenti, per film e serie TV: "consigli dal tuo archivio". Ogni utente importa i titoli che ha visto (dall'app desktop o da altri siti), li vota, e riceve una classifica di suggerimenti calcolata sulla sua "affinità", che unisce i film visti, il proprio DNA cinematografico (generi, registi, epoche, temi presi anche da Wikidata) e i gusti di chi ha votato in modo simile.

C'è una parte social: amici con codice d'invito, il confronto fra i DNA di due persone, i titoli da segnalare a un amico e la "serata", in cui un gruppo vota umore e vincoli e Tonight propone il film da vedere insieme. Si collega a Plex, Jellyfin, Radarr e Sonarr dell'utente e tiene conto delle piattaforme di streaming a cui è abbonato. L'interfaccia è in sei lingue e funziona anche da telefono.

Il servizio gira in Docker su un server cloud ARM, con database PostgreSQL, rilascio automatico e una pagina di amministrazione; per ora è in beta a inviti su tonight.gabrielepucciarelli.com.
