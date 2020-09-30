---
title: 'Thinking Responsively: A Framework for Future Learning'
date: 2015-08-25
canonical:
  url: https://alistapart.com/article/thinking-responsively-a-framework-for-future-learning
summary: Responsive web design changed everything about how we think and work on the web. Five years on, we’re still exploring the best ways to approach our practice. If we want a web that is truly universal, we must consider our users, our medium, and our teams in new, adaptable ways. Looking at where we’ve come from and where we’re going, I propose a philosophical framework for our work on the responsive web.
image: /images/2015/08/thinking_responsively_a_framework_for_future_learning/illustration.png
category:
  - Responsive design
  - Web
tags:
  - source:a_list_apart
---
_This article is [also available in Italian][it-IT]{hreflang="it-IT" rel="alternate external"}_

{% render 'figure' with '/images/2015/08/thinking_responsively_a_framework_for_future_learning/illustration.png'
  caption: 'Illustration: [Brad Colbow](http://alistapart.com/author/bradcolbow) for A List Apart.'
  alignment: 'bleed'
  imageRatio: 2.25
%}

Before the arrival of smartphones and tablets, many of us took a position of blissful ignorance. Believing we could tame the web’s inherent unpredictability, we prescribed requirements for access, prioritizing our own needs above those of users.

As our prescriptions grew ever more detailed, responsive web design signaled a way out. Beyond offering a means of building device-agnostic layouts, RWD initiated a period of reappraisal; not since the adoption of web standards has our industry seen such radical realignment of thought and practice.

In the five years since [Ethan Marcotte’s article][1] first graced these pages, thousands of websites have launched with responsive layouts at their core. During this time, we’ve experimented with new ways of working, and refined our design and development practice so that it’s more suited to a fluid, messy medium.

As we emerge from this period of enlightenment, we need to consolidate our learning and consider how we build upon it.

## A responsive framework

When we think of frameworks, we often imagine software libraries and other abstractions concerned with execution and code. But this type of framework distances us from the difficulties we face designing for the medium. Last year, when [Ethan spoke about the need for a framework][2], he proposed one focused on our approach — a framework to help us model ongoing discussion and measure the quality and appropriateness of our work.

I believe we can conceive this framework by first agreeing on a set of underlying design principles. You may be familiar with the concept. Organizations like [GOV.UK][3] and [Google][4] use them to define the characteristics of their products and even their organizations. [Kate Rutter describes design principles][5] as:

> …short, insightful phrases that act as guiding lights and support the development of great product experiences. Design principles enable you to be true to your users and true to your **strategy over the long term.** (emphasis mine)

[The long-term strategy of the web is to enable universal access][6] to information and services. This noble goal is fundamental to the web’s continued relevance. Our design principles must operate in the service of this vision, addressing:

* **Our users:** By building inclusive teams that listen to — and even work alongside — users, we can achieve wider reach.
* **Our medium:** By making fewer assumptions about context and interface, focusing more on users’ tasks and goals, we can create more adaptable products.
* **Ourselves:** By choosing tools that are approachable, simple to use, and open to change, we can elicit greater collaboration within teams.

## Reflecting diversity in our practice

In surveying the landscape of web-enabled devices, attempting to categorize common characteristics can prove foolhardy. While this breadth and fluidity can be frustrating at times, device fragmentation is merely a reflection of human diversity and consumers exercising their right to choose.

Until recently, empathy for consumers has largely been the domain of user experience designers and researchers. Yet while a badly designed interface can adversely effect a site’s usability, so can a poorly considered technology choice. We all have a responsibility to consider how our work may affect the resulting experience.

### Designing for everyone

[Universal design][7] promotes the creation of products that are usable by anyone, regardless of age, ability, or status. While these ideas enjoy greater recognition among architects and product designers, they are just as relevant to our own practice.

Consider OXO Good Grips kitchen utensils. In 1989, Sam Farber, inspired by his wife’s arthritis, [redesigned the conventional vegetable peeler][8], replacing its metal handles with softer grips. Now anyone, regardless of strength or manual dexterity, could use this tool — and Farber’s consideration for aesthetics ensured broader appeal as well. His approach was applied to a range of products; Good Grips became an internationally recognized, award-winning brand, while Farber’s company, OXO, went on to generate significant sales.

This work brought the concept of inclusive design into the mainstream. [OXO remains an advocate][9] of designing inherently accessible products, noting that:

> When all users’ needs are taken into consideration in the initial design process, the result is a product that can be used by the broadest spectrum of users. In the case of OXO, it means designing products for young and old, male and female, left- and right-handed and many with special needs.

Many of the technologies and specifications we use already feature aspects of universal design. Beyond specifications like WAI-ARIA that increase the accessibility of dynamic interfaces, HTML has long included basic accessibility features: the `alt` attribute allows authors to add textual alternatives to images, while the `object` element allows fallback content to be provided if a particular media plug-in or codec isn’t available.

