---
title: Playshelf
name: Playshelf
category: Proyecto
group: code
thumbnail: img/portfolio/playshelf.jpg
order: 26
date_label: octubre de 2026
author: Gabriele Pucciarelli
images:
- img/portfolio/full/playshelf/1.jpg
- img/portfolio/full/playshelf/2.jpg
- img/portfolio/full/playshelf/3.jpg
- img/portfolio/full/playshelf/4.jpg
technologies:
- TypeScript
- NestJS, Fastify
- React, Vite
- PostgreSQL, Drizzle
- C#, .NET Framework (plugin de Playnite)
- Docker, GitHub Actions
---

Playshelf es un servicio para quien usa Playnite, el programa que reúne en una sola biblioteca los juegos de Steam, GOG, Epic y las demás tiendas. Un plugin, instalado en cada PC, envía la biblioteca y las partidas a un servidor, y una web las muestra juntas: todos los juegos, de cualquier tienda y de cualquier ordenador, en un solo lugar.

Cada usuario tiene un perfil público al estilo de Steam, con los juegos favoritos, la biblioteca con buscador y filtros por estado (completado, en curso, pendiente...), las horas de juego, la actividad reciente y las estadísticas por tienda, género y plataforma. El perfil puede ser público, visible solo para quien tenga el enlace, o privado. El PC se vincula a la cuenta con un código de 8 caracteres que se confirma en la web, sin escribir nunca la contraseña en el plugin, y cada vinculación se puede revocar.

El servidor registra las sesiones de juego una a una, así que las horas de dos PC se suman sin contarse dos veces. El plugin es una extensión en C# para Playnite; el servidor y la web están en TypeScript y funcionan en Docker en un servidor cloud ARM, con PostgreSQL. Está en desarrollo y en beta por invitación en <a href="https://playshelf.gabrielepucciarelli.com" target="_blank">playshelf.gabrielepucciarelli.com</a>.
