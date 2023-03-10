---
title: Channel 4 News
date: 2010-09-30
summary: Reinventing Channel 4’s news presence on the iPad.
photo:
  url: /projects/channel_4_news/image.jpg
  alt: Channel 4 logo
category:
  - Interaction design
accent_color: '#42246e'
style:
  screenshot-shadow: '#5b1c46'
  screenshot-offset: '#a94989'
aside: |
  Year
  : 2010

  Role
  : Interaction design

  Agency
  : Clearleft
screenshots:
  tablet:
    - url: /projects/channel_4_news/screenshot_home.png
      alt: Home screen
    - url: /projects/channel_4_news/screenshot_special_report.png
      alr: Special report
  sections:
    - url: /projects/channel_4_news/screenshot_category.png
      alt: Category screen
    - url: /projects/channel_4_news/screenshot_article.png
      alt: News article
    - url: /projects/channel_4_news/screenshot_catchup.png
      alt: Catch-up screen
---
{% render 'screenshots' with screenshots.tablet
  alignment: 'bleed'
  imagePreset: 'supporting'
%}

{% render 'aside'
  aside: aside
%}

Broadcast weeknights at 7pm, <cite>[Channel 4 News][1]</cite> is noted for its award-winning coverage of international news and extensive current affairs reporting.

After redesigning their website, Channel 4 wished to reimagine the Channel 4 News service for tablet and smartphone users. While it would have been easy to repurpose the website, research showed that tablet users demonstrated a more leisurely approach that pointed towards a visually rich, linear solution. With this insight, and working alongside James Bates and James Box at Clearleft, I created an engaging browsing mechanism driven by story headlines and high quality imagery. This made it easy for users to casually flip through stories, homing in on anything that caught their eye.

Shortly after its launch Apple featured the app as App of the Week. In a few short weeks the application received over one hundred positive reviews, with an average rating of 4.5 stars.

{% render 'screenshots' with screenshots.sections
  caption: 'Category, article and catch-up screens within the app.'
  alignment: 'bleed'
  imagePreset: 'supporting'
%}

[1]: https://news.channel4.com
