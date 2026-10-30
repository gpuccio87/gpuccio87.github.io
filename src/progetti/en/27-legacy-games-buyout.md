---
title: Legacy Games Buyout
name: Legacy Games Buyout
category: Project
group: code
thumbnail: img/portfolio/legacy-games-buyout.jpg
order: 27
date_label: October 2026
author: Gabriele Pucciarelli
images:
- img/portfolio/full/legacygames/1.jpg
technologies:
- PowerShell
- Playnite extension
- API REST
---

Legacy Games is shutting down on February 28, 2027: from that day the launcher, the website and the Playnite library plugin will stop working, and the games given away over the years (for example with Prime Gaming) could be lost. Legacy Games Buyout is a Playnite extension that saves them first.

One command downloads the installers of every game on the account, giveaways and purchases, into a folder of your choice, with Playnite's progress bar; interrupted downloads resume where they stopped. Another converts the games of the Legacy Games library into regular manual Playnite games: they stay the same entry, so playtime, achievements, covers, tags and categories are kept, and each one gets an action to run its installer and, once installed, one to play. Before changing anything it shows a preview of what will happen to every game.

Everything runs inside Playnite, with no launcher; there's also a command-line PowerShell script that does the same download and can install the games silently. To build it I studied how the launcher talks to the Legacy Games server and how its installers behave. The code is on <a href="https://github.com/gpuccio87/legacy-games-buyout" target="_blank">GitHub</a>, under the MIT license.
