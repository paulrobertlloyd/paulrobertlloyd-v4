---
title: The Web Aesthetic
date: 2012-09-25
canonical:
  url: https://alistapart.com/article/the-web-aesthetic
summary: 'When every device begs to be connected, it has become easier — almost necessary — to accept the adaptable nature of the web. Responsive web design is an emerging best practice, and our layouts are becoming more flexible. But often, innovation is focused on technical implementations while the visual aesthetic remains ignored. To put it another way, we’re embracing “responsive” but neglecting the second part: “design.” Now is the time to seek out an aesthetic that is truer to the medium.'
image: /images/2012/09/the_web_aesthetic/illustration.png
category:
  - Responsive design
  - Web
  - Design
tags:
  - source:a_list_apart
photoset:
  1:
    - url: /images/2012/09/the_web_aesthetic/bbc1_1974.png
      alt: BBC ident from 1974
    - url: /images/2012/09/the_web_aesthetic/bbc1_1981.png
      alt: BBC ident from 1981
  2:
    - url: /images/2012/09/the_web_aesthetic/dconstructarchive_original.jpg
      alt: Original speaker portrait image
    - url: /images/2012/09/the_web_aesthetic/dconstructarchive_optimised.jpg
      alt: Optimized speaker portrait image
  3:
    - url: /images/2012/09/the_web_aesthetic/dconstruct2012_original.jpg
      alt: Original speaker portrait image
    - url: /images/2012/09/the_web_aesthetic/dconstruct2012_monochrome.png
      alt: Optimized speaker portrait image
  4:
    - url: /images/2012/09/the_web_aesthetic/bbc_news_simple.png
      alt: Basic mobile experience
    - url: /images/2012/09/the_web_aesthetic/bbc_news_enhanced.png
      alt: Enhanced mobile experience
---
_This article is [also available in Italian][it-IT]{hreflang="it-IT" rel="alternate external"}_

![](/images/2012/09/the_web_aesthetic/illustration.png 'Illustration: [Kevin Cornell](http://alistapart.com/authors/c/kevincornell) for A List Apart.'){data-responsiver="wide"}
{.align-bleed}

