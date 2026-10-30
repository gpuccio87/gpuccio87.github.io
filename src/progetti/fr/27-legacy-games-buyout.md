---
title: Legacy Games Buyout
name: Legacy Games Buyout
category: Projet
group: code
thumbnail: img/portfolio/legacy-games-buyout.jpg
order: 27
date_label: octobre 2026
author: Gabriele Pucciarelli
images:
- img/portfolio/full/legacygames/1.jpg
technologies:
- PowerShell
- Extension Playnite
- API REST
---

Legacy Games ferme le 28 février 2027 : à partir de ce jour, le launcher, le site et le plugin Playnite pour cette bibliothèque cesseront de fonctionner, et les jeux offerts au fil des années (par exemple avec Prime Gaming) risquent de disparaître. Legacy Games Buyout est une extension pour Playnite qui les met à l'abri avant.

Une commande télécharge dans le dossier de votre choix les installateurs de tous les jeux du compte, offerts et achetés, avec la barre de progression de Playnite ; les téléchargements interrompus reprennent là où ils s'étaient arrêtés. Une autre convertit les jeux de la bibliothèque Legacy Games en jeux manuels Playnite ordinaires : ils restent la même entrée, donc le temps de jeu, les succès, les jaquettes, les tags et les catégories sont conservés, et chacun reçoit une action pour lancer son installateur et, une fois installé, une pour jouer. Avant de modifier quoi que ce soit, elle montre un aperçu de ce qui arrivera à chaque jeu.

Tout se passe dans Playnite, sans le launcher ; il y a aussi un script PowerShell en ligne de commande qui fait le même téléchargement et peut installer les jeux en mode silencieux. Pour le réaliser, j'ai étudié comment le launcher communique avec le serveur de Legacy Games et comment se comportent ses installateurs. Le code est sur <a href="https://github.com/gpuccio87/legacy-games-buyout" target="_blank">GitHub</a>, sous licence MIT.
