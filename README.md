# gabrielepucciarelli.com

Sito personale generato con [Eleventy](https://www.11ty.dev/) e pubblicato da Cloudflare Pages a ogni push su `main`.

## Dove sono i contenuti

| Cosa                     | File                                   |
| ------------------------ | -------------------------------------- |
| Dati generali, menu      | `src/_data/testi/site.yml`             |
| Home (ruoli a rotazione) | `src/_data/testi/home.yml`             |
| Chi sono                 | `src/_data/testi/about.yml`            |
| Resume                   | `src/_data/testi/resume.yml`           |
| Portfolio (articoli, video, tesi, interviste, stream) | `src/_data/testi/portfolio.yml` |
| Contatti                 | `src/_data/testi/contact.yml`          |
| Testi dell'interfaccia   | `src/_data/testi/ui.yml`               |
| Progetti (software, stampa 3D, automazioni Claude) | `src/progetti/<lingua>/*.md`, uno per progetto |
| Post del blog            | `src/blog/<lingua>/*.md`, uno per post |
| Immagini, PDF, CSS, JS   | `src/img`, `src/articles`, `src/thesis`, `src/css`, `src/js` |

Il layout vive in `src/_includes` e non va toccato per aggiornare i contenuti.

## Lingue

Il sito è in italiano, inglese, spagnolo, francese e tedesco (elenco in `src/_data/lingue.js`).
L'italiano sta alla radice del sito, le altre lingue in `/en/`, `/es/`, `/fr/`, `/de/`.

- I file in `src/_data/testi/` hanno un blocco per lingua (`it:`, `en:`, ...). Quello che manca
  in una lingua (link, icone, immagini) viene preso dal blocco italiano.
- Progetti e post hanno un file per lingua, con lo stesso nome, in `it/`, `en/`, `es/`, `fr/`, `de/`.
  Le immagini del carosello dei progetti si mettono solo nel file italiano.
- Nel pannello `/admin` ogni contenuto si modifica affiancando l'italiano a un'altra lingua.
  Cambiare un testo in italiano non aggiorna le traduzioni: vanno corrette a mano.

## Aggiungere un progetto

Crea `src/progetti/it/17-nome-progetto.md`, e lo stesso file tradotto nelle altre cartelle di lingua:

```md
---
title: Nome completo del progetto
name: Nome breve (griglia)
category: Progetto
group: code          # code = Software, 3D = Stampa 3D, claude = Automazioni Claude
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

Crea `src/blog/it/06-titolo.md`, e lo stesso file tradotto nelle altre cartelle di lingua:

```md
---
title: Titolo del post
category: Libri
description: Una o due frasi per l'anteprima su social e Google (facoltativa)
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
