---
title: An update on IndieKit’s future development
date: 2020-05-22T19:45:00+01:00
canonical:
  url: https://github.com/paulrobertlloyd/indiekit/issues/228
location:
  locality: Brighton
  country-name: United Kingdom
summary: Returning to this project with a fresh perspective and desire to take a more managed approach to its development.
category:
  - IndieKit
  - JavaScript
  - Programming
---
I am not a programmer, and [my journey to feeling comfortable writing JavaScript][1] has been a long and painful. When [I began writing IndieKit last year][2], it was with the expectation that I may not be up to the task. Instead, I found developing software to be a captivating — if not all-consuming — experience. Over the course of a month, I was able to build something with a feature set that not only served my needs but other people’s too, an encouraging if not bewildering situation to find myself in.

With [a couple of small releases][3] under my belt, I began imagining all the other features I could add. I’m particularly interested in making the IndieWeb accessible to a broader audience; who might be able to own their own content if IndieKit allowed them to change settings in a web interface rather than edit environment variables, for example? As I learnt more about developing with Node, I also started to think about how I should structure the project; maybe I could make it more modular with a greater separation of concerns. Maybe I could make it extensible too!

The result of this eagerness was a feature branch that grew in size and complexity and became weighed down by interdependencies. The project became unmanageable and it was no longer fun to work on. I needed to step away for a while.

* * *

As I return to this project, I do so not only with a fresh perspective, but a desire to take a more managed approach to its development. A lot of the features I previously developed can probably still be used or adapted, but first I need to ensure the foundational architecture is solid before I start adding to it. That’s what I’ve started doing this week.

In the meantime, I should make my intentions regarding IndieKit clear. This is a personal project, developed in my own time, at my own pace and primarily for my own use. There should be no expectation of any support. Bug reports are welcome, but development is focused on the next version, v0.1. It’s [unlikely there will be an upgrade path from v0.0.2 to v0.1][4], and if there is, it won’t be by design.

Lastly, a huge thank-you to everyone who has installed IndieKit, forked the repo, filled issues or made feature requests. I look forward to sharing the next version of IndieKit with you all soon.

[1]: https://paulrobertlloyd.com/2018/05/javascript/
[2]: /2019/02/weeknotes_7/
[3]: https://github.com/paulrobertlloyd/indiekit/releases
[4]: https://github.com/paulrobertlloyd/indiekit/issues/117
