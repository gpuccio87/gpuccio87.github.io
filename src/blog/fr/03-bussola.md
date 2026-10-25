---
title: "Bussola : les pays du monde sur le political compass, en 3D"
category: Projets
description: Comment j'ai placé 176 pays dans un espace à trois axes, de 1900 à nos jours, et ce que l'on découvre en regardant les données.
image: img/blog/blog_post_3.jpg
image_full: img/blog/blog_post_3_full.jpg
image_alt: Les pays du monde dans l'espace 3D de Bussola
topics:
- projets
- politique
- données
order: 3
---

Le « political compass », beaucoup de gens le connaissent : un carré avec l'économie à l'horizontale, de la gauche (plus d'État) à la droite (plus de marché), et l'autorité à la verticale, de libertaire à autoritaire. D'habitude, on y place des personnes ou des partis. Je me suis demandé ce qui se passerait si on y plaçait des **pays**, et si on les regardait bouger dans le temps.

C'est ainsi qu'est né [Bussola](https://politicalcompass.gabrielepucciarelli.com).

### Trois axes au lieu de deux

Deux axes me semblaient trop peu : il y a une différence que le carré classique ne voit pas, celle entre un régime qui repose sur le nationalisme et un autre qui ne le fait pas. C'est pourquoi Bussola a un troisième axe, **nationaliste / internationaliste**, et chaque pays devient un point dans un espace 3D que l'on peut faire pivoter avec la souris.

Une frise chronologique en bas fait défiler les années, **de 1900 à nos jours**, et les points se déplacent. On peut afficher la trace d'un pays pour voir son parcours, ou choisir un gouvernement historique (Mussolini, Hitler, Staline, Franco, Pinochet et d'autres) et voir où tombent les années où il a été au pouvoir.

### D'où viennent les chiffres

Je n'ai rien inventé : les données proviennent de sources académiques publiques. La principale est **V-Dem** (Varieties of Democracy), un projet de l'Université de Göteborg qui mesure des centaines d'aspects des institutions de chaque pays, année après année. Il y a ensuite le **KOF** de l'École polytechnique fédérale de Zurich pour l'ouverture au monde, le **Correlates of War** pour les organisations internationales et les religions, et la **Banque mondiale** pour la population et le revenu.

Chaque indicateur est ramené sur une échelle de -10 à +10, et pour chaque pays le site indique la source et la valeur d'origine : qui veut vérifier, peut le faire.

Une chose que j'ai apprise en chemin : choisir *ce que* mesure un axe est la partie la plus difficile. La première version du troisième axe mélangeait nationalisme et ouverture internationale, et le résultat était étrange : Hong Kong apparaissait comme l'endroit le plus « nationaliste » du monde, simplement parce qu'il n'a pas d'ambassades. J'ai séparé les deux choses, et maintenant l'ouverture au monde est un axe à part.

### Les axes peuvent être changés

En plus des trois axes principaux, on peut placer sur chaque axe une autre mesure : ouverture au monde, laïcité, inégalités (indice de Gini), PIB par habitant, espérance de vie, corruption, pouvoir politique des femmes, instruction, égalité sociale. Sous la légende, le site calcule à quel point deux axes vont de pair (la corrélation), sur les pays que l'on est en train de regarder.

Quelques chiffres sur 2023, qui m'ont fait réfléchir :

- **PIB et espérance de vie** vont de pair presque parfaitement (+0,82) : ce n'est pas une surprise.
- **Pouvoir politique des femmes et autoritarisme** vont dans des directions opposées, et nettement (-0,85) : là où le régime est plus autoritaire, les femmes pèsent moins en politique.
- **Corruption et autoritarisme** augmentent ensemble (+0,74).
- **Richesse et économie de marché**, en revanche, n'ont presque rien à voir (+0,18) : savoir à quel point un pays est libéral en dit peu sur sa richesse.

### Groupes et comparaisons

On peut isoler les continents ou les alliances (UE, OTAN, BRICS, G7, ASEAN, OPEP et d'autres) et voir où se situe leur moyenne. On peut colorer les pays selon leur régime politique, leur religion dominante ou leur tranche de revenu, et comparer plusieurs pays ou plusieurs gouvernements dans un tableau.

Le site est disponible en six langues et il est gratuit. Si vous l'essayez, je suis curieux de savoir ce que vous y trouverez : [politicalcompass.gabrielepucciarelli.com](https://politicalcompass.gabrielepucciarelli.com).
