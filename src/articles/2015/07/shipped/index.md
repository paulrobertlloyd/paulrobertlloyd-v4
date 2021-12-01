---
title: Shipped!
date: 2015-07-20T16:05:00+01:00
location:
  locality: Brighton
  country-name: England
summary: In what has become a familiar pattern, having decided to embark on a redesign last February, I then spent the following 18 months iterating and iterating. Now, after many missed deadlines, I have finally launched my new site.
category:
  - Website
  - Web
---
Given the obsessive compulsive behaviour I exhibit when it comes to tinkering with this website, I’ve started to question whether I have an addictive personality. In what has become a familiar pattern, having decided to embark on a redesign last February, I then spent the following 18 months [iterating and iterating][1]. During this period, [other projects][2] fell by the wayside as I got distracted by yet another feature addition, performance improvement or design detail.

This year’s Indie Web Camp in Brighton was the latest deadline I’d set for myself to launch the damn thing. Wanting to play with webmentions, and with [Jeremy][3] on hand to provide adequate peer pressure, this was the spur needed to [push me across the finish line][4]. What I launched felt pretty embarrassing, so I’ve spent last week revising and polishing to the point that I can finally say: “okay, you can look now”.

![](blue_marlin.jpg 'The [MV Blue Marlin](https://en.wikipedia.org/wiki/MV_Blue_Marlin), a ship that can ship shipping ships.')
{.align-bleed}

## Moving on from Movable Type

The previous version of this site [launched in July 2011][5], and while it’d seen many improvements over that time (not least in terms of [performance][6]), the publishing platform I was using — [Movable Type][7] — was burdensome: just publishing a new post meant rebuilding three different sections of the site. I’ve used Movable Type for almost a decade, but in that time the community has diminished and the product is [no longer open source][8] or designed for personal publishers.

One of the reasons I liked this platform however, was that it generated static pages. People used to laugh at this feature, but today static site generators are in vogue. After researching the [_many_ different options available][9], I decided to use [Jekyll][10]. Not only is this software [actively developed][11], but I find it to be incredibly configurable and — once I get the hang of [Ruby][12] — infinitely hackable.

Since making this choice, Jekyll has matured considerably, and the team is not far from launching the next major version, [Jekyll 3.0][13]. All that’s missing is smarter pagination options and faster rebuild times; even with the new incremental generation feature, rebuilds can still sometimes take around 180 seconds.

## A European flavour

While I briefly considered maintaining the previous design and just updating the CMS, a long list of accumulated grievances meant a new design became my preferred option.

I’ve radically simplified what I had before, placing particular emphasis on typography. A long time admirer of [Kris Sowersby][14]’s work, I’ve treated myself to a selection of his fonts: [Tiempos Text][15] is used for body copy and paired with [Calibre][16] for headings and titles. His foundry doesn’t provide WOFF 2.0 webfonts yet (a format that produces files ~30% smaller than WOFF 1.0), but hopefully that’ll change once this format gains wider adoption. Surprisingly, including both fonts in the same passage of text requires adjusting their relative sizes, leading to some [pretty irksome CSS][17].

Ignoring for a moment their antipodean origin, these fonts hopefully give the design a more European flavour, one partly inspired by the many leaflets and brochures I’ve picked up on my travels across the continent.

I was keen to try using whitespace rather than horizontal rules to separate content, and have greater contrast in the type scale to indicate page hierarchy. Colour is restrained but no less subdued; purples and pinks being suitably hipster enough to satisfy current design trends. Oh, and I have a new logo… which I’m mildly ambivalent about, if I’m honest.

![](design.png 'Design viewed on tablet and phone.')

## Content first

Content has been a big focus of this redesign. With the help of [Owen Gregory][18], project case studies have been completely rewritten. While they currently lack enough supporting artefacts, their revised copy better describes the underlying design process.

Since I’ve become a regular speaker, alongside a [collection of published articles][19] there’s now an archive of [previous talks][20], too.

