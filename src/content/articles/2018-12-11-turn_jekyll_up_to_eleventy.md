---
title: Turn Jekyll up to Eleventy
date: 2018-12-11
canonical:
  url: https://24ways.org/2018/turn-jekyll-up-to-eleventy/
summary: I assemble a heavenly host of cherubs to sing the virtues of the Eleventy static site generator. By looking at how it compares to the familiar Ruby-based Jekyll, I may have you humming its tune for this season’s holiday projects. But will it put you on cloud eleven?
category:
- Eleventy
- Software
tags:
- source:24_ways
---
Sometimes it pays not to over complicate things. While many of the sites we use on a daily basis require relational databases to manage their content and dynamic pages to respond to user input, for smaller, simpler sites, serving pre-rendered static HTML is usually a much cheaper — and more secure — option.

The [JAMstack][1] (JavaScript, reusable APIs, and prebuilt Markup) is a popular marketing term for this way of building websites, but in some ways it’s a return to how things were in the early days of the web, before developers started tinkering with CGI scripts or Personal HomePage. Indeed, my website has always served pre-rendered HTML; first with the aid of [Movable Type][2] and more recently using [Jekyll][3], which [Anna wrote about in 2013][4].

By combining three approachable languages — Markdown for content, YAML for data and Liquid for templating — the ergonomics of Jekyll found broad appeal, influencing the design of the [many static site generators][5] that followed. But Jekyll is not without its faults. Aside from notoriously slow build times, it’s also built using Ruby. While this is an elegant programming language, it is yet another ecosystem to understand and manage, and often alongside one we already use: JavaScript. For all my time using Jekyll, I would think to myself “this, but in Node”. Thankfully, one of Santa’s elves ([Zach Leatherman][6]) granted my [Atwoodian][7] wish and placed such a static site generator under my tree.

## Introducing Eleventy

[Eleventy][8] is a more flexible alternative Jekyll. Besides being written in Node, it’s less strict about how to organise files and, in addition to Liquid, supports other templating languages like EJS, Pug, Handlebars and Nunjucks. Best of all, its build times are *significantly* faster (with [future optimisations][9] promising further gains).

As content is saved using the familiar combination of YAML front matter and Markdown, transitioning from Jekyll to Eleventy may seem like a reasonable idea. Yet as I’ve discovered, there are a few gotchas. If you’ve been considering making the switch, here are a few tips and tricks to help you on your way[^1].

Note: Throughout this article, I’ll be converting Matt Cone’s [Markdown Guide][10] site as an example. If you want to follow along, start by cloning [the git repository][11], and then change into the project directory:

```bash
git clone https://github.com/mattcone/markdown-guide.git
cd markdown-guide
```

## Before you start

If you’ve used tools like Grunt, Gulp or Webpack, you’ll be familiar with Node.js but, if you’ve been exclusively using Jekyll to compile your assets as well as generate your HTML, now’s the time to [install Node.js][12] and set up your project to work with its package manager, NPM:

1. **Install Node.js:**
   * Mac: If you haven’t already, I recommend [installing Homebrew][13], a package manager for the Mac. Then in Terminal type `brew install node`.
   * Windows: [Download the Windows installer][14] from the Node.js website and follow the instructions.
2. **Initiate NPM:** Ensure you are in the directory of your project and then type `npm init`. This command will ask you a few questions before creating a file called `package.json`. Like RubyGems’s `Gemfile`, this file contains a list of your project’s third-party dependencies.

If you’re managing your site with Git, make sure to add `node_modules` to your `.gitignore` file too. Unlike RubyGems, NPM stores its dependencies alongside your project files. This folder can get quite large, and as it contains binaries compiled to work with the host computer, it shouldn’t be version controlled. Eleventy will also honour the contents of this file, meaning anything you want Git to ignore, Eleventy will ignore too.

## Installing Eleventy

With Node.js installed and your project setup to work with NPM, we can now install Eleventy as a dependency:

`npm install --save-dev @11ty/eleventy`

If you open `package.json` you should see the following:

```json
"devDependencies": {
  "@11ty/eleventy": "^0.6.0"
}
```

We can now run Eleventy from the command line using NPM’s `npx` command. For example, to covert the `README.md` file to HTML, we can run the following:

`npx eleventy --input=README.md --formats=md`