> It is the nature of the web to be flexible, and it should be our role as designers and developers to embrace this flexibility, and produce pages which, by being flexible, are accessible to all.
— John Allsopp, <cite>[The Dao of Web Design](https://www.alistapart.com/articles/dao/)</cite>

Twelve years ago, John Allsopp asked us to embrace the adaptable nature of the web. We didn’t listen.

Although the web standards movement that followed advocated the separation of presentation and content — an essential requirement for adaptive design — this only manifested itself in code. Floated `div`s replaced table cells, yet layouts remained governed by the inflexible conventions of print.

Today, when every device begs to be connected, it has become easier — almost necessary — to accept the adaptable nature of the web. [Responsive web design][1] is an emerging best practice, and our layouts are becoming more flexible. But once again, innovation is focused on technical implementations while the visual aesthetic remains ignored.

To put it another way, we’re embracing “responsive” but neglecting the second part: “design.” We’re replacing fixed-width `div`s with fluid ones. As we undergo a period of reassessment, both of our practice and of our tools, now is the right time to seek out an aesthetic that is truer to the medium.

## The material of the web

To properly design for a medium, you need to understand it. I like to think of the web as a kind of material, with unique characteristics we can take advantage of, and limits it can reach before it breaks. The web could almost be considered a composite, made up of HTTP (the how), URLs (the where), and HTML (the what). Omit any one of these ingredients and you’re no longer building the web.

It’s this combination of protocols and conventions that helps the web achieve what [Sir Tim Berners-Lee calls][2] its “primary design principle”: universality.

> It should be accessible from any kind of hardware that can connect to the internet: stationary or mobile, small screen or large.

With universality so inherent to the medium, it could be said that the web is [responsive by default][3]. “Responsive” isn’t so much a technique or process, but a fundamental characteristic of the platform — and it’s one we threaten with each line of CSS and JavaScript we lay upon it. Universality transcends visual design, too: Websites need to be just as easy to use when displayed as plain text or read out loud.

This nature, and these characteristics, should inform every aspect of our design. So how might the overriding aesthetic of the web change were we to design with this universal nature in mind?

## The medium is the message

Like the web, television is a medium where the access devices differ: Televisions can vary in size, resolution, aspect ratio, and refresh rate.

This was especially true in the 1970s and early 1980s. Although programs were recorded in color, broadcasters still had to consider the large number of people who owned black-and-white sets. On-screen graphics needed to work on both types of screens, so designers used contrasting shapes and colors. For example, the idents for BBC1 used a yellow (and later, bright green) rotating globe on a dark blue field. The resulting design may have been garish, but it worked.

{% render 'photos' with photoset.1
  caption: 'BBC1 idents from 1974 and 1981.'
  imagePreset: 'thumbnail'
%}

Television is facing another period of transition, this time toward a high-definition widescreen format. Because many viewers own standard-definition 4:3 televisions, designers again need to compromise, working within a “safe area” to ensure graphics don’t get cropped on older sets. As such, graphics on widescreen televisions tend to float in the middle of the screen, not yet able to make use of the full width.

The overriding aesthetic of television will continue to change, but it will remain governed by advances in technology and designers’ understanding of its limitations.

## Everything old is new again

Before “killer websites” and the desire to produce print-like layouts — when bandwidth was limited and small screens could only display 256 colors — pixel graphics were considered *de rigueur*{lang="fr"}. Layouts were simple and focused.

In 1995, [Hotwired][4] used just sixteen colors. Navigation on the homepage consisted of little more than six four-color, 1kb GIFs representing each topic area. The layout was just those images, centered:

![](/images/2012/09/the_web_aesthetic/hotwired_1995.png 'Hotwired, circa 1995.')

Surrounded by high-resolution displays and limitless bandwidth, it’s easy to forget that similar constraints still exist. Although devices are becoming ever more powerful and feature-rich, less capable devices continue to be developed as well; for example, the Amazon Kindle is a popular device, yet most of the line’s e-reader models feature cellular connectivity and a monochrome E Ink display.

## Embracing constraints

In the move to adaptive layouts, another constraint has revealed itself: Bitmap images fail to respond, be it to the size of the viewport or to available bandwidth.

This isn’t a failing of the web; that we can embed different types of media into a webpage is a useful feature. But not all formats share the web’s characteristics. There’s a tremendous opportunity to develop a responsive bitmap format, and I doubt images will truly feel part of the web until such a thing exists. In the meantime, the question persists: How can we make highly detailed photographic images work within such an adaptable medium?

Many have tried to answer this question with technical solutions. Since complex and fragile hacks were found wanting, efforts have moved to [defining new standards,][5] with a consensus forming around those that detect when differently sized versions of an image should be requested and displayed.

It’s in the realm of constraint that creativity is fostered. Designers have yet to push against the limits of what is possible. In seeking design solutions to this problem, we could create an aesthetic more appropriate to the medium — and perhaps realize that the responsive image problem only exists because our design conventions remain rooted in print. Without such a period of experimentation and reflection, I fear we could actually introduce standards that go against the medium’s universality; modern-day `<font>` elements almost.

## Designing around the problem

Thankfully, developers and designers are starting to undertake such experimentation, and are finding solutions that negate the need for new standards.

### 1. Optimization

Rather than generating differently sized images and determining which should be shown, another option is to serve a single, highly optimized image instead.

The [dConstruct Archive][6] is a small site where people can listen to talks given at previous dConstruct conferences. Here, background detail around the face of each speaker has been blurred out, generating images with fewer compression artifacts and therefore smaller file sizes. This technique works especially well for portraits, as humans tend to focus on facial features anyway.

{% render 'photos' with photoset.2
  caption: 'Original image: 9kb. Optimized image: 4kb.'
  imagePreset: 'thumbnail'
%}

To work out which image sizes to use, the smallest and largest displays were taken into account. We can already see a failing in current responsive image proposals. If you visit this site, you will notice that larger viewports sometimes display smaller images, because the size of the image required is often dependent on the size of its containing block, *not* the size of the viewport. Yet viewport is the value the proposed standards would have us query.

### 2. Altering the aesthetic

If images with fewer colors and higher levels of compression can deliver smaller files, then perhaps our designs should reflect this.

With a theme of “playing with the future,” the [dConstruct 2012][7] conference site employed a highly typographic design that featured monochrome images with areas of flat color. This design decision meant images could be really small, some needing as few as eight colors:

{% render 'photos' with photoset.3
  caption: 'Original image: 14kb. Optimized image: 11kb.'
  imagePreset: 'thumbnail'
%}

As we saw in the television example, the constraints of a medium can impact the resulting aesthetic. In that case, should images with fewer colors or blurred backgrounds — and perhaps even noticeable compression artifacts — become an accepted norm on the web? Surely the popularity of services like Instagram (itself a product born of constraints) has proven that [photography is judged by its content][8], not by its resolution.

### 3. Progressive enhancement

Altering the visual aesthetic to suit the needs of the medium is a fine ideal, but it’s unlikely to be accepted by some clients, and let’s face it: It’s not always appropriate. In fact, it seems we rarely ask that question: What is appropriate? By evaluating our content, we can decide how many images are actually required to convey a message.

Rather than increasing the *resolution* of images as sites scale up, we can think about increasing their *number* instead. This ties in well with the ideas around progressive enhancement: providing a baseline experience that’s enhanced as device capability improves.

[The BBC News mobile site][9] is a great example of progressive enhancement. The raw HTML source references just two images: the BBC logo, and an image for the main story. Every device receives this, and pages can weigh as little as 28kb — quite a feat in the world of 5Mb websites.

When accessed on more powerful devices like newer smartphones, tablets, and desktop computers (those that can “[cut the mustard][10]”), an image is displayed for each story. These images have been deemed “nice to have” — enhancements to the core experience that are conditionally requested after the basic page has loaded.

{% render 'photos' with photoset.4
  caption: 'Simple and enhanced experiences for the BBC News mobile site'
  imagePreset: 'thumbnail'
%}

Progressive enhancement has long featured in the developer’s toolbox, but it should now feature throughout the design process. By thinking about websites in less binary terms (desktop versus mobile; IE6 versus “modern” browsers), we can create experiences that adapt to the diverse landscape of the web.

## Adapting our assumptions (not just our layouts)

Imagine the design of a new website. Do you see a layout framed by a header and footer, with navigation running along the top and a main content area featuring a sidebar?

We need to reset such assumptions.

Rather than seek inspiration from print, perhaps we should look more toward software design. Desktop applications have long been imitated on the web, particularly for productivity applications, and they are often [insufferable as a result][11]. More successful interfaces combine the best aspects of desktop applications with the native interface of the web — think Gmail versus Yahoo! Mail.

Similar thinking is now being brought to content-focused applications, largely thanks to the introduction of the Chrome Web Store in 2010. This feature gave Chrome developers a marketplace to sell and promote apps built using web standards, and many have created apps that repurpose content available on the web.

That these apps can only be viewed using Chrome is an unnerving requirement, and one worthy of protest. But, if we look at these apps from a purely visual standpoint and compare them to their traditional website counterparts, we’ll see that a blank canvas removed of assumptions can deliver experiences more applicable to the web.

### Only the news that’s fit to print

When we think of websites inspired by print, those of newspapers spring to mind. The website for [_The New York Times_][12] features a fixed, densely packed, multi-column grid. Like many contemporary sites, content is suffocated by advertising, sharing widgets, and related links:

![](/images/2012/09/the_web_aesthetic/nytimes_site.png 'New York Times website interface.')

The inappropriateness of this design becomes more apparent when compared to its [Chrome App][13] (which is thankfully accessible in other browsers). Content takes center stage, with a less cluttered, more focused interface that’s also responsive — to a point. Note that it also features less photographic imagery, supporting the idea that responsive images might only be a problem when web designers try to replicate print.

![](/images/2012/09/the_web_aesthetic/nytimes_app.png 'New York Times application interface.')

### Task-oriented sites

Another website that suffers from similarly crowded layouts is [BBC Good Food:][14]

![](/images/2012/09/the_web_aesthetic/bbc_good_food_site.png 'BBC Good Food website interface.')

Yet, when viewing a recipe page in its [Chrome app,][15] we again see a more considered, user-centered design; it’s far easier to follow a recipe when you don’t have to scroll the page.

![](/images/2012/09/the_web_aesthetic/bbc_good_food_app.png 'BBC Good Food application interface.')

### Content, not chrome

A final example of this trend can be found on [Rdio][16]. As the music-streaming service has evolved, its designers have sought consistency between the website and desktop application. Where once these interfaces shared only a few components, now they are largely the same. This has resulted in a design that falls somewhere between the two: not quite a website, but not quite a desktop application either.

![](/images/2012/09/the_web_aesthetic/rdio.png 'Rdio website interface.')

Like the Chrome apps for <cite>The New York Times</cite> and BBC Good Food, this nudge toward a more app-like interface has resulted in a stronger focus on content (in this case, album covers), a more fluid layout, and less intrusive navigation.

In some respects, the new interface shares qualities with Microsoft’s “Metro” design language, found on Windows Phone and Windows 8. When you consider that some of the [design principles behind Metro][17] include “Clean, Light, Open and Fast,” “Content, Not Chrome,” and “Be Authentically Digital,” it would be hard to argue that these values couldn’t equally apply to web interfaces.

Of course, one of the reasons these apps can be treated differently from traditional websites is the absence of display advertising — a constraint not so much of the web, but of the business models built upon it. Online advertising is enduring a long and painful death: Adverts are getting larger and more hostile, while services that remove them, like AdBlock, Instapaper, and Readability, are gaining popularity. Yet without proven business models to replace it, display advertising will likely stay with us for a few more years.

This shouldn’t stop us from learning from these app-inspired designs, though. At the very least, they highlight alternative layout possibilities, and how desirable services can be when greater focus is given to content.

## The journey continues

As we enter the third decade of the web’s existence, we should be gaining a sense of what works, and what doesn’t. We should now have the confidence to choose which aspects of other media and platforms to take inspiration from, and which to ignore. We should be inspired by the conventions of other media, but no longer governed by them.

With universality as a guiding principle, we can ingrain approaches like progressive enhancement throughout our design process. Everything on the web ultimately needs to degrade down to plain text (images require alt text; videos require transcripts), so the text editor might just become the most powerful app in the designer’s toolbox.

As the web matures, we should acknowledge and embrace its constraints — and the aesthetic those constraints can produce. When we do, we might discover that the true web aesthetic is hardly visual at all.

[it-IT]: http://italianalistapart.com/articoli/76-numero-62-16-ottobre-2012/316-estetica-del-web
[1]: http://www.alistapart.com/articles/responsive-web-design/
[2]: http://www.scientificamerican.com/article.cfm?id=long-live-the-web
[3]: http://blog.andyhume.net/responsive-by-default/
[4]: https://en.wikipedia.org/wiki/HotWired
[5]: https://alistapart.com/articles/responsive-images-how-they-almost-worked-and-what-we-need/
[6]: http://archive.dconstruct.org/
[7]: http://2012.dconstruct.org/
[8]: http://aegirscopic.com/articles/memories/
[9]: http://m.bbc.co.uk/news
[10]: http://blog.responsivenews.co.uk/post/18948466399/cutting-the-mustard
[11]: http://www.codinghorror.com/blog/2008/12/avoiding-the-uncanny-valley-of-user-interface.html
[12]: https://www.nytimes.com/
[13]: https://www.nytimes.com/skimmer/
[14]: http://www.bbcgoodfood.com/
[15]: https://chrome.google.com/webstore/detail/jnkffnoliaheoidfeejcmnidkkgilkja
[16]: http://rdio.com/
[17]: http://windowsteamblog.com/windows_phone/b/wpdev/archive/2011/02/16/from-transportation-to-pixels.aspx

*[BEM]: block, element, modifier
*[CSS]: Cascading Style Sheets
*[MVC]: Model–view–controller
*[W3C]: World Wide Web Consortium
*[WHATWG]: Web Hypertext Application Technology Working Group
