---
title: URLs Matter
date: 2009-12-06T01:18:00Z
location:
  locality: Littlehampton
  country-name: United Kingdom
summary: The humble URL has been on my mind a lot recently.
category:
- design
- user_experience
- web
discussion: closed
---
The humble URL has been on my mind a lot recently. Through a series of developments, this simple means of addressing the wonders of the web has been obfuscated and abused, to the point that it’s now seen as difficult to use and an affront to users.

## Shortened

There has long been a need for URLs to be shortened, be that in e-mails or within the pages of a magazine, and for a number of years the service [TinyURL][1] did a fairly respectable job of performing this task.

However the onset of Twitter and its 140 character limit has meant its 18 character URL is now considered too long, with users opting to use newer shorteners made up from just 13, 12 or even 11 characters. To provide some semblance of readability whilst keeping the URL short, these services use various country code top-level domains (ccTLDs) to complete the name of their service (for example flickr.com becomes flic.kr) or provide vanity to the overall shortened URL (ie. tr.im, or j.mp).

Whilst there are [many worrying aspects of these services][2] (not least certain providers wrapping content within their own interfaces), what struck me most was the disintegration of the ccTLD naming system.

Whilst it has long been abused (see .ws, .tv, .fm et al.) there was still the possibility of there being some correlation between the ccTLD used and the service being offered (e.g television channel Five uses the domain five.tv). Yet now we have millions of unrelated links that, to the untrained eye, appear to be of Libyan (bit.ly), Italian (dplr.it) or Grenadian (is.gd) origin, which is clearly not the case.

It’s for this reason that when I decided to provide a short URL for this site, rather than create a short random jumble of letters and a full stop, I instead opted for the slightly longer yet more readable prlloyd.com.

## Sentenced

Another emerging trend has been to make URLs read like sentences, something first [pioneered by Chris Shiflet][3] at OmniTI, and similarly used on the current [Clearleft][4] site.

The idea is that by using verbs (`/is`, `/does` and `/thinks`) rather than nouns (`/about`, `/work` and `/news`) the information architecture of the site generates URLs that read like sentences. So for example:

    http://omniti.com/work/design-and-development

becomes the more readable:

    http://omniti.com/does/design-and-development

What I love about these ‘sentenced URLs’ is that they clearly demonstrate the level of thought and attention to detail that has gone into every aspect of the user experience. However, I think it’s worth noting this is unlikely to work on every site and can be quite constraining when it is (there will always be a suitable noun, but not always a suitable verb).

I’ve been thinking a lot about whether these sentenced URLs are a good thing or not. Whilst I love the idea, they only work well when considered properly and applied consistently. They also feel fashionable, and fashions tend to result in [poor imitations][5] and short lifespans. Apply with caution is the lesson here.

## Abused

Some companies take the opposite approach. Rather than spend time considering the exact structure and layout of their URLs, they allow them to become subject to abuse by SEO experts, who insist that they contain almost entire passages of text to please the Internet gatekeeper that is Google.

Not only do these URLs get bogged down with this ‘Google juice’, but are often appended with referral IDs or other unnecessary query strings. Indeed, URLs have become so mangled that they’re starting to be seen as unsuitable for mass consumption, [hidden away from view][6] and replaced with more visually delightful interfaces. Whilst these may be easier to use, they lack the powerful utility and freedom of choice URLs provide.

## Discarded

Given this pattern of ill-considered implementations, you can imagine my dismay when my former colleague [David Sklar][7] advocated this approach in a recent article entitled [Do URLs Matter?][8]

I know David to be a fantastic developer who literally [wrote the book on PHP][9] (and was an [excellent host][10] during my visit to New York in 2007), so the following exists only to contribute to the debate I’m sure he hoped to stimulate.

In fairness, he raised a few good points worth remembering:

* As people who work with the technology everyday, we can often get ourselves trapped into thinking most users think the same way we do.

