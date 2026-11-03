---
title: FisioRadar
name: FisioRadar
category: Progetto
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
- Sintesi vocale in locale
---

FisioRadar: ogni settimana gli studi di fisioterapia che contano, pesati e riassunti. Ai fisioterapisti si chiede di lavorare secondo le prove, ma chi lavora in ambulatorio non ha il tempo di leggere PubMed ogni settimana: escono centinaia di studi nuovi, quasi tutti piccoli, molti fuori dalla riabilitazione, e pochi potrebbero cambiare davvero quello che facciamo il lunedì mattina. FisioRadar prova a trovare quei pochi.

Quattro volte al giorno raccoglie le novità da circa 40 fonti: 9 ricerche salvate su PubMed, 20 riviste (JOSPT, BJSM, Journal of Physiotherapy, PTJ, Cochrane…) e 11 blog e podcast di divulgazione; se manca l'abstract, lo cerca su Europe PMC. Un modello di intelligenza artificiale legge ogni studio, lo classifica per area, tema, disegno e numero di partecipanti, e scrive una sintesi con una nota "In pratica": a quale paziente si applica, cosa proporre in concreto e qual è il limite principale. Poi dà un voto da 0 a 10 su sette fattori, che una formula fissa combina in un peso unico: rilevanza clinica 24%, disegno dello studio 22%, qualità metodologica 14%, campione 12%, applicabilità 10%, credibilità della rivista 10%, novità 8%.

Il risultato è una pagina a settimana con gli studi raggruppati per tema e un istogramma dei pesi che fa da filtro, il bollettino del lunedì su <a href="https://t.me/fisioradar" target="_blank">Telegram</a> con i 10 studi più pesanti e un podcast di circa 7 minuti, con copione scritto dall'intelligenza artificiale e voce sintetizzata in locale. Ogni studio rimanda all'articolo sul sito dell'editore. Gira su n8n in un server di casa, con FreshRSS per le fonti, Claude Haiku per i voti e Claude Sonnet per il podcast; il sito statico sta su un piccolo VPS. Lavora sugli abstract e non sostituisce una valutazione GRADE: è una prima scrematura. È gratuito, si regge sulle donazioni ed è online su <a href="https://fisioradar.gabrielepucciarelli.com" target="_blank">fisioradar.gabrielepucciarelli.com</a>.
