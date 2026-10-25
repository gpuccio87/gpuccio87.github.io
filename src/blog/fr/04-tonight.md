---
title: "Tonight : d'un script pour les films à un service pour les amis"
category: Projets
description: L'histoire de MoviePal, devenu Tonight, et de la façon dont il calcule ses recommandations de films et de séries.
image: img/blog/blog_post_4.jpg
image_full: img/blog/blog_post_4_full.jpg
image_alt: La page d'accueil de Tonight
topics:
- projets
- films
- séries tv
order: 4
---

Tout a commencé par une question que tout le monde connaît : *qu'est-ce que je regarde ce soir ?*

En 2021, j'ai écrit **MoviePal**, un script en Python qui, à partir des films que j'avais vus et de la note que je leur avais donnée, me suggérait quoi regarder ensuite. Au fil des années, il a grandi : une vraie interface, les séries TV, six langues, la connexion à Plex et Radarr. Aujourd'hui, mon historique compte plus de sept cents films notés.

Mais c'était un programme pour une seule personne, sur mon ordinateur. Cette année, j'ai décidé d'en faire un service web, pour plusieurs personnes : **Tonight**.

### Comment naît une recommandation

Le point de départ, ce sont les titres que vous avez vus. Pour chacun, Tonight regarde quels autres films ou séries en sont « proches » (similaires, recommandés par ceux qui l'ont adoré) et construit un réseau de liens : dans mon cas, des milliers de candidats.

Chaque candidat reçoit une **affinité de 0 à 100**, qui combine trois signaux :

- **Ce que vous avez vu.** Un film lié à beaucoup de titres que vous avez bien notés monte ; un film lié à des titres qui ne vous ont pas plu descend.
- **Votre ADN.** Tonight regarde ce qu'ont en commun les films que vous aimez : réalisateurs, genres, époques, thèmes, acteurs. Il en ressort un profil, avec les traits qui « vous tirent vers le haut » et ceux qui « vous freinent ».
- **La foule.** Les personnes qui ont noté de façon similaire à vous, de manière anonyme, apportent des titres que vous n'auriez pas trouvés seul.

Pour savoir si une modification de l'algorithme améliore vraiment les recommandations, j'ai construit un banc d'essai : je cache une partie des films que j'ai déjà vus et je vérifie combien de ceux que j'avais adorés Tonight parvient à retrouver en haut du classement. Une surprise : parmi tous les traits de l'ADN, celui qui compte le plus est la **décennie**. Chacun a son époque préférée, plus qu'il ne le croit.

### Regarder ensemble

La partie qui m'amuse le plus, c'est celle avec les amis. Avec un code d'invitation, on s'ajoute mutuellement, on compare nos ADN respectifs, on se recommande un titre. Et surtout, il y a **Tonight, together** : vous choisissez avec qui vous regardez et Tonight cherche les films qui sont en haut du classement de *tout le monde*, pas seulement du vôtre. Le score est une moyenne qui récompense les titres qui plaisent à chacun et pénalise ceux qui ne plaisent qu'à un seul.

Pour les soirées en groupe, il y a aussi un petit sondage : chacun indique son humeur et ses contraintes (pas d'horreur, deux heures maximum…) et Tonight propose le film.

### Où en est-il

Tonight est en **bêta sur invitation**. Il fonctionne sur ordinateur et sur téléphone, il est disponible en six langues, il se connecte à Plex, Jellyfin, Radarr et Sonarr, et il importe les notes depuis IMDb, Letterboxd, Trakt et d'autres sites. Si vous voulez l'essayer, écrivez-moi.