A combination of Jekyll plugins and [Kramdown][21] has enabled greater automation when writing: code examples are now syntax highlighted, different layouts are readily available for laying out photographs and I no longer need to manually markup footnotes.

I’ve also added support for photo galleries. Originally intended to form part of a dedicated photos section, for now these are listed alongside journal entries. Should I decide to move away from Flickr, this functionality may support the transfer of more photos away from that service, but for now, such posts will feature a selection of photos from a particular trip or event.

## Comments

In the course of rebuilding this site, I read numerous articles that went something along the lines of: “I moved from WordPress to Jekyll, but as this doesn’t support comments I’m now using Disqus”. While [Disqus][22] is a quick and easy means of adding comments to a site, having a third-party host parts of my site wasn’t acceptable to me, nor was the JavaScript dependancy.

In what was a convoluted and time consuming process, I exported my comments from Movable Type and saved them as YAML files inside Jekyll’s `_data` folder. New comments can be accepted on a per post basis, but this involves little more than providing readers with a dedicated e-mail address, while publishing a comment requires adding and/or updating a YAML file. This process could be automated, but seeing as I rarely accept comments anymore, it seemed like wasted effort. Besides, [webmentions][23] (once I’ve added support for them) should plug the gap.

## Site archives

As part of the transfer of content from Movable Type to Jekyll, I undertook an audit of URLs, in particular the location of archived versions of this site. For a long time I considered moving every piece of content that appeared on my previous site (‘LloydyWeb’, *cringe*) over to this domain, but in doing so, found myself rewriting content — rewriting history, almost.

In the end I decided that [the archive][24] for `paulrobertlloyd.com` should extend back to when I moved to this domain (and not include earlier entries as had been done previously), while content originally published on LloydyWeb should be available at `lloydyweb.paulrobertlloyd.com`. For those interested, these URLs cover the following periods:

* <https://paulrobertlloyd.com> — September 2008 - present
* <https://v2.paulrobertlloyd.com> — July 2004 - July 2015
* <https://v1.paulrobertlloyd.com> — July 2004 - June 2011
* <https://lloydyweb.paulrobertlloyd.com> — July 1999 - December 2007

## Everything else

Those are the headline features, but there are a number of other notable changes as well:

* Pages are now served over a secure HTTPS connection. [I wrote about this and the possible downsides][25], earlier in the year.

* Since I’m serving static pages, I decided to give [nginx][26] a whirl. Goodbye `.htaccess`!

* The code for this site is now versioned, and better still, [publicly available][27] on GitHub. If you spot any issues, please [let me know][28].

* Following on from the [excellent article][29] by the folks over at Filament Group, I’m now loading web fonts asynchronously using [FontFaceObserver][30]. Hopefully this means no blank pages while webfonts are downloading.

* Following current best practice for pages served over HTTP/1, critical CSS is inlined on initial page load.

* Responsive images are used throughout the site, thanks to the new [`srcset`][31] syntax, the [Picturefill][32] polyfill and a heavily customised version of the [jekyll-picture-tag][33] plugin (which I hope to contribute changes to at some point).

* Related to the previous point, high resolution images are stored alongside other site assets, and can be converted and scaled server-side using [Converjon][34].

* Microformats have returned, as I make my website more [indie web friendly][35].

* Support for [Twitter cards][36].

* Using a cookie-less domain for YouTube embeds.

* Credits and attribution links added to photos, where relevant and possible.

* Ability to link related posts together as a series ([particularly useful for travelogues][37]).

* [A more extensive style guide][38] providing details of the component and utility styles used to build pages.

There’s much more I wish to do, but for my own sanity, it’s probably best I take some time out before embarking on adding more features. Topping that list includes adding visual examples to case study pages, providing full support for webmentions and animated transitions. All in good time.

## Thanks

