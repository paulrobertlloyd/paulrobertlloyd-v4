---
title: Naming Things
date: 2014-12-21
canonical:
  url: https://24ways.org/2014/naming-things/
summary: I perch my partridge in the CSS pear tree to discuss naming methodologies, ontologies and semantics. What’s in a name? That which we call a cherub by any other name would smell as sweet.
category:
  - Programming
  - Web
tags:
  - source:24_ways
---
> There are only two hard things in computer science: cache invalidation and naming things.
— Phil Karlton

Being a professional web developer means taking responsibility for the code you write and ensuring it is comprehensible to others. Having a documented code style is one means of achieving this, although the size and type of project you’re working on will dictate the conventions used and how rigorously they are enforced.

Working in-house may mean working with multiple developers, perhaps in distributed teams, who are all committing changes — possibly to a significant codebase — at the same time. Left unchecked, this codebase can become unwieldy. Coding conventions ensure everyone can contribute, and help build a product that works as a coherent whole.

Even on smaller projects, perhaps working within an agency or by yourself, at some point the resulting product will need to be handed over to a third party. It’s sensible, therefore, to ensure that your code can be understood by those who’ll eventually take ownership of it.

Put simply, code is read more often than it is written or changed. A consistent and predictable naming scheme can make code easier for other developers to understand, improve and maintain, presumably leaving them free to worry about cache invalidation.

## Let’s talk about semantics

Names not only allow us to identify objects, but they can also help us describe the objects being identified.

Semantics (the meaning or interpretation of words) is the cornerstone of standards-based web development. Using appropriate HTML elements allows us to create documents and applications that have implicit structural meaning. Thanks to HTML5, the vocabulary we can choose from has grown even larger.

HTML elements provide one level of meaning: a widely accepted description of a document’s underlying structure. It’s only with the mutual agreement of browser vendors and developers that `<p>` indicates a paragraph.

Yet (with the exception of widely accepted microdata and microformat schemas) only HTML elements convey any meaning that can be parsed consistently by user agents. While using semantic values for class names is a noble endeavour, they provide no additional information to the visitor of a website; take them away and a document will have exactly the same semantic value.

I didn’t always think this was the case, but the real world has a habit of changing your opinion. Much of my thinking around semantics has been informed by the writing of my peers. In [About HTML semantics and front-end architecture][1], Nicholas Gallagher wrote:

> The important thing for class name semantics in non-trivial applications is that they be driven by pragmatism and best serve their primary purpose — providing meaningful, flexible, and reusable presentational/behavioural hooks for *developers* to use.

These thoughts are echoed by Harry Roberts in his [CSS Guidelines][2]

> The debate surrounding semantics has raged for years, but it is important that we adopt a more pragmatic, sensible approach to naming things in order to work more efficiently and effectively. Instead of focussing on ‘semantics’, look more closely at sensibility and longevity — choose names based on ease of maintenance, not for their perceived meaning.

## Naming methodologies

Front-end development has undergone a revolution in recent years. As the projects we’ve worked on have grown larger and more important, our development practices have matured. The pros and cons of object-orientated approaches to CSS can be endlessly debated, yet their introduction has highlighted the usefulness of having documented naming schemes.

Jonathan Snook’s [SMACSS][3] (Scalable and Modular Architecture for CSS) collects style rules into five categories: base, layout, module, state and theme. This grouping makes it clear what each rule does, and is aided by a [naming convention][4]:

> By separating rules into the five categories, naming convention is beneficial for immediately understanding which category a particular style belongs to and its role within the overall scope of the page. On large projects, it is more likely to have styles broken up across multiple files. In these cases, naming convention also makes it easier to find which file a style belongs to.

I like to use a prefix to differentiate between layout, state and module rules. For layout, I use `l-` but `layout-` would work just as well. Using prefixes like `grid-` also provide enough clarity to separate layout styles from other styles. For state rules, I like `is-` as in `is-hidden` or `is-collapsed`. This helps describe things in a very readable way.

SMACSS is more a set of suggestions than a rigid framework, so its ideas can be incorporated into your own practice. Nicholas Gallagher’s [SUIT CSS][5] project is far more strict in [its naming conventions][6]:

> SUIT CSS relies on *structured class names* and *meaningful hyphens* (i.e., not using hyphens merely to separate words). This helps to work around the current limits of applying CSS to the DOM (i.e., the lack of style encapsulation), and to better communicate the relationships between classes.

Over the last year, I’ve favoured [a BEM-inspired approach to CSS][7]. BEM stands for *block, element, modifier*, which describes the three types of rule that contribute to the style of a single component. This means that, given the following markup:

