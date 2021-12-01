---
title: A Peek Behind the Curtain
date: 2018-05-14T16:57:47+01:00
location:
  locality: Brighton
  country-name: England
summary: GDPR can’t come soon enough.
category:
  - Regulation
  - Web
---
On a recent project, I was asked to integrate [HubSpot][1] into my client’s redesigned site. Given the impending introduction of GDPR ([General Data Protection Regulation][2]), I would also need to review the permissions required before this and other marketing and analytics scripts could set any cookies.

Turns out, I’ve been quite naive as to what some of these tools do. Logging into HubSpot to get the account credentials required for the script, I saw my name listed in the users who had signed up to the newsletter on the current site. Moving into the detail view, I saw a rundown of the various pages I had visited and at what time. Tracking is typically anonymised — although this can be [ineffective when combined with other datasets][3] — so I was surprised that by signing up to a newsletter, I had inadvertently given the site permission to track my activity, and to such an extent.

Beyond providing the illusion of being better informed about customers, I fail to see how having this information is actually useful. I’m sure marketing managers are accustomed to the amount of data made available to them, but coming to this afresh, I was horrified and ashamed to be associated with an industry building services like this.

Thankfully, my annoyance was tempered by the fact that I would need to implement a consent dialogue to ensure the new site wouldn’t fall foul of incoming regulation. This meant informing users of the different services being used, and giving them the option to opt-in or decline.

GDPR can’t come soon enough.

[1]: https://www.hubspot.com
[2]: https://en.wikipedia.org/wiki/General_Data_Protection_Regulation
[3]: https://www.wired.com/2007/12/why-anonymous-data-sometimes-isnt

*[GDPR]: General Data Protection Regulation
