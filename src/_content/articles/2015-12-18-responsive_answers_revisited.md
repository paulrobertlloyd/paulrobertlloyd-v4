---
title: Responsive Answers Revisited
date: 2015-12-18T23:30:00Z
location:
  locality: Brighton
  country-name: United Kingdom
summary: Justin Avery, who curates Responsive Design Weekly, asked me to revisit the four questions I answered as part of an interview series in 2013. Here are my answers.
tags:
- responsive_design
- web
- interviews
---
Justin Avery, who curates [Responsive Design Weekly][1], asked me to revisit the four questions I answered as part of an interview series in 2013. My answers are below.

***

**Justin Avery:** What was the best new implementation of responsive web design you saw in 2015, and was there a redesign that took your eye?

**Paul Lloyd:** Looking back at [the answer I gave in 2012][3], it’s worth noting that this year saw [BBC News][4] finally launch their fully responsive website, which builds upon the mobile site I mentioned three years ago. The [reasons for the lengthy development timeline are many fold][5], not least a new requirement that means the code base now underpins BBC World Service’s 30 different language sites, too.

Having been involved in the responsive redesign of the [Guardian website][6], I have nothing but the highest respect for teams, like those at the BBC and the Guardian, who are able to shepherd responsive projects through large organisations and get them in front of users. We can pick over particular implementations and talk about design trends, but we should also remember that much of the hard work doesn’t take place in a code editor or graphics application, it happens during conversations with other members of our team and in meetings with stakeholders. That’s where the most interesting and enduring lessons lie.

***

**JA:** What are two responsive frameworks/plugins/shims/patterns that you always seem to go to?

**PL:** My opinion hasn’t changed much from the answer I gave in 2012 (in short: I try not to rely too much on frameworks). However, that’s not to say I don’t have my favourite tools and ideas, so I will name two of those instead.

[Fabricator][7] helps you build modular UI toolkits and style guides, and I’ve used it a number of times this year. Not only is it a powerful and highly customisable tool but its creator, [Luke Askew][8], is incredibly responsive to feedback and suggestions, meaning it keeps getting better and better.

The technology that’s had the biggest impact on my work has been the BEM methodology (in particular the flavour [described by Harry Roberts][9]), as has the associated discussion around using modular, object-orientated approaches for CSS. What I like best about BEM is that it’s simply a set of conventions, with no dependancies on any particular technology or software. More of this sort of thinking, please!

***

**JA:** What is the one thing with sites you would like to see improved/developed in 2016?

**PL:** I tried using `display: flex` on a `<fieldset>` the other day, and apparently [you can’t do that][10] as it’s a [replaced element][11]: “an element whose representation is outside the scope of CSS”. Now, there are plenty of interesting and exciting specifications on the horizon (including Web Components, which may help us get round such issues), but some days I think: can we not just get the simple stuff fixed first?

***

**JA:** If you could offer one piece of advice around building responsively what would it be?

**PL:** I don’t have a piece of advice, but I will offer an observation, one that I’ve been pondering for a while…

Ethan’s [responsive recipe][12] contained three simple ingredients: fluid grids, flexible images and media-queries, the later of which ushered in phrases like *breakpoints* and *tweakpoints*. Five years on, I feel it’s time to reassess those ingredients, and [consider whether broader attributes can make a website *responsive*][13].

You don’t need to look too closely at the newest CSS specs — viewport relative units, flexbox, grid layout — to notice that these often ask the browser make layout decisions for us, we just provide a set of hints. These new properties (alongside older ones like max/min width and height) mean we can create layouts that truly adapt to their content and context.

It doesn’t seem outside the realm of possibility that we’ll soon be creating responsive layouts that contain no media queries. As our reliance on media queries lessens, perhaps so will our desire for container queries? Food for thought.

[1]: http://responsivedesignweekly.com/
[2]: /2012/12/more_responsive_answers
[3]: http://responsivedesignweekly.com/interview/responsive-interview-with-laura-kalbag-paul-robert-lloyd/
[4]: https://www.bbc.co.uk/news
[5]: http://responsivenews.co.uk/post/114413142693/weve-made-it
[6]: http://www.theguardian.com/
[7]: http://fbrctr.github.io
[8]: https://twitter.com/LukeAskew/
[9]: https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/
[10]: http://stackoverflow.com/questions/28078681/why-cant-fieldset-be-flex-containers
[11]: https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element
[12]: http://alistapart.com/article/responsive-web-design
[13]: http://alistapart.com/article/thinking-responsively-a-framework-for-future-learning

*[JA]: Justin Avery
*[PL]: Paul Lloyd
*[BBC]: British Broadcasting Corporation
*[BEM]: Block, Element, Modifier
*[CSS]: Cascading Style Sheets
