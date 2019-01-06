---
title: (Re)introducing Bradshaw's Guide
date: 2013-04-17T00:48:12+01:00
location:
  locality: San Francisco
  country-name: United States
summary: Based on the 1866 edition of George Bradshaw's handbook for tourists using Britain's nascent railway network, my latest project puts his historical insights into the hands of a new generation, many of whom use the same routes he described 150 years ago.
image: /images/2013/04/bradshaws_guide/iphone.png
tags:
- project:bradshaws_guide
- travel
- featured
discussion: closed
---
{% include 'figure' with '/images/2013/04/bradshaws_guide/iphone.png'
  caption: 'Bradshaw’s Guide being viewed on an iPhone.'
  alignment: 'bleed'
%}

This blog has been fairly quiet over the last few months. Not because I've got a shortage of things to say, far from it. In fact, such is the backlog of posts, I'm dedicating much of my week-short break here in San Francisco to catching up.

The departure date for this trip was a useful deadline for launching the project that's been occupying all of my spare time: [Bradshaw's Guide][1]. If you've watched Michael Portillo's BBC television series <cite>[Great British Railway Journeys][2]</cite>, you'll know what this is about. If not, the title of his programme is a good description.

Based on the 1866 edition of George Bradshaw's handbook for tourists using Britain's nascent railway network, this project puts his historical insights into the hands of a new generation, many of whom use the same routes he described 150 years ago.

## Why build it?

Thanks to Portillo's series, Bradshaw's vibrant picture of victorian life has found a renewed popularity. While you can [purchase a reproduction][3] of Bradshaw's earlier 1863 handbook, it's over an inch thick -- pocket sized by victorian standards, but not in today's world of mobile phones.

Bradshaw's work is well suited to hypertext, with stations categorised by location, the lines they serve and the railway companies that built them. There is also an interesting design challenge, translating chaotic victorian typesetting into something more structured that still retains the same feel. I will talk more about the site's typography in a separate post.

Besides the historical, technical and artistic aspects, making Bradshaw's work more widely available might also encourage people to spend more time on the railways and holiday at home, rather than fly overseas (readers should ignore the author's current location).

{% include 'figure' with '/images/2013/04/bradshaws_guide/ipad.png'
  caption: 'Bradshaw’s Guide viewed on an iPad.'
%}

## Technical platform

I originally thought this project would be an excellent opportunity to learn a new programming framework, perhaps Django or Ruby on Rails. However, the thought of learning a new language served only to delay me getting started. Hounded by friends as to the project's progress, I began looking for a flexible publishing platform instead.

[Kirby][4], a flat file based CMS that markets itself as 'easy to setup, easy to use, flexible as hell', looked the part. On a train to Bath for a client meeting last November, I used it to flesh out a prototype, and immediately fell in love. It has a [template language][5] that isn't too abstracted from PHP -- meaning I'm learning PHP as I go -- and its creator, [Bastian Allgeier][6], provides excellent documentation and support.

With the deadline in sight, I couldn't resist asking for help with tricker aspects of the design. I'd like to thank [Josh][7] for his JavaScript help, and Russ Baldwin for building [a plugin that powers the alphabetical indexes][8].

## Future

I mentioned earlier that this project had launched, but a more accurate description might be to say that it's now public. With only [the first of four sections][9] available (covering London and the south-east of England), there's still a lot of information to add, and features like offline access and geo-location are currently missing. Taking a lesson from the first day of [UX London][10], I'm launching early in the hope that this will lead to the development of a better product in the long run.

I'm painfully aware that the site doesn't describe itself or signpost interesting content well enough. That will change. I'd also like to push the design so that it becomes more transformative across viewports. Right now it feels quite bookish. This is appropriate at smaller sizes, but I'd like to introduce a more magazine-like layout as the viewport increases.

Having worked on this project intently for three months, with many late nights and weekends hidden indoors, short of fixing obvious bugs (such as the menu behaviour on small screens and search field focusing), I'm going to take a little break. It's no exaggeration to say that this project has burnt me out.

Meanwhile, I'll be posting links to the site on the projects [Foursquare][11] and [Twitter][12] pages. As to the later, I'm still unsure how best to use this channel. Should I try to imitate the voice of Bradshaw, or just post quotes from the book like I am on Foursqaure? I'm interested to hear your views.

The source code is [available on GitHub][13], and I encourage you to submit issues. Better still, fork it, make changes and help improve the site directly.

Now, like Bradshaw before me, I'm off to continue my travels.

[1]: http://bradshawsguide.org
[2]: http://en.wikipedia.org/wiki/Great_British_Railway_Journeys
[3]: http://bradshawsguides.com/books-and-maps.html
[4]: http://getkirby.com
[5]: http://getkirby.com/blog/php-templates
[6]: http://bastianallgeier.com
[7]: http://www.joshemerson.co.uk
[8]: https://github.com/shoesforindustry/kirbycms-extensions/tree/master/plugins/alphabetise
[9]: http://bradshawsguide.org/routes/section:1
[10]: http://2013.uxlondon.com
[11]: https://foursquare.com/bradshawsguide
[12]: https://twitter.com/bradshawsguide
[13]: https://github.com/paulrobertlloyd/bradshawsguide

*[BBC]: British Broadcasting Corporation
*[CMS]: Content Management System
*[PHP]: PHP: Hypertext Preprocessor
