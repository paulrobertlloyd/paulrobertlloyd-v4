---
title: Beyond the Style Guide
date: 2016-12-16
canonical:
  url: https://24ways.org/2015/beyond-the-style-guide/
summary: I run my finger along the seam between interface patterns and design systems, exploring how a visual design language can underpin and inform a web style guide, with judicious use of CSS preprocessing. Like a good Christmas jumper, sometimes you need to get creative with the rules.
tags:
- source:24_ways
- design_systems
- web
- design
---
Much like baking a Christmas cake, designing for the web involves creating an experience in layers. Starting with a solid base that provides the core experience (the fruit cake), we can add further layers, each adding refinement (the marzipan) and delight (the icing).

Don’t worry, this isn’t a misplaced [cake recipe][1], but an evaluation of modular design and the role [style guides][2] can play in acknowledging these different concerns, be they presentational or programmatic.

## The auteur’s style guide

Although trained as a graphic designer, it was only when I encountered the immediacy of the web that I felt truly empowered as a designer. Given a desire to control every aspect of the resulting experience, I slowly [adopted the role of an auteur][3], exploring every part of the web stack: front-end to back-end, and everything in between. A few years ago, I dreaded using the command line. Today, the terminal is a permanent feature in my Dock.

In straddling the realms of graphic design and programming, it’s the point at which they meet that I find most fascinating, with each dicipline valuing the creation of effective systems, [be they for communication or code efficiency][4]. Front-end style guides live at this intersection, demonstrating both the modularity of code and the application of visual design.

## Painting by numbers

In our rush to build modular systems, design frameworks have grown in popularity. While enabling quick assembly, these come at the cost of originality and creative expression — perhaps one reason why we’re seeing the [homogenisation of web design][5].

In editorial design, layouts should accentuate content and present it in an engaging manner. Yet on the web we see a practice that seeks templated predictability. In <cite>[Design Machines][6]</cite> Travis Gertz argued that (emphasis added):

> Design systems still feel like a novelty in screen-based design. We nerd out over grid systems and modular scales and obsess over style guides and pattern libraries. We’re pretty good at using them to build repeatable components and site-wide standards, but that’s sort of where it ends. […] **But to stop there is to ignore the true purpose and potential of a design system.**

Unless we consider how interface patterns fully embrace the design systems they should be built upon, style guides may exacerbate this paint-by-numbers approach, encouraging conformance and suppressing creativity.

## Anatomy of a button

Let’s take a look at that most canonical of components, the button, and consider what we might wish to document and demonstrate in a style guide.

### Content

The most variable aspect of any component. Content guidelines will exert the most influence here, dictating things like tone of voice (whether we should we use stiff, formal language like ‘Submit form’, or adopt a more friendly tone, perhaps ‘Send us your message’) and appropriate language. For an internationalised interface, this may also impact word length and text direction or orientation.

### Structure

HTML provides a limited vocabulary which we can use to structure content and add meaning. For interactive elements, the choice of element can also affect its behaviour, such as whether a button submits form data or links to another page:

```html
<button type="submit">Button text</button>
```

```html
<a href="/index.html">Button text</a>
```

*Note: One of the reasons I prefer to use **`<button>`** instead of **`<input type="button">`**, besides allowing the inclusion of content other than text, is that it has a markup structure similar to links, therefore keeping implementation differences to a minimum.*

We should also think about each component within the broader scope of our particular product. For this we can [employ a further vocabulary][7], which can be expressed by adding values to the `class` attribute. For a newspaper, we might use names like *lede*, *standfirst* and *headline*, while a social media application might see us reach for words like *stream*, *action* or *avatar*.

### Presentation

The appearance of a component can never be considered in isolation. Informed by its relationship to other elements, style guides may document different stylistic variations of a component, even if the underlying function remains unchanged: primary and secondary button styles, for example.

### Behaviour

A component can exhibit [various states][8]: blank, loading, partial, error and ideal, and a style guide should reflect that. Our button component is relatively simple, yet even here we need to consider hover, focused, active and disabled states.

### Transcending layers

This overview reinforces [Ethan’s note][9] from earlier in this series:

> I’ve found that thinking about my design as existing in broad experience tiers — in layers — is one of the best ways of designing for the modern web.

While it’s tempting to describe a component as series of layers, certain aspects will transcend several of these. The accessibility of a component, for example, may influence the choice of language, the legibility of text, colour contrast and which affordances are provided in different states.

## Visual design language: documenting the missing piece

Even given this small, self-contained component, we can see several concerns at play, and in reviewing our button it seems we have most things covered. However, a few questions remain unanswered. Why does it have a blue background? Why are the borders 2px thick, with a radius of 4px? Why are we using that font, at that size and with that weight?

These questions can be answered by our visual design language. More than a set of type choices and colour palettes, a design language can dicate common measures, ratios and [the resulting grid(s) these influence][10]. Ideally governed by a set of broader design principles, it can also inform an illustration style, the type of photography sourced or commissioned, and [the behaviour of any animations][11].

Whereas a style guide ensures conformity, having it underpinned by an effective design language will allow for flexibility; only by knowing the rules can you know how to break them!

{% include 'figure' with '/images/2016/12/beyond_the_style_guide/us-web-standards-pairings.png'
  caption: 'Type pairings in the US Web Design Standards guide.'
%}

