---
title: CSS Flexbox Is Entirely Logical (Almost)
date: 2016-03-13T00:55:00Z
location:
  locality: Brighton
  country-name: England
summary: Because it uses logical values, Flexbox layouts will automatically align according to a document’s text-direction. Well, almost.
image:
  url: /articles/2016/03/logical_flexbox/image.jpg
  alt: Mr. Spock browsing the web on his tablet device.
category:
  - Web
tags:
  - featured
---
![](image.jpg 'Mr. Spock browsing the web on his tablet device. Photograph: [NBC Television](https://commons.wikimedia.org/wiki/File:Star_Trek_Spock.jpg)')

Given a maturing specification, and related concerns regarding browser support and compatibility, I had largely been ignoring [CSS Flexible Box Layout][1]. Yet with support for this module — aka Flexbox — [currently hovering around 96%][2] (82% if using un-prefixed values) there’s little excuse for developers like myself not to start using it.

Like getting to grips with any new tool, only by using it for real can its various nuances and limitations be understood. Finally able to discard the many counter-intuitive hacks I’ve gathered over the years, I find it hard not to create a flex layout without wearing a broad grin. Vertical centring? [Easy][3]. Equal height columns? [By default][4]. While Flexbox may not be suitable for every situation, it solves a great number. And with [CSS Grids][5] just around the corner, web layout nirvana feels pretty damn close.

## Left is not right

Flexbox introduces a number of new concepts, be they the main and cross axes, or the various justification and alignment properties. [Mozilla has a good overview][6], but I’ve found [the guide on CSS Tricks][7] to be the most helpful. I suggest reading up on these terms if you’re unfamiliar, before continuing with the rest of this article.

Here, I want to draw your attention to two particular values used by Flexbox: `flex-start` and `flex-end`, terms that appeared fairly abstract until I needed to create a layout that would support both left-to-right and right-to-left languages. As it turns out, browsers do a lot of the heavy lifting here, be it via the [`dir`][8] attribute, or the [`<bdi>`][9] and [`<bdo>`][10] elements. However, this native functionality can easily be undermined with a few carelessly applied CSS rules: add `text-align: left` to a passage of text, and it will appear left aligned, no matter what the document’s text direction has been set to.

Having briefly immersed myself in the world of internationalisation, much like seeing a width defined in pixels, I no longer see physical positioning keywords like `left` or `right` without knowing a series of assumptions have been made. Thankfully, because Flexbox uses the logical values `flex-start` and `flex-end`, any layouts created with it will automatically align according to the document’s text direction.

Well, almost.

## Illogical justification

Flexbox is most effective when creating micro layouts within parts of a page and positioning items in one dimension. Like for example, a page header:

![Screenshot of an example page header.](header-ltr.svg 'Our header, with the site’s name on the left, and navigation items to the right.')

We can markup this header using the following HTML:

```html
<body lang="en" dir="ltr">
  <header role="banner">
    <h1>
      <a href="/en/" rel="home">Starfleet</a>
    </h1>
    <nav role="navigation">
      <a href="/en/academy/">Academy</a>
      <a href="/en/command/">Command</a>
      <a href="/en/intelligence/">Intelligence</a>
      <a href="/en/security/">Security</a>
    </nav>
  </header>
</body>
```

and these CSS rules:

```css
* {
  font: menu;
  margin: 0;
}

a {
  padding: 1rem;
}

a[rel="home"] {
  background-color: blue;
  color: white;
}

header {
  background-color: gainsboro;
  display: flex;
}

h1,
nav {
  align-items: center;
  display: flex;
}

nav {
  margin-left: auto;
}

nav a {
  border-left: 1px solid white;
}
```

By giving the containing `<header>` the rule `display: flex`, its children will appear alongside each other in the same row (`flex-direction: row` is the default value for a flexbox). To move the navigation to the right, we can use [Flexbox’s best kept secret][11]: by applying `margin-left: auto` to the `<nav>` element, its left-hand margin will take up the remaining space, thus pushing it all the way to the right.

*Whoa*{title="That’s English for stop a horse!"}, ring the assumption alarm! By adding this value, we’re making the assumption that the navigation will always appear on the right, but that’s not true if we need to support right-to-left text. Indeed, switching the document’s text direction will produce the following result:

![Screenshot of example page header with items not appearing as intended.](header-rtl-margin-left.svg 'Our header as it appears when text direction is set right-to-left.')

Because the left margin value hasn’t changed, the navigation will still be pushed as far to the right as it can go. What we actually want however, is for it pushed as far to the left, so that the header’s layout is now flipped.

