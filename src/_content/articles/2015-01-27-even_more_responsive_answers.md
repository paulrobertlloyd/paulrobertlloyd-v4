---
title: (Even More) Responsive Answers
date: 2015-01-27T19:04:00Z
canonical:
  source: net_magazine
  edition: Issue 264
summary: Answers to questions about responsive design put to me by readers of <cite>net Magazine</cite>.
image: /images/2015/01/guardian_navigation.png
tags:
- source:net_magazine
- responsive_design
- web
---
{% include 'figure' with '/images/2015/01/guardian_navigation.png'
  caption: 'The Guardian’s navigation on smaller displays prioritises page signposting, but all site sections can still be accessed with one tap.'
  alignment: 'bleed'
%}

Each month [net Magazine][1] run a section called *Exchange*, where four industry experts each answer three questions on a particular topic, asked by their readers and followers on Twitter. I was their responsive design expert in their March issue, which is on sale now.

In the spirit of [previous][2] [articles][3], I’m sharing my unedited answers here as well.

## Navigation

{% include 'quote' with 'What is your recommended method of handling dropdown menus when viewed on tablet and smartphone devices?'
  caption: '[@Jordan_Simpson, 4 December 2014](https://twitter.com/jordan_simpson/status/540520320374157312)'
%}

{% include 'quote' with 'What are the best ways or resources out there you can use to convert a desktop menu into a mobile one?'
  caption: '[@LeeCraigStewart, 4 December 2014](https://twitter.com/leecraigstewart/status/540514957159583744)'
%}

Before thinking about a menu’s presentation or behaviour, first ensure the items it contains are relevant to users, whatever the breakpoint. Thinking mobile-first (rather than trying to adapt desktop design patterns downwards) can help prioritise and rationalise menu items, too.

[The Guardian’s navigation is a good example][4]. It’s intriguing design prioritises page breadcrumbs at smaller screen widths, with horizontal scrolling allowing you to access sibling and top-level section items. An “all” link provides a safety-net, giving you access to every section with one tap, starting with the section you are in.

A great resource for responsive patterns (including those dealing with navigation) is Brad Frost’s [This is Responsive][5], but new possibilities are being uncovered every day.

## Tables

{% include 'quote' with 'I deal a lot with dashboards and still can’t find a good way of handling tables… please help!'
  caption: '[@joewattsdesign, 4 December 2014](https://twitter.com/joewattsdesign/status/540530144616910848)'
%}

As no two tables are the same, there’s no definitive solution. Simpler tables could be presented as a list at smaller breakpoints, while more complex tables may require a change of orientation so that column headers appear fixed on the left, with data in a scrollable area to the right. Or maybe you allow users to choose which columns to hide/show. [Jason Grimsby has a good summary][6] of the options available — and what you should consider before choosing one.

## Advertising

{% include 'quote' with 'How do you deal with fixed width banner ads in a responsive site?'
  caption: '[@andybudd, 4 December 2014](https://twitter.com/andybudd/status/540515016823549953)'
%}

Display advertising means buggy code, belligerent design and dealing with an industry whose ingrained practice ignores real world needs, so any solution will be hacky. Placing an advert on a page usually involves picking a static IAB unit that best fits the current breakpoint before injecting it into the page. There are glimmers of hope. Google is working with publishers on tools that will allow agencies to create responsive, template-driven creatives, while other publishers have started [creating responsive adverts for their partners in-house][7].

[1]: http://www.creativebloq.com/net-magazine
[2]: /2012/01/responsive_answers
[3]: /2012/12/more_responsive_answers
[4]: https://www.theguardian.com/help/insideguardian/2014/jul/11/-sp-navigating-the-guardian
[5]: https://bradfrost.github.io/this-is-responsive/patterns.html
[6]: http://blog.cloudfour.com/picking-responsive-tables-solution/
[7]: http://next.theguardian.com/blog/responsive-takeover/

*[IAB]: Interactive Advertising Bureau
