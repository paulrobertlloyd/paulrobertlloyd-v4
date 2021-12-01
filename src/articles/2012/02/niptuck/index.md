---
title: Nip/Tuck
date: 2012-02-23T01:33:57Z
location:
  locality: Brighton
  country-name: England
summary: Following on from last July’s extensive redesign of this site, the last few weeks have seen me revisit the design and implementation. In light of today’s Responsive Summit, and with a few people asking about the changes, I thought I should provide a little more detail.
category:
  - Website
  - Web
  - Responsive design
---
Following on from [last July’s extensive redesign][1] of this site, the last few weeks have seen me revisit the design and implementation. In light of today’s [Responsive Summit][2], and with a few people asking about the changes, I thought I should provide a little more detail.

## Design

I was never truly happy with the design I launched with last year. While [it received high acclaim][3], the dark blue and grey colour scheme made the site feel dull. As someone who appreciates [clean, modern and unfussy design][4], leading with a serif was also a strange choice.

I’d originally intended to use [Bliss][5] for headings and [Skolar][6] for body copy, but switched these around at the last minute. I’ve decided to revert back to that sans/serif application, but since becoming enamoured with [Akagi][7] and [Magento][8] typefaces from Positype, I’ve opted to use that font pairing instead.

## Responsive refactoring

### Navigation

![Navigation icons](navigation_icons.svg){.align-end} One of the biggest changes to the design is around the header. As [I wrote previously][9], the old design had a large footer that contained links to the *About* and *Archive* sections as well as a site search, social links and copyright information. This meant I could hide the two duplicated links in the header when they no longer fit.

Yet much of this footer was superfluous. Linearised at narrower sizes, it became taller, gained unintended prominence and increased the length of every page. The site search was difficult to access, and it seemed pointless duplicating the *About* and *Archive* links. I realised the footer needn’t be more than a one line copyright statement, and a handful of social media links.

Without those duplicated links, I could no longer get away with my lazy `display:none` tactics in the header, so this required a rethink also. I arrived at a fairly complex matrix of layout variations based on viewport width and JavaScript availability, and much head scratching followed. The final result is worth it though.

Some have asked why I decided to prioritise the search functionality on narrower layouts. I’d like to say this was based on research or a deep understanding of how readers navigate the site, but the reason is much simpler; I could either choose to show nothing, or show search. This does mean navigation links are two taps away, but that would’ve been the case with other layouts too. It’s a decision I’ll probably revisit, but I’m happy with this approach for now.

As a side note, the icon I’m using to denote the hidden navigation menu is becoming something of an emerging design pattern; one aspect of a web aesthetic I’d like to explore in more detail.

### Resolution independence

The introduction of the iPad was instrumental in making adaptive web layouts more attractive to designers — before it was easy to think in terms of separate fixed mobile and desktop layouts, but this third type of device confirmed that designing for web required a universal approach. If the iPad 3 has the retina display everyone is anticipating, I predict we’ll see another surge towards responsive design, but with thoughts centred on display density rather than size.

As a pre-emptive strike, and following [this useful tutorial by David Bushell][10], I’m now using SVG image sprites in my CSS. Unfortunately, browsers that support SVG still need to download both vector and rasterised versions and I’m not sure there’s a way to avoid this.

I also ran into a few problems with Firefox’s implementation of the background-size property. In order to get around another of its bugs, I originally saved the SVG with a large canvas size, and scaled it down. This brought the browser to a crawl, and in some cases it could crash! So right now, Firefox users may see sprites rendered with some fuzziness when scaled up; hopefully a fix is in the works.

### (Un)responsive images

I’ve also removed the responsive images script I was experimenting with, [a fork by Andy Hume][11] that built upon [the work of Scott Jehl][12]. Rather than loading images based on screen resolution, Andy’s script aimed to be more contextual, looking to see what size the final image needed to be rendered at before loading an appropriate version.

