---
title: Tonight
name: Tonight
category: Project
group: code
thumbnail: img/portfolio/tonight.jpg
order: 18
sort_date: '2026-10-27'
date_label: October 2026
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

Tonight is <a class="ajax-page-load" href="portfolio-11.html">MoviePal</a> turned into a multi-user web service for films and TV series: "recommendations from your own library". Each user imports the titles they've watched (from the desktop app or from other sites), rates them, and gets a ranking of suggestions based on their "affinity", which combines the films they've watched, their own film DNA (genres, directors, eras, themes, drawn partly from Wikidata) and the tastes of people who rated in a similar way. The ranking can be filtered by mood, length and platform, and "Similar to this" starts from one or two films to find others close to them.

Every film has its own page, and so does every director and actor, with their full filmography from TMDB. Titles can be saved to "Watchlist", and Tonight lets you know, on the site and by email, when one arrives on a platform you subscribe to. With "Recommend" you can send a title to a friend, even one who doesn't use Tonight, through a public page.

There's also a social side: friends via invite codes, a comparison between two people's DNA, and "What are we watching Tonight?", a three-step movie night where you choose who's coming and when, everyone votes on mood and constraints, even straight from the email invite, and Tonight suggests the film to watch together. It connects to the user's Plex, Jellyfin, Radarr and Sonarr, and the interface is in six languages and works on phones too.

The service runs in Docker on an ARM cloud server, with a PostgreSQL database, automatic deployment and an admin page; for now it's in invite-only beta at tonight.gabrielepucciarelli.com.
