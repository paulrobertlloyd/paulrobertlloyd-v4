---
title: 'Introducing Indiekit: The IndieWeb for Everyone'
date: 2022-12-17T18:45:00Z
location:
  locality: Brighton
  country_name: England
summary: Indiekit is the little Node.js server with all the parts needed to publish content to your personal website and share it on social networks.
category:
  - Projects
  - Indiekit
  - IndieWeb
tags:
  - featured
accentColor: '#60c'
---

Today I’m formally launching [Indiekit][1], the little Node.js server with all the parts needed to publish content to your personal website and share it on social networks.

Think of Indiekit as the missing link between a statically generated website and the social web protocols developed by the [IndieWeb][2] community and recommended by the W3C.

Here’s a quick feature overview:

* **Publish content to your website** using Indiekit’s own content management system or any [application that supports the Micropub API][3]
* **Save files to a content store** such as GitHub, GitLab or an FTP server
* **Integrate with static site generators** like Jekyll or Hugo
* **Automatically share content** on social networks like Mastodon and Twitter[^1]
* **Customise everything** from the interface theme to the format of commit messages

Indiekit is extensible via a [plug-in API][4] and localised for use in [a growing number of languages][5].

![The Indiekit interface in a browser window, showing a grid of published posts.](posts.png "Indiekit’s content management interface.")
{.u-align-bleed}

This project has been in development for over 3 years (it’s 40 months to the day since [I released v0.0.1][6]), and there’s still more work to do. But as the saying goes, if you’re not embarrassed by your first release, you’ve waited too long.

That said, what I’m announcing today is a public beta – I’d like to get a few more people using Indiekit to iron out any outstanding issues before I call it done for version 1.0.0 and move on to [the next set of features][7].

## Why I built Indiekit (or how I accidentally became a programmer)

I first became interested in the IndieWeb while working with [Jeremy][8] at Clearleft. I attended the [second IndieWebCamp in the UK in 2013][9], and returned for [the Brighton edition in 2015][10].

Both times I felt a mixture of excitement and frustration. I enjoyed learning how different IndieWeb protocols enabled you to own and control your content (websites like those of [Aaron][11] and [Barry][12] still make me envious). Yet, while I met the basic criteria – I had a website at my own domain – the most arresting ideas seemed out of reach without a deeper technical understanding.

Instead I had to rely on the work of others. I spent the next few years using tools like Pelle Wessman’s [Micropub to GitHub][13] and later Hans Gerwitz’s [Sitewriter][14], both projects subject to my many bug reports and feature requests. But there was no avoiding the fact that neither was flexible enough for my needs. And so, having [gotten to grips with JavaScript][15], I began building my own Node.js application [in February 2019][16].

The following month I began contracting at the Department for Education.

Building functional prototypes using the [GOV.UK Prototype Kit][17] – with help and assistance from my colleague [Paul][18] – was the at-the-coalface experience I needed to gain confidence building JavaScript applications. Early mentoring from [Aron][19] was massively helpful too.

Working in government also influenced Indiekit’s design. Sometimes I feel like I’ve undergone a re-education programme, my taste having evolved from minimalist to functional. You’ll notice similarities to Indiekit if you’ve ever used a service on GOV.UK, but if not, you’ll appreciate its uncomplicated design.

![The Design Museum’s website in a browser window with a smaller window floating above it, displaying a form to save this link with a title and supporting content.](bookmarklet.png "Creating a bookmark post with Indiekit’s bookmarklet.")
{.u-align-bleed}

## Born of frustration

The early frustrations I encountered inform the principles behind this project.

The IndieWeb community advocates [eating what you cook][20], which means building your own software to meet your precise needs. Fine in theory, and necessary during the movement’s earliest days when different ideas and protocols needed to be battle tested. Yet if you can’t code, it’s difficult to participate.

Services like [Micro.blog][21] are helpful as they make joining the IndieWeb much easier. Yet they achieve this by taking control of certain aspects and inevitably end up centralising things (that applications like MarsEdit and Ulysses support posting to Micro.blog but not sites using Micropub is a little concerning). As ever, there are trade offs.

Indiekit’s approach is to provide an easy to use server that can be hosted anywhere, one that is:

