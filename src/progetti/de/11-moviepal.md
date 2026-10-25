---
title: MoviePal 5.1
name: MoviePal
category: Projekt
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

MoviePal ist eine Desktop-Anwendung in Python, die Filme und Serien vorschlägt. Entstanden 2021 als einfaches Skript, ist sie heute ein vollständiges Programm mit grafischer Oberfläche in Qt, in sechs Sprachen verfügbar und als ausführbare Datei für Windows verteilt.

Auf Grundlage der gesehenen Titel und der Bewertung, die der Nutzer jedem gegeben hat, baut MoviePal einen Graphen miteinander verbundener Filme auf (mit den Daten von TMDB, OMDb und MDBList) und sortiert die Vorschläge nach "Affinität", wobei mehrere Algorithmen kombiniert werden. Es merkt sich Gesehenes, Vorgeschlagenes und Aussortiertes, bietet Filter nach Genre, Jahr, Plattform und Bewertung und hat zwei getrennte Modi für Filme und Serien.

Es verbindet sich mit den Diensten der heimischen Mediathek: Es liest und schreibt die Bewertungen in Plex und Jellyfin und schickt die ausgewählten Titel zum Herunterladen an Radarr und Sonarr. Aus MoviePal ist <a class="ajax-page-load" href="portfolio-18.html">Tonight</a> entstanden, seine Webversion für mehrere Nutzer. Der Name "MoviePal" wurde von ChatGPT generiert!
