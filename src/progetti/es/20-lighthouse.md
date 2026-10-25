---
title: Lighthouse
name: Lighthouse
category: Proyecto
group: code
thumbnail: img/portfolio/lighthouse.jpg
order: 20
date_label: octubre de 2026
author: Gabriele Pucciarelli
images:
- img/portfolio/full/lighthouse/1.jpg
technologies:
- C#
- .NET Framework 4.8
- Windows Forms
- rclone
---

Lighthouse es una pequeña app para Windows, open source, que vive en el área de notificación y arranca, vigila y reinicia los programas que deben ejecutarse desde el inicio de sesión: ante todo los mounts de rclone (Google Drive y las demás nubes montadas como discos), pero también scripts de AutoHotkey, RealTimeSync y cualquier otro programa en segundo plano.

Sustituye la carpeta de Inicio llena de archivos .bat y accesos directos por un único icono con forma de faro, que cambia de color según el estado: verde si todo funciona, amarillo si algo va mal, rojo si un proceso se ha cerrado. Desde el menú cada elemento se puede iniciar, detener o reiniciar, y los programas que fallan se reinician solos. En el primer arranque importa la configuración existente (accesos directos, clave Run del registro, mounts ya activos) y localiza el comando real que hay detrás de cada uno; con rclone se comunica a través de su API de control, cierra los mounts de forma limpia y avisa si hay subidas pendientes.

Es un único ejecutable de unos 70 KB, sin dependencias, sin instalación y sin permisos de administrador, configurado con un sencillo archivo .ini. El código está en <a href="https://github.com/gpuccio87/Lighthouse" target="_blank">GitHub</a>, con licencia MIT.