On the cross axis, we can align individual items in a different direction to that of its siblings. So, if a container has `align-items: flex-start` (the default value), we can add the rule `align-self: flex-end` to a child item. With a corresponding property on the main axis (perhaps `justify-self`), we could do the same, thus avoiding any physical value declarations. Unfortunately [such a rule doesn’t exist][12], meaning we need to write the following instead:

```css
[dir="ltr"] nav {
  margin-left: auto; /* Move navigation to the right */
}

[dir="rtl"] nav {
  margin-right: auto; /* Move navigation to the left */
}
```

At first this seems like an oversight. To align items along the cross axis there are three properties: `align-content`, `align-items` and `align-self`. Yet to justify items along the main axis there is only one: `justify-content`. Not having corresponding values threw me for a while, but only highlighted a misconception I had of the spec. So why can’t we use a `justify-self` rule to align a child item along the main-axis? In answering this question on the www-style mailing list, [Tab Atkins responded][13]:

> Because there can be multiple children in that axis. The `*-self` properties only work if the child is all alone in that axis. When there are multiple boxes to be aligned, they can only be aligned en masse, with the `*-content` properties.

Thinking both axes were equal was to have the wrong understanding of how Flexbox works; a difference that becomes clearer once you consider that items along the main axis can also wrap.

## Logical values

Returning to our header example, you’ll notice another property containing a physical value: `border-left`. Again, to make this work in both text directions we would need to write the following:

```css
nav a {
  border: 0 solid white;
}

[dir="ltr"] nav a {
  border-left-width: 1px;
}

[dir="rtl"] nav a {
  border-right-width: 1px;
}
```

With these adjustment in place, we get the desired result:

![Screenshot of example page header with items appearing as intended.](header-rtl.svg 'Our header now appears correctly when text direction is set right-to-left.')

Including a `[dir]` selector in every rule featuring physical values soon makes our CSS overly verbose. Enter the [CSS Logical Properties][14] module. Rather than use physical `left` or `right` values, this module allows us to use values similar to those we’ve been using in Flexbox. Going back to my earlier example, instead of writing `text-align: left` we can write `text-align: start` — a value that already [has good support across most browsers][15].

Using logical properties means we could write the following rules to achieve the same result:

```css
nav {
  margin-inline-start: auto;
}

nav a {
  border-inline-start: 1px solid white;
}
```

Currently, [logical properties][16] are only fully supported by Firefox (41.0+), while support in other browsers is either patchy or non-existent. That said, [Autoprefixer][17] will add the relevant `-moz-` and `-webkit-` prefixes for the corresponding proprietary margin and padding properties in those browsers, while Microsoft considers implementing these properties [a high priority][18].

Until support improves, I’ll just cringe a little whenever I see the words `left` or `right` in a CSS file, and add physical positioning to my growing list of things I won’t take for granted when building a website.

***

<ins datetime="2016-03-17">**Update 1:** Many thanks to [Jonathan Garner][19] for pointing out that [I can push the site name and navigation apart by adding `justify-content: space-between`][20] to the flex container, thus avoiding the need for any positional values, physical or logical. As is so often the case, there can be many means of achieving the same objective, but Jonathan’s solution is certainly the most sensible. Still, with auto margins a key component of flexbox layouts, the issue doesn’t go away entirely.</ins>
{#update-1}

<ins datetime="2016-03-30">**Update 2:** [Chris Minnick][21] at [Webucator][22] has recorded [a video tutorial][23] based on this article.</ins>
{#update-2}

[1]: https://www.w3.org/TR/css-flexbox-1/
[2]: http://caniuse.com/flexbox
[3]: https://philipwalton.github.io/solved-by-flexbox/demos/vertical-centering/
[4]: https://philipwalton.github.io/solved-by-flexbox/demos/holy-grail/
[5]: https://gridbyexample.com/
[6]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes
[7]: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
[8]: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir
[9]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdi
[10]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdo
[11]: https://medium.com/@samserif/bd3d892826b6
[12]: http://stackoverflow.com/questions/32551291/in-css-flexbox-why-are-there-no-justify-items-and-justify-self-properties
[13]: https://lists.w3.org/Archives/Public/www-style/2015Apr/0114.html
[14]: https://drafts.csswg.org/css-logical-props/
[15]: http://www.quirksmode.org/css/text/#t07
[16]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties
[17]: https://github.com/postcss/autoprefixer
[18]: https://dev.windows.com/en-us/microsoft-edge/platform/status/csslogicalpropertieslevel1
[19]: http://www.jonathangarner.co.uk
[20]: https://twitter.com/jonathangarner_/status/709483346510872576
[21]: https://about.me/chrisminnick
[22]: https://www.webucator.com
[23]: https://www.youtube.com/watch?v=Q_0tP52RBh4

*[aka]: also known as
*[CSS]: Cascading Style Sheets
