---
title: "Tonight: da uno script per i film a un servizio per gli amici"
category: Progetti
description: La storia di MoviePal, diventato Tonight, e di come calcola i consigli su film e serie.
image: img/blog/blog_post_4.jpg
image_full: img/blog/blog_post_4_full.jpg
image_alt: La home di Tonight
topics:
- progetti
- film
- serie tv
order: 4
---

Tutto è cominciato con una domanda che conosce chiunque: *stasera cosa guardo?*

Nel 2021 ho scritto **MoviePal**, uno script in Python che, partendo dai film che avevo visto e dal voto che gli avevo dato, mi suggeriva cosa vedere dopo. Negli anni è cresciuto: un'interfaccia vera, le serie TV, sei lingue, il collegamento a Plex e Radarr. Oggi nel mio archivio ci sono più di settecento film votati.

Era però un programma per una persona sola, sul mio computer. Quest'anno ho deciso di farlo diventare un servizio web, per più persone: **Tonight**.

### Come nasce un consiglio

Il punto di partenza sono i titoli che hai visto. Per ognuno, Tonight guarda quali altri film o serie gli sono "vicini" (simili, consigliati da chi l'ha amato) e costruisce una rete di collegamenti: nel mio caso, migliaia di candidati.

Ogni candidato riceve un'**affinità da 0 a 100**, che mette insieme tre segnali:

- **I tuoi visti.** Un film collegato a tanti titoli che hai votato bene sale; uno collegato a titoli che non ti sono piaciuti scende.
- **Il tuo DNA.** Tonight guarda cosa hanno in comune i film che ami: registi, generi, epoche, temi, attori. Ne esce un profilo, con i tratti che "ti spingono in alto" e quelli che "ti frenano". Il mio, per esempio, premia Miyazaki e Hitchcock e boccia i cinepanettoni.
- **La folla.** Le persone che hanno votato in modo simile a te, in forma anonima, portano titoli che da solo non avresti trovato.

Per capire se una modifica all'algoritmo migliora davvero i consigli, ho costruito un banco di prova: nascondo una parte dei film che ho già visto e controllo quanti di quelli che avevo amato Tonight riesce a ritrovare in cima alla classifica. Una sorpresa: fra tutti i tratti del DNA, quello che conta di più è il **decennio**. Ognuno ha la sua epoca preferita, più di quanto creda.

### Guardare insieme

La parte che mi diverte di più è quella con gli amici. Con un codice d'invito ci si aggiunge a vicenda, si confrontano i rispettivi DNA, ci si segnala un titolo. E soprattutto c'è **Tonight, together**: scegli con chi stai guardando e Tonight cerca i film che stanno in alto nella classifica di *tutti*, non solo nella tua. Il punteggio è una media che premia i titoli che piacciono a ciascuno e penalizza quelli che piacciono a uno solo.

Per le serate in gruppo c'è anche un piccolo sondaggio: ognuno indica l'umore e i vincoli (niente horror, massimo due ore…) e Tonight propone il film.

### A che punto è

Tonight è in **beta a inviti**. Funziona da computer e da telefono, è in sei lingue, si collega a Plex, Jellyfin, Radarr e Sonarr, e importa i voti da IMDb, Letterboxd, Trakt e altri siti. Se volete provarlo, scrivetemi.