* **Accessible:** the web is for everyone, and so is Indiekit. I have considered accessibility in all its guises; colour contrast, keyboard navigation, adaptive layout, localisation and have used clear, understandable language throughout. The same applies to the codebase: I’m not using TypeScript as this adds complexity for anyone wanting to contribute.

* **Adaptable:** no two people are the same, and neither are personal websites. Indiekit makes no assumptions about the structure of your website, and offers as much customisation as possible.

* **Reliable:** all code is documented and thoroughly tested (over 600 integration and unit tests provide ~95% code coverage) and the web application is built using good ol’ fashioned progressive enhancement.

* **Extensible:** there are only so many integrations I can – and want to – build, but this shouldn’t prevent others from doing so. A [plug-in API][4] allows developers to add support for more social networks, content stores and static site generators. Adding new features is possible too, as endpoint plug-ins are Express middleware.

No software is un-opinionated. Indiekit is firmly of the opinion that everyone should be able to enjoy the full benefits of independent web publishing.

## Where next?

So that’s the background and my overriding goal. I hope I’m close to achieving it.

Still, installing Indiekit on a web server can be a bit painful. During the beta period, I’ll be writing tutorials for setting up Indiekit with different hosts, and encouraging feedback on the [documentation][22]. However, if you’ve built a static website, you should have enough expertise to set up an Indiekit server.

Beyond the initial 1.0 release, I’d like to support creating and editing additional post types. There’s also a bit of work to be done so that anyone can sign into any Indiekit server and use it as a publishing interface for their own website[^2] (if that makes sense – it’s a clever yet confusing feature of Micropub).

Then there’s Webmention, the IndieWeb protocol that lets you surface replies, likes and reposts of your content posted on other websites. I’ve been reluctant to work on this until support for Micropub was complete, but its an itch I’ve long been wanting to scratch.

Finally, while I’ve designed Indiekit with static site generators in mind, I’d like to investigate integrating with database-driven content management systems like [WordPress][23] and other publishing tools like [Kirby][24] (sounds like a good idea for an IndieWebCamp hack project).

There’s [a rough roadmap][7] if you’re interested. I’m hoping some features may come sooner if I’m able to build a community around Indiekit and have others contribute to the project. I’d also love to work with a content designer to improve the messaging around the project, review the documentation and refine the microcopy within the application.

To that end, I’ve set up [a sponsorship programme to fund Indiekit’s continued development][25]. I have no idea if people will be interested in this, but I know I’d have happily contributed to such a thing 5 years ago – if only in begrudging appreciation that it would mean not needing to become a programmer.

* [Get started with Indiekit](https://getindiekit.com/get-started)
* [Learn how Indiekit works](https://getindiekit.com/introduction)
* [Follow Indiekit on GitHub](http://github.com/getindiekit/indiekit)

[^1]: Look, I added Twitter support 2 years ago, but that appears to have been a wasted effort, thanks to Space Karen.

[^2]: Indiekit uses the Micropub API internally rather than direct communication with the database; it’s the endpoint discovery bit that’s missing.

*[API]: Application Programming Interface
*[W3C]: World Wide Web Consortium

[1]: https://getindiekit.com
[2]: https://indieweb.org
[3]: https://getindiekit.com/clients
[4]: https://getindiekit.com/plugins/api
[5]: https://getindiekit.com/configuration/localisation
[6]: https://github.com/getindiekit/indiekit/releases/tag/v0.0.1
[7]: https://github.com/getindiekit/indiekit/milestones
[8]: https://adactio.com
[9]: https://indieweb.org/2013/UK
[10]: https://indieweb.org/2015/Brighton
[11]: https://aaronparecki.com
[12]: https://barryfrost.com
[13]: https://github.com/voxpelli/webpage-micropub-to-github
[14]: https://github.com/gerwitz/sitewriter
[15]: https://paulrobertlloyd.com/articles/2018/05/javascript/
[16]: https://paulrobertlloyd.com/articles/2019/02/weeknotes_5/
[17]: https://prototype-kit.service.gov.uk
[18]: https://paulrhayes.com
[19]: https://aroncarroll.com/
[20]: https://indieweb.org/eat_what_you_cook
[21]: https://micro.blog
[22]: https://getindiekit.com/get-started
[23]: https://wordpress.org
[24]: https://getkirby.com
[25]: https://github.com/sponsors/getindiekit
