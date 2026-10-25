---
title: Lighthouse
name: Lighthouse
category: Projet
group: code
thumbnail: img/portfolio/lighthouse.jpg
order: 20
date_label: octobre 2026
author: Gabriele Pucciarelli
images:
- img/portfolio/full/lighthouse/1.jpg
technologies:
- C#
- .NET Framework 4.8
- Windows Forms
- rclone
---

Lighthouse est une petite application open source pour Windows qui vit dans la zone de notification et qui lance, surveille et relance les programmes devant tourner dès l'ouverture de session : avant tout les montages rclone (Google Drive et les autres clouds montés comme des disques), mais aussi les scripts AutoHotkey, RealTimeSync et n'importe quel autre programme en arrière-plan.

Il remplace le dossier Démarrage rempli de fichiers .bat et de raccourcis par une seule icône en forme de phare, qui change de couleur selon l'état : vert si tout tourne, jaune si quelque chose ne va pas, rouge si un processus s'est fermé. Depuis le menu, chaque élément peut être lancé, arrêté ou relancé, et les programmes qui plantent sont relancés automatiquement. Au premier lancement, il importe la configuration existante (raccourcis, clé Run du registre, montages déjà actifs) et remonte jusqu'à la vraie commande derrière chacun ; avec rclone, il dialogue via son API de contrôle, démonte proprement les montages et prévient s'il reste des envois en attente.

C'est un exécutable unique d'environ 70 Ko, sans dépendances, sans installation et sans droits d'administrateur, configuré par un simple fichier .ini. Le code est sur <a href="https://github.com/gpuccio87/Lighthouse" target="_blank">GitHub</a>, sous licence MIT.
