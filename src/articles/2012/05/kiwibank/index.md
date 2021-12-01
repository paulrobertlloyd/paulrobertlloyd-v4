---
title: 'Kiwibank: Standing Up for Something New'
date: 2012-05-22T01:20:53+01:00
location:
  locality: Brighton
  country-name: England
summary: Banks aren’t the most likeable organisations, but I’m developing a soft spot for Kiwibank, a New Zealand-based bank competing against larger Australian-based rivals. Their latest advertising campaign suggests they’re willing to stand up for something new “and even a bit crazy”, and in the world of banking, a responsive website is just that.
image:
  url: /articles/2012/05/kiwibank/image.jpg
  alt: The new Kiwibank homepage viewed on different devices.
category:
  - Web
  - Responsive design
  - Interviews
---
Banks aren’t the most likeable organisations, but I’m developing a soft spot for [Kiwibank][1], a New Zealand-based bank competing against larger Australian-based rivals. Their [latest advertising campaign][2] suggests they’re willing to stand up for something new “and even a bit crazy”, and in the world of banking, a responsive website is just that. With mobile traffic pushing past 10%, they asked [Springload][3] to help them become device agnostic.

![](image.jpg 'The new Kiwibank homepage viewed on different devices.')

Bron Thomson, Springload’s founder and Managing Director told me how they created Kiwibank’s new responsive website.

***

**Paul Lloyd:** Why did you take the responsive approach?

**Bron Thomson:** Kiwibank has this fantastic ambition to be a digital leader among New Zealand companies — not just banks. There’s a roadmap of digital initiatives that are pretty revolutionary, and with mobile traffic pushing past 10% of Kiwibank’s total traffic (and set to overtake desktop traffic in the coming years), the decision was made to go device agnostic. The fixed-width desktop paradigm has run its useful course — last year, we noticed that 20 people tried to join Kiwibank from their Playstation 3.

***

**PL:** Only the home page is responsive currently. What challenges did this create, and how are you managing users expectations during the transition?

**BT:** Working on a content-rich site of this scale is kind of like painting a boat — you’re never really finished. With that in mind, Kiwibank’s social media team have been really open with customers about the changes we’re making (and why). We started going responsive last year on some key inside pages — the [Join][4] page, [First Home Buyers Guide][5], and the [Ways to Bank][6] section.

In the past we’ve run beta versions of the Kiwibank homepage to showcase new ideas, however the latest refresh was deployed virtually overnight to co-incide with a new brand launch involving a dozen or so other agencies.

There’s always an understandable reaction when you change one of New Zealand’s most loved brands, we’re listening to user feedback and continually working on making the experience better. Kiwibank’s challenger-brand ethos puts us in good stead to keep pushing the web experience further.

***

**PL:** Is this the first responsive site Springload have worked on?

**BT:** We’ve tested a range of approaches over the last couple of years: Specific m-dot sites in jQuery mobile ([festival.co.nz][7]), PhoneGap wrapped web apps (the [Kiwibank mobile banking app][8] and some internal tools), and we’re delving into native iOS as well. These are all valid, but quickly get quite complex. You end up with two or three different sets of device-specific logic, which is a maintenance nightmare. We’re pretty convinced that a responsive approach gives the widest number of people a great web experience regardless of how they access it, and simplifies content management for the site owner.

Another responsive project we’ve finished recently is [klim.co.nz][9] for type guru Kris Sowersby.

***

**PL:** Was there anything you learnt whilst designing/building this site?

**BT:** Content is really, really important. We’ve banned Lorem Ipsum in the office, and we try not to have a typical client/agency relationship — the Kiwibank copywriting team come and work at Springload HQ a couple of days a week. They also enjoy our beer.

We built a number of our own tools to make going responsive easier for ourselves, check out [Responsinator][10]. We’ll be sharing some of the other tools and plugins on our [blog][11], stay tuned to [@springloadnz][12].

It’s worth noting that there are no real magic bullets. We use a combination of server-side device detection, media queries and JS capability detection to decide what gets rendered to the page. We try and avoid polyfilling (preferring progressive enhancement where possible) and we’re using CSS transitions rather than jQuery to handle animation.

***

**PL:** How has the design process changed to encompass a responsive workflow?

**BT:** One of the key changes has been to start the whole team (designers, developers, front-end devs) on the project at once. Even before the designs were finished, we needed a slick front-end framework, and the back end guys had to wrestle the IIS/ASP classic server into submission too. Having the whole team locked-down on the project made the decision making process much snappier and enabled us to solve problems without calling too many meetings.

Photoshop is getting opened a little less — we mock up key navigation assets and a refined visual of a desktop and mobile template. From there, we’re learning the most by getting into the browser, and refining specific elements as we go.

We have to test more devices, more often. For instance, the stylesheet that’s rendering 3D, hardware-accelerated transitions on an iPhone also has to fix the box model in IE7. We made the move to Sass to help our front-end developers organise some of this complexity, and it’s working a treat.

***

*I review Kiwibank’s new responsive design alongside [dConstruct 2012][13] and [Zurb][14] in the July issue of [.net Magazine][15].*

[1]: https://www.kiwibank.co.nz/
[2]: https://www.youtube.com/watch?v=UyaakUyciGg
[3]: http://www.springload.co.nz/
[4]: https://www.kiwibank.co.nz/join/
[5]: https://www.kiwibank.co.nz/personal-banking/home-loans/first-home-buyers/
[6]: https://www.kiwibank.co.nz/personal-banking/ways-to-bank/
[7]: http://festival.co.nz/
[8]: http://itunes.apple.com/nz/app/kiwibank-mobile-banking/id504216653
[9]: http://klim.co.nz/
[10]: http://www.responsinator.com/
[11]: http://www.springload.co.nz/love-the-web/
[12]: https://twitter.com/springloadnz
[13]: http://2012.dconstruct.org/
[14]: http://zurb.com/
[15]: http://www.netmagazine.com/shop/magazines/july-2012-229

*[PL]: Paul Lloyd
*[BT]: Bron Thomson
*[3D]: three dimensional
*[ASP]: Active Server Pages
*[CSS]: Cascading Style Sheets
*[HQ]: headquarters
*[IIS]: Internet Information Services
*[JS]: JavaScript
