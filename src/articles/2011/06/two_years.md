---
title: Two Years
date: 2011-06-08T23:46:23+01:00
location:
  locality: Brighton
  country-name: England
summary: Two years ago I joined Clearleft. Now with the responsive design movement in full swing, I look back over the last two years to see how much my approach to web design has changed.
category:
  - Clearleft
  - Responsive design
  - Web
---
Two years ago today [I joined Clearleft][1]. It was only by virtue of a peculiar career path — one that saw me working for a company in a different country — that I was introduced to its three founders, and soon after given the opportunity to join their respected agency.

This early in my career it seems foolish to suggest I’ve reached its pinnacle, but Clearleft provides me with such a nourishing and supportive environment, that I’m sure I’ll one day achieve it.

My confidence has increased to the point that I feel able to take on a more active role in the community — be it something small like [releasing an icon set][2], or writing about [potentially controversial][3] topics on this blog. More recently, I have even started accepting public speaking engagements.

I now get to work with companies my mum has actually heard of, and find it deeply satisfying to have a portfolio containing work for the BBC, Channel 4 and Mozilla.

Of course, working at Clearleft also means I get to work alongside some of the industry’s most renowned voices — and some lesser known but equally talented and inspirational minds too. Yet it has been the analysis, debate and reappraisal of techniques, technologies and processes, usually over lunch but also when reviewing each others work, that I’ve found the most valuable.

I often take this resource for granted, as I build an assumed knowledge that others may not have been privy too. To this extent, I think being part of a separate community such as the [Multipack][4] (and one located outside Brighton) gives me a better perspective on how others are facing the same challenges, and approaching similar problems.

## A more focused role

Deciding to work at Clearleft did come with some downsides though. I pride myself on being able to build what I design — indeed I think this is what attracted me to web design in the first place. Yet my role so far has been that of a Visual Designer, meaning I’m less likely to be producing the HTML and CSS that has been spinning around in my head as I’ve been creating a design.

I accepted this more restrained role knowing that it would give me an opportunity to perfect my design sensibilities, and better understand how this role fits into the entire process; one that for most other designers can be more siloed and less collaborative.

In fact, collaboration is the most enjoyable aspect of my job. Working alongside colleagues who possess differing strengths yet equally wide ranging skills not only ensures the creation of better products, but is more fun too!

## In which things became much clearer

With the responsive design movement in full swing ([buy the book!][5]) it’s funny to look back over the last two years to see how much my approach to web design has changed. The fluid versus fixed layout debate has raged on for years, and whilst I appreciated the arguments for fluid design, I stayed firmly within the fixed width camp. Fixed designs fitted well into the process — both during sign-off and when handing over to a developer — but honestly, the unpredictability and lack of control that fluid design presented meant it wasn’t something I was keen to embrace. Fixed design felt like a more pragmatic approach, but at what cost?

[Jeremy][6] would say I was making excuses, not designing for a medium where the user has ultimate control over the appearance of a website — whether designers like it or not.

He would often make the case that we were making false and unfounded assumptions in order to create constraints to design against. A compromise was reached where [Natalie][7] and Jeremy would build fluid sites, but wrapped within fixed containers.

It wasn’t long before [those shackles were removed][8].

The proliferation of different devices and screen resolutions, uses and contexts has thrown these misplaced assumptions into sharp relief. If we never really knew how a user would experience our designs before, we certainly don’t now.

## No shortcuts

These developments have occurred just at the point at which we are embracing the latest updates to the web platform, with exciting advancements in HTML5 and CSS3. This has a similar feel to the web standards movement that took off just as I was beginning my career seven years ago.

Back then we replaced table layouts with those based on CSS. This involved such a subtle change on the surface, that it meant we could adopt these new technologies without having to change our design process. A common consensus suggests the same is true today.

For example, upgrading your site is easy as swapping out the doctype and replacing a few semantically named `<div/>`s with corresponding HTML5 equivalents.

Whilst this may be technically true, in venturing only this far you will have missed much of what HTML5 has to offer, be it better integration with the browser via JavaScript APIs, or the ability to add more structure to your documents. Spend just five minutes with a HTML5 Outlining tool (I particularly like [this extension for Chrome][9]) and you’ll soon realise there is much more to [this specification][10].

I suspect the prevalence of front-end development frameworks has reinforced this mindset, with the underlying premise being that the hard work has been done for you. Need a grid? [960.gs][11]. Want to achieve a certain behaviour? Download [jQuery][12] and one of its many plugins. Want your site to be HTML5? Use [HTML5 Boilerplate][13].

I don’t want to come down too hard on frameworks. I think they can be invaluable tools; great for rapid prototyping, but also useful educational resources too.

In fact, I’ve been spending quite a bit of time with the HTML5 Boilerplate recently. I’ve found it to be a fantastic introduction to browser inconsistencies, performance improvements, and even how to automate a build process. There’s no better way to learn about a technology than from within the code that makes it work, and I’ve enjoyed reading many of the articles provided in the comments.

Yet HTML5 Boilerplate has little to do with HTML5 and it’s far from being a boilerplate. More a collection of best practices for HTML, CSS, JavaScript and server configurations, I find it best suited as a starting point for creating my own boilerplate, which I can adapt to support differing development requirements. I believe this was the original intention of the project, but given the number of websites I’ve come across where the text selection colour is bright pink (the default value provided by HTML5 Boilerplate) suggests many have ignored this fact.

