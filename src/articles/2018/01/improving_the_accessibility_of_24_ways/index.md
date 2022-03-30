---
title: Improving the Accessibility of 24 ways
date: 2018-01-03
canonical:
  url: https://css-tricks.com/improving-accessibility-24-ways/
summary: Creating something new will always attract attention, but there’s an under celebrated nobility in improving what already exists.
category:
  - 24 ways
  - Accessibility
  - Web
tags:
  - featured
  - source:css_tricks
screenshots:
  - url: /articles/2018/01/improving_the_accessibility_of_24_ways/homepage.png
accentColor: '#f04'
---
I’ve been thinking recently about the nature of my work and which aspects of it I enjoy the most. In a role that will often straddle the realms of design and development, whether editing copy, evaluating the design of an interface or refactoring code, I’ve come to realise that my interests lie in the act of review and refinement.

My work on [24 ways][1] is a case in point. Since Drew McLellan asked me to redesign the site 2013, I’ve stayed on as part of the team, helping to review, edit and format articles. But I’ve also been able to fulfil [the desire I expressed][2] upon launching the redesign:

> I’m a big believer in iteration, and not treating a website as ever being finished. I hope what’s been released this year can act as a foundation, and that the design will evolve in the years to come.

In the intervening years, as tools have improved and best practices have matured, I’ve tweaked the design and refactored the code, and developed [a component library][3] in the process.

{% render 'screenshots' with screenshots
  caption: 'The 24 ways home page.'
  alignment: 'bleed'
%}

## A focus on accessibility

This year I’ve been listening to people like Laura Kalbag talk about [accessibility in terms of universal design][4], and followed blogs like Heydon Pickering’s [Inclusive Components][5], which covers how to design and implement common interaction patterns with an inclusive mindset. All of a sudden, the thorny subject of accessibility has felt more approachable and less dogmatic.

With all this knowledge digested, I was keen to see how 24 ways would fare when put under the microscope. In this article, I will cover five areas where I was able to make improvements:

* Page structure
* Labelling of elements
* Keyboard navigation
* Aural experience
* General usability

Before I start, a note of thanks. After making an initial set of changes, I asked my friend and accessibility expert [Francis Storr][6] to review my work. He uncovered a number of additional issues, partly the result of his experience in this area, but also from having tested the site with a range of different assistive tools.

## Rethinking page structure

The original design had adopted a mobile-first approach. The navigation was deprioritised, and placed towards the bottom of the page. To ensure that it could be accessed from the top of the page in non-JavaScript scenarios, I added a ‘skip to navigation’ link. If JavaScript was available, this link was co-opted to reveal a navigation drawer, which would slide in from the top or right, depending on the width of the viewport. This resulted in the following page structure:

```html
<header class="c-banner">…</header>
<a class="c-menu" href="#menu">Jump to menu</a>
<main class="c-main">…</main>
<nav class="c-navigation" id="menu">
  <div class="c-traverse-nav">…</div>
  <div class="c-navigation__drawer"/>…</div>
</nav>
<footer class="c-contentinfo">…</footer>
```

In retrospect, this was problematic in a number of ways:

* The menu button (`.c-menu`) was not adjacent to the element it controlled (`c-navigation-drawer`). Moving focus around the page like this can be confusing, especially if it’s not managed properly.
* All navigation on the site was grouped together, even though each set of links served a different purpose.
* The drawer behaviour relied on having a link behave like a button. However, [the first rule of ARIA][7] states:

  > If you *can* use a native HTML element or attribute with the semantics and behavior you require **already built in**, instead of re-purposing an element and adding an ARIA role, state or property to make it accessible, **then do so**.

  Last year, I updated the JavaScript so that this link would be replaced by a `button`, yet this complexity was a hint that my original solution was sub-optimal.

Here’s the structure I arrived at today:

```html
<header class="c-banner">
  …
  <a class="c-banner__skip" href="#main">Skip to content</a>
</header>
<div class="c-menu">
  <button class="c-menu__button">…</button>
  <div class="c-menu__drawer">…</div>
</div>
<main class="c-main" id="main">…</main>
<nav class="c-traverse-nav">…</nav>
<footer class="c-contentinfo">…</footer>
```

Moving the navigation towards the top of the page meant the button and drawer were now adjacent to each other. The menu button is no longer two-faced; it is and always will be a button.

A downside to this approach is that the navigation can be heard every time you visit a new page. Again, we can use a skip link, but this time one that points to the content block (`#main`). Rather than hide this focusable element from certain users, it becomes [visible on focus][8].

This structure may be less ideologically pure, but it’s far more pragmatic. This became a recuring theme. Indeed, having given up any hope of the HTML5 outline algorithm ever being supported by browsers, I stopped using `h1` for section headings, and followed the recommendation that [heading ranks should be used to convey document structure][9] instead.