* Thanks to advances in browser interface design (such as the ‘Awesome bar’ in Firefox) or as the web moves to platforms that lack traditional input devices, URLs are required, or available, less often.

* Structured URLs tend to appeal to the more technologically aware.

(He also uses the example of editing a URL to advance forward a number of pages within a list of forum topics. I found this rather ironic given that [Ning recently removed page numbers from the pagination on its social networks][11] for ‘performance reasons’. When pagination is a performance issue, you have bigger issues than the structure of your URLs.)

However the rest of his article seems to be based on an unfounded assumption that users are totally oblivious to what a URL is and how it functions.

Frankly I’m getting rather tired of this and other ‘users are stupid’ assertions. Aside from it lumping users together in the same boat, it’s an attitude that leads to services designed only to meet the expectations of the lowest common denominator. Of course, whilst a percentage of your user base may not be web-savvy, this is unlikely to remain the case, especially when you consider that in less than 5 years, Generations Y (who grew up with the Internet) with Generation Z (who are growing up with mobile) are likely to be [the dominate purchasing force][12] on the internet.

Rather than make assumptions of my own, I thought I would test the canonical user that is my mum. Of pensionable age, and not a heavy internet user, she would no doubt fall into the “normal person” classification that David wishes to use.

Whilst she had no idea what a URL was, once I removed this veil of techno-jargon, and explained to her that this was the web address that appeared at the top of the browser window, she happily told me how she uses it when browsing the BBC website. She went on to explain:

> I often have to edit the address on the O2 website just to get to the page I want.

For her (and many others) the URL is a valuable escape route.

URLs also provide a level of transparency and trust. If you were to believe David’s reasoning there’d be no need for search engines to display a URL alongside each result title and description. Yet research suggests that users spend as much as 24% of their gaze time looking at the URLs on these pages. In [URL as UI][13], Jakob Nielsen writes that:

> We found that searchers are particularly interested in the URL when they are assessing the credibility of a destination. If the URL looks like garbage, people are less likely to click on that search hit. On the other hand, if the URL looks like the page will address the user’s question, they are more likely to click.

This seems to fly in the face of [David’s conclusion][8]:

> There are a variety of reasons to structure your URLs a certain way, such as making search engines happy, making developers using your service happy, or keeping yourself sane when you build a web site. Providing utility or aesthetic pleasure to regular people who use your web site, however, is not one of them.

This foolhardy statement frankly amounts to little more than an advocation laziness, and furthermore reveals a total disregard for the [importance of design][14].

When advocating the user, applying blanket claims or unfounded assumptions such as this is neither helpful or productive. Indeed it can be quite dangerous, especially when delivered by someone like David who holds position of respect within the community (leading to [worrying statements such as this][15]). For that reason, I hope David is able to clarify his points on the subject and provide evidence to support his claims.

[1]: http://tinyurl.com/
[2]: https://adactio.com/journal/1566/
[3]: http://shiflett.org/blog/2008/mar/urls-can-be-beautiful
[4]: https://clearleft.com/
[5]: http://www.fullcreammilk.co.uk/thinking/about/url_abc/
[6]: http://factoryjoe.com/blog/2009/11/16/the-death-of-the-url/
[7]: http://www.sklar.com/
[8]: http://phpadvent.org/2009/do-urls-matter-by-david-sklar
[9]: http://oreilly.com/catalog/9780596101015
[10]: https://www.flickr.com/photos/paulrobertlloyd/4103413557/in/set-72157622922469188/
[11]: http://blog.ning.com/2009/11/small-changes-with-a-big-punch-coming-next-week.html
[12]: http://2009.dconstruct.org/podcast/mobiledesign/
[13]: http://www.useit.com/alertbox/990321.html
[14]: http://jnd.org/dn.mss/emotion_design_attractive_things_work_better.html
[15]: https://twitter.com/pereverzev/status/6336346853

*[BBC]: British Broadcasting Corporation
*[PHP]: PHP: Hypertext Preprocessor
*[UI]: user interface
*[URL]: Uniform Resouce Locator