## Responsibly responsive

The same is true of responsive design. Again, the assumption is that this technique can somehow be retrofitted into our existing projects and processes. In his [original article][14], [Ethan Marcotte][15] explained that responsive design is composed of three elements:

* Flexible grids
* Flexible images (and videos)
* Media queries

Whilst much of the genius of responsive design comes from those first two, many seem to have latched onto the third, ignoring the fact that you can create responsive layouts with little or [no media queries][16] at all.

Even if you have grasped the entirety of this technique, you still need to recognise the underlying reasons for taking a responsive approach in the first place. If we are talking about truly device independent design, then the attributes of popular devices can’t be the looking glass though which we make our decisions. Furthermore, if we are talking about adaptable design, fixed pixel widths can’t be our measurement, nor can layout be the only focus of our attention. I’ve seen little discussion around how different input methods might effect our design choices, but I’m sure this will come.

If there is a simple truth underlining responsive design, it’s that you can’t assume anything. However, if one thing can be relied upon then it’s that relative unit; percentages and ems are far more robust than absolute units like the humble pixel.

## A new process

But wait, there’s more! If you’ve accepted the responsive web design approach and understood the reasons for following it, then you will have soon realised that the traditional linear design process breaks down pretty quickly once you are designing for the unknown.

It was with much anticipation that I waited for Ethan to take to the stage at last months An Event Apart. Here he would unveil not only the work he and [Filament Group][17] have been doing with the [Boston Globe][18] on their upcoming responsive redesign, but more importantly, talk about the design process behind it. How do we design a responsive website? What’s the answer!

Sadly, there turned out to be no magic bullet. The [solution he proposed][19] was close collaboration with developers, working in an iterative, back and forth process, slowing refining designs so they would work across a variety of different devices.

This is hardly surprising. After all, this is exactly what we should have been doing anyway — collaborating with developers rather than handing over pristine static comps.

This rich, interactive yet highly unpredictable medium has never been well represented by the static visual (even less so when printed out on paper). Only a conversation between a designer and a developer can ever hope to communicate the various complexities and subtleties and ensure we create products that work as intended.

If we are to go one stage further, ultimately our clients need to understand that websites are not something that can be redesigned once every two or three years — they need to adapt as often as their users expectations and needs change. To not iterate and improve your offering online, to ignore customer feedback and usage patterns, is to miss the fantastic opportunity the web presents.

Luckily I’ve been able to work with a few clients at Clearleft who understand this. Through constant iteration, testing and a degree of trust, we are building sites that are gradually evolving and improving, rather than being left to stagnate.

## Conclusion

I’m thankful to be working with a design agency that is treating the web on its own terms and looking to embrace the myriad opportunities it presents. Our processes are being rethought in ways that increase collaboration between designers and developers, although such a fundamental shift in workflow is never easy.

I wish to see similar maturity reflected by my peers. We can only tackle the complexities and challenges inherent to this medium once we’ve accepted that we can’t rely on previous methods of working, or swap in new techniques for old.

It is these challenges, and the excitement that comes from understanding new technologies and approaches that has reaffirmed my love of the web.

Whilst some designers are deciding to jump aboard the iOS bandwagon, I find myself strangely turned off by it all — especially given its proprietary and closed nature. At the same time, [Andy][20] has been careful to remind me that I shouldn’t totally dismiss native platforms; there is real innovation happening there that can, and should, be transferred to the web.

Whilst we may have got a lot wrong, one thing our industry has always got right is the community, one that is willing to share ideas and exchange knowledge. We need to rely on this more than ever as we transition from old habits to new ways of working. I look forward to being part of that ride.

***

I’ll be speaking more about this topic at this year’s [Geek in the Park][21]. Join me, [Relly Annett-Baker][22], [Andrew Disley][23] and [James Willock][24] for a relaxing day in the park and an evening of illuminating talks. It takes place in Leamington Spa on the 13th August. You can find out [more information about the event here][25].

[1]: /2009/06/clearleft
[2]: /2009/06/social_media_icons
[3]: /2010/07/are_web_design_conferences_becoming_too_safe
[4]: http://multipack.co.uk/
[5]: http://www.abookapart.com/products/responsive-web-design/
[6]: https://adactio.com/
[7]: http://natbat.net/
[8]: https://adactio.com/journal/1696/
[9]: https://chrome.google.com/webstore/detail/afoibpobokebhgfnknfndkgemglggomo
[10]: http://developers.whatwg.org/
[11]: https://960.gs/
[12]: http://jquery.com/
[13]: http://html5boilerplate.com/
[14]: http://www.alistapart.com/articles/responsive-web-design/
[15]: http://unstoppablerobotninja.com/
[16]: http://clagnut.com/sandbox/imagetest/
[17]: http://www.filamentgroup.com/
[18]: http://www.boston.com/bostonglobe/
[19]: https://adactio.com/journal/4538/
[20]: http://andybudd.com/
[21]: http://www.geekinthepark.co.uk/
[22]: http://rel.ly/
[23]: http://andrewdisley.com/
[24]: http://sleepykyoto.com/
[25]: http://lanyrd.com/2011/geekinthepark/

*[API]: application programming interface
*[BBC]: British Broadcasting Corporation
*[CSS]: Cascading Style Sheets
*[HTML]: HyperText Markup Language
