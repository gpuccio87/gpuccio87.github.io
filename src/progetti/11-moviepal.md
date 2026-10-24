---
title: MoviePal 5.1
name: MoviePal
category: Progetto
group: code
thumbnail: img/portfolio/python.jpg
order: 11
date_label: 2026
author: Gabriele Pucciarelli
images:
- img/portfolio/full/moviepal.jpg
technologies:
- Python
- PySide6 (Qt)
- SQLite
- TMDB API
- OMDb API
- MDBList API
- Plex, Jellyfin, Radarr, Sonarr
---

MoviePal è un'applicazione desktop in Python per il suggerimento di film e serie TV. Nata nel 2021 come semplice script, oggi è un programma completo con interfaccia grafica in Qt, disponibile in sei lingue e distribuito come eseguibile per Windows.

Basandosi sui titoli visti e sul voto che l'utente ha dato a ciascuno, MoviePal costruisce un grafo di film collegati (con i dati di TMDB, OMDb e MDBList) e ordina i suggerimenti per "affinità", combinando diversi algoritmi. Tiene traccia di visti, suggeriti e scartati, ha filtri per genere, anno, piattaforma e voto, e due modalità separate per film e serie.

Si collega ai servizi della mediateca di casa: legge e scrive i voti su Plex e Jellyfin, e manda i titoli scelti a Radarr e Sonarr per scaricarli. Da MoviePal è nato <a class="ajax-page-load" href="portfolio-18.html">Tonight</a>, la sua versione web per più utenti. Il nome, "MoviePal", è stato generato da ChatGPT!
