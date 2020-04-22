---
title: Entry Archives, Grouped by Month in Movable Type
date: 2009-02-04T20:27:23Z
location:
  locality: San Francisco
  country-name: United States
summary: I have been using Movable Type for a number of years, yet the template code required to present an archived list of entries, grouped by month has always evaded me.
category:
- Web
discussion: closed
---
I have been using Movable Type for a number of years, yet the template code required to present an archived list of entries, grouped by month has always evaded me. On many occassions I searched support forums and wikis looking for a solution the common concencus was that this was impossible to achieve without plug-ins and [complicated logic][1].

However during the recent redesign of this site, another desparate search finally returned the answer. I’ve misplaced the link to the original solution, so as much for my benefit as maybe yours, here is the humble code:

```xml
<h1>Archive</h1>
<mt:ArchiveList archive_type="Monthly">
  <mt:Entries>
    <mt:EntriesHeader>
      <h2><a href="<mt:ArchiveLink/>"><mt:EntryDate format="%B %Y"$/></a></h2>
      <ul>
      </mt:EntriesHeader>
      <li><a href="<mt:EntryPermalink/>"><mt:EntryDate format="%d"/> - <mt:EntryTitle/></a></li>
      <mt:EntriesFooter>
      </ul>
    </mt:EntriesFooter>
  </mt:Entries>
</mt:ArchiveList>
```

This is the first time I’ve posted a chuck of code to my blog, yet in terms of Movable Type templates, it’s probably the last. Issues like this, as well as the fairly stagnent development of the platform and a dwindling community is no match against competing tools like [WordPress][2] and [ExpressionEngine][3] — I’m pretty sure I will transition to one of these services before the end of the year.

[1]: http://www.movable-type-weblog.com/archive/entry/grouping-a-list-of-entries-by-month.html
[2]: http://wordpress.org
[3]: http://expressionengine.com
