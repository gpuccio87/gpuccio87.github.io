---
title: Playshelf
name: Playshelf
category: Projet
group: code
thumbnail: img/portfolio/playshelf.jpg
order: 26
date_label: octobre 2026
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

Playshelf est un service pour les utilisateurs de Playnite, le programme qui réunit dans une seule bibliothèque les jeux de Steam, GOG, Epic et des autres boutiques. Un plugin, installé sur chaque PC, envoie la bibliothèque et les parties à un serveur, et un site les affiche ensemble : tous vos jeux, de n'importe quelle boutique et de n'importe quel ordinateur, au même endroit.

Chaque utilisateur a un profil public à la Steam, avec ses jeux favoris, une bibliothèque qu'on peut rechercher et filtrer par statut (terminé, en cours, à jouer...), le temps de jeu, l'activité récente et des statistiques par boutique, genre et plateforme. Le profil peut être public, visible seulement par ceux qui ont le lien, ou privé. Un PC se relie au compte avec un code de 8 caractères confirmé sur le site, sans jamais saisir le mot de passe dans le plugin, et chaque liaison peut être révoquée.

Le serveur enregistre les sessions de jeu une par une : les heures de deux PC s'additionnent sans être comptées deux fois. Le plugin est une extension C# pour Playnite ; le serveur et le site sont écrits en TypeScript et tournent dans Docker sur un serveur cloud ARM, avec PostgreSQL. Il est en développement et en bêta sur invitation sur <a href="https://playshelf.gabrielepucciarelli.com" target="_blank">playshelf.gabrielepucciarelli.com</a>.
