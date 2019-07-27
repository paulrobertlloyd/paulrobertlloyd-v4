---
title: Microblogging
date: 2018-01-23T17:15:00Z
location:
  locality: Brighton
  country-name: United Kingdom
summary: Twitter is a place I visit to get annoyed. I need an alternative. That alternative could be my very own website.
category:
- indieweb
- micro_blogging
- microdotblog
- website
- web
---
[I stopped using Facebook][1] because I didn’t trust the people behind Facebook. I had grown weary of the sly and underhand tactics used to grow their network and was unwilling to remain part of it. But if I’m honest, I couldn’t trust myself either. Visiting Facebook would elicit behaviour you could only describe as stalking; trawling through the feeds of my friends, seeking out people I vaguely knew. I had better things to do with my time.

Almost a decade later, I’m having similar thoughts about Twitter.

## What’s happening?

Twitter is where I go to get annoyed. Its design encourages me to drop snarky remarks into a murky, unmoderated stream. I’ve never fully submersed myself, having stuck to a self-imposed follow limit of 150 (although it typically hovers around half that). I mute retweets, unfollow people, remove the app from my phone and still, I get drawn to this place that upsets and distracts me.

Twitter has also impaired my cognitive function. I now tend to think in 140 characters or less. Rather than let a thought percolate away slowly, perhaps to combine with others when it becomes useful, I’ll just tweet it, and wait for a response. Any response. Sometimes I find myself just staring at the screen, waiting for a notification to appear. When one does, all too often it’s to tell me that someone briefly glanced at a retweet liked by a person they said hello to that one time. In case you missed it.

It’s not all bad. Twitter has helped me build an audience that has likely benefited my career, and provided entertainment and support in times of national celebration and destruction. Yet it has also become a tool for translating thoughts into thoughtlessness. Loud, desperate, thoughtlessness. In the hands of people sharing what they had for breakfast, this isn’t a problem. But when given over to the world’s most thoughtless and powerful man…

## Enter Micro.blog

Others feeling disenfranchised by Twitter have looked to alternatives like [Mastadon][2]. I’ve long thought the answer lies somewhere within the [IndieWeb][3]. Here, a series of specifications like [MicroPub][4] and [Webmention][5] have been developed and road-tested which enable publishers to create content on their own sites and syndicate it to others; to enjoy the benefits of social media without succumbing to its centralising and dehumanising forces.

So when [Manton Reece][6] announced his [Micro.blog][7] IndieWeb project [on Kickstarter][8] last year, I enthusiastically backed it. A thin social layer upon a network of blogs sharing tweet-length posts sounded like a possible antidote to Twitter.

While I waited patiently for this project to come to life, I imagined a service that would allow me to publish from Micro.blog to my self-hosted Jekyll-powered website, allowing me to adopt the most interesting IndieWeb features without getting my hands dirty. If you host your blog with them, that is indeed the case. Jekyll is used in the background, several themes are available, and you can even push a copy to GitHub. This wasn’t quite what I had in mind — I wanted to publish to *my website* — but it was enough to get going with.

I began sporadically posting. When I did, thoughts were less rash and more considered. I was taking time to think about what I wanted to record. Hell, did it even need recording at all? Expecting these short posts to sit alongside articles I’d spent weeks writing, also gave pause for thought.

## Small pieces, loosely joined

Manton has promised more flexibility around design and customisation for hosted microblogs — indeed, [his business model][9] is dependent on providing a best-in-class service — but deep down, I know it can never satisfy my various whims and foibles. To integrate my wholly independent website with Micro.blog would mean building an endpoint that could accept posts from MicroPub-supporting editors (such as Micro.blog’s iOS and macOS apps). But how could I post to a static website?

I found a solution within the industrious IndieWeb community. [Pelle Wessman][10] has created [a small Node application][11] that can accept MicroPub JSON objects, convert them into to a format understood by Jekyll, and push the resulting files to a location you specify on GitHub.

If you host your site with [GitHub Pages][12], posts will then automatically appear. However, my setup requires things like redirects and image transformations, none of which are supported by GitHub Pages. So I set up a continuous integration workflow to regenerate my site in a virtualised container whenever new content gets pushed to GitHub and `rsync` the changes to my server.

Micro.blog, Jekyll, GitHub, CI, `rsync`… it all feels very fragile; small pieces barely held together with the digital equivalent of gaffer tape and Blu Tack. But it works! Well, almost. Turns out Pelle’s software doesn’t support MicroPub media endpoints yet, so I can’t post photos to my site via Micro.blog. Adding support for Webmention in a static environment, [while possible][13], is also tricky.

I may have pushed Jekyll to its limit. Should I want to embrace the most dynamic IndieWeb features, I will need to move away from static tooling.

## From small seeds

Such complexity will undoubtedly embolden the critics: “The market has proven that consumers want freely available social networks that are easy to use, and used by everyone else. Only centralised services can provide this, not familiarity with a command line and a succession of acronyms and protocols”, says my not entirely fictional naysayer.

I’m not sure this argument follows. While the human desire to connect and communicate easily with each other has been proven many times over, it’s becoming clear that all-encompassing centralised networks are not the solution. That way lies algorithmically-skewed streams of consciousness, layered upon sordid business models and Californian ideology. Fuck that.

[The web is agreement][14], but that doesn’t mean we agree to use the same websites.

Maybe a growing disillusion with social networks and the recent [resurgence in blogging][15] will bring with it an interest in these newer ~~Indie~~Web standards. I’d love to see more consumer-oriented publishing tools adopt MicroPub and Webmention so that their empowering capabilities become available to all. And it’d be great to see competitors to Micro.blog, each with their take on how to fix the problems we’ve uncovered during our embrace of social media. We have the technology; we just have to use it.

[1]: /2010/10/purge#on-leaving-facebook-march-2009
[2]: https://joinmastodon.org
[3]: https://indieweb.org
[4]: https://www.w3.org/TR/micropub/
[5]: https://www.w3.org/TR/webmention/
[6]: https://manton.org
[7]: https://micro.blog
[8]: https://www.kickstarter.com/projects/manton/indie-microblogging-owning-your-short-form-writing
[9]: http://cdevroe.com/2018/01/19/interview-manton/
[10]: https://voxpelli.com
[11]: https://github.com/voxpelli/webpage-micropub-to-github
[12]: https://pages.github.com
[13]: https://github.com/aarongustafson/jekyll-webmention_io
[14]: https://www.flickr.com/photos/psd/1805709102/
[15]: https://ia.net/topics/web-trend-map-2018/

*[CSS]: Cascading Style Sheets
*[JSON]: JavaScript Object Notation
*[CI]: continuous integration