## Improving keyboard navigation

As the most interactive component on the site, the menu was the unsurprising focus of my review. The design dictates that the navigation drawer should behave like a dialog, an interface pattern that brings with it a number of assumptions. These are [described in detail in eBay’s MIND pattern][10], but essentially a dialog draws focus away from other elements on the page, and is modal; only elements within it can be operated while it is open.

I had previously cobbled together various bits of JavaScript to handle focusing (cobbling which at various points produced the odd bug such as failing to draw focus to the first element in the dialog), but had neglected to indicate the menu’s role. Having fixed these issues (adding `role="dialog"` when the menu is open), Francis pointed out that screen readers could still access links outside the dialog when it was open. In macOS VoiceOver for example, pressing <kbd>CTRL</kbd> + <kbd>OPT</kbd> + <kbd>CMD</kbd> + <kbd>L</kbd> to navigate links within the menu, would in fact announce every link on the page.

The solution was to mark everything outside the dialog as inert. Rob Dodson describes this in mode detail in his video [Accessible Modal Dialogs][11]. Implementing this can be a little bit fiddly, but a [proposal to introduce an `inert` attribute][12] would make this easier to manage. In the meantime, the proposal provides a polyfill so you can use this feature today.

I’ve found that by thinking about an interface in terms of common interaction patterns, and how they should operate in order to be widely understood, has helped me avoid complexity, and write more robust code. In fact, stepping into the world of accessibility has uncovered a wealth of useful resources, with well-written JavaScript examples a plenty. Given my difficult relationship with the web’s programming language, these have proven invaluable.

## Properly labelling elements

![](traverse.png 'Navigation component that allows users to move between articles in a series.'){data-responsiver="supporting"}
{.align-pull}

A good amount of accessibility comes down to labelling things that rely on visual appearance alone to convey meaning. Much like the `alt` attribute allows us to describe images, `aria-label` (and its relations) [extend this ability to other elements][13].

Here is the markup I was using in the navigation element that allows users to traverse previous and next articles within a series:

```html
<div class="c-traverse-nav">
  <a rel="prev" href="/2016/we-need-to-talk-about-technical-debt/"
    data-sequence-title="We Need to Talk About Technical Debt">
    <svg width="20" height="20" viewBox="0 0 200 200" role="img">
      <path d="M50 100l85 85 7-7-78-78 78-78-7-7"/>
    </svg>
    <span class="u-hidden">Previous article</span>
  </a>

  <a rel="next" href="/2016/what-the-heck-is-inclusive-design/"
    data-sequence-title="What the Heck Is Inclusive Design?">
    <span class="u-hidden">Next article</span>
    <svg width="20" height="20" viewBox="0 0 200 200" role="img">
      <path d="M150 100l-85 85-7-7 78-78-78-78 7-7"/>
    </svg>
  </a>
</div>
```

While I had provided text content for these links, this component still had a number of issues:

* No indication was given as to the role these links play and their relationship to each other.
* Using `role="img"` on the SVG icons, but not providing any accessible names, was akin to including images without `alt` attributes.
* Useful information, in this case the title of the previous and next article, was hidden within a `data-` attribute. This attribute was used in the stylesheet to add content that is shown in animated ‘flaps’ that appear on hover:

```css
.c-traverse-nav a[rel=prev]:hover::after {
  content: 'Previous: \A' attr(data-sequence-title);
}

.c-traverse-nav a[rel=next]:hover::after {
  content: 'Next: \A' attr(data-sequence-title);
}
```

Meaningful content in CSS? That should have been a red flag. I revised this component as follows:

```html
<nav class="c-traverse-nav" aria-label="Articles">
  <a rel="prev" href="/2016/what-the-heck-is-inclusive-design/"
    aria-label="Previous: We Need to Talk About Technical Debt">
    <svg width="20" height="20" viewBox="0 0 200 200" focusable="false" aria-hidden="true">
      <path d="M50 100l85 85 7-7-78-78 78-78-7-7"/>
    </svg>
  </a>

  <a rel="next" href="/2016/what-the-heck-is-inclusive-design/"
    aria-label="Next: What the Heck Is Inclusive Design?">
    <svg width="20" height="20" viewBox="0 0 200 200" focusable="false" aria-hidden="true">
      <path d="M150 100l-85 85-7-7 78-78-78-78 7-7"/>
    </svg>
  </a>
</nav>
```

The first thing I did was give this set of links a label. I originally choose `Articles navigation`. However, in testing VoiceOver would announce: <samp>navigation, Articles navigation</samp>. As the `nav` element already describes the role, we need only provide additional information about the type of navigation this is.

