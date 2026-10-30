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
- img/portfolio/full/playshelf/5.jpg
technologies:
- TypeScript
- NestJS, Fastify
- React, Vite
- PostgreSQL, Drizzle
- C#, .NET Framework (plugin Playnite)
- Docker, GitHub Actions
---

Playshelf est un service pour les utilisateurs de Playnite, le programme qui réunit dans une seule bibliothèque les jeux de Steam, GOG, Epic et des autres boutiques. Un plugin, installé sur chaque PC, garde la bibliothèque synchronisée dans les deux sens grâce à un serveur : les notes, statuts, catégories et tags modifiés sur un ordinateur arrivent sur les autres, champ par champ, avec un aperçu et une sauvegarde avant la première synchronisation. Le temps de jeu est enregistré session par session : les heures de deux PC s'additionnent sans être comptées deux fois.

Chaque utilisateur dispose aussi d'un profil public à la Steam : jaquettes, jeux favoris, bibliothèque qu'on peut rechercher et filtrer par statut, activité récente et, pour chaque jeu, une fiche avec description, développeur, notes de la critique et succès débloqués (lus depuis l'extension Playnite Achievements). Un même jeu possédé sur plusieurs boutiques devient une seule fiche. Une page de statistiques montre où vont les heures, la progression, les notes, les succès les plus rares et l'évolution dans le temps. Le profil peut être public, visible seulement par ceux qui ont le lien, ou privé ; un PC se relie au compte avec un code de 8 caractères, sans jamais saisir le mot de passe dans le plugin.

Le site, le serveur et le plugin sont disponibles en six langues (italien, anglais, espagnol, français, allemand et portugais du Brésil). Le plugin est une extension C# pour Playnite ; le serveur et le site sont écrits en TypeScript et tournent dans Docker sur un serveur cloud ARM, avec PostgreSQL. Il est en bêta sur invitation sur <a href="https://playshelf.gabrielepucciarelli.com" target="_blank">playshelf.gabrielepucciarelli.com</a>.
