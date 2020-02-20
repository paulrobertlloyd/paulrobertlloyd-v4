---
title: EC English
date: 2016-03-11
summary: Testable prototype for English language school.
image: /images/projects/ec_english/image.jpg
tags:
- featured
- skill:frontend_development
- skill:interaction_design
style:
  color-accent: '#f70'
  screenshot-shadow: '#e6772e'
  screenshot-offset: '#ffa033'
aside: |
  Year
  : 2016

  Role
  : Design and front-end development
screenshots:
  school:
  - url: /images/projects/ec_english/screenshot_school.png
    alt: New York school page
---
{% render 'screenshots' with screenshots.school
  alignment: 'bleed'
%}

{% render 'aside' %}

[EC English][1] specialises in the teaching English as part of a language/travel experience. It currently runs 21 English Language schools in five countries on three continents: the UK, USA, Canada, South Africa and Malta.

Reluctant to do a complete redesign, they were looking to make iterative improvements to the customer experience, measuring the results and let these guide future areas of focus. The scope for an initial piece of work was to improve the design of school location pages. I would need to create a prototype for review by internal clients and guerrilla usability tests with students and staff.

After undertaking a series of discovery and research activities including an expert review of the current site, competitor analysis and a content audit, I arrived at a design that split a page into horizontal slices. These could appear collapsed on mobile to make navigating a large amount of information easier in that context, and could easily be rearranged based on usage and user feedback. A flavour for each location was provided in choice of imagery used at the top of the page and the typographic treatment of the page title. A fixed position booking call to action ensured this remained visible as a potential customer learns more about a particular location. I also reviewed the global navigation and footer, ensuring they could adapt to different screen sizes.

Beyond developing the prototype, I delivered the beginnings of a component library. Each component needed to account for different languages, including those that run right-to-left. Using Flexbox meant these components could be developed independently of language choice, with different writing modes achieved simply by providing the correct `dir` attribute on the `body` element.

{% render 'figure'
  content: '> The work you did for us a was a great success, basically providing the business case for redesigning the whole site.'
  caption: 'Ric Francis, Development Director'
%}

[1]: https://www.ecenglish.com
