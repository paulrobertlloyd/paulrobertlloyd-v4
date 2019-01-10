---
title: Little Gems
date: 2015-11-21T16:57:00Z
location:
  locality: Brighton
  country-name: United Kingdom
summary: 'The hackability provided by Jekyll’s plugin architecture has brought about an unexpected consequence: I’m starting to learn Ruby.'
tags:
- jekyll
- ruby
- programming
---
Writing about [the redesign of this site][1] in July, I mentioned why I decided to build it using [Jekyll][2]:

> Not only is this software actively developed, but I find it to be incredibly configurable and — once I get the hang of Ruby — infinitely hackable.

This hackability, provided by its [plugin architecture][3], has brought about an unexpected consequence: I’m starting to learn [Ruby][4]. Its natural language syntax means it’s fairly easy to write simple functions — or at least understand how those copy and pasted from the Internet work! Furthermore, I’m noticing how programming concepts in this language translate to others such as JavaScript (whose syntax, conventions and error messages serve only to intimidate me).

While I’m still very much an amateur Ruby-ist, I now feel confident enough to release two Gems that bring additional functionality to Jekyll.

## jekyll-roman

This plugin provides a Liquid filter that accepts any given whole number and converts it into roman numerals. For example, if you wish to display the year in a copyright statement using roman numerals (as typically seen on [BBC][5] closing credits), you can write the following:

```liquid
<footer>&copy; {% raw %}{{ app.time | date:"%Y" | roman }}{% endraw %}</footer>
```

Assuming the year is 2015, this will generate the following HTML:

```html
<footer>&copy; MMXV</footer>
```

[Learn more on Github][6]

## jekyll-figure

This plugin provides a Liquid tag that generates `<figure>` elements. It takes optional parameters to add an associated `<figcaption>` and `class` attribute(s) if desired. For example, using the following code:

```liquid
{% raw %}{% figure caption:"Being situated in Linton is the genius of this hotel’s
location, being equidistant between London and Norwich" class:"align-left" %}
![Linton Travel Tavern](/images/linton.jpg)
{% endfigure %}{% endraw %}
```

will generate the following HTML:

```html
<figure class="align-left">
  <img src="/images/linton.jpg" alt="Linton Travel Tavern"/>
  <figcaption>
    Being situated in Linton is the genius of this hotel’s location,
    being equidistant between London and Norwich
  <figcaption>
</figure>
```

[Learn more on Github][7]

## Next steps

Now, these are pretty simple plugins, but hopefully they are a prelude to more complex offerings. I’ve already [contributed changes][8] to Aaron Gustafson’s plugin [jekyll-crosspost_to_medium][9], and I’m currently trying to update the slugify utility inside Jekyll’s core so that it can take more options.

At a later date, I may release [the plugin I’m using to generate responsive image mark-up][10], although given its breadth of features, it requires a lot of testing. Ultimately, I’d like to create a plugin to help me display photos I’ve posted to Flickr on this site as well.

Yet if there’s one thing I’ve learnt while making this tentitive journey into the world of programing, it’s that taking one step at a time is often the most sensible approach.

[1]: /2015/07/shipped
[2]: https://jekyllrb.com
[3]: https://jekyllrb.com/docs/plugins/
[4]: https://www.ruby-lang.org/en/
[5]: https://www.bbc.co.uk/commissioning/tv/production/articles/credits-branding-trademarks
[6]: https://github.com/paulrobertlloyd/jekyll-roman
[7]: https://github.com/paulrobertlloyd/jekyll-figure
[8]: https://github.com/aarongustafson/jekyll-crosspost_to_medium/pull/3
[9]: https://github.com/aarongustafson/jekyll-crosspost_to_medium
[10]: https://github.com/paulrobertlloyd/paulrobertlloyd-v3/blob/2c9a499/source/_plugins/picture.rb

*[BBC]: British Broadcasting Corporation
*[HTML]: Hypertext Markup Language
