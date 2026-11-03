---
title: FisioRadar
name: FisioRadar
category: Projekt
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
- Lokale Sprachsynthese
---

FisioRadar: jede Woche die Physiotherapie-Studien, die zählen, gewichtet und zusammengefasst. Von Physiotherapeuten wird erwartet, evidenzbasiert zu arbeiten, doch wer in der Praxis arbeitet, hat keine Zeit, jede Woche PubMed zu lesen: Es erscheinen Hunderte neuer Studien, fast alle klein, viele ohne Bezug zur Rehabilitation, und nur wenige könnten wirklich ändern, was wir am Montagmorgen tun. FisioRadar versucht, diese wenigen zu finden.

Viermal am Tag sammelt es die Neuigkeiten aus rund 40 Quellen: 9 gespeicherte PubMed-Suchen, 20 Fachzeitschriften (JOSPT, BJSM, Journal of Physiotherapy, PTJ, Cochrane…) und 11 Blogs und Podcasts für ein breiteres Publikum; fehlt der Abstract, sucht es ihn bei Europe PMC. Ein KI-Modell liest jede Studie, ordnet sie nach Bereich, Thema, Studiendesign und Teilnehmerzahl ein und schreibt eine Zusammenfassung mit einer Notiz „In der Praxis“: für welche Patienten sie gilt, was man konkret anbieten kann und was ihre wichtigste Einschränkung ist. Dann bewertet es sieben Faktoren von 0 bis 10, die eine feste Formel zu einem einzigen Gewicht verbindet: klinische Relevanz 24 %, Studiendesign 22 %, methodische Qualität 14 %, Stichprobe 12 %, Anwendbarkeit 10 %, Glaubwürdigkeit der Zeitschrift 10 %, Neuheit 8 %.

Das Ergebnis ist eine Seite pro Woche mit den Studien nach Thema gruppiert und einem Histogramm der Gewichte als Filter, das Montagsbulletin auf <a href="https://t.me/fisioradar" target="_blank">Telegram</a> mit den 10 gewichtigsten Studien und ein Podcast von etwa 7 Minuten, dessen Skript eine KI schreibt und dessen Stimme lokal synthetisiert wird. Jede Studie verlinkt auf den Artikel auf der Website des Verlags. FisioRadar läuft mit n8n auf einem Server zu Hause, mit FreshRSS für die Quellen, Claude Haiku für die Bewertungen und Claude Sonnet für den Podcast; die statische Website liegt auf einem kleinen VPS. Es arbeitet mit Abstracts und ersetzt keine GRADE-Bewertung: Es ist eine erste Vorauswahl. FisioRadar ist kostenlos, lebt von Spenden und ist (auf Italienisch) unter <a href="https://fisioradar.gabrielepucciarelli.com" target="_blank">fisioradar.gabrielepucciarelli.com</a> online.
