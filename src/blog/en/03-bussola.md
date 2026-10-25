---
title: "Bussola: the countries of the world on the political compass, in 3D"
category: Projects
description: How I put 176 countries into a three-axis space, from 1900 to today, and what you discover by looking at the data.
image: img/blog/blog_post_3.jpg
image_full: img/blog/blog_post_3_full.jpg
image_alt: The countries of the world in Bussola's 3D space
topics:
- projects
- politics
- data
order: 3
---

Lots of people know the "political compass": a square with economics on the horizontal axis, from left (more State) to right (more market), and authority on the vertical axis, from libertarian to authoritarian. Usually people or parties are placed on it. I wondered what would happen if you put **countries** on it, and watched them move over time.

That's how [Bussola](https://politicalcompass.gabrielepucciarelli.com) was born.

### Three axes instead of two

Two axes seemed too few to me: there's a difference the classic square can't see, the one between a regime that rests on nationalism and one that doesn't. That's why Bussola has a third axis, **nationalist / internationalist**, and every country becomes a point in a 3D space you can rotate with the mouse.

A timeline at the bottom scrolls through the years, **from 1900 to today**, and the points move. You can switch on a country's trail to see its path, or pick a historical government (Mussolini, Hitler, Stalin, Franco, Pinochet and others) and see where the years it was in power fall.

### Where the numbers come from

I didn't make anything up: the data comes from public academic sources. The main one is **V-Dem** (Varieties of Democracy), a project of the University of Gothenburg that measures hundreds of aspects of every country's institutions, year by year. Then there's **KOF** from ETH Zurich for openness to the world, **Correlates of War** for international organizations and religions, and the **World Bank** for population and income.

Each indicator is brought onto a scale from -10 to +10, and for each country the site shows the source and the original value: anyone who wants to check can.

One thing I learned along the way: choosing *what* an axis measures is the hardest part. The first version of the third axis mixed nationalism and international openness, and the result was odd: Hong Kong came out as the most "nationalist" place in the world, simply because it has no embassies. I separated the two things, and now openness to the world is an axis of its own.

### The axes can be changed

Besides the three main ones, you can put another measure on each axis: openness to the world, secularism, inequality (Gini index), GDP per capita, life expectancy, corruption, women's political power, education, social equality. Below the legend the site calculates how closely two axes go together (the correlation), across the countries you're looking at.

A few numbers for 2023 that got me thinking:

- **GDP and life expectancy** go together almost perfectly (+0.82): no surprise there.
- **Women's political power and authoritarianism** go in opposite directions, and strongly (-0.85): where the regime is more authoritarian, women count for less in politics.
- **Corruption and authoritarianism** rise together (+0.74).
- **Wealth and market economy**, on the other hand, barely talk to each other (+0.18): knowing how free-market a country is tells you little about how rich it is.

### Groups and comparisons

You can isolate continents or alliances (EU, NATO, BRICS, G7, ASEAN, OPEC and others) and see where their average lies. You can colour countries by political regime, prevailing religion or income bracket, and compare several countries or several governments in a table.

The site is in six languages and it's free. If you try it, I'm curious to know what you find: [politicalcompass.gabrielepucciarelli.com](https://politicalcompass.gabrielepucciarelli.com).
