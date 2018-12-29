---
title: A Field of Ponies
date: 2012-12-11T15:49:24Z
location:
  locality: Brighton
  country-name: United Kingdom
summary: Earlier today, 24 Ways published an article in which I outlined five reasons why I believe two current proposed markup patterns for responsive images are largely redundant. Here I provide some follow-up, and hopefully clarification around the points I raised.
tags:
- responsive_design
- web
---
Earlier today, <cite>24 Ways</cite> (sort of an advent calendar for web designers and developers), [published an article][1] in which I outlined five reasons why I believe two current proposed markup patterns for responsive images are largely redundant.

For those behind these proposals, this was received as an unthinking critique of their commendable work, lacking wider context and oblivious to the finer details that have been debated extensively already. Others, perhaps looking for an instant solution to this vexing problem, focused on one part of the article, and decided the solution is a new image format.

## I don't want a new pony

In my article, I link to [an article by Yoav Weiss][2]. He suggests a possible solution would be to adjust the way browsers handle progressive JPEGs. In terms of getting vendors to do anything helpful in terms of how they handle images, this seems reasonable. Whether it is remotely achievable, especially when you consider how difficult it has proven to get broad support for a new image format, cf. no support for a single video codec, this seems unlikely.

With regards to image formats, I say:

> While it's tempting to try to solve this issue by inventing new markup, the crux of it remains at the file level.

A responsive image format should be our North Star. The reason I brought up image formats, is that even if we try to route around the problem with markup -- or with other hacks and polyfills -- we should remember that this is where the problem lies. Techniques like [compressive images][3] support that claim. Any solution that doesn't address the problem at the format level can only be viewed of as temporary.

I understand the grim reality regarding new image formats. Still, I thought it was worth restating where the problem lies, a gentle reminder for us not lose sight of this while we continue to explore different solutions.

## Beyond art direction

What does or doesn't belong in markup is one of those questions that is always hotly debated among web developers. There is never a right answer. Should art direction for images belong in markup? I don't think it should, and perhaps that's why I dislike the `picture` mark-up pattern. Others disagree, and that's fine.

Still, beyond art direction, there should be greater questioning of whether to include an image in our markup in the first place. Scott Jehl terms this 'aggressive enhancement'. Perhaps this is simply a means of reselling progressive enhancement to an industry that has become used to burdening webpages with ancillary content.

When everything on the web should ultimately degrade down to text -- remember, browsing the web is not always a visual experience -- I think more often than not, the inclusion of an image can be rightly questioned.

Let me be clear. I'm not saying we shouldn't use images on the web. Again, I point you in the direction of [the BBC's responsive work][4]. My point is, if we intend for our markup to remain lightweight and accessible, the place we describe the conditions upon which an image is displayed or not, is probably best located beyond the bounds of HTML.

## Today's options

Right now, I believe we have a bunch of tools at our disposal. These can be broadly categorised as follows:

* **Progressive enhancement:** Referencing less images in our markup, and using conditional loading techniques to decide if and when additional images should be displayed. [Picturefill][5] falls under this category (although I'm not convinced this  pattern should be standardised).

* **Compressive images:** I've had a lot fun [playing with the technique][6] originally [outlined by Daan Jobsis][7]. It's exciting to [see others experiment][8] with this idea too. I know I'll be paying more attention to compression settings and image dimensions over the coming year.

* **Altering the visual aesthetic:** If recognising that limited or unpredictable bandwidth is a constraint of the medium, let's embrace it and see what results! As we move away from classic layouts and design practice, it behoves us to think how images will play a part within this new landscape.

Or, to put it another way, we already have [a field of ponies][9].

## Web native design

My article should be seen as part of a broader discussion about how much, and what aspects, of our existing practice remain suitable when designing for the web. This is something I covered earlier this year in <cite>[The Web Aesthetic][10]</cite>, although I'm not sure if I've conveyed my thinking as clearly as I would like.

Perhaps the most important line in my article was this:

> Instead of spending the next year worrying about responsive images, let's embrace the constraints of the medium, and seek out new solutions that can work within them.

Two years may seem like a long time for those who have focused intently on this particular problem, but relative to the longevity of the web, it is nothing but a heartbeat. While we're still figuring this stuff out, it feels uncomfortable for us to rush to markup to solve the first problems we've encountered.

Ultimately, usage will dictate which is seen as the best means of using images on the web. While RICG may want to look at how a solution could exist in markup, let's not fall into the trap of accepting that this problem -- and its solution -- exists only at this level.

[1]: https://24ways.org/2012/responsive-images-what-we-thought-we-needed/
[2]: http://blog.yoav.ws/2012/05/Responsive-image-format
[3]: http://filamentgroup.com/lab/rwd_img_compression/
[4]: http://responsivenews.co.uk/post/18948466399/cutting-the-mustard
[5]: https://github.com/scottjehl/picturefill
[6]: /2012/12/causeway_coast
[7]: http://blog.netvlies.nl/design-interactie/retina-revolution/
[8]: http://nocturnalmonkey.com/writing/compressing-images
[9]: https://www.youtube.com/video/wJbhxVepEoc
[10]: http://www.alistapart.com/articles/the-web-aesthetic/

*[BBC]: British Broadcasting Corporation
*[cf.]: compare
*[HTML]: HyperText Markup Language
