---
title: Tonight
name: Tonight
category: Proyecto
group: code
thumbnail: img/portfolio/tonight.jpg
order: 18
sort_date: '2026-10-27'
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

Tonight es <a class="ajax-page-load" href="portfolio-11.html">MoviePal</a> convertido en un servicio web para varios usuarios, para películas y series de TV: "recomendaciones a partir de tu archivo". Cada usuario importa los títulos que ha visto (desde la app de escritorio o desde otras webs), los puntúa y recibe una clasificación de recomendaciones calculada según su "afinidad", que combina las películas vistas, su propio ADN cinematográfico (géneros, directores, épocas, temas tomados también de Wikidata) y los gustos de quienes han puntuado de forma parecida. La clasificación se filtra por estado de ánimo, duración y plataforma, y "Similares a esta" parte de una o dos películas para encontrar otras cercanas.

Cada película tiene su página, y cada director y actor la suya, con toda la filmografía de TMDB. Los títulos se guardan en "Para ver", y Tonight avisa, en la web y por email, cuando uno llega a una plataforma a la que estás suscrito. Con "Recomendar" se envía un título a un amigo, aunque no use Tonight, con una ficha pública.

Hay también una parte social: amigos con código de invitación, la comparación entre el ADN de dos personas y "What are we watching Tonight?", la noche de cine en tres pasos en la que se elige con quién y cuándo, cada uno vota el estado de ánimo y las condiciones, incluso desde la invitación por email, y Tonight propone la película para ver juntos. Se conecta al Plex, Jellyfin, Radarr y Sonarr del usuario, y la interfaz está en seis idiomas y funciona también desde el móvil.

El servicio corre en Docker en un servidor cloud ARM, con base de datos PostgreSQL, despliegue automático y una página de administración; por ahora está en beta por invitación en tonight.gabrielepucciarelli.com.