I should mention those who have helped and inspired me on this long journey. [Owen Gregory][39] deserves credit for supplying his editing chops, not least for ensuring I avoided using phrases like “[the final solution][40]”. Sites built by [Dan Eden][41], [Jason Garber][42], [Mark Trapp][43] (who built [an early archive plugin][44]) provided numerous ideas for how I could use Jekyll to its fullest. [Alfred Xing][45] also answered my request for an [official archive plugin for Jekyll][46].

[Matthias Vogelgesang][47]’s excellent research on [how to use Kramdown with Pygments][48] (a long standing issue with Jekyll) lead me to release [my first Ruby Gem][49]… made instantly redundant once the issue was resolved.

Finally, a huge thank-you to the team working tirelessly on Jekyll, led by [Parker Moore][50]. Here’s to just as much shipping of Jekyll as there is me hacking upon it.

[1]: https://github.com/paulrobertlloyd/paulrobertlloyd-v3/commits/master
[2]: https://bradshaws.guide
[3]: https://adactio.com
[4]: /2015/07/webmentions
[5]: /2011/07/new_and_improved
[6]: /2012/12/trimming_even_more_fat
[7]: https://movabletype.org
[8]: https://movabletype.org/news/2013/07/clarifying_changes_to_movable_type_starting_with_mt6.html
[9]: https://staticsitegenerators.net
[10]: https://jekyllrb.com/
[11]: https://github.com/jekyll/jekyll
[12]: https://www.ruby-lang.org/en/
[13]: https://byparker.com/blog/2014/jekyll-3-the-road-ahead
[14]: https://klim.co.nz
[15]: https://klim.co.nz/retail-fonts/tiempos-text/
[16]: https://klim.co.nz/retail-fonts/calibre/
[17]: https://github.com/paulrobertlloyd/paulrobertlloyd-v3/blob/51b7f70df06ff377db82c4d922754eef29b05dff/source/assets/_stylesheets/scopes/_prose.scss#L76
[18]: https://fullcreammilk.co.uk
[19]: https://v3.paulrobertlloyd.com/articles/
[20]: https://v3.paulrobertlloyd.com/talks/
[21]: https://kramdown.gettalong.org

[22]: https://disqus.com
[23]: https://indieweb.org/Webmention
[24]: https://v3.paulrobertlloyd.com/archive
[25]: https://paulrobertlloyd.com/2015/05/https_compression
[26]: https://nginx.org
[27]: https://github.com/paulrobertlloyd/paulrobertlloyd-v3
[28]: https://github.com/paulrobertlloyd/paulrobertlloyd-v3/issues
[29]: https://www.filamentgroup.com/lab/font-events.html
[30]: https://github.com/bramstein/fontfaceobserver
[31]: https://www.w3.org/TR/html-srcset/
[32]: https://scottjehl.github.com/picturefill/
[33]: https://github.com/robwierzbowski/jekyll-picture-tag
[34]: https://github.com/berlinonline/converjon
[35]: https://indiewebify.me
[36]: https://dev.twitter.com/cards/overview
[37]: https://v3.paulrobertlloyd.com/2009/12/ending_the_decade_down_under
[38]: https://v3.paulrobertlloyd.com/styleguide/
[39]: https://fullcreammilk.co.uk
[40]: https://en.wikipedia.org/wiki/Final_Solution
[41]: https://daneden.me
[42]: https://sixtwothree.org
[43]: https://marktrapp.com
[44]: https://marktrapp.com/projects/jekyll-archive/
[45]: https://alfredxing.com
[46]: https://github.com/jekyll/jekyll-archives
[47]: https://bloerg.net
[48]: https://bloerg.net/2013/03/07/using-kramdown-instead-of-maruku.html
[49]: https://github.com/paulrobertlloyd/jekyll-pypedown
[50]: https://byparker.com

*[CSS]: Cascading Style Sheets
*[CMS]: content management system
*[HTTP]: Hypertext Transfer Protocol
*[HTTPS]: HTTP Secure
*[URL]: Uniform resource locator
*[WOFF]: Web Open Font Format
*[YAML]: YAML Ain’t Markup Language