This command will generate a rendered HTML file at `_site/README/index.html`. Like Jekyll, Eleventy shares the same default name for its output directory (`_site`), a pattern we will see repeatedly during the transition.

## Configuration

Whereas Jekyll uses the declarative YAML syntax for its configuration file, Eleventy uses JavaScript. This allows its options to be scripted, enabling some powerful possibilities as we’ll see later on.

We’ll start by creating our configuration file (`.eleventy.js`), copying the relevant settings in `_config.yml` over to their equivalent options:

```js
module.exports = function(eleventyConfig) {
  return {
    dir: {
      input: "./",      // Equivalent to Jekyll’s source property
      output: "./_site" // Equivalent to Jekyll’s destination property
    }
  };
};
```

A few other things to bear in mind:

* Whereas Jekyll allows you to list folders and files to ignore under its `exclude` property, [Eleventy looks for these values][15] inside a file called `.eleventyignore` (in addition to `.gitignore`).

* By default, Eleventy uses [markdown-it][16] to parse Markdown. If your content uses advanced syntax features (such as abbreviations, definition lists and footnotes), you’ll need to [pass Eleventy an instance of this (or another) Markdown library][17] configured with the relevant options and plugins.

## Layouts

One area Eleventy currently lacks flexibility is the location of layouts, which must reside within the `_includes` directory ([see this issue on GitHub][18].

Wanting to keep our layouts together, we’ll move them from `_layouts` to `_includes/layouts`, and then update references to incorporate the `layouts` sub-folder. We could update the `layout:` frontmatter property in each of our content files, but another option is to [create aliases][19] in Eleventy’s config:

```js
module.exports = function(eleventyConfig) {
  // Aliases are in relation to the _includes folder
  eleventyConfig.addLayoutAlias('about', 'layouts/about.html');
  eleventyConfig.addLayoutAlias('book', 'layouts/book.html');
  eleventyConfig.addLayoutAlias('default', 'layouts/default.html');

  return {
    dir: {
      input: "./",
      output: "./_site"
    }
  };
}
```

### Determining which template language to use

Eleventy will transform Markdown (`.md`) files using Liquid by default, but we’ll need to tell Eleventy how to process other files that are using Liquid templates. There are [a few ways to achieve this][20], but the easiest is to use file extensions. In our case, we have some files in our `api` folder that we want to process with Liquid and output as JSON. By appending the `.liquid` file extension (i.e. `basic-syntax.json` becomes `basic-syntax.json.liquid`), Eleventy will know what to do.

## Variables

On the surface, Jekyll and Eleventy appear broadly similar, but as each models its content and data a little differently, some template variables will need updating.

### Site variables

Alongside build settings, Jekyll let’s you store common values in its configuration file which can be accessed in our templates via the `site.*` namespace. For example, in our Markdown Guide, we have the following values:

```yaml
title: "Markdown Guide"
url: https://www.markdownguide.org
baseurl: ""
repo: http://github.com/mattcone/markdown-guide
comments: false
author:
  name: "Matt Cone"
og_locale: "en_US"
```

Eleventy’s configuration uses JavaScript which is not suited to storing values like this. However, like Jekyll, we can [use data files to store common values][21]. If we add our site-wide values to a JSON file inside a folder called `_data` and name this file `site.json`, we can keep the `site.*` namespace and leave our variables unchanged.

```json
{
  "title": "Markdown Guide",
  "url": "https://www.markdownguide.org",
  "baseurl": "",
  "repo": "http://github.com/mattcone/markdown-guide",
  "comments": false,
  "author": {
    "name": "Matt Cone"
  },
  "og_locale": "en_US"
}
```

### Page variables

The table below shows a mapping of common page variables. As a rule, frontmatter properties are accessed directly, whereas derived metadata values (things like URLs, dates etc.) get prefixed with the `page.*` namespace:

Jekyll | Eleventy
-- | --
`page.url` | `page.url`
`page.date` 	| `page.date`
`page.path	` | `page.inputPath`
`page.id	` | `page.outputPath`
`page.name` | `page.fileSlug`
`page.content` | `content`
`page.title` | `title`
`page.foobar` | `foobar`

When iterating through pages, frontmatter values are available via the `data` object while content is available via `templateContent`:

Jekyll | Eleventy
-- | --
`item.url` | `item.url`
`item.date` | `item.date`
`item.path` | `item.inputPath`
`item.name`	| `item.fileSlug`
`item.id` | `item.outputPath`
`item.content	` | `item.templateContent`
`item.title`	| `item.data.title`
`item.foobar` | `item.data.foobar`

Ideally the discrepancy between page and item variables will change in a future version ([see this GitHub issue][22]), making it easier to understand the way Eleventy structures its data.

### Pagination variables

Whereas Jekyll’s pagination feature is limited to paginating posts on one page, Eleventy allows you to [paginate any collection of documents or data][23]. Given this disparity, the changes to pagination are more significant, but this table shows a mapping of equivalent variables:

Jekyll | Eleventy
-- | --
`paginator.page` | `pagination.pageNumber`
`paginator.per_page` | `pagination.size`
`paginator.posts` | `pagination.items`
`paginator.previous_page_path` | `pagination.previousPageHref`
`paginator.next_page_path` | `pagination.nextPageHref`

## Filters

Although Jekyll uses Liquid, it [provides a set of filters][24] that are not part of the core Liquid library. There are quite a few — more than can be covered by this article — but you can replicate them by using Eleventy’s `addFilter` [configuration option][25]. Let’s convert two used by our Markdown Guide: `jsonify` and `where`.

The `jsonify` filter outputs an object or string as valid JSON. As JavaScript provides [a native JSON method][26], we can use this in our replacement filter. `addFilter` takes two arguments; the first is the name of the filter and the second is the function to which we will pass the content we want to transform:

```js
// {% raw %}{{ variable | jsonify }}{% endraw %}
eleventyConfig.addFilter('jsonify', function (variable) {
  return JSON.stringify(variable);
});
```

Jekyll’s `where` filter is a little more complicated in that it takes two additional arguments: the key to look for, and the value it should match:

```liquid
{% raw %}{{ site.members | where: "graduation_year","2014" }}{% endraw %}
```

To account for this, instead of passing one value to the second argument of `addFilter`, we can instead pass three: the `array` we want to examine, the `key` we want to look for and the `value` it should match:

```js
// {% raw %}{{ array | where: key,value }}{% endraw %}
eleventyConfig.addFilter('where', function (array, key, value) {
  return array.filter(item => {
    const keys = key.split('.');
    const reducedKey = keys.reduce((object, key) => {
      return object[key];
    }, item);

    return (reducedKey === value ? item : false);
  });
});
```

There’s quite a bit going on within this filter, but I’ll try to explain. Essentially we’re examining each `item` in our `array`, [reducing][27] `key` (passed as a string using dot notation) so that it can be parsed correctly (as an object reference) before comparing its value to `value`. If it matches, `item` remains in the returned array, else it’s removed. Phew!

## Includes

As with filters, [Jekyll provides a set of tags][28] that aren’t strictly part of Liquid either. This includes one of the most useful, the `include` tag. [LiquidJS][29], the library Eleventy uses, does provide an  `include` tag, but one using the slightly different [syntax defined by Shopify][30]. If you’re not passing variables to your includes, everything should work without modification. Otherwise, note that whereas with Jekyll you would do this:

```html
<!-- page.html -->
{% raw %}{% render include.html value="key" %}{% endraw %}

<!-- include.html -->
{% raw %}{{ include.value }}{% endraw %}
```

in Eleventy, you would do this:

```html
<!-- page.html -->
{% raw %}{% render "include.html", value: "key" %}{% endraw %}

<!-- include.html -->
{% raw %}{{ value }}{% endraw %}
```

A downside of Shopify’s syntax is that variable assignments are no longer scoped to the include and can therefore leak; keep this in mind when converting your templates as you may need to make further adjustments.

### Tweaking Liquid

You may have noticed in the above example that LiquidJS expects the names of included files to be quoted (else it treats them as variables). We could update our templates to add quotes around file names (the recommended approach), but we could also disable this behaviour by setting LiquidJS’s `dynamicPartials` option to `false`. Additionally, Eleventy doesn’t support the `include_relative` tag, meaning you can’t include files relative to the current document. However, LiquidJS does let us define multiple paths to look for included files via its `root` option.

Thankfully, Eleventy allows us to [pass options to LiquidJS][31]:

```js
eleventyConfig.setLiquidOptions({
  dynamicPartials: false,
  root: [
    '_includes',
    '.'
  ]
});
```

## Collections

[Jekyll’s collections feature][32] lets authors create arbitrary collections of documents beyond pages and posts. [Eleventy provides a similar feature][33], but in a far more powerful way.

### Collections in Jekyll

In Jekyll, creating collections requires you to add the name of your collections to `_config.yml` and create corresponding folders in your project. Our Markdown Guide has two collections:

```yaml
collections:
  - basic-syntax
  - extended-syntax
```

These correspond to the folders `_basic-syntax` and `_extended-syntax` whose content we can iterate over like so:

```liquid
{% raw %}{% for syntax in site.extended-syntax %}
  {{ syntax.title }}
{% endfor %}{% endraw %}
```

### Collections in Eleventy

There are two ways you can set up collections in 11ty. The first, and most straightforward, is to use the `tag` property in content files:

```yaml
---
title: "Strikethrough"
syntax-id: "strikethrough"
syntax-summary: "~~The world is flat.~~"
tags: extended-syntax
---
```

We can then iterate over tagged content like this:

```liquid
{% raw %}{% for syntax in collections.extended-syntax %}
  {{ syntax.data.title }}
{% endfor %}{% endraw %}
```

Eleventy also allows us to configure collections programmatically. For example, instead of using tags, we can search for files using a glob pattern (a way of specifying a set of filenames to search for using wildcard characters):

```js
eleventyConfig.addCollection('basic-syntax', collection => {
  return collection.getFilteredByGlob('_basic-syntax/*.md');
});

eleventyConfig.addCollection('extended-syntax', collection => {
  return collection.getFilteredByGlob('_extended-syntax/*.md');
});
```

We can extend this further. For example, say we wanted to sort a collection by the `display_order` property in our document’s frontmatter. We could take the results of `collection.getFilteredByGlob` and then use [JavaScript’s `sort` method][34] to sort the result:

```js
eleventyConfig.addCollection('example', collection => {
  return collection.getFilteredByGlob('_examples/*.md').sort((a, b) => {
    return a.data.display_order - b.data.display_order;
  });
});
```

Hopefully, this gives you just a hint of [what’s possible using this approach][35].

## Using directory data to manage defaults

By default, Eleventy will maintain the structure of your content files when generating your site. In our case, that means `/_basic-syntax/lists.md` is generated as `/_basic-syntax/lists/index.html`. Like Jekyll, we can [change where files are saved][36] using the `permalink` property. For example, if we want the URL for this page to be `/basic-syntax/lists.html` we can add the following:

```yaml
---
title: "Lists"
syntax-id: "lists"
api: "no"
permalink: /basic-syntax/lists.html
---
```

Again, this is probably not something we want to manage on a file-by-file basis but again, Eleventy has features that can help: [directory data][37] and [permalink variables][38].

For example, to achieve the above for all content stored in the `_basic-syntax` folder, we can create a JSON file that shares the name of that folder and sits inside it, i.e. `_basic-syntax/_basic-syntax.json` and set our default values. For permalinks, we can use Liquid templating to construct our desired path:

```json
{
  "layout": "syntax",
  "tag": "basic-syntax",
  "permalink": "basic-syntax/{% raw %}{{ title | slug }}{% endraw %}.html"
}
```

However, Markdown Guide doesn’t publish syntax examples at individual permanent URLs, it merely uses content files to store data. So let’s change things around a little. No longer tied to Jekyll’s rules about where collection folders should be saved and how they should be labelled, we’ll move them into a folder called `_content`:

```bash
markdown-guide
└── _content
    ├── basic-syntax
    ├── extended-syntax
    ├── getting-started
    └── _content.json
```

We will also add a directory data file (`_content.json`) inside this folder. As directory data is applied recursively, setting `permalink` to `false` will mean all content in this folder and its children will no longer be published:

```json
{
  "permalink": false
}
```

## Static files

Eleventy only transforms files whose template language it’s familiar with. But often we may have static assets that don’t need converting, but do need copying to the destination directory. For this, we can use [pass-through file copy][39]. In our configuration file, we tell Eleventy what folders/files to copy with the `addPassthroughCopy` option. Then in the return statement, we enable this feature by setting `passthroughFileCopy` to `true`:

```js
module.exports = function(eleventyConfig) {
  …

  // Copy the `assets` directory to the compiled site folder
  eleventyConfig.addPassthroughCopy('assets');

  return {
    dir: {
      input: "./",
      output: "./_site"
    },
    passthroughFileCopy: true
  };
}
```

## Final considerations

### Assets

Unlike Jekyll, Eleventy provides no support for asset compilation or bundling scripts — we have plenty of choices in that department already. If you’ve been using Jekyll to compile Sass files into CSS, or CoffeeScript into Javascript, you will need to research alternative options, options which are beyond the scope of this article, sadly.

### Publishing to GitHub Pages

One of the benefits of Jekyll is its [deep integration with GitHub Pages][40]. To publish an Eleventy generated site — or any site not built with Jekyll — to GitHub Pages can be quite involved, but typically involves [copying the generated site to the `gh-pages` branch][41] or [including that branch as a submodule][42]. Alternatively, you could use a continuous integration service like [Travis][43] or [CircleCI][44] and push the generated site to your web server. It’s enough to make your head spin! Perhaps for this reason, a number of specialised static site hosts have emerged such as [Netlify][45] and [Google Firebase][46]. But remember; you can publish a static site almost anywhere!

* * *

## Going one louder

If you’ve been considering making the switch, I hope this brief overview has been helpful. But it also serves as a reminder why it can be prudent to avoid jumping aboard bandwagons.

While it’s fun to try new software and emerging technologies, doing so can require a lot of work and compromise. For all of Eleventy’s appeal, it’s only a year old so has little in the way of an ecosystem of plugins or themes. It also only has one maintainer. Jekyll on the other hand is a mature project with a large community of maintainers and contributors supporting it.

I moved my site to Eleventy because the slowness and inflexibility of Jekyll was preventing me from doing the things I wanted to do. But I also had time to invest in the transition. After reading this guide, and considering the specific requirements of your project, you may decide to stick with Jekyll, especially if the output will essentially stay the same. And that’s perfectly fine!

But [these go to 11][47].

[^1]: Information provided is correct as of Eleventy v0.6.0 and Jekyll v3.8.5

[1]: https://jamstack.org
[2]: https://movabletype.org
[3]: https://jekyllrb.com
[4]: https://24ways.org/2013/get-started-with-github-pages/
[5]: https://www.staticgen.com
[6]: https://www.zachleat.com
[7]: https://blog.codinghorror.com/the-principle-of-least-power/
[8]: https://www.11ty.io
[9]: https://github.com/11ty/eleventy/issues/56
[10]: https://www.markdownguide.org
[11]: https://github.com/mattcone/markdown-guide
[12]: https://nodejs.org
[13]: https://brew.sh
[14]: https://nodejs.org/en/download/
[15]: https://www.11ty.io/docs/ignores/
[16]: https://github.com/markdown-it/markdown-it
[17]: https://www.11ty.io/docs/languages/markdown/
[18]: https://github.com/11ty/eleventy/issues/137
[19]: https://www.11ty.io/docs/layouts/#layout-aliasing
[20]: https://www.11ty.io/docs/languages/#overriding-the-template-language
[21]: https://www.11ty.io/docs/data-global/
[22]: https://github.com/11ty/eleventy/issues/338
[23]: https://www.11ty.io/docs/pagination/
[24]: https://jekyllrb.com/docs/liquid/filters/
[25]: https://www.11ty.io/docs/filters/
[26]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
[27]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
[28]: https://jekyllrb.com/docs/liquid/tags/
[29]: https://github.com/harttle/liquidjs
[30]: https://help.shopify.com/en/themes/liquid/tags/theme-tags#include
[31]: https://www.11ty.io/docs/languages/liquid/
[32]: https://jekyllrb.com/docs/collections/
[33]: https://www.11ty.io/docs/collections/
[34]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
[35]: https://www.11ty.io/docs/collections/#collection-api-methods
[36]: https://www.11ty.io/docs/permalinks/
[37]: https://www.11ty.io/docs/data-template-dir/
[38]: https://www.11ty.io/docs/permalinks/#use-data-variables-in-permalink
[39]: https://www.11ty.io/docs/copy/
[40]: https://jekyllrb.com/docs/github-pages/
[41]: https://github.com/tschaub/gh-pages
[42]: https://blog.revathskumar.com/2014/07/publish-github-pages-using-git-submodules.html
[43]: https://travis-ci.com
[44]: https://circleci.com
[45]: https://www.netlify.com
[46]: https://firebase.google.com/products/hosting/
[47]: https://www.11ty.io/docs/#sites-using-eleventy
