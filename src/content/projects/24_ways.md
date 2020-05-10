---
title: 24 ways
date: 2013-12-01
summary: Award-winning redesign for popular web geek advent calendar.
image: /images/projects/24_ways/image.jpg
category:
- Brand identity
- Front-end development
- Interaction design
tags:
- featured
related:
- /2013/12/redesigning_24_ways/
- /2018/01/improving_the_accessibility_of_24_ways/
accentColor: '#f04'
style:
  screenshot-shadow: '#b01'
  screenshot-offset: '#f04'
aside: |
  Year
  : Ongoing

  Role
  : Brand identity, design and front-end development

  Notes
  : 'Awarded best collaborative project at the net Awards 2014'
screenshots:
  article:
  - url: /images/projects/24_ways/screenshot_article.png
    alt: Article page
  mobile:
  - url: /images/projects/24_ways/screenshot_archive_mobile.png
    alt: Year archive page on mobile
  - url: /images/projects/24_ways/screenshot_article_mobile.png
    alt: Article page on mobile
  - url: /images/projects/24_ways/screenshot_navigation_mobile.png
    alt: Opened site navigation on mobile
  homepage:
  - url: /images/projects/24_ways/screenshot_homepage.png
    alt: Home page
  - url: /images/projects/24_ways/screenshot_navigation.png
    alt: Opened site navigation
---
{% render 'screenshots' with screenshots.article
  alignment: 'bleed'
%}

{% render 'aside'
  aside: aside
%}

Each December, Drew McLellan and his small team of elves publish [24 ways][1], a daily dose of design and development goodness that delivers a little Christmas cheer to the web community during the period of advent.

The previous website, designed by Tim Van Damme in 2007, pushed the limits of the medium but six years later, and with an accumulated archive of hundreds of articles, it was beginning to fray at the edges. Aesthetically a bit tired, the site also failed to reflect the best practice its authors were now advocating such as advanced web typography, accessible design and the latest CSS techniques. The layout was responsive (thanks to some retrospective hacking) but a fresh approach was needed to effectively deliver content to the broadening range of devices accessing the site.

{% render 'figure'
  content: '> I’m in the fortunate position of knowing lots of really great web designers – many of whom have been authors for 24 ways over the years. I figured I’d start with my top-choice dream person, and work down the list until I found someone who’d be prepared to do it. So I started by asking Paul Robert Lloyd, and he said yes.'
  caption: '[Drew McLellan on rebuilding 24 ways](https://allinthehead.com/retro/366/rebuilding-24-ways)'
%}

With content that tended to be forward-looking, the design could afford to be also. With an audience using bleeding-edge browsers and not afraid to view source, I could use future-facing techniques that might ordinarily be avoided on most projects. In my article [The Web Aesthetic][2], I urged designers to move beyond traditional print-inspired layouts and instead look more to other examples of digital software — all while being true to the universal nature of the medium. Could this be an opportunity to make those ideas real?

## Setting the tone

24 ways is not a commercial venture, and with little budget to spend on web fonts, I sought out open source typefaces. I settled on Adobe’s Source super-family; using Source Sans Pro for headings and reference copy would give the site a clean, modern feel; the Source Serif Pro to give articles a scholarly tone and provide typographic contrast, with Source Code Pro available for displaying any code samples.

Keen to exploit the very idea of 24 ways – different articles, written by different authors, published over twenty-four days for almost nearly a decade – I created a palette based on the publication's signature red, that subtly changes over time based on both day and year variables.

{% render 'screenshots' with screenshots.mobile
  caption: 'The site benefited from a mobile-first design approach.'
  alignment: 'bleed'
%}

Where the previous design used a rigid template across all sections of the site, which often dominated the content, I created a series of responsive templates each suited the task in hand. These were supported by application-like navigation conventions, with subtle animation to add delight to the interface.

Beyond the visual aesthetic, I was keen to employ best practice with regards to the front-end implementation. This included the use of BEM-like class names, modular components and conditional loading of non-essential page assets, such as comment threads. This improved the performance on the site, especially on mobile devices where bandwidth is more constrained.

Keen to exploit the very idea of 24 ways – different articles, written by different authors, published over twenty-four days for almost nearly a decade – I created a palette based on the publication’s signature red, that subtly changes over time based on both day and year variables.

{% render 'screenshots' with screenshots.homepage
  caption: 'The home and other archival pages showcase articles by placing them within a grid, evoking the feel of a calendar. To account for the growing archive and improve the discoverability of content, I recommended categorising articles by topic, and exposing these within the navigation.'
  alignment: 'bleed'
%}

## Continual refinement

The redesign was warmly received by the readership, leading to the project winning *Best Collaborative Project* at the 2014 net Awards. In the years since, I have taken the opportunity to revisit aspects of the site to ensure the code and design remains relevant. In 2016, I abstracted the components used to build the site into a [publicly available component library][3], and in 2017 reviewed the code to ensure the site was accessible to all, a process I [documented on CSS-Tricks][4].

[1]: https://24ways.org
[2]: https://alistapart.com/article/the-web-aesthetic
[3]: https://bits.24ways.org
[4]: https://css-tricks.com/improving-accessibility-24-ways/

*[CSS3]: Cascading Style Sheets (Level 3)
*[BEM]: Block, Element, Modifier