Secondly, on the advice of Francis, I added `focusable="false"` to all inline SVG markup. This is due to a bug in [IE11 where SVGs are keyboard focusable by default][14].

Regarding the labelling of the SVG icons, I had two choices. I could either move the hidden text content to these icons using `aria-label`, or remove them from the accessibility tree entirely using `aria-hidden`. In considering the second option, I realised I could merge the hidden text with that in the `data-` attribute, and use this combined information within an `aria-label` attribute. All of a sudden, my CSS became much simpler:

```css
.c-traverse-nav a:hover::after {
  content: attr(aria-label);
}
```

Accessible mark-up is useful markup.

## Considering the aural experience

Navigating the site using a screen reader lead to me making a few other small changes as well. For example, a few links on the site include a right pointing arrow, a visual flourish created using the following CSS:

```css
.c-continue::after {
  content: ' \203A'; /* Single Right-Pointing Angle Quotation Mark */
}
```

However, screen-readers typically announce generated content. When these links were read out, you’d hear nonsense like this:

<samp>link, more articles by drew single right-pointing angle quotation mark</samp>.

Adding `speak: none` had no effect (CSS aural properties have little support). However, I could create a similar arrow using CSS borders:

```css
.c-continue::after {
  display: inline-block;
  vertical-align: middle;
  height: 0.375em;
  width: 0.375em;
  border: 0.1875em solid;
  border-color: currentColor currentColor transparent transparent;
  transform: rotate(45deg);
  content: '';
}
```

![](continue.png 'Continue links before and after improvements. While they look similar, the revised design sounds much better.')

I also made improvements to the styling of author names in article summaries. Originally, these were distinguished from the rest of the excerpt by styling them as uppercase text. Francis pointed out that some screen readers will spell out uppercase letters (regardless of whether they appear in the HTML or have been altered by CSS) if they don’t spell a known word. For example: VoiceOver and NVDA have trouble with Chris Coyier’s surname, so his name would be read aloud as <samp>Chris C-O-Y-I-E-R</samp>. The simple fix was to distinguish names using emboldened text instead.

If I’m honest, I’ve been somewhat arrogant in the past, thinking that by using semantic markup and progressive enhancement, I needn’t worry too much about accessibility. While using the right elements, and considering an interface not only in visual terms is important, this is the absolute bare minimum. An understanding of different assistive techologies, and willingness to test with them, is just as important.

## Reviewing general usability

Thinking about accessibility led to me improve overall usability, too.

For this years set of articles, we no longer link to author’s websites from article excepts. This historical holdover was poorly resolved previously; if you happened to click on the author’s name you would be taken to their website, not the article as you would expect. We also included comment counts that were linked to the comment section on the article page (which itself linked to a separate comments page). Madness!

Now, each article has one link; to the article. A home page that once involved tabbing through 24×3 links, is now less noisy and much easier to navigate for everyone.

Other refinements included ensuring the site is responsive in terms of height, as well as width, ensuring the navigation menu can be dismissed when you click outside of it, and a review of overall performance. These might not be considered accessibility improvements, but I’m not so sure. To suggest this would be to think accessibility is a entirely separate concern. In fact, making changes that benefit one set of users will typically benefit all.

* * *

Creating something new will always attract attention and admiration, but there’s an under celebrated nobility in improving what already exists. While not all changes may be visual, they can have just as much impact. I know that, had we decided to redesign the site this year, many of these improvements would not have been made. Hopefully this overview will encourage you to look at your own projects, and think about similar changes you might make.

Having a growing awareness of the issues, and expanding your knowledge of the tools available is an essential requirement of working on the web. However, don’t keep that knowledge saved up for the future; if you can, go back and fix your older projects too.

[1]: https://24ways.org/
[2]: https://paulrobertlloyd.com/2013/12/redesigning_24_ways
[3]: https://bits.24ways.org
[4]: https://abookapart.com/products/accessibility-for-everyone
[5]: https://inclusive-components.design
[6]: https://twitter.com/fstorr
[7]: https://www.w3.org/TR/using-aria/#rule1
[8]: https://www.filamentgroup.com/lab/accessible-responsive.html#hiding
[9]: https://www.w3.org/TR/html51/sections.html#creating-an-outline
[10]: https://ebay.gitbooks.io/mindpatterns/content/disclosure/dialog.html
[11]: https://www.youtube.com/watch?v=JS68faEUduk
[12]: https://github.com/WICG/inert
[13]: https://developer.paciellogroup.com/blog/2017/07/short-note-on-aria-label-aria-labelledby-and-aria-describedby/
[14]: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/8090208/

*[ARIA]: Accessible Rich Internet Applications
*[CSS]: Cascading Style Sheets
*[HTML]: Hypertext Markup Language
*[SVG]: Scalable Vector Graphics
