---
title: Thoughts on the BBC News Redesign
date: 2010-09-10T15:17:49+01:00
location:
  locality: Brighton
  country-name: United Kingdom
summary: There is often talk of there being no landmark design on the web, but I suggest it won’t be long before BBC News is considered one of the greatest design icons online today.
category:
- Design
- Web
- BBC
- MSNBC
discussion: closed
---
Earlier this year the BBC announced it was creating a new version of it’s Global Visual Language (GVL). Building upon the success of its predecessor, these new guidelines would give the organisation a consistent yet highly distinctive visual style to use online.

{% render 'figure' with '/images/2010/09/bbc_news_redesign/homepage.jpg'
  caption: 'The new BBC News website.'
%}

Developed alongside respected designer Neville Broody, the new version — [dubbed GVL3][1] — was based upon nine founding design principles, with outputs including a more flexible grid, controlled typography usage, specified colour palettes, iconography and documentation of common design patterns. Furthermore, the BBC website would slavishly adhere to these guidelines, meaning a site historically disparate and segregated would end up with a single, consistent and identifiable style.

It was with much excitement, that [I wrote about this announcement][2] in February.

Yet the months that followed saw relaunches across the site that didn’t match this promise. A [new home page][3] retained its dated Web 2.0 look. A [relaunched Doctor Who programme site][4], reportedly inspired by these guidelines, only served to disappoint with clumsy typography and unimaginative layouts. The [refreshed Comedy website][5] was ugly, ill-considered and incomplete.

In retrospect, it’s easy to see that these sites — produced during a period of transition — were unlikely to fully reflect the new vision, yet their launch made me question the BBC’s appreciation of design, and wonder whether the goals of GVL3 would ever be realised.

## BBC News site launch

Fast forward to July, and the BBC finally launched a [top to bottom redesign][6] of its news website in full conformance with GVL3 — which itself launched as part of a larger [Global Experience Language][7] (GEL) project.

After years of minor face-lifts that papered over the cracks in an increasingly outdated and broken experience, the level of quality and attention to detail seen in the new site fills me with pride; no longer a site I feel embarrassed to use. As an organisation whose future is increasingly dependent on networked, on-demand services, BBC News Online can stand alongside the iPlayer as one of the great online experiences of our time, a new standard for other media organisations to follow.

Having used the site for a number of months now, I’m still amazed to discover tiny little implementation details — hover states, layout aware overlay menus, pixel precise positioning — a level of subtly I’ve not seen anywhere else on BBC Online. The iPlayer comes close, yet the [design of the new version][8] depends on a tacky visual gimmicky now banished by GVL3.

## A vocal minority

I was overjoyed when the new site launched, but a vocal section of the public felt quite the opposite, leaving thousands of disgruntled comments on the BBC’s blogs and elsewhere. Many of these complaints boiled down to little more than annoyance that someone had dared change their comfortable familiarity, however I can understand a level of this frustration.

The previous website had evolved from an original design launched in 1997. Whilst the width grew to match popular screen dimensions, and mastheads changed to reflect the branding of the day, fundamentally it remained the same site; navigation running down the left hand side and news stories tied to a formulaic layout.

Not only does the new site break a number of expectations built up by users over the last 13 years, but the run up to its launch wasn’t as sympathetic to this situation as it needed to be. Unfortunately, the option to run a beta site alongside the previous design wasn’t possible, as the publishing platform powering the site was being redeveloped at the same time. I was privy to some late user-surveys, but for most users, the only indication that the site was about to change was a blog post and an image gallery.

The BBC is often careful to test new designs with its users, but this time it fell woefully short.

## One page, a thousand interactions

{% render 'figure' with '/images/2010/09/bbc_news_redesign/msnbc.jpg'
  caption: 'An article page on the new MSNBC website.'
%}

A few weeks before the new BBC News site launched, American news organisation [MSNBC][9] launched a [redesign of its own][10]. In the commercial world, the needs of advertisers are often valued over those of users and page views rule (thankfully the the BBC is not bound by such constraints). As such, news articles tend to be split across several pages and have become surrounded by intrusive adverts — it’s easy to see why tools like [Readability][11] and Safari’s Reader feature are gaining popularity.

MSNBC has a good understanding of the web (as can be seen with its acquisitions of [Newsvine][12] and [EveryBlock][13]) and realised this trend couldn’t continue.

Their redesign did away with pages, instead presenting content on one page; larger, easier to read body copy appearing alongside comments, slideshows, image leads and other features (for more information, [see their detailed feature tour][14]). Yet whilst “one page” may be technically true, pages are actually divided into different sections that are viewed individually, navigated by a strange yet playful “bubbles” that run down the right hand side of the page.