However, this script was extremely fragile. Sometimes both images would load, and no images would appear on pages requested with HTML5 History pushState. There were workflow considerations as well; creating two different sizes for each image soon became tedious.

As I looked to make the design resolution independent, I noticed that loading lower resolution images on my iPhone 4S meant I wasn’t taking advantage of its retina display. Not only was screen size an unreliable means of determining what images to load, but so was Andy’s method. Ideally, images would load based on a combination of measures, the most important being the speed of the network.

The challenge of serving responsive images reliably has been described in great detail by Mat Marquis in [his recent article for A List Apart][13]. Jeremy has also written extensively about this subject, and [his latest post][14] discusses an interesting approach [Josh][15] has been using. For now, I’ve reverted back to always loading full-size images, but to lessen the blow I’m serving them via Amazon S3.

In the portfolio, I’m using compressed JPEGs instead of lossless PNGs. This isn’t dissimilar to what Jeremy has done on the [dConstruct archive][16]. Rather than use responsive images, he spent time blurring out backgrounds and playing with compression settings to achieve reasonable sized images with the smallest possible file size. There’s much discussion about a new `<picture>` markup pattern, but in the short-term this approach seems the most sensible. I do wonder if support for file formats like JPEG 2000 shouldn’t be part of an overall solution as well though.

## Performance

Removing the responsive image script meant I could move my JavaScript back to the bottom of the page. Inquisitive about the performance implications, I again found myself tuning the speed of the site. I implemented Google’s [Web Font Loader][17], improved the order in which JavaScript and CSS files are loaded, reduced HTML page sizes (deleting some meta data and the old footer markup) and again I’m loading images from Amazon’s S3 CDN. As such, the homepage currently achieves the following scores:

* **Google Page Speed**: 94/100
* **Yahoo YSlow**: 96/100 (with “Small Site or Blog” ruleset)
* **webpagetest.org**: [Results][18]

Hopefully, this will impact performance on mobile devices just as much as any responsive image technique.

## Iteration, iteration, iteration

There are a number of other changes too. From tiny tweaks like showing short URLs, to adjusting the homepage so that featured entries are more apparent. I’ve also updated [my portfolio][19], with most projects including a slideshow of work. I’ve also added case studies for [The Week][20] and [dConstruct 2011][21].

Although I’ve got the site into a much healthier state, I’m sure further changes will follow. One of the great aspects of the web is that you can improve and iterate upon the experience you’re providing. I’ll continue to do that here.

[1]: /2011/07/new_and_improved
[2]: http://responsivesummit.com/
[3]: http://netmagazine.com/features/ethan-marcottes-20-favourite-responsive-sites
[4]: https://en.wikipedia.org/wiki/International_Typographic_Style
[5]: http://fontdeck.com/typeface/bliss/
[6]: http://fontdeck.com/typeface/skolar/
[7]: http://fontdeck.com/typeface/akagi/
[8]: http://fontdeck.com/typeface/magneto/
[9]: /2012/01/responsive_answers
[10]: http://coding.smashingmagazine.com/2012/01/16/resolution-independence-with-svg/
[11]: https://github.com/ahume/Responsive-Images
[12]: https://github.com/filamentgroup/Responsive-Images/
[13]: http://www.alistapart.com/articles/responsive-images-how-they-almost-worked-and-what-we-need/
[14]: https://adactio.com/journal/5208/
[15]: http://www.joshemerson.co.uk/
[16]: http://archive.dconstruct.org/
[17]: https://developers.google.com/webfonts/docs/webfont_loader
[18]: http://www.webpagetest.org/result/120222_QC_3B11V/1/performance_optimization/
[19]: /projects/
[20]: /projects/the_week
[21]: /projects/dconstruct

*[CDN]: content delivery network
*[CSS]: Cascading Style Sheets
*[HTML]: HyperText Markup Language
*[PNG]: Portable Network Graphic
*[SVG]: Scalable Vector Graphics
*[URL]: Uniform Resouce Locator
