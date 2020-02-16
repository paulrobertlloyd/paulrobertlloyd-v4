---
title: Styleguides for the Web
date: 2010-12-05T23:09:45Z
location:
  locality: Birmingham
  country-name: United Kingdom
summary: Clearly communicating the fundamental aspects of your design at the different stages of a project can help you better communicate with clients, developers and your peers, ensuring your vision doesn’t get lost in the transformation from static comp to dynamic ever changing website.
category:
- design
- styleguides
---
## The Auteur Theory of Design

At this year’s dConstruct conference, John Gruber talked about his [Auteur Theory of Design][1]. This states that:

> The quality of any collaborative creative endeavour tends to approach the level of taste of whoever has control

For most web design projects the person who has control is the client, although when working with large organisations it is rarely one person but a number of stakeholders. In fact, I would argue that in most cases it’s individual members of the development team (often working within tight budgets and time constraints) that really dictate the quality of the final website.

John uses his theory to explain why, whilst both Apple and Microsoft employ talented designers and engineers, it is widely accepted that Apple designs better products. John’s theory suggests it’s the taste and appreciation for design of each CEO that ultimately dictates the quality of their company’s products.

Before reaching this conclusion, John made a comparison with the film industry. Whilst the director is seen to be the author of a film, it’s often meddling studio executives who determine the final cut, and thus the quality of the film. Some directors are given a clause in their contract that allows them to have ‘final cut’ — the film they turn in is the film that gets released.

In the studio era, no director enjoyed this privilege. Given that a film is made in the editing room, Alfred Hitchcock storyboarded his films before shooting, meaning his films could only be edited one way that would make narrative sense.

In an era when no directors were given final cut, Alfred Hitchcock found a way to give himself final cut, and that is what I’m advocating today — finding ways to exert creative control and lessen the impact later decisions may have on the quality of the final product.

## What Is a Styleguide?

Branding agencies achieve this by producing styleguides; documents that explain how a brand is constructed, often using examples of how to use — and how not to use — the various brand assets they’ve created. Styleguides can include the following:

* **Logo:** Positioning, variations, with and without slogans, sub-brands…
* **Colours:** Primary palette, accent colours, usage…
* **Typography:** Fonts, usage, alternatives fonts to use when brand fonts are not available…
* **Copy:** Tone of voice, product names, capitalisation…
* **Illustration:** Illustrative style, iconography…
* **Photography:** Photographic style, cropping, positioning…

### Skype’s brand guidelines

I’ve been collecting styleguides for a number of years, partly as I’m interested in branding and corporate identity, but also to refer to when creating my own guidelines. One of my favourites is that created for Skype:

{% render 'figure' with '/images/2010/12/styleguides_for_the_web/skype.png'
  caption: 'A selection of pages from the Skype styleguide.'
%}

As a brand made up from a number of different elements (the logo, clouds, rainbows, illustrations and sometimes photography), it would be easy for the brand to become diluted should these not be consistently applied. Skype’s branding guidelines explain how each component is constructed before providing examples of these different pieces brought together. The visual styleguide, <cite>How We Look</cite>, is accompanied by a separate document called <cite>How We Think</cite> which focuses on messaging and tone of voice.

### The BBC’s Global Experience Language

Until recently I hadn’t found many examples of styleguides designed especially for the web. However, in February the BBC announced it was [updating its global visual language][2]; GVL3 would use an underlying design philosophy to produce a set of world-class design standards that designers across the corporation would work to. Nine founding design principles (which [I’ve written about previously][3]) where distilled into the essence of a new visual style, and broken down as follows:

* **Universal Grid and Baseline:** Page layouts based on a grid divided into 61 x 16px vertical units (which can be further divided into columns) and an 8px baseline grid to help vertically align page components. The original announcement talked about using interwoven vertical horizontal and vertical bands, and showed examples of a persistent right-hand column, yet this never materialised.

