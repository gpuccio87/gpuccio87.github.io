---
title: Lighthouse
name: Lighthouse
category: Progetto
group: code
thumbnail: img/portfolio/lighthouse.jpg
order: 20
date_label: ottobre, 2026
author: Gabriele Pucciarelli
images:
- img/portfolio/full/lighthouse/1.jpg
technologies:
- C#
- .NET Framework 4.8
- Windows Forms
- rclone
---

Lighthouse è una piccola app per Windows, open source, che vive nell'area di notifica e avvia, sorveglia e riavvia i programmi che devono girare dal momento dell'accesso: prima di tutto i mount di rclone (Google Drive e gli altri cloud montati come dischi), ma anche script AutoHotkey, RealTimeSync e qualsiasi altro programma in background.

Sostituisce la cartella Esecuzione automatica piena di file .bat e collegamenti con un'unica icona a forma di faro, che cambia colore secondo lo stato: verde se tutto gira, giallo se qualcosa non va, rosso se un processo si è chiuso. Dal menu ogni voce si avvia, si ferma o si riavvia, e i programmi che vanno in crash vengono riavviati da soli. Al primo avvio importa la configurazione esistente (collegamenti, chiave Run del registro, mount già attivi) e risale al comando vero dietro ciascuno; con rclone dialoga attraverso la sua API di controllo, chiude i mount in modo pulito e avvisa se ci sono caricamenti in sospeso.

È un unico eseguibile da circa 70 KB, senza dipendenze, senza installazione e senza diritti di amministratore, configurato con un semplice file .ini. Il codice è su <a href="https://github.com/gpuccio87/Lighthouse" target="_blank">GitHub</a>, con licenza MIT.
