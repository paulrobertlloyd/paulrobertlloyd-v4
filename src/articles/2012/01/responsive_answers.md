---
title: Responsive Answers
date: 2012-01-09T19:48:00Z
location:
  locality: Brighton
  country-name: England
summary: Back in October, Ethan Marcotte asked me some questions about the design of my site. He was writing a round up of his twenty favourite responsive websites for .net Magazine and wanted quotes from each creator. In the spirit of blogging more I thought I’d share my answers here.
category:
  - Web
  - Responsive design
  - Interviews
  - net (magazine)
---
Back in October, [Ethan Marcotte][1] asked me some questions about the design of my site. He was writing a round up of his [twenty favourite responsive websites][2] for .net Magazine and wanted quotes from each creator. In the spirit of [blogging more][3] I thought I’d share my answers here.

***

**Ethan Marcotte:** Why did you choose a responsive approach?

**Paul Lloyd:** My personal site has always been a place to try out new technology and techniques. As a site that is largely text based, I was also keen to take a content first approach.

***

**EM:** Was there one especially tricky challenge that came out of adopting a responsive approach? If so, how did you solve it?

**PL:** I think navigation is often a sticky point in responsive designs, and although my website is small, I was surprised that this still presented a challenge. The breakthrough came when I decided which sections of my site were less important. It turned out that I was already linking to these in the footer, meaning I could exclude them from the main navigation and only show them when there was enough room.

***

**EM:** Did you learn anything from the site’s design you’d apply to future responsive projects?

**PL:** In taking on a responsive project I quickly realised that resizing the browser window doesn’t give you a true feel for how a site will perform in the real world; input methods and bandwidth availability alter the experience as much as any viewport dimension. As I developed the site I field tested it when out and about; reading pages on the train or borrowing other peoples devices. This way I got to see how the site would appear in environments I don’t use myself.

Whilst I tried to take a purely content driven approach, where the layout would adapt based on the constraints provided by the content, pragmatism took hold, and my breakpoints were soon adjusted. I found that I needed to strike a balance between what worked best for the content, and what worked best for different devices. I imagine my breakpoints will evolve as I continue to experience the site on different devices.

I should also fess up; I started with a mostly desktop orientated design! Yet whenever I came across a tricky responsive design issue, I found refactoring my code to assume a linear ‘mobile first’ layout forced me to question the relative importance of every element. The delete key became an important ally.

[1]: https://ethanmarcotte.com/
[2]: http://www.netmagazine.com/features/ethan-marcottes-20-favourite-responsive-sites
[3]: /2012/01/goals_for_2012

*[EM]: Ethan Marcotte
*[PL]: Paul Lloyd
