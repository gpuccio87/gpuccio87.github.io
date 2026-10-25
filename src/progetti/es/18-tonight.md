---
title: Tonight
name: Tonight
category: Proyecto
group: code
thumbnail: img/portfolio/tonight.jpg
order: 18
date_label: octubre de 2026
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

Tonight es <a class="ajax-page-load" href="portfolio-11.html">MoviePal</a> convertido en un servicio web para varios usuarios, para películas y series de TV: "recomendaciones a partir de tu archivo". Cada usuario importa los títulos que ha visto (desde la app de escritorio o desde otras webs), los puntúa y recibe una clasificación de recomendaciones calculada según su "afinidad", que combina las películas vistas, su propio ADN cinematográfico (géneros, directores, épocas, temas tomados también de Wikidata) y los gustos de quienes han puntuado de forma parecida.

Hay una parte social: amigos con código de invitación, la comparación entre el ADN de dos personas, los títulos para recomendar a un amigo y la "noche de cine", en la que un grupo vota el estado de ánimo y las condiciones y Tonight propone la película para ver juntos. Se conecta al Plex, Jellyfin, Radarr y Sonarr del usuario y tiene en cuenta las plataformas de streaming a las que está suscrito. La interfaz está en seis idiomas y funciona también desde el móvil.

El servicio corre en Docker en un servidor cloud ARM, con base de datos PostgreSQL, despliegue automático y una página de administración; por ahora está en beta por invitación en tonight.gabrielepucciarelli.com.
