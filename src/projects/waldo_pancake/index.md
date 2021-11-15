---
title: Waldo Pancake
date: 2011-02-09
summary: A new home for Jim Smith, illustrator and copywriter.
image:
  url: /projects/waldo_pancake/image.jpg
  alt: Waldo Pancake logo
category:
  - Front-end development
  - Interaction design
accentColor: '#ffef3e'
style:
  screenshot-shadow: '#e6c939'
  screenshot-offset: '#ffef3e'
aside: |
  Year
  : 2011

  Role
  : Front-end development

  Website
  : '[waldopancake.com](http://waldopancake.com/)'
screenshots:
  - url: screenshot_about.png
    alt: Home page
  - url: screenshot_slideshow.png
    alt: Slideshow of Waldo Pancake merchandise
---
{% render 'screenshots' with screenshots
  alignment: 'bleed'
%}

{% render 'aside'
  aside: aside
%}

Jim Smith (aka [Waldo Pancake][1]) is a designer, illustrator and copywriter whose work can be found on the side of juice bottles, sweet packets and inside every Puccino’s coffee shop.

With an existing site that was Flash-based, Jim’s work could no longer be viewed on mobile devices. I was asked to redevelop the website using standards-based web technologies, retaining the slideshows of his work.	In addition to visualising designs in HTML, I created a file based content management system in PHP, and used jQuery to provide simple cross-browser compatible image slideshows.

[1]: http://waldopancake.com

*[aka]: also known as
*[FTP]: File Transfer Protocol
*[PHP]: PHP: Hypertext Preprocessor
