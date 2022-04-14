---
title: "Write documentation using Markdown and publish it using GOV.UK styles"
date: 2022-04-04T13:30:00+01:00
canonical:
  url: https://x-govuk.github.io/posts/govuk-eleventy-plugin/
summary: The GOV.UK Eleventy Plugin makes it easy to start writing documentation rather than spend time building a website for it.
photo:
  url: /articles/2022/04/govuk_eleventy_plugin/image.png
  alt: The homepage illustration for the GOV.UK Eleventy Plugin.
category:
  - Design
  - Web
accentColor: "#28a"
---

![The homepage illustration for the GOV.UK Eleventy Plugin.](image.png)

Back in 2018, the Becoming a teacher team at the Department for Education wanted to [document the design evolution of the services they were building](https://design-history.herokuapp.com/keeping-a-design-history/). A small website was built using the [GOV.UK Prototype Kit](https://govuk-prototype-kit.herokuapp.com/docs), but this soon became difficult to manage as more people joined the team and wanted to write posts.

Looking for alternatives, the team chose [Eleventy](https://11ty.dev), a static website generator developed by Zach Leatherman[^1]. Like the Prototype Kit, it uses Node.js, yet is designed around organising and publishing content-focused websites.

This includes support for [Markdown](https://www.markdownguide.org), a lightweight markup language for formatting plain text documents. Posts can incorporate metadata like publication dates and authors, and be organised into different collections.

With this foundation in place, [the design history](https://bat-design-history.netlify.app/) grew to over 500 posts written by more than 20 authors. In 2020 we made this tool available as [a template repository on GitHub](https://github.com/x-govuk/govuk-design-history) so that other teams could quickly begin writing their own design histories. The tool has since been adopted by other teams, both inside the Department for Education and across government.

However, as the number of websites using this template has grown, the harder it has become to share improvements. Abstracting the common parts into an npm module makes it easier for us to do this.

## A plugin for Eleventy

The [GOV.UK Eleventy Plugin](https://x-govuk.github.io/govuk-eleventy-plugin/) makes it easy to start writing documentation rather than spend time building a website for it.

It does this by providing [a set of layouts](https://x-govuk.github.io/govuk-eleventy-plugin/layouts/) for different content types and uses [typography classes from the GOV.UK Design System](https://design-system.service.gov.uk/styles/typography/) to ensure documents look familiar to users of other GOV.UK services. (This is achieved via [a plugin for markdown-it](https://github.com/x-govuk/markdown-it-govuk), which can be used on other projects if desired).

Markdown written using [an extended syntax](https://x-govuk.github.io/govuk-eleventy-plugin/markdown-advanced/) is also supported, meaning authors can easily include tables, abbreviations, footnotes and code examples in their posts, too.

Knowing that teams often need to write documentation for internal users, or build websites that don't meet [the criteria for using the GOV.UK logo and GDS Transport typeface](https://www.gov.uk/service-manual/design/making-your-service-look-like-govuk), the plugin enables the following to be customised:

- Organisation name and logo
- Font family
- Brand colour
- Licence and copyright information
- Site icons and Open Graph share images

![Examples of customised websites using the plugin.](customisation_examples.png "Examples of customised websites using the plugin.")

## Get started

The plugin is already being used by different teams across government who have built marketing pages, blogs, glossaries – and design histories, of course.

One of the benefits of static websites is they don't need a database, which means they can be hosted pretty much anywhere. Popular platforms for hosting static websites include [GitHub Pages](https://pages.github.com) and [Netlify](https://www.netlify.com).

Get started with the plugin by following the [instructions on the documentation website](https://x-govuk.github.io/govuk-eleventy-plugin/get-started). This project [is open source](https://github.com/x-govuk/govuk-eleventy-plugin) and contributions are welcome. If you come across an issue or have an idea for a feature, please [submit an issue](https://github.com/x-govuk/govuk-eleventy-plugin/issues). We're excited to see how you use this tool.

[^1]: If you're wondering, the possum tied to a red balloon is Eleventy's mascot. The [illustration is by Geri Coady](https://www.11ty.dev/blog/new-mascot-from-geri-coady/).
