---
title: UNICEF UK
date: 2013-07-01
summary: Mobile-first redesign for leading children’s charity.
image: /images/projects/unicef_uk/image.jpg
category:
- Front-end development
- Interaction design
style:
  color-accent: '#00aeef'
  screenshot-shadow: '#aae6f9'
  screenshot-offset: '#e6f6fc'
aside: |
  Year
  : 2013

  Role
  : Interaction design and front-end development

  Agency
  : Clearleft
screenshots:
- url: /images/projects/unicef_uk/screenshot_home.png
  alt: Home page
- url: /images/projects/unicef_uk/screenshot_info.png
  alt: Internal page
- url: /images/projects/unicef_uk/screenshot_gallery.png
  alt: Gallery page
photoset:
  workshop:
  - url: /images/projects/unicef_uk/photo_homepage_prioritisation.jpg
    alt: Home page prioritisation exercise
  - url: /images/projects/unicef_uk/photo_pattern_identification.jpg
    alt: Pattern identification exercise
  - url: /images/projects/unicef_uk/photo_pattern_definition.jpg
    alt: Pattern definition exercise
---
{% render 'screenshots' with screenshots
  alignment: 'bleed'
%}

{% render 'aside' %}

[UNICEF UK][1] raises funds to protect children and the defend their rights worldwide.

With mobile devices accounting for 20% of site visits and growing, a limited mobile version of its website had been produced, yet much of the information about their vital work remained on a desktop-orientated site.

Given a constrained budget, the software that managed content on the desktop was to be retained, meaning the mobile site would have to replicate the same pages and information architecture. Working alongside Ben Sauer at Clearleft, my primary task was to ensure this content and architecture could be understood by users on smaller screens.

## Searching for patterns

The site needed to degrade gracefully on older mobile devices and take into account the often imperfect nature of cellular connectivity. Put simply, we needed to employ mobile-first design principles with desktop-first content, rationalising and simplifying where possible. Although a mobile-focused project, we had a secondary ambition to design an experience that was better than the desktop site – even on larger screens.

{% render 'photos' with photoset.workshop
  caption: 'Prioritising homepage components, highlighting common patterns on desktop site and breaking them down into responsive patterns we could use on the mobile site.'
  alignment: 'bleed'
  image_preset: 'thumbnail'
%}

We asked key stakeholders on the project to dissect the homepage and a key internal page, placing component parts in order of importance. Working with UNICEF’s content editor, we pulled out common patterns, noting those which were essential and those that were superfluous. The relevant patterns were then sketched on a whiteboard where we imagined how they would adapt on smaller screens. These were then used as the basis for the front-end build. This pattern-based approach allowed us to simplify what was already there, rather than start again from scratch.

## Translating UNICEF’s brand guidelines to the web

We placed considerable attention on ensuring the performance of the site didn’t suffer at the cost of excessive design. UNICEF’s brand guidelines helped in this respect, with an identifiable logo, cyan brand colour and emotive photography combining to create a strong identity. These guidelines suggested using Verdana for digital applications, but I opted to use the Roboto typeface instead. Close in appearance to UNICEF’s brand font Univers, Roboto was specifically designed for Android, so we knew it would render well on mobile screens. Its condensed nature also allowed for more comfortable line lengths on narrower screens.

We experimented with different ways of simplifying way-finding around the site. By removing layers of navigation and advocating the inclusion of more links within body copy, we were able to reduce unnecessary interactions and invoke fewer taps. Moving the breadcrumb navigation to a slide-out menu meant users could easily orientate themselves.

The new mobile site was launched a year after our engagement as part of a more extensive rebrand of the organisation lead by Johnson Banks.

[1]: https://www.unicef.org.uk

*[HTML]: HyperText Markup Language
*[UK]: United Kingdom
*[UNICEF]: The United Nations Children's Fund
