---
title: Questioning Container Queries
date: 2017-04-03T02:30:00+01:00
location:
  locality: Brighton
  country-name: United Kingdom
summary: Container queries are always a popular topic when discussing the future of responsive design. But do we actually need them anymore?
tags:
- responsive_design
- web
---
Earlier last month, Ethan wrote about [the need for container queries][1], a request that is frequently raised in any discussion about the future of responsive design. Ethan’s article is well worth a read, especially if you’re unfamiliar with the issue, but here’s a brief summary: the dimensions of the viewport are a poor proxy for judging layout requirements for components that can exist in a variety of contexts. If we could query the dimensions of a component’s parent container instead, our layouts would be more robust, and our code easier to maintain.

The need for this feature has long been evident. In fact, my erstwhile colleague Andy Hume [wrote about this problem][2] as far back as 2011. The growing adoption of pattern-driven approaches and modularised design has only seen this need grow more urgent. Ethan is just one of many voices calling for this — or *something* like this — to be implemented by browser vendors.

But, I’m not so sure.

## Returning to the canon

Much has been written since [Ethan first introduced the world to responsive design][3]. While some articles now appear dated, others still stand up to scrutiny. [A New Canon][4] is one such piece. [Based on an earlier talk][5], Mark Boulton suggested we move away from traditional graphic design approaches that derive layouts inwards from a fixed canvas, and instead look to create those that work outwards, from the content:

> We stop trying to create a page where there isn’t one, and we welcome what makes the web, weblike: fluidity. We start creating the connectedness Tschichold talked about by looking at what is knowable; our content.

Relating our layouts to the viewport rather than an arbitrarily-sized fixed container is a step in the right direction, but it still amounts to a canvas-in approach. While container queriers would allow us to relate components to their immediate parents, the prescription remains outside-in, privileging containers over the content that sits within them.

Two years after he wrote about container queries, at [Responsive Day Out in 2013][6], [Andy said][7]:

> Media queries are the biggest distraction in responsive design. In my view, if we’re doing responsive design right, if the specs and browsers evolve in the correct way, in five years time we won’t be using media queries to implement responsive layouts.

Four years on and I’d say his prediction wasn’t far off. Andy went on to speculate that container queries and web components would herald the end of media queries. In fact, [fluid typography][8] — a technique that cleverly combines viewport units with `calc()` — was the first nail in the coffin. I believe their eventual abandonment will come from an increased proficiency with new CSS layout methods.

## We have the technology

In the almost three decade history of the web, a vast array of hacks — tables, absolute positioning, floats — have been employed to help us construct layouts, yet only recently have we been given instruments designed specifically for the job. With [Flexbox][9], we have a powerful tool for defining one-dimensional layouts, and with the arrival of [Grid][10], we now have a second tool that can help us create layouts in two dimensions.

Without needing hacks, frameworks that abstract away their complexity will become redundant. The ability to define layouts independent of source order will mean we can discard our 16-column comfort blankets. I share [the concerns of Jen][11] and [Rachel][12], who fear web developers will port their existing thinking over to these new layout methods. To do so would be sorry waste of a set of impressively well-considered specifications.

I’ve written previously about how [support for logical properties][13] is built right into Flexbox (and [Box Alignment][14]) specifications. No more having to replace every occurrence of `float: left` with `float: right` to support right-to-left languages: just change the value of a `dir` attribute, and you’re good to go.

Grid builds further on this less assumptive approach. It allows us to query the nature of a grid container’s content, with functions like [`fit-content()`][15] and values like [`min-content` and `max-content`][16]. It feels like we’ve barely scratched the surface of what’s possible.

### Rebuilding the recirculation module

As a way of demonstration, let’s return to one of the components Ethan described, <cite>The Toast</cite>’s recirculation module:

> 1. By default, the list of links appears as a single column layout on small screens.
> 2. As the screen gets wider, it moves to a two-column layout.
> 3. We hit a three-column layout at the middle range.
> 4. But then, once we reach the widescreen layout, the list moves into the right-hand sidebar. Once that happens, the list reverts to a two-column layout.

With Flexbox, we can build components such that their layout will adapt to the available space. Using Grid, we can name areas of a grid container, and then assign components to those areas:

[View this code example on CodePen](https://codepen.io/paulrobertlloyd/pen/PpXygo/).
{data-height="480" data-slug-hash="PpXygo" data-preview="true" class="codepen bleed"}
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

There’s a lot going on in this example, so here are the key parts:

* I’ve set the `.ranked-list` container to use Flexbox for its internal layout (`display: flex`), and have instructed it to wrap any child flex items (`flex-wrap: wrap`).

* I’ve then set each flex item (`.ranked-list > li`) to grow and shrink with a basis of 33% (`flex: 1 1 33%`). This basically says to the browser, each item should take up 33% of the containers width, but if that’s not possible, grow wider (or narrower) to fill the remaining space once you’ve redistributed the items how you see fit.

* Within each `li`, lies a `.summary` item. I’ve given this a `min-width` (in this case the width of the image plus some padding) which will be factored into the above calculation.

The layout of this component is therefore entirely dependent on how much space it has available to it. That addresses points 1-3. But how can we use CSS to move this component to another part of the layout when the viewport is much wider? Enter [Grid Areas][17]:

* First, I set `.container` to use Grid for its internal layout (`display: grid`), and created two named grid areas, `content` and `sidebar`, and placed one above the other. For wider viewports, within a media query[^1] I place these areas next to each other instead.

* I then assigned `.content` to the `content` grid area, and `.sidebar` to the `sidebar` grid area. Done! I can change the position of those gird areas later, and the components assigned to them will relocate accordingly.

[Grid is all about the container][18], yet the containers we’re manipulating aren’t defined by any markup; they exist solely within our CSS. It’s a very different approach to anything that has come before, and has [the potential to become even more powerful][19] as future revisions to the specification are developed.

In the past I have suggested we [embrace the medium’s unpredictable nature][20] and use its constraints to guide how we design for it. With Flexbox and Grid, those constraints are loosening.

## And now for something completely different

The final reason I question the need for container queries is that a change in layout sometimes requires a change in behaviour, too. If accomplishing this involves restructuring the DOM, we’re essentially swapping one component for another.

On a recent e-commerce project I worked on, this scenario occurred on a number of occasions. On product listings, results could be narrowed by selecting options from a series of facets: size, colour, type etc. On narrow viewports, we decided to show these options within a model dialog, with facets presented within a series of disclosures; on wider viewports however, these facets appeared within a set of menus above the results:

{% include 'figure' with '/images/2017/04/container_queries/components.png'
  caption: 'Search facets on a narrow and wide viewport. While the same information is being displayed, essentially two different components are required.'
%}

Another example appeared on the product item page. On narrower viewports, a gallery of images was presented as a swipeable carousel. On larger viewports, the increased screen estate meant not only could the selected image be shown larger, but that image could be tapped on to reveal a full-screen overlay within which a user could zoom-in to see more detail. Granted, both of these examples adapted their design based on the size of the viewport, but conceptually the same changes in behaviour might apply if their size was dependant on the dimensions of a parent container.

This particular project was implemented using React, so we chose to render the narrow component on the server, and then if necessary, swap it out with the wider version on the client. Therefore, any viewport queries existed within the realm of JavaScript, not CSS.

***

So to recap, here are three reasons why I’m not sold on the need for container queries:

1. While no longer canvas-in, they still provide an inwards approach when we should be designing from the content out.
2. New CSS layout primitives give us tremendous power to make component-level layout adjustments already. We should build on existing specifications and concepts rather than define new ones.
3. Often, when components are resized, they need to change their behaviour as well as their presentation; container queries would not help us in that respect, so perhaps other tools are better suited to this job.

This may be a minority opinion, and it’s one I’m happy to be challenged on. After all, [wiser][21] [minds][22] [have][23] [advocated][24] for container queries. This is not the first time I have [found myself at odds with perceived wisdom][25]; maybe I’m missing a use case for which they would provide the most suitable solution.

In my mind, container queries appear to be yesterday’s answer to today’s problems. I’d much rather we use the great new tools we have, and embrace a future that’s finally here.

[^1]: I initially thought I could use a combination of auto-placement and implicitly-created grid tracks to achieve this layout without the need for media queries — is this possible?

[1]: https://ethanmarcotte.com/wrote/on-container-queries/
[2]: https://web.archive.org/web/20110718123158/http://blog.andyhume.net/responsive-containers
[3]: https://alistapart.com/article/responsive-web-design
[4]: http://markboulton.co.uk/journal/anewcanon
[5]: https://speakerdeck.com/naconf/mark-boulton-a-new-canon
[6]: http://responsiveconf.com/2013/
[7]: http://responsiveconf.com.s3.amazonaws.com/audio/11-andy-hume-responsiveconf.mp3
[8]: https://www.smashingmagazine.com/2016/05/fluid-typography/
[9]: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
[10]: https://css-tricks.com/snippets/css/complete-guide-grid/
[11]: http://jensimmons.com/post/feb-28-2017/benefits-learning-how-code-layouts-css
[12]: https://24ways.org/2015/grid-flexbox-box-alignment-our-new-system-for-layout/
[13]: https://paulrobertlloyd.com/2016/03/logical_flexbox
[14]: https://www.w3.org/TR/css-align-3/
[15]: https://developer.mozilla.org/en-US/docs/Web/CSS/fit-content
[16]: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns#max-content
[17]: https://gridbyexample.com/examples/example13/
[18]: https://rachelandrew.co.uk/archives/2017/03/31/grid-is-all-about-the-container/
[19]: https://speakerdeck.com/jensimmons/proposal-to-csswg-sept-2016
[20]: http://alistapart.com/articles/the-web-aesthetic
[21]: https://24ways.org/2015/being-responsive-to-the-small-things/
[22]: http://hugogiraudel.com/2014/04/22/why-element-queries-matter/
[23]: https://www.filamentgroup.com/lab/element-query-workarounds.html
[24]: http://alistapart.com/article/container-queries-once-more-unto-the-breach
[25]: https://24ways.org/2012/responsive-images-what-we-thought-we-needed/

*[CSS]: Cascading Style Sheets
*[DOM]: Document object module
