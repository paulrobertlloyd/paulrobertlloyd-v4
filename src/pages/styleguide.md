---
eleventyExcludeFromCollections: true
layout: page
permalink: styleguide/
title: Styleguide
summary: An overview of the typographic and layout styles available for content pages
---
The content on this page lies within the `.s-linear` scope[^1].

## Second-level heading

Main page headings are `h1` elements, so further headings within this scope should start with `h2`, an example of which appears directly above. More than one may be used per page. Consider using an `h2` unless you need a header level of less importance, or as a sub-header to an existing `h2` element.

### Third-level heading

The header above is an `h3` element, which may be used for any form of page-level header which falls below the `h2` header in a document hierarchy.

#### Fourth-level heading

The header above is an `h4` element, which may be used for any form of page-level header which falls below the `h3` header in a document hierarchy.

## Grouping content

### Paragraphs

All paragraphs are wrapped in `p` tags.

### Horizontal rule

The `hr` element represents a paragraph-level thematic break, e.g. a scene change in a story, or a transition to another topic within a section of a reference book. The following extract from <cite>Pandora’s Star</cite> by Peter F. Hamilton shows two paragraphs that precede a scene change and the paragraph that follows it:

Dudley was ninety-two, in his second life, and fast approaching time for another rejuvenation. Despite his body having the physical age of a standard fifty-year-old, the prospect of a long degrading campaign within academia was one he regarded with dread. For a supposedly advanced civilization, the Intersolar Commonwealth could be appallingly backward at times, not to mention cruel.

*Maybe it won’t be that bad*, he told himself. The lie was comforting enough to get him through the rest of the night’s shift.

***

The Carlton AllLander drove Dudley home just after dawn. Like the astronomer, the vehicle was old and worn, but perfectly capable of doing its job. It had a cheap diesel engine, common enough on a semi-frontier world like Gralmond, although its drive array was a thoroughly modern photoneural processor. With its high suspension and deep-tread tyres it could plough along the dirt track to the observatory in all weather and seasons, including the metre-deep snow of Gralmond’s winters.

### Pre-formatted text

The `pre` element represents a block of pre-formatted text, in which structure is represented by typographic conventions rather than by elements. Such examples are an e-mail (with paragraphs indicated by blank lines, lists indicated by lines prefixed with a bullet), fragments of computer code (with structure indicated according to the conventions of that language) or displaying ASCII art. Here’s an example showing the printable characters of ASCII:

```asciidoc
  ! " # $ % & ' ( ) * + , - . /
0 1 2 3 4 5 6 7 8 9 : ; < = > ?
@ A B C D E F G H I J K L M N O
P Q R S T U V W X Y Z [ \ ] ^ _
` a b c d e f g h i j k l m n o
p q r s t u v w x y z { | } ~
```

### Blockquotes

The `blockquote` element represents a section that is being quoted from another source.

> Big Yellow Taxi there by Joni Mitchell, a song in which she complains that they “paved paradise to put up a parking lot” – a measure which actually would have alleviated traffic congestion on the outskirts of paradise. Something which Joni singularly fails to point out, perhaps because it doesn’t quite fit in with her blinkered view of the world.
>
> Nevertheless, nice song.

If you wish to add a citation, enclose it within a `<figure>` tag:

> Many forms of Government have been tried, and will be tried in this world of sin and woe. No one pretends that democracy is perfect or all-wise. Indeed, it has been said that democracy is the worst form of government except all those other forms that have been tried from time to time.
— Winston Churchill, in <cite>[a speech to the House of Commons](https://hansard.parliament.uk/Commons/1947-11-11/debates/ab1e1152-6b4a-4d04-ac38-954df6634b08/ParliamentBill#207)</cite>. 11th November 1947

### Ordered list

The `ol` element denotes an ordered list, and various numbering schemes are available through the CSS (including 1,2,3... a,b,c... i,ii,iii... and so on). Each item requires a surrounding `<li>` and `</li>` tag, to denote individual items within the list (as you may have guessed, `li` stands for list item).

  1. This is an ordered list.
  2. This is the second item, which contains a sub list
     1. This is the sub list, which is also ordered.
     2. It has two items.
  3. This is the final item on this list.

### Unordered list

The `ul` element denotes an unordered list (ie. a list of loose items that don’t require numbering, or a bulleted list). Again, each item requires a surrounding `<li>` and `</li>` tag, to denote individual items. Here is an example list showing the constituent parts of the British Isles:

* United Kingdom of Great Britain and Northern Ireland:
  * England
  * Scotland
  * Wales
  * Northern Ireland
* Republic of Ireland
* Isle of Man
* Channel Islands:
  * Bailiwick of Guernsey
  * Bailiwick of Jersey

Sometimes we may want each list item to contain block elements, typically a paragraph or two:

* The British Isles is an archipelago consisting of the two large islands of Great Britain and Ireland, and many smaller surrounding islands.

* Great Britain is the largest island of the archipelago. Ireland is the second largest island of the archipelago and lies directly to the west of Great Britain.

* The full list of islands in the British Isles includes over 1,000 islands, of which 51 have an area larger than 20 km<sup>2</sup>.

### Definition list

he `dl` element is for another type of list called a definition list. Instead of list items, the content of a `dl` consists of `dt` (definition term) and `dd` (definition description) pairs. Though it may be called a "definition list", `dl` can apply to other scenarios where a parent/child relationship is applicable. For example, it may be used for marking up dialogues, with each `dt` naming a speaker, and each `dd` containing his or her words.

This is a term.
: This is the definition of that term, which both live in a `dl`.

Here is another term.
: And it gets a definition too, which is this line.

### Figures

The `figure` element is used to annotate illustrations, diagrams, photos, code listings or provide a citation for an excerpted piece of content. The following examples show a section of pre-formatted text, a quotation and an image:

![Photo taken during my drive on the Wild Atlantic Way.](/articles/2017/05/away_to_galway/wild_atlantic_way.jpg 'Single image, with supporting caption.')

For figures using the `.align-bleed` modifier, the content will stretch across the entire width of the page.

![Photo of Salthill Diving Tower.](/articles/2017/05/away_to_galway/salthill_diving_tower.jpg 'Single image, with supporting caption.')
{.align-bleed}

![Photo of Roundstone Quay.](/articles/2017/05/away_to_galway/roundstone_quay.jpg 'Single image, with supporting caption.')
{.align-pull}

For figures using the `.align-pull` utility, the content will be floated to the right side of the page.

## Text-level semantics

There are a number of inline HTML elements you may use anywhere within other elements.

### Links and anchors

The `a` element is used to hyperlink text, be that to another page, a named fragment on the current page or any other location on the web. Example:

[Go to the home page](/).

### Stressed emphasis

The `em` element is used to denote text with stressed emphasis, i.e., something you’d pronounce differently. Where italicising is required for stylistic differentiation, the `i` element may be preferable. Example:

You simply *must* try the negitoro maki!

### Strong importance

The `strong` element is used to denote text with strong importance. Where bolding is used for stylistic differentiation, the `b` element may be preferable. Example:

**Don’t** stick nails in the electrical outlet.

### Small print

The `small` element is used to represent disclaimers, caveats, legal restrictions, or copyrights (commonly referred to as small print). It can also be used for attributions or satisfying licensing requirements. Example:

<small>Copyright © 1922-2011 Acme Corporation. All Rights Reserved.</small>

### Strikethrough

The `s` element is used to represent content that is no longer accurate or relevant. When indicating document edits i.e., marking a span of text as having been removed from a document, use the `del` element instead. Example:

<s>Recommended retail price: £3.99 per bottle</s>
**Now selling for just £2.99 a bottle!**

### Citations

The `cite` element is used to represent the title of a work (e.g. a book, essay, poem, song, film, TV show, sculpture, painting, musical, exhibition, etc). This can be a work that is being quoted or referenced in detail (i.e. a citation), or it can just be a work that is mentioned in passing. Example:

<cite>Universal Declaration of Human Rights</cite>, United Nations, December 1948. Adopted by General Assembly resolution 217 A (III).

### Inline quotes

The `q` element is used for quoting text inline. Example showing nested quotations:

John said, <q>I saw Lucy at lunch, she told me <q>Mary wants you to get some ice cream on your way home</q>. I think I will get some at Ben and Jerry’s, on Gloucester Road.</q>

### Definition

The `dfn` element is used to highlight the first use of a term. The `title` attribute can be used to describe the term. Example:

Bob’s <dfn title="Dog">canine</dfn> mother and <dfn title="Horse">equine</dfn> father sat him down and carefully explained that he was an <dfn title="A mutation that combines two or more sets of chromosomes from different species">allopolyploid</dfn> organism.

### Abbreviation

The `abbr` element is used for any abbreviated text, whether it be acronym, initialism, or otherwise. Any text in the `title` attribute will appear when the user’s mouse hovers the abbreviation. Example abbreviations:

BBC, HTML, and Staffs.

### Time

The `time` element is used to represent either a time on a 24 hour clock, or a precise date in the proleptic Gregorian calendar, optionally with a time and a time-zone offset. Example:

Queen Elizabeth II was proclaimed sovereign of each of the Commonwealth realms on <time datetime="1952-02-6">6</time> and <time datetime="1952-02-7">7 February 1952</time>, after the death of her father, King George VI.

### Code

The `code` element is used to represent fragments of computer code. Useful for technology-oriented sites, not so useful otherwise. Example:

When you call the `activate()` method on the `robotSnowman` object, the eyes glow.

The following exampes shows the `code` element used in conjunction with the `pre` element (with the applicable syntax highlighting applied automatically):

```js
console.log('Hello World!');
```

### Variable

The `var` element is used to denote a variable in a mathematical expression or programming context, but can also be used to indicate a placeholder where the contents should be replaced with your own value. Example:

If there are <var>n</var> pipes leading to the ice cream factory then I expect at *least* <var>n</var> flavours of ice cream to be available for purchase!

### Sample output

The `samp` element is used to represent (sample) output from a program or computing system. Useful for technology-oriented sites, not so useful otherwise. Example:

The computer said <samp>Too much cheese in tray two</samp> but I didn’t know what that meant.

### Keyboard entry

The `kbd` element is used to denote user input (typically via a keyboard, although it may also be used to represent other input methods, such as voice commands). Example:

To take a screenshot on your Mac, press <kbd>⌘ Cmd</kbd> + <kbd>⌘ Shift</kbd> + <kbd>3</kbd>.

### Superscript and subscript text

The `sup` element represents a superscript and the sub element represents a `sub`. These elements must be used only to mark up typographical conventions with specific meanings, not for typographical presentation. As a guide, only use these elements if their absence would change the meaning of the content. Example:

The coordinate of the <var>i</var>th point is (<var>x<sub><var>i</var></sub></var>, <var>y<sub><var>i</var></sub></var>). For example, the 10th point has coordinate (<var>x<sub>10</sub></var>, <var>y<sub>10</sub></var>).

f(<var>x</var>, <var>n</var>) = log<sub>4</sub><var>x</var><sup><var>n</var></sup>

### Italicised

The `i` element is used for text in an alternate voice or mood, or otherwise offset from the normal prose. Examples include taxonomic designations, technical terms, idiomatic phrases from another language, the name of a ship or other spans of text whose typographic presentation is typically italicised. Example:

There is a certain *je ne sais quoi*{lang="fr"} in the air.

### Emboldened

The `b` element is used for text stylistically offset from normal prose without conveying extra importance, such as key words in a document abstract, product names in a review, or other spans of text whose typographic presentation is typically emboldened. Example:

You enter a small room. Your <b>sword</b> glows brighter. A <b>rat</b> scurries past the corner wall.

### Marked or highlighted text

The `mark` element is used to represent a run of text marked or highlighted for reference purposes. When used in a quotation it indicates a highlight not originally present but added to bring the reader’s attention to that part of the text. When used in the main prose of a document, it indicates a part of the document that has been highlighted due to its relevance to the user’s current activity. Example:

I also have some <mark>kitten</mark>s who are visiting me these days. They’re really cute. I think they like my garden! Maybe I should adopt a <mark>kitten</mark>.

## Edits

The `del` element is used to represent deleted or retracted text which still must remain on the page for some reason. Meanwhile its counterpart, the `ins` element, is used to represent inserted text. Both `del` and `ins` have a `datetime` attribute which allows you to include a timestamp directly in the element. Example inserted text and usage:

She bought <del datetime="2005-05-30T13:00:00">two</del> <ins datetime="2005-05-30T13:00:00">five</ins> pairs of shoes.

## Tabular data

Tables should be used when displaying tabular data. The `thead`, `tfoot` and `tbody` elements enable you to group rows within each a table.

If you use these elements, you must use every element. They should appear in this order: `thead`, `tfoot` and `tbody`, so that browsers can render the foot before receiving all the data. You must use these tags within the table element.

| The Very Best Eggnog | Serves 12  | Serves 24 |
|----------------------|------------|-----------|
| Milk                 | 1 quart    | 2 quart   |
| Cinnamon Sticks      | 1          | 2         |
| Vanilla Bean, Split  | 1          | 2         |
| Cloves               | 5          | 10        |
| Mace                 | 10         | 20        |
| Egg Yolks            | 12         | 24        |
| Cups Sugar           | 1 1/2 cups | 3 cups    |
| Dark Rum             | 1 1/2 cups | 3 cups    |
| Brandy               | 1 1/2 cups | 3 cups    |
| Vanilla              | 1 tbsp     | 2 tbsp    |
| Light Cream          | 1 quart    | 2 quart   |

*[ASCII]: American Standard Code for Information Interchange
*[HTML]: HyperText Markup Language
*[BBC]: British Broadcasting Corporation
*[Staffs.]: Staffordshire

[^1]: This scope may also include footnotes.