* **Typography:** Bolder typography, stronger hierarchies, a defined set of font sizes and a move away from Verdana to using Helvetica Neue/Arial for both headers and body copy. The corporation’s brand typeface, Gill Sans, could now be used in masthead areas too.

* **Iconography:** A bespoke set of icons was created to use across the site, based on the proportions of Gill Sans.

* **Colour Palette:** A colour palette was created for use on non-branded areas of the site (such as the homepage and search pages). This has yet to appear in the final guidelines, but may do once these non-branded areas get redesigned.

{% render 'figure' with '/images/2010/12/styleguides_for_the_web/gel.png'
  caption: 'A page on the BBC website detailing the GEL typography guidelines.'
%}

When GVL3 was finally released in July, its name had changed to GEL ([Global Experience Language][4]), an acceptance that the web is equally as much about interaction and behaviour as it is visual design. The guidelines now included a pattern library documenting key interactions used across the site such as auto suggest in search fields, tool tips, carousels and photo slideshows.

After many years being critical of the visual design of bbc.co.uk, GEL exceeded my wildest expectations, and I’ve been following the roll out of ‘gelled’ websites on [a dedicated website][5] ever since. Over time I hope to look in greater detail at how this visual design language has been adopted, but I’m also interested to see how the BBC manages to ensure conformity across the site whilst at the same time allowing enough flexibility to cater for different brands and design requirements.

### Responsive design

The GEL guidelines will eventually expand to cover mobile and IPTV, although the guidelines don’t yet cover any aspect of responsive (or adaptive) design. This has been a hot topic this year, although there is too much to cover here. Instead I encourage you to read these excellent articles:

* [A Dao of Web Design][6] by John Allsopp
* [Responsive Web Design][7] by Ethan Marcotte
* [Responsive Enhancement][8] by Jeremy Keith

As layouts become more adaptable, flexible and context specific, so individual components will become the focus of our design. It is therefore essential to get the foundational aspects of our designs right, and styleguides allow us to do that.

## Styleguides during the design process

So how can we use a styleguide driven approach during the web design process? It’s usually at the points where designs are handed over between different people and teams that the details can get lost, so I will focus on those exchanges.

### Using brand guidelines

Branding agencies often create styleguides to document how a brand should be used. However, they don’t usually offer much guidance for web usage, meaning we need to fill in the gaps ourselves.

I’ve seen many brand guidelines suggest system fonts for web usage. Whilst these may be helpful when creating [font-stacks][9], the brand typeface might be available to use with @font-face (licences permitting), or find better alternatives on services like [Fontdeck][10] or [Typekit][11]. Guidelines might stipulate font sizes, but on-screen we will likely need to use larger text to ensure greater legibility.

Colour palates may not specify RGB colour values, so we will have to create these ourselves. But is the colour palette suitable for use online anyway? Yellow on white might look great in print, but on the web we need to take account of accessibility concerns such as text contrast.

Brand guidelines often suggest positioning and minimum sizes for logos. [Channel 4’s guidelines][12] require its logo to be positioned in the middle right on television and in print layouts, but this is unlikely to work online. Does a logo even work on screen? Most logos are now designed to work on screen and at small sizes, but this isn’t always the case.

By all means, read the brand guidelines and understand why decisions have been taken, but also use common sense and be prepared to adapt them for web usage.

### Creating styleguides during the design phase

When I design websites, I often build a pattern library in my head as I go. I’ve now started to document these in my Fireworks document, pulling together a page that lists these different components. Creating this page forces you to think about the design and help you apply styles consistently, but can also be used as a starting point for the front-end development, and to compare the final build with the original design.

To make sure I’ve got everything covered, I refer to a crib sheet. This includes:

* **Grids:** Columns, baseline, key divisions…
* **Typography:** Headings, body copy, captions, lists, tables…
* **Colour:** Primary and secondary palettes, gradient ranges…
* **Messaging:** Success messages, error handling…
* **Form Elements:** Buttons, text inputs, menus, checkboxes…
* **Links & Navigation:** Hover, active, disabled and selected states…
* **Images:** Dimensions, margins, placement, usage…

