---
title: Reflecting on Hack The Planet
date: 2010-03-29T09:59:52Z
canonical:
  url: https://agreenfocus.tumblr.com/post/481315894
summary: A follow-up on Hack The Planet, our hack day held in Birmingham last month.
photo:
  url: /articles/2010/03/hack_the_planet_report/image.jpg
  alt: The two teams at work.
category:
  - Sustainability
  - Web
  - Projects
tags:
  - source:a_green_focus
screenshots:
  team-a:
  - url: team_a_event_page.png
    alt: Event page.
  - url: team_a_profile_page.png
    alt: Profile page.
  team-b:
  - url: team_b_home_page.png
    alt: Home page.
  - url: team_b_rating_schwag.png
    alt: A form within the flow for rating schwag.
---
![](/image.jpg 'The two teams at work.')
{.align-bleed}

As promised, here is a follow-up on [Hack The Planet](/2010/02/hack_the_planet), our hack day held in Birmingham last month.

First of all, a big thanks to everyone who turned out. In the end, around 15 people joined us at One Black Bear’s studio in Digbeth. We began the day discussing the various ways in which the work we do can impact the environment. The two big issues we settled on were conference going, and the simple side-effects of publishing content on the web: for example the large server farms required to keep our favourite sites available, or the CPU required when running processor-intensive sites that use Flash.

After a close vote between these two issues, we decided to work on a project that would try to solve the issue of web conferences; both the energy required to produce the amount of schwag that is given out, and also that of travelling long distances to attend them. Given that we had quite a large group, we decided to create two teams:

* **Team A** worked on reducing travel, encouraging lift-sharing and attendance at more local conferences
* **Team B** worked on encouraging conference organisers and attendees to give up the schwag habit.

## Team A

Team A decided to build a social network (initially tied to a user’s Twitter account) in which people could sign up, and list the conferences they’ve attended or plan to attend.

Depending on a number of factors (distance travelled, mode of transport, and ‘greenness’ of the event—which in turn would be largely based on who is attending the conference from how far away and by what methods) would result in a user aquiring a certain number of points. So for example if you were to travel from Eastbourne by train to reach the dConstruct conference in Brighton (40 miles) you would get 100 points, yet if you flew to Austin (6000 miles) then you may only earn 2 points.

{% render 'screenshots' with screenshots.team-a
  caption: 'Event and profile pages.'
  imagePreset: 'supporting'
%}

Problem with this model: what was the incentive to join this network and share this data, and what do points actually mean? Matt pushed for the service to suggest conferences nearby as one way to solve this problem, but there would certainly need more engaging features for people to use this service. One nice feature of this tool, however, would be that it could tell you if any friends are attending the same conferences you are, and as such encourage lift sharing.

Team A was: [Paul Lloyd][1], [Anthony Williams][2], [Trevor Morris][3], [Matt Machell][4], [Richard Cunningham][5], [Simon Banyard][6], [Phil Pickering][7].

## Team B

Team B created a tool that was initially planned for use by conference organisers and sponsors to understand the impact of proposed swag bags for upcoming conferences. By logging the contents of the schwag bag into the system, it would calculate a grade (loosely adapted from the energy A-G scale). Organisers could then find alternative products that would help lower the overall environmental impact of the bag.

{% render 'screenshots' with screenshots.team-b
  caption: 'Home page and rating schwag.'
  imagePreset: 'supporting'
%}

However, as a consequence of working through these ideas, they quickly spotted other applications. For example, it could be used to rate existing bags, and data could be collected as to how green any given conference had been. For example, bags from SXSW could be rated for 2007, 2008 and 2009 to give metrics on the improvement or degradation in the sustainability of the bag year-on-year.

The tool could also allow users to save a bag to a browsable public gallery, and to upload an image of the contents to accompany the ‘certificate’ and awarded grade, all of which could be accessed at a permanent URL.

Team B was: [Andy Higgs][8], [Owen Gregory][9], David Archer, Rob White, [Nick Harewood][10].

## Conclusion

Whilst there is some interest in completing these projects, even if this were not to happen, the day could still be seen as a success in so much as it got a group of web developers and designers together to think about these issues. There was a lot to learn about how best to organise such an event, and hopefully, it is something we’ll be doing again soon.

[1]: https://paulrobertlloyd.com
[2]: http://abitgone.co.uk
[3]: https://trovster.com
[4]: https://eclecticdreams.com
[5]: https://richardcunningham.co.uk
[6]: https://twitter.com/simonbanyard
[7]: https://twitter.com/phil_interact
[8]: https://justbeyondthebridge.co.uk
[9]: https://fullcreammilk.co.uk
[10]: http://www.space-scape.com