For a style guide to thoroughly articulate a visual design system, the spectrum of choices it allows for should be acknowledged. A fantastic example of this can be found in the [US Web Design Standards][12]. By virtue of being a set of standards designed to apply to a number of different sites, this guide offers [a range of type pairings][13] (that take into account performance considerations) and provides primary, secondary and tertiary [palette relationships][14], with shades and tones thereof:

{% include 'figure' with '/images/2016/12/beyond_the_style_guide/us-web-standards-palettes.png'
  caption: 'Colour palettes in the US Web Design Standards guide.'
%}

## A visual language in code form

Properly documenting our design language in a style guide is a good start, yet even better if it can be expressed in code. This is where CSS preprocessors become a powerful ally.

In Sass, methods like mixins and maps can help us represent relationships between values. Variables (and [CSS variables][15]) extend the vocabulary provided natively by CSS, meaning we can describe patterns in terms of our own visual language. These tools effectively become an interface to our design system. Furthermore, they help maintain a separation of concerns, with visual presentation remaining where it should be: in our style sheets.

Take this simple example, an article summary on a website counting down the best Christmas movies:

{% include 'figure' with '/images/2016/12/beyond_the_style_guide/component.png'
  caption: 'The design for our simple component example.'
%}

Our markup is as follows, using appropriate semantic HTML elements and incorporating the vocabulary from our collection of design patterns (expressed using the BEM methodology):

```html
<article class="summary">
  <h1 class="summary__title">
    <a href="scrooged.html">
      <span class="summary__position">12</span>
      Scrooged (1988)
    </a>
  </h1>

  <div class="summary__body">
    <p>It’s unlikely that Bill Murray could ever have got through his career without playing a version of Scrooge…</p>
  </div>

  <footer class="summary__meta">
    <strong>Director:</strong> Richard Donner<br/>
    <strong>Stars:</strong> Bill Murray, Buddy Hackett, Karen Allen
  </footer>
</article>
```

We can then describe the presentation of this HTML by using [Sass maps to define our palettes][16], mixins to include predefined font metrics, and variables to recall common measurements:

```css
.summary {
  margin-bottom: ($baseline * 4)
}

.summary__title {
  @include font-family(display-serif);
  @include font-size(title);
  color: palette(neutral, dark);
  margin-bottom: ($baseline * 4);
  border-top: $rule-height solid palette(primary, purple);
  padding-top: ($baseline * 2);
}

.summary__position {
  @include font-family(display-sans, 300);
  color: palette(neutral, mid);
}

.summary__body {
  @include font-family(text-serif);
  @include font-size(body);
  margin-bottom: ($baseline * 2);
}

.summary__meta {
  @include font-family(text-sans);
  @include font-size(caption);
}
```

Of course, this is a simplistic example for the purposes of demonstration. However, such thinking was employed at a much larger scale at the Guardian. Using [a set of Sass components][17], complex patterns could be described [using a language familar to everyone on the product team][18], be they a designer, developer or product owner:

{% include 'figure' with '/images/2016/12/beyond_the_style_guide/guardian-guss.png'
  caption: 'The design of a component on the Guardian website, described in terms of its Sass-powered design system.'
%}

## Unlocking possibility

Alongside tools like preprocessors, newer CSS layout modules like flexbox and grid layout mean the friction we’ve long been accustomed to when creating layouts on the web is no longer present, and [the full separation of presentation from markup is now possible][19]. Now is the perfect time for graphic designers to advocate design systems that these developments empower, and ensure they’re fully represented in both documentation and code. That way, together, we can build systems that allow for greater visual expression. After all, there’s [more than one way to bake a Christmas cake][20].

[1]: https://www.bbc.co.uk/food/recipes/apricotandbrandychri_77766
[2]: http://styleguides.io/
[3]: https://paulrobertlloyd.com/talks/multipack_presents_november_2010
[4]: http://daverupert.com/2013/04/responsive-deliverables/
[5]: http://www.novolume.co.uk/blog/all-websites-look-the-same/
[6]: https://louderthanten.com/articles/story/design-machines
[7]: https://24ways.org/2014/naming-things/
[8]: http://scotthurff.com/posts/why-your-user-interface-is-awkward-youre-ignoring-the-ui-stack
[9]: https://24ways.org/2015/putting-my-patterns-through-their-paces/
[10]: http://alistapart.com/article/content-out-layout
[11]: https://24ways.org/2015/animating-your-brand/
[12]: https://playbook.cio.gov/designstandards/
[13]: https://playbook.cio.gov/designstandards/visual-style/#pairings
[14]: https://playbook.cio.gov/designstandards/visual-style/#palette
[15]: http://www.w3.org/TR/css-variables/
[16]: http://erskinedesign.com/blog/friendlier-colour-names-sass-maps/
[17]: https://github.com/guardian/guss
[18]: https://www.youtube.com/video/ciG-A_1FyVg
[19]: https://24ways.org/2015/grid-flexbox-box-alignment-our-new-system-for-layout/
[20]: http://www.bbcgoodfood.com/recipes/collection/christmas-cake

*[BEM]: block, element, modifier
*[CSS]: Cascading Style Sheets
*[HTML]: Hypertext Markup Language
*[US]: United States
