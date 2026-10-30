---
title: Legacy Games Buyout
name: Legacy Games Buyout
category: Projekt
group: code
thumbnail: img/portfolio/legacy-games-buyout.jpg
order: 27
date_label: Oktober 2026
author: Gabriele Pucciarelli
images:
- img/portfolio/full/legacygames/1.jpg
technologies:
- PowerShell
- Playnite-Erweiterung
- API REST
---

Legacy Games schließt am 28. Februar 2027: Ab diesem Tag funktionieren der Launcher, die Website und das Playnite-Plugin für diese Bibliothek nicht mehr, und die über die Jahre verschenkten Spiele (zum Beispiel über Prime Gaming) könnten verloren gehen. Legacy Games Buyout ist eine Erweiterung für Playnite, die sie vorher in Sicherheit bringt.

Ein Befehl lädt die Installer aller Spiele des Kontos, geschenkte und gekaufte, in einen Ordner deiner Wahl, mit dem Fortschrittsbalken von Playnite; abgebrochene Downloads werden fortgesetzt. Ein anderer wandelt die Spiele der Legacy-Games-Bibliothek in normale manuelle Playnite-Spiele um: Sie bleiben derselbe Eintrag, so gehen Spielzeit, Erfolge, Cover, Tags und Kategorien nicht verloren, und jedes Spiel bekommt eine Aktion zum Starten des Installers und, sobald installiert, eine zum Spielen. Bevor sich etwas ändert, zeigt sie eine Vorschau dessen, was mit jedem Spiel passiert.

Alles läuft in Playnite, ohne Launcher; dazu gibt es ein PowerShell-Skript für die Kommandozeile, das denselben Download erledigt und die Spiele still installieren kann. Dafür habe ich untersucht, wie der Launcher mit dem Server von Legacy Games spricht und wie sich seine Installer verhalten. Der Code liegt auf <a href="https://github.com/gpuccio87/legacy-games-buyout" target="_blank">GitHub</a>, unter MIT-Lizenz.
