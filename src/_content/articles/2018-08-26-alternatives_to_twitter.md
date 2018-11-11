---
title: Alternatives to Twitter
date: 2018-08-26T13:25:00+01:00
location:
  locality: Redditch
  country-name: United Kingdom
summary: As people look to replace Twitter as their social network of choice, Mastadon and Micro.blog have emerged as early contenders.
tags:
- web
- indieweb
- social_media
---
Twitter's wayward and misguided leadership, with its overt tolerance of hate speech and disrespect for third-party developers, may have brought the service's popularity to its tipping point. Some users have decided to [leave the network][1], while others like [Susan][2] are looking for alternatives:

> Last week it felt like the dam broke and people were finally well and truly fed up with Twitter and were going to look for an alternative. In essence people were taking their community and hitting the road. And over the past several weeks I've been dipping my toes into some other forms of online community to see what would work for me.

She's been [experimenting with Micro.blog and Mastodon][3], and since I have thoughts on both, her post has prompted me to share a few of them here.

## Mastodon

Of the two, [Mastodon][4] is the most similar to Twitter which undoubtedly contributes to its appeal. Where this service differs is that it's not a single social network, but a service built upon a suite of standard protocols, allowing thousands of separately hosted networks (or 'instances') to exchange information with each other. People are then encouraged to choose an instance with the moderation and conduct rules for which they feel most comfortable.

I first came across Mastodon in late 2016, during another period of popular dissatisfaction with Twitter. It's interesting to note how the service has developed over the intervening two years, but from the very start what struck me was the quality of its design, almost unheard of for open source projects. That said, a slick interface can hide a multitude of sins.

Like [App.net][5] before it, people have heaped hope and idealism upon this project, seemingly with a belief that it will cure the ills of its predecessor. While it brings [new ideas to the table][6] (interoperability, content warnings, per-post privacy settings), it does so while replicating many of Twitter's existing paradigms (follower counts, ~~retweeting~~ boosting, hashtags), features which arguably led to that network becoming the cesspit people now wish to escape from. I fear they're in for a shock should Mastodon ever gain mainstream adoption.

There are also questions about its security model, many of which are the result of its federated nature. As [Sarah Jamie Lewis noted][7]:

> The model of moving users from a large centralized service run by a known actor, to multiple smaller centralized services run by unknown actors is not going to end well.

I currently have an account on the [mastodon.social][8] instance, but I'm taking a wait-and-see approach, although I may start syndicating posts from this site to that profile at some point. Most of the conversation on there has so far been predictably meta (people on Mastadon talking about Mastadon), which is a discussion I can happily do without.

## Micro.blog

Experimenting with [Micro.blog][9], Susan has found it lacks the interaction afforded by other social networks:

> I've no idea who's following me, so I can't follow them back if I want to. I have no idea if someone has faved something I've said. I don't do it for the faves and follows, but those indicators are how I know I'm heard, how I know people are on the other side, they are what make a community. And I find I miss not having them on this service.

This is a common response from those joining Micro.blog. While understandable given the conventions we've become used to, what some see as bugs, I tend to regard as features. When all the talk is about building services that respect users attention and give them greater agency over their content, Micro.blog is like drinking a glass of ice-cold water in hell.

I really appreciate the services slow and thoughtful development and attempts to learn lessons from how other social networks operate. Take [for example follower counts][10]. Since the service privileges content over personalities, visiting a profile will show you a list of members a person is following *that you aren't following already*. Rather than favourite a post, members are encouraged to engage in conversation instead. Such an approach is only possible when attempting to build a sustainable business rather than one needing to please external investors.

Like Mastadon, there are of course compromises. Micro.blog is very much a one-man show, and its design reflects the tastes of its creator, Manton Reece. There has been a notable bias toward the Apple ecosystem (there are no first-party native clients for Android or Windows), while its development has been limited to Manton's knowledge and capabilities; accessibility and front-end performance two areas in which the service would do well to follow best practice.

The caveat is that I can publish content here on my own site, and simply syndicate it to that community (and any others should they appear). That's not true for my replies -- yet -- but being built upon IndieWeb standards means it's not impossible, either.

It's early days for both services, but it's refreshing to have different options available beyond the current duopoly.

* * *

Susan concludes:

>  I'm looking for community; the good kind, the kind with no assholes, the kind where people support each other and you can vent and rage and celebrate. I'm not sure it exists anywhere, but I'm trying things out, so we'll see. I'm also coming to terms with the fact that this may only happen in private spaces, because there is just too much ugh in the public spaces now.

I reached the same conclusion several years ago. I don't think it's a coincidence that semi-private Slack communities have become commonplace (however ill-suited the product is to provide this facility). Was encouraging people to make their content public by default social media's original sin? As you only ever get the community you design for, perhaps it's no surprise that Twitter's appeal should falter having become month piece for the world's premier narcissist. In looking to develop the next generation of social networks, we should avoid making the same mistakes again.

[1]: https://a.wholelottanothing.org/2018/08/08/im-done-with-twitter/
[2]: https://susanjeanrobertson.com
[3]: https://susanjeanrobertson.com/writing/social-media-change/
[4]: https://joinmastodon.org
[5]: https://en.wikipedia.org/wiki/App.net
[6]: https://blog.joinmastodon.org/2018/07/cage-the-mastodon/
[7]: https://mobile.twitter.com/SarahJamieLewis/status/1030569720527765504
[8]: https://mastodon.social/@paulrobertlloyd
[9]: https://micro.blog
[10]: https://www.manton.org/2018/07/12/following-users-ui.html