Whilst some of these interactions are interesting, it appears to be innovation for the sake of innovation. Comments can be opened in a drawer, site features appear when you scroll up and reach the top of the page, sharing tools are persistently anchored to the bottom of the browser window — every gimmick that can be used, has been used — the result distracting interactions in place of distracting adverts (the number of which has also increased). In reality, MSNBC is still stuck with the same page-view paradigm.

## Built in flexibility

Perhaps the BBC should point disgruntled users to MSNBC, as I’m sure they would come running back. With GVL3 in full effect, the new site takes this approachable homogeneity, and infuses it with the strong BBC News brand.

{% render 'figure' with '/images/2010/09/bbc_news_redesign/variations.png'
  caption: 'Different layout variations available to editors on the new BBC News website.'
  alignment: 'bleed'
%}

One of the key features of the new design is greater flexibility for editors, and this can clearly be seen on the new home page. Where previously strict templates required a main story be followed by two other leading stories (each with an associated images regardless how useful these may be), this new flexibility allows for a number of different page layouts, headline sizes and has no image requirements. **The design is dictated by the content**, rather than the other way round. This flexibility extends to section pages — flicking through these different pages perfectly demonstrates this new adaptability.

The same ideas have been brought to the article pages too. The original site was built with text based stories in mind, but over the years these have been added to by images, slideshows and video content. With more space available for content (the left-hand navigation having been moved to the top), a wide right hand gutter allows additional pieces of content to be inserted without impeding the main flow of the article.

This move to flexible layouts is interesting, especially since [Clearleft][15] have been working on a project for [Channel 4 News][16] that proposed similar solutions. Whilst this vindicates our approach, it’s a shame we couldn’t release our solution before that of the BBC.

## Not without fault

Having a flexible layout for the home page is definitely an improvement, but this variation, alongside other persistent features, means the page can often lack a sense of hierarchy. The home page is a strange beast, bursting with modules, boxouts and promos, many of which I’d be tempted to remove. The customisable UK/World News feature, with its stark dark blue background, dominates the stories contained within, and I often find myself skipping past.

My larger concern is that the new GVL3 guidelines seem heavily influenced by the design requirements of the news site. BBC News is one of their few remaining consumer facing brands still using Gill Sans, with Helvetica used on-screen. Low and behold this is what we see reflected in the style guide.

It’s too early to tell of course, but the suitability of these guidelines for the whole organisation will only become apparent once it gains usage across the entire website, and implemented for brands with differing content requirements.

## Open and transparent

The design of this site, and the rationale behind it, have been incredibly well documented; it’s hard to imagine another organisation going to the same lengths to share its internal process. If you’re interested in the background to this new design, I strongly encourage you to read the following:

* [Formative user research for the BBC’s Global Visual Language 3][17]
* [BBC News website redesign: telling the story][18]
* [BBC News website’s content management and publishing systems][19]
* [Full GEL documentation and resources][7]

There is often talk of there being [no landmark design on the web][20]. I’m going to stick my neck out, and suggest it won’t be long before BBC News Online is considered one of the greatest design icons online today.

[1]: https://www.bbc.co.uk/blogs/bbcinternet/2010/02/a_new_global_visual_language_f.html
[2]: /2010/02/bbc_online_gvl
[3]: https://www.bbc.co.uk/blogs/bbcinternet/2010/03/evolution_of_the_bbc_homepage.html
[4]: https://www.bbc.co.uk/blogs/bbcinternet/2010/04/the_relaunch_of_the_doctor_who.html
[5]: https://www.bbc.co.uk/blogs/bbcinternet/2010/05/the_new_comedy_website.html
[6]: https://www.bbc.co.uk/blogs/theeditors/2010/07/bbc_news_website_redesign.html
[7]: https://www.bbc.co.uk/guidelines/gel/
[8]: https://www.bbc.co.uk/blogs/bbcinternet/2010/09/bbc_iplayer_gets_even_better.html
[9]: http://msnbc.com/
[10]: http://www.mikeindustries.com/blog/archive/2010/06/another-nail-in-the-pageview-coffin
[11]: http://lab.arc90.com/experiments/readability/
[12]: http://newsvine.com
[13]: http://everyblock.com
[14]: http://www.msnbc.msn.com/id/37643077
[15]: https://clearleft.com
[16]: http://channel4.com/news
[17]: https://www.bbc.co.uk/blogs/bbcinternet/2010/07/formative_user_research_for_th.html
[18]: https://www.bbc.co.uk/blogs/bbcinternet/2010/07/bbc_news_redesign_telling_the.html
[19]: https://www.bbc.co.uk/blogs/bbcinternet/2010/07/bbc_news_websites_content_mana.html
[20]: http://www.underconsideration.com/speakup/archives/004033.html

*[BBC]: British Broadcasting Corporation
*[GEL]: Global Experience Language
*[UK]: United Kingdom