Examples can also be found within the W3C and WHATWG. A key principle used in the design of HTML5 concerns itself with how authors should assess additions or changes to the specification. Called the [priority of constituencies][10], it states that:

> In case of conflict, consider users over authors over implementors over specifiers over theoretical purity.

We can use this prioritization when making choices on our own projects. While a client-side MVC framework might provide a degree of developer convenience, if it means users need to download a large JavaScript file before an application can be accessed, then we should look for an alternative approach.

### Bridging the gap

When makers are attached to high-resolution displays and super-fast broadband connections, it can be difficult for them to visualize how users may experience the resulting product on a low-powered mobile device and an unreliable cellular network. The wider the gap between those making a product and those using it, the greater the likelihood that the former will make the wrong choice. We must prioritize getting closer to our users.

User research and usability testing help us see how users interact with our products. Having different disciplines (developers, interface and content designers, product managers) participate can ensure this learning is widely shared. But we can always do more. [Susan Robertson recently wrote][11] about how spending a week answering support emails gave her new insights into how customers were using the application she was building:

> Rather than a faceless person typing away on a keyboard, users become people with names who want to use what you are helping to create.

Having the entire team collectively responsible for the end experience means usability and accessibility considerations will remain key attributes of the final product — but what if that team is more inclusive, too? In her article [Universal Design IRL][12], Sara Wachter-Boettcher notes that:

> [T]he best way to understand the audiences we design for is to know those audiences. And the best way to know people is to have them, with all their differences of perspective and background — and, yes, age and gender and race and language, too — right alongside us.

Perhaps it’s no coincidence that as we learn more about the diversity of our customers, we’ve started to acknowledge the lack of diversity within our own industry. By striving to reflect the real world, we can build more empathetic and effective teams, and in turn, better products.

## Building on adaptable foundations

By empathizing with users, we can make smarter choices. Yet the resulting decisions will need to travel across unreliable networks before being consumed by different devices with unknown characteristics. It’s hard to make decisions if you’re unable to predict the outcomes.

By looking at websites through different lenses, we can uncover areas of constraint that offer the greatest degree of reach and adaptability. If an interface works on a mobile device, it’ll work on a larger display. If data can be interrogated when there’s no network, an unreliable connection will be of little hindrance. If content forms the basis of our design, information will be available regardless of styling. Optimizations based on more uncertain assumptions can be layered on afterwards, safe in the knowledge that we’ve provided fallbacks.

### Interface first

In 2009, Luke Wroblewski asked us to consider how interfaces could take advantage of mobile device capabilities *before* thinking about their manifestation in desktop browsers. [Mobile-first thinking][13] encourages us to focus: phone displays leave little room for extraneous interface or content, so we need to know what matters most. By asking questions about which parts of an interface are critical and which are not, we can decide whether those non-critical parts are loaded conditionally or lazily — or perhaps not at all.

### Network first

In 2013, in considering the realities of network reliability, Alex Feyerke proposed an [offline-first][14] approach. Rather than treat offline access as an edge case, we can create seamless experiences that work regardless of connectivity — by preemptively downloading assets and synchronizing data when online, and using aggressive caching and client-side computation when not. Others have suggested starting with URLs or an [API-first][15] approach, using these lenses to think about where content lives within a system. Each approach embraces the underlying fabric of the web to help us build more robust and resilient products.

### Content first

In 2011, [Mark Boulton signaled][16] a move away from our *canvas in* approach, to one where layouts are designed from the *content out*. By defining visual relationships based on page elements, and using ratios instead of fixed values, we can imbue a page with connectedness, independent of its dimensions.

Recognizing that having content available before we design a page can be an unreasonable request, Mark later suggested we consider [structure first, content always][17]. This fits in well with the [Core Model][18], an idea first introduced by Are Halland at the IA Summit in 2007. By asking questions about a site’s core content — what task it needs to perform, what information it should convey — we can help clients think more critically about their strategic objectives, business goals, and user needs. [Ida Aalen recently noted][19]:

> The core model is first and foremost a thinking tool. It helps the content strategist identify the most important pages on the site. It helps the UX designer identify which modules she needs on a page. It helps the graphic designer know which are the most important elements to emphasize in the design. It helps include clients or stakeholders who are less web-savvy in your project strategy. It helps the copywriters and editors leave silo thinking behind and create better content.

## Sharing the toolbox

Having empathized with our users and navigated an unpredictable medium, we need to ensure that our decisions and discoveries are shared across teams.

As responsive design becomes embedded within organizations, these teams are increasingly collaborative and cross-functional. Previously well-defined roles are beginning to merge, the boundaries between them blurring. Job titles and career opportunities are starting to reflect this change too: see “full-stack developer” or “product designer.” Tools that were once the preserve of specific disciplines are being borrowed, shared, and repurposed; prototyping an animation may require writing JavaScript, while building a modular component library may require understanding visual language and design theories.

If the tools used are too opaque, and processes difficult to adopt, then opportunities for collaboration will diminish. Make a system too complex, and onboarding new members of a team will become difficult and time-consuming. We need to constantly make sure our work is accessible to others.

