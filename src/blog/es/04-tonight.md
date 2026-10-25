---
title: "Tonight: de un script para películas a un servicio para los amigos"
category: Proyectos
description: La historia de MoviePal, que se convirtió en Tonight, y de cómo calcula las recomendaciones de películas y series.
image: img/blog/blog_post_4.jpg
image_full: img/blog/blog_post_4_full.jpg
image_alt: La página de inicio de Tonight
topics:
- proyectos
- películas
- series de tv
order: 4
---

Todo empezó con una pregunta que conoce cualquiera: *¿qué veo esta noche?*

En 2021 escribí **MoviePal**, un script en Python que, a partir de las películas que había visto y de la nota que les había dado, me sugería qué ver después. Con los años fue creciendo: una interfaz de verdad, las series de TV, seis idiomas, la conexión con Plex y Radarr. Hoy en mi archivo hay más de setecientas películas puntuadas.

Pero era un programa para una sola persona, en mi ordenador. Este año decidí convertirlo en un servicio web, para más personas: **Tonight**.

### Cómo nace una recomendación

El punto de partida son los títulos que has visto. Para cada uno, Tonight mira qué otras películas o series le son "cercanas" (parecidas, recomendadas por quien la adoró) y construye una red de conexiones: en mi caso, miles de candidatos.

Cada candidato recibe una **afinidad de 0 a 100**, que combina tres señales:

- **Lo que has visto.** Una película conectada con muchos títulos que has puntuado bien sube; una conectada con títulos que no te gustaron baja.
- **Tu ADN.** Tonight mira qué tienen en común las películas que te encantan: directores, géneros, épocas, temas, actores. De ahí sale un perfil, con los rasgos que "te empujan hacia arriba" y los que "te frenan".
- **La multitud.** Las personas que han puntuado de forma parecida a ti, de manera anónima, aportan títulos que tú solo no habrías encontrado.

Para saber si un cambio en el algoritmo mejora de verdad las recomendaciones, construí un banco de pruebas: oculto una parte de las películas que ya he visto y compruebo cuántas de las que me encantaron consigue Tonight volver a encontrar en lo alto de la clasificación. Una sorpresa: de todos los rasgos del ADN, el que más cuenta es la **década**. Cada uno tiene su época preferida, más de lo que cree.

### Ver juntos

La parte que más me divierte es la de los amigos. Con un código de invitación se añade uno al otro, se comparan los respectivos ADN, se recomienda un título. Y sobre todo está **Tonight, together**: eliges con quién estás viendo y Tonight busca las películas que están en lo alto de la clasificación de *todos*, no solo de la tuya. La puntuación es una media que premia los títulos que gustan a cada uno y penaliza los que solo gustan a uno.

Para las noches en grupo hay también una pequeña encuesta: cada uno indica su estado de ánimo y sus condiciones (nada de terror, como mucho dos horas…) y Tonight propone la película.

### En qué punto está

Tonight está en **beta por invitación**. Funciona desde el ordenador y desde el móvil, está en seis idiomas, se conecta a Plex, Jellyfin, Radarr y Sonarr, e importa las notas de IMDb, Letterboxd, Trakt y otras webs. Si queréis probarlo, escribidme.
