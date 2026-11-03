---
title: FisioRadar
name: FisioRadar
category: Projet
group: code
thumbnail: img/portfolio/fisioradar.jpg
order: 28
sort_date: '2026-11-03'
date_label: '2026'
author: Gabriele Pucciarelli
images:
- img/portfolio/full/fisioradar/1.jpg
technologies:
- n8n
- FreshRSS
- Claude Haiku, Claude Sonnet
- PubMed, Europe PMC
- Caddy, Cloudflare
- Synthèse vocale locale
---

FisioRadar : chaque semaine, les études de kinésithérapie qui comptent, pondérées et résumées. On demande aux kinésithérapeutes de travailler selon les preuves, mais ceux qui exercent en cabinet n'ont pas le temps de lire PubMed chaque semaine : des centaines de nouvelles études paraissent, presque toutes petites, beaucoup sans rapport avec la rééducation, et peu pourraient vraiment changer ce que nous faisons le lundi matin. FisioRadar essaie de trouver celles-là.

Quatre fois par jour, il rassemble les nouveautés d'environ 40 sources : 9 recherches enregistrées sur PubMed, 20 revues (JOSPT, BJSM, Journal of Physiotherapy, PTJ, Cochrane…) et 11 blogs et podcasts de vulgarisation ; si le résumé manque, il le cherche sur Europe PMC. Un modèle d'intelligence artificielle lit chaque étude, la classe par domaine, thème, type d'étude et nombre de participants, et rédige une synthèse avec une note « En pratique » : à quel patient elle s'applique, que proposer concrètement et quelle est sa principale limite. Il note ensuite sept facteurs de 0 à 10, qu'une formule fixe combine en un poids unique : pertinence clinique 24 %, type d'étude 22 %, qualité méthodologique 14 %, échantillon 12 %, applicabilité 10 %, crédibilité de la revue 10 %, nouveauté 8 %.

Le résultat : une page par semaine avec les études regroupées par thème et un histogramme des poids qui sert de filtre, le bulletin du lundi sur <a href="https://t.me/fisioradar" target="_blank">Telegram</a> avec les 10 études les plus lourdes, et un podcast d'environ 7 minutes, dont le texte est écrit par l'intelligence artificielle et la voix synthétisée en local. Chaque étude renvoie à l'article sur le site de l'éditeur. Il tourne sur n8n dans un serveur domestique, avec FreshRSS pour les sources, Claude Haiku pour les notes et Claude Sonnet pour le podcast ; le site statique est hébergé sur un petit VPS. Il travaille sur les résumés et ne remplace pas une évaluation GRADE : c'est un premier tri. Il est gratuit, vit de dons et se trouve en ligne (en italien) sur <a href="https://fisioradar.gabrielepucciarelli.com" target="_blank">fisioradar.gabrielepucciarelli.com</a>.
