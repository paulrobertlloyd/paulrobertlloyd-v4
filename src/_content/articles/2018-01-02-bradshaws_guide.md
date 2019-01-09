---
title: Back to Bradshaw’s
date: 2018-01-02T13:00:00Z
location:
  locality: Bexhill-on-Sea
  country-name: United Kingdom
summary: Having copied, pasted and formatted another 115 pages of OCR’d text, <cite>Bradshaw’s Guide</cite> now contains tours throughout South West England, the West Midlands, Wales and Ireland.
tags:
- project:bradshaws_guide
- travel
---
[<cite>Bradshaw’s Guide</cite>][1] is a hyperlinked revival of a popular Victorian guide to Britain and Ireland’s nascent railway network. It’s also a personal project that lies at the intersection of my interests: design, technology, trains… the preservation of [historic English counties][2].

Today I have officially reached the half way point. Having copied, pasted and formatted another 115 pages of [OCR’d text][3], in addition to [the first section][4], which covered London and the South East, the guide now contains tours through South West England, the West Midlands, Wales and Ireland. [This new section][5] was especially interesting to me as it covers an area where I grew up — George Bradshaw’s [description of the Black Country as observed from atop Dudley Castle][6] is particularly stirring. Pride in Victorian engineering is also evident: just read descriptions of Brunel’s Tubular bridge at [Chepstow][7], Stephenson’s at [Conwy][8] and across the [Menai Strait][9].

## Photochromatic

In addition to this second section, I’ve also evolved the site’s design. This has been brought to life thanks to the inclusion of images from a collection of [Photochrom Prints][10] digitised by the Library of Congress. Truth be told, these images are a bit of a cheat as they were created almost three decades after the original text was written. I hope you’ll allow for some artistic license here, because a freely-available collection of beautiful images, featuring many of the places described in the guide, proved irresistible.

The type selection remains as eclectic as before, but hopefully more [historically accurate][11]. Body text is set using [Scotch Text][12] from Positype. I *really* wanted to use Carter & Cone’s [Miller][13], which is near-identical to that used in the original book. However, this is only available from TypeNetwork. As I wasn’t keen on the way they serve their hosted fonts (or the yearly subscription), I decided to pass — at least for now. Kameron has been replaced by another typeface by the late Vernon Adams, [Trocchi][14], a beautiful complement to Scotch Text that really makes headings and display titles sing. League Gothic also makes an appearance. While not historically accurate, it reflects the block lettering used in the advertisements that are contained in the printed guide. Alongside these, I’m also using the default system typeface for any labels and UI elements.

## Location, location, location

With half of the UK and Ireland now covered by the guide — that’s 1497 stations serving 599 places across 65 counties — it made sense for me to sit down and figure out how to implement geolocation features. Now, in addition to a text-based search, you can also elect to find places near you[^1]. This effort involved adding lat/long co-ordinates to every station mentioned in the guide, many of which no longer exist. A [good number][15] are [well documented][16], but I still found myself looking over historic maps (provided by the [National Library of Scotland][17] and [Ordnance Survey Ireland][18]) in order to locate many others. Fun… but tiring!

With all this location data in place, the next logical step was to plot it on a series of maps. Such was my excitement, at one point I was displaying anything and everything this way. I eventually settled on using maps primarily to supplement route descriptions, where this visualisation is most helpful.

{% include 'embed' with 'https://beta.bradshaws.guide/map?geojson=routes.geojson'
  poster: '2018/01/bradshaws_guide/poster.png'
  caption: 'Routes currently covered by Bradshaw’s Guide.'
%}

## Half a product

The mantra “[build half a product, not a half-ass product][19]” has possibly never been truer. Part of me wants to resist relaunching the site until the remaining two sections have been added — that, and the [litany of bugs and other issues][20] have been addressed, and various optimisations made. And yet, what I have now is ten-times better than what existed previously. I had started to feel embarrassed talking about this project, aware of the huge gulf between what I was building, and what was languishing online, untouched for nearly half a decade.

Having crammed over Christmas to reach this point, I’m going to take a well earned break (which will include visiting my brother in São Paulo). That adding pages is now easier than it was before, hopefully means it won’t be long before I’ll be writing about the release of sections three and four.

[^1]: Apologies to anyone living in Scotland, East Anglia or North of England.

[1]: https://bradshaws.guide
[2]: /2009/06/historic_counties_and_psychoville
[3]: https://catalog.hathitrust.org/Record/000075905
[4]: https://bradshaws.guide/routes/section:1
[5]: https://bradshaws.guide/routes/section:2
[6]: https://bradshaws.guide/places/england/worcestershire/dudley
[7]: https://bradshaws.guide/places/england/monmouthshire/chepstow
[8]: https://bradshaws.guide/places/wales/carnarvonshire/conway
[9]: https://bradshaws.guide/places/wales/carnarvonshire/menai-bridge
[10]: https://www.loc.gov/collections/photochrom-prints/about-this-collection
[11]: https://en.wikipedia.org/wiki/Scotch_Roman
[12]: https://www.myfonts.com/fonts/positype/scotch/
[13]: https://store.typenetwork.com/foundry/cartercone/series/miller
[14]: https://www.fontsquirrel.com/fonts/trocchi
[15]: https://en.wikipedia.org/wiki/Category:Disused_railway_stations_in_the_United_Kingdom
[16]: http://www.disused-stations.org.uk
[17]: http://maps.nls.uk/
[18]: http://maps.osi.ie/
[19]: https://basecamp.com/books/Getting%20Real.pdf
[20]: https://github.com/bradshawsguide/website/issues

*[OCR]: Optical character recognition
