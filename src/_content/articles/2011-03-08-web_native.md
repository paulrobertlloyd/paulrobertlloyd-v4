---
title: The Web Native Designer
date: 2011-03-08T21:18:16Z
location:
  locality: London
  country-name: United Kingdom
summary: 'Following the latest trends is fun but can also encourage laziness; you should think about design in terms of a particular brief rather than the particular fashion of the day. Yet it can be useful to focus on underlying trends: how we work, how we communicate with clients and how we’re now starting to appreciate the web as a medium in its own right.'
tags:
- design
- process
---
Today I spoke at the [APA’s Digital Breakfast][1] event in London. The APA is an organisation that represents print publishers who produce magazines and editorial content for brand-based consumer magazines. This months event focused around the theme of Web Design Trends; [Chris Mills][2] [spoke about HTML5][3] and [Adam Bankin][4] talked about design beyond the desktop. A summary of my talk follows.

## Trends

I originally intended to reprise a previous talk I had given about [Styleguides for the Web][5], but as I reviewed my slides, I started to think more about the theme: Web Design Trends.

Always a popular topic, discussion often revolves around new technologies and the latest design fashions of the day. Yet it can be dangerous to focus too much on what everyone else is doing — whilst it’s helpful to learn about HTML5 or the latest JavaScript libraries, you need to keep in mind the specific requirements of your own users.

Watching the latest trends is fun, but it can also encourage laziness. Again, you should be thinking about design in terms of a particular brief, branding and the mood you’re trying to convey.

So instead I will focus on some of the underlying trends: how we work, how we communicate with clients and colleagues and how we’re starting to respect the web as a medium in its own right.

## What is the Web?

For much of its short existence, the web has been treated as if it were the printed page and you can see this is some of the terms we use — words such as ‘page’ — but also phrases like ‘above the fold’. Such misappropriation isn’t new. For example, during the early development of television, it was often referred to as ‘radio with pictures’.

There is a growing acceptance that the web works best when it’s treated on it’s own terms. In a recent article, [Paul Ford wrote][6]:

> People in the newspaper industry saw the web as a newspaper. People in TV saw the web as TV, and people in book publishing saw it as a weird kind of potential book. But the web is not just some kind of magic all-absorbing meta-medium. It’s its own thing.

There are three particular aspects of the web that I think make it unique:

* **Dynamic:** Clients often commission redesigns once every two or three years, but this ignores a fantastic opportunity. The web gives you unparalleled access to your users, meaning you can get a tremendous amount of feedback (either directly or indirectly) on how your site is performing and how well it meets their needs. This dynamism has its downsides too — we have yet to think of any reliable method of preserving historically relevant content. The web almost exists with a complete ignorance of the past.

* **Adaptable:** I think the fluidity of the web is especially important for designers to recognise, and many have felt this all too acutely when trying to design websites that maintain pixel level precision across different browsers. The web works best when you embrace its fluidity rather than fight it, and as we see a proliferation of devices with varying design constraints, we’re now seeing this is a strength, not a weakness.

* **Systematic:** Fundamentally the web is a technology, borne of logic, rules and systems. There are key concepts such as URLs and hypertext that we need to both understand and design for. The web is not just a visual medium either, indeed it’s quite possible that most content isn’t consumed by humans at all — think of Google’s spidering tools, or assistive tools such as screen readers. None of these pay any credence to the visual design.

In his article <cite>A Dao of Web Design</cite>, [Jon Allsopp wrote][7]:

> It’s time to throw out the rituals of the printed page, and to engage with the medium of the web and its own nature.

You might think this is a recent article, but Jon wrote this in 2000 — it’s taken us almost a decade to recognise his foresight.

## Growing maturity

It might have taken us some time to get here, but as the web matures, and as it’s practitioners have built up a body of experience, so our methods are undergoing a period of reappraisal. A number of examples I’ve seen include:

### Content

Where in many cases content is still considered an afterthought, with existing copy dumped into a template, designers are starting to understand the importance of content. First, we need to write copy specifically for the web. This doesn’t mean less copy, but the right amount should be presented at appropriate parts of a user’s journey. Any large amounts of copy should be easy to skim — headings, lists and breaks are important ways to ‘chunk-up’ content.

But as much as long form copy is important, as the web is an interactive, communicative medium, so [microcopy][8] plays an important role too — these little pieces of text can indicate a desired behaviour, or give a website its own personality and tone of voice.

Finally, we are starting to see content appear outside the context of the website; for example via RSS readers, or via tools like [Readability][9] and [Instapaper][10], that remove surrounding distractions (and design) from the page.

### Layout

Grids have long been a fundamental tenant of print design, but only recently have web designers started to learn about how they work and embrace them in their own work. In fact, it’s thanks to the web that this knowledge has been [so easily shared][11], benefiting developers as much as designers, who have created frameworks that make implementing grid-based designs easier.

Yet these grids have still assumed a fixed width. This print-based assumption doesn’t align well with the flexible and fluid nature of the web, leading web native designers to think about how grids and layouts can adapt to differing device constraints, be that width, font-size, resolution or a host of other variables.

New techniques like [Responsive Design][12] have been advocated by designers like [Ethan Marcotte][13], and his own website provides a good example of how this approach works, the layout and even aspects of the visual design changing depending on the constraints of a device. The [Eden Spiekermann][14] website is another example I’m fond of, and there are plenty more examples on the [mediaqueri.es][15] website.

At this point I should point out that these layouts haven’t been designed to adjust to fit a set of predefined widths, rather the content has been designed to adapt to the space available to it. This content-out approach not only suggests a key change in how we approach design on the web, but again reinforces the importance of content.

