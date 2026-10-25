---
title: Lighthouse
name: Lighthouse
category: Projekt
group: code
thumbnail: img/portfolio/lighthouse.jpg
order: 20
date_label: Oktober 2026
author: Gabriele Pucciarelli
images:
- img/portfolio/full/lighthouse/1.jpg
technologies:
- C#
- .NET Framework 4.8
- Windows Forms
- rclone
---

Lighthouse ist eine kleine Open-Source-App für Windows, die im Infobereich der Taskleiste lebt und die Programme startet, überwacht und neu startet, die ab der Anmeldung laufen müssen: allen voran die rclone-Mounts (Google Drive und die anderen als Laufwerke eingebundenen Clouds), aber auch AutoHotkey-Skripte, RealTimeSync und jedes andere Hintergrundprogramm.

Es ersetzt den Autostart-Ordner voller .bat-Dateien und Verknüpfungen durch ein einziges Symbol in Form eines Leuchtturms, das je nach Zustand die Farbe wechselt: grün, wenn alles läuft, gelb, wenn etwas nicht stimmt, rot, wenn sich ein Prozess beendet hat. Über das Menü lässt sich jeder Eintrag starten, stoppen oder neu starten, und abgestürzte Programme werden automatisch neu gestartet. Beim ersten Start übernimmt es die vorhandene Konfiguration (Verknüpfungen, Run-Schlüssel der Registry, bereits aktive Mounts) und ermittelt den eigentlichen Befehl hinter jedem Eintrag; mit rclone kommuniziert es über dessen Steuerungs-API, beendet die Mounts sauber und warnt, wenn noch Uploads ausstehen.

Es ist eine einzige ausführbare Datei von etwa 70 KB, ohne Abhängigkeiten, ohne Installation und ohne Administratorrechte, konfiguriert über eine einfache .ini-Datei. Der Code liegt auf <a href="https://github.com/gpuccio87/Lighthouse" target="_blank">GitHub</a>, unter MIT-Lizenz.
