---
title: 'Using a design history to document your work'
date: 2021-03-04T13:00:00
summary: How documenting design decisions can help your team keep track of how a service has developed over time.
image:
  url: /presentations/2021/03/discuss_a_design_challenge/image.jpg
  alt: A collection of spiral bound notebooks.
tags:
  - featured
accentColor: '#1d70b8'
slides:
  - image:
      url: 1.png
    notes: |
      Hi! I’m Paul, and I’m an interaction designer working for the Department of Education in the Becoming a teacher team. Fun fact: today is the 2 year anniversary of me joining the team.
  - image:
      url: 2.png
    notes: |
      Our team works on a family of services. These allow perspective candidates to find teacher training courses before submit an application, and enable training providers to publish courses and then make decisions on the applications they receive.
  - image:
      url: 3.png
    notes: |
      We have been keeping a design history since 2018.

      We use this tool to document and share design decisions and to maintain a permanent record of how our services have developed over time.
  - image:
      url: 4.png
    notes: |
      As of March 2021, our design history covers 6 services (the 5 public-facing services plus an internal service used by support agents), and includes over 450 posts from 22 contributors.
  - image:
      url: 5.png
    notes: |
      So what exactly is a design history?
  - image:
      url: 6.png
    notes: |
      A design history looks both forwards and backwards. New posts show the team where a service is going, while older posts tell the story of how we got to where we are now.
  - image:
      url: 7.png
    notes: |
      That’s a fancy description. The simpler answer is that a design history is a blog with a design team committed to regularly posting about their work.
  - image:
      url: 8.png
    notes: |
      Why keep a design history?
  - image:
      url: 9.png
    notes: |
      Firstly, things change. Be that policy, members of the team or our understanding of the problem space and a service’s users etc.
  - image:
      url: 10.png
    notes: |
      This is particularly true when working in an agile environment, where things are constantly iterated. It can be hard to remember what things looked like, how they worked or why – and when – they changed.
  - image:
      url: 11.png
    notes: |
      Our team wanted a way to keep a record of our designs, and also a way to share them. We looked at a few different options.
  - image:
      url: 12.png
    notes: |
      One option would be to [create different versions of our prototype](https://designnotes.blog.gov.uk/2016/05/13/archiving-versions-of-a-prototype/).

      But when should we create a new version? How and when would we document smaller changes?

      There’s also the overhead of maintaining a prototype that’s ever growing in size.
  - image:
      url: 13.png
    notes: |
      For a while we tried to document design decisions on a Confluence wiki. However, as this was private it was difficult to share documents more widely. It was also quite limiting in terms of formatting options.
  - image:
      url: 14.png
    notes: |
      The first iteration of our design history was powered by the Prototype Kit. But the kit was not designed around the needs of content creation and curation. For example, it was hard to incorporate Markdown, tag posts and create an RSS feed.
  - image:
      url: 15.png
    notes: |
      In the end, we built our own tool using:

      * [Eleventy](https://www.11ty.dev) for content management
      * [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend) for the design patterns
      * [GitHub](https://github.com/) for collaboration
      * [Netlify](https://www.netlify.com) for hosting
  - image:
      url: 16.png
    notes: |
      Our tool is available for any team to download and use:

      * <https://design-history.herokuapp.com>
      * <https://github.com/dfe-digital/govuk-design-history>
  - image:
      url: 17.png
    notes: |
      Other teams in the DfE are now using it too:

      * [Get into teaching](https://get-into-teaching-design-history.netlify.app/)
      * [Get help with technology](https://ghwt-design-history.herokuapp.com/)
      * [Early years foundation stage framework](https://eyfs-design-history.netlify.app/)
  - image:
      url: 18.png
    notes: |
      I’m going to be talking about the tool we’ve created, but the tool isn’t the important thing. The ideas I’m sharing today can be achieved with any blogging software, so use whatever tool works best for you and your team.
  - image:
      url: 19.png
    notes: |
      How can a design history help your team work better?
  - image:
      url: 20.png
    notes: |
      For designers, a design history is helpful when iterating an existing feature and you find yourself asking “why on Earth does it work like this”.
  - image:
      url: 21.png
    notes: |
      For user researchers, a design history can be useful when planning a research session, or when preparing a playback and needing to refer to previous findings.
  - image:
      url: 22.png
    notes: |
      For product managers, a design history can be helpful if needing to postpone the development of a feature. Having a design documented means it can be picked up again later.
  - image:
      url: 23.png
    notes: |
      For developers, a design history gives broader context to a set of changes to a particular feature. A post can document different user journeys and interaction states, both of which can be difficult to show in a prototype.
  - image:
      url: 24.png
    notes: |
      For delivery managers, having a design history for a project can be a useful resource when onboarding new team members.
  - image:
      url: 25.png
    notes: |
      There’s also an extra bonus. When it comes to a service assessment, being able to point to a design history with a collection of posts detailing an understanding user needs and design intents, the design section of an assessment can almost become a formality.
  - image:
      url: 26.png
    notes: |
      How does our team use a design history?
  - image:
      url: 27.png
    notes: |
      Every now and again we perform a snapshot of all pages on the service. This is useful as a fallback, as not every part of the site may have had an entry written about it. This way there’ll always be a screenshot of a page so you can see what it previously looked like.
  - image:
      url: 28.png
    notes: |
      It can be hard to demonstrate the multiple states of a component or page in a prototype, so this is one area in which having a design history can be really helpful.
  - image:
      url: 29.png
    notes: |
      One of the first things we did was document the legacy service we’re replacing. This is important as if we’re successful, this is something that will eventually disappear.
  - image:
      url: 30.png
    notes: |
      We can even show email designs rendered using GOV.UK Notify-style placeholders.
  - image:
      url: 31.png
    notes: |
      Our design history also includes a post in which we use the question protocol to list all the questions we ask, and why we ask them.
  - image:
      url: 32.png
    notes: |
      Our user researchers have started summarising larger research rounds and their findings in greater depth.
  - image:
      url: 33.png
    notes: |
      Like many other parts of government, our service is not short on acronyms. One of the most useful pages on our design history is the glossary, which has proven popular with new starters.
  - image:
      url: 34.png
    notes: |
      We recently added a page to display [all the mission patches we’ve designed](https://bat-design-history.netlify.app/mission-patches/).
  - image:
      url: 35.png
    notes: |
      A few last thoughts before I finish.
  - image:
      url: 36.png
    notes: |
      Maintaining a design history has proven to be worthwhile, but it’s not without its challenges.

      Writing is hard, and the same can be true of writing about the work you have done.

      Deciding when to write about something can be tricky too. For example, I’m never quite sure if I should write about a feature after it’s been designed or once it has been tested.

      Also, in an agile environment, and on projects where there is no shortage of work to be done, it can be difficult to find time to sit down and write an entry.

      The key is to think of it as part of the design process, and to remember the value it may provide later.
  - image:
      url: 37.png
    notes: |
      There are also a few issues we’ve come up against, which we’d like to solve in future updates to the tool.

      The first is that not having an easy to use admin interface, but relying on contributions via GitHub, has been a barrier to entry for the less technically savvy members of our team.

      Secondly, the more posts we add to the site, the larger the project can becomes. If you have lots of images, this can mean new users have to download a huge amount of data before they can start adding their own posts.

      If you have any ideas how we can solve these issues, please let me know.
  - image:
      url: 38.png
    notes: |
      I’ll leave you with a thought from my colleague Adam Silver:

      > The only design history entry you’ll regret is the one you didn’t write.

      When people talk to me about design histories, they tend to get caught up thinking about when to write post or how to structure them. It’s certainly worth thinking about how you want to use a design history, but don’t let that prevent you from posting anything at all.
---
This presentation was delivered at [Discuss a design challenge][1] as part of Services Week 2021.

[1]: /events/2021/03/04/discuss_a_design_challenge/
