---
title: New & Improved
date: 2011-07-25T00:40:33+01:00
location:
  locality: Brighton
  country-name: United Kingdom
summary: Unless you’re viewing this in your RSS reader, you may have noticed a few changes to the site. It’s been well over two years since the last redesign, but I’ve been working on this update on-and-off for the last 12 months. I could probably continue tweaking and refining, but as a wise man once said, “real artists ship”.
category:
- Website
- Web
discussion: closed
---
Unless you’re viewing this in your RSS reader, you may have noticed a few changes to the site. It’s been more than two years since the last redesign, but I’ve been working on this update on-and-off for the last 12 months. I could probably continue tweaking and refining, but as a wise man once said, “real artists ship”.

## So what’s new?

As I stated in the [design principles][1], this redesign has been focused on content. Through constant iteration, I continually questioned which features deserved to be on each page, and typically the answer was to remove rather than add.

I’ve also spent some considerable time refining the typography. I’m still finding it difficult to move away from a Helvetica based design, but Jeremy Tankard’s [Bliss][2] and Type Together’s [Skolar][3] typefaces do a handsome job of breaking my addiction.

Given this effort, I decided to revisit previous journal entries and articles, correctly marking up abbreviations and cited works, and updating images with larger, higher quality versions. I’ve finally got round to adding photos to [my review of the Brasília Palace Hotel][4], and that’s probably a good place to start sampling the improvements.

### Related content

Not wanting to burden readers with periphery content, entry pages feature extra content hidden away behind a few additional links. Discussions are be found on separate pages, an idea that I played with earlier in the design process and actually implemented on the previous site. This allows me to retain ownership of my posts whilst still accepting commentary where it may be of benefit.

Some posts also show related photos I’ve [machine tagged][5] on Flickr and all provide a selection of five related entries, again matched by tag. Judicious use of the [HTML5 History API][6] allows these pages to load in place on the same page.

### Journal links

The Journal gets [its own page][7] and takes a tumblelog approach which I’ve become fond of. Now I can incorporate videos and photos, highlight key quotes or recommend articles that find interesting. I’ve seen this done on many of the sites I read, and it’s something I’ve wanted to try for a while. What may work for others may not work for me, so I’m interested to see how I end up using this new functionality.

### Portfolio

FourTwo, my somewhat neglected (and [now archived][8]) freelance site redirects to the new [Portfolio][9] section. Here you can see the fruits of my brief freelance existence — as well as the work I’ve been doing at Clearleft — all in one place.

### Archive

Archives have also been refreshed, with a [calendar based overview page][10], and [monthly pages][11] that draw related content together on a single page.

### Design

Much to my own disappointment, I’ve never been one for sketching, and often dive straight into Fireworks instead. Recently I’ve started to step back a little and started using tools like OmniGraffle. This lets me focus on hierarchy and layout without getting drawn into the details.

Fireworks was employed later in the process when I wanted to play with different visual approaches, yet often in tandem with the browser and real content. I’ve not got a lot to say about the design, largely because I’m already bored of it and want to start over.

## Technical considerations

One of the main reasons behind this redesign was to experiment with new techniques and approaches. Being able to think through the complexities of a Responsive Design in my own time was immensely valuable, as was the iterative testing of the design on different devices. Granted, these were typically manufactured by Apple, so more testing is certainly required.

Thanks to the discussion and experimentation happening around [Responsive Design][12] at Clearleft, I’ve adopted a responsive image technique initially developed by [Scott Jehl][13] and [built upon by Andy Hume][14]. What I like to label experimental, you may want to call buggy; I’ve noticed images not loading and both image sizes getting downloaded on larger screens. Embrace the experimentation!

The site is marked up using HTML5 with particular attention (and much head scratching) lavished on the outline of each page. I’ve spent a lot of time thinking about performance too, helped greatly by the techniques documented in the [HTML5 Boilerplate][15] which I’ve referenced rather than use wholesale. No need to [fear pink text selection][16] here.

Maps use the [Leaflet JavaScript library][17] which provides a far more enjoyable mobile browsing experience than the iFrame embedded Google Maps I was using previously. It also means I can now use Open Street Map data. [This post about my trip around Europe][18] is a good place to see these new maps in action.

The [RSS feed][19] has been updated to show all new content posted to the site (entries, links and portfolio projects) but you can [subscribe to individual sections][20] if you wish.

### Movable Type

I’m unashamed in my continued use of [Movable Type][21], and the [latest release][22] by the team in Japan has improved upon an already great platform. That’s not to say I haven’t got my gripes, especially since I’ve adopted the Websites/Blogs model available in Movable Type 5. Simple things like creating an archive page that aggregates content across all blogs is difficult, if not impossible to accomplish. I also tried using the built-in asset management features (which would allow me to upload images and automatically generate thumbnails) but this appeared buggy and incomplete. It’s a solid platform, but there is still much room for improvement.

## Just the start

In many respects my focus on the content and typography means these do much of the heavy lifting, and I’m conscious that the design lacks much colour, texture or detailed refinement. Yet this is more of a foundational design upon which I can layer on new features and polish over time. The design will continue to evolve, and the bugs will be ironed out. Eventually.

[1]: /2010/12/design_principles
[2]: http://fontdeck.com/typeface/bliss/
[3]: http://fontdeck.com/typeface/skolar/
[4]: /2011/03/brasilia_palace_hotel
[5]: https://adactio.com/journal/1274/
[6]: http://diveintohtml5.info/history.html
[7]: /journal/
[8]: http://v1.fourtwo.net/
[9]: /archive/
[10]: /projects/
[11]: /2011/02/
[12]: https://alistapart.com/article/responsive-web-design
[13]: https://www.filamentgroup.com/lab/responsive-images-experimenting-with-context-aware-image-sizing.html
[14]: http://blog.andyhume.net/content-aware-responsive-images/
[15]: https://html5boilerplate.com
[16]: https://github.com/h5bp/html5-boilerplate/issues/610
[17]: https://leafletjs.com
[18]: /2009/05/a_european_adventure
[19]: /feeds/combined/
[20]: /feeds/
[21]: https://movabletype.org
[22]: https://movabletype.org/news/2011/05/movable_type_51_and_505_436_security_update.html

*[API]: application programming interface
*[HTML]: HyperText Markup Language
*[RSS]: Really Simple Syndication
