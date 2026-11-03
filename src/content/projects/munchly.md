---
title: Munchly
context: Mobile app · Team of four
when: "2024"
order: 5
role: Wrote the app's foundation (search, pantry, and saved tabs), plus theming, the grocery list, and recipe details.
skim: "A mobile app that turns what's in your pantry into recipes."
topics: [products]
deep:
  - "Recipes come from the Spoonacular API; the pantry, saved recipes, and grocery list are stored on the device."
  - "Built with Expo Router tabs for search, pantry, and saved recipes."
figure:
  src: "/figures/munchly-flow.svg"
  alt: "Diagram: your pantry feeds a recipe search through the Spoonacular API, which returns recipes; recipes can be saved, and missing ingredients go to a grocery list."
  caption: "How the app fits together: pantry in, recipes out, missing ingredients onto the grocery list."
tags: [React Native, Expo, Spoonacular API]
links:
  - { label: Code, href: "https://github.com/anushehchaudry/munchly" }
---
An app that turns what's already in your pantry <mark>into recipes</mark>, and keeps your grocery list in sync with what's missing.
