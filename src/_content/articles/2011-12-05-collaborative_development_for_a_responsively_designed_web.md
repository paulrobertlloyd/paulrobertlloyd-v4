---
title: Collaborative Development for a Responsively Designed Web
date: 2011-12-05
canonical:
  url: https://24ways.org/2011/collaborative-development-for-a-responsively-designed-web/
summary: I unfurl my seraph wings to proclaim peace on Earth and the importance of goodwill between designers and developers. It’s not the office Secret Santa that unites them, but constant contact and shared appreciation of different skills.
tags:
- source:24_ways
- responsive_design
- web
---
In responsive web design we’ve found a technique that allows us to design for the web as a medium in its own right: one that presents a fluid, adaptable and ever changing canvas.

Until this point, we gave little thought to the environment in which users will experience our work, caring more about the aggregate than the individual. The applications we use encourage rigid layouts, whilst linear processes focus on clients signing off [paintings of websites][1] that have little regard for behaviour and interactions. The handover of pristine, pixel-perfect creations to developers isn’t dissimilar to farting before exiting a crowded lift, leaving front-end developers scratching their heads as they fill in the inevitable gaps. If you haven’t already, I recommend reading [Drew’s checklist][2] of things to consider before handing over a design.

Somehow, this broken methodology has survived for the last fifteen years or so. Even the advent of web standards has had little impact. Now, as we face an onslaught of different devices, the true universality of the web can no longer be ignored.

Responsive web design is just the thin end of the wedge. Largely concerned with layout, its underlying philosophy could ignite a trend towards interfaces that adapt to any number of different variables: input methods, bandwidth availability, user preference — you name it!

With such adaptability, a collaborative and iterative process is required. Ethan Marcotte, who worked with the team behind the responsive redesign of the Boston Globe website, talked about such an approach [in his book][3]:

> The responsive projects I’ve worked on have had a lot of success combining design and development into one hybrid phase, bringing the two teams into one highly collaborative group.

Whilst their process still involved the creation of desktop-centric mock-ups, these were presented to the entire team early on, where questions about how pages might adapt and behave at different sizes were asked. Mock-ups were quickly converted into HTML prototypes, meaning further decisions could be based on usage rather than guesswork (and endless hours spent in Photoshop).

Regardless of the exact process, it’s clear that the relationship between our two disciplines is more crucial than ever. Yet, historically, it seems a wedge has been driven between us — perhaps a result of segregation and waterfall-style processes — resulting in animosity.

So how can we improve this relationship? Ultimately, we’ll need to adapt, but even within existing workflows we can start to overlap. Simply adjusting our attitude can effect change, and bring design and development teams closer together.

{% include 'quote' with 'Good design is constant contact.'
  caption: '[Mark Otto](http://markdotto.com/2011/09/20/good-design-is-constant-contact/)'
%}

The way we work needs to be more open and inclusive. For example, ensuring members of the development team attend initial kick-off meetings and design workshops will not only ensure technical concerns are raised, but mean that those implementing our designs better understand the problems we’re trying to solve.

It can also be useful at this stage to explain how you work and the sort of deliverables you expect to produce. This will give developers a chance to make recommendations on how these can be optimized for their own needs.

You may even find opportunities to share the load. On a recent project I worked on, our development partners offered to produce the interactive prototypes needed for user testing. This allowed us to concentrate on refining the experience, whilst they were able to get a head start on building the product.

While developers should be involved at the beginning of projects, it’s also important that designers are able to review and contribute to a product as it’s being built. Any handover should be done in person, and ideally you’ll have a day set aside to do so. Having additional budget available for follow-up design reviews is also recommended. Learning how to use version control tools like Subversion or Git will allow you to work within the same environment as developers, and allow you to contribute code or graphic assets directly to a project if needed.

Don’t underestimate the benefits of designer and developer sitting next to each other. Subtle nuances can be explored far more easily than if they were conducted over email or phone. As [Ethan writes][4], “‘Design’ is the means, not merely the end; the path we walk over the course of a project, the choices we make”.

It’s from collaboration like this that I’ve become fond of producing visual style guides. These demonstrate typographic treatments for common markup and patterns (blockquotes, lists, pagination, basic form controls and so on). Thinking in terms of components rather than individual pages not only fits in better with how a developer will implement a site, but can also ensure your design works as a coherent whole.

Despite the amount of research and design produced, when it comes to the crunch, there will always be a need for compromise. As the old saying goes, ‘fast, cheap and good — pick two.’ It’s important that you know which pieces are crucial to a design and which areas can allow for movement. Pick your battles wisely. Having an agreed set of design principles can be useful when making such decisions, as they help everyone focus on the goals of the project.

{% include 'quote' with 'The best compromises are reached when both sides understand the issues of the other.'
  caption: '[Richard Rutter](http://clagnut.com/blog/2315/)'
%}

Ultimately, better collaboration comes through a shared understanding of the different competencies required to build a website. Instead of viewing ourselves in terms of discrete roles, we should instead look to emphasize our range of abilities, and work with others whose skills are complementary.

Perhaps somebody who actively seeks to broaden their knowledge is the mark of a professional. Seek these people out.

The best developers I’ve worked with have a respect for design, probably having attempted to do some themselves! Having wrangled with a few MySQL databases myself, I certainly believe the obverse is true. While knowing HTML won’t necessarily make you a better designer, it will help you understand the issues being faced by a front-end developer and, more importantly, allow you to offer solutions or alternative approaches.

So take a moment to think about how you work with developers and how you could improve your relationship with them. What are you doing to ease the path towards our collaborative future?

[1]: http://weblog.muledesign.com/2010/08/why_we_dont_deliver_photoshop_files.php
[2]: https://24ways.org/2008/easing-the-path-from-design-to-development
[3]: http://www.abookapart.com/products/responsive-web-design
[4]: http://unstoppablerobotninja.com/entry/the-boston-globe/

*[HTML]: Hypertext Markup Language
