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

Tonight, c'est <a class="ajax-page-load" href="portfolio-11.html">MoviePal</a> transformé en service web multi-utilisateurs, pour les films et les séries TV : « des conseils tirés de votre historique ». Chaque utilisateur importe les titres qu'il a vus (depuis l'application de bureau ou d'autres sites), les note, et reçoit un classement de suggestions calculé selon son « affinité », qui combine les films vus, son propre ADN cinématographique (genres, réalisateurs, époques, thèmes issus aussi de Wikidata) et les goûts des personnes ayant noté de façon similaire. Le classement se filtre par humeur, durée et plateforme, et « Similaires à celui-ci » part d'un ou deux films pour en trouver d'autres proches.

Chaque film a sa page, et chaque réalisateur et acteur la sienne, avec toute sa filmographie issue de TMDB. Les titres s'enregistrent dans « À voir », et Tonight prévient, sur le site et par e-mail, quand l'un d'eux arrive sur une plateforme à laquelle on est abonné. Avec « Recommander », on envoie un titre à un ami, même s'il n'utilise pas Tonight, grâce à une fiche publique.

Il y a aussi une partie sociale : des amis avec un code d'invitation, la comparaison entre les ADN de deux personnes et « What are we watching Tonight? », la soirée en trois étapes où l'on choisit avec qui et quand, chacun vote pour son humeur et ses contraintes, même directement depuis l'invitation par e-mail, et Tonight propose le film à regarder ensemble. Il se connecte aux Plex, Jellyfin, Radarr et Sonarr de l'utilisateur, et l'interface est disponible en six langues et fonctionne aussi sur téléphone.

Le service tourne dans Docker sur un serveur cloud ARM, avec une base de données PostgreSQL, un déploiement automatique et une page d'administration ; pour l'instant, il est en bêta sur invitation sur tonight.gabrielepucciarelli.com.
