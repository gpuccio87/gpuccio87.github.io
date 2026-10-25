---
title: MoviePal 5.1
name: MoviePal
category: Projet
group: code
thumbnail: img/portfolio/python.jpg
order: 11
date_label: 2026
author: Gabriele Pucciarelli
images:
- img/portfolio/full/moviepal.jpg
technologies:
- Python
- PySide6 (Qt)
- SQLite
- TMDB API
- OMDb API
- MDBList API
- Plex, Jellyfin, Radarr, Sonarr
---

MoviePal est une application de bureau en Python qui recommande des films et des séries TV. Née en 2021 comme simple script, c'est aujourd'hui un programme complet avec une interface graphique en Qt, disponible en six langues et distribué sous forme d'exécutable pour Windows.

À partir des titres vus et de la note que l'utilisateur a donnée à chacun, MoviePal construit un graphe de films liés (avec les données de TMDB, OMDb et MDBList) et classe les suggestions par « affinité », en combinant plusieurs algorithmes. Il garde la trace des titres vus, suggérés et écartés, propose des filtres par genre, année, plateforme et note, et deux modes séparés pour les films et les séries.

Il se connecte aux services de la médiathèque de la maison : il lit et écrit les notes sur Plex et Jellyfin, et envoie les titres choisis à Radarr et Sonarr pour les télécharger. De MoviePal est né <a class="ajax-page-load" href="portfolio-18.html">Tonight</a>, sa version web multi-utilisateurs. Le nom, « MoviePal », a été généré par ChatGPT !
