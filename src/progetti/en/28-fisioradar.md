---
title: FisioRadar
name: FisioRadar
category: Project
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
- Local speech synthesis
---

FisioRadar: every week, the physiotherapy studies that matter, weighted and summarised. Physiotherapists are asked to work according to the evidence, but people working in a clinic don't have time to read PubMed every week: hundreds of new studies come out, almost all of them small, many unrelated to rehabilitation, and few that could really change what we do on Monday morning. FisioRadar tries to find those few.

Four times a day it collects what's new from about 40 sources: 9 saved PubMed searches, 20 journals (JOSPT, BJSM, Journal of Physiotherapy, PTJ, Cochrane…) and 11 blogs and podcasts for a general audience; when the abstract is missing, it looks it up on Europe PMC. An AI model reads every study, classifies it by area, topic, study design and number of participants, and writes a summary with an "In practice" note: which patient it applies to, what to offer in concrete terms and what its main limitation is. It then scores seven factors from 0 to 10, which a fixed formula combines into a single weight: clinical relevance 24%, study design 22%, methodological quality 14%, sample 12%, applicability 10%, journal credibility 10%, novelty 8%.

The result is one page per week with studies grouped by topic and a histogram of the weights that works as a filter, a Monday bulletin on <a href="https://t.me/fisioradar" target="_blank">Telegram</a> with the 10 heaviest studies, and a podcast of about 7 minutes, scripted by AI and voiced with local speech synthesis. Every study links to the article on the publisher's site. It runs on n8n on a home server, with FreshRSS for the sources, Claude Haiku for the scores and Claude Sonnet for the podcast; the static site lives on a small VPS. It works on abstracts and doesn't replace a GRADE assessment: it's a first screening. It's free, runs on donations and is online (in Italian) at <a href="https://fisioradar.gabrielepucciarelli.com" target="_blank">fisioradar.gabrielepucciarelli.com</a>.
