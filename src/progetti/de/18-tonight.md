---
title: Tonight
name: Tonight
category: Projekt
group: code
thumbnail: img/portfolio/tonight.jpg
order: 18
date_label: Oktober 2026
author: Gabriele Pucciarelli
images:
- img/portfolio/full/tonight/1.jpg
- img/portfolio/full/tonight/2.jpg
- img/portfolio/full/tonight/3.jpg
- img/portfolio/full/tonight/4.jpg
technologies:
- Python
- FastAPI
- PostgreSQL, SQLAlchemy, Alembic
- Docker, GitHub Actions
- TMDB API, Wikidata
- Plex, Jellyfin, Radarr, Sonarr
---

Tonight ist <a class="ajax-page-load" href="portfolio-11.html">MoviePal</a>, verwandelt in einen Webdienst für mehrere Nutzer, für Filme und Serien: "Empfehlungen aus deinem Archiv". Jeder Nutzer importiert die Titel, die er gesehen hat (aus der Desktop-App oder von anderen Websites), bewertet sie und erhält eine Rangliste von Vorschlägen, berechnet nach seiner "Affinität", die die gesehenen Filme, die eigene Film-DNA (Genres, Regisseure, Epochen, Themen, teils auch aus Wikidata) und den Geschmack von Leuten mit ähnlichen Bewertungen zusammenführt.

Es gibt einen sozialen Teil: Freunde per Einladungscode, den Vergleich der DNA zweier Personen, Titel, die man einem Freund empfehlen kann, und den "Filmabend", bei dem eine Gruppe über Stimmung und Vorgaben abstimmt und Tonight den Film vorschlägt, den man gemeinsam schaut. Tonight verbindet sich mit Plex, Jellyfin, Radarr und Sonarr des Nutzers und berücksichtigt die Streaming-Plattformen, die er abonniert hat. Die Oberfläche ist in sechs Sprachen verfügbar und funktioniert auch auf dem Handy.

Der Dienst läuft in Docker auf einem ARM-Cloud-Server, mit PostgreSQL-Datenbank, automatischem Deployment und einer Administrationsseite; vorerst ist er als Beta nur auf Einladung unter tonight.gabrielepucciarelli.com erreichbar.
