---
title: Thinking out loud about static site generators
date: 2023-02-23T22:30:00Z
location:
  locality: Bristol
  country_name: England
summary: Choosing a new static site generator to power this website.
category:
  - Website
  - Web
---

4 years on from [the last redesign of this website][1], I’ve inevitably reached the point where I want to revisit earlier choices regarding its design, structure and management.

In an effort to document my decisions and sound out ideas, I’m planning to write a few posts about the changes I’m considering. To kick off, I want to talk about why I’ve chosen a different static site generator.

## Static foundations

This site has always been statically generated.

For many years my platform of choice was [Movable Type][2]. Conceived during the earliest days of blogging, Movable Type was written in Perl, used an XML-like template language and stored its content in a MySQL database. I was using this to statically generate PHP pages so I could use shared template partials, compile LESS stylesheets and do a small amount of dynamic rendering. In short, a grab bag of languages built upon what had become a languishing platform.

When it came to redesigning the site in 2015, the simplicity of [Jekyll][3] was appealing.

Rather than rely on a database, Jekyll uses the concept of ‘flat files’; content saved in Markdown files with metadata prepended using YAML-formatted ‘front matter’. Jekyll parses these files before populating Liquid templates with their content to generate the desired HTML.

Jekyll is written with Ruby, a briefly fashionable programming language which inspired white-space significant reinventions of CSS (Sass), JavaScript (CoffeeScript) and HTML (HAML). While Sass and CoffeeScript were supported natively by Jekyll, they weren’t required and Jekyll choose Liquid as its templating language rather than the inscrutable aberration that’s HAML.

Like Movable Type, Jekyll is opinionated software with its technology choices influenced by the tastes of the day. Yet the central concept proved sound, with the flat-file model forming the basis of many subsequent static site generators.

I liked Jekyll, but it had one unfortunate downside: the time it took to build my website. This required countless design compromises and became more of an issue as I published more frequently.

## Turning it up to Eleventy

The arrival of [Eleventy][4] answered my prayers: Jekyll, but with Node. Not only did this drastically reduce build times, it reduced the cognitive overload of dealing with different syntaxes and languages; I could now use JavaScript on both the front and back end.

Unlike Movable Type, Jekyll or many of its contemporaries, Eleventy isn’t as opinionated; you can choose from a range of template languages and use multiple data formats.

Such is the power and extensibility afforded by Eleventy, I have vastly expanded the remit of this site. With its ability to use remote data sources, I publish events I’ve attended by fetching and parsing an iCal calendar and add metadata to cinema visits by querying [The Open Movie Database API][5].

With great power comes great responsibility. After 4 years, my site is a tangled mess of data sources, with Liquid mixed in with JavaScript mixed in with Markdown. Although Eleventy is thriving, the focus of the project has drifted towards other parts of the so–called ‘JAMstack’ while rougher edges remain.

## Looking to Lume

While Eleventy helped me clarify my needs, I’ve found a project better aligned with my ideas about how a static site generator should work.

That project is [Lume][6].

Like Jekyll, Lume uses flat files to store content. Like Eleventy, it supports different template engines and can generate pages from different data sources.

Unlike Eleventy, its API is clearer and easier to work with. Whereas generating pages from data in Eleventy feels like a hack, Lume takes a more holistic approach. With smart plugins that enable searching and paginating content, paginating pages that they themselves may require pagination is a snip.

There are downsides. Lume is a young project with a small community. So is Deno, the JavaScript runtime it uses. In most cases this is not a problem; Oscar Otero, the maintainer of Lume, is helpful and responsive to feature requests and feedback. Meanwhile, Deno is growing in popularity, has a standard library and implements open standards.

However, venture off the beaten track and you may find yourself unable to achieve certain tasks. Deno supports using packages from NPM, but that isn’t always helpful. For example, I’d like to use [Lightning CSS][7] to pre-process CSS yet I can’t use it to also bundle files because [reasons][8].

Eleventy and Node.js are like grand old ships. They use mature and proven technologies yet are weighed down by the barnacles of backwards compatibility. Lume and Deno are beautiful solar-powered yachts, their sleek hulls full of promise – just be careful you don’t get lost at sea.

I expect to live with the fifth version of this website for the next half-decade, so hopefully placing bets on these future-facing platforms will pay off. Yet as every seafarer will tell you, at the edge of the map, there be dragons.

[1]: https://paulrobertlloyd.com/notes/1542018600/
[2]: https://movabletype.org
[3]: https://jekyllrb.com
[4]: https://www.11ty.dev
[5]: http://omdbapi.com
[6]: https://lume.land
[7]: https://lightningcss.dev
[8]: https://github.com/parcel-bundler/lightningcss/issues/277

*[XML]: Extensible Markup Language
*[PHP]: PHP: Hypertext Preprocessor
*[LESS]: Leaner Style Sheets
*[YAML]: YAML Ain't Markup Language
*[HTML]: HyperText Markup Language
*[CSS]: Cascading Style Sheets
*[HAML]: HTML Abstraction Markup Language
*[API]: application programming interface
*[NPM]: Node package manager