### Considerate code

The growing use of [front-end style guides][20] is one example of a maturing relationship between disciplines. Rather than producing static, bespoke layouts, designers are employing more systematic design approaches. Front-end developers are taking these and building pattern libraries and modular components, a form of delivery that fits in better with backend development approaches.

Component-driven development has seen a succession of tools introduced to meet this need. Tools like [Less][21] and [Sass][22] allow us to modularize, concatenate, and minify stylesheets, yet they can also introduce procedural functionality into CSS, a language deliberately designed to be declarative and easier to reason with. However, if consideration is given to other members of the team, this new functionality can be used to *extend* CSS’s existing declarative feature set. By using mixins and functions, we can [embed a design language within code][23], and propagate naming conventions that are understood by the whole team.

### Common conventions

Quite often, problems of process are not a limitation of technology, but an unwillingness to apply critical thought. Trying to solve technology problems by employing more technology ignores the fact that establishing conventions can be just as helpful, and easier for others to adopt.

The [BEM naming methodology][24] helps CSS styles remain scoped, encapsulated, and easier to maintain, yet this approach has no dependency on a particular technology; it is purely a set of documented conventions. Had we foreseen the need, we could have been using BEM in 2005. A similar convention is that of [CSS namespaces][25], as advocated by Harry Roberts. Using single-letter coded prefixes means everyone working on a project can understand the purpose of different classes, and know how they should be used.

A common complaint for those wishing to use software like preprocessors and task runners is that they often require knowledge of the command line. Tools tease new recruits with one-line install instructions, but the reality often involves much hair-pulling and [shaving of yaks][26]. To counter this, GitHub created [Boxen][27], a tool that means anyone in their company can run a local instance of GitHub.com on their own computer by typing a single command. [GitHub][28], and other companies like [Bocoup][29] and [the <cite>Financial Times</cite>][30], also advocate using standard commands for installing, testing, and running new projects.

## Responsive principles, responsive to change

Since responsive web design invited us to create interfaces that better meet the needs of users, it’s unsurprising that related discussion has increasingly focused on having greater consideration for users, the medium, and each other.

If we want to build a web that is truly universal, then we must embrace its unpredictable nature. We must listen more closely to the full spectrum of our audience. We must see opportunities for optimization where we previously saw barriers to entry. And we must consider our fellow makers in this process by building tools that will help us navigate these challenges together.

These principles should shape our approach to responsive design — and they, in turn, may need to adapt as well. This framework can guide us, but it, too, should be open to change as we continue to build, experiment, and learn.

[it-IT]: http://italianalistapart.com/articoli/143-numero-127-10-maggio-2016/614-pensare-in-maniera-responsive-framework-per-apprendimento-futuro
[1]: https://alistapart.com/article/responsive-web-design
[2]: https://vimeo.com/106869929
[3]: https://www.gov.uk/design-principles
[4]: http://www.google.com/about/company/philosophy/
[5]: https://web.archive.org/web/20100318024044/http://www.adaptivepath.com/ideas/essays/archives/001123.php
[6]: https://adactio.com/journal/1716
[7]: http://www.ncsu.edu/ncsu/design/cud/about_ud/udprinciplestext.htm
[8]: http://smartdesignworldwide.com/work/oxo-good-grips/
[9]: http://www.oxo.com/UniversalDesign.aspx
[10]: http://dev.w3.org/html5/html-design-principles/#priority-of-constituencies
[11]: https://alistapart.com/blog/post/developing-empathy
[12]: https://alistapart.com/article/universal-design-irl
[13]: http://www.lukew.com/ff/entry.asp?933
[14]: https://alistapart.com/article/offline-first
[15]: http://www.api-first.com/
[16]: http://www.markboulton.co.uk/journal/a-richer-canvas
[17]: http://www.markboulton.co.uk/journal/structure-first-content-always
[18]: http://www.slideshare.net/aregh/corepaths-a-design-framework-for-findability-prioritization-and-value
[19]: https://alistapart.com/article/the-core-model-designing-inside-out-for-better-results
[20]: http://styleguides.io/
[21]: http://lesscss.org/
[22]: http://sass-lang.com/
[23]: https://www.youtube.com/watch?v=ciG-A_1FyVg
[24]: http://getbem.com/naming/
[25]: https://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/
[26]: https://www.urbandictionary.com/define.php?term=yak%20shaving
[27]: https://boxen.github.com/
[28]: https://githubengineering.com/scripts-to-rule-them-all/
[29]: https://bocoup.com/weblog/a-facade-for-tooling-with-npm-scripts/
[30]: https://financial-times.github.io/next/docs/developer-guide/#make

*[BEM]: block, element, modifier
*[CSS]: Cascading Style Sheets
*[MVC]: Model–view–controller
*[W3C]: World Wide Web Consortium
*[WHATWG]: Web Hypertext Application Technology Working Group
