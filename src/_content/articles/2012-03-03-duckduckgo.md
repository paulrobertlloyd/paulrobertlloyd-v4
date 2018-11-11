---
title: DuckDuckGo
date: 2012-03-03T00:21:20Z
location:
  locality: Brighton
  country-name: United Kingdom
summary: Not a week passes without there being a controversy involving Google. If they're not pilfering a Kenyan business directory, then they're jumping into bed with opponents of net neutrality or subverting default cookie settings. Even if you ignore these concerns, it's hard to deny that their search engine is starting to suffer too. Fortunately, there's an alternative.
tags:
- duckduckgo
- google
---
Not a week passes without there being some controversy involving Google. If they're not [pilfering a Kenyan business directory][1], jumping into bed with [opponents of net neutrality][2] or [subverting default cookie settings][3], then they're [changing their privacy policies][4] to harvest even more information from users.

Even by ignoring these concerns, it's hard to deny that their flagship product is starting to suffer as well. Not only are Google's search results [increasingly adjusted to promote their own products][5] but, by basing results on the accumulated knowledge of each user, they're subjecting us to a [filter bubble][6]. For example, if you're a proponent of a privatised healthcare system, the results you'll get back will increasingly reflect that viewpoint. And along that path lies trouble.

## I want to break free (of your lies)

{% include 'figure' with '/images/2012/03/duckduckgo.svg'
  alt: 'DuckDuckGo logo'
  alignment: 'pull'
%}

Fortunately, there's an alternative. [DuckDuckGo][7] is a new(ish) search engine that's gaining popularity in the same way Google did. I remember telling people during the late nineties "you should try this new search engine called Google... I know, it's a funny name, but it's much faster than Altavista/Yahoo/Excite, and the home page is really simple too".

Today, I'm hearing similar conversations. "You should try this new search engine called DuckDuckGo... Duck-Duck-Go. It's like Google, but it doesn't track you, and the results are more accurate too".

If you're like me, using Google for searching the web has become a deeply ingrained habit. But if you search directly from the browser, it's easy to modify this behaviour; just change your default search provider. Here's how you can do this in the popular browsers:

### Google Chrome

 1. Visit <http://duckduckgo.com/>

 2. Right-click the address bar

 3. Select *Edit Search Engines...*

 4. Find and select DuckDuckGo in the list. If it doesn't appear, enter the following details:

    Name: `DuckDuckGo`

    Keyword: `duckduckgo.com`

    src: `http://duckduckgo.com/?q=%s`

 5. Click *Make default*

### Mozilla Firefox

 1. Visit <http://duckduckgo.com/>

 2. Go to the search box in the upper right of the browser window. Click the down arrow, and select *Add DuckDuckGo*

However, changing the default provider isn't enough as search terms entered into the address bar will still use Google. Change this by completing the following steps:

 1. Enter `about:config` into the address bar

 2. If you get a warning, click *I'll be careful, I promise*

 3. Type `Keyword.URL` into the filter field

 4. Double-click the value column for this item and enter `http://duckduckgo.com/?q=`

### Internet Explorer

 1. Visit: <http://www.iegallery.com/en/addons/detail.aspx?id=10202>

 2. Click *Add to Internet Explorer*

 3. Ensure *Make this my default search provider* is checked, and click *Add*

### Opera

 1. Visit <http://duckduckgo.com/>

 2. Right-click DuckDuckGo's search box in the middle of the page, and select *Create Search*

 3. Enter `d` for Keyword

 4. Check *Use as default search engine*

### Apple Safari

Changing your default search provider in Safari is a little more difficult. Although you can choose from three presets (Google, Yahoo! and Bing), you can't add new providers. Hopefully this will change in Mountain Lion, but in the meantime, the best way to use DuckDuckGo is to install [Safari OmniBar][8]. Not only does this allow you to change the default search provider, but it also combines the address and search fields into one input, like the one seen in Chrome.

 1. Select the current text in your address bar

 2. Right click the text and select *Edit Omnibar Search Providers...*

 3. Add another search provider by clicking on the plus button on the lower left hand corner

 4. Enter the following details:

    Search Provider: `DuckDuckGo`

    Keyword: `d` (or pick another letter or word of your choosing)

    src: `http://duckduckgo.com/?q={searchTerms}`

 5. Make this the default provider by clicking the *Set as Default* button whilst DuckDuckGo is selected

## Removing the dependance

The only downside to using DuckDuckGo is that it [doesn't let you search images][9]. Fortunately you can use a shortcuts to search different sites via DuckDuckGo. If you want to search for images of Brighton Pier, typing **!i Brighton Pier** will show results from Google Images. Want to see results from Wikipedia? Just type **!wiki Brighton Pier**.

These and [other commands][10] make DuckDuckGo a really powerful tool for searching different sites on the web, directly from your browser.

As it stands, I only have one remaining Google service I rely on; Google Reader. Thankfully a [forthcoming update to Reeder][11] will allow syncing with Shaun Inman's [Fever][12] self-hosted aggregator. I show little loyalty to any product or corporation, and any I had for Google has been completely eroded. The day I delete my account is just months away. And I can't wait.

[1]: http://arstechnica.com/tech-policy/news/2012/01/google-caught-pilfering-kenyan-business-directory-in-sting-operation.ars
[2]: http://gizmodo.com/5605310/google-just-killed-net-neutrality
[3]: http://online.wsj.com/article/SB10001424052970204880404577225380456599176.html
[4]: http://googleblog.blogspot.com/2012/01/updating-our-privacy-policies-and-terms.html
[5]: http://www.focusontheuser.org/examples.php
[6]: http://dontbubble.us/
[7]: http://duckduckgo.com/
[8]: http://hackemist.com/SafariOmnibar/
[9]: http://help.duckduckgo.com/customer/portal/articles/215615-images
[10]: http://duckduckgo.com/bang.html
[11]: https://twitter.com/reederapp/status/164761840201641985
[12]: http://feedafever.com/

*[URL]: Uniform Resouce Locator
