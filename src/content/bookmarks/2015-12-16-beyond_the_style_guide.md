---
title: Beyond the Style Guide
date: 2015-12-17T23:30:00Z
bookmark-of: https://24ways.org/2015/beyond-the-style-guide/
category:
- Writing
- 24 ways
---
With [Drew][1] kind enough to let me write for [24 ways][2] again, this year’s contribution was an opportunity to bring together a series of thoughts that had been languishing in my drafts folder. These centered around modular design, in particular the growing use of front-end style guides:

> In straddling the realms of graphic design and programming, it’s the point at which they meet that I find most fascinating, with each discipline valuing the creation of effective systems, be they for communication or code efficiency. Front-end style guides live at this intersection, demonstrating both the modularity of code and the application of visual design.

I also wanted to write about the role CSS preprocessors can play in this context, one that ensures their use is more considered and focused. Such is the power of preprocessors like Sass, that without exercising restraint, we can find ourselves creating endless abstractions, with even the most fundamental aspects of CSS being [drawn into the mixin][4]. Much like jQuery (and frameworks like Bootstrap and Foundation), we can find ourselves growing dependent on such tools, to the extent that simpler, more effective alternatives get ignored.

Thinking of Sass an an intermediary between CSS and a visual language, is one way I try to keep my reliance in check: if you see a mixin or variable in my CSS, it should relate to an attribute in my design system.

***

So, I end this year much [like I did the last][5], with one final article on a topic of interest. Unlike last year, I’m looking towards a new year that sees me write less long-form pieces like this. Instead, I wish to spend more time making things (my list of [abandoned][6]/[neglected][7]/potential side projects can only grow so long), and perhaps embracing a means of writing that’s a little more [fast and loose][8].

*[CSS]: Cascading Style Sheets

[1]: https://allinthehead.com/
[2]: https://24ways.org/2015/
[3]: https://louderthanten.com/articles/story/design-machines
[4]: https://css-tricks.com/snippets/sass/bem-mixins/
[5]: /2014/12/naming_things
[6]: https://github.com/paulrobertlloyd/barebones
[7]: https://github.com/bradshawsguide/website
[8]: https://alistapart.com/column/write-what-you-know-now