Here are two example of styleguides I’ve created for recent projects:

* [Universal Playback][13]
* [Nuts Online][14]

This page can be relatively lightweight, and sometimes it doesn’t make sense to include all components listed in my crib sheet. This is especially true when working alongside developers implementing the design, but when handing a design over to developers working remotely, you may need to document more of the design, possibly even formalising it a little too. Yet no matter how much you try, there’s no substitute for being able to develop a website alongside the visual and user experience designer.

Earlier this year, [Mule Design’s David McCreath wrote about why they don’t deliver image comps][15] to clients:

> When we take a design all the way through code, it means that we have spent the time testing the solutions proposed by our strategy, IA and visual design work.

This is an approach I fully endorse, and one I’d like to see Clearleft — and other web design agencies — adopt too.

Even in situations where you’ve been asked to design up to the point of a flat image, I still think it’s a good idea to deliver a baseline set of styles in a HTML file. I have in mind building a common HTML boilerplate file that I can easily style to match any design provided in such image comps.

I want to stress that creating documentation cannot be relied on by itself; it’s impossible to convey the subtleties of an interactive medium in a flat design file. Having a handover meeting between the designer and front-end developer before commencing build, followed up with regular design reviews, will ensure the design is understood and any issues that arrive during build can be easily solved.

### Handing over front-end code to back-end developers

The final point of handover is between a front-end and back-end developer. At Clearleft, rather than deliver an inflexible set of static pages, we present our code as a series of modular components (or pattern portfolio) that can be assembled into different configurations and page layouts as required, although we often provide a number of reference pages created from these components too.

Such systematic thinking was instigated by [Natalie][16], yet this is something we continually iterate upon; [Jeremy][17] now includes a pattern primer; a collection of markup snippets that can be used anywhere in a site. This seems very much in the spirit of Alfred Hitchcock.

## Conclusion

If I have learnt anything from working in large distributed teams, it’s that communication is key. The techniques shown here are only part of that equation, and should be adapted to suit each project.

This is only a selection of tools and processes we can use too. Indeed, I think as a community we should not only share how we generate ideas and produce design concepts, but also discuss how we communicate these with clients and developers. There is still a lot to learn.

Whilst much of this talk has focused on the styleguide as a deliverable, I hope the underlying theme has been the importance of communicating the complexities inherent with an interactive medium like the web. Simply presenting flat image comps is by no means enough — it’s only the start.

[1]: http://2010.dconstruct.org/speakers/john-gruber
[2]: https://www.bbc.co.uk/blogs/bbcinternet/2010/02/a_new_global_visual_language_f.html
[3]: /2010/02/bbc_online_gvl
[4]: http://bbc.co.uk/gel/
[5]: http://gelled.paulrobertlloyd.com/
[6]: http://www.alistapart.com/articles/dao/
[7]: http://www.alistapart.com/articles/responsive-web-design/
[8]: https://adactio.com/journal/1700/
[9]: http://unitinteractive.com/blog/2008/06/26/better-css-font-stacks/
[10]: http://fontdeck.com
[11]: http://typekit.com
[12]: http://www.channel4.com/about_c4/styleguide/
[13]: /images/2010/12/styleguides_for_the_web/universal_playback.png
[14]: /images/2010/12/styleguides_for_the_web/nuts_online.png
[15]: http://weblog.muledesign.com/2010/08/why_we_dont_deliver_photoshop_files.php
[16]: http://natbat.net/
[17]: https://adactio.com/

*[BBC]: British Broadcasting Corporation
*[CEO]: Chief Executive Officer
*[HTML]: HyperText Markup Language
*[GEL]: Global Experience Language
*[IA]: information architecture
*[Mb]: Megabyte
*[PDF]: Portable Document Format
*[RGB]: Red-Green-Blue
