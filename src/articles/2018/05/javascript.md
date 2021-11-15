---
title: Getting to Grips with JavaScript
date: 2018-05-09T17:00:00+01:00
location:
  locality: Brighton
  country-name: England
summary: My relationship with JavaScript? It’s complicated.
category:
  - JavaScript
  - Learning
  - Web
  - Programming
---
Yesterday I submitted a change to [LiquidJS][1], an open source project that aims to port the popular Ruby-based [Liquid][2] templating language to Javascript. That my pull request involved [updating a regular expression][3] begs the question: what the hell have I become?!

To seasoned observers, I [_just_][4] updated the parameters of a regular expression and added a few tests. Nothing ground breaking. And yet a few years ago, this would have seemed impossible.

Upon discovering a discrepancy between LiquidJS and the original Ruby implementation (the `strip_html` filter wasn’t removing HTML tags containing attributes), I knew where to look and what to look for. I knew how to fork the repository, and how to clone it to my computer. I instinctively knew that the first thing I should do is type `npm install` in my terminal. I broadly understood how the two regular expressions differed, and with the help of [regex101][5], was able to test my change before committing it to code. I knew how Mocha tests worked, and what I should add in order to maintain test coverage. A small change maybe, but one built upon years of frustration, trial and error, and a begrudging understanding of this most foreign of languages.

* * *

That I approached this change with a degree of confidence is quite remarkable. Two years ago, I was asked to develop a component library for the team at Bravissimo. The components I was building would be converted to React, so I only needed to write prototypical JavaScript to demonstrate how various interactions would work. With a deadline looming, my fear of JavaScript took hold. I quickly resorted to UI frameworks and libraries to help dig me out of a hole and yet, trying to include them in the project made a bad situation worse. Each library used a different module syntax, and each was configured a different way. Not only was this aesthetically displeasing, but I lost control over what I was trying to build.

This project lingers in the memory for how badly it affected my mood. I felt like complete shit; out of my depth and unable to do my job. Fast forward to last month and a different project, and needing to build a drop-down menu so that users could change their language preference. Rather than be filled with dread, I was excited by the prospect, and built something reasonably robust and accessible in just a few hours. So, what’s changed?

* * *

In reviewing my journey with JavaScript, a few experiences stand out, but the first and most important came during those dark days on the Bravissimo project. Sensing my frustration, [Andy Dennis][6] sat beside me and patiently took me through writing [a simple function][7]. He pointed out that Javascript — DOM scripting in particular — typically involves selecting things, and then describing what things should change when an event occurs. By removing the complexity and concentrating on the essentials, I was able to dig myself out of the hole I had dug, and reset my relationship with the language.

That said, you can only get so far in web development these days before you need to compile and compress your code for it to be performant. With Sass and PostCSS, I have written and adapted enough Grunt/Gulp/npm workflows in my time for this to feel relatively straight-forward, yet wanting to do the same with JavaScript had always thwarted me. I could concatenate different scripts, but as soon as I needed to involve a polyfill, library or other third-party module, I became stuck. I would often find myself browsing countless articles discussing [the differences between AMD, UMD, CommonJS and ES2015 module syntaxes][8], each assuming a level of knowledge I didn’t possess.

Into this mix, via [the code for Graham’s website][9], I discovered [RollUp][10]. Unlike [Webpack][11] — a project which exasperates many of the issues I have with the JavaScript ecosystem — RollUp uses a configuration format similar to the other tools I use. Furthermore, the error messages it generates make sense. Quite often, I can configure it such that I need only three plugins; [one to resolve node dependancies][12], one to [convert CommonJS modules to ES2015][13], and a compressor, be it [Uglify][14] or [Closure][15]. I might also throw a [Babel plugin][16] into the mix so that I can use the friendlier syntax found in the most recent versions of JavaScript.

Another tool I have found immensely helpful is [ESLint][17]. This parses your code and reports any errors it encounters. I tend to include this in my projects via [XO][18], and with [Atom setup to highlight any errors and warnings it generates][19] (each linking to a description on the ESLint website), I can catch any errors before saving a file, avoiding countless hours of head-scratching due to a misplaced typo or malformed function.

It’s also worth considering the code I have not written in JavaScript. Be it [plugins for Jekyll][20] (Ruby), or [Kirby][21] customisations (PHP), the friendlier syntax of those languages (and the fact they don’t interact with the DOM) helped me concentrate on the fundamentals. It’s become clear that most of the programming I do largely involves creating and amending arrays and objects. Once I understood the notation required to work with these — as well as the different data types that get passed around — writing JavaScript made a little more sense.

<cite>[Javascript for Web Designers][22]</cite> proved to be the missing piece of the puzzle. I bought Mat Marquis’ book in the hope it would level up my skills, but as I progressed though the book, I found myself nodding along with many of the examples. Having turned the last page, it was tempting to believe I had learnt nothing. Yet, with years of pain and experience behind me, it solidified what I already knew and explained concepts I had only tacit knowledge of beforehand, giving me a better understanding of how everything works.

So, the future is bright. I’m excited by the possibility space that has opened up, such that I can add things like geo location to [Bradshaw’s Guide][23] without breaking too much of a sweat. The challenge now is to remember the pain and anguish I endured, and bare that in mind when helping others find their own path through the knotted weeds of JavaScript.

[1]: https://github.com/harttle/liquidjs
[2]: https://github.com/shopify/liquid
[3]: https://github.com/harttle/liquidjs/pull/70
[4]: http://bradfrost.com/blog/post/just/
[5]: https://regex101.com
[6]: https://twitter.com/scruffymongrel
[7]: https://gist.github.com/paulrobertlloyd/d50e7728db960223d3e2b81c665a179d
[8]: https://addyosmani.com/writing-modular-js/
[9]: https://github.com/gablaxian/gablaxian.com
[10]: https://rollupjs.org
[11]: https://webpack.js.org
[12]: https://github.com/rollup/rollup-plugin-node-resolve
[13]: https://github.com/rollup/rollup-plugin-commonjs
[14]: https://github.com/TrySound/rollup-plugin-uglify
[15]: https://github.com/camelaissani/rollup-plugin-closure-compiler-js
[16]: https://github.com/rollup/rollup-plugin-babel
[17]: https://eslint.org
[18]: https://github.com/xojs/xo
[19]: https://github.com/xojs/atom-linter-xo
[20]: /2015/11/jekyll_plugins
[21]: https://getkirby.com
[22]: https://abookapart.com/products/javascript-for-web-designers
[23]: https://bradshaws.guide

*[AMD]: Asynchronous module definition
*[DOM]: Document Object Model
*[HTML]: HyperText Markup Language
*[UI]: user interface
*[UMD]: Universal module definition
