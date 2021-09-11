---
title: Fontdeck
date: 2010-11-30
summary: Distinctive lead design for purveyor of the finest web fonts.
image: /images/projects/fontdeck/image.jpg
category:
  - Interaction design
accentColor: '#e9242e'
style:
  screenshot-shadow: '#aab'
  screenshot-offset: '#ccd'
aside: |
  Year
  : 2010 - 2013

  Role
  : Interaction and user experience design

  Agency
  : Clearleft
screenshots:
  homepage:
    - url: /images/projects/fontdeck/screenshot_homepage.png
      alt: Home page
  typeface:
    - url: /images/projects/fontdeck/screenshot_category.png
      alt: Typeface category page
    - url: /images/projects/fontdeck/screenshot_specimen.png
      alt: Type specimen page
  ancillary:
    - url: /images/projects/fontdeck/screenshot_about.png
      alt: About page
    - url: /images/projects/fontdeck/screenshot_foundries.png
      alt: Foundries page
    - url: /images/projects/fontdeck/screenshot_designer.png
      alt: Type designer page
---
{% render 'screenshots' with screenshots.homepage
  alignment: 'bleed'
%}

{% render 'aside'
  aside: aside
%}

Fontdeck was a professional web font service that let designers and developers to choose from hundreds of web fonts and easily embed them in their websites.

A unique concept when founders Richard Rutter and Jon Tan conceived the idea in 2009, by the time the service launched in beta a year later a number of competing services had already entered the market. The site needed to rapidly evolve, and better explain how its own service differed from others.

## Defining the vision

Over one weekend, a small team of developers and designers from Clearleft was convened to devise a strategy to address how we could quickly improve the service. A series of quick wins were identified, but it was agreed that the homepage needed a thorough overhaul.

The existing, text-heavy page failed to communicate the benefits of the product or explain how it was different to the other services on the market. We decided to distil the key values of the product were into a compelling proposition, and arriving at “purveyors of the finest web fonts, Fontdeck is the professional web font solution; easy to use yet flexible enough to meet the real needs of designers”. This became a lightening rod for the design direction that followed.

It was also decided that we would improve the product in discreet stages. While this sounded appealing, beyond a few technical items, making substantial changes soon became difficult. We knew where we wanted to be, but it was difficult to get there without a vision of what the service might look like. With this in mind, I devised a holistic design for the product that would serve the following goals:

* Communicate professionalism of the service and the quality of our library
* Better explain how the service works and how much it costs to use
* Give greater prominence to foundries and type designers

## Redefining the brand

As I explored different design directions, it became clear to me that the design that had been used during private and public beta phases of the product roll-out no longer aligned with the redefined proposition. While elements of the previous design could be retained – the logo, the colour palette – a new approach was needed.

{% render 'screenshots' with screenshots.typeface
  caption: 'Exposing different means of discovery made it easier for users to browse Fontdeck’s catalogue. Information about an individual typeface was available on one page, with meta data presentationed in the sidebar.'
  alignment: 'bleed'
  imagePreset: 'supporting'
%}

Given the product’s focus, the type choice was clearly the overriding concern. Since the original brand font, FF Info, wasn’t in the catalogue, I looked for alternatives. I decided to pair Adelle (lots of character at different sizes) with PT Sans (legible at small sizes). Where web-safe alternatives were required (e.g. HTML newsletters), Georgia and Lucida Grande were used. The colour palette required only subtle changes; the signature dark blue colour was made slightly dustier, the saturated font category colours more muted.

Page layout was more considered, making heavy use of an underlying grid, with use of delicate line work and a clear typographic hierarchy. The number of rounded corners used in the original design was reduced, while the playing card device was limited to account and project pages, where users managed their font ‘decks’.

{% render 'screenshots' with screenshots.ancillary
  caption: 'About page and foundry directory.'
  alignment: 'bleed'
  imagePreset: 'supporting'
%}

The previous text-heavy about page was replaced by an expanded about section that included a video narrated by Richard, the story of the product’s development and introduced the team working behind the scenes. A dedicated pricing page was linked to from the main navigation which concisely explained how the various pricing tiers worked.

Type designer and foundry pages previously consisted of plain alphabetical indices of names. I saw this as an opportunity to make those responsible for the fonts available in the library the heroes of the service. Individual foundry and designer pages now featured a photo or logo and short bio alongside a list of the fonts they had created.

> Working on Fontdeck with Paul was a pleasure. He brought his usual meticulous attention in redesigning the site, resulting in a far more consistent and harmonious feel, along with numerous small yet significant improvements in usability. Ultimately Paul added the finesse the site was missing.
— Richard Rutter, co-founder and CEO

*[CEO]: Chief executive officer
*[CSS]: Cascading Style Sheets
