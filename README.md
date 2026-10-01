# gabrielepucciarelli.com

Sito personale generato con [Eleventy](https://www.11ty.dev/) e pubblicato da Cloudflare Pages a ogni push su `main`.

## Dove sono i contenuti

| Cosa                     | File                                   |
| ------------------------ | -------------------------------------- |
| Dati generali, menu      | `src/_data/site.yml`                   |
| Home (ruoli a rotazione) | `src/_data/home.yml`                   |
| Chi sono                 | `src/_data/about.yml`                  |
| Resume                   | `src/_data/resume.yml`                 |
| Portfolio (articoli, video, tesi, interviste, stream) | `src/_data/portfolio.yml` |
| Progetti (software, stampa 3D) | `src/progetti/*.md`, uno per progetto |
| Post del blog            | `src/blog/*`, uno per post             |
| Contatti                 | `src/_data/contact.yml`                |
| Immagini, PDF, CSS, JS   | `src/img`, `src/articles`, `src/thesis`, `src/css`, `src/js` |

Il layout vive in `src/_includes` e non va toccato per aggiornare i contenuti.

## Aggiungere un progetto

Crea `src/progetti/17-nome-progetto.md`:

```md
---
title: Nome completo del progetto
name: Nome breve (griglia)
category: Progetto
group: code          # code = Software, 3D = Stampa 3D
thumbnail: img/portfolio/python.jpg
order: 17            # genera portfolio-17.html
date_label: marzo, 2026
images:
  - img/portfolio/full/nomeprogetto/1.jpg
technologies:
  - Python
---

Descrizione del progetto, in testo semplice.
```

## Aggiungere un post

Crea `src/blog/03-titolo.md`:

```md
---
title: Titolo del post
category: Libri
image: img/blog/blog_post_3.jpg
image_full: img/blog/blog_post_3_full.jpg
topics: [libri, suggerimenti]
order: 3             # genera blog-post-3.html
---

Testo del post in Markdown.
```

## Sviluppo locale

```sh
npm install
npm start        # anteprima su http://localhost:8080
npm run build    # genera il sito in _site/
```

## Form contatti

Il form usa [Web3Forms](https://web3forms.com) e compare solo quando in `src/_data/contact.yml` il campo `form.access_key` contiene la chiave ottenuta dal sito (gratuita, arriva via email). I messaggi vengono recapitati all'indirizzo con cui si è richiesta la chiave.

## Pannello di amministrazione

Su `https://www.gabrielepucciarelli.com/admin` c'è Decap CMS: login con GitHub, poi si possono creare e modificare post, progetti e le pagine del sito da browser. Ogni salvataggio è un commit su `main` e Cloudflare ripubblica il sito in circa un minuto.

Il login passa dalle funzioni in `functions/api/` e usa una OAuth App GitHub; il Client ID e il Client Secret sono variabili d'ambiente del progetto Pages (`GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET`). La configurazione delle collezioni è in `src/admin/config.yml`.
