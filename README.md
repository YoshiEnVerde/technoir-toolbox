[![Build Status](https://travis-ci.org/YoshiEnVerde/technoir-toolbox.svg?branch=master)](https://travis-ci.org/YoshiEnVerde/technoir-toolbox)
[![Coverage Status](https://coveralls.io/repos/github/YoshiEnVerde/technoir-toolbox/badge.svg?branch=master)](https://coveralls.io/github/YoshiEnVerde/technoir-toolbox?branch=master)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/YoshiEnVerde/technoir-toolbox.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/YoshiEnVerde/technoir-toolbox/alerts/)
[![SonarQube Bugs](https://sonarcloud.io/api/project_badges/measure?project=yoshienverde-github%3Atechnoir-toolbox&metric=bugs)](https://sonarcloud.io/dashboard?id=yoshienverde-github%3Atechnoir-toolbox)
[![SonarQube Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=yoshienverde-github%3Atechnoir-toolbox&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=yoshienverde-github%3Atechnoir-toolbox)
[![SonarQube Maintainability](https://sonarcloud.io/api/project_badges/measure?project=yoshienverde-github%3Atechnoir-toolbox&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=yoshienverde-github%3Atechnoir-toolbox)
[![SonarQube Reliability](https://sonarcloud.io/api/project_badges/measure?project=yoshienverde-github%3Atechnoir-toolbox&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=yoshienverde-github%3Atechnoir-toolbox)
[![SonarQube Security](https://sonarcloud.io/api/project_badges/measure?project=yoshienverde-github%3Atechnoir-toolbox&metric=security_rating)](https://sonarcloud.io/dashboard?id=yoshienverde-github%3Atechnoir-toolbox)

# The Technoir Multipurpose Toolbox (`technoir-toolbox`)
Multipurpose set of tools for GMing on the Technoir TTRPG system.

## Summary
This project is a collection of tools I'm developing to help me GM my Technoir sessions.
This contains, mainly, a multipurpose Discord bot, with many commands for different useful helpers.

### Why?
This started from my need to correct some bugs on the useful, but very simple, [Technoir Bot](https://glitch.com/~technoir-bot "Original Technoir Bot's Page"). Mainly, a rounding error that made it all but impossible to roll 6s on a d6.

From there, I started adding small extra features (starting with a nicer look to the rolls results). Then a quick NPC builder, that has you select three training programs and returns the list of verbs, for quick cardboard mooks.

This brought a lot of stability issues, which led me to refactor the code to handle errors. Then came issues with server connections, which led to more robustness refactoring.

From that, the idea was born, to create a well developed bot, where I could add and toggle different features as needed.

### Goal
I want to build a complete server, which will not only run the Discord bot, but also handle WS requests.
This app will serve handy bot commands for use in the Discord chat throughout my online Technoir sessions, plus give me quick access web tools for handling all the backgound GMing details, like NPCs, connections/story map, push dice economy manager, storefronts and catalogs for objects/tags/NPCs, transmissions library, etc.

My aim, ultimately, is to be able to keep a fully digitalized copy of all my sessions, with all the mechanisms to be able to add, remove, browse, libraries full of details, real-time mid-sessions.

## State
### Current Version
- v0.2: Added color formatting for the T-Bot, and some basic logging.
- v0.1: Technoir Bot, with 6s bug fixed.

### Upcoming Versions
- v0.3: Will add error handling, and code robustness
- v0.4: Will add the NPC builder