```html
<ul class="sleigh">
  <li class="sleigh__reindeer sleigh__reindeer––famous">Rudolph</li>
  <li class="sleigh__reindeer">Dasher</li>
  <li class="sleigh__reindeer">Dancer</li>
  <li class="sleigh__reindeer">Prancer</li>
  <li class="sleigh__reindeer">Vixen</li>
  <li class="sleigh__reindeer">Comet</li>
  <li class="sleigh__reindeer">Cupid</li>
  <li class="sleigh__reindeer">Dunder</li>
  <li class="sleigh__reindeer">Blixem</li>
</ul>
```

I know that:

* `.sleigh` is a containing *block* or component.
* `.sleigh__reindeer` is used only as a descendent *element* of `.sleigh`.
* `.sleigh__reindeer––famous` is used only as a *modifier* of `.sleigh__reindeer`.

With this naming scheme in place, I know which styles relate to a particular component, and which are shared. Beyond reducing specificity-related head-scratching, this approach has given me a framework within which I can consistently label items, and has sped up my workflow considerably.

Each of these methodologies shows that any robust CSS naming convention will have clear rules around case (lowercase, camelCase, PascalCase) and the use of special ([allowed][8]) characters like hyphens and underscores.

## What makes for a good name?

Regardless of higher-level conventions, there’s no getting away from the fact that, at some point, we’re still going to have to name things. Recognising that classes should be named with other developers in mind, what makes for a good name?

### Understandable

The most important aspect is for a name to be understandable. Words used in your project may come from a variety of sources: some may be widely understood, and others only be recognised by people working within a particular environment.

* **Culture**
  Most words you’ll choose will have common currency outside the world of web development, although they may have a particular interpretation among developers (think *menu*, *list*, *input*). However, words may have a narrower cultural significance; for example, in Germany and other German-speaking countries, *impressum* is the term used for legally mandated statements of ownership.

* **Industry**
  Industries often use specific terms to describe common business practices and concepts. Publishing has [a number of these][9] (*headline*, *standfirst*, *masthead*, *colophon*…) all have well understood meanings — and not all of them are relevant to online usage.

* **Organisation**
  Companies may have internal names (or nicknames) for their products and services. ""The Guardian"" is rife with such names: [*bisons*][10]: (and *buffalos*), *pixies* (and *super-pixies*), *bentos* (and *mini-bentos*)… all of which mean something very different outside the organisation. Although such names can be useful inside smaller teams, in larger organisations they can become a barrier to entry, a sort of secret code used among employees who have been around long enough to know what they mean.

* **Product**
  Your team will undoubtedly have created names for specific features or interface components used in your product. For example, at Clearleft we coined the term *gravigation* for a navigation bar that was pinned to the bottom of the viewport. Elements of a visual design language may have names, too. Transport for London’s bar and circle logo is known internally as the [*roundel*][11], while Nike’s logo is called the [*swoosh*][12]. Branding agencies often christen colours within a brand palette, too, either to evoke aspects of the identity or to indicate intended usage.

Once you recognise the origin of the words you use, you’ll be better able to judge their appropriateness. Using Latin words for class names may satisfy a need to use semantic-sounding terms but, unless you work in a company whose employees have a basic grasp of Latin, a degree of translation will be required. Military ranks might be a clever way of declaring sizes without implying actual values, but I’d venture most people outside the armed forces don’t know how they’re ordered.

### Obvious

Quite often, the first name that comes into your head will be the best option. Names that obliquely reference the function of a class (e.g. *receptacle* instead of *container*, *kevlar* instead of *no-bullets*) only serve to add an additional layer of abstraction. Don’t overthink it!

One way of knowing if the names you use are well understood is to look at what similar concepts are called in existing vocabularies. [schema.org][13], [Dublin Core][14] and the [BBC’s ontologies][15] are all useful sources for object names.

### Functional

While we’ve learned to avoid using presentational classes, there remains a tension between naming things based on their content, and naming them for their intended presentation or behaviour (which may change at different breakpoints). Rather than think about a component’s appearance or behaviour, instead look to its function, its purpose. To clarify, ask what a component’s function is, and not how the component functions.

For example, ""The Guardian""’s internal content system uses the following names for different types of image placement: *supporting*, *showcase* and *thumbnail*, with *inline* being the default. These options make no promise of the resulting position on a webpage (or smartphone app, or television screen…), but do suggest intended use, and therefore imply the likely presentation.

### Consistent

Being consistent in your approach to names will allow for easier naming of successive components, and extending the vocabulary when necessary. For example, a predictably named hierarchy might use names like *primary* and *secondary*. Should another level need to be added, *tertiary* is clearly be preferred over *third*.

### Appropriate

Your project will feature a mix of style rules. Some will perform utility functions (clearing floats, removing bullets from a list, reseting margins), while others will perform specific functions used only once or twice in a project. Names should reflect this. For commonly used classes, be generic; for unique components be more specific.

It’s also worth remembering that you can use multiple classes on an element, so combining both generic and specific can give you a powerful modular design system:

* Generic: `list`
* Specific: `naughty-children`
* Combined: `naughty-children list`

If following the BEM methodology, you might use the following classes:

* Generic: `list`
* Specific: `list--nice-children`
* Combined: `list list--nice-children`

### Extensible

Good naming schemes can be extended. One way of achieving this is to use namespaces, which are basically a way of grouping related names under a higher-level term.

Microformats are a good example of a well-designed naming scheme, with many of its vocabularies taking property names from existing and related specifications (e.g. hCard is a 1:1 representation of vCard). [Microformats 2][16] goes one step further by grouping properties under several namespaces:

* `h-*` for root class names (e.g. `h-card`)
* `p-*` for simple (text) properties (e.g. `p-name`)
* `u-*` for URL properties (e.g. `u-photo`)
* `dt-*` for date/time properties (e.g. `dt-bday`)
* `e-*` for embedded markup properties (e.g. `e-note`)

The inclusion of namespaces is a massive improvement over the earlier specification, but the downside is that microformats now occupy five separate namespaces. This might be problematic if you are using `u-*` for your utility classes. While nothing will break, your naming system won’t be as robust, so plan accordingly.

(Note: Microformats perform a very specific function, separate from any presentational concerns. It’s therefore considered best practice to not use microformat classes as styling hooks, but instead use additional classes that relate to the function of the component and adhere to your own naming conventions.)

### Short

Names should be as long as required, but no longer. When looking for words to describe a particular function, I try to look for single words where possible. Avoid abbreviations unless they are understood within the contexts described above. *rrp* is fine if labelling a recommended retail price in an online shop, but not very helpful if used to mean ragged-right paragraph, for example.

### Fun!

Finally, names can be an opportunity to have some fun! Names can give character to a project, be it by providing an outlet for in-jokes or adding little easter eggs for those inclined to look.

The copyright statement on Apple’s website has long been named *sosumi*, a word that has [a nice little history inside Apple][17]. Until recently, the hamburger menu icon on ""The Guardian"" website was labelled *honest-burger*, after the developer’s favourite burger restaurant.

## A few thoughts on preprocessors

CSS preprocessors have solved a lot of problems, but they have an unfortunate downside: they require you to name yet more things! Whereas we needed to worry only about style rules, now we need names for variables, mixins, functions… oh my!

A second article could be written about naming these, so for now I’ll offer just a few thoughts. The first is to note that preprocessors make it easier to change things, as they allow for [DRY][18]er code. So while the names of variables are important (and the advice in this article still very much applies), you can afford to relax a little.

Looking to name colour variables? If possible, find out if colours have been assigned names in a brand palette. If not, use obvious names ([based on appearance][19] or function, depending on your preference) and adapt as the palette grows. If it becomes difficult to name colours that are too similar, I’d venture that the problem lies with the design rather than the naming scheme.

The same is true for responsive breakpoints. Preprocessors allow you to move awkward naming conventions out of the markup and into the CSS. Although terms like *mobile*, *tablet* and *desktop* are not desirable given the need to think about device-agnostic design, if these terms are widely understood within a product team and among stakeholders, using them will ensure everyone is using the same language (they can always be changed later).

It still feels like we’re at the very beginning of understanding how preprocessors fit into a development workflow, if at all! I suspect over the next few years, best practices will emerge for all of these considerations. In the meantime, use your brain!

***

Even with sensible rules and conventions in place, naming things can remain difficult, but hopefully I’ve made this exercise a little less painful. Christmas is a time of giving, so to the developer reading your code in a year’s time, why not make your gift one of clearer class names.

[1]: http://nicolasgallagher.com/about-html-semantics-front-end-architecture/
[2]: https://cssguidelin.es/#naming
[3]: https://smacss.com/
[4]: https://smacss.com/book/categorizing
[5]: https://github.com/suitcss/
[6]: https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md
[7]: https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/
[8]: http://www.w3.org/TR/CSS2/syndata.html#characters
[9]: https://en.wikipedia.org/wiki/Category:Publishing_terms
[10]: http://next.theguardian.com/blog/bison/
[11]: http://www.tfl.gov.uk/corporate/about-tfl/culture-and-heritage/art-and-design/the-roundel
[12]: http://www.wikiwand.com/en/Swoosh
[13]: https://schema.org/
[14]: http://dublincore.org/documents/usageguide/elements.shtml
[15]: https://www.bbc.co.uk/ontologies
[16]: http://microformats.org/wiki/microformats2
[17]: http://www.wikiwand.com/en/Sosumi
[18]: http://www.wikiwand.com/en/Don%27t_repeat_yourself
[19]: http://chir.ag/projects/name-that-color/

*[BBC]: British Broadcasting Corporation
*[BEM]: block, element, modifier
*[CSS]: Cascading Style Sheets
*[DRY]: Don’t repeat yourself
*[HTML]: Hypertext Markup Language
