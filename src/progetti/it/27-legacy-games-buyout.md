---
title: Legacy Games Buyout
name: Legacy Games Buyout
category: Progetto
group: code
thumbnail: img/portfolio/legacy-games-buyout.jpg
order: 27
date_label: ottobre, 2026
author: Gabriele Pucciarelli
images:
- img/portfolio/full/legacygames/1.jpg
technologies:
- PowerShell
- Estensione Playnite
- API REST
---

Legacy Games chiude il 28 febbraio 2027: da quel giorno launcher, sito e plugin di Playnite per quella libreria smetteranno di funzionare, e i giochi regalati negli anni (per esempio con Prime Gaming) rischiano di sparire. Legacy Games Buyout è un'estensione per Playnite che li mette in salvo prima.

Con un comando scarica in una cartella a scelta gli installer di tutti i giochi dell'account, regali e acquisti, con la barra di avanzamento di Playnite; i download interrotti riprendono da dove si erano fermati. Con un altro converte i giochi della libreria Legacy Games in normali giochi manuali di Playnite: restano la stessa voce, quindi ore di gioco, achievement, copertine, tag e categorie non si perdono, e ognuno riceve l'azione per avviare l'installer e, se installato, quella per giocare. Prima di cambiare qualcosa mostra un'anteprima di cosa succederà a ogni gioco.

Funziona tutto dentro Playnite, senza il launcher; c'è anche uno script PowerShell da riga di comando che fa lo stesso download e può installare i giochi in modo silenzioso. Per farlo ho studiato come il launcher parla con il server di Legacy Games e come si comportano i suoi installer. Il codice è su <a href="https://github.com/gpuccio87/legacy-games-buyout" target="_blank">GitHub</a>, con licenza MIT.
