---
title: 'Weeknotes #5'
date: 2019-02-10T23:20:00Z
location:
  locality: Brighton
  country-name: England
summary: This week has been a rollercoaster of emotions but ended with me feeling hopeful about my job prospects and position within the industry.
collection: weeknotes
---
This week has been a rollercoaster of emotions, starting with some financial news that knocked me sideways, but ending with me feeling hopeful about my job prospects and position within the industry.

The week began with me [reminding followers][1] that I was still looking for work, with the response more fruitful than my previous attempt at the start of the year. Throughout the week I met with a few different people — as well as friends who’ve been incredibly helpful and supportive — and my overall sense is that I’m close to finding something meaningful to get my teeth stuck into.

On Tuesday I grabbed lunch with [Aron][2] at the Open Market. During our conversation, it became clear that I’d become victim to the dreaded imposter syndrome as he had more faith in my abilities than I did. I’ve written before about my dislike of [people with an undue confidence in their abilities][3], but it’s worth remembering that the opposite is equally as problematic if it means selling yourself short.

On Thursday, I headed to London to chat with some folk who had responded to my call for work (stopping at [Tate Britain][4] to kill time between meetings, and trying Honest’s new [Plant Burger][5] with [Frank][6] at lunchtime). I was reminded that job descriptions are often as much about the skills employers believe are available within the market, as they are about their own requirements. For example, I’d dismissed working for a certain design agency because they were advertising separate design and development roles, and I felt my skills lay somewhere between the two. Thanks to a few shared connections, I ended up chatting with a member of their team who pointed out that the only reason they hadn’t advertised for a generalist role was because few people fit that description. Lesson learnt; always apply for a job, even if you think you don’t fully qualify.

Last week I wrote:

> So far I’ve been drawn towards developer-orientated roles; working with HTML, CSS and JavaScript (in that order) to implement designs and ensure products are accessible and performant. However, it seems such work no longer exists. People talk about full-stack development, but nearly every job I’ve seen containing the words ‘front-end’ has React as a requirement. The gatekeeping is real.

It turns out I was half right. A particular portion of the industry *is* happy to adopt fashionable technologies, moving at speed but often at the cost of accessibility and usability. Typically venture-backed high-growth start-ups, they attract a lot of the attention, are perceived to be in the vanguard and therefore set the trends which other organisations follow.

However, there’s another portion of the industry, primarily but not exclusively within the public sector, where traditional development approaches (progressive enhancement, server-side rendering) remain prevalent, or less likely to be dismissed, at least. Because accessibility isn’t optional when your audience is everyone[^1], these organisations tend to attract those with a pragmatic outlook who like to work more diligently and deliberately. [The great divide][7] exists, and based on conversations had and job descriptions read, it’s incentivised by the underlying business models. Something, something, [pace layers][8].

Besides looking for work, I’ve started to build a [Micropub][9] server with Node.js. Previous attempts saw me hack away at other peoples projects, and doing so has helped me form an opinion about how such software can be architected to enable more mainstream adoption. Recognising the need to improve my programming skills, I’ve decided to start from scratch. So far I’ve built an endpoint that responds to configuration queries using data stored in a local JSON file. But I want to be able to read data from a JSON file located on a remote (GitHub) repo, and that’s proving more of a challenge. This project will be a marathon, not a sprint.

## Digest

Noteworthy articles I’ve read over the last seven days:

* ### [Dear Podcasters…][10]

  Cheri Baker:

  > It’s too early to say how the Spotify-Anchor-Gimlet merger will affect podcasters and fans, but I fear we’ve seen this scenario before. A biggish company decides that they’ll aggregate an immense amount of creative work and monetize it. They’ll offer you tools to make “sharing” easy, and at first the terms of service will be reasonable. But once they’ve eaten a big enough chunk of content, they’ll lock the gates tighter, change the terms of service, and monetize the audience. By that point, customers would feel locked into Spotify, and podcasters would be afraid to leave. It could be Facebook Pages all over again.

* ### [The Women Running for President Are Breaking the Rules of Branding][11]

  Deroy Peraza:

  > After nearly a century of red, white and blue dominance, four mainstream women candidates — Elizabeth Warren, Kamala Harris, Kirsten Gillibrand, and Tulsi Gabbard — have embraced color palettes that break from the established norm.

  It’ll be interesting to see how the successful candidate’s design adapts beyond the primary race, but whoever faces Trump, I suspect adopting a loser visual language, with fewer rules and guidelines, would be more beneficial than conventional wisdom suggests.

[^1]: Thankfully, legislation increasingly means that, regardless of your audience, accessibility needs to be taken seriously should you wish to avoid the lawyers.

[1]: /notes/1549280971
[2]: http://aroncarroll.com
[3]: /2015/07/a_blank_sheet_of_paper
[4]: https://www.tate.org.uk/visit/tate-britain
[5]: https://www.honestburgers.co.uk/food/burgers/plant/
[6]: http://www.tobefrank.co.uk
[7]: https://css-tricks.com/the-great-divide/
[8]: https://en.wikipedia.org/wiki/Shearing_layers
[9]: https://www.w3.org/TR/micropub/
[10]: https://social.cheribaker.com/2019/02/08/dear-podcasters.html
[11]: https://medium.com/@Hyperakt/2a53c95c4e34

*[CSS]: Cascading Style Sheets
*[HTML]: Hypertext Markup Language
*[JSON]: JavaScript Object Notation
