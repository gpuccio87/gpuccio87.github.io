---
title: MoviePal 5.1
name: MoviePal
category: Proyecto
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

MoviePal es una aplicación de escritorio en Python que recomienda películas y series de TV. Nació en 2021 como un simple script y hoy es un programa completo con interfaz gráfica en Qt, disponible en seis idiomas y distribuido como ejecutable para Windows.

A partir de los títulos vistos y de la nota que el usuario ha dado a cada uno, MoviePal construye un grafo de películas relacionadas (con los datos de TMDB, OMDb y MDBList) y ordena las recomendaciones por "afinidad", combinando varios algoritmos. Lleva el registro de lo visto, lo recomendado y lo descartado, tiene filtros por género, año, plataforma y nota, y dos modos separados para películas y series.

Se conecta a los servicios de la mediateca de casa: lee y escribe las notas en Plex y Jellyfin, y envía los títulos elegidos a Radarr y Sonarr para descargarlos. De MoviePal nació <a class="ajax-page-load" href="portfolio-18.html">Tonight</a>, su versión web para varios usuarios. ¡El nombre, "MoviePal", lo generó ChatGPT!
