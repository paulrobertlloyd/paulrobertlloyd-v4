---
title: Bradshaw’s Guide
date: 2018-01-02
summary: Digital revival of a popular Victorian railway guide.
image:
  url: /projects/bradshaws_guide/image.jpg
  alt: Bradshaw’s Guide logo
category:
  - Front-end development
  - Interaction design
tags:
  - featured
related:
  - /2013/04/bradshaws_guide/
  - /2013/05/web_typography/
  - /2018/01/bradshaws_guide/
accentColor: '#e6772e'
style:
  screenshot-shadow: '#e6772e'
  screenshot-offset: '#ffa033'
aside: |
  Year
  : Ongoing

  Role
  : Design and front-end development
screenshots:
  homepage:
    - url: screenshot_homepage.png
      alt: Home page
  station:
    - url: screenshot_station.png
      alt: Station page
  mobile:
    - url: screenshot_mobile_region.png
      alt: Region page on mobile
    - url: screenshot_mobile_route.png
      alt: Route page on mobile
    - url: screenshot_mobile_station.png
      alt: Station page on mobile
---
{% render 'screenshots' with screenshots.homepage
  alignment: 'bleed'
%}

{% render 'aside'
  aside: aside
%}

[Bradshaw’s Guide][1] is a digital revival of George Bradshaw’s eponymous guide to Britain and Ireland’s nascent railway network as it existed in 1866.

Reproductions of his handbook are over an inch thick; pocket-sized by Victorian standards, but not when compared to our slim wireless companions. This ongoing self-directed project aims to make Bradshaw’s work accessible to a new audience, be they tourists wanting to spend more time on today’s network, or commuters wishing to learn about the places they pass by every day.

{% render 'screenshots' with screenshots.station
  caption: 'Station pages feature photochrom images sourced from the Library of Congress.'
%}

The design seeks to combine the aesthetic of the Victorian era with modern sensibilities. A notable attribute of the original handbook is the use of an eclectic range of typefaces, yet reproducing this online would produce a confusing interface and degrade performance. Seeking a compromise between the two approaches, I settled on combining four typefaces. Trocchi, a bold serif, was used for headings and display copy with Scotch Text, a delicate Scotch roman, for body copy. While not as historically accurate, League Gothic would mimic block lettering used by advertisements in the original guide, with the default system typeface available for labels and interface elements.

Producing content for the guide involved transcribing and correcting copy originating from an automated OCR process. As this copy already exists in the public domain, I released the newly digitised text on [a public GitHub repository][2], alongside the source code for the website.

{% render 'screenshots' with screenshots.mobile
  caption: 'The design is optimised for small screen devices.'
  alignment: 'bleed'
%}

[1]: https://bradshaws.guide
[2]: https://github.com/bradshawsguide

*[OCR]: Optical character recognition
