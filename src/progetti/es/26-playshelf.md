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
- img/portfolio/full/playshelf/5.jpg
technologies:
- TypeScript
- NestJS, Fastify
- React, Vite
- PostgreSQL, Drizzle
- C#, .NET Framework (plugin de Playnite)
- Docker, GitHub Actions
---

Playshelf es un servicio para quien usa Playnite, el programa que reúne en una sola biblioteca los juegos de Steam, GOG, Epic y las demás tiendas. Un plugin, instalado en cada PC, mantiene la biblioteca sincronizada en ambas direcciones a través de un servidor: puntuaciones, estados, categorías y etiquetas cambiados en un ordenador llegan a los demás, campo a campo, con una vista previa y una copia de seguridad antes de la primera sincronización. Las horas de juego se registran sesión a sesión, así que las de dos PC se suman sin contarse dos veces.

Cada usuario tiene además un perfil público al estilo de Steam: portadas, juegos favoritos, biblioteca con buscador y filtros por estado, actividad reciente y, para cada juego, una ficha con descripción, desarrollador, notas de la crítica y logros desbloqueados (leídos de la extensión Playnite Achievements). El mismo juego comprado en varias tiendas se convierte en una sola ficha. Una página de estadísticas muestra a dónde van las horas, el porcentaje completado, las puntuaciones, los logros más raros y la evolución en el tiempo. El perfil puede ser público, visible solo para quien tenga el enlace, o privado; el PC se vincula a la cuenta con un código de 8 caracteres, sin escribir nunca la contraseña en el plugin.

La web, el servidor y el plugin están en seis idiomas (italiano, inglés, español, francés, alemán y portugués de Brasil). El plugin es una extensión en C# para Playnite; el servidor y la web están en TypeScript y funcionan en Docker en un servidor cloud ARM, con PostgreSQL. Está en beta por invitación en <a href="https://playshelf.gabrielepucciarelli.com" target="_blank">playshelf.gabrielepucciarelli.com</a>.
