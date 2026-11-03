---
title: FisioRadar
name: FisioRadar
category: Proyecto
group: code
thumbnail: img/portfolio/fisioradar.jpg
order: 28
sort_date: '2026-11-03'
date_label: '2026'
author: Gabriele Pucciarelli
images:
- img/portfolio/full/fisioradar/1.jpg
technologies:
- n8n
- FreshRSS
- Claude Haiku, Claude Sonnet
- PubMed, Europe PMC
- Caddy, Cloudflare
- Síntesis de voz local
---

FisioRadar: cada semana, los estudios de fisioterapia que importan, ponderados y resumidos. A los fisioterapeutas se nos pide trabajar según la evidencia, pero quien trabaja en consulta no tiene tiempo de leer PubMed cada semana: salen cientos de estudios nuevos, casi todos pequeños, muchos ajenos a la rehabilitación, y pocos podrían cambiar de verdad lo que hacemos el lunes por la mañana. FisioRadar intenta encontrar esos pocos.

Cuatro veces al día recoge las novedades de unas 40 fuentes: 9 búsquedas guardadas en PubMed, 20 revistas (JOSPT, BJSM, Journal of Physiotherapy, PTJ, Cochrane…) y 11 blogs y pódcast de divulgación; si falta el resumen, lo busca en Europe PMC. Un modelo de inteligencia artificial lee cada estudio, lo clasifica por área, tema, diseño y número de participantes, y escribe una síntesis con una nota "En la práctica": a qué paciente se aplica, qué proponer en concreto y cuál es su principal limitación. Después puntúa de 0 a 10 siete factores, que una fórmula fija combina en un peso único: relevancia clínica 24%, diseño del estudio 22%, calidad metodológica 14%, muestra 12%, aplicabilidad 10%, credibilidad de la revista 10%, novedad 8%.

El resultado es una página por semana con los estudios agrupados por tema y un histograma de los pesos que sirve de filtro, el boletín de los lunes en <a href="https://t.me/fisioradar" target="_blank">Telegram</a> con los 10 estudios de más peso y un pódcast de unos 7 minutos, con guion escrito por la inteligencia artificial y voz sintetizada en local. Cada estudio enlaza al artículo en la web del editor. Funciona con n8n en un servidor doméstico, con FreshRSS para las fuentes, Claude Haiku para las puntuaciones y Claude Sonnet para el pódcast; la web estática está en un pequeño VPS. Trabaja sobre los resúmenes y no sustituye una evaluación GRADE: es un primer cribado. Es gratuito, vive de donaciones y está en línea (en italiano) en <a href="https://fisioradar.gabrielepucciarelli.com" target="_blank">fisioradar.gabrielepucciarelli.com</a>.
