---
title: Tonight
name: Tonight
category: Projekt
group: code
thumbnail: img/portfolio/tonight.jpg
order: 18
sort_date: '2026-10-27'
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

Tonight ist <a class="ajax-page-load" href="portfolio-11.html">MoviePal</a>, verwandelt in einen Webdienst für mehrere Nutzer, für Filme und Serien: "Empfehlungen aus deinem Archiv". Jeder Nutzer importiert die Titel, die er gesehen hat (aus der Desktop-App oder von anderen Websites), bewertet sie und erhält eine Rangliste von Vorschlägen, berechnet nach seiner "Affinität", die die gesehenen Filme, die eigene Film-DNA (Genres, Regisseure, Epochen, Themen, teils auch aus Wikidata) und den Geschmack von Leuten mit ähnlichen Bewertungen zusammenführt. Die Rangliste lässt sich nach Stimmung, Länge und Plattform filtern, und "Ähnlich wie dieser" geht von einem oder zwei Filmen aus, um verwandte zu finden.

Jeder Film hat eine eigene Seite, ebenso jeder Regisseur und Schauspieler, mit der ganzen Filmografie aus TMDB. Titel lassen sich auf "Merkliste" setzen, und Tonight meldet sich, auf der Website und per E-Mail, wenn einer auf einer abonnierten Plattform erscheint. Mit "Empfehlen" schickt man einem Freund einen Titel, auch wenn er Tonight nicht nutzt, über eine öffentliche Seite.

Dazu kommt ein sozialer Teil: Freunde per Einladungscode, der Vergleich der DNA zweier Personen und "What are we watching Tonight?", der Filmabend in drei Schritten: Man wählt, mit wem und wann, alle stimmen über Stimmung und Vorgaben ab, auch direkt aus der Einladung per E-Mail, und Tonight schlägt den Film vor, den man gemeinsam schaut. Tonight verbindet sich mit Plex, Jellyfin, Radarr und Sonarr des Nutzers, und die Oberfläche ist in sechs Sprachen verfügbar und funktioniert auch auf dem Handy.

Der Dienst läuft in Docker auf einem ARM-Cloud-Server, mit PostgreSQL-Datenbank, automatischem Deployment und einer Administrationsseite; vorerst ist er als Beta nur auf Einladung unter tonight.gabrielepucciarelli.com erreichbar.
