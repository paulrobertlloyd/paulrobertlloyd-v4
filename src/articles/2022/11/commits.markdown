---
title: Learning to Commit
date: 2022-11-27T21:15:00Z
location:
  locality: Brighton
  country_name: England
summary: How I achieve the perfect commit.
category:
  - Git
  - Process
  - Programming
---

Simon recently wrote about [what he considers to be the perfect commit][1]:

> Our job as software engineers generally isn’t to write new software from scratch: we spend the majority of our time adding features and fixing bugs in existing software.
>
> The commit is our principal unit of work. It deserves to be treated thoughtfully and with care.

This is a great post with lots of useful advice, some of which I’ve inadvertently adopted, not least because doing the opposite was [preventing me from making any reasonable progress on Indiekit][2].

Simon’s first recommendation is that each commit should change a single thing. Yet with an eye for detail and consistency, I find it all too easy to include unrelated changes. It’s also tempting when working with a team to think that including unrelated fixes in a commit will mean they get merged quicker. That’s rarely the case.

In reading Simon’s post, it occurred to me that I’ve developed a few strategies to keep my commits focused, so thought I would write them down here.

## Use interactive rebase

I used to find Git terrifying, especially whenever I wanted to make a change to a previous commit. A breakthrough moment came when I was contracting at Snyk, and [Gareth][3] showed me how to use an interactive rebase.

Rather than try to maintain a project’s recent commit history in your head (while also attempting to recount the specific git commands needed and in what order they should be used), an interactive rebase essentially gives you a minimal user interface.

You start by entering Git’s rebase command with the number of previous commits you want to revisit, adding the `-i` flag to toggle interactive mode:

```sh
git rebase HEAD~4 -i
```

This will open a file showing the previous commits, the first word in each line being the command you wish to perform on each (the default being `pick`):

```git
pick 2fc135c7 refactor(frontend): retire typography preset extends
pick 8d02b55e refactor(frontend): retire focus extends
pick 20e032e4 refactor(frontend): remove postcss extends plugin
pick 1ba32473 refactor(frontend): use lightningcss to process css
```

Below this list is a description of all the different commands you can use (`drop`, `reword`, `fixup`, etc.). You can perform these commands on as many different commits as you like and even reorder the commits – though bear in mind any merge conflicts this may cause.

Upon saving this file, you are then walked through each command, committing changes before continuing the rebase.

Interactive rebasing changed my entire relationship with Git, and massively improved the quality of my commits.

## Save screenshots as a reminder

One reason I end up creating large commits is a fear that I might forget to return to fix something later.

Rather than include any unrelated changes in a commit, I now tend to take a screenshot instead.

This might be the design issue I’ve spotted, or the offending code (with enough of the surrounding code for context). If I think more context is needed, I can rename the file, or even add a quick annotation (using [the Markup feature in macOS][4]).

This is usually enough to serve as a reminder of what needs fixing, meaning I can carry on with the original change.

If a screenshot has been lying around for a while, that’s usually an indication that it’s not a quick or easy fix. In this case, I can create a new issue and attach that screenshot to it if needed.

I now have several folders on my desktop for the different projects I’m working on, each containing screenshots like this. They’re like mini to-do lists, and I get the same satisfaction moving a screenshot to the bin as I do crossing off an item from a checklist.

## Write scrappy commits in a branch

My last tip is the same as Simon’s. Sometimes you just need to go hog wild on an idea; after all, nothing crushes creativity like a formal process! Once I’m happy with a feature, I’ll create a WIP branch before reviewing it for any changes that I can pull into a separate commit.

With those changes merged, I’ll then rebase the main branch into this WIP branch. Repeating this process many times over allows this branch to become more focused. Using the interactive rebase, I can then merge, edit or split apart different commits, and tidy up commit messages, leaving me with the *Perfect Commit*.

*[WIP]: work in progress

[1]: https://simonwillison.net/2022/Oct/29/the-perfect-commit/
[2]: /articles/2020/05/indiekit_future/
[3]: https://github.com/gjvis
[4]: https://support.apple.com/en-gb/guide/mac-help/mchl1fd88863/mac
