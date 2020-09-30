---
title: Bohemian Coding Sketch 2 Review
date: 2013-06-20
canonical:
  url: https://www.digitalartsonline.co.uk/reviews/interactive-design/bohemian-coding-sketch-2-review/
summary: Paul Lloyd, senior visual designer at Brighton-based web agency Clearleft, explains why he’s not sad that Adobe has killed Fireworks, as he’s already moved onto a much better tool to design site interfaces and elements.
vocab: [entry, review]
product:
  title: Sketch 2
  rating: 4
  info: |
    Company
    : '[Bohemian Coding](http://bohemiancoding.com/sketch/){.p-brand .h-card}'

    Price
    : <data class="p-price" value="29.00">£29+VAT</data>

    Pros
    : Easy to use; fits in well with web designer-centric workflow; supports native OS X features.

    Cons
    : Can’t share styles; no symbols; difficult to share documents with Windows colleagues; sluggish at times.

    Supports
    : OS X 10.6 Snow Leopard or higher.
category:
  - Review
  - Software
tags:
  - source:digital_arts
---
{% render 'figure' with '/images/2013/05/bohemian_coding_sketch_2_review/canvas_and_artboards.png'
  caption: 'Canvas and artboards in Sketch'
%}

{% render 'product' with product %}

During the earliest days of my career, I considered Adobe’s Dreamweaver and Fireworks to be the tools of my trade. As I stopped creating table-based layouts, Dreamweaver was replaced by a succession of text editors, but Fireworks remained an indispensable — if buggy — part of my arsenal.

The advent of responsive design has again made me question the relevance of my tools. Gone are the days of slicing up pristine comps and creating complex sprites; interface elements can be created entirely in CSS, and with bitmap images falling foul of high resolution displays, the fledging SVG vector format is finally getting its moment in the sun. The web browser has become an integral part of the design process, leaving traditional graphics applications to aid initial design exploration.

Like Dreamweaver before it, Fireworks feels like an application that’s no longer fit for purpose (and has now been retired as part of the [Adobe CC][1] changes). With the web design process in such a state of flux, now seems like the right time to try something new.

Enter Sketch, from Bohemian Coding. After several years of development, this Mac-only application has matured enough to be seen as a viable alternative; one not bloated by a succession of features aimed at narrow markets (Photoshop, I’m looking at you).

{% render 'figure' with '/images/2013/05/bohemian_coding_sketch_2_review/combined_shape.png'
  caption: 'Combining shapes in Sketch'
%}

Sketch uses a single window. Layers and artboards are listed on the left of the main canvas, with an inspector to the right. This inspector is clearly inspired by iOS; if you want to edit a colour, a second palette slides in from the right providing all the relevant options. Once you’re done, clicking the back button returns you to the main inspector. The interface has clearly been designed to help you focus on creating stunning artwork, rather than manage windows.

Rather than choose a canvas size before you begin drawing, you are presented with an infinite canvas. This is useful if you want to explore a design direction with an element collage, and it can dissuade you from thinking about your work in terms of specific page sizes. However, should you require a defined size — perhaps for a phone interface — you can divide the canvas into separate artboards. A number of presets are provided, and you can add your own.

Artboards can use either a grid or columns, the latter especially useful if you’re designing a heavily typographic layout. Sketch documents can contain multiple pages, although without any keyboard shortcuts, swapping between them can become tedious.

Much of your time in the app will no doubt be spent creating and manipulating objects, and Sketch is no slouch in this area. A full gamut of shapes is provided, as are precise path editing tools. The layers list lets you inspect combined shapes too, allowing you to swap between union, subtract, intersect and difference options with ease.

One of the nicest features of Sketch is the flexibility provided around styles. Shapes can have multiple borders, multiple (inner and outer) shadows, and complex fills that can be layered together using different colours, gradients and patterns. Styles can be saved for later use, although there’s no means of sharing these with others.

There’s a deliberate relationship between these style options and what can be created with CSS. This makes passing Sketch documents on to a developer much easier, and a contextual menu item allows them to copy styles as CSS. This is a nice time-saving option, and one that reflects the move to a design process that can alternate between the graphics application, text editor and browser.

Styles can also be linked; changing the appearance of one shape will affect linked shapes as well. However, with no support for symbols, reusing common elements within your designs is not currently possible.

{% render 'figure' with '/images/2013/05/bohemian_coding_sketch_2_review/shape_styles.png'
  caption: 'Shape styles in Sketch'
%}

The ability to see a pixel preview of your work, comprehensive (including @​2x) export options and palettes that mimic CSS, hint at an app that was developed with web and iOS designers in mind. SVG vector images can be imported by dragging them to the canvas and remain editable. Documents can be exported as SVG, as well as PDF and EPS. JPEG, PNG and TIFF bitmap formats are also supported.

Being an application designed exclusively for OS X is both a blessing and a curse. While it takes advantage of all the OS-level features you would expect from a modern Mac app — autosave, iCloud document sharing and versioning — if you work in an environment where you need to share source files with colleagues using Windows, it may not be suitable.

Having used Fireworks for nearly a decade, it took a little while to get used to the way things work in Sketch, and some of its idiosyncrasies. Yet its intuitive interface and similarities with other OS X applications, meant it was easy enough to pick up and get started with.

The app can become sluggish at times, especially with larger files containing complicated shapes, and it has crashed on a few occasions. However, unlike my experience with Fireworks, when it does, I don’t panic; I can just restart the app and continue from where I left off.

In fact, the best feature of Sketch is its active development. In the two months I’ve been using it, there have been three maintenance releases, and its developer, Pieter Omvlee, is happy to receive feedback, both on [Twitter][2] and via email.

I’m not sure I would use Sketch to create a succession of detailed page comps, but I think that is telling. This is an application designed for the interface designers of today and tomorrow, not those of the past. And it’s a better app for it.

[1]: https://www.digitalartsonline.co.uk/topic/adobe-creative-cloud/
[2]: https://twitter.com/bohemiancoding

*[CSS]: Cascading Style Sheets
*[EPS]: Encapsulated PostScript
*[JPEG]: Joint Photographic Experts Group
*[PDF]: Portable Document Format
*[PNG]: Portable Network Graphics
*[SVG]: Scalable Vector Graphics
*[TIFF]: Tagged Image File Format
