---
title: "Tonight: from a movie script to a service for friends"
category: Projects
description: The story of MoviePal, which became Tonight, and how it works out its film and series recommendations.
image: img/blog/blog_post_4.jpg
image_full: img/blog/blog_post_4_full.jpg
image_alt: The Tonight home page
topics:
- projects
- films
- tv series
order: 4
---

It all started with a question everyone knows: *what should I watch tonight?*

In 2021 I wrote **MoviePal**, a Python script that, starting from the films I had watched and the rating I had given them, suggested what to watch next. Over the years it grew: a real interface, TV series, six languages, a connection to Plex and Radarr. Today my library holds more than seven hundred rated films.

But it was a program for one person, on my computer. This year I decided to turn it into a web service for more people: **Tonight**.

### How a recommendation is born

The starting point is the titles you've watched. For each one, Tonight looks at which other films or series are "close" to it (similar, recommended by people who loved it) and builds a network of connections: in my case, thousands of candidates.

Each candidate gets an **affinity from 0 to 100**, which combines three signals:

- **What you've watched.** A film connected to many titles you rated highly goes up; one connected to titles you didn't like goes down.
- **Your DNA.** Tonight looks at what the films you love have in common: directors, genres, eras, themes, actors. Out of this comes a profile, with the traits that "push you up" and those that "hold you back".
- **The crowd.** People who rated in a similar way to you, anonymously, bring in titles you wouldn't have found on your own.

To find out whether a change to the algorithm really improves the recommendations, I built a test bench: I hide some of the films I've already watched and check how many of the ones I loved Tonight manages to find again at the top of the ranking. A surprise: of all the DNA traits, the one that matters most is the **decade**. Everyone has their favourite era, more than they think.

### Watching together

The part I enjoy most is the one with friends. With an invite code you add each other, compare your DNA, and recommend titles to one another. Above all there's **Tonight, together**: choose who you're watching with and Tonight looks for the films that rank high for *everyone*, not just for you. The score is an average that rewards titles each person likes and penalizes those only one person likes.

For group nights there's also a little poll: everyone states their mood and constraints (no horror, two hours max…) and Tonight suggests the film.

### Where it stands

Tonight is in **invite-only beta**. It works on computers and phones, it's in six languages, it connects to Plex, Jellyfin, Radarr and Sonarr, and it imports ratings from IMDb, Letterboxd, Trakt and other sites. If you'd like to try it, drop me a line.
