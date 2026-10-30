---
title: Legacy Games Buyout
name: Legacy Games Buyout
category: Proyecto
group: code
thumbnail: img/portfolio/legacy-games-buyout.jpg
order: 27
date_label: octubre de 2026
author: Gabriele Pucciarelli
images:
- img/portfolio/full/legacygames/1.jpg
technologies:
- PowerShell
- Extensión de Playnite
- API REST
---

Legacy Games cierra el 28 de febrero de 2027: desde ese día el launcher, la web y el plugin de Playnite para esa biblioteca dejarán de funcionar, y los juegos regalados a lo largo de los años (por ejemplo con Prime Gaming) pueden perderse. Legacy Games Buyout es una extensión para Playnite que los pone a salvo antes.

Con un comando descarga en la carpeta que elijas los instaladores de todos los juegos de la cuenta, regalos y compras, con la barra de progreso de Playnite; las descargas interrumpidas se reanudan donde se quedaron. Con otro convierte los juegos de la biblioteca Legacy Games en juegos manuales normales de Playnite: siguen siendo la misma entrada, así que las horas de juego, los logros, las portadas, las etiquetas y las categorías no se pierden, y cada uno recibe la acción para abrir su instalador y, una vez instalado, la de jugar. Antes de cambiar nada muestra una vista previa de lo que pasará con cada juego.

Todo funciona dentro de Playnite, sin el launcher; también hay un script de PowerShell para la línea de comandos que hace la misma descarga y puede instalar los juegos en modo silencioso. Para hacerlo estudié cómo el launcher se comunica con el servidor de Legacy Games y cómo se comportan sus instaladores. El código está en <a href="https://github.com/gpuccio87/legacy-games-buyout" target="_blank">GitHub</a>, con licencia MIT.
