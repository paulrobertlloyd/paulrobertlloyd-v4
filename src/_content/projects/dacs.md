---
title: DACS
date: 2012-08-01
summary: Responsive redesign for non-profit artists' rights organisation.
image: /images/projects/dacs/image.jpg
tags:
- skill:frontend_development
- skill:interaction_design
- featured
style:
  color-accent: '#360446'
  screenshot-shadow: '#b4b6b8'
  screenshot-offset: '#e4e6e8'
aside: |
  Year
  : 2012

  Role
  : Interaction design and front-end development

  Agency
  : Clearleft
screenshots:
  homepage:
  - url: /images/projects/dacs/screenshot_homepage.png
    alt: Home page
  payback:
  - url: /images/projects/dacs/screenshot_payback.png
    alt: Landing page for the Payback service
  - url: /images/projects/dacs/screenshot_payback_furtherinfo.png
    alt: Further information about the Payback service
---
{% include 'screenshots' with screenshots.homepage
  alignment: 'bleed'
%}

{% include 'aside' %}

DACS (the [Design and Artists Copyright Society][1]) is a non-profit organisation that aims to protect the legal rights of artists through education, royalty-related legal services and government lobbying.

The previous website was packed with legalese: language written by solicitors with an intimidating level of detail. DACS realised it needed to replace this with a site that could deliver this content in a more inspiring and persuasive way. I worked with Harry Brignull and Richard Rutter at Clearleft to produce a website that would achieve these goals.

## Translating a print-orientated brand

After a period of analysis and prototyping, we realised the website needed different areas for each customer type to quickly triage users into the correct places. Once in the right place, customers could be shown content with an appropriate perspective, tone of voice and calls to action that matched their specific needs.

DACS had already undergone an extensive rebranding exercise for print but it needed assistance translating this to a digital environment. To understand the reasoning behind the different brand elements, I spent time with Simon Kennedy who was responsible for DACS's identity and brand strategy. One outcome from this process was to deprecate the use of Didot; while it worked well in print, the typeface was ill-suited to screen, and few areas on the website needed to reflect the discursive tone for which it was intended.

{% include 'screenshots' with screenshots.payback
  caption: 'Artist photography shown front and centre on a page introducing DACS’ Payback service. A restrained typographic pallet ensured legibility and visual consistency.'
  alignment: 'bleed'
%}

I drew on DACS's photographic library of artists to give the organisation a human face. This imagery was combined with a restrained typographic pallet to ensure legibility and visual consistency, and supported by a selection of monochromatic patterns used to differentiate sections of the site.

{% include 'figure' with '/images/projects/dacs/responsive.jpg'
  caption: 'A responsive layout meant the same content could be served to different devices, regardless of display size.'
  alignment: 'bleed'
%}

A pattern portfolio helped to ease handover to the development agency Cognite. Towards the end of the project I worked at their offices, helping them integrate these design patterns, making adjustments where necessary given the constraints of the CMS.

{% include 'quote' with 'It looks beautiful! The feedback so far has been great -- and it’s just such a vast improvement on what we had before. Thank you so much for your hard work and general genius!'
  caption: 'Tania Spriggens, Director of Communications'
%}

[1]: https://www.dacs.org.uk

*[DACS]: Design and Artists Copyright Society
*[CMS]: content management system
