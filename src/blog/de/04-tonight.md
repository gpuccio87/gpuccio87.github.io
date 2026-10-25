---
title: "Tonight: von einem Skript für Filme zu einem Dienst für Freunde"
category: Projekte
description: Die Geschichte von MoviePal, aus dem Tonight wurde, und wie es Empfehlungen für Filme und Serien berechnet.
image: img/blog/blog_post_4.jpg
image_full: img/blog/blog_post_4_full.jpg
image_alt: Die Startseite von Tonight
topics:
- Projekte
- Filme
- Serien
order: 4
---

Alles begann mit einer Frage, die jeder kennt: *Was schaue ich heute Abend?*

2021 habe ich **MoviePal** geschrieben, ein Python-Skript, das mir ausgehend von den Filmen, die ich gesehen hatte, und der Bewertung, die ich ihnen gegeben hatte, vorschlug, was ich als Nächstes schauen sollte. Mit den Jahren ist es gewachsen: eine richtige Oberfläche, Serien, sechs Sprachen, die Anbindung an Plex und Radarr. Heute sind in meinem Archiv mehr als siebenhundert bewertete Filme.

Es war allerdings ein Programm für eine einzige Person, auf meinem Computer. Dieses Jahr habe ich beschlossen, daraus einen Webdienst für mehrere Personen zu machen: **Tonight**.

### Wie eine Empfehlung entsteht

Ausgangspunkt sind die Titel, die du gesehen hast. Für jeden davon schaut Tonight, welche anderen Filme oder Serien ihm "nahe" sind (ähnlich, empfohlen von Leuten, die ihn geliebt haben), und baut ein Netz von Verbindungen auf: in meinem Fall Tausende von Kandidaten.

Jeder Kandidat bekommt eine **Affinität von 0 bis 100**, die drei Signale zusammenführt:

- **Was du gesehen hast.** Ein Film, der mit vielen Titeln verbunden ist, die du gut bewertet hast, steigt; einer, der mit Titeln verbunden ist, die dir nicht gefallen haben, sinkt.
- **Deine DNA.** Tonight schaut, was die Filme, die du liebst, gemeinsam haben: Regisseure, Genres, Epochen, Themen, Schauspieler. Daraus entsteht ein Profil mit den Merkmalen, die "dich nach oben ziehen", und denen, die "dich bremsen".
- **Die Masse.** Menschen, die ähnlich bewertet haben wie du, bringen anonym Titel ein, die du allein nicht gefunden hättest.

Um herauszufinden, ob eine Änderung am Algorithmus die Empfehlungen wirklich verbessert, habe ich einen Prüfstand gebaut: Ich verstecke einen Teil der Filme, die ich schon gesehen habe, und prüfe, wie viele von denen, die ich geliebt habe, Tonight ganz oben in der Rangliste wiederfindet. Eine Überraschung: Von allen Merkmalen der DNA zählt das **Jahrzehnt** am meisten. Jeder hat seine Lieblingsepoche, mehr als er glaubt.

### Gemeinsam schauen

Am meisten Spaß macht mir der Teil mit den Freunden. Mit einem Einladungscode fügt man sich gegenseitig hinzu, vergleicht die jeweilige DNA, empfiehlt sich Titel. Und vor allem gibt es **Tonight, together**: Du wählst aus, mit wem du schaust, und Tonight sucht die Filme, die in der Rangliste von *allen* weit oben stehen, nicht nur in deiner. Die Punktzahl ist ein Durchschnitt, der Titel belohnt, die jedem gefallen, und solche abstraft, die nur einem gefallen.

Für Gruppenabende gibt es auch eine kleine Umfrage: Jeder gibt Stimmung und Vorgaben an (kein Horror, höchstens zwei Stunden…) und Tonight schlägt den Film vor.

### Wie weit es ist

Tonight ist in der **Beta, nur auf Einladung**. Es funktioniert auf dem Computer und auf dem Handy, ist in sechs Sprachen verfügbar, verbindet sich mit Plex, Jellyfin, Radarr und Sonarr und importiert Bewertungen von IMDb, Letterboxd, Trakt und anderen Websites. Wenn ihr es ausprobieren wollt, schreibt mir.
