---
title: Lighthouse
name: Lighthouse
category: Project
group: code
thumbnail: img/portfolio/lighthouse.jpg
order: 20
date_label: October 2026
author: Gabriele Pucciarelli
images:
- img/portfolio/full/lighthouse/1.jpg
technologies:
- C#
- .NET Framework 4.8
- Windows Forms
- rclone
---

Lighthouse is a small open source Windows app that lives in the notification area and starts, monitors and restarts the programs that need to run from the moment you sign in: first and foremost rclone mounts (Google Drive and other clouds mounted as drives), but also AutoHotkey scripts, RealTimeSync and any other background program.

It replaces the Startup folder full of .bat files and shortcuts with a single lighthouse-shaped icon that changes colour depending on the status: green if everything is running, yellow if something is wrong, red if a process has closed. From the menu each entry can be started, stopped or restarted, and programs that crash are restarted automatically. On first launch it imports your existing setup (shortcuts, the registry Run key, mounts that are already active) and traces each one back to the real command behind it; it talks to rclone through its remote control API, unmounts cleanly and warns you if there are pending uploads.

It's a single executable of about 70 KB, with no dependencies, no installation and no administrator rights, configured with a simple .ini file. The code is on <a href="https://github.com/gpuccio87/Lighthouse" target="_blank">GitHub</a>, under the MIT license.
