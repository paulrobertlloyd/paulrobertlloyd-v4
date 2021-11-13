---
title: Climbing the IndieWeb
date: 2021-01-02T20:30:00Z
location:
  locality: Brighton
  country-name: England
summary: The web is agreement?
category:
  - IndieWeb
  - JavaScript
  - Programming
---
While working on [Indiekit](https://getindiekit.com) over Christmas, I’ve been thinking that a good anaology for building on the [IndieWeb](https://indieweb.org) is climbing Mount Everest; it’s largely inaccessible without enough time, knowledge and expertise, and few people ever reach the summit. If you do attempt an ascent, the climb can be bloody exhausting.

Take for example how 3 related specifications allow you to represent plaintext and HTML content in a post:

1. [MF2](https://microformats.org/wiki/microformats2):

    ```json
    "content": [{
      "value": "Everest is the highest mountain on Earth.",
      "html": "<p>Everest is the highest mountain on Earth.</p>"
    }]
    ```

2. [JF2](https://jf2.spec.indieweb.org/):

    ```json
    "content": {
      "text": "Everest is the highest mountain on Earth.",
      "html": "<p>Everest is the highest mountain on Earth.</p>"
    }
    ```

3. [JSON Feed](https://jsonfeed.org/version/1.1):

    ```json
    "content_text": "Everest is the highest mountain on Earth.",
    "content_html": "<p>Everest is the highest mountain on Earth.</p>"
    ```

This isn’t a problem specific to the IndieWeb, just the nature of open source software. [The web is agreement](https://www.thewebisagreement.com), but it rarely feels that way.
