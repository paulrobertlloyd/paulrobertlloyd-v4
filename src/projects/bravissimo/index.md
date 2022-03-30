---
title: Bravissimo
date: 2016-08-19
summary: Developing a component library for a lingerie and clothing company for big boobed women.
photo:
  url: /projects/bravissimo/image.jpg
  alt: Bravissimo logo
category:
  - Front-end development
tags:
  - featured
accentColor: '#f4436d'
style:
  screenshot-shadow: '#d6cfc9'
  screenshot-offset: '#f0ecec'
aside: |
  Year
  : 2016

  Role
  : Front-end development

  Agency
  : Clearleft
screenshots:
  product:
    - url: /projects/bravissimo/screenshot_swimwear.png
      alt: Page listing swimwear available for sale
    - url: /projects/bravissimo/screenshot_product.png
      alt: Product page
  brastrap:
    - url: /projects/bravissimo/screenshot_brastrap_component.png
      alt: Component preview and underlying code shown within Brastrap
    - url: /projects/bravissimo/screenshot_brastrap_palette.png
      alt: Brastrap styleguide page detailing colour palettes
---
{% render 'screenshots' with screenshots.product
  alignment: 'bleed'
%}

{% render 'aside'
  aside: aside
%}

[Bravissimo][1] is a British retailer that provides lingerie and swimwear for big boobed women. The company aims to give their customers an uplifting and confidence boosting experience, be that online, on the phones or in one of their 29 stores.

As part of a broader renewal strategy, they were looking to redevelop their site to ensure it could serve international markets and provide an omnichannel shopping experience to serve their loyal customer base efficiently and effectively. A new responsive front-end would also be required so that the site could meet the needs of customers who were increasingly browsing with a wide variety of different device types.

Clearleft had assembled a small team to work alongside the company’s in-house development team, led by Luke Bennett, to re-develop their e-commerce site. James Box concentrated on the user experience with James Bates providing an initial design direction.

{% render 'screenshots' with screenshots.brastrap
  alignment: 'bleed'
%}

I was brought on-board to take these assets and develop a front-end component library (cheekily dubbed *Brastrap*) to enable Luke’s team to build out the reimagined website, and then continue to build upon this work in the years to come. While building the foundations of the new component library, I consulted with the team to tease-out, consolidate and document the various code standards being used to ensure the product remained maintainable and understandable.

[1]: https://www.bravissimo.com