You can also see how a strong visual language, from which a palette of elements can be chosen from, is essential for designs that appear in a number of different formats.

### Typography

Whilst we have only recently started to appreciate the inconsistent and adaptable nature of web layouts, we have learnt to appreciate this more with typography on the web. Here we face a limited font choice — with perhaps only six web safe fonts you can use with any certainty (and [even then there can be issues with rendering consistency][16]). This limitation has encouraged us to concentrate on the other aspects of typography we can control; capitalisation, kerning and leading. The 2008 website for the [Seed Conference][17] is still probably the best example of this.

We also tend to think in a web native way in terms of the units of measure we choose to use. Where print uses fixed point sizes, and screen design uses fixed pixels, the web works best when you use relative units like the em (relative to the base font size) or percentages (where a width is relative to its parent container).

## Two tribes

Now, you might be getting an appreciation of not only the different challenges we face designing for the web, but the number of different specialisms that might apply. However, practitioners are often dived into two camps: designers and developers, between which unnecessary boundaries have been placed.

**This is a false division**. Any boundaries should be removed.

As much as a visual language has to be developed, a database needs to be designed. In fact, I would go so far as to suggest these terms are interchangeable; development is the act of reproducing a design, each as necessary as the other. Rather than be grouped into two different camps, instead specialisms should be encouraged yet whilst maintaining a set of skills and broad understanding of all aspects of web design. For example, a developer should know as much about good microcopy as a designer has an understanding of databases.

When I was preparing this talk, I actually started to think perhaps there is a division, between those who care, and those who don’t. Designers will often ask for more time to complete a project, whilst developers will want to ship a product as soon as it works. However, if left to designers in search of unattainable perfections, products would never ship. Developers might cite budgets and timelines, but this is often a result of processes that place all responsibility for delivery on their shoulders, often without them having little understanding of a project or involvement early on.

Some companies are now taking an agile development approach, where designers and developers (ideally) work side-by-side working on small iterations that be can be tested and improved upon — though in my own experience I have yet to see this grand unified theory work that way in practice.

The fact is no process is foolproof, and certainly when there is limited communication between everyone working on a product. The best projects occur when everybody is involved at every stage, each understanding the goals of the project and the problems that need to be solved.

This is especially true when building websites, and certainly whilst designers use static visual mock-ups that convey no sense of the interactivity or flexibility required on the web. That is why communication between those designing and those implementing is crucial. As we wish to create more responsive websites, designers need to be involved in accessing how well a design adapts, yet at the same time can’t reasonably design every variation without seeing it behave in the wild. A designer/developer partnership is essential.

## Communication

With communication between becoming so vital, this is why I think style guides can be an important addition to how we work on the web; especially on big projects with a large number of stakeholders. When it’s important to ensure a universal understanding amongst many people working on a project, such guidelines can ensure consistency and promote a common working language.

One example I’ve been following with interest is the BBC’s [Global Experience Language][18], a set of guidelines for anyone creating digital experiences for the BBC on the web. This project is founded upon ten design principles, that summarise the common goals and priorities, which can be used to weigh up design choices that might arise later in any given project.

There is a common visual language, consisting of font usage, grids and layout variations, a predefined set of icons to choose from. An interesting aspect of this project is the cultural map; key parts of the website adhere to these guidelines closer than websites for programmes which need to reflect their own brand guidelines as well.

There is also design pattern library, that documents different interactions and behaviours of common elements used across the site; a library which can be added to as new components are found to be needed across a their different web properties.

These all build towards a common foundation which can provides an element of predictability; developers can build with a set of known assumptions in mind and separate agencies or groups can build different websites yet have them work as part of a greater whole.

Whilst these guidelines still advocate a fixed width, as I mentioned earlier, such a strong visual language is essential when creating websites that can appear in different contexts, be those contexts fixed and defined as they are currently at the BBC. However, I think it is only a matter of time before the BBC embraces the responsive design approach, especially given cost reductions within the organisation mean creating bespoke websites for many different devices will prove so costly.

In essence, GEL is an example of systems level thinking. Design principles define common goals whilst a visual language and design patterns provide building blocks from which new websites can be created. And once we start to think in terms of systems, so designers can become native to the web.

[1]: http://www.apa.co.uk/services/apa-events/digital-breakfasts
[2]: http://dev.opera.com/author/974138
[3]: http://www.slideshare.net/chrisdavidmills/for-nondevelopers-html5-a-richer-web-for-everyone
[4]: http://www.adambankin.com/
[5]: /talks/multipack_presents_november_2010
[6]: http://www.ftrain.com/wwic.html
[7]: http://www.alistapart.com/articles/dao/
[8]: https://www.flickr.com/groups/microcopy/
[9]: https://www.readability.com/
[10]: http://www.instapaper.com/
[11]: http://www.thegridsystem.org/
[12]: http://www.alistapart.com/articles/responsive-web-design/
[13]: http://ethanmarcotte.com/
[14]: http://edenspiekermann.com/
[15]: http://mediaqueri.es
[16]: http://blog.mhurrell.co.uk/post/2946358183/updating-the-helvetica-font-stack
[17]: http://seedconference.com/
[18]: https://www.bbc.co.uk/gel/

*[BBC]: British Broadcasting Corporation
*[GEL]: Global Experience Language
*[HTML]: HyperText Markup Language
*[Mb]: Megabyte
*[PDF]: Portable Document Format
*[RSS]: Really Simple Syndication
*[TV]: television
*[URL]: Uniform Resouce Locator
