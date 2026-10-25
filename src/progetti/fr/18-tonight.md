---
title: Tonight
name: Tonight
category: Projet
group: code
thumbnail: img/portfolio/tonight.jpg
order: 18
date_label: octobre 2026
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

Tonight, c'est <a class="ajax-page-load" href="portfolio-11.html">MoviePal</a> transformé en service web multi-utilisateurs, pour les films et les séries TV : « des conseils tirés de votre historique ». Chaque utilisateur importe les titres qu'il a vus (depuis l'application de bureau ou d'autres sites), les note, et reçoit un classement de suggestions calculé selon son « affinité », qui combine les films vus, son propre ADN cinématographique (genres, réalisateurs, époques, thèmes issus aussi de Wikidata) et les goûts des personnes ayant noté de façon similaire.

Il y a une partie sociale : des amis avec un code d'invitation, la comparaison entre les ADN de deux personnes, les titres à recommander à un ami et la « soirée », où un groupe vote pour son humeur et ses contraintes et Tonight propose le film à regarder ensemble. Il se connecte aux Plex, Jellyfin, Radarr et Sonarr de l'utilisateur et tient compte des plateformes de streaming auxquelles il est abonné. L'interface est disponible en six langues et fonctionne aussi sur téléphone.

Le service tourne dans Docker sur un serveur cloud ARM, avec une base de données PostgreSQL, un déploiement automatique et une page d'administration ; pour l'instant, il est en bêta sur invitation sur tonight.gabrielepucciarelli.com.
